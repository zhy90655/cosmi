import service from './plugins/axios'

// 检验邮箱是否已经注册
export function isEmailRegister (data) {
  return service({
    url: 'mall/login/findUserIsRegister',
    method: 'get',
    data
  })
}

// 登录接口
export function login (data) {
  return service({
    url: '/login/land',
    method: 'post',
    data
  })
}

// 注册接口
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

// 删除地址
export function deleteAddress (id) {
  return service({
    url: '/address/deleteById?id=' + id,
    method: 'delete'

  })
}

// 新增地址
export function addAddress (data) {
  return service({
    url: '/address/addAddress',
    method: 'post',
    data
  })
}

// 更新地址
export function updateAddress (data) {
  return service({
    url: '/address/updateAddress',
    method: 'post',
    data
  })
}
