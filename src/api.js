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
export function address (addressType) {
  return service({
    url: '/address/getAddress?addressType=' + addressType, // '/address/getAddress',
    method: 'get'
  })
}

export function deleteAddress (data) {
  return service({
    url: '/address/deleteById',
    method: 'delete',
    data
  })
}

export function addAddress (data) {
  return service({
    url: '/address/addAddress',
    method: 'post',
    data
  })
}
