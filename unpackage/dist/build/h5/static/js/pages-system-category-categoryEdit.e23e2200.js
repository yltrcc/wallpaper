(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-category-categoryEdit"],{"294b":function(t,e,n){var a=n("3f28");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("4bd62dcb",a,!0,{sourceMap:!1,shadowMode:!1})},"2f9f":function(t,e,n){"use strict";n.r(e);var a=n("8b57"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},"3f28":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.u-input[data-v-5c361d36]{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n}.u-input__input[data-v-5c361d36]{font-size:%?28?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input__textarea[data-v-5c361d36]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-input--border[data-v-5c361d36]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-5c361d36]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-5c361d36]{margin-left:%?10?%}.u-input__right-icon--select[data-v-5c361d36]{-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-5c361d36]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},"4abd":function(t,e,n){"use strict";var a=n("c758"),r=n.n(a);r.a},"5bcd":function(t,e,n){"use strict";n.r(e);var a=n("df33"),r=n("2f9f");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("4abd");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"44c6c8a0",null,!1,a["a"],o);e["default"]=c.exports},"76d4":function(t,e,n){"use strict";n.r(e);var a=n("cdfb"),r=n("c049");for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("d8d5");var o,u=n("f0c5"),c=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,"5c361d36",null,!1,a["a"],o);e["default"]=c.exports},"8b57":function(t,e,n){"use strict";(function(t){var a=n("4ea4");n("baa5"),n("4e82"),n("e25e"),n("ac1f"),n("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var r=a(n("1da1")),i={data:function(){return{iconStyle:{fontSize:"12px",color:"#D8D8D8"},customStyle:{backgroundImage:"linear-gradient(to right, #FCEF59 , #F8D246)",color:"#333333"},categoryId:"",imgList:[],category:{},newCategory:{}}},created:function(){var t=this;uni.$on("uAvatarCropper",(function(e){t.imgPath=e}))},onLoad:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a=t.id,r=e,r.categoryId=a,"-1"!=a&&r.getCategory(a);case 4:case"end":return n.stop()}}),n)})))()},methods:{getCategory:function(e){var n=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.callFunction({name:"query_map",data:{dbName:"wx_category",id:e}});case 2:r=a.sent,n.imgList.push({url:r.result.image}),delete r.result._id,n.category=r.result,n.newCategory=JSON.stringify(r.result);case 7:case"end":return a.stop()}}),a)})))()},submit:function(){var e=this;return(0,r.default)(regeneratorRuntime.mark((function n(){var a,i,o,u,c,s,l,d,f,p,g,h,m,v;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e,i=a.$refs.uUpload.lists,0!==i.length){n.next=5;break}return a.$u.toast("请上传分类封面"),n.abrupt("return");case 5:if(a.category.name){n.next=8;break}return a.$u.toast("请填写分类名称"),n.abrupt("return");case 8:if(a.category.sort){n.next=11;break}return a.$u.toast("请填写分类排序"),n.abrupt("return");case 11:if("-1"==a.categoryId||i[0].url!==a.imgList[0].url||JSON.stringify(a.category)!==a.newCategory){n.next=14;break}return a.$u.toast("请修改内容后再提交"),n.abrupt("return");case 14:if(uni.showLoading({mask:!0,title:"正在拼命加载中..."}),!("-1"==a.categoryId||i.length>0&&i[0].url!=a.imgList[0].url)){n.next=29;break}return o=i[0].url,u=o.substring(o.lastIndexOf(".")+1),c=String(1e5*Math.random()).split(".")[0],s=new Date,l=s.getFullYear(),d=s.getMonth()+1<10?"0"+(s.getMonth()+1):s.getMonth()+1,f=s.getDate()<10?"0"+s.getDate():s.getDate(),p=s.getHours()<10?"0"+s.getHours():s.getHours(),g=s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),h=s.getSeconds()<10?"0"+s.getSeconds():s.getSeconds(),m="category_"+l+d+f+p+g+h+"_"+c+"."+u,n.next=29,t.uploadFile({filePath:o,cloudPath:m}).then(function(){var e=(0,r.default)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTempFileURL({fileList:[n.fileID]}).then((function(t){t.fileList.length>0?a.category.image=t.fileList[0].tempFileURL:a.$u.toast("图片上传失败")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 29:return a.category.sort=parseInt(a.category.sort),n.next=32,t.callFunction({name:"query_edit",data:{dbName:"wx_category",filter:{_id:a.categoryId},addData:a.category,upData:a.category}});case 32:v=n.sent,v.result.success&&(setTimeout((function(){uni.navigateBack()}),1e3),uni.setStorageSync("update_flag",1)),uni.showToast({icon:"none",title:v.result.msg,mask:!0,duration:1e3});case 35:case"end":return n.stop()}}),n)})))()},chooseImage:function(){var t=350,e=175,n=350,a=175;this.$u.route({url:"/uview-ui/components/u-avatar-cropper/u-avatar-cropper",params:{rectWidth:t,rectHeight:e,destWidth:n,destHeight:a,fileType:"jpg"}})},delImage:function(t){this.imgPath=""}}};e.default=i}).call(this,n("a9ff")["default"])},aa60:function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),n("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("0e43")),i={name:"u-input",mixins:[r.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,n=t.detail.value;this.trim&&(n=this.$u.trim(n)),this.$emit("input",n),this.defaultValue=n,setTimeout((function(){e.dispatch("u-form-item","on-form-change",n)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=i},ba2c:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\r\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \r\n */.btn[data-v-44c6c8a0]{font-size:16px;background-image:-webkit-linear-gradient(350deg,#fcfc44,#f8c93c);background-image:linear-gradient(100deg,#fcfc44,#f8c93c);color:#333;border-radius:%?40?%;line-height:%?86?%;text-align:center}.hover-class[data-v-44c6c8a0]{-webkit-transform:scale(.92);transform:scale(.92);-webkit-transition:all .2s;transition:all .2s}.img[data-v-44c6c8a0]{position:relative}.img-bg[data-v-44c6c8a0]{width:%?400?%;height:%?200?%;background:#f4f5f6;border-radius:%?10?%;margin:%?10?%}.u-delete-icon[data-v-44c6c8a0]{position:absolute;top:%?20?%;right:%?20?%;z-index:10;background-color:hsla(0,0%,100%,.35);border-radius:%?100?%;width:%?44?%;height:%?44?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}',""]),t.exports=e},c049:function(t,e,n){"use strict";n.r(e);var a=n("aa60"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=r.a},c758:function(t,e,n){var a=n("ba2c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=n("4f06").default;r("16d66261",a,!0,{sourceMap:!1,shadowMode:!1})},cdfb:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uIcon:n("2200").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?n("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):n("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[n("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[n("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?n("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[n("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},i=[]},d8d5:function(t,e,n){"use strict";var a=n("294b"),r=n.n(a);r.a},df33:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={uForm:n("5571").default,uUpload:n("5b01").default,uFormItem:n("8a84").default,uInput:n("76d4").default},r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return 1==t.vuex_user.system?n("v-uni-view",[n("v-uni-view",{staticClass:"u-p-40"},[n("u-form",{ref:"uForm",attrs:{model:t.category}},[n("v-uni-view",{staticClass:"u-flex u-row-left u-col-top u-p-b-20"},[n("u-upload",{ref:"uUpload",attrs:{action:"","max-count":"1","file-list":"-1"!=t.categoryId?t.imgList:"","auto-upload":!1,uploadText:"上传封面图",width:"400",height:"197",maxSize:102400,"show-progress":!1,"size-type":["compressed"],"source-type":["album"],multiple:!1,"del-icon":"close","del-bg-color":"#ff7c7c","del-color":"#FFFFFF",limitType:["png","jpg","jpeg"]}}),n("v-uni-view",{staticClass:"u-p-l-20 u-p-t-20"},[n("v-uni-view",{staticClass:"u-font-12"},[t._v("注意事项：")]),n("v-uni-view",{staticClass:"u-font-12 u-tips-color u-p-t-15"},[t._v("比例：500 x 250")]),n("v-uni-view",{staticClass:"u-font-12 u-tips-color u-p-t-15"},[t._v("大小：200kb")])],1)],1),n("v-uni-view",{staticStyle:{"border-bottom":"1rpx solid #F4F4F4","border-top":"1rpx solid #F4F4F4"}},[n("u-form-item",{attrs:{label:"名称","border-bottom":!1}},[n("u-input",{attrs:{clearable:!1,placeholder:"填写分类名称"},model:{value:t.category.name,callback:function(e){t.$set(t.category,"name",e)},expression:"category.name"}})],1)],1),n("v-uni-view",{staticStyle:{"border-bottom":"1rpx solid #F4F4F4","border-top":"1rpx solid #F4F4F4"}},[n("u-form-item",{attrs:{label:"排序","border-bottom":!1}},[n("u-input",{attrs:{type:"number",height:40,clearable:!1,placeholder:"排序，数字越大越靠前"},model:{value:t.category.sort,callback:function(e){t.$set(t.category,"sort",e)},expression:"category.sort"}})],1)],1)],1),n("v-uni-view",{staticClass:"u-p-t-40"},[n("v-uni-view",{staticClass:"btn",attrs:{"hover-class":"hover-class","hover-stay-time":"50"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("保 存")])],1)],1)],1):t._e()},i=[]}}]);