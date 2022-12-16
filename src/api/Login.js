import request from '@/utils/request.js'

// 登录
export function Login () {
  return request({
    url: '/api/login',
    method: 'get'
  })
}
