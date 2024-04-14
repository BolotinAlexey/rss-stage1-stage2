(()=>{"use strict";var n={208:(n,t,e)=>{var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lobster&family=Luckiest+Guy&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),i.push([n.id,":root {\n  --main-color: #111;\n  --success-color: 7, 246, 35;\n  --error-color: 216, 26, 9;\n  --bg-color: #eee;\n  --padBlock: 1rem;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\ndiv,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n.icon {\n  fill: currentColor;\n}\n\n.container {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n/* Animation */\n\n@keyframes shake-rotate {\n  15% {\n    transform: rotate(15deg);\n  }\n  30% {\n    transform: rotate(-15deg);\n  }\n  40% {\n    transform: rotate(10deg);\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  65% {\n    transform: rotate(5deg);\n  }\n  85% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n",""])},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:n=>{n.exports=function(n){return n[1]}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{function n(n){var t=document.querySelector(n);return function(n){if(void 0===n)throw new Error("".concat(n," is not defined"));if(null===n)throw new Error("".concat(n," is null"))}(t),t}function t(n,t,e){var r,o=document.createElement(n);return o.innerHTML=e||"",t&&(r=o.classList).add.apply(r,t),o}var r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",o=5e3;function a(t){var e=t.target;if(!(e instanceof HTMLInputElement))throw new Error("Wrong event");if(e.parentElement&&!e.value.length)return e.parentElement.childNodes[1].textContent="",e.classList.contains("wrong")&&e.classList.remove("wrong"),void(e.classList.contains("correct")&&e.classList.remove("correct"));try{e&&e.parentElement&&function(n){var t=n.value;if(n.classList.contains("login__input-name")){if(t.length<4)throw new Error("The letters number of name must be more then 4");if(!t.split("").every((function(n){return r.includes(n.toUpperCase())})))throw new Error("The letters must be in the English alphabet");if(t[0].toUpperCase()!==t[0])throw new Error("The first letter of name should be upper case")}else{if(t.length<4)throw new Error("The letters number of password must be more then 4");if(!t.split("").some((function(n){return r.includes(n.toUpperCase())})))throw new Error("You must use at least one english alphabet");if(!t.split("").some((function(n){return"012356789".includes(n.toUpperCase())})))throw new Error("You must use at least one number 0-9")}return!0}(e)&&(e.parentElement.childNodes[1].textContent="",e.classList.contains("wrong")&&e.classList.remove("wrong"),e.classList.contains("correct")||e.classList.add("correct"))}catch(n){n instanceof Error&&e&&e.parentElement&&(e.parentElement.childNodes[1].textContent="⚠️ ".concat(n.message),e.classList.contains("wrong")||e.classList.add("wrong"),e.classList.contains("correct")&&e.classList.remove("correct"))}var o=document.querySelectorAll("input.login__input"),a=Object.values(o).reduce((function(n,t){return t instanceof HTMLInputElement?n&&t.classList.contains("correct")&&!!t.value.length:n}),!0),i=n(".login__input-submit");if(!(i instanceof HTMLButtonElement))throw new Error("Not HTMLInputElement");i.disabled=!a}var i=function(){return i=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},i.apply(this,arguments)};function s(e){if(e.preventDefault(),e.currentTarget instanceof HTMLFormElement){var r,a=e.currentTarget.elements,s=Object.values(a).reduce((function(n,t){var e;return t instanceof HTMLInputElement&&"INPUT"===t.tagName?i(i({},n),((e={})[t.name]=t.value,e)):n}),{});"name"in(r=s)&&"password"in r&&(e.currentTarget.reset(),["name","password","submit"].forEach((function(n){var t=document.querySelector(".login__input-".concat(n));t&&t.classList&&t.classList.contains("correct")&&t.classList.remove("correct"),t instanceof HTMLButtonElement&&!t.disabled&&(t.disabled=!0)})),function(e){var r=document.querySelector(".welcome"),a=document.querySelector(".header"),i=document.querySelector(".bg-image-welcome");r&&r.classList.add("show"),a&&!a.classList.contains("show")&&a.classList.add("show"),i&&!i.classList.contains("show")&&i.classList.add("show");var s=document.querySelector(".login");s&&s.classList.contains("show")&&s.classList.remove("show"),function(e){var r=t("p",["welcome__user-name"],"Welcome ".concat(Object.values(e).join(" "),"!"));n(".welcome").append(r),setTimeout((function(){return r.remove()}),o)}(e)}(s))}}var c,l=function(){function n(n){this.tag=n.tag,this.class=n.class,this.text=n.text,this.element=t(this.tag,this.class,this.text)}return n.prototype.getHTMLElement=function(){return this.element},n}(),u=(c=function(n,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},c(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}c(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});const p=function(n){function e(){var e=n.call(this,{tag:"section",class:["login","page","active-page"],text:""})||this,r=t("h1",["page__title","page__title"],"Authorization"),o=function(){var n={form:t("form",["login__form"]),nameLabel:t("label",["login__label","login__label-name"]),passwordLabel:t("label",["login__label","login__label-password"]),nameSpan:t("span",["login__span"]),passwordSpan:t("span",["login__span"]),nameInput:t("input",["login__input","login__input-name"]),passwordInput:t("input",["login__input","login__input-password"]),submitBtn:t("button",["login__input","login__input-submit"],"LOGIN")},e=n.form,r=n.nameLabel,o=n.passwordLabel,a=n.nameSpan,i=n.passwordSpan,s=n.nameInput,c=n.passwordInput,l=n.submitBtn;return l.type="submit",l.disabled=!0,s.placeholder="Enter your name",c.placeholder="Enter your surname",s.required=!0,c.required=!0,s.name="name",c.name="password",c.type="password",r.append(s,a),o.append(c,i),e.append(r,o,l),{form:e,nameInput:s,passwordInput:c}}(),i=o.form,c=o.nameInput,l=o.passwordInput;return e.getHTMLElement().append(r,i),c.addEventListener("input",a),l.addEventListener("input",a),c.addEventListener("input",a),l.addEventListener("input",a),i.addEventListener("submit",s),e}return u(e,n),e}(l);const d=["/chat","/about","/auth","/"];function f(){var e=window.location.pathname;console.log(e),d.includes(e)&&("/"===e&&(e="/auth"),window.history.pushState({},"",e),console.log(e),"/auth"===e)&&function(){var e,r,o,a;e=this,r=void 0,a=function(){var e,r,o;return function(n,t){var e,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(e)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(i=0)),i;)try{if(e=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(n,i)}catch(n){s=[6,n],r=0}finally{e=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(a){return(e=n("body")).innerHTML="",r=t("main",["main","container"],""),o=new p,r.append(o.getHTMLElement()),e.append(r),[2]}))},new((o=void 0)||(o=Promise))((function(n,t){function i(n){try{c(a.next(n))}catch(n){t(n)}}function s(n){try{c(a.throw(n))}catch(n){t(n)}}function c(t){var e;t.done?n(t.value):(e=t.value,e instanceof o?e:new o((function(n){n(e)}))).then(i,s)}c((a=a.apply(e,r||[])).next())}))}()}const m=function(){function n(){}return n.createView=function(){window.addEventListener("load",f),window.addEventListener("popstate",(function(){return f}))},n}();e(208),m.createView()})()})();