

<template>
	<div class="user-index-page">
		
		<div class="banner">
			<img src="../../../../images/avatar.png" alt="">
			<span>{{userInfo.nickName}}</span>
			<i class="cicon icon-edit" @click="showEditUsername"></i>
		</div>

		<div class="item-list">
			<router-link :to="{name: 'wallet'}" class="link-item">
				<i class="cicon icon-wallet"></i><span>钱包余额</span>
				<i class="cicon icon-personal_right row"></i>
			</router-link>
			<router-link :to="{name: 'commissionSetList',params:{searchPhone: 'null'}}" class="link-item">
				<i class="cicon icon-commission"></i><span>抽成设置</span>
				<i class="cicon icon-personal_right row"></i>
			</router-link>
			<router-link :to="{name: 'rewardStatistic',params:{searchPhone: 'null'}}" class="link-item">
				<i class="cicon icon-bounty"></i><span>赏金数据统计</span>
				<i class="cicon icon-personal_right row"></i>
			</router-link>
			<router-link :to="{name: 'taskResultAppeal'}" class="link-item">
				<i class="cicon icon-task"></i><span>任务结果申诉</span>
				<i class="cicon icon-personal_right row"></i>
			</router-link>
			<router-link :to="{name: 'dockeCodeIndex'}" class="link-item">
				<i class="cicon icon-exclusive"></i><span>我的专属对接 </span>
				<i class="cicon icon-personal_right row"></i>
			</router-link>
		</div>

		<div class="logout-btn">
			<button @click="logout">退出登录</button>
		</div>

		<setUserName :isVisible="isVisible" :oldUserName="userInfo.nickName" @closeEdit="closeEdit"></setUserName>

		<footer-tab :activeIndex="3" />

	</div>
</template>


<script>

import { commonModel } from '@/http/index';
import footerTab from '@/component/common/footerTab/index.vue'
import setUserName from '@/component/modals/setUserName/index.vue'

import tokenServer  from '@/server/token/index'
import { dateFormat } from '@/filters/common.js'
import { modalAlertServer ,modalLoadingServer, modalMessageServer, modalConfirmServer } from '@/server/modals/index';


export default {
	name:'user',
	components:{ 
        footerTab,
        setUserName,
    },
	data(){
		return{
			userInfo: {
				nickName: 'kaolaqi'
			},
			isVisible: false,
			qnzUserPlatform: ''
		}
	},
	filters:{
		dateFormat : dateFormat 
    },
	mounted:function(){

	},
	methods:{
		logout:function(){
			var self = this;
			modalConfirmServer.use({
	            title:'提示',
	            content:'确定要退出登录吗？',
	            confirmClick:function(){
	            	commonModel.outUser().then(data => {
	            		if(data.statusCode === 200){
	            			modalMessageServer.show('已退出登录',1000)
	                		self.$router.push({name:'login'});
	            		}else{
	            			modalAlertServer.use({
		   			         	content: '退出接口请求失败！',
					     	})
	            		}
	            	})
	            }
	        })
		},
		showEditUsername(){
			this.isVisible = true
		},
		closeEdit(){
			this.isVisible = false
		}
	},
	beforeDestroy(){
		var layout = document.querySelector('.layout-outer');
		if(layout){
			layout.style.background = '#fff';
		}
	}


}
</script>




<style lang="scss" scoped>
	@import './index.scss';
</style>




