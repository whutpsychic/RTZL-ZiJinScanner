import axios from 'axios'
import store from '../store'

const baseUrl = {}

if (process.env.NODE_ENV === 'production') {
  baseUrl.api_base_url = 'http://139.155.181.145:8022'
  baseUrl.auth_base_url = 'http://192.168.0.213:8031'
  baseUrl.data_base_url = 'http://192.168.0.213:8050'
} else {
  baseUrl.api_base_url = 'http://139.155.181.145:8022'
  baseUrl.auth_base_url = 'http://192.168.0.213:8031'
  baseUrl.data_base_url = 'http://192.168.0.213:8050'
}

const request = axios.create({
  baseURL: 'http://localhost:8081',
})

request.defaults.headers['Content-Type'] =
  'application/x-www-form-urlencoded; charset=UTF-8'

// request.defaults.headers['Content-Type'] = 'application/json'

request.interceptors.request.use((config) => {
  if (['/auth'].indexOf(config.url) === -1) {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export { request, baseUrl }
