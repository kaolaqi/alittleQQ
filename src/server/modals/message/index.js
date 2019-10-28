/* eslint-disable */
import Vue from 'vue'
import MessageComponent from './main.vue'

// 组件初始化的实例
var messageInstance = false

// 组件添加初始化挂载方法
MessageComponent.installMessage = function() {
  if (messageInstance) {
    return messageInstance
  }
  var message = Vue.extend(MessageComponent)
  var component = new message({}).$mount()
  document.querySelector('body').appendChild(component.$el)

  messageInstance = component
  // 把实例返回出来
  return messageInstance
}

/** ***********   组件服务   ****************/

// 将组件实例赋给服务 使用函数调用组件方法
var MessageServer = function() {
  this.instance = MessageComponent.installMessage()
}

// 组件服务方法
MessageServer.prototype.show = function(message, delayTime) {
  if (!this.instance) {
    this.instance = MessageComponent.installMessage()
  }
  this.instance.show(message, delayTime)
}

var modalMessageServer = new MessageServer()

export default modalMessageServer

