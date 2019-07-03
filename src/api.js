import service from './plugins/axios'

/**
 * 检验邮箱是否已经注册
 * 登录接口--注册接口
 * 获取地址--删除地址--新增地址--更新地址
 * 获取用户信息--更新用户信息--更新密码
 */

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

// 获取地址
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

// 获取用户信息
export function getUserInfo (data) {
  return service({
    url: '/users/getUserInfo',
    method: 'get',
    data
  })
}

// 更新用户信息
export function updateUserInfo (data) {
  return service({
    url: '/users/updateUserBaseInfo',
    method: 'post',
    data
  })
}

// 更新密码
export function updatePwd (data) {
  return service({
    url: '/users/updateUserPwd',
    method: 'post',
    data
  })
}
