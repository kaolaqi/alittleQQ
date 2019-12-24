<template>
  <div class="login-page">
    <h1 class="title">alittleQQ <span @click="goRegister">新用户注册</span></h1>
    <div class="login-register-container">
      <div class="input-container">
        <span class="label">手机号</span>
        <span class="mobile">
          <input v-model="mobile" type="number" placeholder="请输入手机号码" @input="inputMobile" @blur="resize">
        </span>
        <i v-show="showClearIcon" class="cicon icon-log-icon-close" @click="clear" />
      </div>
      <div class="input-container">
        <span class="label">密码</span>
        <input v-model="password" type="password" placeholder="请填写密码" @blur="resize">
      </div>
      <!-- <div class="input-container">
                <span class="label">验证码</span>
                <input class="validate-code" v-model="validateCode" type="number" @blur="resize" placeholder="请输入验证码">
                <button class="submit" @click="sendValidateCode" :class="{active:isSendFlag && !sendPedding}">
                {{sendPedding? sendPedding+'秒后重发': '获取验证码'}}
                </button>
            </div> -->
      <div class="footer-button" :class="{active:isLogin}" @click="submit">
        登录
      </div>
      <!-- <div class="content">
        未注册账号，<span @click="goRegister">立即注册</span>
      </div> -->

      <!-- <ModalSendValidateCode
          :isVisible="isSendValidateCode"
          :onClose="closeSendValidateCode"
          :onCallback="imgValidateSuccess"
          ></ModalSendValidateCode> -->
    </div>
  </div>
</template>
<script>

// import ModalSendValidateCode from '@/component/common/sendValidateCode/index.vue';
import { modalAlertServer } from '@/server/modals/index'

var mobileReg = /^1[2|3|4|5|6|7|8|9]\d{9}$/

export default {
  name: 'Login',
  components: {
    // ModalSendValidateCode
  },
  data() {
    return {
      mobile: '',
      password: '',
      // 是否发送图形验证码
      isSendValidateCode: false,
      // 输入信息
      validateCode: '',
      dtRegister: '',
      sendPedding: false,
      randToken: ''
    }
  },
  computed: {
    showClearIcon: function() {
      return !!this.mobile
    },
    isSendFlag() {
      return mobileReg.test(this.mobile)
    },
    isLogin() {
      return mobileReg.test(this.mobile) && this.password
    }
  },
  methods: {
    inputMobile() {
      var self = this
      if (self.mobile.length > 11) {
        self.mobile = self.mobile.substring(0, 11)
      }
    },
    clear() {
      this.mobile = ''
    },
    resize() {
      // 处理部分ios机型弹窗键盘关闭后页面不重绘导致下面按钮不能点击的bug
      document.body && (document.body.scrollTop = 0)
    },
    // 登录
    submit() {
      this.$store.dispatch('user/Login', {
        mobile: this.mobile,
        password: this.password
      }).then((data) => {
        console.log('登路成功')
        this.$router.push({ path: '/' })
      }).catch((err) => {
        modalAlertServer.use({
          content: err.returnMsg
        })
      })
    },
    goRegister() {
      this.$router.push({ name: 'registe' })
    }
    // //图片验证成功
    // imgValidateSuccess(randToken){
    // 	var self = this;
    // 	self.randToken = randToken
    // 	self.isSendValidateCode = false;
    // 	userModel.sendValidateCode({
    // 		phoneNo: self.phone,
    // 		randToken: randToken,
    // 		smsType: 11
    // 	}).then(function(data){
    // 		if(data.returnCode == 100){
  //                   modalMessageServer.show('验证码发送成功',1000)
  //                   self.isSendFlag = false;
  //                   self.sendPedding = 59;
  //                   var time = setInterval(function(){
  //                       if(self.sendPedding -1 < 0){
  //                           clearInterval(time)
  //                           self.sendPedding  = false;
    // 					if( phoneReg.test(self.phone) ){
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
    // }
  }
}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>
