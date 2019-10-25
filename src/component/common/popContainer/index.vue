
<template>
    <div class="modals-component-container" v-if="isVisible">
        <div class="pop-container">
            <p class="title">
                <span @click="setClose"><i class="cicon icon-log-icon-close"></i></span>
                {{title}}
            </p>
            <slot></slot>
        </div>
    </div>
</template>




<script>

import { loginModel } from '@/http/index';

import  tokenServer  from '@/server/token/index'
import { modalMessageServer ,modalAlertServer ,modalLoadingServer } from '@/server/modals/index';

export default {
    name:'popContainer',
    props:['isVisible','title','onClose'],
    data(){
        return{

        }
    },
    methods:{
        setClose:function(){
            if(this.onClose){
                this.onClose()
            }else{
                this.$parent.isVisible = false
            }
        },
    }
}
</script>



<style lang="scss" scoped>
    @import './index.scss';
</style>





