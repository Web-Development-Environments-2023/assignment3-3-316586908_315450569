(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-174af56f"],{"4b27":function(e,r,t){},"6ab5":function(e,r,t){"use strict";t.r(r);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-container",[t("div",[t("b-row",e._l(this.recipes.slice(0,5),(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1),t("div",[t("b-row",e._l(this.recipes.slice(5,10),(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1),t("div",[t("b-row",e._l(this.recipes.slice(10,15),(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)])},c=[],n=t("2909"),s=(t("96cf"),t("1da1")),a=t("832a"),o={name:"RecipePreviewFavorites",components:{RecipePreview:a["a"]},props:{title:{type:String}},data:function(){return{recipes:[]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var t,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.get(e.$root.store.server_domain+"/users/favorites");case 3:i=r.sent,c=i.data.recipes,e.recipes=[],(t=e.recipes).push.apply(t,Object(n["a"])(c)),console.log(e.recipes.length),r.next=13;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},p=o,u=(t("8b27"),t("2877")),l=Object(u["a"])(p,i,c,!1,null,"ed893280",null);r["default"]=l.exports},"8b27":function(e,r,t){"use strict";var i=t("4b27"),c=t.n(i);c.a}}]);
//# sourceMappingURL=chunk-174af56f.2f006bdb.js.map