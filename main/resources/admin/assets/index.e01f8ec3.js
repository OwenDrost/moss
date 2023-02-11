import{s as c,_ as R}from"./index.6188fb80.js";import{_ as D}from"./UploadImgInput.6252947f.js";import{i as E,c as b,j as m,k as p,p as x,v as o,m as n,$ as a,Y as g,l as h,s as v,F as y,n as $,z as k,a2 as F}from"./@vue.1832462a.js";import{k as s}from"./index.ad236f72.js";import"./vue-request.068b6d0d.js";import"./@vueuse.b7caaad8.js";import"./@arco-design.fc217e7a.js";import"./resize-observer-polyfill.8deb1e21.js";import"./compute-scroll-into-view.17358474.js";import"./b-tween.87ffe365.js";import"./dayjs.396bdce9.js";import"./@intlify.bed9fa1a.js";import"./source-map.205bdfab.js";import"./b-validate.ee581f7d.js";import"./number-precision.6dad9ff9.js";import"./scroll-into-view-if-needed.61c672a4.js";import"./naive-ui.4ada00fb.js";import"./date-fns.a06005bd.js";import"./seemly.d0f7d7a4.js";import"./evtd.9eee5233.js";import"./@css-render.fee374bc.js";import"./css-render.20ab466e.js";import"./@emotion.6322e2ae.js";import"./vooks.186fd3b0.js";import"./vueuc.533174bc.js";import"./vdirs.ab69c576.js";import"./@juggle.32c34d6c.js";import"./lodash-es.33d1f95f.js";import"./date-fns-tz.c3c7eb03.js";import"./vue-router.d0ac2f3e.js";import"./vue-i18n.32b246c6.js";import"./vue.307b73bb.js";import"./pinia.3d582541.js";import"./vue-demi.b3a9cad9.js";import"./axios.7d4390ff.js";import"./form-data.2b153385.js";/* empty css                    */const S={style:{"font-size":"12px"}},j={class:"text-gray-500",style:{"font-size":"12px"}},L={__name:"Post",setup(I){const e=E("record"),d=b(()=>e.value.expire_time*1e3),u=b(()=>e.value.create_time*1e3);e.value.id||(e.value.detect=!0,e.value.status=!0,e.value.detect_delay=2880);let f=!1;function C(){!e.value.id&&f===!1&&(e.value.detect=!1),d.value||(e.value.expire_time=new Date().getTime()/1e3),e.value.expire_time+=60*60*24*31,f=!0}return(i,t)=>{const _=m("a-input"),r=m("a-form-item"),N=m("a-textarea"),V=m("a-date-picker"),U=m("icon-plus-circle"),T=m("a-link"),z=m("a-button"),w=m("a-switch"),q=m("a-input-number"),B=m("a-space");return p(),x(y,null,[o(r,{field:"name",label:i.$t("name"),rules:[{required:!0,message:i.$t("message.required",[i.$t("name")])}]},{default:n(()=>[o(_,{modelValue:a(e).name,"onUpdate:modelValue":t[0]||(t[0]=l=>a(e).name=l),"max-length":150,"allow-clear":"","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label","rules"]),o(r,{field:"url",label:i.$t("url"),rules:[{required:!0,message:i.$t("message.required",[i.$t("url")])}]},{default:n(()=>[o(_,{modelValue:a(e).url,"onUpdate:modelValue":t[1]||(t[1]=l=>a(e).url=l),"max-length":250,"allow-clear":"","show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label","rules"]),o(r,{field:"logo",label:"logo"},{default:n(()=>[o(D,{class:"w-full",modelValue:a(e).logo,"onUpdate:modelValue":t[2]||(t[2]=l=>a(e).logo=l)},null,8,["modelValue"])]),_:1}),o(r,{field:"note",label:i.$t("note")},{default:n(()=>[o(N,{class:"input",modelValue:a(e).note,"onUpdate:modelValue":t[3]||(t[3]=l=>a(e).note=l),"max-length":250,"auto-size":{minRows:3,maxRows:5},"show-word-limit":""},null,8,["modelValue"])]),_:1},8,["label"]),o(r,{field:"expire_time",label:i.$t("expireTime")},{default:n(()=>[o(V,{class:"w-full",modelValue:a(d),"onUpdate:modelValue":t[4]||(t[4]=l=>g(d)?d.value=l:null),"value-format":"timestamp","show-time":"",onChange:t[5]||(t[5]=l=>a(e).expire_time=parseInt(l/1e3))},null,8,["modelValue"]),o(z,{onClick:C},{icon:n(()=>[o(T,{hoverable:!1},{default:n(()=>[o(U)]),_:1})]),_:1})]),_:1},8,["label"]),a(e).id>0?(p(),h(r,{key:0,field:"create_time",label:i.$t("createTime")},{default:n(()=>[o(V,{class:"w-full",modelValue:a(u),"onUpdate:modelValue":t[6]||(t[6]=l=>g(u)?u.value=l:null),"value-format":"timestamp","show-time":"",onChange:t[7]||(t[7]=l=>a(e).create_time=parseInt(l/1e3))},null,8,["modelValue"])]),_:1},8,["label"])):v("",!0),o(r,{field:"detect",label:i.$t("detect"),help:"detect it contains my link by scheduled task"},{default:n(()=>[o(B,null,{default:n(()=>[o(w,{type:"round",modelValue:a(e).detect,"onUpdate:modelValue":t[8]||(t[8]=l=>a(e).detect=l)},null,8,["modelValue"]),a(e).detect?(p(),x(y,{key:0},[o(q,{size:"small",modelValue:a(e).detect_delay,"onUpdate:modelValue":t[9]||(t[9]=l=>a(e).detect_delay=l),min:0,style:{width:"180px"}},{prepend:n(()=>[$("span",S,k(i.$t("delay")),1)]),_:1},8,["modelValue"]),$("span",j,k(i.$t("minutes")),1)],64)):v("",!0)]),_:1})]),_:1},8,["label"]),o(r,{field:"status",label:i.$t("status")},{default:n(()=>[o(w,{type:"round",modelValue:a(e).status,"onUpdate:modelValue":t[10]||(t[10]=l=>a(e).status=l)},null,8,["modelValue"])]),_:1},8,["label"])],64)}}},ke={__name:"index",setup(I){const e=F(L),d=[{title:s("id"),dataIndex:"id",width:100,ellipsis:!0,filterable:c,sortable:{sortDirections:["ascend","descend"]}},{title:s("name"),dataIndex:"name",filterable:c,width:200},{title:s("url"),dataIndex:"url",filterable:c,slotName:"url",width:300,ellipsis:!0,tooltip:!0},{title:s("note"),dataIndex:"note",width:250,ellipsis:!0,tooltip:!0},{title:s("expireTime"),dataIndex:"expire_time",slotName:"expire_time",width:160},{title:s("createTime"),dataIndex:"create_time",slotName:"time",width:160},{title:s("detect"),dataIndex:"detect",slotName:"detect",align:"center",width:80},{title:s("status"),dataIndex:"status",slotName:"linkStatus",align:"center",width:80}];return(u,f)=>(p(),h(R,{modelName:"link",columns:d,order:"id desc",postWidth:"470px",formStyle:"padding-right: 10px",formLayout:"horizontal",postComponent:a(e)},null,8,["postComponent"]))}};export{ke as default};
