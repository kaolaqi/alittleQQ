
<template>
    <div class="nav-head-container" :class="{white: whiteColor}">
        <div v-if="isBack" class="nav-head-back-btn common-clear-fixed" @click="onBacK">
            <i class="cicon" :class="{'icon-return': !whiteColor, 'icon-return_white': whiteColor}"></i>
        </div>
        <div class="nav-head-title common-clear-fixed" :class="{'no-shadow': noShadow}">{{title}}</div>
        <div v-if="customBtn" @click="onCustom" class="nav-head-custom-btn common-clear-fixed">{{customBtn}}</div>

    </div>
</template>


<script>


export default {
    name:'nav-head',
    props:['title','ongHistoryBack','isBack','backNumber','customBtn','onClickCustom','whiteColor','noShadow'],
    data(){
        return{
        }
    },
    methods:{
        onBacK:function(){
            if(this.ongHistoryBack){
               this.ongHistoryBack()
               return false; 
            }
            this.$router.go(-1)
        },
        onCustom:function(){
            if(this.onClickCustom){
                this.onClickCustom()
            }
        }
    },
}
</script>





<style lang="scss">
    @import './index.scss';
</style>



