// import Vue from 'vue'
import App from './App'
import router from './router'

//控制台调试工具
// var VConsole = require('vconsole');
// var vConsole = new VConsole();
// require('eruda').init();

// import { DatetimePicker, Loadmore, Popup, Picker } from 'mint-ui';
import {clipboard} from '@/directive/index';

// 按需引入部分mint-ui组件库
// Vue.component(DatetimePicker.name, DatetimePicker);
// Vue.component(Loadmore.name, Loadmore);
// Vue.component(Popup.name, Popup);
// Vue.component(Picker.name, Picker);

// 引入自定义组件
Vue.directive('clipboard',clipboard)



Vue.config.productionTip = false


router.beforeEach((to,from,next) => {
	document.title = to.meta.title;
	next();
})


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
