<template>
	<div class="login-page">
		<h1 class="title">alittleQQ <span @click="goRegister">新用户注册</span></h1>
     	<div class="login-register-container">
            <div class="input-container">
                <span class="label">手机号</span>
                <span class="mobile">
                    <input type="number" @input="inputMobile" @blur="resize" v-model="mobile" placeholder="请输入手机号码">
                </span>
                <i class="cicon icon-log-icon-close" v-show="showClearIcon" @click="clear"></i>
            </div>
            <div class="input-container">
                <span class="label">密码</span>
                <input v-model="password" type="password" @blur="resize" placeholder="请填写密码">
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

import { commonModel } from '@/http/index';
import tokenServer from '@/server/token/index';

// import ModalSendValidateCode from '@/component/common/sendValidateCode/index.vue';
import { modalMessageServer ,modalAlertServer ,modalLoadingServer } from '@/server/modals/index';

var codeReg = /^\d{4}/;
var mobileReg = /^1[2|3|4|5|6|7|8|9|]\d{9}$/
var userReg = /^[\w|\d|\u4e00-\u9fa5|]{2,12}$/
var inviteReg = /^[\w|\d]{4,8}$/


export default {
	name:'login',
	data(){
		return{
			mobile: '',
			password: '',
			//是否发送图形验证码
			isSendValidateCode: false,
			//输入信息
			validateCode: '',
			dtRegister: '',
			sendPedding: false,
			randToken: '',
		}
	},
	computed: {
		showClearIcon: function(){
			return !!this.mobile
		},
		isSendFlag(){
			return mobileReg.test(this.mobile)
		},
		isLogin(){
			return mobileReg.test(this.mobile) && this.password
		}
	},
	components:{ 
        // ModalSendValidateCode
    },
	methods:{
		inputMobile(){
			var self = this;
			if(self.mobile.length>11){
				self.mobile = self.mobile.substring(0,11)
			}
		},
		clear(){
			this.mobile = '';
		},
		resize(){
			//处理部分ios机型弹窗键盘关闭后页面不重绘导致下面按钮不能点击的bug
			document.body && (document.body.scrollTop = 0);
		},
		//登录
		submit(){
			var self = this;
    		modalLoadingServer.loading();
			commonModel.userLogin({
				mobile: self.mobile,
				password: self.password
			}).then(function(data){
				console.log(data)
                modalLoadingServer.unload();
				if(data.statusCode == 200){
					// 跳转首页前请求用户的数据信息并保存到localStorage
					self.$router.push({path:'/'});
				}else if(data.statusCode == 111){
                    modalMessageServer.show(data.message,1000)
				}else if(data.statusCode == 413){
                    modalMessageServer.show('验证码错误，请重试',1000)
				}else{
					modalAlertServer.use({
   			         	content: data.message
			     	})
				}
			})
		},
		goRegister(){
			this.$router.push({name: 'registe'})
		},
		// //图片验证成功
		// imgValidateSuccess(randToken){
		// 	var self = this;
		// 	self.randToken = randToken
		// 	self.isSendValidateCode = false;
		// 	commonModel.sendValidateCode({
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


