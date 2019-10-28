/* eslint-disable */
import Vue from 'vue'
import confirmComponent from './main.vue'

// 组件初始化的实例
var confirmInstance = false

// 组件添加初始化挂载方法
confirmComponent.installMessage = function() {
  if (confirmInstance) {
    return confirmInstance
  }
  var loading = Vue.extend(confirmComponent)
  var component = new loading({}).$mount()
  document.querySelector('body').appendChild(component.$el)

  confirmInstance = component
  // 把实例返回出来
  return confirmInstance
}

/** ***********   组件服务   ****************/

// 将组件实例赋给服务 使用函数调用组件方法
var confirmServer = function() {
  this.instance = confirmComponent.installMessage()
}

// 使用组件服务
//  config.title='标题'
//  config.message = '内容'  *必传*
//  config.confirm = 确认 '{text:按钮名,onClick:点击回调}'
//  config.calcel =  取消 '{text:按钮名,onClick:点击回调}'
confirmServer.prototype.use = function(config) {
  if (!this.instance) {
    this.instance = confirmComponent.installMessage()
  }
  this.instance.user(config)
}

// 取消
confirmServer.prototype.hide = function() {
  if (!this.instance) {
    this.instance = confirmComponent.installMessage()
  }
  this.instance.hide()
}

var modalConfirmServer = new confirmServer()

export default modalConfirmServer

