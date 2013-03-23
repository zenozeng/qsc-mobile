if(!window.jq||typeof jq!=="function"){var jq=function(k){function D(a,c,d){var e=n.createDocumentFragment();if(d){for(d=a.length-1;d>=0;d--)e.insertBefore(a[d],e.firstChild);c.insertBefore(e,c.firstChild)}else{for(d=0;d<a.length;d++)e.appendChild(a[d]);c.appendChild(e)}}function y(a){return a in I?I[a]:I[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function s(a){for(var c=0;c<a.length;c++)a.indexOf(a[c])!=c&&(a.splice(c,1),c--);return a}function z(a,c){var d=[];if(a==l)return d;for(;a;a=a.nextSibling)a.nodeType==1&&a!==c&&d.push(a);return d}function L(a,c){try{return c.querySelectorAll(a)}catch(b){return[]}}function E(a,c){if(a){if(a.nodeType)return c[c.length++]=a;for(var d=0,e=a.length;d<e;d++)c[c.length++]=a[d]}}function A(){}function M(a,c){a.os={};a.os.webkit=c.match(/WebKit\/([\d.]+)/)?!0:!1;a.os.android=c.match(/(Android)\s+([\d.]+)/)||c.match(/Silk-Accelerated/)?!0:!1;a.os.androidICS=a.os.android&&c.match(/(Android)\s4/)?!0:!1;a.os.ipad=c.match(/(iPad).*OS\s([\d_]+)/)?!0:!1;a.os.iphone=!a.os.ipad&&c.match(/(iPhone\sOS)\s([\d_]+)/)?!0:!1;a.os.webos=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)?!0:!1;a.os.touchpad=a.os.webos&&c.match(/TouchPad/)?!0:!1;a.os.ios=a.os.ipad||a.os.iphone;a.os.playbook=c.match(/PlayBook/)?!0:!1;a.os.blackberry=a.os.playbook||c.match(/BlackBerry/)?!0:!1;a.os.blackberry10=a.os.blackberry&&c.match(/Safari\/536/)?!0:!1;a.os.chrome=c.match(/Chrome/)?!0:!1;a.os.opera=c.match(/Opera/)?!0:!1;a.os.fennec=c.match(/fennec/i)?!0:c.match(/Firefox/)?!0:!1;a.os.ie=c.match(/MSIE 10.0/i)?!0:!1;a.os.ieTouch=a.os.ie&&c.toLowerCase().match(/touch/i)?!0:!1;a.os.supportsTouch=k.DocumentTouch&&n instanceof k.DocumentTouch||"ontouchstart"in k;a.feat={};var d=n.documentElement.getElementsByTagName("head")[0];a.feat.nativeTouchScroll=typeof d.style["-webkit-overflow-scrolling"]!=="undefined"&&a.os.ios;a.feat.cssPrefix=a.os.webkit?"Webkit":a.os.fennec?"Moz":a.os.ie?"ms":a.os.opera?"O":"";a.feat.cssTransformStart=!a.os.opera?"3d(":"(";a.feat.cssTransformEnd=!a.os.opera?",0)":")";if(a.os.android&&!a.os.webkit)a.os.android=!1}function F(a){return a._0||(a._0=W++)}function X(c,d,e,h){d=N(d);if(d.ns)var j=RegExp("(?:^| )"+d.ns.replace(" "," .* ?")+"(?: |$)");return(u[F(c)]||[]).filter(function(a){return a&&(!d.e||a.e==d.e)&&(!d.ns||j.test(a.ns))&&(!e||a.fn==e||typeof a.fn==="function"&&typeof e==="function"&&""+a.fn===""+e)&&(!h||a.sel==h)})}function N(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function O(c,d,e){f.isObject(c)?f.each(c,e):c.split(/\s/).forEach(function(a){e(a,d)})}function G(p,o,B,t,J){var C=F(p),q=u[C]||(u[C]=[]);O(o,B,function(d,e){var h=J&&J(e,d),j=h||e,m=function(a){var c=j.apply(p,[a].concat(a.data));c===!1&&a.preventDefault();return c},h=f.extend(N(d),{fn:e,proxy:m,sel:t,del:h,i:q.length});q.push(h);p.addEventListener(h.e,m,!1)})}function H(e,h,j,m){var p=F(e);O(h||"",j,function(c,d){X(e,c,d,m).forEach(function(a){delete u[p][a.i];e.removeEventListener(a.e,a.proxy,!1)})})}function Y(d){var e=f.extend({originalEvent:d},d);f.each(Z,function(a,c){e[a]=function(){this[c]=ba;return d[a].apply(d,arguments)};e[c]=bb});return e}function P(a,c){if(c&&a.dispatchEvent){var d=f.Event("destroy",{bubbles:!1});a.dispatchEvent(d)}if((d=F(a))&&u[d]){for(var e in u[d])a.removeEventListener(u[d][e].e,u[d][e].proxy,!1);delete u[d]}}function Q(a,c){if(a){var d=a.childNodes;if(d&&d.length>0)for(var e in d)Q(d[e],c);P(a,c)}}var l,n=k.document,w=[],R=w.slice,I=[],bc=1,bd=/^\s*<(\w+)[^>]*>/,r={},x={},v=function(a,c){this.length=0;if(a)if(a instanceof v&&c==l)return a;else if(f.isFunction(a))return f(n).ready(a);else if(f.isArray(a)&&a.length!=l){for(var d=0;d<a.length;d++)this[this.length++]=a[d];return this}else if(f.isObject(a)&&f.isObject(c)){if(a.length==l)a.parentNode==c&&(this[this.length++]=a);else for(d=0;d<a.length;d++)a[d].parentNode==c&&(this[this.length++]=a[d]);return this}else if(f.isObject(a)&&c==l)return this[this.length++]=a,this;else if(c!==l){if(c instanceof v)return c.find(a)}else c=n;else return this;return this.selector(a,c)},f=function(a,c){return new v(a,c)};f.is$=function(a){return a instanceof v};f.map=function(a,c){var d,e=[],h;if(f.isArray(a))for(h=0;h<a.length;h++)d=c(a[h],h),d!==l&&e.push(d);else if(f.isObject(a))for(h in a)a.hasOwnProperty(h)&&(d=c(a[h],h),d!==l&&e.push(d));return f([e])};f.each=function(a,c){var d;if(f.isArray(a))for(d=0;d<a.length;d++){if(c(d,a[d])===!1)break}else if(f.isObject(a))for(d in a)if(a.hasOwnProperty(d)&&c(d,a[d])===!1)break;return a};f.extend=function(d){d==l&&(d=this);if(arguments.length===1){for(var e in d)this[e]=d[e];return this}else R.call(arguments,1).forEach(function(a){for(var c in a)d[c]=a[c]});return d};f.isArray=function(a){return a instanceof Array&&a.push!=l};f.isFunction=function(a){return typeof a==="function"};f.isObject=function(a){return typeof a==="object"};f.fn=v.prototype={constructor:v,forEach:w.forEach,reduce:w.reduce,push:w.push,indexOf:w.indexOf,concat:w.concat,selector:function(a,c){a=a.trim();if(a[0]==="#"&&a.indexOf(".")==-1&&a.indexOf(" ")===-1&&a.indexOf(">")===-1)c==n?E(c.getElementById(a.replace("#","")),this):E(L(a,c),this);else if(a[0]==="<"&&a[a.length-1]===">"){var d=n.createElement("div");d.innerHTML=a.trim();E(d.childNodes,this)}else E(L(a,c),this);return this},oldElement:l,slice:w.slice,setupOld:function(a){if(a==l)return f();a.oldElement=this;return a},map:function(a){var c,d=[],e;for(e=0;e<this.length;e++)c=a(e,this[e]),c!==l&&d.push(c);return f([d])},each:function(d){this.forEach(function(a,c){d.call(a,c,a)});return this},ready:function(a){n.readyState==="complete"||n.readyState==="loaded"||!f.os.ie&&n.readyState==="interactive"?a():n.addEventListener("DOMContentLoaded",a,!1);return this},find:function(a){if(this.length===0)return this;for(var c=[],d,e=0;e<this.length;e++){d=f(a,this[e]);for(var h=0;h<d.length;h++)c.push(d[h])}return f(s(c))},html:function(a,c){if(this.length===0)return this;if(a===l)return this[0].innerHTML;for(var d=0;d<this.length;d++)c!==!1&&f.cleanUpContent(this[d],!1,!0),this[d].innerHTML=a;return this},text:function(a){if(this.length===0)return this;if(a===l)return this[0].textContent;for(var c=0;c<this.length;c++)this[c].textContent=a;return this},css:function(a,c,d){d=d!=l?d:this[0];if(this.length===0)return this;if(c==l&&typeof a==="string")return k.getComputedStyle(d),d.style[a]?d.style[a]:k.getComputedStyle(d)[a];for(d=0;d<this.length;d++)if(f.isObject(a))for(var e in a)this[d].style[e]=a[e];else this[d].style[a]=c;return this},vendorCss:function(a,c,d){return this.css(f.feat.cssPrefix+a,c,d)},empty:function(){for(var a=0;a<this.length;a++)f.cleanUpContent(this[a],!1,!0),this[a].innerHTML="";return this},hide:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])!="none")this[a].setAttribute("jqmOldStyle",this.css("display",null,this[a])),this[a].style.display="none";return this},show:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])=="none")this[a].style.display=this[a].getAttribute("jqmOldStyle")?this[a].getAttribute("jqmOldStyle"):"block",this[a].removeAttribute("jqmOldStyle");return this},toggle:function(a){for(var c=a===!0?!0:!1,d=0;d<this.length;d++)k.getComputedStyle(this[d]).display!=="none"||a!==l&&c===!1?(this[d].setAttribute("jqmOldStyle",this[d].style.display),this[d].style.display="none"):(this[d].style.display=this[d].getAttribute("jqmOldStyle")!=l?this[d].getAttribute("jqmOldStyle"):"block",this[d].removeAttribute("jqmOldStyle"));return this},val:function(a){if(this.length===0)return a===l?l:this;if(a==l)return this[0].value;for(var c=0;c<this.length;c++)this[c].value=a;return this},attr:function(a,c){if(this.length===0)return c===l?l:this;if(c===l&&!f.isObject(a))return this[0].jqmCacheId&&r[this[0].jqmCacheId][a]?this[0].jqmCacheId&&r[this[0].jqmCacheId][a]:this[0].getAttribute(a);for(var d=0;d<this.length;d++)if(f.isObject(a))for(var e in a)f(this[d]).attr(e,a[e]);else if(f.isArray(c)||f.isObject(c)||f.isFunction(c)){if(!this[d].jqmCacheId)this[d].jqmCacheId=f.uuid();r[this[d].jqmCacheId]||(r[this[d].jqmCacheId]={});r[this[d].jqmCacheId][a]=c}else c==null&&c!==l?(this[d].removeAttribute(a),this[d].jqmCacheId&&r[this[d].jqmCacheId][a]&&delete r[this[d].jqmCacheId][a]):this[d].setAttribute(a,c);return this},removeAttr:function(c){for(var d=this,e=0;e<this.length;e++)c.split(/\s+/g).forEach(function(a){d[e].removeAttribute(a);d[e].jqmCacheId&&r[d[e].jqmCacheId][c]&&delete r[d[e].jqmCacheId][c]});return this},prop:function(a,c){if(this.length===0)return c===l?l:this;if(c===l&&!f.isObject(a)){var d;return this[0].jqmCacheId&&x[this[0].jqmCacheId][a]?this[0].jqmCacheId&&x[this[0].jqmCacheId][a]:!(d=this[0][a])&&a in this[0]?this[0][a]:d}for(d=0;d<this.length;d++)if(f.isObject(a))for(var e in a)f(this[d]).prop(e,a[e]);else if(f.isArray(c)||f.isObject(c)||f.isFunction(c)){if(!this[d].jqmCacheId)this[d].jqmCacheId=f.uuid();x[this[d].jqmCacheId]||(x[this[d].jqmCacheId]={});x[this[d].jqmCacheId][a]=c}else c==null&&c!==l?f(this[d]).removeProp(a):this[d][a]=c;return this},removeProp:function(c){for(var d=this,e=0;e<this.length;e++)c.split(/\s+/g).forEach(function(a){d[e][a]&&delete d[e][a];d[e].jqmCacheId&&x[d[e].jqmCacheId][c]&&delete x[d[e].jqmCacheId][c]});return this},remove:function(a){a=f(this).filter(a);if(a==l)return this;for(var c=0;c<a.length;c++)f.cleanUpContent(a[c],!0,!0),a[c].parentNode.removeChild(a[c]);return this},addClass:function(c){for(var d=0;d<this.length;d++){var e=this[d].className,h=[],j=this;c.split(/\s+/g).forEach(function(a){j.hasClass(a,j[d])||h.push(a)});this[d].className+=(e?" ":"")+h.join(" ");this[d].className=this[d].className.trim()}return this},removeClass:function(c){for(var d=0;d<this.length;d++){if(c==l){this[d].className="";break}var e=this[d].className;c.split(/\s+/g).forEach(function(a){e=e.replace(y(a)," ")});this[d].className=e.length>0?e.trim():""}return this},replaceClass:function(c,d){for(var e=0;e<this.length;e++)if(c==l)this[e].className=d;else{var h=this[e].className;c.split(/\s+/g).concat(d.split(/\s+/g)).forEach(function(a){h=h.replace(y(a)," ")});h=h.trim();this[e].className=h.length>0?(h+" "+d).trim():d}return this},hasClass:function(a,c){if(this.length===0)return!1;c||(c=this[0]);return y(a).test(c.className)},append:function(a,c){if(a&&a.length!=l&&a.length===0)return this;if(f.isArray(a)||f.isObject(a))a=f(a);var d;for(d=0;d<this.length;d++)if(a.length&&typeof a!="string")a=f(a),D(a,this[d],c);else{var e=bd.test(a)?f(a):l;if(e==l||e.length==0)e=n.createTextNode(a);e.nodeName!=l&&e.nodeName.toLowerCase()=="script"&&(!e.type||e.type.toLowerCase()==="text/javascript")?k.eval(e.innerHTML):e instanceof v?D(e,this[d],c):c!=l?this[d].insertBefore(e,this[d].firstChild):this[d].appendChild(e)}return this},appendTo:function(a){f(a).append(this);return this},prependTo:function(a){f(a).append(this,!0);return this},prepend:function(a){return this.append(a,1)},insertBefore:function(a,c){if(this.length==0)return this;a=f(a).get(0);if(!a)return this;for(var d=0;d<this.length;d++)c?a.parentNode.insertBefore(this[d],a.nextSibling):a.parentNode.insertBefore(this[d],a);return this},insertAfter:function(a){this.insertBefore(a,!0)},get:function(a){a=a==l?0:a;a<0&&(a+=this.length);return this[a]?this[a]:l},offset:function(){if(this.length===0)return this;if(this[0]==k)return{left:0,top:0,right:0,bottom:0,width:k.innerWidth,height:k.innerHeight};else var a=this[0].getBoundingClientRect();return{left:a.left+k.pageXOffset,top:a.top+k.pageYOffset,right:a.right+k.pageXOffset,bottom:a.bottom+k.pageYOffset,width:a.right-a.left,height:a.bottom-a.top}},height:function(a){if(this.length===0)return this;if(a!=l)return this.css("height",a);if(this[0]==this[0].window)return k.innerHeight;return this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetheight:(a=this.css("height").replace("px",""))?a:this.offset().height},width:function(a){if(this.length===0)return this;if(a!=l)return this.css("width",a);if(this[0]==this[0].window)return k.innerWidth;return this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetwidth:(a=this.css("width").replace("px",""))?a:this.offset().width},parent:function(a,c){if(this.length==0)return this;for(var d=[],e=0;e<this.length;e++)for(var h=this[e];h.parentNode&&h.parentNode!=n;){d.push(h.parentNode);if(h.parentNode)h=h.parentNode;if(!c)break}return this.setupOld(f(s(d)).filter(a))},parents:function(a){return this.parent(a,!0)},children:function(a){if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++)c=c.concat(z(this[d].firstChild));return this.setupOld(f(c).filter(a))},siblings:function(a){if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++)this[d].parentNode&&(c=c.concat(z(this[d].parentNode.firstChild,this[d])));return this.setupOld(f(c).filter(a))},closest:function(a,c){if(this.length==0)return this;var d=this[0],e=f(a,c);if(e.length==0)return f();for(;d&&e.indexOf(d)==-1;)d=d!==c&&d!==n&&d.parentNode;return f(d)},filter:function(a){if(this.length==0)return this;if(a==l)return this;for(var c=[],d=0;d<this.length;d++){var e=this[d];e.parentNode&&f(a,e.parentNode).indexOf(e)>=0&&c.push(e)}return this.setupOld(f(s(c)))},not:function(a){if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++){var e=this[d];e.parentNode&&f(a,e.parentNode).indexOf(e)==-1&&c.push(e)}return this.setupOld(f(s(c)))},data:function(a,c){return this.attr("data-"+a,c)},end:function(){return this.oldElement!=l?this.oldElement:f()},clone:function(a){a=a===!1?!1:!0;if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++)c.push(this[d].cloneNode(a));return f(c)},size:function(){return this.length},serialize:function(){if(this.length==0)return"";for(var d=[],e=0;e<this.length;e++)this.slice.call(this[e].elements).forEach(function(a){var c=a.getAttribute("type");if(a.nodeName.toLowerCase()!="fieldset"&&!a.disabled&&c!="submit"&&c!="reset"&&c!="button"&&(c!="radio"&&c!="checkbox"||a.checked)&&a.getAttribute("name"))if(a.type=="select-multiple")for(c=0;c<a.options.length;c++)a.options[c].selected&&d.push(a.getAttribute("name")+"="+encodeURIComponent(a.options[c].value));else d.push(a.getAttribute("name")+"="+encodeURIComponent(a.value))});return d.join("&")},eq:function(a){return f(this.get(a))},index:function(a){return a?this.indexOf(f(a)[0]):this.parent().children().indexOf(this[0])},is:function(a){return!!a&&this.filter(a).length>0}};var S={type:"GET",beforeSend:A,success:A,error:A,complete:A,context:l,timeout:0,crossDomain:null};f.jsonP=function(c){var d="jsonp_callback"+ ++bc,e="",h=n.createElement("script");k[d]=function(a){clearTimeout(e);f(h).remove();delete k[d];c.success.call(void 0,a)};h.src=c.url.replace(/=\?/,"="+d);if(c.error)h.onerror=function(){clearTimeout(e);c.error.call(void 0,"","error")};f("head").append(h);c.timeout>0&&(e=setTimeout(function(){c.error.call(void 0,"","timeout")},c.timeout));return{}};f.ajax=function(e){var h;try{var j=e||{},m;for(m in S)typeof j[m]=="undefined"&&(j[m]=S[m]);if(!j.url)j.url=k.location;if(!j.contentType)j.contentType="application/x-www-form-urlencoded";if(!j.headers)j.headers={};if(!("async"in j)||j.async!==!1)j.async=!0;if(j.dataType)switch(j.dataType){case"script":j.dataType="text/javascript, application/javascript";break;case"json":j.dataType="application/json";break;case"xml":j.dataType="application/xml, text/xml";break;case"html":j.dataType="text/html";break;case"text":j.dataType="text/plain";break;default:j.dataType="text/html";break;case"jsonp":return f.jsonP(e)}else j.dataType="text/html";if(f.isObject(j.data))j.data=f.param(j.data);j.type.toLowerCase()==="get"&&j.data&&(j.url+=j.url.indexOf("?")===-1?"?"+j.data:"&"+j.data);if(/=\?/.test(j.url))return f.jsonP(j);if(j.crossDomain===null)j.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(j.url)&&RegExp.$2!=k.location.host;if(!j.crossDomain)j.headers=f.extend({"X-Requested-With":"XMLHttpRequest"},j.headers);var p,o=j.context,B=/^([\w-]+:)\/\//.test(j.url)?RegExp.$1:k.location.protocol;h=new k.XMLHttpRequest;h.onreadystatechange=function(){var a=j.dataType;if(h.readyState===4){clearTimeout(p);var c,d=!1;if(h.status>=200&&h.status<300||h.status===0&&B=="file:"){if(a==="application/json"&&!/^\s*$/.test(h.responseText))try{c=JSON.parse(h.responseText)}catch(t){d=t}else a==="application/xml, text/xml"?c=h.responseXML:a=="text/html"?(c=h.responseText,f.parseJS(c)):c=h.responseText;h.status===0&&c.length===0&&(d=!0);d?j.error.call(o,h,"parsererror",d):j.success.call(o,c,"success",h)}else d=!0,j.error.call(o,h,"error");j.complete.call(o,h,d?"error":"success")}};h.open(j.type,j.url,j.async);if(j.withCredentials)h.withCredentials=!0;if(j.contentType)j.headers["Content-Type"]=j.contentType;for(var t in j.headers)h.setRequestHeader(t,j.headers[t]);if(j.beforeSend.call(o,h,j)===!1)return h.abort(),!1;j.timeout>0&&(p=setTimeout(function(){h.onreadystatechange=A;h.abort();j.error.call(o,h,"timeout")},j.timeout));h.send(j.data)}catch(r){console.log(r),j.error.call(o,h,"error",r)}return h};f.get=function(a,c){return this.ajax({url:a,success:c})};f.post=function(a,c,d,e){typeof c==="function"&&(d=c,c={});e===l&&(e="html");return this.ajax({url:a,type:"POST",data:c,dataType:e,success:d})};f.getJSON=function(a,c,d){typeof c==="function"&&(d=c,c={});return this.ajax({url:a,data:c,success:d,dataType:"json"})};f.param=function(a,c){var d=[];if(a instanceof v)a.each(function(){d.push((c?c+"[]":this.id)+"="+encodeURIComponent(this.value))});else for(var e in a){var h=c?c+"["+e+"]":e,j=a[e];d.push(f.isObject(j)?f.param(j,h):h+"="+encodeURIComponent(j))}return d.join("&")};f.parseJSON=function(a){return JSON.parse(a)};f.parseXML=function(a){return(new DOMParser).parseFromString(a,"text/xml")};M(f,navigator.userAgent);f.__detectUA=M;if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){this.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+|\s+$/,"");return this};f.uuid=function(){var a=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()};f.getCssMatrix=function(a){if(a==l)return k.WebKitCSSMatrix||k.MSCSSMatrix||{a:0,b:0,c:0,d:0,e:0,f:0};try{if(k.WebKitCSSMatrix)return new WebKitCSSMatrix(k.getComputedStyle(a).webkitTransform);else if(k.MSCSSMatrix)return new MSCSSMatrix(k.getComputedStyle(a).transform);else{var c=k.getComputedStyle(a)[f.feat.cssPrefix+"Transform"].replace(/[^0-9\-.,]/g,"").split(",");return{a:+c[0],b:+c[1],c:+c[2],d:+c[3],e:+c[4],f:+c[5]}}}catch(b){return{a:0,b:0,c:0,d:0,e:0,f:0}}};var u={},W=1;f.event={add:G,remove:H};f.fn.bind=function(a,c){for(var d=0;d<this.length;d++)G(this[d],a,c);return this};f.fn.unbind=function(a,c){for(var d=0;d<this.length;d++)H(this[d],a,c);return this};f.fn.one=function(j,m){return this.each(function(e,h){G(this,j,m,null,function(c,d){return function(){var a=c.apply(h,arguments);H(h,d,c);return a}})})};var ba=function(){return!0},bb=function(){return!1},Z={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};f.fn.delegate=function(h,j,m){for(var p=0;p<this.length;p++){var o=this[p];G(o,j,m,h,function(e){return function(a){var c,d=f(a.target).closest(h,o).get(0);if(d)return c=f.extend(Y(a),{currentTarget:d,liveFired:o}),e.apply(d,[c].concat([].slice.call(arguments,1)))}})}return this};f.fn.undelegate=function(a,c,d){for(var e=0;e<this.length;e++)H(this[e],c,d,a);return this};f.fn.on=function(a,c,d){return c===l||f.isFunction(c)?this.bind(a,c):this.delegate(c,a,d)};f.fn.off=function(a,c,d){return c===l||f.isFunction(c)?this.unbind(a,c):this.undelegate(c,a,d)};f.fn.trigger=function(a,c,d){typeof a=="string"&&(a=f.Event(a,d));a.data=c;for(c=0;c<this.length;c++)this[c].dispatchEvent(a);return this};f.Event=function(a,c){var d=n.createEvent("Events"),e=!0;if(c)for(var h in c)h=="bubbles"?e=!!c[h]:d[h]=c[h];d.initEvent(a,e,!0,null,null,null,null,null,null,null,null,null,null,null,null);return d};f.bind=function(a,c,d){if(!a.__events)a.__events={};f.isArray(c)||(c=[c]);for(var e=0;e<c.length;e++)a.__events[c[e]]||(a.__events[c[e]]=[]),a.__events[c[e]].push(d)};f.trigger=function(a,c,d){var e=!0;if(!a.__events)return e;f.isArray(c)||(c=[c]);f.isArray(d)||(d=[]);for(var h=0;h<c.length;h++)if(a.__events[c[h]])for(var j=a.__events[c[h]],m=0;m<j.length;m++)f.isFunction(j[m])&&j[m].apply(a,d)===!1&&(e=!1);return e};f.unbind=function(a,c,d){if(a.__events){f.isArray(c)||(c=[c]);for(var e=0;e<c.length;e++)if(a.__events[c[e]])for(var h=a.__events[c[e]],j=0;j<h.length;j++)if(d==l&&delete h[j],h[j]==d){h.splice(j,1);break}}};f.proxy=function(a,c,d){return function(){if(d)return a.apply(c,d);return a.apply(c,arguments)}};var be=function(a,c){for(var d=0;d<a.length;d++)Q(a[d],c)};f.cleanUpContent=function(a,c,d){if(a){var e=a.childNodes;e&&e.length>0&&f.asap(be,{},[R.apply(e,[0]),d]);c&&P(a,d)}};var K=[],T=[],U=[];f.asap=function(a,c,d){if(!f.isFunction(a))throw"$.asap - argument is not a valid function";K.push(a);T.push(c?c:{});U.push(d?d:[]);k.postMessage("jqm-asap","*")};k.addEventListener("message",function(a){a.source==k&&a.data=="jqm-asap"&&(a.stopPropagation(),K.length>0&&K.shift().apply(T.shift(),U.shift()))},!0);var V={};f.parseJS=function(a){if(a){if(typeof a=="string"){var c=n.createElement("div");c.innerHTML=a;a=c}a=a.getElementsByTagName("script");for(c=0;c<a.length;c++)if(a[c].src.length>0&&!V[a[c].src]){var d=n.createElement("script");d.type=a[c].type;d.src=a[c].src;n.getElementsByTagName("head")[0].appendChild(d);V[a[c].src]=1}else k.eval(a[c].innerHTML)}};["click","keydown","keyup","keypress","submit","load","resize","change","select","error"].forEach(function(c){f.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)}});return f}(window);"$"in window||(window.$=jq);if(!window.numOnly)window.numOnly=function(g){if(g===void 0||g==="")return 0;if(isNaN(parseFloat(g)))if(g.replace)g=g.replace(/[^0-9.-]/,"");else return 0;return parseFloat(g)}};var branch="stable";var version="QSC Mobile HTML5 Nightly Build Version 9 / 130323";var stuid,pwd,isLogin,isTempLogin=false;var config=localStorage.getItem('config')?JSON.parse(localStorage.getItem('config')):{};var config_list=['switch_to_dev_branch'];for(var i=0;i<1;i++){var item=config_list[i];if(typeof(config[item])=="undefined")config[item]=false}if(config['switch_to_dev_branch']){branch="dev"}if(branch!='dev'){$('.dev').remove()}stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd');if(stuid&&pwd){isLogin=true}if(isLogin){$('#menu .user').attr('class','box user logout');$('#menu .user').html('注销')}else{$('#menu .user').attr('class','box user login');$('#menu .user').html('登录')}function fetchData(c,d,e){if(!navigator.onLine){if(typeof(e)=='function'){e('好的嘛，这是已经离线的节奏……')}return}var h=branch=="dev"?'http://m.myqsc.com/dev/':'http://m.myqsc.com/stable/';var j=h+c+'?stuid='+stuid+'&pwd='+pwd+'&callback=?';$.jsonP({url:j,success:function(a){if(typeof(a['code'])!="undefined"){if(a['code']==0){e(a['msg']);return}if(a['code']==1){console.log('getJson: code = 1');e(a['msg']);updateData(c,d,e)}else{console.log('getJson:未知情况');return}}else{d(a)}},error:function(){e('好的嘛，好像有什么错误？')}})}function getData(c,d,e){e=typeof(e)=='function'?e:function(a){return};d=typeof(d)=='function'?d:function(a){return};if(isTempLogin){fetchData(c,d,e)}else{var h=localStorage.getItem(c);if(!h){fetchData(c,function(a){d(a);localStorage.setItem(c,JSON.stringify(a))},e)}else{d(JSON.parse(h));fetchData(c,function(a){localStorage.setItem(c,JSON.stringify(a))})}}}function showMsg(a,c){$('#msg').show();$('#msg').html(a)}function showLogin(c){$(currentLayout).hide();$('#login').show();$('#login_form').bind("submit",function(){stuid=$("#stuid").val();pwd=$("#pwd").val();if(!isTempLogin){localStorage.setItem('stuid',stuid);localStorage.setItem('pwd',pwd)}fetchData('jw/validate',function(a){if(a['stuid']!=''){$('#login').hide();if(!isTempLogin){$('#menu .user').attr('class','box user logout');$('#menu .user').html('注销')}if(typeof(c)=='function'){c()}}else{showMsg('登录失败');stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd')}},function(a){showMsg(a);stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd')});return false})}function pleaseLoginIfNotLogin(a){if(isLogin||isTempLogin){if(typeof(a)=='function'){a()}}else{showLogin(a)}}function pad(a){return(a<10)?'0'+a.toString():a.toString()}function formatTimeDelta(a){var c=parseInt(a/3600),d=parseInt(a%3600/60);a=parseInt(a%60);return c>0?pad(c)+':'+pad(d)+':'+pad(a):pad(d)+':'+pad(a)}Date.prototype.getZjuWeek=function(){var a=[43,47,49,51,1,3,10,12,14,16,18,19,21,23,25,27],c=[44,45,46,48,50,52,2,4,9,11,13,15,17,20,22,24,26],d=this.getIsoWeek();if(a.indexOf(d)!=-1)return'odd';if(c.indexOf(d)!=-1)return'even';return null};Date.prototype.getZjuSemester=function(){var a=this.getIsoWeek();var c={"chun":[9,10,11,12,13,14,15,16,17,18],"xia":[19,20,21,22,23,24,25,26,27],"qiu":[43,44,45,46],"dong":[1,2,3,4,47,48,49,50,51,52],"hanjia":[5,6,7,8],"shujia":[28,29,30,31,32,33]};switch(true){case c.chun.indexOf(a)!=-1:return'春';case c.xia.indexOf(a)!=-1:return'夏';case c.qiu.indexOf(a)!=-1:return'秋';case c.dong.indexOf(a)!=-1:return'冬';case c.shujia.indexOf(a)!=-1:return'暑假';case c.hanjia.indexOf(a)!=-1:return'寒假';default:return false}};function getSksj(a){var c=["","08:00","08:50","09:50","10:40","11:30","13:15","14:05","14:55","15:55","16:45","18:30","19:20","20:10"];return c[a]}function getXksj(a){var c=["","08:45","09:35","10:35","11:25","12:15","14:00","14:50","15:40","16:40","17:30","19:15","20:05","20:55"];return c[a]}Date.prototype.getClassNth=function(){var a;for(a=1;a<14;a++){if(this.laterThan(getSksj(a))&&!this.laterThan(getXksj(a))){return a}}return false};Date.prototype.getClassNthNext=function(){var a,c=0;for(a=1;a<14;a++){if(this.laterThan(getSksj(a))){c=a}}c++;return c>13?false:c};function KeBiao(h,j){if(typeof(h)=="undefined"){console.warn("no data for KeBiao");h=[]}var m=j.getZjuWeek();var p=j.getZjuSemester();var o=["7","1","2","3","4","5","6"];var B=o[j.getDay()];var t,J,C;var q=[];for(var k=0,D=h.length;k<D;k++){var y=h[k]['class'];for(t=0;t<y.length;t++){var s=y[t];if(h[k]['semester'].indexOf(p)!=-1){if(s['week']==m||s['week']=='both'){if(s['weekday']==B){for(var z=0;z<s['class'].length;z++){C={'id':h[k]['id'],'name':h[k]['name'],'teacher':h[k]['teacher'],'classroom':s['place']};q[s['class'][z]]=C}}}}}}this.getCourseId=function(a){return typeof(q[a])!="undefined"?q[a]['id']:false};this.getCourseName=function(a){return typeof(q[a])!="undefined"?q[a]['name']:false};this.getClassroom=function(a){return typeof(q[a])!="undefined"?q[a]['classroom']:false};this.getTeacherName=function(a){return typeof(q[a])!="undefined"?q[a]['teacher']:false};this.getCourseHash=function(a){var c=this.getCourseId(a)+this.getClassroom(a)+this.getTeacherName(a);return c};this.getCourseTime=function(a){var c=this.getClassNthAll(a);var d=getSksj(c[0]);var e=getXksj(c[c.length-1]);return[d,e]};this.haveClass=function(){return q.length>0?true:false};this.getClassNthAll=function(a){var c=this.getCourseHash(a);var d=[];for(k=1;k<=13;k++){if(this.getCourseHash(k)==c){d.push(k)}}return d};this.getClassNext=function(a){a=a>0?a:0;for(k=a+1;k<=13;k++){if(this.getCourseName(k))return k}return false};this.getClassMaybe=function(){var a=new Date();var c;var d=a.getClassNth();if(this.getCourseName(d)&&d!=false)return d;var e=a.getClassNthNext();if(!e)return false;for(c=e;c<14;c++){if(this.getCourseName(c)!=false){return c}}return false};this.getCourseNext=function(a){a=a>0?a:0;for(k=a;k<=13;k++){k++;if(this.getCourseName(k)){while(this.getCourseHash(k+1)==this.getCourseHash(k)){k++}return k}};return false}}Date.prototype.laterThan=function(a){var c=a.split(':');var d=new Date(this);d.setHours(c[0],c[1],0);var e=this.getTime()-d.getTime();return e>0?Math.floor(e/1000):false};Date.prototype.earierThan=function(a){var c=a.split(':');var d=new Date(this);d.setHours(c[0],c[1],0);var e=d.getTime()-this.getTime();return e>0?Math.floor(e/1000):false};Date.prototype.getIsoWeek=function(){var a,c;var d=0;var e=new Date(this.getFullYear(),0,1);var h=e.getDay()-d;h=(h>=0?h:h+7);var j=Math.floor((this.getTime()-e.getTime()-(this.getTimezoneOffset()-e.getTimezoneOffset())*60000)/86400000)+1;var m;if(this.getDay()==0)j--;if(h<4){m=Math.floor((j+h-1)/7)+1;if(m>52){a=new Date(this.getFullYear()+1,0,1);c=a.getDay()-d;c=c>=0?c:c+7;m=c<4?1:53}}else{m=Math.floor((j+h-1)/7)}return m};var currentLayout='#menu';window.location.hash='';$(window).on("hashchange",function(){if(window.location.hash==''){$(currentLayout).hide(200);setTimeout(function(){$('#menu').show()},10);currentLayout='#menu'}else{$(currentLayout).hide();$(window.location.hash).show();currentLayout=window.location.hash}});$('.backward').bind("click",function(){history.back();return false});$('#menu .kebiao').bind("click",function(){pleaseLoginIfNotLogin(function(){getData('jw/kebiao',function(a){loadKebiao(a)});window.location.hash='kebiao'})});$('#menu .config').bind("click",function(){$.include(['qsc-mobile-config.js']);window.location.hash='config';return false});$('#menu .xiaoche').bind("click",function(){$.include(['qsc-mobile-bus.js']);window.location.hash='xiaoche';return false});$('#menu .xiaoli').bind("click",function(){getData('share/xiaoli',function(a){loadXiaoli(a)});window.location.hash='xiaoli';return false});$('#menu .gaikuang').bind("click",function(){pleaseLoginIfNotLogin(function(){getData('jw/kebiao',function(a){loadKebiao(a)});window.location.hash='gaikuang'})});$('#menu .kaoshi').bind("click",function(){pleaseLoginIfNotLogin(function(){$.include(['qsc-mobile-kaoshi.js']);window.location.hash='kaoshi'});return false});$('#menu .chengji').bind("click",function(){pleaseLoginIfNotLogin(function(){$.include(['qsc-mobile-chengji.js']);window.location.hash='chengji'});return false});$('#menu .zuoye').bind("click",function(){pleaseLoginIfNotLogin(function(){$.include(['qsc-mobile-zuoye.js','base64.js']);window.location.hash='zuoye'});return false});$('#menu .tempuser').bind("click",function(){localStorage.setItem('tempLogin',true);pleaseLoginIfNotLogin(function(){$('#menu').show()})});$('.user').bind("click",function(){if(isLogin()){if(isTempLogin()){localStorage.removeItem('tempLogin');localStorage.removeItem('tempStuid');localStorage.removeItem('tempPwd')}else{localStorage.clear();$('#menu .user').attr('class','box user login');$('#menu .user').html('登录')}}else{pleaseLoginIfNotLogin(function(){$('#menu').show()})}if(isLogin){$('#menu .user').attr('class','box user logout');$('#menu .user').html('注销')}else{$('#menu .user').attr('class','box user login');$('#menu .user').html('登录')}});$('#msg').bind("click",function(){$(this).hide();return false});$('#wrap').on('click','.slide > div > header',function(){if($(this).parent().hasClass('show')){$(this).parent().removeClass('show');$(this).parent().addClass('hide')}else{$(this).parent().removeClass('hide');$(this).parent().addClass('show')}});var kebiaoData;getData('jw/kebiao',function(a){kebiaoData=a;displayKebiaoSummary();setInterval(function(){displayKebiaoSummary()},1000)});function displayKebiaoSummary(){if(currentLayout!='#menu')return;var a=new Date();var c=new KeBiao(kebiaoData,a);var d=a.getClassNth();var e=c.getClassMaybe();var h;var j;if(e&&d==e){j=a.earierThan(getXksj(e))}else if(e){j=a.earierThan(getSksj(e))}else{j=0}h='<div id="countdown">'+formatTimeDelta(j)+'</div>';h+='<div id="kb-sum-place">'+c.getClassroom(e)+'</div>';h+='<div id="kb-sum-course">'+c.getCourseName(e)+'</div>';$('#menu .kebiao').html(h)}