import { request, baseUrl } from '@/utils/request'

//查询出库单
export function chukudanQuery(data, pageNum) {
  data.pageSize = 10
  data.pageNum = pageNum
  return request({
    url: `${baseUrl.api_base_url}/deliveryPlan/v1/queryDeliveryPlan`,
    method: 'post',
    data: data,
  })

  // return new Promise(function (resolve, reject) {
  //   resolve({
  //     code: 1,
  //   })
  // })
}

//获取车辆信息列表
export function cheliangQuery(data, pageNum) {
  data.pageSize = 999
  data.pageNum = pageNum
  return request({
    url: `${baseUrl.api_base_url}/vehicleprebook/weightData/v1/queryVehicle`,
    method: 'post',
    data: data,
  })
}

//获取条形码
export function getBarCode(data) {
  return request({
    url: `${baseUrl.api_base_url}/pick/yjtOffline/v1/queryByBatchNoAndCode`,
    method: 'post',
    data: data,
  })
}

//获取库区列表
export function getWarehouse() {
  const quertFilter = {
    pageBean: {
      page: 1,
      pageSize: 999,
      showTotal: true,
    },
  }

  return request({
    url: `${baseUrl.data_base_url}/warehouse/v1/list`,
    method: 'post',
    data: quertFilter,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
