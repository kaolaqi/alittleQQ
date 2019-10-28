/* eslint-disable */
import Vue from 'vue'
import loadingComponent from './main.vue'

// 组件初始化的实例
var loadingInstance = false

// 组件添加初始化挂载方法
loadingComponent.installMessage = function() {
  if (loadingInstance) {
    return loadingInstance
  }
  var loading = Vue.extend(loadingComponent)
  var component = new loading({}).$mount()
  document.querySelector('body').appendChild(component.$el)

  loadingInstance = component
  // 把实例返回出来
  return loadingInstance
}

/** ***********   组件服务   ****************/

// 将组件实例赋给服务 使用函数调用组件方法
var LoadingServer = function() {
  this.instance = loadingComponent.installMessage()
}

// 组件服务方法加载
LoadingServer.prototype.loading = function(message) {
  if (!this.instance) {
    this.instance = loadingComponent.installMessage()
  }
  this.instance.loading(message)
}
// 组件服务卸载
LoadingServer.prototype.unload = function() {
  if (!this.instance) {
    this.instance = loadingComponent.installMessage()
  }
  this.instance.unload()
}

var modalLoadingServer = new LoadingServer()

export default modalLoadingServer

