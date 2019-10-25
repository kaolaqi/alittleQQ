
<template>
    <transition name="slide-modals">
        <div class="modals-component-container" v-if="isVisible">
            <div class="modal-validateCode">
                <p class="title">
                    <span @click="setClose"><i class="cicon icon-log-icon-close"></i></span>
                    输入图形验证码
                </p>
                <p class="validate-img">
                    <img :src="imgValidateData.randPic" alt="图片验证码" title="图片验证码">
                    <span @click="setRefreshImg">
                        <i class="cicon icon-log-icon-refresh"></i>
                    </span>
                </p>
                <div class="validate-container">
                    <ul @click="ulClick">
                        <li v-for="(item, index) in [1,1,1,1]" :key="index"
                            :class="{active: (code.length===index && getFocus), light: (index===code.length && getFocus) || index<code.length}">
                            {{code[index]}}
                        </li>
                    </ul>
                    <input class="validate-box" type="password" ref="inputText"  maxlength="4" v-model="inputText" @blur="inputBlur">
                </div>
            </div>
        </div>
    </transition>
</template>




<script>

import { commonModel } from '@/http/index';

import  tokenServer  from '@/server/token/index'
import { modalMessageServer ,modalAlertServer ,modalLoadingServer } from '@/server/modals/index';

export default {
    name:'modal-sendValidateCode',
    props:['isVisible','onCallback','onClose'],
    data(){
        return{
            inputText: '',
            getFocus: false,
            inputTimer: null,

            updateFlag : true,
            imgValidateData:{}
        }
    },
    computed: {
        code() {
            return this.inputText.split('')
        }
    },
    watch: {
        code: function(newVal, oldVal) {
            if(newVal.length===4) {
                this.typeFinish();
            }
        }
    },
    methods:{
        //更换图片验证码
        setRefreshImg:function(){
            var self = this;
            self.inputText = '';
            modalLoadingServer.loading()
            commonModel.getValidateImg().then(function(data){
                modalLoadingServer.unload()
                if(data.returnCode == 100){
                    self.imgValidateData = data.data
                }else{
                    modalAlertServer.use({
                        content: data.returnMsg
                    })
                }
            })
        },
        setClose:function(){
            this.updateFlag = true;
            this.onClose();
        },
        typeFinish() {
            var self = this;
            //检测图片验证码是否正确
            commonModel.chenckValidateImg({
                randToken: self.imgValidateData.randToken,
                randCode: self.inputText,
            }).then(function(data){
                self.inputText = '';
                if(data.returnCode == 100){
                    // 验证成功后执行 发送短信验证码的回调并倒计时
                    self.updateFlag = true;
                    self.onCallback(self.imgValidateData.randToken)
                }else if(data.returnCode === 110){
                    modalMessageServer.show(data.returnMsg,1000)
                    self.inputText = '';
                }else{
                    modalAlertServer.use({
                        content: data.returnMsg
                    })
                }
            })
            return false;
        },
        ulClick(e) {
            this.$refs.inputText.focus();
            this.getFocus = true
        },
        inputBlur() {
            this.getFocus = false
        }
    },
    updated:function(){
        var self = this;
        if(self.isVisible && self.updateFlag){
            modalLoadingServer.loading()
            commonModel.getValidateImg().then(function(data){
                modalLoadingServer.unload()
                if(data.returnCode == 100){
                    self.imgValidateData = data.data
                    self.updateFlag = false;
                    self.inputText = '';
                }else{
                    modalAlertServer.use({
                        title:'提示',
                        content: data.returnMsg
                    })
                }
            })
        }
    }
}
</script>







<style lang="scss" scoped>
    @import './index.scss';
</style>





