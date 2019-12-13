import {
  userModel
} from '@/http/index'
import {
  modalMessageServer,
  modalAlertServer
} from '@/server/modals/index'
import tokenServer from '@/server/token'

const state = {
  mobile: '',
  nickname: '',
  avatar: '',
  email: '',
  rule: [],
  token: '',
  userInfo: {}
}

const mutations = {
  SET_MOBILE: (state, name) => {
    state.mobile = name
  },
  SET_NICKNAME: (state, name) => {
    state.nickname = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // 登录
  Login({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      userModel.userLogin({
        mobile: payload.mobile.trim(),
        password: payload.password.trim()
      }).then((data) => {
        if (data.statusCode === 200) {
          commit('SET_MOBILE', data.data.mobile)
          commit('SET_NICKNAME', data.data.nickname)
          commit('SET_AVATAR', data.data.avatar)
          commit('SET_EMAIL', data.data.email)
          commit('SET_USERINFO', data.data)
          commit('SET_TOKEN', data.data.mobile)
          tokenServer.setToken(data.data.mobile)
          resolve(data)
        } else if (data.statusCode === 111) {
          modalMessageServer.show(data.message, 1000)
        } else if (data.statusCode === 413) {
          modalMessageServer.show('验证码错误，请重试', 1000)
        } else {
          modalAlertServer.use({
            content: data.message
          })
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 获取用户信息
  GetUserInfo({
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      userModel.getUserInfo({
        mobile: payload.mobile.trim()
      }).then((data) => {
        if (data.statusCode === 200) {
          commit('SET_MOBILE', data.data.mobile)
          commit('SET_NICKNAME', data.data.nickname)
          commit('SET_AVATAR', data.data.avatar)
          commit('SET_EMAIL', data.data.email)
          commit('SET_USERINFO', data.data)
          commit('SET_TOKEN', data.data.mobile)
          tokenServer.setToken(data.data.mobile)
          resolve(data)
        } else if (data.statusCode === 111) {
          modalMessageServer.show(data.message, 1000)
        } else if (data.statusCode === 413) {
          modalMessageServer.show('验证码错误，请重试', 1000)
        } else {
          modalAlertServer.use({
            content: data.message
          })
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  // 退出登录
  Logout({
    commit
  }) {
    return new Promise((resolve, reject) => {
      userModel.outUser().then((data) => {
        if (data.statusCode === 200) {
          commit('SET_TOKEN', '')
          tokenServer.removeToken()
          resolve(data)
        } else {
          modalAlertServer.use({
            content: data.message
          })
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
