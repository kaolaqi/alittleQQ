webpackJsonp([3],{322:function(e,n,t){function o(e){a||t(380)}var a=!1,i=t(17)(t(348),t(393),o,"data-v-6a91dd6c",null);i.options.__file="/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/contacts/index/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},331:function(e,n,t){e.exports={default:t(333),__esModule:!0}},332:function(e,n,t){"use strict";n.__esModule=!0;var o=t(331),a=function(e){return e&&e.__esModule?e:{default:e}}(o);n.default=a.default||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}},333:function(e,n,t){t(337),e.exports=t(18).Object.assign},334:function(e,n,t){"use strict";var o=t(135),a=t(335),i=t(336),r=t(68),s=t(134),c=Object.assign;e.exports=!c||t(67)(function(){var e={},n={},t=Symbol(),o="abcdefghijklmnopqrst";return e[t]=7,o.split("").forEach(function(e){n[e]=e}),7!=c({},e)[t]||Object.keys(c({},n)).join("")!=o})?function(e,n){for(var t=r(e),c=arguments.length,A=1,l=a.f,d=i.f;c>A;)for(var p,u=s(arguments[A++]),f=l?o(u).concat(l(u)):o(u),m=f.length,B=0;m>B;)d.call(u,p=f[B++])&&(t[p]=u[p]);return t}:c},335:function(e,n){n.f=Object.getOwnPropertySymbols},336:function(e,n){n.f={}.propertyIsEnumerable},337:function(e,n,t){var o=t(27);o(o.S+o.F,"Object",{assign:t(334)})},338:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"NavHead",props:["title","ongHistoryBack","isBack","customBtn","onClickCustom","whiteColor","noShadow","avatar","icon"],data:function(){return{}},methods:{onBacK:function(){if(this.ongHistoryBack)return this.ongHistoryBack(),!1;this.$router.go(-1)},onCustom:function(){this.onClickCustom&&this.onClickCustom()},center:function(){console.log("个人中心侧栏")}}}},339:function(e,n,t){n=e.exports=t(320)(!0),n.push([e.i,".nav-head-container{position:fixed;top:0;left:0;right:0;line-height:.88rem;height:.88rem;text-align:center;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;color:#333;display:block;z-index:10;-webkit-box-shadow:0 3px 6px 0 hsla(0,0%,62%,.1);box-shadow:0 3px 6px 0 hsla(0,0%,62%,.1)}.nav-head-container.blue{background-color:#0ef9e0}.nav-head-container .nav-head-back-btn{margin-left:.35rem;float:left;z-index:15;position:relative}.nav-head-container .nav-head-back-btn i{position:relative;top:.14rem}.nav-head-container .nav-head-back-btn img{width:.5rem;border-radius:50%;border:1px solid #ccc;vertical-align:middle}.nav-head-container .nav-head-custom-btn{position:relative;float:right;margin-right:.34rem;line-height:.88rem;height:.88rem;z-index:15;color:#343643;font-size:.28rem}.nav-head-container .nav-head-custom-btn i{font-size:22px;vertical-align:middle}.nav-head-container .nav-head-title{position:absolute;left:0;right:0;text-align:center;color:#343643;line-height:.88rem;height:.88rem;z-index:10;font-size:.36rem}.nav-head-container .nav-head-title.no-shadow{-webkit-box-shadow:none;box-shadow:none}.nav-head-container.white{background-color:transparent}.nav-head-container.white .nav-head-custom-btn,.nav-head-container.white .nav-head-title{color:#fff}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/navHead/index.scss","/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/style/variable.scss"],names:[],mappings:"AAEA,oBAKE,eAAe,AACf,MAAM,AACN,OAAS,AACT,QAAU,AACV,mBCV4B,ADW5B,cAAe,AACf,kBAAkB,AAClB,sBAAsB,AACtB,8BAAsB,AAAtB,sBAAsB,AACtB,gBAAgB,AAChB,WAAW,AACX,cAAc,AACd,WAAW,AACX,iDAAoD,AAApD,wCAAoD,CAkErD,AApFD,yBAqBI,wBACF,CAAC,AAtBH,uCAyBI,mBC1B0B,AD2B1B,WAAW,AACX,WAAW,AACX,iBAAkB,CAcnB,AA1CH,yCA+BM,kBAAkB,AAClB,UCjCwB,CDkCzB,AAjCL,2CAqCM,YCtCwB,ADuCxB,kBAAkB,AAClB,sBAAsB,AACtB,qBAAsB,CACvB,AAzCL,yCA6CI,kBAAkB,AAClB,YAAY,AACZ,oBChD0B,ADiD1B,mBCjD0B,ADkD1B,cClD0B,ADmD1B,WAAW,AACX,cAAc,AACd,gBCrD0B,CD2D3B,AA1DH,2CAuDM,eAAe,AACf,qBAAsB,CACvB,AAzDL,oCA6DI,kBAAkB,AAClB,OAAS,AACT,QAAU,AACV,kBAAkB,AAClB,cAAc,AACd,mBCnE0B,ADoE1B,cCpE0B,ADqE1B,WAAW,AACX,gBCtE0B,CD2E3B,AA1EH,8CAwEM,wBAAgB,AAAhB,eAAgB,CACjB,AAzEL,0BA6EI,4BAA6B,CAM9B,AAnFH,yFAiFM,UAAW,CACZ",file:"index.vue",sourcesContent:["@import '../../../style/variable.scss';\n\n.nav-head-container {\n  // padding-top: px2rem(40);\n  // padding-top: px2rem(60);\n  // padding-top: calc(constant(safe-area-inset-bottom) + 0.4rem);\n  // padding-top: calc(env(safe-area-inset-bottom) + 0.4rem);\n  position: fixed;\n  top: 0;\n  left: 0px;\n  right: 0px;\n  line-height: px2rem(88);\n  height: 0.88rem;\n  text-align: center;\n  background-color: #fff;\n  box-sizing: border-box;\n  overflow: hidden;\n  color: #333;\n  display: block;\n  z-index: 10;\n  box-shadow: 0px 3px 6px 0px rgba(158, 158, 158, 0.1);\n\n  &.blue {\n    background-color: #0ef9e0\n  }\n\n  .nav-head-back-btn {\n    margin-left: px2rem(35);\n    float: left;\n    z-index: 15;\n    position: relative;\n\n    i {\n      position: relative;\n      top: px2rem(14);\n    }\n\n    img {\n      width: px2rem(50);\n      width: px2rem(50);\n      border-radius: 50%;\n      border: 1px solid #ccc;\n      vertical-align: middle;\n    }\n  }\n\n  .nav-head-custom-btn {\n    position: relative;\n    float: right;\n    margin-right: px2rem(34);\n    line-height: px2rem(88);\n    height: px2rem(88);\n    z-index: 15;\n    color: #343643;\n    font-size: px2rem(28);\n\n    i {\n      font-size: 22px;\n      vertical-align: middle;\n    }\n  }\n\n  .nav-head-title {\n    position: absolute;\n    left: 0px;\n    right: 0px;\n    text-align: center;\n    color: #343643;\n    line-height: px2rem(88);\n    height: px2rem(88);\n    z-index: 10;\n    font-size: px2rem(36);\n\n    &.no-shadow {\n      box-shadow: none;\n    }\n  }\n\n  &.white {\n    background-color: transparent;\n\n    .nav-head-title,\n    .nav-head-custom-btn {\n      color: #fff;\n    }\n  }\n}\n","@function px2rem($px, $base:100) {\n    @return $px / $base * 1rem;\n}\n\n"],sourceRoot:""}])},340:function(e,n,t){var o=t(339);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(321)("10c359e6",o,!1)},341:function(e,n,t){function o(e){a||t(340)}var a=!1,i=t(17)(t(338),t(342),o,null,null);i.options.__file="/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/navHead/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},342:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"nav-head-container",class:{white:e.whiteColor}},[e.isBack?t("div",{staticClass:"nav-head-back-btn common-clear-fixed",on:{click:e.onBacK}},[t("i",{staticClass:"cicon",class:{"icon-return":!e.whiteColor,"icon-return_white":e.whiteColor}})]):e._e(),e._v(" "),e.avatar?t("div",{staticClass:"nav-head-back-btn common-clear-fixed",on:{click:e.center}},[t("img",{attrs:{src:e.avatar}})]):e._e(),e._v(" "),t("div",{staticClass:"nav-head-title common-clear-fixed",class:{"no-shadow":e.noShadow}},[e._v(e._s(e.title))]),e._v(" "),e.customBtn?t("div",{staticClass:"nav-head-custom-btn common-clear-fixed",on:{click:e.onCustom}},[e._v(e._s(e.customBtn))]):e._e(),e._v(" "),e.icon?t("div",{staticClass:"nav-head-custom-btn common-clear-fixed",on:{click:e.onCustom}},[t("van-icon",{attrs:{name:e.icon}})],1):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},343:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"FooterTab",data:function(){return{}},computed:{activeIndex:function(){var e=this.$route.path.match(/\/(.*)\//)[1];return"message"===e?1:"contacts"===e?2:"user"===e?3:""}},methods:{goLink:function(e){var n=this;if(e!==n.activeIndex)switch(e){case 1:n.$router.push({name:"MessageIndex"});break;case 2:n.$router.push({name:"ContactsList"});break;case 3:n.$router.push({name:"user"})}}}}},344:function(e,n,t){n=e.exports=t(320)(!0),n.push([e.i,".footer-tab-container[data-v-f09beec8]{position:fixed;left:0;right:0;bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom);min-height:.98rem;border-top:.01rem solid #e7e7e7;overflow:hidden;background-color:#fff}.footer-tab-container a[data-v-f09beec8]{width:33.33%;height:100%;float:left;text-align:center;color:#999;position:relative}.footer-tab-container a.active[data-v-f09beec8]{color:#1989fa}.footer-tab-container a i[data-v-f09beec8]{display:inline-block;margin-top:4px;vertical-align:middle}.footer-tab-container a span[data-v-f09beec8]{display:block;font-size:.22rem}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/footerTab/index.scss","/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/style/variable.scss"],names:[],mappings:"AAGA,uCACI,eAAe,AACf,OAAQ,AACR,QAAS,AACT,SAAU,AACV,8BAAsB,AAAtB,sBAAsB,AACtB,gDAAgD,AAChD,2CAA2C,AAC3C,kBCV0B,ADW1B,gCAAkC,AAClC,gBAAgB,AAChB,qBAAqB,CAqBxB,AAhCD,yCAaQ,aAAY,AACZ,YAAY,AACZ,WAAU,AACV,kBAAkB,AAClB,WAAU,AACV,iBAAkB,CAarB,AA/BL,gDAoBY,aAAa,CAChB,AArBT,2CAuBU,qBAAqB,AACrB,eAAe,AACf,qBAAsB,CACvB,AA1BT,8CA4BY,cAAc,AACd,gBC/BkB,CDgCrB",file:"index.vue",sourcesContent:["\n@import '../../../style/variable.scss';\n\n.footer-tab-container{\n    position: fixed;\n    left:0px;\n    right:0px;\n    bottom:0px;\n    box-sizing: border-box;\n    padding-bottom: constant(safe-area-inset-bottom);\n    padding-bottom: env(safe-area-inset-bottom);\n    min-height: px2rem(98);\n    border-top:px2rem(1) solid #e7e7e7;\n    overflow: hidden;\n    background-color:#fff;\n    a{\n        width:33.33%;\n        height: 100%;\n        float:left;\n        text-align: center;\n        color:#999;\n        position: relative;\n        &.active{\n            color:#1989fa;\n        }\n        i{\n          display: inline-block;\n          margin-top: 4px;\n          vertical-align: middle;\n        }\n        span{\n            display: block;\n            font-size: px2rem(22);\n        }\n    }\n}\n \n\n \n\n\n ","@function px2rem($px, $base:100) {\n    @return $px / $base * 1rem;\n}\n\n"],sourceRoot:""}])},345:function(e,n,t){var o=t(344);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(321)("194ccdc6",o,!1)},346:function(e,n,t){function o(e){a||t(345)}var a=!1,i=t(17)(t(343),t(347),o,"data-v-f09beec8",null);i.options.__file="/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/common/footerTab/index.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},347:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"footer-tab-container"},[t("a",{class:{active:1===e.activeIndex},on:{click:function(n){return e.goLink(1)}}},[t("van-icon",{attrs:{name:"chat-o",size:"20px"}}),e._v(" "),t("span",[e._v("消息")])],1),e._v(" "),t("a",{class:{active:2===e.activeIndex},on:{click:function(n){return e.goLink(2)}}},[t("van-icon",{attrs:{name:"friends-o",size:"22px"}}),e._v(" "),t("span",[e._v("联系人")])],1),e._v(" "),t("a",{class:{active:3===e.activeIndex},on:{click:function(n){return e.goLink(3)}}},[t("van-icon",{attrs:{name:"manager-o",size:"20px"}}),e._v(" "),t("span",[e._v("我的")])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},348:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(332),a=t.n(o),i=t(136),r=t(66),s=t(346),c=t.n(s),A=t(341),l=t.n(A);n.default={name:"ContactsList",components:{footerTab:c.a,navHead:l.a},data:function(){return{friendList:[]}},computed:a()({},t.i(i.b)(["avatar","userId","mobile"])),mounted:function(){this.getFriendList()},methods:{getFriendList:function(){var e=this;r.a.getUserFriendList({userId:this.userId}).then(function(n){200===n.statusCode&&(e.friendList=n.result)})},goUserDetail:function(e){this.$router.push({name:"UserDetail",params:{mobile:e}})},search:function(){this.$router.push({name:"SearchUser"})}}}},369:function(e,n,t){n=e.exports=t(320)(!0),n.push([e.i,".contacts-list[data-v-6a91dd6c]{-webkit-box-sizing:border-box;box-sizing:border-box;padding-top:.88rem;padding-bottom:1.04rem}.contacts-list li[data-v-6a91dd6c]{display:-webkit-box;display:-ms-flexbox;display:flex;border-bottom:1px solid #f0f0f0;padding:10px 0}.contacts-list li .avatar[data-v-6a91dd6c]{padding:0 10px}.contacts-list li .avatar img[data-v-6a91dd6c]{width:.8rem;border-radius:50%;background-color:#f0f0f0;vertical-align:middle}.contacts-list li .info[data-v-6a91dd6c]{padding-top:.08rem}.contacts-list li .info .sign[data-v-6a91dd6c]{padding-top:.04rem;color:#ccc;font-size:.24rem}","",{version:3,sources:["/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/contacts/index/index.scss","/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/style/variable.scss"],names:[],mappings:"AAIA,gCACE,8BAAsB,AAAtB,sBAAsB,AACtB,mBCL4B,ADM5B,sBCN4B,CD6B7B,AA1BD,mCAKI,oBAAa,AAAb,oBAAa,AAAb,aAAa,AACb,gCAAgC,AAChC,cAAe,CAkBhB,AAzBH,2CASM,cAAe,CAOhB,AAhBL,+CAWQ,YCdsB,ADetB,kBAAkB,AAClB,yBAAyB,AACzB,qBAAsB,CACvB,AAfP,yCAkBM,kBCrBwB,CD2BzB,AAxBL,+CAoBQ,mBCvBsB,ADwBtB,WAAW,AACX,gBCzBsB,CD0BvB",file:"index.vue",sourcesContent:["\n\n@import '../../../../style/variable.scss';\n\n.contacts-list{\n  box-sizing: border-box;\n  padding-top: px2rem(88);\n  padding-bottom: px2rem(104);\n  li{\n    display: flex;\n    border-bottom: 1px solid #f0f0f0;\n    padding: 10px 0;\n    .avatar{\n      padding: 0 10px;\n      img{\n        width: px2rem(80);\n        border-radius: 50%;\n        background-color: #f0f0f0;\n        vertical-align: middle;\n      }\n    }\n    .info{\n      padding-top: px2rem(8);\n      .sign{\n        padding-top: px2rem(4);\n        color: #ccc;\n        font-size: px2rem(24);\n      }\n    }\n  }\n}","@function px2rem($px, $base:100) {\n    @return $px / $base * 1rem;\n}\n\n"],sourceRoot:""}])},380:function(e,n,t){var o=t(369);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(321)("2aa20899",o,!1)},393:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"task-index"},[t("nav-head",{attrs:{title:"联系人",avatar:e.avatar,icon:"plus","on-click-custom":e.search}}),e._v(" "),t("ul",{staticClass:"contacts-list"},e._l(e.friendList,function(n){return t("li",{key:n.friendUserId,on:{click:function(t){return e.goUserDetail(n.userInfo.mobile)}}},[t("div",{staticClass:"avatar"},[t("img",{attrs:{src:n.userInfo.avatar,alt:""}})]),e._v(" "),t("div",{staticClass:"info"},[e._v("\n        "+e._s(n.userInfo.nickname)+"\n        "),t("p",{staticClass:"sign"},[e._v("[4G在线]"+e._s(n.userInfo.sign))])])])}),0),e._v(" "),t("footer-tab")],1)},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=3.654551f6edab9a015c66.js.map