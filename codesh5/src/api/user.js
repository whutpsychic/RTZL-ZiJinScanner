import { request, baseUrl } from '@/utils/request'

import { encryptedData } from '@/utils/encrypt'

export async function login(data) {
  const params = { ...data }
  const { password } = params
  params['password'] = await encryptedData(password)

  return request({
    url: `${baseUrl.auth_base_url}/auth?tenantId=${data.tenantId || '-1'}`,
    method: 'post',
    data: params,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  // return new Promise(function (resolve, reject) {
  //   resolve({
  //     code: 1,
  //   })
  // })
}
