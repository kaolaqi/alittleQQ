

import httpRequestServer from '../server/http/index';


export default {
    //抢单地区
    robOrderArea:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/grab-task/list',
            data:data,
        })
    },
    //抢单列表
    robOrderlist:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/grab-task/list',
            data:data,
        })
    },
    //请求抢单
    robOrder:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/grab-task/grab',
            data:data,
        })
    },
    //订单列表
    orderList:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/downstream/task-list',
            data:data
        })
    },
    //抢单详情
    orderDetail:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/downstream/task-details',
            data:data
        })
    },
    //提交订单结果
    handleOrderResult:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/downstream/task-commit',
            data:data
        })
    },

}

