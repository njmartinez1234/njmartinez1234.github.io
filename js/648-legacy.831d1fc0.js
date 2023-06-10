"use strict";(self["webpackChunkvue_login_signup_ui"]=self["webpackChunkvue_login_signup_ui"]||[]).push([[648],{6098:function(e,t,n){n.d(t,{Z:function(){return u}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{attrs:{id:"modal-center",centered:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("p",[e._v(e._s(e.text))])])},a=[],o={props:{value:{type:Boolean,required:!0},text:{type:String,required:!0}},computed:{isOpen:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},s=o,i=n(1001),l=(0,i.Z)(s,r,a,!1,null,null,null),u=l.exports},4648:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("NavBar"),n("div",{staticClass:"inner-block-custom"},[n("p",[n("label",[e._v("Balance: "),n("b",[e._v(e._s(this.userBalance))])])]),n("div",{staticClass:"p-3",staticStyle:{width:"auto",margin:"20px 10px"}},[n("OverlayComponent",{attrs:{show:e.showOverlay}},[n("div",[n("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[n("div",[n("ModalDialog",{attrs:{text:e.modalText},model:{value:e.isModalOpen,callback:function(t){e.isModalOpen=t},expression:"isModalOpen"}})],1),n("b-tab",{attrs:{title:"Operations",active:""}},[n("OperationDisplay",{attrs:{num1:e.num1,num2:e.num2,operationValue:e.operationValue}}),n("OperationButtons",{attrs:{buttons:e.buttons},on:{"operator-click":e.handleOperatorClick}}),n("div",{staticStyle:{"align-items":"center","text-align":"center",margin:"0 130px 0 130px",padding:"3%"}},[n("b-alert",{staticStyle:{"text-align":"center","margin-bottom":"0px"},attrs:{show:"",variant:e.variantAlert}},[n("h1",{staticStyle:{"font-size":"1.2vw"}},[e._v(e._s(this.result))])])],1),n("div",{staticStyle:{"text-align":"center",padding:"3%"}},[n("OverlayComponent",{attrs:{show:e.showOverlayBtn}},[n("b-button-group",[n("b-button",{attrs:{variant:"success",disabled:e.busy,size:"lg"},on:{click:function(t){return e.calculate()}}},[e._v(" Calculate ")]),n("b-button",{class:{disabled:!this.isArithmetic},attrs:{variant:"primary"},on:{click:function(t){return e.generateRandomNums()}}},[e._v(" Random Numbers ")])],1)],1)],1)],1),n("b-tab",{attrs:{title:"Records"}},[n("RecordsTable")],1)],1)],1)])],1)])],1)},a=[],o=n(3571),s=n(6198),i=(n(8975),n(1539),n(8783),n(3948),n(4129)),l="https://ky23idqdol.execute-api.us-east-2.amazonaws.com/api/v1/";i.Z.defaults.headers.common["Authorization"]="".concat(localStorage.getItem("token"));var u={getRecords:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a={user_id:e};return i.Z.get(l+"records?page="+t+"&per_page="+n+"&operation_type="+r,a)},removeRecord:function(e){return i.Z.delete(l+"records/"+e)},OperationCalculation:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"jkhdkashjdkajhsd",a={num1:e,num2:t,operation_id:n,cognito_user_id:r};return i.Z.post(l+"records",a)},getAvOperations:function(){return i.Z.get(l+"operations")},getRandomNumbers:function(e){return i.Z.get(l+"random-string?"+e)}},c=n(6098),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"operation-txt",staticStyle:{"text-align":"center",padding:"3%"}},[n("h1",{staticStyle:{"font-size":"2vw"}},[e._v(e._s(e.num1)+" "+e._s(e.operationValue)+" "+e._s(e.num2))])])},d=[],m={props:{num1:{type:String},num2:{type:String},operationValue:{type:String}}},h=m,v=n(1001),g=(0,v.Z)(h,p,d,!1,null,null,null),f=g.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"text-align":"center",padding:"3%"}},[n("b-button-group",{attrs:{size:"lg"}},e._l(e.buttons,(function(t){return n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover:title",value:t.type,expression:"button.type",modifiers:{"hover:title":!0}}],key:t.id,on:{click:function(n){return e.handleClick(t.symbol,t.id,t.is_arithmetic)}}},[e._v(" "+e._s(t.symbol)+" ")])})),1)],1)},y=[],w={props:{buttons:{type:Array,required:!0}},methods:{handleClick:function(e,t,n){this.$emit("operator-click",e,t,n)}}},x=w,O=(0,v.Z)(x,b,y,!1,null,null,null),k=O.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"operation-txt",staticStyle:{"text-align":"center",padding:"3%"}},[n("h1",{staticStyle:{"font-size":"2vw"}},[e._v(e._s(e.result))])])},R=[],B=(n(9653),{props:{result:{type:[Number,String]},operation_id:{type:Number}}}),C=B,Z=(0,v.Z)(C,_,R,!1,null,null,null),S=Z.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"overflow-auto"},[n("div",{staticClass:"mb-2"},[n("b-form-input",{attrs:{placeholder:"Filter by operation type"},on:{input:e.startDebounceTimer},model:{value:e.filterValue,callback:function(t){e.filterValue=t},expression:"filterValue"}})],1),n("OverlayComponent",{attrs:{show:e.showOverlayTable}},[n("b-table",{attrs:{id:"my-table",items:e.items,fields:e.fields,"per-page":e.perPage,small:"",bordered:!0},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"cell(delete)",fn:function(t){return[n("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(n){return e.deleteConfirmationMsgBox(t.item)}}},[e._v(" Remove ")])]}}])})],1),n("b-pagination",{attrs:{align:"center","per-page":e.perPage,"total-rows":e.totalRecords,"aria-controls":"my-table"},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)},P=[],D=(n(7042),n(561),n(8341)),N={components:{ModalDialog:c.Z,OverlayComponent:D.Z},created:function(){this.fetchData()},data:function(){return{perPage:6,currentPage:1,items:[],totalRecords:null,showOverlayTable:!1,fields:[{key:"id",label:"ID",sortable:!0},{key:"operation.type",label:"Op. type",sortable:!0},{key:"operation.cost",label:"Cost",sortable:!0},{key:"operation_response",label:"Op .Result",sortable:!0},{key:"date",label:"Op. date",sortable:!0},{key:"delete",label:""}],sortBy:"",sortDesc:!1,filterValue:"",operationValue:"",debounceTimer:null}},computed:{totalItems:function(){return this.totalRecords},paginatedItems:function(){var e=(this.currentPage-1)*this.perPage,t=e+this.perPage;return this.filteredItems.slice(e,t)}},methods:{fetchData:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.fetchRecords(1)]);case 2:case"end":return t.stop()}}),t)})))()},fetchRecords:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.showOverlayTable=!t.showOverlayTable,n.prev=1,n.next=4,u.getRecords(null,e,t.perPage,t.filterValue);case 4:r=n.sent,t.totalRecords=r.data.total_records,t.items=r.data.data,n.next=12;break;case 9:return n.prev=9,n.t0=n["catch"](1),n.abrupt("return");case 12:t.showOverlayTable=!t.showOverlayTable;case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()},deleteRow:function(e){var t=this;return(0,s.Z)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.removeRecord(e.id);case 3:r=t.items.indexOf(e),-1!=r&&t.items.splice(r,1),t.fetchRecords(t.currentPage),n.next=11;break;case 8:return n.prev=8,n.t0=n["catch"](0),n.abrupt("return");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},deleteConfirmationMsgBox:function(e){var t=this;this.$bvModal.msgBoxConfirm("Please confirm that you want to delete this item.",{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(n){n&&t.deleteRow(e)})).catch((function(e){}))},startDebounceTimer:function(){var e=this;this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout((function(){e.fetchRecords(1)}),300)},rowClicked:function(e){},handlePageChange:function(e){this.fetchRecords(e),this.$emit("update:current-page",e)}}},M=N,V=(0,v.Z)(M,T,P,!1,null,null,null),I=V.exports,A=n(7161),$={components:{ModalDialog:c.Z,OperationDisplay:f,OperationButtons:k,ResultDisplay:S,RecordsTable:I,OverlayComponent:D.Z,NavBar:A.Z},computed:{loggedIn:function(){return"true"===localStorage.getItem("loggedIn")},getUserName:function(){return localStorage.getItem("userName")},getUserBalance:function(){return localStorage.getItem("userBalance")}},created:function(){this.loggedIn||this.$router.push("/login"),this.userName=this.getUserName,this.userBalance=this.getUserBalance,this.fetchData()},data:function(){return{busy:!1,showOverlay:!1,showOverlayBtn:!1,buttons:[],num1:null,num2:null,isModalOpen:!1,modalText:"",operationValue:"",result:"Select an operation type.",isArithmetic:!0,variantAlert:"info",userName:"",userBalance:""}},methods:{fetchData:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showOverlay=!e.showOverlay,e.showOverlayBtn=!e.showOverlayBtn,t.next=4,Promise.all([e.generateRandomNums()]);case 4:e.fetchButtons(),e.showOverlayBtn=!e.showOverlayBtn,e.showOverlay=!e.showOverlay;case 7:case"end":return t.stop()}}),t)})))()},fetchButtons:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.getAvOperations();case 3:n=t.sent,e.buttons=n.data.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.openModal(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},handleOperatorClick:function(e,t,n){n?"√"===e&&(this.num2=null):(this.num1=null,this.num2=null),this.operationValue=e,this.operationId=t,this.isArithmetic=n},generateRandomNums:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var n,r,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showOverlayBtn=!e.showOverlayBtn,t.prev=1,t.next=4,u.getRandomNumbers("numeric=true");case 4:n=t.sent,r=(0,o.Z)(n.data.data,2),a=r[0],s=r[1],"√"===e.operationValue?(e.num1=a,e.num2=null):(e.num1=a,e.num2=s),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),e.openModal(t.t0.message);case 12:e.showOverlayBtn=!e.showOverlayBtn;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},calculate:function(){var e=this;return(0,s.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==(e.num1||e.num2)||!e.isArithmetic){t.next=4;break}e.resultDisplayHandler("Please generate random value(s) to proceed with the operation.","warning"),t.next=32;break;case 4:if(""!==e.operationValue){t.next=8;break}e.resultDisplayHandler("Please select a valid operation.","warning"),t.next=32;break;case 8:if(e.showOverlayBtn=!e.showOverlayBtn,t.prev=9,e.isArithmetic){t.next=20;break}return t.next=13,u.getRandomNumbers("numeric=false");case 13:return n=t.sent,e.string=n.data.data[0],t.next=17,u.OperationCalculation(e.string,e.num2,e.operationId);case 17:t.sent,t.next=23;break;case 20:return t.next=22,u.OperationCalculation(e.num1,e.num2,e.operationId);case 22:t.sent;case 23:e.userBalance=e.result.data.data["user_balance"],e.result=e.result.data.data["operation_response"],e.resultDisplayHandler(e.result,"success"),t.next=31;break;case 28:t.prev=28,t.t0=t["catch"](9),e.openModal(t.t0.response.data.message);case 31:e.showOverlayBtn=!e.showOverlayBtn;case 32:case"end":return t.stop()}}),t,null,[[9,28]])})))()},openModal:function(e){this.isModalOpen=!0,this.modalText=e},resultDisplayHandler:function(e,t){this.result=e,this.variantAlert=t}}},z=$,E=(0,v.Z)(z,r,a,!1,null,null,null),H=E.exports}}]);
//# sourceMappingURL=648-legacy.831d1fc0.js.map