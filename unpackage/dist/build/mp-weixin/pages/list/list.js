(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/list/list"],{"12f3":function(e,t,n){"use strict";(function(e){n("acd6");a(n("66fd"));var t=a(n("c034"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"172f":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"f970"))},uLoadmore:function(){return n.e("uview-ui/components/u-loadmore/u-loadmore").then(n.bind(null,"f49c"))},uSkeleton:function(){return n.e("uview-ui/components/u-skeleton/u-skeleton").then(n.bind(null,"0826"))}},r=function(){var e=this,t=e.$createElement;e._self._c},o=[]},"8a86":function(e,t,n){"use strict";var a=n("bca0"),r=n.n(a);r.a},bca0:function(e,t,n){},c034:function(e,t,n){"use strict";n.r(t);var a=n("172f"),r=n("fa5c");for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);n("8a86");var c,u=n("f0c5"),i=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],c);t["default"]=i.exports},d2ed:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n("a34a"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,a,r,o,c){try{var u=e[o](c),i=u.value}catch(s){return void n(s)}u.done?t(i):Promise.resolve(i).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function u(e){c(o,a,r,u,i,"next",e)}function i(e){c(o,a,r,u,i,"throw",e)}u(void 0)}))}}var i={data:function(){return{noData:!1,skeletonLoad:!0,title:"",modelType:"",modelPid:0,modelId:0,navbarTop:0,coverList:[{images:["https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png","https://secres.wxqcloud.qq.com//t/wx_fed/red-envelope-cover-platform/case2/2/1/70.png"]}],categoryList:[],pageIndex:0,loadStatus:"loadmore",rolldistance:"",adFlag:!0,backShow:!1}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var o,c,u,i,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t.type,c=t.pid,u=t.id,i=n,i.modelType=o,i.modelPid=c,i.modelId=u,"ranking"==o?i.title="排行榜":"category"==o?(i.title="分类",i.getCategory()):("search"==o||"tags"==o)&&(i.title=u),a.next=8,i.getList(o,u,2);case 8:s=e.createSelectorQuery().in(i),s.select(".query").boundingClientRect((function(e){i.navbarTop=e.top})).exec(),setTimeout((function(){i.skeletonLoad=!1}),200);case 11:case"end":return a.stop()}}),a)})))()},methods:{detail:function(t,n,a){var r=JSON.stringify(a);e.navigateTo({url:"/pages/detail/detail?id="+t+"&index="+n+"&images="+r})},cateClick:function(e,t,n){var a=this;t!=a.modelId&&(n&&(a.rolldistance=n),a.noData=!1,a.modelId=t,a.getList(e,t,1))},getList:function(e,t,n){var o=this;return u(r.default.mark((function c(){var u,i,s,l,d;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(u=o,i=u.coverList,1==n&&(u.coverList=[],i=[],u.pageIndex=0),u.pageIndex=u.pageIndex+1,u.loadStatus="loading",s={},"search"!=e){r.next=12;break}return r.next=9,a.callFunction({name:"query_list",data:{dbName:"wx_cover",search:t,pageIndex:u.pageIndex,pageSize:5}});case 9:s=r.sent,r.next=32;break;case 12:if("ranking"!=e){r.next=20;break}return l={status:1},d={},"hot"==t?d={name:"view",type:"desc"}:"zan"==t?d={name:"zan",type:"desc"}:"coll"==t&&(d={name:"coll",type:"desc"}),r.next=17,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:l,order:d,pageIndex:u.pageIndex,pageSize:5}});case 17:s=r.sent,r.next=32;break;case 20:if("category"!=e){r.next=28;break}return l={status:1},d={name:"time",type:"desc"},-1==t?d={name:"time",type:"desc"}:-2==t?d={name:"view",type:"desc"}:l={category_id:t,status:1},r.next=25,a.callFunction({name:"query_list",data:{dbName:"wx_cover",filter:l,order:d,pageIndex:u.pageIndex,pageSize:5}});case 25:s=r.sent,r.next=32;break;case 28:if("tags"!=e){r.next=32;break}return r.next=31,a.callFunction({name:"query_list",data:{dbName:"wx_cover",tags:t,pageIndex:u.pageIndex,pageSize:5}});case 31:s=r.sent;case 32:s.result.hasMore?u.loadStatus="loadmore":u.loadStatus="nomore",2==n&&(i=[]),i=i.concat(s.result.data),u.coverList=i,0==u.coverList.length?u.noData=!0:u.noData=!1;case 37:case"end":return r.stop()}}),c)})))()},getCategory:function(){var e=this;return u(r.default.mark((function t(){var n,o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,t.next=3,a.callFunction({name:"query_list",data:{dbName:"wx_category",order:{name:"sort",type:"desc"},pageIndex:1,pageSize:20}});case 3:o=t.sent,n.categoryList=o.result.data,n.rolldistance="akun"+(parseInt(n.modelPid)+2),console.log(n.rolldistance);case 7:case"end":return t.stop()}}),t)})))()},adLoad:function(){this.adFlag=!0},adError:function(e){this.adFlag=!1},adClose:function(){this.adFlag=!1},search:function(){e.navigateTo({url:"/pages/search/search"})},backTop:function(){e.pageScrollTo({scrollTop:0,duration:300})}},onPageScroll:function(e){e.scrollTop>1e3?this.backShow=!0:this.backShow=!1},onReachBottom:function(){var e=this;return u(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e,"nomore"!=n.loadStatus){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,n.getList(n.modelType,n.modelId);case 5:case"end":return t.stop()}}),t)})))()}};t.default=i}).call(this,n("543d")["default"],n("a9ff")["default"])},fa5c:function(e,t,n){"use strict";n.r(t);var a=n("d2ed"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=r.a}},[["12f3","common/runtime","common/vendor"]]]);