

<template>
	<div class="task-index">
        联系人列表
		<footer-tab/>
	</div>
</template>


<script>
import footerTab from '@/component/common/footerTab/index.vue'

export default {
	name:'ContactsList',
	components:{ 
        footerTab,
    },
	data(){
		return{
		}
	},
	methods: {
	}
}
</script>


<style lang="scss" scoped>
	@import './index.scss';
</style>
