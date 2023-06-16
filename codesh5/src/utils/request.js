import axios from 'axios'
import store from '../store'
import { showToast, showLoadingToast, closeToast, showFailToast } from 'vant'
import appConfig from '@/appConfig.js'

const baseUrl = {}

if (process.env.NODE_ENV === 'production') {
  baseUrl.api_base_url = 'http://58.57.28.230:18091/lmspicking'
  baseUrl.auth_base_url = appConfig.innerLogin
    ? 'http://192.168.0.213:8031'
    : 'http://58.57.28.230:18091/uc'
  baseUrl.data_base_url = 'http://192.168.0.213:8050'
} else {
  baseUrl.api_base_url = 'http://58.57.28.230:18091/lmspicking'
  baseUrl.auth_base_url = appConfig.innerLogin
    ? 'http://192.168.0.213:8031'
    : 'http://58.57.28.230:18091/uc'
  baseUrl.data_base_url = 'http://192.168.0.213:8050'
}

const request = axios.create({
  baseURL: 'http://localhost:8081',
})

request.defaults.timeout = 10000

request.defaults.headers['Content-Type'] =
  'application/x-www-form-urlencoded; charset=UTF-8'

// request.defaults.headers['Content-Type'] = 'application/json'

const noAuthFilterArr = [
  `${baseUrl.auth_base_url}/auth`,
  `${baseUrl.auth_base_url}/base/tools/v1/getPublicKey`,
]

function noAuth(url) {
  for (let i = 0; i < noAuthFilterArr.length; i++) {
    if (url.indexOf(noAuthFilterArr[i]) > -1) {
      return true
    }
  }
  return false
}

request.interceptors.request.use(
  (config) => {
    if (!noAuth(config.url)) {
      const token = store.state.user.token
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => {}
)

request.interceptors.response.use(
  (config) => {
    closeToast()
    return config
  },
  (error) => {
    if (error.code == 'ECONNABORTED' || error.code == 'ERR_NETWORK') {
      showFailToast({
        message: '请检查网络是否正常',
        duration: 1500,
      })
    } else {
      showFailToast({
        message: error.response.data.message || '后台接口异常',
        duration: 1500,
      })
    }
  }
)

export { request, baseUrl }
