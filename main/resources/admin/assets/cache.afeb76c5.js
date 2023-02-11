import{u as E}from"./vue-request.068b6d0d.js";import{k as y,K as O,F as S,M as z}from"./index.ad236f72.js";import{_ as A}from"./Duration.072fc0d2.js";import{M as w}from"./@arco-design.fc217e7a.js";import{i as v,j as r,k as m,l as $,m as n,v as e,p as _,F as h,$ as o,y as C,z as D,s as k,n as g,Q as B,O as I,az as P}from"./@vue.1832462a.js";import"./vue-router.d0ac2f3e.js";import"./vue-i18n.32b246c6.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./vue.307b73bb.js";import"./@vueuse.b7caaad8.js";import"./pinia.3d582541.js";import"./vue-demi.b3a9cad9.js";import"./naive-ui.4ada00fb.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.fee374bc.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.186fd3b0.js";import"./vueuc.533174bc.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./axios.7d4390ff.js";import"./form-data.2b153385.js";/* empty css                    */import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";const f={__name:"Item",props:{data:Object,name:String},setup(d){const t=v("data"),{run:l}=E(O,{manual:!0,onSuccess:i=>{!i.success||w.success(y("message.success",[y("clear")]))}});return(i,a)=>{const s=r("a-switch"),u=r("a-button"),p=r("a-space");return m(),$(p,null,{default:n(()=>[e(s,{type:"round",modelValue:d.data.enable,"onUpdate:modelValue":a[0]||(a[0]=c=>d.data.enable=c)},null,8,["modelValue"]),d.data.enable?(m(),_(h,{key:0},[e(A,{data:d.data.ttl},null,8,["data"]),e(u,{size:"mini",disabled:o(t).active_driver==="memcached",type:"text",onClick:a[1]||(a[1]=c=>o(l)(d.name))},{default:n(()=>[C(D(i.$t("clear")),1)]),_:1},8,["disabled"]),o(t).active_driver==="memcached"&&d.name==="index"?(m(),$(u,{key:0,size:"mini",type:"text",onClick:a[2]||(a[2]=c=>o(l)("index"))},{default:n(()=>[C(D(i.$t("clearAll")),1)]),_:1})):k("",!0)],64)):k("",!0)]),_:1})}}},R={__name:"Options",setup(d){const t=v("data");return(l,i)=>{const a=r("a-form-item");return m(),_(h,null,[e(a,{label:l.$t("home"),class:"mt-5"},{default:n(()=>[e(f,{data:o(t).options.home,name:"home"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:l.$t("article")},{default:n(()=>[e(f,{data:o(t).options.article,name:"article"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:l.$t("category")},{default:n(()=>[e(f,{data:o(t).options.category,name:"category"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:l.$t("tag")},{default:n(()=>[e(f,{data:o(t).options.tag,name:"tag"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:l.$t("sitemap")},{default:n(()=>[e(f,{data:o(t).options.sitemap,name:"sitemap"},null,8,["data"])]),_:1},8,["label"]),e(a,{label:l.$t("templatePage")},{default:n(()=>[e(f,{data:o(t).options.page,name:"page"},null,8,["data"])]),_:1},8,["label"])],64)}}},j={class:"cursor-pointer text-gray-500 ml-2"},x={__name:"More",setup(d){const t=v("data");return(l,i)=>{const a=r("a-switch"),s=r("icon-question-circle"),u=r("a-tooltip"),p=r("a-form-item");return m(),$(p,{label:"\u9884\u751F\u6210\u6587\u7AE0\u7F13\u5B58"},{default:n(()=>[e(a,{type:"round",modelValue:o(t).pre_build_article,"onUpdate:modelValue":i[0]||(i[0]=c=>o(t).pre_build_article=c)},null,8,["modelValue"]),e(u,{content:"\u5F00\u542F\u540E\uFF0C\u7F16\u8F91\u6216\u6DFB\u52A0\u6587\u7AE0\u4F1A\u4E3B\u52A8\u751F\u6210\u7F13\u5B58"},{default:n(()=>[g("span",j,[e(s)])]),_:1})]),_:1})}}},L={key:0,class:"overflow-auto",style:{"max-height":"280px"}},M={__name:"Storage",setup(d){const t=v("data"),l=Object.assign({"./drivers/badger.vue":()=>S(()=>import("./badger.a239ef1b.js"),["assets/badger.a239ef1b.js","assets/Duration.072fc0d2.js","assets/index.ad236f72.js","assets/@vue.1832462a.js","assets/vue-router.d0ac2f3e.js","assets/vue-i18n.32b246c6.js","assets/@intlify.bed9fa1a.js","assets/source-map.205bdfab.js","assets/vue.307b73bb.js","assets/@arco-design.fc217e7a.js","assets/resize-observer-polyfill.8deb1e21.js","assets/compute-scroll-into-view.17358474.js","assets/b-tween.87ffe365.js","assets/dayjs.396bdce9.js","assets/b-validate.ee581f7d.js","assets/number-precision.6dad9ff9.js","assets/scroll-into-view-if-needed.61c672a4.js","assets/@arco-design.3d3a5979.css","assets/@vueuse.b7caaad8.js","assets/pinia.3d582541.js","assets/vue-demi.b3a9cad9.js","assets/naive-ui.4ada00fb.js","assets/date-fns.a06005bd.js","assets/seemly.d0f7d7a4.js","assets/evtd.9eee5233.js","assets/@css-render.fee374bc.js","assets/css-render.20ab466e.js","assets/@emotion.6322e2ae.js","assets/vooks.186fd3b0.js","assets/vueuc.533174bc.js","assets/vdirs.ab69c576.js","assets/@juggle.32c34d6c.js","assets/lodash-es.33d1f95f.js","assets/date-fns-tz.c3c7eb03.js","assets/axios.7d4390ff.js","assets/form-data.2b153385.js","assets/vue-request.068b6d0d.js","assets/index.fbce9a41.css","assets/tailwindcss.8b9636b9.css"]),"./drivers/memcached.vue":()=>S(()=>import("./memcached.60bcb12d.js"),["assets/memcached.60bcb12d.js","assets/@vue.1832462a.js"]),"./drivers/redis.vue":()=>S(()=>import("./redis.bb443381.js"),["assets/redis.bb443381.js","assets/@vue.1832462a.js"])});function i(a){let s=l["./drivers/"+a+".vue"];if(!!s)return P(s)}return(a,s)=>{const u=r("a-select"),p=r("a-form-item"),c=r("a-card");return m(),_(h,null,[e(p,{class:"my-5",label:a.$t("storage")},{default:n(()=>[e(u,{class:"w-64",modelValue:o(t).active_driver,"onUpdate:modelValue":s[0]||(s[0]=b=>o(t).active_driver=b),options:["badger","redis","memcached"]},null,8,["modelValue"])]),_:1},8,["label"]),e(c,{class:"mb-5 max-w-2xl py-5"},{default:n(()=>[(m(!0),_(h,null,B(o(t).driver,(b,V)=>(m(),_("div",null,[V===o(t).active_driver?(m(),_("div",L,[(m(),$(I(i(V)),{data:b},null,8,["data"]))])):k("",!0)]))),256))]),_:1})],64)}}},N={class:"p-5"},T={class:"p-3"},U={class:"p-3"},q={class:"p-3"},Ce={__name:"cache",setup(d){const t=v("data");let l;const{run:i}=E(z,{manual:!0,onBefore:()=>{l=w.loading({content:y("init")+"...",duration:0})},onSuccess:s=>{s.success||w.error(y("message.failed",[y("init")])),l.close()}});return v("useSaveSuccess").value.push(()=>{i()}),(s,u)=>{const p=r("a-switch"),c=r("a-tab-pane"),b=r("a-tabs");return m(),_(h,null,[g("div",N,[C(D(s.$t("enable"))+": ",1),e(p,{type:"round",modelValue:o(t).enable,"onUpdate:modelValue":u[0]||(u[0]=V=>o(t).enable=V)},null,8,["modelValue"])]),o(t).enable?(m(),$(b,{key:0,type:"card-gutter","destroy-on-hide":"","lazy-load":""},{default:n(()=>[e(c,{key:"options",title:s.$t("options")},{default:n(()=>[g("div",T,[e(R)])]),_:1},8,["title"]),e(c,{key:"storage",title:s.$t("storage")},{default:n(()=>[g("div",U,[e(M)])]),_:1},8,["title"]),e(c,{key:"more",title:s.$t("more")},{default:n(()=>[g("div",q,[e(x)])]),_:1},8,["title"])]),_:1})):k("",!0)],64)}}};export{Ce as default};
