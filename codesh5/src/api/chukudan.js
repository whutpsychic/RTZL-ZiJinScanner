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

export function checkBarcode(barcode) {
  return request({
    url: `${baseUrl.api_base_url}/pick/pickBill/v1/checkBarcode`,
    method: 'post',
    data: {
      barcode,
    },
  })
}

//检查条码是否符合规范
export function checkBarcodeIfqualified(barcode) {
  const standard = new RegExp(
    /^245010[1-3][0-9]{2}(0[1-9]|1[0-2])((0[1-9])|((1|2)[0-9])|30|31)[0-9]{12}$/
  )
  const bool = standard.test(barcode) && barcode.length === 25
  return bool
}

//拣配确认
export function scanConfirm(data) {
  return request({
    url: `${baseUrl.api_base_url}/pick/pickBill/v1/scanConfirm`,
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

//根据车牌号查询车辆进厂过磅信息
export function queryVehicleByPlateNo(plateNo) {
  return request({
    url: `${baseUrl.api_base_url}/vehicleprebook/weightData/v1/queryVehicleByPlateNo`,
    method: 'post',
    data: { plateNo: plateNo },
  })
}
