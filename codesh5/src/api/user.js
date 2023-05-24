import request from '@/utils/request'

import { encryptedData } from '@/utils/encrypt'

export async function login(data) {
  // const params = { ...data }
  // const { password } = params
  // params['password'] = await encryptedData(password)

  // return request({
  //   url: `/auth?tenantId=${data.tenantId || '-1'}`,
  //   method: 'post',
  //   data: params,
  // })

  return new Promise(function (resolve, reject) {
    resolve({
      code: 1,
    })
  })
}
