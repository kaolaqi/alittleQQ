
import httpRequestServer from '../server/http/index'

export default {
  // 用户注册
  userResigter: function(data) {
    return httpRequestServer({
      method: 'POST',
      url: '/api/client/register',
      data: data
    })
  },
  // 登录
  userLogin(data) {
    return httpRequestServer({
      method: 'POST',
      url: '/api/client/login',
      data: data
    })
  },
  // 获取用户信息
  getUserInfo(data) {
    return httpRequestServer({
      method: 'GET',
      url: '/api/client/userInfo',
      params: data
    })
  },
  // 退出登录
  outUser() {
    return httpRequestServer({
      method: 'GET',
      url: '/api/client/logout'
    })
  },

  // 获取用户好友列表
  getUserFriendList(data) {
    return httpRequestServer({
      method: 'GET',
      url: '/api/client/getUserFriendList',
      params: data
    })
  },

  // 发送好友列表
  sendFriendMessage(data) {
    return httpRequestServer({
      method: 'POST',
      url: '/api/client/sendFriendMessage',
      data: data
    })
  }

}

