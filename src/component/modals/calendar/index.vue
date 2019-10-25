
<template>
     <transition name="slide-modals">
        <div class="modals-component-container" v-if="isVisible">
            <div class="calendar-container">
                <calendar-head
                        :isYearChange="config.isYearChange"
                        :isMonthChange="config.isMonthChange"
                        :defaults="config.defaultDate"
                        :year="template.year" 
                        :month="template.month"
                        :onDateChange="onYearAsMonthChange"
                />
                <calendar-content 
                            :onCheckDate="onDateChange" 
                            :checked="template.check" 
                            :dateList="template.date" 
                />
                <calendar-footer :onOk="onOk" :onCancel="onCancel" />
            </div>
        </div>
    </transition>
</template>



<script>

import * as CalendarServer from './server';

import CalendarHead from './head.vue';
import CalendarFooter from './footer.vue';
import CalendarContent from './content.vue';


export default {
    name:'calendar',
    props:[
        //是否显示
        'isVisible',
        //初始化默认值
        'defaultDate',
        //选中值 没有则默认初始化值
        'check',
        //最大可选日期
        'maxDate',
        //最小可选日期
        'minDate',
        //是否允许 年改变和约改变
        'isYearChange',
        'isMonthChange',
        //点击日期后是否立即触发回调
        'clickDateFlag',
        //点击如期后是否触发选中回调
        'clickDateHide',
        //初始化回调
        'onInit',
        //关闭前回调
        'onHide',
        //点击日期回调
        'onClickDate',
        //日期改变回调
        'onChangeDate',
        //通知父节点关闭弹出层
        'setCalendarHide',
    ],
    components:{ 
        CalendarHead,
        CalendarFooter,
        CalendarContent,
    },
    data(){
        return{
            template: false,
            config: false,
        }
    },
    methods:{
        //初始化日期
        initDate:function(newDate,checkedDate){
            var date = [],
            year = newDate.getFullYear(),
            month = newDate.getMonth()+1;
            
            this.config.defaultDate = newDate;
            date = CalendarServer.setBeforeDate(date ,year ,month ,this.config);
            date = CalendarServer.setNowDate(date ,year ,month ,this.config ,this.template);
            date = CalendarServer.setAtterDate(date, year ,month ,this.config);
            
            this.template.year = year;
            this.template.month = month;
            this.template.date = date;
            if(checkedDate){
                this.template.check = checkedDate
            }
        },
        //日期改变
        onYearAsMonthChange(date){
            this.initDate(date);
        },
        //选择日期
        onDateChange(date){
            //刷新DOM
            this.initDate(date,date);
            //是否有点击回调
            if(this.onClickDate){
                this.onClickData(date)
            }
            //是否执行改变回调
            if(this.config.clickDateFlag){
                this.onChangeDate(date);
            }
            //是否立即关闭
            if(this.config.clickDateHide){
                //执行关闭回调
                if(this.onHide){
                   this.onHide(); 
                }
                if(this.setCalendarHide){
                    this.setCalendarHide()
                }
            }
        },
        onOk(){
            //点击确定
            if(this.onChangeDate){
                this.onChangeDate(this.mplat,this.check)
            }
            //执行关闭回调
            if(this.onHide){
               this.onHide(); 
            }
            if(this.setCalendarHide){
                this.setCalendarHide()
            }
        },
        onCancel(){
            //执行关闭回调
            if(this.onHide){
               this.onHide(); 
            }
            if(this.setCalendarHide){
                this.setCalendarHide()
            }
        },
    },
    mounted:function(){
        //初始化配置
        this.config = {
           //默认日期
           defaultDate: this.defaultDate? this.defaultDate: new Date(),
           //选中日期
           check: this.defaultDate? this.defaultDate : new Date(),
           //最大日期
           maxDate: this.maxDate? this.maxDate : null,
           //最小日期
           minDate: this.minDate? this.minDate : null,
           //年份是否可调 默认可调
           isYearChange: (typeof this.isYearChange !== 'undefined')? this.isYearChange : true,
           //月份是否可调 默认可调
           isMonthChange: (typeof this.isMonthChange !== 'undefined')? this.isMonthChange : true,
           //点击元素是否立即改变 默认不改变
           clickDateFlag: (typeof this.clickDateFlag !== 'undefined')? this.clickDateFlag : false,
           //选择元素之后是否关闭 默认不关闭 
           clickDateHide: (typeof this.clickDateHide !== 'undefined')? this.clickDateHide : false,
        };
        //初始化模板
        this.template ={
            //选中的元素
            check: this.defaultDate? this.defaultDate: new Date( new Date().toLocaleDateString() ),
            //年：月：日期数组
            year : '',
            month: '',
            date : []
        };
        this.initDate(this.config.defaultDate);
        if(this.onInit){
            this.onInit();
        }
    }
}
</script>





<style lang="scss" scoped>
    @import './index.scss';
</style>



