
<template>
    <div class="calendar-header">
        <h1>请选择日期</h1>
        <p>
            <span @click="handleReduceYear">&lt;&nbsp;</span>
            <span class="header-date">{{year}}</span>
            <span @click="handleAddYear">&nbsp;&gt;</span>
        </p>
        <p>
            <span @click="handleReduceMonth">&lt;&nbsp;</span>
            <span class="header-date">{{month}}</span>
            <span @click="this.handleAddMonth">&nbsp;&gt;</span>
        </p>
    </div>
</template>


<script>

import * as CalendarServer from './server';

export default {
    name:'calendar-header',
    props:[
        'isYearChange',
        'isMonthChange',
        'defaults',
        'year',
        'month',
        'onDateChange'
    ],
    data(){
        return{
            
        }
    },
    methods:{
        handleAddYear:function(){
            if(this.isYearChange){
                var newDefaults;
                var year = this.defaults.getFullYear(),
                month = this.defaults.getMonth(),
                day = this.defaults.getDate();

                newDefaults = new Date(year+1,month,day);
                if(this.onDateChange){
                    this.onDateChange(newDefaults);
                }
            }
        },
        handleReduceYear:function(){
            if(this.isYearChange){
                var newDefaults;
                var year = this.defaults.getFullYear(),
                month = this.defaults.getMonth(),
                day = this.defaults.getDate();

                newDefaults = new Date(year-1,month,day);
                if(this.onDateChange){
                    this.onDateChange(newDefaults);
                }
            }
        },
        handleAddMonth:function(){
            if(this.isMonthChange){
                var newDefaults;
                var year = this.defaults.getFullYear(),
                month = this.defaults.getMonth(),
                day = this.defaults.getDate();
                newDefaults = new Date(year,month+1,1);
                if(this.onDateChange){
                    this.onDateChange(newDefaults);
                }
            }
        },
        handleReduceMonth:function(){
            if(this.isMonthChange){
                var newDefaults;
                var year = this.defaults.getFullYear(),
                month = this.defaults.getMonth(),
                day = this.defaults.getDate();
                newDefaults = new Date(year,month-1,1);
                if(this.onDateChange){
                    this.onDateChange(newDefaults);
                }
            }
        },
    },
    //初始化配置
    created:function(){
        
    },
}
</script>





<style lang="scss" scoped>
    @import './index.scss';
</style>



