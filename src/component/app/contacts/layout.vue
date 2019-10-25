<template>
	<transition name="slide-right">
		<div class="layout" style="height: 100%;">
			<router-view></router-view>
		</div>
	</transition>
</template>
<script>

export default {
	name:'taskLayout',
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


