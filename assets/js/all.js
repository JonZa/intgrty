function measureStuff(){winWidth=window.innerWidth,winHeight=window.innerHeight;for(var e=winWidth<minWidth||winHeight<minHeight,t=0;t<sections.length;t++){var n=sections[t];if(n.$_el.hasAttribute("style")&&n.$_el.removeAttribute("style"),e){if(n.$_el.removeAttribute("data-offsetTop"),n.children)for(var o=n.$_el.querySelectorAll("section"),i=0;i<o.length;i++)o[i].removeAttribute("style"),o[i].removeAttribute("data-offsetTop"),o[i].querySelector(".box").removeAttribute("style");n.$_el.removeAttribute("style"),n.$_el.removeAttribute("data-offsetheight")}else{n.$_el.setAttribute("data-offsetTop",n.$_el.offsetTop);var r=0;if(n.children)for(var o=n.$_el.querySelectorAll("section"),c=0,i=0;i<o.length;i++){o[i].style.top=r+"px";var s=o[i].querySelector(".box");s.style.transform="translatey("+c+"px)",c+=s.offsetHeight,o[i].setAttribute("data-offsetTop",o[i].offsetTop),r+=o[i].offsetHeight}else r=n.$_el.offsetHeight;n.$_el.style.height=r+"px",n.$_el.setAttribute("data-offsetHeight",r)}}}function updateScroll(){document.documentElement.scrollTop;winScrollTop=document.documentElement.scrollTop,winScrollTop>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled");for(var e=0;e<sections.length;e++){var t=sections[e].$_el;if(sections[e].children){var n=Number(t.getAttribute("data-offsetTop")),o=Number(t.getAttribute("data-offsetHeight")),i=Number(t.getAttribute("data-offsetTop"))+o;if(winScrollTop>n&&winScrollTop<i){t.querySelector(".children").classList.add("fixed"),t.querySelector("section.active")&&t.querySelector("section.active").classList.remove("active");var r=Math.floor((winScrollTop-n)/winHeight);r<sections[e].children&&t.querySelectorAll("section")[r].classList.add("active");for(var c=t.querySelector(".children").children,e=0;e<c.length;e++){var s=winScrollTop-n;s>Number(c[e].getAttribute("data-offsetTop"))&&(s=Number(c[e].getAttribute("data-offsetTop"))),c[e].style.transform="translatey(-"+s+"px)"}}else{var c=document.querySelector(".children.fixed");c&&c.classList.remove("fixed")}}}}function monitorWindow(){ticking||(window.requestAnimationFrame(function(){winWidth===window.innerWidth&&winHeight===window.innerHeight||measureStuff(),winScrollTop!==document.documentElement.scrollTop&&updateScroll(),ticking=!1}),ticking=!0)}!function(){"use strict";function e(e){u.push(e),1==u.length&&d()}function t(){for(;u.length;)u[0](),u.shift()}function n(e){this.a=f,this.b=void 0,this.f=[];var t=this;try{e(function(e){r(t,e)},function(e){c(t,e)})}catch(e){c(t,e)}}function o(e){return new n(function(t,n){n(e)})}function i(e){return new n(function(t){t(e)})}function r(e,t){if(e.a==f){if(t==e)throw new TypeError;var n=!1;try{var o=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||r(e,t),n=!0},function(t){n||c(e,t),n=!0})}catch(t){return void(n||c(e,t))}e.a=0,e.b=t,s(e)}}function c(e,t){if(e.a==f){if(t==e)throw new TypeError;e.a=1,e.b=t,s(e)}}function s(t){e(function(){if(t.a!=f)for(;t.f.length;){var e=t.f.shift(),n=e[0],o=e[1],i=e[2],e=e[3];try{0==t.a?i("function"==typeof n?n.call(void 0,t.b):t.b):1==t.a&&("function"==typeof o?i(o.call(void 0,t.b)):e(t.b))}catch(t){e(t)}}})}function l(e){return new n(function(t,n){var o=0,r=[];0==e.length&&t(r);for(var c=0;c<e.length;c+=1)i(e[c]).c(function(n){return function(i){r[n]=i,(o+=1)==e.length&&t(r)}}(c),n)})}function a(e){return new n(function(t,n){for(var o=0;o<e.length;o+=1)i(e[o]).c(t,n)})}var d,u=[];d=function(){setTimeout(t)};var f=2;n.prototype.g=function(e){return this.c(void 0,e)},n.prototype.c=function(e,t){var o=this;return new n(function(n,i){o.f.push([e,t,n,i]),s(o)})},window.Promise||(window.Promise=n,window.Promise.resolve=i,window.Promise.reject=o,window.Promise.race=a,window.Promise.all=l,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype.catch=n.prototype.g)}(),function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function t(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function o(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function i(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function r(t,n){function o(){var e=r;i(e)&&e.a.parentNode&&n(e.g)}var r=t;e(t.b,o),e(t.c,o),i(t)}function c(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function s(){if(null===f)if(l()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);f=!!e&&603>parseInt(e[1],10)}else f=!1;return f}function l(){return null===p&&(p=!!document.fonts),p}function a(){if(null===h){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}h=""!==e.style.font}return h}function d(e,t){return[e.style,e.weight,a()?e.stretch:"","100px",t].join(" ")}var u=null,f=null,h=null,p=null;c.prototype.load=function(e,i){var c=this,a=e||"BESbswy",f=0,h=i||3e3,p=(new Date).getTime();return new Promise(function(e,i){if(l()&&!s()){var m=new Promise(function(e,t){function n(){(new Date).getTime()-p>=h?t():document.fonts.load(d(c,'"'+c.family+'"'),a).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()}),w=new Promise(function(e,t){f=setTimeout(t,h)});Promise.race([w,m]).then(function(){clearTimeout(f),e(c)},function(){i(c)})}else t(function(){function t(){var t;(t=-1!=v&&-1!=y||-1!=v&&-1!=g||-1!=y&&-1!=g)&&((t=v!=y&&v!=g&&y!=g)||(null===u&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),u=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=u&&(v==b&&y==b&&g==b||v==T&&y==T&&g==T||v==x&&y==x&&g==x)),t=!t),t&&(S.parentNode&&S.parentNode.removeChild(S),clearTimeout(f),e(c))}function s(){if((new Date).getTime()-p>=h)S.parentNode&&S.parentNode.removeChild(S),i(c);else{var e=document.hidden;!0!==e&&void 0!==e||(v=l.a.offsetWidth,y=m.a.offsetWidth,g=w.a.offsetWidth,t()),f=setTimeout(s,50)}}var l=new n(a),m=new n(a),w=new n(a),v=-1,y=-1,g=-1,b=-1,T=-1,x=-1,S=document.createElement("div");S.dir="ltr",o(l,d(c,"sans-serif")),o(m,d(c,"serif")),o(w,d(c,"monospace")),S.appendChild(l.a),S.appendChild(m.a),S.appendChild(w.a),document.body.appendChild(S),b=l.a.offsetWidth,T=m.a.offsetWidth,x=w.a.offsetWidth,s(),r(l,function(e){v=e,t()}),o(l,d(c,'"'+c.family+'",sans-serif')),r(m,function(e){y=e,t()}),o(m,d(c,'"'+c.family+'",serif')),r(w,function(e){g=e,t()}),o(w,d(c,'"'+c.family+'",monospace'))})})},"object"==typeof module?module.exports=c:(window.FontFaceObserver=c,window.FontFaceObserver.prototype.load=c.prototype.load)}();var winScrollTop=document.documentElement.scrollTop,minWidth=Number(getComputedStyle(document.body).getPropertyValue("--breakpoint-lg").split("px")[0]),winWidth=window.innerWidth,minHeight=Number(getComputedStyle(document.body).getPropertyValue("--breakpoint-md").split("px")[0]),winHeight=window.innerHeight,ticking=!1;["scroll","resize"].forEach(function(e){window.addEventListener(e,monitorWindow)});for(var $_sections=document.querySelectorAll("body > section"),sections=[],i=0;i<$_sections.length;i++){var $_section=$_sections[i],$_children=$_section.querySelector(".children"),children=$_children?$_children.children.length:0;sections.push({$_el:$_section,children:children})}measureStuff(),updateScroll();var $_header=document.querySelector(".header");document.querySelector(".nav__toggle").addEventListener("click",function(){$_header.classList.toggle("header--open")});var font=new FontFaceObserver("Open Sans");font.load().then(function(){measureStuff()});