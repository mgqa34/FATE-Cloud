(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3250fc52"],{"02ac":function(t,e,s){"use strict";var i=s("779a"),a=s.n(i);a.a},"0dcd":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-ip-box"},[i("el-dialog",{staticClass:"add-dialog",attrs:{visible:t.adddialog,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"520px"},on:{"update:visible":function(e){t.adddialog=e}}},[i("div",{staticClass:"add-dialog-head"},[i("el-button",{staticClass:"addUrl",attrs:{disabled:t.addDisabled,type:"text"},on:{click:t.addentrancesSelect}},[i("i",{staticClass:"el-icon-circle-plus"}),i("span",[t._v(t._s(t.$t("m.common.add")))])]),i("el-button",{staticClass:"deleteAll",attrs:{type:"text"},on:{click:t.deleteAll}},[i("i",{staticClass:"el-icon-delete-solid"}),i("span",[t._v(t._s(t.$t("m.common.delete")))])]),i("span",{staticClass:"total"},[t._v(t._s(t.$t("m.common.total"))+":"+t._s(t.addtotal))])],1),i("div",{staticClass:"add-dialog-body"},[i("div",{staticClass:"line-box"},t._l(t.entrancesSelect,function(e,s){return i("div",{key:s,staticClass:"line",on:{dblclick:function(e){return t.getEdit(s)}}},[e.show?t._e():i("span",[i("el-checkbox",{model:{value:e.checked,callback:function(s){t.$set(e,"checked",s)},expression:"item.checked"}}),i("span",{staticClass:"network-text"},[t._v(t._s(e.ip))]),"entrances"===t.networkacesstype?i("span",{staticClass:"telent",on:{click:function(e){return t.testTelent(s)}}},[t._v(t._s(t.$t("m.siteAdd.telnet")))]):t._e(),i("i",{staticClass:"el-icon-close del",on:{click:function(e){return t.deleteEntrances(s)}}})],1),e.show?i("el-input",{staticClass:"input-show",attrs:{autocomplete:"off",id:"close",placeholder:t.$t("m.siteAdd.typeLike",{type:"entrances"===t.networkacesstype?t.$t("m.ip.entrances"):t.$t("m.ip.exit")})+": 127.0.0.1:8080"},on:{blur:function(e){return t.closeEntrances(s)}},model:{value:t.entrancesInput,callback:function(e){t.entrancesInput=e},expression:"entrancesInput"}},[i("i",{staticClass:"el-icon-check check",attrs:{slot:"suffix"},on:{click:function(e){return t.closeEntrances(s)}},slot:"suffix"}),i("i",{staticClass:"el-icon-close del",staticStyle:{right:"2px"},attrs:{slot:"suffix"},on:{click:function(e){return t.deleteEntrances(s)},mousedown:t.mouseDown},slot:"suffix"})]):t._e()],1)}),0),i("div",{staticClass:"message-add",style:{opacity:t.showMes,transition:"all .5s ease"}},[t.telnetsuccess?i("span",{staticClass:"tips"},[i("img",{attrs:{src:s("65823")}}),i("span",[t._v("\n            "+t._s(t.$t("m.sitemanage.telnetSuccess"))+"\n            "),i("span",{staticStyle:{color:"#4AA2FF"}},[t._v(t._s(t.ipPost))])])]):t._e(),t.invalidsuccess?i("span",{staticClass:"tips"},[i("img",{attrs:{src:s("98a8")}}),i("span",[t._v(t._s(t.$t("m.common.invalidInput")))])]):t._e(),t.telnetfail?i("span",{staticClass:"tips"},[i("img",{attrs:{src:s("98a8")}}),i("span",[t._v("\n            "+t._s(t.$t("m.sitemanage.unableConnect"))+"\n            "),i("span",{staticStyle:{color:"#4AA2FF"}},[t._v(t._s(t.ipPost))])])]):t._e()])]),i("div",{staticClass:"add-dialog-footer"},[i("el-button",{attrs:{disabled:t.saveDisabled,type:"primary"},on:{click:function(e){return e.stopPropagation(),t.saveAction(e)}}},[t._v(t._s(t.$t("m.common.save")))]),i("el-button",{attrs:{type:"primary"},on:{click:t.cancelAction}},[t._v(t._s(t.$t("m.common.cancel")))])],1)])],1)},a=[],n=(s("ac6a"),s("5df3"),s("4f7f"),s("75fc")),c=(s("3b2b"),s("28a5"),s("c6a8")),o={name:"ipeditadd",props:{formName:{type:String,default:function(){return"form"}}},data:function(){return{adddialog:!1,entrancesInput:"",networkacesstype:"",showMes:0,addtotal:"",telnetsuccess:!1,telnetfail:!1,invalidsuccess:!1,saveDisabled:!1,addDisabled:!1,canEdit:!0,entrancesSelect:[],form:{},ipPost:""}},watch:{entrancesSelect:{handler:function(t){this.addtotal=this.entrancesSelect.length,t.length>=20?this.addDisabled=!0:this.saveDisabled||(this.addDisabled=!1)},deep:!0,immediate:!0}},computed:{},created:function(){},methods:{addentrancesSelect:function(){this.entrancesSelect.push({ip:"",show:!1,checked:!1}),this.canEdit=!0,this.getEdit(this.entrancesSelect.length-1)},deleteEntrances:function(t){this.entrancesInput="",this.entrancesSelect.splice(t,1),this.saveDisabled=!1,this.addDisabled=!1,this.canEdit=!0},deleteAll:function(){this.entrancesSelect=this.entrancesSelect.filter(function(t){return!t.checked})},getEdit:function(t){this.canEdit&&(this.entrancesSelect[t].show=!0,this.entrancesInput=this.entrancesSelect[t].ip,this.entrancesindex=t,this.canEdit=!1,this.addDisabled=!0,this.saveDisabled=!0,this.$nextTick(function(){var t=document.querySelector("#close");t.focus()}))},closeEntrances:function(t){var e=this,s=this.entrancesInput.split(":"),i=new RegExp(/^(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])$/),a=new RegExp(/^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/);this.entrancesInput?a.test(s[1])&&i.test(s[0])?(this.entrancesSelect[this.entrancesindex].show=!1,this.entrancesSelect[this.entrancesindex].ip=this.entrancesInput,this.saveDisabled=!1,this.addDisabled=!1,this.canEdit=!0):(this.saveDisabled=!0,this.addDisabled=!0,this.invalidsuccess=!0,this.showMes=.8,setTimeout(function(){e.showMes=0,e.invalidsuccess=!1},2e3)):this.deleteEntrances(t)},mouseDown:function(t){t.preventDefault()},saveAction:function(){var t=Object(n["a"])(new Set(this.entrancesSelect.map(function(t){return"".concat(t.ip,";")}))),e={entrances:"networkAccessEntrances",exit:"networkAccessExits",rollsite:"rollsiteNetworkAccess",router:"networkAccess"},s=e[this.networkacesstype];if(s){var i={name:s,data:t.join("")};this.$emit("updateIp",i),this.$parent.$refs["".concat(this.formName)].validateField("".concat(s),function(t){}),this.entrancesSelect=[]}this.adddialog=!1},cancelAction:function(){this.entrancesSelect=[],this.adddialog=!1,this.saveDisabled=!1,this.addDisabled=!1,this.showMes=0},testTelent:function(t){var e=this,s={partyId:parseInt(this.$route.query.partyId),federatedId:parseInt(this.$route.query.federatedId),ip:this.entrancesSelect[t].ip.split(":")[0],port:this.entrancesSelect[t].ip.split(":")[1]};this.ipPost=this.entrancesSelect[t].ip,Object(c["V"])(s).then(function(t){0===t.code&&(e.telnetsuccess=!0,e.showMes=.8,setTimeout(function(){e.telnetsuccess=!1,e.showMes=0},2e3))}).catch(function(t){10015===t.code&&(e.telnetfail=!0,e.showMes=.8,setTimeout(function(){e.telnetfail=!1,e.showMes=0},2e3))})}}},l=o,r=(s("50e2"),s("2877")),d=Object(r["a"])(l,i,a,!1,null,null,null);e["a"]=d.exports},"2dcb":function(t,e,s){},"3b2b":function(t,e,s){var i=s("7726"),a=s("5dbc"),n=s("86cc").f,c=s("9093").f,o=s("aae3"),l=s("0bfb"),r=i.RegExp,d=r,u=r.prototype,p=/a/g,m=/a/g,h=new r(p)!==p;if(s("9e1e")&&(!h||s("79e5")(function(){return m[s("2b4c")("match")]=!1,r(p)!=p||r(m)==m||"/a/i"!=r(p,"i")}))){r=function(t,e){var s=this instanceof r,i=o(t),n=void 0===e;return!s&&i&&t.constructor===r&&n?t:a(h?new d(i&&!n?t.source:t,e):d((i=t instanceof r)?t.source:t,i&&n?l.call(t):e),s?this:u,r)};for(var f=function(t){t in r||n(r,t,{configurable:!0,get:function(){return d[t]},set:function(e){d[t]=e}})},v=c(d),b=0;v.length>b;)f(v[b++]);u.constructor=r,r.prototype=u,s("2aba")(i,"RegExp",r)}s("7a56")("RegExp")},"50e2":function(t,e,s){"use strict";var i=s("2dcb"),a=s.n(i);a.a},65823:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAVRJREFUOE+VlEFSwkAQRf/H7PUmcgOTnbCxXFsCnsDyJHoEgsVeN4Yd8QbhBhxB95BvzZAZhxBCmGVn5qX79+8mGs7tu+KeMIbQB9G3V4QCRFES6eKRef0Zw8Bwrr62eCUQN/3AxQTkvMDL1wMLF/MgA8EGSxBXbRD/TfhBhMTBLOhsyH9qHmZBg5lyAjedMqldMmVmIyashF12hUj4BTAl8ezelETCQSoTHHcBGQgjxEaX4UwfAO5sQ4WUw5mM8tcB6FNCTOIyhO9B6o0RCgOS105IszEn1gYb5A7WCqke10FrRri3qVcwc8+X02KRw9ICf1hbAHDgFp+tmsWume2Uz6zYR9tfwawEJxxv299qSAOzIh0fGwHf2YixH5GwS108VfnH+2pvaM+BhZbYJR2cao28nZo7U462mCyeuD5YIyHQNIAlJtwtNef6lYRCPUybFtsfcIXRwbaurX4AAAAASUVORK5CYII="},"6dde":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ipaddexchange-box"},[s("div",{staticClass:"add-exchange"},[s("div",{staticClass:"exchange-title"},[t._v(t._s(t.$t("m.ip.addExchange")))]),s("el-form",{ref:"editform",staticClass:"edit-form",attrs:{rules:t.editRules,"label-width":"150px","label-position":"left",model:t.exchangeData}},[s("el-form-item",{attrs:{label:"Exchange",prop:"exchangeName"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("Exchange")])]),s("el-input",{on:{blur:function(e){return t.cancelValid("exchangeName")},focus:function(e){return t.cancelValid("exchangeName")}},model:{value:t.exchangeData.exchangeName,callback:function(e){t.$set(t.exchangeData,"exchangeName",e)},expression:"exchangeData.exchangeName"}})],1),s("el-form-item",{attrs:{label:"VIP ",prop:"vipEntrance"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("VIP Entrance :")])]),s("el-input",{on:{blur:function(e){return t.cancelValid("vip")},focus:function(e){return t.cancelValid("vip")}},model:{value:t.exchangeData.vipEntrance,callback:function(e){t.$set(t.exchangeData,"vipEntrance","string"===typeof e?e.trim():e)},expression:"exchangeData.vipEntrance"}})],1),s("div",{staticClass:"edit-text"},[s("span",[t._v(t._s(t.$t("m.ip.rollsiteAndRouterInfo")))]),s("el-button",{attrs:{type:"text"},on:{click:t.addRollsite}},[t._v(t._s(t.$t("m.common.add")))])],1),t._l(t.rollsiteList,function(e,i){return s("section",{key:i,staticClass:"rollsite-text"},[s("el-button",{staticClass:"remove-section",class:{remove:1!==t.rollsiteList.length},attrs:{type:"text",disabled:1===t.rollsiteList.length,icon:"el-icon el-icon-close"},on:{click:function(e){return t.removeRollsite(i)}}}),s("el-form-item",{attrs:{label:t.$t("m.ip.rollsiteNetworkAccess"),prop:"networkAccess"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v(t._s(t.$t("m.ip.rollsiteNetworkAccess")))])]),s("el-input",{class:{inputwarn:e.networkAccessWarnshow},on:{focus:function(t){e.warnshow=!1}},model:{value:e.networkAccess,callback:function(s){t.$set(e,"networkAccess","string"===typeof s?s.trim():s)},expression:"item.networkAccess"}})],1),s("el-form-item",{attrs:{label:t.$t("m.site.networkExits"),prop:"networkAccessExit"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v(t._s(t.$t("m.site.networkExits")))])]),s("el-input",{class:{inputwarn:e.networkExitsWarnshow},on:{focus:function(t){e.warnshow=!1}},model:{value:e.networkAccessExit,callback:function(s){t.$set(e,"networkAccessExit","string"===typeof s?s.trim():s)},expression:"item.networkAccessExit"}})],1),s("div",{staticClass:"edit-table"},[s("el-table",{attrs:{data:t.rollsiteList[i].partyAddBeanList,"max-height":"250"}},[s("el-table-column",{scopedSlots:t._u([{key:"header",fn:function(a){return[s("div",{staticClass:"router-info"},[s("span",[t._v(t._s(t.$t("m.ip.routerInfo")))]),s("el-button",{attrs:{type:"text",disabled:!e.networkAccess,icon:"el-icon-refresh-right"},on:{click:function(e){return t.toAcquire(i)}}}),s("el-button",{attrs:{type:"text",disabled:!e.networkAccess,icon:"el-icon-circle-plus"},on:{click:function(e){return t.showAddSiteNet(i)}}})],1)]}}],null,!0)},[s("el-table-column",{attrs:{type:"index",label:t.$t("m.common.index"),width:"65"}}),s("el-table-column",{attrs:{prop:"partyId",label:t.$t("m.common.partyID"),width:"75","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"networkAccess",label:t.$t("m.ip.routerNetworkAccess"),width:"180","show-overflow-tooltip":""}}),s("el-table-column",{attrs:{prop:"secureStatus",label:t.$t("m.ip.isSecure"),width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(1===e.row.secureStatus?t.$t("m.common.true"):t.$t("m.common.false")))])]}}],null,!0)}),s("el-table-column",{attrs:{prop:"pollingStatus",label:t.$t("m.ip.isPolling"),width:"85"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(1===e.row.pollingStatus?t.$t("m.common.true"):t.$t("m.common.false")))])]}}],null,!0)}),s("el-table-column",{attrs:{prop:"Update Time",label:t.$t("m.common.updateTime"),width:"155","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("span",[t._v(t._s(t._f("dateFormat")(e.row.updateTime)))])]}}],null,!0)}),s("el-table-column",{attrs:{prop:"status",align:"center",label:t.$t("m.ip.status"),"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?s("span",[t._v(t._s(t.$t("m.common.unactivated")))]):t._e(),1===e.row.status?s("span",[t._v(t._s(t.$t("m.common.published")))]):t._e(),2===e.row.status?s("span",[t._v(t._s(t.$t("m.common.unpublished")))]):t._e(),3===e.row.status?s("span",[t._v(t._s(t.$t("m.common.toDeleted")))]):t._e()]}}],null,!0)}),s("el-table-column",{attrs:{prop:"",align:"center",label:t.$t("m.common.action")},scopedSlots:t._u([{key:"default",fn:function(e){return["default"===e.row.partyId?s("span",[s("el-button",{attrs:{type:"text"}},[s("i",{staticClass:"el-icon-edit",on:{click:function(s){return t.toEditSiteNet(e)}}})]),s("el-button",{attrs:{disabled:"",type:"text"}},[s("i",{staticClass:"el-icon-close"})])],1):s("span",[1===e.row.status||2===e.row.status?s("span",[s("el-button",{attrs:{type:"text"}},[s("i",{staticClass:"el-icon-edit",on:{click:function(s){return t.toEditSiteNet(e)}}})]),s("el-button",{attrs:{type:"text"}},[s("i",{staticClass:"el-icon-close",on:{click:function(s){t.siteNetIndex=e.$index,e.row.status=3}}})])],1):t._e(),3===e.row.status?s("el-button",{attrs:{type:"text"},on:{click:function(s){return t.toRecover(e)}}},[t._v("\n                                              "+t._s(t.$t("m.common.recover"))+"\n                                          ")]):t._e()],1)]}}],null,!0)})],1)],1)],1)],1)})],2),s("div",{staticClass:"exchange-footer"},[s("el-button",{staticClass:"ok-btn",attrs:{type:"primary"},on:{click:t.toaction}},[t._v(t._s(t.$t("m.common.OK")))]),s("el-button",{staticClass:"ok-btn",attrs:{type:"info"},on:{click:t.tocancel}},[t._v(t._s(t.$t("m.common.cancel")))])],1)],1),s("el-dialog",{staticClass:"add-site-dialog",attrs:{visible:t.addSiteNet,width:"500px","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.addSiteNet=e}}},[s("div",{staticClass:"site-net-title"},[t._v("\n              "+t._s(t.$t("m.ip.routerNetworkAccess"))+"\n          ")]),s("div",{staticClass:"site-net-table"},[s("el-form",{ref:"siteNetform",staticClass:"edit-form",attrs:{rules:t.siteEditRules,"label-width":"200px","label-position":"top",model:t.tempSiteNet}},[s("el-form-item",{staticClass:"inline",class:{inline:"default"===t.tempSiteNet.partyId},attrs:{label:"",prop:"partyId"}},[s("span",{attrs:{slot:"label"},slot:"label"},["add"===t.siteNetType?s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}):t._e(),s("span",[t._v(t._s(t.$t("m.common.partyID"))+" :")])]),"edit"===t.siteNetType&&1===t.tempSiteNet.status||"default"===t.tempSiteNet.partyId?s("span",[t._v("\n                          "+t._s(t.tempSiteNet.partyId)+"\n                      ")]):s("el-input",{on:{blur:t.checkParty,focus:function(e){return t.$refs["siteNetform"].clearValidate("partyId")}},model:{value:t.tempSiteNet.partyId,callback:function(e){t.$set(t.tempSiteNet,"partyId","string"===typeof e?e.trim():e)},expression:"tempSiteNet.partyId"}})],1),s("el-form-item",{staticStyle:{height:"100%"},attrs:{label:"",prop:"networkAccess"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v(t._s(t.$t("m.ip.routerNetworkAccess"))+"：")])]),s("el-input",{class:{"edit-text":!0,"plus-text":!0,"Network-text":!0,exitwarn:t.routerNetworkAccesswarnshow},attrs:{placeholder:""},on:{focus:function(e){return t.addShow("router")}},model:{value:t.tempSiteNet.networkAccess,callback:function(e){t.$set(t.tempSiteNet,"networkAccess",e)},expression:"tempSiteNet.networkAccess"}},[s("i",{staticClass:"el-icon-plus plus",attrs:{slot:"suffix"},on:{click:function(e){return t.addShow("router")}},slot:"suffix"})])],1),s("el-form-item",{staticClass:"inline",attrs:{label:t.$t("m.ip.isSecure"),prop:"isSecure"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("isSecure:")])]),s("el-switch",{model:{value:t.isSecure,callback:function(e){t.isSecure=e},expression:"isSecure"}})],1),s("el-form-item",{staticClass:"inline",attrs:{label:t.$t("m.ip.isPolling"),prop:"isPolling"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"3px"}}),s("span",[t._v("isPolling:")])]),"exchange"===t.tempSiteNet.partyId?s("span",[s("el-switch",{attrs:{disabled:""},model:{value:t.isPolling,callback:function(e){t.isPolling=e},expression:"isPolling"}})],1):s("span",[s("el-switch",{model:{value:t.isPolling,callback:function(e){t.isPolling=e},expression:"isPolling"}})],1)])],1),s("div",{staticClass:"dialog-footer"},[s("el-button",{staticClass:"ok-btn",attrs:{type:"primary"},on:{click:t.toAddSiteNet}},[t._v(t._s(t.$t("m.common.submit")))]),s("el-button",{staticClass:"ok-btn",attrs:{type:"info"},on:{click:t.cancelAddSiteNet}},[t._v(t._s(t.$t("m.common.cancel")))])],1)],1)]),s("el-dialog",{staticClass:"site-toleave-dialog",attrs:{visible:t.isleavedialog,width:"700px"},on:{"update:visible":function(e){t.isleavedialog=e}}},[s("div",{staticClass:"line-text-one"},[t._v(t._s(t.$t("m.siteAdd.sureLeavePage")))]),s("div",{staticClass:"line-text-two"},[t._v(t._s(t.$t("m.siteAdd.notSavedTips")))]),s("div",{staticClass:"dialog-footer"},[s("el-button",{staticClass:"sure-btn",attrs:{type:"primary"},on:{click:t.sureLeave}},[t._v(t._s(t.$t("m.common.sure")))]),s("el-button",{staticClass:"sure-btn",attrs:{type:"info"},on:{click:t.cancelLeave}},[t._v(t._s(t.$t("m.common.cancel")))])],1)]),s("ipeditadd",{ref:"ipeditadd",attrs:{formName:t.formName},on:{updateIp:t.updateIp}})],1)},a=[],n=s("cebc"),c=(s("5df3"),s("4f7f"),s("75fc")),o=(s("28a5"),s("ac6a"),s("7f7f"),s("c6a8")),l=s("c1df"),r=s.n(l),d=s("0dcd"),u={name:"ipaddexchange",components:{ipeditadd:d["a"]},filters:{dateFormat:function(t){return r()(t).format("YYYY-MM-DD HH:mm:ss")}},data:function(){var t=this;return{addSiteNet:!1,isleave:!1,isleavedialog:!1,siteNetIndex:0,rollsiteIndex:0,routerNetworkAccesswarnshow:!1,formName:"siteNetform",rollsiteList:[{networkAccessWarnshow:!1,networkExitsWarnshow:!1,networkAccess:"",networkAccessExit:"",partyAddBeanList:[]}],tempExchangeDataList:[],tempSiteNet:{},exchangeData:{},isSecure:!1,isPolling:!0,siteNetType:"add",partyIdList:[],tempPartyId:"",siteEditRules:{partyId:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?t.checkResult?i(new Error(t.$t("m.ip.partyIDAssigned"))):i():i(new Error(t.$t("m.common.requiredfieldWithType",{type:t.$t("m.common.partyID")})))}}],networkAccess:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?i():i(new Error(t.$t("m.common.requiredfieldWithType",{type:t.$t("m.ip.routerNetworkAccess")})))}}]},editRules:{exchangeName:[{required:!0,message:" ",trigger:"bulr"}],vipEntrance:[{required:!0,trigger:"bulr",validator:function(e,s,i){s=s||"";var a=s.trim();a?i():i(new Error(t.$t("m.ip.vipRequired")))}}]}}},created:function(){},mounted:function(){var t=this;this.$router.beforeEach(function(e,s,i){t.leaveRouteName=e.name,t.isleave?i():(t.isleavedialog=!0,i(!1))})},methods:{addShow:function(t){this.$refs["ipeditadd"].networkacesstype=t,this.$refs["ipeditadd"].adddialog=!0;var e={router:"networkAccess"},s=e[t];if(this.tempSiteNet[s]){var i=[];this.tempSiteNet[s].split(";").forEach(function(t){if(t){var e={};e.ip=t,e.show=!1,e.checked=!1,i.push(e)}}),this.$refs["ipeditadd"].entrancesSelect=Object(c["a"])(new Set(i))}else this.$refs["ipeditadd"].entrancesSelect=[]},addRollsite:function(){this.rollsiteList.unshift({warnshow:!1,networkAccess:"",partyAddBeanList:[]})},showAddSiteNet:function(t){this.rollsiteList[t].networkAccess&&(this.rollsiteIndex=t,this.siteNetType="add",this.isSecure=!0,this.tempSiteNet={status:2},this.addSiteNet=!0,this.$refs["siteNetform"]&&this.$refs["siteNetform"].resetFields())},removeRollsite:function(t){this.rollsiteList.splice(t,1)},toaction:function(){var t=this,e=!0,s=!0,i=[],a=[];this.rollsiteList.forEach(function(n,o){n.networkAccess||(t.rollsiteList[o].warnshow=!0),0===n.partyAddBeanList.length&&(e=!1),i.push(n.networkAccess),a=Object(c["a"])(new Set(i)),i.length!==a.length&&(s=!1,t.rollsiteList[o].warnshow=!0)}),e?s?this.$refs["editform"].validate(function(i){if(i&&e&&s){var a={exchangeName:t.exchangeData.exchangeName.trim(),rollSiteAddBeanList:t.rollsiteList,vipEntrance:t.exchangeData.vipEntrance};Object(o["b"])(a).then(function(e){t.isleave=!0,t.$router.push({name:"IP Manage",query:{type:"exchange"}})})}}):this.$message.error(this.$t("m.ip.rollsiteNetworkExists")):this.$message.error(this.$t("m.ip.routerInfoRequired"))},tocancel:function(){this.$router.push({name:"IP Manage",query:{type:"exchange"}})},cancelValid:function(t){this.$refs["editform"].clearValidate(t)},toAddSiteNet:function(){var t=this,e=this.rollsiteIndex;this.tempSiteNet.secureStatus=!0===this.isSecure?1:2,this.tempSiteNet.pollingStatus=!0===this.isPolling?1:2,this.$refs["siteNetform"].validate(function(s){if(s)if("edit"===t.siteNetType){t.partyIdList=t.tempExchangeDataList[e].map(function(t){return t.partyId});var i=t.tempExchangeDataList[e][t.siteNetIndex];i.networkAccess!==t.tempSiteNet.networkAccess||i.secureStatus!==t.tempSiteNet.secureStatus||i.pollingStatus!==t.tempSiteNet.pollingStatus?t.tempSiteNet.status=2:t.tempSiteNet.status=i.status,t.rollsiteList[e].partyAddBeanList[t.siteNetIndex]=Object(n["a"])({},t.tempSiteNet),t.rollsiteList[e].partyAddBeanList=Object(c["a"])(t.rollsiteList[e].partyAddBeanList),t.addSiteNet=!1}else"add"===t.siteNetType&&(t.rollsiteList[e].partyAddBeanList.push(Object(n["a"])({},t.tempSiteNet)),t.rollsiteList[e].partyAddBeanList=Object(c["a"])(t.rollsiteList[e].partyAddBeanList),t.tempExchangeDataList[e]=JSON.parse(JSON.stringify(t.rollsiteList[e].partyAddBeanList)),t.addSiteNet=!1)})},cancelAddSiteNet:function(){this.tempSiteNet={},this.addSiteNet=!1,this.$refs["siteNetform"].resetFields()},toEditSiteNet:function(t){this.siteNetType="edit",this.addSiteNet=!0,this.tempSiteNet=Object(n["a"])({},t.row),this.isSecure=1===this.tempSiteNet.secureStatus,this.isPolling=1===this.tempSiteNet.pollingStatus,this.siteNetIndex=t.$index,this.tempPartyId=t.row.partyId},todelSiteNet:function(t,e){this.rollsiteList[t].partyAddBeanList.splice(e.$index,1)},toAcquire:function(t){var e=this;if(this.rollsiteList[t].networkAccess){this.rollsiteIndex=t;var s={networkAccess:this.rollsiteList[t].networkAccess};Object(o["r"])(s).then(function(s){e.rollsiteList[t].partyAddBeanList=s.data,e.tempExchangeDataList[t]=JSON.parse(JSON.stringify(s.data))}).catch(function(t){var s=document.querySelector(".el-message");s||e.$message.error(t.msg)})}},toSearch:function(t){var e=this;Object(o["N"])(!this.rollsiteList[t].searchData).then(function(t){e.exchangeData.partyAddBeanList=Object(c["a"])(t.data),e.tempExchangeDataList=JSON.parse(JSON.stringify(t.data))})},sureLeave:function(){this.isleave=!0,this.isleavedialog=!1;var t="IP Manage"===this.leaveRouteName?{type:"exchange"}:"";this.$router.push({name:this.leaveRouteName,query:t})},cancelLeave:function(){this.$router.push({name:"IP Manage",type:"exchange"}),this.$store.dispatch("SetMune","IP Manage"),this.isleavedialog=!1},toRecover:function(t){var e=this.rollsiteIndex,s=this.tempExchangeDataList[this.rollsiteIndex][this.siteNetIndex],i=t.row;s.networkAccess!==i.networkAccess||s.secureStatus!==i.secureStatus||s.pollingStatus!==i.pollingStatus?i.status=2:i.status=s.status,this.rollsiteList[e].partyAddBeanList=Object(c["a"])(this.rollsiteList[e].partyAddBeanList)},checkParty:function(){var t=this,e=this,s=e.tempSiteNet.partyId;Object(o["i"])({partyId:s}).then(function(e){!0===e.data&&(t.checkResult=e.data,t.$refs["siteNetform"].validateField("partyId",function(t){}))})},updateIp:function(t){this.$set(this.tempSiteNet,"".concat(t.name),t.data)}}},p=u,m=(s("02ac"),s("2877")),h=Object(m["a"])(p,i,a,!1,null,null,null);e["default"]=h.exports},"779a":function(t,e,s){}}]);