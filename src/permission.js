import router from './router'
import store from './store'
import tokenServer from '@/server/token/index.js' // get token from cookie

const whiteList = ['/login', '/registe'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  const hasToken = tokenServer.getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 刷新的时候 store 被重置，要重新请求用户信息数据  需要权限可以在这里添加权限控制
      const hasInfo = store.getters.nickname
      if (hasInfo) {
        next()
      } else {
        store.dispatch('user/GetUserInfo', { mobile: hasToken })
        next()
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }
})
