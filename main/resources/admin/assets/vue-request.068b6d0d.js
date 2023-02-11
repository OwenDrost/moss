import{a2 as I,c as A,r as b,i as ie,f as Q,h as G,w as K,Y as le}from"./@vue.1832462a.js";const ce={},fe=Symbol("GLOBAL_OPTIONS_PROVIDE_KEY"),de=()=>ce,ve=e=>Array.isArray(e),Y=e=>e!==null&&typeof e=="object",F=e=>e instanceof Function,M=e=>e==null,H=typeof window>"u",J=()=>{var e;return H||M((e=window.document)===null||e===void 0?void 0:e.visibilityState)?!0:window.document.visibilityState==="visible"},me=()=>{var e,r;return(e=!H&&((r=window.navigator)===null||r===void 0?void 0:r.onLine))!==null&&e!==void 0?e:!0},k=()=>new Promise(()=>{});function ge(e,r){const n=Object.assign({},e);for(const t of r)delete n[t];return n}const he=(e,r=!1)=>{const n=`Warning: [vue-request] ${e}`;if(r)return new Error(n);console.error(n)},O=e=>le(e)?e.value:e,X=e=>Y(e)?Object.assign(ve(e)?[]:{},e):e,$=new Map,Ee=e=>M(e)?void 0:$.get(e),pe=(e,r,n)=>{const t=$.get(e);t!=null&&t.timer&&clearTimeout(t.timer);const a=setTimeout(()=>$.delete(e),r);$.set(e,{...n,timer:a})},C=e=>e;function Z(e,r,n){let t,a,l,i,o,u,c=0,h=!1,R=!1,g=!0;const E=!r&&r!==0&&typeof window.requestAnimationFrame=="function";if(typeof e!="function")throw new TypeError("Expected a function");r=+r||0,Y(n)&&(h=!!n.leading,R="maxWait"in n,l=R?Math.max(+n.maxWait||0,r):l,g="trailing"in n?!!n.trailing:g);function d(m){const L=t,B=a;return t=a=void 0,c=m,i=e.apply(B,L),i}function T(m,L){return E?(window.cancelAnimationFrame(o),window.requestAnimationFrame(m)):setTimeout(m,L)}function f(m){if(E)return window.cancelAnimationFrame(m);clearTimeout(m)}function p(m){return c=m,o=T(s,r),h?d(m):i}function v(m){const L=m-u,B=m-c,z=r-L;return R?Math.min(z,l-B):z}function _(m){const L=m-u,B=m-c;return u===void 0||L>=r||L<0||R&&B>=l}function s(){const m=Date.now();if(_(m))return w(m);o=T(s,v(m))}function w(m){return o=void 0,g&&t?d(m):(t=a=void 0,i)}function y(){o!==void 0&&f(o),c=0,t=u=a=o=void 0}function x(){return o===void 0?i:w(Date.now())}function P(){return o!==void 0}function S(...m){const L=Date.now(),B=_(L);if(t=m,a=this,u=L,B){if(o===void 0)return p(u);if(R)return o=T(s,r),d(u)}return o===void 0&&(o=T(s,r)),i}return S.cancel=y,S.flush=x,S.pending=P,S}function Re(e,r,n){let t=!0,a=!0;if(typeof e!="function")throw new TypeError("Expected a function");return Y(n)&&(t="leading"in n?!!n.leading:t,a="trailing"in n?!!n.trailing:a),Z(e,r,{leading:t,trailing:a,maxWait:r})}var q=C((e,{debounceInterval:r,debounceOptions:n,manual:t})=>{const a=b(!1),l=b(),i=A(()=>n),o=A(()=>O(r)),u=b(e.context.runAsync);return t||(a.value=!0),G(c=>{M(o.value)||(l.value=Z(h=>h(),o.value,i.value),e.context.runAsync=(...h)=>new Promise((R,g)=>{a.value?(a.value=!1,u.value(...h).then(R).catch(g)):l.value(()=>{u.value(...h).then(R).catch(g)})}),c(()=>{var h;(h=l.value)===null||h===void 0||h.cancel(),e.context.runAsync=u.value}))}),{onCancel(){var c;(c=l.value)===null||c===void 0||c.cancel()}}}),ee=C((e,{errorRetryCount:r=0,errorRetryInterval:n=0})=>{const t=b(),a=b(0),l=A(()=>O(r)),i=A(()=>O(n));let o=!1;const u=()=>{a.value=0},c=A(()=>{if(i.value)return i.value;const g=1e3,E=1,d=9,T=Math.floor(Math.random()*2**Math.min(a.value,d)+E);return g*T}),h=()=>{let g;const E=l.value===-1,d=a.value<l.value;return(E||d)&&(E||(a.value+=1),g=setTimeout(()=>{o=!0,e.context.refresh()},c.value)),()=>g&&clearTimeout(g)},R=()=>{t.value&&t.value()};return{onBefore(){o||u(),o=!1,R()},onSuccess(){u()},onError(){t.value=h()},onCancel(){u(),R()}}}),ne=C((e,{ready:r=b(!0),manual:n,defaultParams:t=[]})=>(K(r,a=>{!n&&a&&e.context.run(...t)},{flush:"sync"}),{onBefore(){if(!r.value)return e.loading.value=!1,{isBreak:!0}}})),te=C((e,{refreshDeps:r=[],refreshDepsAction:n,manual:t})=>(r!=null&&r.length&&K(r,()=>{n?n():!t&&e.context.refresh()}),{})),re=C((e,{throttleInterval:r,throttleOptions:n})=>{const t=b(),a=A(()=>O(r)),l=A(()=>n),i=b(e.context.runAsync);return G(o=>{if(M(r))return{};t.value=Re(u=>u(),a.value,l.value),e.context.runAsync=(...u)=>new Promise((c,h)=>{t.value(()=>{i.value(...u).then(c).catch(h)})}),o(()=>{var u;(u=t.value)===null||u===void 0||u.cancel(),e.context.runAsync=i.value})}),{onCancel(){var o;(o=t.value)===null||o===void 0||o.cancel()}}});const we=(e,r)=>n=>{Object.keys(n).forEach(t=>{e[t].value=n[t]}),r.forEach(t=>t(e))},Te=(e,r)=>()=>{let n=r;for(let t=e.length;t-- >0;)n=e[t](n);return n()},be=(e,r,n)=>{var t,a;const{initialData:l,onSuccess:i,onError:o,onBefore:u,onAfter:c}=r,h=b((t=n==null?void 0:n.loading)!==null&&t!==void 0?t:!1),R=I((a=n==null?void 0:n.data)!==null&&a!==void 0?a:l),g=I(n==null?void 0:n.error),E=b(n==null?void 0:n.params),d=b([]),T=I("pending"),f={},p=we({status:T,loading:h,data:R,error:g,params:E},[]),v=(s,...w)=>{if(s==="onQuery"){const y=d.value.map(x=>x.onQuery).filter(Boolean);return{servicePromise:Te(y,w[0])()}}else{const y=d.value.map(x=>{var P;return(P=x[s])===null||P===void 0?void 0:P.call(x,...w)});return Object.assign({},...y)}},_=b(0);return f.runAsync=async(...s)=>{p({loading:!0,params:s,status:"pending"}),_.value+=1;const w=_.value,{isBreak:y,breakResult:x=k()}=v("onBefore",s);if(y)return p({status:"settled"}),x;u==null||u(s);try{const P=()=>new Promise(L=>L(e(...E.value)));let{servicePromise:S}=v("onQuery",P);S||(S=P());const m=await S;return w!==_.value?k():(p({data:m,loading:!1,error:void 0,status:"settled"}),v("onSuccess",m,s),i==null||i(m,s),v("onAfter",s,m,void 0),c==null||c(s),m)}catch(P){if(w!==_.value)return k();throw p({loading:!1,error:P,status:"settled"}),v("onError",P,s),o==null||o(P,s),v("onAfter",s,void 0,P),c==null||c(s),P}},f.run=(...s)=>{f.runAsync(...s).catch(w=>{o||console.error(w)})},f.cancel=()=>{_.value+=1,p({loading:!1}),v("onCancel")},f.refresh=()=>{f.run(...E.value||[])},f.refreshAsync=()=>f.runAsync(...E.value||[]),f.mutate=s=>{const w=F(s)?s(R.value):s,y=X(w);p({data:y}),v("onMutate",y)},{status:T,loading:h,data:R,error:g,params:E,plugins:d,context:f}};function oe(e,r={},n){const t=ie(fe,{}),a={...de(),...t,...r},{manual:l=!1,defaultParams:i=[]}=a,o=be(e,a);if(o.plugins.value=n.map(u=>u(o,a)),!l){const u=o.params.value||i;o.context.run(...u)}return Q(()=>{o.context.cancel()}),{loading:o.loading,data:o.data,error:o.error,params:o.params,cancel:o.context.cancel,refresh:o.context.refresh,refreshAsync:o.context.refreshAsync,mutate:o.context.mutate,run:o.context.run,runAsync:o.context.runAsync}}function Me(e,r){const{isNoMore:n,...t}=r!=null?r:{},a=I(),l=A(()=>{var s;return((s=a.value)===null||s===void 0?void 0:s.list)||[]}),i=b(!1),o=b(!1),u=b(0),{runAsync:c,run:h,cancel:R,...g}=oe(async s=>{const w=u.value,y=await e(s);return w===u.value&&(s?a.value={...y,list:[...s.list,...y.list]}:a.value=y),y},{...t,defaultParams:[],refreshDepsAction:()=>{t!=null&&t.refreshDepsAction?t.refreshDepsAction():f()},onError:s=>{var w;t==null||(w=t.onError)===null||w===void 0||w.call(t,s)},onSuccess:s=>{var w;t==null||(w=t.onSuccess)===null||w===void 0||w.call(t,s)},onBefore:()=>{var s;u.value+=1,o.value&&(o.value=!1,i.value=!0),t==null||(s=t.onBefore)===null||s===void 0||s.call(t)},onAfter:()=>{var s;i.value=!1,o.value=!1,t==null||(s=t.onAfter)===null||s===void 0||s.call(t)}},[ee,q,re,te,ne]),E=A(()=>n&&F(n)?n(a.value):!1),d=()=>{T().catch(()=>{})},T=()=>E.value?Promise.reject(he("No more data. You need to ignore this error by checking if `noMore` is false before calling `loadMoreAsync`",!0)):(o.value=!0,c(a.value)),f=()=>h();return{data:a,dataList:l,loadingMore:i,noMore:E,cancel:()=>{u.value+=1,R(),i.value=!1},mutate:s=>{const w=F(s)?s(a.value):s,y=X(w);a.value=y},refresh:f,refreshAsync:()=>c(),loadMore:d,loadMoreAsync:T,...ge(g,["refresh","refreshAsync","mutate","params","data"])}}const D=new Map,_e=(e,r)=>{D.set(e,r),r.then(n=>(D.delete(e),n)).catch(()=>{D.delete(e)})},ye=e=>D.get(e),N=new Map,Ae=(e,r)=>{N.has(e)&&N.get(e).forEach(n=>n(r))},Pe=(e,r)=>(N.has(e)?N.get(e).push(r):N.set(e,[r]),()=>{const n=N.get(e).indexOf(r);N.get(e).splice(n,1)});var Le=C((e,{cacheKey:r,cacheTime:n=6e5,staleTime:t=0,getCache:a,setCache:l})=>{if(!r)return{};const i=F(r)?r:()=>r,o=b(()=>{});let u;const c=f=>a?a(f):Ee(f),h=(f,p,v)=>{l?l(f,v):pe(f,p,v),Ae(f,v.data)},R=f=>t===-1||f+t>new Date().getTime(),g=(f,p)=>Object.prototype.hasOwnProperty.call(f,p),E=f=>{const p=i(f);return Pe(p,v=>{e.data.value=v})},d=i(),T=c(d);return T&&g(T,"data")&&(e.data.value=T.data,e.params.value=T.params),d&&(o.value=E()),Q(()=>{o.value()}),{onBefore(f){const p=i(f),v=c(p);if(!v||!g(v,"data"))return{};if(R(v.time))return e.data.value=v.data,e.loading.value=!1,{isBreak:!0,breakResult:v.data};e.data.value=v.data},onQuery(f){const p=e.params.value,v=i(p);let _=ye(v);return _&&_!==u?()=>_:(_=f(),u=_,_e(v,_),()=>_)},onSuccess(f,p){const v=i(p);v&&(o.value(),h(v,n,{data:f,params:p,time:new Date().getTime()}),o.value=E(p))},onMutate(f){const p=i(e.params.value);p&&(o.value(),h(p,n,{data:f,params:e.params.value,time:new Date().getTime()}),o.value=E(e.params.value))}}});function Oe(e){let r,n;class t extends Promise{constructor(l){super(l),this.cancel=()=>{n(),clearTimeout(r)}}}return new t(a=>{n=a,r=setTimeout(n,e)})}function W(){return new Date().getTime()}var Ce=C((e,{loadingDelay:r=0,loadingKeep:n=0})=>{const t=b(()=>{}),a=A(()=>O(r)),l=A(()=>O(n));let i=0,o={};const u=()=>{let c;return a.value&&(c=setTimeout(()=>{e.status.value==="pending"&&(e.loading.value=!0)},a.value)),()=>c&&clearTimeout(c)};return{onBefore(){e.loading.value=!a.value,t.value(),t.value=u(),i=W()},onQuery(c){if(!l.value)return()=>c();o=Oe(l.value+a.value);const h=async()=>{try{const g=await c();return W()-i<=a.value&&o.cancel(),Promise.resolve(g)}catch(g){return W()-i<=a.value&&o.cancel(),Promise.reject(g)}},R=Promise.allSettled([h(),o]).then(g=>{const E=g[0];return E.status==="fulfilled"?E.value:Promise.reject(E.reason)});return()=>R},onCancel(){t.value()},onAfter(){t.value()}}}),V;const ae=new Set,ue=new Set,se=new Set,j=(e,r)=>{let n;switch(e){case"FOCUS_LISTENER":n=ae;break;case"RECONNECT_LISTENER":n=se;break;case"VISIBLE_LISTENER":n=ue;break}if(!n.has(r))return n.add(r),()=>{n.delete(r)}},U=e=>{e.forEach(r=>{r()})};!H&&(V=window)!==null&&V!==void 0&&V.addEventListener&&(window.addEventListener("visibilitychange",()=>{J()&&U(ue)},!1),window.addEventListener("focus",()=>U(ae),!1),window.addEventListener("online",()=>U(se),!1));var xe=C((e,{pollingInterval:r,pollingWhenHidden:n=!1,pollingWhenOffline:t=!1,errorRetryCount:a=0})=>{const l=b(),i=b(!1),o=A(()=>O(r)),u=A(()=>O(a)),c=[],h=d=>{d&&c.push(d)},R=()=>(n||J())&&(t||me()),g=d=>{if(e.error.value&&u.value!==0)return;let T;if(!M(o.value)&&o.value>=0)if(R())T=setTimeout(d,o.value);else{i.value=!0;return}return()=>T&&clearTimeout(T)},E=()=>{i.value&&R()&&(e.context.refresh(),i.value=!1)};return K(o,()=>{l.value&&(l.value(),l.value=g(()=>e.context.refresh()))}),n||h(j("VISIBLE_LISTENER",E)),t||h(j("RECONNECT_LISTENER",E)),Q(()=>{c.forEach(d=>d())}),{onBefore(){var d;(d=l.value)===null||d===void 0||d.call(l)},onCancel(){var d;(d=l.value)===null||d===void 0||d.call(l)},onAfter(){l.value=g(()=>e.context.refresh())}}});const Se=(e,r)=>{let n=!1;return(...t)=>{n||(n=!0,e(...t),setTimeout(()=>{n=!1},r))}};var Be=C((e,{refreshOnWindowFocus:r=!1,refocusTimespan:n=5e3})=>{const t=A(()=>O(r)),a=A(()=>O(n)),l=[],i=u=>{u&&l.push(u)},o=()=>{l.forEach(u=>u())};return G(()=>{if(o(),t.value){const u=Se(e.context.refresh,a.value);i(j("VISIBLE_LISTENER",u)),i(j("FOCUS_LISTENER",u))}}),Q(()=>{o()}),{}});function Ie(e,r){return oe(e,r,[Ce,ee,q,xe,re,Be,te,ne,Le])}export{Me as a,Ie as u};
