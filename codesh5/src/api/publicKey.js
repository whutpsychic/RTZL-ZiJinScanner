import request from '@/utils/request'

export function getPublicKey() {
  return request({
    url: `/base/tools/v1/getPublicKey`,
    method: 'get',
  })
}
