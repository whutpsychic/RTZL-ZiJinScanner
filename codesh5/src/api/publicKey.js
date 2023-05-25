import { request, baseUrl } from '@/utils/request'

export function getPublicKey() {
  return request({
    url: `${baseUrl.auth_base_url}/base/tools/v1/getPublicKey`,
    method: 'get',
  })
}
