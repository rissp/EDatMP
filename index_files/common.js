try{jQuery.cookie=function(e,t,r){if(arguments.length>1&&"[object Object]"!==String(t)){if(r=jQuery.extend({},r),(null===t||void 0===t)&&(r.expires=-1),"number"==typeof r.expires){var n=r.expires,i=r.expires=new Date;i.setDate(i.getDate()+n)}return t=String(t),document.cookie=[encodeURIComponent(e),"=",r.raw?t:encodeURIComponent(t),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}r=t||{};var s,a=r.raw?function(e){return e}:decodeURIComponent;return(s=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?a(s[1]):null},!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function t(t){var r,n,i,s=arguments.length,a=window[t],o=arguments,c=o[1];if(2>s)throw Error("Minimum 2 arguments must be given");if(e.isArray(c)){n={};for(var u in c){r=c[u];try{n[r]=JSON.parse(a.getItem(r))}catch(l){n[r]=a.getItem(r)}}return n}if(2!=s){try{n=JSON.parse(a.getItem(c))}catch(l){throw new ReferenceError(c+" is not defined in this storage")}for(var u=2;s-1>u;u++)if(n=n[o[u]],void 0===n)throw new ReferenceError([].slice.call(o,1,u+1).join(".")+" is not defined in this storage");if(e.isArray(o[u])){i=n,n={};for(var d in o[u])n[o[u][d]]=i[o[u][d]];return n}return n[o[u]]}try{return JSON.parse(a.getItem(c))}catch(l){return a.getItem(c)}}function r(t){var r,n,i=arguments.length,s=window[t],a=arguments,o=a[1],c=a[2],u={};if(2>i||!e.isPlainObject(o)&&3>i)throw Error("Minimum 3 arguments must be given or second parameter must be an object");if(e.isPlainObject(o)){for(var l in o)r=o[l],e.isPlainObject(r)?s.setItem(l,JSON.stringify(r)):s.setItem(l,r);return o}if(3==i)return"object"==typeof c?s.setItem(o,JSON.stringify(c)):s.setItem(o,c),c;try{n=s.getItem(o),null!=n&&(u=JSON.parse(n))}catch(d){}n=u;for(var l=2;i-2>l;l++)r=a[l],n[r]&&e.isPlainObject(n[r])||(n[r]={}),n=n[r];return n[a[l]]=a[l+1],s.setItem(o,JSON.stringify(u)),u}function n(t){var r,n,i=arguments.length,s=window[t],a=arguments,o=a[1];if(2>i)throw Error("Minimum 2 arguments must be given");if(e.isArray(o)){for(var c in o)s.removeItem(o[c]);return!0}if(2==i)return s.removeItem(o),!0;try{r=n=JSON.parse(s.getItem(o))}catch(u){throw new ReferenceError(o+" is not defined in this storage")}for(var c=2;i-1>c;c++)if(n=n[a[c]],void 0===n)throw new ReferenceError([].slice.call(a,1,c).join(".")+" is not defined in this storage");if(e.isArray(a[c]))for(var l in a[c])delete n[a[c][l]];else delete n[a[c]];return s.setItem(o,JSON.stringify(r)),!0}function i(t,r){var i=o(t);for(var s in i)n(t,i[s]);if(r)for(var s in e.namespaceStorages)c(s)}function s(r){var n=arguments.length,i=arguments,a=(window[r],i[1]);if(1==n)return 0==o(r).length;if(e.isArray(a)){for(var c=0;c<a.length;c++)if(!s(r,a[c]))return!1;return!0}try{var u=t.apply(this,arguments);e.isArray(i[n-1])||(u={totest:u});for(var c in u)if(!(e.isPlainObject(u[c])&&e.isEmptyObject(u[c])||e.isArray(u[c])&&!u[c].length)&&u[c])return!1;return!0}catch(l){return!0}}function a(r){var n=arguments.length,i=arguments,s=(window[r],i[1]);if(2>n)throw Error("Minimum 2 arguments must be given");if(e.isArray(s)){for(var o=0;o<s.length;o++)if(!a(r,s[o]))return!1;return!0}try{var c=t.apply(this,arguments);e.isArray(i[n-1])||(c={totest:c});for(var o in c)if(void 0===c[o]||null===c[o])return!1;return!0}catch(u){return!1}}function o(r){var n=arguments.length,i=window[r],s=arguments,a=(s[1],[]),o={};if(o=n>1?t.apply(this,s):i,o._cookie)for(var c in e.cookie())""!=c&&a.push(c.replace(o._prefix,""));else for(var u in o)a.push(u);return a}function c(t){if(!t||"string"!=typeof t)throw Error("First parameter must be a string");f?(window.localStorage.getItem(t)||window.localStorage.setItem(t,"{}"),window.sessionStorage.getItem(t)||window.sessionStorage.setItem(t,"{}")):(window.localCookieStorage.getItem(t)||window.localCookieStorage.setItem(t,"{}"),window.sessionCookieStorage.getItem(t)||window.sessionCookieStorage.setItem(t,"{}"));var r={localStorage:e.extend({},e.localStorage,{_ns:t}),sessionStorage:e.extend({},e.sessionStorage,{_ns:t})};return e.cookie&&(window.cookieStorage.getItem(t)||window.cookieStorage.setItem(t,"{}"),r.cookieStorage=e.extend({},e.cookieStorage,{_ns:t})),e.namespaceStorages[t]=r,r}function u(e){if(!window[e])return!1;var t="jsapi";try{return window[e].setItem(t,t),window[e].removeItem(t),!0}catch(r){return!1}}var l="ls_",d="ss_",f=u("localStorage"),g={_type:"",_ns:"",_callMethod:function(e,t){var r=[this._type],t=Array.prototype.slice.call(t),n=t[0];return this._ns&&r.push(this._ns),"string"==typeof n&&-1!==n.indexOf(".")&&(t.shift(),[].unshift.apply(t,n.split("."))),[].push.apply(r,t),e.apply(this,r)},get:function(){return this._callMethod(t,arguments)},set:function(){var t=arguments.length,n=arguments,i=n[0];if(1>t||!e.isPlainObject(i)&&2>t)throw Error("Minimum 2 arguments must be given or first parameter must be an object");if(e.isPlainObject(i)&&this._ns){for(var s in i)r(this._type,this._ns,s,i[s]);return i}var a=this._callMethod(r,n);return this._ns?a[i.split(".")[0]]:a},remove:function(){if(arguments.length<1)throw Error("Minimum 1 argument must be given");return this._callMethod(n,arguments)},removeAll:function(e){return this._ns?(r(this._type,this._ns,{}),!0):i(this._type,e)},isEmpty:function(){return this._callMethod(s,arguments)},isSet:function(){if(arguments.length<1)throw Error("Minimum 1 argument must be given");return this._callMethod(a,arguments)},keys:function(){return this._callMethod(o,arguments)}};if(e.cookie){window.name||(window.name=Math.floor(1e8*Math.random()));var m={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(t,r){e.cookie(this._prefix+t,r,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(t){return e.cookie(this._prefix+t)},removeItem:function(t){return e.removeCookie(this._prefix+t)},clear:function(){for(var t in e.cookie())""!=t&&(!this._prefix&&-1===t.indexOf(l)&&-1===t.indexOf(d)||this._prefix&&0===t.indexOf(this._prefix))&&e.removeCookie(t)},setExpires:function(e){return this._expires=e,this},setPath:function(e){return this._path=e,this},setDomain:function(e){return this._domain=e,this},setConf:function(e){return e.path&&(this._path=e.path),e.domain&&(this._domain=e.domain),e.expires&&(this._expires=e.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};f||(window.localCookieStorage=e.extend({},m,{_prefix:l,_expires:3650}),window.sessionCookieStorage=e.extend({},m,{_prefix:d+window.name+"_"})),window.cookieStorage=e.extend({},m),e.cookieStorage=e.extend({},g,{_type:"cookieStorage",setExpires:function(e){return window.cookieStorage.setExpires(e),this},setPath:function(e){return window.cookieStorage.setPath(e),this},setDomain:function(e){return window.cookieStorage.setDomain(e),this},setConf:function(e){return window.cookieStorage.setConf(e),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}e.initNamespaceStorage=function(e){return c(e)},f?(e.localStorage=e.extend({},g,{_type:"localStorage"}),e.sessionStorage=e.extend({},g,{_type:"sessionStorage"})):(e.localStorage=e.extend({},g,{_type:"localCookieStorage"}),e.sessionStorage=e.extend({},g,{_type:"sessionCookieStorage"})),e.namespaceStorages={},e.removeAllStorages=function(t){e.localStorage.removeAll(t),e.sessionStorage.removeAll(t),e.cookieStorage&&e.cookieStorage.removeAll(t),t||(e.namespaceStorages={})}})}catch(e){}!function(e,t,r){e.fn.dropdownHover=function(n){var i,s,a,o,n=e.extend({},e.fn.dropdownHover.options,n);return this.each(function(){e(this).parent().addClass(n.hoverClass.replace(".","")).attr("data-intent",e(this).data("hover-delay")).attr("data-delay",e(this).data("delay"))}),e(r).on({mouseenter:function(r){if(o)return i=this,!0;r.stopPropagation(),t.clearTimeout(a);var c=e(this),u=e(this).data("intent");e(c).hasClass("open")||e(c).is(i)||(s=setTimeout(function(){e(i).removeClass("open"),i=c,e(i).addClass("open")},u?u:n.hoverDelay))},mouseleave:function(r){if(o)return e(".dropdown-menu").removeClass("bs-hover-sub-clickable"),!0;if(r.stopPropagation(),t.clearTimeout(s),i){var c=(e(this),e(this).data("delay"));a=setTimeout(function(){e(i).removeClass("open"),e(i).find(".dropdown-toggle").blur(),i=!1},c?c:n.delay)}}},n.hoverClass),e(n.hoverClass).on("click",".dropdown-menu",function(e){e.stopPropagation()}),e(n.hoverClass+" a").on("click",function(r){if(r.preventDefault(),o&&e(this).data("nested")&&!e(this).next(".dropdown-menu").hasClass("bs-hover-sub-clickable"))return e(this).next(".dropdown-menu").addClass("bs-hover-sub-clickable"),!1;if(e(i).hasClass("open")){var n=e(this).attr("href"),s=e(this).attr("target");n&&"_blank"==s?t.open(n,"_blank"):n&&"#"!==n&&(t.location.href=n)}return o?!0:!1}),e(r).one("touchstart",function(){t.clearTimeout(a),t.clearTimeout(s),o=!0}),this},e.fn.dropdownHover.options={hoverClass:".bs-hover-enabled",delay:500,hoverDelay:0},e(r).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window,document);var originalLeave=$.fn.popover.Constructor.prototype.leave;$.fn.popover.Constructor.prototype.leave=function(e){var t,r,n=e instanceof this.constructor?e:$(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);originalLeave.call(this,e),e.currentTarget&&(t=$(e.currentTarget).siblings(".popover"),r=n.timeout,t.one("mouseenter",function(){clearTimeout(r),t.one("mouseleave",function(){$.fn.popover.Constructor.prototype.leave.call(n,n)})}))},function(e){function t(){if(a){var e=[];if(i.querySelectorAll)e=i.querySelectorAll("[data-squery]");else for(var t=i.getElementsByTagName("*"),r=0,n=t.length;n>r;++r)t[r].getAttribute("data-squery")&&e.push(t[r]);for(r=0,n=e.length;n>r;++r){for(var t=e[r],o=[],c=t.getAttribute("data-squery").split(" "),u=0,l=c.length;l>u;++u){var d=/(.*):([0-9]*)(px|em)=(.*)/.exec(c[u]);d&&o.push(d)}t.cq_rules=t.cq_rules||[],t.cq_rules=t.cq_rules.concat(o),s.push(t)}}}function r(){for(var e=0,t=s.length;t>e;++e){el=s[e];for(var r=0,n=el.cq_rules.length;n>r;++r){var i=el.cq_rules[r],a=parseInt(i[2]);"em"===i[3]&&(a=u(parseFloat(i[2]),el));var o=el,l=i[4],d=o.cloneNode(!0);d.className=(" "+d.className+" ").replace(" "+l+" "," "),d.style.height=0,d.style.visibility="hidden",d.style.overflow="hidden",d.style.clear="both",l=o.parentNode,l.insertBefore(d,o),o=d.offsetWidth,l.removeChild(d),c[i[1]](o,a)?0>el.className.indexOf(i[4])&&(el.className+=" "+i[4]):(i=el.className.replace(RegExp("(^| )"+i[4]+"( |$)"),"$1"),i=i.replace(/ $/,""),el.className=i)}}}function n(){if(!o){o=!0,t(),r(),e.addEventListener&&e.addEventListener("resize",r,!1);var n=u(1,i.body);e.setInterval(function(){var e=u(1,i.body);e!==n&&(r(),n=e)},100)}}var i=e.document,s=[],a=!0,o=!1,c={"min-width":function(e,t){return e>t},"max-width":function(e,t){return t>e}},u=function(e){return function(){var t=Array.prototype.slice.call(arguments);return e.memoize=e.memoize||{},t in e.memoize?e.memoize[t]:e.memoize[t]=e.apply(this,t)}}(function(e,t){var r=i.createElement("div");r.style.fontSize="1em",r.style.margin="0",r.style.padding="0",r.style.border="none",r.style.width="1em",t.appendChild(r);var n=r.offsetWidth;return t.removeChild(r),Math.round(n*e)});i.addEventListener?(i.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):i.attachEvent&&(i.attachEvent("onreadystatechange",n),e.attachEvent("onload",n)),e.SelectorQueries={add:function(e,t,n,i){for(var n=/([0-9]*)(px|em)/.exec(n),a=0,c=e.length;c>a;++a){var u=e[a];u.cq_rules=u.cq_rules||[],u.cq_rules.push([null,t,n[1],n[2],i]),s.push(u)}o&&r()},ignoreDataAttributes:function(){a=!1}}}(this),!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,r=document.createElement("source"),n=function(e){var t,n,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=r.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){s(),a&&a.addListener&&a.addListener(s)};return r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),s}())}(window),function(e,t,r){"use strict";function n(e){return" "===e||"	"===e||"\n"===e||"\f"===e||"\r"===e}function i(t,r){var n=new e.Image;return n.onerror=function(){x[t]=!1,te()},n.onload=function(){x[t]=1===n.width,te()},n.src=r,"pending"}function s(){$=!1,F=e.devicePixelRatio,D={},W={},y.DPR=F||1,B.width=Math.max(e.innerWidth||0,E.clientWidth),B.height=Math.max(e.innerHeight||0,E.clientHeight),B.vw=B.width/100,B.vh=B.height/100,v=[B.height,B.width,F].join("-"),B.em=y.getEmValue(),B.rem=B.em}function a(e,t,r,n){var i,s,a,o;return"saveData"===_.algorithm?e>2.7?o=r+1:(s=t-r,i=Math.pow(e-.6,1.5),a=s*i,n&&(a+=.1*i),o=e+a):o=r>1?Math.sqrt(e*t):e,o>r}function o(e){var t,r=y.getSet(e),n=!1;"pending"!==r&&(n=v,r&&(t=y.setRes(r),y.applySetCandidate(t,e))),e[y.ns].evaled=n}function c(e,t){return e.res-t.res}function u(e,t,r){var n;return!r&&t&&(r=e[y.ns].sets,r=r&&r[r.length-1]),n=l(t,r),n&&(t=y.makeUrl(t),e[y.ns].curSrc=t,e[y.ns].curCan=n,n.res||ee(n,n.set.sizes)),n}function l(e,t){var r,n,i;if(e&&t)for(i=y.parseSet(t),e=y.makeUrl(e),r=0;r<i.length;r++)if(e===y.makeUrl(i[r].url)){n=i[r];break}return n}function d(e,t){var r,n,i,s,a=e.getElementsByTagName("source");for(r=0,n=a.length;n>r;r++)i=a[r],i[y.ns]=!0,s=i.getAttribute("srcset"),s&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function f(e,t){function r(t){var r,n=t.exec(e.substring(f));return n?(r=n[0],f+=r.length,r):void 0}function i(){var e,r,n,i,s,c,u,l,d,f=!1,m={};for(i=0;i<o.length;i++)s=o[i],c=s[s.length-1],u=s.substring(0,s.length-1),l=parseInt(u,10),d=parseFloat(u),V.test(u)&&"w"===c?((e||r)&&(f=!0),0===l?f=!0:e=l):K.test(u)&&"x"===c?((e||r||n)&&(f=!0),0>d?f=!0:r=d):V.test(u)&&"h"===c?((n||r)&&(f=!0),0===l?f=!0:n=l):f=!0;f||(m.url=a,e&&(m.w=e),r&&(m.d=r),n&&(m.h=n),n||r||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,g.push(m))}function s(){for(r(U),c="",u="in descriptor";;){if(l=e.charAt(f),"in descriptor"===u)if(n(l))c&&(o.push(c),c="",u="after descriptor");else{if(","===l)return f+=1,c&&o.push(c),void i();if("("===l)c+=l,u="in parens";else{if(""===l)return c&&o.push(c),void i();c+=l}}else if("in parens"===u)if(")"===l)c+=l,u="in descriptor";else{if(""===l)return o.push(c),void i();c+=l}else if("after descriptor"===u)if(n(l));else{if(""===l)return void i();u="in descriptor",f-=1}f+=1}}for(var a,o,c,u,l,d=e.length,f=0,g=[];;){if(r(Q),f>=d)return g;a=r(J),o=[],","===a.slice(-1)?(a=a.replace(G,""),i()):s()}}function g(e){function t(e){function t(){s&&(a.push(s),s="")}function r(){a[0]&&(o.push(a),a=[])}for(var i,s="",a=[],o=[],c=0,u=0,l=!1;;){if(i=e.charAt(u),""===i)return t(),r(),o;if(l){if("*"===i&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(n(i)){if(e.charAt(u-1)&&n(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}i=" "}else if("("===i)c+=1;else if(")"===i)c-=1;else{if(","===i){t(),r(),u+=1;continue}if("/"===i&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=i,u+=1}}}function r(e){return l.test(e)&&parseFloat(e)>=0?!0:d.test(e)?!0:"0"===e||"-0"===e||"+0"===e?!0:!1}var i,s,a,o,c,u,l=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,d=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=t(e),a=s.length,i=0;a>i;i++)if(o=s[i],c=o[o.length-1],r(c)){if(u=c,o.pop(),0===o.length)return u;if(o=o.join(" "),y.matchesMedia(o))return u}return"100vw"}t.createElement("picture");var m,p,h,v,y={},A=!1,w=function(){},b=t.createElement("img"),z=b.getAttribute,S=b.setAttribute,C=b.removeAttribute,E=t.documentElement,x={},_={algorithm:""},k="data-pfsrc",I=k+"set",M=navigator.userAgent,T=/rident/.test(M)||/ecko/.test(M)&&M.match(/rv\:(\d+)/)&&RegExp.$1>35,L="currentSrc",P=/\s+\+?\d+(e\d+)?w/,j=/(\([^)]+\))?\s*(.+)/,N=e.picturefillCFG,R="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",O="font-size:100%!important;",$=!0,D={},W={},F=e.devicePixelRatio,B={px:1,"in":96},q=t.createElement("a"),H=!1,U=/^[ \t\n\r\u000c]+/,Q=/^[, \t\n\r\u000c]+/,J=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,V=/^\d+$/,K=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,X=function(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n||!1):e.attachEvent&&e.attachEvent("on"+t,r)},Y=function(e){var t={};return function(r){return r in t||(t[r]=e(r)),t[r]}},Z=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,r=e[0];++t in e;)r=r.replace(e[t],e[++t]);return r},r=Y(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,n){var i;if(!(t in D))if(D[t]=!1,n&&(i=t.match(e)))D[t]=i[1]*B[i[2]];else try{D[t]=new Function("e",r(t))(B)}catch(s){}return D[t]}}(),ee=function(e,t){return e.w?(e.cWidth=y.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},te=function(e){if(A){var r,n,i,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=s.elements||y.qsa(s.context||t,s.reevaluate||s.reselect?y.sel:y.selShort),i=r.length){for(y.setupRun(s),H=!0,n=0;i>n;n++)y.fillImg(r[n],s);y.teardownRun(s)}}};m=e.console&&console.warn?function(e){console.warn(e)}:w,L in b||(L="src"),x["image/jpeg"]=!0,x["image/gif"]=!0,x["image/png"]=!0,x["image/svg+xml"]=t.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#Image","1.1"),y.ns=("pf"+(new Date).getTime()).substr(0,9),y.supSrcset="srcset"in b,y.supSizes="sizes"in b,y.supPicture=!!e.HTMLPictureElement,y.supSrcset&&y.supPicture&&!y.supSizes&&!function(e){b.srcset="data:,a",e.src="data:,a",y.supSrcset=b.complete===e.complete,y.supPicture=y.supSrcset&&y.supPicture}(t.createElement("img")),y.supSrcset&&!y.supSizes?!function(){var e="data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",r="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n=t.createElement("img"),i=function(){var e=n.width;2===e&&(y.supSizes=!0),h=y.supSrcset&&!y.supSizes,A=!0,setTimeout(te)};n.onload=i,n.onerror=i,n.setAttribute("sizes","9px"),n.srcset=r+" 1w,"+e+" 9w",n.src=r}():A=!0,y.selShort="picture>img,img[srcset]",y.sel=y.selShort,y.cfg=_,y.DPR=F||1,y.u=B,y.types=x,y.setSize=w,y.makeUrl=Y(function(e){return q.href=e,q.href}),y.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},y.matchesMedia=function(){return y.matchesMedia=e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(e){return!e||matchMedia(e).matches}:y.mMQ,y.matchesMedia.apply(this,arguments)},y.mMQ=function(e){return e?Z(e):!0},y.calcLength=function(e){var t=Z(e,!0)||!1;return 0>t&&(t=!1),t},y.supportsType=function(e){return e?x[e]:!0},y.parseSize=Y(function(e){var t=(e||"").match(j);return{media:t&&t[1],length:t&&t[2]}}),y.parseSet=function(e){return e.cands||(e.cands=f(e.srcset,e)),e.cands},y.getEmValue=function(){var e;if(!p&&(e=t.body)){var r=t.createElement("div"),n=E.style.cssText,i=e.style.cssText;r.style.cssText=R,E.style.cssText=O,e.style.cssText=O,e.appendChild(r),p=r.offsetWidth,e.removeChild(r),p=parseFloat(p,10),E.style.cssText=n,e.style.cssText=i}return p||16},y.calcListLength=function(e){if(!(e in W)||_.uT){var t=y.calcLength(g(e));W[e]=t?t:B.width}return W[e]},y.setRes=function(e){var t;if(e){t=y.parseSet(e);for(var r=0,n=t.length;n>r;r++)ee(t[r],e.sizes)}return t},y.setRes.res=ee,y.applySetCandidate=function(e,t){if(e.length){var r,n,i,s,o,l,d,f,g,m=t[y.ns],p=y.DPR;if(l=m.curSrc||t[L],d=m.curCan||u(t,l,e[0].set),d&&d.set===e[0].set&&(g=T&&!t.complete&&d.res-.1>p,g||(d.cached=!0,d.res>=p&&(o=d))),!o)for(e.sort(c),s=e.length,o=e[s-1],n=0;s>n;n++)if(r=e[n],r.res>=p){i=n-1,o=e[i]&&(g||l!==y.makeUrl(r.url))&&a(e[i].res,r.res,p,e[i].cached)?e[i]:r;break}o&&(f=y.makeUrl(o.url),m.curSrc=f,m.curCan=o,f!==l&&y.setSrc(t,o),y.setSize(t))}},y.setSrc=function(e,t){var r;e.src=t.url,"image/svg+xml"===t.set.type&&(r=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=r))},y.getSet=function(e){var t,r,n,i=!1,s=e[y.ns].sets;for(t=0;t<s.length&&!i;t++)if(r=s[t],r.srcset&&y.matchesMedia(r.media)&&(n=y.supportsType(r.type))){"pending"===n&&(r=n),i=r;break}return i},y.parseSets=function(e,t,n){var i,s,a,o,c=t&&"PICTURE"===t.nodeName.toUpperCase(),u=e[y.ns];(u.src===r||n.src)&&(u.src=z.call(e,"src"),u.src?S.call(e,k,u.src):C.call(e,k)),(u.srcset===r||n.srcset||!y.supSrcset||e.srcset)&&(i=z.call(e,"srcset"),u.srcset=i,o=!0),u.sets=[],c&&(u.pic=!0,d(t,u.sets)),u.srcset?(s={srcset:u.srcset,sizes:z.call(e,"sizes")},u.sets.push(s),a=(h||u.src)&&P.test(u.srcset||""),a||!u.src||l(u.src,s)||s.has1x||(s.srcset+=", "+u.src,s.cands.push({url:u.src,d:1,set:s}))):u.src&&u.sets.push({srcset:u.src,sizes:null}),u.curCan=null,u.curSrc=r,u.supported=!(c||s&&!y.supSrcset||a&&!y.supSizes),o&&y.supSrcset&&!u.supported&&(i?(S.call(e,I,i),e.srcset=""):C.call(e,I)),u.supported&&!u.srcset&&(!u.src&&e.src||e.src!==y.makeUrl(u.src))&&(null===u.src?e.removeAttribute("src"):e.src=u.src),u.parsed=!0},y.fillImg=function(e,t){var r,n=t.reselect||t.reevaluate;e[y.ns]||(e[y.ns]={}),r=e[y.ns],(n||r.evaled!==v)&&((!r.parsed||t.reevaluate)&&y.parseSets(e,e.parentNode,t),r.supported?r.evaled=v:o(e))},y.setupRun=function(){(!H||$||F!==e.devicePixelRatio)&&s()},y.supPicture?(te=w,y.fillImg=w):!function(){var r,n=e.attachEvent?/d$|^c/:/d$|^c|^i/,i=function(){var e=t.readyState||"";s=setTimeout(i,"loading"===e?200:999),t.body&&(y.fillImgs(),r=r||n.test(e),r&&clearTimeout(s))},s=setTimeout(i,t.body?9:99),a=function(e,t){var r,n,i=function(){var s=new Date-n;t>s?r=setTimeout(i,t-s):(r=null,e())};return function(){n=new Date,r||(r=setTimeout(i,t))}},o=E.clientHeight,c=function(){$=Math.max(e.innerWidth||0,E.clientWidth)!==B.width||E.clientHeight!==o,o=E.clientHeight,$&&y.fillImgs()};X(e,"resize",a(c,99)),X(t,"readystatechange",i)}(),y.picturefill=te,y.fillImgs=te,y.teardownRun=w,te._=y,e.picturefillCFG={pf:y,push:function(e){var t=e.shift();"function"==typeof y[t]?y[t].apply(y,e):(_[t]=e[0],H&&y.fillImgs({reselect:!0}))}};for(;N&&N.length;)e.picturefillCFG.push(N.shift());e.picturefill=te,"object"==typeof module&&"object"==typeof module.exports?module.exports=te:"function"==typeof define&&define.amd&&define("picturefill",function(){return te}),y.supPicture||(x["image/webp"]=i("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document),!function(e,t){"use strict";if(e.addEventListener){var r=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,n=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,i=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,s=/^picture$/i,a=function(e){return getComputedStyle(e,null)||{}},o={getParent:function(t,r){var n=t,i=t.parentNode;return r&&"prev"!=r||!i||!s.test(i.nodeName||"")||(i=i.parentNode),"self"!=r&&(n="prev"==r?t.previousElementSibling:r&&(i.closest||e.jQuery)?(i.closest?i.closest(r):jQuery(i).closest(r)[0])||i:i),n},getFit:function(e){var t,r,s=a(e),c=s.content||s.fontFamily,u={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!u.fit&&c&&(t=c.match(n))&&(u.fit=t[1]),u.fit?(r=e._lazysizesParentContainer||e.getAttribute("data-parent-container"),!r&&c&&(t=c.match(i))&&(r=t[1]),u.parent=o.getParent(e,r)):u.fit=s.objectFit,u},getImageRatio:function(t){var n,i,a,o,c=t.parentNode,u=c&&s.test(c.nodeName||"")?c.querySelectorAll("source, img"):[t];for(n=0;n<u.length;n++)if(t=u[n],i=t.getAttribute(lazySizesConfig.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",a=t.getAttribute("media"),a=lazySizesConfig.customMedia[t.getAttribute("data-media")||a]||a,i&&(!a||(e.matchMedia&&matchMedia(a)||{}).matches)){o=parseFloat(t.getAttribute("data-aspectratio")),!o&&i.match(r)&&(o="w"==RegExp.$2?RegExp.$1/RegExp.$3:RegExp.$3/RegExp.$1);break}return o},calculateSize:function(e,t){var r,n,i,s,a=this.getFit(e),o=a.fit,c=a.parent;return"width"==o||("contain"==o||"cover"==o)&&(i=this.getImageRatio(e))?(c?t=c.clientWidth:c=e,s=t,"width"==o?s=t:(n=c.clientHeight,n>40&&(r=t/n)&&("cover"==o&&i>r||"contain"==o&&r>i)&&(s=t*(i/r))),s):t}},c=function(){e.lazySizes&&(lazySizes.parentFit||(lazySizes.parentFit=o),e.removeEventListener("lazyunveilread",c,!0))};e.addEventListener("lazyunveilread",c,!0),t.addEventListener("lazybeforesizes",function(e){if(!e.defaultPrevented){var t=e.target;e.detail.width=o.calculateSize(t,e.detail.width)}}),setTimeout(c)}}(window,document),!function(){"use strict";if(window.addEventListener){var e=/\s+/g,t=/\s*\|\s+|\s+\|\s*/g,r=/^(.+?)(?:\s+\[\s*(.+?)\s*\])?$/,n=/\(|\)|'/,i={contain:1,cover:1},s=function(e){var t=lazySizes.gW(e,e.parentNode);return(!e._lazysizesWidth||t>e._lazysizesWidth)&&(e._lazysizesWidth=t),e._lazysizesWidth},a=function(e){var t;return t=(getComputedStyle(e)||{getPropertyValue:function(){}}).getPropertyValue("background-size"),!i[t]&&i[e.style.backgroundSize]&&(t=e.style.backgroundSize),t},o=function(n,i,s){var a=document.createElement("picture"),o=i.getAttribute(lazySizesConfig.sizesAttr),c=i.getAttribute("data-ratio"),u=i.getAttribute("data-optimumx");i._lazybgset&&i._lazybgset.parentNode==i&&i.removeChild(i._lazybgset),Object.defineProperty(s,"_lazybgset",{value:i,writable:!0}),Object.defineProperty(i,"_lazybgset",{value:a,writable:!0}),n=n.replace(e," ").split(t),a.style.display="none",s.className=lazySizesConfig.lazyClass,1!=n.length||o||(o="auto"),n.forEach(function(e){var t=document.createElement("source");o&&"auto"!=o&&t.setAttribute("sizes",o),e.match(r)&&(t.setAttribute(lazySizesConfig.srcsetAttr,RegExp.$1),RegExp.$2&&t.setAttribute("media",lazySizesConfig.customMedia[RegExp.$2]||RegExp.$2)),a.appendChild(t)}),o&&(s.setAttribute(lazySizesConfig.sizesAttr,o),i.removeAttribute(lazySizesConfig.sizesAttr),i.removeAttribute("sizes")),u&&s.setAttribute("data-optimumx",u),c&&s.setAttribute("data-ratio",c),a.appendChild(s),i.appendChild(a)},c=function(e){if(e.target._lazybgset){var t=e.target,r=t._lazybgset,i=t.currentSrc||t.src;i&&(r.style.backgroundImage="url("+(n.test(i)?JSON.stringify(i):i)+")"),t._lazybgsetLoading&&(lazySizes.fire(r,"_lazyloaded",{},!1,!0),delete t._lazybgsetLoading)}};addEventListener("lazybeforeunveil",function(e){var t,r,n;!e.defaultPrevented&&(t=e.target.getAttribute("data-bgset"))&&(n=e.target,r=document.createElement("img"),r.alt="",r._lazybgsetLoading=!0,e.detail.firesLoad=!0,o(t,n,r),setTimeout(function(){lazySizes.loader.unveil(r),lazySizes.rAF(function(){lazySizes.fire(r,"_lazyloaded",{},!0,!0),r.complete&&c({target:r})})}))}),document.addEventListener("load",c,!0),window.addEventListener("lazybeforesizes",function(e){if(e.target._lazybgset&&e.detail.dataAttr){var t=e.target._lazybgset,r=a(t);i[r]&&(e.target._lazysizesParentFit=r,lazySizes.rAF(function(){e.target.setAttribute("data-parent-fit",r),e.target._lazysizesParentFit&&delete e.target._lazysizesParentFit}))}},!0),document.documentElement.addEventListener("lazybeforesizes",function(e){!e.defaultPrevented&&e.target._lazybgset&&(e.detail.width=s(e.target._lazybgset))})}}(),!function(e){"use strict";var t,r,n,i;e.addEventListener&&(t=e.lazySizes&&lazySizes.cfg||e.lazySizesConfig||{},r=t.lazyClass||"lazyload",n=function(){var t,n;if("string"==typeof r&&(r=document.getElementsByClassName(r)),e.lazySizes)for(t=0,n=r.length;n>t;t++)lazySizes.loader.unveil(r[t])},addEventListener("beforeprint",n,!1),!("onbeforeprint"in e)&&e.matchMedia&&(i=matchMedia("print"))&&i.addListener&&i.addListener(function(){i.matches&&n()}))}(window),!function(e,t){var r=t(e,e.document);e.lazySizes=r,"object"==typeof module&&module.exports&&(module.exports=r)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var r,n=t.documentElement,i=e.Date,s=e.HTMLPictureElement,a="addEventListener",o="getAttribute",c=e[a],u=e.setTimeout,l=e.requestAnimationFrame||u,d=e.requestIdleCallback,f=/^picture$/i,g=["load","error","lazyincluded","_lazyloaded"],m={},p=Array.prototype.forEach,h=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e[o]("class")||"")&&m[t]},v=function(e,t){h(e,t)||e.setAttribute("class",(e[o]("class")||"").trim()+" "+t)},y=function(e,t){var r;(r=h(e,t))&&e.setAttribute("class",(e[o]("class")||"").replace(r," "))},A=function(e,t,r){var n=r?a:"removeEventListener";r&&A(e,t),g.forEach(function(r){e[n](r,t)})},w=function(e,r,n,i,s){var a=t.createEvent("CustomEvent");return a.initCustomEvent(r,!i,!s,n||{}),e.dispatchEvent(a),a},b=function(t,n){var i;!s&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},C=function(){var e,r,n=[],i=[],s=n,a=function(){var t=s;for(s=n.length?i:n,e=!0,r=!1;t.length;)t.shift()();e=!1},o=function(n,i){e&&!i?n.apply(this,arguments):(s.push(n),r||(r=!0,(t.hidden?u:l)(a)))};return o._lsFlush=a,o}(),E=function(e,t){return t?function(){C(e)}:function(){var t=this,r=arguments;C(function(){e.apply(t,r)})}},x=function(e){var t,r=0,n=125,s=666,a=s,o=function(){t=!1,r=i.now(),e()},c=d?function(){d(o,{timeout:a}),a!==s&&(a=s)}:E(function(){u(o)},!0);return function(e){var s;(e=e===!0)&&(a=44),t||(t=!0,s=n-(i.now()-r),0>s&&(s=0),e||9>s&&d?c():u(c,s))}},_=function(e){var t,r,n=99,s=function(){t=null,e()},a=function(){var e=i.now()-r;n>e?u(a,n-e):(d||s)(s)};return function(){r=i.now(),t||(t=u(a,n))}},k=function(){var s,l,d,g,m,S,k,M,T,L,P,j,N,R,O,$=/^img$/i,D=/^iframe$/i,W="onscroll"in e&&!/glebot/.test(navigator.userAgent),F=0,B=0,q=0,H=-1,U=function(e){q--,e&&e.target&&A(e.target,U),(!e||0>q||!e.target)&&(q=0)},Q=function(e,r){var i,s=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(T-=r,j+=r,L-=r,P+=r;a&&(s=s.offsetParent)&&s!=t.body&&s!=n;)a=(z(s,"opacity")||1)>0,a&&"visible"!=z(s,"overflow")&&(i=s.getBoundingClientRect(),a=P>i.left&&L<i.right&&j>i.top-1&&T<i.bottom+1);return a},J=function(){var e,i,a,c,u,f,g,p,h;if((m=r.loadMode)&&8>q&&(e=s.length)){i=0,H++,null==R&&("expand"in r||(r.expand=n.clientHeight>500&&n.clientWidth>500?500:370),N=r.expand,R=N*r.expFactor),R>B&&1>q&&H>2&&m>2&&!t.hidden?(B=R,H=0):B=m>1&&H>1&&6>q?N:F;for(;e>i;i++)if(s[i]&&!s[i]._lazyRace)if(W)if((p=s[i][o]("data-expand"))&&(f=1*p)||(f=B),h!==f&&(k=innerWidth+f*O,M=innerHeight+f,g=-1*f,h=f),a=s[i].getBoundingClientRect(),(j=a.bottom)>=g&&(T=a.top)<=M&&(P=a.right)>=g*O&&(L=a.left)<=k&&(j||P||L||T)&&(d&&3>q&&!p&&(3>m||4>H)||Q(s[i],f))){if(te(s[i]),u=!0,q>9)break}else!u&&d&&!c&&4>q&&4>H&&m>2&&(l[0]||r.preloadAfterLoad)&&(l[0]||!p&&(j||P||L||T||"auto"!=s[i][o](r.sizesAttr)))&&(c=l[0]||s[i]);else te(s[i]);c&&!u&&te(c)}},G=x(J),V=function(e){v(e.target,r.loadedClass),y(e.target,r.loadingClass),A(e.target,X)},K=E(V),X=function(e){K({target:e.target})},Y=function(e,t){try{e.contentWindow.location.replace(t)}catch(r){e.src=t}},Z=function(e){var t,n,i=e[o](r.srcsetAttr);(t=r.customMedia[e[o]("data-media")||e[o]("media")])&&e.setAttribute("media",t),i&&e.setAttribute("srcset",i),t&&(n=e.parentNode,n.insertBefore(e.cloneNode(),e),n.removeChild(e));

},ee=E(function(e,t,n,i,s){var a,c,l,d,m,h;(m=w(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?v(e,r.autosizesClass):e.setAttribute("sizes",i)),c=e[o](r.srcsetAttr),a=e[o](r.srcAttr),s&&(l=e.parentNode,d=l&&f.test(l.nodeName||"")),h=t.firesLoad||"src"in e&&(c||a||d),m={target:e},h&&(A(e,U,!0),clearTimeout(g),g=u(U,2500),v(e,r.loadingClass),A(e,X,!0)),d&&p.call(l.getElementsByTagName("source"),Z),c?e.setAttribute("srcset",c):a&&!d&&(D.test(e.nodeName)?Y(e,a):e.src=a),(c||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,y(e,r.lazyClass),C(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?U(m):q--,V(m))},!0)}),te=function(e){var t,n=$.test(e.nodeName),i=n&&(e[o](r.sizesAttr)||e[o]("sizes")),s="auto"==i;(!s&&d||!n||!e.src&&!e.srcset||e.complete||h(e,r.errorClass))&&(t=w(e,"lazyunveilread").detail,s&&I.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,q++,ee(e,t,s,i,n))},re=function(){if(!d){if(i.now()-S<999)return void u(re,999);var e=_(function(){r.loadMode=3,G()});d=!0,r.loadMode=3,G(),c("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){S=i.now(),s=t.getElementsByClassName(r.lazyClass),l=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),O=r.hFac,c("scroll",G,!0),c("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n[a]("DOMNodeInserted",G,!0),n[a]("DOMAttrModified",G,!0),setInterval(G,999)),c("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[a](e,G,!0)}),/d$|^c/.test(t.readyState)?re():(c("load",re),t[a]("DOMContentLoaded",G),u(re,2e4)),s.length?(J(),C._lsFlush()):G()},checkElems:G,unveil:te}}(),I=function(){var e,n=E(function(e,t,r,n){var i,s,a;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),s=0,a=i.length;a>s;s++)i[s].setAttribute("sizes",n);r.detail.dataAttr||b(e,r.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=S(e,s,r),i=w(e,"lazybeforesizes",{width:r,dataAttr:!!t}),i.defaultPrevented||(r=i.detail.width,r&&r!==e._lazysizesWidth&&n(e,s,i,r)))},s=function(){var t,r=e.length;if(r)for(t=0;r>t;t++)i(e[t])},a=_(s);return{_:function(){e=t.getElementsByClassName(r.autosizesClass),c("resize",a)},checkElems:a,updateElem:i}}(),M=function(){M.i||(M.i=!0,I._(),k._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,u(function(){r.init&&M()})}(),{cfg:r,autoSizer:I,loader:k,init:M,uP:b,aC:v,rC:y,hC:h,fire:w,gW:S,rAF:C}}});var objectFitImages=function(){"use strict";function e(e,t){return"data:image/svg+xml,%3Csvg xmlns='https://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}function t(e){if(e.srcset&&!m&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}function r(e){for(var t,r=getComputedStyle(e).fontFamily,n={};null!==(t=u.exec(r));)n[t[1]]=t[2];return n}function n(t,r,n){var i=e(r||1,n||0);p.call(t,"src")!==i&&h.call(t,"src",i)}function i(e,t){e.naturalWidth?t(e):setTimeout(i,100,e,t)}function s(e){var s=r(e),o=e[c];if(s["object-fit"]=s["object-fit"]||"fill",!o.img){if("fill"===s["object-fit"])return;if(!o.skipTest&&d&&!s["object-position"])return}if(!o.img){o.img=new Image(e.width,e.height),o.img.srcset=p.call(e,"data-ofi-srcset")||e.srcset,o.img.src=p.call(e,"data-ofi-src")||e.src,h.call(e,"data-ofi-src",e.src),e.srcset&&h.call(e,"data-ofi-srcset",e.srcset),n(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{a(e)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}t(o.img),e.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=s["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(s["object-fit"])?i(o.img,function(){e.style.backgroundSize=o.img.naturalWidth>e.width||o.img.naturalHeight>e.height?"contain":"auto"}):e.style.backgroundSize=s["object-fit"].replace("none","auto").replace("fill","100% 100%"),i(o.img,function(t){n(e,t.naturalWidth,t.naturalHeight)})}function a(e){var t={get:function(t){return e[c].img[t||"src"]},set:function(t,r){return e[c].img[r||"src"]=t,h.call(e,"data-ofi-"+r,t),s(e),t}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(e){return t.set(e,"srcset")}})}function o(e,t){var r=!v&&!e;if(t=t||{},e=e||"img",f&&!t.skipTest||!g)return!1;"img"===e?e=document.getElementsByTagName("img"):"string"==typeof e?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var n=0;n<e.length;n++)e[n][c]=e[n][c]||{skipTest:t.skipTest},s(e[n]);r&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&o(e.target,{skipTest:t.skipTest})},!0),v=!0,e="img"),t.watchMQ&&window.addEventListener("resize",o.bind(null,e,{skipTest:t.skipTest}))}var c="bfred-it:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,l="undefined"==typeof Image?{style:{"object-position":1}}:new Image,d="object-fit"in l.style,f="object-position"in l.style,g="background-size"in l.style,m="string"==typeof l.currentSrc,p=l.getAttribute,h=l.setAttribute,v=!1;return o.supportsObjectFit=d,o.supportsObjectPosition=f,function(){function e(e,t){return e[c]&&e[c].img&&("src"===t||"srcset"===t)?e[c].img:e}f||(HTMLImageElement.prototype.getAttribute=function(t){return p.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,r){return h.call(e(this,t),t,String(r))})}(),o}();
//# sourceMappingURL=common.9a89084e6f8f168a84035d2c19f5b22a.js.map