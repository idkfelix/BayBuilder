import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private'
import { createClient } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { error } from '@sveltejs/kit';
import { init } from '@paralleldrive/cuid2';

const kv = createClient({url: KV_REST_API_URL, token: KV_REST_API_TOKEN})
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "10s"),
});

export const load = async ({ params }) => {
  if(!params.id){return {}}
  const config = await kv.get(`config:${params.id}`)
	return {config, linked:true};
}

export const actions = {
  default: async ({request, getClientAddress}) => {
    const ip = getClientAddress();
    const rateLimitAttempt = await ratelimit.limit(ip);
    if(!rateLimitAttempt.success) {
      error(429, {message: 'Too many requests'})
    }

    const data = await request.formData()
    const title = data.get('title')
    const height = data.get('height')
    const pieces = data.get('pieces')
    const id = init({length: 6})()

    if(pieces.length > 2500){error(413, {message: 'Content too large'})}

    const res = await kv.set(`config:${id}`, {title, height, pieces})
    return {success: res ? true:false, id}
  }
};