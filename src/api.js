import service from './plugins/axios'

// 检验邮箱是否已经注册
export function isEmailRegister (data) {
  return service({
    url: 'mall/login/findUserIsRegister',
    method: 'get',
    data
  })
}

export function login (data) {
  return service({
    url: '/login/land',
    method: 'post',
    data
  })
}

export function register (data) {
  return service({
    url: '/login/register',
    method: 'post',
    data
  })
}

// 地址模块
export function address (data) {
  return service({
    url: '/address/getAddress', // '/address/getAddress',
    method: 'get',
    data
  })
}

export function deleteAddress (data) {
  return service({
    url: '/address/deleteById',
    method: 'delete',
    data
  })
}
