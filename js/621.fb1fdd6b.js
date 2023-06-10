"use strict";(self["webpackChunkvue_login_signup_ui"]=self["webpackChunkvue_login_signup_ui"]||[]).push([[621],{6098:function(e,t,a){a.d(t,{Z:function(){return d}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{id:"modal-center",centered:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[a("p",[e._v(e._s(e.text))])])},s=[],r={props:{value:{type:Boolean,required:!0},text:{type:String,required:!0}},computed:{isOpen:{get(){return this.value},set(e){this.$emit("input",e)}}}},i=r,n=a(1001),l=(0,n.Z)(i,o,s,!1,null,null,null),d=l.exports},1621:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("OverlayComponent",{attrs:{show:e.loggedIn}},[e.loggedIn?e._e():a("div",{staticClass:"inner-block"},[a("div",[a("ModalDialog",{attrs:{text:e.modalText},model:{value:e.isModalOpen,callback:function(t){e.isModalOpen=t},expression:"isModalOpen"}}),a("ModalConfirm",{ref:"modalConfirmation",attrs:{email:e.email}})],1),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-12"},[a("h1",{staticClass:"text-center"},[e._v("Sign Up")]),a("OverlayComponent",{attrs:{show:e.showOverlaySignUp}},[a("form",{staticClass:"mt-2",on:{submit:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[a("div",{staticClass:"form-group fixed-form-margin"},[a("label",{attrs:{for:"email"}},[e._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email",required:"",placeholder:"user@mail.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"mb-1"}),a("div",{staticClass:"form-group fixed-form-margin"},[a("label",{attrs:{for:"password"}},[e._v("Password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group fixed-form-margin"},[a("label",{attrs:{for:"password-repeat"}},[e._v("Re-enter password:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordRepeat,expression:"passwordRepeat"}],staticClass:"form-control",attrs:{type:"password",id:"password-repeat",placeholder:"Password repeat"},domProps:{value:e.passwordRepeat},on:{input:function(t){t.target.composing||(e.passwordRepeat=t.target.value)}}})]),a("button",{staticClass:"btn btn-outline-primary fixed-form-margin",attrs:{type:"submit",disabled:!e.isFormValid}},[e._v(" Sign Up ")])]),a("p",{staticClass:"mt-3"},[e._v(" ¿Already have an account? "),a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1)])],1)])])])])},s=[],r=a(1801),i=a(6098),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-modal",{ref:"modal",attrs:{id:"modal-prevent-closing",centered:"",title:"User Confirmation"},on:{show:e.resetModal,hidden:e.resetModal,ok:e.handleOk}},[a("OverlayComponent",{attrs:{show:e.showOverlayConfirm}},[a("p",{staticClass:"my-4"},[e._v(" Please enter the confirmation code we sent to your email. ")]),a("form",{ref:"form",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[a("b-form-group",{attrs:{"label-for":"name-input","invalid-feedback":e.invFeedbackTxt,state:e.codeState}},[a("b-form-input",{attrs:{id:"name-input",type:"number",state:e.codeState,required:"",size:"lg",placeholder:"Enter your code"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1)],1)])],1)],1)},l=[],d=a(8341),p={name:"ModalConfirmation",components:{OverlayComponent:d.Z},props:{email:{type:String,required:!0}},data(){return{code:"",codeState:null,invFeedbackTxt:"Code is required",showOverlayConfirm:!1}},methods:{checkFormValidity(){const e=this.$refs.form.checkValidity();return this.codeState=e,e},resetModal(){this.code="",this.codeState=null},handleOk(e){e.preventDefault(),this.handleSubmit()},async handleSubmit(){if(this.checkFormValidity()){this.showOverlayConfirm=!this.showOverlayConfirm;try{const e=await r.Z.confirmation(this.email,this.code);this.confirmationMsgBox(e.data.message,"Success","success","OK")}catch(e){return this.confirmationMsgBox(e.response.data.message,"Error","danger","Retry"),void(this.showOverlayConfirm=!this.showOverlayConfirm)}}},confirmationMsgBox(e,t,a,o){this.$bvModal.msgBoxOk(e,{title:t,size:"sm",buttonSize:"sm",okTitle:o,okVariant:a,cancelTitle:"NO",headerClass:"p-2 border-bottom-0",footerClass:"p-2 border-top-0",centered:!0}).then((e=>{"success"===a&&e&&this.$router.push("/login")})).catch((e=>{}))}}},m=p,c=a(1001),u=(0,c.Z)(m,n,l,!1,null,null,null),h=u.exports,f={components:{ModalDialog:i.Z,OverlayComponent:d.Z,ModalConfirm:h},data(){return{email:"",password:"",passwordRepeat:"",modalText:"",isModalOpen:!1,showOverlaySignUp:!1,boxTwo:"",resetModal:!1}},created(){this.loggedIn&&this.$router.push("/operations")},computed:{isFormValid(){return this.email&&this.password&&this.password===this.passwordRepeat},loggedIn(){return"true"===localStorage.getItem("loggedIn")}},methods:{async register(){this.showOverlaySignUp=!this.showOverlaySignUp;try{await r.Z.signup(this.email,this.password),this.$refs.modalConfirmation.$refs.modal.show()}catch(e){this.openModal(e.response.data.message)}this.showOverlaySignUp=!this.showOverlaySignUp},openModal(e){this.isModalOpen=!0,this.modalText=e}}},v=f,g=(0,c.Z)(v,o,s,!1,null,null,null),w=g.exports}}]);
//# sourceMappingURL=621.fb1fdd6b.js.map