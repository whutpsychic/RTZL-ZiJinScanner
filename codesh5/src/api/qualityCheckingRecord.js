import {request, baseUrl} from '@/utils/request'

/***
 * 获取质检记录
 *
 */
export function qualityCheckingRecord(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=qualityCheckingRecord`,
        method: 'post',
        data: data,
    })
}



/***
 * 获取质检记录详情
 *
 */
export function qualityCheckingRecordDecide(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=qualityCheckingRecordDecide`,
        method: 'get',
        params: data,
    })
}