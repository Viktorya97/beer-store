import axios from 'axios'

const token = localStorage.getItem('token')
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PUNK_API_URL,
  timeout: 10000,
})
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'
axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`

export default axiosInstance
