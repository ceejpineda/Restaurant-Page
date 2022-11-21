(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,":root{\n\n}\n\n*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n}\n#content{\n    display: flex;\n    flex-direction: column; \n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    flex: 1;\n    gap: 20px;\n}\n\n.header{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: center;\n    border: thick solid black;\n    width: 70vw;\n    height: 20vh;\n    flex-grow: 1;\n}\n.body{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    flex-grow: 1;\n    height: 70vh;\n    width: 70vw;\n    border: thick solid black;\n    outline: none;\n    border-color: black;\n    box-shadow: 0 0 10px black;\n}\n.title{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 20px;\n    flex-grow: 1;\n}\n.navBar{\n    display: flex;\n    gap:20px;\n    justify-self: center;\n}\n\n.homeContainer{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    text-align: center;\n    flex-grow: 1;\n}\n.menuContainer{\n    display: grid;\n    grid-template-columns: repeat(3, 20vw);\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n.menuItem{\n    display: flex;\n    border: thick solid black;\n    justify-self: center;\n    width: 20vw;\n    height: 30vh;\n\n}\n.intro{\n    padding: 20px;\n}\n#waddlesImage{\n    width: 120px;\n    height: 120px;\n    object-fit: contain;\n}",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=t(o[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"2840d9bf1f31021385eb.png",n=(()=>{const n=e=>{let n=document.createElement("button");return n.classList.add("button"),n.id=e,n.innerText=e,n},t=()=>{document.querySelector(".body").innerHTML=""},r=(e,n)=>{const t=document.createElement(e);return t.classList.add(n),t};return{createPage:()=>{const t=document.getElementById("content"),a=(()=>{const e=document.createElement("div");e.classList.add("navBar");const t=n("Home"),r=n("Menu"),a=n("Contact");return e.append(t),e.append(r),e.append(a),e})(),o=r("div","header"),i=r("div","body"),c=(()=>{const n=r("div","title"),t=new Image;t.src=e,t.id="waddlesImage";const a=document.createElement("h1");return a.innerText="Waddles' Cat Cafe",n.appendChild(t),n.appendChild(a),n})();o.appendChild(c),o.appendChild(a),t.appendChild(o),t.appendChild(i)},loadFunction:()=>{const e=document.getElementById("Home"),n=document.getElementById("Contact"),r=document.getElementById("Menu"),a=document.querySelector(".body");e.addEventListener("click",(()=>{t(),a.appendChild(function(){const e=document.createElement("div");e.classList.add("homeContainer");const n=document.createElement("div");n.classList.add("intro");const t=document.createElement("div");t.classList.add("hours");const r=document.createElement("div");r.classList.add("location");const a=document.createElement("p");a.innerText="Waddles' Cat Cafe, is the best cafe in the city",n.appendChild(a);const o=document.createElement("p");o.innerText="\n    We are Open:\n    Monday: Closed\n    Tuesday: 9am-9pm\n    Wednesday: 9am-9pm\n    Thursday: 9am-12am\n    Friday: 9am-12am\n    Saturday: 9am-12am\n    Sunday: 9am-9pm",t.appendChild(o);const i=document.createElement("p");return i.innerText="\n    222-2-8 Siamese Street \n    Persian Avenue \n    Puspin City \n    Philippines",r.appendChild(i),e.appendChild(n),e.appendChild(t),e.appendChild(r),e}())})),n.addEventListener("click",(()=>{t(),a.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("p");return n.innerText="Hello Home",e.appendChild(n),e}())})),r.addEventListener("click",(()=>{console.log("hehe"),t(),a.appendChild(function(){const e=document.createElement("div");e.classList.add("menuContainer");for(let n=1;n<=6;n++){let t=document.createElement("div");t.classList.add("menuItem"),t.dataset.itemNumber=n,e.appendChild(t)}return e}())}))}}})();var r=t(379),a=t.n(r),o=t(795),i=t.n(o),c=t(569),d=t.n(c),s=t(565),l=t.n(s),p=t(216),u=t.n(p),m=t(589),f=t.n(m),h=t(426),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),a()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals,console.log("IT RUNS!"),console.log("IT RUNS!"),n.createPage(),n.loadFunction()})()})();