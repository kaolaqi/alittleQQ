

<template>
	<div class="grob-task-list">
		消息列表首页
		<Button type="primary" plain size="small">默认按钮</Button>
		<footer-tab/>
	</div>
</template>


<script>
import { Button } from 'vant';
import provinceData from '@/lib/provinceCode.js'
import footerTab from '@/component/common/footerTab/index.vue'

export default {
	name:'MessageIndex',
	components:{ 
        footerTab,
        Button
    },
	data(){
		return{
		}
	},
    beforeRouteLeave(to,from,next){//离开当前路由组件之前执行清除事件
        next()
    },
	methods: {
	}
}
</script>


<style lang="scss" scoped>
	@import './index.scss';
</style>
