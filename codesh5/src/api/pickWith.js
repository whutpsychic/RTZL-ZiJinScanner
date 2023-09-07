import {request, baseUrl} from '@/utils/request'


/***
 * 查询发货计划（拣配app）
 *
 */

export function getPlanMain(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=getPlanMain`,
        method: 'get',
        params: data,
    })
}

/***
 * 获取过皮车辆信息（拣配app）
 *
 */
export function getTruckNo(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=getTruckNo`,
        method: 'get',
        params: data,
    })
}


/***
 * 判断当前条码信息是否符合要求（拣配app）
 *
 */
export function checkBatchNo(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=checkBatchNo`,
        method: 'get',
        params: data,
    })
}

/***
 * 查询条码信息（拣配app）
 *
 */
export function getBarcode(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=getBarcode`,
        method: 'get',
        params: data,
    })
}


