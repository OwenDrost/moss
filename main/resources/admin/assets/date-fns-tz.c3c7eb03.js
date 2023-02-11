import{t as F,g as I,d as S,c as E}from"./date-fns.a06005bd.js";function M(e,t,r){var a=L(e,r.timeZone,r.locale);return a.formatToParts?X(a,t):A(a,t)}function X(e,t){for(var r=e.formatToParts(t),a=r.length-1;a>=0;--a)if(r[a].type==="timeZoneName")return r[a].value}function A(e,t){var r=e.format(t).replace(/\u200E/g,""),a=/ [\w-+ ]+$/.exec(r);return a?a[0].substr(1):""}function L(e,t,r){if(r&&!r.code)throw new Error("date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`");return new Intl.DateTimeFormat(r?[r.code,"en-US"]:void 0,{timeZone:t,timeZoneName:e})}function P(e,t){var r=R(t);return r.formatToParts?W(r,e):j(r,e)}var y={year:0,month:1,day:2,hour:3,minute:4,second:5};function W(e,t){try{for(var r=e.formatToParts(t),a=[],n=0;n<r.length;n++){var i=y[r[n].type];i>=0&&(a[i]=parseInt(r[n].value,10))}return a}catch(u){if(u instanceof RangeError)return[NaN];throw u}}function j(e,t){var r=e.format(t).replace(/\u200E/g,""),a=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);return[a[3],a[1],a[2],a[4],a[5],a[6]]}var m={};function R(e){if(!m[e]){var t=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:"America/New_York",year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),r=t==="06/25/2014, 00:00:00"||t==="\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";m[e]=r?new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return m[e]}function _(e,t,r,a,n,i,u){var o=new Date(0);return o.setUTCFullYear(e,t,r),o.setUTCHours(a,n,i,u),o}var Y=36e5,G=6e4,T={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-]\d{2}):?(\d{2})$/};function h(e,t,r){var a,n;if(e===""||(a=T.timezoneZ.exec(e),a))return 0;var i;if(a=T.timezoneHH.exec(e),a)return i=parseInt(a[1],10),x(i)?-(i*Y):NaN;if(a=T.timezoneHHMM.exec(e),a){i=parseInt(a[1],10);var u=parseInt(a[2],10);return x(i,u)?(n=Math.abs(i)*Y+u*G,i>0?-n:n):NaN}if(B(e)){t=new Date(t||Date.now());var o=r?t:k(t),f=w(o,e),l=r?f:q(t,f,e);return-l}return NaN}function k(e){return _(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}function w(e,t){var r=P(e,t),a=_(r[0],r[1]-1,r[2],r[3]%24,r[4],r[5],0).getTime(),n=e.getTime(),i=n%1e3;return n-=i>=0?i:1e3+i,a-n}function q(e,t,r){var a=e.getTime(),n=a-t,i=w(new Date(n),r);if(t===i)return t;n-=i-t;var u=w(new Date(n),r);return i===u?i:Math.max(i,u)}function x(e,t){return-23<=e&&e<=23&&(t==null||0<=t&&t<=59)}var O={};function B(e){if(O[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),O[e]=!0,!0}catch{return!1}}var J=60*1e3,Q={X:function(e,t,r,a){var n=N(a.timeZone,a._originalDate||e);if(n===0)return"Z";switch(t){case"X":return z(n);case"XXXX":case"XX":return d(n);case"XXXXX":case"XXX":default:return d(n,":")}},x:function(e,t,r,a){var n=N(a.timeZone,a._originalDate||e);switch(t){case"x":return z(n);case"xxxx":case"xx":return d(n);case"xxxxx":case"xxx":default:return d(n,":")}},O:function(e,t,r,a){var n=N(a.timeZone,a._originalDate||e);switch(t){case"O":case"OO":case"OOO":return"GMT"+V(n,":");case"OOOO":default:return"GMT"+d(n,":")}},z:function(e,t,r,a){var n=a._originalDate||e;switch(t){case"z":case"zz":case"zzz":return M("short",n,a);case"zzzz":default:return M("long",n,a)}}};function N(e,t){var r=e?h(e,t,!0)/J:t.getTimezoneOffset();if(Number.isNaN(r))throw new RangeError("Invalid time zone specified: "+e);return r}function D(e,t){for(var r=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return r+a}function d(e,t){var r=t||"",a=e>0?"-":"+",n=Math.abs(e),i=D(Math.floor(n/60),2),u=D(Math.floor(n%60),2);return a+i+r+u}function z(e,t){if(e%60===0){var r=e>0?"-":"+";return r+D(Math.abs(e)/60,2)}return d(e,t)}function V(e,t){var r=e>0?"-":"+",a=Math.abs(e),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var u=t||"";return r+String(n)+u+D(i,2)}const K=Q;var ee=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;const re=ee;var g=36e5,U=6e4,te=2,s={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:re};function $(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(e===null)return new Date(NaN);var r=t||{},a=r.additionalDigits==null?te:F(r.additionalDigits);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]")return new Date(e.getTime());if(typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]")return new Date(e);if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var n=ae(e),i=ne(n.date,a),u=i.year,o=i.restDateString,f=ie(o,u);if(isNaN(f))return new Date(NaN);if(f){var l=f.getTime(),v=0,c;if(n.time&&(v=ue(n.time),isNaN(v)))return new Date(NaN);if(n.timeZone||r.timeZone){if(c=h(n.timeZone||r.timeZone,new Date(l+v)),isNaN(c))return new Date(NaN)}else c=I(new Date(l+v)),c=I(new Date(l+v+c));return new Date(l+v+c)}else return new Date(NaN)}function ae(e){var t={},r=s.dateTimePattern.exec(e),a;if(r?(t.date=r[1],a=r[3]):(r=s.datePattern.exec(e),r?(t.date=r[1],a=r[2]):(t.date=null,a=e)),a){var n=s.timeZone.exec(a);n?(t.time=a.replace(n[1],""),t.timeZone=n[1].trim()):t.time=a}return t}function ne(e,t){var r=s.YYY[t],a=s.YYYYY[t],n;if(n=s.YYYY.exec(e)||a.exec(e),n){var i=n[1];return{year:parseInt(i,10),restDateString:e.slice(i.length)}}if(n=s.YY.exec(e)||r.exec(e),n){var u=n[1];return{year:parseInt(u,10)*100,restDateString:e.slice(u.length)}}return{year:null}}function ie(e,t){if(t===null)return null;var r,a,n,i;if(e.length===0)return a=new Date(0),a.setUTCFullYear(t),a;if(r=s.MM.exec(e),r)return a=new Date(0),n=parseInt(r[1],10)-1,H(t,n)?(a.setUTCFullYear(t,n),a):new Date(NaN);if(r=s.DDD.exec(e),r){a=new Date(0);var u=parseInt(r[1],10);return se(t,u)?(a.setUTCFullYear(t,0,u),a):new Date(NaN)}if(r=s.MMDD.exec(e),r){a=new Date(0),n=parseInt(r[1],10)-1;var o=parseInt(r[2],10);return H(t,n,o)?(a.setUTCFullYear(t,n,o),a):new Date(NaN)}if(r=s.Www.exec(e),r)return i=parseInt(r[1],10)-1,Z(t,i)?C(t,i):new Date(NaN);if(r=s.WwwD.exec(e),r){i=parseInt(r[1],10)-1;var f=parseInt(r[2],10)-1;return Z(t,i,f)?C(t,i,f):new Date(NaN)}return null}function ue(e){var t,r,a;if(t=s.HH.exec(e),t)return r=parseFloat(t[1].replace(",",".")),p(r)?r%24*g:NaN;if(t=s.HHMM.exec(e),t)return r=parseInt(t[1],10),a=parseFloat(t[2].replace(",",".")),p(r,a)?r%24*g+a*U:NaN;if(t=s.HHMMSS.exec(e),t){r=parseInt(t[1],10),a=parseInt(t[2],10);var n=parseFloat(t[3].replace(",","."));return p(r,a,n)?r%24*g+a*U+n*1e3:NaN}return null}function C(e,t,r){t=t||0,r=r||0;var a=new Date(0);a.setUTCFullYear(e,0,4);var n=a.getUTCDay()||7,i=t*7+r+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var oe=[31,28,31,30,31,30,31,31,30,31,30,31],fe=[31,29,31,30,31,30,31,31,30,31,30,31];function b(e){return e%400===0||e%4===0&&e%100!==0}function H(e,t,r){if(t<0||t>11)return!1;if(r!=null){if(r<1)return!1;var a=b(e);if(a&&r>fe[t]||!a&&r>oe[t])return!1}return!0}function se(e,t){if(t<1)return!1;var r=b(e);return!(r&&t>366||!r&&t>365)}function Z(e,t,r){return!(t<0||t>52||r!=null&&(r<0||r>6))}function p(e,t,r){return!(e!=null&&(e<0||e>=25)||t!=null&&(t<0||t>=60)||r!=null&&(r<0||r>=60))}var le=/([xXOz]+)|''|'(''|[^'])+('|$)/g;function ce(e,t,r){var a=String(t),n=r||{},i=a.match(le);if(i){var u=$(e,n);a=i.reduce(function(o,f){if(f[0]==="'")return o;var l=o.indexOf(f),v=o[l-1]==="'",c=o.replace(f,"'"+K[f[0]](u,f,null,n)+"'");return v?c.substring(0,l-1)+c.substring(l+1):c},a)}return S(e,a,n)}function ve(e,t,r){var a=$(e,r),n=h(t,a,!0),i=new Date(a.getTime()-n),u=new Date(0);return u.setFullYear(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate()),u.setHours(i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),u}function De(e,t,r,a){var n=E(a);return n.timeZone=t,ce(ve(e,t),r,n)}export{De as f};
