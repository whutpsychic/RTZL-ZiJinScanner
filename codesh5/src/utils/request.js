import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8081/api',
})

export default request

// proxy: {
//     '/': {
//       target: ' http://192.168.0.213:8031',
//     },
//   },
