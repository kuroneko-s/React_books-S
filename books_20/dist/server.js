!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=12)}([function(t,e){t.exports=require("react/jsx-runtime")},function(t,e){t.exports=require("react-router-dom")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("react-redux")},function(t,e){t.exports=require("react-dom/server")},function(t,e){t.exports=require("express")},function(t,e){t.exports=require("path")},function(t,e){t.exports=require("axios")},function(t,e){t.exports=require("fs")},function(t,e){t.exports=require("@reduxjs/toolkit")},function(t,e){t.exports=require("redux")},function(t,e){t.exports=require("redux-thunk")},function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),c=new S(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return L()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var u=O(c,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var a=f(t,e,r);if("normal"===a.type){if(n=r.done?"completed":"suspendedYield",a.arg===p)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n="completed",r.method="throw",r.arg=a.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function h(){}function d(){}function v(){}var y={};s(y,c,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(_([])));m&&m!==e&&r.call(m,c)&&(y=m);var j=v.prototype=h.prototype=Object.create(y);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){var o;this._invoke=function(i,c){function u(){return new e((function(o,u){!function o(i,c,u,a){var s=f(t[i],t,c);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,u,a)}),(function(t){o("throw",t,u,a)})):e.resolve(p).then((function(t){l.value=t,u(l)}),(function(t){return o("throw",t,u,a)}))}a(s.arg)}(i,c,o,u)}))}return o=o?o.then(u,u):u()}}function O(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=v,s(j,"constructor",v),s(v,"constructor",d),d.displayName=s(v,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,a,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},g(x.prototype),s(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(j),s(j,a,"Generator"),s(j,c,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),a=r.call(i,"finallyLoc");if(u&&a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(t){return void r(t)}u.done?e(a):Promise.resolve(a).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var c=t.apply(e,r);function u(t){i(c,n,o,u,a,"next",t)}function a(t){i(c,n,o,u,a,"throw",t)}u(void 0)}))}}r.r(e);var u=r(4),a=r.n(u),s=r(1),l=r(5),f=r.n(l),p=r(0),h=function(){return Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:Object(p.jsx)(s.Link,{to:"/red",children:"RED"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.Link,{to:"/blue",children:"BLUE"})}),Object(p.jsx)("li",{children:Object(p.jsx)(s.Link,{to:"/users",children:"Users"})})]})},d=function(){return Object(p.jsx)("div",{className:"blue",children:"blue"})},v=function(){return Object(p.jsx)(d,{})},y=function(){return Object(p.jsx)("div",{className:"red",children:"red"})},b=function(){return Object(p.jsx)(y,{})},m=r(2),j=r(3),g=function(t){var e=t.users;return e?Object(p.jsx)("div",{children:Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)("li",{children:Object(p.jsx)(s.Link,{to:"/users/".concat(t.id),children:t.username})},t.id)}))})}):null},x=Object(m.createContext)(null),O=x,w=function(t){var e=t.resolve,r=Object(m.useContext)(x);return r?(r.done||r.promises.push(Promise.resolve(e())),null):null};function E(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){E(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L=r(7),P=r.n(L),k=function(t){return{type:"users/GET_USERS_FAILURE",payload:t,error:!0}},T={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}};var R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"users/GET_USERS_PENDING":return _(_({},t),{},{loading:_(_({},t.loading),{},{users:!0})});case"users/GET_USERS_SUCCESS":return _(_({},t),{},{loading:_(_({},t.loading),{},{users:!1}),users:e.payload.data});case"users/GET_USERS_FAILURE":return _(_({},t),{},{loading:_(_({},t.loading),{},{users:!1}),error:_(_({},t.error),{},{users:e.payload})});default:return t}},G=Object(j.connect)((function(t){return{users:t.users.users}}),{getUsers:function(){return function(){var t=c(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({type:"users/GET_USERS_PENDING"}),t.next=4,P.a.get("https://jsonplaceholder.typicode.com/users");case 4:r=t.sent,e({type:"users/GET_USERS_SUCCESS",payload:r}),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),e(k(t.t0)),t.t0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(t){var e=t.users,r=t.getUsers;return console.log(e,r),Object(m.useEffect)((function(){e||r()}),[r,e]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{users:e}),Object(p.jsx)(w,{resolve:r})]})})),N=function(){return Object(p.jsx)(G,{})},U=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(h,{}),Object(p.jsx)("hr",{}),Object(p.jsx)(s.Route,{path:"/red",component:b}),Object(p.jsx)(s.Route,{path:"/blue",component:v}),Object(p.jsx)(s.Route,{path:"/users",component:N})]})},q=r(6),D=r.n(q),F=r(8),A=r.n(F),C=r(9),I=r(10),M=Object(I.combineReducers)({users:R}),Y=r(11),J=r.n(Y),B=f()(),X=JSON.parse(A.a.readFileSync(D.a.resolve("./build/asset-manifest.json"),"utf8")),$=Object.keys(X.files).filter((function(t){return/chunk\.js$/.exec(t)})).map((function(t){return'<script src="'.concat(X.files[t],'"> <\/script>')})).join("");function z(t,e){return'\n        <!DOCTYPE html>\n        <html lang="en">\n        <head>\n            <meta charset="UTF-8">\n            <meta http-equiv="X-UA-Compatible" content="IE=edge">\n            <meta name="viewport" content="width=device-width, initial-scale=1.0">\n            <title>React App</title>\n            <link href="'.concat(X.files["main.css"],'" rel="stylesheet" />\n        </head>\n        <body>\n            <noscript>You need to enable JS to run this app.</noscript>\n            <div id="root">\n                ').concat(t,"\n            </div>\n            ").concat(e,'\n            <script src="').concat(X.files["runtime-main.js"],'"> <\/script>\n            ').concat($,'\n            <script src="').concat(X.files["main.js"],'"> <\/script>\n        </body>\n        </html>\n    ')}var H=function(){var t=c(o().mark((function t(e,r,n){var i,c,u,l,f,h,d;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={},c=Object(C.configureStore)({reducer:M,middleware:[J.a]}),u={done:!1,promises:[]},l=Object(p.jsx)(O.Provider,{value:u,children:Object(p.jsx)(j.Provider,{store:c,children:Object(p.jsx)(s.StaticRouter,{location:e.url,context:i,children:Object(p.jsx)(U,{})})})}),a.a.renderToStaticMarkup(l),t.prev=5,t.next=8,Promise.all(u.promises);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",r.status(500));case 13:u.done=!0,f=a.a.renderToString(l),h=JSON.stringify(c.getState()).replace(/</g,"\\u003c"),d="<script>__PRELOADED_STATE__=".concat(h,"<\/script>"),r.send(z(f,d));case 18:case"end":return t.stop()}}),t,null,[[5,10]])})));return function(e,r,n){return t.apply(this,arguments)}}();B.use(f.a.static(D.a.resolve("./build"),{index:!1})),B.use(H),B.listen(5e3,(function(){console.log("Running on http:localhost:5000")}))}]);