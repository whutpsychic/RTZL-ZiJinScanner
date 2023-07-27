import {request, baseUrl} from '@/utils/request'

import {encryptedData} from '@/utils/encrypt'

//登录
export async function login(data) {
    const params = {...data}
    // const { password } = params
    // params['password'] = await encryptedData(password)
    if(params.inputUser.indexOf("@root")<0){
        params.inputUser=params.inputUser+'@root'
    }
    return request({
        url: `${baseUrl.api_base_url}/loginCheck.do`,
        method: 'post',
        data: params,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
}


//退出
export function logout() {
    return request({
        url: `${baseUrl.api_base_url}/logout`,
        method: 'get',
    })
}


//登录验证
export function loginVerify() {
    return request({
        url: `${baseUrl.api_base_url}/mobileTerminalApi.do?method=loginVerify`,
        method: 'get',
    })
}
