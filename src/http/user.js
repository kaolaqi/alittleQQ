import httpRequestServer from '../server/http/index'

export default {
  // 用户注册
  userResigter(data) {
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
      url: '/api/client/getFriendList',
      params: data
    })
  },

  // 模糊查询系统用户列表
  searchUserList(data) {
    return httpRequestServer({
      method: 'GET',
      url: '/api/client/userList',
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
  },

  // 获取好友消息列表
  queryFriendMessage(data) {
    return httpRequestServer({
      method: 'POST',
      url: '/api/client/queryFriendMessage',
      data: data
    })
  },

  // 查看是否是好友
  chickIsFriend(data) {
    return httpRequestServer({
      method: 'GET',
      url: '/api/client/chickIsFriend',
      params: data
    })
  },

  // 添加为好友
  addUserFriend(data) {
    return httpRequestServer({
      method: 'POST',
      url: '/api/client/addFriend',
      data: data
    })
  },

  // 跟新用户的聊天状态
  setInchatStatus(data) {
    return httpRequestServer({
      method: 'PUT',
      url: '/api/client/setInchatStatus',
      data: data
    })
  }
}
