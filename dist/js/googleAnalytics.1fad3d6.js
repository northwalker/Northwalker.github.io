!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./dist/",e(e.s=1)}([,function(t,e){!function(){function t(t){k.set(t)}function e(t){if(100!=t.get(mn)&&b(jt(t,en))%1e4>=100*It(t,mn))throw"abort"}function n(t){if(tt(jt(t,on)))throw"abort"}function i(){var t=Y.location.protocol;if("http:"!=t&&"https:"!=t)throw"abort"}function r(e){try{W.navigator.sendBeacon?t(42):W.XMLHttpRequest&&"withCredentials"in new W.XMLHttpRequest&&t(40)}catch(t){}e.set(Pe,x(e),!0),e.set(Yt,It(e,Yt)+1);var n=[];St.map(function(t,i){i.F&&void 0!=(t=e.get(t))&&t!=i.defaultValue&&("boolean"==typeof t&&(t*=1),n.push(i.F+"="+L(""+t)))}),n.push("z="+xt()),e.set(Kt,n.join("&"),!0)}function a(t){var e=jt(t,On)||dt()+"/collect",n=jt(t,Wt);if(!n&&t.get(Xt)&&(n="beacon"),n){var i=jt(t,Kt),r=t.get(Bt);r=r||A,"image"==n?mt(e,i,r):"xhr"==n&&wt(e,i,r)||"beacon"==n&&yt(e,i,r)||vt(e,i,r)}else vt(e,jt(t,Kt),t.get(Bt));e=t.get(on),e=_t(e),n=e.hitcount,e.hitcount=n?n+1:1,e=t.get(on),delete _t(e).pending_experiments,t.set(Bt,A,!0)}function o(t){(W.gaData=W.gaData||{}).expId&&t.set(Se,(W.gaData=W.gaData||{}).expId),(W.gaData=W.gaData||{}).expVar&&t.set(Ee,(W.gaData=W.gaData||{}).expVar);var e=t.get(on);if(e=_t(e).pending_experiments){var n=[];for(i in e)e.hasOwnProperty(i)&&e[i]&&n.push(encodeURIComponent(i)+"."+encodeURIComponent(e[i]));var i=n.join("!")}else i=void 0;i&&t.set(je,i,!0)}function s(){if(W.navigator&&"preview"==W.navigator.loadPurpose)throw"abort"}function c(t){var e=W.gaDevIds;E(e)&&0!=e.length&&t.set("&did",e.join(","),!0)}function u(t){if(!t.get(on))throw"abort"}function l(e){var n=It(e,Ne);500<=n&&t(15);var i=jt(e,zt);if("transaction"!=i&&"item"!=i){i=It(e,Le);var r=(new Date).getTime(),a=It(e,Ae);if(0==a&&e.set(Ae,r),a=Math.round(2*(r-a)/1e3),0<a&&(i=Math.min(i+a,20),e.set(Ae,r)),0>=i)throw"abort";e.set(Le,--i)}e.set(Ne,++n)}function f(e,n,i,r){n[e]=function(){try{return r&&t(r),i.apply(this,arguments)}catch(t){throw bt("exc",e,t&&t.name),t}}}function h(){var t,e;if((e=(e=W.navigator)?e.plugins:null)&&e.length)for(var n=0;n<e.length&&!t;n++){var i=e[n];-1<i.name.indexOf("Shockwave Flash")&&(t=i.description)}if(!t)try{var r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");t=r.GetVariable("$version")}catch(t){}if(!t)try{r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),t="WIN 6,0,21,0",r.AllowScriptAccess="always",t=r.GetVariable("$version")}catch(t){}if(!t)try{r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),t=r.GetVariable("$version")}catch(t){}return t&&(r=t.match(/[\d]+/g))&&3<=r.length&&(t=r[0]+"."+r[1]+" r"+r[2]),t||void 0}function g(t,e,n){"none"==e&&(e="");var i=[],r=et(t);t="__utma"==t?6:2;for(var a=0;a<r.length;a++){var o=(""+r[a]).split(".");o.length>=t&&i.push({hash:o[0],R:r[a],O:o})}if(0!=i.length)return 1==i.length?i[0]:d(e,i)||d(n,i)||d(null,i)||i[0]}function d(t,e){if(null==t)var n=t=1;else n=b(t),t=b(I(t,".")?t.substring(1):"."+t);for(var i=0;i<e.length;i++)if(e[i].hash==n||e[i].hash==t)return e[i]}function p(t){var e=t.get(en);return t=t.get(bn)||"","_ga=2."+L(m(t+e,0)+"."+t+"-"+e)}function v(t,e){var n=new Date,i=W.navigator,r=i.plugins||[];for(t=[t,i.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],e=0;e<r.length;++e)t.push(r[e].description);return b(t.join("."))}function m(t,e){var n=new Date,i=W.navigator,r=n.getHours()+Math.floor((n.getMinutes()+e)/60);return b([t,i.userAgent,i.language||"",n.getTimezoneOffset(),n.getYear(),n.getDate()+Math.floor(r/24),(24+r)%24,(60+n.getMinutes()+e)%60].join("."))}function w(t,e){if(e==Y.location.hostname)return!1;for(var n=0;n<t.length;n++)if(t[n]instanceof RegExp){if(t[n].test(e))return!0}else if(0<=e.indexOf(t[n]))return!0;return!1}function y(t){return 0<=t.indexOf(".")||0<=t.indexOf(":")}function b(t){var e,n=1;if(t)for(n=0,e=t.length-1;0<=e;e--){var i=t.charCodeAt(e);n=(n<<6&268435455)+i+(i<<14),i=266338304&n,n=0!=i?n^i>>21:n}return n}var _=function(t){this.w=t||[]};_.prototype.set=function(t){this.w[t]=!0},_.prototype.encode=function(){for(var t=[],e=0;e<this.w.length;e++)this.w[e]&&(t[Math.floor(e/6)]^=1<<e%6);for(e=0;e<t.length;e++)t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);return t.join("")+"~"};var k=new _,O=function(t,e){var n=new _(T(t));n.set(e),t.set($e,n.w)},x=function(t){t=T(t),t=new _(t);for(var e=k.w.slice(),n=0;n<t.w.length;n++)e[n]=e[n]||t.w[n];return new _(e).encode()},T=function(t){return t=t.get($e),E(t)||(t=[]),t},S=function(t){return"function"==typeof t},E=function(t){return"[object Array]"==Object.prototype.toString.call(Object(t))},j=function(t){return void 0!=t&&-1<(t.constructor+"").indexOf("String")},I=function(t,e){return 0==t.indexOf(e)},C=function(t){return t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):""},R=function(){for(var t=W.navigator.userAgent+(Y.cookie?Y.cookie:"")+(Y.referrer?Y.referrer:""),e=t.length,n=W.history.length;0<n;)t+=n--^e++;return[Ot()^2147483647&b(t),Math.round((new Date).getTime()/1e3)].join(".")},N=function(t){var e=Y.createElement("img");return e.width=1,e.height=1,e.src=t,e},A=function(){},L=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(t(28),e)},P=function(e,n,i,r){try{e.addEventListener?e.addEventListener(n,i,!!r):e.attachEvent&&e.attachEvent("on"+n,i)}catch(e){t(27)}},$=/^[\w\-:\/.?=&%!]+$/,D=function(t,e,n,i){t&&(n?(i="",e&&$.test(e)&&(i=' id="'+e+'"'),$.test(t)&&Y.write("<script"+i+' src="'+t+'"><\/script>')):(n=Y.createElement("script"),n.type="text/javascript",n.async=!0,n.src=t,i&&(n.onload=i),e&&(n.id=e),t=Y.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)))},M=function(){return"https:"==Y.location.protocol},U=function(t,e){return(t=t.match("(?:&|#|\\?)"+L(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)"))&&2==t.length?t[1]:""},G=function(){var t=""+Y.location.hostname;return 0==t.indexOf("www.")?t.substring(4):t},V=function(t,e){var n=t.indexOf(e);return!(5!=n&&6!=n||"/"!=(t=t.charAt(n+e.length))&&"?"!=t&&""!=t&&":"!=t)},F=function(t,e){var n=Y.referrer;if(/^https?:\/\//i.test(n)){if(t)return n;if(t="//"+Y.location.hostname,!V(n,t))return e&&(e=t.replace(/\./g,"-")+".cdn.ampproject.org",V(n,e))?void 0:n}},H=function(t,e){if(1==e.length&&null!=e[0]&&"object"==typeof e[0])return e[0];for(var n={},i=Math.min(t.length+1,e.length),r=0;r<i;r++){if("object"==typeof e[r]){for(var a in e[r])e[r].hasOwnProperty(a)&&(n[a]=e[r][a]);break}r<t.length&&(n[t[r]]=e[r])}return n},q=function(){this.keys=[],this.values={},this.m={}};q.prototype.set=function(t,e,n){this.keys.push(t),n?this.m[":"+t]=e:this.values[":"+t]=e},q.prototype.get=function(t){return this.m.hasOwnProperty(":"+t)?this.m[":"+t]:this.values[":"+t]},q.prototype.map=function(t){for(var e=0;e<this.keys.length;e++){var n=this.keys[e],i=this.get(n);i&&t(n,i)}};var z,B,K,X,W=window,Y=document,J=function(t,e){return setTimeout(t,e)},Z=window,Q=document,tt=function(t){var e=Z._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===Z["ga-disable-"+t])return!0;try{var n=Z.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs)return!0}catch(t){}t=[],e=Q.cookie.split(";"),n=/^\s*AMP_TOKEN=\s*(.*?)\s*$/;for(var i=0;i<e.length;i++){var r=e[i].match(n);r&&t.push(r[1])}for(e=0;e<t.length;e++)if("$OPT_OUT"==decodeURIComponent(t[e]))return!0;return!1},et=function(t){var e=[],n=Y.cookie.split(";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var i=0;i<n.length;i++){var r=n[i].match(t);r&&e.push(r[1])}return e},nt=function(e,n,i,r,a,o){if(!(a=!tt(a)&&!(at.test(Y.location.hostname)||"/"==i&&rt.test(r))))return!1;if(n&&1200<n.length&&(n=n.substring(0,1200),t(24)),i=e+"="+n+"; path="+i+"; ",o&&(i+="expires="+new Date((new Date).getTime()+o).toGMTString()+"; "),r&&"none"!=r&&(i+="domain="+r+";"),r=Y.cookie,Y.cookie=i,!(r=r!=Y.cookie))t:{for(e=et(e),r=0;r<e.length;r++)if(n==e[r]){r=!0;break t}r=!1}return r},it=function(t){return L(t).replace(/\(/g,"%28").replace(/\)/g,"%29")},rt=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,at=/(^|\.)doubleclick\.net$/i,ot=/^https?:\/\/[^\/]*cdn\.ampproject\.org\//,st=[],ct=function(){Li.D([A])},ut=function(e,n){var i=et("AMP_TOKEN");return 1<i.length?(t(55),!1):"$OPT_OUT"==(i=decodeURIComponent(i[0]||""))||"$ERROR"==i||tt(n)?(t(62),!1):ot.test(Y.referrer)||"$NOT_FOUND"!=i?void 0!==X?(t(56),J(function(){e(X)},0),!0):z?(st.push(e),!0):"$RETRIEVING"==i?(t(57),J(function(){ut(e,n)},1e3),!0):(z=!0,i&&"$"!=i[0]||(ht("$RETRIEVING",3e4),setTimeout(ft,3e4),i=""),!!lt(i)&&(st.push(e),!0)):(t(68),!1)},lt=function(e){if(!window.JSON)return t(58),!1;var n=W.XMLHttpRequest;if(!n)return t(59),!1;var i=new n;return"withCredentials"in i?(i.open("POST","https://ampcid.google.com/v1/publisher:getClientId?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",!0),i.withCredentials=!0,i.setRequestHeader("Content-Type","text/plain"),i.onload=function(){if(z=!1,4==i.readyState){try{200!=i.status&&(t(61),gt("","$ERROR",3e4));var e=JSON.parse(i.responseText);e.optOut?(t(63),gt("","$OPT_OUT",31536e6)):e.clientId?gt(e.clientId,e.securityToken,31536e6):(t(64),gt("","$NOT_FOUND",36e5))}catch(e){t(65),gt("","$ERROR",3e4)}i=null}},n={originScope:"AMP_ECID_GOOGLE"},e&&(n.securityToken=e),i.send(JSON.stringify(n)),B=J(function(){t(66),gt("","$ERROR",3e4)},1e3),!0):(t(60),!1)},ft=function(){z=!1},ht=function(t,e){if(void 0===K){K="";for(var n=Hn(),i=0;i<n.length;i++){var r=n[i];if(nt("AMP_TOKEN",encodeURIComponent(t),"/",r,"",e))return void(K=r)}}nt("AMP_TOKEN",encodeURIComponent(t),"/",K,"",e)},gt=function(t,e,n){for(B&&clearTimeout(B),e&&ht(e,n),X=t,e=st,st=[],n=0;n<e.length;n++)e[n](t)},dt=function(){return(Vt||M()?"https:":"http:")+"//www.google-analytics.com"},pt=function(t){this.name="len",this.message=t+"-8192"},vt=function(t,e,n){if(n=n||A,2036>=e.length)mt(t,e,n);else{if(!(8192>=e.length))throw bt("len",e.length),new pt(e.length);yt(t,e,n)||wt(t,e,n)||mt(t,e,n)}},mt=function(t,e,n){var i=N(t+"?"+e);i.onload=i.onerror=function(){i.onload=null,i.onerror=null,n()}},wt=function(t,e,n){var i=W.XMLHttpRequest;if(!i)return!1;var r=new i;return"withCredentials"in r&&(t=t.replace(/^http:/,"https:"),r.open("POST",t,!0),r.withCredentials=!0,r.setRequestHeader("Content-Type","text/plain"),r.onreadystatechange=function(){4==r.readyState&&(n(),r=null)},r.send(e),!0)},yt=function(t,e,n){return!!W.navigator.sendBeacon&&(!!W.navigator.sendBeacon(t,e)&&(n(),!0))},bt=function(t,e,n){1<=100*Math.random()||tt("?")||(t=["t=error","_e="+t,"_v=j60","sr=1"],e&&t.push("_f="+e),n&&t.push("_m="+L(n.substring(0,100))),t.push("aip=1"),t.push("z="+Ot()),mt(dt()+"/collect",t.join("&"),A))},_t=function(t){var e=W.gaData=W.gaData||{};return e[t]=e[t]||{}},kt=function(){this.M=[]};kt.prototype.add=function(t){this.M.push(t)},kt.prototype.D=function(t){try{for(var e=0;e<this.M.length;e++){var n=t.get(this.M[e]);n&&S(n)&&n.call(W,t)}}catch(t){}(e=t.get(Bt))!=A&&S(e)&&(t.set(Bt,A,!0),setTimeout(e,10))};var Ot=function(){return Math.round(2147483647*Math.random())},xt=function(){try{var t=new Uint32Array(1);return W.crypto.getRandomValues(t),2147483647&t[0]}catch(t){return Ot()}},Tt=function(){this.data=new q},St=new q,Et=[];Tt.prototype.get=function(t){var e=Nt(t),n=this.data.get(t);return e&&void 0==n&&(n=S(e.defaultValue)?e.defaultValue():e.defaultValue),e&&e.Z?e.Z(this,t,n):n};var jt=function(t,e){return t=t.get(e),void 0==t?"":""+t},It=function(t,e){return t=t.get(e),void 0==t||""===t?0:1*t};Tt.prototype.set=function(t,e,n){if(t)if("object"==typeof t)for(var i in t)t.hasOwnProperty(i)&&Ct(this,i,t[i],n);else Ct(this,t,e,n)};var Ct=function(t,e,n,i){if(void 0!=n)switch(e){case on:pi.test(n)}var r=Nt(e);r&&r.o?r.o(t,e,n,i):t.data.set(e,n,i)},Rt=function(t,e,n,i,r){this.name=t,this.F=e,this.Z=i,this.o=r,this.defaultValue=n},Nt=function(t){var e=St.get(t);if(!e)for(var n=0;n<Et.length;n++){var i=Et[n],r=i[0].exec(t);if(r){e=i[1](r),St.set(e.name,e);break}}return e},At=function(t){var e;return St.map(function(n,i){i.F==t&&(e=i)}),e&&e.name},Lt=function(t,e,n,i,r){return t=new Rt(t,e,n,i,r),St.set(t.name,t),t.name},Pt=function(t,e){Et.push([new RegExp("^"+t+"$"),e])},$t=function(t,e,n){return Lt(t,e,n,void 0,Dt)},Dt=function(){},Mt=j(window.GoogleAnalyticsObject)&&C(window.GoogleAnalyticsObject)||"ga",Ut=/^(?:utma\.)?\d+\.\d+$/,Gt=/^amp-[\w.-]{22,64}$/,Vt=!1,Ft=$t("apiVersion","v"),Ht=$t("clientVersion","_v");Lt("anonymizeIp","aip");var qt=Lt("adSenseId","a"),zt=Lt("hitType","t"),Bt=Lt("hitCallback"),Kt=Lt("hitPayload");Lt("nonInteraction","ni"),Lt("currencyCode","cu"),Lt("dataSource","ds");var Xt=Lt("useBeacon",void 0,!1),Wt=Lt("transport");Lt("sessionControl","sc",""),Lt("sessionGroup","sg"),Lt("queueTime","qt");var Yt=Lt("_s","_s");Lt("screenName","cd");var Jt=Lt("location","dl",""),Zt=Lt("referrer","dr"),Qt=Lt("page","dp","");Lt("hostname","dh");var te=Lt("language","ul"),ee=Lt("encoding","de");Lt("title","dt",function(){return Y.title||void 0}),Pt("contentGroup([0-9]+)",function(t){return new Rt(t[0],"cg"+t[1])});var ne=Lt("screenColors","sd"),ie=Lt("screenResolution","sr"),re=Lt("viewportSize","vp"),ae=Lt("javaEnabled","je"),oe=Lt("flashVersion","fl");Lt("campaignId","ci"),Lt("campaignName","cn"),Lt("campaignSource","cs"),Lt("campaignMedium","cm"),Lt("campaignKeyword","ck"),Lt("campaignContent","cc");var se=Lt("eventCategory","ec"),ce=Lt("eventAction","ea"),ue=Lt("eventLabel","el"),le=Lt("eventValue","ev"),fe=Lt("socialNetwork","sn"),he=Lt("socialAction","sa"),ge=Lt("socialTarget","st"),de=Lt("l1","plt"),pe=Lt("l2","pdt"),ve=Lt("l3","dns"),me=Lt("l4","rrt"),we=Lt("l5","srt"),ye=Lt("l6","tcp"),be=Lt("l7","dit"),_e=Lt("l8","clt"),ke=Lt("timingCategory","utc"),Oe=Lt("timingVar","utv"),xe=Lt("timingLabel","utl"),Te=Lt("timingValue","utt");Lt("appName","an"),Lt("appVersion","av",""),Lt("appId","aid",""),Lt("appInstallerId","aiid",""),Lt("exDescription","exd"),Lt("exFatal","exf");var Se=Lt("expId","xid"),Ee=Lt("expVar","xvar"),je=Lt("exp","exp"),Ie=Lt("_utma","_utma"),Ce=Lt("_utmz","_utmz"),Re=Lt("_utmht","_utmht"),Ne=Lt("_hc",void 0,0),Ae=Lt("_ti",void 0,0),Le=Lt("_to",void 0,20);Pt("dimension([0-9]+)",function(t){return new Rt(t[0],"cd"+t[1])}),Pt("metric([0-9]+)",function(t){return new Rt(t[0],"cm"+t[1])}),Lt("linkerParam",void 0,void 0,p,Dt);var Pe=Lt("usage","_u"),$e=Lt("_um");Lt("forceSSL",void 0,void 0,function(){return Vt},function(e,n,i){t(34),Vt=!!i});var De=Lt("_j1","jid"),Me=Lt("_j2","gjid");Pt("\\&(.*)",function(t){var e=new Rt(t[0],t[1]),n=At(t[0].substring(1));return n&&(e.Z=function(t){return t.get(n)},e.o=function(t,e,i,r){t.set(n,i,r)},e.F=void 0),e});var Ue=$t("_oot"),Ge=Lt("previewTask"),Ve=Lt("checkProtocolTask"),Fe=Lt("validationTask"),He=Lt("checkStorageTask"),qe=Lt("historyImportTask"),ze=Lt("samplerTask"),Be=Lt("_rlt"),Ke=Lt("buildHitTask"),Xe=Lt("sendHitTask"),We=Lt("ceTask"),Ye=Lt("devIdTask"),Je=Lt("timingTask"),Ze=Lt("displayFeaturesTask"),Qe=Lt("customTask"),tn=$t("name"),en=$t("clientId","cid"),nn=$t("clientIdTime"),rn=$t("storedClientId"),an=Lt("userId","uid"),on=$t("trackingId","tid"),sn=$t("cookieName",void 0,"_ga"),cn=$t("cookieDomain"),un=$t("cookiePath",void 0,"/"),ln=$t("cookieExpires",void 0,63072e3),fn=$t("cookieUpdate",void 0,!0),hn=$t("legacyCookieDomain"),gn=$t("legacyHistoryImport",void 0,!0),dn=$t("storage",void 0,"cookie"),pn=$t("allowLinker",void 0,!1),vn=$t("allowAnchor",void 0,!0),mn=$t("sampleRate","sf",100),wn=$t("siteSpeedSampleRate",void 0,1),yn=$t("alwaysSendReferrer",void 0,!1),bn=$t("_gid","_gid"),_n=$t("_gcn"),kn=$t("useAmpClientId"),On=Lt("transportUrl"),xn=Lt("_r","_r"),Tn=function(t,e){this.V=1e4,this.fa=t,this.$=!1,this.oa=e,this.ea=1},Sn=function(t,e){var n;if(t.fa&&t.$)return 0;if(t.$=!0,e){if(t.oa&&It(e,t.oa))return It(e,t.oa);if(0==e.get(wn))return 0}return 0==t.V?0:(void 0===n&&(n=xt()),0==n%t.V?Math.floor(n/t.V)%t.ea+1:0)},En=function(t){var e=Math.min(It(t,wn),100);return!(b(jt(t,en))%100>=e)},jn=function(t){var e={};if(In(e)||Cn(e)){var n=e[de];void 0==n||1/0==n||isNaN(n)||(0<n?(Rn(e,ve),Rn(e,ye),Rn(e,we),Rn(e,pe),Rn(e,me),Rn(e,be),Rn(e,_e),J(function(){t(e)},10)):P(W,"load",function(){jn(t)},!1))}},In=function(t){var e=W.performance||W.webkitPerformance;if(!(e=e&&e.timing))return!1;var n=e.navigationStart;return 0!=n&&(t[de]=e.loadEventStart-n,t[ve]=e.domainLookupEnd-e.domainLookupStart,t[ye]=e.connectEnd-e.connectStart,t[we]=e.responseStart-e.requestStart,t[pe]=e.responseEnd-e.responseStart,t[me]=e.fetchStart-n,t[be]=e.domInteractive-n,t[_e]=e.domContentLoadedEventStart-n,!0)},Cn=function(t){if(W.top!=W)return!1;var e=W.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),2147483648<n&&(n=void 0),0<n&&e.setPageReadyTime(),void 0!=n&&(t[de]=n,!0)},Rn=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0)},Nn=function(t){return function(e){if("pageview"==e.get(zt)&&!t.I){t.I=!0;var n=En(e),i=0<U(e.get(Jt),"gclid").length;(n||i)&&jn(function(e){n&&t.send("timing",e),i&&t.send("adtiming",e)})}}},An=!1,Ln=function(t){if("cookie"==jt(t,dn)){if(t.get(fn)||jt(t,rn)!=jt(t,en)){var e=1e3*It(t,ln);Pn(t,en,sn,e)}Pn(t,bn,_n,864e5)}},Pn=function(e,n,i,r){var a=Mn(e,n);if(a){i=jt(e,i);var o=qn(jt(e,un)),s=Fn(jt(e,cn)),c=jt(e,on);if("auto"!=s)nt(i,a,o,s,c,r)&&(An=!0);else{t(32);for(var u=Hn(),l=0;l<u.length;l++)if(s=u[l],e.data.set(cn,s),a=Mn(e,n),nt(i,a,o,s,c,r))return void(An=!0);e.data.set(cn,"auto")}}},$n=function(t){if("cookie"==jt(t,dn)&&!An&&(Ln(t),!An))throw"abort"},Dn=function(e){if(e.get(gn)){var n=jt(e,cn),i=jt(e,hn)||G(),r=g("__utma",i,n);r&&(t(19),e.set(Re,(new Date).getTime(),!0),e.set(Ie,r.R),(n=g("__utmz",i,n))&&r.hash==n.hash&&e.set(Ce,n.R))}},Mn=function(t,e){e=it(jt(t,e));var n=Fn(jt(t,cn)).split(".").length;return t=zn(jt(t,un)),1<t&&(n+="-"+t),e?["GA1",n,e].join("."):""},Un=function(t,e){return Gn(e,jt(t,cn),jt(t,un))},Gn=function(e,n,i){if(!e||1>e.length)t(12);else{for(var r=[],a=0;a<e.length;a++){var o=e[a],s=o.split("."),c=s.shift();("GA1"==c||"1"==c)&&1<s.length?(o=s.shift().split("-"),1==o.length&&(o[1]="1"),o[0]*=1,o[1]*=1,s={H:o,s:s.join(".")}):s=Gt.test(o)?{H:[0,0],s:o}:void 0,s&&r.push(s)}if(1==r.length)return t(13),r[0].s;if(0!=r.length)return t(14),r=Vn(r,Fn(n).split(".").length,0),1==r.length?r[0].s:(r=Vn(r,zn(i),1),1<r.length&&t(41),r[0]&&r[0].s);t(12)}},Vn=function(t,e,n){for(var i,r=[],a=[],o=0;o<t.length;o++){var s=t[o];s.H[n]==e?r.push(s):void 0==i||s.H[n]<i?(a=[s],i=s.H[n]):s.H[n]==i&&a.push(s)}return 0<r.length?r:a},Fn=function(t){return 0==t.indexOf(".")?t.substr(1):t},Hn=function(){var t=[],e=G().split(".");if(4==e.length){var n=e[e.length-1];if(parseInt(n,10)==n)return["none"]}for(n=e.length-2;0<=n;n--)t.push(e.slice(n).join("."));return t.push("none"),t},qn=function(t){return t?(1<t.length&&t.lastIndexOf("/")==t.length-1&&(t=t.substr(0,t.length-1)),0!=t.indexOf("/")&&(t="/"+t),t):"/"},zn=function(t){return t=qn(t),"/"==t?1:t.split("/").length},Bn=new RegExp(/^https?:\/\/([^\/:]+)/),Kn=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,Xn=function(e){t(48),this.target=e,this.T=!1};Xn.prototype.ca=function(t,e){if(t.tagName){if("a"==t.tagName.toLowerCase())return void(t.href&&(t.href=Wn(this,t.href,e)));if("form"==t.tagName.toLowerCase())return Yn(this,t)}if("string"==typeof t)return Wn(this,t,e)};var Wn=function(t,e,n){var i=Kn.exec(e);i&&3<=i.length&&(e=i[1]+(i[3]?i[2]+i[3]:"")),t=t.target.get("linkerParam");var r=e.indexOf("?");return i=e.indexOf("#"),n?e+=(-1==i?"#":"&")+t:(n=-1==r?"?":"&",e=-1==i?e+(n+t):e.substring(0,i)+n+t+e.substring(i)),e=e.replace(/&+_ga=/,"&_ga=")},Yn=function(t,e){if(e&&e.action)if("get"==e.method.toLowerCase()){t=t.target.get("linkerParam").split("=")[1];for(var n=e.childNodes||[],i=0;i<n.length;i++)if("_ga"==n[i].name)return void n[i].setAttribute("value",t);n=Y.createElement("input"),n.setAttribute("type","hidden"),n.setAttribute("name","_ga"),n.setAttribute("value",t),e.appendChild(n)}else"post"==e.method.toLowerCase()&&(e.action=Wn(t,e.action))};Xn.prototype.S=function(e,n,i){function r(i){try{i=i||W.event;t:{var r=i.target||i.srcElement;for(i=100;r&&0<i;){if(r.href&&r.nodeName.match(/^a(?:rea)?$/i)){var o=r;break t}r=r.parentNode,i--}o={}}("http:"==o.protocol||"https:"==o.protocol)&&w(e,o.hostname||"")&&o.href&&(o.href=Wn(a,o.href,n))}catch(e){t(26)}}var a=this;this.T||(this.T=!0,P(Y,"mousedown",r,!1),P(Y,"keyup",r,!1)),i&&P(Y,"submit",function(t){if(t=t||W.event,(t=t.target||t.srcElement)&&t.action){var n=t.action.match(Bn);n&&w(e,n[1])&&Yn(a,t)}})};var Jn,Zn=/^(GTM|OPT)-[A-Z0-9]+$/,Qn=/;_gaexp=[^;]*/g,ti=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,ei=/^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,ni=function(t){function e(t,e){e&&(n+="&"+t+"="+L(e))}var n="https://www.google-analytics.com/gtm/js?id="+L(t.id);return"dataLayer"!=t.B&&e("l",t.B),e("t",t.target),e("cid",t.clientId),e("cidt",t.ka),e("gac",t.la),e("aip",t.ia),t.sync&&e("m","sync"),e("cycle",t.G),t.qa&&e("gclid",t.qa),ei.test(Y.referrer)&&e("cb",String(Ot())),n},ii=function(t,e,n){this.U=De,this.aa=e,(e=n)||(e=(e=jt(t,tn))&&"t0"!=e?ci.test(e)?"_gat_"+it(jt(t,on)):"_gat_"+it(e):"_gat"),this.Y=e},ri=function(t,e){var n=e.get(Ke);e.set(Ke,function(e){ai(t,e,t.U),ai(t,e,Me);var i=n(e);return oi(t,e),i});var i=e.get(Xe);e.set(Xe,function(e){var n=i(e);return si(t,e),n})},ai=function(t,e,n){e.get(n)||("1"==et(t.Y)[0]?e.set(n,"",!0):e.set(n,""+Ot(),!0))},oi=function(t,e){e.get(t.U)&&nt(t.Y,"1",e.get(un),e.get(cn),e.get(on),6e4)},si=function(t,e){if(e.get(t.U)){var n=new q,i=function(t){Nt(t).F&&n.set(Nt(t).F,e.get(t))};i(Ft),i(Ht),i(on),i(en),i(an),i(t.U),i(Me),i(bn),n.set(Nt(Pe).F,x(e));var r=t.aa;n.map(function(t,e){r+=L(t)+"=",r+=L(""+e)+"&"}),r+="z="+Ot(),N(r),e.set(t.U,"",!0)}},ci=/^gtm\d+$/,ui=function(t,e){if(t=t.b,!t.get("dcLoaded")){O(t,29),e=e||{};var n;e[sn]&&(n=it(e[sn])),e=new ii(t,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",n),ri(e,t),t.set("dcLoaded",!0)}},li=function(t){if(!t.get("dcLoaded")&&"cookie"==t.get(dn)){O(t,51);var e=new ii(t);ai(e,t,e.U),ai(e,t,Me),oi(e,t),t.get(e.U)&&(t.set(xn,1,!0),t.set(On,dt()+"/r/collect",!0))}},fi=function(){var t=W.gaGlobal=W.gaGlobal||{};return t.hid=t.hid||Ot()},hi=function(t,e,n){if(!Jn){var i=Y.location.hash,r=W.name,a=/^#?gaso=([^&]*)/;(r=(i=(i=i&&i.match(a)||r&&r.match(a))?i[1]:et("GASO")[0]||"")&&i.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(nt("GASO",""+i,n,e,t,0),window._udo||(window._udo=e),window._utcp||(window._utcp=n),t=r[1],D("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+Ot(),"_gasojs")),Jn=!0}},gi=function(t){return t?(1*t).toFixed(3):"0"},di=function(e){var n=W.performance;if(n&&n.getEntriesByName){t(35);var i="https://www.google-analytics.com/analytics.js?wpid="+e;D(i,void 0,void 0,function(){try{var r=1,a=n.getEntriesByName("https://www.google-analytics.com/analytics.js");a&&0!=a.length||(a=n.getEntriesByName("http://www.google-analytics.com/analytics.js"),r=0);var o=n.getEntriesByName(i);if(a&&1==a.length&&o&&1==o.length){t(37);var s=a[0],c=o[0],u={tid:e,ad:gi(s.duration),bd:gi(c.duration),ar:gi(s.responseEnd-s.requestStart),br:gi(c.responseEnd-c.requestStart),an:gi(s.domainLookupEnd-s.domainLookupStart),bn:gi(c.domainLookupEnd-c.domainLookupStart),ac:gi(s.connectEnd-s.connectStart),bc:gi(c.connectEnd-c.connectStart),as:r};r=[],r.push("_v=j60"),r.push("id=10");for(var l in u)u.hasOwnProperty(l)&&r.push(l+"="+L(u[l]));r.push("z="+Ot()),mt("https://www.google-analytics.com/u/d",r.join("&"),A)}}catch(t){}})}},pi=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,vi=function(f){function h(t,e){d.b.data.set(t,e)}function g(t,e){h(t,e),d.filters.add(t)}var d=this;this.b=new Tt,this.filters=new kt,h(tn,f[tn]),h(on,C(f[on])),h(sn,f[sn]),h(cn,f[cn]||G()),h(un,f[un]),h(ln,f[ln]),h(fn,f[fn]),h(hn,f[hn]),h(gn,f[gn]),h(pn,f[pn]),h(vn,f[vn]),h(mn,f[mn]),h(wn,f[wn]),h(yn,f[yn]),h(dn,f[dn]),h(an,f[an]),h(nn,f[nn]),h(kn,f[kn]),h(Ft,1),h(Ht,"j60"),g(Ue,n),g(Qe,A),g(Ge,s),g(Ve,i),g(Fe,u),g(He,$n),g(qe,Dn),g(ze,e),g(Be,l),g(We,o),g(Ye,c),g(Ze,li),g(Ke,r),g(Xe,a),g(Je,Nn(this)),mi(this.b,f[en]),wi(this.b),this.b.set(qt,fi()),hi(this.b.get(on),this.b.get(cn),this.b.get(un)),this.ra=new Tn(!0,"gaexp10"),function(){if(Sn(new Tn(!0,"gacookie14"),d.b)){var e=et("_gclid");e&&0<e.length&&t(44)}}()},mi=function(e,n){var i=jt(e,sn);if(e.data.set(_n,"_ga"==i?"_gid":i+"_gid"),"cookie"==jt(e,dn)){if(An=!1,i=et(jt(e,sn)),!(i=Un(e,i))){i=jt(e,cn);var r=jt(e,hn)||G();i=g("__utma",r,i),void 0!=i?(t(10),i=i.O[1]+"."+i.O[2]):i=void 0}if(i&&(An=!0),r=i&&!e.get(fn))if(r=i.split("."),2!=r.length)r=!1;else if(r=Number(r[1])){var a=It(e,ln);r=r+a<(new Date).getTime()/1e3}else r=!1;r&&(i=void 0),i&&(e.data.set(rn,i),e.data.set(en,i),i=et(jt(e,_n)),(i=Un(e,i))&&e.data.set(bn,i))}if(e.get(fn))t:if(i=e.get(vn),r=U(Y.location[i?"href":"search"],"_ga"))if(e.get(pn))if(-1==(i=r.indexOf(".")))t(22);else{a=r.substring(0,i);var o=r.substring(i+1);if(i=o.indexOf("."),r=o.substring(0,i),o=o.substring(i+1),"1"==a){if(i=o,r!=v(i,0)&&r!=v(i,-1)&&r!=v(i,-2)&&r!=m(i,0)&&r!=m(i,-1)&&r!=m(i,-2)){t(23);break t}}else{if("2"!=a){t(22);break t}if(i=o.indexOf("-"),a="",0<i?(a=o.substring(0,i),i=o.substring(i+1)):i=o.substring(1),r!=v(a+i,0)&&r!=v(a+i,-1)&&r!=v(a+i,-2)&&r!=m(a+i,0)&&r!=m(a+i,-1)&&r!=m(a+i,-2)){t(53);break t}a&&(t(2),e.data.set(bn,a))}t(11),e.data.set(en,i)}else t(21);n&&(t(9),e.data.set(en,L(n))),e.get(en)||((n=(n=W.gaGlobal&&W.gaGlobal.vid)&&-1!=n.search(Ut)?n:void 0)?(t(17),e.data.set(en,n)):(t(8),e.data.set(en,R()))),e.get(bn)||(t(3),e.data.set(bn,R())),Ln(e)},wi=function(e){var n=W.navigator,i=W.screen,r=Y.location;if(e.set(Zt,F(e.get(yn),e.get(kn))),r){var a=r.pathname||"";"/"!=a.charAt(0)&&(t(31),a="/"+a),e.set(Jt,r.protocol+"//"+r.hostname+a+r.search)}i&&e.set(ie,i.width+"x"+i.height),i&&e.set(ne,i.colorDepth+"-bit"),i=Y.documentElement;var o=(a=Y.body)&&a.clientWidth&&a.clientHeight,s=[];if(i&&i.clientWidth&&i.clientHeight&&("CSS1Compat"===Y.compatMode||!o)?s=[i.clientWidth,i.clientHeight]:o&&(s=[a.clientWidth,a.clientHeight]),i=0>=s[0]||0>=s[1]?"":s.join("x"),e.set(re,i),e.set(oe,h()),e.set(ee,Y.characterSet||Y.charset),e.set(ae,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),e.set(te,(n&&(n.language||n.browserLanguage)||"").toLowerCase()),r&&e.get(vn)&&(n=Y.location.hash)){for(n=n.split(/[?&#]+/),r=[],i=0;i<n.length;++i)(I(n[i],"utm_id")||I(n[i],"utm_campaign")||I(n[i],"utm_source")||I(n[i],"utm_medium")||I(n[i],"utm_term")||I(n[i],"utm_content")||I(n[i],"gclid")||I(n[i],"dclid")||I(n[i],"gclsrc"))&&r.push(n[i]);0<r.length&&(n="#"+r.join("&"),e.set(Jt,e.get(Jt)+n))}};vi.prototype.get=function(t){return this.b.get(t)},vi.prototype.set=function(t,e){this.b.set(t,e)};var yi={pageview:[Qt],event:[se,ce,ue,le],social:[fe,he,ge],timing:[ke,Oe,Te,xe]};vi.prototype.send=function(t){if(!(1>arguments.length)){if("string"==typeof arguments[0])var e=arguments[0],n=[].slice.call(arguments,1);else e=arguments[0]&&arguments[0][zt],n=arguments;e&&(n=H(yi[e]||[],n),n[zt]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b.data.m={},Sn(this.ra,this.b)&&di(this.b.get(on)))}},vi.prototype.ma=function(t,e){var n=this;ji(t,n,e)||(Ci(t,function(){ji(t,n,e)}),Ii(String(n.get(tn)),t,void 0,e,!0))};var bi,_i,ki,Oi,xi=function(t){return"prerender"!=Y.visibilityState&&(t(),!0)},Ti=function(e){if(!xi(e)){t(16);var n=!1,i=function(){if(!n&&xi(e)){n=!0;var t=i,r=Y;r.removeEventListener?r.removeEventListener("visibilitychange",t,!1):r.detachEvent&&r.detachEvent("onvisibilitychange",t)}};P(Y,"visibilitychange",i)}},Si=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,Ei=function(t){if(S(t[0]))this.u=t[0];else{var e=Si.exec(t[0]);if(null!=e&&4==e.length&&(this.c=e[1]||"t0",this.K=e[2]||"",this.C=e[3],this.a=[].slice.call(t,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(j(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.C)throw"abort";if(this.i&&(!j(e)||""==e))throw"abort";if(this.g&&(!j(e)||""==e||!S(t)))throw"abort";if(y(this.c)||y(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort"}};bi=new q,ki=new q,Oi=new q,_i={ec:45,ecommerce:46,linkid:47};var ji=function(t,e,n){e==Pi||e.get(tn);var i=bi.get(t);return!!S(i)&&(e.plugins_=e.plugins_||new q,!!e.plugins_.get(t)||(e.plugins_.set(t,new i(e,n||{})),!0))},Ii=function(e,n,i,r,a){if(!S(bi.get(n))&&!ki.get(n)){if(_i.hasOwnProperty(n)&&t(_i[n]),Zn.test(n)){if(t(52),!(e=Pi.j(e)))return!0;i=r||{},r={id:n,B:i.dataLayer||"dataLayer",ia:!!e.get("anonymizeIp"),sync:a,G:!1},e.get("&gtm")==n&&(r.G=!0);var o=String(e.get("name"));"t0"!=o&&(r.target=o),tt(String(e.get("trackingId")))||(r.clientId=String(e.get(en)),r.ka=Number(e.get(nn)),i=i.palindrome?ti:Qn,i=(i=Y.cookie.replace(/^|(; +)/g,";").match(i))?i.sort().join("").substring(1):void 0,r.la=i,r.qa=U(e.b.get(Jt)||"","gclid")),e=r.B,i=(new Date).getTime(),W[e]=W[e]||[],i={"gtm.start":i},a||(i.event="gtm.js"),W[e].push(i),i=ni(r)}!i&&_i.hasOwnProperty(n)?(t(39),i=n+".js"):t(43),i&&(i&&0<=i.indexOf("/")||(i=(Vt||M()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+i),r=Ai(i),e=r.protocol,i=Y.location.protocol,("https:"==e||e==i||("http:"!=e?0:"http:"==i))&&Ni(r)&&(D(r.url,void 0,a),ki.set(n,!0)))}},Ci=function(t,e){var n=Oi.get(t)||[];n.push(e),Oi.set(t,n)},Ri=function(t,e){bi.set(t,e),e=Oi.get(t)||[];for(var n=0;n<e.length;n++)e[n]();Oi.set(t,[])},Ni=function(t){var e=Ai(Y.location.href);return!!I(t.url,"https://www.google-analytics.com/gtm/js?id=")||!(t.query||0<=t.url.indexOf("?")||0<=t.path.indexOf("://"))&&(t.host==e.host&&t.port==e.port||(e="http:"==t.protocol?80:443,!("www.google-analytics.com"!=t.host||(t.port||e)!=e||!I(t.path,"/plugins/"))))},Ai=function(t){function e(t){var e=(t.hostname||"").split(":")[0].toLowerCase(),n=(t.protocol||"").toLowerCase();return n=1*t.port||("http:"==n?80:"https:"==n?443:""),t=t.pathname||"",I(t,"/")||(t="/"+t),[e,""+n,t]}var n=Y.createElement("a");n.href=Y.location.href;var i=(n.protocol||"").toLowerCase(),r=e(n),a=n.search||"",o=i+"//"+r[0]+(r[1]?":"+r[1]:"");return I(t,"//")?t=i+t:I(t,"/")?t=o+t:!t||I(t,"?")?t=o+r[2]+(t||a):0>t.split("/")[0].indexOf(":")&&(t=o+r[2].substring(0,r[2].lastIndexOf("/"))+"/"+t),n.href=t,i=e(n),{protocol:(n.protocol||"").toLowerCase(),host:i[0],port:i[1],path:i[2],query:n.search||"",url:t||""}},Li={ga:function(){Li.f=[]}};Li.ga(),Li.D=function(t){var e=Li.J.apply(Li,arguments);for(e=Li.f.concat(e),Li.f=[];0<e.length&&!Li.v(e[0])&&(e.shift(),!(0<Li.f.length)););Li.f=Li.f.concat(e)},Li.J=function(t){for(var e=[],n=0;n<arguments.length;n++)try{var i=new Ei(arguments[n]);i.g?Ri(i.a[0],i.a[1]):(i.i&&(i.ha=Ii(i.c,i.a[0],i.X,i.W)),e.push(i))}catch(t){}return e},Li.v=function(t){try{if(t.u)t.u.call(W,Pi.j("t0"));else{var e=t.c==Mt?Pi:Pi.j(t.c);if(t.A){if("t0"==t.c&&null===(e=Pi.create.apply(Pi,t.a)))return!0}else if(t.ba)Pi.remove(t.c);else if(e)if(t.i){if(t.ha&&(t.ha=Ii(t.c,t.a[0],t.X,t.W)),!ji(t.a[0],e,t.W))return!0}else if(t.K){var n=t.C,i=t.a,r=e.plugins_.get(t.K);r[n].apply(r,i)}else e[t.C].apply(e,t.a)}}catch(t){}};var Pi=function(e){t(1),Li.D.apply(Li,[arguments])};Pi.h={},Pi.P=[],Pi.L=0,Pi.answer=42;var $i=[on,cn,tn];Pi.create=function(e){var n=H($i,[].slice.call(arguments));n[tn]||(n[tn]="t0");var i=""+n[tn];if(Pi.h[i])return Pi.h[i];t:{if(n[kn]){if(t(67),n[dn]&&"cookie"!=n[dn]){var r=!1;break t}if(void 0!==X)n[en]||(n[en]=X);else{e:{r=String(n[cn]||G());var a=String(n[un]||"/"),o=et(String(n[sn]||"_ga"));if(!(r=Gn(o,r,a))||Ut.test(r))r=!0;else if(r=et("AMP_TOKEN"),0==r.length)r=!0;else{if(1==r.length&&("$RETRIEVING"==(r=decodeURIComponent(r[0]))||"$OPT_OUT"==r||"$ERROR"==r||"$NOT_FOUND"==r)){r=!0;break e}r=!1}}if(r&&ut(ct,String(n[on]))){r=!0;break t}}}r=!1}return r?null:(n=new vi(n),Pi.h[i]=n,Pi.P.push(n),n)},Pi.remove=function(t){for(var e=0;e<Pi.P.length;e++)if(Pi.P[e].get(tn)==t){Pi.P.splice(e,1),Pi.h[t]=null;break}},Pi.j=function(t){return Pi.h[t]},Pi.getAll=function(){return Pi.P.slice(0)},Pi.N=function(){"ga"!=Mt&&t(49);var e=W[Mt];if(!e||42!=e.answer){Pi.L=e&&e.l,Pi.loaded=!0;var n=W[Mt]=Pi;if(f("create",n,n.create),f("remove",n,n.remove),f("getByName",n,n.j,5),f("getAll",n,n.getAll,6),n=vi.prototype,f("get",n,n.get,7),f("set",n,n.set,4),f("send",n,n.send),f("requireSync",n,n.ma),n=Tt.prototype,f("get",n,n.get),f("set",n,n.set),!M()&&!Vt){t:{n=Y.getElementsByTagName("script");for(var i=0;i<n.length&&100>i;i++){var r=n[i].src;if(r&&0==r.indexOf("https://www.google-analytics.com/analytics")){t(33),n=!0;break t}}n=!1}n&&(Vt=!0)}M()||Vt||!Sn(new Tn)||(t(36),Vt=!0),(W.gaplugins=W.gaplugins||{}).Linker=Xn,n=Xn.prototype,Ri("linker",Xn),f("decorate",n,n.ca,20),f("autoLink",n,n.S,25),Ri("displayfeatures",ui),Ri("adfeatures",ui),e=e&&e.q,E(e)?Li.D.apply(Pi,e):t(50)}},Pi.da=function(){for(var t=Pi.getAll(),e=0;e<t.length;e++)t[e].get(tn)};var Di=Pi.N,Mi=W[Mt];Mi&&Mi.r?Di():Ti(Di),Ti(function(){Li.D(["provide","render",A])})}(window)}]);