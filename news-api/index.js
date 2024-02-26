(()=>{"use strict";var n={96:(n,e,t)=>{t.d(e,{c:()=>i});var r=t(500),o=t.n(r),s=t(312),a=t.n(s)()(o());a.push([n.id,".news__item {\n    display: flex;\n    flex-direction: column;\n    margin: 1rem auto;\n    margin-bottom: 1.6%;\n    background: #fff;\n    color: #333;\n    line-height: 1.4;\n    font-family: Arial, sans-serif;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n.news__item:hover .news__meta-photo {\n    transform: scale(1.3) rotate(3deg);\n}\n\n.news__item .news__meta {\n    position: relative;\n    height: 200px;\n}\n\n.news__item .news__meta-photo {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: cover;\n    background-position: center;\n    transition: transform 0.2s;\n}\n\n.news__item .news__meta-details,\n.news__item .news__meta-details ul {\n    margin: auto;\n    padding: 0;\n    list-style: none;\n}\n\n.news__item .news__meta-details {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: -120%;\n    margin: auto;\n    transition: left 0.2s;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    padding: 10px;\n    width: 100%;\n    font-size: 0.9rem;\n}\n\n.news__item .news__description {\n    padding: 1rem;\n    background: #fff;\n    position: relative;\n    z-index: 1;\n}\n\n.news__item .news__description h2 {\n    line-height: 1;\n    margin: 0;\n    font-size: 1.7rem;\n}\n\n.news__item .news__description h3 {\n    font-size: 1rem;\n    font-weight: 300;\n    text-transform: uppercase;\n    color: #a2a2a2;\n    margin-top: 5px;\n}\n\n.news__item .news__description .news__read-more {\n    text-align: right;\n}\n\n.news__item .news__description .news__read-more a {\n    color: #5ad67d;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    font-weight: 800;\n}\n\n.news__item .news__description .news__read-more a:after {\n    content: '→';\n    margin-left: -10px;\n    opacity: 0;\n    vertical-align: middle;\n    transition: margin 0.3s, opacity 0.3s;\n}\n\n.news__item .news__description .news__read-more a:hover:after {\n    margin-left: 5px;\n    opacity: 1;\n}\n\n.news__item p {\n    margin: 1rem 0 0;\n}\n\n.news__item p:first-of-type {\n    margin-top: 1.25rem;\n    position: relative;\n}\n\n.news__item p:first-of-type:before {\n    content: '';\n    position: absolute;\n    height: 5px;\n    background: #5ad67d;\n    width: 35px;\n    top: -0.75rem;\n    border-radius: 3px;\n}\n\n.news__item:hover .news__meta-details {\n    left: 0%;\n}\n\n@media (min-width: 640px) {\n    .news__item {\n        flex-direction: row;\n        max-width: 700px;\n    }\n\n    .news__item .news__meta {\n        flex-basis: 40%;\n        height: auto;\n    }\n\n    .news__item .news__description {\n        flex-basis: 60%;\n    }\n\n    .news__item .news__description:before {\n        -webkit-transform: skewX(-3deg);\n        transform: skewX(-3deg);\n        content: '';\n        background: #fff;\n        width: 30px;\n        position: absolute;\n        left: -10px;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n    }\n\n    .news__item.alt {\n        flex-direction: row-reverse;\n    }\n\n    .news__item.alt .news__description:before {\n        left: inherit;\n        right: -10px;\n        -webkit-transform: skew(3deg);\n        transform: skew(3deg);\n    }\n\n    .news__item.alt .news__meta-details {\n        padding-left: 25px;\n    }\n}\n",""]);const i=a},376:(n,e,t)=>{t.d(e,{c:()=>i});var r=t(500),o=t.n(r),s=t(312),a=t.n(s)()(o());a.push([n.id,".sources {\n    position: fixed;\n    top: 100px;\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    width: 100%;\n    min-height: 80px;\n    max-height: 200px;\n    overflow: auto;\n    align-items: center;\n    font:\n        300 1em 'Fira Sans',\n        sans-serif;\n    background-color: rgba(var(--bgAlpha));\n    z-index: 5;\n    transition: transform 1s linear;\n}\n\nbody.transform .sources {\n    transform: translateY(calc(-100% - 200px));\n}\n\n@media screen and (max-width: 700px) {\n    .sources {\n        top: 150px;\n    }\n}\n@media screen and (max-width: 372px) {\n    .sources {\n        top: 200px;\n    }\n}\n\n.source__item {\n    background: none;\n    border: 2px solid var(--main-color);\n    font: inherit;\n    line-height: 1;\n    margin: 0.5em;\n    padding: 1em 2em;\n    color: var(--main-color);\n    transition: 0.25s;\n    cursor: pointer;\n    border-radius: 10px;\n}\n\n.source__item:hover,\n.source__item:focus {\n    border-color: #3fcc59;\n    color: #69db7e;\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\n    transform: translateY(-0.25em);\n}\n\n.source__item-name {\n    font-weight: 400;\n    white-space: nowrap;\n}\n",""]);const i=a},804:(n,e,t)=>{t.d(e,{c:()=>i});var r=t(500),o=t.n(r),s=t(312),a=t.n(s)()(o());a.push([n.id,"footer {\n    position: fixed;\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: var(--main-color);\n    width: 100%;\n    padding: 0.5rem;\n    border-top: 1px var(--main-color) solid;\n    background-color: rgba(var(--bgAlpha));\n    z-index: 5;\n    transition: transform 1s linear;\n}\n\nbody.transform footer {\n    transform: translateY(200px);\n}\n\n.footer__list {\n    display: flex;\n    gap: 0.5rem;\n}\n.contacts__link {\n    width: 20px;\n    color: var(--main-color);\n    transition: color 0.5s linear;\n}\n.contacts__link:hover,\n.contacts__link:active {\n    color: var(--second-color);\n}\n.contacts__icon-invert {\n    color: var(--main-color);\n    transition: color 0.5s linear;\n}\n.contacts__icon-invert:hover {\n    color: var(--second-color);\n}\n\n/* logo */\n.logo {\n    width: 100px;\n}\n\n.st0,\n.st5,\n.st7,\n.st9 {\n    fill: currentColor;\n    stroke: currentColor;\n}\n.logo__svg {\n    width: 100px;\n    padding-right: 10px;\n}\n\n.logo:hover {\n    animation: shake-rotate 1s linear;\n    color: var(--second-color);\n}\n\n.logo > a,\n.year,\n.footer__list {\n    font-size: 1.5rem;\n}\n\n@keyframes shake-rotate {\n    15% {\n        transform: rotate(15deg);\n    }\n    30% {\n        transform: rotate(-15deg);\n    }\n    40% {\n        transform: rotate(10deg);\n    }\n    50% {\n        transform: rotate(-10deg);\n    }\n    65% {\n        transform: rotate(5deg);\n    }\n    85% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n",""]);const i=a},368:(n,e,t)=>{t.d(e,{c:()=>i});var r=t(500),o=t.n(r),s=t(312),a=t.n(s)()(o());a.push([n.id,":root {\n    --main-color: #30c5ff;\n    --accent-color: #ff5d52;\n    --accent-rgb: 255, 93, 82;\n    --second-color: #fff;\n    --logoJS: #ff5d52;\n    --bg: #17181c;\n    --bgAlpha: 23, 24, 28, 0.7;\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Hind Madurai';\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    margin: 0;\n}\nul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\nbody {\n    color: var(--second-color);\n    background: var(--bg);\n    font-family: sans-serif;\n}\n\nheader {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    padding: 10px 20px;\n    z-index: 5;\n    background-color: rgba(var(--bgAlpha));\n    transition: transform 1s linear;\n}\n\nbody.transform header {\n    transform: translateY(-200px);\n}\n\nheader h1 {\n    font-size: 40px;\n    font-weight: 800;\n}\n\n/* footer {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n} */\nfooter .copyright {\n    font-size: 14px;\n    color: #333;\n    text-align: center;\n}\nfooter .copyright a {\n    color: #444;\n}\nfooter .copyright a:hover {\n    color: #555;\n}\nfooter .copyright:before {\n    content: '©';\n}\n\n.lang-list {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 5px;\n    justify-content: space-around;\n}\n.lang-item {\n    font-size: 1.5rem;\n    padding: 5px 10px;\n    color: var(--second-color);\n    border: solid 1px currentColor;\n}\n.lang-item:hover {\n    cursor: pointer;\n    color: var(--main-color);\n}\n\n.un-transform {\n    position: fixed;\n    opacity: 0;\n    top: 20px;\n    right: 20px;\n    padding: 5px 10px;\n    color: var(--accent-color);\n    border: solid 1px var(--accent-color);\n    border-radius: 5px;\n    background-color: transparent;\n    font: 1rem bold;\n    transform: all 0.3s linear;\n    z-index: 3;\n}\n\n.un-transform:hover {\n    cursor: pointer;\n    background-color: var(--main-color);\n}\nbody.transform .un-transform {\n    opacity: 1;\n}\n",""]);const i=a},312:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,s){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==s&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=s),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},500:n=>{n.exports=function(n){return n[1]}},596:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var s={},a=[],i=0;i<n.length;i++){var c=n[i],l=r.base?c[0]+r.base:c[0],d=s[l]||0,u="".concat(l," ").concat(d);s[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var s=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<s.length;a++){var i=t(s[a]);e[i].references--}for(var c=r(n,o),l=0;l<s.length;l++){var d=t(s[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}s=c}}},176:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},808:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},120:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},520:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},936:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={id:r,exports:{}};return n[r](s,s.exports,t),s.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(n){if(void 0===n)throw new Error(`${n} is not defined`);if(null===n)throw new Error(`${n} is null`)}function e(e,t){const r=e.querySelector(t);return n(r),r}function r(e){const t=document.querySelector(e);return n(t),t}function o(n,e,t){const r=document.createElement(n);return r.innerHTML=t||"",e&&r.classList.add(e),r}var s,a,i,c;!function(n){n.sources="sources",n.everything="everything"}(s||(s={})),function(n){n.get="GET",n.post="POST"}(a||(a={})),function(n){n[n.Success=200]="Success",n[n.Accepted=202]="Accepted",n[n.BadRequest=400]="BadRequest",n[n.Unauthorized=401]="Unauthorized",n[n.NotFound=404]="NotFound",n[n.TooManyRequests=429]="TooManyRequests",n[n.ServerError=500]="ServerError"}(i||(i={})),function(n){n.ar="ar",n.de="de",n.en="en",n.es="es",n.fr="fr",n.he="he",n.it="it",n.nl="nl",n.no="no",n.pt="pt",n.ru="ru",n.sv="sv",n.ud="ud",n.zh="zh"}(c||(c={}));const l=class{constructor(e,t){n(e),n(t.apiKey),this._baseLink=e,this._options=t}getResp({endpoint:n,options:e={}},t=(()=>{console.error("No callback for GET response")})){this.load(a.get,n,t,e)}errorHandler(n){if(!n.ok)throw n.status!==i.NotFound&&n.status!==i.Unauthorized||console.log(`Sorry, but there is ${n.status} error: ${n.statusText}`),Error(n.statusText);return n}makeUrl(n,e){const t=Object.assign(Object.assign({},this._options),n);let r=`${this._baseLink}${e}?`;return Object.entries(t).forEach((([n,e])=>{r+=`${n}=${null!=e?e:""}&`})),r.slice(0,-1)}load(n=a.get,e,t,r={}){fetch(this.makeUrl(r,e),{method:n}).then(this.errorHandler).then((n=>n.json())).then((n=>t(n))).catch((n=>console.error(n)))}},d=class extends l{constructor(){super("https://rss-news-api.onrender.com/",{apiKey:"b75565e666924fd89e82febdb9dcb576"})}},u=class extends d{getSources(n){super.getResp({endpoint:s.sources},n)}getNews(e,t){let o=e.target;if(n(o),!(o instanceof Element))throw new Error("Error");const a=e.currentTarget;if(n(a),!(a instanceof Element))throw new Error("Error");const i=r("body");for(i.classList.add("transform"),r(".un-transform").addEventListener("click",(()=>{i.classList.contains("transform")&&i.classList.remove("transform")}));o!==a;){if(n(o),o.classList.contains("source__item")){const e=o.getAttribute("data-source-id");return n(e),void(a.getAttribute("data-source")!==e&&(a.setAttribute("data-source",e),super.getResp({endpoint:s.everything,options:{sources:e}},t)))}o=o.parentNode}}};var p=t(596),f=t.n(p),m=t(520),h=t.n(m),_=t(176),g=t.n(_),w=t(120),v=t.n(w),b=t(808),x=t.n(b),y=t(936),k=t.n(y),S=t(96),E={};E.styleTagTransform=k(),E.setAttributes=v(),E.insert=g().bind(null,"head"),E.domAPI=h(),E.insertStyleElement=x(),f()(S.c,E),S.c&&S.c.locals&&S.c.locals;const T=class{draw(t){const r=t.length>=10?t.filter(((n,e)=>e<10)):t,o=document.createDocumentFragment(),s=document.querySelector("#newsItemTemp");n(s),r.forEach(((t,r)=>{const a=s.content.cloneNode(!0);n(a),r%2&&e(a,".news__item").classList.add("alt"),e(a,".news__meta-photo").style.backgroundImage=`url(${t.urlToImage||"img/news_placeholder.jpg"})`,e(a,".news__meta-author").textContent=t.author||t.source.name,e(a,".news__meta-date").textContent=t.publishedAt.slice(0,10).split("-").reverse().join("-"),e(a,".news__description-title").textContent=t.title;const i=e(a,".news__description-source");i.textContent=t.title,i.textContent=t.source.name,e(a,".news__description-content").textContent=t.description,e(a,".news__read-more a").setAttribute("href",t.url),o.append(a)}));const a=document.querySelector(".news");n(a),a.innerHTML="",a.appendChild(o)}};var A=t(376),z={};z.styleTagTransform=k(),z.setAttributes=v(),z.insert=g().bind(null,"head"),z.domAPI=h(),z.insertStyleElement=x(),f()(A.c,z),A.c&&A.c.locals&&A.c.locals;const C=class{draw(t,r){const o=document.createDocumentFragment(),s=document.querySelector("#sourceItemTemp");n(s),t.forEach((n=>{if(n.language===r){const t=s.content.cloneNode(!0);e(t,".source__item-name").textContent=n.name,e(t,".source__item").setAttribute("data-source-id",n.id),o.append(t)}}));const a=document.querySelector(".sources");n(a),a.append(o)}};class L{constructor(){this._news=new T,this._sources=new C}drawNews(n){const e=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this._news.draw(e)}drawSources(n,e){const t=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this._sources.draw(t,e)}}var j=t(368),N={};N.styleTagTransform=k(),N.setAttributes=v(),N.insert=g().bind(null,"head"),N.domAPI=h(),N.insertStyleElement=x(),f()(j.c,N),j.c&&j.c.locals&&j.c.locals;var M=t(804),q={};q.styleTagTransform=k(),q.setAttributes=v(),q.insert=g().bind(null,"head"),q.domAPI=h(),q.insertStyleElement=x(),f()(M.c,q),M.c&&M.c.locals&&M.c.locals,(new class{constructor(){this._controller=new u,this._view=new L}start(){const e=document.querySelector(".sources");n(e),e.addEventListener("click",(n=>this._controller.getNews(n,(n=>this._view.drawNews(n)))));const t=document.querySelector("header");n(t);const r=o("ul","lang-list");Object.values(c).forEach((n=>{const t=o("li","lang-item",n);r.append(t),t.addEventListener("click",(()=>{e.innerHTML="",this._controller.getSources(((e,t=c[n])=>this._view.drawSources(e,t)))}))})),t.appendChild(r),this._controller.getSources(((n,e=c.ru)=>this._view.drawSources(n,e)))}}).start()})()})();