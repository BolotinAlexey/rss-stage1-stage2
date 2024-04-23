(()=>{"use strict";var n={208:(n,e,t)=>{var s=t(601),r=t.n(s),o=t(314),a=t.n(o)()(r());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Lobster&family=Luckiest+Guy&family=Philosopher:ital,wght@0,400;0,700;1,400;1,700&display=swap);"]),a.push([n.id,':root {\n  --main-color: #111;\n  --success-color: 7, 246, 35;\n  --error-color: 216, 26, 9;\n  --bg-color: #eee;\n  --padBlock: 1rem;\n  --accent-color: #03b8fb;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\ndiv,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n\n.icon {\n  fill: currentColor;\n}\n\n.container {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.about__link {\n  font:\n    400 2rem / 1 "Philosopher",\n    sans-serif;\n  color: var(--main-color);\n  transition: color 0.3s linear;\n  text-decoration: none;\n  &:hover {\n    cursor: pointer;\n    color: var(--accent-color);\n  }\n}\n\n.error-bg {\n  background-color: rgba(var(--error-color), 0.7);\n}\n\n.success-bg {\n  background-color: rgba(var(--success-color), 0.7);\n}\n\n.notify-wrap {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  padding: 3rem;\n}\n.notify-msg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font: 900 4.5rem / 1.1 "Lobster";\n  color: var(--accent-color);\n  -webkit-text-stroke: white 1px;\n}\n\n/* Animation */\n\n@keyframes shake-rotate {\n  15% {\n    transform: rotate(15deg);\n  }\n  30% {\n    transform: rotate(-15deg);\n  }\n  40% {\n    transform: rotate(10deg);\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  65% {\n    transform: rotate(5deg);\n  }\n  85% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n',""])},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",s=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),s&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),s&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,s,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(s)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);s&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}}},e={};function t(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={id:s,exports:{}};return n[s](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var s in e)t.o(e,s)&&!t.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:e[s]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{function n(n){var e=document.querySelector(n);return function(n){if(void 0===n)throw new Error("".concat(n," is not defined"));if(null===n)throw new Error("".concat(n," is null"))}(e),e}function e(n,e,t){var s,r=document.createElement(n);return r.innerHTML=t||"",e&&(s=r.classList).add.apply(s,e),r}const s=function(){function n(n){this.tag=n.tag,this.class=n.class,this.text=n.text,this.element=e(this.tag,this.class,this.text)}return n.prototype.getHTMLElement=function(){return this.element},n}();var r,o=(r=function(n,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},r(n,e)},function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)});const a=function(n){function t(){var t=n.call(this,{tag:"section",class:["about","page","active-page"],text:""})||this,s=e("h1",["page__title","about"],"About application"),r=e("div",["about__describe"],"This program is made in the framework of study at the RSS SCHOOL JS/FE 2023Q3 school.</br> Fronted is written by Bolotin O.A."),o=e("button",["about__button"],"Exit");return o.addEventListener("click",(function(){window.history.pushState({},"","#chat"),W()})),t.getHTMLElement().append(s,r,o),t}return o(t,n),t}(s);var i=n("body");const c=function(){function n(){}return Object.defineProperty(n,"getUser",{get:function(){var n=sessionStorage.getItem("user");return n?JSON.parse(n):null},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setUser",{set:function(n){sessionStorage.setItem("user",JSON.stringify(n))},enumerable:!1,configurable:!0}),n.removeUser=function(){sessionStorage.removeItem("user")},n}(),l=function(){function n(){}return Object.defineProperty(n,"getUser",{get:function(){return this.user},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setUser",{set:function(n){this.user=n},enumerable:!1,configurable:!0}),n.user=null,n.isConnect=!1,n.setIntervallId=0,n}(),u=function(){function n(){}return Object.defineProperty(n,"getWS",{get:function(){return this.ws},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setWS",{set:function(n){this.ws=n},enumerable:!1,configurable:!0}),n.ws=null,n}();function d(){return crypto.randomUUID()}const p=function(){function n(){}return n.authUser=function(n){u.getWS&&u.getWS.send(JSON.stringify({id:d(),type:"USER_LOGIN",payload:{user:n}}))},n.logoutUser=function(n){u.getWS&&u.getWS.send(JSON.stringify({id:d(),type:"USER_LOGOUT",payload:{user:n}}))},n.usersActive=function(){try{u.getWS&&!0===l.isConnect&&u.getWS.send(JSON.stringify({id:d(),type:"USER_ACTIVE",payload:null}))}catch(n){console.log(n)}},n.usersPassive=function(){u.getWS&&!0===l.isConnect&&u.getWS.send(JSON.stringify({id:d(),type:"USER_INACTIVE",payload:null}))},n.sendMessage=function(n,e){u.getWS&&u.getWS.send(JSON.stringify({id:d(),type:"MSG_SEND",payload:{message:{to:n,text:e}}}))},n.sendRequestMessages=function(n){u.getWS&&u.getWS.send(JSON.stringify({id:d(),type:"MSG_FROM_USER",payload:{user:{login:n}}}))},n.changeIsReadingStatus=function(n){u.getWS&&u.getWS.send(JSON.stringify({id:d(),type:"MSG_READ",payload:{message:{id:n}}}))},n}();function f(t,s){var r=n(".users__list-".concat(s)),o=t.map((function(n){var t=n&&n.login?n.login:"",r=e("li",["users__item","user-".concat(s)],t),o=n.unReadMsgs;return o&&r.append(e("span",["un-read-messages"],o.toString())),r}));r.innerHTML="",r.append.apply(r,o)}const g=function(){function n(){}return Object.defineProperty(n,"getActiveUsers",{get:function(){var n,e=this,t=null===(n=c.getUser)||void 0===n?void 0:n.login;return(this.word?this.usersActive.filter((function(n){return n.login.includes(e.word)})):this.usersActive).filter((function(n){return n.login!==t}))},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setActiveUsers",{set:function(n){var e,t=null===(e=c.getUser)||void 0===e?void 0:e.login;t&&(this.usersActive=n,n.filter((function(n){return n.login!==t})).forEach((function(n){var e=n.login;return p.sendRequestMessages(e)})),f(this.getActiveUsers,"active"))},enumerable:!1,configurable:!0}),Object.defineProperty(n,"getPassiveUsers",{get:function(){var n=this;return this.word?this.usersPassive.filter((function(e){return e.login.includes(n.word)})):this.usersPassive},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setPassiveUsers",{set:function(n){this.usersPassive=n,n.forEach((function(n){var e=n.login;return p.sendRequestMessages(e)})),f(this.getPassiveUsers,"passive")},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setWord",{set:function(n){this.word=n},enumerable:!1,configurable:!0}),n.setUnReadMsgs=function(n,e){var t=this.getActiveUsers.find((function(e){return e.login===n}));if(t)return t.unReadMsgs=e,void f(this.getActiveUsers,"active");(t=this.getPassiveUsers.find((function(e){return e.login===n})))&&(t.unReadMsgs=e),f(this.getPassiveUsers,"passive")},n.usersActive=[],n.usersPassive=[],n.word="",n}();function h(){var e=n(".users__search").value;g.setWord=e,p.usersActive(),p.usersPassive()}var v=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}();const m=function(n){function e(e){var t=n.call(this,{tag:"main",class:["main","chat"],text:""})||this;return t.user=null,t.user=e,t}return v(e,n),e}(s),_=function(){function n(){}return n.getUserMsgs=function(n){return this.users.get(n)},n.setUserMsgs=function(n,e){this.users.set(n,e)},Object.defineProperty(n,"getActiveUser",{get:function(){return this.activeUser},enumerable:!1,configurable:!0}),Object.defineProperty(n,"setActiveUser",{set:function(n){this.activeUser=n},enumerable:!1,configurable:!0}),n.users=new Map,n.activeUser="",n}();function b(){var n=document.querySelector(".message__status-user");if(n&&n.textContent&&document.querySelector(".not-read")){var e=_.getUserMsgs(n.textContent);e&&e.length&&e.forEach((function(n){n.status.isReaded||p.changeIsReadingStatus(n.id)}))}}function y(t,s){var r=t.target;if(r instanceof HTMLElement&&"LI"===r.tagName){var o=n(".messages__status"),a=r.innerText.split("\n")[0],i=e("span",["message__status-user"],a||""),c=e("span",["message__status-status"],s);c.style.color="active"===s?"green":"red",o.innerHTML="",o.append(i,c),n(".messages__input").disabled=!1,p.sendRequestMessages(a)}}function w(){var n;c.removeUser(),window.history.pushState({},"","#auth"),W(),null===(n=u.ws)||void 0===n||n.close(),u.setWS=null}var S=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}();const E=function(n){function t(){var t,s,r=n.call(this,{tag:"header",class:["header"],text:""})||this;return r.nav=(t=r.element,s=e("nav",["nav"]),t.append(s),s),r}return S(t,n),t}(s);var L=n("body");function M(){var t=c.getUser;if(t){var s=new m(t);window.history.pushState({},"","#/chat"),L.innerHTML="";var r,o,a,i,l=function(n){var t=new E,s=e("p",["header__logo"],"FUN Chat"),r=e("div",["logout"]),o=e("span",["logout__user"]),a=e("button",["logout__btn"]),i=e("span",["logout__txt"]);o.textContent=n?"User: ".concat(n.login):"";var l=e("a",["about__link"],"About");return l.href="/#/about",t.nav.append(l),i.textContent="Logout",a.append(i),a.insertAdjacentHTML("beforeend",'\n  <svg class="logout__svg" viewBox="0 0 48 48"><path fill = "red" d="M15.6,27c-0.2,0-0.4,0-0.6-0.1s-0.4-0.1-0.6-0.2c-0.2-0.1-0.4-0.2-0.5-0.3c-0.2-0.1-0.3-0.2-0.5-0.4\n\t\tc-0.1-0.1-0.3-0.3-0.4-0.5c-0.1-0.2-0.2-0.3-0.3-0.5c-0.1-0.2-0.1-0.4-0.2-0.6c0-0.2-0.1-0.4-0.1-0.6c0-0.8,0.3-1.6,0.9-2.1\n\t\tc1.1-1.1,3.1-1.1,4.3,0c0.1,0.1,0.3,0.3,0.4,0.5c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.2,0.1,0.4,0.2,0.6c0,0.2,0.1,0.4,0.1,0.6\n\t\tc0,0.8-0.3,1.6-0.9,2.1c-0.1,0.1-0.3,0.3-0.5,0.4c-0.2,0.1-0.3,0.2-0.5,0.3c-0.2,0.1-0.4,0.1-0.6,0.2S15.8,27,15.6,27z"></path><path fill="currentColor" d="M26.6,17.1c1.7,0,3-1.3,3-3v-6c0-4.2-3.4-7.6-7.6-7.6H8.1c-4.2,0-7.6,3.4-7.6,7.6v31.8c0,4.2,3.4,7.6,7.6,7.6\n\t\tH22c4.2,0,7.6-3.4,7.6-7.6v-6c0-1.7-1.3-3-3-3s-3,1.3-3,3v6c0,0.9-0.7,1.6-1.6,1.6H8.1c-0.9,0-1.6-0.7-1.6-1.6V8.1\n\t\tc0-0.9,0.7-1.6,1.6-1.6H22c0.9,0,1.6,0.7,1.6,1.6v6C23.6,15.7,24.9,17.1,26.6,17.1z"></path><path fill="currentColor" class="arrow-logout" d="M47.3,25.2c0-0.1,0-0.1,0.1-0.2c0-0.1,0.1-0.2,0.1-0.4c0-0.2,0.1-0.4,0.1-0.6s0-0.4-0.1-0.6\n\t\tc0-0.1-0.1-0.2-0.1-0.4c0-0.1,0-0.1-0.1-0.2c-0.1-0.1-0.1-0.3-0.2-0.4c0,0,0-0.1-0.1-0.1c-0.1-0.2-0.2-0.3-0.4-0.5L38.7,14\n\t\tc-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l2.8,2.8h-14c-1.7,0-3,1.3-3,3s1.3,3,3,3h14l-2.8,2.8c-1.2,1.2-1.2,3.1,0,4.2\n\t\tc0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l7.9-7.9c0.1-0.1,0.3-0.3,0.4-0.5c0,0,0-0.1,0.1-0.1C47.1,25.4,47.2,25.3,47.3,25.2z"></path>\n\t\t</svg>\n  '),a.addEventListener("click",(function(){c.getUser?p.logoutUser(c.getUser):w()})),r.append(o,a),t.getHTMLElement().append(s,r),t.getHTMLElement()}(t);L.append(l),s.getHTMLElement().append((r=e("section",["section","users"]),o=e("input",["users__search"]),a=e("ul",["users__list","users__list-active"]),i=e("ul",["users__list","users__list-passive"]),r.append(o,a,i),a.addEventListener("click",(function(n){return y(n,"active")})),i.addEventListener("click",(function(n){return y(n,"inactive")})),o.addEventListener("input",h),r),function(){var t=e("section",["section","messages"]),s=e("div",["messages__status"]),r=e("div",["messages__field"]);r.addEventListener("wheel",(function(){b()})),r.addEventListener("click",b);var o=e("form",["messages__form"]),a=e("input",["messages__input"]);a.placeholder="Message..";var i=e("button",["messages__button"],"SEND");return a.disabled=!0,i.disabled=!0,i.type="submit",o.append(a,i),t.append(s,r,o),o.addEventListener("submit",(function(e){i.disabled=!0,function(e){var t=e.target;if(e.preventDefault(),!(t instanceof HTMLFormElement))throw new Error("Form isn't form");if(!(t.elements[0]instanceof HTMLInputElement))throw new Error("Input isn't input");var s=n(".message__status-user").textContent||"";p.sendMessage(s,t.elements[0].value),t.reset()}(e),b()})),a.addEventListener("input",(function(){i.disabled=!a.value})),t}()),L.append(s.getHTMLElement()),L.insertAdjacentHTML("beforeend",'\n   \x3c!---FOOTER --\x3e\n    <footer>\n      <ul class="footer__list">\n        \x3c!-- Telegram --\x3e\n        <li>\n          <a\n            class="contacts__link"\n            href="https://t.me/samkiral"\n          >\n            <svg class="contacts__icon" width="36" height="36" viewBox="0 0 32 32">\n<path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"></path>\n            </svg>\n          </a>\n        </li>\n\n        \x3c!-- GitHub --\x3e\n        <li>\n          <a class="contacts__link" href="https://github.com/BolotinAlexey">\n            <svg class="contacts__icon" width="36" height="36" viewBox="0 0 28 28">\n<path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>\n            </svg>\n          </a>\n        </li>\n\n        \x3c!-- LinkedIn --\x3e\n        <li>\n          <a class="contacts__link" href="https://www.linkedin.com/in/oleksii-bolotin/">\n            <svg class="contacts__icon" width="36" height="36" viewBox="0 0 32 32">\n<path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>\n            </svg>\n          </a>\n        </li>\n      </ul>\n\n      <h2 class="year">2024</h2>\n      <div class="logo">\n        <a class="contacts__link" href="https://rs.school/js/">\n          <svg class="contacts__icon" viewBox="0 0 552.8 205.3">\n            <style>\n              .st1 {\n                clip-path: url(#SVGID_2_);\n              }\n              .st2 {\n                clip-path: url(#SVGID_4_);\n              }\n              .st3 {\n                clip-path: url(#SVGID_6_);\n              }\n              .st4 {\n                clip-path: url(#SVGID_8_);\n              }\n              .st5 {\n                stroke-width: 4;\n                stroke-miterlimit: 10;\n              }\n              .st6 {\n                clip-path: url(#SVGID_8_);\n              }\n              .st6,\n              .st7 {\n                fill: none;\n\n                stroke-width: 4;\n                stroke-miterlimit: 10;\n              }\n              .st8,\n              .st9 {\n                clip-path: url(#SVGID_10_);\n              }\n              .st9 {\n                fill: none;\n\n                stroke-width: 4;\n                stroke-miterlimit: 10;\n              }\n            </style>\n\n            <path\n              fill="currentColor"\n              d="M285.4 68l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.9 3.6 6.9 5.4 12.2 5.4 3.9 0 7-.9 9.1-2.8 2-1.5 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.1-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4 6 4.2 9.6 11 10.7 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8s-5.3-2.8-9.2-2.8c-3.2 0-5.6.7-7.2 2-1.5 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.5 13.3 0 5.6-1.6 11.2-4.8 15.9-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8S286.1 77 285.4 68zM6.3 97.6V8.2h46.1c8.5 0 15.1.7 19.6 2.2 4.4 1.4 8.3 4.3 10.9 8.2 2.9 4.3 4.3 9.3 4.2 14.5.3 8.8-4.2 17.2-11.9 21.6-3 1.7-6.3 2.9-9.7 3.5 2.5.7 5 1.9 7.2 3.3 1.7 1.4 3.1 3 4.4 4.7 1.5 1.7 2.8 3.6 3.9 5.6l13.4 25.9H63L48.2 70.2c-1.9-3.5-3.5-5.8-5-6.9-2-1.4-4.4-2.1-6.8-2.1H34v36.3H6.3zM34 44.4h11.7c2.5-.2 4.9-.6 7.3-1.2 1.8-.3 3.4-1.3 4.5-2.8 2.7-3.6 2.3-8.7-1-11.8-1.8-1.5-5.3-2.3-10.3-2.3H34v18.1zM0 174.2l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.8 3.6 6.9 5.5 12.2 5.5 3.9 0 7-.9 9.1-2.8 2-1.6 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.2-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4s9.5 11 10.6 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8-2.2-1.9-5.3-2.8-9.2-2.7-3.2 0-5.6.7-7.2 2.1-1.6 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.6 13.2 0 5.6-1.7 11.1-4.8 15.8-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8-5.9-6-9.2-13.4-10-22.4z"\n            />\n            <path\n              fill="currentColor"\n              d="M133 167.2l24.2 7.3c-1.3 6.1-4 11.9-7.7 17-3.4 4.5-7.9 8-13 10.3-5.2 2.3-11.8 3.5-19.8 3.5-9.7 0-17.7-1.4-23.8-4.2-6.2-2.8-11.5-7.8-16-14.9-4.5-7.1-6.7-16.2-6.7-27.3 0-14.8 3.9-26.2 11.8-34.1s19-11.9 33.4-11.9c11.3 0 20.1 2.3 26.6 6.8 6.4 4.6 11.2 11.6 14.4 21l-24.4 5.4c-.6-2.1-1.5-4.2-2.7-6-1.5-2.1-3.4-3.7-5.7-4.9-2.3-1.2-4.9-1.7-7.5-1.7-6.3 0-11.1 2.5-14.4 7.6-2.5 3.7-3.8 9.6-3.8 17.6 0 9.9 1.5 16.7 4.5 20.4 3 3.7 7.2 5.5 12.7 5.5 5.3 0 9.3-1.5 12-4.4 2.7-3.1 4.7-7.4 5.9-13zm56.5-52.8h27.6v31.3h30.2v-31.3h27.8v89.4h-27.8v-36.2h-30.2v36.2h-27.6v-89.4z"\n            />\n            <path\n              fill="currentColor"\n              d="M271.3 159.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.3 4 34.4 12S364 144 364 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8s4.9-10.8 4.9-20.8c0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5zm93.4-.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.4 4 34.4 12S485 144 485 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8 3.3-3.9 4.9-10.8 4.9-20.8 0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10.1 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5z"\n            />\n            <path\n              fill="currentColor"\n              d="M482.1 114.4h27.6v67.4h43.1v22H482v-89.4z"\n            />\n            <ellipse\n              transform="rotate(-37.001 420.46 67.88)"\n              class="st0"\n              cx="420.5"\n              cy="67.9"\n              rx="63"\n              ry="51.8"\n            />\n            <defs>\n              <ellipse\n                id="SVGID_1_"\n                transform="rotate(-37.001 420.46 67.88)"\n                cx="420.5"\n                cy="67.9"\n                rx="63"\n                ry="51.8"\n              />\n            </defs>\n            <clipPath id="SVGID_2_">\n              <use xlink:href="#SVGID_1_" overflow="visible" />\n            </clipPath>\n            <g class="st1">\n              <path\n                transform="rotate(-37.001 420.82 68.353)"\n                class="st0"\n                d="M330.9-14.2h179.8v165.1H330.9z"\n              />\n              <g id="Layer_2_1_">\n                <defs>\n                  <path\n                    id="SVGID_3_"\n                    transform="rotate(-37.001 420.82 68.353)"\n                    d="M330.9-14.2h179.8v165.1H330.9z"\n                  />\n                </defs>\n                <clipPath id="SVGID_4_">\n                  <use xlink:href="#SVGID_3_" overflow="visible" />\n                </clipPath>\n                <g id="Layer_1-2" class="st2">\n                  <ellipse\n                    transform="rotate(-37.001 420.46 67.88)"\n                    class="st0"\n                    cx="420.5"\n                    cy="67.9"\n                    rx="63"\n                    ry="51.8"\n                  />\n                  <defs>\n                    <ellipse\n                      id="SVGID_5_"\n                      transform="rotate(-37.001 420.46 67.88)"\n                      cx="420.5"\n                      cy="67.9"\n                      rx="63"\n                      ry="51.8"\n                    />\n                  </defs>\n                  <clipPath id="SVGID_6_">\n                    <use xlink:href="#SVGID_5_" overflow="visible" />\n                  </clipPath>\n                  <g class="st3">\n                    <path\n                      transform="rotate(-37 420.799 68.802)"\n                      class="st0"\n                      d="M357.8 17h125.9v103.7H357.8z"\n                    />\n                    <defs>\n                      <path\n                        id="SVGID_7_"\n                        transform="rotate(-37 420.799 68.802)"\n                        d="M357.8 17h125.9v103.7H357.8z"\n                      />\n                    </defs>\n                    <clipPath id="SVGID_8_">\n                      <use xlink:href="#SVGID_7_" overflow="visible" />\n                    </clipPath>\n                    <g class="st4">\n                      <ellipse\n                        transform="rotate(-37.001 420.46 67.88)"\n                        class="st5"\n                        cx="420.5"\n                        cy="67.9"\n                        rx="63"\n                        ry="51.8"\n                      />\n                    </g>\n                    <path\n                      transform="rotate(-37 420.799 68.802)"\n                      class="st6"\n                      d="M357.8 17h125.9v103.7H357.8z"\n                    />\n                    <ellipse\n                      transform="rotate(-37.001 420.46 67.88)"\n                      class="st7"\n                      cx="420.5"\n                      cy="67.9"\n                      rx="63"\n                      ry="51.8"\n                    />\n                    <path\n                      transform="rotate(-37 420.799 68.802)"\n                      class="st0"\n                      d="M357.8 17h125.9v103.7H357.8z"\n                    />\n                    <defs>\n                      <path\n                        id="SVGID_9_"\n                        transform="rotate(-37 420.799 68.802)"\n                        d="M357.8 17h125.9v103.7H357.8z"\n                      />\n                    </defs>\n                    <clipPath id="SVGID_10_">\n                      <use xlink:href="#SVGID_9_" overflow="visible" />\n                    </clipPath>\n                    <g class="st8">\n                      <ellipse\n                        transform="rotate(-37.001 420.46 67.88)"\n                        class="st5"\n                        cx="420.5"\n                        cy="67.9"\n                        rx="63"\n                        ry="51.8"\n                      />\n                    </g>\n                    <path\n                      transform="rotate(-37 420.799 68.802)"\n                      class="st9"\n                      d="M357.8 17h125.9v103.7H357.8z"\n                    />\n                    <path\n                      transform="rotate(-37.001 420.82 68.353)"\n                      class="st7"\n                      d="M330.9-14.2h179.8v165.1H330.9z"\n                    />\n                  </g>\n                  <ellipse\n                    transform="rotate(-37.001 420.46 67.88)"\n                    class="st7"\n                    cx="420.5"\n                    cy="67.9"\n                    rx="63"\n                    ry="51.8"\n                  />\n                  <path\n                    fill="red"\n                    d="M392.4 61.3l10-7 12.3 17.5c2.1 2.8 3.7 5.8 4.9 9.1.7 2.5.5 5.2-.5 7.6-1.3 3-3.4 5.5-6.2 7.3-3.3 2.3-6.1 3.6-8.5 4-2.3.4-4.7 0-6.9-1-2.4-1.2-4.5-2.9-6.1-5.1l8.6-8c.7 1.1 1.6 2.1 2.6 2.9.7.5 1.5.8 2.4.8.7 0 1.4-.3 1.9-.7 1-.6 1.7-1.8 1.6-3-.3-1.7-1-3.4-2.1-4.7l-14-19.7zm30 11.1l9.1-7.2c1 1.2 2.3 2.1 3.7 2.6 2 .6 4.1.2 5.8-1.1 1.2-.8 2.2-1.9 2.6-3.3.6-1.8-.4-3.8-2.2-4.4-.3-.1-.6-.2-.9-.2-1.2-.1-3.3.4-6.4 1.7-5.1 2.1-9.1 2.9-12.1 2.6-2.9-.3-5.6-1.8-7.2-4.3-1.2-1.7-1.8-3.7-1.9-5.7 0-2.3.6-4.6 1.9-6.5 1.9-2.7 4.2-5 7-6.8 4.2-2.9 7.9-4.3 11.1-4.3 3.2 0 6.2 1.5 9 4.6l-9 7.1c-1.8-2.3-5.2-2.8-7.5-1l-.3.3c-1 .6-1.7 1.5-2.1 2.6-.3.8-.1 1.7.4 2.4.4.5 1 .9 1.7.9.8.1 2.2-.3 4.2-1.2 5-2.1 8.8-3.3 11.4-3.7 2.2-.4 4.5-.2 6.6.7 1.9.8 3.5 2.2 4.6 3.9 1.4 2 2.2 4.4 2.3 6.9.1 2.6-.6 5.1-2 7.3-1.8 2.7-4.1 5-6.8 6.8-5.5 3.8-10 5.4-13.6 4.8-3.9-.6-7.1-2.6-9.4-5.5z"\n                  />\n                </g>\n              </g>\n            </g>\n          </svg>\n        </a>\n      </div>\n    </footer>\n  '),h()}}var x="ABCDEFGHIJKLMNOPQRSTUVWXYZ",O="ws://localhost:4000",U=5e3,I=3e3;function T(e){var t=e.target;if(!(t instanceof HTMLInputElement))throw new Error("Wrong event");if(t.parentElement&&!t.value.length)return t.parentElement.childNodes[1].textContent="",t.classList.contains("wrong")&&t.classList.remove("wrong"),void(t.classList.contains("correct")&&t.classList.remove("correct"));try{t&&t.parentElement&&function(n){var e=n.value;if(n.classList.contains("login__input-login")){if(e.length<4)throw new Error("The letters number of name must be more then 4");if(!e.split("").every((function(n){return x.includes(n.toUpperCase())})))throw new Error("The letters must be in the English alphabet");if(e[0].toUpperCase()!==e[0])throw new Error("The first letter of name should be upper case")}else{if(e.length<4)throw new Error("The letters number of password must be more then 4");if(!e.split("").some((function(n){return x.includes(n.toUpperCase())})))throw new Error("You must use at least one english alphabet");if(!e.split("").some((function(n){return"0123456789".includes(n.toUpperCase())})))throw new Error("You must use at least one number 0-9")}return!0}(t)&&(t.parentElement.childNodes[1].textContent="",t.classList.contains("wrong")&&t.classList.remove("wrong"),t.classList.contains("correct")||t.classList.add("correct"))}catch(n){n instanceof Error&&t&&t.parentElement&&(t.parentElement.childNodes[1].textContent="⚠️ ".concat(n.message),t.classList.contains("wrong")||t.classList.add("wrong"),t.classList.contains("correct")&&t.classList.remove("correct"))}var s=document.querySelectorAll("input.login__input"),r=Object.values(s).reduce((function(n,e){return e instanceof HTMLInputElement?n&&e.classList.contains("correct")&&!!e.value.length:n}),!0),o=n(".login__input-submit");if(!(o instanceof HTMLButtonElement))throw new Error("Not HTMLInputElement");o.disabled=!r}function H(t,s,r){var o=e("div",["notify-wrap"]),a=e("div",["notify-msg"],t);o.append(a),s?o.classList.add("error-bg"):o.classList.add("success-bg"),n("body").append(o),r||setTimeout((function(){return o.remove()}),U)}function P(){var n=document.querySelector(".message__status-user");return n&&n.textContent?n.textContent:""}var k=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}();const C=function(n){function t(e){var t=n.call(this,{tag:"div",class:["message"],text:""})||this;return t.message=e,t.createMessage(),t}return k(t,n),t.prototype.createMessage=function(){var n,t=null===(n=c.getUser)||void 0===n?void 0:n.login;if(t){this.message.from===t?(this.message.from="you",this.getHTMLElement().classList.add("right-message")):this.getHTMLElement().classList.add("left-message");var s=this.message,r=s.from,o=s.text,a=s.datetime,i=s.status,l=i.isDelivered,u=i.isEdited,d=i.isReaded,p=e("span",["message__from"],r),f=e("div",["message__top"]),g=e("div",["message__text"],o),h=e("span",["message__date"],new Date(a).toLocaleString()),v=e("div",["message__bottom"]),m=l?"delivered":"sended",_=e("span",["message__status-sending"],m=d?"readed":m),b=e("span",["message__status-editing"],u?"edited":" ");"you"===this.message.from&&v.append(b,_),f.append(p,h),this.getHTMLElement().append(f,g,v)}},t}(s);function R(t){var s=JSON.parse(t.data);switch(s.type){case"USER_ACTIVE":g.setActiveUsers=s.payload.users;break;case"USER_INACTIVE":g.setPassiveUsers=s.payload.users;break;case"USER_LOGIN":s.payload.user.isLogined&&M();break;case"USER_LOGOUT":s.isLogined||w();break;case"USER_EXTERNAL_LOGIN":case"USER_EXTERNAL_LOGOUT":p.usersActive(),p.usersPassive();break;case"MSG_SEND":!function(n){var e=n.id,t=n.payload.message;e?p.sendRequestMessages(t.to):p.sendRequestMessages(t.from)}(s);break;case"MSG_FROM_USER":!function(t){var s,r,o,a=t,i=null===(s=c.getUser)||void 0===s?void 0:s.login,l=n(".messages__field"),u=document.querySelector(".message__status-user");if(u&&u.textContent&&(o=u.textContent),t.length&&(r=[t[0].from,t[0].to].find((function(n){return n!==i}))),r){_.setUserMsgs(r,t);var d=t.reduce((function(n,e){return e.from!==r||e.status.isReaded?n:n+1}),0);r&&d&&g.setUnReadMsgs(r,d)}!o&&l?(l.innerHTML="",l.append(e("div",["field__message-center"],"Select a user to communicate with.."))):a.length||!o||(a=_.getUserMsgs(o)||[]).length?o&&function(t,s){var r=n(".messages__field"),o=structuredClone(s);if(r.innerHTML="",o.length){o.forEach((function(n){var s=new C(n);document.querySelector(".not-read")||n.from!==t||n.status.isReaded||(console.log("append unread"),r.append(e("div",["not-read"],"----- Not read messages -----"))),r.append(s.getHTMLElement())}));var a=document.querySelector(".not-read");if(a)a.scrollIntoView(!0);else{var i=document.querySelectorAll(".message");i.length&&i[i.length-1].scrollIntoView(!0)}}}(o,a):(l.innerHTML="",l.append(e("div",["field__message-center"],"Start communicate with ".concat(o))))}(s.payload.messages);break;case"MSG_READ":p.usersActive(),p.usersPassive(),P()&&p.sendRequestMessages(P());break;case"ERROR":H(s.payload.error,!0)}}function z(n){u.setWS=new WebSocket(O);var e=u.getWS;e&&e.addEventListener("open",(function(){var t;l.isConnect=!0,window.clearInterval(l.setIntervallId);var s=document.querySelector(".notify-wrap");s&&s.remove(),e.addEventListener("close",(function(){u.setWS=null,l.isConnect=!1,H("Connecting...",!1,!0),function(n){l.setIntervallId=window.setInterval((function(){return z(n)}),I)}(n)})),function(n){c.setUser=n}(n),p.authUser(n),null===(t=u.getWS)||void 0===t||t.addEventListener("message",R)}))}var A=function(){return A=Object.assign||function(n){for(var e,t=1,s=arguments.length;t<s;t++)for(var r in e=arguments[t])Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},A.apply(this,arguments)};function j(n){if(n.preventDefault(),n.currentTarget instanceof HTMLFormElement){var e,t=n.currentTarget.elements,s=Object.values(t).reduce((function(n,e){var t;return e instanceof HTMLInputElement&&"INPUT"===e.tagName?A(A({},n),((t={})[e.name]=e.value,t)):n}),{});"login"in(e=s)&&"password"in e&&(n.currentTarget.reset(),["login","password","submit"].forEach((function(n){var e=document.querySelector(".login__input-".concat(n));e&&e.classList&&e.classList.contains("correct")&&e.classList.remove("correct"),e instanceof HTMLButtonElement&&!e.disabled&&(e.disabled=!0)})),z(s))}}var G=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])},n(e,t)};return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function s(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(s.prototype=t.prototype,new s)}}();const D=function(n){function t(){var t=n.call(this,{tag:"section",class:["login","page","active-page"],text:""})||this,s=e("h1",["page__title","page__title"],"Authorization"),r=function(){var n={form:e("form",["login__form"]),nameLabel:e("label",["login__label","login__label-login"]),passwordLabel:e("label",["login__label","login__label-password"]),nameSpan:e("span",["login__span"]),passwordSpan:e("span",["login__span"]),nameInput:e("input",["login__input","login__input-login"]),passwordInput:e("input",["login__input","login__input-password"]),submitBtn:e("button",["login__input","login__input-submit"],"LOGIN")},t=n.form,s=n.nameLabel,r=n.passwordLabel,o=n.nameSpan,a=n.passwordSpan,i=n.nameInput,c=n.passwordInput,l=n.submitBtn;return l.type="submit",l.disabled=!0,i.placeholder="Enter your name",c.placeholder="Enter your surname",i.required=!0,c.required=!0,i.name="login",c.name="password",c.type="password",s.append(i,o),r.append(c,a),t.append(s,r,l),{form:t,nameInput:i,passwordInput:c}}(),o=r.form,a=r.nameInput,i=r.passwordInput,c=e("a",["about__link"],"About");return c.href="/#/about",t.getHTMLElement().append(c,s,o),a.addEventListener("input",T),i.addEventListener("input",T),a.addEventListener("input",T),i.addEventListener("input",T),o.addEventListener("submit",j),t}return G(t,n),t}(s);var V=n("body");const N=["/chat","/about","/auth","/"];function W(){var n,t=window.location.hash.slice(1)||"/auth";switch(N.includes(t)&&"/chat"!==t||((n=c.getUser)&&!u.getWS&&z(n),t=n?"/chat":"/auth"),window.history.pushState({},"","#".concat(t)),t){case"/auth":!function(){V.innerHTML="";var n=e("main",["main","container"],""),t=new D;n.append(t.getHTMLElement()),V.append(n)}();break;case"/about":!function(){i.innerHTML="";var n=e("main",["main","container"],""),t=new a;n.append(t.getHTMLElement()),i.append(n)}();break;case"/chat":M()}}const q=function(){function n(){}return n.createView=function(){window.addEventListener("load",W),window.addEventListener("hashchange",W)},n}();t(208),q.createView()})()})();