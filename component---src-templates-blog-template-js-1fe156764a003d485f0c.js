/*! For license information please see component---src-templates-blog-template-js-1fe156764a003d485f0c.js.LICENSE.txt */
(self.webpackChunkblog_junwork_net=self.webpackChunkblog_junwork_net||[]).push([[637],{9591:function(t,e,r){var n=r(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,a=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=f;var p={};function m(){}function d(){}function v(){}var y={};u(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==r&&a.call(w,c)&&(y=w);var E=v.prototype=m.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,c,l){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==n(f)&&a.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return p;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,p;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,u(E,"constructor",v),u(v,"constructor",d),d.displayName=u(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,l,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(E),u(E,s,"Generator"),u(E,c,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7757:function(t,e,r){var n=r(9591)();t.exports=n;try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},3214:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return v}});var n=r(5861),o=r(7757),a=r.n(o),i=r(7294),c=r(4985),l=r(579),s=r(748);var u=function(t){var e=t.post,r=(t.key,"/");return(0,i.useEffect)((function(){r=window.location.pathname,console.log(r)}),[]),i.createElement("div",{id:"kakao-share-btn",onClick:function(){window.Kakao.Link.sendDefault({objectType:"feed",content:{title:e.title,description:"주녁, 데브노트",imageUrl:logo,link:{mobileWebUrl:r,webUrl:r}},social:{likeCount:286,commentCount:45,sharedCount:845},buttons:[{title:"웹으로 보기",link:{mobileWebUrl:r,webUrl:r}},{title:"앱으로 보기",link:{mobileWebUrl:r,webUrl:r}}]})}},i.createElement("img",{src:"https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png",alt:"카카오톡 공유 보내기 버튼"}))};var f=function(t){var e=t.post,r=t.viewCount;return i.createElement("header",{className:"post-header"},e.emoji&&i.createElement("div",{className:"emoji"},e.emoji),i.createElement("div",{className:"info"},i.createElement("div",{className:"categories"},e.categories.map((function(t){return i.createElement(s.Link,{className:"category",key:t,to:"/posts/"+t},t)})))),i.createElement("h1",{className:"title",id:"title"},e.title),i.createElement("div",{className:"info"},i.createElement("div",{className:"author"},"posted by ",i.createElement("strong",null,e.author),",")," ",e.date,r&&" · "+r+" views"),i.createElement(u,{post:e,key:{}.REACT_APP_KAKAO_SHARE_KEY}))};var h=function(t){var e=t.prevPost,r=t.nextPost;return i.createElement("div",{className:"post-navigator"},i.createElement("div",{className:"post-navigator-card-wrapper"},r&&i.createElement(s.Link,{className:"post-card prev",key:r.id,to:r.slug},i.createElement("div",{className:"direction"},"이전 글"),i.createElement("div",{className:"title"},r.title))),i.createElement("div",{className:"post-navigator-card-wrapper"},e&&i.createElement(s.Link,{className:"post-card next",key:e.id,to:e.slug},i.createElement("div",{className:"direction"},"다음 글"),i.createElement("div",{className:"title"},e.title))))},p=r(531);var m=function(t){var e=t.html;return i.createElement("div",{className:"post-content"},i.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:e}}))};var d=function(t){var e=t.repo,r=t.path,n=(0,i.createRef)(),o=(0,i.useRef)(!1);return(0,i.useEffect)((function(){if(n.current&&!o.current){var t=localStorage.getItem("isDarkMode"),r=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:e,branch:"master",theme:JSON.parse(t)?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((function(t){r.setAttribute(t,a[t])})),n.current.appendChild(r),o.current=!0}}),[e,n,r]),i.createElement("div",{className:"utterances",ref:n})};var v=function(t){var e,r,o=t.data,s=(0,i.useState)(null),u=s[0],v=s[1],y=new p.Z(o.cur),g=o.prev&&new p.Z(o.prev),w=o.next&&new p.Z(o.next),E=null===(e=o.site)||void 0===e?void 0:e.siteMetadata,b=E.siteUrl,x=E.comments,k=null==x||null===(r=x.utterances)||void 0===r?void 0:r.repo;return(0,i.useEffect)((function(){if(b){var t=b.replace(/(^\w+:|^)\/\//,""),e=y.slug.replace(/\//g,"");fetch("https://api.countapi.xyz/hit/"+t+"/"+e).then(function(){var t=(0,n.Z)(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.json();case 2:r=t.sent,v(r.value);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}),[b,y.slug]),i.createElement(c.Z,null,i.createElement(l.Z,{title:null==y?void 0:y.title,description:null==y?void 0:y.excerpt}),i.createElement(f,{post:y,viewCount:u}),i.createElement(m,{html:y.html}),i.createElement(h,{prevPost:g,nextPost:w}),k&&i.createElement(d,{repo:k,path:y.slug}))}},5861:function(t,e,r){"use strict";function n(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,l,"next",t)}function l(t){n(i,o,a,c,l,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-1fe156764a003d485f0c.js.map