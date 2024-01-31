(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=(t,e,n,r=null,o=null)=>{const a=document.createElement(t);return a.classList.add(...e),a.innerText=n,r&&(a.id=r,"defaultBtn"===r&&(a.innerText=o.default?"★":"☆")),a},n=(t,...e)=>{e.forEach((e=>{t.appendChild(e)}))},r=t.p+"286e76a0ad57e05c786b.webm",o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let a;const i=new Uint8Array(16);function s(){if(!a&&(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}const u=[];for(let t=0;t<256;++t)u.push((t+256).toString(16).slice(1));const c=function(t,e,n){if(o.randomUUID&&!e&&!t)return o.randomUUID();const r=(t=t||{}).random||(t.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){n=n||0;for(let t=0;t<16;++t)e[n+t]=r[t];return e}return function(t,e=0){return u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]}(r)},d={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const h={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},f={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function g(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let c;return c=t.valueCallback?t.valueCallback(u):u,c=n.valueCallback?n.valueCallback(c):c,{value:c,rest:e.slice(i.length)}}}var w;const b={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=d[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:h,formatRelative:(t,e,n,r)=>f[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(w={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(w.matchPattern);if(!n)return null;const r=n[0],o=t.match(w.parsePattern);if(!o)return null;let a=w.valueCallback?w.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let p={};function y(){return p}Math.pow(10,8);const v=6048e5,x=864e5;function S(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function k(t){const e=S(t);return e.setHours(0,0,0,0),e}function M(t){const e=S(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function D(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function P(t){const e=S(t);return function(t,e){const n=k(t),r=k(e),o=+n-M(n),a=+r-M(r);return Math.round((o-a)/x)}(e,function(t){const e=S(t),n=D(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function W(t,e){const n=y(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=S(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function L(t){return W(t,{weekStartsOn:1})}function q(t){const e=S(t),n=e.getFullYear(),r=D(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=L(r),a=D(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=L(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function N(t){const e=S(t),n=+L(e)-+function(t){const e=q(t),n=D(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),L(n)}(e);return Math.round(n/v)+1}function O(t,e){const n=S(t),r=n.getFullYear(),o=y(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=D(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=W(i,e),u=D(t,0);u.setFullYear(r,0,a),u.setHours(0,0,0,0);const c=W(u,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=c.getTime()?r:r-1}function T(t,e){const n=S(t),r=+W(n,e)-+function(t,e){const n=y(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=O(t,e),a=D(t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),W(a,e)}(n,e);return Math.round(r/v)+1}function E(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const C={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return E("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):E(n+1,2)},d:(t,e)=>E(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>E(t.getHours()%12||12,e.length),H:(t,e)=>E(t.getHours(),e.length),m:(t,e)=>E(t.getMinutes(),e.length),s:(t,e)=>E(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return E(Math.trunc(r*Math.pow(10,n-3)),e.length)}},Y={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return C.y(t,e)},Y:function(t,e,n,r){const o=O(t,r),a=o>0?o:1-o;return"YY"===e?E(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):E(a,e.length)},R:function(t,e){return E(q(t),e.length)},u:function(t,e){return E(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return E(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return E(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return C.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return E(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=T(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):E(o,e.length)},I:function(t,e,n){const r=N(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):E(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):C.d(t,e)},D:function(t,e,n){const r=P(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):E(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return E(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return E(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return E(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return C.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):C.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):E(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):E(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):C.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):C.s(t,e)},S:function(t,e){return C.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return F(r);case"XXXX":case"XX":return I(r);default:return I(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return F(r);case"xxxx":case"xx":return I(r);default:return I(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+j(r,":");default:return"GMT"+I(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+j(r,":");default:return"GMT"+I(r,":")}},t:function(t,e,n){return E(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return E(t.getTime(),e.length)}};function j(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+E(a,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+E(Math.abs(t)/60,2):I(t,e)}function I(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+E(Math.trunc(r/60),2)+e+E(r%60,2)}const H=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},z=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},J={p:z,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return H(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",H(r,e)).replace("{{time}}",z(o,e))}},Q=/^D+$/,A=/^Y+$/,B=["D","DD","YY","YYYY"];function $(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=S(t);return!isNaN(Number(n))}const G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,U=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,X=/^'([^]*?)'?$/,R=/''/g,V=/[a-zA-Z]/;function K(t,e,n){const r=y(),o=n?.locale??r.locale??b,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=S(t);if(!$(s))throw new RangeError("Invalid time value");let u=e.match(U).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,J[e])(t,o.formatLong):t})).join("").match(G).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:Z(t)};if(Y[e])return{isToken:!0,value:t};if(e.match(V))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(u=o.localize.preprocessor(s,u));const c={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return u.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return A.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return Q.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),B.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,Y[a[0]])(s,a,o.localize,c)})).join("")}function Z(t){const e=t.match(X);return e?e[1].replace(R,"'"):t}const _=t=>{const e=t.dueDate;return{...t,dueDate:K(new Date(e.slice(0,4),parseInt(e.slice(4,6),Number)-1,e.slice(6,8)),"dd MMM yyyy")}},tt=()=>{const t=[...JSON.parse(localStorage.getItem("questLog")),{id:c(),name:prompt("What is the name of your next quest?"),default:!1,tasks:[]}];localStorage.setItem("questLog",JSON.stringify(t)),nt()},et=()=>{const t=document.querySelector("body"),r=JSON.parse(localStorage.getItem("questLog")),o=e("btn",["p-3","m-3","border-2","text-white","hover:bg-yellow-400","hover:border-yellow-400","hover:text-yellow-800","cursor-pointer","rounded-full","w-1/3","text-center","bg-yellow-800","z-10","absolute","top-[5%]","font-extrabold"],"Add Quest");o.addEventListener("click",(()=>tt()));const a=e("div",["flex","flex-col","border-2","text-white","z-10","absolute","max-h-[65%]","overflow-y-auto","top-1/2","left-1/2","transform","-translate-x-1/2","-translate-y-1/2","w-1/3","rounded-3xl","bg-yellow-800"],"","fullQuestLog");r.forEach((t=>{const r=e("div",["flex","flex-col","bg-yellow-600","text-white","p-3","border-2","m-3","rounded-3xl"],""),o=e("h1",["text-2xl","font-semibold","border-2","rounded-3xl","p-2","text-center"],`${t.name}`),i=e("btn",["p-2","border-2","hover:bg-yellow-800","cursor-pointer","rounded-3xl","w-1/4","text-center","mr-2"],"+ Task");i.addEventListener("click",(()=>(t=>{const e=JSON.parse(localStorage.getItem("questLog")),n={id:c(),title:prompt("What is the title of your next task?"),description:prompt("What is the description of this task?"),difficulty:prompt("What is the difficulty of this task? (Easy / Medium / Hard)"),dueDate:prompt("When is this due? Format: yyyymmdd E.g. 20241225"),completed:!1},r=_(n),o=e.slice();o.find((e=>e.id===t)).tasks.push(r),localStorage.setItem("questLog",JSON.stringify(o)),nt()})(t.id)));const s=e("btn",["border-2","hover:bg-yellow-800","cursor-pointer","rounded-[50%]","w-8","h-8","text-center","mr-2"],"x");s.addEventListener("click",(()=>(t=>{const e=JSON.parse(localStorage.getItem("questLog")),n=e.filter((e=>e.id!==t));e.length!==n.length&&(localStorage.setItem("questLog",JSON.stringify(n)),nt())})(t.id)));const u=e("button",["border-2","hover:bg-yellow-800","cursor-pointer","rounded-[50%]","w-8","h-8","text-center","mr-2"],"","defaultBtn",t);u.addEventListener("click",(()=>(t=>{const e=JSON.parse(localStorage.getItem("questLog")).slice();e.forEach((e=>{e.id===t?e.default=!e.default:e.default=!1})),(t=>{t.sort(((t,e)=>e.default-t.default)),localStorage.setItem("questLog",JSON.stringify(t))})(e),nt()})(t.id)));const d=e("div",["flex","items-center","mt-3"],"");n(d,i,s,u),n(r,o,d),t.tasks.forEach((o=>{const a=e("div",["flex","flex-col","border-2","bg-yellow-800","rounded-3xl","p-3","mt-3"],"",c()),i=o.completed,s=e("h1",["text-2xl","font-semibold","border-2","p-2","rounded-full","text-center"],`${o.title}`);i&&s.classList.add("line-through");const u=e("p",["mt-2","font-sans","text-right","pr-3"],`↳ Due: ${o.dueDate}`),d=e("button",["border-2","hover:bg-yellow-600","cursor-pointer","rounded-3xl","w-fit","text-center","p-1","mt-2","text-xs","mx-auto"],"+ expand task");d.addEventListener("click",(()=>{((t,r,o)=>{const a=JSON.parse(localStorage.getItem("questLog")).slice().find((e=>e.id===t)).tasks.find((t=>t.id===r)),i=e("btn",["border-2","hover:bg-yellow-600","cursor-pointer","rounded-[50%]","w-8","h-8","text-center","mr-3"],"...");i.addEventListener("click",(()=>((t,e)=>{const n=JSON.parse(localStorage.getItem("questLog")).slice(),r=n.find((e=>e.id===t)),o=r.tasks.find((t=>t.id===e));if(o){const t={...o,title:prompt("What is the new title of this task?"),description:prompt("What is the new description of this task?"),difficulty:prompt("What is the new difficulty of this task? (Easy / Medium / Hard)"),dueDate:prompt("When is this due? Format: yyyymmdd E.g. 20241225")},a=_(t);return r.tasks=r.tasks.filter((t=>t.id!==e)),r.tasks.push(a),localStorage.setItem("questLog",JSON.stringify(n)),void nt()}})(t,r)));const s=e("btn",["border-2","hover:bg-yellow-600","cursor-pointer","rounded-[50%]","w-8","h-8","text-center","mr-3"],"x");s.addEventListener("click",(()=>((t,e)=>{const n=JSON.parse(localStorage.getItem("questLog")),r=n.find((e=>e.id===t));r.tasks.find((t=>t.id===e))&&(r.tasks=r.tasks.filter((t=>t.id!==e)),localStorage.setItem("questLog",JSON.stringify(n)),nt())})(t,r)));const u=e("btn",["border-2","hover:bg-yellow-600","cursor-pointer","rounded-[50%]","w-8","h-8","text-center","mr-3"],"✓");u.addEventListener("click",(()=>((t,e)=>{const n=JSON.parse(localStorage.getItem("questLog")).slice(),r=n.find((e=>e.id===t)),o=r.tasks.find((t=>t.id===e));if(o){const t={...o,completed:!o.completed};r.tasks=r.tasks.filter((t=>t.id!==e)),r.tasks.push(t),localStorage.setItem("questLog",JSON.stringify(n)),nt()}})(t,r)));const c=e("p",["mt-2"],`Description: ${a.description}`),d=e("p",["mt-2"],`Difficulty: ${a.difficulty}`),l=e("div",["flex","items-center","mt-3","justify-center"],"");n(l,u,i,s);const h=e("div",["flex","flex-col","rounded-3xl"],"");n(h,c,d);const f=document.getElementById(`${o}`);n(f,l,h)})(t.id,o.id,a.id),d.classList.add("hidden")})),n(a,s,u,d),r.appendChild(a)})),a.appendChild(r)})),a.hasChildNodes()?n(t,o,a):t.appendChild(o)},nt=()=>{(()=>{const t=document.querySelector("body");t.querySelector("#fullQuestLog")&&t.removeChild(t.querySelector("#fullQuestLog"))})(),et()};document.addEventListener("DOMContentLoaded",(()=>((()=>{const t=document.querySelector("body"),o=e("div",["absolute","w-screen","h-screen","overflow-hidden"],""),a=e("video",["absolute","right-0","bottom-0","min-w-full","min-h-full","w-auto","h-auto","-z-10","object-cover"],"");a.autoplay=!0,a.loop=!0,a.muted=!0;const i=e("source",[],"");i.src=r,i.type="video/webm",a.appendChild(i);const s=e("div",["absolute","top-0","left-0","w-full","h-full","object-cover","z-0","bg-black/50"],"");n(o,a,s),t.appendChild(o)})(),void(()=>{const t=document.querySelector("body");var n;n=t,["flex","h-screen","w-full","items-center","justify-center"].forEach((t=>{n.classList.add(t)}));const r=e("btn",["p-3","m-3","border-2","text-white","hover:bg-yellow-400","hover:border-yellow-400","hover:text-yellow-800","cursor-pointer","rounded-full","z-10","relative","bg-yellow-800","font-extrabold"],"Start My Adventure!"),o=localStorage.getItem("questLog");r.addEventListener("click",(()=>{o?(r.classList.add("hidden"),nt()):(localStorage.setItem("questLog",JSON.stringify([])),r.classList.add("hidden"),tt())})),t.appendChild(r)})())))})();