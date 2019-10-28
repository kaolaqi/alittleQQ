
import Vue from 'vue'
import Router from 'vue-router'

// 根目录不用异步加载
import layout from '@/component/app/layout/index.vue'

// 根目录不用异步加载
import login from '@/component/app/login/index.vue'

// 根目录不用异步加载
import registe from '@/component/app/registe/index.vue'

// 首页消息模块
import message from '@/component/app/message/index'
// 联系人模块
import contacts from '@/component/app/contacts/index'
// 我的个人中心
import user from '@/component/app/user/index'

Vue.use(Router)

export default new Router({
  // 使用history模式时，默认服务器根目录地址就是 访问的域名地址；而实际部署的位置在 域名地址+'/ph5/'的目录下面
  // 添加base属性修改服务器上根目录地址
  // base: '/ph5/',
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/message/index'
    }, {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    }, {
      path: '/registe',
      name: 'registe',
      component: registe,
      meta: {
        title: '注册'
      }
    }, {
      path: '/',
      component: layout,
      children: [
        ...message,
        ...contacts,
        ...user
      ]
    }, {
      // 没有匹配到路由时跳转到首页
      path: '*',
      redirect: '/message/index'
    }
  ]
})

