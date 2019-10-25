// import Vue from 'vue'
import alertComponent from './main.vue'


//组件初始化的实例
var alertInstance = false;


//组件添加初始化挂载方法
alertComponent.installMessage = function() {
    if(alertInstance){
        return alertInstance;
    }
    var loading = Vue.extend(alertComponent)
    var component = new loading({}).$mount()
    document.querySelector('body').appendChild(component.$el)
    
    alertInstance = component
    //把实例返回出来
    return alertInstance
}


/*************   组件服务   ****************/


//将组件实例赋给服务 使用函数调用组件方法
var alertServer = function(){
    this.instance =  alertComponent.installMessage();
};


//使用组件服务
//  config.title='标题'
//  config.message = '内容'  *必传*
//  config.confirm = '按钮文本'
//  config.onClickConfirm = '点击确认回调' 默认关闭 
alertServer.prototype.use = function(config){
    if(!this.instance){
        this.instance = alertComponent.installMessage();
    }
    this.instance.use(config)
}

//取消
alertServer.prototype.hide = function(){
    if(!this.instance){
        this.instance = alertComponent.installMessage();
    }
    this.instance.hide()
}


var modalAlertServer =  new alertServer();



export default modalAlertServer




