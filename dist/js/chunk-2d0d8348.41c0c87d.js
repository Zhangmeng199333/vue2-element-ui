(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d8348"],{"79a1":function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a._self._c;return e("div",[e("my-tabs",{on:{tabClick:a.tabClick},model:{value:a.activeName,callback:function(e){a.activeName=e},expression:"activeName"}},[e("my-tab-content",{attrs:{label:"孙悟空",name:"sunwukong"}},[a._v("孙悟空内容")]),e("my-tab-content",{attrs:{label:"猪八戒",name:"zhubajie"}},[a._v("猪八戒内容")]),e("my-tab-content",{attrs:{label:"沙和尚",name:"shaheshang"}},[a._v("沙和尚内容")]),e("my-tab-content",{attrs:{label:"唐僧",name:"tangseng"}},[a._v("唐僧内容")]),e("my-tab-content",{attrs:{label:"白龙马",name:"bailongma"}},[a._v("白龙马内容")])],1),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("hr"),e("my-tabs",{attrs:{"before-leave":a.beforeLeave},model:{value:a.activeName2,callback:function(e){a.activeName2=e},expression:"activeName2"}},[e("my-tab-content",{attrs:{label:"武松",name:"wusong"}},[a._v("武松内容")]),e("my-tab-content",{attrs:{label:"宋江",name:"songjiang"}},[a._v("松江内容")]),e("my-tab-content",{attrs:{label:"林冲",name:"linchong"}},[a._v("林冲内容")]),e("my-tab-content",{attrs:{disabled:"",label:"吴用",name:"wuyong"}},[a._v("吴用内容")])],1)],1)},o=[],c={name:"myTabsName",data(){return{activeName:"sunwukong",activeName2:"wusong"}},methods:{tabClick(a){console.log("外层点击",a)},beforeLeave(a,e){console.log("外层",a,e);var t=new Promise((t,n)=>{this.$confirm(`确认由${e}切换到${a}`,"tab change",{confirmButtonText:"确认切换",cancelButtonText:"取消",type:"warning"}).then(()=>{t(!0)}).catch(a=>{n(!1)})}).catch(a=>{console.log("reason",a)});return t}}},l=c,b=t("2877"),r=Object(b["a"])(l,n,o,!1,null,"7e348114",null);e["default"]=r.exports}}]);