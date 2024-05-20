import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private'
import { createClient } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { error } from '@sveltejs/kit';

const kv = createClient({url: KV_REST_API_URL, token: KV_REST_API_TOKEN})
const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(5, "15 s"),
});

export const load = async ({ params }) => {
  if(!params.id){return {}}
  const pieces = await kv.get(`pieces:${params.id}`)
	return {pieces};
}

export const actions = {
  default: async ({request, getClientAddress}) => {
    const ip = getClientAddress();
    const rateLimitAttempt = await ratelimit.limit(ip);
    if (!rateLimitAttempt.success) {
      error(429, {message: 'Too many requests'})
    }

    const data = await request.formData()
    const pieces = data.get('pieces')
    const id = crypto.randomUUID()

    const res = await kv.set(`pieces:${id}`, pieces)
    return {success: res ? true:false, id}
  }
};