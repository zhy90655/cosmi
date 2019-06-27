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
    url: 'mall/login/land',
    method: 'post',
    data
  })
}
