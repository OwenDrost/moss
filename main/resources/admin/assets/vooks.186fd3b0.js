import{r as s,J as i,w as r,c as f,o as d,A as l}from"./@vue.1832462a.js";function y(e){const n=s(!!e.value);if(n.value)return i(n);const t=r(e,o=>{o&&(n.value=!0,t())});return i(n)}function p(e){const n=f(e),t=s(n.value);return r(n,o=>{t.value=o}),typeof e=="function"?t:{__v_isRef:!0,get value(){return t.value},set value(o){e.set(o)}}}const v=typeof window<"u";let u,a;const c=()=>{var e,n;u=v?(n=(e=document)===null||e===void 0?void 0:e.fonts)===null||n===void 0?void 0:n.ready:void 0,a=!1,u!==void 0?u.then(()=>{a=!0}):a=!0};c();function M(e){if(a)return;let n=!1;d(()=>{a||u==null||u.then(()=>{n||e()})}),l(()=>{n=!0})}function h(e,n){return r(e,t=>{t!==void 0&&(n.value=t)}),f(()=>e.value===void 0?n.value:e.value)}function _(){const e=s(!1);return d(()=>{e.value=!0}),i(e)}const m=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function I(){return m}export{I as a,h as b,y as c,_ as i,M as o,p as u};
