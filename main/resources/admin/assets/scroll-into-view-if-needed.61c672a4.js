import{i}from"./compute-scroll-into-view.17358474.js";function f(e){return e===Object(e)&&Object.keys(e).length!==0}function u(e,n){n===void 0&&(n="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(t){var l=t.el,o=t.top,c=t.left;l.scroll&&r?l.scroll({top:o,left:c,behavior:n}):(l.scrollTop=o,l.scrollLeft=c)})}function a(e){return e===!1?{block:"end",inline:"nearest"}:f(e)?e:{block:"start",inline:"nearest"}}function v(e,n){var r=e.isConnected||e.ownerDocument.documentElement.contains(e);if(f(n)&&typeof n.behavior=="function")return n.behavior(r?i(e,n):[]);if(!!r){var t=a(n);return u(i(e,t),t.behavior)}}export{v as s};
