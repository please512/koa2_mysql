webpackJsonp([1],{"4g2s":function(e,r){},"4iDy":function(e,r){},GTwd:function(e,r){},NHnr:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t("7+uW"),a=t("zL8q"),s=t.n(a),l=(t("tvR6"),{render:function(){var e=this.$createElement,r=this._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]});var n=t("VU/8")({name:"App"},l,!1,function(e){t("NUhh")},null,null).exports,i=t("/ocq"),u={name:"Home",data:function(){return{ruleForm:{username:"",password:"",passwordtrue:"",captcha:"",createtime:""},loading:!1,rules:{username:[{required:!0,validator:function(e,r,t){""===r?t(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(r)?t():t(new Error("请输入正确的账号"))},trigger:"blur"}],passwordtrue:[{required:!0,message:"密码不能为空",trigger:"blur"}],captcha:[{required:!0,message:"验证码不能为空",trigger:"blur"}]}}},created:function(){},methods:{submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm),r.loading=!0,r.ruleForm.createtime=new Date,r.ruleForm.password=r.$md5.hex_md5(r.ruleForm.passwordtrue),r.$axios.post("/loginIn",r.ruleForm).then(function(e){console.log(e),r.loading=!1,"0"==e.data.state?(console.log("登录成功"),r.$router.push("/index")):(r.$message({message:e.data.msg,type:"error"}),r.editCaptcha())})})},resetpass:function(){this.$router.push("/forgetpass")},resetForm:function(e){this.$refs[e].resetFields()},register:function(){this.$router.push("/register")},editCaptcha:function(){this.$refs.imgYzm.src="/getCaptcha?d="+Math.random()}}},m={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"70px"}},[t("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"passwordtrue"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.ruleForm.passwordtrue,callback:function(r){e.$set(e.ruleForm,"passwordtrue",r)},expression:"ruleForm.passwordtrue"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"验证码",prop:"captcha"}},[t("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[t("el-input",{staticStyle:{width:"73%"},attrs:{placeholder:"请输入验证码",autocomplete:"off"},model:{value:e.ruleForm.captcha,callback:function(r){e.$set(e.ruleForm,"captcha",r)},expression:"ruleForm.captcha"}}),e._v(" "),t("img",{ref:"imgYzm",staticStyle:{width:"25%",height:"40px",overflow:"hidden","border-radius":"4px"},attrs:{src:"/getCaptcha",alt:"captcha"},on:{click:e.editCaptcha}})],1)]),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("登录")]),e._v(" "),t("el-button",{on:{click:function(r){return e.register()}}},[e._v("注册")]),e._v(" "),t("el-button",{on:{click:function(r){return e.resetpass()}}},[e._v("找回密码")])],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")(u,m,!1,function(e){t("4g2s")},"data-v-47441b65",null).exports,p={name:"Register",data:function(){return{ruleForm:{username:"",password:"",passwordtrue:"",fathername:"",mothername:"",othername:"",createtime:""},loading:!1,rules:{username:[{required:!0,validator:function(e,r,t){""===r?t(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(r)?t():t(new Error("请输入正确的账号"))},trigger:"blur"}],passwordtrue:[{required:!0,message:"密码不能为空"}],fathername:[{required:!0,message:"父亲的名字不能为空"}],mothername:[{required:!0,message:"母亲的名字不能为空"}],othername:[{required:!0,message:"配偶的名字不能为空"}]}}},created:function(){console.log(this.$tools.getnowtime(new Date))},methods:{submitForm:function(e){var r=this,t=this.$tools.getnowtime(new Date);this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm),r.ruleForm.createtime=t,r.loading=!0,r.ruleForm.password=r.$md5.hex_md5(r.ruleForm.passwordtrue),r.$axios.post("/register",r.ruleForm).then(function(e){console.log(e),r.loading=!1,"0"==e.data.state?(console.log("注册成功"),r.$message({message:e.data.msg,type:"success"}),r.$router.go(-1)):r.$message({message:e.data.msg,type:"error"})})})},resetForm:function(e){this.$refs[e].resetFields()}}},d={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[t("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"passwordtrue"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.ruleForm.passwordtrue,callback:function(r){e.$set(e.ruleForm,"passwordtrue",r)},expression:"ruleForm.passwordtrue"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[t("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(r){e.$set(e.ruleForm,"fathername",r)},expression:"ruleForm.fathername"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[t("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(r){e.$set(e.ruleForm,"mothername",r)},expression:"ruleForm.mothername"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[t("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(r){e.$set(e.ruleForm,"othername",r)},expression:"ruleForm.othername"}})],1),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("注册")])],1)],1)],1)},staticRenderFns:[]};var f=t("VU/8")(p,d,!1,function(e){t("GTwd")},"data-v-720a40e2",null).exports,h={name:"ForgetPass",data:function(){return{ruleForm:{username:"",fathername:"",mothername:"",othername:""},passForm:{username:"",password:"",passwordtrue:""},loading:!1,rules:{username:[{required:!0,validator:function(e,r,t){""===r?t(new Error("请输入账号")):/^1[3456789]\d{9}$/.test(r)?t():t(new Error("请输入正确的账号"))},trigger:"blur"}],fathername:[{required:!0,message:"父亲的名字不能为空",trigger:"blur"}],mothername:[{required:!0,message:"母亲的名字不能为空",trigger:"blur"}],othername:[{required:!0,message:"配偶的名字不能为空",trigger:"blur"}]},passRule:{passwordtrue:[{required:!0,message:"新密码不能为空",trigger:"blur"}]},dialogVisible:!1}},created:function(){},methods:{submitPassForm:function(e){var r=this;this.$refs[e].validate(function(e){e&&(console.log(r.passForm),r.passForm.username=r.ruleForm.username,r.passForm.password=r.$md5.hex_md5(r.passForm.passwordtrue),r.$axios.post("/resetPass",r.passForm).then(function(e){console.log(e),"0"==e.data.state?(r.$message({message:e.data.msg,type:"success"}),r.dialogVisible=!1):r.$message({message:e.data.msg,type:"error"}),r.passForm.password=""}))})},submitForm:function(e){var r=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(r.ruleForm),r.loading=!0,r.$axios.post("/validateQues",r.ruleForm).then(function(e){r.loading=!1,console.log(e),"0"==e.data.state?(r.dialogVisible=!0,r.passForm.password=""):r.$message({message:e.data.msg,type:"error"})})})},login:function(){this.$router.go(-1)},resetForm:function(e){this.$refs[e].resetFields()}}},g={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"60px"}},[t("el-form-item",{attrs:{"label-position":"left",label:"账号",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号",autocomplete:"off"},model:{value:e.ruleForm.username,callback:function(r){e.$set(e.ruleForm,"username",r)},expression:"ruleForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密保1",prop:"fathername"}},[t("el-input",{attrs:{placeholder:"请输入您父亲的名字",autocomplete:"off"},model:{value:e.ruleForm.fathername,callback:function(r){e.$set(e.ruleForm,"fathername",r)},expression:"ruleForm.fathername"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密保2",prop:"mothername"}},[t("el-input",{attrs:{placeholder:"请输入您母亲的名字",autocomplete:"off"},model:{value:e.ruleForm.mothername,callback:function(r){e.$set(e.ruleForm,"mothername",r)},expression:"ruleForm.mothername"}})],1),e._v(" "),t("el-form-item",{attrs:{"label-position":"left",label:"密保3",prop:"othername"}},[t("el-input",{attrs:{placeholder:"请输入您配偶的名字",autocomplete:"off"},model:{value:e.ruleForm.othername,callback:function(r){e.$set(e.ruleForm,"othername",r)},expression:"ruleForm.othername"}})],1),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("设置密码")])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"设置密码",visible:e.dialogVisible},on:{"update:visible":function(r){e.dialogVisible=r}}},[t("el-form",{ref:"passForm",staticClass:"demo-ruleForm",staticStyle:{width:"50%",margin:"0 auto"},attrs:{model:e.passForm,rules:e.passRule,"label-width":"60px"}},[t("div",[t("el-form-item",{attrs:{"label-position":"left",label:"密码",prop:"passwordtrue"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码",autocomplete:"off"},model:{value:e.passForm.passwordtrue,callback:function(r){e.$set(e.passForm,"passwordtrue",r)},expression:"passForm.passwordtrue"}})],1),e._v(" "),t("div",{staticClass:"dialog-footer",staticStyle:{display:"flex","justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitPassForm("passForm")}}},[e._v("更换密码")])],1)],1)])],1)],1)},staticRenderFns:[]};var F=t("VU/8")(h,g,!1,function(e){t("4iDy")},"data-v-0dfe9947",null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("h1",{staticStyle:{color:"red"}},[this._v("欢迎来到聊天娱乐平台！李正阳正在火速开发中，敬请期待...")])])}]};var b=t("VU/8")({name:"Index",data:function(){return{}},created:function(){},methods:{}},v,!1,function(e){t("n20l")},"data-v-d9267b98",null).exports;o.default.use(i.a);var w=new i.a({routes:[{path:"/",name:"Home",component:c},{path:"/register",name:"Register",component:f},{path:"/forgetpass",name:"ForgetPass",component:F},{path:"/index",name:"Index",component:b}]}),$=t("mtWM"),x=t.n($);function y(e){return e<10?"0"+e:e.toString()}var _={getnowtime:function(e){var r=e.getFullYear(),t=e.getMonth()+1,o=e.getDay(),a=e.getHours(),s=e.getMinutes(),l=e.getSeconds();return y(r)+"-"+y(t)+"-"+y(o)+" "+y(a)+":"+y(s)+":"+y(l)}},k=0,C=8;function q(e){return j(E(U(e),e.length*C))}function E(e,r){e[r>>5]|=128<<r%32,e[14+(r+64>>>9<<4)]=r;for(var t=1732584193,o=-271733879,a=-1732584194,s=271733878,l=0;l<e.length;l+=16){var n=t,i=o,u=a,m=s;o=D(o=D(o=D(o=D(o=A(o=A(o=A(o=A(o=V(o=V(o=V(o=V(o=S(o=S(o=S(o=S(o,a=S(a,s=S(s,t=S(t,o,a,s,e[l+0],7,-680876936),o,a,e[l+1],12,-389564586),t,o,e[l+2],17,606105819),s,t,e[l+3],22,-1044525330),a=S(a,s=S(s,t=S(t,o,a,s,e[l+4],7,-176418897),o,a,e[l+5],12,1200080426),t,o,e[l+6],17,-1473231341),s,t,e[l+7],22,-45705983),a=S(a,s=S(s,t=S(t,o,a,s,e[l+8],7,1770035416),o,a,e[l+9],12,-1958414417),t,o,e[l+10],17,-42063),s,t,e[l+11],22,-1990404162),a=S(a,s=S(s,t=S(t,o,a,s,e[l+12],7,1804603682),o,a,e[l+13],12,-40341101),t,o,e[l+14],17,-1502002290),s,t,e[l+15],22,1236535329),a=V(a,s=V(s,t=V(t,o,a,s,e[l+1],5,-165796510),o,a,e[l+6],9,-1069501632),t,o,e[l+11],14,643717713),s,t,e[l+0],20,-373897302),a=V(a,s=V(s,t=V(t,o,a,s,e[l+5],5,-701558691),o,a,e[l+10],9,38016083),t,o,e[l+15],14,-660478335),s,t,e[l+4],20,-405537848),a=V(a,s=V(s,t=V(t,o,a,s,e[l+9],5,568446438),o,a,e[l+14],9,-1019803690),t,o,e[l+3],14,-187363961),s,t,e[l+8],20,1163531501),a=V(a,s=V(s,t=V(t,o,a,s,e[l+13],5,-1444681467),o,a,e[l+2],9,-51403784),t,o,e[l+7],14,1735328473),s,t,e[l+12],20,-1926607734),a=A(a,s=A(s,t=A(t,o,a,s,e[l+5],4,-378558),o,a,e[l+8],11,-2022574463),t,o,e[l+11],16,1839030562),s,t,e[l+14],23,-35309556),a=A(a,s=A(s,t=A(t,o,a,s,e[l+1],4,-1530992060),o,a,e[l+4],11,1272893353),t,o,e[l+7],16,-155497632),s,t,e[l+10],23,-1094730640),a=A(a,s=A(s,t=A(t,o,a,s,e[l+13],4,681279174),o,a,e[l+0],11,-358537222),t,o,e[l+3],16,-722521979),s,t,e[l+6],23,76029189),a=A(a,s=A(s,t=A(t,o,a,s,e[l+9],4,-640364487),o,a,e[l+12],11,-421815835),t,o,e[l+15],16,530742520),s,t,e[l+2],23,-995338651),a=D(a,s=D(s,t=D(t,o,a,s,e[l+0],6,-198630844),o,a,e[l+7],10,1126891415),t,o,e[l+14],15,-1416354905),s,t,e[l+5],21,-57434055),a=D(a,s=D(s,t=D(t,o,a,s,e[l+12],6,1700485571),o,a,e[l+3],10,-1894986606),t,o,e[l+10],15,-1051523),s,t,e[l+1],21,-2054922799),a=D(a,s=D(s,t=D(t,o,a,s,e[l+8],6,1873313359),o,a,e[l+15],10,-30611744),t,o,e[l+6],15,-1560198380),s,t,e[l+13],21,1309151649),a=D(a,s=D(s,t=D(t,o,a,s,e[l+4],6,-145523070),o,a,e[l+11],10,-1120210379),t,o,e[l+2],15,718787259),s,t,e[l+9],21,-343485551),t=N(t,n),o=N(o,i),a=N(a,u),s=N(s,m)}return Array(t,o,a,s)}function R(e,r,t,o,a,s){return N((l=N(N(r,e),N(o,s)))<<(n=a)|l>>>32-n,t);var l,n}function S(e,r,t,o,a,s,l){return R(r&t|~r&o,e,r,a,s,l)}function V(e,r,t,o,a,s,l){return R(r&o|t&~o,e,r,a,s,l)}function A(e,r,t,o,a,s,l){return R(r^t^o,e,r,a,s,l)}function D(e,r,t,o,a,s,l){return R(t^(r|~o),e,r,a,s,l)}function N(e,r){var t=(65535&e)+(65535&r);return(e>>16)+(r>>16)+(t>>16)<<16|65535&t}function U(e){for(var r=Array(),t=(1<<C)-1,o=0;o<e.length*C;o+=C)r[o>>5]|=(e.charCodeAt(o/C)&t)<<o%32;return r}function j(e){for(var r=k?"0123456789ABCDEF":"0123456789abcdef",t="",o=0;o<4*e.length;o++)t+=r.charAt(e[o>>2]>>o%4*8+4&15)+r.charAt(e[o>>2]>>o%4*8&15);return t}var P={hex_md5:q};x.a.defaults.withCredentials=!0,x.a.defaults.crossDomain=!0,o.default.prototype.$axios=x.a,o.default.prototype.$tools=_,o.default.prototype.$md5=P,o.default.config.productionTip=!1,o.default.use(s.a),new o.default({el:"#app",router:w,components:{App:n},template:"<App/>"})},NUhh:function(e,r){},n20l:function(e,r){},tvR6:function(e,r){}},["NHnr"]);
//# sourceMappingURL=app.c20439ff3488a62b6e30.js.map