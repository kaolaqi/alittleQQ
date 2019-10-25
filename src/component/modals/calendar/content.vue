
<template>
    <div class="calendar-content">
        <div class="calendar-week">
            <span v-for="item in week">
                {{item}}
            </span>
        </div>

        <div class="calendar-date">
            <span   
                v-for="item in dateList"
                :class="{
                    'date-disabled': (!item.active),
                    'date-active': (item.active && item.monthFlag !== 'now'),
                    'date-checked': !isDateDifference(item.date,checked)
                }"
                @click="handleCheckDate(item)"
                :key="getKey(item)"
            >
                {{item.value}}
            </span>

        </div>
    </div>
</template>


<script>
import * as CalendarServer from './server';

export default {
    name:'calendar-content',
    props:[
        "onCheckDate",
        'checked',
        'dateList',
    ],
    data(){
        return{
            week: ['一','二','三','四','五','六','日'],
        }
    },
    methods:{
        isDateDifference : function(dateOne,dateTwo){
            let year = (dateOne.getFullYear() === dateTwo.getFullYear());
            let month = (dateOne.getMonth() === dateTwo.getMonth());
            let day = (dateOne.getDate() === dateTwo.getDate());
            if(year && month && day){
                return false;
            }
            return true;
        },
        handleCheckDate(item){
            if(item.active){
                this.onCheckDate(item.date);
            }
        },
        getKey:function(item){
            return item.date.getTime();
        }
    },
}
</script>





<style lang="scss" scoped>
    @import './index.scss';
</style>



