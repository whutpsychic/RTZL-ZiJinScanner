import request from '@/utils/request'
export const login = (data) => {
  //   return request({
  //     method: 'post',
  //     url: '/user/login',
  //     data,
  //   })

  return new Promise(function (resolve, reject) {
    resolve({
      code: 1,
    })
  })
}
