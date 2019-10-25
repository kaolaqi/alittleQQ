<template>
    <transition name="slide-modals">
        <div class="modals-container" v-show="isVisible">
            <div class="modal-confirm" :class="{'icon':warnIcon}">
                <div class="title" v-if="title && !warnIcon">
                    {{title}}
                </div>
                <div class="message">
                    {{content}}
                </div>
                <div class="modal-button" >
                    <div class="cancel" @click="submitCancel"  :style="cancelStyle" >
                        {{cancelText || '取消'}}
                    </div>
                    <div class="confirm" @click="submitConfirm" :style="confirmStyle" >
                        {{confirmText || '确定'}}
                    </div>
                </div>
                
            </div>
        </div>
    </transition>
</template>
<script>



export default {
    name:'modalsConfirm',
    data(){
        return{
            //是否显示
            isVisible:false,
            //标题
            title:'',
            //警告ICON
            warnIcon: false,
            //显示文本
            content:"",
            //确认
            confirmText:'',
            //确认样式
            confirmStyle:{},
            //确认点击
            confirmClick:false,
            //取消
            cancelText:'',
            //取消样式
            cancelStyle:{},
            //点击回调
            cancelClick:false,
        }
    },
    methods:{
        //打开
        user:function(config){
            this.content = config.content? config.content : '';
            this.title = config.title? config.title : '提示';
            this.warnIcon = config.warnIcon? config.warnIcon : false;
            this.confirmText = config.confirmText? config.confirmText : '';
            this.confirmClick = config.confirmClick? config.confirmClick : false;
            this.confirmStyle = config.confirmStyle? config.confirmStyle : {};
            this.cancelText = config.cancelText? config.cancelText : '';
            this.cancelClick = config.cancelClick? config.cancelClick : false;
            this.cancelStyle = config.cancelStyle? config.cancelStyle : {};
            this.isVisible = true;
        },
        //关闭
        hide:function(){
            this.isVisible  = false;
        },
        submitConfirm:function(){
            if(this.confirmClick){
                this.confirmClick();
                this.hide();
            }
        },
        submitCancel:function(){
            if(this.cancelClick){
                this.cancelClick();
            }
            this.hide();
        }
    }
}
</script>



<style lang="scss" scoped>
    @import './main.scss';
</style>


