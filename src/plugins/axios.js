import axios from 'axios'
console.log(process.env)

const service = axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 30000
})

// 请求拦截处理
service.interceptors.request.use(config => {
  config.headers.authorization = process.env.VUE_APP_TOKEN
  return config
})

// 响应拦截处理 可以进行统一的错误预处理之类的的东西
service.interceptors.response.use(response => {
  // console.log(response)
  const data = response.data
  if (data.code !== 200) {
    console.warn(data.message)
  }
  return data
})

export default service
