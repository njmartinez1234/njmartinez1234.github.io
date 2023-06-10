(function(){"use strict";var e={7161:function(e,n,t){t.d(n,{Z:function(){return f}});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vue-template"},[t("nav",{staticClass:"navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"},[t("div",{staticClass:"container"},[t("a",{staticClass:"navbar-brand float-left",attrs:{href:"/"}},[e._v("TRUENORTH Demo")]),e.loggedIn?t("a",{staticClass:"navbar-brand float-left"},[t("b",[e._v(e._s(e.userBalance))])]):e._e(),t("ul",{staticClass:"nav navbar-nav flex-row float-right"},[e.loggedIn?t("li",{staticClass:"nav-item"},[t("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"},on:{click:function(n){return e.logoutConfirmation()}}},[e._v(" Logout ")])]):e._e()])])])])},o=[],a=t(6198),i=(t(8975),t(1801)),u={name:"NavBar",data:function(){return{loggedIn:!1,token:"",showOverlaySignIn:!1,userBalance:0}},created:function(){this.loggedIn="true"===localStorage.getItem("loggedIn"),this.token=localStorage.getItem("token"),this.userBalance=localStorage.getItem("userName")},methods:{signout:function(){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showOverlaySignIn=!e.showOverlaySignIn,n.prev=1,n.next=4,i.Z.signout(e.token);case 4:e.loggedIn=!1,n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),console.error("Error occurred during signout:",n.t0);case 10:localStorage.clear(),e.$router.push("/login"),e.showOverlaySignIn=!e.showOverlaySignIn;case 13:case"end":return n.stop()}}),n,null,[[1,7]])})))()},logoutConfirmation:function(){var e=this;this.$bvModal.msgBoxConfirm(["Are you sure?"],{buttonSize:"sm",centered:!0,size:"sm"}).then((function(n){n&&e.signout()}))}}},s=u,l=t(1001),c=(0,l.Z)(s,r,o,!1,null,null,null),f=c.exports},8341:function(e,n,t){t.d(n,{Z:function(){return l}});var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-overlay",{attrs:{show:e.show,"spinner-variant":"primary","spinner-type":"grow",variant:"white","spinner-small":"",rounded:"sm"}},[e._t("default")],2)},o=[],a={name:"OverlayComponent",props:{show:{type:Boolean,default:!1}}},i=a,u=t(1001),s=(0,u.Z)(i,r,o,!1,null,null,null),l=s.exports},1801:function(e,n,t){var r=t(4129),o="https://ky23idqdol.execute-api.us-east-2.amazonaws.com/api/v1/";r.Z.defaults.headers.common["Authorization"]="".concat(localStorage.getItem("token")),n.Z={signup:function(e,n){var t={username:e,password:n};return r.Z.post(o+"signup",t)},confirmation:function(e,n){var t={username:e,confirmation_code:n};return r.Z.post(o+"confirm",t)},signin:function(e,n){var t={username:e,password:n};return r.Z.post(o+"signin",t)},signout:function(e){var n={access_token:e};return r.Z.post(o+"signout",n)}}},4223:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(8935),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vue-tempalte"},[t("div",{staticClass:"App"},[t("div",{staticClass:"vertical-center"},[t("OverlayComponent",{attrs:{show:e.showOverlaySignIn}},[t("div",[t("router-view")],1)])],1)])])},a=[],i=t(6198),u=(t(8975),t(1801)),s=t(8341),l=t(7161),c={components:{OverlayComponent:s.Z,NavBarComponent:l.Z},data:function(){return{loggedIn:!1,token:"",showOverlaySignIn:!1,userBalance:0}},created:function(){this.loggedIn="true"===localStorage.getItem("loggedIn"),this.token=localStorage.getItem("token"),this.userBalance=localStorage.getItem("userBalance")},methods:{signout:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showOverlaySignOut=!e.showOverlaySignOut,n.prev=1,n.next=4,u.Z.signout(e.token);case 4:localStorage.clear(),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](1),localStorage.clear();case 10:e.$router.push("/login"),e.showOverlaySignOut=!e.showOverlaySignOut;case 12:case"end":return n.stop()}}),n,null,[[1,7]])})))()}}},f=c,d=t(1001),g=(0,d.Z)(f,o,a,!1,null,null,null),p=g.exports,v=(t(1539),t(8783),t(3948),t(2809)),m=t(3655),h=t(3266);t(44);r["default"].use(m.XG7),r["default"].use(h.A7),r["default"].use(v.Z);var b=[{path:"/",name:"",component:function(){return t.e(248).then(t.bind(t,3248))}},{path:"/signup",name:"signup",component:function(){return t.e(621).then(t.bind(t,1621))}},{path:"/login",name:"login",component:function(){return t.e(248).then(t.bind(t,3248))}},{path:"/operations",name:"operations",component:function(){return t.e(648).then(t.bind(t,4648))}}],y=new v.Z({mode:"history",base:"/",routes:b}),w=y;r["default"].config.productionTip=!1;var S=new r["default"]({data:function(){return{token:"",userBalance:0,loggedIn:!1,userName:""}},watch:{token:function(e){localStorage.setItem("token",e)},userBalance:function(e){localStorage.setItem("userBalance",e)},loggedIn:function(e){localStorage.setItem("loggedIn",e)},userName:function(e){localStorage.setItem("userName",e)}}});r["default"].prototype.$eventBus=S,new r["default"]({router:w,render:function(e){return e(p)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=o();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"-legacy."+{248:"59385145",621:"6ec50629",648:"831d1fc0"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{248:"ab947110",621:"ab947110",648:"ab947110"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-login-signup-ui:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},g=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={248:1,621:1,648:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var c=s(t)}for(n&&n(r);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},r=self["webpackChunkvue_login_signup_ui"]=self["webpackChunkvue_login_signup_ui"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4223)}));r=t.O(r)})();
//# sourceMappingURL=app-legacy.696b055a.js.map