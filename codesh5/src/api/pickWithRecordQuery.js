import {request, baseUrl} from '@/utils/request'


/***
 * 查询拣配单（拣配app）
 *
 */

export function getPickHeadData(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=getPickHeadData`,
        method: 'post',
        data: data,
    })
}

/***
 *获取拣配单明细（拣配app）
 *
 */

export function getPickListData(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=getPickListData`,
        method: 'get',
        params: data,
    })
}




/***
 * 撤销拣配单（拣配app）
 *
 */
export function deletePickNo(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=deletePickNo`,
        method: 'post',
        data: data,
    })
}



