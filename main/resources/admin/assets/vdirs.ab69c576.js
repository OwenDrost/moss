import{o as c,a}from"./evtd.9eee5233.js";const d="@@coContext",x={mounted(n,{value:e,modifiers:i}){n[d]={handler:void 0},typeof e=="function"&&(n[d].handler=e,c("clickoutside",n,e,{capture:i.capture}))},updated(n,{value:e,modifiers:i}){const t=n[d];typeof e=="function"?t.handler?t.handler!==e&&(a("clickoutside",n,t.handler,{capture:i.capture}),t.handler=e,c("clickoutside",n,e,{capture:i.capture})):(n[d].handler=e,c("clickoutside",n,e,{capture:i.capture})):t.handler&&(a("clickoutside",n,t.handler,{capture:i.capture}),t.handler=void 0)},unmounted(n,{modifiers:e}){const{handler:i}=n[d];i&&a("clickoutside",n,i,{capture:e.capture}),n[d].handler=void 0}},Z=x;function h(n,e){console.error(`[vdirs/${n}]: ${e}`)}class f{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,i){const{elementZIndex:t}=this;if(i!==void 0){e.style.zIndex=`${i}`,t.delete(e);return}const{nextZIndex:s}=this;t.has(e)&&t.get(e)+1===this.nextZIndex||(e.style.zIndex=`${s}`,t.set(e,s),this.nextZIndex=s+1,this.squashState())}unregister(e,i){const{elementZIndex:t}=this;t.has(e)?t.delete(e):i===void 0&&h("z-index-manager/unregister-element","Element not found when unregistering."),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort((i,t)=>i[1]-t[1]),this.nextZIndex=2e3,e.forEach(i=>{const t=i[0],s=this.nextZIndex++;`${s}`!==t.style.zIndex&&(t.style.zIndex=`${s}`)})}}const o=new f,r="@@ziContext",l={mounted(n,e){const{value:i={}}=e,{zIndex:t,enabled:s}=i;n[r]={enabled:!!s,initialized:!1},s&&(o.ensureZIndex(n,t),n[r].initialized=!0)},updated(n,e){const{value:i={}}=e,{zIndex:t,enabled:s}=i,u=n[r].enabled;s&&!u&&(o.ensureZIndex(n,t),n[r].initialized=!0),n[r].enabled=!!s},unmounted(n,e){if(!n[r].initialized)return;const{value:i={}}=e,{zIndex:t}=i;o.unregister(n,t)}},p=l;export{Z as c,p as z};