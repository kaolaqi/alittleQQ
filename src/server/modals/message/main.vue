<template>
    <transition name="slide-modals">
        <div class="modals-message-content" v-show="isVisible">
            <div class="content" v-bind:class="{'active': active}" >
                <span>{{content}}</span>
            </div>
        </div>
    </transition>
</template>
<script>



export default {
    name:'modalsMessage',
    data(){
        return{
            //是否显示
            isVisible:false,
            //渐变显示
            active:false,
            //内容
            content:'',
            //关闭延时
            delayTime: 1500,
            //time
            time:false,
        }
    },
    methods:{
        //打开
        show:function(message,delayTime){
            if(delayTime){
                this.delayTime = delayTime;
            }
            if(this.time){
                clearTimeout(this.time)
                this.time = false;
            }
            this.content = message? message : '';
            this.isVisible = true;
            this.active = true;
            this.hide();
        },
        //关闭
        hide:function(){
            var self = this;
            self.time = setTimeout(function(){
                self.active = false;
                setTimeout(function(){
                     self.isVisible = false;
                },500)
            },self.delayTime)
        }
    }
}
</script>



<style lang="scss" scoped>
    @import './main.scss';
</style>


