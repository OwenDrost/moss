import{j as d,k as r,p,v as t,m as o,F as i}from"./@vue.1832462a.js";const c={__name:"redis",props:{data:Object},setup(a){return(V,e)=>{const m=d("a-input"),n=d("a-form-item"),s=d("a-input-password"),u=d("a-input-number");return r(),p(i,null,[t(n,{label:"addr"},{default:o(()=>[t(m,{class:"w-64",modelValue:a.data.addr,"onUpdate:modelValue":e[0]||(e[0]=l=>a.data.addr=l)},null,8,["modelValue"])]),_:1}),t(n,{label:"password"},{default:o(()=>[t(s,{class:"w-64",modelValue:a.data.password,"onUpdate:modelValue":e[1]||(e[1]=l=>a.data.password=l)},null,8,["modelValue"])]),_:1}),t(n,{label:"db"},{default:o(()=>[t(u,{modelValue:a.data.db,"onUpdate:modelValue":e[2]||(e[2]=l=>a.data.db=l),min:0,class:"w-64"},null,8,["modelValue"])]),_:1})],64)}}};export{c as default};
