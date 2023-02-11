import{i as X}from"./vue-demi.b3a9cad9.js";import{a7 as H,r as B,a6 as k,g as Z,i as $,w as G,a as A,Y as C,a8 as D,a3 as T,a0 as tt,a1 as et,C as st,t as nt,c as ot}from"./@vue.1832462a.js";/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let J;const L=t=>J=t,N=Symbol();function R(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var I;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(I||(I={}));function lt(){const t=H(!0),n=t.run(()=>B({}));let s=[],e=[];const c=k({install(u){L(c),c._a=u,u.provide(N,c),u.config.globalProperties.$pinia=c,e.forEach(f=>s.push(f)),e=[]},use(u){return!this._a&&!X?e.push(u):s.push(u),this},_p:s,_a:null,_e:t,_s:new Map,state:n});return c}const W=()=>{};function V(t,n,s,e=W){t.push(n);const c=()=>{const u=t.indexOf(n);u>-1&&(t.splice(u,1),e())};return!s&&tt()&&et(c),c}function g(t,...n){t.slice().forEach(s=>{s(...n)})}function O(t,n){t instanceof Map&&n instanceof Map&&n.forEach((s,e)=>t.set(e,s)),t instanceof Set&&n instanceof Set&&n.forEach(t.add,t);for(const s in n){if(!n.hasOwnProperty(s))continue;const e=n[s],c=t[s];R(c)&&R(e)&&t.hasOwnProperty(s)&&!C(e)&&!D(e)?t[s]=O(c,e):t[s]=e}return t}const ct=Symbol();function rt(t){return!R(t)||!t.hasOwnProperty(ct)}const{assign:d}=Object;function ut(t){return!!(C(t)&&t.effect)}function at(t,n,s,e){const{state:c,actions:u,getters:f}=n,a=s.state.value[t];let m;function h(){a||(s.state.value[t]=c?c():{});const b=nt(s.state.value[t]);return d(b,u,Object.keys(f||{}).reduce((y,S)=>(y[S]=k(ot(()=>{L(s);const p=s._s.get(t);return f[S].call(p,p)})),y),{}))}return m=Y(t,h,n,s,e,!0),m.$reset=function(){const y=c?c():{};this.$patch(S=>{d(S,y)})},m}function Y(t,n,s={},e,c,u){let f;const a=d({actions:{}},s),m={deep:!0};let h,b,y=k([]),S=k([]),p;const _=e.state.value[t];!u&&!_&&(e.state.value[t]={}),B({});let x;function F(r){let o;h=b=!1,typeof r=="function"?(r(e.state.value[t]),o={type:I.patchFunction,storeId:t,events:p}):(O(e.state.value[t],r),o={type:I.patchObject,payload:r,storeId:t,events:p});const v=x=Symbol();st().then(()=>{x===v&&(h=!0)}),b=!0,g(y,o,e.state.value[t])}const q=W;function z(){f.stop(),y=[],S=[],e._s.delete(t)}function K(r,o){return function(){L(e);const v=Array.from(arguments),P=[],w=[];function Q(i){P.push(i)}function U(i){w.push(i)}g(S,{args:v,name:r,store:l,after:Q,onError:U});let E;try{E=o.apply(this&&this.$id===t?this:l,v)}catch(i){throw g(w,i),i}return E instanceof Promise?E.then(i=>(g(P,i),i)).catch(i=>(g(w,i),Promise.reject(i))):(g(P,E),E)}}const M={_p:e,$id:t,$onAction:V.bind(null,S),$patch:F,$reset:q,$subscribe(r,o={}){const v=V(y,r,o.detached,()=>P()),P=f.run(()=>G(()=>e.state.value[t],w=>{(o.flush==="sync"?b:h)&&r({storeId:t,type:I.direct,events:p},w)},d({},m,o)));return v},$dispose:z},l=A(M);e._s.set(t,l);const j=e._e.run(()=>(f=H(),f.run(()=>n())));for(const r in j){const o=j[r];if(C(o)&&!ut(o)||D(o))u||(_&&rt(o)&&(C(o)?o.value=_[r]:O(o,_[r])),e.state.value[t][r]=o);else if(typeof o=="function"){const v=K(r,o);j[r]=v,a.actions[r]=o}}return d(l,j),d(T(l),j),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:r=>{F(o=>{d(o,r)})}}),e._p.forEach(r=>{d(l,f.run(()=>r({store:l,app:e._a,pinia:e,options:a})))}),_&&u&&s.hydrate&&s.hydrate(l.$state,_),h=!0,b=!0,l}function ht(t,n,s){let e,c;const u=typeof n=="function";typeof t=="string"?(e=t,c=u?s:n):(c=t,e=t.id);function f(a,m){const h=Z();return a=a||h&&$(N,null),a&&L(a),a=J,a._s.has(e)||(u?Y(e,n,c,a):at(e,c,a)),a._s.get(e)}return f.$id=e,f}export{lt as c,ht as d};
