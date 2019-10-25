'use strict'
// 定义全局变量，配置请求服务器地址



if(process.env.NODE_ENV === 'production'){
    //正式环境
	var host = 'http://qnz.jphd.com/ds';
	var inviteHost = 'http://qnz.jphd.com';
	var inviteRegisterAddress = "http://download.jphd.com/static/view";
}else{
    // 测试环境地址
	var host = 'http://test.jphd.com/ds';
	var inviteHost = 'http://test.jphd.com';
	var inviteRegisterAddress = "http://test.jphd.com/static/view";
}



export default {
	host:host,
	inviteHost : inviteHost,
    inviteRegisterAddress : inviteRegisterAddress,
}




