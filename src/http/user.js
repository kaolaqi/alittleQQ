

import httpRequestServer from '../server/http/index';



export default {
    //获取用户信息
    getUserInfo:function(){
        return httpRequestServer({
            method:'GET',
            url:'/user/info',
        })
    },
    //修改用户名
    setUserName:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/edit-info',
            data:data
        })
    },
    //查询用户余额
    getUserBalance:function(){
        return httpRequestServer({
            method:'GET',
            url:'/user/balance',
        })
    },
    //提现
    submitWithdraw:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/withdraw',
            data:data
        })
    },
    //充值
    submitRecharge:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/recharge',
            data:data
        })
    },
    //设置绑定支付宝账号
    setAlipayAccount:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/edit-alipay-account',
            data:data
        })
    },
    //下级代理抽成列表
    proxyCommission:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/pump-list',
            data:data
        })
    },
    //设置下级代理抽成
    setProxyCommission:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/pump-setting',
            data:data
        })
    },
    //批量全部设置下级代理抽成
    setAllProxyCommission:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/batch-pump-setting',
            data:data
        })
    },
    //用户数据统计
    getUserTotallStatistics:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/statistics-data',
            data:data
        })
    },
    //用户数据统计详情
    /*getUserStatisticsDetail:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/statistics-details',
            data:data
        })
    },*/
    //充值记录
    rechargeRecord:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/recharge-records',
            data:data
        })
    },
    //提现记录
    withdrawRecord:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/withdraw-records',
            data:data
        })
    },
    //钱包明细记录列表
    userWalletDetailList:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/wallet-details',
            data:data
        })
    },
    //用户申诉
    userApplyComplaint:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/apply-appeal',
            data:data
        })
    },
    //用户申诉结果记录
    userApplyComplaintRecord:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/appeal-records',
            data:data
        })
    },

    //查询保证金信息
    promiseMoneyInfo:function(data){
        return httpRequestServer({
            method:'GET',
            url:'/user/security-info',
            data:data
        })
    },

    //缴纳/退还保证金
    optionPromisMoney:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/security-deposit',
            data:data
        })
    },

    //查询保证金变化记录
    promiseMoneyRecord:function(data){
        return httpRequestServer({
            method:'POST',
            url:'/user/security-records',
            data:data
        })
    },





    //专属对接列表
    exclusiveDockingList(data) {
        return httpRequestServer({
            method:'POST',
            url:'/exclusiveDocking/list',
            data:data
        })
    },
    //专属对接码详情
    exclusiveDockingDetail(data) {
        return httpRequestServer({
            method:'POST',
            url:'/exclusiveDocking/detail',
            data:data
        })
    },
    //取消专属对接
    cancelDocking(data) {
        return httpRequestServer({
            method:'POST',
            url:'/exclusiveDocking/cancelCode',
            data:data
        })
    },
    //确认专属对接
    confirmCode(data) {
        return httpRequestServer({
            method:'POST',
            url:'/exclusiveDocking/confirmCode',
            data:data
        })
    },

    
    // ===========邀请发单用户模块===========
    // 个人邀请信息
    getInviteInfo(data){
        return httpRequestServer({
            method:'GET',
            url:'/invite/info'
        })
    },
    // 我的邀请收益
    mineInviteReward(data){
        return httpRequestServer({
            method:'GET',
            url:'/invite/money',
            data:data,
        })
    },
    // 邀请记录列表
    inviteRecordList(data){
        return httpRequestServer({
            method:'GET',
            url:'/invite/record/' + data.type,
        })
    },
    // 查询金额变动记录
    withdrawChangeRecord(){
        return httpRequestServer({
            method:'GET',
            url:'/invite/money/transfer/record'
        })
    },
    // 转入余额
    transferBalance(data){
        return httpRequestServer({
            method:'PUT',
            url:'/invite/money/transfer',
            data: data
        })
    }
}