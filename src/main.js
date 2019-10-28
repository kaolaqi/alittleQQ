import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'

// 控制台调试工具
// var VConsole = require('vconsole');
// var vConsole = new VConsole();
// require('eruda').init();

import './permission' // permission control
import { clipboard } from '@/directive/index'

// 引入自定义组件
Vue.directive('clipboard', clipboard)
Vue.use(Vant)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
