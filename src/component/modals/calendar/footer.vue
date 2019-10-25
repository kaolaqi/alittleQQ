
<template>
    <div class="calendar-footer">
        <p @click="onCancel" >取消</p>
        <p @click="onOk" >确定</p>
    </div>
</template>


<script>
import * as CalendarServer from './server';

export default {
    name:'calendar-footer',
    props:[
        'onCancel',
        'onOk',
    ],
    data(){
        return{

        }
    },
    methods:{
        
    },
}
</script>





<style lang="scss" scoped>
    @import './index.scss';
</style>



