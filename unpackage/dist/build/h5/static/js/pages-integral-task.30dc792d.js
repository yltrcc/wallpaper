(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-integral-task"],{"0ebf":function(e,t,i){"use strict";i.r(t);var a=i("3d2c"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},"393d":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.top uni-image[data-v-bfa767de]{width:%?120?%;height:%?120?%}.top .kapian[data-v-bfa767de]{height:%?240?%;margin:%?-60?% %?40?% 0 %?40?%;background:-webkit-gradient(linear,left top,right bottom,from(#6cb3ff),to(#866bf1));background:-webkit-linear-gradient(top left,#6cb3ff,#866bf1);background:linear-gradient(to bottom right,#6cb3ff,#866bf1);color:#fff;border-radius:%?36?%;-webkit-box-shadow:0 10px 20px #a2beff;box-shadow:0 10px 20px #a2beff}.top .kapian .price[data-v-bfa767de]{font-size:32px;font-weight:700}.top .kapian .shuom[data-v-bfa767de]{color:#e5e5e5}.title[data-v-bfa767de]{border-left:%?6?% solid #648af1;padding-left:%?15?%;line-height:%?34?%;color:grey}.tab .icon[data-v-bfa767de]{width:%?80?%;height:%?80?%;border-radius:%?80?%}.tab .btn[data-v-bfa767de]{position:relative;background-image:-webkit-gradient(linear,left top,right top,from(#fcfc44),to(#f8c93c));background-image:-webkit-linear-gradient(left,#fcfc44,#f8c93c);background-image:linear-gradient(90deg,#fcfc44,#f8c93c);padding:7px 15px;border-radius:20px;font-size:12px}.tab .hover-class[data-v-bfa767de]{-webkit-transform:scale(.95);transform:scale(.95);-webkit-transition:all .2s;transition:all .2s}.tab:nth-child(1) .icon[data-v-bfa767de]{background-image:-webkit-gradient(linear,left top,right top,from(#f5d553),to(#f0b347));background-image:-webkit-linear-gradient(left,#f5d553,#f0b347);background-image:linear-gradient(90deg,#f5d553,#f0b347)}.tab:nth-child(2) .icon[data-v-bfa767de]{background-image:-webkit-gradient(linear,left top,right top,from(#84d787),to(#5fbb92));background-image:-webkit-linear-gradient(left,#84d787,#5fbb92);background-image:linear-gradient(90deg,#84d787,#5fbb92)}.tab:nth-child(3) .icon[data-v-bfa767de]{background-image:-webkit-gradient(linear,left top,right top,from(#6cb3ff),to(#5476f1));background-image:-webkit-linear-gradient(left,#6cb3ff,#5476f1);background-image:linear-gradient(90deg,#6cb3ff,#5476f1)}.tab:nth-child(4) .icon[data-v-bfa767de]{background-image:-webkit-gradient(linear,left top,right top,from(#fa7a09),to(#ee6000));background-image:-webkit-linear-gradient(left,#fa7a09,#ee6000);background-image:linear-gradient(90deg,#fa7a09,#ee6000)}',""]),e.exports=t},"3be4":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uIcon:i("2200").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":e.isFixed,"u-border-bottom":e.borderBottom},style:[e.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:e.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[e.navbarInnerStyle]},[e.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:e.backIconName,color:e.backIconColor,size:e.backIconSize}})],1),e.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[e.backTextStyle]},[e._v(e._s(e.backText))]):e._e()],1):e._e(),e.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[e.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:e.titleColor,fontSize:e.titleSize+"rpx",fontWeight:e.titleBold?"bold":"normal"}},[e._v(e._s(e.title))])],1):e._e(),i("v-uni-view",{staticClass:"u-slot-content"},[e._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[e._t("right")],2)],1)],1),e.isFixed&&!e.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(e.navbarHeight)+e.statusBarHeight+"px"}}):e._e()],1)},r=[]},"3d2c":function(e,t,i){"use strict";i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=uni.getSystemInfoSync(),n={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleBold:{type:Boolean,default:!1},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var e={};return e.height=this.navbarHeight+"px",e},navbarStyle:function(){var e={};return e.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(e,this.background),e},titleStyle:function(){var e={};return e.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",e.width=uni.upx2px(this.titleWidth)+"px",e},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};t.default=r},"421e":function(e,t,i){"use strict";(function(e){var a=i("4ea4");i("e25e"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("ade3"));i("96cf");var r=a(i("1da1")),o={data:function(){return{userIntegral:0,signIntegral:0,inviteIntegral:0,adIntegral:0,chargeShow:!1,cashShow:!1,loadShow:!0}},onLoad:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getConfig();case 2:e.loadShow=!1;case 3:case"end":return t.stop()}}),t)})))()},onShow:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getUser();case 1:case"end":return t.stop()}}),t)})))()},methods:(0,n.default)({getUser:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t,i.next=3,e.callFunction({name:"query_map",data:{dbName:"wx_user",id:a.vuex_user._id}});case 3:n=i.sent,a.userIntegral=n.result.integral;case 5:case"end":return i.stop()}}),i)})))()},getConfig:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t,n={},i.next=4,e.callFunction({name:"config_map",data:{keys:["signIntegral","inviteIntegral","adIntegral","chargeShow","adUnitId"]}});case 4:n=i.sent,n.result.success&&(a.signIntegral=parseInt(n.result.data[0]),a.inviteIntegral=parseInt(n.result.data[1]),a.adIntegral=parseInt(n.result.data[2]),a.chargeShow=n.result.data[3],a.adUnitId=n.result.data[4]);case 6:case"end":return i.stop()}}),i)})))()},signClick:function(){var t=this;return(0,r.default)(regeneratorRuntime.mark((function i(){var a,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a=t,a.vuex_user){i.next=4;break}return a.loginShow=!0,i.abrupt("return");case 4:if(!a.isSign){i.next=6;break}return i.abrupt("return");case 6:return uni.showLoading({mask:!0,title:"签到中..."}),i.next=9,e.callFunction({name:"sign_add",data:{userId:a.vuex_user._id}});case 9:n=i.sent,uni.hideLoading(),n.result.success?(a.getUser(),a.signTitle="<p style='font-weight: 550;font-size: 16px;'>签到成功</p><p style='padding-top: 10px;'>获得<span class='num'>"+n.result.integral+"</span>积分</p>",a.signShow=!0,a.isSign=!0):uni.showToast({icon:"none",mask:!0,title:n.result.msg,duration:1500});case 12:case"end":return i.stop()}}),i)})))()},adClick:function(){var e=this;e.vuex_user?videoAd&&videoAd.show().catch((function(e){videoAd.load().then((function(){return videoAd.show()}))})):e.loginShow=!0},adLoad:function(){var e=this;wx.createRewardedVideoAd&&(videoAd.onError((function(e){console.log("videoAd onError",e)})),videoAd.onClose((function(t){t&&t.isEnded||void 0===t?e.vuex_user&&e.userIntegral():console.log("中途退出")})))},charge:function(){uni.navigateTo({url:"/pages/integral/charge"})},cash:function(){uni.navigateTo({url:"/pages/integral/cash"})}},"adClick",(function(){var e=null;wx.createRewardedVideoAd&&(e=wx.createRewardedVideoAd({adUnitId:this.adUnitId}),e.onError((function(e){console.log("videoAd onError",res)})),e.onClose((function(e){e&&e.isEnded})))})),onShareAppMessage:function(e){return{title:"我等风也等你，近听水无声~",path:"/pages/index/index?userId="+this.vuex_user._id}}};t.default=o}).call(this,i("a9ff")["default"])},"4b6e":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return a}));var a={uNavbar:i("8c35").default,uIcon:i("2200").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!e.loadShow,expression:"!loadShow"}]},[a("u-navbar",{attrs:{"is-back":!0,title:"积分任务","title-width":"325","title-color":"#333333","title-size":"28","border-bottom":!1}}),a("v-uni-view",{staticClass:"top"},[a("v-uni-view",{staticClass:"icon u-flex u-row-center u-col-center u-p-t-20"},[a("v-uni-image",{attrs:{src:i("c557")}})],1),a("v-uni-view",{staticClass:"kapian u-flex-col u-row-center u-col-center u-p-t-30"},[a("v-uni-view",{staticClass:"price"},[e._v(e._s(e.userIntegral))]),a("v-uni-view",{staticClass:"shuom u-font-12 u-tips-color u-p-t-10"},[e._v("当前可用积分")])],1)],1),a("v-uni-view",{staticClass:"u-p-l-40 u-p-r-40"},[a("v-uni-view",{staticClass:"u-font-18 u-m-t-80 u-m-b-30 title"},[e._v("积分任务")]),a("v-uni-view",{staticClass:"safe-area-inset-bottom"},[a("v-uni-view",{staticClass:"tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30"},[a("v-uni-view",{staticClass:"u-flex u-row-left u-col-center"},[a("v-uni-view",{staticClass:"icon u-flex u-row-center u-col-center"},[a("u-icon",{attrs:{name:"/static/icon/user2.png",size:"46"}})],1),a("v-uni-view",{staticClass:"u-p-l-20 u-p-t-10"},[a("v-uni-view",{},[e._v("每日签到")]),a("v-uni-view",{staticClass:"u-font-12 u-light-color"},[e._v("+"+e._s(e.signIntegral)+"积分/天")])],1)],1),a("v-uni-view",{staticClass:"btn",attrs:{"hover-class":"hover-class","hover-stay-time":"50"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.signClick.apply(void 0,arguments)}}},[e._v("去签到")])],1),a("v-uni-view",{staticClass:"tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30"},[a("v-uni-view",{staticClass:"u-flex u-row-left u-col-center"},[a("v-uni-view",{staticClass:"icon u-flex u-row-center u-col-center"},[a("u-icon",{attrs:{name:"/static/icon/user1.png",size:"46"}})],1),a("v-uni-view",{staticClass:"u-p-l-20 u-p-t-10"},[a("v-uni-view",{},[e._v("邀请好友")]),a("v-uni-view",{staticClass:"u-font-12 u-light-color"},[e._v("+"+e._s(e.inviteIntegral)+"积分/位")])],1)],1),a("v-uni-view",{staticClass:"btn",attrs:{"hover-class":"hover-class","hover-stay-time":"50"}},[e._v("去邀请"),a("v-uni-button",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",opacity:"0"},attrs:{"open-type":"share"}})],1)],1),e.adUnitId?a("v-uni-view",{staticClass:"tab u-flex u-row-between u-col-center border-bottom u-p-t-30 u-p-b-30"},[a("v-uni-view",{staticClass:"u-flex u-row-left u-col-center"},[a("v-uni-view",{staticClass:"icon u-flex u-row-center u-col-center"},[a("u-icon",{attrs:{name:"/static/icon/video.png",size:"46"}})],1),a("v-uni-view",{staticClass:"u-p-l-20 u-p-t-10"},[a("v-uni-view",{},[e._v("看广告")]),a("v-uni-view",{staticClass:"u-font-12 u-light-color"},[e._v("+"+e._s(e.adIntegral)+"积分/次")])],1)],1),a("v-uni-view",{staticClass:"btn",attrs:{"hover-class":"hover-class","hover-stay-time":"50"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.adClick.apply(void 0,arguments)}}},[e._v("去观看")])],1):e._e(),a("v-uni-view",{staticClass:"u-font-12 u-light-color u-text-center u-p-t-40"},[e._v("更多任务敬请期待~")])],1),a("v-uni-ad",{attrs:{"unit-id":"adunit-8f852f6b8fb762d7","ad-type":"video","ad-theme":"white"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.loadShow,expression:"loadShow"}],staticClass:"loading_page"},[a("v-uni-image",{attrs:{src:"/static/loading/loading.gif"}})],1)],1)},r=[]},"8c35":function(e,t,i){"use strict";i.r(t);var a=i("3be4"),n=i("0ebf");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("e4e5");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"6fefbe5a",null,!1,a["a"],o);t["default"]=u.exports},9061:function(e,t,i){var a=i("a141");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("12724208",a,!0,{sourceMap:!1,shadowMode:!1})},a141:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-navbar[data-v-6fefbe5a]{width:100%}.u-navbar-fixed[data-v-6fefbe5a]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-6fefbe5a]{width:100%}.u-navbar-inner[data-v-6fefbe5a]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-6fefbe5a]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-6fefbe5a]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-6fefbe5a]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-6fefbe5a]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-6fefbe5a]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-6fefbe5a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-6fefbe5a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),e.exports=t},a867:function(e,t,i){"use strict";i.r(t);var a=i("421e"),n=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);t["default"]=n.a},c557:function(e,t,i){e.exports=i.p+"static/img/jinbi.ec5ef10f.png"},c972:function(e,t,i){"use strict";var a=i("e3a2"),n=i.n(a);n.a},e3a2:function(e,t,i){var a=i("393d");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("073ef2e8",a,!0,{sourceMap:!1,shadowMode:!1})},e4e5:function(e,t,i){"use strict";var a=i("9061"),n=i.n(a);n.a},fba6:function(e,t,i){"use strict";i.r(t);var a=i("4b6e"),n=i("a867");for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);i("c972");var o,s=i("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"bfa767de",null,!1,a["a"],o);t["default"]=u.exports}}]);