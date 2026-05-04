"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2279],{88838:function(t,e,i){i.d(e,{a:function(){return h},b:function(){return u}});var o=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,a=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty,h=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),d=(t,e,i,o)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let a of s(e))l.call(t,a)||a===i||n(t,a,{get:()=>e[a],enumerable:!(o=r(e,a))||o.enumerable});return t},u=(t,e,i)=>(i=null!=t?o(a(t)):{},d(!e&&t&&t.__esModule?i:n(i,"default",{value:t,enumerable:!0}),t))},57893:function(t,e,i){let o,n,r,s,a,l,h;i.d(e,{a:function(){return en},b:function(){return er},c:function(){return es},d:function(){return el},e:function(){return eP},f:function(){return eI},g:function(){return eM},h:function(){return eE},i:function(){return eT},j:function(){return eN}});var d=i(1600).lW,u={},p=function(t,e,i,o,n){var r=new Worker(u[e]||(u[e]=URL.createObjectURL(new Blob([t+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(t){var e=t.data,i=e.$e$;if(i){var o=Error(i[0]);o.code=i[1],o.stack=i[2],n(o,null)}else n(null,e)},r.postMessage(i,o),r},c=Uint8Array,f=Uint16Array,v=Int32Array,m=new c([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),_=new c([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),y=new c([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),g=function(t,e){for(var i=new f(31),o=0;o<31;++o)i[o]=e+=1<<t[o-1];for(var n=new v(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},b=g(m,2),w=b.b,C=b.r;w[28]=258,C[258]=28;var L=g(_,0).b,S=new f(32768);for(k=0;k<32768;++k)A=(61680&(A=(52428&(A=(43690&k)>>1|(21845&k)<<1))>>2|(13107&A)<<2))>>4|(3855&A)<<4,S[k]=((65280&A)>>8|(255&A)<<8)>>1;var A,k,x=function(t,e,i){for(var o,n=t.length,r=0,s=new f(e);r<n;++r)t[r]&&++s[t[r]-1];var a=new f(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;if(i){o=new f(1<<e);var l=15-e;for(r=0;r<n;++r)if(t[r])for(var h=r<<4|t[r],d=e-t[r],u=a[t[r]-1]++<<d,p=u|(1<<d)-1;u<=p;++u)o[S[u]>>l]=h}else for(o=new f(n),r=0;r<n;++r)t[r]&&(o[r]=S[a[t[r]-1]++]>>15-t[r]);return o},$=new c(288);for(k=0;k<144;++k)$[k]=8;for(k=144;k<256;++k)$[k]=9;for(k=256;k<280;++k)$[k]=7;for(k=280;k<288;++k)$[k]=8;var k,O=new c(32);for(k=0;k<32;++k)O[k]=5;var k,P=x($,9,1),I=x(O,5,1),M=function(t){for(var e=t[0],i=1;i<t.length;++i)t[i]>e&&(e=t[i]);return e},E=function(t,e,i){var o=e/8|0;return(t[o]|t[o+1]<<8)>>(7&e)&i},T=function(t,e){var i=e/8|0;return(t[i]|t[i+1]<<8|t[i+2]<<16)>>(7&e)},N=function(t){return(t+7)/8|0},j=function(t,e,i){return(null==e||e<0)&&(e=0),(null==i||i>t.length)&&(i=t.length),new c(t.subarray(e,i))},U=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],z=function(t,e,i){var o=Error(e||U[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,z),!i)throw o;return o},D=function(t,e,i,o){var n=t.length,r=o?o.length:0;if(!n||e.f&&!e.l)return i||new c(0);var s=!i,a=s||2!=e.i,l=e.i;s&&(i=new c(3*n));var h=function(t){var e=i.length;if(t>e){var o=new c(Math.max(2*e,t));o.set(i),i=o}},d=e.f||0,u=e.p||0,p=e.b||0,f=e.l,v=e.d,g=e.m,b=e.n,C=8*n;do{if(!f){d=E(t,u,1);var S=E(t,u+1,3);if(u+=3,S){if(1==S)f=P,v=I,g=9,b=5;else if(2==S){var A=E(t,u,31)+257,k=E(t,u+10,15)+4,$=A+E(t,u+5,31)+1;u+=14;for(var O=new c($),U=new c(19),D=0;D<k;++D)U[y[D]]=E(t,u+3*D,7);u+=3*k;for(var F=M(U),V=(1<<F)-1,B=x(U,F,1),D=0;D<$;){var H=B[E(t,u,V)];u+=15&H;var q=H>>4;if(q<16)O[D++]=q;else{var R=0,Z=0;for(16==q?(Z=3+E(t,u,3),u+=2,R=O[D-1]):17==q?(Z=3+E(t,u,7),u+=3):18==q&&(Z=11+E(t,u,127),u+=7);Z--;)O[D++]=R}}var J=O.subarray(0,A),W=O.subarray(A);g=M(J),b=M(W),f=x(J,g,1),v=x(W,b,1)}else z(1)}else{var q=N(u)+4,K=t[q-4]|t[q-3]<<8,G=q+K;if(G>n){l&&z(0);break}a&&h(p+K),i.set(t.subarray(q,G),p),e.b=p+=K,e.p=u=8*G,e.f=d;continue}if(u>C){l&&z(0);break}}a&&h(p+131072);for(var X=(1<<g)-1,Q=(1<<b)-1,Y=u;;Y=u){var R=f[T(t,u)&X],tt=R>>4;if((u+=15&R)>C){l&&z(0);break}if(R||z(2),tt<256)i[p++]=tt;else if(256==tt){Y=u,f=null;break}else{var te=tt-254;if(tt>264){var D=tt-257,ti=m[D];te=E(t,u,(1<<ti)-1)+w[D],u+=ti}var to=v[T(t,u)&Q],tn=to>>4;to||z(3),u+=15&to;var W=L[tn];if(tn>3){var ti=_[tn];W+=T(t,u)&(1<<ti)-1,u+=ti}if(u>C){l&&z(0);break}a&&h(p+131072);var tr=p+te;if(p<W){var ts=r-W,ta=Math.min(W,tr);for(ts+p<0&&z(3);p<ta;++p)i[p]=o[ts+p]}for(;p<tr;++p)i[p]=i[p-W]}}e.l=f,e.p=Y,e.b=p,e.f=d,f&&(d=1,e.m=g,e.d=v,e.n=b)}while(!d);return p!=i.length&&s?j(i,0,p):i.subarray(0,p)},F=new c(0),V=function(t,e){var i={};for(var o in t)i[o]=t[o];for(var o in e)i[o]=e[o];return i},B=function(t,e,i){for(var o=t(),n=t.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<o.length;++s){var a=o[s],l=r[s];if("function"==typeof a){e+=";"+l+"=";var h=a.toString();if(a.prototype){if(-1!=h.indexOf("[native code]")){var d=h.indexOf(" ",8)+1;e+=h.slice(d,h.indexOf("(",d))}else for(var u in e+=h,a.prototype)e+=";"+l+".prototype."+u+"="+a.prototype[u].toString()}else e+=h}else i[l]=a}return e},H=[],q=function(t){var e=[];for(var i in t)t[i].buffer&&e.push((t[i]=new t[i].constructor(t[i])).buffer);return e},R=function(t,e,i,o){if(!H[i]){for(var n="",r={},s=t.length-1,a=0;a<s;++a)n=B(t[a],n,r);H[i]={c:B(t[s],n,r),e:r}}var l=V({},H[i].e);return p(H[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",i,l,q(l),o)},Z=function(){return[c,f,v,m,_,y,w,L,P,I,S,U,x,M,E,T,N,j,z,D,Y,J,W]},J=function(t){return postMessage(t,[t.buffer])},W=function(t){return t&&{out:t.size&&new c(t.size),dictionary:t.dictionary}},K=function(t,e,i,o,n,r){var s=R(i,o,n,function(t,e){s.terminate(),r(t,e)});return s.postMessage([t,e],e.consume?[t.buffer]:[]),function(){s.terminate()}},G=function(t,e){return t[e]|t[e+1]<<8},X=function(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0},Q=function(t,e){return X(t,e)+4294967296*X(t,e+4)};function Y(t,e){return D(t,{i:2},e&&e.out,e&&e.dictionary)}var tt="u">typeof TextDecoder&&new TextDecoder;try{tt.decode(F,{stream:!0})}catch{}var te=function(t){for(var e="",i=0;;){var o=t[i++],n=(o>127)+(o>223)+(o>239);if(i+n>t.length)return{s:e,r:j(t,i-1)};n?3==n?e+=String.fromCharCode(55296|(o=((15&o)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536)>>10,56320|1023&o):1&n?e+=String.fromCharCode((31&o)<<6|63&t[i++]):e+=String.fromCharCode((15&o)<<12|(63&t[i++])<<6|63&t[i++]):e+=String.fromCharCode(o)}};function ti(t,e){if(e){for(var i="",o=0;o<t.length;o+=16384)i+=String.fromCharCode.apply(null,t.subarray(o,o+16384));return i}if(tt)return tt.decode(t);var n=te(t),r=n.s,i=n.r;return i.length&&z(8),r}var to=function(t,e,i){var o=G(t,e+28),n=ti(t.subarray(e+46,e+46+o),!(2048&G(t,e+8))),r=e+46+o,s=X(t,e+20),a=i&&4294967295==s?tn(t,r):[s,X(t,e+24),X(t,e+42)],l=a[0],h=a[1],d=a[2];return[G(t,e+10),l,h,n,r+G(t,e+30)+G(t,e+32),d]},tn=function(t,e){for(;1!=G(t,e);e+=4+G(t,e+2));return[Q(t,e+12),Q(t,e+4),Q(t,e+20)]},tr="function"==typeof queueMicrotask?queueMicrotask:"function"==typeof setTimeout?setTimeout:function(t){t()},ts=class extends Error{issues;constructor(t){super(t[0].message),this.name="ValiError",this.issues=t}};function ta(t,e,i,o){if(!e||!e.length)return{output:t};let n,r,s=t;for(let t of e){let e=t(s);if(e.issue){var a,l;let t=(a=n=n||{reason:o,origin:null==i?void 0:i.origin,abortEarly:null==i?void 0:i.abortEarly,abortPipeEarly:null==i?void 0:i.abortPipeEarly},l=e.issue,{reason:null==a?void 0:a.reason,validation:l.validation,origin:(null==a?void 0:a.origin)||"value",message:l.message,input:l.input,abortEarly:null==a?void 0:a.abortEarly,abortPipeEarly:null==a?void 0:a.abortPipeEarly});if(r?r.push(t):r=[t],n.abortEarly||n.abortPipeEarly)break}else s=e.output}return r?{issues:r}:{output:s}}function tl(t,e){return t&&"string"!=typeof t?[void 0,t]:[t,e]}function th(t,e,i,o,n,r){return{issues:[{reason:e,validation:i,origin:(null==t?void 0:t.origin)||"value",message:o,input:n,issues:r,abortEarly:null==t?void 0:t.abortEarly,abortPipeEarly:null==t?void 0:t.abortPipeEarly}]}}function td(t,e,i){let[o,n]=tl(e,i);return{schema:"array",array:{item:t},async:!1,_parse(e,i){if(!Array.isArray(e))return th(i,"type","array",o||"Invalid type",e);let r,s=[];for(let o=0;o<e.length;o++){let n=e[o],a=t._parse(n,i);if(a.issues){let t={schema:"array",input:e,key:o,value:n};for(let e of a.issues)e.path?e.path.unshift(t):e.path=[t],null==r||r.push(e);if(r||(r=a.issues),null!=i&&i.abortEarly)break}else s.push(a.output)}return r?{issues:r}:ta(s,n,i,"array")}}}function tu(t,e){let[i,o]=tl(t,e);return{schema:"boolean",async:!1,_parse:(t,e)=>"boolean"!=typeof t?th(e,"type","boolean",i||"Invalid type",t):ta(t,o,e,"boolean")}}function tp(t,e){return{schema:"literal",literal:t,async:!1,_parse:(i,o)=>i!==t?th(o,"type","literal",e||"Invalid type",i):{output:i}}}function tc(t,e){let[i,o]=tl(t,e);return{schema:"number",async:!1,_parse:(t,e)=>"number"!=typeof t?th(e,"type","number",i||"Invalid type",t):ta(t,o,e,"number")}}function tf(t,e,i){let[o,n]=tl(e,i),r;return{schema:"object",object:t,async:!1,_parse(e,i){if(!e||"object"!=typeof e)return th(i,"type","object",o||"Invalid type",e);r=r||Object.entries(t);let s,a={};for(let[t,o]of r){let n=e[t],r=o._parse(n,i);if(r.issues){let o={schema:"object",input:e,key:t,value:n};for(let t of r.issues)t.path?t.path.unshift(o):t.path=[o],null==s||s.push(t);if(s||(s=r.issues),null!=i&&i.abortEarly)break}else a[t]=r.output}return s?{issues:s}:ta(a,n,i,"object")}}}function tv(t){return{schema:"optional",wrapped:t,async:!1,_parse:(e,i)=>void 0===e?{output:e}:t._parse(e,i)}}function tm(t,e){let[i,o]=tl(t,e);return{schema:"string",async:!1,_parse:(t,e)=>"string"!=typeof t?th(e,"type","string",i||"Invalid type",t):ta(t,o,e,"string")}}var t_=["__proto__","prototype","constructor"];function ty(t,e,i,o){let[n,r,s]=function(t,e,i){if("object"==typeof t&&!Array.isArray(t)){let[o,n]=tl(e,i);return[t,o,n]}let[o,n]=tl(t,e);return[void 0,o,n]}(e,i,o);return{schema:"tuple",tuple:{items:t,rest:n},async:!1,_parse(e,i){if(!Array.isArray(e)||!n&&t.length!==e.length||n&&t.length>e.length)return th(i,"type","tuple",r||"Invalid type",e);let o,a=[];for(let n=0;n<t.length;n++){let r=e[n],s=t[n]._parse(r,i);if(s.issues){let t={schema:"tuple",input:e,key:n,value:r};for(let e of s.issues)e.path?e.path.unshift(t):e.path=[t],null==o||o.push(e);if(o||(o=s.issues),null!=i&&i.abortEarly)break}else a[n]=s.output}if(n)for(let r=t.length;r<e.length;r++){let t=e[r],s=n._parse(t,i);if(s.issues){let n={schema:"tuple",input:e,key:r,value:t};for(let t of s.issues)t.path?t.path.unshift(n):t.path=[n],null==o||o.push(t);if(o||(o=s.issues),null!=i&&i.abortEarly)break}else a[r]=s.output}return o?{issues:o}:ta(a,s,i,"tuple")}}}function tg(t,e){return{schema:"union",union:t,async:!1,_parse(i,o){let n,r;for(let e of t){let t=e._parse(i,o);if(t.issues){if(n)for(let e of t.issues)n.push(e);else n=t.issues}else{r=[t.output];break}}return r?{output:r[0]}:th(o,"type","union",e||"Invalid type",i,n)}}}function tb(t,e,i){let[o,n]=tl(e,i);return tf(t.reduce((t,e)=>({...t,...e.object}),{}),o,n)}function tw(t,e){return i=>i>t?{issue:{validation:"max_value",message:e||"Invalid value",input:i}}:{output:i}}function tC(t,e){return i=>i<t?{issue:{validation:"min_value",message:e||"Invalid value",input:i}}:{output:i}}var tL=Object.create,tS=Object.defineProperty,tA=Object.getOwnPropertyDescriptor,tk=Object.getOwnPropertyNames,tx=Object.getPrototypeOf,t$=Object.prototype.hasOwnProperty,tO=(t,e,i)=>e in t?tS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,tP=(t,e)=>function(){return e||(0,t[tk(t)[0]])((e={exports:{}}).exports,e),e.exports},tI=(t,e,i)=>(tO(t,"symbol"!=typeof e?e+"":e,i),i),tM=tP({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.copy=void 0,t.copy=(t,e,i=0,o=0,n=t.width-i,r=t.height-o,s=0,a=0)=>{if(i|=0,o|=0,r|=0,s|=0,a|=0,(n|=0)<=0||r<=0)return;let l=new Uint32Array(t.data.buffer),h=new Uint32Array(e.data.buffer);for(let d=0;d<r;d++){let r=o+d;if(r<0||r>=t.height)continue;let u=a+d;if(!(u<0||u>=e.height))for(let o=0;o<n;o++){let n=i+o;if(n<0||n>=t.width)continue;let a=s+o;if(a<0||a>=e.width)continue;let d=r*t.width+n;h[u*e.width+a]=l[d]}}}}}),tE=tP({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.CreateImageFactory=(t=[0,0,0,0],e=4)=>{if(isNaN(e=Math.floor(e))||e<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<e)throw TypeError(`fill should be iterable with at least ${e} members`);let i=(t=new Uint8ClampedArray(t).slice(0,e)).every(t=>0===t);return(o,n,r)=>{if(void 0===o||void 0===n)throw TypeError("Not enough arguments");if(o=Math.floor(o),n=Math.floor(n),isNaN(o)||o<1||isNaN(n)||n<1)throw TypeError("Index or size is negative or greater than the allowed amount");let s=o*n*e;if(void 0===r&&(r=new Uint8ClampedArray(s)),r instanceof Uint8ClampedArray){if(r.length!==s)throw TypeError("Index or size is negative or greater than the allowed amount");if(!i)for(let i=0;i<n;i++)for(let n=0;n<o;n++){let s=(i*o+n)*e;for(let i=0;i<e;i++)r[s+i]=t[i]}return{get width(){return o},get height(){return n},get data(){return r}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},t.createImage=t.CreateImageFactory()}}),tT=tP({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.filters=void 0;var e=(t,e)=>{if(t<=-e||t>=e||0==t)return 0;let i=t*Math.PI;return Math.sin(i)/i*Math.sin(i/e)/(i/e)},i=t=>Math.round(16383*t);t.filters=(t,o,n,r,s)=>{let a=s?2:3,l=1/n,h=Math.min(1,n),d=a/h,u=new Int16Array((Math.floor((d+1)*2)+2)*o),p=0;for(let n=0;n<o;n++){let s=(n+.5)*l+r,c=Math.max(0,Math.floor(s-d)),f=Math.min(t-1,Math.ceil(s+d)),v=f-c+1,m=new Float32Array(v),_=new Int16Array(v),y=0,g=0;for(let t=c;t<=f;t++){let i=e((t+.5-s)*h,a);y+=i,m[g]=i,g++}let b=0;for(let t=0;t<m.length;t++){let e=m[t]/y;b+=e,_[t]=i(e)}_[o>>1]+=i(1-b);let w=0;for(;w<_.length&&0===_[w];)w++;let C=_.length-1;for(;C>0&&0===_[C];)C--;let L=c+w,S=C-w+1;u[p++]=L,u[p++]=S,u.set(_.subarray(w,C+1),p),p+=S}return u}}}),tN=tP({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.convolve=void 0,t.convolve=(t,e,i,o,n,r)=>{let s=0,a=0;for(let l=0;l<o;l++){let h=0;for(let i=0;i<n;i++){let i=s+4*r[h++]|0,n=0,l=0,d=0,u=0;for(let e=r[h++];e>0;e--){let e=r[h++];n=n+e*t[i]|0,l=l+e*t[i+1]|0,d=d+e*t[i+2]|0,u=u+e*t[i+3]|0,i=i+4|0}e[a]=n+8192>>14,e[a+1]=l+8192>>14,e[a+2]=d+8192>>14,e[a+3]=u+8192>>14,a=a+4*o|0}a=(l+1)*4|0,s=(l+1)*i*4|0}}}}),tj=tP({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(t){Object.defineProperty(t,"__esModule",{value:!0}),t.lanczos2=t.lanczos=void 0;var e=tM(),i=tE(),o=tT(),n=tN(),r=(t,e,i=!1)=>{let r=e.width/t.width,s=e.height/t.height,a=o.filters(t.width,e.width,r,0,i),l=o.filters(t.height,e.height,s,0,i),h=new Uint8ClampedArray(e.width*t.height*4);n.convolve(t.data,h,t.width,t.height,e.width,a),n.convolve(h,e.data,t.height,e.width,e.height,l)};t.lanczos=(t,o,n=0,s=0,a=t.width-n,l=t.height-s,h=0,d=0,u=o.width-h,p=o.height-d)=>{if(n|=0,s|=0,l|=0,h|=0,d|=0,u|=0,p|=0,(a|=0)<=0||l<=0||u<=0||p<=0)return;if(0===n&&0===s&&a===t.width&&l===t.height&&0===h&&0===d&&u===o.width&&p===o.height){r(t,o);return}let c=i.createImage(a,l),f=i.createImage(u,p);e.copy(t,c,n,s),r(c,f),e.copy(f,o,0,0,f.width,f.height,h,d)},t.lanczos2=(t,o,n=0,s=0,a=t.width-n,l=t.height-s,h=0,d=0,u=o.width-h,p=o.height-d)=>{if(n|=0,s|=0,l|=0,h|=0,d|=0,u|=0,p|=0,(a|=0)<=0||l<=0||u<=0||p<=0)return;if(0===n&&0===s&&a===t.width&&l===t.height&&0===h&&0===d&&u===o.width&&p===o.height){r(t,o,!0);return}let c=i.createImage(a,l),f=i.createImage(u,p);e.copy(t,c,n,s),r(c,f,!0),e.copy(f,o,0,0,f.width,f.height,h,d)}}}),tU=((o=tU||{}).Bounce="bounce",o.Normal="normal",o),tz=tf({autoplay:tv(tu()),defaultTheme:tv(tm()),direction:tv(tg([tp(1),tp(-1)])),hover:tv(tu()),id:tm(),intermission:tv(tc()),loop:tv(tg([tu(),tc()])),playMode:tv({schema:"native_enum",nativeEnum:tU,async:!1,_parse:(t,e)=>Object.values(tU).includes(t)?{output:t}:th(e,"type","native_enum","Invalid type",t)}),speed:tv(tc()),themeColor:tv(tm())}),tD=tf({animations:td(tm()),id:tm()}),tF=tf({activeAnimationId:tv(tm()),animations:td(tz),author:tv(tm()),custom:tv(function(t,e,i,o){let[n,r,s,a]=function(t,e,i,o){if("object"==typeof e&&!Array.isArray(e)){let[n,r]=tl(i,o);return[t,e,n,r]}let[n,r]=tl(e,i);return[tm(),t,n,r]}(t,e,void 0,void 0);return{schema:"record",record:{key:n,value:r},async:!1,_parse(t,e){if(!t||"object"!=typeof t)return th(e,"type","record",s||"Invalid type",t);let i,o={};for(let[s,a]of Object.entries(t))if(!t_.includes(s)){let l,h=n._parse(s,{origin:"key",abortEarly:null==e?void 0:e.abortEarly,abortPipeEarly:null==e?void 0:e.abortPipeEarly});if(h.issues){for(let e of(l={schema:"record",input:t,key:s,value:a},h.issues))e.path=[l],null==i||i.push(e);if(i||(i=h.issues),null!=e&&e.abortEarly)break}let d=r._parse(a,e);if(d.issues){for(let e of(l=l||{schema:"record",input:t,key:s,value:a},d.issues))e.path?e.path.unshift(l):e.path=[l],null==i||i.push(e);if(i||(i=d.issues),null!=e&&e.abortEarly)break}h.issues||d.issues||(o[h.output]=d.output)}return i?{issues:i}:ta(o,a,e,"record")}}}(tm(),function(t=[]){return{schema:"any",async:!1,_parse:(e,i)=>ta(e,t,i,"any")}}())),description:tv(tm()),generator:tv(tm()),keywords:tv(tm()),revision:tv(tc()),themes:tv(td(tD)),states:tv(td(tm())),version:tv(tm())}),tV=function(t,e,i,o){let[n,r]=tl(void 0,void 0);return tf(Object.entries(t.object).reduce((t,[i,o])=>e.includes(i)?t:{...t,[i]:o},{}),n,r)}(tz,["id"]),tB=tf({state:tm()}),tH=tb([tB,tf({ms:tc()})]),tq=tb([tB,tf({count:tc()})]),tR=tb([tB,tf({threshold:tv(td(tc([tC(0),tw(1)])))})]),tZ=tf({onAfter:tv(tH),onClick:tv(tB),onComplete:tv(tB),onEnter:tv(tq),onMouseEnter:tv(tB),onMouseLeave:tv(tB),onShow:tv(tR)}),tJ=tb([tV,tf({playOnScroll:tv(ty([tc([tC(0),tw(1)]),tc([tC(0),tw(1)])])),segments:tv(tg([ty([tc(),tc()]),tm()]))})]);tb([tZ,tf({animationId:tv(tm()),playbackSettings:tJ})]);var tW={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},tK={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},tG=t=>{let e=null,i=[];if(!t)return null;let o=t.substring(t.indexOf(",")+1),n=new Uint8Array((e=typeof window>"u"?d.from(o,"base64").toString("binary"):atob(o)).length);for(let t=0;t<e.length;t+=1)n[t]=e.charCodeAt(t);for(let t in i=Array.from(n.subarray(0,8)),tK){let e=tK[t];if(e&&i.every((t,i)=>t===e[i]))return tW[t]}return null},tX=class extends Error{constructor(t,e){super(t),tI(this,"code"),this.name="[dotlottie-js]",this.code=e}};function tQ(t){let e;if(typeof window>"u")e=d.from(t).toString("base64");else{let i=Array.prototype.map.call(t,t=>String.fromCharCode(t)).join("");e=window.btoa(i)}return`data:${tG(e)};base64,${e}`}function tY(t){return"w"in t&&"h"in t&&!("xt"in t)&&"p"in t}function t0(t){return!("h"in t)&&!("w"in t)&&"p"in t&&"e"in t&&"u"in t&&"id"in t}async function t1(t,e=()=>!0){if(!(t instanceof Uint8Array))throw new tX("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{!function(t,e,i){i||(i=e,e={}),"function"!=typeof i&&z(7);var o=[],n=function(){for(var t=0;t<o.length;++t)o[t]()},r={},s=function(t,e){tr(function(){i(t,e)})};tr(function(){s=i});for(var a=t.length-22;101010256!=X(t,a);--a)if(!a||t.length-a>65558)return s(z(13,0,1),null),n;var l=G(t,a+8);if(l){var h=l,d=X(t,a+16),u=4294967295==d||65535==h;if(u){var p=X(t,a-12);(u=101075792==X(t,p))&&(h=l=X(t,p+32),d=X(t,p+48))}for(var f=e&&e.filter,v=0;v<h;++v)!function(e){var i=to(t,d,u),a=i[0],h=i[1],p=i[2],v=i[3],m=i[4],_=i[5],y=_+30+G(t,_+26)+G(t,_+28);d=m;var g=function(t,e){t?(n(),s(t,null)):(e&&(r[v]=e),--l||s(null,r))};if(!f||f({name:v,size:h,originalSize:p,compression:a})){if(a){if(8==a){var b,w,C=t.subarray(y,y+h);if(h<32e4)try{g(null,Y(C,{out:new c(p)}))}catch(t){g(t,null)}else o.push((b={size:p},(w=g)||(w=b,b={}),"function"!=typeof w&&z(7),K(C,b,[Z],function(t){return J(Y(t.data[0],W(t.data[1])))},1,w)))}else g(z(14,"unknown compression type "+a,1),null)}else g(null,j(t,y,y+h))}else g(null,null)}(0)}else s(null,{})}(t,{filter:e},(t,e)=>{t&&o(t),i(e)})})}async function t3(t,e,i){if(!(t instanceof Uint8Array))throw new tX("DotLottie not found","INVALID_DOTLOTTIE");return(await t1(t,t=>t.name===e&&(!i||i(t))))[e]}async function t2(t){let e="manifest.json",i=(await t1(t,t=>t.name===e))[e];if(!(typeof i>"u"))return JSON.parse(ti(i,!1))}async function t6(t){var e;let i;if(!(t instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let o=await t2(t);if(typeof o>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let n=(i=tF._parse(o,void 0)).issues?{success:!1,error:new ts(i.issues),issues:i.issues}:{success:!0,data:i.output,output:i.output};return n.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify((Array.isArray(e=n.error)?e:e.issues).reduce((t,e)=>{if(e.path){let i=e.path.map(({key:t})=>t).join(".");t.nested[i]=[...t.nested[i]||[],e.message]}else t.root=[...t.root||[],e.message];return t},{nested:{}}).nested,null,2)}`}}async function t7(t){let e=new Uint8Array(t),i=await t6(e);if(i.error)throw new tX(i.error,"INVALID_DOTLOTTIE");return e}async function t4(t,e){let i=await t1(t,t=>{let i=t.name.replace("audio/","");return t.name.startsWith("audio/")&&(!e||e({...t,name:i}))}),o={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(o[t.replace("audio/","")]=tQ(e))}return o}async function t8(t,e){var i;let o=new Map;for(let[t,n]of Object.entries(e))for(let e of n.assets||[])if(t0(e)){let n=e.p;o.has(n)||o.set(n,new Set),null==(i=o.get(n))||i.add(t)}let n=await t4(t,t=>o.has(t.name));for(let[t,i]of o){let o=n[t];if(o)for(let n of i){let i=e[n];for(let e of(null==i?void 0:i.assets)||[])t0(e)&&e.p===t&&(e.p=o,e.u="",e.e=1)}}}async function t9(t,e){let i=await t1(t,t=>{let i=t.name.replace("images/","");return t.name.startsWith("images/")&&(!e||e({...t,name:i}))}),o={};for(let t in i){let e=i[t];e instanceof Uint8Array&&(o[t.replace("images/","")]=tQ(e))}return o}async function t5(t,e){var i;let o=new Map;for(let[t,n]of Object.entries(e))for(let e of n.assets||[])if(tY(e)){let n=e.p;o.has(n)||o.set(n,new Set),null==(i=o.get(n))||i.add(t)}let n=await t9(t,t=>o.has(t.name));for(let[t,i]of o){let o=n[t];if(o)for(let n of i){let i=e[n];for(let e of(null==i?void 0:i.assets)||[])tY(e)&&e.p===t&&(e.p=o,e.u="",e.e=1)}}}async function et(t,e,{inlineAssets:i}={},o){let n=`animations/${e}.json`,r=await t3(t,n,o);if(typeof r>"u")return;let s=JSON.parse(ti(r,!1));if(!i)return s;let a={[e]:s};return await t5(t,a),await t8(t,a),s}async function ee(t,e,i){let o=`themes/${e}.json`,n=await t3(t,o,i);if(!(typeof n>"u"))return JSON.parse(ti(n,!1))}async function ei(t,e){let i={},o=await t1(t,t=>{let i=t.name.replace("states/","").replace(".json","");return t.name.startsWith("states/")&&(!e||e({...t,name:i}))});for(let t in o){let e=o[t];e instanceof Uint8Array&&(i[t.replace("states/","").replace(".json","")]=ti(e,!1))}return i}async function eo(t,e,i){let o=`states/${e}.json`,n=await t3(t,o,i);return typeof n>"u"?void 0:JSON.parse(ti(n,!1))}function en(t,e="dotLottie-common"){return Error(`[${e}]: ${t}`)}function er(t,e="dotLottie-common",...i){console.error(`[${e}]:`,t,...i)}function es(t,e="dotLottie-common",...i){console.warn(`[${e}]:`,t,...i)}function ea(t){return["v","ip","op","layers","fr","w","h"].every(e=>Object.prototype.hasOwnProperty.call(t,e))}function el(t,e){let i=Object.keys(t).find(i=>t[i]===e);if(void 0===i)throw Error("Value not found in the object.");return i}function eh(t){return JSON.parse(JSON.stringify(t))}s=null!=(n=tj())?tL(tx(n)):{},((t,e,i,o)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let n of tk(e))t$.call(t,n)||n===i||tS(t,n,{get:()=>e[n],enumerable:!(o=tA(e,n))||o.enumerable})})(!r&&n&&n.__esModule?s:tS(s,"default",{value:n,enumerable:!0}),n);var ed=class{_dotLottie;_animationsMap=new Map;_themeMap=new Map;_stateMachinesMap=new Map;_manifest;get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(t){let e=await fetch(t,{method:"GET",mode:"cors"});if(!e.ok)throw Error(`Failed to load dotLottie from ${t} with status ${e.status}`);let i=e.headers.get("content-type");if(null!=i&&i.includes("application/json")){let i=await e.json();if(!ea(i))throw Error(`Invalid lottie JSON at ${t}`);let o=function(t=""){let e=t.trim(),i=e.lastIndexOf("/"),o=e.substring(i+1),n=o.indexOf(".");return -1!==n?o.substring(0,n):o}(t);this._animationsMap.set(o,i),this._manifest={activeAnimationId:o,animations:[{id:o}]}}else{this._dotLottie=await t7(await e.arrayBuffer());let t=await t2(this._dotLottie);if(!t)throw Error("Manifest not found");this._manifest=t}}loadFromLottieJSON(t){if(!ea(t))throw Error("Invalid lottie JSON");let e="my-animation";this._animationsMap.set(e,t),this._manifest={activeAnimationId:e,animations:[{id:e}]}}async loadFromArrayBuffer(t){this._dotLottie=await t7(t);let e=await t2(this._dotLottie);if(!e)throw Error("Manifest not found");this._manifest=e}async getAnimation(t){if(this._animationsMap.get(t))return this._animationsMap.get(t);if(!this._dotLottie)return;let e=await et(this._dotLottie,t,{inlineAssets:!0});return e&&this._animationsMap.set(t,e),e}async getTheme(t){if(this._themeMap.get(t))return this._themeMap.get(t);if(!this._dotLottie)return;let e=await ee(this._dotLottie,t);return e&&this._themeMap.set(t,e),e}async getStateMachines(){if(!this._dotLottie)return;let t=await ei(this._dotLottie);for(let e in t)if(e){let i=t[e];if(i){let t=JSON.parse(i);if(t){let e=t.descriptor.id;this._stateMachinesMap.get(e)||this._stateMachinesMap.set(e,t)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(t){if(this._stateMachinesMap.get(t))return this._stateMachinesMap.get(t);if(!this._dotLottie)return;let e=await eo(this._dotLottie,t);return e&&this._stateMachinesMap.set(e.descriptor.id,e),e}};function eu(){throw Error("Cycle detected")}function ep(){if(ev>1)ev--;else{for(var t,e=!1;void 0!==ef;){var i=ef;for(ef=void 0,em++;void 0!==i;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&eb(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=o}}if(em=0,ev--,e)throw t}}var ec=void 0,ef=void 0,ev=0,em=0,e_=0;function ey(t){if(void 0!==ec){var e=t.n;if(void 0===e||e.t!==ec)return e={i:0,S:t,p:ec.s,n:void 0,t:ec,e:void 0,x:void 0,r:e},void 0!==ec.s&&(ec.s.n=e),ec.s=e,t.n=e,32&ec.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=ec.s,e.n=void 0,ec.s.n=e,ec.s=e),e}}function eg(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function eb(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function ew(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function eC(t){for(var e=t.s,i=void 0;void 0!==e;){var o=e.p;-1===e.i?(e.S.U(e),void 0!==o&&(o.n=e.n),void 0!==e.n&&(e.n.p=o)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=o}t.s=i}function eL(t){eg.call(this,void 0),this.x=t,this.s=void 0,this.g=e_-1,this.f=4}function eS(t){var e=t.u;if(t.u=void 0,"function"==typeof e){ev++;var i=ec;ec=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,eA(t),e}finally{ec=i,ep()}}}function eA(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,eS(t)}function ek(t){if(ec!==this)throw Error("Out-of-order effect");eC(this),ec=t,this.f&=-2,8&this.f&&eA(this),ep()}function ex(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}eg.prototype.h=function(){return!0},eg.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},eg.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},eg.prototype.subscribe=function(t){var e=this;return function(t){var e=new ex(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}(function(){var i=e.value,o=32&this.f;this.f&=-33;try{t(i)}finally{this.f|=o}})},eg.prototype.valueOf=function(){return this.value},eg.prototype.toString=function(){return this.value+""},eg.prototype.toJSON=function(){return this.value},eg.prototype.peek=function(){return this.v},Object.defineProperty(eg.prototype,"value",{get:function(){var t=ey(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(ec instanceof eL&&function(){throw Error("Computed cannot have side-effects")}(),t!==this.v){em>100&&eu(),this.v=t,this.i++,e_++,ev++;try{for(var e=this.t;void 0!==e;e=e.x)e.t.N()}finally{ep()}}}}),(eL.prototype=new eg).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===e_))return!0;if(this.g=e_,this.f|=1,this.i>0&&!eb(this))return this.f&=-2,!0;var t=ec;try{ew(this),ec=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return ec=t,eC(this),this.f&=-2,!0},eL.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}eg.prototype.S.call(this,t)},eL.prototype.U=function(t){if(void 0!==this.t&&(eg.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},eL.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},eL.prototype.peek=function(){if(this.h()||eu(),16&this.f)throw this.v;return this.v},Object.defineProperty(eL.prototype,"value",{get:function(){1&this.f&&eu();var t=ey(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),ex.prototype.c=function(){var t=this.S();try{if(8&this.f||void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},ex.prototype.S=function(){1&this.f&&eu(),this.f|=1,this.f&=-9,eS(this),ew(this),ev++;var t=ec;return ec=this,ek.bind(this,t)},ex.prototype.N=function(){2&this.f||(this.f|=2,this.o=ef,ef=this)},ex.prototype.d=function(){this.f|=8,1&this.f||eA(this)};var e$=class{_state;_prevState;constructor(t){this._prevState=t,this._state=new eg(t)}setState(t){this._prevState=this._state.value,this._state.value=t}subscribe(t){return this._state.subscribe(e=>t(e,this._prevState))}};async function eO(t,e){let[{DotLottieStateMachineManager:o}]=await Promise.all([i.e(6296).then(i.bind(i,56296))]);if(!t.length)throw en("No state machines available inside this .lottie!");return new o(t,e)}var eP=((a=eP||{}).Complete="complete",a.DataFail="data_fail",a.DataReady="data_ready",a.Error="error",a.Frame="frame",a.Freeze="freeze",a.LoopComplete="loopComplete",a.Pause="pause",a.Play="play",a.Ready="ready",a.Stop="stop",a.VisibilityChange="visibilityChange",a),eI=((l=eI||{}).Completed="completed",l.Error="error",l.Fetching="fetching",l.Frozen="frozen",l.Initial="initial",l.Loading="loading",l.Paused="paused",l.Playing="playing",l.Ready="ready",l.Stopped="stopped",l),eM=((h=eM||{}).Bounce="bounce",h.Normal="normal",h),eE={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},eT={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},eN=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new e$(eT);_light=!1;_worker=!1;_dotLottieLoader=new ed;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){"string"==typeof t?this._src=t:this._src=eh(t),null!=i&&i.testId&&(this._testId=i.testId),this._defaultTheme=(null==i?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),"string"==typeof(null==i?void 0:i.activeAnimationId)&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,"string"==typeof(null==i?void 0:i.background)&&this.setBackground(i.background),"u">typeof(null==i?void 0:i.activeStateId)&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},null!=i&&i.light&&(this._light=i.light),null!=i&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var t,e,i,o;let n=()=>{this._hover&&"playing"!==this.currentState&&this.play()},r=()=>{this._hover&&"playing"===this.currentState&&this.stop()};null==(t=this._container)||t.removeEventListener("mouseenter",n),null==(e=this._container)||e.removeEventListener("mouseleave",r),null==(i=this._container)||i.addEventListener("mouseleave",r),null==(o=this._container)||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&"playing"===this.currentState?this.freeze():"frozen"===this.currentState&&this.unfreeze())}_listenToVisibilityChange(){"u">typeof document&&"u">typeof document.hidden&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(t){var e;if("u">typeof this._userPlaybackOptions[t])return this._userPlaybackOptions[t];let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations.find(t=>t.id===this._currentAnimationId);return i&&"u">typeof i[t]?i[t]:eE[t]}_getPlaybackOptions(){let t={};for(let e in eE)"u">typeof eE[e]&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var e,i,o;let n=t(this._getPlaybackOptions());try{tV._parse(n)}catch{es(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`);return}"u">typeof n.defaultTheme&&(this._defaultTheme=n.defaultTheme),"u">typeof n.playMode&&(this._mode=n.playMode),"u">typeof n.intermission&&(this._intermission=n.intermission),"u">typeof n.hover&&(this._hover=n.hover),"u">typeof n.loop&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,null==(e=this._lottie)||e.setLoop("number"==typeof n.loop||n.loop)),"u">typeof n.speed&&(null==(i=this._lottie)||i.setSpeed(n.speed)),"u">typeof n.autoplay&&this._lottie&&(this._lottie.autoplay=n.autoplay),"u">typeof n.direction&&(null==(o=this._lottie)||o.setDirection(n.direction))}_getOptionsFromAnimation(t){let{id:e,...i}=t;return{...eE,...i}}_updateTestData(){this._testId&&this._lottie&&(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData()}static isPathJSON(t){var e;return(null==(e=t.split(".").pop())?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&("string"==typeof t?this._src=t:this._src=eh(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){"boolean"==typeof t&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify())}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){"string"==typeof t&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){es("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing")}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){es("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped")}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){es("seek() Can't use whilst loading.");return}let e=t;"number"==typeof e&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let o="%"===i[2]?this.totalFrames*Number(i[1])/100:i[1];void 0!==o&&(this._lottie.goToAndPlay(o,!0),"playing"===this.currentState?this.play():"frozen"===this.currentState?this.freeze():this.pause())}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i){let[o,n]=null!=t?t:[0,this.totalFrames-1],[r,s]=null!=e?e:[0,1];if(!this._areNumbersInRange(r,s)){er("threshold values must be between 0 and 1");return}if(this.container){let{height:t,top:e}=this.container.getBoundingClientRect(),a=(window.innerHeight-e)/(window.innerHeight+t),l=o+Math.round((a-r)/(s-r)*(n-o));i&&i(a),this.goToAndStop(l,!0),(l>=n||a>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0)}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(null==t?void 0:t.segments,null==t?void 0:t.threshold,null==t?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(t){if(!this.container)throw en("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:null!=t&&t.threshold?t.threshold:[0,1]};this._onShowIntersectionObserver=new IntersectionObserver(e=>{e.forEach(e=>{var i,o;this._visibilityPercentage=100*e.intersectionRatio,e.isIntersecting?(null!=t&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),null==(i=this._container)||i.dispatchEvent(new Event("visibilityChange"))):null!=t&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),null==(o=this._container)||o.dispatchEvent(new Event("visibilityChange")))})},e),this._onShowIntersectionObserver.observe(this.container)}playOnShow(t){var e;if(this.stop(),!this.container)throw en("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:null!=(e=null==t?void 0:t.threshold)?e:[],callbackOnIntersect:t=>{0===t?this.pause():this.play()}})}_validatePlaybackOptions(t){if(!t)return{};let e={};for(let[i,o]of Object.entries(t))switch(i){case"autoplay":"boolean"==typeof o&&(e.autoplay=o);break;case"direction":"number"==typeof o&&[1,-1].includes(o)&&(e.direction=o);break;case"loop":("boolean"==typeof o||"number"==typeof o)&&(e.loop=o);break;case"playMode":"string"==typeof o&&["normal","bounce"].includes(o)&&(e.playMode=o);break;case"speed":"number"==typeof o&&(e.speed=o);break;case"themeColor":"string"==typeof o&&(e.themeColor=o);break;case"hover":"boolean"==typeof o&&(e.hover=o);break;case"intermission":"number"==typeof o&&(e.intermission=o);break;case"defaultTheme":"string"==typeof o&&(e.defaultTheme=o)}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!(null!=(t=this._dotLottieLoader.manifest)&&t.animations.length))throw en("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(0===this._dotLottieLoader.animationsMap.size)throw en("No animations have been loaded.")}async play(t,e){var i,o;if(["initial","loading"].includes(this._currentState)){es("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){-1===this._lottie.playDirection&&0===this._lottie.currentFrame?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if("number"==typeof t){let o=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations[t];if(!o)throw en("animation not found.");"function"==typeof e?await this.render({id:o.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(o))}):await this.render({id:o.id})}if("string"==typeof t){let i=null==(o=this._dotLottieLoader.manifest)?void 0:o.animations.find(e=>e.id===t);if(!i)throw en("animation not found.");"function"==typeof e?await this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):await this.render({id:i.id})}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){es("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing")}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){es("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t)}togglePlay(){"playing"===this.currentState?this.pause():this.play()}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),"number"==typeof t){let i=null==(e=this._dotLottieLoader.manifest)?void 0:e.animations[t];if(!i)throw en("animation not found.");return i}if("string"==typeof t){let e=null==(i=this._dotLottieLoader.manifest)?void 0:i.animations.find(e=>e.id===t);if(!e)throw en("animation not found.");return e}throw en("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){er("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(0===this._dotLottieLoader.stateMachinesMap.size&&await this._dotLottieLoader.getStateMachines(),0===this._dotLottieLoader.stateMachinesMap.size)throw en("No interactivity states are available.");if("undefined"===t)throw en("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await eO(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t)}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&(null==(e=this._stateMachineManager)||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw en("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",null==(t=this._stateMachineManager)||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var t;let e=this._getActiveAnimationId(),i=null==(t=this._dotLottieLoader.manifest)?void 0:t.animations.find(t=>t.id===e);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw en("animation not found.");this.play(e)}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw en("manifest not found.");if(this._inInteractiveMode){es("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw en("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw en("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw en("manifest not found.");if(this._inInteractiveMode){es("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(t=>t.id===this._currentAnimationId);if(-1===e)throw en("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw en("animation not found.");"function"==typeof t?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){es("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){es("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){es("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){es("freeze() Can't use whilst loading.");return}"frozen"!==this.currentState&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){es("unfreeze() Can't use whilst loading.");return}"playing"===this._stateBeforeFreeze?this.play():this.pause()}destroy(){var t,e;null!=(t=this._container)&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(t=>{t.unload()}),this._audios=[]),this.clearCountTimer(),"u">typeof document&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,null==(e=this._lottie)||e.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return"^5.12.2"}addEventListener(t,e){var i,o,n;this._listeners.has(t)||this._listeners.set(t,new Set),null==(i=this._listeners.get(t))||i.add(e);try{"complete"===t?null==(o=this._container)||o.addEventListener(t,e):null==(n=this._lottie)||n.addEventListener(t,e)}catch(t){er(`addEventListener ${t}`)}}getState(){var t,e,i,o,n,r,s;return{autoplay:null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:null!=(o=null==(i=this._lottie)?void 0:i.playDirection)?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:null!=(r=null==(n=this._lottie)?void 0:n.playSpeed)?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:null!=(s=this._activeStateId)?s:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var t;return(null==(t=this._lottie)?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t}get speed(){var t;return(null==(t=this._lottie)?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t}get autoplay(){var t,e;return null!=(e=null==(t=this._lottie)?void 0:t.autoplay)&&e}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){es("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){es("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render()}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){es("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t)}get _frame(){return this._lottie?"completed"===this.currentState?-1===this.direction?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var e;let i;i=Array.isArray(t)&&0!==t.length?t:["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"];let o=!1;if(i.includes("activeAnimationId")){let t=null==(e=this._dotLottieLoader.manifest)?void 0:e.activeAnimationId,i=this._getAnimationByIdOrIndex(t||0);this._activeAnimationId=t,await this._setCurrentAnimation(i.id),o=!0}i.forEach(t=>{switch(t){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"))}}),o&&this.render()}removeEventListener(t,e){var i,o,n;try{"complete"===t?null==(i=this._container)||i.removeEventListener(t,e):null==(o=this._lottie)||o.removeEventListener(t,e),null==(n=this._listeners.get(t))||n.delete(e)}catch(t){er("removeEventListener",t)}}_handleAnimationComplete(){var t;"number"==typeof this._loop&&this.stop();let e=-1===this.direction?0:this.totalFrames-1;this.goToAndStop(e,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),null==(t=this._container)||t.dispatchEvent(new Event("complete"))}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){es("addEventListeners() Can't use whilst loading.");return}for(let[e,i]of(this._lottie.addEventListener("enterFrame",()=>{var t;if(!this._lottie){es("enterFrame event : Lottie is undefined.");return}0===Math.floor(this._lottie.currentFrame)&&-1===this.direction&&(null==(t=this._container)||t.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var t;if(!this._lottie){es("loopComplete event : Lottie is undefined.");return}null==(t=this._container)||t.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let e=this._lottie.playDirection;if("number"==typeof this._loop&&this._loop>0&&(this._counter+="bounce"===this._mode?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}"bounce"===this._mode&&"number"==typeof e&&(e=-1*Number(e));let i=-1===e?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(i,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0))},this._intermission)):(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(-1===e?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&!1===this._loop&&"bounce"===this._mode){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;"bounce"===this._mode&&"number"==typeof t&&(t=-1*Number(t));let e=-1===t?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(e,!0)},this._intermission)}else this._handleAnimationComplete()}),this._listeners))if("complete"===e)for(let o of i)null==(t=this._container)||t.addEventListener(e,o);else for(let t of i)this._lottie.addEventListener(e,t)}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready"}async _getAudioFactory(){let t;if(this._animation&&(t=this._animation.assets)&&t.some(t=>t0(t))){let{DotLottieAudio:t}=await i.e(380).then(i.bind(i,30380));return e=>{let i=new t({src:[e]});return this._audios.push(i),i}}return null}async render(t){var e,i,o,n,r,s,a,l,h,d,u,p,c,f,v,m,_,y;if(null!=t&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw en("no animation selected");let g=null!=(e=eE.loop)&&e,b=null!=(i=eE.autoplay)&&i,w=null!=(o=eE.playMode)?o:"normal",C=null!=(n=eE.intermission)?n:0,L=null!=(r=eE.hover)&&r,S=null!=(s=eE.direction)?s:1,A=null!=(a=eE.speed)?a:1,k=null!=(l=eE.defaultTheme)?l:"";g=null!=(h=null==t?void 0:t.loop)?h:this._getOption("loop"),b=null!=(d=null==t?void 0:t.autoplay)?d:this._getOption("autoplay"),w=null!=(u=null==t?void 0:t.playMode)?u:this._getOption("playMode"),C=null!=(p=null==t?void 0:t.intermission)?p:this._getOption("intermission"),L=null!=(c=null==t?void 0:t.hover)?c:this._getOption("hover"),S=null!=(f=null==t?void 0:t.direction)?f:this._getOption("direction"),A=null!=(v=null==t?void 0:t.speed)?v:this._getOption("speed"),k=null!=(m=null==t?void 0:t.defaultTheme)?m:this._getOption("defaultTheme");let x={...this._animationConfig,autoplay:!L&&b,loop:"number"==typeof g||g,renderer:this._worker?"svg":null!=(_=this._animationConfig.renderer)?_:"svg"},[$,O,P]=await Promise.all([this._dotLottieLoader.getTheme(k),this._getLottiePlayerInstance(),this._getAudioFactory()]);if($&&this._animation?(this._animation=eh(this._animation),this._animation.slots=$):this._animation=await this._dotLottieLoader.getAnimation(null!=(y=this._currentAnimationId)?y:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:k,playMode:w,intermission:C,hover:L,loop:g})),P?this._lottie=O.loadAnimation({...x,container:this._container,animationData:this._animation,audioFactory:P}):this._lottie=O.loadAnimation({...x,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var t;null==(t=this._lottie)||t.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:S,speed:A})),b&&!L&&(!1===g&&-1===S?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var t;let e=null!=(t=this._animationConfig.renderer)?t:"svg",o;if(this._worker)return"svg"!==e&&es("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),(o=await i.e(5732).then(i.bind(i,68367))).default;switch(e){case"svg":o=this._light?await i.e(9292).then(i.bind(i,81675)):await i.e(5181).then(i.bind(i,17032));break;case"canvas":o=this._light?await i.e(690).then(i.bind(i,3529)):await i.e(1060).then(i.bind(i,97183));break;case"html":o=this._light?await i.e(6235).then(i.bind(i,93364)):await i.e(5757).then(i.bind(i,71628));break;default:throw Error(`Invalid renderer: ${e}`)}return o.default}_getActiveAnimationId(){var t,e,i,o;let n=this._dotLottieLoader.manifest;return null!=(o=null!=(i=null!=(t=this._activeAnimationId)?t:null==n?void 0:n.activeAnimationId)?i:null==(e=null==n?void 0:n.animations[0])?void 0:e.id)?o:void 0}async load(t){if("loading"===this._currentState){es("Loading in progress..");return}try{if(this.setCurrentState("loading"),"string"==typeof this._src){if(function(t){try{let e=JSON.parse(t);return ea(e)}catch{return!1}}(this._src)){let t=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(t)}else{let t=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(t.toString())}}else if("object"==typeof this._src&&ea(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw en("Invalid src provided");if(!this._dotLottieLoader.manifest)throw en("No manifest found");let e=this._getActiveAnimationId();if(!e)throw en("No active animation found");await this._setCurrentAnimation(e),await this.render(t)}catch(t){this.setCurrentState("error"),t instanceof Error&&er(`Error loading animation: ${t.message}`)}}setErrorState(t){this.setCurrentState("error"),er(t)}_requireValidDirection(t){if(-1!==t&&1!==t)throw en("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw en("intermission must be a positive number")}_requireValidLoop(t){if("number"==typeof t&&(!Number.isInteger(t)||t<0))throw en("loop must be a positive number or boolean")}_requireValidSpeed(t){if("number"!=typeof t)throw en("speed must be a number")}_requireValidBackground(t){if("string"!=typeof t)throw en("background must be a string")}_requireValidAutoplay(t){if("boolean"!=typeof t)throw en("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed)}}},2115:function(t,e,i){i.d(e,{a:function(){return r}});var o=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=(t,e,i,r)=>{for(var s,a=r>1?void 0:r?n(e,i):e,l=t.length-1;l>=0;l--)(s=t[l])&&(a=(r?s(e,i,a):s(a))||a);return r&&a&&o(e,i,a),a}},2279:function(t,e,i){i.r(e),i.d(e,{DotLottiePlayer:function(){return tb},PlayMode:function(){return tf.g}});var o,n,r,s,a,l=window,h=l.ShadowRoot&&(void 0===l.ShadyCSS||l.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d=Symbol(),u=new WeakMap,p=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==d)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(h&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=u.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&u.set(e,t))}return t}toString(){return this.cssText}},c=t=>new p("string"==typeof t?t:t+"",void 0,d),f=(t,e)=>{h?t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(e=>{let i=document.createElement("style"),o=l.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)})},v=h?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return c(e)})(t):t,m=window,_=m.trustedTypes,y=_?_.emptyScript:"",g=m.reactiveElementPolyfillSupport,b={toAttribute(t,e){switch(e){case Boolean:t=t?y:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},w=(t,e)=>e!==t&&(e==e||t==t),C={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:w},L="finalized",S=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=C){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||C}static finalize(){if(this.hasOwnProperty(L))return!1;this[L]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties;for(let e of[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)])this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t))for(let i of new Set(t.flat(1/0).reverse()))e.unshift(v(i));else void 0!==t&&e.push(v(t));return e}static _$Ep(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach(t=>t(this))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return f(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)})}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=C){var o;let n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){let r=((null===(o=i.converter)||void 0===o?void 0:o.toAttribute)!==void 0?i.converter:b).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;let o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){let t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)!==void 0?t.converter:b;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||w)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((t,e)=>this[e]=t),this._$Ei=void 0);let e=!1,i=this._$AL;try{(e=this.shouldUpdate(i))?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach(t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)}),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach(t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach((t,e)=>this._$EO(e,this[e],t)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};S[L]=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},null==g||g({ReactiveElement:S}),(null!==(a=m.reactiveElementVersions)&&void 0!==a?a:m.reactiveElementVersions=[]).push("1.6.3");var A,k=window,x=k.trustedTypes,$=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,O="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,I="?"+P,M=`<${I}>`,E=document,T=()=>E.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,U=t=>j(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),z=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,V=/>/g,B=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,q=/"/g,R=/^(?:script|style|textarea|title)$/i,Z=(t,...e)=>({_$litType$:1,strings:t,values:e}),J=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,G=E.createTreeWalker(E,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}var Q=(t,e)=>{let i=t.length-1,o=[],n,r=2===e?"<svg>":"",s=D;for(let e=0;e<i;e++){let i=t[e],a,l,h=-1,d=0;for(;d<i.length&&(s.lastIndex=d,null!==(l=s.exec(i)));)d=s.lastIndex,s===D?"!--"===l[1]?s=F:void 0!==l[1]?s=V:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),s=B):void 0!==l[3]&&(s=B):s===B?">"===l[0]?(s=null!=n?n:D,h=-1):void 0===l[1]?h=-2:(h=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?B:'"'===l[3]?q:H):s===q||s===H?s=B:s===F||s===V?s=D:(s=B,n=void 0);let u=s===B&&t[e+1].startsWith("/>")?" ":"";r+=s===D?i+M:h>=0?(o.push(a),i.slice(0,h)+O+i.slice(h)+P+u):i+P+(-2===h?(o.push(void 0),e):u)}return[X(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]},Y=class t{constructor({strings:e,_$litType$:i},o){let n;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[h,d]=Q(e,i);if(this.el=t.createElement(h,o),G.currentNode=this.el.content,2===i){let t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=G.nextNode())&&l.length<a;){if(1===n.nodeType){if(n.hasAttributes()){let t=[];for(let e of n.getAttributeNames())if(e.endsWith(O)||e.startsWith(P)){let i=d[s++];if(t.push(e),void 0!==i){let t=n.getAttribute(i.toLowerCase()+O).split(P),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?tn:"?"===e[1]?ts:"@"===e[1]?ta:to})}else l.push({type:6,index:r})}for(let e of t)n.removeAttribute(e)}if(R.test(n.tagName)){let t=n.textContent.split(P),e=t.length-1;if(e>0){n.textContent=x?x.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),G.nextNode(),l.push({type:2,index:++r});n.append(t[e],T())}}}else if(8===n.nodeType){if(n.data===I)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(P,t+1));)l.push({type:7,index:r}),t+=P.length-1}}r++}}static createElement(t,e){let i=E.createElement("template");return i.innerHTML=t,i}};function tt(t,e,i=t,o){var n,r,s;if(e===J)return e;let a=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl,l=N(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==l&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===l?a=void 0:(a=new l(t))._$AT(t,i,o),void 0!==o?(null!==(s=i._$Co)&&void 0!==s?s:i._$Co=[])[o]=a:i._$Cl=a),void 0!==a&&(e=tt(t,a._$AS(t,e.values),a,o)),e}var te=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);G.currentNode=n;let r=G.nextNode(),s=0,a=0,l=o[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new ti(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new tl(r,this,t)),this._$AV.push(e),l=o[++a]}s!==(null==l?void 0:l.index)&&(r=G.nextNode(),s++)}return G.currentNode=E,n}v(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ti=class t{constructor(t,e,i,o){var n;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&(null==t?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){N(t=tt(this,t,e))?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==J&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):U(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;let{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=Y.createElement(X(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{let t=new te(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new Y(t)),e}T(e){j(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,n=0;for(let r of e)n===i.length?i.push(o=new t(this.k(T()),this.k(T()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}},to=class{constructor(t,e,i,o,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,r=!1;if(void 0===n)(r=!N(t=tt(this,t,e,0))||t!==this._$AH&&t!==J)&&(this._$AH=t);else{let o=t,s,a;for(t=n[0],s=0;s<n.length-1;s++)(a=tt(this,o[i+s],e,s))===J&&(a=this._$AH[s]),r||(r=!N(a)||a!==this._$AH[s]),a===W?t=W:t!==W&&(t+=(null!=a?a:"")+n[s+1]),this._$AH[s]=a}r&&!o&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}},tn=class extends to{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}},tr=x?x.emptyScript:"",ts=class extends to{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,tr):this.element.removeAttribute(this.name)}},ta=class extends to{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=tt(this,t,e,0))&&void 0!==i?i:W)===J)return;let o=this._$AH,n=t===W&&o!==W||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==W&&(o===W||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}},tl=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tt(this,t)}},th=k.litHtmlPolyfillSupport;null==th||th(Y,ti),(null!==(A=k.litHtmlVersions)&&void 0!==A?A:k.litHtmlVersions=[]).push("2.8.0");var td=(t,e,i)=>{var o,n;let r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e,s=r._$litPart$;if(void 0===s){let t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=s=new ti(e.insertBefore(T(),t),t,void 0,null!=i?i:{})}return s._$AI(t),s},tu=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=td(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return J}};tu.finalized=!0,tu._$litElement$=!0,null===(n=globalThis.litElementHydrateSupport)||void 0===n||n.call(globalThis,{LitElement:tu});var tp=globalThis.litElementPolyfillSupport;null==tp||tp({LitElement:tu}),(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.3.3");var tc=((t,...e)=>new p(1===t.length?t[0]:e.reduce((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1],t[0]),t,d))`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`,tf=i(57893);i(88838);var tv=i(2115),tm=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}}:{...e,finisher(i){i.createProperty(e.key,t)}},t_=(t,e,i)=>{e.constructor.createProperty(i,t)};function ty(t){return(e,i)=>void 0!==i?t_(t,e,i):tm(t,e)}(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)!=null||((t,e)=>t.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE));var tg="dotlottie-player",tb=class extends tu{defaultTheme="";container;playMode=tf.g.Normal;autoplay=!1;background="transparent";controls=!1;direction=1;hover=!1;loop;renderer="svg";speed=1;src;intermission=0;activeAnimationId=null;light=!1;worker=!1;activeStateId;_seeker=0;_dotLottieCommonPlayer;_io;_loop;_renderer="svg";_unsubscribeListeners;_hasMultipleAnimations=!1;_hasMultipleThemes=!1;_hasMultipleStates=!1;_popoverIsOpen=!1;_animationsTabIsOpen=!1;_statesTabIsOpen=!1;_styleTabIsOpen=!1;_themesForCurrentAnimation=[];_statesForCurrentAnimation=[];_parseLoop(t){let e=parseInt(t,10);return Number.isInteger(e)&&e>0?(this._loop=e,e):"string"==typeof t&&["true","false"].includes(t)?(this._loop="true"===t,this._loop):((0,tf.c)("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let e=t.currentTarget;try{let t=parseInt(e.value,10);if(!this._dotLottieCommonPlayer)return;let i=t/100*this._dotLottieCommonPlayer.totalFrames;this.seek(i)}catch{throw(0,tf.a)("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(void 0===t){(0,tf.c)("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((t,e)=>{this._seeker=t.seeker,this.requestUpdate(),e.currentState!==t.currentState&&this.dispatchEvent(new CustomEvent(t.currentState)),this.dispatchEvent(new CustomEvent(tf.e.Frame,{detail:{frame:t.frame,seeker:t.seeker}})),this.dispatchEvent(new CustomEvent(tf.e.VisibilityChange,{detail:{visibilityPercentage:t.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(tf.e.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(tf.e.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let t=this.getManifest();t&&t.themes&&(this._themesForCurrentAnimation=t.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||""))),t&&t.states&&(this._hasMultipleStates=t.states.length>0,this._statesForCurrentAnimation=[],t.states.forEach(t=>{this._statesForCurrentAnimation.push(t)})),this.dispatchEvent(new CustomEvent(tf.e.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(tf.e.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(tf.e.DataFail))}),window&&window.addEventListener("click",t=>this._clickOutListener(t))}async load(t,e,i){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new tf.j(t,this.container,{rendererSettings:null!=e?e:{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?1===this.direction?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(i);let o=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,o&&(o.themes&&(this._themesForCurrentAnimation=o.themes.filter(t=>t.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=o.themes.length>0),o.states&&(this._hasMultipleStates=o.states.length>0,this._statesForCurrentAnimation=[],o.states.forEach(t=>{this._statesForCurrentAnimation.push(t)}))),this._initListeners()}getCurrentAnimationId(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&(null==(t=this._dotLottieCommonPlayer.getManifest())?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return(null==t?void 0:t.animations.map(t=>t.id))||[]}currentAnimation(){return this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.currentAnimationId?this._dotLottieCommonPlayer.currentAnimationId:""}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():tf.i}getManifest(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getManifest()}getLottie(){var t;return null==(t=this._dotLottieCommonPlayer)?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:tf.j.getLottieWebVersion(),dotLottiePlayerVersion:"2.7.12"}}previous(t){var e;null==(e=this._dotLottieCommonPlayer)||e.previous(t)}next(t){var e;null==(e=this._dotLottieCommonPlayer)||e.next(t)}reset(){var t;null==(t=this._dotLottieCommonPlayer)||t.reset()}play(t,e){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,e)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let e=this.shadowRoot.querySelector(".animation svg"),i=new XMLSerializer().serializeToString(e);if(t){let t=document.createElement("a");t.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(i)}`,t.download=`download_${this._seeker}.svg`,document.body.appendChild(t),t.click(),document.body.removeChild(t)}return i}setTheme(t){var e;null==(e=this._dotLottieCommonPlayer)||e.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let e=this._dotLottieCommonPlayer.getManifest();return(null==(t=null==e?void 0:e.themes)?void 0:t.map(t=>t.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return!!this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.loop}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var e;null==(e=this._dotLottieCommonPlayer)||e.revertToManifestValues(t)}static get styles(){return tc}async firstUpdated(){var t;this.container=null==(t=this.shadowRoot)?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(t=>{var e,i;void 0!==t[0]&&t[0].isIntersecting?(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===tf.f.Frozen&&this.play():(null==(i=this._dotLottieCommonPlayer)?void 0:i.currentState)===tf.f.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),"svg"===this.renderer?this._renderer="svg":"canvas"===this.renderer?this._renderer="canvas":"html"===this.renderer&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,e;this._io&&(this._io.disconnect(),this._io=void 0),null==(t=this._dotLottieCommonPlayer)||t.destroy(),null==(e=this._unsubscribeListeners)||e.call(this),window&&window.removeEventListener("click",t=>this._clickOutListener(t))}_clickOutListener(t){!t.composedPath().some(t=>t instanceof HTMLElement&&(t.classList.contains("popover")||"lottie-animation-options"===t.id))&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,e,i,o,n;let r=(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===tf.f.Playing,s=(null==(e=this._dotLottieCommonPlayer)?void 0:e.currentState)===tf.f.Paused;return Z`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?Z`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:Z``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${r||s?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${r?Z`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:Z`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?Z`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:Z``}
        <input
          id="lottie-seeker-input"
          class="seeker ${(null==(i=this._dotLottieCommonPlayer)?void 0:i.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${t=>this._handleSeekChange(t)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var t;null==(t=this._dotLottieCommonPlayer)||t.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${null!=(o=this._dotLottieCommonPlayer)&&o.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?Z`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:Z``}
      </div>
      ${this._popoverIsOpen?Z`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${this._animationsTabIsOpen||this._styleTabIsOpen||this._statesTabIsOpen?Z``:Z`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `}
              ${!this._hasMultipleThemes||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":Z` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${!this._hasMultipleStates||this._styleTabIsOpen||this._animationsTabIsOpen||this._statesTabIsOpen?"":Z` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${t=>{("Space"===t.code||"Enter"===t.code)&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`}
              ${this._animationsTabIsOpen?Z`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(t=>Z`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${t}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate()}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(t),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===t?Z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:Z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:Z``}
              ${this._styleTabIsOpen?Z`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${(null==(n=this._dotLottieCommonPlayer)?void 0:n.defaultTheme)===""?Z``:Z`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(t=>Z`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t.id}"
                                @click=${()=>{this.setTheme(t.id)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.setTheme(t.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===t.id?Z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:Z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:Z``}
              ${this._statesTabIsOpen?Z`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(t=>Z`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${t}"
                                @click=${()=>{this.enterInteractiveMode(t)}}
                                @keydown=${e=>{("Space"===e.code||"Enter"===e.code)&&this.enterInteractiveMode(t)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===t?Z`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:Z`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${t}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:Z``}
            </div>
          `:Z``}
    `}render(){var t;let e=this.controls?"main controls":"main",i=this.controls?"animation controls":"animation";return Z`
      <div id="animation-container" class=${e} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${i} style="background:${this.background};">
          ${(null==(t=this._dotLottieCommonPlayer)?void 0:t.currentState)===tf.f.Error?Z` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};(0,tv.a)([ty({type:String})],tb.prototype,"defaultTheme",2),(0,tv.a)([(o="#animation",(({finisher:t,descriptor:e})=>(i,o)=>{var n;if(void 0===o){let o=null!==(n=i.originalKey)&&void 0!==n?n:i.key,r=null!=e?{kind:"method",placement:"prototype",key:o,descriptor:e(i.key)}:{...i,key:o};return null!=t&&(r.finisher=function(e){t(e,o)}),r}{let n=i.constructor;void 0!==e&&Object.defineProperty(i,o,e(o)),null==t||t(n,o)}})({descriptor:t=>({get(){var t,e;return null!==(e=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(o))&&void 0!==e?e:null},enumerable:!0,configurable:!0})}))],tb.prototype,"container",2),(0,tv.a)([ty()],tb.prototype,"playMode",2),(0,tv.a)([ty({type:Boolean})],tb.prototype,"autoplay",2),(0,tv.a)([ty({type:String})],tb.prototype,"background",2),(0,tv.a)([ty({type:Boolean})],tb.prototype,"controls",2),(0,tv.a)([ty({type:Number})],tb.prototype,"direction",2),(0,tv.a)([ty({type:Boolean})],tb.prototype,"hover",2),(0,tv.a)([ty({type:String})],tb.prototype,"loop",2),(0,tv.a)([ty({type:String})],tb.prototype,"renderer",2),(0,tv.a)([ty({type:Number})],tb.prototype,"speed",2),(0,tv.a)([ty({type:String})],tb.prototype,"src",2),(0,tv.a)([ty()],tb.prototype,"intermission",2),(0,tv.a)([ty({type:String})],tb.prototype,"activeAnimationId",2),(0,tv.a)([ty({type:Boolean})],tb.prototype,"light",2),(0,tv.a)([ty({type:Boolean})],tb.prototype,"worker",2),(0,tv.a)([ty({type:String})],tb.prototype,"activeStateId",2),(0,tv.a)([ty({state:!0})],tb.prototype,"_seeker",2),customElements.get(tg)||customElements.define(tg,tb)}}]);