webpackJsonp([4],{325:function(e,n,t){function o(e){i||t(376)}var i=!1,a=t(17)(t(351),t(389),o,"data-v-47e1ca5a",null);a.options.__file="/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/contacts/userDetail/index.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},331:function(e,n,t){e.exports={default:t(333),__esModule:!0}},332:function(e,n,t){"use strict";n.__esModule=!0;var o=t(331),i=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=i.default||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}},333:function(e,n,t){t(337),e.exports=t(18).Object.assign},334:function(e,n,t){"use strict";var o=t(135),i=t(335),a=t(336),r=t(68),s=t(134),c=Object.assign;e.exports=!c||t(67)(function(){var e={},n={},t=Symbol(),o="abcdefghijklmnopqrst";return e[t]=7,o.split("").forEach(function(e){n[e]=e}),7!=c({},e)[t]||Object.keys(c({},n)).join("")!=o})?function(e,n){for(var t=r(e),c=arguments.length,A=1,l=i.f,d=a.f;c>A;)for(var u,p=s(arguments[A++]),f=l?o(p).concat(l(p)):o(p),B=f.length,m=0;B>m;)d.call(p,u=f[m++])&&(t[u]=p[u]);return t}:c},335:function(e,n){n.f=Object.getOwnPropertySymbols},336:function(e,n){n.f={}.propertyIsEnumerable},337:function(e,n,t){var o=t(27);o(o.S+o.F,"Object",{assign:t(334)})},338:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"NavHead",props:["title","ongHistoryBack","isBack","customBtn","onClickCustom","whiteColor","noShadow","avatar","icon"],data:function(){return{}},methods:{onBacK:function(){if(this.ongHistoryBack)return this.ongHistoryBack(),!1;this.$router.go(-1)},onCustom:function(){this.onClickCustom&&this.onClickCustom()},center:function(){console.log("个人中心侧栏")}}}},339:function(e,n,t){n=e.exports=t(320)(!0),n.push([e.i,".nav-head-container{position:fixed;top:0;left:0;right:0;line-height:.88rem;height:.88rem;text-align:center;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;color:#333;display:block;z-index:10;-webkit-box-shadow:0 3px 6px 0 hsla(0,0%,62%,.1);box-shadow:0 3px 6px 0 hsla(0,0%,62%,.1)}.nav-head-container.blue{background-color:#0ef9e0}.nav-head-container .nav-head-back-btn{margin-left:.35rem;float:left;z-index:15;position:relative}.nav-head-container .nav-head-back-btn i{position:relative;top:.14rem}.nav-head-container .nav-head-back-btn img{width:.5rem;border-radius:50%;border:1px solid #ccc;vertical-align:middle}.nav-head-container .nav-head-custom-btn{position:relative;float:right;margin-right:.34rem;line-height:.88rem;height:.88rem;z-index:15;color:#343643;font-size:.28rem}.nav-head-container .nav-head-custom-btn i{font-size:22px;vertical-align:middle}.nav-head-container .nav-head-title{position:absolute;left:0;right:0;text-align:center;color:#343643;line-height:.88rem;height:.88rem;z-index:10;font-size:.36rem}.nav-head-container .nav-head-title.no-shadow{-webkit-box-shadow:none;box-shadow:none}.nav-head-container.white{background-color:transparent}.nav-head-container.white .nav-head-custom-btn,.nav-head-container.white .nav-head-title{color:#fff}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/navHead/index.scss","/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/style/variable.scss"],names:[],mappings:"AAEA,oBAKE,eAAe,AACf,MAAM,AACN,OAAS,AACT,QAAU,AACV,mBCV4B,ADW5B,cAAe,AACf,kBAAkB,AAClB,sBAAsB,AACtB,8BAAsB,AAAtB,sBAAsB,AACtB,gBAAgB,AAChB,WAAW,AACX,cAAc,AACd,WAAW,AACX,iDAAoD,AAApD,wCAAoD,CAkErD,AApFD,yBAqBI,wBACF,CAAC,AAtBH,uCAyBI,mBC1B0B,AD2B1B,WAAW,AACX,WAAW,AACX,iBAAkB,CAcnB,AA1CH,yCA+BM,kBAAkB,AAClB,UCjCwB,CDkCzB,AAjCL,2CAqCM,YCtCwB,ADuCxB,kBAAkB,AAClB,sBAAsB,AACtB,qBAAsB,CACvB,AAzCL,yCA6CI,kBAAkB,AAClB,YAAY,AACZ,oBChD0B,ADiD1B,mBCjD0B,ADkD1B,cClD0B,ADmD1B,WAAW,AACX,cAAc,AACd,gBCrD0B,CD2D3B,AA1DH,2CAuDM,eAAe,AACf,qBAAsB,CACvB,AAzDL,oCA6DI,kBAAkB,AAClB,OAAS,AACT,QAAU,AACV,kBAAkB,AAClB,cAAc,AACd,mBCnE0B,ADoE1B,cCpE0B,ADqE1B,WAAW,AACX,gBCtE0B,CD2E3B,AA1EH,8CAwEM,wBAAgB,AAAhB,eAAgB,CACjB,AAzEL,0BA6EI,4BAA6B,CAM9B,AAnFH,yFAiFM,UAAW,CACZ",file:"index.vue",sourcesContent:["@import '../../../style/variable.scss';\n\n.nav-head-container {\n  // padding-top: px2rem(40);\n  // padding-top: px2rem(60);\n  // padding-top: calc(constant(safe-area-inset-bottom) + 0.4rem);\n  // padding-top: calc(env(safe-area-inset-bottom) + 0.4rem);\n  position: fixed;\n  top: 0;\n  left: 0px;\n  right: 0px;\n  line-height: px2rem(88);\n  height: 0.88rem;\n  text-align: center;\n  background-color: #fff;\n  box-sizing: border-box;\n  overflow: hidden;\n  color: #333;\n  display: block;\n  z-index: 10;\n  box-shadow: 0px 3px 6px 0px rgba(158, 158, 158, 0.1);\n\n  &.blue {\n    background-color: #0ef9e0\n  }\n\n  .nav-head-back-btn {\n    margin-left: px2rem(35);\n    float: left;\n    z-index: 15;\n    position: relative;\n\n    i {\n      position: relative;\n      top: px2rem(14);\n    }\n\n    img {\n      width: px2rem(50);\n      width: px2rem(50);\n      border-radius: 50%;\n      border: 1px solid #ccc;\n      vertical-align: middle;\n    }\n  }\n\n  .nav-head-custom-btn {\n    position: relative;\n    float: right;\n    margin-right: px2rem(34);\n    line-height: px2rem(88);\n    height: px2rem(88);\n    z-index: 15;\n    color: #343643;\n    font-size: px2rem(28);\n\n    i {\n      font-size: 22px;\n      vertical-align: middle;\n    }\n  }\n\n  .nav-head-title {\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    text-align: center;\n    color: #343643;\n    line-height: px2rem(88);\n    height: px2rem(88);\n    z-index: 10;\n    font-size: px2rem(36);\n\n    &.no-shadow {\n      box-shadow: none;\n    }\n  }\n\n  &.white {\n    background-color: transparent;\n\n    .nav-head-title,\n    .nav-head-custom-btn {\n      color: #fff;\n    }\n  }\n}\n","@function px2rem($px, $base:100) {\n    @return $px / $base * 1rem;\n}\n\n"],sourceRoot:""}])},340:function(e,n,t){var o=t(339);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(321)("10c359e6",o,!1)},341:function(e,n,t){function o(e){i||t(340)}var i=!1,a=t(17)(t(338),t(342),o,null,null);a.options.__file="/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/navHead/index.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},342:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nav-head-container",class:{white:e.whiteColor}},[e.isBack?t("div",{staticClass:"nav-head-back-btn common-clear-fixed",on:{click:e.onBacK}},[t("i",{staticClass:"cicon",class:{"icon-return":!e.whiteColor,"icon-return_white":e.whiteColor}})]):e._e(),e._v(" "),e.avatar?t("div",{staticClass:"nav-head-back-btn common-clear-fixed",on:{click:e.center}},[t("img",{attrs:{src:e.avatar}})]):e._e(),e._v(" "),t("div",{staticClass:"nav-head-title common-clear-fixed",class:{"no-shadow":e.noShadow}},[e._v(e._s(e.title))]),e._v(" "),e.customBtn?t("div",{staticClass:"nav-head-custom-btn common-clear-fixed",on:{click:e.onCustom}},[e._v(e._s(e.customBtn))]):e._e(),e._v(" "),e.icon?t("div",{staticClass:"nav-head-custom-btn common-clear-fixed",on:{click:e.onCustom}},[t("van-icon",{attrs:{name:e.icon}})],1):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},351:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(332),i=t.n(o),a=t(136),r=t(66),s=t(341),c=t.n(s),A=t(28);n.default={name:"UserDetail",components:{navHead:c.a},data:function(){return{userInfo:[],isFriend:!1}},computed:i()({},t.i(a.b)(["avatar","userId"])),created:function(){this.getUserInfo()},methods:{getUserInfo:function(){var e=this;r.a.getUserInfo({mobile:this.$route.params.mobile}).then(function(n){200===n.statusCode&&(e.userInfo=n.data,e.ckeckIsfriend())})},ckeckIsfriend:function(){var e=this;r.a.chickIsFriend({userId:this.userId,friendUserId:this.userInfo.userId}).then(function(n){console.log(999,n),200===n.statusCode&&(e.isFriend=n.result>0,console.log(999,e.isFriend))})},addFriend:function(){var e=this;r.a.addUserFriend({userId:this.userId,friendUserId:this.userInfo.userId}).then(function(n){200===n.statusCode&&A.b.use({title:"提示",confirmText:"发消息",content:"添加好友成功",onClickConfirm:function(){e.$router.push({name:"MessageChat",params:{mobile:e.userInfo.mobile}})}})})},toSendMessage:function(){this.$router.push({name:"MessageChat",params:{mobile:this.userInfo.mobile}})}}}},365:function(e,n,t){n=e.exports=t(320)(!0),n.push([e.i,".user-detail[data-v-47e1ca5a]{-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:1.08rem;display:-webkit-box;display:-ms-flexbox;display:flex}.user-detail .avatar[data-v-47e1ca5a]{padding:0 10px}.user-detail .avatar img[data-v-47e1ca5a]{width:.8rem;border-radius:50%;background-color:#f0f0f0;vertical-align:middle}.user-detail .info[data-v-47e1ca5a]{padding-top:.08rem}.user-detail .info .sign[data-v-47e1ca5a]{padding-top:.04rem;color:#ccc;font-size:.24rem}.footer-btn[data-v-47e1ca5a]{position:fixed;bottom:0;left:0;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border-top:1px solid #f0f0f0}.footer-btn button[data-v-47e1ca5a]{display:inline-block;width:100%;border:none;outline:none;line-height:48px;background-color:#f0f0f0;text-align:center;font-size:14px}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/contacts/userDetail/index.scss","/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/style/variable.scss"],names:[],mappings:"AAIA,8BACE,8BAAsB,AAAtB,sBAAsB,AACtB,oBCL4B,ADM5B,oBAAa,AAAb,oBAAa,AAAb,YAAa,CAkBd,AArBD,sCAKI,cAAe,CAOhB,AAZH,0CAOM,YCVwB,ADWxB,kBAAkB,AAClB,yBAAyB,AACzB,qBAAsB,CACvB,AAXL,oCAcI,kBCjB0B,CDuB3B,AApBH,0CAgBM,mBCnBwB,ADoBxB,WAAW,AACX,gBCrBwB,CDsBzB,AAGL,6BACE,eAAe,AACf,SAAS,AACT,OAAO,AACP,WAAW,AACX,8BAAsB,AAAtB,sBAAsB,AACtB,4BAA6B,CAW9B,AAjBD,oCAQI,qBAAqB,AACrB,WAAW,AACX,YAAY,AACZ,aAAa,AACb,iBAAiB,AACjB,yBAAyB,AACzB,kBAAkB,AAClB,cAAe,CAChB",file:"index.vue",sourcesContent:["\n\n@import '../../../../style/variable.scss';\n\n.user-detail{\n  box-sizing: border-box;\n  padding-top: px2rem(108);\n  display: flex;\n  .avatar{\n    padding: 0 10px;\n    img{\n      width: px2rem(80);\n      border-radius: 50%;\n      background-color: #f0f0f0;\n      vertical-align: middle;\n    }\n  }\n  .info{\n    padding-top: px2rem(8);\n    .sign{\n      padding-top: px2rem(4);\n      color: #ccc;\n      font-size: px2rem(24);\n    }\n  }\n}\n.footer-btn{\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  box-sizing: border-box;\n  border-top: 1px solid #f0f0f0;\n  button{\n    display: inline-block;\n    width: 100%;\n    border: none;\n    outline: none;\n    line-height: 48px;\n    background-color: #f0f0f0;\n    text-align: center;\n    font-size: 14px;\n  }\n}","@function px2rem($px, $base:100) {\n    @return $px / $base * 1rem;\n}\n\n"],sourceRoot:""}])},376:function(e,n,t){var o=t(365);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(321)("4107e7c2",o,!1)},389:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("nav-head",{attrs:{title:"用户详情","is-back":!0}}),e._v(" "),t("div",{staticClass:"user-detail"},[t("div",{staticClass:"avatar"},[t("img",{attrs:{src:e.userInfo.avatar,alt:""}})]),e._v(" "),t("div",{staticClass:"info"},[e._v("\n      "+e._s(e.userInfo.nickname)+"\n      "),t("p",{staticClass:"sign"},[e._v(e._s(e.userInfo.mobile))])])]),e._v(" "),t("div",{staticClass:"footer-btn"},[e.isFriend?t("button",{on:{click:e.toSendMessage}},[e._v("发消息")]):t("button",{on:{click:e.addFriend}},[e._v("加好友")])])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=4.86ecf61dfe473fb9b809.js.map