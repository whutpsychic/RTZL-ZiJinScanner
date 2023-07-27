import {request, baseUrl} from '@/utils/request'


/***
 * 判断条码是否正确,或者被占用，如果阴极铜判定表没有扫描数据，则添加
 *
 */
export function judgementCathodeCopper(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=judgementCathodeCopper`,
        method: 'post',
        data: data,
    })
}


/***
 * 根据条形码获取已判定的阴极铜信息
 *
 */
export function alreadyDeterminedData(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=alreadyDeterminedData`,
        method: 'get',
        params: data,
    })
}


/***
 * 删除阴极铜判定信息(未判定)
 *
 */
export function cathodeCopperDelete(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=cathodeCopperDelete`,
        method: 'get',
        params: data,
    })
}

/***
 * 获取当前扫描人为判定的数据
 *
 */
export function notDeterminedData() {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=notDeterminedData`,
        method: 'get',
    })
}



/***
 * 阴极铜判定
 *
 */
export function excellentJudgement(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=excellentJudgement`,
        method: 'post',
        data: data,
    })
}

/***
 * 获取阴极铜判定类型
 *
 */
export function typeCodeData(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=typeCodeData`,
        method: 'get',
        params: data,
    })
}


/***
 * 阴极铜判定图片上传
 *
 */
export function cathodeCopperImgUpload(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=cathodeCopperImgUpload`,
        method: 'post',
        data: data,
        headers: {
            // 表示上传的是文件,而不是普通的表单数据
            'Content-Type': 'multipart/form-data'
        }
    })
}

/***
 * 获取阴极铜判定图片
 *
 */
export function fileQuery(data) {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=fileQuery`,
        method: 'get',
        params: data,
    })
}
