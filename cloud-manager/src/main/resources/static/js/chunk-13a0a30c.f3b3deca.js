(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13a0a30c"],{"18d2":function(t,e,n){"use strict";var i=n("18e9");t.exports=function(t){t=t||{};var e=t.reporter,n=t.batchProcessor,r=t.stateHandler.getState;if(!e)throw new Error("Missing required dependency: reporter.");function o(t,e){function n(){e(t)}if(i.isIE(8))r(t).object={proxy:n},t.attachEvent("onresize",n);else{var o=c(t);if(!o)throw new Error("Element is not detectable by this strategy.");o.contentDocument.defaultView.addEventListener("resize",n)}}function a(e){var n=t.important?" !important; ":"; ";return(e.join(n)+n).trim()}function s(t,o,s){s||(s=o,o=t,t=null),t=t||{};t.debug;function c(o,s){var c=a(["display: block","position: absolute","top: 0","left: 0","width: 100%","height: 100%","border: none","padding: 0","margin: 0","opacity: 0","z-index: -1000","pointer-events: none"]),l=!1,u=window.getComputedStyle(o),d=o.offsetWidth,f=o.offsetHeight;function m(){function n(){if("static"===u.position){o.style.setProperty("position","relative",t.important?"important":"");var n=function(e,n,i,r){function o(t){return t.replace(/[^-\d\.]/g,"")}var a=i[r];"auto"!==a&&"0"!==o(a)&&(e.warn("An element that is positioned static has style."+r+"="+a+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",n),n.style.setProperty(r,"0",t.important?"important":""))};n(e,o,u,"top"),n(e,o,u,"right"),n(e,o,u,"bottom"),n(e,o,u,"left")}}function a(){function t(e,n){if(!e.contentDocument){var i=r(e);return i.checkForObjectDocumentTimeoutId&&window.clearTimeout(i.checkForObjectDocumentTimeoutId),void(i.checkForObjectDocumentTimeoutId=setTimeout(function(){i.checkForObjectDocumentTimeoutId=0,t(e,n)},100))}n(e.contentDocument)}l||n();var e=this;t(e,function(t){s(o)})}""!==u.position&&(n(u),l=!0);var d=document.createElement("object");d.style.cssText=c,d.tabIndex=-1,d.type="text/html",d.setAttribute("aria-hidden","true"),d.onload=a,i.isIE()||(d.data="about:blank"),r(o)&&(o.appendChild(d),r(o).object=d,i.isIE()&&(d.data="about:blank"))}r(o).startSize={width:d,height:f},n?n.add(m):m()}i.isIE(8)?s(o):c(o,s)}function c(t){return r(t).object}function l(t){if(r(t)){var e=c(t);e&&(i.isIE(8)?t.detachEvent("onresize",e.proxy):t.removeChild(e),r(t).checkForObjectDocumentTimeoutId&&window.clearTimeout(r(t).checkForObjectDocumentTimeoutId),delete r(t).object)}}return{makeDetectable:s,addListener:o,uninstall:l}}},"18e9":function(t,e,n){"use strict";var i=t.exports={};i.isIE=function(t){function e(){var t=navigator.userAgent.toLowerCase();return-1!==t.indexOf("msie")||-1!==t.indexOf("trident")||-1!==t.indexOf(" edge/")}if(!e())return!1;if(!t)return!0;var n=function(){var t,e=3,n=document.createElement("div"),i=n.getElementsByTagName("i");do{n.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(i[0]);return e>4?e:t}();return t===n},i.isLegacyOpera=function(){return!!window.opera}},"2cef":function(t,e,n){"use strict";t.exports=function(){var t=1;function e(){return t++}return{generate:e}}},"3b2b":function(t,e,n){var i=n("7726"),r=n("5dbc"),o=n("86cc").f,a=n("9093").f,s=n("aae3"),c=n("0bfb"),l=i.RegExp,u=l,d=l.prototype,f=/a/g,m=/a/g,h=new l(f)!==f;if(n("9e1e")&&(!h||n("79e5")(function(){return m[n("2b4c")("match")]=!1,l(f)!=f||l(m)==m||"/a/i"!=l(f,"i")}))){l=function(t,e){var n=this instanceof l,i=s(t),o=void 0===e;return!n&&i&&t.constructor===l&&o?t:r(h?new u(i&&!o?t.source:t,e):u((i=t instanceof l)?t.source:t,i&&o?c.call(t):e),n?this:d,l)};for(var p=function(t){t in l||o(l,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},g=a(u),v=0;g.length>v;)p(g[v++]);d.constructor=l,l.prototype=d,n("2aba")(i,"RegExp",l)}n("7a56")("RegExp")},4980:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-detail-box"},[n("div",{staticClass:"site-detail"},[n("div",{staticClass:"info-box"},[n("div",{staticClass:"info"},[t._v(t._s(t.$t("Basic Info")))]),n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"180px"}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:t.$t("Site Name")}},[n("span",{staticClass:"info-text"},[t._v(t._s(t.form.siteName))])]),n("el-form-item",{attrs:{label:t.$t("Institution")}},[n("span",{staticClass:"link-text"},[t._v(t._s(t.form.institutions))])]),n("el-form-item",{attrs:{label:t.$t("Role")}},[n("span",{staticClass:"info-text"},[t._v(t._s(1===t.form.role?t.$t("m.common.guest"):t.$t("m.common.host")))])]),n("el-form-item",{attrs:{label:"Federation key"}},[n("span",{staticClass:"info-text"},[t._v(t._s(t.form.secretInfo?t.form.secretInfo.key:t.form.secretInfo))])]),n("el-form-item",{attrs:{label:"Secret Key"}},[t.secretkeyshow?n("el-popover",{attrs:{placement:"top",width:"300",trigger:"hover",content:t.form.secretInfo?t.form.secretInfo.secret:t.form.secretInfo}},[n("span",{staticClass:"link-text secretkey",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.form.secretInfo?t.form.secretInfo.secret:t.form.secretInfo))])]):n("span",{staticClass:"link-text secretkey"},[t._v(t._s(t.form.secretInfo?t.form.secretInfo.secret:t.form.secretInfo))])],1)],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:t.$t("Status")}},[2===t.form.status?n("span",{staticClass:"info-text"},[t._v(t._s(t.$t("Joined")))]):t._e(),3===t.form.status?n("span",{staticClass:"info-text"},[t._v(t._s(t.$t("Delete")))]):t._e()]),n("el-form-item",{attrs:{label:t.$t("Party ID")}},[n("span",{staticClass:"info-text"},[t._v(t._s(t.form.partyId))])]),n("el-form-item",{attrs:{label:t.$t("Creation Time")}},[n("el-popover",{directives:[{name:"show",rawName:"v-show",value:t.showTime,expression:"showTime"}],attrs:{placement:"top",trigger:"hover",content:t._f("dateFormat")(t.form.createTime)}},[n("span",{staticClass:"link-text time",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t._f("dateFormat")(t.form.createTime)))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.showTime,expression:"!showTime"}],staticClass:"link-text time"},[t._v(t._s(t._f("dateFormat")(t.form.createTime)))])],1),n("el-form-item",{attrs:{label:t.$t("Activation Time")}},[t.showTime?n("el-popover",{attrs:{placement:"top",trigger:"hover",content:t._f("dateFormat")(t.form.activationTime)}},[n("span",{staticClass:"link-text time",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t._f("dateFormat")(t.form.activationTime)))])]):t._e(),t.showTime?t._e():n("span",{staticClass:"link-text time"},[t._v(t._s(t._f("dateFormat")(t.form.activationTime)))])],1),n("el-form-item",{attrs:{label:t.$t("Registration Link")}},[n("el-popover",{attrs:{placement:"top",width:"300",trigger:"hover",content:t.form.registrationLink}},[n("span",{staticClass:"link-text",attrs:{slot:"reference"},slot:"reference"},[t._v(t._s(t.form.registrationLink))])])],1)],1)],1)],1)],1),n("div",{staticClass:"info-box"},[n("div",{staticClass:"info"},[t._v(t._s(t.$t("Exchange Info")))]),n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"280px"}},[n("el-row",{attrs:{gutter:140}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{height:"100%"},attrs:{label:t.$t("Exchange Name")}},[t._v("\n                      "+t._s(t.form.exchangeName)+"\n                  ")])],1),n("el-col",{attrs:{span:12}},[n("el-form-item",{staticStyle:{height:"100%"},attrs:{label:"VIP Entrances"}},[t._v("\n                     "+t._s(t.form.vipEntrance)+"\n                  ")])],1)],1)],1)],1),n("div",{staticClass:"info-box"},[n("div",{staticClass:"info"},[t._v(t._s(t.$t("Network configuration")))]),n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"280px"}},[n("div",{staticClass:"info-item"},[t._v(t._s(t.$t("Site Network configuration")))]),n("el-row",{staticStyle:{"margin-bottom":"-18px"},attrs:{gutter:140}},[n("el-col",{attrs:{span:12}},[t.form.networkAccessEntrances?n("el-form-item",{staticStyle:{height:"100%"},attrs:{label:t.$t("Network Access Entrances")}},t._l(t.form.networkAccessEntrances.split(";"),function(e,i){return n("span",{key:i},[e?n("div",{staticClass:"info-text ",staticStyle:{width:"100%"}},[t._v("\n                          "+t._s(e)+"\n                          ")]):t._e()])}),0):t._e()],1)],1),n("div",{staticClass:"info-item",staticStyle:{"font-size":"14px"}},[t._v(t._s(t.$t("Rollsite Network configuration")))]),n("el-row",{attrs:{gutter:140}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:t.$t("Is Secure")}},[t._v("\n                      "+t._s(1===t.form.secureStatus?t.$t("true"):t.$t("false"))+"\n                  ")]),n("el-form-item",{attrs:{label:t.$t("Is Polling")}},[t._v("\n                      "+t._s(1===t.form.pollingStatus?t.$t("true"):t.$t("false"))+"\n                  ")])],1)],1)],1)],1),n("div",{staticClass:"info-box"},[n("div",{staticClass:"info"},[t._v(t._s(t.$t("System version")))]),n("el-form",{ref:"form",attrs:{model:t.form,"label-position":"left","label-width":"280px"}},[n("el-row",{attrs:{gutter:140}},[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:t.$t("FATE version")}},[t._v("\n                          "+t._s(t.form.fateVersion)+"\n                      ")])],1)],1)],1)],1)])])},r=[],o=n("cebc"),a=(n("3b2b"),n("a481"),n("c6a8")),s=n("c1df"),c=n.n(s),l=n("eec4"),u=n.n(l),d={zh:{"Basic Info":"基本信息",Status:"状态",Joined:"已加入",Delete:"已删除","Site Name":"站点名称",Institution:"站点机构",Role:"站点角色","Creation Time":"创建时间","Activation Time":"激活时间","Registration Link":"注册链接","Exchange Info":"Exchange信息","Exchange Name":"Exchange名称","Network configuration":"网关设置","Site Network configuration":"站点网关设置","Rollsite Network configuration":"Rollsite网关设置","Is Secure":"加密传输","Is Polling":"单向模式",true:"是",false:"否","Network Access Entrances":"网关入口","Network Access Exits":"网关出口","System version":"系统版本","FATE version":"FATE版本","FATE Component":"FATE服务组件",Version:"版本"},en:{"Basic Info":"Basic Info",Status:"Status",Joined:"Joined",Delete:"Delete","Site Name":"Site Name",Institution:"Institution",Role:"Role","Creation Time":"Creation Time","Activation Time":"Activation Time","Registration Link":"Registration Link","Exchange Info":"Exchange Info","Exchange Name":"Exchange Name","Network configuration":"Network configuration","Rollsite Network configuration":"Rollsite Network configuration","Site Network configuration":"Site Network configuration","Is Secure":"Is Secure","Is Polling":"Is Polling",true:"True",false:"False","Network Access Entrances":"Network Access Entrances","Network Access Exits":"Network Access Exits","System version":"System version","FATE version":"FATE version","FATE Component":"FATE Component",Version:"Version"}},f={name:"home",filters:{dateFormat:function(t){return t?c()(t).format("YYYY-MM-DD HH:mm:ss"):"- -"}},data:function(){return{showTime:!1,timeWidth:"",secretkeyshow:!1,secretkeyWidth:"",form:{}}},watch:{timeWidth:{handler:function(t){this.showTime=t<170},deep:!0,immediate:!0},secretkeyWidth:{handler:function(t){this.secretkeyshow=t<375},deep:!0,immediate:!0}},computed:{},created:function(){var t=this;this.$i18n.mergeLocaleMessage("en",d.en),this.$i18n.mergeLocaleMessage("zh",d.zh),this.$nextTick(function(){t.getKeySansLink()})},mounted:function(){var t=u()(),e=this;t.listenTo(document.querySelectorAll(".time"),function(t){e.timeWidth=t.offsetWidth}),t.listenTo(document.querySelectorAll(".secretkey"),function(t){e.secretkeyWidth=t.offsetWidth})},methods:{getKeySansLink:function(){var t=this,e={id:parseInt(this.$route.query.id)};Object(a["s"])(e).then(function(e){if(e.data.registrationLink=JSON.stringify(e.data.registrationLink).replace(new RegExp('"',"g"),""),t.form=Object(o["a"])({},e.data),t.form.componentVersion=[],e.data.componentVersion){var n=JSON.parse(e.data.componentVersion);for(var i in n){var r={};r.label=i,r.version=n[i],t.form.componentVersion.push(r)}}})}}},m=f,h=(n("e025"),n("2877")),p=Object(h["a"])(m,i,r,!1,null,null,null);e["default"]=p.exports},"49ad":function(t,e,n){"use strict";t.exports=function(t){var e={};function n(n){var i=t.get(n);return void 0===i?[]:e[i]||[]}function i(n,i){var r=t.get(n);e[r]||(e[r]=[]),e[r].push(i)}function r(t,e){for(var i=n(t),r=0,o=i.length;r<o;++r)if(i[r]===e){i.splice(r,1);break}}function o(t){var e=n(t);e&&(e.length=0)}return{get:n,add:i,removeListener:r,removeAllListeners:o}}},5058:function(t,e,n){"use strict";t.exports=function(t){var e=t.idGenerator,n=t.stateHandler.getState;function i(t){var e=n(t);return e&&void 0!==e.id?e.id:null}function r(t){var i=n(t);if(!i)throw new Error("setId required the element to have a resize detection state.");var r=e.generate();return i.id=r,r}return{get:i,set:r}}},"50bf":function(t,e,n){"use strict";var i=t.exports={};function r(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}i.getOption=r},"5be5":function(t,e,n){"use strict";t.exports=function(t){var e=t.stateHandler.getState;function n(t){var n=e(t);return n&&!!n.isDetectable}function i(t){e(t).isDetectable=!0}function r(t){return!!e(t).busy}function o(t,n){e(t).busy=!!n}return{isDetectable:n,markAsDetectable:i,isBusy:r,markBusy:o}}},"5dbc":function(t,e,n){var i=n("d3f4"),r=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&i(o)&&r&&r(t,o),t}},"8b97":function(t,e,n){var i=n("d3f4"),r=n("cb7c"),o=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:o}},abb4:function(t,e,n){"use strict";t.exports=function(t){function e(){}var n={log:e,warn:e,error:e};if(!t&&window.console){var i=function(t,e){t[e]=function(){var t=console[e];if(t.apply)t.apply(console,arguments);else for(var n=0;n<arguments.length;n++)t(arguments[n])}};i(n,"log"),i(n,"warn"),i(n,"error")}return n}},b098:function(t,e,n){},b770:function(t,e,n){"use strict";var i=t.exports={};i.forEach=function(t,e){for(var n=0;n<t.length;n++){var i=e(t[n]);if(i)return i}}},c274:function(t,e,n){"use strict";var i=n("50bf");function r(){var t={},e=0,n=0,i=0;function r(r,o){o||(o=r,r=0),r>n?n=r:r<i&&(i=r),t[r]||(t[r]=[]),t[r].push(o),e++}function o(){for(var e=i;e<=n;e++)for(var r=t[e],o=0;o<r.length;o++){var a=r[o];a()}}function a(){return e}return{add:r,process:o,size:a}}t.exports=function(t){t=t||{};var e=t.reporter,n=i.getOption(t,"async",!0),o=i.getOption(t,"auto",!0);o&&!n&&(e&&e.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),n=!0);var a,s=r(),c=!1;function l(t,e){!c&&o&&n&&0===s.size()&&f(),s.add(t,e)}function u(){c=!0;while(s.size()){var t=s;s=r(),t.process()}c=!1}function d(t){c||(void 0===t&&(t=n),a&&(m(a),a=null),t?f():u())}function f(){a=h(u)}function m(t){var e=clearTimeout;return e(t)}function h(t){var e=function(t){return setTimeout(t,0)};return e(t)}return{add:l,force:d}}},c6a8:function(t,e,n){"use strict";n.d(e,"L",function(){return r}),n.d(e,"F",function(){return o}),n.d(e,"M",function(){return a}),n.d(e,"q",function(){return s}),n.d(e,"g",function(){return c}),n.d(e,"J",function(){return l}),n.d(e,"n",function(){return u}),n.d(e,"G",function(){return d}),n.d(e,"N",function(){return f}),n.d(e,"K",function(){return m}),n.d(e,"s",function(){return h}),n.d(e,"O",function(){return p}),n.d(e,"C",function(){return g}),n.d(e,"D",function(){return v}),n.d(e,"h",function(){return b}),n.d(e,"j",function(){return y}),n.d(e,"i",function(){return w}),n.d(e,"E",function(){return x}),n.d(e,"x",function(){return k}),n.d(e,"k",function(){return E}),n.d(e,"y",function(){return S}),n.d(e,"z",function(){return _}),n.d(e,"u",function(){return O}),n.d(e,"e",function(){return j}),n.d(e,"f",function(){return T}),n.d(e,"w",function(){return I}),n.d(e,"B",function(){return A}),n.d(e,"v",function(){return C}),n.d(e,"A",function(){return N}),n.d(e,"a",function(){return D}),n.d(e,"d",function(){return L}),n.d(e,"t",function(){return z}),n.d(e,"o",function(){return $}),n.d(e,"b",function(){return H}),n.d(e,"l",function(){return F}),n.d(e,"c",function(){return W}),n.d(e,"r",function(){return R}),n.d(e,"p",function(){return M}),n.d(e,"I",function(){return P}),n.d(e,"P",function(){return B}),n.d(e,"m",function(){return q}),n.d(e,"H",function(){return V});var i=n("b775");function r(t){return Object(i["a"])({url:"/cloud-manager/api/site/page/cloudManager",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/cloud-manager/api/site/reactivate",method:"post",data:t})}function a(t){return Object(i["a"])({url:"/cloud-manager/api/site/find/all",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/cloud-manager/api/group/findPagedRegionInfoNew",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/cloud-manager/api/site/check",method:"post",data:t})}function l(t){return Object(i["a"])({url:"/cloud-manager/api/site/addNew",method:"post",data:t})}function u(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/exchange/dropDownBox",method:"post",data:t})}function d(t){return Object(i["a"])({url:"/cloud-manager/api/site/cloudManager/network",method:"post",data:t})}function f(t){return Object(i["a"])({url:"/cloud-manager/api/site/updateNew",method:"post",data:t})}function m(t){return Object(i["a"])({url:"/cloud-manager/api/site/delete",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/cloud-manager/api/site/find",method:"post",data:t})}function p(t){return Object(i["a"])({url:"/cloud-manager/api/site/checkWeb",method:"post",data:t})}function g(t){return Object(i["a"])({url:"/cloud-manager/api/site/ip/list",method:"post",data:t})}function v(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/party/edit",method:"post",data:t})}function b(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/party/check",method:"post",data:t})}function y(t){return Object(i["a"])({url:"/cloud-manager/api/site/ip/deal",method:"post",data:t})}function w(t){return Object(i["a"])({url:"/cloud-manager/api/site/checkSiteName",method:"post",data:t})}function x(t){return Object(i["a"])({url:"/cloud-manager/api/site/ip/query/history",method:"post",data:t})}function k(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions",method:"post",data:t})}function E(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions/delete",method:"post",data:t})}function S(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions/all/dropdown",method:"post",data:t})}function _(t){return Object(i["a"])({url:"/cloud-manager/api/site/institutions/status/dropdown",method:"post",data:t})}function O(t){return Object(i["a"])({url:"/cloud-manager/api/fate/user/institutions/all",method:"post",data:t})}function j(t){return Object(i["a"])({url:"/cloud-manager/api/authority/cancel",method:"post",data:t})}function T(t){return Object(i["a"])({url:"/cloud-manager/api/authority/cancelList",method:"post",data:t})}function I(t){return Object(i["a"])({url:"/cloud-manager/api/authority/history",method:"post",data:t})}function A(t){return Object(i["a"])({url:"/cloud-manager/api/authority/status",method:"post",data:t})}function C(t){return Object(i["a"])({url:"/cloud-manager/api/authority/details",method:"post",data:t})}function N(t){return Object(i["a"])({url:"/cloud-manager/api/authority/review",method:"post",data:t})}function D(t){return Object(i["a"])({url:"/cloud-manager/api/fate/user/institutions",method:"post",data:t})}function L(t){return Object(i["a"])({url:"/cloud-manager/api/authority/currentAuthority",method:"post",data:t})}function z(t){return Object(i["a"])({url:"/cloud-manager/api/dropdown/version",method:"post",data:t})}function $(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/exchange/page",method:"post",data:t})}function H(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/add",method:"post",data:t})}function F(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/delete",method:"post",data:t})}function W(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/add",method:"post",data:t})}function R(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/page",method:"post",data:t})}function M(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/query",method:"post",data:t})}function P(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/party/page",method:"post",data:t})}function B(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/publish",method:"post",data:t})}function q(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/delete",method:"post",data:t})}function V(t){return Object(i["a"])({url:"/cloud-manager/api/exchange/rollsite/update",method:"post",data:t})}},c946:function(t,e,n){"use strict";var i=n("b770").forEach;t.exports=function(t){t=t||{};var e=t.reporter,n=t.batchProcessor,r=t.stateHandler.getState,o=(t.stateHandler.hasState,t.idHandler);if(!n)throw new Error("Missing required dependency: batchProcessor");if(!e)throw new Error("Missing required dependency: reporter.");var a=d(),s="erd_scroll_detection_scrollbar_style",c="erd_scroll_detection_container";function l(t){f(t,s,c)}function u(e){var n=t.important?" !important; ":"; ";return(e.join(n)+n).trim()}function d(){var t=500,e=500,n=document.createElement("div");n.style.cssText=u(["position: absolute","width: "+2*t+"px","height: "+2*e+"px","visibility: hidden","margin: 0","padding: 0"]);var i=document.createElement("div");i.style.cssText=u(["position: absolute","width: "+t+"px","height: "+e+"px","overflow: scroll","visibility: none","top: "+3*-t+"px","left: "+3*-e+"px","visibility: hidden","margin: 0","padding: 0"]),i.appendChild(n),document.body.insertBefore(i,document.body.firstChild);var r=t-i.clientWidth,o=e-i.clientHeight;return document.body.removeChild(i),{width:r,height:o}}function f(t,e,n){function i(n,i){i=i||function(e){t.head.appendChild(e)};var r=t.createElement("style");return r.innerHTML=n,r.id=e,i(r),r}if(!t.getElementById(e)){var r=n+"_animation",o=n+"_animation_active",a="/* Created by the element-resize-detector library. */\n";a+="."+n+" > div::-webkit-scrollbar { "+u(["display: none"])+" }\n\n",a+="."+o+" { "+u(["-webkit-animation-duration: 0.1s","animation-duration: 0.1s","-webkit-animation-name: "+r,"animation-name: "+r])+" }\n",a+="@-webkit-keyframes "+r+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",a+="@keyframes "+r+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",i(a)}}function m(t){t.className+=" "+c+"_animation_active"}function h(t,n,i){if(t.addEventListener)t.addEventListener(n,i);else{if(!t.attachEvent)return e.error("[scroll] Don't know how to add event listeners.");t.attachEvent("on"+n,i)}}function p(t,n,i){if(t.removeEventListener)t.removeEventListener(n,i);else{if(!t.detachEvent)return e.error("[scroll] Don't know how to remove event listeners.");t.detachEvent("on"+n,i)}}function g(t){return r(t).container.childNodes[0].childNodes[0].childNodes[0]}function v(t){return r(t).container.childNodes[0].childNodes[0].childNodes[1]}function b(t,e){var n=r(t).listeners;if(!n.push)throw new Error("Cannot add listener to an element that is not detectable.");r(t).listeners.push(e)}function y(t,s,l){function d(){if(t.debug){var n=Array.prototype.slice.call(arguments);if(n.unshift(o.get(s),"Scroll: "),e.log.apply)e.log.apply(null,n);else for(var i=0;i<n.length;i++)e.log(n[i])}}function f(t){function e(t){return t===t.ownerDocument.body||t.ownerDocument.body.contains(t)}return!e(t)||null===window.getComputedStyle(t)}function p(t){var e=r(t).container.childNodes[0],n=window.getComputedStyle(e);return!n.width||-1===n.width.indexOf("px")}function b(){var t=window.getComputedStyle(s),e={};return e.position=t.position,e.width=s.offsetWidth,e.height=s.offsetHeight,e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.widthCSS=t.width,e.heightCSS=t.height,e}function y(){var t=b();r(s).startSize={width:t.width,height:t.height},d("Element start size",r(s).startSize)}function w(){r(s).listeners=[]}function x(){if(d("storeStyle invoked."),r(s)){var t=b();r(s).style=t}else d("Aborting because element has been uninstalled")}function k(t,e,n){r(t).lastWidth=e,r(t).lastHeight=n}function E(t){return g(t).childNodes[0]}function S(){return 2*a.width+1}function _(){return 2*a.height+1}function O(t){return t+10+S()}function j(t){return t+10+_()}function T(t){return 2*t+S()}function I(t){return 2*t+_()}function A(t,e,n){var i=g(t),r=v(t),o=O(e),a=j(n),s=T(e),c=I(n);i.scrollLeft=o,i.scrollTop=a,r.scrollLeft=s,r.scrollTop=c}function C(){var t=r(s).container;if(!t){t=document.createElement("div"),t.className=c,t.style.cssText=u(["visibility: hidden","display: inline","width: 0px","height: 0px","z-index: -1","overflow: hidden","margin: 0","padding: 0"]),r(s).container=t,m(t),s.appendChild(t);var e=function(){r(s).onRendered&&r(s).onRendered()};h(t,"animationstart",e),r(s).onAnimationStart=e}return t}function N(){function n(){var n=r(s).style;if("static"===n.position){s.style.setProperty("position","relative",t.important?"important":"");var i=function(t,e,n,i){function r(t){return t.replace(/[^-\d\.]/g,"")}var o=n[i];"auto"!==o&&"0"!==r(o)&&(t.warn("An element that is positioned static has style."+i+"="+o+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+i+" will be set to 0. Element: ",e),e.style[i]=0)};i(e,s,n,"top"),i(e,s,n,"right"),i(e,s,n,"bottom"),i(e,s,n,"left")}}function i(t,e,n,i){return t=t?t+"px":"0",e=e?e+"px":"0",n=n?n+"px":"0",i=i?i+"px":"0",["left: "+t,"top: "+e,"right: "+i,"bottom: "+n]}if(d("Injecting elements"),r(s)){n();var o=r(s).container;o||(o=C());var l=a.width,f=a.height,m=u(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden","width: 100%","height: 100%","left: 0px","top: 0px"]),p=u(["position: absolute","flex: none","overflow: hidden","z-index: -1","visibility: hidden"].concat(i(-(1+l),-(1+f),-f,-l))),g=u(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),v=u(["position: absolute","flex: none","overflow: scroll","z-index: -1","visibility: hidden","width: 100%","height: 100%"]),b=u(["position: absolute","left: 0","top: 0"]),y=u(["position: absolute","width: 200%","height: 200%"]),w=document.createElement("div"),x=document.createElement("div"),k=document.createElement("div"),E=document.createElement("div"),S=document.createElement("div"),_=document.createElement("div");w.dir="ltr",w.style.cssText=m,w.className=c,x.className=c,x.style.cssText=p,k.style.cssText=g,E.style.cssText=b,S.style.cssText=v,_.style.cssText=y,k.appendChild(E),S.appendChild(_),x.appendChild(k),x.appendChild(S),w.appendChild(x),o.appendChild(w),h(k,"scroll",O),h(S,"scroll",j),r(s).onExpandScroll=O,r(s).onShrinkScroll=j}else d("Aborting because element has been uninstalled");function O(){r(s).onExpand&&r(s).onExpand()}function j(){r(s).onShrink&&r(s).onShrink()}}function D(){function a(e,n,i){var r=E(e),o=O(n),a=j(i);r.style.setProperty("width",o+"px",t.important?"important":""),r.style.setProperty("height",a+"px",t.important?"important":"")}function c(i){var c=s.offsetWidth,u=s.offsetHeight,f=c!==r(s).lastWidth||u!==r(s).lastHeight;d("Storing current size",c,u),k(s,c,u),n.add(0,function(){if(f)if(r(s))if(l()){if(t.debug){var n=s.offsetWidth,i=s.offsetHeight;n===c&&i===u||e.warn(o.get(s),"Scroll: Size changed before updating detector elements.")}a(s,c,u)}else d("Aborting because element container has not been initialized");else d("Aborting because element has been uninstalled")}),n.add(1,function(){r(s)?l()?A(s,c,u):d("Aborting because element container has not been initialized"):d("Aborting because element has been uninstalled")}),f&&i&&n.add(2,function(){r(s)?l()?i():d("Aborting because element container has not been initialized"):d("Aborting because element has been uninstalled")})}function l(){return!!r(s).container}function u(){function t(){return void 0===r(s).lastNotifiedWidth}d("notifyListenersIfNeeded invoked");var e=r(s);return t()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?d("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?d("Not notifying: Size already notified"):(d("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void i(r(s).listeners,function(t){t(s)}))}function f(){if(d("startanimation triggered."),p(s))d("Ignoring since element is still unrendered...");else{d("Element rendered.");var t=g(s),e=v(s);0!==t.scrollLeft&&0!==t.scrollTop&&0!==e.scrollLeft&&0!==e.scrollTop||(d("Scrollbars out of sync. Updating detector elements..."),c(u))}}function m(){d("Scroll detected."),p(s)?d("Scroll event fired while unrendered. Ignoring..."):c(u)}if(d("registerListenersAndPositionElements invoked."),r(s)){r(s).onRendered=f,r(s).onExpand=m,r(s).onShrink=m;var h=r(s).style;a(s,h.width,h.height)}else d("Aborting because element has been uninstalled")}function L(){if(d("finalizeDomMutation invoked."),r(s)){var t=r(s).style;k(s,t.width,t.height),A(s,t.width,t.height)}else d("Aborting because element has been uninstalled")}function z(){l(s)}function $(){d("Installing..."),w(),y(),n.add(0,x),n.add(1,N),n.add(2,D),n.add(3,L),n.add(4,z)}l||(l=s,s=t,t=null),t=t||{},d("Making detectable..."),f(s)?(d("Element is detached"),C(),d("Waiting until element is attached..."),r(s).onRendered=function(){d("Element is now attached"),$()}):$()}function w(t){var e=r(t);e&&(e.onExpandScroll&&p(g(t),"scroll",e.onExpandScroll),e.onShrinkScroll&&p(v(t),"scroll",e.onShrinkScroll),e.onAnimationStart&&p(e.container,"animationstart",e.onAnimationStart),e.container&&t.removeChild(e.container))}return l(window.document),{makeDetectable:y,addListener:b,uninstall:w,initDocument:l}}},d6eb:function(t,e,n){"use strict";var i="_erd";function r(t){return t[i]={},o(t)}function o(t){return t[i]}function a(t){delete t[i]}t.exports={initState:r,getState:o,cleanState:a}},e025:function(t,e,n){"use strict";var i=n("b098"),r=n.n(i);r.a},eec4:function(t,e,n){"use strict";var i=n("b770").forEach,r=n("5be5"),o=n("49ad"),a=n("2cef"),s=n("5058"),c=n("abb4"),l=n("18e9"),u=n("c274"),d=n("d6eb"),f=n("18d2"),m=n("c946");function h(t){return Array.isArray(t)||void 0!==t.length}function p(t){if(Array.isArray(t))return t;var e=[];return i(t,function(t){e.push(t)}),e}function g(t){return t&&1===t.nodeType}function v(t,e,n){var i=t[e];return void 0!==i&&null!==i||void 0===n?i:n}t.exports=function(t){var e;if(t=t||{},t.idHandler)e={get:function(e){return t.idHandler.get(e,!0)},set:t.idHandler.set};else{var n=a(),b=s({idGenerator:n,stateHandler:d});e=b}var y=t.reporter;if(!y){var w=!1===y;y=c(w)}var x=v(t,"batchProcessor",u({reporter:y})),k={};k.callOnAdd=!!v(t,"callOnAdd",!0),k.debug=!!v(t,"debug",!1);var E,S=o(e),_=r({stateHandler:d}),O=v(t,"strategy","object"),j=v(t,"important",!1),T={reporter:y,batchProcessor:x,stateHandler:d,idHandler:e,important:j};if("scroll"===O&&(l.isLegacyOpera()?(y.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),O="object"):l.isIE(9)&&(y.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),O="object")),"scroll"===O)E=m(T);else{if("object"!==O)throw new Error("Invalid strategy name: "+O);E=f(T)}var I={};function A(t,n,r){function o(t){var e=S.get(t);i(e,function(e){e(t)})}function a(t,e,n){S.add(e,n),t&&n(e)}if(r||(r=n,n=t,t={}),!n)throw new Error("At least one element required.");if(!r)throw new Error("Listener required.");if(g(n))n=[n];else{if(!h(n))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");n=p(n)}var s=0,c=v(t,"callOnAdd",k.callOnAdd),l=v(t,"onReady",function(){}),u=v(t,"debug",k.debug);i(n,function(t){d.getState(t)||(d.initState(t),e.set(t));var f=e.get(t);if(u&&y.log("Attaching listener to element",f,t),!_.isDetectable(t))return u&&y.log(f,"Not detectable."),_.isBusy(t)?(u&&y.log(f,"System busy making it detectable"),a(c,t,r),I[f]=I[f]||[],void I[f].push(function(){s++,s===n.length&&l()})):(u&&y.log(f,"Making detectable..."),_.markBusy(t,!0),E.makeDetectable({debug:u,important:j},t,function(t){if(u&&y.log(f,"onElementDetectable"),d.getState(t)){_.markAsDetectable(t),_.markBusy(t,!1),E.addListener(t,o),a(c,t,r);var e=d.getState(t);if(e&&e.startSize){var m=t.offsetWidth,h=t.offsetHeight;e.startSize.width===m&&e.startSize.height===h||o(t)}I[f]&&i(I[f],function(t){t()})}else u&&y.log(f,"Element uninstalled before being detectable.");delete I[f],s++,s===n.length&&l()}));u&&y.log(f,"Already detecable, adding listener."),a(c,t,r),s++}),s===n.length&&l()}function C(t){if(!t)return y.error("At least one element is required.");if(g(t))t=[t];else{if(!h(t))return y.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=p(t)}i(t,function(t){S.removeAllListeners(t),E.uninstall(t),d.cleanState(t)})}function N(t){E.initDocument&&E.initDocument(t)}return{listenTo:A,removeListener:S.removeListener,removeAllListeners:S.removeAllListeners,uninstall:C,initDocument:N}}}}]);