if(!window.jq||typeof jq!=="function"){var jq=function(k){function z(a,c,d){var e=p.createDocumentFragment();if(d){for(d=a.length-1;d>=0;d--)e.insertBefore(a[d],e.firstChild);c.insertBefore(e,c.firstChild)}else{for(d=0;d<a.length;d++)e.appendChild(a[d]);c.appendChild(e)}}function q(a){return a in N?N[a]:N[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function u(a){for(var c=0;c<a.length;c++)a.indexOf(a[c])!=c&&(a.splice(c,1),c--);return a}function t(a,c){var d=[];if(a==l)return d;for(;a;a=a.nextSibling)a.nodeType==1&&a!==c&&d.push(a);return d}function J(a,c){try{return c.querySelectorAll(a)}catch(b){return[]}}function A(a,c){if(a){if(a.nodeType)return c[c.length++]=a;for(var d=0,e=a.length;d<e;d++)c[c.length++]=a[d]}}function x(){}function F(a,c){a.os={};a.os.webkit=c.match(/WebKit\/([\d.]+)/)?!0:!1;a.os.android=c.match(/(Android)\s+([\d.]+)/)||c.match(/Silk-Accelerated/)?!0:!1;a.os.androidICS=a.os.android&&c.match(/(Android)\s4/)?!0:!1;a.os.ipad=c.match(/(iPad).*OS\s([\d_]+)/)?!0:!1;a.os.iphone=!a.os.ipad&&c.match(/(iPhone\sOS)\s([\d_]+)/)?!0:!1;a.os.webos=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)?!0:!1;a.os.touchpad=a.os.webos&&c.match(/TouchPad/)?!0:!1;a.os.ios=a.os.ipad||a.os.iphone;a.os.playbook=c.match(/PlayBook/)?!0:!1;a.os.blackberry=a.os.playbook||c.match(/BlackBerry/)?!0:!1;a.os.blackberry10=a.os.blackberry&&c.match(/Safari\/536/)?!0:!1;a.os.chrome=c.match(/Chrome/)?!0:!1;a.os.opera=c.match(/Opera/)?!0:!1;a.os.fennec=c.match(/fennec/i)?!0:c.match(/Firefox/)?!0:!1;a.os.ie=c.match(/MSIE 10.0/i)?!0:!1;a.os.ieTouch=a.os.ie&&c.toLowerCase().match(/touch/i)?!0:!1;a.os.supportsTouch=k.DocumentTouch&&p instanceof k.DocumentTouch||"ontouchstart"in k;a.feat={};var d=p.documentElement.getElementsByTagName("head")[0];a.feat.nativeTouchScroll=typeof d.style["-webkit-overflow-scrolling"]!=="undefined"&&a.os.ios;a.feat.cssPrefix=a.os.webkit?"Webkit":a.os.fennec?"Moz":a.os.ie?"ms":a.os.opera?"O":"";a.feat.cssTransformStart=!a.os.opera?"3d(":"(";a.feat.cssTransformEnd=!a.os.opera?",0)":")";if(a.os.android&&!a.os.webkit)a.os.android=!1}function G(a){return a._0||(a._0=X++)}function K(c,d,e,f){d=H(d);if(d.ns)var j=RegExp("(?:^| )"+d.ns.replace(" "," .* ?")+"(?: |$)");return(y[G(c)]||[]).filter(function(a){return a&&(!d.e||a.e==d.e)&&(!d.ns||j.test(a.ns))&&(!e||a.fn==e||typeof a.fn==="function"&&typeof e==="function"&&""+a.fn===""+e)&&(!f||a.sel==f)})}function H(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function P(c,d,e){h.isObject(c)?h.each(c,e):c.split(/\s/).forEach(function(a){e(a,d)})}function L(n,o,w,r,B){var I=G(n),s=y[I]||(y[I]=[]);P(o,w,function(d,e){var f=B&&B(e,d),j=f||e,m=function(a){var c=j.apply(n,[a].concat(a.data));c===!1&&a.preventDefault();return c},f=h.extend(H(d),{fn:e,proxy:m,sel:r,del:f,i:s.length});s.push(f);n.addEventListener(f.e,m,!1)})}function M(e,f,j,m){var n=G(e);P(f||"",j,function(c,d){K(e,c,d,m).forEach(function(a){delete y[n][a.i];e.removeEventListener(a.e,a.proxy,!1)})})}function Y(d){var e=h.extend({originalEvent:d},d);h.each(Z,function(a,c){e[a]=function(){this[c]=ba;return d[a].apply(d,arguments)};e[c]=bb});return e}function Q(a,c){if(c&&a.dispatchEvent){var d=h.Event("destroy",{bubbles:!1});a.dispatchEvent(d)}if((d=G(a))&&y[d]){for(var e in y[d])a.removeEventListener(y[d][e].e,y[d][e].proxy,!1);delete y[d]}}function R(a,c){if(a){var d=a.childNodes;if(d&&d.length>0)for(var e in d)R(d[e],c);Q(a,c)}}var l,p=k.document,D=[],S=D.slice,N=[],bc=1,bd=/^\s*<(\w+)[^>]*>/,v={},E={},C=function(a,c){this.length=0;if(a)if(a instanceof C&&c==l)return a;else if(h.isFunction(a))return h(p).ready(a);else if(h.isArray(a)&&a.length!=l){for(var d=0;d<a.length;d++)this[this.length++]=a[d];return this}else if(h.isObject(a)&&h.isObject(c)){if(a.length==l)a.parentNode==c&&(this[this.length++]=a);else for(d=0;d<a.length;d++)a[d].parentNode==c&&(this[this.length++]=a[d]);return this}else if(h.isObject(a)&&c==l)return this[this.length++]=a,this;else if(c!==l){if(c instanceof C)return c.find(a)}else c=p;else return this;return this.selector(a,c)},h=function(a,c){return new C(a,c)};h.is$=function(a){return a instanceof C};h.map=function(a,c){var d,e=[],f;if(h.isArray(a))for(f=0;f<a.length;f++)d=c(a[f],f),d!==l&&e.push(d);else if(h.isObject(a))for(f in a)a.hasOwnProperty(f)&&(d=c(a[f],f),d!==l&&e.push(d));return h([e])};h.each=function(a,c){var d;if(h.isArray(a))for(d=0;d<a.length;d++){if(c(d,a[d])===!1)break}else if(h.isObject(a))for(d in a)if(a.hasOwnProperty(d)&&c(d,a[d])===!1)break;return a};h.extend=function(d){d==l&&(d=this);if(arguments.length===1){for(var e in d)this[e]=d[e];return this}else S.call(arguments,1).forEach(function(a){for(var c in a)d[c]=a[c]});return d};h.isArray=function(a){return a instanceof Array&&a.push!=l};h.isFunction=function(a){return typeof a==="function"};h.isObject=function(a){return typeof a==="object"};h.fn=C.prototype={constructor:C,forEach:D.forEach,reduce:D.reduce,push:D.push,indexOf:D.indexOf,concat:D.concat,selector:function(a,c){a=a.trim();if(a[0]==="#"&&a.indexOf(".")==-1&&a.indexOf(" ")===-1&&a.indexOf(">")===-1)c==p?A(c.getElementById(a.replace("#","")),this):A(J(a,c),this);else if(a[0]==="<"&&a[a.length-1]===">"){var d=p.createElement("div");d.innerHTML=a.trim();A(d.childNodes,this)}else A(J(a,c),this);return this},oldElement:l,slice:D.slice,setupOld:function(a){if(a==l)return h();a.oldElement=this;return a},map:function(a){var c,d=[],e;for(e=0;e<this.length;e++)c=a(e,this[e]),c!==l&&d.push(c);return h([d])},each:function(d){this.forEach(function(a,c){d.call(a,c,a)});return this},ready:function(a){p.readyState==="complete"||p.readyState==="loaded"||!h.os.ie&&p.readyState==="interactive"?a():p.addEventListener("DOMContentLoaded",a,!1);return this},find:function(a){if(this.length===0)return this;for(var c=[],d,e=0;e<this.length;e++){d=h(a,this[e]);for(var f=0;f<d.length;f++)c.push(d[f])}return h(u(c))},html:function(a,c){if(this.length===0)return this;if(a===l)return this[0].innerHTML;for(var d=0;d<this.length;d++)c!==!1&&h.cleanUpContent(this[d],!1,!0),this[d].innerHTML=a;return this},text:function(a){if(this.length===0)return this;if(a===l)return this[0].textContent;for(var c=0;c<this.length;c++)this[c].textContent=a;return this},css:function(a,c,d){d=d!=l?d:this[0];if(this.length===0)return this;if(c==l&&typeof a==="string")return k.getComputedStyle(d),d.style[a]?d.style[a]:k.getComputedStyle(d)[a];for(d=0;d<this.length;d++)if(h.isObject(a))for(var e in a)this[d].style[e]=a[e];else this[d].style[a]=c;return this},vendorCss:function(a,c,d){return this.css(h.feat.cssPrefix+a,c,d)},empty:function(){for(var a=0;a<this.length;a++)h.cleanUpContent(this[a],!1,!0),this[a].innerHTML="";return this},hide:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])!="none")this[a].setAttribute("jqmOldStyle",this.css("display",null,this[a])),this[a].style.display="none";return this},show:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])=="none")this[a].style.display=this[a].getAttribute("jqmOldStyle")?this[a].getAttribute("jqmOldStyle"):"block",this[a].removeAttribute("jqmOldStyle");return this},toggle:function(a){for(var c=a===!0?!0:!1,d=0;d<this.length;d++)k.getComputedStyle(this[d]).display!=="none"||a!==l&&c===!1?(this[d].setAttribute("jqmOldStyle",this[d].style.display),this[d].style.display="none"):(this[d].style.display=this[d].getAttribute("jqmOldStyle")!=l?this[d].getAttribute("jqmOldStyle"):"block",this[d].removeAttribute("jqmOldStyle"));return this},val:function(a){if(this.length===0)return a===l?l:this;if(a==l)return this[0].value;for(var c=0;c<this.length;c++)this[c].value=a;return this},attr:function(a,c){if(this.length===0)return c===l?l:this;if(c===l&&!h.isObject(a))return this[0].jqmCacheId&&v[this[0].jqmCacheId][a]?this[0].jqmCacheId&&v[this[0].jqmCacheId][a]:this[0].getAttribute(a);for(var d=0;d<this.length;d++)if(h.isObject(a))for(var e in a)h(this[d]).attr(e,a[e]);else if(h.isArray(c)||h.isObject(c)||h.isFunction(c)){if(!this[d].jqmCacheId)this[d].jqmCacheId=h.uuid();v[this[d].jqmCacheId]||(v[this[d].jqmCacheId]={});v[this[d].jqmCacheId][a]=c}else c==null&&c!==l?(this[d].removeAttribute(a),this[d].jqmCacheId&&v[this[d].jqmCacheId][a]&&delete v[this[d].jqmCacheId][a]):this[d].setAttribute(a,c);return this},removeAttr:function(c){for(var d=this,e=0;e<this.length;e++)c.split(/\s+/g).forEach(function(a){d[e].removeAttribute(a);d[e].jqmCacheId&&v[d[e].jqmCacheId][c]&&delete v[d[e].jqmCacheId][c]});return this},prop:function(a,c){if(this.length===0)return c===l?l:this;if(c===l&&!h.isObject(a)){var d;return this[0].jqmCacheId&&E[this[0].jqmCacheId][a]?this[0].jqmCacheId&&E[this[0].jqmCacheId][a]:!(d=this[0][a])&&a in this[0]?this[0][a]:d}for(d=0;d<this.length;d++)if(h.isObject(a))for(var e in a)h(this[d]).prop(e,a[e]);else if(h.isArray(c)||h.isObject(c)||h.isFunction(c)){if(!this[d].jqmCacheId)this[d].jqmCacheId=h.uuid();E[this[d].jqmCacheId]||(E[this[d].jqmCacheId]={});E[this[d].jqmCacheId][a]=c}else c==null&&c!==l?h(this[d]).removeProp(a):this[d][a]=c;return this},removeProp:function(c){for(var d=this,e=0;e<this.length;e++)c.split(/\s+/g).forEach(function(a){d[e][a]&&delete d[e][a];d[e].jqmCacheId&&E[d[e].jqmCacheId][c]&&delete E[d[e].jqmCacheId][c]});return this},remove:function(a){a=h(this).filter(a);if(a==l)return this;for(var c=0;c<a.length;c++)h.cleanUpContent(a[c],!0,!0),a[c].parentNode.removeChild(a[c]);return this},addClass:function(c){for(var d=0;d<this.length;d++){var e=this[d].className,f=[],j=this;c.split(/\s+/g).forEach(function(a){j.hasClass(a,j[d])||f.push(a)});this[d].className+=(e?" ":"")+f.join(" ");this[d].className=this[d].className.trim()}return this},removeClass:function(c){for(var d=0;d<this.length;d++){if(c==l){this[d].className="";break}var e=this[d].className;c.split(/\s+/g).forEach(function(a){e=e.replace(q(a)," ")});this[d].className=e.length>0?e.trim():""}return this},replaceClass:function(c,d){for(var e=0;e<this.length;e++)if(c==l)this[e].className=d;else{var f=this[e].className;c.split(/\s+/g).concat(d.split(/\s+/g)).forEach(function(a){f=f.replace(q(a)," ")});f=f.trim();this[e].className=f.length>0?(f+" "+d).trim():d}return this},hasClass:function(a,c){if(this.length===0)return!1;c||(c=this[0]);return q(a).test(c.className)},append:function(a,c){if(a&&a.length!=l&&a.length===0)return this;if(h.isArray(a)||h.isObject(a))a=h(a);var d;for(d=0;d<this.length;d++)if(a.length&&typeof a!="string")a=h(a),z(a,this[d],c);else{var e=bd.test(a)?h(a):l;if(e==l||e.length==0)e=p.createTextNode(a);e.nodeName!=l&&e.nodeName.toLowerCase()=="script"&&(!e.type||e.type.toLowerCase()==="text/javascript")?k.eval(e.innerHTML):e instanceof C?z(e,this[d],c):c!=l?this[d].insertBefore(e,this[d].firstChild):this[d].appendChild(e)}return this},appendTo:function(a){h(a).append(this);return this},prependTo:function(a){h(a).append(this,!0);return this},prepend:function(a){return this.append(a,1)},insertBefore:function(a,c){if(this.length==0)return this;a=h(a).get(0);if(!a)return this;for(var d=0;d<this.length;d++)c?a.parentNode.insertBefore(this[d],a.nextSibling):a.parentNode.insertBefore(this[d],a);return this},insertAfter:function(a){this.insertBefore(a,!0)},get:function(a){a=a==l?0:a;a<0&&(a+=this.length);return this[a]?this[a]:l},offset:function(){if(this.length===0)return this;if(this[0]==k)return{left:0,top:0,right:0,bottom:0,width:k.innerWidth,height:k.innerHeight};else var a=this[0].getBoundingClientRect();return{left:a.left+k.pageXOffset,top:a.top+k.pageYOffset,right:a.right+k.pageXOffset,bottom:a.bottom+k.pageYOffset,width:a.right-a.left,height:a.bottom-a.top}},height:function(a){if(this.length===0)return this;if(a!=l)return this.css("height",a);if(this[0]==this[0].window)return k.innerHeight;return this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetheight:(a=this.css("height").replace("px",""))?a:this.offset().height},width:function(a){if(this.length===0)return this;if(a!=l)return this.css("width",a);if(this[0]==this[0].window)return k.innerWidth;return this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetwidth:(a=this.css("width").replace("px",""))?a:this.offset().width},parent:function(a,c){if(this.length==0)return this;for(var d=[],e=0;e<this.length;e++)for(var f=this[e];f.parentNode&&f.parentNode!=p;){d.push(f.parentNode);if(f.parentNode)f=f.parentNode;if(!c)break}return this.setupOld(h(u(d)).filter(a))},parents:function(a){return this.parent(a,!0)},children:function(a){if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++)c=c.concat(t(this[d].firstChild));return this.setupOld(h(c).filter(a))},siblings:function(a){if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++)this[d].parentNode&&(c=c.concat(t(this[d].parentNode.firstChild,this[d])));return this.setupOld(h(c).filter(a))},closest:function(a,c){if(this.length==0)return this;var d=this[0],e=h(a,c);if(e.length==0)return h();for(;d&&e.indexOf(d)==-1;)d=d!==c&&d!==p&&d.parentNode;return h(d)},filter:function(a){if(this.length==0)return this;if(a==l)return this;for(var c=[],d=0;d<this.length;d++){var e=this[d];e.parentNode&&h(a,e.parentNode).indexOf(e)>=0&&c.push(e)}return this.setupOld(h(u(c)))},not:function(a){if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++){var e=this[d];e.parentNode&&h(a,e.parentNode).indexOf(e)==-1&&c.push(e)}return this.setupOld(h(u(c)))},data:function(a,c){return this.attr("data-"+a,c)},end:function(){return this.oldElement!=l?this.oldElement:h()},clone:function(a){a=a===!1?!1:!0;if(this.length==0)return this;for(var c=[],d=0;d<this.length;d++)c.push(this[d].cloneNode(a));return h(c)},size:function(){return this.length},serialize:function(){if(this.length==0)return"";for(var d=[],e=0;e<this.length;e++)this.slice.call(this[e].elements).forEach(function(a){var c=a.getAttribute("type");if(a.nodeName.toLowerCase()!="fieldset"&&!a.disabled&&c!="submit"&&c!="reset"&&c!="button"&&(c!="radio"&&c!="checkbox"||a.checked)&&a.getAttribute("name"))if(a.type=="select-multiple")for(c=0;c<a.options.length;c++)a.options[c].selected&&d.push(a.getAttribute("name")+"="+encodeURIComponent(a.options[c].value));else d.push(a.getAttribute("name")+"="+encodeURIComponent(a.value))});return d.join("&")},eq:function(a){return h(this.get(a))},index:function(a){return a?this.indexOf(h(a)[0]):this.parent().children().indexOf(this[0])},is:function(a){return!!a&&this.filter(a).length>0}};var T={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:l,timeout:0,crossDomain:null};h.jsonP=function(c){var d="jsonp_callback"+ ++bc,e="",f=p.createElement("script");k[d]=function(a){clearTimeout(e);h(f).remove();delete k[d];c.success.call(void 0,a)};f.src=c.url.replace(/=\?/,"="+d);if(c.error)f.onerror=function(){clearTimeout(e);c.error.call(void 0,"","error")};h("head").append(f);c.timeout>0&&(e=setTimeout(function(){c.error.call(void 0,"","timeout")},c.timeout));return{}};h.ajax=function(e){var f;try{var j=e||{},m;for(m in T)typeof j[m]=="undefined"&&(j[m]=T[m]);if(!j.url)j.url=k.location;if(!j.contentType)j.contentType="application/x-www-form-urlencoded";if(!j.headers)j.headers={};if(!("async"in j)||j.async!==!1)j.async=!0;if(j.dataType)switch(j.dataType){case"script":j.dataType="text/javascript, application/javascript";break;case"json":j.dataType="application/json";break;case"xml":j.dataType="application/xml, text/xml";break;case"html":j.dataType="text/html";break;case"text":j.dataType="text/plain";break;default:j.dataType="text/html";break;case"jsonp":return h.jsonP(e)}else j.dataType="text/html";if(h.isObject(j.data))j.data=h.param(j.data);j.type.toLowerCase()==="get"&&j.data&&(j.url+=j.url.indexOf("?")===-1?"?"+j.data:"&"+j.data);if(/=\?/.test(j.url))return h.jsonP(j);if(j.crossDomain===null)j.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(j.url)&&RegExp.$2!=k.location.host;if(!j.crossDomain)j.headers=h.extend({"X-Requested-With":"XMLHttpRequest"},j.headers);var n,o=j.context,w=/^([\w-]+:)\/\//.test(j.url)?RegExp.$1:k.location.protocol;f=new k.XMLHttpRequest;f.onreadystatechange=function(){var a=j.dataType;if(f.readyState===4){clearTimeout(n);var c,d=!1;if(f.status>=200&&f.status<300||f.status===0&&w=="file:"){if(a==="application/json"&&!/^\s*$/.test(f.responseText))try{c=JSON.parse(f.responseText)}catch(r){d=r}else a==="application/xml, text/xml"?c=f.responseXML:a=="text/html"?(c=f.responseText,h.parseJS(c)):c=f.responseText;f.status===0&&c.length===0&&(d=!0);d?j.error.call(o,f,"parsererror",d):j.success.call(o,c,"success",f)}else d=!0,j.error.call(o,f,"error");j.complete.call(o,f,d?"error":"success")}};f.open(j.type,j.url,j.async);if(j.withCredentials)f.withCredentials=!0;if(j.contentType)j.headers["Content-Type"]=j.contentType;for(var r in j.headers)f.setRequestHeader(r,j.headers[r]);if(j.beforeSend.call(o,f,j)===!1)return f.abort(),!1;j.timeout>0&&(n=setTimeout(function(){f.onreadystatechange=x;f.abort();j.error.call(o,f,"timeout")},j.timeout));f.send(j.data)}catch(v){console.log(v),j.error.call(o,f,"error",v)}return f};h.get=function(a,c){return this.ajax({url:a,success:c})};h.post=function(a,c,d,e){typeof c==="function"&&(d=c,c={});e===l&&(e="html");return this.ajax({url:a,type:"POST",data:c,dataType:e,success:d})};h.getJSON=function(a,c,d){typeof c==="function"&&(d=c,c={});return this.ajax({url:a,data:c,success:d,dataType:"json"})};h.param=function(a,c){var d=[];if(a instanceof C)a.each(function(){d.push((c?c+"[]":this.id)+"="+encodeURIComponent(this.value))});else for(var e in a){var f=c?c+"["+e+"]":e,j=a[e];d.push(h.isObject(j)?h.param(j,f):f+"="+encodeURIComponent(j))}return d.join("&")};h.parseJSON=function(a){return JSON.parse(a)};h.parseXML=function(a){return(new DOMParser).parseFromString(a,"text/xml")};F(h,navigator.userAgent);h.__detectUA=F;if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){this.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+|\s+$/,"");return this};h.uuid=function(){var a=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()};h.getCssMatrix=function(a){if(a==l)return k.WebKitCSSMatrix||k.MSCSSMatrix||{a:0,b:0,c:0,d:0,e:0,f:0};try{if(k.WebKitCSSMatrix)return new WebKitCSSMatrix(k.getComputedStyle(a).webkitTransform);else if(k.MSCSSMatrix)return new MSCSSMatrix(k.getComputedStyle(a).transform);else{var c=k.getComputedStyle(a)[h.feat.cssPrefix+"Transform"].replace(/[^0-9\-.,]/g,"").split(",");return{a:+c[0],b:+c[1],c:+c[2],d:+c[3],e:+c[4],f:+c[5]}}}catch(b){return{a:0,b:0,c:0,d:0,e:0,f:0}}};var y={},X=1;h.event={add:L,remove:M};h.fn.bind=function(a,c){for(var d=0;d<this.length;d++)L(this[d],a,c);return this};h.fn.unbind=function(a,c){for(var d=0;d<this.length;d++)M(this[d],a,c);return this};h.fn.one=function(j,m){return this.each(function(e,f){L(this,j,m,null,function(c,d){return function(){var a=c.apply(f,arguments);M(f,d,c);return a}})})};var ba=function(){return!0},bb=function(){return!1},Z={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};h.fn.delegate=function(f,j,m){for(var n=0;n<this.length;n++){var o=this[n];L(o,j,m,f,function(e){return function(a){var c,d=h(a.target).closest(f,o).get(0);if(d)return c=h.extend(Y(a),{currentTarget:d,liveFired:o}),e.apply(d,[c].concat([].slice.call(arguments,1)))}})}return this};h.fn.undelegate=function(a,c,d){for(var e=0;e<this.length;e++)M(this[e],c,d,a);return this};h.fn.on=function(a,c,d){return c===l||h.isFunction(c)?this.bind(a,c):this.delegate(c,a,d)};h.fn.off=function(a,c,d){return c===l||h.isFunction(c)?this.unbind(a,c):this.undelegate(c,a,d)};h.fn.trigger=function(a,c,d){typeof a=="string"&&(a=h.Event(a,d));a.data=c;for(c=0;c<this.length;c++)this[c].dispatchEvent(a);return this};h.Event=function(a,c){var d=p.createEvent("Events"),e=!0;if(c)for(var f in c)f=="bubbles"?e=!!c[f]:d[f]=c[f];d.initEvent(a,e,!0,null,null,null,null,null,null,null,null,null,null,null,null);return d};h.bind=function(a,c,d){if(!a.__events)a.__events={};h.isArray(c)||(c=[c]);for(var e=0;e<c.length;e++)a.__events[c[e]]||(a.__events[c[e]]=[]),a.__events[c[e]].push(d)};h.trigger=function(a,c,d){var e=!0;if(!a.__events)return e;h.isArray(c)||(c=[c]);h.isArray(d)||(d=[]);for(var f=0;f<c.length;f++)if(a.__events[c[f]])for(var j=a.__events[c[f]],m=0;m<j.length;m++)h.isFunction(j[m])&&j[m].apply(a,d)===!1&&(e=!1);return e};h.unbind=function(a,c,d){if(a.__events){h.isArray(c)||(c=[c]);for(var e=0;e<c.length;e++)if(a.__events[c[e]])for(var f=a.__events[c[e]],j=0;j<f.length;j++)if(d==l&&delete f[j],f[j]==d){f.splice(j,1);break}}};h.proxy=function(a,c,d){return function(){if(d)return a.apply(c,d);return a.apply(c,arguments)}};var be=function(a,c){for(var d=0;d<a.length;d++)R(a[d],c)};h.cleanUpContent=function(a,c,d){if(a){var e=a.childNodes;e&&e.length>0&&h.asap(be,{},[S.apply(e,[0]),d]);c&&Q(a,d)}};var O=[],U=[],V=[];h.asap=function(a,c,d){if(!h.isFunction(a))throw"$.asap - argument is not a valid function";O.push(a);U.push(c?c:{});V.push(d?d:[]);k.postMessage("jqm-asap","*")};k.addEventListener("message",function(a){a.source==k&&a.data=="jqm-asap"&&(a.stopPropagation(),O.length>0&&O.shift().apply(U.shift(),V.shift()))},!0);var W={};h.parseJS=function(a){if(a){if(typeof a=="string"){var c=p.createElement("div");c.innerHTML=a;a=c}a=a.getElementsByTagName("script");for(c=0;c<a.length;c++)if(a[c].src.length>0&&!W[a[c].src]){var d=p.createElement("script");d.type=a[c].type;d.src=a[c].src;p.getElementsByTagName("head")[0].appendChild(d);W[a[c].src]=1}else k.eval(a[c].innerHTML)}};["click","keydown","keyup","keypress","submit","load","resize","change","select","error"].forEach(function(c){h.fn[c]=function(a){return a?this.bind(c,a):this.trigger(c)}});return h}(window);"$"in window||(window.$=jq);if(!window.numOnly)window.numOnly=function(g){if(g===void 0||g==="")return 0;if(isNaN(parseFloat(g)))if(g.replace)g=g.replace(/[^0-9.-]/,"");else return 0;return parseFloat(g)}};var RealtiveUnitsTemp=[];var RealtiveUnitsElms=document.querySelectorAll('link[rel=stylesheet],style,[style]');window.RelativeUnits=(function(){var u,t,J,A='relative-units-stylesheet';function x(a){return a.replace(/^\s+|\s+$/,'')};function F(a){return a.replace(/\/\*.*?\*\//g,' ').replace(/\s+/g,' ').replace(/\}\s*/g,'}\n')};function G(a){var c=x(F(a)),d=c.replace(/\{.*$/,''),e=c.replace(/.*?\{(.*?)\}/,'$1').split(';'),f={selector:d,attr:e};return f};function K(){var d;var e=0;t=[];J=[];for(var f=0;f<RealtiveUnitsElms.length;f++){if(RealtiveUnitsElms[f].id==A)continue;switch(RealtiveUnitsElms[f].nodeName.toLowerCase()){case'link':e++;var j=RealtiveUnitsElms[f].href;$.get(j,function(a){a=x(F(a)).split('\n');for(var c=0;c<a.length;c++){if(a.length>0){RealtiveUnitsTemp.push(a[c])}}e--});break;case'style':d=RealtiveUnitsElms[f].innerHTML;d=x(F(d)).split('\n');for(var m=0;m<d.length;m++){if(d.length>0){RealtiveUnitsTemp.push(d[m])}}break;default:J.push(RealtiveUnitsElms[f]);break}}var n=setInterval(function(){if(e!==0)return;for(f=0;f<RealtiveUnitsTemp.length;f++){if(RealtiveUnitsTemp[f].length>0){t.push(G(RealtiveUnitsTemp[f]))}}H();clearInterval(n)},10)};function H(){var e='',f=document.querySelectorAll('style#'+A),j=null,m,n,o,w,r,B,I,s,k,z;for(m=0;m<t.length;m++){for(n=0;n<t[m].attr.length;n++){o=t[m].attr[n];w=o.match(/^(.*):(.*)$/);if(w!=null){k=w[1];z=w[2];if(!z.match(/.*(vw|vh|vm).*/))continue;var q=z.replace(/-*[0-9.]*[ ]*(vm|vh|vw)/g,function(a){var c=a.match(/(-)*([0-9.]*)[ ]*(vm|vh|vw)/);r=parseFloat(c[2]);switch(c[3]){case'vw':B=document.documentElement.clientWidth;break;case'vh':B=document.documentElement.clientHeight;break;case'vm':B=Math.min(document.documentElement.clientWidth,document.documentElement.clientHeight);break}var d=c[1]?c[1]:'';return' '+d+(r*B)/100+'px '});q=k+':'+q+';';q=q.replace(/ ;/g,';');q=q.replace(/  /g,' ');e+=t[m].selector+' {'+q+'}\n'}}}if(f!=null){for(m=0;m<f.length;m++){f[m].parentNode.removeChild(f[m])}}j=document.createElement('style');j.id=A;j.innerHTML=e;document.querySelector('head').appendChild(j)};window.addEventListener('resize',function(){H()});window.addEventListener('load',function(){K()});return{update:K,recalculate:H}}());var branch="stable";var version="QSC Mobile HTML5 Nightly Build Version 9 / 130323";var stuid,pwd,isLogin=false,isTempLogin=false;var config=localStorage.getItem('config')?JSON.parse(localStorage.getItem('config')):{};var config_list=['switch_to_dev_branch'];for(var i=0;i<1;i++){var item=config_list[i];if(typeof(config[item])=="undefined")config[item]=false}if(config['switch_to_dev_branch']){branch="dev"}if(branch!='dev'){$('.dev').remove()}stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd');if(stuid&&pwd){isLogin=true}if(isLogin){$('#menu-user').html('注销');$('#menu-user').attr('id','menu-logout')}else{$('#menu-user').html('登录');$('#menu-user').attr('id','menu-login')}function fetchData(c,d,e){if(!navigator.onLine){if(typeof(e)=='function'){e('好的嘛，这是已经离线的节奏……')}return}var f=branch=="dev"?'http://m.myqsc.com/dev/':'http://m.myqsc.com/stable/';var j=f+c+'?stuid='+stuid+'&pwd='+pwd+'&callback=?';$.jsonP({url:j,success:function(a){if(typeof(a['code'])!="undefined"){if(a['code']==0){e(a['msg']);return}if(a['code']==1){console.log('getJson: code = 1');e(a['msg']);updateData(c,d,e)}else{console.log('getJson:未知情况');return}}else{d(a)}},error:function(){e('好的嘛，好像有什么错误？')}})}function getData(c,d,e){e=typeof(e)=='function'?e:function(a){return};d=typeof(d)=='function'?d:function(a){return};if(isTempLogin){fetchData(c,d,e)}else{var f=localStorage.getItem(c);if(!f){fetchData(c,function(a){d(a);localStorage.setItem(c,JSON.stringify(a))},e)}else{d(JSON.parse(f));fetchData(c,function(a){localStorage.setItem(c,JSON.stringify(a))})}}}function showMsg(a,c){$('#msg').show();$('#msg').html(a)}function showLogin(c){$(currentLayout).hide();$('#login').show();$('#login_form').bind("submit",function(){stuid=$("#stuid").val();pwd=$("#pwd").val();if(!isTempLogin){localStorage.setItem('stuid',stuid);localStorage.setItem('pwd',pwd)}fetchData('jw/validate',function(a){if(a['stuid']!=''){$('#login').hide();if(!isTempLogin){isLogin=true;$('#menu-login').html('注销');$('#menu-login').attr('id','menu-logout')}if(typeof(c)=='function'){c()}}else{showMsg('登录失败');stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd')}},function(a){showMsg(a);stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd')});return false})}function pleaseLoginIfNotLogin(a){if(isLogin||isTempLogin){if(typeof(a)=='function'){a()}}else{showLogin(a)}}function pad(a){return(a<10)?'0'+a.toString():a.toString()}function formatTimeDelta(a){var c=parseInt(a/3600),d=parseInt(a%3600/60);a=parseInt(a%60);return c>0?pad(c)+':'+pad(d)+':'+pad(a):pad(d)+':'+pad(a)}Date.prototype.getZjuWeek=function(){var a=[43,47,49,51,1,3,10,12,14,16,18,19,21,23,25,27],c=[44,45,46,48,50,52,2,4,9,11,13,15,17,20,22,24,26],d=this.getIsoWeek();if(a.indexOf(d)!=-1)return'odd';if(c.indexOf(d)!=-1)return'even';return null};Date.prototype.getZjuSemester=function(){var a=this.getIsoWeek();var c={"chun":[9,10,11,12,13,14,15,16,17,18],"xia":[19,20,21,22,23,24,25,26,27],"qiu":[43,44,45,46],"dong":[1,2,3,4,47,48,49,50,51,52],"hanjia":[5,6,7,8],"shujia":[28,29,30,31,32,33]};switch(true){case c.chun.indexOf(a)!=-1:return'春';case c.xia.indexOf(a)!=-1:return'夏';case c.qiu.indexOf(a)!=-1:return'秋';case c.dong.indexOf(a)!=-1:return'冬';case c.shujia.indexOf(a)!=-1:return'暑假';case c.hanjia.indexOf(a)!=-1:return'寒假';default:return false}};function getSksj(a){var c=["","08:00","08:50","09:50","10:40","11:30","13:15","14:05","14:55","15:55","16:45","18:30","19:20","20:10"];return c[a]}function getXksj(a){var c=["","08:45","09:35","10:35","11:25","12:15","14:00","14:50","15:40","16:40","17:30","19:15","20:05","20:55"];return c[a]}Date.prototype.getClassNth=function(){var a;for(a=1;a<14;a++){if(this.laterThan(getSksj(a))&&!this.laterThan(getXksj(a))){return a}}return false};Date.prototype.getClassNthNext=function(){var a,c=0;for(a=1;a<14;a++){if(this.laterThan(getSksj(a))){c=a}}c++;return c>13?false:c};function KeBiao(f,j){if(typeof(f)=="undefined"){console.warn("no data for KeBiao");f=[]}var m=j.getZjuWeek();var n=j.getZjuSemester();var o=["7","1","2","3","4","5","6"];var w=o[j.getDay()];var r,B,I;var s=[];for(var k=0,z=f.length;k<z;k++){var q=f[k]['class'];for(r=0;r<q.length;r++){var u=q[r];if(f[k]['semester'].indexOf(n)!=-1){if(u['week']==m||u['week']=='both'){if(u['weekday']==w){for(var t=0;t<u['class'].length;t++){I={'id':f[k]['id'],'name':f[k]['name'],'teacher':f[k]['teacher'],'classroom':u['place']};s[u['class'][t]]=I}}}}}}this.getCourseId=function(a){return typeof(s[a])!="undefined"?s[a]['id']:false};this.getCourseName=function(a){return typeof(s[a])!="undefined"?s[a]['name']:false};this.getClassroom=function(a){return typeof(s[a])!="undefined"?s[a]['classroom']:false};this.getTeacherName=function(a){return typeof(s[a])!="undefined"?s[a]['teacher']:false};this.getCourseHash=function(a){var c=this.getCourseId(a)+this.getClassroom(a)+this.getTeacherName(a);return c};this.getCourseTime=function(a){var c=this.getClassNthAll(a);var d=getSksj(c[0]);var e=getXksj(c[c.length-1]);return[d,e]};this.haveClass=function(){return s.length>0?true:false};this.getClassNthAll=function(a){var c=this.getCourseHash(a);var d=[];for(k=1;k<=13;k++){if(this.getCourseHash(k)==c){d.push(k)}}return d};this.getClassNext=function(a){a=a>0?a:0;for(k=a+1;k<=13;k++){if(this.getCourseName(k))return k}return false};this.getClassMaybe=function(){var a=new Date();var c;var d=a.getClassNth();if(this.getCourseName(d)&&d!=false)return d;var e=a.getClassNthNext();if(!e)return false;for(c=e;c<14;c++){if(this.getCourseName(c)!=false){return c}}return false};this.getCourseNext=function(a){a=a>0?a:0;for(k=a;k<=13;k++){k++;if(this.getCourseName(k)){while(this.getCourseHash(k+1)==this.getCourseHash(k)){k++}return k}};return false}}Date.prototype.laterThan=function(a){var c=a.split(':');var d=new Date(this);d.setHours(c[0],c[1],0);var e=this.getTime()-d.getTime();return e>0?Math.floor(e/1000):false};Date.prototype.earierThan=function(a){var c=a.split(':');var d=new Date(this);d.setHours(c[0],c[1],0);var e=d.getTime()-this.getTime();return e>0?Math.floor(e/1000):false};Date.prototype.getIsoWeek=function(){var a,c;var d=0;var e=new Date(this.getFullYear(),0,1);var f=e.getDay()-d;f=(f>=0?f:f+7);var j=Math.floor((this.getTime()-e.getTime()-(this.getTimezoneOffset()-e.getTimezoneOffset())*60000)/86400000)+1;var m;if(this.getDay()==0)j--;if(f<4){m=Math.floor((j+f-1)/7)+1;if(m>52){a=new Date(this.getFullYear()+1,0,1);c=a.getDay()-d;c=c>=0?c:c+7;m=c<4?1:53}}else{m=Math.floor((j+f-1)/7)}return m};var currentLayout='#menu';window.location.hash='';$(window).on("hashchange",function(){var a=window.location.hash.toLowerCase();if(a==''){$(currentLayout).hide();setTimeout(function(){$('#menu').show()},10);currentLayout='#menu'}else{$(currentLayout).hide();$(a).show();currentLayout=a}});$('.backward').bind("click",function(){history.back()});$('#menu').on('click','#menu > div',function(){var a=$(this).attr('id');a=a.replace(/menu-/g,'');a=a.charAt(0).toUpperCase()+a.slice(1);switch(a){case'Login':isTempLogin=false;pleaseLoginIfNotLogin(function(){$('#menu').show()});break;case'Logout':isLogin=false;localStorage.clear();$(this).html('登录');$(this).attr('id','menu-login');break;case'Tempuser':if(isTempLogin){isTempLogin=false;stuid=localStorage.getItem('stuid');pwd=localStorage.getItem('pwd');$('#menu-tempuser').html('临时登录')}else{isTempLogin=true;showLogin(function(){$('#menu').show();$('#menu-tempuser').html(stuid+"<br>注销")})}break;case'Xiaoli':case'Xiaoche':case'Config':eval('load'+a+'()');window.location.hash=a;break;default:pleaseLoginIfNotLogin(function(){eval('load'+a+'()');window.location.hash=a});break}});$('#msg').bind("click",function(){$(this).hide()});$('#wrap').on('click','.slide > div > header',function(){if($(this).parent().hasClass('show')){$(this).parent().removeClass('show');$(this).parent().addClass('hide')}else{$(this).parent().removeClass('hide');$(this).parent().addClass('show')}});var kebiaoData;getData('jw/kebiao',function(a){kebiaoData=a;displayKebiaoSummary();setInterval(function(){displayKebiaoSummary()},1000)});function displayKebiaoSummary(){if(currentLayout!='#menu'&&currentLayout!='')return;if(!isLogin&&!isTempLogin){$('#menu-kebiao').html('课表');return}var a=new Date();var c=new KeBiao(kebiaoData,a);var d=a.getClassNth();var e=c.getClassMaybe();var f;var j;if(e&&d==e){j=a.earierThan(getXksj(e))}else if(e){j=a.earierThan(getSksj(e))}else{j=0}f='<div id="countdown">'+formatTimeDelta(j)+'</div>';f+='<div id="kb-sum-place">'+c.getClassroom(e)+'</div>';f+='<div id="kb-sum-course">'+c.getCourseName(e)+'</div>';$('#menu-kebiao').html(f)}function writeClassToDom(a,c){var d='';var e=0;var f;f=new KeBiao(kebiaoData,c);if(!f.haveClass()){$(a).html('<div class="no_class">好的嘛，没有课了……</div>');return}while(e!==false){e=f.getCourseNext(e);if(f.getCourseName(e)){d+='<div class="class_name">'+f.getCourseName(e)+'</div>';d+='<div class="class_nth_all">'+f.getClassNthAll(e).join(',')+'</div>';d+='<div class="class_time">'+f.getCourseTime(e).join('-')+'</div>';d+='<div class="class_classroom">'+f.getClassroom(e)+'</div>'}}$(a).append(d)}function loadKebiao(){var a;var c=new Date();var d=new Date();d.setTime(d.getTime()+1000*3600*24);writeClassToDom('#today .detail',c);writeClassToDom('#tomorrow .detail',d);var e;var f=c.getDay()==0?c.getDay()+6:c.getDay()-1;var j=['mon','tue','wed','thu','fri','sat','sun'];for(e=0;e<7;e++){var m=new Date(c.getTime()+(e-f)*24*3600*1000);writeClassToDom('#'+j[e]+' .detail',m)}}function loadXiaoli(){if(typeof(xiaoliData)=="undefined"){(function(){getData('share/shijian',function(a){window.xiaoliData=a;loadShijian()})})()}}function loadShijian(){var a='',c='',d='';for(var e=0;e<xiaoliData.length;e++){var f=xiaoliData[e];var j=f['事件内容'];var m=f['事件类型'];var n=f['起始时间'];var o=f['终止时间'];if(m=='重要事件')a+='<li><div class="content">'+j+'</div><div class="begin">'+n+'</div><div class="end">'+o+'</div></li>';if(m=='放假')c+='<li><div class="content">'+j+'</div><div class="begin">'+n+'</div><div class="end">'+o+'</div></li>';if(m=='考试')d+='<li><div class="content">'+j+'</div><div class="begin">'+n+'</div><div class="end">'+o+'</div></li>'}$('#xiaoli_important ul').html(a);$('#xiaoli_vacation ul').html(c);$('#xiaoli_exam ul').html(d)}function loadConfig(){(function(){for(var c=0;c<config_list.length;c++){var d=config_list[c];$('#'+d).attr("class",config[d])}$('#config_items li').unbind("click");$('#config_items li').bind("click",function(){var a=$(this).attr('id');config[a]=!config[a];localStorage.setItem('config',JSON.stringify(config));$(this).attr("class",config[a])})})()}