
import { userModel }from '@/http/index.js';
import { modalAlertServer ,modalLoadingServer } from '@/server/modals/index';


var TokenServer =  function(){

	var self = this;

	this.setToken = function(token){
		localStorage.setItem('qnzhuan-ds-web-token',token);
	}

	this.getToken = function(){
		var token = localStorage.getItem('qnzhuan-ds-web-token');

		if(token){
			return token;
		}else{
			return false;
		}	
	}

	this.removeToken = function(){
		localStorage.removeItem('qnzhuan-ds-web-token');
	}





	this.setUserInfo = function(info){
		localStorage.setItem('qnzhuan-user-info',JSON.stringify(info));
	}

	this.getUserInfo = function(){
		var info = localStorage.getItem('qnzhuan-user-info');

		if(info){
			return JSON.parse(info);
		}else{
			return false;
		}
	}

	this.removeUserInfo = function(){
		localStorage.removeItem('qnzhuan-user-info');
	}


	// 更新用户基本信息
	this.updateUserInfo = function(callback){
		modalLoadingServer.loading();
		userModel.getUserInfo().then(function(data){
            modalLoadingServer.unload();
            if(data.returnCode == 100){
            	self.setUserInfo(data.data);
            	if(callback){
            		callback(data.data)
            	}
            }else{
                modalAlertServer({
                    title:'提示',
                    message:data.returnMsg || '请求错误',
                    type:'error',
                    confirmButtonText:'关闭'
                })
            }
        })
	}




	return this;
	
}



export default new TokenServer()




