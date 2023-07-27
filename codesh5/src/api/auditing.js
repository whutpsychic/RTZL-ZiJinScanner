import {request, baseUrl} from '@/utils/request'


/***
 * 获取阴极铜审核数据
 *
 */
export function auditorDataQuery(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=auditorDataQuery`,
        method: 'post',
        data: data,
    })
}


/***
 *阴极铜判定审核
 *
 */
export function cathodeCopperAuditor(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=cathodeCopperAuditor`,
        method: 'post',
        data: data,
    })
}




