(this.webpackJsonposso=this.webpackJsonposso||[]).push([[7],{107:function(e,t,a){"use strict";a.r(t);var n=a(89),r=a(1),o=a.n(r),c=a(16),i=a(14),l=a(90),s=a(8),u=function(e){return o.a.createElement("div",{className:"login-outer"},o.a.createElement("div",{className:"login-container"},o.a.createElement("h3",{className:"form-heading"},"Login to your OSSO Account"),o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"form-element"},o.a.createElement("input",{type:"email",placeholder:"Username or Email Address",onChange:function(t){e.setEmail(t.target.value)}}),o.a.createElement("div",{className:"errro-msg"})),o.a.createElement("div",{className:"form-element"},o.a.createElement("input",{type:"password",placeholder:"Enter Password",onChange:function(t){e.setPass(t.target.value)}}),o.a.createElement("div",{className:"errro-msg"}))),o.a.createElement("div",{className:"row-section"},o.a.createElement("div",{className:"remember-me"},o.a.createElement("label",{className:"checkbox"},"Remember me",o.a.createElement("input",{type:"checkbox"}),o.a.createElement("i",{className:"input-helper"}))),o.a.createElement(s.b,{to:"/forgot"},"Forgot Password?")),o.a.createElement("div",{className:"submit-wrap"},o.a.createElement(s.b,{onClick:e.handleClick},"Login")),o.a.createElement("p",{className:"redirect-link"},"Don't Have Account ",o.a.createElement(s.b,{to:"/signup"},"Sign Up"))))},m=a(91);t.default=Object(c.b)(null,{Login:l.b})((function(e){var t=Object(r.useState)(null),a=Object(n.a)(t,2),c=a[0],l=a[1],s=Object(r.useState)(null),d=Object(n.a)(s,2),f=d[0],p=d[1],b=Object(r.useState)(!1),E=Object(n.a)(b,2),h=E[0],g=E[1];return h&&e.history.push("/"),o.a.createElement(u,{setEmail:l,setPass:p,handleClick:function(){if(Object(m.a)(c))if(f){var t={email:c,password:f},a=JSON.stringify(t);console.log("emal",a),i.a.post("auth/login",a,{headers:{"content-type":"application/json"}}).then((function(t){console.log(t),t.data&&t.data.token&&t.data.data?(e.Login(t.data.data,t.data.token),g(!0)):alert("try Again !")})).catch((function(e){console.log(e),alert("Enter Valid Credential")}))}else alert("Enter password");else alert("Enter valid email")}})}))},89:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(32);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},90:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return c}));a(14);var n=a(24),r=(a(16),function(e,t){return{type:n.a,payload:{user:e,token:t}}}),o=function(e,t){return{type:n.b,payload:{user:e,token:t}}},c=function(){return{type:"RESET",payload:null}}},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));var n=function(e){if(e&&e.trim()){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}return!1},r=function(e){return!(!e||!e.trim())&&10===e.match(/\d/g).length},o=function(e){if(e&&e.trim()){return/[a-zA-Z][a-zA-Z ]+/.test(e)}return!1}}}]);
//# sourceMappingURL=7.037b183d.chunk.js.map