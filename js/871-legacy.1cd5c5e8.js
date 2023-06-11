"use strict";(self["webpackChunkvue_login_signup_ui"]=self["webpackChunkvue_login_signup_ui"]||[]).push([[871],{5657:function(e,t,n){n.d(t,{Z:function(){return m}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",centered:"",title:"User Confirmation"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[n("OverlayComponent",{attrs:{show:e.showOverlayConfirm}},[n("p",{staticClass:"my-4"},[e._v(" Please enter the confirmation code we sent to your email. ")]),n("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[n("b-form-group",{attrs:{"label-for":"name-input","invalid-feedback":e.invFeedbackTxt,state:e.codeState}},[n("b-form-input",{attrs:{id:"name-input",type:"number",state:e.codeState,required:"",size:"lg",placeholder:"Enter your code"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1)])],1)],1)},a=[],r=n(6198),s=(n(8975),n(1801)),i=n(8341),l={name:"ModalConfirmation",components:{OverlayComponent:i.Z},props:{email:{type:String,required:!0}},data:function(){return{code:"",codeState:null,invFeedbackTxt:"Code is required",showOverlayConfirm:!1}},methods:{checkFormValidity:function(){var e=this.$refs.form.checkValidity();return this.codeState=e,e},resetModal:function(){this.code="",this.codeState=null},handleOk:function(e){e.preventDefault(),this.handleSubmit()},handleSubmit:function(){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.checkFormValidity()){t.next=2;break}return t.abrupt("return");case 2:return e.showOverlayConfirm=!e.showOverlayConfirm,t.prev=3,t.next=6,s.Z.confirmation(e.email,e.code);case 6:n=t.sent,e.confirmationMsgBox(n.data.message,"Success","success","OK"),t.next=15;break;case 10:return t.prev=10,t.t0=t["catch"](3),e.confirmationMsgBox(t.t0.response.data.message,"Error","danger","Retry"),e.showOverlayConfirm=!e.showOverlayConfirm,t.abrupt("return");case 15:case"end":return t.stop()}}),t,null,[[3,10]])})))()},confirmationMsgBox:function(e,t,n,o){var a=this;this.$bvModal.msgBoxOk(e,{title:t,size:"sm",buttonSize:"sm",okTitle:o,okVariant:n,cancelTitle:"NO",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((function(e){"success"===n&&e&&(a.resetModal,a.$router.push("/"),a.showOverlayConfirm=!a.showOverlayConfirm)})).catch((function(e){}))}}},u=l,c=n(1001),d=(0,c.Z)(u,o,a,!1,null,null,null),m=d.exports},6098:function(e,t,n){n.d(t,{Z:function(){return u}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal-center",centered:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("p",[e._v(e._s(e.text))])])},a=[],r={props:{value:{type:Boolean,required:!0},text:{type:String,required:!0}},computed:{isOpen:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},s=r,i=n(1001),l=(0,i.Z)(s,o,a,!1,null,null,null),u=l.exports},2871:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("OverlayComponent",{attrs:{show:e.loggedIn}},[e.loggedIn?e._e():n("div",{staticClass:"inner-block"},[n("div",[n("ModalConfirm",{ref:"modalConfirmation",attrs:{email:e.email}}),n("ModalDialog",{attrs:{text:e.modalText},model:{value:e.isModalOpen,callback:function(t){e.isModalOpen=t},expression:"isModalOpen"}})],1),n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-md-12"},[n("h1",{staticClass:"text-center"},[e._v("Login")]),n("OverlayComponent",{attrs:{show:e.showOverlaySignIn}},[n("form",{staticClass:"mt-4",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("div",{staticClass:"form-group fixed-form-margin"},[n("label",{attrs:{for:"email"}},[e._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"",placeholder:"user@mail.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),n("div",{staticClass:"form-group fixed-form-margin"},[n("label",{attrs:{for:"password"}},[e._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e.error?n("p",{staticClass:"text-danger"},[e._v(" Has introducido mal el email o la contraseña. ")]):e._e(),n("button",{staticClass:"btn btn-outline-primary fixed-form-margin",attrs:{type:"submit"}},[e._v("Login")])]),n("p",{staticClass:"mt-3"},[e._v(" ¿Don't have an account? "),n("router-link",{attrs:{to:"/signup"}},[e._v("Signup")])],1)])],1)])])])])},a=[],r=(n(1539),n(1801)),s=n(6098),i=n(8341),l=n(5657),u={components:{ModalDialog:s.Z,OverlayComponent:i.Z,ModalConfirm:l.Z},data:function(){return{email:"",password:"",error:!1,showOverlaySignIn:!1,showOverlayIsLogedIn:!1,modalText:"",isModalOpen:!1}},beforeRouteEnter:function(e,t,n){var o="true"===localStorage.getItem("loggedIn"),a="true"===localStorage.getItem("showOverlaySignIn");o&&!a?n("/operations"):n()},computed:{loggedIn:function(){return"true"===localStorage.getItem("loggedIn")}},methods:{login:function(){var e=this;this.showOverlaySignIn=!this.showOverlaySignIn,r.Z.signin(this.email,this.password).then((function(t){console.log(t),e.$eventBus.loggedIn="true",e.$eventBus.token=t.data.access_token,e.$eventBus.userBalance=t.data.user.balance,e.$eventBus.userName=t.data.user.username,e.$router.push("/operations")})).catch((function(t){"User is not confirmed. Please confirm your account."===t.response.data.message?e.$bvModal.msgBoxConfirm([t.response.data.message],{buttonSize:"sm",centered:!0,size:"sm"}).then((function(t){t&&e.$refs.modalConfirmation.$refs.modal.show()})):e.openModal(t.response.data.message)})).finally((function(){e.showOverlaySignIn=!e.showOverlaySignIn}))},openModal:function(e){this.isModalOpen=!0,this.modalText=e}}},c=u,d=n(1001),m=(0,d.Z)(c,o,a,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=871-legacy.1cd5c5e8.js.map