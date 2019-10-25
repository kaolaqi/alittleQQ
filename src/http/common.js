

import httpRequestServer from '../server/http/index';


export default {
    //用户注册
    userResigter:function(data){
        return httpRequestServer({
            method:'POST',
            url: '/api/client/register',
            data: data
        })
    },
    //登录
    userLogin(data){
        return httpRequestServer({
            method:'POST',
            url:'/api/client/login',
            data:data
        })
    },
    //退出登录
    outUser(){
        return httpRequestServer({
            method:'GET',
            url:'/api/client/logout',
        })
    },


    /*//获取验证码图片
    getValidateImg(){
        return httpRequestServer({
            method:'GET',
            url:'/verify/client/obtain-randcode',
        })
    },
    //提交验证码图片信息
    chenckValidateImg(data){
        return httpRequestServer({
            method:'POST',
            url:'/verify/client/check-randcode',
            data:data
        })
    },
    //发送验证码
    sendValidateCode(data){
        return httpRequestServer({
            method:'POST',
            url:'/verify/client/get-smscode',
            data:data
        })
    },



    //注册相关
    sendRegisteCode(data){
        return httpRequestServer({
            method:'GET',
            url:'/app/register/msg/' + data.phone + '/' + data.randToken,
        })
    },
    userRegisite(data){
        return httpRequestServer({
            method:'POST',
            url:'/app/user/register',
            data: data
        })
    },*/
    



}



