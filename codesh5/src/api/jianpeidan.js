import { request, baseUrl } from '@/utils/request'

export function jianpeidanQuery(data, pageNum) {
  data.pageSize = 10
  data.pageNum = pageNum
  return request({
    url: `${baseUrl.api_base_url}/pick/pickBill/v1/queryPickData`,
    method: 'post',
    data: data,
  })
}

export function jianpeidanDetail(data, pageNum) {
  data.pageSize = 10
  data.pageNum = pageNum
  return request({
    url: `${baseUrl.api_base_url}/pick/pickBill/v1/queryPickDataDetail`,
    method: 'post',
    data: data,
  })
}

export function jianpeidanDelete(id) {
  return request({
    url: `${baseUrl.api_base_url}/pick/pickBill/v1/${id}`,
    method: 'delete',
  })
}
