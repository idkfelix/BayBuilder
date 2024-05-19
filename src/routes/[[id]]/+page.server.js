import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private'
import { createClient } from "@vercel/kv";

export const load = async ({ params }) => {
  if(!params.id){
    return {}
  }
  const kv = createClient({url: KV_REST_API_URL, token: KV_REST_API_TOKEN})
  const pieces = await kv.get(`pieces:${params.id}`)
	return {pieces};
}

export const actions = {
  default: async ({request}) => {
    const data = await request.formData()
    const pieces = data.get('pieces')
    const id = crypto.randomUUID()

    const kv = createClient({url: KV_REST_API_URL, token: KV_REST_API_TOKEN})
    const res = await kv.set(`pieces:${id}`, pieces)
    return {success: res ? true:false, id}
  }
};