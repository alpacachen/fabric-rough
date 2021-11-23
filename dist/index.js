!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("fabric"));else if("function"==typeof define&&define.amd)define(["fabric"],e);else{var s="object"==typeof exports?e(require("fabric")):e(t.fabric);for(var n in s)("object"==typeof exports?exports:t)[n]=s[n]}}(self,(function(t){return(()=>{"use strict";var e={757:(t,e,s)=>{function n(t,e,s){if(t&&t.length){const[n,o]=e,a=Math.PI/180*s,r=Math.cos(a),h=Math.sin(a);t.forEach((t=>{const[e,s]=t;t[0]=(e-n)*r-(s-o)*h+n,t[1]=(e-n)*h+(s-o)*r+o}))}}function o(t){const e=t[0],s=t[1];return Math.sqrt(Math.pow(e[0]-s[0],2)+Math.pow(e[1]-s[1],2))}function a(t,e){const s=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=4*e.strokeWidth),o=Math.max(o,.1);const a=[0,0];if(s)for(const e of t)n(e,a,s);const r=function(t,e){const s=[];for(const e of t){const t=[...e];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]),t.length>2&&s.push(t)}const n=[];e=Math.max(e,.1);const o=[];for(const t of s)for(let e=0;e<t.length-1;e++){const s=t[e],n=t[e+1];if(s[1]!==n[1]){const t=Math.min(s[1],n[1]);o.push({ymin:t,ymax:Math.max(s[1],n[1]),x:t===s[1]?s[0]:n[0],islope:(n[0]-s[0])/(n[1]-s[1])})}}if(o.sort(((t,e)=>t.ymin<e.ymin?-1:t.ymin>e.ymin?1:t.x<e.x?-1:t.x>e.x?1:t.ymax===e.ymax?0:(t.ymax-e.ymax)/Math.abs(t.ymax-e.ymax))),!o.length)return n;let a=[],r=o[0].ymin;for(;a.length||o.length;){if(o.length){let t=-1;for(let e=0;e<o.length&&!(o[e].ymin>r);e++)t=e;o.splice(0,t+1).forEach((t=>{a.push({s:r,edge:t})}))}if(a=a.filter((t=>!(t.edge.ymax<=r))),a.sort(((t,e)=>t.edge.x===e.edge.x?0:(t.edge.x-e.edge.x)/Math.abs(t.edge.x-e.edge.x))),a.length>1)for(let t=0;t<a.length;t+=2){const e=t+1;if(e>=a.length)break;const s=a[t].edge,o=a[e].edge;n.push([[Math.round(s.x),r],[Math.round(o.x),r]])}r+=e,a.forEach((t=>{t.edge.x=t.edge.x+e*t.edge.islope}))}return n}(t,o);if(s){for(const e of t)n(e,a,-s);!function(t,e,s){const o=[];t.forEach((t=>o.push(...t))),n(o,e,s)}(r,a,-s)}return r}s.r(e),s.d(e,{default:()=>X});class r{constructor(t){this.helper=t}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const s=a(t,e);return{type:"fillSketch",ops:this.renderLines(s,e)}}renderLines(t,e){const s=[];for(const n of t)s.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return s}}class h extends r{fillPolygons(t,e){let s=e.hachureGap;s<0&&(s=4*e.strokeWidth),s=Math.max(s,.1);const n=a(t,Object.assign({},e,{hachureGap:s})),r=Math.PI/180*e.hachureAngle,h=[],i=.5*s*Math.cos(r),c=.5*s*Math.sin(r);for(const[t,e]of n)o([t,e])&&h.push([[t[0]-i,t[1]+c],[...e]],[[t[0]+i,t[1]-c],[...e]]);return{type:"fillSketch",ops:this.renderLines(h,e)}}}class i extends r{fillPolygons(t,e){const s=this._fillPolygons(t,e),n=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),o=this._fillPolygons(t,n);return s.ops=s.ops.concat(o.ops),s}}class c{constructor(t){this.helper=t}fillPolygons(t,e){const s=a(t,e=Object.assign({},e,{hachureAngle:0}));return this.dotsOnLines(s,e)}dotsOnLines(t,e){const s=[];let n=e.hachureGap;n<0&&(n=4*e.strokeWidth),n=Math.max(n,.1);let a=e.fillWeight;a<0&&(a=e.strokeWidth/2);const r=n/4;for(const h of t){const t=o(h),i=t/n,c=Math.ceil(i)-1,l=t-c*n,u=(h[0][0]+h[1][0])/2-n/4,p=Math.min(h[0][1],h[1][1]);for(let t=0;t<c;t++){const o=p+l+t*n,h=u-r+2*Math.random()*r,i=o-r+2*Math.random()*r,c=this.helper.ellipse(h,i,a,a,e);s.push(...c.ops)}}return{type:"fillSketch",ops:s}}}class l{constructor(t){this.helper=t}fillPolygons(t,e){const s=a(t,e);return{type:"fillSketch",ops:this.dashedLine(s,e)}}dashedLine(t,e){const s=e.dashOffset<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashOffset,n=e.dashGap<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashGap,a=[];return t.forEach((t=>{const r=o(t),h=Math.floor(r/(s+n)),i=(r+n-h*(s+n))/2;let c=t[0],l=t[1];c[0]>l[0]&&(c=t[1],l=t[0]);const u=Math.atan((l[1]-c[1])/(l[0]-c[0]));for(let t=0;t<h;t++){const o=t*(s+n),r=o+s,h=[c[0]+o*Math.cos(u)+i*Math.cos(u),c[1]+o*Math.sin(u)+i*Math.sin(u)],l=[c[0]+r*Math.cos(u)+i*Math.cos(u),c[1]+r*Math.sin(u)+i*Math.sin(u)];a.push(...this.helper.doubleLineOps(h[0],h[1],l[0],l[1],e))}})),a}}class u{constructor(t){this.helper=t}fillPolygons(t,e){const s=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,n=e.zigzagOffset<0?s:e.zigzagOffset,o=a(t,e=Object.assign({},e,{hachureGap:s+n}));return{type:"fillSketch",ops:this.zigzagLines(o,n,e)}}zigzagLines(t,e,s){const n=[];return t.forEach((t=>{const a=o(t),r=Math.round(a/(2*e));let h=t[0],i=t[1];h[0]>i[0]&&(h=t[1],i=t[0]);const c=Math.atan((i[1]-h[1])/(i[0]-h[0]));for(let t=0;t<r;t++){const o=2*t*e,a=2*(t+1)*e,r=Math.sqrt(2*Math.pow(e,2)),i=[h[0]+o*Math.cos(c),h[1]+o*Math.sin(c)],l=[h[0]+a*Math.cos(c),h[1]+a*Math.sin(c)],u=[i[0]+r*Math.cos(c+Math.PI/4),i[1]+r*Math.sin(c+Math.PI/4)];n.push(...this.helper.doubleLineOps(i[0],i[1],u[0],u[1],s),...this.helper.doubleLineOps(u[0],u[1],l[0],l[1],s))}})),n}}const p={};class f{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const d={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function g(t,e){return t.type===e}function M(t){const e=[],s=function(t){const e=new Array;for(;""!==t;)if(t.match(/^([ \t\r\n,]+)/))t=t.substr(RegExp.$1.length);else if(t.match(/^([aAcChHlLmMqQsStTvVzZ])/))e[e.length]={type:0,text:RegExp.$1},t=t.substr(RegExp.$1.length);else{if(!t.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];e[e.length]={type:1,text:`${parseFloat(RegExp.$1)}`},t=t.substr(RegExp.$1.length)}return e[e.length]={type:2,text:""},e}(t);let n="BOD",o=0,a=s[o];for(;!g(a,2);){let r=0;const h=[];if("BOD"===n){if("M"!==a.text&&"m"!==a.text)return M("M0,0"+t);o++,r=d[a.text],n=a.text}else g(a,1)?r=d[n]:(o++,r=d[a.text],n=a.text);if(!(o+r<s.length))throw new Error("Path data ended short");for(let t=o;t<o+r;t++){const e=s[t];if(!g(e,1))throw new Error("Param not a number: "+n+","+e.text);h[h.length]=+e.text}if("number"!=typeof d[n])throw new Error("Bad segment: "+n);{const t={key:n,data:h};e.push(t),o+=r,a=s[o],"M"===n&&(n="L"),"m"===n&&(n="l")}}return e}function k(t){let e=0,s=0,n=0,o=0;const a=[];for(const{key:r,data:h}of t)switch(r){case"M":a.push({key:"M",data:[...h]}),[e,s]=h,[n,o]=h;break;case"m":e+=h[0],s+=h[1],a.push({key:"M",data:[e,s]}),n=e,o=s;break;case"L":a.push({key:"L",data:[...h]}),[e,s]=h;break;case"l":e+=h[0],s+=h[1],a.push({key:"L",data:[e,s]});break;case"C":a.push({key:"C",data:[...h]}),e=h[4],s=h[5];break;case"c":{const t=h.map(((t,n)=>n%2?t+s:t+e));a.push({key:"C",data:t}),e=t[4],s=t[5];break}case"Q":a.push({key:"Q",data:[...h]}),e=h[2],s=h[3];break;case"q":{const t=h.map(((t,n)=>n%2?t+s:t+e));a.push({key:"Q",data:t}),e=t[2],s=t[3];break}case"A":a.push({key:"A",data:[...h]}),e=h[5],s=h[6];break;case"a":e+=h[5],s+=h[6],a.push({key:"A",data:[h[0],h[1],h[2],h[3],h[4],e,s]});break;case"H":a.push({key:"H",data:[...h]}),e=h[0];break;case"h":e+=h[0],a.push({key:"H",data:[e]});break;case"V":a.push({key:"V",data:[...h]}),s=h[0];break;case"v":s+=h[0],a.push({key:"V",data:[s]});break;case"S":a.push({key:"S",data:[...h]}),e=h[2],s=h[3];break;case"s":{const t=h.map(((t,n)=>n%2?t+s:t+e));a.push({key:"S",data:t}),e=t[2],s=t[3];break}case"T":a.push({key:"T",data:[...h]}),e=h[0],s=h[1];break;case"t":e+=h[0],s+=h[1],a.push({key:"T",data:[e,s]});break;case"Z":case"z":a.push({key:"Z",data:[]}),e=n,s=o}return a}function b(t){const e=[];let s="",n=0,o=0,a=0,r=0,h=0,i=0;for(const{key:c,data:l}of t){switch(c){case"M":e.push({key:"M",data:[...l]}),[n,o]=l,[a,r]=l;break;case"C":e.push({key:"C",data:[...l]}),n=l[4],o=l[5],h=l[2],i=l[3];break;case"L":e.push({key:"L",data:[...l]}),[n,o]=l;break;case"H":n=l[0],e.push({key:"L",data:[n,o]});break;case"V":o=l[0],e.push({key:"L",data:[n,o]});break;case"S":{let t=0,a=0;"C"===s||"S"===s?(t=n+(n-h),a=o+(o-i)):(t=n,a=o),e.push({key:"C",data:[t,a,...l]}),h=l[0],i=l[1],n=l[2],o=l[3];break}case"T":{const[t,a]=l;let r=0,c=0;"Q"===s||"T"===s?(r=n+(n-h),c=o+(o-i)):(r=n,c=o);const u=n+2*(r-n)/3,p=o+2*(c-o)/3,f=t+2*(r-t)/3,d=a+2*(c-a)/3;e.push({key:"C",data:[u,p,f,d,t,a]}),h=r,i=c,n=t,o=a;break}case"Q":{const[t,s,a,r]=l,c=n+2*(t-n)/3,u=o+2*(s-o)/3,p=a+2*(t-a)/3,f=r+2*(s-r)/3;e.push({key:"C",data:[c,u,p,f,a,r]}),h=t,i=s,n=a,o=r;break}case"A":{const t=Math.abs(l[0]),s=Math.abs(l[1]),a=l[2],r=l[3],h=l[4],i=l[5],c=l[6];0===t||0===s?(e.push({key:"C",data:[n,o,i,c,i,c]}),n=i,o=c):n===i&&o===c||(m(n,o,i,c,t,s,a,r,h).forEach((function(t){e.push({key:"C",data:t})})),n=i,o=c);break}case"Z":e.push({key:"Z",data:[]}),n=a,o=r}s=c}return e}function y(t,e,s){return[t*Math.cos(s)-e*Math.sin(s),t*Math.sin(s)+e*Math.cos(s)]}function m(t,e,s,n,o,a,r,h,i,c){const l=(u=r,Math.PI*u/180);var u;let p=[],f=0,d=0,g=0,M=0;if(c)[f,d,g,M]=c;else{[t,e]=y(t,e,-l),[s,n]=y(s,n,-l);const r=(t-s)/2,c=(e-n)/2;let u=r*r/(o*o)+c*c/(a*a);u>1&&(u=Math.sqrt(u),o*=u,a*=u);const p=o*o,k=a*a,b=p*k-p*c*c-k*r*r,m=p*c*c+k*r*r,x=(h===i?-1:1)*Math.sqrt(Math.abs(b/m));g=x*o*c/a+(t+s)/2,M=x*-a*r/o+(e+n)/2,f=Math.asin(parseFloat(((e-M)/a).toFixed(9))),d=Math.asin(parseFloat(((n-M)/a).toFixed(9))),t<g&&(f=Math.PI-f),s<g&&(d=Math.PI-d),f<0&&(f=2*Math.PI+f),d<0&&(d=2*Math.PI+d),i&&f>d&&(f-=2*Math.PI),!i&&d>f&&(d-=2*Math.PI)}let k=d-f;if(Math.abs(k)>120*Math.PI/180){const t=d,e=s,h=n;d=i&&d>f?f+120*Math.PI/180*1:f+120*Math.PI/180*-1,p=m(s=g+o*Math.cos(d),n=M+a*Math.sin(d),e,h,o,a,r,0,i,[d,t,g,M])}k=d-f;const b=Math.cos(f),x=Math.sin(f),w=Math.cos(d),v=Math.sin(d),P=Math.tan(k/4),O=4/3*o*P,S=4/3*a*P,L=[t,e],T=[t+O*x,e-S*b],_=[s+O*v,n-S*w],D=[s,n];if(T[0]=2*L[0]-T[0],T[1]=2*L[1]-T[1],c)return[T,_,D].concat(p);{p=[T,_,D].concat(p);const t=[];for(let e=0;e<p.length;e+=3){const s=y(p[e][0],p[e][1],l),n=y(p[e+1][0],p[e+1][1],l),o=y(p[e+2][0],p[e+2][1],l);t.push([s[0],s[1],n[0],n[1],o[0],o[1]])}return t}}const x={randOffset:function(t,e){return A(t,e)},randOffsetWithRange:function(t,e,s){return D(t,e,s)},ellipse:function(t,e,s,n,o){return O(t,e,o,P(s,n,o)).opset},doubleLineOps:function(t,e,s,n,o){return C(t,e,s,n,o,!0)}};function w(t,e,s,n,o){return{type:"path",ops:C(t,e,s,n,o)}}function v(t,e,s){const n=(t||[]).length;if(n>2){const o=[];for(let e=0;e<n-1;e++)o.push(...C(t[e][0],t[e][1],t[e+1][0],t[e+1][1],s));return e&&o.push(...C(t[n-1][0],t[n-1][1],t[0][0],t[0][1],s)),{type:"path",ops:o}}return 2===n?w(t[0][0],t[0][1],t[1][0],t[1][1],s):{type:"path",ops:[]}}function P(t,e,s){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(t/2,2)+Math.pow(e/2,2))/2)),o=Math.max(s.curveStepCount,s.curveStepCount/Math.sqrt(200)*n),a=2*Math.PI/o;let r=Math.abs(t/2),h=Math.abs(e/2);const i=1-s.curveFitting;return r+=A(r*i,s),h+=A(h*i,s),{increment:a,rx:r,ry:h}}function O(t,e,s,n){const[o,a]=W(n.increment,t,e,n.rx,n.ry,1,n.increment*D(.1,D(.4,1,s),s),s);let r=z(o,null,s);if(!s.disableMultiStroke&&0!==s.roughness){const[o]=W(n.increment,t,e,n.rx,n.ry,1.5,0,s),a=z(o,null,s);r=r.concat(a)}return{estimatedPoints:a,opset:{type:"path",ops:r}}}function S(t,e,s,n,o,a,r,h,i){const c=t,l=e;let u=Math.abs(s/2),p=Math.abs(n/2);u+=A(.01*u,i),p+=A(.01*p,i);let f=o,d=a;for(;f<0;)f+=2*Math.PI,d+=2*Math.PI;d-f>2*Math.PI&&(f=0,d=2*Math.PI);const g=2*Math.PI/i.curveStepCount,M=Math.min(g/2,(d-f)/2),k=E(M,c,l,u,p,f,d,1,i);if(!i.disableMultiStroke){const t=E(M,c,l,u,p,f,d,1.5,i);k.push(...t)}return r&&(h?k.push(...C(c,l,c+u*Math.cos(f),l+p*Math.sin(f),i),...C(c,l,c+u*Math.cos(d),l+p*Math.sin(d),i)):k.push({op:"lineTo",data:[c,l]},{op:"lineTo",data:[c+u*Math.cos(f),l+p*Math.sin(f)]})),{type:"path",ops:k}}function L(t,e){const s=[];for(const n of t)if(n.length){const t=e.maxRandomnessOffset||0,o=n.length;if(o>2){s.push({op:"move",data:[n[0][0]+A(t,e),n[0][1]+A(t,e)]});for(let a=1;a<o;a++)s.push({op:"lineTo",data:[n[a][0]+A(t,e),n[a][1]+A(t,e)]})}}return{type:"fillPath",ops:s}}function T(t,e){return function(t,e){let s=t.fillStyle||"hachure";if(!p[s])switch(s){case"zigzag":p[s]||(p[s]=new h(e));break;case"cross-hatch":p[s]||(p[s]=new i(e));break;case"dots":p[s]||(p[s]=new c(e));break;case"dashed":p[s]||(p[s]=new l(e));break;case"zigzag-line":p[s]||(p[s]=new u(e));break;default:s="hachure",p[s]||(p[s]=new r(e))}return p[s]}(e,x).fillPolygons(t,e)}function _(t){return t.randomizer||(t.randomizer=new f(t.seed||0)),t.randomizer.next()}function D(t,e,s,n=1){return s.roughness*n*(_(s)*(e-t)+t)}function A(t,e,s=1){return D(-t,t,e,s)}function C(t,e,s,n,o,a=!1){const r=a?o.disableMultiStrokeFill:o.disableMultiStroke,h=I(t,e,s,n,o,!0,!1);if(r)return h;const i=I(t,e,s,n,o,!0,!0);return h.concat(i)}function I(t,e,s,n,o,a,r){const h=Math.pow(t-s,2)+Math.pow(e-n,2),i=Math.sqrt(h);let c=1;c=i<200?1:i>500?.4:-.0016668*i+1.233334;let l=o.maxRandomnessOffset||0;l*l*100>h&&(l=i/10);const u=l/2,p=.2+.2*_(o);let f=o.bowing*o.maxRandomnessOffset*(n-e)/200,d=o.bowing*o.maxRandomnessOffset*(t-s)/200;f=A(f,o,c),d=A(d,o,c);const g=[],M=()=>A(u,o,c),k=()=>A(l,o,c),b=o.preserveVertices;return a&&(r?g.push({op:"move",data:[t+(b?0:M()),e+(b?0:M())]}):g.push({op:"move",data:[t+(b?0:A(l,o,c)),e+(b?0:A(l,o,c))]})),r?g.push({op:"bcurveTo",data:[f+t+(s-t)*p+M(),d+e+(n-e)*p+M(),f+t+2*(s-t)*p+M(),d+e+2*(n-e)*p+M(),s+(b?0:M()),n+(b?0:M())]}):g.push({op:"bcurveTo",data:[f+t+(s-t)*p+k(),d+e+(n-e)*p+k(),f+t+2*(s-t)*p+k(),d+e+2*(n-e)*p+k(),s+(b?0:k()),n+(b?0:k())]}),g}function R(t,e,s){const n=[];n.push([t[0][0]+A(e,s),t[0][1]+A(e,s)]),n.push([t[0][0]+A(e,s),t[0][1]+A(e,s)]);for(let o=1;o<t.length;o++)n.push([t[o][0]+A(e,s),t[o][1]+A(e,s)]),o===t.length-1&&n.push([t[o][0]+A(e,s),t[o][1]+A(e,s)]);return z(n,null,s)}function z(t,e,s){const n=t.length,o=[];if(n>3){const a=[],r=1-s.curveTightness;o.push({op:"move",data:[t[1][0],t[1][1]]});for(let e=1;e+2<n;e++){const s=t[e];a[0]=[s[0],s[1]],a[1]=[s[0]+(r*t[e+1][0]-r*t[e-1][0])/6,s[1]+(r*t[e+1][1]-r*t[e-1][1])/6],a[2]=[t[e+1][0]+(r*t[e][0]-r*t[e+2][0])/6,t[e+1][1]+(r*t[e][1]-r*t[e+2][1])/6],a[3]=[t[e+1][0],t[e+1][1]],o.push({op:"bcurveTo",data:[a[1][0],a[1][1],a[2][0],a[2][1],a[3][0],a[3][1]]})}if(e&&2===e.length){const t=s.maxRandomnessOffset;o.push({op:"lineTo",data:[e[0]+A(t,s),e[1]+A(t,s)]})}}else 3===n?(o.push({op:"move",data:[t[1][0],t[1][1]]}),o.push({op:"bcurveTo",data:[t[1][0],t[1][1],t[2][0],t[2][1],t[2][0],t[2][1]]})):2===n&&o.push(...C(t[0][0],t[0][1],t[1][0],t[1][1],s));return o}function W(t,e,s,n,o,a,r,h){const i=[],c=[],l=A(.5,h)-Math.PI/2,u=0===h.roughness;u||c.push([A(a,h)+e+.9*n*Math.cos(l-t),A(a,h)+s+.9*o*Math.sin(l-t)]);const p=2*Math.PI+(u?0:l-.01);for(let r=l;r<p;r+=t){const t=[A(a,h)+e+n*Math.cos(r),A(a,h)+s+o*Math.sin(r)];i.push(t),c.push(t)}return u||(c.push([A(a,h)+e+n*Math.cos(l+2*Math.PI+.5*r),A(a,h)+s+o*Math.sin(l+2*Math.PI+.5*r)]),c.push([A(a,h)+e+.98*n*Math.cos(l+r),A(a,h)+s+.98*o*Math.sin(l+r)]),c.push([A(a,h)+e+.9*n*Math.cos(l+.5*r),A(a,h)+s+.9*o*Math.sin(l+.5*r)])),[c,i]}function E(t,e,s,n,o,a,r,h,i){const c=a+A(.1,i),l=[];l.push([A(h,i)+e+.9*n*Math.cos(c-t),A(h,i)+s+.9*o*Math.sin(c-t)]);for(let a=c;a<=r;a+=t)l.push([A(h,i)+e+n*Math.cos(a),A(h,i)+s+o*Math.sin(a)]);return l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),l.push([e+n*Math.cos(r),s+o*Math.sin(r)]),z(l,null,i)}function j(t,e,s,n,o,a,r,h){const i=[],c=[h.maxRandomnessOffset||1,(h.maxRandomnessOffset||1)+.3];let l=[0,0];const u=h.disableMultiStroke?1:2,p=h.preserveVertices;for(let f=0;f<u;f++)0===f?i.push({op:"move",data:[r[0],r[1]]}):i.push({op:"move",data:[r[0]+(p?0:A(c[0],h)),r[1]+(p?0:A(c[0],h))]}),l=p?[o,a]:[o+A(c[f],h),a+A(c[f],h)],i.push({op:"bcurveTo",data:[t+A(c[f],h),e+A(c[f],h),s+A(c[f],h),n+A(c[f],h),l[0],l[1]]});return i}function $(t){return[...t]}function q(t,e){return Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2)}function G(t,e,s){const n=q(e,s);if(0===n)return q(t,e);let o=((t[0]-e[0])*(s[0]-e[0])+(t[1]-e[1])*(s[1]-e[1]))/n;return o=Math.max(0,Math.min(1,o)),q(t,F(e,s,o))}function F(t,e,s){return[t[0]+(e[0]-t[0])*s,t[1]+(e[1]-t[1])*s]}function V(t,e,s,n){const o=n||[];if(function(t,e){const s=t[e+0],n=t[e+1],o=t[e+2],a=t[e+3];let r=3*n[0]-2*s[0]-a[0];r*=r;let h=3*n[1]-2*s[1]-a[1];h*=h;let i=3*o[0]-2*a[0]-s[0];i*=i;let c=3*o[1]-2*a[1]-s[1];return c*=c,r<i&&(r=i),h<c&&(h=c),r+h}(t,e)<s){const s=t[e+0];o.length?(a=o[o.length-1],r=s,Math.sqrt(q(a,r))>1&&o.push(s)):o.push(s),o.push(t[e+3])}else{const n=.5,a=t[e+0],r=t[e+1],h=t[e+2],i=t[e+3],c=F(a,r,n),l=F(r,h,n),u=F(h,i,n),p=F(c,l,n),f=F(l,u,n),d=F(p,f,n);V([a,c,p,d],0,s,o),V([d,f,u,i],0,s,o)}var a,r;return o}function Z(t,e){return Q(t,0,t.length,e)}function Q(t,e,s,n,o){const a=o||[],r=t[e],h=t[s-1];let i=0,c=1;for(let n=e+1;n<s-1;++n){const e=G(t[n],r,h);e>i&&(i=e,c=n)}return Math.sqrt(i)>n?(Q(t,e,c+1,n,a),Q(t,c,s,n,a)):(a.length||a.push(r),a.push(h)),a}function H(t,e=.15,s){const n=[],o=(t.length-1)/3;for(let s=0;s<o;s++)V(t,3*s,e,n);return s&&s>0?Q(n,0,n.length,s):n}const B="none";class N{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,s){return{shape:t,sets:e||[],options:s||this.defaultOptions}}line(t,e,s,n,o){const a=this._o(o);return this._d("line",[w(t,e,s,n,a)],a)}rectangle(t,e,s,n,o){const a=this._o(o),r=[],h=function(t,e,s,n,o){return function(t,e){return v(t,!0,e)}([[t,e],[t+s,e],[t+s,e+n],[t,e+n]],o)}(t,e,s,n,a);if(a.fill){const o=[[t,e],[t+s,e],[t+s,e+n],[t,e+n]];"solid"===a.fillStyle?r.push(L([o],a)):r.push(T([o],a))}return a.stroke!==B&&r.push(h),this._d("rectangle",r,a)}ellipse(t,e,s,n,o){const a=this._o(o),r=[],h=P(s,n,a),i=O(t,e,a,h);if(a.fill)if("solid"===a.fillStyle){const s=O(t,e,a,h).opset;s.type="fillPath",r.push(s)}else r.push(T([i.estimatedPoints],a));return a.stroke!==B&&r.push(i.opset),this._d("ellipse",r,a)}circle(t,e,s,n){const o=this.ellipse(t,e,s,s,n);return o.shape="circle",o}linearPath(t,e){const s=this._o(e);return this._d("linearPath",[v(t,!1,s)],s)}arc(t,e,s,n,o,a,r=!1,h){const i=this._o(h),c=[],l=S(t,e,s,n,o,a,r,!0,i);if(r&&i.fill)if("solid"===i.fillStyle){const r=Object.assign({},i);r.disableMultiStroke=!0;const h=S(t,e,s,n,o,a,!0,!1,r);h.type="fillPath",c.push(h)}else c.push(function(t,e,s,n,o,a,r){const h=t,i=e;let c=Math.abs(s/2),l=Math.abs(n/2);c+=A(.01*c,r),l+=A(.01*l,r);let u=o,p=a;for(;u<0;)u+=2*Math.PI,p+=2*Math.PI;p-u>2*Math.PI&&(u=0,p=2*Math.PI);const f=(p-u)/r.curveStepCount,d=[];for(let t=u;t<=p;t+=f)d.push([h+c*Math.cos(t),i+l*Math.sin(t)]);return d.push([h+c*Math.cos(p),i+l*Math.sin(p)]),d.push([h,i]),T([d],r)}(t,e,s,n,o,a,i));return i.stroke!==B&&c.push(l),this._d("arc",c,i)}curve(t,e){const s=this._o(e),n=[],o=function(t,e){let s=R(t,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){const n=R(t,1.5*(1+.22*e.roughness),function(t){const e=Object.assign({},t);return e.randomizer=void 0,t.seed&&(e.seed=t.seed+1),e}(e));s=s.concat(n)}return{type:"path",ops:s}}(t,s);if(s.fill&&s.fill!==B&&t.length>=3){const e=function(t,e=0){const s=t.length;if(s<3)throw new Error("A curve must have at least three points.");const n=[];if(3===s)n.push($(t[0]),$(t[1]),$(t[2]),$(t[2]));else{const s=[];s.push(t[0],t[0]);for(let e=1;e<t.length;e++)s.push(t[e]),e===t.length-1&&s.push(t[e]);const o=[],a=1-e;n.push($(s[0]));for(let t=1;t+2<s.length;t++){const e=s[t];o[0]=[e[0],e[1]],o[1]=[e[0]+(a*s[t+1][0]-a*s[t-1][0])/6,e[1]+(a*s[t+1][1]-a*s[t-1][1])/6],o[2]=[s[t+1][0]+(a*s[t][0]-a*s[t+2][0])/6,s[t+1][1]+(a*s[t][1]-a*s[t+2][1])/6],o[3]=[s[t+1][0],s[t+1][1]],n.push(o[1],o[2],o[3])}}return n}(t),o=H(e,10,(1+s.roughness)/2);"solid"===s.fillStyle?n.push(L([o],s)):n.push(T([o],s))}return s.stroke!==B&&n.push(o),this._d("curve",n,s)}polygon(t,e){const s=this._o(e),n=[],o=v(t,!0,s);return s.fill&&("solid"===s.fillStyle?n.push(L([t],s)):n.push(T([t],s))),s.stroke!==B&&n.push(o),this._d("polygon",n,s)}path(t,e){const s=this._o(e),n=[];if(!t)return this._d("path",n,s);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const o=s.fill&&"transparent"!==s.fill&&s.fill!==B,a=s.stroke!==B,r=!!(s.simplification&&s.simplification<1),h=function(t,e,s){const n=b(k(M(t))),o=[];let a=[],r=[0,0],h=[];const i=()=>{h.length>=4&&a.push(...H(h,1)),h=[]},c=()=>{i(),a.length&&(o.push(a),a=[])};for(const{key:t,data:e}of n)switch(t){case"M":c(),r=[e[0],e[1]],a.push(r);break;case"L":i(),a.push([e[0],e[1]]);break;case"C":if(!h.length){const t=a.length?a[a.length-1]:r;h.push([t[0],t[1]])}h.push([e[0],e[1]]),h.push([e[2],e[3]]),h.push([e[4],e[5]]);break;case"Z":i(),a.push([r[0],r[1]])}if(c(),!s)return o;const l=[];for(const t of o){const e=Z(t,s);e.length&&l.push(e)}return l}(t,0,r?4-4*s.simplification:(1+s.roughness)/2);return o&&("solid"===s.fillStyle?n.push(L(h,s)):n.push(T(h,s))),a&&(r?h.forEach((t=>{n.push(v(t,!1,s))})):n.push(function(t,e){const s=b(k(M(t))),n=[];let o=[0,0],a=[0,0];for(const{key:t,data:r}of s)switch(t){case"M":{const t=1*(e.maxRandomnessOffset||0),s=e.preserveVertices;n.push({op:"move",data:r.map((n=>n+(s?0:A(t,e))))}),a=[r[0],r[1]],o=[r[0],r[1]];break}case"L":n.push(...C(a[0],a[1],r[0],r[1],e)),a=[r[0],r[1]];break;case"C":{const[t,s,o,h,i,c]=r;n.push(...j(t,s,o,h,i,c,a,e)),a=[i,c];break}case"Z":n.push(...C(a[0],a[1],o[0],o[1],e)),a=[o[0],o[1]]}return{type:"path",ops:n}}(t,s))),this._d("path",n,s)}opsToPath(t,e){let s="";for(const n of t.ops){const t="number"==typeof e&&e>=0?n.data.map((t=>+t.toFixed(e))):n.data;switch(n.op){case"move":s+=`M${t[0]} ${t[1]} `;break;case"bcurveTo":s+=`C${t[0]} ${t[1]}, ${t[2]} ${t[3]}, ${t[4]} ${t[5]} `;break;case"lineTo":s+=`L${t[0]} ${t[1]} `}}return s.trim()}toPaths(t){const e=t.sets||[],s=t.options||this.defaultOptions,n=[];for(const t of e){let e=null;switch(t.type){case"path":e={d:this.opsToPath(t),stroke:s.stroke,strokeWidth:s.strokeWidth,fill:B};break;case"fillPath":e={d:this.opsToPath(t),stroke:B,strokeWidth:0,fill:s.fill||B};break;case"fillSketch":e=this.fillSketch(t,s)}e&&n.push(e)}return n}fillSketch(t,e){let s=e.fillWeight;return s<0&&(s=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||B,strokeWidth:s,fill:B}}}class J{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new N(e)}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.ctx,o=t.options.fixedDecimalPlaceDigits;for(const a of e)switch(a.type){case"path":n.save(),n.strokeStyle="none"===s.stroke?"transparent":s.stroke,n.lineWidth=s.strokeWidth,s.strokeLineDash&&n.setLineDash(s.strokeLineDash),s.strokeLineDashOffset&&(n.lineDashOffset=s.strokeLineDashOffset),this._drawToContext(n,a,o),n.restore();break;case"fillPath":{n.save(),n.fillStyle=s.fill||"";const e="curve"===t.shape||"polygon"===t.shape||"path"===t.shape?"evenodd":"nonzero";this._drawToContext(n,a,o,e),n.restore();break}case"fillSketch":this.fillSketch(n,a,s)}}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2),t.save(),s.fillLineDash&&t.setLineDash(s.fillLineDash),s.fillLineDashOffset&&(t.lineDashOffset=s.fillLineDashOffset),t.strokeStyle=s.fill||"",t.lineWidth=n,this._drawToContext(t,e,s.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,e,s,n="nonzero"){t.beginPath();for(const n of e.ops){const e="number"==typeof s&&s>=0?n.data.map((t=>+t.toFixed(s))):n.data;switch(n.op){case"move":t.moveTo(e[0],e[1]);break;case"bcurveTo":t.bezierCurveTo(e[0],e[1],e[2],e[3],e[4],e[5]);break;case"lineTo":t.lineTo(e[0],e[1])}}"fillPath"===e.type?t.fill(n):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a),a}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a),a}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a),a}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o),o}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s),s}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s),s}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i),i}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s),s}path(t,e){const s=this.gen.path(t,e);return this.draw(s),s}}const K="http://www.w3.org/2000/svg";class U{constructor(t,e){this.svg=t,this.gen=new N(e)}draw(t){const e=t.sets||[],s=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,o=n.createElementNS(K,"g"),a=t.options.fixedDecimalPlaceDigits;for(const r of e){let e=null;switch(r.type){case"path":e=n.createElementNS(K,"path"),e.setAttribute("d",this.opsToPath(r,a)),e.setAttribute("stroke",s.stroke),e.setAttribute("stroke-width",s.strokeWidth+""),e.setAttribute("fill","none"),s.strokeLineDash&&e.setAttribute("stroke-dasharray",s.strokeLineDash.join(" ").trim()),s.strokeLineDashOffset&&e.setAttribute("stroke-dashoffset",`${s.strokeLineDashOffset}`);break;case"fillPath":e=n.createElementNS(K,"path"),e.setAttribute("d",this.opsToPath(r,a)),e.setAttribute("stroke","none"),e.setAttribute("stroke-width","0"),e.setAttribute("fill",s.fill||""),"curve"!==t.shape&&"polygon"!==t.shape||e.setAttribute("fill-rule","evenodd");break;case"fillSketch":e=this.fillSketch(n,r,s)}e&&o.appendChild(e)}return o}fillSketch(t,e,s){let n=s.fillWeight;n<0&&(n=s.strokeWidth/2);const o=t.createElementNS(K,"path");return o.setAttribute("d",this.opsToPath(e,s.fixedDecimalPlaceDigits)),o.setAttribute("stroke",s.fill||""),o.setAttribute("stroke-width",n+""),o.setAttribute("fill","none"),s.fillLineDash&&o.setAttribute("stroke-dasharray",s.fillLineDash.join(" ").trim()),s.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",`${s.fillLineDashOffset}`),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,s,n,o){const a=this.gen.line(t,e,s,n,o);return this.draw(a)}rectangle(t,e,s,n,o){const a=this.gen.rectangle(t,e,s,n,o);return this.draw(a)}ellipse(t,e,s,n,o){const a=this.gen.ellipse(t,e,s,n,o);return this.draw(a)}circle(t,e,s,n){const o=this.gen.circle(t,e,s,n);return this.draw(o)}linearPath(t,e){const s=this.gen.linearPath(t,e);return this.draw(s)}polygon(t,e){const s=this.gen.polygon(t,e);return this.draw(s)}arc(t,e,s,n,o,a,r=!1,h){const i=this.gen.arc(t,e,s,n,o,a,r,h);return this.draw(i)}curve(t,e){const s=this.gen.curve(t,e);return this.draw(s)}path(t,e){const s=this.gen.path(t,e);return this.draw(s)}}const X={canvas:(t,e)=>new J(t,e),svg:(t,e)=>new U(t,e),generator:t=>new N(t),newSeed:()=>N.newSeed()}},607:function(t,e,s){var n=this&&this.__createBinding||(Object.create?function(t,e,s,n){void 0===n&&(n=s),Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[s]}})}:function(t,e,s,n){void 0===n&&(n=s),t[n]=e[s]});e.__esModule=!0,e.RoughRect=void 0,n(e,s(678),"RoughRect")},678:(t,e,s)=>{e.__esModule=!0,e.RoughRect=void 0;var n=s(25),o=s(757);e.RoughRect=n.fabric.util.createClass(n.fabric.Rect,{type:"roughRect",instance:null,roughOptions:null,initialize:function(t){this.roughOptions=t.roughOption,this.callSuper("initialize",t)},_render:function(t){var e=o.default.canvas(t.canvas);this.instance?e.draw(this.instance):this.instance=e.rectangle(-this.width/2,-this.height/2,this.width,this.height,this.roughOptions)}}),e.default=e.RoughRect},25:e=>{e.exports=t}},s={};function n(t){var o=s[t];if(void 0!==o)return o.exports;var a=s[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}return n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(607)})()}));