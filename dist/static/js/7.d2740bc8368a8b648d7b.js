webpackJsonp([7],{319:function(n,e,t){function i(n){t(370)}var o=t(23)(t(347),t(385),i,"data-v-2f7f8091",null);n.exports=o.exports},347:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=t(133),o=t(45),a=/^1[2|3|4|5|6|7|8|9|]\d{9}$/,r=/^[\w|\d|\u4e00-\u9fa5|]{2,8}$/;e.default={name:"Login",components:{},data:function(){return{mobile:"",nickname:"",password:"",againPassword:"",isSendValidateCode:!1,validateCode:"",inviteCode:"",dtRegister:"",sendPedding:!1,randToken:"",isVisible:!1}},computed:{showClearIcon:function(){return!!this.mobile},isLogin:function(){return a.test(this.mobile)&&r.test(this.nickname)&&this.password&&this.password===this.againPassword}},methods:{inputMobile:function(){this.mobile.length>11&&(this.mobile=this.mobile.substring(0,11))},clear:function(){this.mobile=""},back:function(){this.$router.go(-1)},submit:function(){var n=this;o.c.loading(),i.a.userResigter({mobile:n.mobile,nickname:n.nickname,password:n.password}).then(function(e){o.c.unload(),console.log(e),200===e.statusCode?o.b.use({title:"提示",confirmText:"立即登录",content:"恭喜你，注册成功！",onClickConfirm:function(){n.$router.push({name:"login"})}}):111===e.statusCode?o.a.show(e.message,1e3):413===e.statusCode?o.a.show("验证码错误，请重试",1e3):o.b.use({content:e.message})})},resize:function(){document.body&&(document.body.scrollTop=0)}}}},357:function(n,e,t){e=n.exports=t(309)(!0),e.push([n.i,".login-page[data-v-2f7f8091]{height:100%;width:100%;position:relative;color:#303030}.login-page .title[data-v-2f7f8091]{padding-top:1.9rem;padding-left:.6rem;font-size:.48rem;color:#303030;position:relative}.login-page .title i[data-v-2f7f8091]{position:absolute;top:.74rem;left:.35rem}.login-page .login-register-container[data-v-2f7f8091]{padding:1.08rem .6rem .6rem}.login-page .login-register-container .input-container[data-v-2f7f8091]{width:100%;line-height:1.08rem;font-size:.32rem;border-bottom:.01rem solid #e7e7e7;overflow:hidden;position:relative}.login-page .login-register-container .input-container[data-v-2f7f8091]:last-child{border-bottom:0}.login-page .login-register-container .input-container .label[data-v-2f7f8091]{float:left;width:25%}.login-page .login-register-container .input-container input[data-v-2f7f8091]{border:0;font-size:.6rem;width:65%;font-size:.32rem;line-height:1rem}.login-page .login-register-container .input-container input.validate-code[data-v-2f7f8091]{width:40%}.login-page .login-register-container .input-container button[data-v-2f7f8091]{position:absolute;top:0;right:0;z-index:5;height:.68rem;width:2rem;text-align:center;line-height:34px;font-size:.24rem;margin-top:.22rem;margin-bottom:.1rem;border-radius:.1rem;background-color:#fff;color:#ccc;border:0;pointer-events:none}.login-page .login-register-container .input-container button.active[data-v-2f7f8091]{pointer-events:auto;color:#1989fa}.login-page .login-register-container .hint[data-v-2f7f8091]{margin:10px}.login-page .login-register-container .hint .label[data-v-2f7f8091]{font-weight:600;font-size:.64rem}.login-page .login-register-container .hint .content[data-v-2f7f8091]{margin-top:10px;text-indent:30px}.login-page .content[data-v-2f7f8091]{color:#6c6e76;font-size:.24rem;margin-top:.24rem}.login-page .content span[data-v-2f7f8091]{color:#526de0}.login-page .footer-button[data-v-2f7f8091]{background-color:#ddd;color:#fff;line-height:.98rem;text-align:center;font-size:.34rem;margin-top:.8rem;border-radius:4px;pointer-events:none}.login-page .footer-button.active[data-v-2f7f8091]{color:#fff;background-color:#1989fa;background:-webkit-gradient(linear,left top,right top,from(#78bafd),to(#007fff));background:linear-gradient(90deg,#78bafd,#007fff);pointer-events:auto}.login-page .admin-info[data-v-2f7f8091]{margin-top:.5rem}.login-page .admin-info .item[data-v-2f7f8091]{padding:.28rem 0;position:relative}.login-page .admin-info .item.wechat[data-v-2f7f8091]{border-bottom:.01rem solid #efeff3}.login-page .admin-info .item .account[data-v-2f7f8091]{display:inline-block;margin-left:.24rem}.login-page .admin-info .item .account p[data-v-2f7f8091]{color:#b4b0b0;font-size:.24rem;margin-bottom:.04rem}.login-page .admin-info .item .account span[data-v-2f7f8091]{color:#4a4747;font-size:.28rem;font-weight:600}.login-page .admin-info .item .copy[data-v-2f7f8091]{position:absolute;top:.34rem;right:0}.login-page .admin-info .item .copy button[data-v-2f7f8091]{border:none;outline:none;background-color:#fff;color:#526de0;display:inline-block;text-align:center;width:1.3rem;height:.64rem;line-height:.64rem;border-radius:.32rem;border:.01rem solid #d0d0d0}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/registe/index.vue"],names:[],mappings:"AACA,6BACE,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,aAAe,CAChB,AACD,oCACI,mBAAoB,AACpB,mBAAqB,AACrB,iBAAmB,AACnB,cAAe,AACf,iBAAmB,CACtB,AACD,sCACM,kBAAmB,AACnB,WAAa,AACb,WAAc,CACnB,AACD,uDACI,2BAA+B,CAClC,AACD,wEACM,WAAY,AACZ,oBAAqB,AACrB,iBAAmB,AACnB,mCAAqC,AACrC,gBAAiB,AACjB,iBAAmB,CACxB,AACD,mFACQ,eAAmB,CAC1B,AACD,+EACQ,WAAY,AACZ,SAAW,CAClB,AACD,8EACQ,SAAY,AACZ,gBAAkB,AAClB,UAAW,AACX,iBAAmB,AACnB,gBAAkB,CACzB,AACD,4FACU,SAAW,CACpB,AACD,+EACQ,kBAAmB,AACnB,MAAO,AACP,QAAS,AACT,UAAW,AACX,cAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,iBAAkB,AAClB,iBAAmB,AACnB,kBAAoB,AACpB,oBAAsB,AACtB,oBAAsB,AACtB,sBAAuB,AACvB,WAAe,AACf,SAAY,AACZ,mBAAqB,CAC5B,AACD,sFACU,oBAAqB,AACrB,aAAe,CACxB,AACD,6DACM,WAAa,CAClB,AACD,oEACQ,gBAAiB,AACjB,gBAAmB,CAC1B,AACD,sEACQ,gBAAiB,AACjB,gBAAkB,CACzB,AACD,sCACI,cAAe,AACf,iBAAmB,AACnB,iBAAoB,CACvB,AACD,2CACM,aAAe,CACpB,AACD,4CACI,sBAA0B,AAC1B,WAAY,AACZ,mBAAqB,AACrB,kBAAmB,AACnB,iBAAmB,AACnB,iBAAmB,AACnB,kBAAmB,AACnB,mBAAqB,CACxB,AACD,mDACM,WAAY,AACZ,yBAA0B,AAC1B,iFAAsF,AACtF,kDAA6D,AAC7D,mBAAqB,CAC1B,AACD,yCACI,gBAAmB,CACtB,AACD,+CACM,iBAAmB,AACnB,iBAAmB,CACxB,AACD,sDACQ,kCAAqC,CAC5C,AACD,wDACQ,qBAAsB,AACtB,kBAAqB,CAC5B,AACD,0DACU,cAAe,AACf,iBAAmB,AACnB,oBAAuB,CAChC,AACD,6DACU,cAAe,AACf,iBAAmB,AACnB,eAAiB,CAC1B,AACD,qDACQ,kBAAmB,AACnB,WAAa,AACb,OAAS,CAChB,AACD,4DACU,YAAa,AACb,aAAc,AACd,sBAAuB,AACvB,cAAe,AACf,qBAAsB,AACtB,kBAAmB,AACnB,aAAc,AACd,cAAgB,AAChB,mBAAqB,AACrB,qBAAuB,AACvB,2BAA8B,CACvC",file:"index.vue",sourcesContent:["\n.login-page[data-v-2f7f8091] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  color: #303030;\n}\n.login-page .title[data-v-2f7f8091] {\n    padding-top: 1.9rem;\n    padding-left: 0.6rem;\n    font-size: 0.48rem;\n    color: #303030;\n    position: relative;\n}\n.login-page .title i[data-v-2f7f8091] {\n      position: absolute;\n      top: 0.74rem;\n      left: 0.35rem;\n}\n.login-page .login-register-container[data-v-2f7f8091] {\n    padding: 1.08rem 0.6rem 0.6rem;\n}\n.login-page .login-register-container .input-container[data-v-2f7f8091] {\n      width: 100%;\n      line-height: 1.08rem;\n      font-size: 0.32rem;\n      border-bottom: 0.01rem solid #E7E7E7;\n      overflow: hidden;\n      position: relative;\n}\n.login-page .login-register-container .input-container[data-v-2f7f8091]:last-child {\n        border-bottom: 0px;\n}\n.login-page .login-register-container .input-container .label[data-v-2f7f8091] {\n        float: left;\n        width: 25%;\n}\n.login-page .login-register-container .input-container input[data-v-2f7f8091] {\n        border: 0px;\n        font-size: 0.6rem;\n        width: 65%;\n        font-size: 0.32rem;\n        line-height: 1rem;\n}\n.login-page .login-register-container .input-container input.validate-code[data-v-2f7f8091] {\n          width: 40%;\n}\n.login-page .login-register-container .input-container button[data-v-2f7f8091] {\n        position: absolute;\n        top: 0;\n        right: 0;\n        z-index: 5;\n        height: 0.68rem;\n        width: 2rem;\n        text-align: center;\n        line-height: 34px;\n        font-size: 0.24rem;\n        margin-top: 0.22rem;\n        margin-bottom: 0.1rem;\n        border-radius: 0.1rem;\n        background-color: #fff;\n        color: #CCCCCC;\n        border: 0px;\n        pointer-events: none;\n}\n.login-page .login-register-container .input-container button.active[data-v-2f7f8091] {\n          pointer-events: auto;\n          color: #1989fa;\n}\n.login-page .login-register-container .hint[data-v-2f7f8091] {\n      margin: 10px;\n}\n.login-page .login-register-container .hint .label[data-v-2f7f8091] {\n        font-weight: 600;\n        font-size: 0.64rem;\n}\n.login-page .login-register-container .hint .content[data-v-2f7f8091] {\n        margin-top: 10px;\n        text-indent: 30px;\n}\n.login-page .content[data-v-2f7f8091] {\n    color: #6C6E76;\n    font-size: 0.24rem;\n    margin-top: 0.24rem;\n}\n.login-page .content span[data-v-2f7f8091] {\n      color: #526DE0;\n}\n.login-page .footer-button[data-v-2f7f8091] {\n    background-color: #DDDDDD;\n    color: #fff;\n    line-height: 0.98rem;\n    text-align: center;\n    font-size: 0.34rem;\n    margin-top: 0.8rem;\n    border-radius: 4px;\n    pointer-events: none;\n}\n.login-page .footer-button.active[data-v-2f7f8091] {\n      color: #fff;\n      background-color: #1989fa;\n      background: -webkit-gradient(linear, left top, right top, from(#78bafd), to(#007fff));\n      background: linear-gradient(90deg, #78bafd 0%, #007fff 100%);\n      pointer-events: auto;\n}\n.login-page .admin-info[data-v-2f7f8091] {\n    margin-top: 0.5rem;\n}\n.login-page .admin-info .item[data-v-2f7f8091] {\n      padding: 0.28rem 0;\n      position: relative;\n}\n.login-page .admin-info .item.wechat[data-v-2f7f8091] {\n        border-bottom: 0.01rem solid #EFEFF3;\n}\n.login-page .admin-info .item .account[data-v-2f7f8091] {\n        display: inline-block;\n        margin-left: 0.24rem;\n}\n.login-page .admin-info .item .account p[data-v-2f7f8091] {\n          color: #B4B0B0;\n          font-size: 0.24rem;\n          margin-bottom: 0.04rem;\n}\n.login-page .admin-info .item .account span[data-v-2f7f8091] {\n          color: #4A4747;\n          font-size: 0.28rem;\n          font-weight: 600;\n}\n.login-page .admin-info .item .copy[data-v-2f7f8091] {\n        position: absolute;\n        top: 0.34rem;\n        right: 0;\n}\n.login-page .admin-info .item .copy button[data-v-2f7f8091] {\n          border: none;\n          outline: none;\n          background-color: #fff;\n          color: #526DE0;\n          display: inline-block;\n          text-align: center;\n          width: 1.3rem;\n          height: 0.64rem;\n          line-height: 0.64rem;\n          border-radius: 0.32rem;\n          border: 0.01rem solid #d0d0d0;\n}\n"],sourceRoot:""}])},370:function(n,e,t){var i=t(357);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(310)("61e315c8",i,!0)},385:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"login-page"},[t("h1",{staticClass:"title"},[t("i",{staticClass:"cicon icon-return",on:{click:n.back}}),n._v("注册alittleQQ")]),n._v(" "),t("div",{staticClass:"login-register-container"},[t("div",{staticClass:"input-container"},[t("span",{staticClass:"label"},[n._v("手机号")]),n._v(" "),t("span",{staticClass:"phone"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.mobile,expression:"mobile"}],attrs:{type:"number",placeholder:"请输入手机号码"},domProps:{value:n.mobile},on:{input:[function(e){e.target.composing||(n.mobile=e.target.value)},n.inputMobile],blur:n.resize}})]),n._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:n.showClearIcon,expression:"showClearIcon"}],staticClass:"cicon icon-log-icon-close",on:{click:n.clear}})]),n._v(" "),t("div",{staticClass:"input-container"},[t("span",{staticClass:"label"},[n._v("昵称")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.nickname,expression:"nickname"}],attrs:{type:"text",placeholder:"请输入昵称"},domProps:{value:n.nickname},on:{blur:n.resize,input:function(e){e.target.composing||(n.nickname=e.target.value)}}})]),n._v(" "),t("div",{staticClass:"input-container"},[t("span",{staticClass:"label"},[n._v("密码")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.password,expression:"password"}],attrs:{type:"password",placeholder:"请填写密码"},domProps:{value:n.password},on:{blur:n.resize,input:function(e){e.target.composing||(n.password=e.target.value)}}})]),n._v(" "),t("div",{staticClass:"input-container"},[t("span",{staticClass:"label"},[n._v("确认密码")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.againPassword,expression:"againPassword"}],attrs:{type:"password",placeholder:"再次填写密码"},domProps:{value:n.againPassword},on:{blur:n.resize,input:function(e){e.target.composing||(n.againPassword=e.target.value)}}})]),n._v(" "),t("div",{staticClass:"footer-button",class:{active:n.isLogin},on:{click:n.submit}},[n._v("\n      注册\n    ")])])])},staticRenderFns:[]}}});
//# sourceMappingURL=7.d2740bc8368a8b648d7b.js.map