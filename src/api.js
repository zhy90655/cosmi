import service from './plugins/axios'

export function test (data) {
  return service({
    url: 'dddd',
    method: 'post',
    data
  })
}
