function checkVisibility(e,t){t*=winHeight;var i=e.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);i.bottom-t<0?(e.classList.remove("below","active"),e.classList.add("above")):i.top-n+t>=0?(e.classList.remove("above","active"),e.classList.add("below")):(e.classList.remove("above","below"),e.classList.add("active"))}function checkFixation(e){var t=e.getBoundingClientRect();Math.max(document.documentElement.clientHeight,window.innerHeight);t.top<0&&t.bottom>0?e.classList.add("fixed"):e.classList.remove("fixed")}function measureStuff(){winWidth=window.innerWidth,winHeight=window.innerHeight,document.documentElement.style.setProperty("--winHeight",winHeight+"px"),updateScroll()}function updateScroll(){getScrollTop();winScrollTop=getScrollTop(),winScrollTop>0?document.body.classList.add("scrolled"):document.body.classList.remove("scrolled");for(var e=0;e<sections.length;e++){var t=sections[e].$_el;if(checkVisibility(t,1/3),sections[e].$_fixerChildren.length){checkFixation(t);for(var i=0;i<sections[e].$_fixerChildren.length;i++){checkVisibility(sections[e].$_fixerChildren[i],.5)}}}}function monitorWindow(){document.documentElement.style.setProperty("--winHeight",winHeight+"px"),ticking||(window.requestAnimationFrame(function(){winWidth===window.innerWidth&&winHeight===window.innerHeight||measureStuff(),winScrollTop!==getScrollTop()&&updateScroll(),ticking=!1}),ticking=!0)}for(var $_modalLinks=document.querySelectorAll('[data-toggle="simple-modal"]'),i=0;i<$_modalLinks.length;i++)!function(){var e=$_modalLinks[i],t=document.getElementById(e.href.split("#")[1]);e.addEventListener("click",function(e){console.log(t),t.classList.add("open")}),t.addEventListener("click",function(e){"modal"===e.target.getAttribute("data-dismiss")&&t.classList.remove("open")})}();var getScrollTop=function(){return Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)},winScrollTop=getScrollTop(),minWidth=Number(getComputedStyle(document.body).getPropertyValue("--breakpoint-lg").split("px")[0]),winWidth=window.innerWidth,minHeight=Number(getComputedStyle(document.body).getPropertyValue("--breakpoint-md").split("px")[0]),winHeight=window.innerHeight,cumulativeHeight=winHeight,ticking=!1;["scroll","resize"].forEach(function(e){window.addEventListener(e,monitorWindow)});for(var $_sections=document.querySelectorAll("body > section"),sections=[],i=0;i<$_sections.length;i++){var $_section=$_sections[i],$_fixerChildren=$_section.querySelectorAll(".fixer__child");sections.push({$_el:$_section,$_fixerChildren:$_section.querySelectorAll(".fixer__child")})}measureStuff(),updateScroll();var $_header=document.querySelector(".header");document.querySelector(".nav__toggle").addEventListener("click",function(){$_header.classList.toggle("header--open")});var $_formThanks=document.querySelector('form [name="_next"]');if($_formThanks){var thanksUrl=(window.location.href+"/thanks.html").split("//thanks").join("/thanks");$_formThanks.setAttribute("value",thanksUrl)}