import axios from 'axios'

const token = localStorage.getItem('token')
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUNK_API_URL,
  timeout: 10000,
})
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'

axiosInstance.interceptors.request.use(
  function (config) {
    if (config.headers) {
      config['headers']['Authorization'] = `Bearer ${token}`
    }

    return config
  },
  function (error) {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  },
)

export default axiosInstance
