<template>
	<transition name="slide-right">
		<div class="layout" ref="layout" style="background-color: #fff;height: 100%;">
	        <router-view></router-view>
		</div>
	</transition>
</template>
<script>

export default {
	name:'userLayout',
	data(){
		return{

		}
	},
	mounted() {
		if(this.$route.name === 'commissionSet' ||
			this.$route.name === 'taskResultAppeal') {
			this.$refs.layout.style.backgroundColor = '#f9f9f9';
		}
	},
	methods:{
		
	},
	beforeDestroy() {
		if(this.$route.name === 'commissionSetList' ||
			this.$route.name === 'commissionSet' ||
			this.$route.name === 'taskResultAppeal') {
			this.$refs.layout.style.backgroundColor = '#f9f9f9';
		}else {
			if(this.$refs.layout) {
				this.$refs.layout.style.backgroundColor = '#fff';
			}
		}
	}
}
</script>

<style lang="scss">
</style>


