(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dynamicdetail/dynamicdetail"],{"31bf":function(t,e,n){},"35db":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{videoSrc:"",hideBtn:!1}},components:{},props:{},onLoad:function(t){var e=decodeURIComponent(t.url);console.log(e),this.setData({videoSrc:e}),this.getDate()},onShareAppMessage:function(){return{title:"精选高清手机壁纸，动态壁纸，头像",path:"pages/find/dynamic/dynamic"}},methods:{backTap:function(e){t.navigateBack({delta:1})},videoTap:function(t){this.setData({hideBtn:!this.hideBtn})},downloadTap:function(e){var n=this;t.getSetting({success:function(e){e.authSetting["scope.writePhotosAlbum"]?n.save():t.authorize({scope:"scope.writePhotosAlbum",success:function(){n.save()},fail:function(){t.showModal({title:"温馨提示",content:"您未授权访问相册的权限，无法保存，请允许访问相册",showCancel:!1})}})}})},save:function(){t.showLoading({title:"下载中"});var e=this;t.downloadFile({url:e.videoSrc.replace("http","https"),success:function(e){200===e.statusCode&&t.saveVideoToPhotosAlbum({filePath:e.tempFilePath,success:function(e){t.hideLoading(),t.showModal({content:"保存成功，请在相册中查看",confirmText:"知道了",showCancel:!1})}})}})},getDate:function(){var t=new Date,e=(t.getFullYear(),t.getMonth()+1),n=t.getDate(),o=t.getHours(),a=t.getMinutes(),i=(t.getSeconds(),e+"月"+n+"日"),c=[o,a].map(this.formatNumber).join(":");console.log(i),console.log(c),this.setData({date:i,time:c})},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t}}};e.default=n}).call(this,n("543d")["default"])},"42af":function(t,e,n){"use strict";n.r(e);var o=n("35db"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"53ba":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"7c7b":function(t,e,n){"use strict";var o=n("31bf"),a=n.n(o);a.a},"9c3d":function(t,e,n){"use strict";(function(t){n("acd6");o(n("66fd"));var e=o(n("a4b0"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},a4b0:function(t,e,n){"use strict";n.r(e);var o=n("53ba"),a=n("42af");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("7c7b");var c,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=s.exports}},[["9c3d","common/runtime","common/vendor"]]]);