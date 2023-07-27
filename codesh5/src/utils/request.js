import axios from 'axios'
import store from '../store'
import {showToast, showLoadingToast, closeToast, showFailToast} from 'vant'
import appConfig from '@/appConfig.js'
import router from "../router/index.js";

const baseUrl = {}


//生产环境
if (process.env.NODE_ENV === 'production') {
    //baseUrl.api_base_url = 'http://192.168.0.250:8081/zjky_mes'
    baseUrl.api_base_url = 'http://e.zijinty.com:8018/zjky_mes'

} else {
    //开发环境
    baseUrl.api_base_url = 'http://192.168.0.250:8081/zjky_mes'
}

const request = axios.create({
    baseURL: '',
})

request.defaults.timeout = 10000

request.defaults.headers['Content-Type'] = 'application/json'

// const noAuthFilterArr = [
//   `${baseUrl.api_base_url}/loginCheck.do`,
//    // `${baseUrl.api_base_url}/tbSmInfactory.do?method=query`,
// ]

// function noAuth(url) {
//   for (let i = 0; i < noAuthFilterArr.length; i++) {
//     if (url.indexOf(noAuthFilterArr[i]) > -1) {
//       return true
//     }
//   }
//   return false
// }

request.interceptors.request.use(
    (config) => {
        // console.log("+++++++++++++++++++")
        // console.log(config)
        // console.log("+++++++++++++++++++")
        // if (!noAuth(config.url)) {
        //   const token = store.state.user.token
        //   if (token) {
        //     config.headers.Authorization = `Bearer ${token}`
        //   }
        // }
        return config
    },
    (error) => {
    }
)

request.interceptors.response.use(
    (config) => {
        let url = config.config.url
        //当前的地址不为登录地址
        if (url.indexOf("loginCheck.do") == -1) {
            //如果重定向的地址为登录地址的话，手机端跳转到登录页面
            if (config.request.responseURL.indexOf("loginCheck.do") != -1) {
                router.push({path: '/login'})
            }
        }
        return config
    },
    (error) => {
        if (error.code == 'ECONNABORTED' || error.code == 'ERR_NETWORK') {
            showFailToast({
                className: 'particulars-detail-popup',
                message: '请检查网络是否正常',
                duration: 1500,
            })
        } else {
            showFailToast({
                className: 'particulars-detail-popup',
                message: error.response.data.message || '后台接口异常',
                duration: 1500,
            })


        }
    }
)


export {request, baseUrl}

