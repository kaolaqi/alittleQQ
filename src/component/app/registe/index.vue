<template>
  <div class="login-page">
    <h1 class="title"><i class="cicon icon-return" @click="back" />注册alittleQQ</h1>
    <div class="login-register-container">

      <div class="input-container">
        <span class="label">手机号</span>
        <span class="phone">
          <input v-model="mobile" type="number" placeholder="请输入手机号码" @input="inputMobile" @blur="resize">
        </span>
        <i v-show="showClearIcon" class="cicon icon-log-icon-close" @click="clear" />
      </div>
      <!-- <div class="input-container">
                <span class="label">验证码</span>
                <input class="validate-code" v-model="validateCode" type="number" @blur="resize" placeholder="请输入验证码">
                <button class="submit" @click="sendValidateCode" :class="{active:isSendFlag && !sendPedding}">
                  {{sendPedding? sendPedding+'秒后重发': '获取验证码'}}
                </button>
            </div> -->
      <div class="input-container">
        <span class="label">昵称</span>
        <input v-model="nickname" type="text" placeholder="请输入昵称" @blur="resize">
      </div>
      <div class="input-container">
        <span class="label">邮箱</span>
        <input v-model="email" type="text" placeholder="请填写邮箱" @blur="resize">
      </div>
      <div class="input-container">
        <span class="label">密码</span>
        <input v-model="password" type="password" placeholder="请填写密码" @blur="resize">
      </div>
      <div class="input-container">
        <span class="label">确认密码</span>
        <input v-model="againPassword" type="password" placeholder="再次填写密码" @blur="resize">
      </div>
      <div class="footer-button" :class="{active:isLogin}" @click="submit">
        注册
      </div>

      <!-- <ModalSendValidateCode
            :isVisible="isSendValidateCode"
            :onClose="closeSendValidateCode"
            :onCallback="imgValidateSuccess"
            >
          </ModalSendValidateCode> -->

    </div>
  </div>
</template>
<script>

import { userModel } from '@/http/index'

// import ModalSendValidateCode from '@/component/common/sendValidateCode/index.vue';
// import popContainer from '@/component/common/popContainer/index.vue';
import { modalMessageServer, modalAlertServer, modalLoadingServer } from '@/server/modals/index'

var mobileReg = /^1[2|3|4|5|6|7|8|9|]\d{9}$/
var nicknameReg = /^[\w|\d|\u4e00-\u9fa5|]{2,8}$/
var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

export default {
  name: 'Login',
  components: {
    // ModalSendValidateCode,
    // popContainer,
  },
  data() {
    return {
      mobile: '',
      nickname: '',
      email: '',
      password: '',
      againPassword: '',
      // 是否发送图形验证码
      isSendValidateCode: false,
      // 输入信息
      validateCode: '',
      inviteCode: '',
      dtRegister: '',
      sendPedding: false,
      randToken: '',
      isVisible: false
    }
  },
  computed: {
    showClearIcon: function() {
      return !!this.mobile
    },
    isLogin() {
      return mobileReg.test(this.mobile) && nicknameReg.test(this.nickname) && emailReg.test(this.email) && this.password && this.password === this.againPassword
    }
  },
  methods: {
    inputMobile() {
      if (this.mobile.length > 11) {
        this.mobile = this.mobile.substring(0, 11)
      }
    },
    clear() {
      this.mobile = ''
    },
    back() {
      this.$router.go(-1)
    },
    // 登录
    submit() {
      var self = this
      modalLoadingServer.loading()
      userModel.userResigter({
        mobile: self.mobile,
        nickname: self.nickname,
        email: self.email,
        password: self.password
      }).then(function(data) {
        modalLoadingServer.unload()
        console.log(data)
        if (data.statusCode === 200) {
          modalAlertServer.use({
            title: '提示',
            confirmText: '立即登录',
            content: '恭喜你，注册成功！',
            onClickConfirm() {
              self.$router.push({ name: 'login' })
            }
          })
        } else if (data.statusCode === 111) {
          modalMessageServer.show(data.message, 1000)
        } else if (data.statusCode === 413) {
          modalMessageServer.show('验证码错误，请重试', 1000)
        } else {
          modalAlertServer.use({
            content: data.message
          })
        }
      })
    },
    resize() {
      document.body && (document.body.scrollTop = 0)
    }

    // 图片验证成功
    // imgValidateSuccess(randToken){
    // 	var self = this;
    // 	self.randToken = randToken;
    // 	self.isSendValidateCode = false;
    // 	userModel.sendValidateCode({
    // 		mobileNo: self.mobile,
    // 		randToken: randToken,
    // 		smsType: 10
    // 	}).then(function(data){
    // 		if(data.returnCode == 100){
  //                   modalMessageServer.show('验证码发送成功',1000)
  //                   self.isSendFlag = false;
  //                   self.sendPedding = 59;
  //                   var time = setInterval(function(){
  //                       if(self.sendPedding -1 < 0){
  //                           clearInterval(time)
  //                           self.sendPedding  = false;
    // 					if( phoneReg.test(self.mobile) ){
    // 						self.isSendFlag = true;
    // 					}else{
    // 						self.isSendFlag = false;
    // 					}
  //                       }else{
  //                           self.sendPedding--
  //                       }
  //                   },1000)
  //               }else{
  //                   modalAlertServer.use({
  //                   	title:'提示',
  //                       content: data.returnMsg
  //                   })
  //               }
    // 	})
    // },
    // //发送验证码
    // sendValidateCode(){
    // 	var self = this;
    // 	self.isSendValidateCode = true;
    // },
    // //关闭验证码
    // closeSendValidateCode(){
    // 	this.isSendValidateCode = false;
    // },
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>

