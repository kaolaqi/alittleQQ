webpackJsonp([1],{329:function(e,t,n){function a(e){n(381)}var i=n(17)(n(355),n(394),a,"data-v-bd8d3d7c",null);e.exports=i.exports},331:function(e,t,n){e.exports={default:n(333),__esModule:!0}},332:function(e,t,n){"use strict";t.__esModule=!0;var a=n(331),i=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},333:function(e,t,n){n(337),e.exports=n(18).Object.assign},334:function(e,t,n){"use strict";var a=n(135),i=n(335),o=n(336),r=n(68),s=n(134),A=Object.assign;e.exports=!A||n(67)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=A({},e)[n]||Object.keys(A({},t)).join("")!=a})?function(e,t){for(var n=r(e),A=arguments.length,d=1,c=i.f,l=o.f;A>d;)for(var m,C=s(arguments[d++]),u=c?a(C).concat(c(C)):a(C),b=u.length,p=0;b>p;)l.call(C,m=u[p++])&&(n[m]=C[m]);return n}:A},335:function(e,t){t.f=Object.getOwnPropertySymbols},336:function(e,t){t.f={}.propertyIsEnumerable},337:function(e,t,n){var a=n(27);a(a.S+a.F,"Object",{assign:n(334)})},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"FooterTab",data:function(){return{}},computed:{activeIndex:function(){var e=this.$route.path.match(/\/(.*)\//)[1];return"message"===e?1:"contacts"===e?2:"user"===e?3:""}},methods:{goLink:function(e){var t=this;if(e!==t.activeIndex)switch(e){case 1:t.$router.push({name:"MessageIndex"});break;case 2:t.$router.push({name:"ContactsList"});break;case 3:t.$router.push({name:"user"})}}}}},344:function(e,t,n){t=e.exports=n(320)(!0),t.push([e.i,".footer-tab-container[data-v-f09beec8]{position:fixed;left:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);min-height:.98rem;border-top:.01rem solid #e7e7e7;overflow:hidden;background-color:#fff}.footer-tab-container a[data-v-f09beec8]{width:33.33%;height:100%;float:left;text-align:center;color:#999;position:relative}.footer-tab-container a.active[data-v-f09beec8]{color:#1989fa}.footer-tab-container a i[data-v-f09beec8]{display:inline-block;margin-top:4px;vertical-align:middle}.footer-tab-container a span[data-v-f09beec8]{display:block;font-size:.22rem}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/footerTab/index.vue"],names:[],mappings:"AACA,uCACE,eAAgB,AAChB,OAAU,AACV,QAAW,AACX,SAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,gDAAiD,AACjD,2CAA4C,AAC5C,kBAAoB,AACpB,gCAAkC,AAClC,gBAAiB,AACjB,qBAAuB,CACxB,AACD,yCACI,aAAc,AACd,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,WAAY,AACZ,iBAAmB,CACtB,AACD,gDACM,aAAe,CACpB,AACD,2CACM,qBAAsB,AACtB,eAAgB,AAChB,qBAAuB,CAC5B,AACD,8CACM,cAAe,AACf,gBAAmB,CACxB",file:"index.vue",sourcesContent:["\n.footer-tab-container[data-v-f09beec8] {\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: constant(safe-area-inset-bottom);\n  padding-bottom: env(safe-area-inset-bottom);\n  min-height: 0.98rem;\n  border-top: 0.01rem solid #e7e7e7;\n  overflow: hidden;\n  background-color: #fff;\n}\n.footer-tab-container a[data-v-f09beec8] {\n    width: 33.33%;\n    height: 100%;\n    float: left;\n    text-align: center;\n    color: #999;\n    position: relative;\n}\n.footer-tab-container a.active[data-v-f09beec8] {\n      color: #1989fa;\n}\n.footer-tab-container a i[data-v-f09beec8] {\n      display: inline-block;\n      margin-top: 4px;\n      vertical-align: middle;\n}\n.footer-tab-container a span[data-v-f09beec8] {\n      display: block;\n      font-size: 0.22rem;\n}\n"],sourceRoot:""}])},345:function(e,t,n){var a=n(344);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(321)("194ccdc6",a,!0)},346:function(e,t,n){function a(e){n(345)}var i=n(17)(n(343),n(347),a,"data-v-f09beec8",null);e.exports=i.exports},347:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-tab-container"},[n("a",{class:{active:1===e.activeIndex},on:{click:function(t){return e.goLink(1)}}},[n("van-icon",{attrs:{name:"chat-o",size:"20px"}}),e._v(" "),n("span",[e._v("消息")])],1),e._v(" "),n("a",{class:{active:2===e.activeIndex},on:{click:function(t){return e.goLink(2)}}},[n("van-icon",{attrs:{name:"friends-o",size:"22px"}}),e._v(" "),n("span",[e._v("联系人")])],1),e._v(" "),n("a",{class:{active:3===e.activeIndex},on:{click:function(t){return e.goLink(3)}}},[n("van-icon",{attrs:{name:"manager-o",size:"20px"}}),e._v(" "),n("span",[e._v("我的")])],1)])},staticRenderFns:[]}},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(332),i=n.n(a),o=n(136),r=n(346),s=n.n(r),A=n(383),d=n.n(A),c=n(28);t.default={name:"User",components:{footerTab:s.a,setUserName:d.a},computed:i()({},n.i(o.b)(["avatar","nickname"])),data:function(){return{isVisible:!1,qnzUserPlatform:""}},mounted:function(){},beforeDestroy:function(){var e=document.querySelector(".layout-outer");e&&(e.style.background="#fff")},methods:{logout:function(){var e=this;c.c.use({title:"提示",content:"确定要退出登录吗？",confirmClick:function(){e.$store.dispatch("user/Logout").then(function(t){console.log("登路成功"),e.$router.push({name:"login"})}).catch(function(e){c.b.use({content:e.returnMsg})})}})},showEditUsername:function(){this.isVisible=!0},closeEdit:function(){this.isVisible=!1}}}},358:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(66),i=n(69),o=n(28);t.default={name:"ModalSetUserName",data:function(){return{userName:"",firstFlag:!1,isVisible:!1}},updated:function(){var e=this;e.isVisible&&e.oldUserName&&!e.firstFlag&&(e.firstFlag=!0,e.userName=e.oldUserName)},methods:{clearText:function(){this.userName=""},submitSetUserName:function(){var e=this;if(e.submitCancel(),!e.userName)return o.b.use({content:"用户昵称不能为空"}),!1;o.d.loading("提交中"),a.a.setUserName({nickName:e.userName}).then(function(t){o.d.unload(),100===t.returnCode?o.b.use({content:"修改成功",onClickConfirm:function(){o.b.hide(),e.$parent.userInfo.nickName=e.userName,i.a.updateUserInfo()}}):o.b.use({content:t.returnMsg})})},submitCancel:function(){this.$emit("closeEdit")}}}},368:function(e,t,n){t=e.exports=n(320)(!0),t.push([e.i,'.modal-setUserName[data-v-5882b7d6]{position:absolute;top:50%;left:50%;margin-left:-2.95rem;margin-top:-1.75rem;width:5.9rem;background-color:#fff;border-radius:.08rem}.modal-setUserName .head[data-v-5882b7d6]{font-weight:700;font-size:.32rem;color:#393836;text-align:center;margin:.5rem 0 .3rem}.modal-setUserName p[data-v-5882b7d6]{margin:0 .3rem;border:.01rem solid #eee;line-height:.84rem;height:.84rem;padding:.04rem .33rem;position:relative}.modal-setUserName p input[data-v-5882b7d6]{display:block;border:none;outline:none;height:.8rem}.modal-setUserName p i[data-v-5882b7d6]{position:absolute;top:.3rem;right:.33rem}.modal-setUserName .btn[data-v-5882b7d6]{border-top:.01rem solid #efeff3;overflow:hidden;line-height:.96rem;text-align:center;margin-top:.5rem}.modal-setUserName .btn div[data-v-5882b7d6]{width:50%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;float:left;border:0;margin:0;border-right:1px solid #efeff3;color:#9194a2;font-size:.34rem}.modal-setUserName .btn div[data-v-5882b7d6]:after{content:"";display:block;clear:both}.modal-setUserName .btn div[data-v-5882b7d6]:last-child{border-right:none;color:#1989fa}',"",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/modals/setUserName/index.vue"],names:[],mappings:"AACA,oCACE,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,qBAAsB,AACtB,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,oBAAuB,CACxB,AACD,0CACI,gBAAiB,AACjB,iBAAmB,AACnB,cAAe,AACf,kBAAmB,AACnB,oBAAwB,CAC3B,AACD,sCACI,eAAiB,AACjB,yBAA8B,AAC9B,mBAAqB,AACrB,cAAgB,AAChB,sBAAyB,AACzB,iBAAmB,CACtB,AACD,4CACM,cAAe,AACf,YAAa,AACb,aAAc,AACd,YAAe,CACpB,AACD,wCACM,kBAAmB,AACnB,UAAY,AACZ,YAAe,CACpB,AACD,yCACI,gCAAkC,AAClC,gBAAiB,AACjB,mBAAqB,AACrB,kBAAmB,AACnB,gBAAmB,CACtB,AACD,6CACM,UAAW,AACX,YAAa,AACb,8BAA+B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,SAAY,AACZ,SAAY,AACZ,+BAAgC,AAChC,cAAe,AACf,gBAAmB,CACxB,AACD,mDACQ,WAAY,AACZ,cAAe,AACf,UAAY,CACnB,AACD,wDACQ,kBAAmB,AACnB,aAAe,CACtB",file:"index.vue",sourcesContent:["\n.modal-setUserName[data-v-5882b7d6] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -2.95rem;\n  margin-top: -1.75rem;\n  width: 5.9rem;\n  background-color: #fff;\n  border-radius: 0.08rem;\n}\n.modal-setUserName .head[data-v-5882b7d6] {\n    font-weight: 700;\n    font-size: 0.32rem;\n    color: #393836;\n    text-align: center;\n    margin: 0.5rem 0 0.3rem;\n}\n.modal-setUserName p[data-v-5882b7d6] {\n    margin: 0 0.3rem;\n    border: 0.01rem solid #EEEEEE;\n    line-height: 0.84rem;\n    height: 0.84rem;\n    padding: 0.04rem 0.33rem;\n    position: relative;\n}\n.modal-setUserName p input[data-v-5882b7d6] {\n      display: block;\n      border: none;\n      outline: none;\n      height: 0.8rem;\n}\n.modal-setUserName p i[data-v-5882b7d6] {\n      position: absolute;\n      top: 0.3rem;\n      right: 0.33rem;\n}\n.modal-setUserName .btn[data-v-5882b7d6] {\n    border-top: 0.01rem solid #EFEFF3;\n    overflow: hidden;\n    line-height: 0.96rem;\n    text-align: center;\n    margin-top: 0.5rem;\n}\n.modal-setUserName .btn div[data-v-5882b7d6] {\n      width: 50%;\n      height: 100%;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      float: left;\n      border: 0px;\n      margin: 0px;\n      border-right: 1px solid #EFEFF3;\n      color: #9194A2;\n      font-size: 0.34rem;\n}\n.modal-setUserName .btn div[data-v-5882b7d6]:after {\n        content: '';\n        display: block;\n        clear: both;\n}\n.modal-setUserName .btn div[data-v-5882b7d6]:last-child {\n        border-right: none;\n        color: #1989fa;\n}\n"],sourceRoot:""}])},370:function(e,t,n){t=e.exports=n(320)(!0),t.push([e.i,".user-index-page[data-v-bd8d3d7c]{padding-bottom:1rem}.user-index-page .banner[data-v-bd8d3d7c]{padding:.8rem 0 .28rem .4rem;position:relative;background:-webkit-gradient(linear,left top,right top,from(#78bafd),to(#007fff));background:linear-gradient(90deg,#78bafd,#007fff)}.user-index-page .banner img[data-v-bd8d3d7c]{width:1.2rem;height:1.2rem;border-radius:50%;vertical-align:middle}.user-index-page .banner span[data-v-bd8d3d7c]{line-height:1.2rem;font-weight:700;font-size:.36rem;padding-left:.3rem;color:#fff}.user-index-page .banner i[data-v-bd8d3d7c]{position:absolute;top:.22rem;right:.48rem}.user-index-page .item-list[data-v-bd8d3d7c]{background:#fff;margin-top:.2rem}.user-index-page .item-list .link-item[data-v-bd8d3d7c]{display:block;margin:0 .34rem;border-bottom:.01rem solid #eee;line-height:1.12rem;position:relative}.user-index-page .item-list .link-item.no-border[data-v-bd8d3d7c],.user-index-page .item-list .link-item[data-v-bd8d3d7c]:last-child{border:none}.user-index-page .item-list .link-item i[data-v-bd8d3d7c]{vertical-align:middle}.user-index-page .item-list .link-item i.row[data-v-bd8d3d7c]{position:absolute;top:.48rem;right:0}.user-index-page .item-list .link-item span[data-v-bd8d3d7c]{vertical-align:middle;font-size:.32rem;margin-left:.32rem}.user-index-page .item-list a[data-v-bd8d3d7c]:active{background-color:transparent!important}.user-index-page .connect-praent[data-v-bd8d3d7c]{margin-top:.64rem;text-align:center}.user-index-page .connect-praent .label[data-v-bd8d3d7c]{color:#6d6d6d;font-size:.3rem;margin-bottom:.3rem}.user-index-page .connect-praent p[data-v-bd8d3d7c]{color:#999;font-size:.26rem;margin-bottom:.3rem}.user-index-page .connect-praent p span[data-v-bd8d3d7c]{color:#1d7bef;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}.user-index-page .logout-btn[data-v-bd8d3d7c]{padding:.1rem .6rem .64rem}.user-index-page .logout-btn button[data-v-bd8d3d7c]{border:none;display:block;width:100%;height:.98rem;line-height:.98rem;color:#333;background-color:#f2f3f6;font-size:.34rem;border-radius:.06rem}.user-index-page .logout-btn button[data-v-bd8d3d7c]:active{background-color:#f0f0f0}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/user/index/index.vue"],names:[],mappings:"AACA,kCACE,mBAAqB,CACtB,AACD,0CACI,6BAAiC,AACjC,kBAAmB,AACnB,iFAAsF,AACtF,iDAA6D,CAChE,AACD,8CACM,aAAc,AACd,cAAe,AACf,kBAAmB,AACnB,qBAAuB,CAC5B,AACD,+CACM,mBAAoB,AACpB,gBAAiB,AACjB,iBAAmB,AACnB,mBAAqB,AACrB,UAAY,CACjB,AACD,4CACM,kBAAmB,AACnB,WAAa,AACb,YAAe,CACpB,AACD,6CACI,gBAAiB,AACjB,gBAAmB,CACtB,AACD,wDACM,cAAe,AACf,gBAAkB,AAClB,gCAAqC,AACrC,oBAAqB,AACrB,iBAAmB,CACxB,AAID,qIACQ,WAAa,CACpB,AACD,0DACQ,qBAAuB,CAC9B,AACD,8DACU,kBAAmB,AACnB,WAAa,AACb,OAAS,CAClB,AACD,6DACQ,sBAAuB,AACvB,iBAAmB,AACnB,kBAAqB,CAC5B,AACD,sDACM,sCAAyC,CAC9C,AACD,kDACI,kBAAoB,AACpB,iBAAmB,CACtB,AACD,yDACM,cAAe,AACf,gBAAkB,AAClB,mBAAsB,CAC3B,AACD,oDACM,WAAY,AACZ,iBAAmB,AACnB,mBAAsB,CAC3B,AACD,yDACQ,cAAe,AACf,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CACjC,AACD,8CACI,0BAA+B,CAClC,AACD,qDACM,YAAa,AACb,cAAe,AACf,WAAY,AACZ,cAAgB,AAChB,mBAAqB,AACrB,WAAe,AACf,yBAA0B,AAC1B,iBAAmB,AACnB,oBAAuB,CAC5B,AACD,4DACQ,wBAA0B,CACjC",file:"index.vue",sourcesContent:["\n.user-index-page[data-v-bd8d3d7c] {\n  padding-bottom: 1rem;\n}\n.user-index-page .banner[data-v-bd8d3d7c] {\n    padding: 0.8rem 0 0.28rem 0.4rem;\n    position: relative;\n    background: -webkit-gradient(linear, left top, right top, from(#78bafd), to(#007fff));\n    background: linear-gradient(90deg, #78bafd 0%, #007fff 100%);\n}\n.user-index-page .banner img[data-v-bd8d3d7c] {\n      width: 1.2rem;\n      height: 1.2rem;\n      border-radius: 50%;\n      vertical-align: middle;\n}\n.user-index-page .banner span[data-v-bd8d3d7c] {\n      line-height: 1.2rem;\n      font-weight: 700;\n      font-size: 0.36rem;\n      padding-left: 0.3rem;\n      color: #fff;\n}\n.user-index-page .banner i[data-v-bd8d3d7c] {\n      position: absolute;\n      top: 0.22rem;\n      right: 0.48rem;\n}\n.user-index-page .item-list[data-v-bd8d3d7c] {\n    background: #fff;\n    margin-top: 0.2rem;\n}\n.user-index-page .item-list .link-item[data-v-bd8d3d7c] {\n      display: block;\n      margin: 0 0.34rem;\n      border-bottom: 0.01rem solid #EEEEEE;\n      line-height: 1.12rem;\n      position: relative;\n}\n.user-index-page .item-list .link-item[data-v-bd8d3d7c]:last-child {\n        border: none;\n}\n.user-index-page .item-list .link-item.no-border[data-v-bd8d3d7c] {\n        border: none;\n}\n.user-index-page .item-list .link-item i[data-v-bd8d3d7c] {\n        vertical-align: middle;\n}\n.user-index-page .item-list .link-item i.row[data-v-bd8d3d7c] {\n          position: absolute;\n          top: 0.48rem;\n          right: 0;\n}\n.user-index-page .item-list .link-item span[data-v-bd8d3d7c] {\n        vertical-align: middle;\n        font-size: 0.32rem;\n        margin-left: 0.32rem;\n}\n.user-index-page .item-list a[data-v-bd8d3d7c]:active {\n      background-color: transparent !important;\n}\n.user-index-page .connect-praent[data-v-bd8d3d7c] {\n    margin-top: 0.64rem;\n    text-align: center;\n}\n.user-index-page .connect-praent .label[data-v-bd8d3d7c] {\n      color: #6D6D6D;\n      font-size: 0.3rem;\n      margin-bottom: 0.3rem;\n}\n.user-index-page .connect-praent p[data-v-bd8d3d7c] {\n      color: #999;\n      font-size: 0.26rem;\n      margin-bottom: 0.3rem;\n}\n.user-index-page .connect-praent p span[data-v-bd8d3d7c] {\n        color: #1D7BEF;\n        -webkit-user-select: text;\n           -moz-user-select: text;\n            -ms-user-select: text;\n                user-select: text;\n}\n.user-index-page .logout-btn[data-v-bd8d3d7c] {\n    padding: 0.1rem 0.6rem 0.64rem;\n}\n.user-index-page .logout-btn button[data-v-bd8d3d7c] {\n      border: none;\n      display: block;\n      width: 100%;\n      height: 0.98rem;\n      line-height: 0.98rem;\n      color: #333333;\n      background-color: #F2F3F6;\n      font-size: 0.34rem;\n      border-radius: 0.06rem;\n}\n.user-index-page .logout-btn button[data-v-bd8d3d7c]:active {\n        background-color: #f0f0f0;\n}\n"],sourceRoot:""}])},379:function(e,t,n){var a=n(368);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(321)("7818e20e",a,!0)},381:function(e,t,n){var a=n(370);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(321)("3dab62b4",a,!0)},383:function(e,t,n){function a(e){n(379)}var i=n(17)(n(358),n(392),a,"data-v-5882b7d6",null);e.exports=i.exports},392:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isVisible?n("div",{staticClass:"modals-component-container"},[n("div",{staticClass:"modal-setUserName"},[n("div",{staticClass:"head"},[e._v("修改昵称")]),e._v(" "),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],attrs:{type:"text"},domProps:{value:e.userName},on:{input:[function(t){t.target.composing||(e.userName=t.target.value)},function(t){e.updateFlag=!0}]}}),e._v(" "),n("i",{directives:[{name:"show",rawName:"v-show",value:e.userName,expression:"userName"}],staticClass:"cicon icon-nicknames_clear",on:{click:e.clearText}})]),e._v(" "),n("div",{staticClass:"btn"},[n("div",{staticClass:"cancel",on:{click:e.submitCancel}},[e._v("取消")]),e._v(" "),n("div",{staticClass:"confirm",on:{click:e.submitSetUserName}},[e._v("确定")])])])]):e._e()},staticRenderFns:[]}},394:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-index-page"},[n("div",{staticClass:"banner"},[n("img",{attrs:{src:e.avatar,alt:""}}),e._v(" "),n("span",[e._v(e._s(e.nickname))]),e._v(" "),n("i",{staticClass:"cicon icon-edit",on:{click:e.showEditUsername}})]),e._v(" "),n("div",{staticClass:"item-list"},[n("router-link",{staticClass:"link-item",attrs:{to:{name:"wallet"}}},[n("i",{staticClass:"cicon icon-wallet"}),e._v(" "),n("span",[e._v("钱包余额")]),e._v(" "),n("i",{staticClass:"cicon icon-personal_right row"})]),e._v(" "),n("router-link",{staticClass:"link-item",attrs:{to:{name:"commissionSetList",params:{searchPhone:"null"}}}},[n("i",{staticClass:"cicon icon-commission"}),e._v(" "),n("span",[e._v("抽成设置")]),e._v(" "),n("i",{staticClass:"cicon icon-personal_right row"})]),e._v(" "),n("router-link",{staticClass:"link-item",attrs:{to:{name:"rewardStatistic",params:{searchPhone:"null"}}}},[n("i",{staticClass:"cicon icon-bounty"}),e._v(" "),n("span",[e._v("赏金数据统计")]),e._v(" "),n("i",{staticClass:"cicon icon-personal_right row"})]),e._v(" "),n("router-link",{staticClass:"link-item",attrs:{to:{name:"taskResultAppeal"}}},[n("i",{staticClass:"cicon icon-task"}),e._v(" "),n("span",[e._v("任务结果申诉")]),e._v(" "),n("i",{staticClass:"cicon icon-personal_right row"})]),e._v(" "),n("router-link",{staticClass:"link-item",attrs:{to:{name:"dockeCodeIndex"}}},[n("i",{staticClass:"cicon icon-exclusive"}),e._v(" "),n("span",[e._v("我的专属对接")]),e._v(" "),n("i",{staticClass:"cicon icon-personal_right row"})])],1),e._v(" "),n("div",{staticClass:"logout-btn"},[n("button",{on:{click:e.logout}},[e._v("退出登录")])]),e._v(" "),n("setUserName",{attrs:{"is-visible":e.isVisible,"old-user-name":e.nickname},on:{closeEdit:e.closeEdit}}),e._v(" "),n("footer-tab",{attrs:{"active-index":3}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=1.6b1c12437ec019081090.js.map