function measureStuff(){winWidth=window.innerWidth,winHeight=window.innerHeight,document.documentElement.style.setProperty("--winHeight",winHeight+"px"),cumulativeHeight=0;for(var e=0;e<sections.length;e++){var t=sections[e];t.$_el.hasAttribute("style")&&t.$_el.removeAttribute("style"),t.$_el.setAttribute("data-offset",cumulativeHeight),t.$_el.setAttribute("data-height",t.$_el.offsetHeight),cumulativeHeight+=t.$_el.offsetHeight}updateScroll()}function updateScroll(){document.documentElement.scrollTop;winScrollTop=document.documentElement.scrollTop,winScrollTop>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled");for(var e=0;e<sections.length;e++){var t=sections[e];Number(t.$_el.getAttribute("data-offset"))-winScrollTop>.75*winHeight?t.$_el.classList.remove("active"):t.$_el.classList.add("active"),console.log(t.$_fixers),t.$_fixers.length&&(Number(t.$_el.getAttribute("data-offset"))+Number(t.$_el.getAttribute("data-height"))>winScrollTop+winHeight?t.$_fixers[0].classList.add("pos-fixed"):t.$_fixers[0].classList.remove("pos-fixed"))}}function monitorWindow(){console.log("oh hi"),ticking||(window.requestAnimationFrame(function(){winWidth===window.innerWidth&&winHeight===window.innerHeight||measureStuff(),winScrollTop!==document.documentElement.scrollTop&&updateScroll(),ticking=!1}),ticking=!0)}!function(){"use strict";function e(e){u.push(e),1==u.length&&d()}function t(){for(;u.length;)u[0](),u.shift()}function n(e){this.a=f,this.b=void 0,this.f=[];var t=this;try{e(function(e){r(t,e)},function(e){s(t,e)})}catch(e){s(t,e)}}function i(e){return new n(function(t,n){n(e)})}function o(e){return new n(function(t){t(e)})}function r(e,t){if(e.a==f){if(t==e)throw new TypeError;var n=!1;try{var i=t&&t.then;if(null!=t&&"object"==typeof t&&"function"==typeof i)return void i.call(t,function(t){n||r(e,t),n=!0},function(t){n||s(e,t),n=!0})}catch(t){return void(n||s(e,t))}e.a=0,e.b=t,c(e)}}function s(e,t){if(e.a==f){if(t==e)throw new TypeError;e.a=1,e.b=t,c(e)}}function c(t){e(function(){if(t.a!=f)for(;t.f.length;){var e=t.f.shift(),n=e[0],i=e[1],o=e[2],e=e[3];try{0==t.a?o("function"==typeof n?n.call(void 0,t.b):t.b):1==t.a&&("function"==typeof i?o(i.call(void 0,t.b)):e(t.b))}catch(t){e(t)}}})}function a(e){return new n(function(t,n){var i=0,r=[];0==e.length&&t(r);for(var s=0;s<e.length;s+=1)o(e[s]).c(function(n){return function(o){r[n]=o,(i+=1)==e.length&&t(r)}}(s),n)})}function l(e){return new n(function(t,n){for(var i=0;i<e.length;i+=1)o(e[i]).c(t,n)})}var d,u=[];d=function(){setTimeout(t)};var f=2;n.prototype.g=function(e){return this.c(void 0,e)},n.prototype.c=function(e,t){var i=this;return new n(function(n,o){i.f.push([e,t,n,o]),c(i)})},window.Promise||(window.Promise=n,window.Promise.resolve=o,window.Promise.reject=i,window.Promise.race=l,window.Promise.all=a,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype.catch=n.prototype.g)}(),function(){function e(e,t){document.addEventListener?e.addEventListener("scroll",t,!1):e.attachEvent("scroll",t)}function t(e){document.body?e():document.addEventListener?document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t),e()}):document.attachEvent("onreadystatechange",function t(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",t),e())})}function n(e){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(e)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function i(e,t){e.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+t+";"}function o(e){var t=e.a.offsetWidth,n=t+100;return e.f.style.width=n+"px",e.c.scrollLeft=n,e.b.scrollLeft=e.b.scrollWidth+100,e.g!==t&&(e.g=t,!0)}function r(t,n){function i(){var e=r;o(e)&&e.a.parentNode&&n(e.g)}var r=t;e(t.b,i),e(t.c,i),o(t)}function s(e,t){var n=t||{};this.family=e,this.style=n.style||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"normal"}function c(){if(null===f)if(a()&&/Apple/.test(window.navigator.vendor)){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);f=!!e&&603>parseInt(e[1],10)}else f=!1;return f}function a(){return null===p&&(p=!!document.fonts),p}function l(){if(null===h){var e=document.createElement("div");try{e.style.font="condensed 100px sans-serif"}catch(e){}h=""!==e.style.font}return h}function d(e,t){return[e.style,e.weight,l()?e.stretch:"","100px",t].join(" ")}var u=null,f=null,h=null,p=null;s.prototype.load=function(e,o){var s=this,l=e||"BESbswy",f=0,h=o||3e3,p=(new Date).getTime();return new Promise(function(e,o){if(a()&&!c()){var m=new Promise(function(e,t){function n(){(new Date).getTime()-p>=h?t():document.fonts.load(d(s,'"'+s.family+'"'),l).then(function(t){1<=t.length?e():setTimeout(n,25)},function(){t()})}n()}),w=new Promise(function(e,t){f=setTimeout(t,h)});Promise.race([w,m]).then(function(){clearTimeout(f),e(s)},function(){o(s)})}else t(function(){function t(){var t;(t=-1!=v&&-1!=g||-1!=v&&-1!=y||-1!=g&&-1!=y)&&((t=v!=g&&v!=y&&g!=y)||(null===u&&(t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),u=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))),t=u&&(v==b&&g==b&&y==b||v==x&&g==x&&y==x||v==_&&g==_&&y==_)),t=!t),t&&($.parentNode&&$.parentNode.removeChild($),clearTimeout(f),e(s))}function c(){if((new Date).getTime()-p>=h)$.parentNode&&$.parentNode.removeChild($),o(s);else{var e=document.hidden;!0!==e&&void 0!==e||(v=a.a.offsetWidth,g=m.a.offsetWidth,y=w.a.offsetWidth,t()),f=setTimeout(c,50)}}var a=new n(l),m=new n(l),w=new n(l),v=-1,g=-1,y=-1,b=-1,x=-1,_=-1,$=document.createElement("div");$.dir="ltr",i(a,d(s,"sans-serif")),i(m,d(s,"serif")),i(w,d(s,"monospace")),$.appendChild(a.a),$.appendChild(m.a),$.appendChild(w.a),document.body.appendChild($),b=a.a.offsetWidth,x=m.a.offsetWidth,_=w.a.offsetWidth,c(),r(a,function(e){v=e,t()}),i(a,d(s,'"'+s.family+'",sans-serif')),r(m,function(e){g=e,t()}),i(m,d(s,'"'+s.family+'",serif')),r(w,function(e){y=e,t()}),i(w,d(s,'"'+s.family+'",monospace'))})})},"object"==typeof module?module.exports=s:(window.FontFaceObserver=s,window.FontFaceObserver.prototype.load=s.prototype.load)}();var winScrollTop=document.documentElement.scrollTop,minWidth=Number(getComputedStyle(document.body).getPropertyValue("--breakpoint-lg").split("px")[0]),winWidth=window.innerWidth,minHeight=Number(getComputedStyle(document.body).getPropertyValue("--breakpoint-md").split("px")[0]),winHeight=window.innerHeight,cumulativeHeight=winHeight,ticking=!1;["scroll","resize"].forEach(function(e){window.addEventListener(e,monitorWindow)});for(var $_sections=document.querySelectorAll("body > section"),sections=[],i=0;i<$_sections.length;i++){var $_section=$_sections[i],$_fixers=$_section.querySelectorAll(".fixer");console.log($_fixers||[]),sections.push({$_el:$_section,$_fixers:$_fixers||[]})}measureStuff(),updateScroll();var $_header=document.querySelector(".header");document.querySelector(".nav__toggle").addEventListener("click",function(){$_header.classList.toggle("header--open")});var font=new FontFaceObserver("Open Sans");font.load().then(function(){measureStuff()});