<template>
	<div class="layout" style="height: 100%;">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>
<script>

export default {
	name:'indexLayout',
	data(){
		return{

		}
	},
	methods:{
		
	}
}
</script>

<style lang="scss">
</style>


