(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dynamicdetail-dynamicdetail"],{"0ad1":function(t,e,n){"use strict";var i=n("fe5c"),o=n.n(i);o.a},"1aa1":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".container[data-v-7c4b305c]{position:relative}.container[data-v-7c4b305c],uni-video[data-v-7c4b305c]{width:100%;height:100%}uni-video[data-v-7c4b305c]{position:absolute}.bottom-container[data-v-7c4b305c]{width:100%;position:absolute;bottom:%?50?%}.bottom-container[data-v-7c4b305c],.download-container[data-v-7c4b305c]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.download-container[data-v-7c4b305c]{width:70%;color:#fff;font-size:%?32?%;border-radius:50px;background:#000;opacity:.7;font-weight:700}.back[data-v-7c4b305c]{width:45px;height:45px;position:absolute;background-color:#fff;left:%?40?%;top:%?80?%;opacity:.7;border-radius:500px}.date-container[data-v-7c4b305c]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:%?150?%;opacity:.9}.time[data-v-7c4b305c]{font-size:%?120?%;color:#fff}.date[data-v-7c4b305c]{font-size:%?40?%;color:#fff}",""]),t.exports=e},"5e58":function(t,e,n){"use strict";n.r(e);var i=n("857b"),o=n("f674");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("0ad1");var c,s=n("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"7c4b305c",null,!1,i["a"],c);e["default"]=r.exports},"857b":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{},[n("v-uni-video",{attrs:{autoplay:!0,loop:!0,controls:"false",enableProgressGesture:"false",objectFit:"cover",showCenterPlayBtn:"false",showFullscreenBtn:"false",showPlayBtn:"false",src:t.videoSrc},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.videoTap.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"date-container"},[n("v-uni-text",{staticClass:"time"},[t._v(t._s(t.time))]),n("v-uni-text",{staticClass:"date"},[t._v(t._s(t.date))])],1),n("v-uni-view",{staticClass:"bottom-container"},[n("v-uni-view",{staticClass:"download-container",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.downloadTap.apply(void 0,arguments)}}},[t._v("下载壁纸")])],1),n("v-uni-image",{staticClass:"back",attrs:{src:"/static/images/back.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backTap.apply(void 0,arguments)}}})],1)},a=[]},a7fc:function(t,e,n){"use strict";n("a15b"),n("d81d"),n("d3b7"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{videoSrc:"",hideBtn:!1}},components:{},props:{},onLoad:function(t){var e=decodeURIComponent(t.url);console.log(e),this.setData({videoSrc:e}),this.getDate()},onShareAppMessage:function(){return{title:"精选高清手机壁纸，动态壁纸，头像",path:"pages/find/dynamic/dynamic"}},methods:{backTap:function(t){uni.navigateBack({delta:1})},videoTap:function(t){this.setData({hideBtn:!this.hideBtn})},downloadTap:function(t){var e=this;uni.getSetting({success:function(t){t.authSetting["scope.writePhotosAlbum"]?e.save():uni.authorize({scope:"scope.writePhotosAlbum",success:function(){e.save()},fail:function(){uni.showModal({title:"温馨提示",content:"您未授权访问相册的权限，无法保存，请允许访问相册",showCancel:!1})}})}})},save:function(){uni.showLoading({title:"下载中"});var t=this;uni.downloadFile({url:t.videoSrc.replace("http","https"),success:function(t){200===t.statusCode&&uni.saveVideoToPhotosAlbum({filePath:t.tempFilePath,success:function(t){uni.hideLoading(),uni.showModal({content:"保存成功，请在相册中查看",confirmText:"知道了",showCancel:!1})}})}})},getDate:function(){var t=new Date,e=(t.getFullYear(),t.getMonth()+1),n=t.getDate(),i=t.getHours(),o=t.getMinutes(),a=(t.getSeconds(),e+"月"+n+"日"),c=[i,o].map(this.formatNumber).join(":");console.log(a),console.log(c),this.setData({date:a,time:c})},formatNumber:function(t){return(t=t.toString())[1]?t:"0"+t}}};e.default=i},f674:function(t,e,n){"use strict";n.r(e);var i=n("a7fc"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},fe5c:function(t,e,n){var i=n("1aa1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("d5a908ea",i,!0,{sourceMap:!1,shadowMode:!1})}}]);