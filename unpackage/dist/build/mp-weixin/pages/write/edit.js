(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/write/edit"],{4127:function(e,t,n){},"434c":function(e,t,n){"use strict";var r=n("4127"),a=n.n(r);a.a},4931:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,r,a,u,o){try{var i=e[u](o),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function i(e){o(u,r,a,i,c,"next",e)}function c(e){o(u,r,a,i,c,"throw",e)}i(void 0)}))}}var c={data:function(){return{iconStyle:{fontSize:"12px",color:"#D8D8D8"},cover:{mode:0,category_id:"",category_name:"",tags:""},writeExam:!0,templateId:"",writeShow:!1}},onLoad:function(){var e=this;return i(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getConfig();case 2:case"end":return t.stop()}}),t)})))()},onShow:function(){var t=this,n=e.getStorageSync("categoryId"),r=e.getStorageSync("categoryName"),a=e.getStorageSync("tags");n&&r&&(t.cover.category_id=n,t.cover.category_name=r,e.removeStorageSync("categoryId"),e.removeStorageSync("categoryName")),a&&(t.cover.tags=a.join(","),e.removeStorageSync("tags"))},methods:{getConfig:function(){var e=this;return i(a.default.mark((function t(){var n,u;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,r.callFunction({name:"config_map",data:{keys:["writeExam","templateId"]}});case 3:u=t.sent,u.result.success&&(n.writeExam=u.result.data[0],n.templateId=u.result.data[1]);case 5:case"end":return t.stop()}}),t)})))()},submit:function(){var t=this;return i(a.default.mark((function n(){var u,o,c,s,l,d,f,m,v,g,p,h,w,b,_,x;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(u=t,o=u.$refs.uUpload.lists,0!=o.length){n.next=5;break}return u.$u.toast("请上传图片"),n.abrupt("return");case 5:if(u.cover.name){n.next=8;break}return u.$u.toast("请填写主题"),n.abrupt("return");case 8:if(u.cover.category_id&&u.cover.category_name){n.next=11;break}return u.$u.toast("请选择分类"),n.abrupt("return");case 11:if(!u.writeExam||!u.templateId){n.next=15;break}return n.next=14,e.requestSubscribeMessage({tmplIds:[u.templateId]});case 14:n.sent;case 15:e.showLoading({mask:!0,title:"加载中..."}),c=[],s=0;case 18:if(!(s<o.length)){n.next=35;break}return l=o[s].url,d=l.substring(l.lastIndexOf(".")+1),f=String(1e5*Math.random()).split(".")[0],m=new Date,v=m.getFullYear(),g=m.getMonth()+1<10?"0"+(m.getMonth()+1):m.getMonth()+1,p=m.getDate()<10?"0"+m.getDate():m.getDate(),h=m.getHours()<10?"0"+m.getHours():m.getHours(),w=m.getMinutes()<10?"0"+m.getMinutes():m.getMinutes(),b=m.getSeconds()<10?"0"+m.getSeconds():m.getSeconds(),_="wall/"+v+"/"+g+"/"+p+"/"+h+w+b+"_"+f+"."+d,n.next=32,r.uploadFile({filePath:l,cloudPath:_}).then(function(){var e=i(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.getTempFileURL({fileList:[t.fileID]}).then((function(e){e.fileList.length>0?c.push(e.fileList[0].tempFileURL):u.$u.toast("图片上传失败")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 32:s++,n.next=18;break;case 35:return u.cover.images=c,u.cover.image=c[0],u.cover.coll=[],u.cover.zan=[],u.cover.view=0,u.writeExam?u.cover.status=0:u.cover.status=1,u.cover.user_id=u.vuex_user._id,n.next=44,r.callFunction({name:"query_edit",data:{dbName:"wx_cover",filter:{_id:"-1"},addData:u.cover}});case 44:x=n.sent,e.hideLoading(),x.result.success&&setTimeout((function(){e.navigateBack()}),1e3),e.showToast({icon:"none",title:x.result.msg,mask:!0,duration:1e3});case 48:case"end":return n.stop()}}),n)})))()},cateClick:function(){e.navigateTo({url:"/pages/write/cate"})},tagsClick:function(){e.navigateTo({url:"/pages/write/tags"})},radioGroupChange:function(e){this.cover.mode=parseInt(e)}}};t.default=c}).call(this,n("543d")["default"],n("a9ff")["default"])},"4cec":function(e,t,n){"use strict";n.r(t);var r=n("e538"),a=n("cbd1");for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("434c");var o,i=n("f0c5"),c=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=c.exports},"6c9a":function(e,t,n){"use strict";(function(e){n("acd6");r(n("66fd"));var t=r(n("4cec"));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},cbd1:function(e,t,n){"use strict";n.r(t);var r=n("4931"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},e538:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"f970"))},uForm:function(){return n.e("uview-ui/components/u-form/u-form").then(n.bind(null,"b233"))},uUpload:function(){return n.e("uview-ui/components/u-upload/u-upload").then(n.bind(null,"2ceb"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"cd4e"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"4cd0"))},uRadioGroup:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-radio-group/u-radio-group")]).then(n.bind(null,"1a8b"))},uRadio:function(){return n.e("uview-ui/components/u-radio/u-radio").then(n.bind(null,"3195"))}},a=function(){var e=this,t=e.$createElement;e._self._c},u=[]}},[["6c9a","common/runtime","common/vendor"]]]);