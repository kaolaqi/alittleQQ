webpackJsonp([6],{330:function(e,t,o){function s(e){n||o(371)}var n=!1,r=o(17)(o(356),o(384),s,null,null);r.options.__file="/Users/kaolaqilee/Documents/projectDemo/alittleQQ/src/component/app/user/layout.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] layout.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},356:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"userLayout",data:function(){return{}},mounted:function(){"commissionSet"!==this.$route.name&&"taskResultAppeal"!==this.$route.name||(this.$refs.layout.style.backgroundColor="#f9f9f9")},methods:{},beforeDestroy:function(){"commissionSetList"===this.$route.name||"commissionSet"===this.$route.name||"taskResultAppeal"===this.$route.name?this.$refs.layout.style.backgroundColor="#f9f9f9":this.$refs.layout&&(this.$refs.layout.style.backgroundColor="#fff")}}},360:function(e,t,o){t=e.exports=o(320)(!0),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"layout.vue",sourceRoot:""}])},371:function(e,t,o){var s=o(360);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o(321)("2fbee592",s,!1)},384:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"slide-right"}},[o("div",{ref:"layout",staticClass:"layout",staticStyle:{"background-color":"#fff",height:"100%"}},[o("router-view")],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});
//# sourceMappingURL=6.ad110770675c0ed4ea49.js.map