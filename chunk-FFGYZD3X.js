import{Ba as qm,Ca as jm,Da as eC,Fa as Qx,Ga as ty,Ha as ey,Ia as ry,Ja as rC,Ka as oC,Z as Q0,d as yo,e as Zt,f as Dp,g as B,sa as tC}from"./chunk-DDNBFEI3.js";var TC=yo((WZ,NC)=>{"use strict";NC.exports=Ne;var bo=null;try{bo=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ne(r,e,t){this.low=r|0,this.high=e|0,this.unsigned=!!t}Ne.prototype.__isLong__;Object.defineProperty(Ne.prototype,"__isLong__",{value:!0});function Zr(r){return(r&&r.__isLong__)===!0}Ne.isLong=Zr;var dC={},gC={};function Ya(r,e){var t,o,n;return e?(r>>>=0,(n=0<=r&&r<256)&&(o=gC[r],o)?o:(t=Te(r,(r|0)<0?-1:0,!0),n&&(gC[r]=t),t)):(r|=0,(n=-128<=r&&r<128)&&(o=dC[r],o)?o:(t=Te(r,r<0?-1:0,!1),n&&(dC[r]=t),t))}Ne.fromInt=Ya;function wo(r,e){if(isNaN(r))return e?Xa:Co;if(e){if(r<0)return Xa;if(r>=wC)return SC}else{if(r<=-yC)return Yr;if(r+1>=yC)return vC}return r<0?wo(-r,e).neg():Te(r%rc|0,r/rc|0,e)}Ne.fromNumber=wo;function Te(r,e,t){return new Ne(r,e,t)}Ne.fromBits=Te;var tf=Math.pow;function gy(r,e,t){if(r.length===0)throw Error("empty string");if(r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return Co;if(typeof e=="number"?(t=e,e=!1):e=!!e,t=t||10,t<2||36<t)throw RangeError("radix");var o;if((o=r.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return gy(r.substring(1),e,t).neg();for(var n=wo(tf(t,8)),s=Co,i=0;i<r.length;i+=8){var a=Math.min(8,r.length-i),l=parseInt(r.substring(i,i+a),t);if(a<8){var u=wo(tf(t,a));s=s.mul(u).add(wo(l))}else s=s.mul(n),s=s.add(wo(l))}return s.unsigned=e,s}Ne.fromString=gy;function Vo(r,e){return typeof r=="number"?wo(r,e):typeof r=="string"?gy(r,e):Te(r.low,r.high,typeof e=="boolean"?e:r.unsigned)}Ne.fromValue=Vo;var xC=65536,oP=1<<24,rc=xC*xC,wC=rc*rc,yC=wC/2,bC=Ya(oP),Co=Ya(0);Ne.ZERO=Co;var Xa=Ya(0,!0);Ne.UZERO=Xa;var ec=Ya(1);Ne.ONE=ec;var CC=Ya(1,!0);Ne.UONE=CC;var dy=Ya(-1);Ne.NEG_ONE=dy;var vC=Te(-1,2147483647,!1);Ne.MAX_VALUE=vC;var SC=Te(-1,-1,!0);Ne.MAX_UNSIGNED_VALUE=SC;var Yr=Te(0,-2147483648,!1);Ne.MIN_VALUE=Yr;var ct=Ne.prototype;ct.toInt=function(){return this.unsigned?this.low>>>0:this.low};ct.toNumber=function(){return this.unsigned?(this.high>>>0)*rc+(this.low>>>0):this.high*rc+(this.low>>>0)};ct.toString=function(e){if(e=e||10,e<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(Yr)){var t=wo(e),o=this.div(t),n=o.mul(t).sub(this);return o.toString(e)+n.toInt().toString(e)}else return"-"+this.neg().toString(e);for(var s=wo(tf(e,6),this.unsigned),i=this,a="";;){var l=i.div(s),u=i.sub(l.mul(s)).toInt()>>>0,c=u.toString(e);if(i=l,i.isZero())return c+a;for(;c.length<6;)c="0"+c;a=""+c+a}};ct.getHighBits=function(){return this.high};ct.getHighBitsUnsigned=function(){return this.high>>>0};ct.getLowBits=function(){return this.low};ct.getLowBitsUnsigned=function(){return this.low>>>0};ct.getNumBitsAbs=function(){if(this.isNegative())return this.eq(Yr)?64:this.neg().getNumBitsAbs();for(var e=this.high!=0?this.high:this.low,t=31;t>0&&!(e&1<<t);t--);return this.high!=0?t+33:t+1};ct.isZero=function(){return this.high===0&&this.low===0};ct.eqz=ct.isZero;ct.isNegative=function(){return!this.unsigned&&this.high<0};ct.isPositive=function(){return this.unsigned||this.high>=0};ct.isOdd=function(){return(this.low&1)===1};ct.isEven=function(){return(this.low&1)===0};ct.equals=function(e){return Zr(e)||(e=Vo(e)),this.unsigned!==e.unsigned&&this.high>>>31===1&&e.high>>>31===1?!1:this.high===e.high&&this.low===e.low};ct.eq=ct.equals;ct.notEquals=function(e){return!this.eq(e)};ct.neq=ct.notEquals;ct.ne=ct.notEquals;ct.lessThan=function(e){return this.comp(e)<0};ct.lt=ct.lessThan;ct.lessThanOrEqual=function(e){return this.comp(e)<=0};ct.lte=ct.lessThanOrEqual;ct.le=ct.lessThanOrEqual;ct.greaterThan=function(e){return this.comp(e)>0};ct.gt=ct.greaterThan;ct.greaterThanOrEqual=function(e){return this.comp(e)>=0};ct.gte=ct.greaterThanOrEqual;ct.ge=ct.greaterThanOrEqual;ct.compare=function(e){if(Zr(e)||(e=Vo(e)),this.eq(e))return 0;var t=this.isNegative(),o=e.isNegative();return t&&!o?-1:!t&&o?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1};ct.comp=ct.compare;ct.negate=function(){return!this.unsigned&&this.eq(Yr)?Yr:this.not().add(ec)};ct.neg=ct.negate;ct.add=function(e){Zr(e)||(e=Vo(e));var t=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,i=e.high>>>16,a=e.high&65535,l=e.low>>>16,u=e.low&65535,c=0,p=0,m=0,f=0;return f+=s+u,m+=f>>>16,f&=65535,m+=n+l,p+=m>>>16,m&=65535,p+=o+a,c+=p>>>16,p&=65535,c+=t+i,c&=65535,Te(m<<16|f,c<<16|p,this.unsigned)};ct.subtract=function(e){return Zr(e)||(e=Vo(e)),this.add(e.neg())};ct.sub=ct.subtract;ct.multiply=function(e){if(this.isZero())return Co;if(Zr(e)||(e=Vo(e)),bo){var t=bo.mul(this.low,this.high,e.low,e.high);return Te(t,bo.get_high(),this.unsigned)}if(e.isZero())return Co;if(this.eq(Yr))return e.isOdd()?Yr:Co;if(e.eq(Yr))return this.isOdd()?Yr:Co;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(bC)&&e.lt(bC))return wo(this.toNumber()*e.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,i=this.low&65535,a=e.high>>>16,l=e.high&65535,u=e.low>>>16,c=e.low&65535,p=0,m=0,f=0,h=0;return h+=i*c,f+=h>>>16,h&=65535,f+=s*c,m+=f>>>16,f&=65535,f+=i*u,m+=f>>>16,f&=65535,m+=n*c,p+=m>>>16,m&=65535,m+=s*u,p+=m>>>16,m&=65535,m+=i*l,p+=m>>>16,m&=65535,p+=o*c+n*u+s*l+i*a,p&=65535,Te(f<<16|h,p<<16|m,this.unsigned)};ct.mul=ct.multiply;ct.divide=function(e){if(Zr(e)||(e=Vo(e)),e.isZero())throw Error("division by zero");if(bo){if(!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1)return this;var t=(this.unsigned?bo.div_u:bo.div_s)(this.low,this.high,e.low,e.high);return Te(t,bo.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Xa:Co;var o,n,s;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return Xa;if(e.gt(this.shru(1)))return CC;s=Xa}else{if(this.eq(Yr)){if(e.eq(ec)||e.eq(dy))return Yr;if(e.eq(Yr))return ec;var i=this.shr(1);return o=i.div(e).shl(1),o.eq(Co)?e.isNegative()?ec:dy:(n=this.sub(e.mul(o)),s=o.add(n.div(e)),s)}else if(e.eq(Yr))return this.unsigned?Xa:Co;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();s=Co}for(n=this;n.gte(e);){o=Math.max(1,Math.floor(n.toNumber()/e.toNumber()));for(var a=Math.ceil(Math.log(o)/Math.LN2),l=a<=48?1:tf(2,a-48),u=wo(o),c=u.mul(e);c.isNegative()||c.gt(n);)o-=l,u=wo(o,this.unsigned),c=u.mul(e);u.isZero()&&(u=ec),s=s.add(u),n=n.sub(c)}return s};ct.div=ct.divide;ct.modulo=function(e){if(Zr(e)||(e=Vo(e)),bo){var t=(this.unsigned?bo.rem_u:bo.rem_s)(this.low,this.high,e.low,e.high);return Te(t,bo.get_high(),this.unsigned)}return this.sub(this.div(e).mul(e))};ct.mod=ct.modulo;ct.rem=ct.modulo;ct.not=function(){return Te(~this.low,~this.high,this.unsigned)};ct.and=function(e){return Zr(e)||(e=Vo(e)),Te(this.low&e.low,this.high&e.high,this.unsigned)};ct.or=function(e){return Zr(e)||(e=Vo(e)),Te(this.low|e.low,this.high|e.high,this.unsigned)};ct.xor=function(e){return Zr(e)||(e=Vo(e)),Te(this.low^e.low,this.high^e.high,this.unsigned)};ct.shiftLeft=function(e){return Zr(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Te(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):Te(0,this.low<<e-32,this.unsigned)};ct.shl=ct.shiftLeft;ct.shiftRight=function(e){return Zr(e)&&(e=e.toInt()),(e&=63)===0?this:e<32?Te(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):Te(this.high>>e-32,this.high>=0?0:-1,this.unsigned)};ct.shr=ct.shiftRight;ct.shiftRightUnsigned=function(e){if(Zr(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var o=this.low;return Te(o>>>e|t<<32-e,t>>>e,this.unsigned)}else return e===32?Te(t,0,this.unsigned):Te(t>>>e-32,0,this.unsigned)};ct.shru=ct.shiftRightUnsigned;ct.shr_u=ct.shiftRightUnsigned;ct.toSigned=function(){return this.unsigned?Te(this.low,this.high,!1):this};ct.toUnsigned=function(){return this.unsigned?this:Te(this.low,this.high,!0)};ct.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()};ct.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]};ct.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]};Ne.fromBytes=function(e,t,o){return o?Ne.fromBytesLE(e,t):Ne.fromBytesBE(e,t)};Ne.fromBytesLE=function(e,t){return new Ne(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)};Ne.fromBytesBE=function(e,t){return new Ne(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}});var hv=yo((cc,fv)=>{"use strict";var WP=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},sl=WP();fv.exports=cc=sl.fetch;sl.fetch&&(cc.default=sl.fetch.bind(sl));cc.Headers=sl.Headers;cc.Request=sl.Request;cc.Response=sl.Response});var dv=yo(()=>{"use strict"});var Uv=yo((Wv,Wy)=>{"use strict";(function(r,e,t){function o(a){var l=this,u=i();l.next=function(){var c=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=c-(l.c=c|0)},l.c=1,l.s0=u(" "),l.s1=u(" "),l.s2=u(" "),l.s0-=u(a),l.s0<0&&(l.s0+=1),l.s1-=u(a),l.s1<0&&(l.s1+=1),l.s2-=u(a),l.s2<0&&(l.s2+=1),u=null}function n(a,l){return l.c=a.c,l.s0=a.s0,l.s1=a.s1,l.s2=a.s2,l}function s(a,l){var u=new o(a),c=l&&l.state,p=u.next;return p.int32=function(){return u.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,c&&(typeof c=="object"&&n(c,u),p.state=function(){return n(u,{})}),p}function i(){var a=4022871197,l=function(u){u=String(u);for(var c=0;c<u.length;c++){a+=u.charCodeAt(c);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26};return l}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.alea=s})(Wv,typeof Wy=="object"&&Wy,typeof define=="function"&&define)});var Kv=yo((Hv,Uy)=>{"use strict";(function(r,e,t){function o(i){var a=this,l="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var c=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^c^c>>>8},i===(i|0)?a.x=i:l+=i;for(var u=0;u<l.length+64;u++)a.x^=l.charCodeAt(u)|0,a.next()}function n(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a}function s(i,a){var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(typeof u=="object"&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xor128=s})(Hv,typeof Uy=="object"&&Uy,typeof define=="function"&&define)});var jv=yo((qv,Hy)=>{"use strict";(function(r,e,t){function o(i){var a=this,l="";a.next=function(){var c=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(c^c<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,i===(i|0)?a.x=i:l+=i;for(var u=0;u<l.length+64;u++)a.x^=l.charCodeAt(u)|0,u==l.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function n(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a.v=i.v,a.d=i.d,a}function s(i,a){var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(typeof u=="object"&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xorwow=s})(qv,typeof Hy=="object"&&Hy,typeof define=="function"&&define)});var Yv=yo((Xv,Ky)=>{"use strict";(function(r,e,t){function o(i){var a=this;a.next=function(){var u=a.x,c=a.i,p,m,f;return p=u[c],p^=p>>>7,m=p^p<<24,p=u[c+1&7],m^=p^p>>>10,p=u[c+3&7],m^=p^p>>>3,p=u[c+4&7],m^=p^p<<7,p=u[c+7&7],p=p^p<<13,m^=p^p<<9,u[c]=m,a.i=c+1&7,m};function l(u,c){var p,m,f=[];if(c===(c|0))m=f[0]=c;else for(c=""+c,p=0;p<c.length;++p)f[p&7]=f[p&7]<<15^c.charCodeAt(p)+f[p+1&7]<<13;for(;f.length<8;)f.push(0);for(p=0;p<8&&f[p]===0;++p);for(p==8?m=f[7]=-1:m=f[p],u.x=f,u.i=0,p=256;p>0;--p)u.next()}l(a,i)}function n(i,a){return a.x=i.x.slice(),a.i=i.i,a}function s(i,a){i==null&&(i=+new Date);var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(u.x&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xorshift7=s})(Xv,typeof Ky=="object"&&Ky,typeof define=="function"&&define)});var Jv=yo((Zv,qy)=>{"use strict";(function(r,e,t){function o(i){var a=this;a.next=function(){var u=a.w,c=a.X,p=a.i,m,f;return a.w=u=u+1640531527|0,f=c[p+34&127],m=c[p=p+1&127],f^=f<<13,m^=m<<17,f^=f>>>15,m^=m>>>12,f=c[p]=f^m,a.i=p,f+(u^u>>>16)|0};function l(u,c){var p,m,f,h,g,d=[],x=128;for(c===(c|0)?(m=c,c=null):(c=c+"\0",m=0,x=Math.max(x,c.length)),f=0,h=-32;h<x;++h)c&&(m^=c.charCodeAt((h+32)%c.length)),h===0&&(g=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,h>=0&&(g=g+1640531527|0,p=d[h&127]^=m+g,f=p==0?f+1:0);for(f>=128&&(d[(c&&c.length||0)&127]=-1),f=127,h=4*128;h>0;--h)m=d[f+34&127],p=d[f=f+1&127],m^=m<<13,p^=p<<17,m^=m>>>15,p^=p>>>12,d[f]=m^p;u.w=g,u.X=d,u.i=f}l(a,i)}function n(i,a){return a.i=i.i,a.w=i.w,a.X=i.X.slice(),a}function s(i,a){i==null&&(i=+new Date);var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(u.X&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.xor4096=s})(Zv,typeof qy=="object"&&qy,typeof define=="function"&&define)});var tS=yo((Qv,jy)=>{"use strict";(function(r,e,t){function o(i){var a=this,l="";a.next=function(){var c=a.b,p=a.c,m=a.d,f=a.a;return c=c<<25^c>>>7^p,p=p-m|0,m=m<<24^m>>>8^f,f=f-c|0,a.b=c=c<<20^c>>>12^p,a.c=p=p-m|0,a.d=m<<16^p>>>16^f,a.a=f-c|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,i===Math.floor(i)?(a.a=i/4294967296|0,a.b=i|0):l+=i;for(var u=0;u<l.length+20;u++)a.b^=l.charCodeAt(u)|0,a.next()}function n(i,a){return a.a=i.a,a.b=i.b,a.c=i.c,a.d=i.d,a}function s(i,a){var l=new o(i),u=a&&a.state,c=function(){return(l.next()>>>0)/4294967296};return c.double=function(){do var p=l.next()>>>11,m=(l.next()>>>0)/4294967296,f=(p+m)/(1<<21);while(f===0);return f},c.int32=l.next,c.quick=c,u&&(typeof u=="object"&&n(u,l),c.state=function(){return n(l,{})}),c}e&&e.exports?e.exports=s:t&&t.amd?t(function(){return s}):this.tychei=s})(Qv,typeof jy=="object"&&jy,typeof define=="function"&&define)});var eS=yo(()=>{"use strict"});var oS=yo((rS,rh)=>{"use strict";(function(r,e,t){var o=256,n=6,s=52,i="random",a=t.pow(o,n),l=t.pow(2,s),u=l*2,c=o-1,p;function m(w,C,T){var A=[];C=C==!0?{entropy:!0}:C||{};var $=d(g(C.entropy?[w,y(e)]:w??x(),3),A),_=new f(A),O=function(){for(var z=_.g(n),V=a,G=0;z<l;)z=(z+G)*o,V*=o,G=_.g(1);for(;z>=u;)z/=2,V/=2,G>>>=1;return(z+G)/V};return O.int32=function(){return _.g(4)|0},O.quick=function(){return _.g(4)/4294967296},O.double=O,d(y(_.S),e),(C.pass||T||function(z,V,G,W){return W&&(W.S&&h(W,_),z.state=function(){return h(_,{})}),G?(t[i]=z,V):z})(O,$,"global"in C?C.global:this==t,C.state)}function f(w){var C,T=w.length,A=this,$=0,_=A.i=A.j=0,O=A.S=[];for(T||(w=[T++]);$<o;)O[$]=$++;for($=0;$<o;$++)O[$]=O[_=c&_+w[$%T]+(C=O[$])],O[_]=C;(A.g=function(z){for(var V,G=0,W=A.i,H=A.j,K=A.S;z--;)V=K[W=c&W+1],G=G*o+K[c&(K[W]=K[H=c&H+V])+(K[H]=V)];return A.i=W,A.j=H,G})(o)}function h(w,C){return C.i=w.i,C.j=w.j,C.S=w.S.slice(),C}function g(w,C){var T=[],A=typeof w,$;if(C&&A=="object")for($ in w)try{T.push(g(w[$],C-1))}catch{}return T.length?T:A=="string"?w:w+"\0"}function d(w,C){for(var T=w+"",A,$=0;$<T.length;)C[c&$]=c&(A^=C[c&$]*19)+T.charCodeAt($++);return y(C)}function x(){try{var w;return p&&(w=p.randomBytes)?w=w(o):(w=new Uint8Array(o),(r.crypto||r.msCrypto).getRandomValues(w)),y(w)}catch{var C=r.navigator,T=C&&C.plugins;return[+new Date,r,T,r.screen,y(e)]}}function y(w){return String.fromCharCode.apply(0,w)}if(d(t.random(),e),typeof rh=="object"&&rh.exports){rh.exports=m;try{p=eS()}catch{}}else typeof define=="function"&&define.amd?define(function(){return m}):t["seed"+i]=m})(typeof self<"u"?self:rS,[],Math)});var Zp=yo((Dmt,nS)=>{"use strict";var E3=Uv(),A3=Kv(),$3=jv(),D3=Yv(),R3=Jv(),_3=tS(),ml=oS();ml.alea=E3;ml.xor128=A3;ml.xorwow=$3;ml.xorshift7=D3;ml.xor4096=R3;ml.tychei=_3;nS.exports=ml});var Ra=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},Fn=class{refCount(e){return jr("refCount")}incRef(e){return jr("incRef")}timerAvailable(){return!0}time(e){return jr("time")}read(e){return jr("read")}readSync(e){return jr("readSync")}readToGPU(e,t){return jr("readToGPU")}numDataIds(){return jr("numDataIds")}disposeData(e,t){return jr("disposeData")}write(e,t,o){return jr("write")}move(e,t,o,n,s){return jr("move")}createTensorFromGPUData(e,t,o){return jr("createTensorFromGPUData")}memory(){return jr("memory")}floatPrecision(){return jr("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return jr("dispose")}};function jr(r){throw new Error(`'${r}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function nC(r){let e=r.length,t=0;for(;e>0;)t=Math.random()*e|0,e--,Xm(r,e,t)}function OL(r,e){if(r.length!==e.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${r.length}Second array length was ${e.length}`);let t=r.length,o=0;for(;t>0;)o=Math.random()*t|0,t--,Xm(r,t,o),Xm(e,t,o)}function Ul(r,e,t){return Math.max(r,Math.min(e,t))}function LL(r){return r%2===0?r:r+1}function Xm(r,e,t){let o=r[e];r[e]=r[t],r[t]=o}function PL(r){let e=0;for(let t=0;t<r.length;t++)e+=r[t];return e}function zL(r,e){let t=Math.random();return e*t+(1-t)*r}function ML(r,e){let t=0;for(let o=0;o<r.length;o++){let n=Number(r[o])-Number(e[o]);t+=n*n}return t}function E(r,e){if(!r)throw new Error(typeof e=="string"?e:e())}function Ee(r,e,t=""){E(Xr(r,e),()=>t+` Shapes ${r} and ${e} must match`)}function co(r){E(r!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Ot(r){if(r.length===0)return 1;let e=r[0];for(let t=1;t<r.length;t++)e*=r[t];return e}function BL(r){return r.length===0}function oy(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==null&&e[t]!==null&&r[t]!==e[t])return!1;return!0}function Xr(r,e){if(r===e)return!0;if(r==null||e==null||r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0}function On(r){return r%1===0}function VL(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;{let e=Math.exp(2*r);return(e-1)/(e+1)}}function GL(r){let e=Math.ceil(Math.sqrt(r));return[e,Math.ceil(r/e)]}function WL(r){let e=new Uint32Array(r);for(let t=0;t<r;++t)e[t]=t;return nC(e),e}function Fa(r,e){return e<=r.length?r:r+" ".repeat(e-r.length)}function UL(r,e=n=>0,t,o){return new Promise((n,s)=>{let i=0,a=()=>{if(r()){n();return}i++;let l=e(i);if(t!=null&&i>=t){s();return}o!=null?o(a,l):setTimeout(a,l)};a()})}function HL(r,e){let t=1,o=-1;for(let s=0;s<r.length;++s)if(r[s]>=0)t*=r[s];else if(r[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(r[s]<0)throw Error(`Shapes can not be < 0. Found ${r[s]} at dim ${s}`);if(o===-1){if(e>0&&e!==t)throw Error(`Size(${e}) must match the product of shape ${r}`);return r}if(t===0)throw Error(`Cannot infer the missing size in [${r}] when there are 0 elements`);if(e%t!==0)throw Error(`The implicit shape can't be a fractional number. Got ${e} / ${t}`);let n=r.slice();return n[o]=e/t,n}function Be(r,e){let t=e.length;return r=r==null?e.map((o,n)=>n):[].concat(r),E(r.every(o=>o>=-t&&o<t),()=>`All values in axis param must be in range [-${t}, ${t}) but got axis ${r}`),E(r.every(o=>On(o)),()=>`All values in axis param must be integers but got axis ${r}`),r.map(o=>o<0?t+o:o)}function ny(r,e){let t=[],o=[],n=e!=null&&Array.isArray(e)&&e.length===0,s=e==null||n?null:Be(e,r).sort(),i=0;for(let a=0;a<r.length;++a){if(s!=null){if(s[i]===a&&r[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${r[a]}' is not 1`);(s[i]==null||s[i]>a)&&r[a]===1&&(t.push(r[a]),o.push(a)),s[i]<=a&&i++}r[a]!==1&&(t.push(r[a]),o.push(a))}return{newShape:t,keptDims:o}}function sy(r,e){return Ym(r,e)}function Ym(r,e){let t=null;if(r==null||r==="float32")t=new Float32Array(e);else if(r==="int32")t=new Int32Array(e);else if(r==="bool")t=new Uint8Array(e);else if(r==="string")t=new Array(e);else throw new Error(`Unknown data type ${r}`);return t}function iy(r,e){for(let t=0;t<r.length;t++){let o=r[t];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${e} being uploaded contains ${o}.`)}}function ay(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function KL(r,e){return!(e==="complex64"||e==="float32"&&r!=="complex64"||e==="int32"&&r!=="float32"&&r!=="complex64"||e==="bool"&&r==="bool")}function Hl(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error(`Unknown dtype ${r}`)}function ly(r){if(r==null)return 0;let e=0;return r.forEach(t=>e+=t.length),e}function Kl(r){return typeof r=="string"||r instanceof String}function sC(r){return typeof r=="boolean"}function iC(r){return typeof r=="number"}function ti(r){return Array.isArray(r)?ti(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray?"int32":iC(r)?"float32":Kl(r)?"string":sC(r)?"bool":"float32"}function ql(r){return!!(r&&r.constructor&&r.call&&r.apply)}function jl(r,e){for(let t=e;t<r;++t)if(r%t===0)return t;return r}function ln(r){let e=r.length;if(e<2)return[];let t=new Array(e-1);t[e-2]=r[e-1];for(let o=e-3;o>=0;--o)t[o]=t[o+1]*r[o+1];return t}function aC(r,e,t,o=!1){let n=new Array;if(e.length===1){let s=e[0]*(o?2:1);for(let i=0;i<s;i++)n[i]=t[r+i]}else{let s=e[0],i=e.slice(1),a=i.reduce((l,u)=>l*u)*(o?2:1);for(let l=0;l<s;l++)n[l]=aC(r+l*a,i,t,o)}return n}function _a(r,e,t=!1){if(r.length===0)return e[0];let o=r.reduce((n,s)=>n*s)*(t?2:1);if(o===0)return[];if(o!==e.length)throw new Error(`[${r}] does not match the input size ${e.length}${t?" for a complex tensor":""}.`);return aC(0,r,e,t)}function qL(r,e){if(Array.isArray(r))return r;if(e==="float32")return r instanceof Float32Array?r:new Float32Array(r);if(e==="int32")return r instanceof Int32Array?r:new Int32Array(r);if(e==="bool"||e==="string")return Uint8Array.from(new Int32Array(r));throw new Error(`Unknown dtype ${e}`)}function Rp(r,e){let t=Xl(r,e);for(let o=0;o<t.length;o++)t[o]=1;return t}function Xl(r,e){if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool")return new Uint8Array(r);throw new Error(`Unknown data type ${e}`)}function jL(r,e){let t=r.reduce((o,n)=>o*n,1);if(e==null||e==="float32")return _a(r,new Float32Array(t));if(e==="int32")return _a(r,new Int32Array(t));if(e==="bool")return _a(r,new Uint8Array(t));throw new Error(`Unknown data type ${e}`)}function de(r){r.forEach(e=>{E(Number.isInteger(e)&&e>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${r}].`)})}function XL(r,e,t){if(e===0)return 0;if(e===1)return r[0];let o=r[r.length-1];for(let n=0;n<r.length-1;++n)o+=t[n]*r[n];return o}function YL(r,e,t){if(e===0)return[];if(e===1)return[r];let o=new Array(e);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(r/t[n]),r-=o[n]*t[n];return o[o.length-1]=r,o}function Oa(r){return r&&r.then&&typeof r.then=="function"}var lC="tfjsflags",_p=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=JL,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(L().getBool("IS_TEST")||L().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,o){if(this.flagRegistry[e]={evaluationFn:t,setHook:o},this.urlFlags[e]!=null){let n=this.urlFlags[e];L().getBool("IS_TEST")||L().getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${n}.`),this.set(e,n)}}getAsync(e){return B(this,null,function*(){return e in this.flags?this.flags[e]:(this.flags[e]=yield this.evaluateFlag(e),this.flags[e])})}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(Oa(t))throw new Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw new Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw new Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let e=this.getQueryParams(this.global.location.search);lC in e&&e[lC].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=tP(n,s)})}};function JL(r){let e={};return r.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(t,...o)=>(QL(e,o[0],o[1]),o.join("="))),e}function QL(r,e,t){r[decodeURIComponent(e)]=decodeURIComponent(t||"")}function tP(r,e){let t=e.toLowerCase();return t==="true"||t==="false"?t==="true":`${+t}`===t?+t:e}function L(){return uy}var uy=null;function uC(r){uy=r}var cy;function py(){if(cy==null){let r;if(typeof window<"u")r=window;else if(typeof global<"u")r=global;else if(typeof process<"u")r=process;else if(typeof self<"u")r=self;else throw new Error("Could not find a global object");cy=r}return cy}function eP(){let r=py();return r._tfGlobals==null&&(r._tfGlobals=new Map),r._tfGlobals}function Fp(r,e){let t=eP();if(t.has(r))return t.get(r);{let o=e();return t.set(r,o),t.get(r)}}var ei="Abs",Ln="Acos",Pn="Acosh",Bo="Add",ri="AddN",Yl="All",Zl="Any",oi="ArgMax",ni="ArgMin",zn="Asin",Mn="Asinh",Bn="Atan",Vn="Atanh",Gn="Atan2",si="AvgPool",Jl="AvgPoolGrad",ii="AvgPool3D",Ql="AvgPool3DGrad",ai="BatchMatMul",li="BatchToSpaceND",tu="Bincount",La="BitwiseAnd",cC="BroadcastTo",eu="BroadcastArgs",un="Cast",Wn="Ceil",Un="ClipByValue",ru="Complex",ui="ComplexAbs",ci="Concat",pi="Conv2D",ou="Conv2DBackpropFilter",mi="Conv2DBackpropInput",fi="Conv3D",nu="Conv3DBackpropFilterV2",su="Conv3DBackpropInputV2",Hn="Cos",Kn="Cosh",iu="Cumprod",hi="Cumsum",au="CropAndResize",lu="DenseBincount",uu="DepthToSpace",di="DepthwiseConv2dNative",cu="DepthwiseConv2dNativeBackpropFilter",pu="DepthwiseConv2dNativeBackpropInput",mu="Diag",gi="Dilation2D",Op="Dilation2DBackpropInput",Lp="Dilation2DBackpropFilter",Pp="Draw",qn="RealDiv",fu="Einsum",jn="Elu",hu="EluGrad",Xn="Erf",Pa="Equal",Yn="Exp",xi="ExpandDims",Zn="Expm1",du="FFT",gu="Fill",xu="FlipLeftRight",Jn="Floor",Qn="FloorDiv",yi="FusedBatchNorm",bi="GatherV2",yu="GatherNd",za="Greater",ts="GreaterEqual",cn="Identity",bu="IFFT",wu="Imag",es="IsFinite",rs="IsInf",os="IsNan",wi="LeakyRelu",Ma="Less",Ba="LessEqual",Cu="LinSpace",ns="Log",ss="Log1p",Va="LogicalAnd",Ga="LogicalNot",Wa="LogicalOr";var pC="LogSoftmax";var Ci="LRN",vu="LRNGrad";var vi="Max",is="Maximum",Si="MaxPool",Su="MaxPoolGrad",Ni="MaxPool3D",Nu="MaxPool3DGrad",Tu="MaxPoolWithArgmax",Ti="Mean",Ii="Min",as="Minimum",ki="MirrorPad",ls="Mod",Iu="Multinomial",us="Multiply",Ei="Neg",Ua="NotEqual",ku="NonMaxSuppressionV3",Eu="NonMaxSuppressionV4",Au="NonMaxSuppressionV5",Ai="OnesLike",$i="OneHot",Di="Pack",Ri="PadV2";var cs="Pow",_i="Prelu",Fi="Prod",$u="RaggedGather",Du="RaggedRange",Ru="RaggedTensorToTensor",_u="Range",Fu="Real",ps="Reciprocal",ms="Relu",Oi="Reshape",Li="ResizeNearestNeighbor",Ou="ResizeNearestNeighborGrad",Pi="ResizeBilinear",Lu="ResizeBilinearGrad",fs="Relu6",zi="Reverse",hs="Round",ds="Rsqrt",Pu="ScatterNd",zu="TensorScatterUpdate",Mu="SearchSorted",Mi="Select",gs="Selu",Bi="Slice",xs="Sin",ys="Sinh",bs="Sign",ws="Sigmoid",Cs="Softplus",vs="Sqrt",Vi="Sum",Gi="SpaceToBatchND",Wi="SplitV",Ui="Softmax",Bu="SparseFillEmptyRows",Vu="SparseReshape",Gu="SparseSegmentMean",Wu="SparseSegmentSum",Uu="SparseToDense",Ss="SquaredDifference",Hu="Square",Ha="StaticRegexReplace",Ku="StridedSlice",qu="StringNGrams",ju="StringSplit",Xu="StringToHashBucketFast",Ns="Sub",Ts="Tan",Is="Tanh",pn="Tile",Yu="TopK",Zu="Transform",mn="Transpose",Ju="Unique",Hi="Unpack",Ki="UnsortedSegmentSum";var qi="ZerosLike",ks="Step",zp="FromPixels",Qu="RotateWithOffset",Ka="_FusedMatMul",qa="FusedConv2D",ja="FusedDepthwiseConv2D";function fn(...r){L().getBool("IS_TEST")||L().getBool("PROD")||console.warn(...r)}function rP(...r){L().getBool("IS_TEST")||L().getBool("PROD")||console.log(...r)}var Zm=Fp("kernelRegistry",()=>new Map),my=Fp("gradRegistry",()=>new Map);function tc(r,e){let t=hC(r,e);return Zm.get(t)}function fy(r){return my.get(r)}function hy(r){let e=Zm.entries(),t=[];for(;;){let{done:o,value:n}=e.next();if(o)break;let[s,i]=n,[a]=s.split("_");a===r&&t.push(i)}return t}function Jm(r){let{kernelName:e,backendName:t}=r,o=hC(e,t);Zm.has(o)&&fn(`The kernel '${e}' for backend '${t}' is already registered`),Zm.set(o,r)}function fC(r){let{kernelName:e}=r;my.has(e)&&L().getBool("DEBUG")&&fn(`Overriding the gradient for '${e}'`),my.set(e,r)}function hC(r,e){return`${e}_${r}`}var b={};Zt(b,{arraysEqual:()=>Xr,arraysEqualWithNull:()=>oy,assert:()=>E,assertNonNegativeIntegerDimensions:()=>de,assertNonNull:()=>co,assertShapesMatch:()=>Ee,bytesFromStringArray:()=>ly,bytesPerElement:()=>Hl,checkConversionForErrors:()=>iy,clamp:()=>Ul,computeStrides:()=>ln,convertBackendValuesAndArrayBuffer:()=>qL,createScalarValue:()=>uP,createShuffledIndices:()=>WL,decodeString:()=>sc,distSquared:()=>ML,encodeString:()=>nc,fetch:()=>pP,fingerPrint64:()=>lP,flatten:()=>Xi,getArrayFromDType:()=>Ym,getTypedArrayFromDType:()=>sy,hasEncodingLoss:()=>KL,hexToLong:()=>Mp,indexToLoc:()=>YL,inferDtype:()=>ti,inferFromImplicitShape:()=>HL,isBoolean:()=>sC,isFunction:()=>ql,isInt:()=>On,isNumber:()=>iC,isPromise:()=>Oa,isScalarShape:()=>BL,isString:()=>Kl,isTypedArray:()=>br,isValidDtype:()=>ay,locToIndex:()=>XL,makeOnesTypedArray:()=>Rp,makeZerosNestedTypedArray:()=>jL,makeZerosTypedArray:()=>Xl,nearestDivisor:()=>jl,nearestLargerEven:()=>LL,now:()=>Qa,parseAxisParam:()=>Be,randUniform:()=>zL,repeatedTry:()=>UL,rightPad:()=>Fa,shuffle:()=>nC,shuffleCombo:()=>OL,sizeFromShape:()=>Ot,sizeToSquarishShape:()=>GL,squeezeShape:()=>ny,sum:()=>PL,swap:()=>Xm,tanh:()=>VL,toNestedArray:()=>_a,toTypedArray:()=>oc});function Qm(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray}var yy=Dp(TC());var Ja=yy.default||yy;function Mp(r){return Ja.fromString(r,!0,16)}var kC=Mp("c3a5c85c97cb3127"),Za=Mp("b492b66fbe98f273"),Tr=Mp("9ae16a3b2f90404f");function xy(r){return r.xor(r.shru(47))}function EC(r,e,t){let o=r.slice(e,e+t);return Ja.fromBytes(Array.from(o),!0,!0)}function ge(r,e){return EC(r,e,8)}function IC(r,e){return EC(r,e,4)}function or(r,e){return e===0?r:r.shru(e).or(r.shl(64-e))}function ji(r,e,t=Mp("9ddfea08eb382d69")){let o=r.xor(e).mul(t);o=o.xor(o.shru(47));let n=e.xor(o).mul(t);return n=n.xor(n.shru(47)),n=n.mul(t),n}function nP(r,e,t,o,n,s){n=n.add(r),s=or(s.add(n).add(o),21);let i=n;return n=n.add(e),n=n.add(t),s=s.add(or(n,44)),[n.add(o),s.add(i)]}function ef(r,e,t,o){return nP(ge(r,e),ge(r,e+8),ge(r,e+16),ge(r,e+24),t,o)}function sP(r,e=r.length){if(e>=8){let t=Tr.add(e*2),o=ge(r,0).add(Tr),n=ge(r,e-8),s=or(n,37).mul(t).add(o),i=or(o,25).add(n).mul(t);return ji(s,i,t)}if(e>=4){let t=Tr.add(e*2),o=IC(r,0);return ji(o.shl(3).add(e),IC(r,e-4),t)}if(e>0){let t=r[0],o=r[e>>1],n=r[e-1],s=t+(o<<8),i=e+(n<<2);return xy(Tr.mul(s).xor(kC.mul(i))).mul(Tr)}return Tr}function iP(r,e=r.length){let t=Tr.add(e*2),o=ge(r,0).mul(Za),n=ge(r,8),s=ge(r,e-8).mul(t),i=ge(r,e-16).mul(Tr);return ji(or(o.add(n),43).add(or(s,30)).add(i),o.add(or(n.add(Tr),18)).add(s),t)}function aP(r,e=r.length){let t=Tr.add(e*2),o=ge(r,0).mul(Tr),n=ge(r,8),s=ge(r,e-8).mul(t),i=ge(r,e-16).mul(Tr),a=or(o.add(n),43).add(or(s,30)).add(i),l=ji(a,o.add(or(n.add(Tr),18)).add(s),t),u=ge(r,16).mul(t),c=ge(r,24),p=a.add(ge(r,e-32)).mul(t),m=l.add(ge(r,e-24)).mul(t);return ji(or(u.add(c),43).add(or(p,30)).add(m),u.add(or(c.add(o),18)).add(p),t)}function lP(r,e=r.length){let t=Ja.fromNumber(81,!0);if(e<=32)return e<=16?sP(r,e):iP(r,e);if(e<=64)return aP(r,e);let o=t,n=t.mul(Za).add(113),s=xy(n.mul(Tr).add(113)).mul(Tr),i=[Ja.UZERO,Ja.UZERO],a=[Ja.UZERO,Ja.UZERO];o=o.mul(Tr).add(ge(r,0));let l=0,u=(e-1>>6)*64,c=u+(e-1&63)-63;do o=or(o.add(n).add(i[0]).add(ge(r,l+8)),37).mul(Za),n=or(n.add(i[1]).add(ge(r,l+48)),42).mul(Za),o=o.xor(a[1]),n=n.add(i[0]).add(ge(r,l+40)),s=or(s.add(a[0]),33).mul(Za),i=ef(r,l,i[1].mul(Za),o.add(a[0])),a=ef(r,l+32,s.add(a[1]),n.add(ge(r,l+16))),[s,o]=[o,s],l+=64;while(l!==u);let p=Za.add(s.and(255).shl(1));return l=c,a[0]=a[0].add(e-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),o=or(o.add(n).add(i[0]).add(ge(r,l+8)),37).mul(p),n=or(n.add(i[1]).add(ge(r,l+48)),42).mul(p),o=o.xor(a[1].mul(9)),n=n.add(i[0].mul(9).add(ge(r,l+40))),s=or(s.add(a[0]),33).mul(p),i=ef(r,l,i[1].mul(p),o.add(a[0])),a=ef(r,l+32,s.add(a[1]),n.add(ge(r,l+16))),[s,o]=[o,s],ji(ji(i[0],a[0],p).add(xy(n).mul(kC)).add(s),ji(i[1],a[1],p).add(o),p)}function uP(r,e){return e==="string"?nc(r):oc([r],e)}function cP(r,e){return r instanceof Float32Array&&e==="float32"||r instanceof Int32Array&&e==="int32"||r instanceof Uint8Array&&e==="bool"}function oc(r,e){if(e==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Xi(r)),L().getBool("DEBUG")&&iy(r,e),cP(r,e))return r;if(e==null||e==="float32"||e==="complex64")return new Float32Array(r);if(e==="int32")return new Int32Array(r);if(e==="bool"){let t=new Uint8Array(r.length);for(let o=0;o<t.length;++o)Math.round(r[o])!==0&&(t[o]=1);return t}else throw new Error(`Unknown data type ${e}`)}function Qa(){return L().platform.now()}function pP(r,e){return L().platform.fetch(r,e)}function nc(r,e="utf-8"){return e=e||"utf-8",L().platform.encode(r,e)}function sc(r,e="utf-8"){return e=e||"utf-8",L().platform.decode(r,e)}function br(r){return L().platform.isTypedArray!=null?L().platform.isTypedArray(r):Qm(r)}function Xi(r,e=[],t=!1){if(e==null&&(e=[]),typeof r=="boolean"||typeof r=="number"||typeof r=="string"||Oa(r)||r==null||br(r)&&t)e.push(r);else if(Array.isArray(r)||br(r))for(let o=0;o<r.length;++o)Xi(r[o],e,t);else{let o=-1;for(let n of Object.keys(r))/^([1-9]+[0-9]*|0)$/.test(n)&&(o=Math.max(o,Number(n)));for(let n=0;n<=o;n++)Xi(r[n],e,t)}return e}var rf=class{constructor(e,t){this.backendTimer=e,this.logger=t,t==null&&(this.logger=new by)}profileKernel(e,t,o){let n,s=()=>{n=o()},i,a=Qa();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let u of n)u.dataSync();i=Promise.resolve({kernelMs:Qa()-a})}if(L().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<n.length;u++){let c=n[u];c.data().then(p=>{mP(p,c.dtype,e)})}return{kernelName:e,outputs:n,inputs:t,timeMs:i.then(u=>u.kernelMs),extraInfo:i.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(e){let{kernelName:t,outputs:o,timeMs:n,inputs:s,extraInfo:i}=e;o.forEach(a=>{Promise.all([a.data(),n,i]).then(l=>{this.logger.logKernelProfile(t,a,l[0],l[1],s,l[2])})})}};function mP(r,e,t){if(e!=="float32")return!1;for(let o=0;o<r.length;o++){let n=r[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${t}'`),!0}return!1}var by=class{logKernelProfile(e,t,o,n,s,i){let a=typeof n=="number"?Fa(`${n}ms`,9):n.error,l=Fa(e,25),u=t.rank,c=t.size,p=Fa(t.shape.toString(),14),m="";for(let f in s){let h=s[f];if(h!=null){let g=h.shape||t.shape,d=g.length;m+=`${f}: ${d}D ${d>0?g:""} `}}console.log(`%c${l}	%c${a}	%c${u}D ${p}	%c${c}	%c${m}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function AC(r,e,t){let o={},n={};for(let l=0;l<e.length;l++)o[e[l].id]=!0;for(let l=0;l<r.length;l++){let u=r[l],c=u.inputs;for(let p in c){let m=c[p],f=!1;for(let h=0;h<e.length;h++)if(o[m.id]){u.outputs.forEach(g=>o[g.id]=!0),f=!0,n[u.id]=!0;break}if(f)break}}let s={};s[t.id]=!0;let i={};for(let l=r.length-1;l>=0;l--){let u=r[l],c=u.inputs;for(let p=0;p<u.outputs.length;p++)if(s[u.outputs[p].id]){for(let m in c)s[c[m].id]=!0,i[u.id]=!0;break}}let a=[];for(let l=0;l<r.length;l++){let u=r[l];if(n[u.id]&&i[u.id]){let c={};for(let m in u.inputs){let f=u.inputs[m];o[f.id]&&(c[m]=f)}let p=Object.assign({},u);p.inputs=c,p.outputs=u.outputs,a.push(p)}}return a}function $C(r,e,t,o){for(let n=e.length-1;n>=0;n--){let s=e[n],i=[];if(s.outputs.forEach(l=>{let u=r[l.id];u!=null?i.push(u):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let l in s.inputs){if(!(l in a))throw new Error(`Cannot backprop through input ${l}. Available gradients found: ${Object.keys(a)}.`);let u=t(()=>a[l]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${l} must have 'float32' dtype, but has '${u.dtype}'`);let c=s.inputs[l];if(!Xr(u.shape,c.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${l}' has shape '${u.shape}', which does not match the shape of the input '${c.shape}'`);if(r[c.id]==null)r[c.id]=u;else{let p=r[c.id];r[c.id]=o(p,u),p.dispose()}}}}var DC=20,Bp=3,wy=7;function RC(r,e,t,o){let n=ln(e),s=fP(r,e,t,n),i=e.length,a=of(r,e,t,n,s),l=["Tensor"];return o&&(l.push(`  dtype: ${t}`),l.push(`  rank: ${i}`),l.push(`  shape: [${e}]`),l.push("  values:")),l.push(a.map(u=>"    "+u).join(`
`)),l.join(`
`)}function fP(r,e,t,o){let n=Ot(e),s=o[o.length-1],i=new Array(s).fill(0),a=e.length,l=t==="complex64"?Gp(r):r;if(a>1)for(let u=0;u<n/s;u++){let c=u*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],Vp(l[c+p],0,t).length)}return i}function Vp(r,e,t){let o;return Array.isArray(r)?o=`${parseFloat(r[0].toFixed(wy))} + ${parseFloat(r[1].toFixed(wy))}j`:Kl(r)?o=`'${r}'`:t==="bool"?o=_C(r):o=parseFloat(r.toFixed(wy)).toString(),Fa(o,e)}function _C(r){return r===0?"false":"true"}function of(r,e,t,o,n,s=!0){let i=t==="complex64"?2:1,a=e[0],l=e.length;if(l===0){if(t==="complex64"){let g=Gp(r);return[Vp(g[0],0,t)]}return t==="bool"?[_C(r[0])]:[r[0].toString()]}if(l===1){if(a>DC){let d=Bp*i,x=Array.from(r.slice(0,d)),y=Array.from(r.slice((a-Bp)*i,a*i));return t==="complex64"&&(x=Gp(x),y=Gp(y)),["["+x.map((w,C)=>Vp(w,n[C],t)).join(", ")+", ..., "+y.map((w,C)=>Vp(w,n[a-Bp+C],t)).join(", ")+"]"]}return["["+(t==="complex64"?Gp(r):Array.from(r)).map((d,x)=>Vp(d,n[x],t)).join(", ")+"]"]}let u=e.slice(1),c=o.slice(1),p=o[0]*i,m=[];if(a>DC){for(let g=0;g<Bp;g++){let d=g*p,x=d+p;m.push(...of(r.slice(d,x),u,t,c,n,!1))}m.push("...");for(let g=a-Bp;g<a;g++){let d=g*p,x=d+p;m.push(...of(r.slice(d,x),u,t,c,n,g===a-1))}}else for(let g=0;g<a;g++){let d=g*p,x=d+p;m.push(...of(r.slice(d,x),u,t,c,n,g===a-1))}let f=l===2?",":"";m[0]="["+(a>0?m[0]+f:"");for(let g=1;g<m.length-1;g++)m[g]=" "+m[g]+f;let h=`,
`;for(let g=2;g<l;g++)h+=`
`;return m[m.length-1]=" "+m[m.length-1]+"]"+(s?"":h),m}function Gp(r){let e=[];for(let t=0;t<r.length;t+=2)e.push([r[t],r[t+1]]);return e}var Ut=class{constructor(e,t,o){if(this.dtype=t,this.shape=e.slice(),this.size=Ot(e),o!=null){let n=o.length;E(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(t==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||Ym(t,this.size),this.strides=ln(e)}set(e,...t){t.length===0&&(t=[0]),E(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let o=this.locToIndex(t);this.values[o]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let s=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw new Error(s)}t++}let o=e[e.length-1];for(let n=0;n<e.length-1;++n)o+=this.strides[n]*e[n];return this.values[o]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let o=0;o<e.length-1;++o)t+=this.strides[o]*e[o];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=new Array(this.shape.length);for(let o=0;o<t.length-1;++o)t[o]=Math.floor(e/this.strides[o]),e-=t[o]*this.strides[o];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return Go().makeTensor(this.values,this.shape,this.dtype)}},Go=null,ic=null,hP=null;function FC(r){Go=r}function OC(r){ic=r}function LC(r){hP=r}var Ft=class{constructor(e,t,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=Ot(e),this.strides=ln(e),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}buffer(){return B(this,null,function*(){let e=yield this.data();return ic.buffer(this.shape,this.dtype,e)})}bufferSync(){return ic.buffer(this.shape,this.dtype,this.dataSync())}array(){return B(this,null,function*(){let e=yield this.data();return _a(this.shape,e,this.dtype==="complex64")})}arraySync(){return _a(this.shape,this.dataSync(),this.dtype==="complex64")}data(){return B(this,null,function*(){this.throwIfDisposed();let e=Go().read(this.dataId);if(this.dtype==="string"){let t=yield e;try{return t.map(o=>sc(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e})}dataToGPU(e){return this.throwIfDisposed(),Go().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=Go().readSync(this.dataId);if(this.dtype==="string")try{return e.map(t=>sc(t))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}bytes(){return B(this,null,function*(){this.throwIfDisposed();let e=yield Go().read(this.dataId);return this.dtype==="string"?e:new Uint8Array(e.buffer)})}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Go().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(e=!1){return ic.print(this,e)}clone(){return this.throwIfDisposed(),ic.clone(this)}toString(e=!1){let t=this.dataSync();return RC(t,this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ic.cast(this,e)}variable(e=!0,t,o){return this.throwIfDisposed(),Go().makeVariable(this,e,t,o)}};Object.defineProperty(Ft,Symbol.hasInstance,{value:r=>!!r&&r.data!=null&&r.dataSync!=null&&r.throwIfDisposed!=null});function F(){return Fp("Tensor",()=>Ft)}F();var Es=class extends Ft{constructor(e,t,o,n){super(e.shape,e.dtype,e.dataId,n),this.trainable=t,this.name=o}assign(e){if(e.dtype!==this.dtype)throw new Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!Xr(e.shape,this.shape))throw new Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);Go().disposeTensor(this),this.dataId=e.dataId,Go().incRef(this,null)}dispose(){Go().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Es,Symbol.hasInstance,{value:r=>r instanceof Ft&&r.assign!=null&&r.assign instanceof Function});var PC=function(r){return r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64",r}(PC||{}),zC=function(r){return r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64",r}(zC||{}),MC=function(r){return r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64",r}(MC||{}),BC=function(r){return r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64",r}(BC||{}),dP={float32:MC,int32:PC,bool:zC,complex64:BC};function Le(r,e){if(r==="string"||e==="string"){if(r==="string"&&e==="string")return"string";throw new Error(`Can not upcast ${r} with ${e}`)}return dP[r][e]}function tl(r){return Le(r,"int32")}function nf(r){return r!=null&&typeof r=="object"&&"texture"in r&&r.texture instanceof WebGLTexture}function sf(r){return typeof GPUBuffer<"u"&&r!=null&&typeof r=="object"&&"buffer"in r&&r.buffer instanceof GPUBuffer}function Lt(r,e){if(r.dtype===e.dtype)return[r,e];let t=Le(r.dtype,e.dtype);return[r.cast(t),e.cast(t)]}function VC(r,e){E(r.dtype===e.dtype,()=>`The dtypes of the first(${r.dtype}) and second(${e.dtype}) input must match`)}function af(r){let e=[];return GC(r,e,new Set),e}function GC(r,e,t){if(r==null)return;if(r instanceof Ft){e.push(r);return}if(!gP(r))return;let o=r;for(let n in o){let s=o[n];t.has(s)||(t.add(s),GC(s,e,t))}}function gP(r){return Array.isArray(r)||typeof r=="object"}function Cy(r){return r.kernelName!=null}var lf=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},yP=(()=>{class r{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new lf}ready(){return B(this,null,function*(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let o=0;o<t.length;o++){let n=t[o];if(yield this.initializeBackend(n).success){yield this.setBackend(n);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")})}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:o}=this.initializeBackendsAndReturnBest();if(o)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:o}=this.initializeBackend(t);if(o)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,o,n=1){return t in this.registryFactory?(fn(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:o,priority:n},!0)}setBackend(t){return B(this,null,function*(){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:o,asyncInit:n}=this.initializeBackend(t);if(!(n?yield o:o))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new rf(this.backendInstance),!0})}setupRegisteredKernels(){hy(this.backendName).forEach(o=>{o.setupFunc!=null&&o.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){hy(t).forEach(n=>{n.disposeFunc!=null&&n.disposeFunc(this.registry[t])})}initializeBackend(t){let o=this.registryFactory[t];if(o==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let n=o.factory();if(n&&!(n instanceof Fn)&&typeof n.then=="function"){let s=++this.pendingBackendInitId,i=n.then(a=>s<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(s<this.pendingBackendInitId||(this.pendingBackendInit=null,fn(`Initialization of backend ${t} failed`),fn(a.stack||a.message)),!1));return this.pendingBackendInit=i,{success:i,asyncInit:!0}}else return this.registry[t]=n,{success:!0,asyncInit:!1}}catch(n){return fn(`Initialization of backend ${t} failed`),fn(n.stack||n.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,o)=>this.registryFactory[o].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let o=0;o<t.length;o++){let n=t[o],{success:s,asyncInit:i}=this.initializeBackend(n);if(i||s)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,o){let n=this.state.tensorInfo.get(o),s=n.backend,i=this.readSync(o),a=s.refCount(o);s.disposeData(o,!0),n.backend=t,t.move(o,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,o){let n=null;if(o==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");o=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof o!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");n=t}let s;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(s),()=>(s=o(),s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),s))}scopedRun(t,o,n){t();try{let s=n();return o(),s}catch(s){throw o(),s}}nextTensorId(){return r.nextTensorId++}nextVariableId(){return r.nextVariableId++}clone(t){let o=k.runKernel(cn,{x:t}),n={x:t},s=a=>({x:()=>{let l="float32",u={x:a},c={dtype:l};return k.runKernel(un,u,c)}}),i=[];return this.addTapeNode(this.state.activeScope.name,n,[o],s,i,{}),o}runKernel(t,o,n){if(this.backendName==null&&this.backend,!(tc(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:o,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,o,n){let s=this.backend.numDataIds(),i=0;n.forEach(u=>{i+=u.dtype==="complex64"?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],l=s-o-i-a;if(l>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${l} data ids) after running '${t}'`)}runKernelFunc(t){let o,n=[],s=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let l;this.backendName==null&&this.backend;let u,c=Cy(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Cy(t)){let{kernelName:g,inputs:d,attrs:x}=t;this.backendName==null&&this.backend;let y=tc(g,this.backendName);E(y!=null,()=>`Cannot find registered kernel '${g}' for backend '${this.backendName}'`),l=()=>{let w=this.backend.numDataIds();u=y.kernelFunc({inputs:d,attrs:x,backend:this.backend});let C=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(g,w,C);let T=C.map(A=>A.rank!=null?A:this.makeTensorFromTensorInfo(A));if(s){let A=this.getTensorsForGradient(g,d,T);n=this.saveTensorsForBackwardMode(A)}return T}}else{let{forwardFunc:g}=t,d=x=>{s&&(n=x.map(y=>this.keep(this.clone(y))))};l=()=>{let x=this.backend.numDataIds();u=this.tidy(()=>g(this.backend,d));let y=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,x,y),y}}let{inputs:p,attrs:m}=t,f=Cy(t)?null:t.backwardsFunc,h;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?o=l():(h=this.profiler.profileKernel(c,p,()=>l()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(h),o=h.outputs)}),s&&this.addTapeNode(c,p,o,f,n,m),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(g=>p[g]!=null?p[g].shape:null),outputShapes:o.map(g=>g.shape),kernelTimeMs:h.timeMs,extraInfo:h.extraInfo}),Array.isArray(u)?o:o[0]}saveTensorsForBackwardMode(t){return t.map(n=>this.keep(this.clone(n)))}getTensorsForGradient(t,o,n){let s=fy(t);if(s!=null){let i=s.inputsToSave||[],a=s.outputsToSave||[],l;s.saveAllInputs?(E(Array.isArray(o),()=>"saveAllInputs is true, expected inputs to be an array."),l=Object.keys(o).map(c=>o[c])):l=i.map(c=>o[c]);let u=n.filter((c,p)=>a[p]);return l.concat(u)}return[]}makeTensor(t,o,n,s){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",s=s||this.backend;let i=t;n==="string"&&Kl(t[0])&&(i=t.map(u=>nc(u)));let a=s.write(i,o,n),l=new Ft(o,n,a,this.nextTensorId());if(this.trackTensor(l,s),n==="string"){let u=this.state.tensorInfo.get(a),c=ly(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return l}makeTensorFromDataId(t,o,n,s){n=n||"float32";let i={dataId:t,shape:o,dtype:n};return this.makeTensorFromTensorInfo(i,s)}makeTensorFromTensorInfo(t,o){let{dataId:n,shape:s,dtype:i}=t,a=new Ft(s,i,n,this.nextTensorId());return this.trackTensor(a,o),a}makeVariable(t,o=!0,n,s){n=n||this.nextVariableId().toString(),s!=null&&s!==t.dtype&&(t=t.cast(s));let i=new Es(t,o,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(t,o){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let n=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(n=t.size*Hl(t.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:o||this.backend,dtype:t.dtype,shape:t.shape,bytes:n})),t instanceof Es||this.track(t)}incRef(t,o){this.trackTensor(t,o),this.backend.incRef(t.dataId)}removeDataId(t,o){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===o&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let o=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=o.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let n=t.size*Hl(t.dtype);this.state.numBytes-=n}o.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,o.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let o=this.state.registeredVariables[t];this.disposeVariable(o)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}profile(t){return B(this,null,function*(){this.state.profiling=!0;let o=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=yield t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(s=>s.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-o,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let s of this.state.activeProfile.kernels)s.kernelTimeMs=yield s.kernelTimeMs,s.extraInfo=yield s.extraInfo;return this.state.activeProfile})}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,o,n,s,i,a){let l={id:this.state.nextTapeNodeId++,kernelName:t,inputs:o,outputs:n,saved:i},u=fy(t);u!=null&&(s=u.gradFunc),s!=null&&(l.gradient=c=>(c=c.map((p,m)=>{if(p==null){let f=n[m],h=Xl(f.size,f.dtype);return this.makeTensor(h,f.shape,f.dtype)}return p}),s(c.length>1?c:c[0],i,a))),this.state.activeTape.push(l)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let o={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(o.name=t),this.state.scopeStack.push(o),this.state.activeScope=o}endScope(t){let o=af(t),n=new Set(o.map(i=>i.id));for(let i=0;i<this.state.activeScope.track.length;i++){let a=this.state.activeScope.track[i];!a.kept&&!n.has(a.id)&&a.dispose()}let s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],o.forEach(i=>{!i.kept&&i.scopeId===s.id&&this.track(i)})}gradients(t,o,n,s=!1){if(E(o.length>0,()=>"gradients() received an empty list of xs."),n!=null&&n.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));E(i instanceof Ft,()=>"The result y returned by f() must be a tensor.");let a=AC(this.state.activeTape,o,i);if(!s&&a.length===0&&o.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let l={};l[i.id]=n??bP(i.shape),$C(l,a,c=>this.tidy(c),wP);let u=o.map(c=>l[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(let p of c.saved)p.dispose()}),this.state.activeTape=null),{value:i,grads:u}})}customGrad(t){return E(ql(t),()=>"The f passed in customGrad(f) must be a function."),(...o)=>{E(o.every(l=>l instanceof Ft),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let n,s={};o.forEach((l,u)=>{s[u]=l});let i=(l,u)=>(n=t(...o,u),E(n.value instanceof Ft,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),E(ql(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),a=(l,u)=>{let c=n.gradFunc(l,u),p=Array.isArray(c)?c:[c];E(p.length===o.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),E(p.every(f=>f instanceof Ft),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let m={};return p.forEach((f,h)=>{m[h]=()=>f}),m};return this.runKernelFunc({forwardFunc:i,backwardsFunc:a,inputs:s})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,o){return this.state.tensorInfo.get(t).backend.readToGPU(t,o)}time(t){return B(this,null,function*(){let o=Qa(),n=yield this.backend.time(t);return n.wallMs=Qa()-o,n})}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new lf;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}return r.nextTensorId=0,r.nextVariableId=0,r})();function bP(r){let e=Rp(Ot(r),"float32");return k.makeTensor(e,r,"float32")}function vy(){let r=py();if(r._tfengine==null){let e=new _p(r);r._tfengine=new yP(e)}return uC(r._tfengine.ENV),FC(()=>r._tfengine),r._tfengine}var k=vy();function wP(r,e){let t={a:r,b:e};return k.runKernel(Bo,t)}var Yi={};Zt(Yi,{isBrowser:()=>Ny,isMobile:()=>SP,mockIsMobile:()=>vP});function CP(){return typeof navigator<"u"&&navigator!=null}var Sy;function vP(r){Sy=r}function SP(r){if(Sy!==void 0)return Sy;if(r||CP()){if(r||(r=navigator),r.product==="ReactNative")return!0;let e=r.userAgent||r.vendor||(typeof window<"u"?window.opera:"");if(!e){let t=r;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}return!1}function Ny(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Pr=L();Pr.registerFlag("DEBUG",()=>!1,r=>{r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Pr.registerFlag("IS_BROWSER",()=>Ny());Pr.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Pr.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Pr.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));Pr.registerFlag("PROD",()=>!1);Pr.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Pr.getBool("DEBUG"));Pr.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Pr.registerFlag("IS_TEST",()=>!1);Pr.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>Pr.getBool("DEBUG"));Pr.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Pr.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);Pr.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function zr(r,e){let t=r;if(br(r))return e==="string"?[]:[r.length];if(nf(r)){let n=r.channels||"RGBA";return[r.height,r.width*n.length]}else if(sf(r))return[r.buffer.size/(e==null?4:Hl(e))];if(!Array.isArray(r))return[];let o=[];for(;Array.isArray(t)||br(t)&&e!=="string";)o.push(t.length),t=t[0];return Array.isArray(r)&&L().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&UC(r,o,[]),o}function UC(r,e,t){if(t=t||[],!Array.isArray(r)&&!br(r)){E(e.length===0,()=>`Element arr[${t.join("][")}] is a primitive, but should be an array/TypedArray of ${e[0]} elements`);return}E(e.length>0,()=>`Element arr[${t.join("][")}] should be a primitive, but is an array of ${r.length} elements`),E(r.length===e[0],()=>`Element arr[${t.join("][")}] should have ${e[0]} elements, but has ${r.length} elements`);let o=e.slice(1);for(let n=0;n<r.length;++n)UC(r[n],o,t.concat(n))}function WC(r,e,t,o){if(r!=="string_or_numeric"){if(r==null)throw new Error("Expected dtype cannot be null.");if(r!=="numeric"&&r!==e||r==="numeric"&&e==="string")throw new Error(`Argument '${t}' passed to '${o}' must be ${r} tensor, but got ${e} tensor`)}}function S(r,e,t,o="numeric"){if(r instanceof F())return WC(o,r.dtype,e,t),r;let n=ti(r);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),WC(o,n,e,t),r==null||!br(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){let l=r==null?"null":r.constructor.name;throw new Error(`Argument '${e}' passed to '${t}' must be a Tensor or TensorLike, but got '${l}'`)}let s=zr(r,n);!br(r)&&!Array.isArray(r)&&(r=[r]);let a=n!=="string"?oc(r,n):Xi(r,[],!0);return k.makeTensor(a,s,n)}function el(r,e,t,o="numeric"){if(!Array.isArray(r))throw new Error(`Argument ${e} passed to ${t} must be a \`Tensor[]\` or \`TensorLike[]\``);return r.map((s,i)=>S(s,`${e}[${i}]`,t,o))}var Ty="__op";function N(r){let e=Object.keys(r);if(e.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${e.length} keys.`);let t=e[0],o=r[t];t.endsWith("_")&&(t=t.substring(0,t.length-1)),t=t+Ty;let n=(...s)=>{k.startScope(t);try{let i=o(...s);return Oa(i)&&console.error("Cannot return a Promise inside of tidy."),k.endScope(i),i}catch(i){throw k.endScope(null),i}};return Object.defineProperty(n,"name",{value:t,configurable:!0}),n}function NP(r,e){let t=S(r,"real","complex"),o=S(e,"imag","complex");Ee(t.shape,o.shape,`real and imag shapes, ${t.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:t,imag:o};return k.runKernel(ru,n)}var Mr=N({complex_:NP});function Ir(r,e,t,o){if(o==null)o=ti(r);else if(o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(sf(r)||nf(r)){if(o!=="float32"&&o!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${o}.`);return k.backend.createTensorFromGPUData(r,e||t,o)}if(!br(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(e!=null){de(e);let n=Ot(e),s=Ot(t);E(n===s,()=>`Based on the provided shape, [${e}], the tensor should have ${n} values but has ${s}`);for(let i=0;i<t.length;++i){let a=t[i],l=i===t.length-1?a!==Ot(e.slice(i)):!0;E(t[i]===e[i]||!l,()=>`Error creating a new Tensor. Inferred shape (${t}) does not match the provided shape (${e}). `)}}return!br(r)&&!Array.isArray(r)&&(r=[r]),e=e||t,r=o!=="string"?oc(r,o):Xi(r,[],!0),k.makeTensor(r,e,o)}function qe(r,e,t){let o=zr(r,t);return Ir(r,e,o,t)}var As={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var pr=class r{static join(e){return new r(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(o=>br(o)?o.buffer:o),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let o=0;o<e.length;o++){let n=e[o];o!==e.length-1&&n.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let s=t+n.byteLength;this.shards.push({buffer:n,start:t,end:s}),t=s}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e)return new ArrayBuffer(0);let o=this.findShardForByte(e);if(o===-1)throw new Error(`Could not find start shard for byte ${e}`);let n=t-e,s=new ArrayBuffer(n),i=new Uint8Array(s),a=0;for(let l=o;l<this.shards.length;l++){let u=this.shards[l],p=e+a-u.start,m=a,h=Math.min(t,u.end)-u.start,g=new Uint8Array(u.buffer,p,h-p);if(i.set(g,m),a+=g.length,t<u.end)break}return s}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(n){return e<n.start?-1:e>=n.end?1:0}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let o=TP(this.shards,t);return o===-1?-1:(this.previousShardIndex=o,this.previousShardIndex)}};function TP(r,e){let t=0,o=r.length;for(;t<=o;){let n=Math.floor((o-t)/2)+t,s=e(r[n]);if(s===0)return n;s<0?o=n:t=n+1}return-1}function IP(r){L().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}LC(IP);function vo(){return k}function Wp(){return k.memory()}function M(r,e){return k.tidy(r,e)}function Nt(r){af(r).forEach(t=>t.dispose())}function ce(r){return k.keep(r)}function Up(){return k.backendName}function uf(r,e,t=1){return k.registerBackend(r,e,t)}function cf(){return k.backend}var Zi=4;function qC(r,e){return B(this,null,function*(){let t=[],o=[],n=Array.isArray(r)?r.map(i=>i.name):Object.keys(r);for(let i=0;i<n.length;++i){let a=n[i],l=Array.isArray(r)?r[i].tensor:r[a];if(l.dtype!=="float32"&&l.dtype!=="int32"&&l.dtype!=="bool"&&l.dtype!=="string"&&l.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${l.dtype}`);let u={name:a,shape:l.shape,dtype:l.dtype};if(l.dtype==="string"){let c=new Promise(p=>B(this,null,function*(){let m=yield l.bytes(),f=m.reduce((d,x)=>d+x.length,0)+Zi*m.length,h=new Uint8Array(f),g=0;for(let d=0;d<m.length;d++){let x=m[d],y=new Uint8Array(new Uint32Array([x.length]).buffer);h.set(y,g),g+=Zi,h.set(x,g),g+=x.length}p(h)}));o.push(c)}else o.push(l.data());e!=null&&(u.group=e),t.push(u)}let s=yield Promise.all(o);return{data:AP(s),specs:t}})}function pf(r,e){let t=new pr(r),o={},n=0;for(let s of e){let i=kP(s,(a,l)=>t.slice(n+a,n+l));o[s.name]=jC(s,t.slice(n,n+i)),n+=i}return o}function kP(r,e){let t=Ot(r.shape),o;if("quantization"in r){let n=r.quantization;o=As[n.dtype]}else if(r.dtype==="string"){let n=0;for(let s=0;s<t;s++)n+=Zi+new Uint32Array(e(n,n+Zi))[0];return n}else o=As[r.dtype];return t*o}function EP(r,e){return B(this,null,function*(){let t=Ot(r.shape),o;if("quantization"in r){let n=r.quantization;o=As[n.dtype]}else if(r.dtype==="string"){let n=0;for(let s=0;s<t;s++)n+=Zi+new Uint32Array(yield e(n,n+Zi))[0];return n}else o=As[r.dtype];return t*o})}function jC(r,e){let t=r.name,o=r.dtype,n=r.shape,s=Ot(n),i,a=0;if("quantization"in r){let l=r.quantization;if(l.dtype==="uint8"||l.dtype==="uint16"){if(!("min"in l&&"scale"in l))throw new Error(`Weight ${r.name} with quantization ${l.dtype} doesn't have corresponding metadata min and scale.`)}else if(l.dtype==="float16"){if(o!=="float32")throw new Error(`Weight ${r.name} is quantized with ${l.dtype} which only supports weights of type float32 not ${o}.`)}else throw new Error(`Weight ${r.name} has unknown quantization dtype ${l.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let u=As[l.dtype],c=l.dtype==="uint8"?new Uint8Array(e):new Uint16Array(e);if(o==="float32")if(l.dtype==="uint8"||l.dtype==="uint16"){i=new Float32Array(c.length);for(let p=0;p<c.length;p++){let m=c[p];i[p]=m*l.scale+l.min}}else if(l.dtype==="float16")i=_P()(c);else throw new Error(`Unsupported quantization type ${l.dtype} for weight type float32.`);else if(o==="int32"){if(l.dtype!=="uint8"&&l.dtype!=="uint16")throw new Error(`Unsupported quantization type ${l.dtype} for weight type int32.`);i=new Int32Array(c.length);for(let p=0;p<c.length;p++){let m=c[p];i[p]=Math.round(m*l.scale+l.min)}}else throw new Error(`Unsupported dtype in weight '${t}': ${o}`);a+=s*u}else if(o==="string"){let l=Ot(r.shape);i=[];for(let u=0;u<l;u++){let c=new Uint32Array(e.slice(a,a+Zi))[0];a+=Zi;let p=new Uint8Array(e.slice(a,a+c));i.push(p),a+=c}}else{let l=As[o];if(o==="float32")i=new Float32Array(e);else if(o==="int32")i=new Int32Array(e);else if(o==="bool")i=new Uint8Array(e);else if(o==="complex64"){i=new Float32Array(e);let u=new Float32Array(i.length/2),c=new Float32Array(i.length/2);for(let h=0;h<u.length;h++)u[h]=i[h*2],c[h]=i[h*2+1];let p=qe(u,n,"float32"),m=qe(c,n,"float32"),f=Mr(p,m);return p.dispose(),m.dispose(),f}else throw new Error(`Unsupported dtype in weight '${t}': ${o}`);a+=s*l}return qe(i,n,o)}function HC(r,e,t){return B(this,null,function*(){let o=new Uint8Array(e);for(;o.byteLength<t;){let{done:n,value:s}=yield r.read();if(n&&s==null){let a=t-o.byteLength;throw new Error(`Reader is done but ${a} bytes are still expected`)}let i=new Uint8Array(o.length+s.byteLength);i.set(o,0),i.set(new Uint8Array(s),o.length),o=i}return o.buffer})}function mf(r,e){return B(this,null,function*(){let t={},o=r.getReader(),n=new ArrayBuffer(0);for(let s of e){let i=yield EP(s,(u,c)=>B(this,null,function*(){return n=yield HC(o,n,c),n.slice(u,c)}));n=yield HC(o,n,i);let a=n.slice(0,i);n=n.slice(i);let l=jC(s,a);if(t[s.name]=l,Up()==="webgpu"){let u=cf();"uploadToGPU"in u&&Ot(l.shape)>=L().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&u.uploadToGPU(l.dataId)}}return t})}function AP(r){if(r===null)throw new Error(`Invalid input value: ${JSON.stringify(r)}`);let e=0,t=[];r.forEach(s=>{if(e+=s.byteLength,t.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});let o=new Uint8Array(e),n=0;return t.forEach(s=>{o.set(new Uint8Array(s.buffer),n),n+=s.byteLength}),o.buffer}var Iy=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function KC(r){return Iy?Buffer.byteLength(r,"utf8"):new Blob([r]).size}function XC(r){if(Iy)return Buffer.from(r).toString("base64");let e=new Uint8Array(r),t="";for(let o=0,n=e.length;o<n;o++)t+=String.fromCharCode(e[o]);return btoa(t)}function YC(r){if(Iy){let o=Buffer.from(r,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let e=atob(r),t=new Uint8Array(e.length);for(let o=0;o<e.length;++o)t.set([e.charCodeAt(o)],o);return t.buffer}function ZC(r){return pr.join(r)}function ky(r){let e="/";for(r=r.trim();r.endsWith(e);)r=r.slice(0,r.length-1);let t=r.split(e);return t[t.length-1]}function ff(r,e){let t={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy,weightsManifest:e};return r.signature!=null&&(t.signature=r.signature),r.userDefinedMetadata!=null&&(t.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(t.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(t.initializerSignature=r.initializerSignature),r.trainingConfig!=null&&(t.trainingConfig=r.trainingConfig),t}function Ey(r,e,t){let o={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy};if(r.trainingConfig!=null&&(o.trainingConfig=r.trainingConfig),r.weightsManifest!=null){if(!e)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!t)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=e,o.weightData=t}return r.signature!=null&&(o.signature=r.signature),r.userDefinedMetadata!=null&&(o.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(o.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(o.initializerSignature=r.initializerSignature),o}function ac(r,e){return B(this,null,function*(){let t,o;return r.weightsManifest!=null&&([t,o]=yield e(r.weightsManifest)),Ey(r,t,o)})}function hn(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:KC(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:KC(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:new pr(r.weightData).byteLength}}function Hp(r){let e=[];for(let t of r)e.push(...t.weights);return e}function $P(){let r=t=>{let o=t<<13,n=0;for(;!(o&8388608);)n-=8388608,o<<=1;return o&=-8388609,n+=947912704,o|n},e=new Uint32Array(2048);e[0]=0;for(let t=1;t<1024;t++)e[t]=r(t);for(let t=1024;t<2048;t++)e[t]=939524096+(t-1024<<13);return e}function DP(){let r=new Uint32Array(64);r[0]=0,r[31]=1199570944,r[32]=2147483648,r[63]=3347054592;for(let e=1;e<31;e++)r[e]=e<<23;for(let e=33;e<63;e++)r[e]=2147483648+(e-32<<23);return r}function RP(){let r=new Uint32Array(64);for(let e=0;e<64;e++)r[e]=1024;return r[0]=r[32]=0,r}function _P(){let r=$P(),e=DP(),t=RP();return o=>{let n=new ArrayBuffer(4*o.length),s=new Uint32Array(n);for(let i=0;i<o.length;i++){let a=o[i],l=r[t[a>>10]+(a&1023)]+e[a>>10];s[i]=l}return new Float32Array(n)}}var je=class r{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return r.instance==null&&(r.instance=new r),r.instance}static registerSaveRouter(e){r.getInstance().saveRouters.push(e)}static registerLoadRouter(e){r.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return r.getHandlers(e,"save")}static getLoadHandlers(e,t){return r.getHandlers(e,"load",t)}static getHandlers(e,t,o){let n=[];return(t==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(i=>{let a=i(e,o);a!==null&&n.push(a)}),n}},JC=r=>je.registerSaveRouter(r),QC=r=>je.registerLoadRouter(r),tv=r=>je.getSaveHandlers(r),ev=(r,e)=>je.getLoadHandlers(r,e);var Ay="tensorflowjs",$y=1,rl="models_store",Ji="model_info_store";function rv(){if(!L().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let r=typeof window>"u"?self:window,e=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(e==null)throw new Error("The current browser does not appear to support IndexedDB.");return e}function Dy(r){let e=r.result;e.createObjectStore(rl,{keyPath:"modelPath"}),e.createObjectStore(Ji,{keyPath:"modelPath"})}var ol=(()=>{class r{constructor(t){if(this.indexedDB=rv(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}save(t){return B(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)})}load(){return B(this,null,function*(){return this.databaseAction(this.modelPath)})}databaseAction(t,o){return new Promise((n,s)=>{let i=this.indexedDB.open(Ay,$y);i.onupgradeneeded=()=>Dy(i),i.onsuccess=()=>{let a=i.result;if(o==null){let l=a.transaction(rl,"readonly"),c=l.objectStore(rl).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return a.close(),s(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));n(c.result.modelArtifacts)},c.onerror=p=>(a.close(),s(c.error)),l.oncomplete=()=>a.close()}else{o.weightData=pr.join(o.weightData);let l=hn(o),u=a.transaction(Ji,"readwrite"),c=u.objectStore(Ji),p;try{p=c.put({modelPath:this.modelPath,modelArtifactsInfo:l})}catch(f){return s(f)}let m;p.onsuccess=()=>{m=a.transaction(rl,"readwrite");let f=m.objectStore(rl),h;try{h=f.put({modelPath:this.modelPath,modelArtifacts:o,modelArtifactsInfo:l})}catch(g){return s(g)}h.onsuccess=()=>n({modelArtifactsInfo:l}),h.onerror=g=>{c=u.objectStore(Ji);let d=c.delete(this.modelPath);d.onsuccess=()=>(a.close(),s(h.error)),d.onerror=x=>(a.close(),s(h.error))}},p.onerror=f=>(a.close(),s(p.error)),u.oncomplete=()=>{m==null?a.close():m.oncomplete=()=>a.close()}}},i.onerror=a=>s(i.error)})}}return r.URL_SCHEME="indexeddb://",r})();var ov=r=>L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ol.URL_SCHEME)?FP(r.slice(ol.URL_SCHEME.length)):null;je.registerSaveRouter(ov);je.registerLoadRouter(ov);function FP(r){return new ol(r)}function OP(r){return r.startsWith(ol.URL_SCHEME)?r.slice(ol.URL_SCHEME.length):r}var hf=class{constructor(){this.indexedDB=rv()}listModels(){return B(this,null,function*(){return new Promise((e,t)=>{let o=this.indexedDB.open(Ay,$y);o.onupgradeneeded=()=>Dy(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(Ji,"readonly"),a=s.objectStore(Ji).getAll();a.onsuccess=()=>{let l={};for(let u of a.result)l[u.modelPath]=u.modelArtifactsInfo;e(l)},a.onerror=l=>(n.close(),t(a.error)),s.oncomplete=()=>n.close()},o.onerror=n=>t(o.error)})})}removeModel(e){return B(this,null,function*(){return e=OP(e),new Promise((t,o)=>{let n=this.indexedDB.open(Ay,$y);n.onupgradeneeded=()=>Dy(n),n.onsuccess=()=>{let s=n.result,i=s.transaction(Ji,"readwrite"),a=i.objectStore(Ji),l=a.get(e),u;l.onsuccess=()=>{if(l.result==null)return s.close(),o(new Error(`Cannot find model with path '${e}' in IndexedDB.`));{let c=a.delete(e),p=()=>{u=s.transaction(rl,"readwrite");let f=u.objectStore(rl).delete(e);f.onsuccess=()=>t(l.result.modelArtifactsInfo),f.onerror=h=>o(l.error)};c.onsuccess=p,c.onerror=m=>(p(),s.close(),o(l.error))}},l.onerror=c=>(s.close(),o(l.error)),i.oncomplete=()=>{u==null?s.close():u.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})})}};var $s="/",lc="tensorflowjs_models",nv="info",LP="model_topology",PP="weight_specs",zP="weight_data",MP="model_metadata";function sv(r){return{info:[lc,r,nv].join($s),topology:[lc,r,LP].join($s),weightSpecs:[lc,r,PP].join($s),weightData:[lc,r,zP].join($s),modelMetadata:[lc,r,MP].join($s)}}function iv(r){for(let e of Object.values(r))window.localStorage.removeItem(e)}function BP(r){let e=r.split($s);if(e.length<3)throw new Error(`Invalid key format: ${r}`);return e.slice(1,e.length-1).join($s)}function VP(r){return r.startsWith(nl.URL_SCHEME)?r.slice(nl.URL_SCHEME.length):r}var nl=(()=>{class r{constructor(t){if(!L().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=sv(this.modelPath)}save(t){return B(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let o=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),s=hn(t),i=pr.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(s)),this.LS.setItem(this.keys.topology,o),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,XC(i));let a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:s}}catch{throw iv(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${s.modelTopologyBytes}, weightSpecsBytes=${s.weightSpecsBytes}, weightDataBytes=${s.weightDataBytes}.`)}}})}load(){return B(this,null,function*(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let o={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);o.modelTopology=n;let s=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(s==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);o.weightSpecs=s;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let l=JSON.parse(i);o.format=l.format,o.generatedBy=l.generatedBy,o.convertedBy=l.convertedBy,l.signature!=null&&(o.signature=l.signature),l.userDefinedMetadata!=null&&(o.userDefinedMetadata=l.userDefinedMetadata),l.modelInitializer!=null&&(o.modelInitializer=l.modelInitializer),l.initializerSignature!=null&&(o.initializerSignature=l.initializerSignature),l.trainingConfig!=null&&(o.trainingConfig=l.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return o.weightData=YC(a),o})}}return r.URL_SCHEME="localstorage://",r})();var av=r=>L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(nl.URL_SCHEME)?GP(r.slice(nl.URL_SCHEME.length)):null;je.registerSaveRouter(av);je.registerLoadRouter(av);function GP(r){return new nl(r)}var df=class{constructor(){E(L().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),E(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}listModels(){return B(this,null,function*(){let e={},t=lc+$s,o=$s+nv;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(t)&&s.endsWith(o)){let i=BP(s);e[i]=JSON.parse(this.LS.getItem(s))}}return e})}removeModel(e){return B(this,null,function*(){e=VP(e);let t=sv(e);if(this.LS.getItem(t.info)==null)throw new Error(`Cannot find model at path '${e}'`);let o=JSON.parse(this.LS.getItem(t.info));return iv(t),o})}};var uc="://",Wo=class r{constructor(){this.managers={}}static getInstance(){return r.instance==null&&(r.instance=new r),r.instance}static registerManager(e,t){E(e!=null,()=>"scheme must not be undefined or null."),e.endsWith(uc)&&(e=e.slice(0,e.indexOf(uc))),E(e.length>0,()=>"scheme must not be an empty string.");let o=r.getInstance();E(o.managers[e]==null,()=>`A model store manager is already registered for scheme '${e}'.`),o.managers[e]=t}static getManager(e){let t=r.getInstance().managers[e];if(t==null)throw new Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(r.getInstance().managers)}};function gf(r){if(r.indexOf(uc)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Wo.getSchemes().join(",")}`);return{scheme:r.split(uc)[0],path:r.split(uc)[1]}}function lv(r,e,t=!1){return B(this,null,function*(){E(r!==e,()=>`Old path and new path are the same: '${r}'`);let o=je.getLoadHandlers(r);E(o.length>0,()=>`Copying failed because no load handler is found for source URL ${r}.`),E(o.length<2,()=>`Copying failed because more than one (${o.length}) load handlers for source URL ${r}.`);let n=o[0],s=je.getSaveHandlers(e);E(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${e}.`),E(s.length<2,()=>`Copying failed because more than one (${o.length}) save handlers for destination URL ${e}.`);let i=s[0],a=gf(r).scheme,l=gf(r).path,u=a===gf(r).scheme,c=yield n.load();t&&u&&(yield Wo.getManager(a).removeModel(l));let p=yield i.save(c);return t&&!u&&(yield Wo.getManager(a).removeModel(l)),p.modelArtifactsInfo})}function uv(){return B(this,null,function*(){let r=Wo.getSchemes(),e={};for(let t of r){let o=yield Wo.getManager(t).listModels();for(let n in o){let s=t+uc+n;e[s]=o[n]}}return e})}function cv(r){return B(this,null,function*(){let e=gf(r);return Wo.getManager(e.scheme).removeModel(e.path)})}function pv(r,e){return B(this,null,function*(){return lv(r,e,!1)})}function mv(r,e){return B(this,null,function*(){return lv(r,e,!0)})}var Ry=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>"u"||!L().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",o=>{if(o.source===window&&o.data.name===this.messageName){o.stopPropagation();let n=this.functionRefs[o.data.index];n(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return Qm(e)}};if(L().get("IS_BROWSER")){L().setPlatform("browser",new Ry);try{Wo.registerManager(nl.URL_SCHEME,new df)}catch{}try{Wo.registerManager(ol.URL_SCHEME,new hf)}catch{}}var UP={importFetch:()=>hv()},_y;var Fy=class{constructor(){this.util=dv(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return L().global.fetch!=null?L().global.fetch(e,t):(_y==null&&(_y=UP.importFetch()),_y(e,t))}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!=="utf-8"&&t!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}};L().get("IS_NODE")&&!L().get("IS_BROWSER")&&L().setPlatform("node",new Fy);function ft(r,e="float32",t){return e=e||"float32",de(r),new Ut(r,e,t)}function HP(r,e){let t=S(r,"x","cast");if(!ay(e))throw new Error(`Failed to cast to unknown dtype ${e}`);if(e==="string"&&t.dtype!=="string"||e!=="string"&&t.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:t},n={dtype:e};return k.runKernel(un,o,n)}var j=N({cast_:HP});function KP(r){let t={x:S(r,"x","clone","string_or_numeric")};return k.runKernel(cn,t)}var kr=N({clone_:KP});function xf(r,e=!1){console.log(r.toString(e))}vy();var qP={buffer:ft,cast:j,clone:kr,print:xf};OC(qP);function jP(r,e){let t=S(r,"a","add"),o=S(e,"b","add");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(Bo,n)}var U=N({add_:jP});function XP(r,e){let t=S(r,"a","floorDiv"),o=S(e,"b","floorDiv");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(Qn,n)}var pc=N({floorDiv_:XP});function YP(r,e){let t=S(r,"a","div"),o=S(e,"b","div");if([t,o]=Lt(t,o),t.dtype==="int32"&&o.dtype==="int32")return pc(t,o);let n={a:t,b:o},s={};return k.runKernel(qn,n,s)}var rt=N({div_:YP});function ZP(r,e){let t=S(r,"a","mul"),o=S(e,"b","mul");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(us,n)}var D=N({mul_:ZP});function JP(r){let e=S(r,"x","abs");if(e.dtype==="complex64"){let t={x:e};return k.runKernel(ui,t)}else{let t={x:e};return k.runKernel(ei,t)}}var ae=N({abs_:JP});function QP(r){let t={x:S(r,"x","acos")};return k.runKernel(Ln,t)}var yf=N({acos_:QP});function tz(r){let t={x:S(r,"x","acosh")};return k.runKernel(Pn,t)}var bf=N({acosh_:tz});function ez(r){E(Array.isArray(r),()=>"The argument passed to tf.addN() must be a list of tensors"),E(r.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${r.length}`);let e=r.map((n,s)=>S(n,`tensors${s}`,"addN")),t=e[0];e.forEach(n=>{if(n.dtype!==t.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),e.forEach(n=>{if(!Xr(n.shape,t.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});let o=e;return k.runKernel(ri,o)}var gv=N({addN_:ez});function rz(r,e=null,t=!1){let n={x:S(r,"x","all","bool")},s={axis:e,keepDims:t};return k.runKernel(Yl,n,s)}var mc=N({all_:rz});function oz(r,e=null,t=!1){let n={x:S(r,"x","any","bool")},s={axis:e,keepDims:t};return k.runKernel(Zl,n,s)}var il=N({any_:oz});function nz(r,e=0){let o={x:S(r,"x","argMax")},n={axis:e};return k.runKernel(oi,o,n)}var dn=N({argMax_:nz});function sz(r,e=0){let o={x:S(r,"x","argMin")},n={axis:e};return k.runKernel(ni,o,n)}var wf=N({argMin_:sz});function iz(r){let t={x:S(r,"x","asin")};return k.runKernel(zn,t)}var Cf=N({asin_:iz});function az(r){let t={x:S(r,"x","asinh")};return k.runKernel(Mn,t)}var vf=N({asinh_:az});function lz(r){let t={x:S(r,"x","atan")};return k.runKernel(Bn,t)}var Sf=N({atan_:lz});function uz(r,e){let t=S(r,"a","atan2"),o=S(e,"b","atan2");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(Gn,n)}var Nf=N({atan2_:uz});function cz(r){let t={x:S(r,"x","atanh")};return k.runKernel(Vn,t)}var Tf=N({atanh_:cz});function pz(r,e,t,o,n="NHWC",s){let i=r[3],a=[...e,i],l=yv(n);return al(r,a,t,s,o,null,null,l)}function Ly(r,e,t,o,n,s,i="channelsLast"){let[a,l]=Kp(e),u;if(i==="channelsLast")u=[a,l,r[3],r[3]];else if(i==="channelsFirst")u=[a,l,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return al(r,u,t,o,n,s,!1,i)}function mz(r,e,t,o,n,s,i="NDHWC"){let[a,l,u]=Oy(e),c,p;if(i==="NDHWC")p="channelsLast",c=[a,l,u,r[4],r[4]];else if(i==="NCDHW")p="channelsFirst",c=[a,l,u,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return xv(r,c,t,o,n,!1,p,s)}function al(r,e,t,o,n,s,i=!1,a="channelsLast"){let[l,u,c,p]=[-1,-1,-1,-1];if(a==="channelsLast")[l,u,c,p]=r;else if(a==="channelsFirst")[l,p,u,c]=r;else throw new Error(`Unknown dataFormat ${a}`);let[m,f,,h]=e,[g,d]=Kp(t),[x,y]=Kp(o),w=fc(m,x),C=fc(f,y),{padInfo:T,outHeight:A,outWidth:$}=dz(n,u,c,g,d,w,C,s,a),_=i?h*p:h,O;return a==="channelsFirst"?O=[l,_,A,$]:a==="channelsLast"&&(O=[l,A,$,_]),{batchSize:l,dataFormat:a,inHeight:u,inWidth:c,inChannels:p,outHeight:A,outWidth:$,outChannels:_,padInfo:T,strideHeight:g,strideWidth:d,filterHeight:m,filterWidth:f,effectiveFilterHeight:w,effectiveFilterWidth:C,dilationHeight:x,dilationWidth:y,inShape:r,outShape:O,filterShape:e}}function xv(r,e,t,o,n,s=!1,i="channelsLast",a){let[l,u,c,p,m]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[l,u,c,p,m]=r;else if(i==="channelsFirst")[l,m,u,c,p]=r;else throw new Error(`Unknown dataFormat ${i}`);let[f,h,g,,d]=e,[x,y,w]=Oy(t),[C,T,A]=Oy(o),$=fc(f,C),_=fc(h,T),O=fc(g,A),{padInfo:z,outDepth:V,outHeight:G,outWidth:W}=gz(n,u,c,p,x,y,w,$,_,O,a),H=s?d*m:d,K;return i==="channelsFirst"?K=[l,H,V,G,W]:i==="channelsLast"&&(K=[l,V,G,W,H]),{batchSize:l,dataFormat:i,inDepth:u,inHeight:c,inWidth:p,inChannels:m,outDepth:V,outHeight:G,outWidth:W,outChannels:H,padInfo:z,strideDepth:x,strideHeight:y,strideWidth:w,filterDepth:f,filterHeight:h,filterWidth:g,effectiveFilterDepth:$,effectiveFilterHeight:_,effectiveFilterWidth:O,dilationDepth:C,dilationHeight:T,dilationWidth:A,inShape:r,outShape:K,filterShape:e}}function fz(r,e,t,o,n){o==null&&(o=Py(r,e,t));let s=r[0],i=r[1],a=qp((s-e+2*o)/t+1,n),l=qp((i-e+2*o)/t+1,n);return[a,l]}function hz(r,e,t,o,n,s){n==null&&(n=Py(r,e[0],o[0]));let i=[0,0,0,t];for(let a=0;a<3;a++)r[a]+2*n>=e[a]&&(i[a]=qp((r[a]-e[a]+2*n)/o[a]+1,s));return i}function Py(r,e,t,o=1){let n=fc(e,o);return Math.floor((r[0]*(t-1)-t+n)/2)}function Kp(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Oy(r){return typeof r=="number"?[r,r,r]:r}function fc(r,e){return e<=1?r:r+(r-1)*(e-1)}function dz(r,e,t,o,n,s,i,a,l){let u,c,p;if(typeof r=="number"){u={top:r,bottom:r,left:r,right:r,type:r===0?"VALID":"NUMBER"};let f=fz([e,t],s,o,r,a);c=f[0],p=f[1]}else if(r==="same"){c=Math.ceil(e/o),p=Math.ceil(t/n);let m=Math.max(0,(c-1)*o+s-e),f=Math.max(0,(p-1)*n+i-t),h=Math.floor(m/2),g=m-h,d=Math.floor(f/2),x=f-d;u={top:h,bottom:g,left:d,right:x,type:"SAME"}}else if(r==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((e-s+1)/o),p=Math.ceil((t-i+1)/n);else if(typeof r=="object"){let m=l==="channelsLast"?r[1][0]:r[2][0],f=l==="channelsLast"?r[1][1]:r[2][1],h=l==="channelsLast"?r[2][0]:r[3][0],g=l==="channelsLast"?r[2][1]:r[3][1];u={top:m,bottom:f,left:h,right:g,type:m===0&&f===0&&h===0&&g===0?"VALID":"EXPLICIT"},c=qp((e-s+m+f)/o+1,a),p=qp((t-i+h+g)/n+1,a)}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:u,outHeight:c,outWidth:p}}function gz(r,e,t,o,n,s,i,a,l,u,c){let p,m,f,h;if(r==="valid"&&(r=0),typeof r=="number"){p={top:r,bottom:r,left:r,right:r,front:r,back:r,type:r===0?"VALID":"NUMBER"};let d=hz([e,t,o,1],[a,l,u],1,[n,s,i],r,c);m=d[0],f=d[1],h=d[2]}else if(r==="same"){m=Math.ceil(e/n),f=Math.ceil(t/s),h=Math.ceil(o/i);let g=(m-1)*n+a-e,d=(f-1)*s+l-t,x=(h-1)*i+u-o,y=Math.floor(g/2),w=g-y,C=Math.floor(d/2),T=d-C,A=Math.floor(x/2),$=x-A;p={top:C,bottom:T,left:A,right:$,front:y,back:w,type:"SAME"}}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:p,outDepth:m,outHeight:f,outWidth:h}}function qp(r,e){if(!e)return Math.trunc(r);switch(e){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error(`Unknown roundingMode ${e}`)}}function po(r){let[e,t,o]=Kp(r);return e===1&&t===1&&o===1}function nr(r,e){return po(r)||po(e)}function gn(r){return Kp(r).every(e=>e>0)}function yv(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${r}`)}function ee(r,e,t){if(t!=null){if(typeof e=="string")throw Error(`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);if(typeof e=="number")E(On(e),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${e}.`);else if(typeof e=="object")e.forEach(o=>{o.forEach(n=>{E(On(n),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${t} but got pad ${n}.`)})});else throw Error(`Error in ${r}: Unknown padding parameter: ${e}`)}}function xz(r,e){let o={x:S(r,"x","reshape","string_or_numeric")},n={shape:e};return k.runKernel(Oi,o,n)}var R=N({reshape_:xz});function yz(r,e,t,o,n){let s=S(r,"x","avgPool","float32"),i=1;E(nr(t,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`);let a=s,l=!1;s.rank===3&&(l=!0,a=R(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),ee("avgPool",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n},p=k.runKernel(si,u,c);return p=j(p,s.dtype),l?R(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Qi=N({avgPool_:yz});function bz(r,e,t,o,n,s="NDHWC"){let i=S(r,"x","avgPool3d","float32"),a=i,l=!1;i.rank===4&&(l=!0,a=R(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),E(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),E(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),E(typeof t=="number"&&t>0||Array.isArray(t)&&t[0]>0&&t[1]>0&&t[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${t}'`),ee("avgPool3d",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n,dataFormat:s},p=k.runKernel(ii,u,c);return p=j(p,a.dtype),l?R(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var If=N({avgPool3d_:bz});function wz(r,e=0){E(r.length>=1,()=>"Pass at least one tensor to concat");let t=el(r,"tensors","concat","string_or_numeric");if(t[0].dtype==="complex64"&&t.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),t.length===1)return kr(t[0]);let o=t,n={axis:e};return k.runKernel(ci,o,n)}var Gt=N({concat_:wz});function Cz(r,e,t=!1,o=!1){let n=S(r,"a","matMul"),s=S(e,"b","matMul");[n,s]=Lt(n,s);let i={a:n,b:s},a={transposeA:t,transposeB:o};return k.runKernel(ai,i,a)}var Dt=N({matMul_:Cz});function vz(r){let t={x:S(r,"x","sigmoid","float32")};return k.runKernel(ws,t)}var sr=N({sigmoid_:vz});function Sz(r,e,t){let o=S(r,"x","slice","string_or_numeric");if(o.rank===0)throw new Error("Slicing scalar is not possible");let n={x:o},s={begin:e,size:t};return k.runKernel(Bi,n,s)}var bt=N({slice_:Sz});function Nz(r){let t={x:S(r,"x","tanh","float32")};return k.runKernel(Is,t)}var Uo=N({tanh_:Nz});function Tz(r,e,t,o,n,s){let i=S(r,"forgetBias","basicLSTMCell"),a=S(e,"lstmKernel","basicLSTMCell"),l=S(t,"lstmBias","basicLSTMCell"),u=S(o,"data","basicLSTMCell"),c=S(n,"c","basicLSTMCell"),p=S(s,"h","basicLSTMCell"),m=Gt([u,p],1),f=Dt(m,a),h=U(f,l),g=h.shape[0],d=h.shape[1]/4,x=[g,d],y=bt(h,[0,0],x),w=bt(h,[0,d],x),C=bt(h,[0,d*2],x),T=bt(h,[0,d*3],x),A=U(D(sr(y),Uo(w)),D(c,sr(U(i,C)))),$=D(Uo(A),sr(T));return[A,$]}var bv=N({basicLSTMCell_:Tz});function Iz(r,e,t){let o=S(r,"x","batchToSpaceND"),n=e.reduce((a,l)=>a*l);E(o.rank>=1+e.length,()=>`input rank is ${o.rank} but should be > than blockShape.length ${e.length}`),E(t.length===e.length,()=>`crops.length is ${t.length} but should be equal to blockShape.length  ${e.length}`),E(o.shape[0]%n===0,()=>`input tensor batch is ${o.shape[0]} but is not divisible by the product of the elements of blockShape ${e.join(" * ")} === ${n}`);let s={x:o},i={blockShape:e,crops:t};return k.runKernel(li,s,i)}var ta=N({batchToSpaceND_:Iz});function wv(r){let e;return r.rank===0||r.rank===1?e=R(r,[1,1,1,r.size]):r.rank===2?e=R(r,[1,1,r.shape[0],r.shape[1]]):r.rank===3?e=R(r,[1,r.shape[0],r.shape[1],r.shape[2]]):e=r,e}function kz(r,e,t,o,n,s){s==null&&(s=.001);let i=S(r,"x","batchNorm"),a=S(e,"mean","batchNorm"),l=S(t,"variance","batchNorm"),u;n!=null&&(u=S(n,"scale","batchNorm"));let c;o!=null&&(c=S(o,"offset","batchNorm")),E(a.rank===l.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),E(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),E(u==null||a.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let m={x:wv(i),scale:u,offset:c,mean:a,variance:l},f={varianceEpsilon:s},h=k.runKernel(yi,m,f);return R(h,i.shape)}var xn=N({batchNorm_:kz});function Ez(r,e,t,o,n,s){let i=S(r,"x","batchNorm"),a=S(e,"mean","batchNorm"),l=S(t,"variance","batchNorm"),u;n!=null&&(u=S(n,"scale","batchNorm"));let c;return o!=null&&(c=S(o,"offset","batchNorm")),E(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),E(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),E(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&E(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${c.rank}.`),xn(i,a,l,c,u,s)}var kf=N({batchNorm2d_:Ez});function Az(r,e,t,o,n,s){let i=S(r,"x","batchNorm"),a=S(e,"mean","batchNorm"),l=S(t,"variance","batchNorm"),u;n!=null&&(u=S(n,"scale","batchNorm"));let c;return o!=null&&(c=S(o,"offset","batchNorm")),E(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),E(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),E(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&E(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${c.rank}.`),xn(i,a,l,c,u,s)}var Ef=N({batchNorm3d_:Az});function $z(r,e,t,o,n,s){let i=S(r,"x","batchNorm"),a=S(e,"mean","batchNorm"),l=S(t,"variance","batchNorm"),u;n!=null&&(u=S(n,"scale","batchNorm"));let c;return o!=null&&(c=S(o,"offset","batchNorm")),E(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),E(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),E(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&E(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${c.rank}.`),xn(i,a,l,c,u,s)}var Af=N({batchNorm4d_:$z});function Dz(r,e,t){let o=S(r,"x","bincount"),n=S(e,"weights","bincount");E(o.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${o.dtype}`),E(t>=0,()=>`size must be non-negative, but got ${t}.`),E(n.size===o.size||n.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${o.shape}, weights shape: ${n.shape}.`);let s={x:o,weights:n},i={size:t};return k.runKernel(tu,s,i)}var $f=N({bincount_:Dz});function Rz(r,e){let t=S(r,"x","bitwiseAnd"),o=S(e,"y","bitwiseAnd");if(!Xr(t.shape,o.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${t.shape}, y: ${o.shape}`);if(t.dtype!=="int32"||o.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${t.dtype} and type of y: ${o.dtype}`);let n={a:t,b:o};return k.runKernel(La,n)}var Cv=N({bitwiseAnd_:Rz});function _z(r,e){let t=S(r,"s0","broadcastArgs","int32"),o=S(e,"s1","broadcastArgs","int32");if(t.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${t.rank}`);if(o.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${o.rank}`);let n={s0:t,s1:o};return k.runKernel(eu,n)}var vv=N({broadcastArgs_:_z});function Fz(r,e){let t=S(r,"broadcastTo","x"),o=t.shape;if(de(e),e.length<t.rank)throw new Error(`broadcastTo(): shape.length=${e.length} < input.rank=${t.rank}.`);if(e.length>t.rank){let u=t.shape.slice();for(;u.length<e.length;)u.unshift(1);t=R(t,u)}let n=t.shape,s=Array.from(e);for(let u=e.length-1;u>=0;u--)if(n[u]===e[u])s[u]=1;else if(t.shape[u]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${e}].`);if(s.map((u,c)=>u>1?c:-1).filter(u=>u>=0).length===0)return kr(t);let a={x:t},l={reps:s};return k.runKernel(pn,a,l)}var yn=N({broadcastTo_:Fz});function Oz(r){let t={x:S(r,"x","ceil","float32")};return k.runKernel(Wn,t)}var Df=N({ceil_:Oz});function So(r,e,t){de(r),t=t||ti(e);let o={shape:r,value:e,dtype:t};return k.runKernel(gu,{},o)}function Lz(r,e,t){let o=S(r,"x","clipByValue");if(E(e<=t,()=>`Error in clip: min (${e}) must be less than or equal to max (${t}).`),e===t)return So(o.shape,e,o.dtype);let n={x:o},s={clipValueMin:e,clipValueMax:t};return k.runKernel(Un,n,s)}var Xe=N({clipByValue_:Lz});function Pz(r){return Gt(r,0)}var Rf=N({concat1d_:Pz});function zz(r,e){return Gt(r,e)}var hc=N({concat2d_:zz});function Mz(r,e){return Gt(r,e)}var _f=N({concat3d_:Mz});function Bz(r,e){return Gt(r,e)}var Ff=N({concat4d_:Bz});function Vz(r,e,t,o,n="NHWC",s=[1,1],i){let a=S(r,"x","conv2d","float32"),l=S(e,"filter","conv2d","float32"),u=a,c=!1;a.rank===3&&(c=!0,u=R(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),E(l.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),ee("conv2d",o,i);let p=n==="NHWC"?u.shape[3]:u.shape[1];E(p===l.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${l.shape[2]}.`),E(nr(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),E(gn(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),E(gn(t),()=>"Error in conv2D: Strides should be larger than 0.");let m={x:u,filter:l},f={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i},h=k.runKernel(pi,m,f);return c?R(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var Br=N({conv2d_:Vz});function Gz(r,e,t,o,n="NWC",s=1,i){let a=S(r,"x","conv1d"),l=S(e,"filter","conv1d"),u=a,c=!1;a.rank===2&&(c=!0,u=R(a,[1,a.shape[0],a.shape[1]])),E(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),E(l.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),ee("conv1d",o,i),E(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),E(nr(t,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${t} and dilation '${s}'`),E(gn(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),E(gn(t),()=>"Error in conv1D: Stride should be larger than 0."),E(n==="NWC",()=>`Error in conv1d: got dataFormat of ${n} but only NWC is currently supported.`);let p=R(l,[1,l.shape[0],l.shape[1],l.shape[2]]),m=R(u,[u.shape[0],1,u.shape[1],u.shape[2]]),d=Br(m,p,[1,t],o,"NHWC",[1,s],i);return c?R(d,[d.shape[2],d.shape[3]]):R(d,[d.shape[0],d.shape[2],d.shape[3]])}var dc=N({conv1d_:Gz});function Wz(r,e,t,o,n,s="NHWC",i){E(r.length===e.rank,()=>`Length of inShape (${r.length}) and rank of dy (${e.rank}) must match`);let a=r,l=e,u=!1;e.rank===3&&(u=!0,l=R(e,[1,e.shape[0],e.shape[1],e.shape[2]]),a=[1,r[0],r[1],r[2]]),E(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),E(l.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),E(t.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${t.rank}`);let c=s==="NHWC"?a[3]:a[1],p=s==="NHWC"?l.shape[3]:l.shape[1];E(c===t.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${t.shape[2]}.`),E(p===t.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${t.shape[3]}.`),ee("conv2dDerInput",n,i);let m={dy:l,filter:t},f={strides:o,pad:n,dataFormat:s,dimRoundingMode:i,inputShape:a},h=k.runKernel(mi,m,f);return u?R(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var gc=N({conv2DBackpropInput_:Wz});function Uz(r,e,t,o,n,s){let i=S(r,"x","conv2dTranspose"),a=S(e,"filter","conv2dTranspose");return gc(t,i,a,o,n,"NHWC",s)}var xc=N({conv2dTranspose_:Uz});function Hz(r,e,t,o,n="NDHWC",s=[1,1,1]){let i=S(r,"x","conv3d"),a=S(e,"filter","conv3d"),l=i,u=!1;i.rank===4&&(u=!0,l=R(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),E(l.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),E(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),E(l.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${a.shape[3]}.`),E(nr(t,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),E(n==="NDHWC",()=>`Error in conv3d: got dataFormat of ${n} but only NDHWC is currently supported.`),E(gn(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),E(gn(t),()=>"Error in conv3D: Strides should be larger than 0.");let c={x:l,filter:a},p={strides:t,pad:o,dataFormat:n,dilations:s},m=k.runKernel(fi,c,p);return u?R(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var Of=N({conv3d_:Hz});function Kz(r,e,t,o,n){E(r.length===e.rank,()=>`Length of inShape (${r.length}) and rank of dy (${e.rank}) must match`);let s=r,i=e,a=!1;e.rank===4&&(a=!0,i=R(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]),s=[1,r[0],r[1],r[2],r[3]]);let l=s[4],u=i.shape[4];E(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),E(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),E(t.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${t.rank}`),E(l===t.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${t.shape[3]}.`),E(u===t.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${t.shape[4]}.`);let c={dy:i,filter:t},p={pad:n,strides:o,inputShape:s},m=k.runKernel(su,c,p);return a?R(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var Lf=N({conv3DBackpropInput_:Kz});function qz(r,e,t,o,n){let s=S(r,"x","conv3dTranspose"),i=S(e,"filter","conv3dTranspose");return Lf(t,s,i,o,n)}var Pf=N({conv3dTranspose_:qz});function jz(r){let t={x:S(r,"x","cos","float32")};return k.runKernel(Hn,t)}var ea=N({cos_:jz});function Xz(r){let t={x:S(r,"x","cosh","float32")};return k.runKernel(Kn,t)}var yc=N({cosh_:Xz});function Yz(r,e=0,t=!1,o=!1){let s={x:S(r,"x","cumprod")},i={axis:e,exclusive:t,reverse:o};return k.runKernel(iu,s,i)}var ll=N({cumprod_:Yz});function Zz(r,e=0,t=!1,o=!1){let s={x:S(r,"x","cumsum")},i={axis:e,exclusive:t,reverse:o};return k.runKernel(hi,s,i)}var bc=N({cumsum_:Zz});function Jz(r,e,t,o=!1){let n=S(r,"x","denseBincount"),s=S(e,"weights","denseBincount");E(n.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${n.dtype}`),E(n.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${n.rank}.`),E(t>=0,()=>`size must be non-negative, but got ${t}.`),E(s.size===n.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${n.shape}, weights shape: ${s.shape}.`);let i={x:n,weights:s},a={size:t,binaryOutput:o};return k.runKernel(lu,i,a)}var jp=N({denseBincount_:Jz});function Qz(r,e,t="NHWC"){let o=S(r,"x","depthToSpace","float32"),n=t==="NHWC"?o.shape[1]:o.shape[2],s=t==="NHWC"?o.shape[2]:o.shape[3],i=t==="NHWC"?o.shape[3]:o.shape[1];E(e>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${e}`),E(n*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${n} and ${e}  for depthToSpace with input shape
    ${o.shape}`),E(s*e>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${e} for depthToSpace with input shape
        ${o.shape}`),E(i%(e*e)===0,()=>`Dimension size must be evenly divisible by ${e*e} but is ${i} for depthToSpace with input shape ${o.shape}`);let a={x:o},l={blockSize:e,dataFormat:t};return k.runKernel(uu,a,l)}var zf=N({depthToSpace_:Qz});function tM(r,e,t,o,n="NHWC",s=[1,1],i){let a=S(r,"x","depthwiseConv2d","float32"),l=S(e,"filter","depthwiseConv2d","float32"),u=a,c=!1;a.rank===3&&(c=!0,u=R(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),E(l.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);let p=n==="NHWC"?u.shape[3]:u.shape[1];E(p===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${l.shape[2]}.`),ee("depthwiseConv2d",o,i);let m={x:u,filter:l},f={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i},h=k.runKernel(di,m,f);return c?R(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var bn=N({depthwiseConv2d_:tM});function eM(r){let t={x:S(r,"x","diag")};return k.runKernel(mu,t)}var Sv=N({diag_:eM});function rM(r,e,t,o,n=[1,1],s="NHWC"){let i=S(r,"x","dilation2d"),a=S(e,"filter","dilation2d");E(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),E(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),E(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let l=i,u=!1;i.rank===3&&(l=R(i,[1,i.shape[0],i.shape[1],i.shape[2]]),u=!0),E(l.shape[3]===a.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${a.shape[2]}`);let c={x:l,filter:a},p={strides:t,pad:o,dilations:n},m=k.runKernel(gi,c,p);return u?R(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Mf=N({dilation2d_:rM});var Jr={};Zt(Jr,{assertAndGetBroadcastShape:()=>It,getBroadcastDims:()=>Nv,getReductionAxes:()=>Jt});function Nv(r,e){let t=r.length,o=[];for(let n=0;n<t;n++){let s=t-1-n,i=r[s]||1;(e[e.length-1-n]||1)>1&&i===1&&o.unshift(s)}return o}function Jt(r,e){let t=[];for(let o=0;o<e.length;o++){let n=r[r.length-o-1],s=e.length-o-1,i=e[s];(n==null||n===1&&i>1)&&t.unshift(s)}return t}function It(r,e){let t=Math.max(r.length,e.length),o=new Array(t);for(let n=0;n<t;n++){let s=r[r.length-n-1];s==null&&(s=1);let i=e[e.length-n-1];if(i==null&&(i=1),s===1)o[t-n-1]=i;else if(i===1)o[t-n-1]=s;else if(s!==i){let a=`Operands could not be broadcast together with shapes ${r} and ${e}.`;throw Error(a)}else o[t-n-1]=s}return o}function oM(r,e){let t=S(r,"a","equal","string_or_numeric"),o=S(e,"b","equal","string_or_numeric");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(Pa,n)}var wr=N({equal_:oM});function nM(r,e,t){let o=S(e,"a","where"),n=S(t,"b","where"),s=S(r,"condition","where","bool"),i=It(It(s.shape,o.shape),n.shape),a=yn(s,i),l=yn(o,i),u=yn(n,i),c={condition:a,t:l,e:u};return k.runKernel(Mi,c)}var re=N({where_:nM});function sM(r){let t={x:S(r,"x","zerosLike")};return k.runKernel(qi,t)}var gt=N({zerosLike_:sM});function iM(r,e){let t=S(r,"a","div"),o=S(e,"b","div");[t,o]=Lt(t,o);let n=rt(t,o),s=gt(n),i=wr(o,s);return re(i,s,n)}var Bf=N({divNoNan_:iM});function aM(r,e){let t=S(r,"t1","dot"),o=S(e,"t2","dot");E((t.rank===1||t.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${t.rank} and ${o.rank}.`);let n=t.rank===1?t.size:t.shape[1],s=o.rank===1?o.size:o.shape[0];if(E(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),t.rank===1&&o.rank===1){let i=R(t,[1,-1]),a=R(o,[-1,1]),l=Dt(i,a);return R(l,[])}else if(t.rank===1&&o.rank===2){let i=R(t,[1,-1]),a=R(o,[o.shape[0],o.shape[1]]),l=Dt(i,a);return R(l,[l.size])}else if(t.rank===2&&o.rank===1){let i=R(o,[-1,1]),a=Dt(t,i);return R(a,[a.size])}else{let i=R(o,[o.shape[0],o.shape[1]]);return Dt(t,i)}}var Vf=N({dot_:aM});function lM(r,...e){let t=e.map((n,s)=>S(n,`tensors${s}`,"einsum")),o={equation:r};return k.runKernel(fu,t,o)}var ra=N({einsum_:lM});function uM(r){let t={x:S(r,"x","elu","float32")};return k.runKernel(jn,t)}var wn=N({elu_:uM});function cM(r,e){let t=S(r,"x","ensureShape","string_or_numeric");if(!oy(t.shape,e))throw new Error(`EnsureShape: Shape of tensor ${t.shape} is not compatible with expected shape ${e}`);return r}var Tv=N({ensureShape_:cM});function pM(r){let e=S(r,"x","erf");E(e.dtype==="int32"||e.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),e.dtype==="int32"&&(e=j(e,"float32"));let t={x:e};return k.runKernel(Xn,t)}var wc=N({erf_:pM});function zy(r,e){for(let t=0;t<r.length;++t)if(r[r.length-t-1]!==e-1-t)return!1;return!0}function Iv(r,e,t){let o=r.length+e.length,n=[],s=0,i=0;for(let a=0;a<o;a++)t.indexOf(a)===-1?n.push(r[s++]):n.push(e[i++]);return n}function My(r,e){let t=[],o=r.length;for(let s=0;s<o;s++)e.indexOf(s)===-1&&t.push(r[s]);let n=e.map(s=>r[s]);return[t,n]}function No(r,e){let t=e.map(o=>1);return Iv(r,t,e)}function mM(r,e,t){E(zy(e,t),()=>`${r} supports only inner-most axes for now. Got axes ${e} and rank-${t} input.`)}function By(r,e){if(zy(r,e))return null;let t=[];for(let o=0;o<e;++o)r.indexOf(o)===-1&&t.push(o);return r.forEach(o=>t.push(o)),t}function Xp(r){return r.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function fM(r,e){let t=[];for(let o=e-r;o<e;++o)t.push(o);return t}function hM(r,e=null,t=!1){let n={x:S(r,"x","max")},s={reductionIndices:e,keepDims:t};return k.runKernel(vi,n,s)}var Ye=N({max_:hM});function dM(r,e=null,t=!1){let n={x:S(r,"x","min")},s={axis:e,keepDims:t};return k.runKernel(Ii,n,s)}var Ds=N({min_:dM});function gM(r,e){let t=S(r,"base","pow"),o=S(e,"exp","pow");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(cs,n)}var mr=N({pow_:gM});function st(r,e){if((br(r)&&e!=="string"||Array.isArray(r))&&e!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(e==="string"&&br(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ir(r,[],[],e)}function xM(r){let t={x:S(r,"x","sqrt","float32")};return k.runKernel(vs,t)}var Xt=N({sqrt_:xM});function yM(r){let e=S(r,"x","square"),t={};return k.runKernel("Square",{x:e},t)}var $t=N({square_:yM});function bM(r,e=null,t=!1){let o=S(r,"x","sum");o.dtype==="bool"&&(o=j(o,"int32"));let n={x:o},s={axis:e,keepDims:t};return k.runKernel(Vi,n,s)}var it=N({sum_:bM});function wM(r,e="euclidean",t=null,o=!1){r=S(r,"x","norm");let n=kv(r,e,t),s=n.shape;if(o){let i=Be(t,r.shape);s=No(n.shape,i)}return R(n,s)}function kv(r,e,t=null){if(r.rank===0)return ae(r);if(r.rank!==1&&t===null)return kv(R(r,[-1]),e,t);if(r.rank===1||typeof t=="number"||Array.isArray(t)&&t.length===1){if(e===1)return it(ae(r),t);if(e===1/0)return Ye(ae(r),t);if(e===-1/0)return Ds(ae(r),t);if(e==="euclidean"||e===2)return Xt(it(mr(ae(r),st(2,"int32")),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}if(Array.isArray(t)&&t.length===2){if(e===1)return Ye(it(ae(r),t[0]),t[1]-1);if(e===1/0)return Ye(it(ae(r),t[1]),t[0]);if(e===-1/0)return Ds(it(ae(r),t[1]),t[0]);if(e==="fro"||e==="euclidean")return Xt(it($t(r),t));throw new Error(`Error in norm: invalid ord value: ${e}`)}throw new Error(`Error in norm: invalid axis: ${t}`)}var Rs=N({norm_:wM});function CM(r,e=null,t=!1){return Rs(r,"euclidean",e,t)}var Gf=N({euclideanNorm_:CM});function vM(r){let t={x:S(r,"x","exp")};return k.runKernel(Yn,t)}var Ie=N({exp_:vM});function SM(r,e=0){let t=S(r,"x","expandDims","string_or_numeric");E(e<=t.rank,()=>"Axis must be <= rank of the tensor");let o={input:t},n={dim:e};return k.runKernel(xi,o,n)}var xe=N({expandDims_:SM});function NM(r){let t={x:S(r,"x","expm1")};return k.runKernel(Zn,t)}var Wf=N({expm1_:NM});function TM(r,e){let t=S(r,"x","tile","string_or_numeric");E(t.rank===e.length,()=>`Error in transpose: rank of input ${t.rank} must match length of reps ${e}.`);let o={x:t},n={reps:e};return k.runKernel(pn,o,n)}var ir=N({tile_:TM});function IM(r,e,t,o="float32"){e==null&&(e=r);let n=ft([r,e],o),s=r<=e?r:e;for(let a=0;a<s;++a)n.set(1,a,a);let i=R(n.toTensor(),[r,e]);if(t==null)return i;if(t.length===1)return ir(xe(i,0),[t[0],1,1]);if(t.length===2)return ir(xe(xe(i,0),0),[t[0],t[1],1,1]);if(t.length===3)return ir(xe(xe(xe(i,0),0),0),[t[0],t[1],t[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${t.length}D.`)}var ul=N({eye_:IM});function kM(r){let t={x:S(r,"x","floor","float32")};return k.runKernel(Jn,t)}var Cn=N({floor_:kM});function EM(r,e,t=0,o=0){let n=S(r,"x","gather"),s=S(e,"indices","gather","int32"),i={x:n,indices:s},a={axis:t,batchDims:o};return k.runKernel(bi,i,a)}var vn=N({gather_:EM});function AM(r,e){let t=S(r,"a","greater","string_or_numeric"),o=S(e,"b","greater","string_or_numeric");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(za,n)}var ye=N({greater_:AM});function $M(r,e){let t=S(r,"a","greaterEqual","string_or_numeric"),o=S(e,"b","greaterEqual","string_or_numeric");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(ts,n)}var Er=N({greaterEqual_:$M});function DM(r){let t={input:S(r,"input","imag")};return k.runKernel(wu,t)}var oa=N({imag_:DM});function RM(r){let t={x:S(r,"x","isFinite")};return k.runKernel(es,t)}var Uf=N({isFinite_:RM});function _M(r){let t={x:S(r,"x","isInf")};return k.runKernel(rs,t)}var Hf=N({isInf_:_M});function FM(r){let t={x:S(r,"x","isNaN")};return k.runKernel(os,t)}var Kf=N({isNaN_:FM});function OM(r,e=.2){let o={x:S(r,"x","leakyRelu")},n={alpha:e};return k.runKernel(wi,o,n)}var na=N({leakyRelu_:OM});function LM(r,e){let t=S(r,"a","less","string_or_numeric"),o=S(e,"b","less","string_or_numeric");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(Ma,n)}var _s=N({less_:LM});function PM(r,e){let t=S(r,"a","lessEqual","string_or_numeric"),o=S(e,"b","lessEqual","string_or_numeric");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(Ba,n)}var Qr=N({lessEqual_:PM});function Ev(r,e,t){if(t<=0)throw new Error("The number of values should be positive.");let o={start:r,stop:e,num:t};return k.runKernel(Cu,{},o)}function zM(r,e=5,t=1,o=1,n=.5){let s=S(r,"x","localResponseNormalization");E(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),E(On(e),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${e}.`);let i=s,a=!1;s.rank===3&&(a=!0,i=R(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let l={x:i},u={depthRadius:e,bias:t,alpha:o,beta:n},c=k.runKernel(Ci,l,u);return a?R(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var qf=N({localResponseNormalization_:zM});function MM(r){let t={x:S(r,"x","log","float32")};return k.runKernel(ns,t)}var Ze=N({log_:MM});function BM(r){let t={x:S(r,"x","log1p")};return k.runKernel(ss,t)}var sa=N({log1p_:BM});function Gy(r,e){E(ql(r),()=>"The f passed in variableGrads(f) must be a function"),E(e==null||Array.isArray(e)&&e.every(u=>u instanceof Es),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let t=e!=null;if(!t){e=[];for(let u in k.registeredVariables)e.push(k.registeredVariables[u])}let o=t?e.filter(u=>!u.trainable):null,n=e.length;e=e.filter(u=>u.trainable),E(e.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let s=!0,{value:i,grads:a}=k.gradients(r,e,null,s);E(a.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),E(i.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${i.rank} tensor`);let l={};return e.forEach((u,c)=>{a[c]!=null&&(l[u.name]=a[c])}),o?.forEach(u=>l[u.name]=null),{value:i,grads:l}}function Vr(r){return k.customGrad(r)}function VM(r){let t={x:S(r,"x","neg")};return k.runKernel(Ei,t)}var _t=N({neg_:VM});function GM(r){let t={x:S(r,"x","softplus")};return k.runKernel(Cs,t)}var Ho=N({softplus_:GM});function WM(r){let e=S(r,"x","logSigmoid");return Vr(o=>({value:_t(Ho(_t(o))),gradFunc:i=>D(i,sr(_t(o)))}))(e)}var jf=N({logSigmoid_:WM});function UM(r,e){let t=S(r,"a","sub"),o=S(e,"b","sub");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(Ns,n)}var et=N({sub_:UM});function HM(r,e=-1){let t=S(r,"logits","logSoftmax");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and axis was ${e}`);return Vr((n,s)=>{let a=Ye(n,e,!0),l=et(n,a),u=et(j(l,"float32"),Ze(it(Ie(l),e,!0)));return s([u]),{value:u,gradFunc:(p,m)=>{let[f]=m,h=!0,g=Ie(f);return et(p,D(it(p,e,h),g))}}})(t)}var Cc=N({logSoftmax_:HM});function KM(r,e=null,t=!1){let o=S(r,"x","logSumExp"),n=Be(e,o.shape),s=Ye(o,n,!0),i=et(o,s),a=Ie(i),l=it(a,n),u=Ze(l),c=U(R(s,u.shape),u);if(t){let p=No(c.shape,n);return R(c,p)}return c}var ia=N({logSumExp_:KM});function qM(r,e){let t=S(r,"a","logicalAnd","bool"),o=S(e,"b","logicalAnd","bool");It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(Va,n)}var fr=N({logicalAnd_:qM});function jM(r){let t={x:S(r,"x","logicalNot","bool")};return k.runKernel(Ga,t)}var aa=N({logicalNot_:jM});function XM(r,e){let t=S(r,"a","logicalOr","bool"),o=S(e,"b","logicalOr","bool");It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(Wa,n)}var vc=N({logicalOr_:XM});function YM(r,e){let t=S(r,"a","logicalXor","bool"),o=S(e,"b","logicalXor","bool");return It(t.shape,o.shape),fr(vc(r,e),aa(fr(r,e)))}var Xf=N({logicalXor_:YM});var Yf=2147483648;function ZM(r,e,t="left"){let o=S(r,"sortedSequence","searchSorted"),n=S(e,"values","searchSorted"),s=o.shape[o.shape.length-1],i=n.shape[n.shape.length-1],a=R(o,[-1,s]),l=R(n,[-1,i]);if(a.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(a.shape[0]!==l.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(Ot(l.shape)>=Yf)throw new Error(`values tensor size must less than ${Yf}`);if(a.shape[1]>=Yf)throw new Error(`trailing dim_size must less than ${Yf} for int32 output type, was ${a.shape[1]}`);let u={sortedSequence:a,values:l},c={side:t};return k.runKernel(Mu,u,c)}var Yp=N({searchSorted_:ZM});function Av(r,e){return Yp(r,e,"left")}function JM(r,e,t,o,n){let s=S(r,"x","maxPool"),i=1,a=s,l=!1;s.rank===3&&(l=!0,a=R(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),E(nr(t,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${t} and dilations '${i}'`),ee("maxPool",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n},p=k.runKernel(Si,u,c);return l?R(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var la=N({maxPool_:JM});function QM(r,e=[1,1,1],t,o,n,s="NDHWC"){let i=S(r,"x","maxPool3d"),a=i,l=!1;i.rank===4&&(l=!0,a=R(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),E(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),E(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),ee("maxPool3d",o,n);let u={x:a},c={filterSize:e,strides:t,pad:o,dimRoundingMode:n,dataFormat:s},p=k.runKernel(Ni,u,c);return l?R(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var Zf=N({maxPool3d_:QM});function t3(r,e,t,o,n=!1){let i={x:S(r,"x","maxPoolWithArgmax")},a={filterSize:e,strides:t,pad:o,includeBatchInIndex:n},l=k.runKernel(Tu,i,a);return{result:l[0],indexes:l[1]}}var $v=N({maxPoolWithArgmax_:t3});function e3(r,e){let t=S(r,"a","maximum"),o=S(e,"b","maximum");[t,o]=Lt(t,o),t.dtype==="bool"&&(t=j(t,"int32"),o=j(o,"int32")),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(is,n)}var Gr=N({maximum_:e3});function r3(r,e=null,t=!1){let n={x:S(r,"x","mean")},s={axis:e,keepDims:t};return k.runKernel(Ti,n,s)}var oe=N({mean_:r3});function ne(r,e="float32"){if(de(r),e==="complex64"){let o=ne(r,"float32"),n=ne(r,"float32");return Mr(o,n)}let t=Xl(Ot(r),e);return k.makeTensor(t,r,e)}function Fe(r,e="float32"){if(de(r),e==="complex64"){let o=Fe(r,"float32"),n=ne(r,"float32");return Mr(o,n)}let t=Rp(Ot(r),e);return k.makeTensor(t,r,e)}function Dv(r,e,{indexing:t="xy"}={}){if(t!=="xy"&&t!=="ij")throw new TypeError(`${t} is not a valid third argument to meshgrid`);if(r===void 0)return[];let o=S(r,"x","meshgrid",r instanceof Ft?r.dtype:"float32");if(e===void 0)return[o];let n=S(e,"y","meshgrid",e instanceof Ft?e.dtype:"float32"),s=Ot(o.shape),i=Ot(n.shape);return t==="xy"?(o=R(o,[1,-1]),n=R(n,[-1,1]),[Dt(Fe([i,1],o.dtype),o),Dt(n,Fe([1,s],n.dtype))]):(o=R(o,[-1,1]),n=R(n,[1,-1]),[Dt(o,Fe([1,i],o.dtype)),Dt(Fe([s,1],n.dtype),n)])}function o3(r,e){let t=S(r,"a","minimum"),o=S(e,"b","minimum");[t,o]=Lt(t,o),t.dtype==="bool"&&(t=j(t,"int32"),o=j(o,"int32")),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(as,n)}var fo=N({minimum_:o3});function n3(r,e,t){E(t==="reflect"||t==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${t}.`);let o=S(r,"x","mirrorPad");if(o.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");E(e.length===o.rank,()=>`Padding doesn't match input. Must be ${o.rank}. Got ${e.length}.`);let n=t==="reflect"?1:0;for(let a=0;a<o.rank;a++)E(e[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),E(e[a][0]>=0&&e[a][0]<=o.shape[a]-n&&e[a][1]>=0&&e[a][1]<=o.shape[a]-n,()=>`Padding in dimension ${a} cannot be greater than or equal to ${o.shape[a]-n} or less than 0 for input of shape ${o.shape}`);let s={paddings:e,mode:t},i={x:o};return k.runKernel(ki,i,s)}var Jf=N({mirrorPad_:n3});function s3(r,e){let t=S(r,"a","mod"),o=S(e,"b","mod");[t,o]=Lt(t,o);let n={a:t,b:o};return k.runKernel(ls,n)}var Qf=N({mod_:s3});function i3(r,e=null,t=!1){r=S(r,"x","moments");let o=Be(e,r.shape),n=oe(r,o,t),s=n.shape;t||(s=No(n.shape,o));let i=$t(et(j(r,"float32"),R(n,s))),a=oe(i,o,t);return{mean:n,variance:a}}var cl=N({moments_:i3});function a3(r,e,t,o){let n=S(e,"data","multiRNNCell"),s=el(t,"c","multiRNNCell"),i=el(o,"h","multiRNNCell"),a=n,l=[];for(let p=0;p<r.length;p++){let m=r[p](a,s[p],i[p]);l.push(m[0]),l.push(m[1]),a=m[1]}let u=[],c=[];for(let p=0;p<l.length;p+=2)u.push(l[p]),c.push(l[p+1]);return[u,c]}var Rv=N({multiRNNCell_:a3});function l3(r,e,t,o=!1){let n=S(r,"logits","multinomial"),s=n.size,i=n.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);t=t||Math.random();let l={logits:i===1?R(n,[1,-1]):n},u={numSamples:e,seed:t,normalized:o},c=k.runKernel(Iu,l,u);return i===1?R(c,[c.size]):c}var _v=N({multinomial_:l3});function u3(r,e){let t=S(r,"a","notEqual","string_or_numeric"),o=S(e,"b","notEqual","string_or_numeric");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o};return k.runKernel(Ua,n)}var Ko=N({notEqual_:u3});function c3(r,e,t=1,o=0,n="int32"){if(e<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${e}`);let i={indices:S(r,"indices","oneHot","int32")},a={dtype:n,depth:e,onValue:t,offValue:o};return k.runKernel($i,i,a)}var pl=N({oneHot_:c3});function p3(r){let t={x:S(r,"x","onesLike")};return k.runKernel(Ai,t)}var He=N({onesLike_:p3});function m3(r,e){let t=S(r,"v1","outerProduct"),o=S(e,"v2","outerProduct");E(t.rank===1&&o.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${t.rank} and ${o.rank}.`);let n=R(t,[-1,1]),s=R(o,[1,-1]);return Dt(n,s)}var Fv=N({outerProduct_:m3});function f3(r,e,t=0){let o=S(r,"x","pad");if(o.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let n={paddings:e,constantValue:t},s={x:o};return k.runKernel(Ri,s,n)}var Ar=N({pad_:f3});function h3(r,e,t=0){return E(e.length===2,()=>"Invalid number of paddings. Must be length of 2."),Ar(r,[e],t)}var Ov=N({pad1d_:h3});function d3(r,e,t=0){return E(e.length===2&&e[0].length===2&&e[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Ar(r,e,t)}var Lv=N({pad2d_:d3});function g3(r,e,t=0){return E(e.length===3&&e[0].length===2&&e[1].length===2&&e[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Ar(r,e,t)}var Pv=N({pad3d_:g3});function x3(r,e,t=0){return E(e.length===4&&e[0].length===2&&e[1].length===2&&e[2].length===2&&e[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Ar(r,e,t)}var zv=N({pad4d_:x3});function y3(r,e,t){let o=S(r,"x","spaceToBatchND");E(o.rank>=1+e.length,()=>`input rank ${o.rank} should be > than [blockShape] ${e.length}`),E(t.length===e.length,()=>`paddings.shape[0] ${t.length} must be equal to [blockShape] ${e.length}`),E(o.shape.reduce((i,a,l)=>l>0&&l<=e.length?i&&(a+t[l-1][0]+t[l-1][1])%e[l-1]===0:i,!0),()=>`input spatial dimensions ${o.shape.slice(1)} with paddings ${t.toString()} must be divisible by blockShapes ${e.toString()}`);let n={x:o},s={blockShape:e,paddings:t};return k.runKernel(Gi,n,s)}var ua=N({spaceToBatchND_:y3});function b3(r,e,t,o,n,s,i){n==null&&(n=[1,1]),s==null&&(s=1),o===0&&(o="valid");let a=S(r,"x","maxPool"),l=a,u=!1;a.rank===3&&(u=!0,l=R(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(nr(s,n),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${n}'`);let c=Ly(l.shape,e,s,n,o),p=[c.dilationHeight,c.dilationWidth],m;o==="same"?m=C3([c.filterHeight,c.filterWidth],p):m=[[0,0],[0,0]];let f=p[0]===1&&p[1]===1,[h,g]=w3([c.inHeight,c.inWidth],p,m),d=f?o:"valid",x=f?l:ua(l,p,h),w=(t==="avg"?()=>Qi(x,e,s,d,i):()=>la(x,e,s,d,i))(),C=f?w:ta(w,p,g);return u?R(C,[C.shape[1],C.shape[2],C.shape[3]]):C}function w3(r,e,t){let o=t.map(c=>c[0]),n=t.map(c=>c[1]),s=r.concat(o,n),i=e.map((c,p)=>(c-s[p]%c)%c),a=n.map((c,p)=>c+i[p]),l=e.map((c,p)=>[o[p],a[p]]),u=e.map((c,p)=>[0,i[p]]);return[l,u]}function C3(r,e){let o=r.map((i,a)=>i+(i-1)*(e[a]-1)).map(i=>i-1),n=o.map(i=>Math.floor(i/2)),s=o.map((i,a)=>i-n[a]);return o.map((i,a)=>[n[a],s[a]])}var th=N({pool_:b3});function v3(r,e){let t=S(r,"x","prelu"),o=S(e,"alpha","prelu"),n={x:t,alpha:o};return k.runKernel(_i,n)}var ca=N({prelu_:v3});function S3(r,e=null,t=!1){let o=S(r,"x","prod");o.dtype==="bool"&&(o=j(o,"int32"));let n={x:o},s={axis:e,keepDims:t};return k.runKernel(Fi,n,s)}var eh=N({prod_:S3});function N3(r,e,t,o){let n=r.map((c,p)=>S(c,`tensors${p}`,"raggedGather","int32")),s=S(e,"paramsDenseValues","raggedGather"),i=S(t,"indices","raggedGather","int32"),a={paramsNestedSplits:n,paramsDenseValues:s,indices:i},l={outputRaggedRank:o},u=k.runKernel($u,a,l);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}var Mv=N({raggedGather_:N3});function T3(r,e,t){let o=S(r,"starts","raggedRange"),n=S(e,"limits","raggedRange",o.dtype),s=S(t,"deltas","raggedRange",o.dtype),i={starts:o,limits:n,deltas:s},a=k.runKernel(Du,i);return{rtNestedSplits:a[0],rtDenseValues:a[1]}}var Bv=N({raggedRange_:T3});function I3(r,e,t,o,n){let s=S(r,"shape","raggedTensorToTensor","int32"),i=S(e,"values","raggedTensorToTensor"),a=S(t,"defaultValue","raggedTensorToTensor",i.dtype),l=o.map((p,m)=>S(p,`tensors${m}`,"raggedTensorToTensor","int32")),u={shape:s,values:i,defaultValue:a,rowPartitionTensors:l},c={rowPartitionTypes:n};return k.runKernel(Ru,u,c)}var Vv=N({raggedTensorToTensor_:I3});function k3(r,e,t){de(r);let o=Ot(r),n=null;if(t==null||t==="float32")n=new Float32Array(o);else if(t==="int32")n=new Int32Array(o);else if(t==="bool")n=new Uint8Array(o);else throw new Error(`Unknown data type ${t}`);for(let s=0;s<o;s++)n[s]=e();return k.makeTensor(n,r,t)}var Gv=N({rand_:k3});var sh=Dp(Zp());var fl=class{constructor(e,t,o,n,s){this.mean=e,this.stdDev=t,this.dtype=o,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let i=s||Math.random();this.random=sh.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){let n=this.nextVal;return this.nextVal=NaN,n}let e,t,o=!1;for(;!o;){let n,s,i;do n=2*this.random()-1,s=2*this.random()-1,i=n*n+s*s;while(i>=1||i===0);let a=Math.sqrt(-2*Math.log(i)/i);e=this.mean+this.stdDev*n*a,t=this.mean+this.stdDev*s*a,(!this.truncated||this.isValidTruncated(e))&&(o=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype==="float32"?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},oh=class{constructor(e,t,o,n){this.alpha=e,this.beta=1/t,this.dtype=o;let s=n||Math.random();this.randu=sh.alea(s.toString()),this.randn=new fl(0,1,o,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,o,n,s,i;for(;;){do n=this.randn.nextValue(),i=1+this.c*n;while(i<=0);if(i*=i*i,e=n*n,t=1-.331*e*e,o=.5*e+this.d*(1-i+Math.log(i)),s=this.randu(),s<t||Math.log(s)<o)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(e){return this.dtype==="float32"?e:Math.round(e)}},nh=class{constructor(e=0,t=1,o,n){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=e,this.range=t-e,this.dtype=o,n==null&&(n=Math.random()),typeof n=="number"&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=sh.alea(n)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function F3(r,e,t=1,o="float32",n){if(de(r),t==null&&(t=1),o==null&&(o="float32"),o!=="float32"&&o!=="int32")throw new Error(`Unsupported data type ${o}`);let s=new oh(e,t,o,n),i=ft(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var sS=N({randomGamma_:F3});function O3(r,e=0,t=1,o,n){if(de(r),o!=null&&o==="bool")throw new Error(`Unsupported data type ${o}`);let s=new fl(e,t,o,!1,n),i=ft(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var hl=N({randomNormal_:O3});function L3(r,e,t){if(e!=null&&e==="bool")throw new Error(`Unsupported data type ${e}`);return hl(r,0,1,e,t)}var iS=N({randomStandardNormal_:L3});function P3(r,e=0,t=1,o="float32",n){de(r);let s=ft(r,o),i=new nh(e,t,null,n);for(let a=0;a<s.values.length;a++)s.values[a]=i.nextValue();return s.toTensor()}var to=N({randomUniform_:P3});function z3(r,e,t,o){return to(r,e,t,"int32",o)}var aS=N({randomUniformInt_:z3});function Sn(r,e,t=1,o="float32"){if(t===0)throw new Error("Cannot have a step of zero");let n={start:r,stop:e,step:t,dtype:o};return k.runKernel(_u,{},n)}function M3(r){let t={input:S(r,"input","real")};return k.runKernel(Fu,t)}var Fs=N({real_:M3});function B3(r){let t={x:S(r,"x","reciprocal")};return k.runKernel(ps,t)}var ih=N({reciprocal_:B3});function V3(r){let t={x:S(r,"x","relu")};return k.runKernel(ms,t)}var ar=N({relu_:V3});function G3(r){let t={x:S(r,"x","relu6")};return k.runKernel(fs,t)}var Sc=N({relu6_:G3});function W3(r,e){let o={x:S(r,"x","reverse")},n={dims:e};return k.runKernel(zi,o,n)}var Ve=N({reverse_:W3});function U3(r){let e=S(r,"x","reverse");return E(e.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${e.rank}.`),Ve(e,0)}var lS=N({reverse1d_:U3});function H3(r,e){let t=S(r,"x","reverse");return E(t.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${t.rank}.`),Ve(t,e)}var uS=N({reverse2d_:H3});function K3(r,e){let t=S(r,"x","reverse");return E(t.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${t.rank}.`),Ve(t,e)}var cS=N({reverse3d_:K3});function q3(r,e){let t=S(r,"x","reverse");return E(t.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${t.rank}.`),Ve(t,e)}var pS=N({reverse4d_:q3});function j3(r){let t={x:S(r,"x","round")};return k.runKernel(hs,t)}var Nc=N({round_:j3});function X3(r){let t={x:S(r,"x","rsqrt","float32")};return k.runKernel(ds,t)}var Tc=N({rsqrt_:X3});function Y3(r){let t={x:S(r,"x","selu")};return k.runKernel(gs,t)}var Ic=N({selu_:Y3});function Z3(r,e,t,o,n,s=[1,1],i="NHWC"){let a=S(r,"x","separableConv2d"),l=S(e,"depthwiseFilter","separableConv2d"),u=S(t,"pointwiseFilter","separableConv2d"),c=a,p=!1;if(a.rank===3&&(p=!0,c=R(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(c.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),E(l.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),E(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),E(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),E(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);let m=l.shape[2],f=l.shape[3];E(u.shape[2]===m*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${m*f}, but got ${u.shape[2]}.`);let h=bn(c,l,o,n,i,s),d=Br(h,u,1,"valid",i);return p?R(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var kc=N({separableConv2d_:Z3});function J3(r,e){return B(this,null,function*(){let t=S(r,"x","setdiff1d"),o=S(e,"y","setdiff1d");E(t.dtype===o.dtype,()=>`x and y should have the same dtype, but got x (${t.dtype}) and y (${o.dtype}).`),E(t.rank===1,()=>`x should be 1D tensor, but got x (${t.shape}).`),E(o.rank===1,()=>`y should be 1D tensor, but got y (${o.shape}).`);let n=yield t.data(),s=yield o.data(),i=new Set(s),a=0;for(let c=0;c<n.length;c++)i.has(n[c])||a++;let l=new Ut([a],t.dtype),u=new Ut([a],"int32");for(let c=0,p=0;c<n.length;c++)i.has(n[c])||(l.values[p]=n[c],u.values[p]=c,p++);return[l.toTensor(),u.toTensor()]})}var mS=J3;function Q3(r){let t={x:S(r,"x","sign")};return k.runKernel(bs,t)}var ah=N({sign_:Q3});function tB(r){let t={x:S(r,"x","sin","float32")};return k.runKernel(xs,t)}var Ec=N({sin_:tB});function eB(r){let t={x:S(r,"x","sinh")};return k.runKernel(ys,t)}var Ac=N({sinh_:eB});function rB(r,e,t){let o=S(r,"x","slice1d");return E(o.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${o.rank} tensor`),bt(o,[e],[t])}var $c=N({slice1d_:rB});function oB(r,e,t){let o=S(r,"x","slice2d");return E(o.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${o.rank} tensor`),bt(o,e,t)}var Jp=N({slice2d_:oB});function nB(r,e,t){let o=S(r,"x","slice3d");return E(o.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${o.rank} tensor`),bt(o,e,t)}var Dc=N({slice3d_:nB});function sB(r,e,t){let o=S(r,"x","slice4d");return E(o.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${o.rank} tensor`),bt(o,e,t)}var dl=N({slice4d_:sB});function iB(r,e=-1){let t=S(r,"logits","softmax","float32");if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${t.rank} and dim was ${e}`);let o={logits:t},n={dim:e};return k.runKernel(Ui,o,n)}var pa=N({softmax_:iB});function aB(r){E(r.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${r.dtype}.`);let e={input:r};return k.runKernel(du,e)}var ma=N({fft_:aB});function lB(r){E(r.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${r.dtype}.`);let e={input:r};return k.runKernel(bu,e)}var Os=N({ifft_:lB});function uB(r){let e=r.shape[r.shape.length-1],t=r.size/e,o;if(e<=2){let n=R(r,[t,e]);o=Os(n)}else{let n=[t,2*(e-1)],s=R(Fs(r),[t,e]),i=R(oa(r),[t,e]),a=Ve(bt(s,[0,1],[t,e-2]),1),l=D(Ve(bt(i,[0,1],[t,e-2]),1),st(-1)),u=Gt([s,a],1),c=Gt([i,l],1),p=R(Mr(u,c),[n[0],n[1]]);o=Os(p)}if(o=Fs(o),r.rank===3&&r.shape[0]!==0){let n=o,s=r.shape[0];o=R(o,[s,o.shape[0]/s,o.shape[1]]),n.dispose()}return o}var Rc=N({irfft_:uB});function cB(r,e,t=0){let n={x:S(r,"x","split")},s={numOrSizeSplits:e,axis:t};return k.runKernel(Wi,n,s)}var Ge=N({split_:cB});function pB(r,e){E(r.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${r.dtype}`);let t=r.shape[r.shape.length-1],o=r.size/t,n;if(e!=null&&e<t){let h=r.shape.map(d=>0),g=r.shape.map(d=>d);g[r.shape.length-1]=e,n=bt(r,h,g),t=e}else if(e!=null&&e>t){let h=r.shape.map(g=>g);h[r.shape.length-1]=e-t,n=Gt([r,ne(h)],r.shape.length-1),t=e}else n=r;let s=gt(n),i=R(Mr(n,s),[o,t]),a=ma(i),l=Math.floor(t/2)+1,u=Fs(a),c=oa(a),p=Ge(u,[l,t-l],u.shape.length-1),m=Ge(c,[l,t-l],c.shape.length-1),f=n.shape.slice();return f[n.shape.length-1]=l,R(Mr(p[0],m[0]),f)}var fa=N({rfft_:pB});function mB(r,e){let t=S(r,"a","squaredDifference"),o=S(e,"b","squaredDifference");[t,o]=Lt(t,o),It(t.shape,o.shape);let n={a:t,b:o},s={};return k.runKernel(Ss,n,s)}var _c=N({squaredDifference_:mB});function fB(r,e){let t=S(r,"x","squeeze","string_or_numeric");return R(t,ny(t.shape,e).newShape)}var Cr=N({squeeze_:fB});function hB(r,e=0){let t=el(r,"tensors","stack","string_or_numeric");E(t.length>=1,()=>"Pass at least one tensor to tf.stack"),t.length>0&&E(e<=t[0].rank,()=>"Axis must be <= rank of the tensor");let o=t,n={axis:e};return k.runKernel(Di,o,n)}var be=N({stack_:hB});function dB(r,e=0){let o={x:S(r,"x","step")},n={alpha:e};return k.runKernel(ks,o,n)}var To=N({step_:dB});function gB(r,e,t,o,n=0,s=0,i=0,a=0,l=0){let c={x:S(r,"x","stridedSlice","string_or_numeric")},p={begin:e,end:t,strides:o,beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};return k.runKernel(Ku,c,p)}var lh=N({stridedSlice_:gB});function xB(r){let t={x:S(r,"x","tan","float32")};return k.runKernel(Ts,t)}var uh=N({tan_:xB});function le(r,e){co(r);let t=zr(r,e);if(t.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Ir(r,null,t,e)}function qo(r,e,t){if(co(r),e!=null&&e.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=zr(r,t);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&e==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ir(r,e,o,t)}function ch(r,e,t){if(co(r),e!=null&&e.length!==3)throw new Error("tensor3d() requires shape to have three numbers");let o=zr(r,t);if(o.length!==3&&o.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(o.length===1&&e==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Ir(r,e,o,t)}function fS(r,e,t){if(co(r),e!=null&&e.length!==4)throw new Error("tensor4d() requires shape to have four numbers");let o=zr(r,t);if(o.length!==4&&o.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(o.length===1&&e==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Ir(r,e,o,t)}function hS(r,e,t){if(co(r),e!=null&&e.length!==5)throw new Error("tensor5d() requires shape to have five numbers");let o=zr(r,t);if(o.length!==5&&o.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(o.length===1&&e==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Ir(r,e,o,t)}function dS(r,e,t){if(co(r),e!=null&&e.length!==6)throw new Error("tensor6d() requires shape to have six numbers");let o=zr(r,t);if(o.length!==6&&o.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(o.length===1&&e==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return e=e||o,Ir(r,e,o,t)}function gS(r,e,t){let o=e.rank>1?e.shape[e.rank-1]:1,n=e.rank>1?e.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${t.shape}, indices.shape: ${e.shape}, shape: ${r}, sliceDim: ${o}, and batchDim: ${n}.`;if(t.rank<n)throw new Error(s+` update.rank < ${n}. `);if(r.length<o+(t.rank-n))throw new Error(s+` Output shape length < ${o+(t.rank-n)}`);if(t.rank!==n+r.length-o)throw new Error(s+` update.rank != ${n+r.length-o}`);for(let i=0;i<n;++i)if(t.shape[i]!==e.shape[i])throw new Error(s+` updates.shape[${i}] (${t.shape[i]}) != indices.shape[${i}] (${e.shape[i]}).`);for(let i=0;i<t.rank-n;++i)if(t.shape[i+n]!==r[i+o])throw new Error(s+` updates.shape[${i+n}] (${t.shape[i+n]}) != shape[${i+n}] (${r[i+n]})`)}function Qp(r,e,t){if(e.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${e.rank}.`);if(r.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${r.rank}.`);if(e.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${e.dtype}`);if(t.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${t}`);if(t.length===0){if(e.size===0)throw new Error(`Indices specified for empty output. indices shape: ${e.shape}`);if(r.size===0)throw new Error(`Updates specified for empty output. updates shape: ${r.shape}`)}gS(t,e,r)}function yB(r,e,t){let o=e.shape.length,n=o>1?e.shape[o-1]:1,s=t.length,i=1;for(let p=n;p<s;++p)i*=t[p];let a=n<1?1:n,l=Ot(e.shape)/a,u=[...ln(t.slice(0,n)),1],c=Ot(t);return{sliceRank:n,numUpdates:l,sliceSize:i,strides:u,outputSize:c}}function bB(r,e,t){let o=S(r,"tensor","tensorScatterupdate"),n=S(e,"indices","tensorScatterupdate","int32"),s=S(t,"updates","tensorScatterupdate");if(Qp(s,n,o.shape),o.dtype!==s.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${o.dtype} and ${s.dtype}.`);let i={tensor:o,indices:n,updates:s},a={};return k.runKernel(zu,i,a)}var yS=N({tensorScatterUpdate_:bB});function wB(r,e=1,t=!0){let o=S(r,"x","topk");if(o.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");let n=o.shape[o.shape.length-1];if(e<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${e}`);if(e>n)throw new Error(`'k' passed to topk() must be <= the last dimension (${n}) but got ${e}`);let s={x:o},i={k:e,sorted:t},[a,l]=k.runKernel(Yu,s,i);return{values:a,indices:l}}var ph=N({topk_:wB});function CB(r,e=0,t=1,o,n){if(de(r),o!=null&&o==="bool")throw new Error("Unsupported data type $ { dtype }");let s=new fl(e,t,o,!0,n),i=ft(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var Fc=N({truncatedNormal_:CB});function vB(r,e=0){let t=S(r,"x","unique","string_or_numeric");E(t.rank>0,()=>"The input tensor must be at least 1D");let o={x:t},n={axis:e},[s,i]=k.runKernel(Ju,o,n);return{values:s,indices:i}}var mh=N({unique_:vB});function SB(r,e,t){let o=S(r,"x","unsortedSegmentSum"),n=S(e,"segmentIds","unsortedSegmentSum","int32");E(On(t),()=>"numSegments must be of dtype int");let s={x:o,segmentIds:n},i={numSegments:t};return k.runKernel(Ki,s,i)}var Oc=N({unsortedSegmentSum_:SB});function NB(r,e=0){let t=S(r,"x","unstack","string_or_numeric");E(e>=-t.shape.length&&e<t.shape.length,()=>`Axis = ${e} is not in [-${t.shape.length}, ${t.shape.length})`);let o={value:t},n={axis:e};return k.runKernel(Hi,o,n)}var We=N({unstack_:NB});function bS(r,e){return Yp(r,e,"right")}function fh(r,e=!0,t,o){return k.makeVariable(r,e,t,o)}function hh(r,e){let t=[];for(let s=0;s<e.length;s++)e[s]&&t.push(s);let o=ft(r,"int32"),n=ft([t.length,r.length],"int32");for(let s=0;s<t.length;s++){let i=o.indexToLoc(t[s]),a=s*r.length;n.values.set(i,a)}return n.toTensor()}function TB(r){return B(this,null,function*(){let e=S(r,"condition","whereAsync","bool"),t=yield e.data(),o=hh(e.shape,t);return r!==e&&e.dispose(),o})}var dh=TB;function IB(r,e,t){return B(this,null,function*(){let o=S(r,"tensor","boolMask"),n=S(e,"mask","boolMask","bool"),s=t??0,i=n.rank,a=o.shape;E(i>0,()=>"mask cannot be scalar"),Ee(a.slice(s,s+i),n.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let g=s;g<s+i;g++)l*=a[g];let u=a.slice(0,s).concat([l],a.slice(s+i)),c=R(o,u),p=R(n,[-1]),m=yield dh(p),f=Cr(m,[1]),h=vn(c,f,s);return r!==o&&o.dispose(),e!==n&&n.dispose(),f.dispose(),c.dispose(),p.dispose(),m.dispose(),h})}var kB=IB;function EB(r,e,t){let o=S(r,"x","transpose");if(e==null&&(e=o.shape.map((i,a)=>a).reverse()),E(o.rank===e.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${e}.`),e.forEach(i=>{E(i>=0&&i<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${e}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:e};return o.dtype==="complex64"?M(()=>{let i=Fs(o),a=oa(o);return i=k.runKernel(mn,{x:i},s),a=k.runKernel(mn,{x:a},s),t&&(a=_t(a)),Mr(i,a)}):k.runKernel(mn,n,s)}var Rt=N({transpose_:EB});function AB(r,e,t,o,n=!0){let s=S(r,"v","movingAverage"),i=S(e,"x","movingAverage"),a=S(t,"decay","movingAverage");VC(s,i),E(Xr(s.shape,i.shape),()=>"Shape mismatch in v and x");let l=st(1),u=et(l,a),c=D(et(i,s),u);if(n){E(o!=null,()=>"When using zeroDebias: true, step is required.");let p=S(o,"step","movingAverage");c=rt(c,et(l,mr(a,p)))}return U(s,c)}var $B=N({movingAverage_:AB});function DB(r,e,t){de(t);let o=S(r,"indices","scatterND","int32"),n=S(e,"updates","scatterND");Qp(n,o,t);let s={indices:o,updates:n},i={shape:t};return k.runKernel(Pu,s,i)}var RB=N({scatterND_:DB});function wS(r,e,t,o){if(r.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${r.dtype}.`);if(r.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${r.shape}.`);let n=r.rank>0?r.shape[0]:1,s=r.rank>1?r.shape[1]:1;if(t.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${t.length}, should be: ${s}.`);let i=e.size;if(!(e.rank===0||e.rank===1&&i===n))throw new Error(`sparseValues has incorrect shape ${e.shape}, should be [] or [${n}]`);if(e.dtype!==o.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function FB(r,e,t,o=0){de(t);let n=S(r,"sparseIndices","sparseToDense","int32"),s=S(e,"sparseValues","sparseToDense","string_or_numeric"),i=S(o,"defaultValue","sparseToDense",s.dtype);wS(n,s,t,i);let a={sparseIndices:n,sparseValues:s,defaultValue:i},l={outputShape:t};return k.runKernel(Uu,a,l)}var OB=N({sparseToDense_:FB});function LB(r,e){let t=S(e,"indices","gatherND","int32"),n={params:S(r,"x","gatherND","string_or_numeric"),indices:t};return k.runKernel(yu,n)}var PB=N({gatherND_:LB});function CS(r,e){if(e==null)return r.shape.slice();if(Xr(r.shape,e))return e;if(r.shape.length===e.length){let t=[];for(let o=0;o<r.shape.length;o++)e[o]==null&&r.shape[o]!=null?t.push(r.shape[o]):t.push(e[o]);return t}return e}function zB(r,e,t,o){let n=S(r,"x","dropout");if(E(n.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${n.dtype} tensor instead.`),E(e>=0&&e<1,()=>`rate must be a float in the range [0, 1), but got ${e}.`),e===0)return r instanceof Ft?n.clone():n;let s=CS(n,t),i=1-e,a=rt(Cn(U(to(s,0,1,"float32",o),i)),i);return D(n,a)}var Xy=N({dropout_:zB});function Yy(r){return Math.floor(Math.pow(2,Math.ceil(Math.log(r)/Math.log(2))))}function tm(r,e,t){let o=1-r%2,n=new Float32Array(r);for(let s=0;s<r;++s){let i=2*Math.PI*s/(r+o-1);n[s]=e-t*Math.cos(i)}return le(n,"float32")}function MB(r,e,t=1){return B(this,null,function*(){let o=S(r,"predictions","inTopK"),n=S(e,"targets","inTopK");E(o.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${o.rank}`),E(o.rank-1===n.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${o.rank} and targets rank ${n.rank}`),Ee(o.shape.slice(0,o.shape.length-1),n.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let s=o.shape[o.shape.length-1];E(t>0&&t<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${t}`);let i=yield o.data(),a=yield n.data(),[l,u]=[i.length/s,s],c=sy("bool",l);for(let p=0;p<l;p++){let m=p*u,f=i.subarray(m,m+u),h=[];for(let g=0;g<f.length;g++)h.push({value:f[g],index:g});h.sort((g,d)=>d.value-g.value),c[p]=0;for(let g=0;g<t;g++)if(h[g].index===a[p]){c[p]=1;break}}return r!==o&&o.dispose(),e!==n&&n.dispose(),qe(c,n.shape,"bool")})}var BB=MB;var ha={};Zt(ha,{conv2d:()=>vS,depthwiseConv2d:()=>SS,matMul:()=>NS});function VB(r,e,t,o,n,s="NHWC",i){let a=r;r.rank===3&&(a=R(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let l=e;l.rank===3&&(l=R(e,[1,e.shape[0],e.shape[1],e.shape[2]])),E(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),E(l.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),E(t.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${t}.`);let u=s==="NHWC"?a.shape[3]:a.shape[1],c=s==="NHWC"?l.shape[3]:l.shape[1];E(u===t[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${t[2]}.`),E(c===t[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${t[3]}).`),ee("conv2dDerFilter",n,i);let p={x:a,dy:l},m={strides:o,pad:n,dataFormat:s,dimRoundingMode:i,filterShape:t};return k.runKernel(ou,p,m)}var Lc=N({conv2DBackpropFilter_:VB});function gl(r,e,t){if(t==null||t==="linear")return r;if(t==="relu")return D(r,To(e));throw new Error(`Cannot compute gradient for fused activation ${t}.`)}function xl(r,e){let t=e,o=Jt(r.shape,e.shape);return o.length>0&&(t=it(t,o)),R(t,r.shape)}function yl(r,e,t,o){if(e==="linear")return r;if(e==="relu")return ar(r);if(e==="elu")return wn(r);if(e==="relu6")return Sc(r);if(e==="prelu")return ca(r,t);if(e==="leakyrelu")return na(r,o);if(e==="sigmoid")return sr(r);throw new Error(`Unknown fused activation ${e}.`)}var bl=(r,e)=>!(r>0)||e==="linear";function GB({x:r,filter:e,strides:t,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(l=l||"linear",bl(k.state.gradientDepth,l)===!1){E(n==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${n} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let A=Br(r,e,t,o,n,s,i);return a!=null&&(A=U(A,a)),yl(A,l,u,c)}let p=S(r,"x","conv2d","float32"),m=S(e,"filter","conv2d","float32"),f=p,h=!1;p.rank===3&&(h=!0,f=R(p,[1,p.shape[0],p.shape[1],p.shape[2]])),E(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),E(m.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${m.rank}.`),ee("fused conv2d",o,i);let g=n==="NHWC"?f.shape[3]:f.shape[1];E(m.shape[2]===g,()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${m.shape[2]}.`),E(nr(t,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`);let d=al(f.shape,m.shape,t,s,o,i),x;a!=null&&(x=S(a,"bias","fused conv2d"),[x]=Lt(x,p),n==="NHWC"?It(d.outShape,x.shape):(E(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),E(x.shape.length===0||x.shape[0]===d.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${d.outChannels})`)));let y;if(u!=null){let A=u.shape;if(E(A.length<=1||A.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${A.length}.`),A.length===1)E(A[0]===1||A[0]===d.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${A}) is not compatible with the number of output channels (${d.outChannels}).`);else if(A.length===3)try{It(A,d.outShape)}catch{let _=`Error in fused conv2d: PReLU activation weights (${A}) is not compatible with the output shape of the conv2d (${d.outShape}).`;throw Error(_)}y=S(u,"prelu weights","fused conv2d")}let w=(A,$)=>{E(n==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${n} but only NHWC is currently supported.`);let[_,O,z,V]=$,G=gl(A,z,l);E(po(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let W=gc(O.shape,G,_,t,o),H=Lc(O,G,_.shape,t,o),K=[W,H];if(V!=null){let Y=xl(V,G);K.push(Y)}return K},C={x:f,filter:m,bias:x,preluActivationWeights:y},T={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i,activation:l,leakyreluAlpha:c};return a==null?Vr(($,_,O)=>{let z=k.runKernel(qa,C,T);return O([_,$,z]),h&&(z=R(z,[z.shape[1],z.shape[2],z.shape[3]])),{value:z,gradFunc:w}})(f,m):Vr(($,_,O,z)=>{let V=k.runKernel(qa,C,T);return z([_,$,V,O]),h&&(V=R(V,[V.shape[1],V.shape[2],V.shape[3]])),{value:V,gradFunc:w}})(f,m,x)}var vS=N({fusedConv2d_:GB});function WB(r,e,t,o,n,s=[1,1],i){let a=r;r.rank===3&&(a=R(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let l=e;l.rank===3&&(l=R(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u={x:a,dy:l},c={strides:o,pad:n,dimRoundingMode:i,dilations:s,filterShape:t};return k.runKernel(cu,u,c)}var gh=N({depthwiseConv2dNativeBackpropFilter_:WB});function UB(r,e,t,o,n,s=[1,1],i){let a=e,l=!1;e.rank===3&&(l=!0,a=R(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let u={dy:a,filter:t},c={strides:o,pad:n,dimRoundingMode:i,dilations:s,inputShape:r},p=k.runKernel(pu,u,c);return l?R(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var xh=N({depthwiseConv2dNativeBackpropInput_:UB});function HB({x:r,filter:e,strides:t,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){if(bl(k.state.gradientDepth,l)===!1){let T=bn(r,e,t,o,n,s,i);return a!=null&&(T=U(T,a)),yl(T,l,u,c)}let p=S(r,"x","depthwiseConv2d","float32"),m=S(e,"filter","depthwiseConv2d","float32"),f=p,h=!1;p.rank===3&&(h=!0,f=R(p,[1,p.shape[0],p.shape[1],p.shape[2]])),E(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),E(m.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${m.rank}.`),E(f.shape[3]===m.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${m.shape[2]}.`),s==null&&(s=[1,1]),E(nr(t,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${t} and dilations '${s}'`),ee("fused depthwiseConv2d",o,i);let g=al(f.shape,m.shape,t,s,o,i,!0),d;a!=null&&(d=S(a,"bias","fused conv2d"),[d]=Lt(d,p),It(g.outShape,d.shape));let x;u!=null&&(x=S(u,"prelu weights","fused depthwiseConv2d"));let y=(T,A)=>{E(po(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[$,_,O,z]=A,V=gl(T,O,l),G=xh(_.shape,V,$,t,o,s,i),W=gh(_,V,$.shape,t,o,s,i);if(z!=null){let H=xl(d,V);return[G,W,H]}return[G,W]},w={x:f,filter:m,bias:d,preluActivationWeights:x},C={strides:t,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i,activation:l,leakyreluAlpha:c};return a==null?Vr((A,$,_)=>{let O=k.runKernel(ja,w,C);return _([$,A,O]),h&&(O=R(O,[O.shape[1],O.shape[2],O.shape[3]])),{value:O,gradFunc:y}})(f,m):Vr((A,$,_,O)=>{let z=k.runKernel(ja,w,C);return O([$,A,z,_]),h&&(z=R(z,[z.shape[1],z.shape[2],z.shape[3]])),{value:z,gradFunc:y}})(f,m,d)}var SS=N({fusedDepthwiseConv2d_:HB});function KB({a:r,b:e,transposeA:t=!1,transposeB:o=!1,bias:n,activation:s="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(bl(k.state.gradientDepth,s)===!1){let V=Dt(r,e,t,o);return n!=null&&(V=U(V,n)),yl(V,s,i,a)}let l=S(r,"a","fused matMul"),u=S(e,"b","fused matMul");[l,u]=Lt(l,u);let c=t?l.shape[l.rank-2]:l.shape[l.rank-1],p=o?u.shape[u.rank-1]:u.shape[u.rank-2],m=t?l.shape[l.rank-1]:l.shape[l.rank-2],f=o?u.shape[u.rank-2]:u.shape[u.rank-1],h=l.shape.slice(0,-2),g=u.shape.slice(0,-2),d=Ot(h),x=Ot(g);E(c===p,()=>`Error in fused matMul: inner shapes (${c}) and (${p}) of Tensors with shapes ${l.shape} and ${u.shape} and transposeA=${t} and transposeB=${o} must match.`);let w=It(l.shape.slice(0,-2),u.shape.slice(0,-2)).concat([m,f]),C=t?R(l,[d,c,m]):R(l,[d,m,c]),T=o?R(u,[x,f,p]):R(u,[x,p,f]),A;n!=null&&(A=S(n,"bias","fused matMul"),[A]=Lt(A,l),It(w,A.shape));let $;i!=null&&($=S(i,"prelu weights","fused matMul"));let _=(V,G)=>{let[W,H,K,Y]=G,J=gl(R(V,K.shape),K,s),X,Q;if(!t&&!o?(X=Dt(J,H,!1,!0),Q=Dt(W,J,!0,!1)):!t&&o?(X=Dt(J,H,!1,!1),Q=Dt(J,W,!0,!1)):t&&!o?(X=Dt(H,J,!1,!0),Q=Dt(W,J,!1,!1)):(X=Dt(H,J,!0,!0),Q=Dt(J,W,!0,!0)),n!=null){let ot=xl(Y,J);return[X,Q,ot]}else return[X,Q]},O={a:C,b:T,bias:A,preluActivationWeights:$},z={transposeA:t,transposeB:o,activation:s,leakyreluAlpha:a};return n==null?Vr((G,W,H)=>{let K=k.runKernel(Ka,O,z);return H([G,W,K]),{value:R(K,w),gradFunc:_}})(C,T):Vr((G,W,H,K)=>{let Y=k.runKernel(Ka,O,z);return K([G,W,Y,H]),{value:R(Y,w),gradFunc:_}})(C,T,A)}var NS=N({fusedMatMul_:KB});function qB(r){return tm(r,.54,.46)}var TS=N({hammingWindow_:qB});function jB(r){return tm(r,.5,.5)}var yh=N({hannWindow_:jB});function XB(r,e,t,o=!1,n=0){let s=0,i=[];for(;s+e<=r.size;)i.push(bt(r,s,e)),s+=t;if(o)for(;s<r.size;){let a=s+e-r.size,l=Gt([bt(r,s,e-a),So([a],n)]);i.push(l),s+=t}return i.length===0?qo([],[0,e]):R(Gt(i),[i.length,e])}var bh=N({frame_:XB});function YB(r,e,t,o,n=yh){o==null&&(o=Yy(e));let s=bh(r,e,t),i=D(s,n(e));return fa(i,o)}var IS=N({stft_:YB});function ZB(r,e,t,o,n="bilinear",s=0){let i=S(r,"image","cropAndResize"),a=S(e,"boxes","cropAndResize","float32"),l=S(t,"boxInd","cropAndResize","int32"),u=a.shape[0];E(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),E(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${a.shape}.`),E(l.rank===1&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${a.shape}.`),E(o.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${o.length}.`),E(o[0]>=1&&o[1]>=1,()=>`cropSize must be atleast [1,1], but was ${o}`),E(n==="bilinear"||n==="nearest",()=>`method must be bilinear or nearest, but was ${n}`);let c={image:i,boxes:a,boxInd:l},p={method:n,extrapolationValue:s,cropSize:o};return k.runKernel(au,c,p)}var kS=N({cropAndResize_:ZB});function JB(r){let e=S(r,"image","flipLeftRight","float32");E(e.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${e.rank}.`);let t={image:e};return k.runKernel(xu,t,{})}var ES=N({flipLeftRight_:JB});function QB(r){let e=S(r,"image","grayscaleToRGB"),t=e.rank-1,o=e.shape[t];E(e.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${e.rank}.`),E(o===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${o}.`);let n=new Array(e.rank);return n.fill(1,0,t),n[t]=3,ir(e,n)}var AS=N({grayscaleToRGB_:QB});function tV(r){let e=S(r,"image","RGBToGrayscale"),t=e.rank-1,o=e.shape[t];E(e.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${e.rank}.`),E(o===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${o}.`);let n=e.dtype,s=j(e,"float32"),i=le([.2989,.587,.114]),a;switch(e.rank){case 2:a=ra("ij,j->i",s,i);break;case 3:a=ra("ijk,k->ij",s,i);break;case 4:a=ra("ijkl,l->ijk",s,i);break;case 5:a=ra("ijklm,m->ijkl",s,i);break;case 6:a=ra("ijklmn,n->ijklm",s,i);break;default:throw new Error("Not a valid tensor rank.")}return a=xe(a,-1),j(a,n)}var $S=N({rgbToGrayscale_:tV});function eV(r,e,t=0,o=.5){let n=S(r,"image","rotateWithOffset","float32");E(n.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${n.rank}.`);let s={image:n},i={radians:e,fillValue:t,center:o};return k.runKernel(Qu,s,i)}var DS=N({rotateWithOffset_:eV});function Io(r,e,t,o,n,s){o==null&&(o=.5),n==null&&(n=Number.NEGATIVE_INFINITY),s==null&&(s=0);let i=r.shape[0];return t=Math.min(t,i),E(0<=o&&o<=1,()=>`iouThreshold must be in [0, 1], but was '${o}'`),E(r.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${r.rank}'`),E(r.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${r.shape[1]}`),E(e.rank===1,()=>"scores must be a 1D tensor"),E(e.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${e.shape[0]}`),E(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:t,iouThreshold:o,scoreThreshold:n,softNmsSigma:s}}function rV(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY){let s=S(r,"boxes","nonMaxSuppression","float32"),i=S(e,"scores","nonMaxSuppression","float32"),a=Io(s,i,t,o,n);t=a.maxOutputSize,o=a.iouThreshold,n=a.scoreThreshold;let l={maxOutputSize:t,iouThreshold:o,scoreThreshold:n};return k.runKernel(ku,{boxes:s,scores:i},l)}var RS=N({nonMaxSuppression_:rV});function _S(r,e,t){let o=oV(r,e,t),n=o<0?-(o+1):o;r.splice(n,0,e)}function oV(r,e,t){return sV(r,e,t||nV)}function nV(r,e){return r>e?1:r<e?-1:0}function sV(r,e,t){let o=0,n=r.length,s=0,i=!1;for(;o<n;){s=o+(n-o>>>1);let a=t(e,r[s]);a>0?o=s+1:(n=s,i=!a)}return i?o:-o-1}function wh(r,e,t,o,n){return Zy(r,e,t,o,n,0)}function Ch(r,e,t,o,n,s){return Zy(r,e,t,o,n,0,!1,s,!0)}function vh(r,e,t,o,n,s){return Zy(r,e,t,o,n,s,!0)}function Zy(r,e,t,o,n,s,i=!1,a=!1,l=!1){let u=[];for(let d=0;d<e.length;d++)e[d]>n&&u.push({score:e[d],boxIndex:d,suppressBeginIndex:0});u.sort(FS);let c=s>0?-.5/s:0,p=[],m=[];for(;p.length<t&&u.length>0;){let d=u.pop(),{score:x,boxIndex:y,suppressBeginIndex:w}=d;if(x<n)break;let C=!1;for(let T=p.length-1;T>=w;--T){let A=iV(r,y,p[T]);if(A>=o){C=!0;break}if(d.score=d.score*aV(o,c,A),d.score<=n)break}d.suppressBeginIndex=p.length,C||(d.score===x?(p.push(y),m.push(d.score)):d.score>n&&_S(u,d,FS))}let f=p.length,h=t-f;a&&h>0&&(p.push(...new Array(h).fill(0)),m.push(...new Array(h).fill(0)));let g={selectedIndices:p};return i&&(g.selectedScores=m),l&&(g.validOutputs=f),g}function iV(r,e,t){let o=r.subarray(e*4,e*4+4),n=r.subarray(t*4,t*4+4),s=Math.min(o[0],o[2]),i=Math.min(o[1],o[3]),a=Math.max(o[0],o[2]),l=Math.max(o[1],o[3]),u=Math.min(n[0],n[2]),c=Math.min(n[1],n[3]),p=Math.max(n[0],n[2]),m=Math.max(n[1],n[3]),f=(a-s)*(l-i),h=(p-u)*(m-c);if(f<=0||h<=0)return 0;let g=Math.max(s,u),d=Math.max(i,c),x=Math.min(a,p),y=Math.min(l,m),w=Math.max(x-g,0)*Math.max(y-d,0);return w/(f+h-w)}function aV(r,e,t){let o=Math.exp(e*t*t);return t<=r?o:0}function FS(r,e){return r.score-e.score||r.score===e.score&&e.boxIndex-r.boxIndex}function lV(s,i,a){return B(this,arguments,function*(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY){let l=S(r,"boxes","nonMaxSuppressionAsync"),u=S(e,"scores","nonMaxSuppressionAsync"),c=Io(l,u,t,o,n);t=c.maxOutputSize,o=c.iouThreshold,n=c.scoreThreshold;let p=yield Promise.all([l.data(),u.data()]),m=p[0],f=p[1],{selectedIndices:h}=wh(m,f,t,o,n);return l!==r&&l.dispose(),u!==e&&u.dispose(),le(h,"int32")})}var OS=lV;function uV(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let i=S(r,"boxes","nonMaxSuppression"),a=S(e,"scores","nonMaxSuppression"),l=Io(i,a,t,o,n,s);t=l.maxOutputSize,o=l.iouThreshold,n=l.scoreThreshold,s=l.softNmsSigma;let u={boxes:i,scores:a},c={maxOutputSize:t,iouThreshold:o,scoreThreshold:n,softNmsSigma:s},p=k.runKernel(Au,u,c);return{selectedIndices:p[0],selectedScores:p[1]}}var LS=N({nonMaxSuppressionWithScore_:uV});function cV(i,a,l){return B(this,arguments,function*(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let u=S(r,"boxes","nonMaxSuppressionAsync"),c=S(e,"scores","nonMaxSuppressionAsync"),p=Io(u,c,t,o,n,s);t=p.maxOutputSize,o=p.iouThreshold,n=p.scoreThreshold,s=p.softNmsSigma;let m=yield Promise.all([u.data(),c.data()]),f=m[0],h=m[1],{selectedIndices:g,selectedScores:d}=vh(f,h,t,o,n,s);return u!==r&&u.dispose(),c!==e&&c.dispose(),{selectedIndices:le(g,"int32"),selectedScores:le(d)}})}var PS=cV;function pV(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let i=S(r,"boxes","nonMaxSuppression"),a=S(e,"scores","nonMaxSuppression"),l=Io(i,a,t,o,n,null),u=l.maxOutputSize,c=l.iouThreshold,p=l.scoreThreshold,m={boxes:i,scores:a},f={maxOutputSize:u,iouThreshold:c,scoreThreshold:p,padToMaxOutputSize:s},h=k.runKernel(Eu,m,f);return{selectedIndices:h[0],validOutputs:h[1]}}var zS=N({nonMaxSuppressionPadded_:pV});function mV(i,a,l){return B(this,arguments,function*(r,e,t,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let u=S(r,"boxes","nonMaxSuppressionAsync"),c=S(e,"scores","nonMaxSuppressionAsync"),p=Io(u,c,t,o,n,null),m=p.maxOutputSize,f=p.iouThreshold,h=p.scoreThreshold,[g,d]=yield Promise.all([u.data(),c.data()]),{selectedIndices:x,validOutputs:y}=Ch(g,d,m,f,h,s);return u!==r&&u.dispose(),c!==e&&c.dispose(),{selectedIndices:le(x,"int32"),validOutputs:st(y,"int32")}})}var MS=mV;function fV(r,e,t=!1,o=!1){let n=S(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${n.rank}.`),E(e.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${e}.`),E(o===!1||t===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=n,i=!1;n.rank===3&&(i=!0,s=R(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=e,a={images:s},l={alignCorners:t,halfPixelCenters:o,size:e},u=k.runKernel(Pi,a,l);return i?R(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Sh=N({resizeBilinear_:fV});function hV(r,e,t=!1,o=!1){let n=S(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${n.rank}.`),E(e.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${e}.`),E(n.dtype==="float32"||n.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),E(o===!1||t===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=n,i=!1;n.rank===3&&(i=!0,s=R(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=e,a={images:s},l={alignCorners:t,halfPixelCenters:o,size:e},u=k.runKernel(Li,a,l);return i?R(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Nh=N({resizeNearestNeighbor_:hV});function dV(r,e="binary",t=!1,o=.5){let n=S(r,"image","threshold"),s=.2989,i=.587,a=.114,l=n.shape[0]*n.shape[1],u=D(le([o]),255),c,p,m,f;if(E(n.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${n.rank}.`),E(n.shape[2]===3||n.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${n.shape[2]}.`),E(n.dtype==="int32"||n.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${n.dtype}.`),E(e==="otsu"||e==="binary",()=>`Method must be binary or otsu, but was ${e}`),n.shape[2]===3){[c,p,m]=Ge(n,[1,1,1],-1);let d=D(c,s),x=D(p,i),y=D(m,a);f=U(U(d,x),y)}else f=r;if(e==="otsu"){let d=$f(j(Nc(f),"int32"),qe([]),256);u=gV(d,l)}let h=t?Qr(f,u):ye(f,u);return j(D(h,255),"int32")}function gV(r,e){let t=le([-1]),o=le([0]),n=le([0]),s,i,a,l,u,c;for(let p=0;p<r.size-1;p++){s=bt(r,0,p+1),i=bt(r,p+1),u=rt(it(s),e),c=rt(it(i),e);let m=it(D(s,Sn(0,s.size)));a=rt(m,it(s));let f=So(i.shape,s.size),h=U(Sn(0,i.size),f),g=D(i,h);l=rt(it(g),it(i));let d=et(a,l),x=et(a,l),y=D(u,c);n=D(D(y,d),x);let w=ye(n,o);o=re(w,n,o),t=re(w,le([p]),t)}return t}var BS=N({threshold_:dV});function xV(r,e,t="nearest",o="constant",n=0,s){let i=S(r,"image","transform","float32"),a=S(e,"transforms","transform","float32");E(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),E(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),E(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);let l={image:i,transforms:a},u={interpolation:t,fillMode:o,fillValue:n,outputShape:s};return k.runKernel(Zu,l,u)}var VS=N({transform_:xV});function yV(r,e,t){let o=S(r,"a","bandPart");E(o.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${o.rank}.`);let n=o.shape,[s,i]=o.shape.slice(-2),a,l;typeof e=="number"?(E(e%1===0,()=>`bandPart(): numLower must be an integer, got ${e}.`),E(e<=s,()=>`bandPart(): numLower (${e}) must not be greater than the number of rows (${s}).`),a=S(e<0?s:e,"numLower","bandPart")):(E(e.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),a=re(_s(e,0),s,fo(e,s))),typeof t=="number"?(E(t%1===0,()=>`bandPart(): numUpper must be an integer, got ${t}.`),E(t<=i,()=>`bandPart(): numUpper (${t}) must not be greater than the number of columns (${i}).`),l=S(t<0?i:t,"numUpper","bandPart")):(E(t.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),l=re(_s(t,0),i,fo(t,i)));let u=R(Sn(0,s,1,"int32"),[-1,1]),c=Sn(0,i,1,"int32"),p=et(u,c),m=fr(Qr(p,a),Er(p,_t(l))),f=ne([s,i],o.dtype);return R(be(We(R(o,[-1,s,i])).map(h=>re(m,h,f))),n)}var GS=N({bandPart_:yV});function bV(r){let e;if(Array.isArray(r)){e=!1,E(r!=null&&r.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=r[0].shape[0];for(let s=1;s<r.length;++s)E(r[s].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${r[s].shape[0]} vs. ${n})`)}else e=!0,r=Ge(r,r.shape[0],0).map(n=>Cr(n,[0]));E(r.length<=r[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${r.length}) exceeds number of dimensions (${r[0].shape[0]}).`);let t=[],o=r;for(let n=0;n<r.length;++n)t.push(k.tidy(()=>{let s=o[n];if(n>0)for(let i=0;i<n;++i){let a=D(it(D(t[i],s)),t[i]);s=et(s,a)}return rt(s,Rs(s,"euclidean"))}));return e?be(t,0):t}var WS=N({gramSchmidt_:bV});function wV(r,e=!1){if(E(r.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${r.rank}`),r.rank===2)return US(r,e);{let t=r.shape.slice(0,r.shape.length-2).reduce((l,u)=>l*u),o=We(R(r,[t,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),n=[],s=[];o.forEach(l=>{let[u,c]=US(l,e);n.push(u),s.push(c)});let i=R(be(n,0),r.shape),a=R(be(s,0),r.shape);return[i,a]}}function US(r,e=!1){return k.tidy(()=>{E(r.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${r.shape.length}D Tensor.`);let t=r.shape[0],o=r.shape[1],n=ul(t),s=kr(r),i=qo([[1]],[1,1]),a=kr(i),l=t>=o?o:t;for(let u=0;u<l;++u){let c=s,p=a,m=n;[a,s,n]=k.tidy(()=>{let f=bt(s,[u,u],[t-u,1]),h=Rs(f),g=bt(s,[u,u],[1,1]),d=re(ye(g,0),qo([[-1]]),qo([[1]])),x=et(g,D(d,h)),y=rt(f,x);y.shape[0]===1?a=kr(i):a=Gt([i,bt(y,[1,0],[y.shape[0]-1,y.shape[1]])],0);let w=_t(rt(Dt(d,x),h)),C=bt(s,[u,0],[t-u,o]),T=D(w,a),A=Rt(a);if(u===0)s=et(C,Dt(T,Dt(A,C)));else{let O=et(C,Dt(T,Dt(A,C)));s=Gt([bt(s,[0,0],[u,o]),O],0)}let $=Rt(T),_=bt(n,[0,u],[t,n.shape[1]-u]);if(u===0)n=et(_,Dt(Dt(_,a),$));else{let O=et(_,Dt(Dt(_,a),$));n=Gt([bt(n,[0,0],[t,u]),O],1)}return[a,s,n]}),Nt([c,p,m])}return!e&&t>o&&(n=bt(n,[0,0],[t,o]),s=bt(s,[0,0],[o,o])),[n,s]})}var HS=N({qr_:wV});var Pe=function(r){return r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS",r}(Pe||{});function CV(r,e,t=Pe.SUM_BY_NONZERO_WEIGHTS){let o=S(r,"losses","computeWeightedLoss"),n=null;e!=null&&(n=S(e,"weights","computeWeightedLoss"));let s=n==null?o:D(o,n);if(t===Pe.NONE)return s;if(t===Pe.SUM)return it(s);if(t===Pe.MEAN){if(n==null)return oe(s);{let i=o.size/n.size,a=rt(it(s),it(n));return i>1?rt(a,st(i)):a}}if(t===Pe.SUM_BY_NONZERO_WEIGHTS){if(n==null)return rt(it(s),st(o.size));{let i=D(n,Fe(o.shape)),a=j(it(Ko(i,st(0))),"float32");return rt(it(s),a)}}throw Error(`Unknown reduction: ${t}`)}var hr=N({computeWeightedLoss_:CV});function vV(r,e,t,o=Pe.SUM_BY_NONZERO_WEIGHTS){let n=S(r,"labels","absoluteDifference"),s=S(e,"predictions","absoluteDifference"),i=null;t!=null&&(i=S(t,"weights","absoluteDifference")),Ee(n.shape,s.shape,"Error in absoluteDifference: ");let a=ae(et(n,s));return hr(a,i,o)}var KS=N({absoluteDifference_:vV});function SV(r,e,t,o,n=Pe.SUM_BY_NONZERO_WEIGHTS){let s=S(r,"labels","cosineDistance"),i=S(e,"predictions","cosineDistance"),a=null;o!=null&&(a=S(o,"weights","cosineDistance")),Ee(s.shape,i.shape,"Error in cosineDistance: ");let l=st(1),u=et(l,it(D(s,i),t,!0));return hr(u,a,n)}var qS=N({cosineDistance_:SV});function NV(r,e,t,o=Pe.SUM_BY_NONZERO_WEIGHTS){let n=S(r,"labels","hingeLoss"),s=S(e,"predictions","hingeLoss"),i=null;t!=null&&(i=S(t,"weights","hingeLoss")),Ee(n.shape,s.shape,"Error in hingeLoss: ");let a=st(1);n=et(D(st(2),n),a);let l=ar(et(a,D(n,s)));return hr(l,i,o)}var jS=N({hingeLoss_:NV});function TV(r,e,t,o=1,n=Pe.SUM_BY_NONZERO_WEIGHTS){let s=S(r,"labels","huberLoss"),i=S(e,"predictions","huberLoss"),a=null;t!=null&&(a=S(t,"weights","huberLoss")),Ee(s.shape,i.shape,"Error in huberLoss: ");let l=st(o),u=ae(et(i,s)),c=fo(u,l),p=et(u,c),m=U(D(st(.5),$t(c)),D(l,p));return hr(m,a,n)}var XS=N({huberLoss_:TV});function IV(r,e,t,o=1e-7,n=Pe.SUM_BY_NONZERO_WEIGHTS){let s=S(r,"labels","logLoss"),i=S(e,"predictions","logLoss"),a=null;t!=null&&(a=S(t,"weights","logLoss")),Ee(s.shape,i.shape,"Error in logLoss: ");let l=st(1),u=st(o),c=_t(D(s,Ze(U(i,u)))),p=D(et(l,s),Ze(U(et(l,i),u))),m=et(c,p);return hr(m,a,n)}var YS=N({logLoss_:IV});function kV(r,e,t,o=Pe.SUM_BY_NONZERO_WEIGHTS){let n=S(r,"labels","meanSquaredError"),s=S(e,"predictions","meanSquaredError"),i=null;t!=null&&(i=S(t,"weights","meanSquaredError")),Ee(n.shape,s.shape,"Error in meanSquaredError: ");let a=_c(n,s);return hr(a,i,o)}var ZS=N({meanSquaredError_:kV});function EV(r,e){let t=S(r,"labels","sigmoidCrossEntropyWithLogits"),o=S(e,"logits","sigmoidCrossEntropyWithLogits");Ee(t.shape,o.shape,"Error in sigmoidCrossEntropyWithLogits: ");let n=ar(o),s=D(o,t),i=sa(Ie(_t(ae(o))));return U(et(n,s),i)}function AV(r,e,t,o=0,n=Pe.SUM_BY_NONZERO_WEIGHTS){let s=S(r,"multiClassLabels","sigmoidCrossEntropy"),i=S(e,"logits","sigmoidCrossEntropy"),a=null;if(t!=null&&(a=S(t,"weights","sigmoidCrossEntropy")),Ee(s.shape,i.shape,"Error in sigmoidCrossEntropy: "),o>0){let u=st(o),c=st(1),p=st(.5);s=U(D(s,et(c,u)),D(p,u))}let l=EV(s,i);return hr(l,a,n)}var JS=N({sigmoidCrossEntropy_:AV});function $V(r,e,t=-1){if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${e.rank} and dim was ${t}`);return Vr((n,s,i)=>{let l=ia(s,[t],!0),u=et(j(s,"float32"),l);i([n,u]);let c=_t(D(u,n));return{value:it(c,[t]),gradFunc:(f,h)=>{let[g,d]=h,x=No(f.shape,[t]);return[D(R(f,x),et(j(g,"float32"),Ie(d))),D(R(f,x),et(Ie(d),j(g,"float32")))]}}})(r,e)}function DV(r,e,t,o=0,n=Pe.SUM_BY_NONZERO_WEIGHTS){let s=S(r,"onehotLabels","softmaxCrossEntropy"),i=S(e,"logits","softmaxCrossEntropy"),a=null;if(t!=null&&(a=S(t,"weights","softmaxCrossEntropy")),Ee(s.shape,i.shape,"Error in softmaxCrossEntropy: "),o>0){let u=st(o),c=st(1),p=st(s.shape[1]);s=U(D(s,et(c,u)),rt(u,p))}let l=$V(s,i);return hr(l,a,n)}var QS=N({softmaxCrossEntropy_:DV});function RV(r,e,t,o){let n=S(r,"indices","sparseFillEmptyRows","int32"),s=S(e,"values","sparseFillEmptyRows"),i=S(t,"denseShape","sparseFillEmptyRows","int32"),a=S(o,"defaultValue","sparseFillEmptyRows",s.dtype);if(n.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${n.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);let l={indices:n,values:s,denseShape:i,defaultValue:a},u=k.runKernel(Bu,l);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}var tN=N({sparseFillEmptyRows_:RV});function _V(r,e,t){let o=S(r,"inputIndices","sparseReshape","int32"),n=S(e,"inputShape","sparseReshape","int32"),s=S(t,"newShape","sparseReshape","int32");if(o.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${o.shape}`);if(n.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${n.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);let i={inputIndices:o,inputShape:n,newShape:s},a=k.runKernel(Vu,i);return{outputIndices:a[0],outputShape:a[1]}}var eN=N({sparseReshape_:_V});function FV(r,e,t){let o=S(r,"data","sparseSegmentMean"),n=S(e,"indices","sparseSegmentMean","int32"),s=S(t,"segmentIds","sparseSegmentMean","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${n.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);let i={data:o,indices:n,segmentIds:s};return k.runKernel(Gu,i)}var rN=N({sparseSegmentMean_:FV});function OV(r,e,t){let o=S(r,"data","sparseSegmentSum"),n=S(e,"indices","sparseSegmentSum","int32"),s=S(t,"segmentIds","sparseSegmentSum","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${n.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);let i={data:o,indices:n,segmentIds:s};return k.runKernel(Wu,i)}var oN=N({sparseSegmentSum_:OV});function LV(r,e,t,o,n,s,i,a){let l=S(r,"data","stringNGrams","string");if(l.dtype!=="string")throw new Error("Data must be of datatype string");if(l.shape.length!==1)throw new Error(`Data must be a vector, saw: ${l.shape}`);let u=S(e,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");let c={separator:t,nGramWidths:o,leftPad:n,rightPad:s,padWidth:i,preserveShortSequences:a},p={data:l,dataSplits:u},m=k.runKernel(qu,p,c);return{nGrams:m[0],nGramsSplits:m[1]}}var nN=N({stringNGrams_:LV});function PV(r,e,t=!0){let o=S(r,"input","stringSplit","string"),n=S(e,"delimiter","stringSplit","string");if(o.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${o.shape}`);if(n.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${n.shape}`);let s={skipEmpty:t},i={input:o,delimiter:n},a=k.runKernel(ju,i,s);return{indices:a[0],values:a[1],shape:a[2]}}var sN=N({stringSplit_:PV});function zV(r,e){let t=S(r,"input","stringToHashBucketFast","string"),o={numBuckets:e};if(e<=0)throw new Error("Number of buckets must be at least 1");let n={input:t};return k.runKernel(Xu,n,o)}var iN=N({stringToHashBucketFast_:zV});function MV(r,e,t,o=!0){let n=S(r,"input","staticRegexReplace","string"),s={pattern:e,rewrite:t,replaceGlobal:o};return k.runKernel(Ha,{x:n},s)}var aN=N({staticRegexReplace_:MV});var BV={fft:ma,ifft:Os,rfft:fa,irfft:Rc},VV={hammingWindow:TS,hannWindow:yh,frame:bh,stft:IS},Je={flipLeftRight:ES,grayscaleToRGB:AS,resizeNearestNeighbor:Nh,resizeBilinear:Sh,rgbToGrayscale:$S,rotateWithOffset:DS,cropAndResize:kS,nonMaxSuppression:RS,nonMaxSuppressionAsync:OS,nonMaxSuppressionWithScore:LS,nonMaxSuppressionWithScoreAsync:PS,nonMaxSuppressionPadded:zS,nonMaxSuppressionPaddedAsync:MS,threshold:BS,transform:VS},Jy={bandPart:GS,gramSchmidt:WS,qr:HS},GV={absoluteDifference:KS,computeWeightedLoss:hr,cosineDistance:qS,hingeLoss:jS,huberLoss:XS,logLoss:YS,meanSquaredError:ZS,sigmoidCrossEntropy:JS,softmaxCrossEntropy:QS},WV={sparseFillEmptyRows:tN,sparseReshape:eN,sparseSegmentMean:rN,sparseSegmentSum:oN},UV={stringNGrams:nN,stringSplit:sN,stringToHashBucketFast:iN,staticRegexReplace:aN};var q={};Zt(q,{Serializable:()=>em,SerializationMap:()=>Th,getRegisteredName:()=>KV,registerClass:()=>tb});var HV=new Map,Qy=new Map,em=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},Th=class r{constructor(){this.classNameMap={}}static getMap(){return r.instance==null&&(r.instance=new r),r.instance}static register(e){r.getMap().classNameMap[e.className]=[e,e.fromConfig]}};function tb(r,e,t){E(r.className!=null,()=>"Class being registered does not have the static className property defined."),E(typeof r.className=="string",()=>"className is required to be a string, but got type "+typeof r.className),E(r.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof e>"u"&&(e="Custom"),typeof t>"u"&&(t=r.className);let o=t,n=e+">"+o;return Th.register(r),HV.set(n,r),Qy.set(r,n),r}function KV(r){return Qy.has(r)?Qy.get(r):r.className}var dr=class extends em{minimize(e,t=!1,o){let{value:n,grads:s}=this.computeGradients(e,o);if(o!=null){let i=o.map(a=>({name:a.name,tensor:s[a.name]}));this.applyGradients(i)}else this.applyGradients(s);return Nt(s),t?n:(n.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Gy(e,t)}dispose(){this.iterations_!=null&&Nt(this.iterations_)}saveIterations(){return B(this,null,function*(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:st(this.iterations_,"int32")}})}getWeights(){return B(this,null,function*(){throw new Error("getWeights() is not implemented for this optimizer yet.")})}setWeights(e){return B(this,null,function*(){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)})}extractIterations(e){return B(this,null,function*(){return this.iterations_=(yield e[0].tensor.data())[0],e.slice(1)})}};Object.defineProperty(dr,Symbol.hasInstance,{value:r=>r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null});var Pc=class extends dr{static get className(){return"Adadelta"}constructor(e,t,o=null){super(),this.learningRate=e,this.rho=t,this.epsilon=o,this.accumulatedGrads=[],this.accumulatedUpdates=[],o==null&&(this.epsilon=k.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=k.registeredVariables[o],i=!1;this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accum_grad`,variable:M(()=>gt(s).variable(i))}),this.accumulatedUpdates[n]==null&&(this.accumulatedUpdates[n]={originalName:`${o}/accum_var`,variable:M(()=>gt(s).variable(i))});let a=Array.isArray(e)?e[n].tensor:e[o];if(a==null)return;let l=this.accumulatedGrads[n].variable,u=this.accumulatedUpdates[n].variable;M(()=>{let c=U(D(l,this.rho),D($t(a),1-this.rho)),p=D(rt(Xt(U(u,this.epsilon)),Xt(U(l,this.epsilon))),a),m=U(D(u,this.rho),D($t(p),1-this.rho));l.assign(c),u.assign(m);let f=U(D(p,-this.learningRate),s);s.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Nt(this.accumulatedGrads.map(e=>e.variable)),Nt(this.accumulatedUpdates.map(e=>e.variable)))}getWeights(){return B(this,null,function*(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=e.length/2,o=!1;this.accumulatedGrads=e.slice(0,t).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedUpdates=e.slice(t,t*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))})}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}};var zc=class extends dr{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=k.registeredVariables[o];this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accumulator`,variable:M(()=>So(s.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[o];if(i==null)return;let a=this.accumulatedGrads[n].variable;M(()=>{let l=U(a,$t(i));a.assign(l);let u=U(D(rt(i,Xt(U(l,k.backend.epsilon()))),-this.learningRate),s);s.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Nt(this.accumulatedGrads.map(e=>e.variable))}getWeights(){return B(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=!1;this.accumulatedGrads=e.map(o=>({originalName:o.name,variable:o.tensor.variable(t)}))})}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}};var Mc=class extends dr{static get className(){return"Adam"}constructor(e,t,o,n=null){super(),this.learningRate=e,this.beta1=t,this.beta2=o,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],M(()=>{this.accBeta1=st(t).variable(),this.accBeta2=st(o).variable()}),n==null&&(this.epsilon=k.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);M(()=>{let o=et(1,this.accBeta1),n=et(1,this.accBeta2);t.forEach((s,i)=>{let a=k.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:M(()=>gt(a).variable(l))}),this.accumulatedSecondMoment[i]==null&&(this.accumulatedSecondMoment[i]={originalName:`${s}/v`,variable:M(()=>gt(a).variable(l))});let u=Array.isArray(e)?e[i].tensor:e[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedSecondMoment[i].variable,m=U(D(c,this.beta1),D(u,1-this.beta1)),f=U(D(p,this.beta2),D($t(u),1-this.beta2)),h=rt(m,o),g=rt(f,n);c.assign(m),p.assign(f);let d=U(D(rt(h,U(Xt(g),this.epsilon)),-this.learningRate),a);a.assign(d)}),this.accBeta1.assign(D(this.accBeta1,this.beta1)),this.accBeta2.assign(D(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Nt(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Nt(this.accumulatedSecondMoment.map(e=>e.variable))}getWeights(){return B(this,null,function*(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e),M(()=>{this.accBeta1.assign(mr(this.beta1,this.iterations_+1)),this.accBeta2.assign(mr(this.beta2,this.iterations_+1))});let t=e.length/2,o=!1;this.accumulatedFirstMoment=e.slice(0,t).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}};var Bc=class extends dr{static get className(){return"Adamax"}constructor(e,t,o,n=null,s=0){super(),this.learningRate=e,this.beta1=t,this.beta2=o,this.epsilon=n,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],M(()=>{this.iteration=st(0).variable(),this.accBeta1=st(t).variable()}),n==null&&(this.epsilon=k.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(o=>o.name):Object.keys(e);M(()=>{let o=et(1,this.accBeta1),n=rt(-this.learningRate,U(D(this.iteration,this.decay),1));t.forEach((s,i)=>{let a=k.registeredVariables[s],l=!1;this.accumulatedFirstMoment[i]==null&&(this.accumulatedFirstMoment[i]={originalName:`${s}/m`,variable:gt(a).variable(l)}),this.accumulatedWeightedInfNorm[i]==null&&(this.accumulatedWeightedInfNorm[i]={originalName:`${s}/v`,variable:gt(a).variable(l)});let u=Array.isArray(e)?e[i].tensor:e[s];if(u==null)return;let c=this.accumulatedFirstMoment[i].variable,p=this.accumulatedWeightedInfNorm[i].variable,m=U(D(c,this.beta1),D(u,1-this.beta1)),f=D(p,this.beta2),h=ae(u),g=Gr(f,h);c.assign(m),p.assign(g);let d=U(D(rt(n,o),rt(m,U(g,this.epsilon))),a);a.assign(d)}),this.iteration.assign(U(this.iteration,1)),this.accBeta1.assign(D(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Nt(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Nt(this.accumulatedWeightedInfNorm.map(e=>e.variable))}getWeights(){return B(this,null,function*(){throw new Error("getWeights() is not implemented for Adamax yet.")})}setWeights(e){return B(this,null,function*(){throw new Error("setWeights() is not implemented for Adamax yet.")})}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}};var da=class extends dr{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=Array.isArray(e)?e[n].tensor:e[o];if(s==null)return;let i=k.registeredVariables[o];M(()=>{let a=U(D(this.c,s),i);i.assign(a)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=ce(st(-e))}dispose(){this.c.dispose()}getWeights(){return B(this,null,function*(){return[yield this.saveIterations()]})}setWeights(e){return B(this,null,function*(){if(e=yield this.extractIterations(e),e.length!==0)throw new Error("SGD optimizer does not have settable weights.")})}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}};var Vc=class extends da{static get className(){return"Momentum"}constructor(e,t,o=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=o,this.accumulations=[],this.m=st(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=k.registeredVariables[o];this.accumulations[n]==null&&(this.accumulations[n]={originalName:`${o}/momentum`,variable:M(()=>gt(s).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[o];a!=null&&M(()=>{let l,u=U(D(this.m,i),a);this.useNesterov?l=U(D(this.c,U(a,D(u,this.m))),s):l=U(D(this.c,u),s),i.assign(u),s.assign(l)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Nt(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}getWeights(){return B(this,null,function*(){return[yield this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=!1;this.accumulations=e.map(o=>({originalName:o.name,variable:o.tensor.variable(t)}))})}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}};var Gc=class extends dr{static get className(){return"RMSProp"}constructor(e,t=.9,o=0,n=null,s=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=o,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,n==null&&(this.epsilon=k.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(o=>o.name):Object.keys(e)).forEach((o,n)=>{let s=k.registeredVariables[o],i=!1;this.accumulatedMeanSquares[n]==null&&(this.accumulatedMeanSquares[n]={originalName:`${o}/rms`,variable:M(()=>gt(s).variable(i))}),this.accumulatedMoments[n]==null&&(this.accumulatedMoments[n]={originalName:`${o}/momentum`,variable:M(()=>gt(s).variable(i))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${o}/mg`,variable:M(()=>gt(s).variable(i))});let a=Array.isArray(e)?e[n].tensor:e[o];if(a==null)return;let l=this.accumulatedMeanSquares[n].variable,u=this.accumulatedMoments[n].variable;M(()=>{let c=U(D(l,this.decay),D($t(a),1-this.decay));if(this.centered){let p=this.accumulatedMeanGrads[n].variable,m=U(D(p,this.decay),D(a,1-this.decay)),f=rt(D(a,this.learningRate),Xt(et(c,U($t(m),this.epsilon)))),h=U(D(u,this.momentum),f);l.assign(c),p.assign(m),u.assign(h);let g=et(s,h);s.assign(g)}else{let p=U(D(l,this.decay),D($t(a),1-this.decay)),m=U(D(u,this.momentum),rt(D(a,this.learningRate),Xt(U(p,this.epsilon))));l.assign(p),u.assign(m);let f=et(s,m);s.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Nt(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Nt(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Nt(this.accumulatedMoments.map(e=>e.variable))}getWeights(){return B(this,null,function*(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[yield this.saveIterations()].concat(e.map(t=>({name:t.originalName,tensor:t.variable})))})}setWeights(e){return B(this,null,function*(){e=yield this.extractIterations(e);let t=this.centered?e.length/3:e.length/2,o=!1;this.accumulatedMeanSquares=e.slice(0,t).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedMoments=e.slice(t,t*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})))})}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}};var qV=[Pc,zc,Mc,Bc,Vc,Gc,da];function lN(){for(let r of qV)tb(r)}var jo={};Zt(jo,{CompositeArrayBuffer:()=>pr,browserFiles:()=>cN,browserHTTPRequest:()=>dN,concatenateArrayBuffers:()=>ZC,copyModel:()=>pv,decodeWeights:()=>pf,decodeWeightsStream:()=>mf,encodeWeights:()=>qC,fromMemory:()=>gN,fromMemorySync:()=>ab,getLoadHandlers:()=>ev,getModelArtifactsForJSON:()=>ac,getModelArtifactsForJSONSync:()=>Ey,getModelArtifactsInfoForJSON:()=>hn,getSaveHandlers:()=>tv,getWeightSpecs:()=>Hp,http:()=>kh,isHTTPScheme:()=>Ih,listModels:()=>uv,loadWeights:()=>mN,moveModel:()=>mv,registerLoadRouter:()=>QC,registerSaveRouter:()=>JC,removeModel:()=>cv,weightsLoaderFactory:()=>sb,withSaveHandler:()=>xN,withSaveHandlerSync:()=>yN});var jV="model",XV=".json",YV=".weights.bin";function uN(r){return new Promise(e=>setTimeout(e)).then(r)}var eb=(()=>{class r{constructor(t){if(!L().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),(t==null||t.length===0)&&(t=jV),this.modelJsonFileName=t+XV,this.weightDataFileName=t+YV}save(t){return B(this,null,function*(){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let o=pr.join(t.weightData),n=window.URL.createObjectURL(new Blob([o],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let s=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],i=ff(t,s),a=window.URL.createObjectURL(new Blob([JSON.stringify(i)],{type:"application/json"})),l=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(l.download=this.modelJsonFileName,l.href=a,yield uN(()=>l.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let u=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;u.download=this.weightDataFileName,u.href=n,yield uN(()=>u.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:hn(t)}}})}}return r.URL_SCHEME="downloads://",r})();var rb=class{constructor(e){if(e==null||e.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}load(){return B(this,null,function*(){return new Promise((e,t)=>{let o=new FileReader;o.onload=n=>{let s=JSON.parse(n.target.result),i=s.modelTopology;if(i==null){t(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){t(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){e({modelTopology:i});return}let l=ac(s,u=>this.loadWeights(u));e(l)},o.onerror=n=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),o.readAsText(this.jsonFile)})})}loadWeights(e){let t=[],o=[];for(let i of e)t.push(...i.weights),o.push(...i.paths);let n=this.checkManifestAndWeightFiles(e),s=o.map(i=>this.loadWeightsFile(i,n[i]));return Promise.all(s).then(i=>[t,i])}loadWeightsFile(e,t){return new Promise((o,n)=>{let s=new FileReader;s.onload=i=>{let a=i.target.result;o(a)},s.onerror=i=>n(`Failed to weights data from file of path '${e}'.`),s.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],o=this.weightsFiles.map(s=>ky(s.name)),n={};for(let s of e)s.paths.forEach(i=>{let a=ky(i);if(t.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(t.push(a),o.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);n[i]=this.weightsFiles[o.indexOf(a)]});if(t.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return n}},ZV=r=>L().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(eb.URL_SCHEME)?JV(r.slice(eb.URL_SCHEME.length)):null;je.registerSaveRouter(ZV);function JV(r="model"){return new eb(r)}function cN(r){return new rb(r)}function ob(r,e,t,o){i(r),t=t??0,o=o??1,a(t,o);let n=0,s=l=>(l.then(u=>{let c=t+ ++n/r.length*(o-t);return e(c),u}),l);function i(l){E(l!=null&&Array.isArray(l)&&l.length>0,()=>"promises must be a none empty array")}function a(l,u){E(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${l}`),E(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),E(u>=l,()=>`startFraction must be no more than endFraction, but got startFraction ${l} and endFraction ${u}`)}return Promise.all(r.map(s))}function nb(r,e){return B(this,null,function*(){e==null&&(e={});let t=e.fetchFunc==null?L().platform.fetch:e.fetchFunc,o=r.map(p=>t(p,e.requestInit,{isBinary:!0})),a=(e.onProgress==null?yield Promise.all(o):yield ob(o,e.onProgress,0,.5)).map(p=>p.arrayBuffer());return e.onProgress==null?yield Promise.all(a):yield ob(a,e.onProgress,.5,1)})}function pN(r,e){var t;let o=e.fetchFunc==null?L().platform.fetch:e.fetchFunc,n=0,s;return(t=e.onProgress)===null||t===void 0||t.call(e,0),new ReadableStream({pull:i=>B(this,null,function*(){for(var a;n<r.length;){s||(s=(yield o(r[n],e.requestInit,{isBinary:!0})).body.getReader());let{done:l,value:u}=yield s.read();if(l){n++,s=void 0,(a=e.onProgress)===null||a===void 0||a.call(e,n/r.length);continue}i.enqueue(u);return}i.close()})})}function mN(r,e="",t,o){return B(this,null,function*(){return sb(i=>nb(i,{requestInit:o}))(r,e,t)})}function sb(r){return(e,t="",o)=>B(this,null,function*(){let n=e.map(()=>!1),s={},i=o!=null?o.map(()=>!1):[],a=[];if(e.forEach((f,h)=>{let g=0;f.weights.forEach(d=>{let x="quantization"in d?d.quantization.dtype:d.dtype,y=As[x]*Ot(d.shape),w=()=>{n[h]=!0,s[h]==null&&(s[h]=[]),s[h].push({manifestEntry:d,groupOffset:g,sizeBytes:y})};o!=null?o.forEach((C,T)=>{C===d.name&&(w(),i[T]=!0)}):w(),a.push(d.name),g+=y})}),!i.every(f=>f)){let f=o.filter((h,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}let l=n.reduce((f,h,g)=>(h&&f.push(g),f),[]),u=[];l.forEach(f=>{e[f].paths.forEach(h=>{let g=t+(t.endsWith("/")?"":"/")+h;u.push(g)})});let c=yield r(u),p={},m=0;return l.forEach(f=>{let h=e[f].paths.length,g=new pr(c.slice(m,m+h));s[f].forEach(x=>{let y=g.slice(x.groupOffset,x.groupOffset+x.sizeBytes),w=pf(y,[x.manifestEntry]);for(let C in w)p[C]=w[C]}),m+=h}),p})}var QV="application/octet-stream",tG="application/json",fN=(()=>{class r{constructor(t,o){if(this.DEFAULT_METHOD="POST",o==null&&(o={}),this.weightPathPrefix=o.weightPathPrefix,this.weightUrlConverter=o.weightUrlConverter,o.fetchFunc!=null?(E(typeof o.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=o.fetchFunc):this.fetch=L().platform.fetch,E(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&E(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,o.requestInit!=null&&o.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=o.requestInit||{},this.loadOptions=o}save(t){return B(this,null,function*(){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let o=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);o.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],s=ff(t,n);if(o.body.append("model.json",new Blob([JSON.stringify(s)],{type:tG}),"model.json"),t.weightData!=null){let a=pr.join(t.weightData);o.body.append("model.weights.bin",new Blob([a],{type:QV}),"model.weights.bin")}let i=yield this.fetch(this.path,o);if(i.ok)return{modelArtifactsInfo:hn(t),responses:[i]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${i.status}.`)})}loadModelJSON(){return B(this,null,function*(){let t=yield this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let o;try{o=yield t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}let n=o.modelTopology,s=o.weightsManifest;if(n==null&&s==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return o})}load(){return B(this,null,function*(){if(this.loadOptions.streamWeights)return this.loadStream();let t=yield this.loadModelJSON();return ac(t,o=>this.loadWeights(o))})}loadStream(){return B(this,null,function*(){let t=yield this.loadModelJSON(),o=yield this.getWeightUrls(t.weightsManifest),n=Hp(t.weightsManifest),s=()=>pN(o,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:n,getWeightStream:s})})}getWeightUrls(t){return B(this,null,function*(){let o=Array.isArray(this.path)?this.path[1]:this.path,[n,s]=eG(o),i=this.weightPathPrefix||n,a=[],l=[];for(let u of t)for(let c of u.paths)this.weightUrlConverter!=null?l.push(this.weightUrlConverter(c)):a.push(i+c+s);return this.weightUrlConverter&&a.push(...yield Promise.all(l)),a})}loadWeights(t){return B(this,null,function*(){let o=yield this.getWeightUrls(t),n=Hp(t),s=yield nb(o,this.loadOptions);return[n,s]})}}return r.URL_SCHEME_REGEX=/^https?:\/\//,r})();function eG(r){let e=r.lastIndexOf("/"),t=r.lastIndexOf("?"),o=r.substring(0,e),n=t>e?r.substring(t):"";return[o+"/",n]}function Ih(r){return r.match(fN.URL_SCHEME_REGEX)!=null}var hN=(r,e)=>{if(typeof fetch>"u"&&(e==null||e.fetchFunc==null))return null;{let t=!0;if(Array.isArray(r)?t=r.every(o=>Ih(o)):t=Ih(r),t)return kh(r,e)}return null};je.registerSaveRouter(hN);je.registerLoadRouter(hN);function kh(r,e){return new fN(r,e)}function dN(r,e){return kh(r,e)}var rm=class{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}},Eh=class{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}},ib=class{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}};function gN(r,e,t,o){let n=arguments;return new ib(ab(...n))}function ab(r,e,t,o){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new rm(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new rm({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new rm({modelTopology:r,weightSpecs:e,weightData:t,trainingConfig:o}))}function xN(r){return new Eh(r)}function yN(r){return new Eh(r)}var om={};Zt(om,{draw:()=>uG,fromPixels:()=>cG,fromPixelsAsync:()=>iG,toPixels:()=>lG});var wl,bN=!1;function wN(r,e=3){if(e>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let t=!1,o=!1,n=!1,s=!1,i=!1,a=!1;if(r.data instanceof Uint8Array)t=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)o=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)n=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)s=!0;else if(r.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&r instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${r.constructor.name}`);if(tc(zp,k.backendName)!=null){let h={pixels:r},g={numChannels:e};return k.runKernel(zp,h,g)}let[u,c]=n?[r.videoWidth,r.videoHeight]:[r.width,r.height],p;if(i)p=r.getContext("2d").getImageData(0,0,u,c).data;else if(o||t)p=r.data;else if(s||n||a){if(wl==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")wl=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else wl=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});wl.canvas.width=u,wl.canvas.height=c,wl.drawImage(r,0,0,u,c),p=wl.getImageData(0,0,u,c).data}let m;if(e===4)m=new Int32Array(p);else{let h=u*c;m=new Int32Array(h*e);for(let g=0;g<h;g++)for(let d=0;d<e;++d)m[g*e+d]=p[g*4+d]}return ch(m,[c,u,e],"int32")}function rG(r){return r!=null&&r.data instanceof Uint8Array}function oG(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function nG(r){return r!=null&&r.width!==0&&r.height!==0}function sG(r){return oG()&&!(r instanceof ImageBitmap)&&nG(r)&&!rG(r)}function iG(r,e=3){return B(this,null,function*(){let t=null;if(L().getBool("WRAP_TO_IMAGEBITMAP")&&sG(r)){let o;try{o=yield createImageBitmap(r,{premultiplyAlpha:"none"})}catch{o=null}o!=null&&o.width===r.width&&o.height===r.height?t=o:t=r}else t=r;return wN(t,e)})}function CN(r){if(r.rank!==2&&r.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${r.rank}.`);let e=r.rank===2?1:r.shape[2];if(e>4||e===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${e}`);if(r.dtype!=="float32"&&r.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${r.dtype}. Please use float32 or int32 tensors.`)}function aG(r){let e=r?.alpha||1;if(e>1||e<0)throw new Error(`Alpha value ${e} is suppoed to be in range [0 - 1].`)}function lG(r,e){return B(this,null,function*(){let t=S(r,"img","toPixels");if(!(r instanceof Ft)){let u=t;t=j(u,"int32"),u.dispose()}CN(t);let[o,n]=t.shape.slice(0,2),s=t.rank===2?1:t.shape[2],i=yield t.data(),a=t.dtype==="float32"?255:1,l=new Uint8ClampedArray(n*o*4);for(let u=0;u<o*n;++u){let c=[0,0,0,255];for(let m=0;m<s;m++){let f=i[u*s+m];if(t.dtype==="float32"){if(f<0||f>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${f}.`)}else if(t.dtype==="int32"&&(f<0||f>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${f}.`);s===1?(c[0]=f*a,c[1]=f*a,c[2]=f*a):c[m]=f*a}let p=u*4;l[p+0]=Math.round(c[0]),l[p+1]=Math.round(c[1]),l[p+2]=Math.round(c[2]),l[p+3]=Math.round(c[3])}if(e!=null){bN||tc(Pp,k.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),bN=!0),e.width=n,e.height=o;let u=e.getContext("2d"),c=new ImageData(l,n,o);u.putImageData(c,0,0)}return t!==r&&t.dispose(),l})}function uG(r,e,t){let o=S(r,"img","draw");if(!(r instanceof Ft)){let i=o;o=j(i,"int32"),i.dispose()}CN(o),aG(t?.imageOptions);let n={image:o},s={canvas:e,options:t};k.runKernel(Pp,n,s)}var cG=N({fromPixels_:wN});function pG(r,e){let t=r.shape.length,o=e.shape.length;if(t<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${t}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(e.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.shape[o-1]>t)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${e.shape[o-1]} vs. ${t}`);if(Ot(r.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${r.shape}.`);let n=e.shape,s=n[n.length-1],i=1;for(let p=0;p<n.length-1;++p)i*=n[p];let a=r.shape,l=n.slice();l.pop();let u=1;for(let p=s;p<t;++p)u*=a[p],l.push(a[p]);let c=[...ln(r.shape).map(p=>p/u),1].slice(0,s);return[l,i,u,c]}var Qe={};Zt(Qe,{assertParamsValid:()=>fG,computeFlatOffset:()=>yG,computeOutShape:()=>dG,getNormalizedAxes:()=>gG,isSliceContinous:()=>xG,maskToAxes:()=>hG,parseSliceParams:()=>ub,sliceInfo:()=>bG,startForAxis:()=>AN,startIndicesWithElidedDims:()=>IN,stopForAxis:()=>$N,stopIndicesWithElidedDims:()=>kN,stridesForAxis:()=>EN,stridesWithElidedDims:()=>SN});var lb=-2,mG=-1;function fG(r,e,t){let o=r.shape.length;E(o===e.length,()=>`Error in slice${o}D: Length of begin ${e} must match the rank of the array (${o}).`),E(o===t.length,()=>`Error in slice${o}D: Length of size ${t} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)E(e[n]+t[n]<=r.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${e[n]+t[n]}) would overflow input.shape[${n}] (${r.shape[n]})`)}function hG(r){let e=[],t=0;for(;r>0;)r&1&&e.push(t),r/=2,t++;return e}function dG(r,e,t){let o=[];for(let n=0;n<r.length;n++)o[n]=Math.ceil((e[n]-r[n])/t[n]);return o}function SN(r,e,t,o){let n=[...r];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<t;s++)s===0?n[e]=1:(n.splice(e,0,1),n.pop());return n}function NN(r,e,t){return t<=r?t:t-(e-1)}function TN(r,e){let t=[];for(let o=0;o<r;o++)t.push(e+o);return t}function gG(r,e,t,o,n,s,i,a,l){let u=r.length,c=new Array(u),p=new Array(u),m=new Array(u);if(e.length&&t>0){let f=e[0],h=t+1;c=IN(i,f,h,o,r),p=kN(a,f,h,n,r),m=SN(s,f,h,r)}else for(let f=0;f<u;f++)c[f]=AN(i,o,s,r,f,l),p[f]=$N(a,n,s,r,f,l),m[f]=EN(s,f,l);return{begin:c,end:p,strides:m}}function IN(r,e,t,o,n){let s=[...n],i=TN(t,e);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let l=NN(e,t,a),u=o[l];r&1<<l&&(u=0),s[a]=u}return s}function kN(r,e,t,o,n){let s=[...n],i=TN(t,e);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let l=NN(e,t,a),u=o[l];r&1<<l&&(u=Number.MAX_SAFE_INTEGER),s[a]=u}for(let a=0;a<s.length;a++){let l=n[a];s[a]<0&&(s[a]+=l),s[a]=Ul(0,s[a],n[a])}return s}function EN(r,e,t){let o=r[e];return(t&1<<e||o==null)&&(o=1),o}function AN(r,e,t,o,n,s){let i=e[n],a=t[n]||1;(r&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),i=Ul(0,i,l-1),i}function $N(r,e,t,o,n,s){let i=e[n],a=t[n]||1;(r&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let l=o[n];return i<0&&(i+=l),a>0?i=Ul(0,i,l):i=Ul(-1,i,l-1),i}function xG(r,e,t){let o=t.length;for(let n=0;n<t.length;n++)if(t[n]>1){o=n;break}for(let n=o+1;n<t.length;n++)if(e[n]>0||t[n]!==r[n])return!1;return!0}function yG(r,e){let t=r.length>0?r[r.length-1]:1;for(let o=0;o<r.length-1;o++)t+=r[o]*e[o];return t}function ub(r,e,t){let o,n=r.shape.length;typeof e=="number"?o=[e,...new Array(n-1).fill(0)]:e.length<n?o=e.concat(new Array(n-e.length).fill(0)):o=e.slice(),o.forEach(i=>{E(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return t==null?s=new Array(n).fill(-1):typeof t=="number"?s=[t,...new Array(n-1).fill(-1)]:t.length<n?s=t.concat(new Array(n-t.length).fill(-1)):s=t,s=s.map((i,a)=>i>=0?i:(E(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),r.shape[a]-o[a])),[o,s]}function bG(r,e,t,o,n,s,i,a,l){let u;if(o==null?(u=new Array(e.length),u.fill(1)):u=o,i!=null&&i&i-1)throw new Error("Multiple ellipses in slice is not allowed.");let c=!1,p={dims:u.length,numAddAxisAfterEllipsis:0,begin:e.slice(),end:t.slice(),strides:u.slice(),beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:l};for(let w=0;w<p.dims;w++)c&&1<<w&a&&p.numAddAxisAfterEllipsis++,1<<w&i&&(c=!0);c||(p.ellipsisMask|=1<<p.dims,p.dims++);let m={dims:r.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};wG(p,m);let f=!0,h=!0,g=!0,d=[],x=[];for(let w=0;w<r.length;++w){if(m.strides[w]===0)throw Error(`strides[${w}] must be non-zero`);let C=!!(m.shrinkAxisMask&1<<w),T=r[w];if(T===-1){d.push(C?1:-1);continue}let A=[m.beginMask&1<<w,m.endMask&1<<w],$=[m.strides[w]>0?0:-1,m.strides[w]>0?T:T-1];if(C&&m.strides[w]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&m.strides[w]===1;let _=!!(m.beginMask&1<<w&&m.endMask&1<<w);if(m.beginValid&&m.endValid){if(C){let G=m.begin[w]<0?T+m.begin[w]:m.begin[w];if(m.begin[w]=G,m.end[w]=m.begin[w]+1,G<0||G>=T)throw Error(`slice index ${m.begin[w]} of dimension ${w} out of bounds.`)}else m.begin[w]=vN(m.begin[w],0,m.strides[w],T,A,$),m.end[w]=vN(m.end[w],1,m.strides[w],T,A,$);let V=m.strides[w]===1&&m.begin[w]===0&&m.end[w]===T;f=f&&V,h=h&&(w===0&&m.strides[w]===1||V)}else f=f&&m.strides[w]===1&&_,h=h&&(w===0&&m.strides[w]===1||_);let O,z=!1;if(m.beginValid&&m.endValid?(O=m.end[w]-m.begin[w],z=!0):C?(O=1,z=!0):_&&T>=0&&(m.strides[w]<0?O=-T:O=T,z=!0),z){let V;O===0||O<0!=m.strides[w]<0?V=0:V=Math.trunc(O/m.strides[w])+(O%m.strides[w]!==0?1:0),d.push(V)}else d.push(-1)}for(let w=0;w<m.finalShapeGatherIndices.length;++w){let C=m.finalShapeGatherIndices[w];C>=0?x.push(d[C]):C===lb&&x.push(1)}return{finalShapeSparse:x.filter((w,C)=>m.finalShapeGatherIndices[C]!==lb),finalShape:x,isIdentity:f,sliceDim0:h,isSimpleSlice:g,begin:m.begin,end:m.end,strides:m.strides}}function wG(r,e){e.beginMask=0,e.endMask=0,e.shrinkAxisMask=0;let t=0;e.beginValid=r.begin!=null,e.endValid=r.end!=null,e.begin=new Array(e.dims),e.end=new Array(e.dims),e.strides=new Array(e.dims),e.finalShapeGatherIndices=[],e.finalShapeGatherIndicesSparse=[],e.inputShapeGatherIndicesSparse=new Array(e.dims);for(let o=0;o<r.dims;o++)if(1<<o&r.ellipsisMask){let n=Math.min(e.dims-(r.dims-o)+1+r.numAddAxisAfterEllipsis,e.dims);for(;t<n;t++)e.begin[t]=0,e.end[t]=0,e.strides[t]=1,e.beginMask|=1<<t,e.endMask|=1<<t,e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(-1),e.inputShapeGatherIndicesSparse[t]=o}else if(1<<o&r.newAxisMask)e.finalShapeGatherIndices.push(lb),e.finalShapeGatherIndicesSparse.push(-1);else{if(t===e.begin.length)throw Error(`Index out of range using input dim ${t}; input has only ${e.dims} dims, ${e.begin.length}.`);r.begin!=null&&(e.begin[t]=r.begin[o]),r.end!=null&&(e.end[t]=r.end[o]),e.strides[t]=r.strides[o],r.beginMask&1<<o&&(e.beginMask|=1<<t),r.endMask&1<<o&&(e.endMask|=1<<t),r.shrinkAxisMask&1<<o?(e.finalShapeGatherIndices.push(mG),e.finalShapeGatherIndicesSparse.push(-1),e.shrinkAxisMask|=1<<t):(e.finalShapeGatherIndices.push(t),e.finalShapeGatherIndicesSparse.push(o)),e.inputShapeGatherIndicesSparse[t]=o,t++}}function vN(r,e,t,o,n,s){if(n[e])return t>0?s[e]:s[e+1&1];{let i=r<0?o+r:r;return i<s[0]?s[0]:i>s[1]?s[1]:i}}var Ah=class{static sgd(e){return new da(e)}static momentum(e,t,o=!1){return new Vc(e,t,o)}static rmsprop(e,t=.9,o=0,n=null,s=!1){return new Gc(e,t,o,n,s)}static adam(e=.001,t=.9,o=.999,n=null){return new Mc(e,t,o,n)}static adadelta(e=.001,t=.95,o=null){return new Pc(e,t,o)}static adamax(e=.002,t=.9,o=.999,n=null,s=0){return new Bc(e,t,o,n,s)}static adagrad(e,t=.1){return new zc(e,t)}};var Cl=Ah;var CG=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:r=>r();function vl(){return new Promise(r=>CG(()=>r()))}var I={};Zt(I,{ERF_A1:()=>LG,ERF_A2:()=>PG,ERF_A3:()=>zG,ERF_A4:()=>MG,ERF_A5:()=>BG,ERF_P:()=>OG,PARALLELIZE_THRESHOLD:()=>$h,RowPartitionType:()=>Ls,SELU_SCALE:()=>pb,SELU_SCALEALPHA:()=>cb,applyActivation:()=>yl,assertAndGetBroadcastShape:()=>It,assertAxesAreInnerMostDims:()=>mM,assertParamsConsistent:()=>vG,assignToTypedArray:()=>KG,axesAreInnerMostDims:()=>zy,calculateShapes:()=>yB,checkEinsumDimSizes:()=>JG,checkPadOnDimRoundingMode:()=>ee,combineLocations:()=>Iv,combineRaggedTensorToTensorShapes:()=>NG,complexWithEvenIndex:()=>WG,complexWithOddIndex:()=>UG,computeConv2DInfo:()=>al,computeConv3DInfo:()=>xv,computeDefaultPad:()=>Py,computeDilation2DInfo:()=>pz,computeOptimalWindowSize:()=>EG,computeOutAndReduceShapes:()=>My,computeOutShape:()=>SG,computePool2DInfo:()=>Ly,computePool3DInfo:()=>mz,convertConv2DDataFormat:()=>yv,decodeEinsumEquation:()=>YG,eitherStridesOrDilationsAreOne:()=>nr,expandShapeToKeepDim:()=>No,exponent:()=>jG,exponents:()=>qG,fromStringArrayToUint8:()=>bW,fromUint8ToStringArray:()=>yW,getAxesPermutation:()=>By,getBroadcastDims:()=>Nv,getComplexWithIndex:()=>HG,getEinsumComputePath:()=>QG,getEinsumPermutation:()=>ZG,getFusedBiasGradient:()=>xl,getFusedDyActivation:()=>gl,getImageCenter:()=>AG,getInnerMostAxes:()=>fM,getPermuted:()=>DG,getRaggedRank:()=>IG,getReductionAxes:()=>Jt,getReshaped:()=>$G,getReshapedPermuted:()=>RG,getRowPartitionTypesHelper:()=>TG,getSliceBeginCoords:()=>_G,getSliceSize:()=>FG,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>oW,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>nW,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>sW,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>lW,getSparseReshapeInputOutputMismatchErrorMessage:()=>cW,getSparseReshapeInputOutputMultipleErrorMessage:()=>uW,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>iW,getSparseReshapeNegativeOutputDimErrorMessage:()=>aW,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>hW,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>pW,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>mW,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>fW,getUndoAxesPermutation:()=>Xp,isIdentityPermutation:()=>tW,log:()=>rP,mergeRealAndImagArrays:()=>VG,prepareAndValidate:()=>pG,prepareSplitSize:()=>rW,segment_util:()=>fb,shouldFuse:()=>bl,slice_util:()=>Qe,splitRealAndImagArrays:()=>GG,stridesOrDilationsArePositive:()=>gn,tupleValuesAreOne:()=>po,upcastType:()=>Le,validateDefaultValueShape:()=>kG,validateInput:()=>Qp,validateUpdateShape:()=>gS,warn:()=>fn});function vG(r,e){let t=r[0].length;r.forEach((n,s)=>{E(n.length===t,()=>`Error in concat${t}D: rank of tensors[${s}] must be the same as the rank of the rest (${t})`)}),E(e>=0&&e<t,()=>`Error in concat${t}D: axis must be between 0 and ${t-1}.`);let o=r[0];r.forEach((n,s)=>{for(let i=0;i<t;i++)E(i===e||n[i]===o[i],()=>`Error in concat${t}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function SG(r,e){let t=r[0].slice();for(let o=1;o<r.length;o++)t[e]+=r[o][e];return t}var Ls=function(r){return r[r.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",r[r.VALUE_ROWIDS=1]="VALUE_ROWIDS",r[r.ROW_LENGTHS=2]="ROW_LENGTHS",r[r.ROW_SPLITS=3]="ROW_SPLITS",r[r.ROW_LIMITS=4]="ROW_LIMITS",r[r.ROW_STARTS=5]="ROW_STARTS",r}(Ls||{});function NG(r,e,t){let o=new Array;if(t==null&&e==null)return o;if(e==null)for(;o.length<r+t.length;)o.push(-1);else o=e.slice();if(t==null)return o;if(r+t.length!==o.length)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.rank = ${r+t.length}, but shape.rank = ${o.length}`);for(let n=1;n<t.length;++n){let s=t[n],i=o[o.length-t.length+n],a=o[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${e} are incompatible: rt input.shape[${n+r}] = ${s} but shape[${n+r}] = ${a}`)}else o[i]=s}return o}function TG(r){let e={FIRST_DIM_SIZE:Ls.FIRST_DIM_SIZE,VALUE_ROWIDS:Ls.VALUE_ROWIDS,ROW_LENGTHS:Ls.ROW_LENGTHS,ROW_SPLITS:Ls.ROW_SPLITS,ROW_LIMITS:Ls.ROW_LIMITS,ROW_STARTS:Ls.ROW_STARTS},t=[];for(let o of r)if(o in e)t.push(e[o]);else break;return t}function IG(r){return r.length===0?0:r[0]===Ls.FIRST_DIM_SIZE?r.length-1:r.length}function kG(r,e){if(r==null||e==null)return;let t=r.length,o=e.length;if(t>=o)throw new Error(`defaultValue.shape=${r} and ragged tensor flatValues.shape=${e}, are incompatible: defaultValue.rank = ${t} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(t,o-1);++n){let s=r[n],i=e[n+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${r}, and ragged tensor input flatValues.shape=${e} are incompatible: defaultValue.shape[${n-r.length}] = ${s} but ragged tensor input.flatValues.shape[${n-r.length}] = ${i}`)}}var $h=30;function EG(r){return r<=$h?r:jl(r,Math.floor(Math.sqrt(r)))}function AG(r,e,t){let o=t*(typeof r=="number"?r:r[0]),n=e*(typeof r=="number"?r:r[1]);return[o,n]}function $G(r,e,t,o=!0){let n=[];if(o)n=n.concat(e.slice(0)),n.push(r[0]/t),n=n.concat(r.slice(1));else{n=n.concat(r[0]);let s=e.length;for(let i=0;i<s;++i)n=n.concat([r[i+1]/e[i],e[i]]);n=n.concat(r.slice(s+1))}return n}function DG(r,e,t=!0){let o=[];if(t){o.push(e);for(let n=e+1;n<r;++n)n<=2*e?(o.push(n),o.push(n-(e+1))):o.push(n)}else{let n=[],s=[];for(let i=1;i<r;++i)i>=e*2+1||i%2===1?s.push(i):n.push(i);o.push(...n),o.push(0),o.push(...s)}return o}function RG(r,e,t,o=!0){let n=[];o?n.push(r[0]/t):n.push(r[0]*t);for(let s=1;s<r.length;++s)s<=e.length?o?n.push(e[s-1]*r[s]):n.push(r[s]/e[s-1]):n.push(r[s]);return n}function _G(r,e){let t=[0];for(let o=0;o<e;++o)t.push(r[o][0]);return t}function FG(r,e,t){let o=r.slice(0,1);for(let n=0;n<t;++n)o.push(r[n+1]-e[n][0]-e[n][1]);return o}var cb=1.7580993408473768,pb=1.0507009873554805;var OG=.3275911,LG=.254829592,PG=-.284496736,zG=1.421413741,MG=-1.453152027,BG=1.061405429;function VG(r,e){if(r.length!==e.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${r.length}, imag: ${e.length}.`);let t=new Float32Array(r.length*2);for(let o=0;o<t.length;o+=2)t[o]=r[o/2],t[o+1]=e[o/2];return t}function GG(r){let e=new Float32Array(r.length/2),t=new Float32Array(r.length/2);for(let o=0;o<r.length;o+=2)e[o/2]=r[o],t[o/2]=r[o+1];return{real:e,imag:t}}function WG(r){let e=Math.ceil(r.length/4),t=new Float32Array(e),o=new Float32Array(e);for(let n=0;n<r.length;n+=4)t[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:t,imag:o}}function UG(r){let e=Math.floor(r.length/4),t=new Float32Array(e),o=new Float32Array(e);for(let n=2;n<r.length;n+=4)t[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:t,imag:o}}function HG(r,e){let t=r[e*2],o=r[e*2+1];return{real:t,imag:o}}function KG(r,e,t,o){r[o*2]=e,r[o*2+1]=t}function qG(r,e){let t=new Float32Array(r/2),o=new Float32Array(r/2);for(let n=0;n<Math.ceil(r/2);n++){let s=(e?2:-2)*Math.PI*(n/r);t[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:t,imag:o}}function jG(r,e,t){let o=(t?2:-2)*Math.PI*(r/e),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var mb="->",XG=/->/g,DN=",",RN="...";function YG(r,e){r=r.replace(/\s/g,"");let t=(r.length-r.replace(XG,"").length)/mb.length;if(t<1)throw new Error("Equations without an arrow are not supported.");if(t>1)throw new Error(`Equation must contain exactly one arrow ("${mb}").`);let[o,n]=r.split(mb);E(o.indexOf(RN)===-1,()=>`The ellipsis notation ("${RN}") is not supported yet.`);let s=o.split(DN),i=s.length;if(e!==i)throw new Error(`Expected ${i} input tensors, received ${e}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let m=0;m<n.length;++m){let f=n[m];if(!s.some(h=>h.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);a.indexOf(f)===-1&&a.push(f)}for(let m=0;m<o.length;++m){let f=o[m];a.indexOf(f)===-1&&f!==DN&&a.push(f)}let l=new Array(s.length);for(let m=0;m<i;++m){if(new Set(s[m].split("")).size!==s[m].length)throw new Error(`Found duplicate axes in input component ${s[m]}. Support for duplicate axes in input is not implemented yet.`);l[m]=[];for(let f=0;f<s[m].length;++f)l[m].push(a.indexOf(s[m][f]))}let u=a.length,c=n.length,p=[];for(let m=c;m<u;++m)p.push(m);return{allDims:a,summedDims:p,idDims:l}}function ZG(r,e){let t=new Array(r);t.fill(-1);for(let n=0;n<e.length;++n)t[e[n]]=n;let o=[];for(let n=0;n<r;++n)t[n]===-1&&o.push(n);return t=t.filter(n=>n!==-1),{permutationIndices:t,expandDims:o}}function JG(r,e,t){let o=new Array(r);for(let n=0;n<t.length;++n){let s=t[n].shape;for(let i=0;i<e[n].length;++i)o[e[n][i]]===void 0?o[e[n][i]]=s[i]:E(o[e[n][i]]===s[i],()=>`Expected dimension ${o[e[n][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function QG(r,e){let t=r,o=[],n=0;r.length===0&&t.push(-1),n=r.length+1;for(let i=0;i<n;++i)o.push([]);let s=[];for(let i=0;i<t.length;++i){let a=t[i],l=eW(e,a);for(let u of l)s.indexOf(u)===-1&&(o[i].push(u),s.push(u))}return{path:t,steps:o}}function tW(r){return r.every((e,t)=>e===t)}function eW(r,e){let t=[];for(let o=0;o<r.length;++o)(r[o].length===0||r[o].indexOf(e)!==-1||e===-1)&&t.push(o);return t}function rW(r,e,t=0){let o=[];if(typeof e=="number")E(r.shape[t]%e===0,()=>"Number of splits must evenly divide the axis."),o=new Array(e).fill(r.shape[t]/e);else{let n=e.reduce((i,a)=>(a===-1&&(i+=1),i),0);E(n<=1,()=>"There should be only one negative value in split array.");let s=e.indexOf(-1);if(s!==-1){let i=e.reduce((a,l)=>l>0?a+l:a);e[s]=r.shape[t]-i}E(r.shape[t]===e.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),o=e}return o}function oW(r){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${r}`}function nW(r,e){return`indices(${r}, 0) is invalid: ${e} < 0`}function sW(r,e,t){return`indices(${r}, 0) is invalid: ${e} >= ${t}`}function iW(r,e){return`only one output dimension may be -1, not both ${r} and ${e}`}function aW(r,e){return`size ${r} must be non-negative, not ${e}`}function lW(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function uW(r,e){let t=Ot(r),o=Ot(e);return`Input to reshape is a SparseTensor with ${t}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${r} outputShape= ${e}`}function cW(r,e){let t=Ot(r),o=Ot(e);return`Input to reshape is a tensor with ${t} dense values, but the requested shape has ${o}. inputShape=${r} outputShape=${e}`}function pW(){return"segment ids must be >= 0"}function mW(){return"segment ids are not increasing"}function fW(r,e){return`Segment id ${r} out of range [0, ${e}), possibly because segmentIds input is not sorted.`}function hW(r,e,t){return`Bad: indices[${r}] == ${e} out of range [0, ${t})`}var fb={};Zt(fb,{collectGatherOpShapeInfo:()=>xW,computeOutShape:()=>gW,segOpComputeOptimalWindowSize:()=>dW});function dW(r,e){let t=!1,o;for(r<=$h?(o=r,t=!0):o=jl(r,Math.floor(Math.sqrt(r)));!t;)o>e||o===r?t=!0:o=jl(r,o+1);return o}function gW(r,e,t){let o=[],n=r.length;for(let s=0;s<n;s++)s!==e?o.push(r[s]):o.push(t);return o}function xW(r,e,t,o){let n=e.shape.length,s=r.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(t<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${t}).`);for(let p=0;p<o;++p)if(r.shape[p]!==e.shape[p])throw new Error(`x.shape[${p}]: ${r.shape[p]} should be equal to indices.shape[${p}]: ${e.shape[p]}.`);let i=r.shape[t],a=[],l=1,u=1,c=1;for(let p=0;p<o;++p)a.push(r.shape[p]),l*=r.shape[p];for(let p=o;p<t;p++)a.push(r.shape[p]),u*=r.shape[p];for(let p=o;p<n;p++)a.push(e.shape[p]);for(let p=t+1;p<s;p++)a.push(r.shape[p]),c*=r.shape[p];return{batchSize:l,sliceSize:c,outerSize:u,dimSize:i,outputShape:a}}function yW(r){try{return r.map(e=>sc(e))}catch(e){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function bW(r){return r.map(e=>nc(e))}var gr={};Zt(gr,{nonMaxSuppressionV3Impl:()=>wh,nonMaxSuppressionV4Impl:()=>Ch,nonMaxSuppressionV5Impl:()=>vh,whereImpl:()=>hh});lN();var wW=L();wW.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,r=>{r&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var eo=function(r){return r[r.DT_INVALID=0]="DT_INVALID",r[r.DT_FLOAT=1]="DT_FLOAT",r[r.DT_DOUBLE=2]="DT_DOUBLE",r[r.DT_INT32=3]="DT_INT32",r[r.DT_UINT8=4]="DT_UINT8",r[r.DT_INT16=5]="DT_INT16",r[r.DT_INT8=6]="DT_INT8",r[r.DT_STRING=7]="DT_STRING",r[r.DT_COMPLEX64=8]="DT_COMPLEX64",r[r.DT_INT64=9]="DT_INT64",r[r.DT_BOOL=10]="DT_BOOL",r[r.DT_QINT8=11]="DT_QINT8",r[r.DT_QUINT8=12]="DT_QUINT8",r[r.DT_QINT32=13]="DT_QINT32",r[r.DT_BFLOAT16=14]="DT_BFLOAT16",r[r.DT_QINT16=15]="DT_QINT16",r[r.DT_QUINT16=16]="DT_QUINT16",r[r.DT_UINT16=17]="DT_UINT16",r[r.DT_COMPLEX128=18]="DT_COMPLEX128",r[r.DT_HALF=19]="DT_HALF",r[r.DT_RESOURCE=20]="DT_RESOURCE",r[r.DT_VARIANT=21]="DT_VARIANT",r[r.DT_UINT32=22]="DT_UINT32",r[r.DT_UINT64=23]="DT_UINT64",r[r.DT_FLOAT_REF=101]="DT_FLOAT_REF",r[r.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",r[r.DT_INT32_REF=103]="DT_INT32_REF",r[r.DT_UINT8_REF=104]="DT_UINT8_REF",r[r.DT_INT16_REF=105]="DT_INT16_REF",r[r.DT_INT8_REF=106]="DT_INT8_REF",r[r.DT_STRING_REF=107]="DT_STRING_REF",r[r.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",r[r.DT_INT64_REF=109]="DT_INT64_REF",r[r.DT_BOOL_REF=110]="DT_BOOL_REF",r[r.DT_QINT8_REF=111]="DT_QINT8_REF",r[r.DT_QUINT8_REF=112]="DT_QUINT8_REF",r[r.DT_QINT32_REF=113]="DT_QINT32_REF",r[r.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",r[r.DT_QINT16_REF=115]="DT_QINT16_REF",r[r.DT_QUINT16_REF=116]="DT_QUINT16_REF",r[r.DT_UINT16_REF=117]="DT_UINT16_REF",r[r.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",r[r.DT_HALF_REF=119]="DT_HALF_REF",r[r.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",r[r.DT_VARIANT_REF=121]="DT_VARIANT_REF",r[r.DT_UINT32_REF=122]="DT_UINT32_REF",r[r.DT_UINT64_REF=123]="DT_UINT64_REF",r}(eo||{}),_N;(function(r){let e;(function(t){t[t.LEGACY=0]="LEGACY",t[t.V1=1]="V1",t[t.V2=2]="V2"})(e=r.CheckpointFormatVersion||(r.CheckpointFormatVersion={}))})(_N||(_N={}));var vW={};function Dh(r){return vW[r]}function v(r,e,t,o,n){let s=e.inputParams[r];if(s&&s.inputIndexStart!==void 0){let a=s.inputIndexStart,l=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?a+1:s.inputIndexEnd,u=a<0?e.inputNames.length+a:a;if(s.type==="tensor")return ze(e.inputNames[u],t,o,n);if(s.type==="tensors"){let m=e.inputs.slice(a,l);return e.inputNames.slice(a,l).filter((h,g)=>{var d;return((d=m[g])===null||d===void 0?void 0:d.op)!=="NoOp"}).map(h=>ze(h,t,o,n))}let c=ze(e.inputNames[u],t,o,n),p=c.dataSync();return s.type==="number"?p[0]:b.toNestedArray(c.shape,p)}let i=e.attrParams[r];return i&&i.value}function ze(r,e,t,o){let[n,s]=$r(r,t);if(o!=null){let a=o.getHashTableHandleByName(n);if(a!=null)return a}let i=t.currentContextIds.find(a=>!!e[Rh(n,a)]);return i!==void 0?e[Rh(n,i)][s]:void 0}function hb(r,e,t){return e[Rh(r,t.currentContextId)]}function Xo(r,e){let[t,o,n]=$r(r,e);return[Rh(t,e&&e.currentContextId),o,n]}function Rh(r,e){return e?`${r}-${e}`:r}function $r(r,e){if(r==="")return["",0,void 0];let t=e!=null&&e.parseNodeNameCache!=null;if(t){let s=e.parseNodeNameCache.get(r);if(s!=null)return s}let o=r.split(":"),n;if(o.length===1)n=[r,0,void 0];else{let s=o[0],i=o.length===3?o[1]:void 0,a=Number(o[o.length-1]);n=[s,a,i]}return t&&e.parseNodeNameCache.set(r,n),n}function nm(r,e,t){let o=v("pad",r,e,t);if(o==="explicit"){o=v("explicitPaddings",r,e,t);let n=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)n[s][0]=o[s*2],n[s][1]=o[s*2+1];return n}return o}function Yo(r){return r.kept?r:kr(r)}var db={};Zt(db,{json:()=>SW});var SW=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var gb={};Zt(gb,{json:()=>NW});var NW=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var xb={};Zt(xb,{json:()=>TW});var TW=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var yb={};Zt(yb,{json:()=>IW});var IW=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var bb={};Zt(bb,{json:()=>kW});var kW=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var wb={};Zt(wb,{json:()=>EW});var EW=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Cb={};Zt(Cb,{json:()=>AW});var AW=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var vb={};Zt(vb,{json:()=>$W});var $W=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var Sb={};Zt(Sb,{json:()=>DW});var DW=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var Nb={};Zt(Nb,{json:()=>RW});var RW=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var Tb={};Zt(Tb,{json:()=>_W});var _W=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}];var Ib={};Zt(Ib,{json:()=>FW});var FW=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}];var kb={};Zt(kb,{json:()=>OW});var OW=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}];var Eb={};Zt(Eb,{json:()=>LW});var LW=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var Ab={};Zt(Ab,{json:()=>PW});var PW=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var $b={};Zt($b,{json:()=>zW});var zW=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var Db={};Zt(Db,{json:()=>MW});var MW=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var Rb={};Zt(Rb,{json:()=>BW});var BW=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var _b={};Zt(_b,{json:()=>VW});var VW=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var sm=class{static get Instance(){return this._instance||(this._instance=new this)}constructor(){let e=[db,gb,xb,yb,bb,wb,Cb,vb,Sb,Nb,Tb,Ib,kb,Eb,Ab,$b,Db,Rb,_b],t=[].concat(...e.map(o=>o.json));this.opMappers=t.reduce((o,n)=>(o[n.tfOpName]=n,o),{})}transformGraph(e,t={}){let o=e.node,n=[],s=[],i=[],a=o.reduce((g,d)=>(g[d.name]=this.mapNode(d),d.op.startsWith("Placeholder")?n.push(g[d.name]):d.op==="Const"?s.push(g[d.name]):(d.input==null||d.input.length===0)&&i.push(g[d.name]),g),{}),l=[],u=[],c={},p={};t!=null&&(c=this.mapSignatureEntries(t.inputs),p=this.mapSignatureEntries(t.outputs));let m=Object.keys(a);m.forEach(g=>{let d=a[g];d.inputNames.forEach((x,y)=>{let[w,,C]=Xo(x),T=a[w];if(T.outputs!=null){let A=T.outputs.indexOf(C);if(A!==-1){let $=`${w}:${A}`;d.inputNames[y]=$}}d.inputs.push(T),T.children.push(d)})}),Object.keys(p).length===0?m.forEach(g=>{let d=a[g];d.children.length===0&&u.push(d)}):Object.keys(p).forEach(g=>{let[d]=Xo(g),x=a[d];x!=null&&(x.signatureKey=p[g],u.push(x))}),Object.keys(c).length>0?Object.keys(c).forEach(g=>{let[d]=Xo(g),x=a[d];x&&(x.signatureKey=c[g],l.push(x))}):l=n;let f={};e.library!=null&&e.library.function!=null&&(f=e.library.function.reduce((g,d)=>(g[d.signature.name]=this.mapFunction(d),g),{}));let h={nodes:a,inputs:l,outputs:u,weights:s,placeholders:n,signature:t,functions:f};return i.length>0&&(h.initNodes=i),h}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,o)=>(t[e[o].name]=o,t),{})}mapNode(e){let t=Dh(e.op)||this.opMappers[e.op]||{};e.attr==null&&(e.attr={});let o={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(n=>n.startsWith("^")?n.slice(1):n),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return t.inputs!=null&&(o.inputParams=t.inputs.reduce((n,s)=>(n[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},n),{})),t.attrs!=null&&(o.attrParams=t.attrs.reduce((n,s)=>{let i=s.type,a;switch(s.type){case"string":a=_h(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=_h(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":a=Bh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Bh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":a=Oh(e.attr,s.tfName,s.defaultValue||0),a===void 0&&s.tfDeprecatedName&&(a=Oh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":a=Mh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Mh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":a=Fh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Fh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":a=Gh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Gh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":a=zh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=zh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":a=Vh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Vh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":a=Lh(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Lh(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":a=Ph(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=Ph(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":a=FN(e.attr,s.tfName,s.defaultValue),a===void 0&&s.tfDeprecatedName&&(a=FN(e.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${e.op}`)}return n[s.name]={value:a,type:i},n},{})),o}mapFunction(e){let t=e.nodeDef,o=[],n=[],s={};t!=null&&(s=t.reduce((p,m)=>(p[m.name]=this.mapNode(m),m.op==="Const"&&n.push(p[m.name]),p),{}));let i=[],a=[];e.signature.inputArg.forEach(p=>{let[m]=Xo(p.name),f={name:m,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Fb(p.type),type:"dtype"}},children:[]};f.signatureKey=p.name,i.push(f),s[m]=f}),Object.keys(s).forEach(p=>{let m=s[p];m.inputNames.forEach((f,h)=>{let[g,,d]=Xo(f),x=s[g];if(x.outputs!=null){let y=x.outputs.indexOf(d);if(y!==-1){let w=`${g}:${y}`;m.inputNames[h]=w}}m.inputs.push(x),x.children.push(m)})});let u=e.ret;e.signature.outputArg.forEach(p=>{let[m,f]=Xo(u[p.name]),h=s[m];h!=null&&(h.defaultOutput=f,a.push(h))});let c=this.mapArgsToSignature(e);return{nodes:s,inputs:i,outputs:a,weights:n,placeholders:o,signature:c}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((t,o)=>(t[o.name]=this.mapArgToTensorInfo(o),t),{}),outputs:e.signature.outputArg.reduce((t,o)=>(t[o.name]=this.mapArgToTensorInfo(o,e.ret),t),{})}}mapArgToTensorInfo(e,t){let o=e.name;return t!=null&&(o=t[o]),{name:o,dtype:e.type}}};function GW(r){let e=L().global;if(typeof e.atob<"u")return e.atob(r);if(typeof Buffer<"u")return new Buffer(r,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function ON(r,e){let t=Array.isArray(r)?String.fromCharCode.apply(null,r):GW(r);return e?t:t.toLowerCase()}function _h(r,e,t,o=!1){let n=r[e];return n!=null?ON(n.s,o):t}function Fh(r,e,t){let o=r[e];return o?o.b:t}function Oh(r,e,t){let o=r[e]||{},n=o.i!=null?o.i:o.f!=null?o.f:t;return typeof n=="number"?n:parseInt(n,10)}function Fb(r){switch(typeof r=="string"&&(r=eo[r]),r){case eo.DT_FLOAT:case eo.DT_HALF:return"float32";case eo.DT_INT32:case eo.DT_INT64:case eo.DT_INT8:case eo.DT_UINT8:return"int32";case eo.DT_BOOL:return"bool";case eo.DT_DOUBLE:return"float32";case eo.DT_STRING:return"string";case eo.DT_COMPLEX64:case eo.DT_COMPLEX128:return"complex64";default:return null}}function FN(r,e,t){let o=r[e];return o&&o.func?o.func.name:t}function Lh(r,e,t){let o=r[e];return o&&o.type?Fb(o.type):t}function Ph(r,e,t){let o=r[e];return o&&o.list&&o.list.type?o.list.type.map(n=>Fb(n)):t}function LN(r){if(!r.unknownRank)return r.dim!=null?r.dim.map(e=>typeof e.size=="number"?e.size:parseInt(e.size,10)):[]}function zh(r,e,t){let o=r[e];return o&&o.shape?LN(o.shape):t}function Mh(r,e,t){let o=r[e];return o?((o.list.f&&o.list.f.length?o.list.f:o.list.i)||[]).map(n=>typeof n=="number"?n:parseInt(n,10)):t}function Bh(r,e,t,o=!1){let n=r[e];return n&&n.list&&n.list.s?n.list.s.map(s=>ON(s,o)):t}function Vh(r,e,t){let o=r[e];return o&&o.list&&o.list.shape?o.list.shape.map(n=>LN(n)):t}function Gh(r,e,t){let o=r[e];return o&&o.list&&o.list.b?o.list.b:t}var Wh=class{constructor(e,t,o){this.node=e,this.tensorMap=t,this.context=o,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(n=>this.getInput(n)),e.rawAttrs!=null&&(this.attrs=Object.keys(e.rawAttrs).reduce((n,s)=>(n[s]=this.getAttr(s),n),{}))}getInput(e){return ze(e,this.tensorMap,this.context)}getAttr(e,t){let o=this.node.rawAttrs[e];if(o.tensor!=null)return ze(e,this.tensorMap,this.context);if(o.i!=null||o.f!=null)return Oh(this.node.rawAttrs,e,t);if(o.s!=null)return _h(this.node.rawAttrs,e,t);if(o.b!=null)return Fh(this.node.rawAttrs,e,t);if(o.shape!=null)return zh(this.node.rawAttrs,e,t);if(o.type!=null)return Lh(this.node.rawAttrs,e,t);if(o.list!=null){if(o.list.i!=null||o.list.f!=null)return Mh(this.node.rawAttrs,e,t);if(o.list.s!=null)return Bh(this.node.rawAttrs,e,t);if(o.list.shape!=null)return Vh(this.node.rawAttrs,e,t);if(o.list.b!=null)return Gh(this.node.rawAttrs,e,t);if(o.list.type!=null)return Ph(this.node.rawAttrs,e,t)}return t}};var Wt={};Zt(Wt,{OP_SCOPE_SUFFIX:()=>Ty,abs:()=>ae,acos:()=>yf,acosh:()=>bf,add:()=>U,addN:()=>gv,all:()=>mc,any:()=>il,argMax:()=>dn,argMin:()=>wf,asin:()=>Cf,asinh:()=>vf,atan:()=>Sf,atan2:()=>Nf,atanh:()=>Tf,avgPool:()=>Qi,avgPool3d:()=>If,basicLSTMCell:()=>bv,batchNorm:()=>xn,batchNorm2d:()=>kf,batchNorm3d:()=>Ef,batchNorm4d:()=>Af,batchToSpaceND:()=>ta,bincount:()=>$f,bitwiseAnd:()=>Cv,booleanMaskAsync:()=>kB,broadcastArgs:()=>vv,broadcastTo:()=>yn,buffer:()=>ft,cast:()=>j,ceil:()=>Df,clipByValue:()=>Xe,clone:()=>kr,complex:()=>Mr,concat:()=>Gt,concat1d:()=>Rf,concat2d:()=>hc,concat3d:()=>_f,concat4d:()=>Ff,conv1d:()=>dc,conv2d:()=>Br,conv2dTranspose:()=>xc,conv3d:()=>Of,conv3dTranspose:()=>Pf,cos:()=>ea,cosh:()=>yc,cosineWindow:()=>tm,cumprod:()=>ll,cumsum:()=>bc,denseBincount:()=>jp,depthToSpace:()=>zf,depthwiseConv2d:()=>bn,diag:()=>Sv,dilation2d:()=>Mf,div:()=>rt,divNoNan:()=>Bf,dot:()=>Vf,dropout:()=>Xy,einsum:()=>ra,elu:()=>wn,enclosingPowerOfTwo:()=>Yy,ensureShape:()=>Tv,equal:()=>wr,erf:()=>wc,euclideanNorm:()=>Gf,exp:()=>Ie,expandDims:()=>xe,expm1:()=>Wf,eye:()=>ul,fft:()=>ma,fill:()=>So,floor:()=>Cn,floorDiv:()=>pc,fused:()=>ha,gather:()=>vn,gatherND:()=>PB,greater:()=>ye,greaterEqual:()=>Er,ifft:()=>Os,imag:()=>oa,image:()=>Je,inTopKAsync:()=>BB,irfft:()=>Rc,isFinite:()=>Uf,isInf:()=>Hf,isNaN:()=>Kf,leakyRelu:()=>na,less:()=>_s,lessEqual:()=>Qr,linalg:()=>Jy,linspace:()=>Ev,localResponseNormalization:()=>qf,log:()=>Ze,log1p:()=>sa,logSigmoid:()=>jf,logSoftmax:()=>Cc,logSumExp:()=>ia,logicalAnd:()=>fr,logicalNot:()=>aa,logicalOr:()=>vc,logicalXor:()=>Xf,losses:()=>GV,lowerBound:()=>Av,matMul:()=>Dt,max:()=>Ye,maxPool:()=>la,maxPool3d:()=>Zf,maxPoolWithArgmax:()=>$v,maximum:()=>Gr,mean:()=>oe,meshgrid:()=>Dv,min:()=>Ds,minimum:()=>fo,mirrorPad:()=>Jf,mod:()=>Qf,moments:()=>cl,movingAverage:()=>$B,mul:()=>D,multiRNNCell:()=>Rv,multinomial:()=>_v,neg:()=>_t,norm:()=>Rs,notEqual:()=>Ko,oneHot:()=>pl,ones:()=>Fe,onesLike:()=>He,op:()=>N,outerProduct:()=>Fv,pad:()=>Ar,pad1d:()=>Ov,pad2d:()=>Lv,pad3d:()=>Pv,pad4d:()=>zv,pool:()=>th,pow:()=>mr,prelu:()=>ca,print:()=>xf,prod:()=>eh,raggedGather:()=>Mv,raggedRange:()=>Bv,raggedTensorToTensor:()=>Vv,rand:()=>Gv,randomGamma:()=>sS,randomNormal:()=>hl,randomStandardNormal:()=>iS,randomUniform:()=>to,randomUniformInt:()=>aS,range:()=>Sn,real:()=>Fs,reciprocal:()=>ih,relu:()=>ar,relu6:()=>Sc,reshape:()=>R,reverse:()=>Ve,reverse1d:()=>lS,reverse2d:()=>uS,reverse3d:()=>cS,reverse4d:()=>pS,rfft:()=>fa,round:()=>Nc,rsqrt:()=>Tc,scalar:()=>st,scatterND:()=>RB,searchSorted:()=>Yp,selu:()=>Ic,separableConv2d:()=>kc,setdiff1dAsync:()=>mS,sigmoid:()=>sr,sign:()=>ah,signal:()=>VV,sin:()=>Ec,sinh:()=>Ac,slice:()=>bt,slice1d:()=>$c,slice2d:()=>Jp,slice3d:()=>Dc,slice4d:()=>dl,softmax:()=>pa,softplus:()=>Ho,spaceToBatchND:()=>ua,sparse:()=>WV,sparseToDense:()=>OB,spectral:()=>BV,split:()=>Ge,sqrt:()=>Xt,square:()=>$t,squaredDifference:()=>_c,squeeze:()=>Cr,stack:()=>be,step:()=>To,stridedSlice:()=>lh,string:()=>UV,sub:()=>et,sum:()=>it,tan:()=>uh,tanh:()=>Uo,tensor:()=>qe,tensor1d:()=>le,tensor2d:()=>qo,tensor3d:()=>ch,tensor4d:()=>fS,tensor5d:()=>hS,tensor6d:()=>dS,tensorScatterUpdate:()=>yS,tile:()=>ir,topk:()=>ph,transpose:()=>Rt,truncatedNormal:()=>Fc,unique:()=>mh,unsortedSegmentSum:()=>Oc,unstack:()=>We,upperBound:()=>bS,variable:()=>fh,where:()=>re,whereAsync:()=>dh,zeros:()=>ne,zerosLike:()=>gt});var PN=(r,e,t,o=Wt)=>{switch(r.op){case"BiasAdd":case"AddV2":case"Add":return[o.add(v("a",r,e,t),v("b",r,e,t))];case"AddN":return[o.addN(v("tensors",r,e,t))];case"FloorMod":case"Mod":return[o.mod(v("a",r,e,t),v("b",r,e,t))];case"Mul":return[o.mul(v("a",r,e,t),v("b",r,e,t))];case"RealDiv":case"Div":return[o.div(v("a",r,e,t),v("b",r,e,t))];case"DivNoNan":return[o.divNoNan(v("a",r,e,t),v("b",r,e,t))];case"FloorDiv":return[o.floorDiv(v("a",r,e,t),v("b",r,e,t))];case"Sub":return[o.sub(v("a",r,e,t),v("b",r,e,t))];case"Minimum":return[o.minimum(v("a",r,e,t),v("b",r,e,t))];case"Maximum":return[o.maximum(v("a",r,e,t),v("b",r,e,t))];case"Pow":return[o.pow(v("a",r,e,t),v("b",r,e,t))];case"SquaredDifference":return[o.squaredDifference(v("a",r,e,t),v("b",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var zN=(r,e,t,o=Wt)=>{switch(r.op){case"Abs":case"ComplexAbs":return[o.abs(v("x",r,e,t))];case"Acos":return[o.acos(v("x",r,e,t))];case"Acosh":return[o.acosh(v("x",r,e,t))];case"Asin":return[o.asin(v("x",r,e,t))];case"Asinh":return[o.asinh(v("x",r,e,t))];case"Atan":return[o.atan(v("x",r,e,t))];case"Atan2":return[o.atan2(v("x",r,e,t),v("y",r,e,t))];case"Atanh":return[o.atanh(v("x",r,e,t))];case"Ceil":return[o.ceil(v("x",r,e,t))];case"Complex":return[o.complex(v("real",r,e,t),v("imag",r,e,t))];case"Cos":return[o.cos(v("x",r,e,t))];case"Cosh":return[o.cosh(v("x",r,e,t))];case"Elu":return[o.elu(v("x",r,e,t))];case"Erf":return[o.erf(v("x",r,e,t))];case"Exp":return[o.exp(v("x",r,e,t))];case"Expm1":return[o.expm1(v("x",r,e,t))];case"Floor":return[o.floor(v("x",r,e,t))];case"Log":return[o.log(v("x",r,e,t))];case"Log1p":return[o.log1p(v("x",r,e,t))];case"Imag":return[o.imag(v("x",r,e,t))];case"Neg":return[o.neg(v("x",r,e,t))];case"Reciprocal":return[o.reciprocal(v("x",r,e,t))];case"Real":return[o.real(v("x",r,e,t))];case"Relu":return[o.relu(v("x",r,e,t))];case"Round":return[o.round(v("x",r,e,t))];case"Selu":return[o.selu(v("x",r,e,t))];case"Sigmoid":return[o.sigmoid(v("x",r,e,t))];case"Sin":return[o.sin(v("x",r,e,t))];case"Sign":return[o.sign(v("x",r,e,t))];case"Sinh":return[o.sinh(v("x",r,e,t))];case"Softplus":return[o.softplus(v("x",r,e,t))];case"Sqrt":return[o.sqrt(v("x",r,e,t))];case"Square":return[o.square(v("x",r,e,t))];case"Tanh":return[o.tanh(v("x",r,e,t))];case"Tan":return[o.tan(v("x",r,e,t))];case"ClipByValue":return[o.clipByValue(v("x",r,e,t),v("clipValueMin",r,e,t),v("clipValueMax",r,e,t))];case"Relu6":return[o.relu6(v("x",r,e,t))];case"Rsqrt":return[o.rsqrt(ze(r.inputNames[0],e,t))];case"LeakyRelu":return[o.leakyRelu(v("x",r,e,t),v("alpha",r,e,t))];case"Prelu":return[o.prelu(v("x",r,e,t),v("alpha",r,e,t))];case"IsNan":return[o.isNaN(ze(r.inputNames[0],e,t))];case"IsInf":return[o.isInf(ze(r.inputNames[0],e,t))];case"IsFinite":return[o.isFinite(ze(r.inputNames[0],e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function ro(r,e,t=""){if(!(typeof r=="number"||typeof e=="number")){b.assert(r.length===e.length,()=>t+` Shapes ${r} and ${e} must match`);for(let o=0;o<r.length;o++){let n=r[o],s=e[o];b.assert(n<0||s<0||n===s,()=>t+` Shapes ${r} and ${e} must match`)}}}function MN(r){return!(typeof r=="number"||r.some(e=>e<0))}function Wc(r,e,t){let o=Uh(r,t),n=!MN(o);if(n&&e.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${o}`);if(n&&e.forEach(s=>{o=Uh(s.shape,o)}),!MN(o))throw new Error(`Non-fully-defined elementShape: ${o}`);return o}function Uh(r,e){if(typeof r=="number")return e;if(typeof e=="number")return r;if(r.length!==e.length)throw new Error(`Incompatible ranks during merge: ${r} vs. ${e}`);let t=[];for(let o=0;o<r.length;++o){let n=r[o],s=e[o];if(n>=0&&s>=0&&n!==s)throw new Error(`Incompatible shape during merge: ${r} vs. ${e}`);t[o]=n>=0?n:s}return t}var Hh=class{constructor(e,t,o,n,s,i,a){this.name=e,this.dtype=t,this.maxSize=o,this.elementShape=n,this.identicalElementShapes=s,this.dynamicSize=i,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=st(0),ce(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.tensor.id))&&t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw new Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);let t=this.tensors[e];if(t.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(t=>this.read(t))}write(e,t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw new Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);let o=this.tensors[e]||{};if(t.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=t.shape),ro(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),o.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(o.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);o.tensor=t,ce(t),o.written=!0,this.tensors[e]=o}writeMany(e,t){if(e.length!==t.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((o,n)=>this.write(o,t[n]))}gather(e,t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let n=0;n<this.size();n++)e.push(n)}if(e.length===0)return qe([],[0].concat(this.elementShape));let o=this.readMany(e);return ro(this.elementShape,o[0].shape,"TensorArray shape mismatch: "),be(o,0)}concat(e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(this.size()===0)return qe([],[0].concat(this.elementShape));let t=[];for(let n=0;n<this.size();n++)t.push(n);let o=this.readMany(t);return ro(this.elementShape,o[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${o[0].shape})`),Gt(o,0)}scatter(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);let o=Math.max(...e);if(!this.dynamicSize&&o>=this.maxSize)throw new Error(`Max index must be < array size (${o}  vs. ${this.maxSize})`);this.writeMany(e,We(t,0))}split(e,t){if(t.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let o=0,n=e.map(l=>(o+=l,o));if(o!==t.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${o}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);let s=o===0?0:t.size/o,i=[];M(()=>{t=R(t,[1,o,s]);for(let l=0;l<e.length;++l){let c=[0,l===0?0:n[l-1],0],p=[1,e[l],s];i[l]=R(bt(t,c,p),this.elementShape)}return i});let a=[];for(let l=0;l<e.length;l++)a[l]=l;this.writeMany(a,i)}};var Uc=class r{get id(){return this.idTensor.id}constructor(e,t,o,n=-1){this.tensors=e,this.elementShape=t,this.elementDtype=o,e?.forEach(s=>{if(o!==s.dtype)throw new Error(`Invalid data types; op elements ${o}, but list elements ${s.dtype}`);ro(t,s.shape,"TensorList shape mismatch: "),ce(s)}),this.idTensor=st(0),this.maxNumElements=n,ce(this.idTensor)}copy(){return new r([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{(e==null||!e.has(t.id))&&t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,o=-1){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(o!==-1&&this.tensors.length!==o)throw new Error(`Operation expected a list with ${o} elements but got a list with ${this.tensors.length} elements.`);ro(e,this.elementShape,"TensorList shape mismatch: ");let n=Wc(this.elementShape,this.tensors,e);return M(()=>{let s=this.tensors.map(i=>R(i,n));return be(s,0)})}popBack(e,t){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");let o=Wc(this.elementShape,this.tensors,e),n=this.tensors.pop();return n.kept=!1,ro(n.shape,e,"TensorList shape mismatch: "),R(n,o)}pushBack(e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(ro(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");ce(e),this.tensors.push(e)}resize(e){if(e<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(this.maxNumElements!==-1&&e>this.maxNumElements)throw new Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);let t=new r([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let o=0;o<Math.min(this.tensors.length,e);++o)t.tensors[o]=this.tensors[o];return t}getItem(e,t,o){if(o!==this.elementDtype)throw new Error(`Invalid data types; op elements ${o}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw new Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(this.tensors[e]==null)throw new Error(`element at index ${e} is null.`);ro(this.tensors[e].shape,t,"TensorList shape mismatch: ");let n=Wc(this.elementShape,this.tensors,t);return R(this.tensors[e],n)}setItem(e,t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||this.maxNumElements!==-1&&e>=this.maxNumElements)throw new Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);ro(this.elementShape,t.shape,"TensorList shape mismatch: "),ce(t),this.tensors[e]!=null&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,o){if(t!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);ro(this.elementShape,o,"TensorList shape mismatch: "),e=e.slice(0,this.size());let n=Wc(this.elementShape,this.tensors,o);return e.length===0?qe([],[0].concat(n)):M(()=>{let s=e.map(i=>R(this.tensors[i],n));return be(s,0)})}concat(e,t){if(e&&e!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);ro(this.elementShape,t,"TensorList shape mismatch: ");let o=Wc(this.elementShape,this.tensors,t);return this.size()===0?qe([],[0].concat(o)):M(()=>{let n=this.tensors.map(s=>R(s,o));return Gt(n,0)})}};function BN(r,e,t){let o=r.dtype;if(r.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${r.shape}`);if(r.dtype!==t)throw new Error(`Invalid data types; op elements ${r.dtype}, but list elements ${t}`);let n=r.shape.slice(1);ro(n,e,"TensorList shape mismatch: ");let s=We(r);return new Uc(s,e,o)}function VN(r,e,t,o){return new Uc([],r,e,o)}function GN(r,e,t,o){if(e.length!==r.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${r.shape[0]}`);let n=Math.max(...e);if(o!=null&&o!==-1&&n>=o)throw new Error(`Max index must be < array size (${n}  vs. ${o})`);let s=new Uc([],t,r.dtype,o),i=We(r,0);return e.forEach((a,l)=>{s.setItem(a,i[l])}),s}function WN(r,e,t){let o=0,n=e.map(c=>(o+=c,o));if(o!==r.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${o}, and tensor's shape is: ${r.shape}`);let s=r.shape.slice(1),i=Uh(s,t),a=o===0?0:r.size/o,l=M(()=>{let c=[];r=R(r,[1,o,a]);for(let p=0;p<e.length;++p){let f=[0,p===0?0:n[p-1],0],h=[1,e[p],a];c[p]=R(bt(r,f,h),i)}return r.dispose(),c}),u=new Uc([],t,r.dtype,e.length);for(let c=0;c<l.length;c++)u.setItem(c,l[c]);return u}var UN=(r,e,t)=>B(void 0,null,function*(){switch(r.op){case"If":case"StatelessIf":{let o=v("thenBranch",r,e,t),n=v("elseBranch",r,e,t),s=v("cond",r,e,t),i=v("args",r,e,t);return(yield s.data())[0]?t.functionMap[o].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap):t.functionMap[n].executeFunctionAsync(i,t.tensorArrayMap,t.tensorListMap)}case"While":case"StatelessWhile":{let o=v("body",r,e,t),n=v("cond",r,e,t),s=v("args",r,e,t),i=yield t.functionMap[n].executeFunctionAsync(s,t.tensorArrayMap,t.tensorListMap),a=s.map(c=>c.id),l=yield i[0].data();i.forEach(c=>{!c.kept&&a.indexOf(c.id)===-1&&c.dispose()});let u=s;for(;l[0];){let c=u;u=yield t.functionMap[o].executeFunctionAsync(u,t.tensorArrayMap,t.tensorListMap);let p=u.map(f=>f.id);c.forEach(f=>{!f.kept&&a.indexOf(f.id)===-1&&p.indexOf(f.id)===-1&&f.dispose()});let m=yield t.functionMap[n].executeFunctionAsync(u,t.tensorArrayMap,t.tensorListMap);l=yield m[0].data(),m.forEach(f=>{!f.kept&&a.indexOf(f.id)===-1&&p.indexOf(f.id)===-1&&f.dispose()})}return u}case"LoopCond":{let o=v("pred",r,e,t);return[Yo(o)]}case"Switch":{let o=v("pred",r,e,t),n=v("data",r,e,t);return n.kept||(n=Yo(n)),(yield o.data())[0]?[void 0,n]:[n,void 0]}case"Merge":{let o=r.inputNames.find(n=>ze(n,e,t)!==void 0);if(o){let n=ze(o,e,t);return[Yo(n)]}return}case"Enter":{let o=v("frameName",r,e,t),n=v("tensor",r,e,t);return t.enterFrame(o),[Yo(n)]}case"Exit":{let o=v("tensor",r,e,t);return t.exitFrame(),[Yo(o)]}case"NextIteration":{let o=v("tensor",r,e,t);return t.nextIteration(),[Yo(o)]}case"TensorArrayV3":{let o=v("size",r,e,t),n=v("dtype",r,e,t),s=v("elementShape",r,e,t),i=v("dynamicSize",r,e,t),a=v("clearAfterRead",r,e,t),l=v("identicalElementShapes",r,e,t),u=v("name",r,e,t),c=new Hh(u,n,o,s,l,i,a);return t.addTensorArray(c),[c.idTensor,st(1)]}case"TensorArrayWriteV3":{let o=v("tensorArrayId",r,e,t),n=v("index",r,e,t),s=v("tensor",r,e,t),i=t.getTensorArray(o.id);return i.write(n,s),[i.idTensor]}case"TensorArrayReadV3":{let o=v("tensorArrayId",r,e,t),n=v("index",r,e,t);return[t.getTensorArray(o.id).read(n)]}case"TensorArrayGatherV3":{let o=v("tensorArrayId",r,e,t),n=v("indices",r,e,t),s=v("dtype",r,e,t);return[t.getTensorArray(o.id).gather(n,s)]}case"TensorArrayScatterV3":{let o=v("tensorArrayId",r,e,t),n=v("indices",r,e,t),s=v("tensor",r,e,t),i=t.getTensorArray(o.id);return i.scatter(n,s),[i.idTensor]}case"TensorArrayConcatV3":{let o=v("tensorArrayId",r,e,t),n=t.getTensorArray(o.id),s=v("dtype",r,e,t);return[n.concat(s)]}case"TensorArraySplitV3":{let o=v("tensorArrayId",r,e,t),n=v("tensor",r,e,t),s=v("lengths",r,e,t),i=t.getTensorArray(o.id);return i.split(s,n),[i.idTensor]}case"TensorArraySizeV3":{let o=v("tensorArrayId",r,e,t),n=t.getTensorArray(o.id);return[st(n.size(),"int32")]}case"TensorArrayCloseV3":{let o=v("tensorArrayId",r,e,t),n=t.getTensorArray(o.id);return n.clearAndClose(),[n.idTensor]}case"TensorListSetItem":{let o=v("tensorListId",r,e,t),n=v("index",r,e,t),s=v("tensor",r,e,t),i=t.getTensorList(o.id);return i.setItem(n,s),[i.idTensor]}case"TensorListGetItem":{let o=v("tensorListId",r,e,t),n=v("index",r,e,t),s=v("elementShape",r,e,t),i=v("elementDType",r,e,t);return[t.getTensorList(o.id).getItem(n,s,i)]}case"TensorListScatterV2":case"TensorListScatter":{let o=v("indices",r,e,t),n=v("tensor",r,e,t),s=v("elementShape",r,e,t),i=v("numElements",r,e,t),a=GN(n,o,s,i);return t.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let o=v("elementShape",r,e,t),n=v("elementDType",r,e,t),s;r.op==="TensorListReserve"?s="numElements":s="maxNumElements";let i=v(s,r,e,t),a=r.op==="TensorListReserve"?-1:i,l=VN(o,n,i,a);return t.addTensorList(l),[l.idTensor]}case"TensorListGather":{let o=v("tensorListId",r,e,t),n=v("indices",r,e,t),s=v("elementShape",r,e,t),i=v("elementDType",r,e,t);return[t.getTensorList(o.id).gather(n,i,s)]}case"TensorListStack":{let o=v("tensorListId",r,e,t),n=v("elementShape",r,e,t),s=v("elementDType",r,e,t),i=v("numElements",r,e,t);return[t.getTensorList(o.id).stack(n,s,i)]}case"TensorListFromTensor":{let o=v("tensor",r,e,t),n=v("elementShape",r,e,t),s=v("elementDType",r,e,t),i=BN(o,n,s);return t.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let o=v("tensorListId",r,e,t),n=t.getTensorList(o.id),s=v("dtype",r,e,t),i=v("elementShape",r,e,t);return[n.concat(s,i)]}case"TensorListPushBack":{let o=v("tensorListId",r,e,t),n=v("tensor",r,e,t),s=t.getTensorList(o.id);return s.pushBack(n),[s.idTensor]}case"TensorListPopBack":{let o=v("tensorListId",r,e,t),n=v("elementShape",r,e,t),s=v("elementDType",r,e,t);return[t.getTensorList(o.id).popBack(n,s)]}case"TensorListSplit":{let o=v("tensor",r,e,t),n=v("elementShape",r,e,t),s=v("lengths",r,e,t),i=WN(o,s,n);return t.addTensorList(i),[i.idTensor]}case"TensorListLength":{let o=v("tensorListId",r,e,t),n=t.getTensorList(o.id);return[st(n.size(),"int32")]}case"TensorListResize":{let o=v("tensorListId",r,e,t),n=v("size",r,e,t),i=t.getTensorList(o.id).resize(n);return t.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${r.op} is not implemented`)}});function HN(r,e,t){let[o,n]=v("fusedOps",r,e,t),s=o==="biasadd",i=!s,a=n==="prelu",l=o==="fusedbatchnorm",u=v("numArgs",r,e,t);if(s){if(a&&u!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&s&&u!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(l)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let c=v("strides",r,e,t),p=nm(r,e,t),m=v("dataFormat",r,e,t).toUpperCase(),f=v("dilations",r,e,t),[h,g]=v("args",r,e,t);i&&(g=h,h=void 0);let d=v("leakyreluAlpha",r,e,t);return{stride:c,pad:p,dataFormat:m,dilations:f,biasArg:h,preluArg:g,activationFunc:n,leakyreluAlpha:d}}var KN=(r,e,t,o=Wt)=>{switch(r.op){case"Conv1D":{let n=v("stride",r,e,t),s=v("pad",r,e,t),i=v("dataFormat",r,e,t).toUpperCase(),a=v("dilation",r,e,t);return[o.conv1d(v("x",r,e,t),v("filter",r,e,t),n,s,i,a)]}case"Conv2D":{let n=v("strides",r,e,t),s=nm(r,e,t),i=v("dataFormat",r,e,t).toUpperCase(),a=v("dilations",r,e,t);return[o.conv2d(v("x",r,e,t),v("filter",r,e,t),[n[1],n[2]],s,i,[a[1],a[2]])]}case"_FusedConv2D":{let{stride:n,pad:s,dataFormat:i,dilations:a,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:p}=HN(r,e,t);return[o.fused.conv2d({x:v("x",r,e,t),filter:v("filter",r,e,t),strides:[n[1],n[2]],pad:s,dataFormat:i,dilations:[a[1],a[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{let{stride:n,pad:s,dataFormat:i,dilations:a,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:p}=HN(r,e,t);return[o.fused.depthwiseConv2d({x:v("x",r,e,t),filter:v("filter",r,e,t),strides:[n[1],n[2]],pad:s,dataFormat:i,dilations:[a[1],a[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let n=v("outputShape",r,e,t),s=v("strides",r,e,t),i=nm(r,e,t);return[o.conv2dTranspose(v("x",r,e,t),v("filter",r,e,t),n,[s[1],s[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let n=v("strides",r,e,t),s=nm(r,e,t),i=v("dilations",r,e,t),a=v("dataFormat",r,e,t).toUpperCase();return[o.depthwiseConv2d(v("input",r,e,t),v("filter",r,e,t),[n[1],n[2]],s,a,[i[1],i[2]])]}case"Conv3D":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("dataFormat",r,e,t).toUpperCase(),a=v("dilations",r,e,t);return[o.conv3d(v("x",r,e,t),v("filter",r,e,t),[n[1],n[2],n[3]],s,i,[a[1],a[2],a[3]])]}case"AvgPool":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[o.avgPool(v("x",r,e,t),[i[1],i[2]],[n[1],n[2]],s)]}case"MaxPool":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[o.maxPool(v("x",r,e,t),[i[1],i[2]],[n[1],n[2]],s)]}case"MaxPoolWithArgmax":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t),a=v("includeBatchInIndex",r,e,t),{result:l,indexes:u}=o.maxPoolWithArgmax(v("x",r,e,t),[i[1],i[2]],[n[1],n[2]],s,a);return[l,u]}case"AvgPool3D":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[o.avgPool3d(v("x",r,e,t),[i[1],i[2],i[3]],[n[1],n[2],n[3]],s)]}case"MaxPool3D":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("kernelSize",r,e,t);return[o.maxPool3d(v("x",r,e,t),[i[1],i[2],i[3]],[n[1],n[2],n[3]],s)]}case"Dilation2D":{let n=v("strides",r,e,t),s=v("pad",r,e,t),i=v("dilations",r,e,t),a=n[1],l=n[2],u=i[1],c=i[2];return[o.dilation2d(v("x",r,e,t),v("filter",r,e,t),[a,l],s,[u,c],"NHWC")]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var qN=(r,e,t,o=Wt)=>{switch(r.op){case"Fill":{let n=v("shape",r,e,t),s=v("dtype",r,e,t),i=v("value",r,e,t);return[o.fill(n,i,s)]}case"LinSpace":{let n=v("start",r,e,t),s=v("stop",r,e,t),i=v("num",r,e,t);return[o.linspace(n,s,i)]}case"Multinomial":{let n=v("logits",r,e,t),s=v("numSamples",r,e,t),i=v("seed",r,e,t);return[o.multinomial(n,s,i)]}case"OneHot":{let n=v("indices",r,e,t),s=v("depth",r,e,t),i=v("onValue",r,e,t),a=v("offValue",r,e,t),l=v("dtype",r,e,t);return[o.oneHot(n,s,i,a,l)]}case"Ones":return[o.ones(v("shape",r,e,t),v("dtype",r,e,t))];case"OnesLike":return[o.onesLike(v("x",r,e,t))];case"RandomStandardNormal":return[o.randomStandardNormal(v("shape",r,e,t),v("dtype",r,e,t),v("seed",r,e,t))];case"RandomUniform":return[o.randomUniform(v("shape",r,e,t),v("minval",r,e,t),v("maxval",r,e,t),v("dtype",r,e,t))];case"RandomUniformInt":return[o.randomUniformInt(v("shape",r,e,t),v("minval",r,e,t),v("maxval",r,e,t),v("seed",r,e,t))];case"Range":{let n=v("start",r,e,t),s=v("stop",r,e,t),i=v("step",r,e,t);return[o.range(n,s,i,v("dtype",r,e,t))]}case"TruncatedNormal":{let n=v("shape",r,e,t),s=v("mean",r,e,t),i=v("stdDev",r,e,t),a=v("seed",r,e,t);return[o.truncatedNormal(n,s,i,v("dtype",r,e,t),a)]}case"Zeros":return[o.zeros(v("shape",r,e,t),v("dtype",r,e,t))];case"ZerosLike":return[o.zerosLike(v("x",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function Ob(r,e,t){let o=v("boxes",r,e,t),n=v("scores",r,e,t),s=v("maxOutputSize",r,e,t),i=v("iouThreshold",r,e,t),a=v("scoreThreshold",r,e,t),l=v("softNmsSigma",r,e,t);return{boxes:o,scores:n,maxOutputSize:s,iouThreshold:i,scoreThreshold:a,softNmsSigma:l}}var jN=(s,i,a,l,...u)=>B(void 0,[s,i,a,l,...u],function*(r,e,t,o,n=Wt){switch(r.op){case"NonMaxSuppressionV5":{let{boxes:c,scores:p,maxOutputSize:m,iouThreshold:f,scoreThreshold:h,softNmsSigma:g}=Ob(r,e,t),d=yield n.image.nonMaxSuppressionWithScoreAsync(c,p,m,f,h,g);return[d.selectedIndices,d.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:c,scores:p,maxOutputSize:m,iouThreshold:f,scoreThreshold:h}=Ob(r,e,t),g=v("padToMaxOutputSize",r,e,t),d=yield n.image.nonMaxSuppressionPaddedAsync(c,p,m,f,h,g);return[d.selectedIndices,d.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:c,scores:p,maxOutputSize:m,iouThreshold:f,scoreThreshold:h}=Ob(r,e,t);return[yield n.image.nonMaxSuppressionAsync(c,p,m,f,h)]}case"Where":{let c=n.cast(v("condition",r,e,t),"bool"),p=[yield n.whereAsync(c)];return c.dispose(),p}case"ListDiff":return n.setdiff1dAsync(v("x",r,e,t),v("y",r,e,t));default:throw TypeError(`Node type ${r.op} is not implemented`)}});var XN=(r,e,t,o=Wt)=>{switch(r.op){case"LowerBound":{let n=v("sortedSequence",r,e,t),s=v("values",r,e,t);return[o.lowerBound(n,s)]}case"TopKV2":{let n=v("x",r,e,t),s=v("k",r,e,t),i=v("sorted",r,e,t),a=o.topk(n,s,i);return[a.values,a.indices]}case"UpperBound":{let n=v("sortedSequence",r,e,t),s=v("values",r,e,t);return[o.upperBound(n,s)]}case"Unique":{let n=v("x",r,e,t),s=o.unique(n);return[s.values,s.indices]}case"UniqueV2":{let n=v("x",r,e,t),s=v("axis",r,e,t),i=o.unique(n,s);return[i.values,i.indices]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var YN=(r,e,t,o=Wt)=>{switch(r.op){case"Const":return e[r.name];case"PlaceholderWithDefault":let n=v("default",r,e,t);return[ze(r.name,e,t)||n];case"Placeholder":return[ze(r.name,e,t)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let c=v("x",r,e,t);return[Yo(c)]}case"IdentityN":return v("x",r,e,t).map(c=>Yo(c));case"Snapshot":let s=v("x",r,e,t);return[Yo(s)];case"Shape":return[o.tensor1d(v("x",r,e,t).shape,"int32")];case"ShapeN":return v("x",r,e,t).map(c=>o.tensor1d(c.shape));case"Size":return[o.scalar(v("x",r,e,t).size,"int32")];case"Rank":return[o.scalar(v("x",r,e,t).rank,"int32")];case"NoOp":return[o.scalar(1)];case"Print":let i=v("x",r,e,t),a=v("data",r,e,t),l=v("message",r,e,t),u=v("summarize",r,e,t);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(l);for(let c=0;c<a.length;c++)console.log(Array.prototype.slice.call(a[c].dataSync()).slice(0,u));return[i];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var Kh=class{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=st(0),this.tensorMap=new Map,ce(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return st(this.size(),"int32")}import(e,t){return B(this,null,function*(){this.checkKeyAndValueTensor(e,t);let o=yield e.data();return this.tensorMap.forEach(n=>n.dispose()),this.tensorMap.clear(),M(()=>{let n=We(t),s=o.length,i=n.length;b.assert(s===i,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${i} elements.`);for(let a=0;a<s;a++){let l=o[a],u=n[a];ce(u),this.tensorMap.set(l,u)}return this.handle})})}find(e,t){return B(this,null,function*(){this.checkKeyAndValueTensor(e,t);let o=yield e.data();return M(()=>{let n=[];for(let s=0;s<o.length;s++){let i=o[s],a=this.findWithDefault(i,t);n.push(a)}return be(n)})})}findWithDefault(e,t){let o=this.tensorMap.get(e);return o??t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}};var ZN=(r,e,t,o)=>B(void 0,null,function*(){switch(r.op){case"HashTable":case"HashTableV2":{let n=o.getHashTableHandleByName(r.name);if(n!=null)return[n];{let s=v("keyDType",r,e,t),i=v("valueDType",r,e,t),a=new Kh(s,i);return o.addHashTable(r.name,a),[a.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{let n=v("tableHandle",r,e,t,o),s=v("keys",r,e,t),i=v("values",r,e,t);return[yield o.getHashTableById(n.id).import(s,i)]}case"LookupTableFind":case"LookupTableFindV2":{let n=v("tableHandle",r,e,t,o),s=v("keys",r,e,t),i=v("defaultValue",r,e,t);return[yield o.getHashTableById(n.id).find(s,i)]}case"LookupTableSize":case"LookupTableSizeV2":{let n=v("tableHandle",r,e,t,o);return[o.getHashTableById(n.id).tensorSize()]}default:throw TypeError(`Node type ${r.op} is not implemented`)}});var JN=(r,e,t,o=Wt)=>{switch(r.op){case"ResizeBilinear":{let n=v("images",r,e,t),s=v("size",r,e,t),i=v("alignCorners",r,e,t),a=v("halfPixelCenters",r,e,t);return[o.image.resizeBilinear(n,[s[0],s[1]],i,a)]}case"ResizeNearestNeighbor":{let n=v("images",r,e,t),s=v("size",r,e,t),i=v("alignCorners",r,e,t),a=v("halfPixelCenters",r,e,t);return[o.image.resizeNearestNeighbor(n,[s[0],s[1]],i,a)]}case"CropAndResize":{let n=v("image",r,e,t),s=v("boxes",r,e,t),i=v("boxInd",r,e,t),a=v("cropSize",r,e,t),l=v("method",r,e,t),u=v("extrapolationValue",r,e,t);return[o.image.cropAndResize(n,s,i,a,l,u)]}case"ImageProjectiveTransformV3":{let n=v("images",r,e,t),s=v("transforms",r,e,t),i=v("outputShape",r,e,t),a=v("fillValue",r,e,t),l=v("interpolation",r,e,t),u=v("fillMode",r,e,t);return[o.image.transform(n,s,l.toLowerCase(),u.toLowerCase(),a,i)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var QN=(r,e,t,o=Wt)=>{switch(r.op){case"Equal":return[o.equal(v("a",r,e,t),v("b",r,e,t))];case"NotEqual":return[o.notEqual(v("a",r,e,t),v("b",r,e,t))];case"Greater":return[o.greater(v("a",r,e,t),v("b",r,e,t))];case"GreaterEqual":return[o.greaterEqual(v("a",r,e,t),v("b",r,e,t))];case"Less":return[o.less(v("a",r,e,t),v("b",r,e,t))];case"LessEqual":return[o.lessEqual(v("a",r,e,t),v("b",r,e,t))];case"LogicalAnd":return[o.logicalAnd(v("a",r,e,t),v("b",r,e,t))];case"LogicalNot":return[o.logicalNot(v("a",r,e,t))];case"LogicalOr":return[o.logicalOr(v("a",r,e,t),v("b",r,e,t))];case"Select":case"SelectV2":return[o.where(v("condition",r,e,t),v("a",r,e,t),v("b",r,e,t))];case"BitwiseAnd":return[o.bitwiseAnd(v("a",r,e,t),v("b",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var tT=(r,e,t,o=Wt)=>{switch(r.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[o.matMul(v("a",r,e,t),v("b",r,e,t),v("transposeA",r,e,t),v("transposeB",r,e,t))];case"Einsum":return[o.einsum(v("equation",r,e,t),...v("tensors",r,e,t))];case"Transpose":return[o.transpose(v("x",r,e,t),v("perm",r,e,t))];case"_FusedMatMul":let[n,s]=v("fusedOps",r,e,t),i=n==="biasadd",a=s==="prelu",l=v("numArgs",r,e,t),u=v("leakyreluAlpha",r,e,t);if(i){if(a&&l!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&l!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[c,p]=v("args",r,e,t);return[o.fused.matMul({a:v("a",r,e,t),b:v("b",r,e,t),transposeA:v("transposeA",r,e,t),transposeB:v("transposeB",r,e,t),bias:c,activation:s,preluActivationWeights:p,leakyreluAlpha:u})];case"MatrixBandPart":return[o.linalg.bandPart(v("a",r,e,t),v("numLower",r,e,t),v("numUpper",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var eT=(r,e,t,o=Wt)=>{switch(r.op){case"EuclideanNorm":return[o.euclideanNorm(v("x",r,e,t),v("axis",r,e,t),v("keepDims",r,e,t))];case"FusedBatchNorm":case"FusedBatchNormV2":return[o.batchNorm(v("x",r,e,t),v("mean",r,e,t),v("variance",r,e,t),v("offset",r,e,t),v("scale",r,e,t),v("epsilon",r,e,t))];case"FusedBatchNormV3":return[o.batchNorm(v("x",r,e,t),v("mean",r,e,t),v("variance",r,e,t),v("offset",r,e,t),v("scale",r,e,t),v("epsilon",r,e,t))];case"LRN":return[o.localResponseNormalization(v("x",r,e,t),v("radius",r,e,t),v("bias",r,e,t),v("alpha",r,e,t),v("beta",r,e,t))];case"Softmax":return[o.softmax(v("x",r,e,t))];case"LogSoftmax":return[o.logSoftmax(v("x",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var rT=(r,e,t,o=Wt)=>{switch(r.op){case"RaggedGather":{let{outputNestedSplits:n,outputDenseValues:s}=o.raggedGather(v("paramsNestedSplits",r,e,t),v("paramsDenseValues",r,e,t),v("indices",r,e,t),v("outputRaggedRank",r,e,t));return n.concat(s)}case"RaggedRange":{let{rtNestedSplits:n,rtDenseValues:s}=o.raggedRange(v("starts",r,e,t),v("limits",r,e,t),v("splits",r,e,t));return[n,s]}case"RaggedTensorToTensor":return[o.raggedTensorToTensor(v("shape",r,e,t),v("values",r,e,t),v("defaultValue",r,e,t),v("rowPartitionTensors",r,e,t),v("rowPartitionTypes",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var oT=(r,e,t,o=Wt)=>{switch(r.op){case"Max":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.max(v("x",r,e,t),a,l)]}case"Mean":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.mean(v("x",r,e,t),a,l)]}case"Min":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.min(v("x",r,e,t),a,l)]}case"Sum":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.sum(v("x",r,e,t),a,l)]}case"All":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.all(v("x",r,e,t),a,l)]}case"Any":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.any(v("x",r,e,t),a,l)]}case"ArgMax":{let a=v("axis",r,e,t);return[o.argMax(v("x",r,e,t),a)]}case"ArgMin":{let a=v("axis",r,e,t);return[o.argMin(v("x",r,e,t),a)]}case"Prod":{let a=v("axis",r,e,t),l=v("keepDims",r,e,t);return[o.prod(v("x",r,e,t),a,l)]}case"Cumprod":{let a=v("axis",r,e,t),l=v("exclusive",r,e,t),u=v("reverse",r,e,t);return[o.cumprod(v("x",r,e,t),a,l,u)]}case"Cumsum":{let a=v("axis",r,e,t),l=v("exclusive",r,e,t),u=v("reverse",r,e,t);return[o.cumsum(v("x",r,e,t),a,l,u)]}case"Bincount":let n=v("x",r,e,t),s=v("weights",r,e,t),i=v("size",r,e,t);return[o.bincount(n,s,i)];case"DenseBincount":{let a=v("x",r,e,t),l=v("weights",r,e,t),u=v("size",r,e,t),c=v("binaryOutput",r,e,t);return[o.denseBincount(a,l,u,c)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var nT=(r,e,t,o=Wt)=>{switch(r.op){case"ConcatV2":case"Concat":{let n=v("n",r,e,t),s=v("axis",r,e,t),i=v("tensors",r,e,t);return i=i.slice(0,n),[o.concat(i,s)]}case"Gather":{let n=v("x",r,e,t),s=v("indices",r,e,t);return[o.gather(n,o.cast(s,"int32"),0)]}case"GatherV2":{let n=v("axis",r,e,t),s=v("batchDims",r,e,t),i=v("x",r,e,t),a=v("indices",r,e,t);return[o.gather(i,o.cast(a,"int32"),n,s)]}case"Reverse":{let n=v("dims",r,e,t),s=[];for(let a=0;a<n.length;a++)n[a]&&s.push(a);let i=v("x",r,e,t);return[o.reverse(i,s)]}case"ReverseV2":{let n=v("axis",r,e,t),s=v("x",r,e,t);return[o.reverse(s,n)]}case"Slice":{let n=v("begin",r,e,t),s=v("size",r,e,t);return[o.slice(v("x",r,e,t),n,s)]}case"StridedSlice":{let n=v("begin",r,e,t),s=v("end",r,e,t),i=v("strides",r,e,t),a=v("beginMask",r,e,t),l=v("endMask",r,e,t),u=v("ellipsisMask",r,e,t),c=v("newAxisMask",r,e,t),p=v("shrinkAxisMask",r,e,t),m=v("x",r,e,t);return[o.stridedSlice(m,n,s,i,a,l,u,c,p)]}case"Pack":return M(()=>{let n=v("axis",r,e,t),s=v("tensors",r,e,t),i=s[0].shape,a=o.squeeze(s[0]).shape,l=s.map(u=>{let c=b.arraysEqual(u.shape,i);if(!c&&!b.arraysEqual(o.squeeze(u).shape,a))throw new Error("the input tensors shape does not match");return c?u:o.reshape(u,i)});return[o.stack(l,n)]});case"Unpack":{let n=v("axis",r,e,t),s=v("tensor",r,e,t);return o.unstack(s,n)}case"Tile":{let n=v("reps",r,e,t);return[o.tile(v("x",r,e,t),n)]}case"Split":case"SplitV":{let n=v("axis",r,e,t),s=v("numOrSizeSplits",r,e,t),i=v("x",r,e,t);return o.split(i,s,n)}case"ScatterNd":{let n=v("indices",r,e,t),s=v("values",r,e,t),i=v("shape",r,e,t);return[o.scatterND(n,s,i)]}case"GatherNd":{let n=v("x",r,e,t),s=v("indices",r,e,t);return[o.gatherND(n,s)]}case"SparseToDense":{let n=v("sparseIndices",r,e,t),s=v("outputShape",r,e,t),i=v("sparseValues",r,e,t),a=v("defaultValue",r,e,t);return[o.sparseToDense(n,i,s,i.dtype===a.dtype?a:o.cast(a,i.dtype))]}case"TensorScatterUpdate":{let n=v("indices",r,e,t),s=v("values",r,e,t),i=v("tensor",r,e,t);return[o.tensorScatterUpdate(i,n,s)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var sT=(r,e,t,o=Wt)=>{switch(r.op){case"SparseFillEmptyRows":{let{outputIndices:n,outputValues:s,emptyRowIndicator:i,reverseIndexMap:a}=o.sparse.sparseFillEmptyRows(v("indices",r,e,t),v("values",r,e,t),v("denseShape",r,e,t),v("defaultValue",r,e,t));return[n,s,i,a]}case"SparseReshape":{let{outputIndices:n,outputShape:s}=o.sparse.sparseReshape(v("inputIndices",r,e,t),v("inputShape",r,e,t),v("newShape",r,e,t));return[n,s]}case"SparseSegmentMean":return[o.sparse.sparseSegmentMean(v("data",r,e,t),v("indices",r,e,t),v("segmentIds",r,e,t))];case"SparseSegmentSum":return[o.sparse.sparseSegmentSum(v("data",r,e,t),v("indices",r,e,t),v("segmentIds",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var iT=(r,e,t,o=Wt)=>{switch(r.op){case"FFT":return[o.fft(v("x",r,e,t))];case"IFFT":return[o.ifft(v("x",r,e,t))];case"RFFT":return[o.rfft(v("x",r,e,t))];case"IRFFT":return[o.irfft(v("x",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var aT=(r,e,t,o=Wt)=>{switch(r.op){case"StaticRegexReplace":return[o.string.staticRegexReplace(v("input",r,e,t),v("pattern",r,e,t),v("rewrite",r,e,t),v("replaceGlobal",r,e,t))];case"StringNGrams":{let{nGrams:n,nGramsSplits:s}=o.string.stringNGrams(v("data",r,e,t),v("dataSplits",r,e,t),v("separator",r,e,t),v("nGramWidths",r,e,t),v("leftPad",r,e,t),v("rightPad",r,e,t),v("padWidth",r,e,t),v("preserveShortSequences",r,e,t));return[n,s]}case"StringSplit":{let{indices:n,values:s,shape:i}=o.string.stringSplit(v("input",r,e,t),v("delimiter",r,e,t),v("skipEmpty",r,e,t));return[n,s,i]}case"StringToHashBucketFast":return[o.string.stringToHashBucketFast(v("input",r,e,t),v("numBuckets",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var lT=(r,e,t,o=Wt)=>{switch(r.op){case"Cast":return[o.cast(v("x",r,e,t),v("dtype",r,e,t))];case"ExpandDims":{let n=v("axis",r,e,t);return[o.expandDims(v("x",r,e,t),n)]}case"Squeeze":{let n=v("axis",r,e,t);return[o.squeeze(v("x",r,e,t),n)]}case"Reshape":return[o.reshape(v("x",r,e,t),v("shape",r,e,t))];case"EnsureShape":return[o.ensureShape(v("x",r,e,t),v("shape",r,e,t))];case"MirrorPad":return[o.mirrorPad(v("x",r,e,t),v("padding",r,e,t),v("mode",r,e,t))];case"PadV2":case"Pad":return[o.pad(v("x",r,e,t),v("padding",r,e,t),v("constantValue",r,e,t))];case"SpaceToBatchND":{let n=v("blockShape",r,e,t),s=v("paddings",r,e,t);return[o.spaceToBatchND(v("x",r,e,t),n,s)]}case"BatchToSpaceND":{let n=v("blockShape",r,e,t),s=v("crops",r,e,t);return[o.batchToSpaceND(v("x",r,e,t),n,s)]}case"DepthToSpace":{let n=v("blockSize",r,e,t),s=v("dataFormat",r,e,t).toUpperCase();return[o.depthToSpace(v("x",r,e,t),n,s)]}case"BroadcastTo":return[o.broadcastTo(v("x",r,e,t),v("shape",r,e,t))];case"BroadcastArgs":return[o.broadcastArgs(v("s0",r,e,t),v("s1",r,e,t))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function Lb(r,e,t,o,n=M){let s=((i,a,l)=>{switch(i.category){case"arithmetic":return n(()=>PN(i,a,l));case"basic_math":return n(()=>zN(i,a,l));case"control":return UN(i,a,l);case"convolution":return n(()=>KN(i,a,l));case"creation":return n(()=>qN(i,a,l));case"dynamic":return jN(i,a,l);case"evaluation":return n(()=>XN(i,a,l));case"image":return n(()=>JN(i,a,l));case"graph":return n(()=>YN(i,a,l));case"logical":return n(()=>QN(i,a,l));case"matrices":return n(()=>tT(i,a,l));case"normalization":return n(()=>eT(i,a,l));case"ragged":return n(()=>rT(i,a,l));case"reduction":return n(()=>oT(i,a,l));case"slice_join":return n(()=>nT(i,a,l));case"sparse":return n(()=>sT(i,a,l));case"spectral":return n(()=>iT(i,a,l));case"string":return n(()=>aT(i,a,l));case"transformation":return n(()=>lT(i,a,l));case"hash_table":return ZN(i,a,l,o);case"custom":let u=Dh(i.op);if(u&&u.customExecutor)return u.customExecutor(new Wh(i,a,l));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(r,e,t);return b.isPromise(s)?s.then(i=>[].concat(i)):[].concat(s)}var im=class{constructor(e={},t={},o={},n={},s){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=o,this.functionMap=n,this.parseNodeNameCache=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let e=[];for(let t=0;t<this.contexts.length-1;t++){let o=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(o))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(t=>t.id===0&&t.iterationId===0?"":`${t.frameName}-${t.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(let t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(let t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}};function Pb(r,e,t,o){let n=new Set,s=[],i=null,a=null,l=new Set,u=new Set(Object.keys(r).map(m=>$r(m)[0]));o=o||[];let c=new Set(o.map(m=>$r(m.name)[0])),p=[...e];for(;p.length>0;){let m=p.pop();if((ga(m)||hU(m)||dU(m))&&i==null&&(i=m,a=i.children.map(f=>f.name).filter(f=>n.has(f))),n.add(m.name),t[m.name]==null&&!u.has(m.name)&&!c.has(m.name)){if(m.inputs.length===0){s.push(m.name);continue}m.inputs.forEach(f=>{l.has(f.name)||(l.add(f.name),p.push(f))})}}return{inputs:r,outputs:e,usedNodes:n,missingInputs:s,dynamicNode:i,syncInputs:a}}function uT(r,e){let{usedNodes:t,inputs:o}=e,n=Object.keys(o).map(d=>$r(d)[0]).map(d=>r.nodes[d]),s=r.initNodes||[],i=d=>t.has(typeof d=="string"?d:d.name);function a(d){return[...new Map(d.map(x=>[x.name,x])).values()]}let l=a([...n,...r.weights,...s]).filter(i),u=a([...l,...Object.values(r.nodes)]).filter(i),c=new Map(u.map(d=>[d.name,d])),p={};for(let d of u){p[d.name]=p[d.name]||0;for(let x of d.children)i(x)||(p[x.name]=Number.POSITIVE_INFINITY),p[x.name]=(p[x.name]||0)+1}let m=Object.entries(p).filter(([,d])=>d===0).map(([d])=>d),f=[...m];for(;m.length>0;){let d=m.pop(),x=c.get(d);for(let y of x.children.filter(i))--p[y.name]===0&&(f.push(y.name),m.push(y.name))}let h=f.map(d=>c.get(d)),g=uU(h,l);return cU(g,l),g}function uU(r,e){let t=new Map(r.map(i=>[i.name,i])),o=e.map(i=>i.name),n=new Set(o);for(;o.length>0;){let i=o.pop(),a=t.get(i);for(let l of a.children)!t.has(l.name)||n.has(l.name)||(n.add(l.name),o.push(l.name))}return r.filter(i=>n.has(i.name))}var Hc=class extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}};function cU(r,e){let t=new Map(r.map((a,l)=>[a.name,l])),o=new Set(e.map(a=>a.name)),n=a=>o.has(typeof a=="string"?a:a.name),s=new Set(r.map(a=>a.name)),i=a=>s.has(typeof a=="string"?a:a.name);for(let a of r){for(let l of a.children.filter(i)){if(!t.has(l.name))throw new Hc(`Child ${l.name} of node ${a.name} is unreachable.`);if(t.get(a.name)>t.get(l.name))throw new Hc(`Node ${a.name} is scheduled to run after its child ${l.name}.`)}if(!n(a))for(let l of a.inputs){if(!t.has(l.name))throw new Hc(`Input ${l.name} of node ${a.name} is unreachable.`);if(t.get(l.name)>t.get(a.name))throw new Hc(`Node ${a.name} is scheduled to run before its input ${l.name}.`)}}}function cT(r){let e=new Map(r.map((a,l)=>[a.name,l])),t=Number.MAX_SAFE_INTEGER,o=r.map((a,l)=>ga(a)?t:l),n=a=>{let l=o[e.get(a.name)];return l??-1},s=r.map((a,l)=>a.children.map(n).reduce((u,c)=>Math.max(u,c),o[l])),i=new Map;for(let a=0;a<r.length;++a){let l=s[a];if(l===t)continue;let u=r[a],c=r[l];i.has(c.name)||i.set(c.name,[]),i.get(c.name).push(u)}return i}var pU=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),mU=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),fU=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function ga(r){return pU.has(r.op)}function hU(r){return mU.has(r.op)}function dU(r){return fU.has(r.op)}var am=class r{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){let t=Object.keys(e).map(o=>e[o].map(n=>n.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{let t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,e.functions!=null&&Object.keys(e.functions).forEach(o=>{this._functionExecutorMap[o]=new r(e.functions[o],this)})}getCompilationKey(e,t){let o=e.map(s=>s.name).sort(),n=t.map(s=>s.name).sort();return o.join(this.SEPARATOR)+"--"+n.join(this.SEPARATOR)}compile(e,t){let o=Pb(e,t,this.weightMap,this._initNodes),{missingInputs:n,dynamicNode:s,syncInputs:i}=o;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(n.length>0){let u=t.map(p=>p.name),c=Object.keys(e);throw new Error(`Cannot compute the outputs [${u}] from the provided inputs [${c}]. Missing the following inputs: [${n}]`)}let a=uT(this.graph,o),l=cT(a);return{orderedNodes:a,nodeLiveUntilMap:l}}cloneAndKeepTensor(e){if(e==null)return null;let t=e.clone();return ce(t),t}cloneTensorList(e){return e?e.map(o=>this.cloneAndKeepTensor(o)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([t,o])=>[t,this.cloneTensorList(o)]))}execute(e,t){this.disposeIntermediateTensors(),e=this.mapInputs(e);let o=Object.keys(e).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);let n=o.map(m=>this.graph.nodes[$r(m)[0]]),s=t.map(m=>$r(m)[0]),i=new Set(s),a=s.map(m=>this.graph.nodes[m]);a.length===0&&(a=this._outputs);let l=this.getCompilationKey(n,a),u=this.compiledMap.get(l);u==null&&(u=this.compile(e,a),this.compiledMap.set(l,u));try{this.keepIntermediateTensors=L().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(m){this.keepIntermediateTensors=!1,console.warn(m.message)}let c={},p={};return M(()=>{let m=new im(this.weightMap,c,p,this.functionExecutorMap,this.parseNodeNameCache),f=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(x=>{let[y,w]=$r(x,m),C=[];C[w]=e[x],f[y]=C,this.keepIntermediateTensors&&(this.clonedTensorsMap[y]=this.cloneTensorList(C))});let h=this.getFrozenTensorIds(f),{orderedNodes:g,nodeLiveUntilMap:d}=u;for(let x of g){if(f[x.name])continue;let y=Lb(x,f,m,this._resourceManager);if(b.isPromise(y))throw new Error(`The execution of the op '${x.op}' returned a promise. Please use model.executeAsync() instead.`);f[x.name]=y,this.keepIntermediateTensors&&(this.clonedTensorsMap[x.name]=this.cloneTensorList(y)),this.checkTensorForDisposalWithNodeLiveUntilInfo(x,f,m,h,i,d.get(x.name))}return this.parent==null&&m.dispose(h),t.map(x=>ze(x,f,m))})}getFrozenTensorIds(e){let t=[].concat.apply([],Object.keys(e).map(o=>e[o]).map(o=>o.map(n=>n.id)));return new Set(t)}checkTensorForDisposal(e,t,o,n,s,i,a){if(!(ga(t)||i.has(e))){for(let l of o[e])l!=null&&(a[l.id]=(a[l.id]||0)+t.children.length);for(let l of t.inputs){if(ga(l))continue;let u=hb(l.name,o,n);if(u!=null)for(let c of u){if(!c||c.kept||s.has(c.id))continue;let p=a[c.id];p===1?(c.dispose(),delete a[c.id]):p!=null&&a[c.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,o,n,s,i){function a(l){return ga(l)||s.has(l.name)}if(!(ga(e)||i==null))for(let l of i){if(a(l))continue;let u=hb(l.name,t,o);for(let c of u)!c||c.kept||n.has(c.id)||c.dispose()}}executeAsync(e,t){return B(this,null,function*(){return this._executeAsync(e,t)})}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(let t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}_executeAsync(i,a){return B(this,arguments,function*(e,t,o=!1,n={},s={}){this.disposeIntermediateTensors(),o||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=L().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(h){this.keepIntermediateTensors=!1,console.warn(h.message)}let l=new im(this.weightMap,n,s,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));let u=yield this.executeWithControlFlow(e,l,t,o),c=t.map(h=>ze(h,u,l)),p=c.map(h=>h.id),m=Object.keys(e).map(h=>e[h].id),f=new Set([...p,...m,...this.weightIds]);return Object.values(u).forEach(h=>{h.forEach(g=>{g&&!g.isDisposed&&!f.has(g.id)&&g.dispose()})}),this.parent==null&&l.dispose(f),c})}executeFunctionAsync(e,t,o){return B(this,null,function*(){let n=e.reduce((s,i,a)=>(s[this.inputs[a].name]=i,s),{});return this._executeAsync(n,this.outputNodes,!0,t,o)})}executeWithControlFlow(e,t,o,n){return B(this,null,function*(){let s=Object.keys(e),i=s.map(C=>this.graph.nodes[$r(C)[0]]),a=o.map(C=>$r(C)[0]),l=new Set(a),u=a.map(C=>this.graph.nodes[C]);u.length===0&&(u=this._outputs);let{usedNodes:c,missingInputs:p,dynamicNode:m,syncInputs:f}=Pb(e,u,this.weightMap,this._initNodes),h=[...i,...this.graph.weights,...this._initNodes||[]].map(C=>({node:C,contexts:t.currentContext})),g=Object.assign({},this.weightMap);Object.keys(e).forEach(C=>{let[T,A]=$r(C),$=[];$[A]=e[C],g[T]=$});let d={},x=this.getFrozenTensorIds(g),y={};for(;h.length>0;){let C=this.processStack(i,h,t,g,y,x,l,d,c);yield Promise.all(C)}m==null&&!n&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let w=u.filter(C=>!ga(C)&&!ze(C.name,g,t)).map(C=>C.name);if(w.length>0){let C="";throw m!=null&&(C=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${f}]`),new Error(`Cannot compute the outputs [${w}] from the provided inputs [${s}]. Consider providing the following inputs: [${p}]. ${C}`)}return g})}processStack(e,t,o,n,s,i,a,l,u){let c=[];for(;t.length>0;){let p=t.pop();o.currentContext=p.contexts;let m="";if(p.node.op==="Enter"&&v("isConstant",p.node,n,o)&&([m]=Xo(p.node.name,o)),n[p.node.name]==null){let f=Lb(p.node,n,o,this._resourceManager);m||([m]=Xo(p.node.name,o));let h=o.currentContext;b.isPromise(f)?c.push(f.then(g=>(n[m]=g,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(g)),o.currentContext=h,this.checkTensorForDisposal(m,p.node,n,o,i,a,l),this.processChildNodes(p.node,t,o,n,s,u),g))):(n[m]=f,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(f)),this.checkTensorForDisposal(m,p.node,n,o,i,a,l),this.processChildNodes(p.node,t,o,n,s,u))}else this.processChildNodes(p.node,t,o,n,s,u)}return c}processChildNodes(e,t,o,n,s,i){e.children.forEach(a=>{let[l]=Xo(a.name,o);s[l]||!i.has(a.name)||(a.op==="Merge"?a.inputNames.some(u=>!!ze(u,n,o))&&(s[l]=!0,t.push({contexts:o.currentContext,node:a})):a.inputNames.every(u=>!!ze(u,n,o))&&(s[l]=!0,t.push({contexts:o.currentContext,node:a})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(t=>t.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{let o=e[t],[n]=$r(t),s=this.graph.nodes[n];if(s.attrParams.shape&&s.attrParams.shape.value){let i=s.attrParams.shape.value,a=i.length===o.shape.length&&o.shape.every((l,u)=>i[u]===-1||i[u]===l);b.assert(a,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${i}], but was [${o.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&b.assert(o.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${o.dtype}`)})}mapInputs(e){var t,o;let n={};for(let s in e){let i=(o=(t=this._signature)===null||t===void 0?void 0:t.inputs)===null||o===void 0?void 0:o[s];i!=null?n[i.name]=e[s]:n[s]=e[s]}return n}checkInputs(e){let t=Object.keys(e).filter(o=>{let[n]=$r(o);return this.graph.nodes[n]==null});if(t.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(t=>{var o,n;let s=(n=(o=this._signature)===null||o===void 0?void 0:o.outputs)===null||n===void 0?void 0:n[t];return s!=null?s.name:t},{})}checkOutputs(e){e.forEach(t=>{let[o]=$r(t);if(!this.graph.nodes[o])throw new Error(`The output '${t}' is not found in the graph`)})}};var qh=class{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(let e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(let e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}};var gU="?tfjs-format=file",xU="model.json",jh=class{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},o=jo){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=o,t==null&&(this.loadOptions={}),this.resourceManager=new qh}findIOHandler(){let e=this.modelUrl;if(e.load!=null)this.handler=e;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{let t=this.io.getLoadHandlers(e,this.loadOptions);if(t.length===0)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw new Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let e=this.handler.load();return b.isPromise(e)?e.then(t=>t.getWeightStream==null?this.loadSync(t):this.loadStreaming(t)):this.loadSync(e)}loadSync(e){let t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}loadStreaming(e){return B(this,null,function*(){if(e.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");let t=yield mf(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)})}loadWithWeightMap(e,t){this.artifacts=e;let o=this.artifacts.modelTopology,n=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){let s=this.artifacts.userDefinedMetadata;s.signature!=null&&(n=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}if(this.signature=n,this.version=`${o.versions.producer}.${o.versions.minConsumer}`,this.executor=new am(sm.Instance.transformGraph(o,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,e.modelInitializer!=null&&e.modelInitializer.node!=null){let s=sm.Instance.transformGraph(e.modelInitializer);this.initializer=new am(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}save(e,t){return B(this,null,function*(){if(typeof e=="string"){let o=this.io.getSaveHandlers(e);if(o.length===0)throw new Error(`Cannot find any save handlers for URL '${e}'`);if(o.length>1)throw new Error(`Found more than one (${o.length}) save handlers for URL '${e}'`);e=o[0]}if(e.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)})}addStructuredOutputNames(e){if(this.structuredOutputKeys){let t=e instanceof Ft?[e]:e,o={};return t.forEach((n,s)=>o[this.structuredOutputKeys[s]]=n),o}return e}predict(e,t){let o=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(o)}predictAsync(e,t){return B(this,null,function*(){let o=yield this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(o)})}normalizeInputs(e){var t;if(!(e instanceof Ft)&&!Array.isArray(e)){let s=(t=this.signature)===null||t===void 0?void 0:t.inputs;if(s!=null)for(let i in s){let a=s[i];a.resourceId!=null&&(e[i]=this.resourceIdToCapturedInput[a.resourceId])}return e}e=Array.isArray(e)?e:[e];let o=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+o!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-o} non-resource placeholders, while there are ${e.length} input tensors provided.`);let n=0;return this.inputNodes.reduce((s,i)=>{var a,l,u;let c=(u=(l=(a=this.signature)===null||a===void 0?void 0:a.inputs)===null||l===void 0?void 0:l[i])===null||u===void 0?void 0:u.resourceId;return c!=null?s[i]=this.resourceIdToCapturedInput[c]:s[i]=e[n++],s},{})}normalizeOutputs(e){return e=e||this.outputNodes,Array.isArray(e)?e:[e]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}executeInitializerGraphAsync(){return B(this,null,function*(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))})}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){let t=this.initializerSignature.outputs,o=Object.keys(t);for(let n=0;n<o.length;n++){let s=o[n],i=t[s];this.resourceIdToCapturedInput[i.resourceId]=e[n]}}}execute(e,t){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let o=this.executor.execute(e,t);return o.length>1?o:o[0]}executeAsync(e,t){return B(this,null,function*(){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(yield this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let o=yield this.executor.executeAsync(e,t);return o.length>1?o:o[0]})}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,o)=>(t[o]=[e[o]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Nt(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}};function Xh(o){return B(this,arguments,function*(r,e={},t=jo){if(r==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");e==null&&(e={}),e.fromTFHub&&typeof r=="string"&&(r=yU(r));let n=new jh(r,e,t);return yield n.load(),n})}function yU(r){return r.endsWith("/")||(r=r+"/"),`${r}${xU}${gU}`}function xa(r,e,t,o){return new(t||(t=Promise))(function(n,s){function i(u){try{l(o.next(u))}catch(c){s(c)}}function a(u){try{l(o.throw(u))}catch(c){s(c)}}function l(u){var c;u.done?n(u.value):(c=u.value,c instanceof t?c:new t(function(p){p(c)})).then(i,a)}l((o=o.apply(r,e||[])).next())})}function ya(r,e){var t,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(u){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(i=0)),i;)try{if(t=1,o&&(n=2&c[0]?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(n=i.trys,!((n=n.length>0&&n[n.length-1])||c[0]!==6&&c[0]!==2)){i=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){i.label=c[1];break}if(c[0]===6&&i.label<n[1]){i.label=n[1],n=c;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(c);break}n[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(r,i)}catch(p){c=[6,p],o=0}finally{t=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([l,u])}}}function Kc(r,e,t){if(t||arguments.length===2)for(var o,n=0,s=e.length;n<s;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return r.concat(o||Array.prototype.slice.call(e))}function Mb(r){return[Math.abs(r.endPoint[0]-r.startPoint[0]),Math.abs(r.endPoint[1]-r.startPoint[1])]}function Yh(r){return[r.startPoint[0]+(r.endPoint[0]-r.startPoint[0])/2,r.startPoint[1]+(r.endPoint[1]-r.startPoint[1])/2]}function pT(r,e){e===void 0&&(e=1.5);var t=Yh(r),o=Mb(r),n=[e*o[0]/2,e*o[1]/2];return{startPoint:[t[0]-n[0],t[1]-n[1]],endPoint:[t[0]+n[0],t[1]+n[1]],palmLandmarks:r.palmLandmarks}}function mT(r){var e=Yh(r),t=Mb(r),o=Math.max.apply(Math,t)/2;return{startPoint:[e[0]-o,e[1]-o],endPoint:[e[0]+o,e[1]+o],palmLandmarks:r.palmLandmarks}}function fT(r,e){var t=[r.endPoint[0]-r.startPoint[0],r.endPoint[1]-r.startPoint[1]],o=[t[0]*e[0],t[1]*e[1]];return{startPoint:[r.startPoint[0]+o[0],r.startPoint[1]+o[1]],endPoint:[r.endPoint[0]+o[0],r.endPoint[1]+o[1]],palmLandmarks:r.palmLandmarks}}var wU=function(){function r(e,t,o,n,s,i){this.model=e,this.width=t,this.height=o,this.iouThreshold=s,this.scoreThreshold=i,this.anchors=n.map(function(a){return[a.x_center,a.y_center]}),this.anchorsTensor=qo(this.anchors),this.inputSizeTensor=le([t,o]),this.doubleInputSizeTensor=le([2*t,2*o])}return r.prototype.normalizeBoxes=function(e){var t=this;return M(function(){var o=bt(e,[0,0],[-1,2]),n=bt(e,[0,2],[-1,2]),s=U(rt(o,t.inputSizeTensor),t.anchorsTensor),i=rt(n,t.doubleInputSizeTensor),a=D(et(s,i),t.inputSizeTensor),l=D(U(s,i),t.inputSizeTensor);return hc([a,l],1)})},r.prototype.normalizeLandmarks=function(e,t){var o=this;return M(function(){var n=U(rt(R(e,[-1,7,2]),o.inputSizeTensor),o.anchors[t]);return D(n,o.inputSizeTensor)})},r.prototype.getBoundingBoxes=function(e){return xa(this,void 0,void 0,function(){var t,o,n,s,i,a,l,u,c,p,m,f,h,g,d,x=this;return ya(this,function(y){switch(y.label){case 0:return t=M(function(){return D(et(e,.5),2)}),Up()==="webgl"?(n=L().get("WEBGL_PACK_DEPTHWISECONV"),L().set("WEBGL_PACK_DEPTHWISECONV",!0),o=this.model.predict(t),L().set("WEBGL_PACK_DEPTHWISECONV",n)):o=this.model.predict(t),s=Cr(o),i=M(function(){return Cr(sr(bt(s,[0,0],[-1,1])))}),a=bt(s,[0,1],[-1,4]),l=this.normalizeBoxes(a),u=console.warn,console.warn=function(){},c=Je.nonMaxSuppression(l,i,1,this.iouThreshold,this.scoreThreshold),console.warn=u,[4,c.array()];case 1:return p=y.sent(),m=[t,o,c,s,l,a,i],p.length===0?(m.forEach(function(w){return w.dispose()}),[2,null]):(f=p[0],h=bt(l,[f,0],[1,-1]),g=bt(s,[f,5],[1,14]),d=M(function(){return R(x.normalizeLandmarks(g,f),[-1,2])}),m.push(g),m.forEach(function(w){return w.dispose()}),[2,{boxes:h,palmLandmarks:d}])}})})},r.prototype.estimateHandBounds=function(e){return xa(this,void 0,void 0,function(){var t,o,n,s,i,a,l,u,c=this;return ya(this,function(p){switch(p.label){case 0:return t=e.shape[1],o=e.shape[2],n=M(function(){return rt(Je.resizeBilinear(e,[c.width,c.height]),255)}),[4,this.getBoundingBoxes(n)];case 1:return(s=p.sent())===null?(n.dispose(),[2,null]):(i=s.boxes.arraySync(),a=i[0].slice(0,2),l=i[0].slice(2,4),u=s.palmLandmarks.arraySync(),n.dispose(),s.boxes.dispose(),s.palmLandmarks.dispose(),[2,(m={startPoint:a,endPoint:l,palmLandmarks:u},f=[o/this.width,t/this.height],{startPoint:[m.startPoint[0]*f[0],m.startPoint[1]*f[1]],endPoint:[m.endPoint[0]*f[0],m.endPoint[1]*f[1]],palmLandmarks:m.palmLandmarks.map(function(h){return[h[0]*f[0],h[1]*f[1]]})})])}var m,f})})},r}(),zb={thumb:[1,2,3,4],indexFinger:[5,6,7,8],middleFinger:[9,10,11,12],ringFinger:[13,14,15,16],pinky:[17,18,19,20],palmBase:[0]};function CU(r,e){var t,o=Math.PI/2-Math.atan2(-(e[1]-r[1]),e[0]-r[0]);return(t=o)-2*Math.PI*Math.floor((t+Math.PI)/(2*Math.PI))}var hT=function(r,e){return[[1,0,r],[0,1,e],[0,0,1]]};function Sl(r,e){for(var t=0,o=0;o<r.length;o++)t+=r[o]*e[o];return t}function vU(r,e){for(var t=[],o=0;o<r.length;o++)t.push(r[o][e]);return t}function dT(r,e){for(var t=[],o=r.length,n=0;n<o;n++){t.push([]);for(var s=0;s<o;s++)t[n].push(Sl(r[n],vU(e,s)))}return t}function gT(r,e){var t=Math.cos(r),o=Math.sin(r),n=[[t,-o,0],[o,t,0],[0,0,1]],s=dT(hT(e[0],e[1]),n);return dT(s,hT(-e[0],-e[1]))}function xT(r,e){return[Sl(r,e[0]),Sl(r,e[1])]}var SU=[0,-.4],NU=[0,-.1],yT=[0,5,9,13,17,1,2],TU=function(){function r(e,t,o,n,s,i){this.boundingBoxDetector=e,this.meshDetector=t,this.meshWidth=o,this.meshHeight=n,this.maxContinuousChecks=s,this.detectionConfidence=i,this.regionsOfInterest=[],this.runsWithoutHandDetector=0,this.maxHandsNumber=1}return r.prototype.getBoxForPalmLandmarks=function(e,t){var o=e.map(function(n){return xT(Kc(Kc([],n,!0),[1],!1),t)});return pT(mT(fT(this.calculateLandmarksBoundingBox(o),SU)),3)},r.prototype.getBoxForHandLandmarks=function(e){for(var t=pT(mT(fT(this.calculateLandmarksBoundingBox(e),NU)),1.65),o=[],n=0;n<yT.length;n++)o.push(e[yT[n]].slice(0,2));return t.palmLandmarks=o,t},r.prototype.transformRawCoords=function(e,t,o,n){var s,i,a,l,u=this,c=Mb(t),p=[c[0]/this.meshWidth,c[1]/this.meshHeight],m=e.map(function(y){return[p[0]*(y[0]-u.meshWidth/2),p[1]*(y[1]-u.meshHeight/2),y[2]]}),f=gT(o,[0,0]),h=m.map(function(y){return Kc(Kc([],xT(y,f),!0),[y[2]],!1)}),g=(i=[[(s=n)[0][0],s[1][0]],[s[0][1],s[1][1]]],a=[s[0][2],s[1][2]],l=[-Sl(i[0],a),-Sl(i[1],a)],[i[0].concat(l[0]),i[1].concat(l[1]),[0,0,1]]),d=Kc(Kc([],Yh(t),!0),[1],!1),x=[Sl(d,g[0]),Sl(d,g[1])];return h.map(function(y){return[y[0]+x[0],y[1]+x[1],y[2]]})},r.prototype.estimateHand=function(e){return xa(this,void 0,void 0,function(){var t,o,n,s,i,a,l,u,c,p,m,f,h,g,d,x,y,w,C,T;return ya(this,function(A){switch(A.label){case 0:return(t=this.shouldUpdateRegionsOfInterest())!==!0?[3,2]:[4,this.boundingBoxDetector.estimateHandBounds(e)];case 1:return(o=A.sent())===null?(e.dispose(),this.regionsOfInterest=[],[2,null]):(this.updateRegionsOfInterest(o,!0),this.runsWithoutHandDetector=0,[3,3]);case 2:this.runsWithoutHandDetector++,A.label=3;case 3:return n=this.regionsOfInterest[0],s=CU(n.palmLandmarks[0],n.palmLandmarks[2]),i=Yh(n),a=[i[0]/e.shape[2],i[1]/e.shape[1]],l=Je.rotateWithOffset(e,s,0,a),u=gT(-s,i),c=t===!0?this.getBoxForPalmLandmarks(n.palmLandmarks,u):n,p=function($,_,O){var z=_.shape[1],V=_.shape[2],G=[[$.startPoint[1]/z,$.startPoint[0]/V,$.endPoint[1]/z,$.endPoint[0]/V]];return Je.cropAndResize(_,G,[0],O)}(c,l,[this.meshWidth,this.meshHeight]),m=rt(p,255),p.dispose(),l.dispose(),Up()==="webgl"?(h=L().get("WEBGL_PACK_DEPTHWISECONV"),L().set("WEBGL_PACK_DEPTHWISECONV",!0),f=this.meshDetector.predict(m),L().set("WEBGL_PACK_DEPTHWISECONV",h)):f=this.meshDetector.predict(m),g=f[0],d=f[1],m.dispose(),x=g.dataSync()[0],g.dispose(),x<this.detectionConfidence?(d.dispose(),this.regionsOfInterest=[],[2,null]):(y=R(d,[-1,3]),w=y.arraySync(),d.dispose(),y.dispose(),C=this.transformRawCoords(w,c,s,u),T=this.getBoxForHandLandmarks(C),this.updateRegionsOfInterest(T,!1),[2,{landmarks:C,handInViewConfidence:x,boundingBox:{topLeft:T.startPoint,bottomRight:T.endPoint}}])}})})},r.prototype.calculateLandmarksBoundingBox=function(e){var t=e.map(function(n){return n[0]}),o=e.map(function(n){return n[1]});return{startPoint:[Math.min.apply(Math,t),Math.min.apply(Math,o)],endPoint:[Math.max.apply(Math,t),Math.max.apply(Math,o)]}},r.prototype.updateRegionsOfInterest=function(e,t){if(t)this.regionsOfInterest=[e];else{var o=this.regionsOfInterest[0],n=0;if(o!=null&&o.startPoint!=null){var s=e.startPoint,i=s[0],a=s[1],l=e.endPoint,u=l[0],c=l[1],p=o.startPoint,m=p[0],f=p[1],h=o.endPoint,g=h[0],d=h[1],x=Math.max(i,m),y=Math.max(a,f),w=(Math.min(u,g)-x)*(Math.min(c,d)-y);n=w/((u-i)*(c-a)+(g-m)*(d-a)-w)}this.regionsOfInterest[0]=n>.8?o:e}},r.prototype.shouldUpdateRegionsOfInterest=function(){return this.regionsOfInterest.length!==this.maxHandsNumber||this.runsWithoutHandDetector>=this.maxContinuousChecks},r}();function IU(){return xa(this,void 0,void 0,function(){return ya(this,function(r){return[2,Xh("https://tfhub.dev/mediapipe/tfjs-model/handdetector/1/default/1",{fromTFHub:!0})]})})}function kU(){return xa(this,void 0,void 0,function(){return ya(this,function(r){return[2,Xh("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1",{fromTFHub:!0})]})})}function EU(){return xa(this,void 0,void 0,function(){return ya(this,function(r){return[2,b.fetch("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1/anchors.json?tfjs-format=file").then(function(e){return e.json()})]})})}function bT(r){var e=r===void 0?{}:r,t=e.maxContinuousChecks,o=t===void 0?1/0:t,n=e.detectionConfidence,s=n===void 0?.8:n,i=e.iouThreshold,a=i===void 0?.3:i,l=e.scoreThreshold,u=l===void 0?.5:l;return xa(this,void 0,void 0,function(){var c,p,m,f,h,g;return ya(this,function(d){switch(d.label){case 0:return[4,Promise.all([EU(),IU(),kU()])];case 1:return c=d.sent(),p=c[0],m=c[1],f=c[2],h=new wU(m,256,256,p,a,u),g=new TU(h,f,256,256,o,s),[2,new AU(g)]}})})}var AU=function(){function r(e){this.pipeline=e}return r.getAnnotations=function(){return zb},r.prototype.estimateHands=function(e,t){return t===void 0&&(t=!1),xa(this,void 0,void 0,function(){var o,n,s,i,a,l,u,c,p;return ya(this,function(m){switch(m.label){case 0:return o=function(f){return f instanceof Ft?[f.shape[0],f.shape[1]]:[f.height,f.width]}(e),n=o[1],s=M(function(){return e instanceof Ft||(e=om.fromPixels(e)),xe(j(e,"float32"))}),[4,this.pipeline.estimateHand(s)];case 1:if(i=m.sent(),s.dispose(),i===null)return[2,[]];for(a=i,t===!0&&(a=function(f,h){var g=f.handInViewConfidence,d=f.landmarks,x=f.boundingBox;return{handInViewConfidence:g,landmarks:d.map(function(y){return[h-1-y[0],y[1],y[2]]}),boundingBox:{topLeft:[h-1-x.topLeft[0],x.topLeft[1]],bottomRight:[h-1-x.bottomRight[0],x.bottomRight[1]]}}}(i,n)),l={},u=0,c=Object.keys(zb);u<c.length;u++)p=c[u],l[p]=zb[p].map(function(f){return a.landmarks[f]});return[2,[{handInViewConfidence:a.handInViewConfidence,boundingBox:a.boundingBox,landmarks:a.landmarks,annotations:l}]]}})})},r}();var Nl={},Zh={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function wT(r,e){Nl[r]=e}function oo(r,e){if(!(r in Nl)||e!=null){let o=RU(r,e);if(o!==null)Nl[r]=o;else return console.log("Could not get context for WebGL version",r),null}let t=Nl[r];return t==null||t.isContextLost()?(delete Nl[r],oo(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),Nl[r])}function DU(r){if(!L().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&r===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function RU(r,e){if(r!==1&&r!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let t=e??DU(r);return t.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete Nl[r]},!1),L().getBool("SOFTWARE_WEBGL_ENABLED")&&(Zh.failIfMajorPerformanceCaveat=!1),r===1?t.getContext("webgl",Zh)||t.getContext("experimental-webgl",Zh):t.getContext("webgl2",Zh)}var Tl=function(r){return r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH",r}(Tl||{}),vr=function(r){return r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD",r}(vr||{}),xr=function(r){return r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16",r}(xr||{});function Il(r,e){return[e,r]}function CT(r,e){return r*e}function lm(r){let e=b.sizeFromShape(r),t=Math.ceil(e/4);return b.sizeToSquarishShape(t)}function Nn(r,e){return[Math.max(1,Math.ceil(e/2)),Math.max(1,Math.ceil(r/2))]}function vT(r,e){let[t,o]=Nn(r,e);return t*o*4}function um(r,e){let t=r,o,n,s,i,a,l,u,c,p,m;return L().getNumber("WEBGL_VERSION")===2?(o=t.R32F,n=t.R16F,s=t.RGBA16F,i=t.RGBA32F,a=t.RED,u=4,c=1,p=t.HALF_FLOAT,m=t.FLOAT,l=t.RGBA8):(o=r.RGBA,n=r.RGBA,s=r.RGBA,i=t.RGBA,a=r.RGBA,u=4,c=4,p=e!=null?e.HALF_FLOAT_OES:null,m=r.FLOAT,l=r.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:l,downloadUnpackNumChannels:u,defaultNumChannels:c,textureTypeHalfFloat:p,textureTypeFloat:m}}function mt(r,e){let t=e();return L().getBool("DEBUG")&&_U(r),t}function _U(r){let e=r.getError();if(e!==r.NO_ERROR)throw new Error("WebGL Error: "+LU(r,e))}var FU=596e-10,OU=65504;function ST(r){return!!(L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||FU<Math.abs(r)&&Math.abs(r)<OU)}function LU(r,e){switch(e){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${e}`}}function cm(r,e){return Ps(r,()=>r.getExtension(e),'Extension "'+e+'" not supported on this browser.')}function NT(r,e){let t=Ps(r,()=>r.createShader(r.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(mt(r,()=>r.shaderSource(t,e)),mt(r,()=>r.compileShader(t)),r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(t)),new Error("Failed to compile vertex shader.");return t}function TT(r,e){let t=Ps(r,()=>r.createShader(r.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(mt(r,()=>r.shaderSource(t,e)),mt(r,()=>r.compileShader(t)),L().get("ENGINE_COMPILE_ONLY"))return t;if(r.getShaderParameter(t,r.COMPILE_STATUS)===!1)throw Ub(e,r.getShaderInfoLog(t)),new Error("Failed to compile fragment shader.");return t}var PU=/ERROR: [0-9]+:([0-9]+):/g;function Ub(r,e){let t=PU.exec(e);if(t==null){console.log(`Couldn't parse line number in error: ${e}`),console.log(r);return}let o=+t[1],n=r.split(`
`),s=n.length.toString().length+2,i=n.map((p,m)=>b.rightPad((m+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let l=i.slice(0,o-1),u=i.slice(o-1,o),c=i.slice(o);console.log(l.join(`
`)),console.log(e.split(`
`)[0]),console.log(`%c ${b.rightPad(u[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(c.join(`
`))}function IT(r){return Ps(r,()=>r.createProgram(),"Unable to create WebGLProgram.")}function kT(r,e){if(mt(r,()=>r.linkProgram(e)),!L().get("ENGINE_COMPILE_ONLY")&&r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Qh(r,e){if(mt(r,()=>r.validateProgram(e)),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function ET(r,e){let t=Ps(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return mt(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),mt(r,()=>r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)),t}function AT(r,e){let t=Ps(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return mt(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t)),mt(r,()=>r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)),t}function $T(r){return Ps(r,()=>r.createTexture(),"Unable to create WebGLTexture.")}function DT(r,e){let t=L().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||e<=0){let o=`[${r}x${e}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(r>t||e>t){let o=`[${r}x${e}]`,n=`[${t}x${t}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function RT(r){return Ps(r,()=>r.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Hb(r,e,t,o,n,s,i){let a=r.getAttribLocation(e,t);return a===-1?!1:(mt(r,()=>r.bindBuffer(r.ARRAY_BUFFER,o)),mt(r,()=>r.vertexAttribPointer(a,n,r.FLOAT,!1,s,i)),mt(r,()=>r.enableVertexAttribArray(a)),!0)}function zU(r,e,t){BU(r,t),mt(r,()=>r.activeTexture(r.TEXTURE0+t)),mt(r,()=>r.bindTexture(r.TEXTURE_2D,e))}function _T(r,e,t){return Ps(r,()=>r.getUniformLocation(e,t),'uniform "'+t+'" not present in program.')}function FT(r,e,t){return r.getUniformLocation(e,t)}function OT(r,e,t,o){mt(r,()=>zU(r,e,o)),mt(r,()=>r.uniform1i(t,o))}function td(r,e,t){mt(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,t)),mt(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0))}function Kb(r,e){mt(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,e)),mt(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0))}function pm(r){let e=r.checkFramebufferStatus(r.FRAMEBUFFER);if(e!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+MU(r,e))}function MU(r,e){switch(e){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${e}`}}function Ps(r,e,t){let o=mt(r,()=>e());if(o==null)throw new Error(t);return o}function BU(r,e){let t=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=e+r.TEXTURE0;if(o<r.TEXTURE0||o>t){let n=`[gl.TEXTURE0, gl.TEXTURE${t}]`;throw new Error(`textureUnit must be in ${n}.`)}}function ba(r,e=2){return b.sizeFromShape(r.slice(0,r.length-e))}function wa(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function mm(r){let e=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(e=[ba(r),...wa(r)]),e}function LT(r,e=!1){let t=L().getNumber("WEBGL_MAX_TEXTURE_SIZE"),o=L().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");o===1/0&&L().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(o=t/2),e&&(t=t*2,o=o*2,r=r.map((a,l)=>l>=r.length-2?b.nearestLargerEven(r[l]):r[l]),r.length===1&&(r=[2,r[0]])),r.length!==2&&(r=b.squeezeShape(r).newShape);let n=b.sizeFromShape(r),s=null;r.length<=1&&n<=t?s=[1,n]:r.length===2&&r[0]<=t&&r[1]<=t?s=r:r.length===3&&r[0]*r[1]<=t&&r[2]<=t?s=[r[0]*r[1],r[2]]:r.length===3&&r[0]<=t&&r[1]*r[2]<=t?s=[r[0],r[1]*r[2]]:r.length===4&&r[0]*r[1]*r[2]<=t&&r[3]<=t?s=[r[0]*r[1]*r[2],r[3]]:r.length===4&&r[0]<=t&&r[1]*r[2]*r[3]<=t&&(s=[r[0],r[1]*r[2]*r[3]]);let i=s!=null&&Math.max(...s)>o&&Math.min(...s)<=(e?2:1)&&Math.min(...s)>0;if(s==null||i)if(e){let a=ba(r),l=2,u=2;r.length&&([l,u]=wa(r)),n=a*(l/2)*(u/2),s=b.sizeToSquarishShape(n).map(c=>c*2)}else s=b.sizeToSquarishShape(n);return s}function Jh(r){return r%2===0}function kl(r,e){if(r=r.slice(-2),e=e.slice(-2),b.arraysEqual(r,e)||!r.length||!e.length||r[0]===0||r[1]===0||e[0]===0||e[1]===0)return!0;if(r.length!==e.length){let t=r[r.length-1],o=e[e.length-1];if(t===o||Jh(t)&&Jh(o)&&(r[0]===1||e[0]===1))return!0}return r[1]===e[1]&&Jh(r[0])&&Jh(e[0])}var Vb,Gb;function PT(r){if(Vb==null){let e=oo(r);Vb=e.getParameter(e.MAX_TEXTURE_SIZE)}return Vb}function zT(r){if(Gb==null){let e=oo(r);Gb=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Gb)}function MT(r){if(r===0)return 0;let e,t=oo(r);return ho(t,"EXT_disjoint_timer_query_webgl2")&&r===2?e=2:ho(t,"EXT_disjoint_timer_query")?e=1:e=0,e}function ho(r,e){return r.getExtension(e)!=null}function qb(r){try{if(oo(r)!=null)return!0}catch(e){return console.log("Error when getting WebGL context: ",e),!1}return!1}function BT(r){if(r===0)return!1;let e=oo(r);if(r===1){if(!ho(e,"OES_texture_float"))return!1}else if(!ho(e,"EXT_color_buffer_float"))return!1;return Wb(e)}function VT(r){if(r===0)return!1;let e=oo(r);if(r===1){if(!ho(e,"OES_texture_float")||!ho(e,"WEBGL_color_buffer_float"))return!1}else{if(ho(e,"EXT_color_buffer_float"))return Wb(e);let o="EXT_color_buffer_half_float";if(ho(e,o)){let n=e.getExtension(o);return VU(e,n)}return!1}return Wb(e)}function Wb(r){let e=um(r),t=r.createTexture();r.bindTexture(r.TEXTURE_2D,t),r.texImage2D(r.TEXTURE_2D,0,e.internalFormatFloat,1,1,0,e.textureFormatFloat,e.textureTypeFloat,null);let s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0);let i=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(t),r.deleteFramebuffer(s),i}function VU(r,e){let t=um(r,e),o=r.createTexture();r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatHalfFloat,1,1,0,t.textureFormatFloat,t.textureTypeHalfFloat,null);let i=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0);let a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(o),r.deleteFramebuffer(i),a}function GT(r){return r!==2?!1:oo(r).fenceSync!=null}function Tn(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>{t!=null&&b.assert(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the WebGL backend.`)})}var yt=L();yt.registerFlag("HAS_WEBGL",()=>yt.getNumber("WEBGL_VERSION")>0);yt.registerFlag("WEBGL_VERSION",()=>qb(2)?2:qb(1)?1:0);yt.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);yt.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>yt.get("WEBGL_VERSION")===2);yt.registerFlag("WEBGL_CPU_FORWARD",()=>!0);yt.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);yt.registerFlag("WEBGL_PACK",()=>yt.getBool("HAS_WEBGL"));yt.registerFlag("WEBGL_PACK_NORMALIZATION",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_CLIP",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_REDUCE",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_LAZILY_UNPACK",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_CONV_IM2COL",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>yt.getBool("WEBGL_PACK"));yt.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>PT(yt.getNumber("WEBGL_VERSION")));yt.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>zT(yt.getNumber("WEBGL_VERSION")));yt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let r=yt.getNumber("WEBGL_VERSION");return r===0?0:MT(r)});yt.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>yt.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!Yi.isMobile());yt.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>BT(yt.getNumber("WEBGL_VERSION")));yt.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>yt.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:yt.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));yt.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>VT(yt.getNumber("WEBGL_VERSION")));yt.registerFlag("WEBGL_FENCE_API_ENABLED",()=>GT(yt.getNumber("WEBGL_VERSION")));yt.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>yt.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);yt.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,r=>{if(typeof r!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${r}.`);if(r<0&&r!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${r}.`)});yt.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>Yi.isMobile()?1:-1,r=>{if(typeof r!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${r}.`);if(r<0&&r!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${r}.`)});yt.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);yt.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);yt.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);yt.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);yt.registerFlag("WEBGL_EXP_CONV",()=>!1);yt.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>yt.getBool("IS_TEST"));yt.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);yt.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);yt.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);yt.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function we(){let r,e,t,o,n,s,i,a,l,u;return L().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",e="in",t="out",o="in",n="texture",s="outputColor",i="out vec4 outputColor;",a=L().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",l="",u=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",e="attribute",t="varying",o="varying",n="texture2D",s="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,l=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,u=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:e,varyingVs:t,varyingFs:o,texture2D:n,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:l,defineRound:u}}function Zo(r,e,t="index"){let o=b.computeStrides(e);return o.map((n,s)=>{let i=`int ${r[s]} = ${t} / ${n}`,a=s===o.length-1?`int ${r[s+1]} = ${t} - ${r[s]} * ${n}`:`index -= ${r[s]} * ${n}`;return`${i}; ${a};`}).join("")}function El(r,e,t="index"){let o=b.computeStrides(e);return o.map((n,s)=>{let i=`int ${r[s]} = ${t} / outShapeStrides[${s}]`,a=s===o.length-1?`int ${r[s+1]} = ${t} - ${r[s]} * outShapeStrides[${s}]`:`index -= ${r[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function GU(r,e){let t=r.length,o=r.map(s=>`${e}[${s}]`),n=new Array(t-1);n[t-2]=o[t-1];for(let s=t-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function WT(r,e,t="index"){let o=r.map((s,i)=>i),n=GU(o,e);return n.map((s,i)=>{let a=`int ${r[i]} = ${t} / ${n[i]}`,l=i===n.length-1?`int ${r[i+1]} = ${t} - ${r[i]} * ${n[i]}`:`index -= ${r[i]} * ${n[i]}`;return`${a}; ${l};`}).join("")}function qc(r){let e=b.computeStrides(r).map(t=>t.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${e[0]} + coords.y * ${e[1]} + coords.z;
  }
`}function jc(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var rd=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;var{getBroadcastDims:UT}=I;function HT(r,e,t){let o=[];if(r.forEach(f=>{let h=b.sizeFromShape(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?o.push(`uniform float ${f.name}${h>1?`[${h}]`:""};`):(o.push(`uniform sampler2D ${f.name};`),o.push(`uniform int offset${f.name};`)),t.enableShapeUniforms){let{uniformShape:g}=od(t.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(g.length){case 1:o.push(`uniform int ${f.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${f.name}TexShape;`)}}),t.enableShapeUniforms){switch(e.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}t.customUniforms&&t.customUniforms.forEach(f=>{o.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});let n=o.join(`
`),s=r.map(f=>WU(f,e,t.packedInputs,t.enableShapeUniforms)).join(`
`),i=e.texShape,a=we(),l=KU(a),u,c,p=XU(a);return e.isPacked?(u=UU(e.logicalShape,i,t.enableShapeUniforms),c=jU(a)):(u=HU(e.logicalShape,i,t.enableShapeUniforms),c=qU(a)),t.packedInputs&&(p+=QU),[p,l,c,n,u,s,t.userCode].join(`
`)}function Yc(r,e=!1){let t=r.shapeInfo.logicalShape;switch(t.length){case 0:return p4(r,e);case 1:return f4(r,e);case 2:return d4(r,e);case 3:return x4(r,e);case 4:return b4(r,e);case 5:return w4(r);case 6:return C4(r);default:throw new Error(`${t.length}-D input sampling is not yet supported`)}}function KT(r,e){switch(r.shapeInfo.logicalShape.length){case 0:return c4(r);case 1:return m4(r,e);case 2:return h4(r,e);case 3:return g4(r,e);default:return y4(r,e)}}function WU(r,e,t=!1,o){let n="";t?n+=KT(r,o):n+=Yc(r,o);let s=r.shapeInfo.logicalShape,i=e.logicalShape;return s.length<=i.length&&(t?n+=v4(r,e):n+=S4(r,e)),n}function UU(r,e,t){switch(r.length){case 0:return qT();case 1:return t4(r,e,t);case 2:return l4(r,e,t);case 3:return r4(r,e,t);default:return n4(r,e,t)}}function HU(r,e,t){switch(r.length){case 0:return qT();case 1:return e4(r,e,t);case 2:return u4(r,e,t);case 3:return o4(r,e,t);case 4:return s4(r,e,t);case 5:return i4(r,e);case 6:return a4(r,e);default:throw new Error(`${r.length}-D output sampling is not yet supported`)}}function KU(r){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${r.texture2D}(textureSampler, uv).r;
    }
  `}function qU(r){return`
    void setOutput(float val) {
      ${r.output} = vec4(val, 0, 0, 0);
    }
  `}function jU(r){return`
    void setOutput(vec4 val) {
      ${r.output} = val;
    }
  `}function XU(r){return`${r.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${r.varyingFs} vec2 resultUV;
    ${r.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${r.defineSpecialNaN}
    ${r.defineSpecialInf}
    ${r.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${YU}
    ${ZU}
    ${JU}
  `}var YU=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ZU=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,JU=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,QU=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function qT(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function t4(r,e,t){let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];return o[0]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${o[1]}.0);
      }
    `:o[1]===1?t?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${o[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      return 2 * (resTexRC.x * ${o[1]} + resTexRC.y);
    }
  `}function e4(r,e,t){return e[0]===1?t?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${e[1]}.0);
      }
    `:e[1]===1?t?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${e[0]}.0);
      }
    `:t?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      return resTexRC.x * ${e[1]} + resTexRC.y;
    }
  `}function r4(r,e,t){if(t)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],n=Math.ceil(r[2]/2),s=n*Math.ceil(r[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec3(b, r, c);
    }
  `}function o4(r,e,t){if(t)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${El(["r","c","d"],r)}
    return ivec3(r, c, d);
  }
`;let o=Zo(["r","c","d"],r);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${o}
      return ivec3(r, c, d);
    }
  `}function n4(r,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)],n=Math.ceil(r[r.length-1]/2),s=n*Math.ceil(r[r.length-2]/2),i=s,a="",l="b, r, c";for(let u=2;u<r.length-1;u++)i*=r[r.length-u-1],a=`
      int b${u} = index / ${i};
      index -= b${u} * ${i};
    `+a,l=`b${u}, `+l;return`
    ivec${r.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      ${a}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${r.length}(${l});
    }
  `}function s4(r,e,t){if(t)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${El(["r","c","d","d2"],r)}
      return ivec4(r, c, d, d2);
    }
  `;let o=Zo(["r","c","d","d2"],r);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      ${o}
      return ivec4(r, c, d, d2);
    }
  `}function i4(r,e){let t=Zo(["r","c","d","d2","d3"],r);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${e[0]},
                             ${e[1]}));

      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function a4(r,e){let t=Zo(["r","c","d","d2","d3","d4"],r);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;

      ${t}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function l4(r,e,t){let o=[Math.ceil(e[0]/2),Math.ceil(e[1]/2)];if(b.arraysEqual(r,e))return t?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `;let n=Math.ceil(r[1]/2);return t?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));

      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec2(r, c);
    }
  `}function u4(r,e,t){return b.arraysEqual(r,e)?t?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${e[0]}, ${e[1]}));
      }
    `:r[1]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:r[0]===1?t?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${e[0]}, ${e[1]}));
        int index = resTexRC.x * ${e[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:t?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${e[0]}, ${e[1]}));
      int index = resTexRC.x * ${e[1]} + resTexRC.y;
      int r = index / ${r[1]};
      int c = index - r * ${r[1]};
      return ivec2(r, c);
    }
  `}function Al(r){return`offset${r}`}function c4(r){let e=r.name,t="get"+e.charAt(0).toUpperCase()+e.slice(1),o=we();return`
    vec4 ${t}() {
      return ${o.texture2D}(${e}, halfCR);
    }
  `}function p4(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(r.shapeInfo.isUniform)return`float ${o}() {return ${t};}`;let[n,s]=r.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${t}, halfCR);
      }
    `;let i=Al(t);if(e)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], ${i});
      return sampleTexture(${t}, uv);
    }
  `;let[a,l]=r.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${a}, ${l}, ${i});
      return sampleTexture(${t}, uv);
    }
  `}function m4(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),n=r.shapeInfo.texShape,s=we();if(e)return`
    vec4 ${o}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${t}, uv);
    }
  `;let i=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${o}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${s.texture2D}(${t}, uv);
    }
  `}function f4(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1);if(r.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${Zc(r)}
      }
    `;let n=r.shapeInfo.texShape,s=n[0],i=n[1];if(i===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${t}, halfCR);
      }
    `;let a=Al(t);return i===1?e?`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${t}TexShape[0]));
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${s}.0);
        return sampleTexture(${t}, uv);
      }
    `:s===1?e?`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${t}TexShape[1]), 0.5);
        return sampleTexture(${t}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${t}, uv);
      }
    `:e?`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${t}TexShape[0], ${t}TexShape[1], index + ${a});
      return sampleTexture(${t}, uv);
    }
  `:`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${s}, ${i}, index + ${a});
      return sampleTexture(${t}, uv);
    }
  `}function h4(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,i=s[0],a=s[1],l=we();if(s!=null&&b.arraysEqual(t,s))return e?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);

        return ${l.texture2D}(${o}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${l.texture2D}(${o}, uv);
      }
    `;if(e)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `;let u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Math.ceil(t[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${c}, ${u[0]}, ${u[1]}, row, col);
      return ${l.texture2D}(${o}, uv);
    }
  `}function d4(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape;if(s!=null&&b.arraysEqual(t,s)){if(e)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let m=s[0],f=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${m}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:i,keptDims:a}=b.squeezeShape(t),l=i;if(l.length<t.length){let m=Jc(r,l),f=["row","col"];return`
      ${Yc(m,e)}
      float ${n}(int row, int col) {
        return ${n}(${Qc(f,a)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${t[1]}, 1)));
        ${Zc(r)}
      }
    `;let u=s[0],c=s[1],p=Al(o);return c===1?e?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${o}TexShape[0]));
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${u}.0);
      return sampleTexture(${o}, uv);
    }
  `:u===1?e?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${o}TexShape[1]), 0.5);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${t[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${c}.0, 0.5);
      return sampleTexture(${o}, uv);
    }
  `:e?`
      float ${n}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o}Shape[1] + col + ${p};
        vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
        return sampleTexture(${o}, uv);
      }
    `:`
  float ${n}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${t[1]} + col + ${p};
    vec2 uv = uvFromFlat(${u}, ${c}, index);
    return sampleTexture(${o}, uv);
  }
`}function g4(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(t[0]===1){let m=t.slice(1),f=[1,2],h=Jc(r,m),g=["b","row","col"];return`
        ${KT(h,e)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${Qc(g,f)});
        }
      `}let a=we();if(e)return`
    vec4 ${n}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `;let l=i[0],u=i[1],c=Math.ceil(t[2]/2),p=c*Math.ceil(t[1]/2);return`
    vec4 ${n}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${l}, ${u}, ${p}, ${c}, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `}function x4(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=t[1]*t[2],i=t[2],{newShape:a,keptDims:l}=b.squeezeShape(t),u=a;if(u.length<t.length){let g=Jc(r,u),d=["row","col","depth"];return`
        ${Yc(g,e)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${Qc(d,l)});
        }
      `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${Zc(r)}
      }
    `;let c=r.shapeInfo.texShape,p=c[0],m=c[1],f=r.shapeInfo.flatOffset;if(m===s&&f==null)return e?`
      float ${n}(int row, int col, int depth) {
        int stride1 = ${o}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
        float ${n}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${m}.0, ${p}.0);
          return sampleTexture(${o}, uv);
        }
      `;if(m===i&&f==null)return e?`
      float ${n}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${o}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${t[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${m}.0, ${p}.0);
      return sampleTexture(${o}, uv);
    }
  `;let h=Al(o);return e?`
    float ${n}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${o}Shape[1] * ${o}Shape[2];
      int stride1 = ${o}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${h};
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
      return sampleTexture(${o}, uv);
    }
    `:`
      float ${n}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${h};
        vec2 uv = uvFromFlat(${p}, ${m}, index);
        return sampleTexture(${o}, uv);
      }
  `}function y4(r,e){let t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),n=we();if(e)return`
    vec4 ${o}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${t}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${t}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${t}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${t}TexShape[0]) / 2.0), ceil(float(${t}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${t}, uv);
    }
  `;let s=r.shapeInfo.logicalShape,i=s.length,a=r.shapeInfo.texShape,l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],u=l[0],c=l[1],p=Math.ceil(s[i-1]/2),m=p*Math.ceil(s[i-2]/2),f="int b, int row, int col",h=`b * ${m} + (row / 2) * ${p} + (col / 2)`;for(let g=2;g<i-1;g++)f=`int b${g}, `+f,m*=s[i-g-1],h=`b${g} * ${m} + `+h;return`
    vec4 ${o}(${f}) {
      int index = ${h};
      int texR = index / ${c};
      int texC = index - texR * ${c};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${c}, ${u});
      return ${n.texture2D}(${t}, uv);
    }
  `}function b4(r,e){let t=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=t[3],i=t[2]*s,a=t[1]*i,{newShape:l,keptDims:u}=b.squeezeShape(t);if(l.length<t.length){let y=Jc(r,l),w=["row","col","depth","depth2"];return`
      ${Yc(y,e)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${Qc(w,u)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${Zc(r)}
      }
    `;let c=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],f=p[1],h=`int stride2 = ${o}Shape[3];`,g=`int stride1 = ${o}Shape[2] * stride2;`,d=`int stride0 = ${o}Shape[1] * stride1;`;if(f===a&&c==null)return e?`
      float ${n}(int row, int col, int depth, int depth2) {
        ${h}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;if(f===s&&c==null)return e?`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${o}Shape[1] * ${o}Shape[2], ${o}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${t[1]*t[2]}, ${t[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;let x=Al(o);return e?`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${h}
      ${g}
      ${d}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index + ${x});
      return sampleTexture(${o}, uv);
    }
  `:`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${m}, ${f}, index + ${x});
      return sampleTexture(${o}, uv);
    }
  `}function w4(r){let e=r.shapeInfo.logicalShape,t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),n=e[4],s=e[3]*n,i=e[2]*s,a=e[1]*i,{newShape:l,keptDims:u}=b.squeezeShape(e);if(l.length<e.length){let g=Jc(r,l),d=["row","col","depth","depth2","depth3"];return`
      ${Yc(g)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${Qc(d,u)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${n})) +
          depth3;
        ${Zc(r)}
      }
    `;let c=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],f=p[1];if(f===a&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(f===n&&c==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]},
               ${e[2]*e[3]}, ${e[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${t}, uv);
      }
    `;let h=Al(t);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${n} + depth3 + ${h};
      vec2 uv = uvFromFlat(${m}, ${f}, index);
      return sampleTexture(${t}, uv);
    }
  `}function C4(r){let e=r.shapeInfo.logicalShape,t=r.name,o="get"+t.charAt(0).toUpperCase()+t.slice(1),{newShape:n,keptDims:s}=b.squeezeShape(e);if(n.length<e.length){let d=Jc(r,n),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Yc(d)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${Qc(x,s)});
      }
    `}let i=e[5],a=e[4]*i,l=e[3]*a,u=e[2]*l,c=e[1]*u;if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${c}, ${u}, ${l}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${Zc(r)}
      }
    `;let p=r.shapeInfo.flatOffset,m=r.shapeInfo.texShape,f=m[0],h=m[1];if(h===c&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${u}, ${l}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;if(h===i&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${e[1]*e[2]*e[3]*e[4]},
               ${e[2]*e[3]*e[4]},
               ${e[3]*e[4]},
               ${e[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${f}.0);
        return sampleTexture(${t}, uv);
      }
    `;let g=Al(t);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${c} + col * ${u} + depth * ${l} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${h}, index);
      return sampleTexture(${t}, uv);
    }
  `}function Zc(r){let e=r.name,t=b.sizeFromShape(r.shapeInfo.logicalShape);return t<2?`return ${e};`:`
    for (int i = 0; i < ${t}; i++) {
      if (i == index) {
        return ${e}[i];
      }
    }
  `}function v4(r,e){let t=r.name,o=t.charAt(0).toUpperCase()+t.slice(1),n="get"+o+"AtOutCoords",s=r.shapeInfo.logicalShape.length,i=e.logicalShape.length,a=UT(r.shapeInfo.logicalShape,e.logicalShape),l=kt(i),u=i-s,c,p=["x","y","z","w","u","v"];s===0?c="":i<2&&a.length>=1?c="coords = 0;":c=a.map(y=>`coords.${p[y+u]} = 0;`).join(`
`);let m="";i<2&&s>0?m="coords":m=r.shapeInfo.logicalShape.map((y,w)=>`coords.${p[w+u]}`).join(", ");let f="return outputValue;",g=b.sizeFromShape(r.shapeInfo.logicalShape)===1,x=b.sizeFromShape(e.logicalShape)===1;if(s===1&&!g&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!x)i===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(a.length){let y=s-2,w=s-1;a.indexOf(y)>-1&&a.indexOf(w)>-1?f="return vec4(outputValue.x);":a.indexOf(y)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(w)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${l} coords = getOutputCoords();
      ${c}
      vec4 outputValue = get${o}(${m});
      ${f}
    }
  `}function S4(r,e){let t=r.name,o=t.charAt(0).toUpperCase()+t.slice(1),n="get"+o+"AtOutCoords",s=e.texShape,i=r.shapeInfo.texShape,a=r.shapeInfo.logicalShape.length,l=e.logicalShape.length;if(!r.shapeInfo.isUniform&&a===l&&r.shapeInfo.flatOffset==null&&b.arraysEqual(i,s))return`
      float ${n}() {
        return sampleTexture(${t}, resultUV);
      }
    `;let u=kt(l),c=UT(r.shapeInfo.logicalShape,e.logicalShape),p=l-a,m,f=["x","y","z","w","u","v"];a===0?m="":l<2&&c.length>=1?m="coords = 0;":m=c.map(g=>`coords.${f[g+p]} = 0;`).join(`
`);let h="";return l<2&&a>0?h="coords":h=r.shapeInfo.logicalShape.map((g,d)=>`coords.${f[d+p]}`).join(", "),`
    float ${n}() {
      ${u} coords = getOutputCoords();
      ${m}
      return get${o}(${h});
    }
  `}function kt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error(`GPU for rank ${r} is not yet supported`)}function od(r,e,t){let{newShape:o,keptDims:n}=b.squeezeShape(e),s=e.length,i=r&&s===3&&e[0]===1,a=i?e.slice(1):o,l=!r&&s>1&&!b.arraysEqual(e,t)&&o.length<s||i;return{useSqueezeShape:l,uniformShape:l?a:e,keptDims:n}}function Jc(r,e){let t=JSON.parse(JSON.stringify(r));return t.shapeInfo.logicalShape=e,t}function Qc(r,e){return e.map(t=>r[t]).join(", ")}function XT(r,e,t,o){let n=t.map((c,p)=>{let m={logicalShape:c.shape,texShape:c.isUniform?null:c.texData.texShape,isUniform:c.isUniform,isPacked:c.isUniform?!1:c.texData.isPacked,flatOffset:null};return c.texData!=null&&c.texData.slice!=null&&c.texData.slice.flatOffset>0&&(m.flatOffset=c.texData.slice.flatOffset),{name:e.variableNames[p],shapeInfo:m}}),s=n.map(c=>c.shapeInfo),i={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},a=HT(n,i,e),l=TT(r.gl,a),u=r.createProgram(l);return L().get("ENGINE_COMPILE_ONLY")?{program:e,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(r.buildVao(u),Object.assign({program:e,fragmentShader:l,source:a,webGLProgram:u,inShapeInfos:s,outShapeInfo:i},jb(r,e,u)))}function jb(r,e,t){let o=[],n=[],s,i,a,l=null,u=null;u=r.getUniformLocation(t,"NAN",!1),L().getNumber("WEBGL_VERSION")===1&&(l=r.getUniformLocation(t,"INFINITY",!1));let c=!1;for(let p of e.variableNames){let m={name:p,uniform:r.getUniformLocation(t,p,c),offset:r.getUniformLocation(t,`offset${p}`,c)};e.enableShapeUniforms&&(m.shape=r.getUniformLocation(t,`${p}Shape`,c),m.texShape=r.getUniformLocation(t,`${p}TexShape`,c)),o.push(m)}if(e.enableShapeUniforms&&(s=r.getUniformLocation(t,"outShape",c),a=r.getUniformLocation(t,"outShapeStrides",c),i=r.getUniformLocation(t,"outTexShape",c)),e.customUniforms)for(let p of e.customUniforms)n.push(r.getUniformLocation(t,p.name,c));return{variablesLocations:o,customUniformLocations:n,infLoc:l,nanLoc:u,outShapeLocation:s,outShapeStridesLocation:a,outTexShapeLocation:i}}function jT(r,e){if(r.length!==e.length)throw Error(`Binary was compiled with ${r.length} inputs, but was executed with ${e.length} inputs`);r.forEach((t,o)=>{let n=t.logicalShape,s=e[o],i=s.shape;if(!b.arraysEqual(n,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${i} must match`);if(t.isUniform&&s.isUniform)return;let a=t.texShape,l=s.isUniform?null:s.texData.texShape;if(!b.arraysEqual(a,l))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${l} must match`)})}function YT(r,e,t,o,n){e.program.enableShapeUniforms||(jT(e.inShapeInfos,t),jT([e.outShapeInfo],[o]));let s=o.texData.texture,i=o.texData.texShape;o.texData.isPacked?r.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):r.setOutputMatrixTexture(s.texture,i[0],i[1]),r.setProgram(e.webGLProgram),r.bindVertexArray(e.webGLProgram.vao),L().getNumber("WEBGL_VERSION")===1&&e.infLoc!==null&&r.gl.uniform1f(e.infLoc,1/0),e.nanLoc!==null&&r.gl.uniform1f(e.nanLoc,NaN);for(let l=0;l<t.length;++l){let u=t[l],{uniform:c,offset:p,shape:m,texShape:f}=e.variablesLocations[l];if(m){let{uniformShape:h}=od(e.program.packedInputs,u.shape,u.texData.texShape);switch(h.length){case 1:r.gl.uniform1iv(m,new Int32Array(h));break;case 2:r.gl.uniform2iv(m,new Int32Array(h));break;case 3:r.gl.uniform3iv(m,new Int32Array(h));break;case 4:r.gl.uniform4iv(m,new Int32Array(h));break;default:break}}if(f&&r.gl.uniform2i(f,u.texData.texShape[0],u.texData.texShape[1]),c!=null){if(u.isUniform){if(b.sizeFromShape(u.shape)<2)r.gl.uniform1f(c,u.uniformValues[0]);else{let h=u.uniformValues;h instanceof Float32Array||(h=new Float32Array(h)),r.gl.uniform1fv(c,h)}continue}u.texData.slice!=null&&p!=null&&r.gl.uniform1i(p,u.texData.slice.flatOffset),r.setInputMatrixTexture(u.texData.texture.texture,c,l)}}let a=e.outShapeLocation;if(a)switch(o.shape.length){case 1:r.gl.uniform1iv(a,new Int32Array(o.shape));break;case 2:r.gl.uniform2iv(a,new Int32Array(o.shape));break;case 3:r.gl.uniform3iv(a,new Int32Array(o.shape));break;case 4:r.gl.uniform4iv(a,new Int32Array(o.shape));break;default:break}if(e.outShapeStridesLocation){let l=b.computeStrides(o.shape);switch(o.shape.length){case 2:r.gl.uniform1iv(e.outShapeStridesLocation,new Int32Array(l));break;case 3:r.gl.uniform2iv(e.outShapeStridesLocation,new Int32Array(l));break;case 4:r.gl.uniform3iv(e.outShapeStridesLocation,new Int32Array(l));break;default:break}}if(e.outTexShapeLocation&&r.gl.uniform2i(e.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),e.program.customUniforms&&n)for(let l=0;l<e.program.customUniforms.length;++l){let u=e.program.customUniforms[l],c=e.customUniformLocations[l],p=n[l];if(u.type==="float")r.gl.uniform1fv(c,p);else if(u.type==="vec2")r.gl.uniform2fv(c,p);else if(u.type==="vec3")r.gl.uniform3fv(c,p);else if(u.type==="vec4")r.gl.uniform4fv(c,p);else if(u.type==="int")r.gl.uniform1iv(c,p);else if(u.type==="ivec2")r.gl.uniform2iv(c,p);else if(u.type==="ivec3")r.gl.uniform3iv(c,p);else if(u.type==="ivec4")r.gl.uniform4iv(c,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}r.executeProgram()}function ZT(r,e,t){let o="";e.concat(t).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(r.enableShapeUniforms&&!i.isUniform){let l=i.texData.texShape,{useSqueezeShape:u,uniformShape:c,keptDims:p}=od(r.packedInputs,i.shape,l),m="",f="",h="";if(c.length===1&&r.packedInputs){let T=[Math.ceil(l[0]/2),Math.ceil(l[1]/2)];m=`${T[0]>1}_${T[1]>1}`}else if(c.length===2&&!r.packedInputs)f=`${c[0]>1}_${c[1]>1}`;else if(c.length>2&&!r.packedInputs){let T=b.computeStrides(c);h=`${T[0]===l[1]}_${T[T.length-1]===l[1]}`}let g=i.shape.length,d=c.length===2&&b.arraysEqual(i.shape,l),x=b.sizeFromShape(i.shape)===1,y=I.getBroadcastDims(i.shape,t.shape),w=!r.packedInputs&&g===t.shape.length&&b.arraysEqual(l,t.texData.texShape),C=r.packedInputs||c.length>2?"":`${l[0]>1}_${l[1]>1}`;o+=`${g}_${w}_${u?p:""}_${c.length}_${x}_${y}_${d}_${m}_${f}_${h}_${C}_${a}`}else{let l=i.isUniform?"uniform":i.texData.texShape;o+=`${i.shape}_${l}_${a}`}});let n=r.userCode,s=r.constructor.name;return s+="_"+o+"_"+n+`${L().getNumber("WEBGL_VERSION")}`,s}function jt(r){return L().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&r<=4}var nd=class{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=Tl.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=we();this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?El(["r","c","d"],e):Zo(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}};var sd=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=Tl.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let t=we();this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?El(["r","c","d"],e):Zo(["r","c","d"],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}};var id=class{constructor(e){this.variableNames=["A"],this.outTexUsage=vr.DOWNLOAD;let t=we();this.outputShape=e,this.userCode=`
      ${rd}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}};var ad=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=vr.DOWNLOAD;let t=we();this.outputShape=e,this.userCode=`
      ${rd}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}};var I4={R:0,G:1,B:2,A:3},fm=class{constructor(e,t=!1,o="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=we();this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length);let s="result";t&&(s="floor(result * 255. + 0.5)");let i="";for(let a=0;a<o.length;a++){let l=o[a];i+=`
          if(offset == ${a}) {
            result = values[${I4[l]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?jc():qc(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${o.length});

        flatIndex = idiv(flatIndex, ${o.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${n.texture2D}(A, uv);
          ${i}
        }
        ${n.output} = vec4(${s}, 0., 0., 0.);
      }
    `}};var ld=class{constructor(e,t=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=we();this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length);let n="",s="result";t&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let l=i*2+a;n+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${e[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${e[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${o.texture2D}(A, uv);

            if (offset == 0) {
              result[${l}] = values[0];
            } else if (offset == 1) {
              result[${l}] = values[1];
            } else if (offset == 2) {
              result[${l}] = values[2];
            } else {
              result[${l}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?jc():qc(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${n}

          ${o.output} = ${s};
        }
    `}};function JT(r){let e=we(),t=`${e.version}
    precision highp float;
    ${e.attribute} vec3 clipSpacePos;
    ${e.attribute} vec2 uv;
    ${e.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return NT(r,t)}function QT(r){let e=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return ET(r,e)}function tI(r){let e=new Uint16Array([0,1,2,2,1,3]);return AT(r,e)}function hm(r,e,t,o,n,s){DT(e,t);let i=$T(r),a=r.TEXTURE_2D;return mt(r,()=>r.bindTexture(a,i)),mt(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)),mt(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)),mt(r,()=>r.texParameteri(a,r.TEXTURE_MIN_FILTER,r.NEAREST)),mt(r,()=>r.texParameteri(a,r.TEXTURE_MAG_FILTER,r.NEAREST)),L().getNumber("WEBGL_VERSION")===1?mt(r,()=>r.texImage2D(a,0,o,e,t,0,n,s,null)):mt(r,()=>r.texStorage2D(a,1,o,e,t)),mt(r,()=>r.bindTexture(r.TEXTURE_2D,null)),{texture:i,texShape:[t,e]}}function Xb(r){return r.internalFormatFloat}function eI(r,e,t,o){let[n,s]=Il(e,t);return hm(r,n,s,Xb(o),o.textureFormatFloat,r.FLOAT)}function Yb(r){return r.internalFormatHalfFloat}function rI(r,e,t,o){let[n,s]=Il(e,t);return hm(r,n,s,Yb(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function Zb(r){return r.downloadTextureFormat}function oI(r,e,t,o){let[n,s]=Il(e,t);return hm(r,n,s,Zb(o),r.RGBA,r.UNSIGNED_BYTE)}function Jb(r){return r.internalFormatPackedFloat}function nI(r,e,t,o){let[n,s]=Nn(e,t);return hm(r,n,s,Jb(o),r.RGBA,r.FLOAT)}function Qb(r){return r.internalFormatPackedHalfFloat}function sI(r,e,t,o){let[n,s]=Nn(e,t);return hm(r,n,s,Qb(o),r.RGBA,o.textureTypeHalfFloat)}function iI(r,e,t){return mt(r,()=>r.bindBuffer(r.ARRAY_BUFFER,t)),Hb(r,e,"clipSpacePos",t,3,20,0)&&Hb(r,e,"uv",t,2,20,12)}function aI(r,e,t,o,n,s){mt(r,()=>r.bindTexture(r.TEXTURE_2D,e));let i,a,l;n instanceof Uint8Array?(i=new Uint8Array(t*o*4),a=r.UNSIGNED_BYTE,l=r.RGBA):(i=new Float32Array(t*o*4),a=r.FLOAT,l=s.internalFormatPackedFloat),i.set(n),L().getNumber("WEBGL_VERSION")===2?mt(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t,o,r.RGBA,a,i)):mt(r,()=>r.texImage2D(r.TEXTURE_2D,0,l,t,o,0,r.RGBA,a,i)),mt(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function lI(r,e,t){mt(r,()=>r.bindTexture(r.TEXTURE_2D,e)),t.data instanceof Uint8Array?L().getNumber("WEBGL_VERSION")===2?mt(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,t.width,t.height,r.RGBA,r.UNSIGNED_BYTE,t.data)):mt(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,t.width,t.height,0,r.RGBA,r.UNSIGNED_BYTE,t.data)):L().getNumber("WEBGL_VERSION")===2?mt(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,t)):mt(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,t)),mt(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function uI(r,e,t,o){let n=r.createBuffer();mt(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,n));let a=4*4*e*t;return mt(r,()=>r.bufferData(r.PIXEL_PACK_BUFFER,a,r.STREAM_READ)),mt(r,()=>r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,0)),mt(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,null)),n}function cI(r,e,t){let o=r,n=new Float32Array(t);return o.bindBuffer(o.PIXEL_PACK_BUFFER,e),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function pI(r,e,t,o){let[n,s]=Il(e,t),i=4,a=new Uint8Array(CT(e*t,i));return mt(r,()=>r.readPixels(0,0,n,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function mI(r,e,t,o,n,s,i,a){let l=r,u=new Float32Array(vT(s,i));return l.bindBuffer(l.PIXEL_PACK_BUFFER,e),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,u),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),u}function fI(r,e,t){let o=new Float32Array(e*t*4);return mt(r,()=>r.readPixels(0,0,t,e,r.RGBA,r.FLOAT,o)),o}var tp=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=L().getNumber("WEBGL_VERSION");if(e!=null?(this.gl=e,wT(t,e)):this.gl=oo(t),e=this.gl,L().getNumber("WEBGL_VERSION")===2){let s=e;this.createVertexArray=()=>mt(s,()=>s.createVertexArray()),this.bindVertexArray=i=>mt(s,()=>s.bindVertexArray(i)),this.deleteVertexArray=i=>mt(s,()=>s.deleteVertexArray(i)),this.getVertexArray=()=>mt(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(e!=null){let s=e.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>mt(e,()=>s.createVertexArrayOES()),this.bindVertexArray=i=>mt(e,()=>s.bindVertexArrayOES(i)),this.deleteVertexArray=i=>mt(e,()=>s.deleteVertexArrayOES(i)),this.getVertexArray=()=>mt(e,()=>e.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),L().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=cm(this.gl,s),ho(this.gl,i))this.textureHalfFloatExtension=cm(this.gl,i);else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),ho(this.gl,n))this.colorBufferHalfFloatExtension=cm(this.gl,n);else if(L().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",ho(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(ho(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=QT(this.gl),this.indexBuffer=tI(this.gl),this.framebuffer=RT(this.gl),this.textureConfig=um(this.gl,this.textureHalfFloatExtension)}get debug(){return L().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let e=this.gl;mt(e,()=>e.finish()),mt(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),mt(e,()=>e.deleteFramebuffer(this.framebuffer)),mt(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),mt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),mt(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),eI(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),rI(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),oI(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),lI(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,o,n){this.throwIfDisposed(),aI(this.gl,e,t,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),sI(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),nI(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Kb(this.gl,this.framebuffer),this.outputTexture=null),mt(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,o){return this.downloadMatrixDriver(e,()=>pI(this.gl,t,o,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,o,n,s,i){return mI(this.gl,e,t,o,n,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return cI(this.gl,e,t)}createBufferFromTexture(e,t,o){this.bindTextureToFrameBuffer(e);let n=uI(this.gl,t,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,o;if(L().getBool("WEBGL_FENCE_API_ENABLED")){let n=e,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),o=()=>{let i=n.clientWaitSync(s,0,0);return i===n.ALREADY_SIGNALED||i===n.CONDITION_SATISFIED},t=s}else L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(t=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(t,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:t,isFencePassed:o}}downloadMatrixFromPackedTexture(e,t,o){return this.downloadMatrixDriver(e,()=>fI(this.gl,t,o))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader==null&&(this.vertexShader=JT(t));let o=IT(t);mt(t,()=>t.attachShader(o,this.vertexShader)),mt(t,()=>t.attachShader(o,e)),kT(t,o);let n=Object.assign(o,{vao:this.createVertexArray()});return this.debug&&Qh(t,n),n}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;mt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),iI(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(mt(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Qh(this.gl,this.program),mt(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,o=!0){return this.throwIfDisposed(),o?_T(this.gl,e,t):FT(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),mt(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,o){this.throwIfDisposed(),this.throwIfNoProgram(),OT(this.gl,e,t,o)}setOutputMatrixTexture(e,t,o){this.setOutputMatrixTextureDriver(e,o,t)}setOutputPackedMatrixTexture(e,t,o){this.throwIfDisposed();let[n,s]=Nn(t,o);this.setOutputMatrixTextureDriver(e,n,s)}setOutputMatrixWriteRegion(e,t,o,n){this.setOutputMatrixWriteRegionDriver(o,e,n,t)}setOutputPackedMatrixWriteRegion(e,t,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Qh(this.gl,this.program),pm(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let t=this.getVertexArray();console.assert(t===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}mt(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),mt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=cm(this.gl,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let t=this.gl,o=this.getQueryTimerExtensionWebGL2();t.endQuery(o.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}waitForQueryAndGetTime(e){return B(this,null,function*(){return yield b.repeatedTry(()=>this.disposed||this.isQueryAvailable(e,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(e,L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})}getQueryTime(e,t){if(t===0)return null;if(t===2){let o=this.gl;return o.getQueryParameter(e,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(e,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(e,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(e,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=E4(this.itemsToPoll.map(t=>t.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:o}=this.itemsToPoll[t];o()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let o;"setTimeoutCustom"in L().platform&&(o=L().platform.setTimeoutCustom.bind(L().platform)),b.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,o)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),td(this.gl,e,this.framebuffer),this.debug&&pm(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(td(this.gl,this.outputTexture,this.framebuffer),this.debug&&pm(this.gl)):Kb(this.gl,this.framebuffer)}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let o=t();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(e,t,o){this.throwIfDisposed();let n=this.gl;td(n,e,this.framebuffer),this.debug&&pm(n),this.outputTexture=e,mt(n,()=>n.viewport(0,0,t,o)),mt(n,()=>n.scissor(0,0,t,o))}setOutputMatrixWriteRegionDriver(e,t,o,n){this.throwIfDisposed(),mt(this.gl,()=>this.gl.scissor(e,t,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function E4(r){let e=0;for(;e<r.length&&r[e]();++e);return e-1}var $w={};Zt($w,{addImpl:()=>rw,bincountImpl:()=>op,bincountReduceImpl:()=>ud,bitwiseAndImpl:()=>ow,castImpl:()=>ew,ceilImpl:()=>nw,concatImpl:()=>cd,equalImpl:()=>sw,expImpl:()=>aw,expm1Impl:()=>uw,floorDivImpl:()=>pw,floorImpl:()=>cw,gatherNdImpl:()=>pd,gatherV2Impl:()=>md,greaterEqualImpl:()=>fw,greaterImpl:()=>mw,lessEqualImpl:()=>dw,lessImpl:()=>hw,linSpaceImpl:()=>fd,logImpl:()=>gw,maxImpl:()=>hd,maximumImpl:()=>xw,minimumImpl:()=>yw,multiplyImpl:()=>dm,negImpl:()=>bw,notEqualImpl:()=>ww,prodImpl:()=>Cw,raggedGatherImpl:()=>dd,raggedRangeImpl:()=>gd,raggedTensorToTensorImpl:()=>xd,rangeImpl:()=>yd,rsqrtImpl:()=>Sw,scatterImpl:()=>Jo,sigmoidImpl:()=>UI,simpleAbsImpl:()=>tw,sliceImpl:()=>Tw,sparseFillEmptyRowsImpl:()=>bd,sparseReshapeImpl:()=>wd,sparseSegmentReductionImpl:()=>sp,sqrtImpl:()=>qI,squaredDifferenceImpl:()=>Iw,staticRegexReplaceImpl:()=>kw,stridedSliceImpl:()=>Cd,stringNGramsImpl:()=>vd,stringSplitImpl:()=>Sd,stringToHashBucketFastImpl:()=>Nd,subImpl:()=>Aw,tileImpl:()=>Td,topKImpl:()=>Id,transposeImpl:()=>np,uniqueImpl:()=>kd});function Z(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>{t!=null&&b.assert(t.dtype!=="complex64",()=>`${e} does not support complex64 tensors in the CPU backend.`)})}function tw(r){let e=new Float32Array(r.length);for(let t=0;t<r.length;++t)e[t]=Math.abs(r[t]);return e}var A4=r=>{let{x:e}=r.inputs,t=r.backend;Z(e,"abs");let o=new Float32Array(b.sizeFromShape(e.shape)),n=t.data.get(e.dataId).values;return o=tw(n),t.makeOutput(o,e.shape,e.dtype)},hI={kernelName:ei,backendName:"cpu",kernelFunc:A4};function Pt(r){return(e,t,o,n,s)=>{let i=I.assertAndGetBroadcastShape(e,t),a=i.length,l=b.computeStrides(i),u=b.sizeFromShape(i),c=b.getTypedArrayFromDType(s,u),p=e.length,m=t.length,f=b.computeStrides(e),h=b.computeStrides(t),g=I.getBroadcastDims(e,i),d=I.getBroadcastDims(t,i);if(g.length+d.length===0)for(let x=0;x<c.length;++x)c[x]=r(o[x%o.length],n[x%n.length]);else for(let x=0;x<c.length;++x){let y=b.indexToLoc(x,a,l),w=y.slice(-p);g.forEach($=>w[$]=0);let C=b.locToIndex(w,p,f),T=y.slice(-m);d.forEach($=>T[$]=0);let A=b.locToIndex(T,m,h);c[x]=r(o[C],n[A])}return[c,i]}}function Ke(r){let{inputs:e,backend:t}=r,{real:o,imag:n}=e,s=t.data.get(o.dataId).values,i=t.data.get(n.dataId).values,a=t.makeTensorInfo(o.shape,"complex64"),l=t.data.get(a.dataId);return l.complexTensorInfos={real:t.makeTensorInfo(o.shape,"float32",s),imag:t.makeTensorInfo(n.shape,"float32",i)},a}var dI={kernelName:ru,backendName:"cpu",kernelFunc:Ke};function ep(r,e,t="float32"){if(t==="complex64"){let n=ep(r,e,"float32"),s=ep(r,e,"float32");return Ke({inputs:{real:n,imag:s},backend:r})}let o=b.makeZerosTypedArray(b.sizeFromShape(e),t);return r.makeTensorInfo(e,t,o)}function yr(r){let{inputs:e,backend:t}=r,{x:o}=e;return t.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var gI={kernelName:cn,backendName:"cpu",kernelFunc:yr};function ko(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.data.get(o.dataId).complexTensorInfos.real,s=t.data.get(n.dataId).values;return t.makeTensorInfo(n.shape,n.dtype,s)}var xI={kernelName:Fu,backendName:"cpu",kernelFunc:ko};function ew(r,e,t,o){if(o==="int32"){let n=Int32Array.from(r);return[e,"int32",n]}if(o==="bool"){let n=b.toTypedArray([0],t),[s,i]=Pt((a,l)=>a!==l?1:0)(e,[],r,n,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${t} to ${o}`)}function Eo(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return yr({inputs:{x:n},backend:t});let c=ep(t,n.shape,n.dtype),p=Eo({inputs:{x:n},backend:t,attrs:{dtype:"float32"}}),m=Ke({inputs:{real:p,imag:c},backend:t});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),m}if(n.dtype==="complex64"){let c=ko({inputs:{input:n},backend:t}),p=Eo({inputs:{x:c},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(c),p}if(!b.hasEncodingLoss(n.dtype,s)){let c=yr({inputs:{x:n},backend:t});return{dataId:c.dataId,shape:c.shape,dtype:s}}let i=t.data.get(n.dataId).values,[a,l,u]=ew(i,n.shape,n.dtype,s);return t.makeTensorInfo(a,l,u)}var yI={kernelName:un,backendName:"cpu",kernelFunc:Eo};function Vt(r,e,t,o){return t==null?({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;Z([i,a],r);let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=i.dtype==="string"?I.fromUint8ToStringArray(u):u,m=i.dtype==="string"?I.fromUint8ToStringArray(c):c,f=o||i.dtype,[h,g]=e(i.shape,a.shape,p,m,f);return l.makeTensorInfo(g,f,h)}:({inputs:n,backend:s})=>{let{a:i,b:a}=n,l=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let u=Eo({inputs:{x:i},backend:l,attrs:{dtype:"complex64"}}),c=l.data.get(u.dataId),p=c.complexTensorInfos.real,m=c.complexTensorInfos.imag,f=l.data.get(p.dataId).values,h=l.data.get(m.dataId).values,g=Eo({inputs:{x:a},backend:l,attrs:{dtype:"complex64"}}),d=l.data.get(g.dataId),x=d.complexTensorInfos.real,y=d.complexTensorInfos.imag,w=l.data.get(x.dataId).values,C=l.data.get(y.dataId).values,[T,A,$]=t(i.shape,a.shape,f,h,w,C),_=l.makeTensorInfo($,"float32",T),O=l.makeTensorInfo($,"float32",A),z=Ke({inputs:{real:_,imag:O},backend:l});return l.disposeIntermediateTensorInfo(u),l.disposeIntermediateTensorInfo(g),l.disposeIntermediateTensorInfo(_),l.disposeIntermediateTensorInfo(O),z}else{let u=l.data.get(i.dataId).values,c=l.data.get(a.dataId).values,p=o||i.dtype,[m,f]=e(i.shape,a.shape,u,c,p);return l.makeTensorInfo(f,p,m)}}}function rp(r){return(e,t,o,n,s,i)=>{let a=I.assertAndGetBroadcastShape(e,t),l=b.sizeFromShape(a),u=a.length,c=b.computeStrides(a),p=b.getTypedArrayFromDType("float32",l),m=b.getTypedArrayFromDType("float32",l),f=I.getBroadcastDims(e,a),h=I.getBroadcastDims(t,a),g=I.mergeRealAndImagArrays(o,n),d=I.mergeRealAndImagArrays(s,i),x=e.length,y=b.computeStrides(e),w=t.length,C=b.computeStrides(t);if(f.length+h.length===0)for(let T=0;T<p.length;T++){let A=T%g.length,$=T%d.length,_=r(g[A*2],g[A*2+1],d[$*2],d[$*2+1]);p[T]=_.real,m[T]=_.imag}else for(let T=0;T<p.length;T++){let A=b.indexToLoc(T,u,c),$=A.slice(-x);f.forEach(G=>$[G]=0);let _=b.locToIndex($,x,y),O=A.slice(-w);h.forEach(G=>O[G]=0);let z=b.locToIndex(O,w,C),V=r(g[_*2],g[_*2+1],d[z*2],d[z*2+1]);p[T]=V.real,m[T]=V.imag}return[p,m,a]}}var rw=Pt((r,e)=>r+e),$4=rp((r,e,t,o)=>({real:r+t,imag:e+o})),In=Vt(Bo,rw,$4),bI={kernelName:Bo,backendName:"cpu",kernelFunc:In};function op(r,e,t,o,n){let s=b.sizeFromShape(o),i=b.makeZerosTypedArray(n,t);for(let a=0;a<r.length;a++){let l=r[a];if(l<0)throw new Error("Input x must be non-negative!");l>=n||(s>0?i[l]+=e[a]:i[l]+=1)}return i}function ud(r,e,t,o=!1){let n=r.shape[0],s=r.shape[1],i=ft([n,t],e.dtype);for(let a=0;a<n;a++)for(let l=0;l<s;l++){let u=r.get(a,l);if(u<0)throw new Error("Input x must be non-negative!");u>=t||(o?i.set(1,a,u):e.size>0?i.set(i.get(a,u)+e.get(a,l),a,u):i.set(i.get(a,u)+1,a,u))}return i}var ow=Pt((r,e)=>r&e),D4=Vt(La,ow),wI={kernelName:La,backendName:"cpu",kernelFunc:D4};function tr(r){return(e,t,o)=>{let n=b.getArrayFromDType(t,e.length);for(let s=0;s<e.length;++s)n[s]=r(e[s],o);return n}}function vt(r,e,t){let o=tr(e);return Wr(r,o,t)}function Wr(r,e,t){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;Z(i,r);let a=s,l=a.data.get(i.dataId).values,u;if(i.dtype==="string"){if(!Array.isArray(l))throw new Error("String tensor's value was not an instance of Array");u=I.fromUint8ToStringArray(l)}else u=l;let c=t||i.dtype,p=e(u,c,n);return a.makeTensorInfo(i.shape,c,p)}}var nw=tr(r=>Math.ceil(r)),R4=Wr(Wn,nw),CI={kernelName:Wn,backendName:"cpu",kernelFunc:R4};function cd(r,e,t,o){let n=b.getArrayFromDType(t,b.sizeFromShape(e));if(o&&t!=="string"){let s=0;r.forEach(i=>{let a=b.sizeFromShape(i.shape);n.set(i.vals,s),s+=a})}else{let s=0;r.forEach(i=>{let a=t==="string"?I.fromUint8ToStringArray(i.vals):i.vals,l=0;for(let u=0;u<i.shape[0];++u){let c=u*e[1]+s;for(let p=0;p<i.shape[1];++p)n[c+p]=a[l++]}s+=i.shape[1]})}return n}var sw=Pt((r,e)=>r===e?1:0),iw=Vt(Pa,sw,null,"bool"),vI={kernelName:Pa,backendName:"cpu",kernelFunc:iw};var aw=tr(r=>Math.exp(r)),lw=Wr(Yn,aw,"float32"),SI={kernelName:Yn,backendName:"cpu",kernelFunc:lw};var uw=tr(r=>Math.expm1(r)),_4=Wr(Zn,uw),NI={kernelName:Zn,backendName:"cpu",kernelFunc:_4};var cw=tr(r=>Math.floor(r)),F4=Wr(Jn,cw),TI={kernelName:Jn,backendName:"cpu",kernelFunc:F4};var pw=Pt((r,e)=>Math.floor(r/e)),O4=Vt(Qn,pw,null,"int32"),II={kernelName:Qn,backendName:"cpu",kernelFunc:O4};function pd(r,e,t,o,n,s,i,a,l){let u=ft([o,s],t);for(let c=0;c<o;c++){let p=[],m=0;for(let f=0;f<n;f++){let h=r[c*n+f];m+=h*i[f],p.push(h)}if(m<0||m>=l/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let f=0;f<s;f++)u.values[c*s+f]=e.get(...e.indexToLoc(m*s+f))}return u}function md(r,e,t){let o=ft(t,r.dtype);for(let n=0;n<o.size;++n){let i=o.indexToLoc(n).slice(),a=i[0],l=i[2],u=e.locToIndex([a,l]);i[2]=e.values[u];let c=r.locToIndex(i);0<=c&&c<r.values.length&&(o.values[n]=r.values[c])}return o}var mw=Pt((r,e)=>r>e?1:0),L4=Vt(za,mw,null,"bool"),kI={kernelName:za,backendName:"cpu",kernelFunc:L4};var fw=Pt((r,e)=>r>=e?1:0),P4=Vt(ts,fw,null,"bool"),EI={kernelName:ts,backendName:"cpu",kernelFunc:P4};var hw=Pt((r,e)=>r<e?1:0),z4=Vt(Ma,hw,null,"bool"),AI={kernelName:Ma,backendName:"cpu",kernelFunc:z4};var dw=Pt((r,e)=>r<=e?1:0),M4=Vt(Ba,dw,null,"bool"),$I={kernelName:Ba,backendName:"cpu",kernelFunc:M4};function fd(r,e,t){let o=(e-r)/(t-1),n=b.makeZerosTypedArray(t,"float32");n[0]=r;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var gw=tr(r=>Math.log(r)),B4=Wr(ns,gw),DI={kernelName:ns,backendName:"cpu",kernelFunc:B4};function hd(r,e,t,o){let n=b.getTypedArrayFromDType(o,b.sizeFromShape(t));for(let s=0;s<n.length;++s){let i=s*e,a=r[i];for(let l=0;l<e;++l){let u=r[i+l];(Number.isNaN(u)||u>a)&&(a=u)}n[s]=a}return n}var xw=Pt((r,e)=>Math.max(r,e)),V4=Vt(is,xw),RI={kernelName:is,backendName:"cpu",kernelFunc:V4};var yw=Pt((r,e)=>Math.min(r,e)),G4=Vt(as,yw),_I={kernelName:as,backendName:"cpu",kernelFunc:G4};var dm=Pt((r,e)=>r*e),W4=rp((r,e,t,o)=>({real:r*t-e*o,imag:r*o+e*t})),$l=Vt(us,dm,W4),FI={kernelName:us,backendName:"cpu",kernelFunc:$l};function bw(r,e,t){let o=b.createScalarValue(-1,t);return dm([],e,o,r,t)}function U4(r){let{inputs:e,backend:t}=r,{x:o}=e;Z(o,"neg");let n=t.data.get(o.dataId).values,[s,i]=bw(n,o.shape,o.dtype);return t.makeTensorInfo(i,o.dtype,s)}var OI={kernelName:Ei,backendName:"cpu",kernelFunc:U4};var ww=Pt((r,e)=>r!==e?1:0),H4=Vt(Ua,ww,null,"bool"),LI={kernelName:Ua,backendName:"cpu",kernelFunc:H4};function np(r,e,t,o,n){let s=e.length,i=b.sizeFromShape(e),a=b.computeStrides(e),l=b.computeStrides(n),u=b.getTypedArrayFromDType(t,b.sizeFromShape(n));for(let c=0;c<i;++c){let p=b.indexToLoc(c,s,a),m=new Array(p.length);for(let h=0;h<m.length;h++)m[h]=p[o[h]];let f=b.locToIndex(m,s,l);u[f]=r[c]}return u}function Ce(r){let{inputs:e,attrs:t,backend:o}=r,{x:n}=e,{perm:s}=t;Z(n,"transpose");let i=n.shape.length,a=new Array(i);for(let p=0;p<a.length;p++)a[p]=n.shape[s[p]];let l=o.data.get(n.dataId).values,u=np(l,n.shape,n.dtype,s,a);return{dataId:o.write(u,a,n.dtype),shape:a,dtype:n.dtype}}var PI={kernelName:mn,backendName:"cpu",kernelFunc:Ce};function Cw(r,e,t,o){let[n,s]=I.computeOutAndReduceShapes(r,o),i=Le(e,"int32"),a=b.makeZerosTypedArray(b.sizeFromShape(n),i),l=b.sizeFromShape(s);for(let u=0;u<a.length;++u){let c=u*l,p=1;for(let m=0;m<l;++m)p*=t[c+m];a[u]=p}return{outVals:a,outShape:n,outDtype:i}}function K4(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;Z(n,"prod");let a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=I.getAxesPermutation(l,a),c=l,p=n,m=[];u!=null&&(p=Ce({inputs:{x:n},backend:t,attrs:{perm:u}}),m.push(p),c=I.getInnerMostAxes(c.length,a));let f=t.data.get(p.dataId).values,{outVals:h,outShape:g,outDtype:d}=Cw(p.shape,p.dtype,f,c),x=g;return i&&(x=I.expandShapeToKeepDim(g,l)),m.forEach(y=>t.disposeIntermediateTensorInfo(y)),t.makeTensorInfo(x,d,h)}var zI={kernelName:Fi,backendName:"cpu",kernelFunc:K4};function q4(r,e,t){r.forEach((o,n)=>{if(o<0||o>=t){let s=b.indexToLoc(n,e.length,b.computeStrides(e)).join(",");throw new Error(`indices[${s}] = ${o} is not in [0, ${t})`)}})}function j4(r,e){for(let t=0;t<r.length;++t){let o=r[t],n=t===r.length-1?e:r[t+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>n)throw new Error("Ragged splits must not point past values");for(let s=1;s<o.length;++s)if(o[s-1]>o[s])throw new Error("Ragged splits must be sorted in ascending order")}}function X4(r,e,t,o){let n=[],s=0,i=e.length-1+t.length,a=new Array(i).fill(null).map(()=>[0]);j4(t,o);let l=1;for(let u=0;u<e.length-1;++u){l*=e[u];let c=e[u+1];for(let p=1;p<l+1;++p)a[u].push(p*c)}for(let u=0;u<r.length;++u){let c=r[u],p=r[u]+1;for(let m=0;m<t.length;++m){let f=t[m],h=m+e.length-1;if(h>=0){let g=a[h],d=g[g.length-1]-f[c];for(let x=c;x<p;++x)a[h].push(f[x+1]+d)}c=f[c],p=f[p]}p!==c&&(n.push([c,p]),s+=p-c)}return{outSplits:a,valueSlices:n,numValues:s}}function Y4(r){let e=[];for(let t=0;t<r.length;++t){let o=r[t].length,n=b.getArrayFromDType("int32",o);e.push(n),r[t].forEach((s,i)=>n[i]=s)}return e}function MI(r,e){let t=r.slice(0,e);for(;t.length<e;)t.push(1);for(let o=e;o<r.length;o++)t[e-1]*=r[o];return t}function Z4(r,e,t,o,n,s){let i=MI(e,2)[1],a=MI(s,2)[1],l=0;for(let u of t)for(let c=u[0];c<u[1];++c){for(let p=0;p<o;++p)n[l*a+p]=r[c*i+p];++l}}function J4(r,e,t,o,n){let s=e.slice();s[0]=n;let i=b.getArrayFromDType(t,b.sizeFromShape(s)),a=r.length,l=a===0?0:a/e[0];return Z4(r,e,o,l,i,s),[i,s]}function dd(r,e,t,o,n,s,i,a){if(r.length===0)throw new Error("paramsNestedSplits must be non empty");if(e[0].length===0)throw new Error("Split tensors must not be scalars");let l=e[0][0]-1;if(q4(s,i,l),o.length===0)throw new Error("params.rank must be nonzero");let u=o[0],{outSplits:c,valueSlices:p,numValues:m}=X4(s,i,r,u),f=Y4(c),h=J4(t,o,n,p,m);return[f,h[0],h[1]]}var BI=2147483647;function gd(r,e,t,o,n,s,i){if(e.length>1)throw new Error("starts must be a scalar or vector");if(n.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");let a=e.length===0,l=n.length===0,u=i.length===0,c=[];a||c.push(e[0]),l||c.push(n[0]),u||c.push(i[0]);for(let d=1;d<c.length;++d)if(c[d]!==c[d-1])throw new Error("starts, limits, and deltas must have the same shape");let p=c.length===0?1:c[0],m=b.getArrayFromDType("int32",p+1);m[0]=0;for(let d=0;d<p;++d){let x=a?r[0]:r[d],y=l?o[0]:o[d],w=u?s[0]:s[d];if(w===0)throw new Error("Requires delta != 0");let C;if(w>0&&y<x||w<0&&y>x)C=0;else if(C=Math.ceil(Math.abs((y-x)/w)),C>BI)throw new Error(`Requires ((limit - start) / delta) <= ${BI}`);m[d+1]=m[d]+C}let f=m[p],h=b.getArrayFromDType(t,f),g=0;for(let d=0;d<p;++d){let x=m[d+1]-m[d],y=a?r[0]:r[d],w=u?s[0]:s[d];for(let C=0;C<x;++C)h[g++]=y,y+=w}return[m,h]}var Ao=I.RowPartitionType,vw=class r{constructor(e,t,o,n,s,i,a,l,u,c){this.shape=e,this.shapeShape=t,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=l,this.rowPartitionValuesShapes=u,this.rowPartitionTypes=I.getRowPartitionTypesHelper(c),this.raggedRank=I.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===Ao.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===Ao.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(e){let t=this.getRowPartitionTensor(e-1);switch(this.getRowPartitionTypeByDimension(e-1)){case Ao.VALUE_ROWIDS:return r.getMaxWidthValueRowID(t);case Ao.ROW_SPLITS:return r.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${Ao[this.getRowPartitionTypeByDimension(e-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let o=0;for(let n=0;n<t-1;++n){let s=e[n+1]-e[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let o=0,n=e[0],s=0;for(let i=1;i<t;++i){let a=e[i];a!==n&&(n=a,s=Math.max(i-o,s),o=i)}return Math.max(t-o,s)}tensorShapeFromTensor(e,t,o=!0){if(t.length===0){if(e[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return GI(e,o)}calculateOutputSize(e){let t=this.valuesShape,o=this.defaultValueShape;I.validateDefaultValueShape(o,t);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=I.combineRaggedTensorToTensorShapes(this.raggedRank,n,t);i[0]<0&&(i[0]=e);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(e,t,o){let n=Math.min(e,o),s=[],i=0;for(let a=0;a<n;++a,i+=t)s.push(i);for(let a=n;a<e;++a)s.push(-1);return b.assert(s.length===e,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(e,t,o,n){let s=e.length,i=[];for(let a=0;a<s-1;++a){let l=e[a+1]-e[a],u=Math.min(n,l),c=t[a];c===-1&&(u=0);for(let p=0;p<u;++p)i.push(c),c+=o;for(let p=0;p<l-u;++p)i.push(-1)}if(s>0&&i.length!==e[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(e,t,o,n){let s=e.length,i=[];if(s===0)return[];let a=0,l=e[0];if(l>=t.length)throw new Error(`Got currentValueRowId=${l}, which is not less than ${t.length}`);let u=t[l];i.push(u);for(let c=1;c<s;++c){let p=e[c];if(p===l)u>=0&&(++a,a<n?u+=o:u=-1);else{if(a=0,l=p,p>=t.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${t.length}`);u=t[p]}i.push(u)}if(i.length!==e.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(e,t,o,n){let s=this.getRowPartitionTensor(e),i=this.getRowPartitionTypeByDimension(e);switch(i){case Ao.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,t,o,n);case Ao.ROW_SPLITS:if(s.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(s,t,o,n);default:throw new Error(`Unsupported partition type: ${Ao[i]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let t=this.rowPartitionTypes[0];switch(t){case Ao.FIRST_DIM_SIZE:return e[0];case Ao.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Ao.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Ao[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let t=this.getFirstDimensionSize(),o=this.calculateOutputSize(t),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let l=n.length-2;l>=0;--l)n[l]=n[l+1]*o[l+1];let s=GI(o,!1),i=b.getArrayFromDType(this.valuesDType,b.sizeFromShape(s));if(n[0]*o[0]>0){let l=this.calculateFirstParentOutputIndex(t,n[0],o[0]);for(let u=1;u<=this.raggedRank;++u)l=this.calculateOutputIndex(u-1,l,n[u],o[u]);this.setOutput(this.raggedRank,l,i,s)}return[s,i]}setOutput(e,t,o,n){if(o.length===0)return;let s=this.values,i=o,a=n.slice();a=a.slice(e+1);let l=b.sizeFromShape(a),u=t.length,c=this.defaultValue;if(c.length!==l&&c.length!==1){let h=this.defaultValueShape;M(()=>{let g=R(c,h);c=yn(g,a).dataSync()})}let p=0,m=0,f=0;for(let h=0;h<=u;++h){let g=h<u?t[h]:-1;if(g===f){++f;continue}if(m<f){let d=s.subarray(p*l),x=i.subarray(m*l),y=(f-m)*l;VI(x,d,y)}if(h>=u){let d=o.length;g=Math.floor(d/l)}if(g>f)if(this.defaultValue.length===1)i.subarray(f*l,g*l).fill(this.defaultValue[0]),f=g;else for(;g>f;){let d=i.slice(f*l);VI(d,c,l),++f}g<0?(p=h+1,m=f):(p=h,m=f,f=m+1)}}};function VI(r,e,t){for(let o=0;o<t;o++)r[o]=e[o]}function GI(r,e){let t=[];for(let o of r){if(o<0){if(!e)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}t.push(o)}return t}function xd(r,e,t,o,n,s,i,a,l,u){return new vw(r,e,t,o,n,s,i,a,l,u).compute()}function yd(r,e,t,o){let n=r===e,s=r<e&&t<0,i=e<r&&t>1;if(n||s||i)return b.makeZerosTypedArray(0,o);let a=Math.abs(Math.ceil((e-r)/t)),l=b.makeZerosTypedArray(a,o);e<r&&t===1&&(t=-1),l[0]=r;for(let u=1;u<l.length;u++)l[u]=l[u-1]+t;return l}var Sw=tr(r=>1/Math.sqrt(r)),Q4=Wr(ds,Sw),WI={kernelName:ds,backendName:"cpu",kernelFunc:Q4};function Jo(r,e,t,o,n,s,i,a,l,u){let c=[o/n,n],p=r.values,m=e.values;if(o===0)return ft(t,e.dtype);let f=l instanceof Ut?l:ft(c,e.dtype);typeof l=="string"||typeof l=="number"?f.values.fill(l):typeof l=="boolean"&&f.values.fill(+l);for(let h=0;h<s;h++){let g=[],d=0;for(let x=0;x<i;x++){let y=p[h*i+x];g.push(y),d+=y*a[x]}if(d<0||d>=o/n)throw new Error(`Invalid indices: ${g} does not index into ${t}`);for(let x=0;x<n;x++)u?f.values[d*n+x]+=m[h*n+x]:f.values[d*n+x]=e.rank===0?m[0]:m[h*n+x]}return f}var UI=tr(r=>1/(1+Math.exp(-r))),Nw=vt(ws,r=>1/(1+Math.exp(-r))),HI={kernelName:ws,backendName:"cpu",kernelFunc:Nw};function Tw(r,e,t,o,n){let s=Qe.isSliceContinous(o,e,t),i=b.sizeFromShape(t),a=b.computeStrides(o);if(s){let p=Qe.computeFlatOffset(e,a);return n==="string"?r.slice(p,p+i):r.subarray(p,p+i)}let l=n==="string"?I.fromUint8ToStringArray(r):r,u=ft(o,n,l),c=ft(t,n);for(let p=0;p<c.size;++p){let m=c.indexToLoc(p),f=m.map((h,g)=>h+e[g]);c.set(u.get(...f),...m)}return n==="string"?I.fromStringArrayToUint8(c.values):c.values}function $o(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,size:i}=o;Z(n,"slice");let[a,l]=Qe.parseSliceParams(n,s,i);Qe.assertParamsValid(n,a,l);let u=t.data.get(n.dataId).values,c=Tw(u,a,l,n.shape,n.dtype);return t.makeTensorInfo(l,n.dtype,c)}var KI={kernelName:Bi,backendName:"cpu",kernelFunc:$o};function bd(r,e,t,o,n,s,i){let a=e[0],l=s[0],u=new Array(l),c=new Array(a),p=e[1];if(l===0){if(a!==0)throw new Error(I.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let d=b.getArrayFromDType(t,0),x=b.getArrayFromDType(n,0);return[d,[0,p],x,u,c]}let m=!0,f=0,h=new Array(l).fill(0);for(let d=0;d<a;++d){let x=r[d*p];if(x<0)throw new Error(I.getSparseFillEmptyRowsNegativeIndexErrorMessage(d,x));if(x>=l)throw new Error(I.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(d,x,l));++h[x],m=m&&x>=f,f=x}let g=!0;for(let d=0;d<l;++d){let x=h[d]===0;u[d]=x,g=g&&!x,h[d]=Math.max(h[d],1),d>0&&(h[d]+=h[d-1])}if(g&&m){let d=r,x=o;for(let y=0;y<a;++y)c[y]=y;return[d,[a,p],x,u,c]}else{let d=h[l-1],x=b.getArrayFromDType(t,d*p),y=b.getArrayFromDType(n,d),w=new Array(l).fill(0);for(let C=0;C<a;++C){let T=r[C*p],A=w[T],$=(T===0?0:h[T-1])+A;w[T]++;for(let _=0;_<p;++_)x[$*p+_]=r[C*p+_];y[$]=o[C],c[C]=$}for(let C=0;C<l;++C)if(w[C]===0){let A=C===0?0:h[C-1];x[A*p+0]=C;for(let $=1;$<p;++$)x[A*p+$]=0;y[A]=i}return[x,[d,p],y,u,c]}}function wd(r,e,t,o,n){let s=b.sizeFromShape(o),i=e[0],a=n.length,l=[],u=1,c=-1;for(let d=0;d<a;++d){let x=n[d];if(x===-1){if(c!==-1)throw new Error(I.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(c,d));c=d,l.push(1)}else{if(x<0)throw new Error(I.getSparseReshapeNegativeOutputDimErrorMessage(d,x));u*=x,l.push(x)}}if(c!==-1){if(u<=0)throw new Error(I.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let d=Math.trunc(s/u);if(u*d!==s)throw new Error(I.getSparseReshapeInputOutputMultipleErrorMessage(o,l));l[c]=d}if(b.sizeFromShape(l)!==s)throw new Error(I.getSparseReshapeInputOutputMismatchErrorMessage(o,l));let m=o.length,f=[];if(m>0){f[m-1]=1;for(let d=m-2;d>=0;--d)f[d]=f[d+1]*o[d+1]}let h=[];if(a>0){h[a-1]=1;for(let d=a-2;d>=0;--d)h[d]=h[d+1]*l[d+1]}let g=b.getArrayFromDType(t,i*a);for(let d=0;d<i;++d){let x=0;for(let y=0;y<m;++y)x+=r[d*m+y]*f[y];for(let y=0;y<a;++y)g[d*a+y]=Math.trunc(x/h[y]),x%=h[y]}return[g,[i,a],l]}function sp(r,e,t,o,n,s=!1,i=0){let a=o.length,l=[e[0],r.length/e[0]],u=l[1],p=a>0?n[a-1]+1:0;if(p<0)throw new Error(I.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=e.slice();m[0]=p;let f=m.reduce((w,C)=>w*C,1),h=b.getArrayFromDType(t,f);if(a===0)return p>0&&h.fill(i),[h,m];if(p<=0)throw new Error(I.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let g=0,d=1,x=0,y=n[g];for(;;){let w=0;if(d<a){if(w=n[d],y===w){++d;continue}if(y>=w)throw new Error(I.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(y<0||y>=p)throw new Error(I.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(y,p));y>x&&h.fill(i,x*u,y*u);for(let C=g;C<d;++C){let T=o[C];if(T<0||T>=l[0])throw new Error(I.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(C,o[C],l[0]));for(let A=0;A<u;A++)h[y*u+A]+=r[T*u+A]}if(s)for(let C=0;C<u;C++)h[y*u+C]/=d-g;if(g=d,++d,x=y+1,y=w,d>a)break}return x<p&&h.fill(i,x*u,p*u),[h,m]}var qI=tr(r=>Math.sqrt(r)),tH=vt(vs,r=>Math.sqrt(r)),jI={kernelName:vs,backendName:"cpu",kernelFunc:tH};var Iw=Pt((r,e)=>{let t=r-e;return t*t}),eH=Vt(Ss,Iw),XI={kernelName:Ss,backendName:"cpu",kernelFunc:eH};var kw=tr((r,e)=>{let{pattern:t,replaceGlobal:o,rewrite:n}=e;return r.replace(new RegExp(t,o?"g":""),n)}),rH=Wr(Ha,kw),YI={kernelName:Ha,backendName:"cpu",kernelFunc:rH};function Cd(r,e,t,o){let n=ft(r,e.dtype);for(let s=0;s<n.size;s++){let i=n.indexToLoc(s),a=new Array(i.length);for(let l=0;l<a.length;l++)a[l]=i[l]*t[l]+o[l];n.set(e.get(...a),...i)}return n}var Ew=class{constructor(e,t,o,n,s,i){this.separator=b.encodeString(e),this.nGramWidths=t,this.leftPad=b.encodeString(o),this.rightPad=b.encodeString(n),this.padWidth=s,this.preserveShort=i}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let o=this.getPadWidth(t);return Math.max(0,e+2*o-t+1)}createNGrams(e,t,o,n,s,i){for(let a=0;a<s;++a){let l=this.getPadWidth(i),u=Math.max(0,l-a),c=Math.max(0,l-(s-(a+1))),p=i-(u+c),m=t+(u>0?0:a-l),f=0;f+=u*this.leftPad.length;for(let y=0;y<p;++y)f+=e[m+y].length;f+=c*this.rightPad.length;let h=u+c+p-1;f+=h*this.separator.length,o[n+a]=new Uint8Array(f);let g=o[n+a],d=0,x=y=>y.forEach(w=>g[d++]=w);for(let y=0;y<u;++y)x(this.leftPad),x(this.separator);for(let y=0;y<p-1;++y)x(e[m+y]),x(this.separator);if(p>0){x(e[m+p-1]);for(let y=0;y<c;++y)x(this.separator),x(this.rightPad)}else{for(let y=0;y<c-1;++y)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(e,t){let o=e.length,n=t.length;if(n>0){let l=t[0];if(l!==0)throw new Error(`First split value must be 0, got ${l}`);for(let u=1;u<n;++u){let c=t[u]>=l;if(c=c&&t[u]<=o,!c)throw new Error(`Invalid split value ${t[u]}, must be in [${l}, ${o}]`);l=t[u]}if(l!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${l}`)}let s=n-1,i=b.getArrayFromDType("int32",n);if(o===0||n===0){let l=new Array(o);for(let u=0;u<=s;++u)i[u]=0;return[l,i]}i[0]=0;for(let l=1;l<=s;++l){let u=t[l]-t[l-1],c=0;this.nGramWidths.forEach(p=>{c+=this.getNumNGrams(u,p)}),this.preserveShort&&u>0&&c===0&&(c=1),i[l]=i[l-1]+c}let a=new Array(i[s]);for(let l=0;l<s;++l){let u=t[l],c=i[l];if(this.nGramWidths.forEach(p=>{let m=t[l+1]-t[l],f=this.getNumNGrams(m,p);this.createNGrams(e,u,a,c,f,p),c+=f}),this.preserveShort&&c===i[l]){let p=t[l+1]-t[l];if(p===0)continue;let m=p+2*this.padWidth;this.createNGrams(e,u,a,c,1,m)}}return[a,i]}};function vd(r,e,t,o,n,s,i,a){return new Ew(t,o,n,s,i,a).compute(r,e)}function oH(r,e,t,o){if(!r.length)return;if(e.length===0){for(let s=0;s<r.length;++s)o.push(r.subarray(s,s+1));return}if(e.length===1){let s=e[0],i=r.indexOf(s);for(;i!==-1;){let a=r.subarray(0,i);(!t||a.length!==0)&&o.push(a),r=r.subarray(i+1),i=r.indexOf(s)}(!t||r.length!==0)&&o.push(r);return}let n=0;for(let s=0;s<r.length+1;s++)if(s===r.length||e.indexOf(r[s])!==-1){let i=r.subarray(n,s);(!t||i.length!==0)&&o.push(i),n=s+1}}function Sd(r,e,t){let o=r.length,n=[],s=0,i=0,a=new Array(o);for(let m=0;m<o;++m){let f=n.length;oH(r[m],e,t,n);let h=n.length-f;a[m]=h,s+=h,i=Math.max(i,h)}let l=b.getArrayFromDType("int32",s*2),u=new Array(s),c=[o,i],p=0;for(let m=0;m<o;++m)for(let f=0;f<a[m];++f)l[p*2]=m,l[p*2+1]=f,u[p]=n[p],++p;return[l,u,c]}function Nd(r,e){let t=b.getArrayFromDType("int32",r.length);for(let o=0;o<r.length;++o)t[o]=b.fingerPrint64(r[o]).modulo(e).getLowBitsUnsigned();return t}var Aw=Pt((r,e)=>r-e),nH=rp((r,e,t,o)=>({real:r-t,imag:e-o})),gm=Vt(Ns,Aw,nH),ZI={kernelName:Ns,backendName:"cpu",kernelFunc:gm};function Td(r,e){let t=new Array(r.rank);for(let n=0;n<t.length;n++)t[n]=r.shape[n]*e[n];let o=ft(t,r.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),i=new Array(r.rank);for(let l=0;l<i.length;l++)i[l]=s[l]%r.shape[l];let a=r.locToIndex(i);o.values[n]=r.values[a]}return o}var xm=(r,e)=>{let t=e.value-r.value;return t===0?r.index-e.index:t};function JI(r,e,t=0,o=r.length-1){for(;o>t;){if(o-t>600){let a=o-t+1,l=e-t+1,u=Math.log(a),c=.5*Math.exp(2*u/3),p=.5*Math.sqrt(u*c*(a-c)/a)*Math.sign(l-a/2),m=Math.max(t,Math.floor(e-l*c/a+p)),f=Math.min(o,Math.floor(e+(a-l)*c/a+p));JI(r,e,m,f)}let n=r[e],s=t,i=o;for(b.swap(r,t,e),xm(r[o],n)>0&&b.swap(r,t,o);s<i;){for(b.swap(r,s,i),s++,i--;xm(r[s],n)<0;)s=s+1;for(;xm(r[i],n)>0;)i=i-1}xm(r[t],n)===0?b.swap(r,t,i):(i=i+1,b.swap(r,i,o)),i<=e&&(t=i+1),e<=i&&(o=i-1)}}function Id(r,e,t,o,n){let s=e[e.length-1],[i,a]=[r.length/s,s],l=b.getTypedArrayFromDType(t,i*o),u=b.getTypedArrayFromDType("int32",i*o);for(let p=0;p<i;p++){let m=p*a,f=r.subarray(m,m+a),h=new Array(f.length);f.forEach((y,w)=>h[w]={value:y,index:w}),o<h.length&&(JI(h,o),h=h.slice(0,o)),n&&h.sort(xm);let g=p*o,d=l.subarray(g,g+o),x=u.subarray(g,g+o);for(let y=0;y<o;y++)d[y]=h[y].value,x[y]=h[y].index}let c=e.slice();return c[c.length-1]=o,[ft(c,t,l),ft(c,"int32",u)]}function kd(r,e,t,o){let n=b.parseAxisParam(e,t)[0],s=[1,t[0],1];for(let h=0;h<n;h++)s[0]*=t[h];s[1]=t[n];for(let h=n+1;h<t.length;h++)s[2]*=t[h];let i=new Map,a=new Int32Array(t[n]),l=new Ut(s,o,r),u=[],c=s[0]===1&&s[2]===1;for(let h=0;h<t[n];h++){let g;if(c)g=r[h].toString();else{let x=[];for(let y=0;y<s[0];y++)for(let w=0;w<s[2];w++)x.push(l.get(y,h,w));g=x.join(",")}let d=i.get(g);if(d!=null)a[h]=d;else{let x=i.size;i.set(g,x),a[h]=x,u.push(h)}}let p=s.slice();p[1]=i.size;let m=new Ut(p,o);u.forEach((h,g)=>{for(let d=0;d<s[0];d++)for(let x=0;x<s[2];x++)m.set(l.get(d,h,x),d,g,x)});let f=t.slice();return f[n]=p[1],{outputValues:m.values,outputShape:f,indices:a}}var{addImpl:QI,bincountImpl:Ed,bincountReduceImpl:t1,bitwiseAndImpl:e1,castImpl:r1,ceilImpl:o1,concatImpl:n1,equalImpl:s1,expImpl:i1,expm1Impl:a1,floorImpl:l1,gatherNdImpl:u1,gatherV2Impl:c1,greaterImpl:p1,greaterEqualImpl:m1,lessImpl:f1,lessEqualImpl:h1,linSpaceImpl:d1,logImpl:g1,maxImpl:x1,maximumImpl:y1,minimumImpl:b1,multiplyImpl:w1,negImpl:C1,notEqualImpl:v1,prodImpl:S1,raggedGatherImpl:N1,raggedRangeImpl:T1,raggedTensorToTensorImpl:I1,rangeImpl:k1,rsqrtImpl:E1,scatterImpl:A1,sigmoidImpl:$1,simpleAbsImpl:Ad,sliceImpl:D1,sparseFillEmptyRowsImpl:R1,sparseReshapeImpl:_1,sparseSegmentReductionImpl:$d,sqrtImpl:F1,staticRegexReplaceImpl:O1,stridedSliceImpl:L1,stringNGramsImpl:P1,stringSplitImpl:z1,stringToHashBucketFastImpl:M1,subImpl:B1,tileImpl:V1,topKImpl:G1,transposeImpl:Dl,uniqueImpl:W1}=$w;function Dw(r,e){return["x","y","z","w","u","v"].slice(0,e).map(t=>`${r}.${t}`)}function $e(r,e){return e===1?[r]:Dw(r,e)}function U1(r,e){if(r===1)return"rc";let t="";for(let o=0;o<r;o++)t+=e[o],o<r-1&&(t+=",");return t}var Dd=class{constructor(e){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=jt(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let t=$e("rc",this.rank),o=kt(this.rank),n=this.getOutOfBoundsCondition(t),s=this.getSetup(t),i=this.getOutput(t);this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let o=0;o<=1;o++)for(let n=0;n<=1;n++){let s=`${o===0?"r":"rp1"}, ${n===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)s=`${e[e.length-1-i]},`+s;t.push(s)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let t="";for(let o=this.rank-2;o<this.rank;o++)t+=`${e[o]} >= ${this.enableShapeUniforms?`outShape[${o}]`:this.outputShape[o]}`,o<this.rank-1&&(t+="||");return t}getSetup(e){if(this.rank===1)return"";let t=e.slice(-2),o=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],n=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${o};
      bool rEdge = rp1 >= ${n};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}};var ip=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${sH(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?jc():qc(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":e[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":e[2]};

        ${o}

        setOutput(result);
      }
    `}};function sH(r,e){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${e?WT(["r","c","d"],"inputShape"):Zo(["r","c","d"],r)}
      return ivec3(r, c, d);
    }
  `}var Rd=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,o){let n=K1(t,o),s=q1(e,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=H1(e,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let l=this.freeTextures[s].pop();return this.usedTextures[s].push(l),l}let a;return n===xr.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):n===xr.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):n===xr.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):n===xr.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):n===xr.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(e,t,o,n){if(this.freeTextures==null)return;let s=K1(o,n),i=q1(t,s,n);i in this.freeTextures||(this.freeTextures[i]=[]);let a=H1(t,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),l=L().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");l!==-1&&this._numBytesAllocated>l?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(e),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let u=this.usedTextures[i],c=u&&u.indexOf(e);if(c==null||c<0)throw new Error("Cannot release a texture that was never provided by this texture manager");u[c]=u[u.length-1],u.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(t=>{this.gpgpu.deleteMatrixTexture(t.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function iH(r,e){let t=r;if(e===t.R32F)return 4;if(e===t.R16F)return 2;if(e===t.RGBA32F)return 16;if(e===r.RGBA)return 16;if(e===t.RGBA16F)return 8;if(e===t.RGBA8)return 4;throw new Error(`Unknown internal format ${e}`)}function H1(r,e,t,o,n){let s=aH(e,o),i;if(n){let[l,u]=Nn(r[0],r[1]);i=l*u}else{let[l,u]=Il(r[0],r[1]);i=l*u}let a=iH(t,s);return i*a}function aH(r,e){switch(r){case xr.PACKED_2X2_FLOAT32:return Jb(e);case xr.PACKED_2X2_FLOAT16:return Qb(e);case xr.UNPACKED_FLOAT32:return Xb(e);case xr.UNPACKED_FLOAT16:return Yb(e);case xr.PACKED_4X1_UNSIGNED_BYTE:return Zb(e);default:throw new Error(`Unknown physical texture type ${r}`)}}function lH(r){return L().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?r?xr.PACKED_2X2_FLOAT32:xr.UNPACKED_FLOAT32:r?xr.PACKED_2X2_FLOAT16:xr.UNPACKED_FLOAT16}function K1(r,e){if(r===vr.UPLOAD)return xr.PACKED_2X2_FLOAT32;if(r===vr.RENDER||r==null)return lH(e);if(r===vr.DOWNLOAD||r===vr.PIXELS)return xr.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${r}`)}function q1(r,e,t){return`${r[0]}_${r[1]}_${e}_${t}`}var lr=class{constructor(e,t){this.variableNames=["A"],this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},Ue="if (isnan(x)) return x;",j1="return x;",Rw="return abs(x);";var X1="return (x >= 0.0) ? x : (exp(x) - 1.0);",Y1=Ue+`
  return (x < 0.0) ? 0.0 : x;
`,Z1=Ue+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,kn="return x;",J1="return 1.0 / (1.0 + exp(-1.0 * x));";var tk="return x;",ek=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,rk=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,ok=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,nk="return 1.0 / (1.0 + exp(-1.0 * x));",Ur=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var _d=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length);let t=e.length,o=$e("rc",t),n=kt(t),s=U1(t,o),i=o.slice(-2),a=t<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var cH=gr.whereImpl,pH=1e-7,mH=1e-4,Fd={};function fH(r){return r in Fd||(Fd[r]={}),Fd[r]}var hH=L().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),dH=600;function gH(){return L().global.screen==null?1024:L().global.screen.height*L().global.screen.width*window.devicePixelRatio*dH/1024/1024}var sk=(()=>{class r extends Fn{nextDataId(){return r.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!L().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let o;if(t!=null){if(t instanceof tp)o=t;else{let n=oo(L().getNumber("WEBGL_VERSION"),t);o=new tp(n)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let n=oo(L().getNumber("WEBGL_VERSION"));o=new tp(n),this.binaryCache=fH(L().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=o,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Rd(this.gpgpu),this.numMBBeforeWarning=gH(),this.texData=new Ra(this,vo())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,o,n,s,i,a){let l=this.makeTensorInfo(o,n),u=this.texData.get(l.dataId);u.isPacked=!1,u.texture={texture:t,texShape:[s,i]},u.texShape=[s,i];let c=mm(o),p=new fm(c,!1,a),m=this.runWebGLProgram(p,[l],n,[[s,i]]);return m.shape=o,u.texture=null,this.disposeIntermediateTensorInfo(l),m.dataId}write(t,o,n){if((L().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||L().getBool("DEBUG"))&&this.checkNumericalProblems(t),n==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let s={id:this.nextDataId()};return this.texData.set(s,{shape:o,dtype:n,values:t,usage:vr.UPLOAD,refCount:1}),s}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let o=this.texData.get(t);o.refCount++}decRef(t){if(this.texData.has(t)){let o=this.texData.get(t);o.refCount--}}move(t,o,n,s,i){if(L().getBool("DEBUG")&&this.checkNumericalProblems(o),s==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:n,dtype:s,values:o,usage:vr.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let o=this.texData.get(t),{values:n,dtype:s,complexTensorInfos:i,slice:a,shape:l,isPacked:u}=o;if(a!=null){let f;u?f=new Ur(l,kn):f=new lr(l,kn);let h=this.runWebGLProgram(f,[{dataId:t,shape:l,dtype:s}],s),g=this.readSync(h.dataId);return this.disposeIntermediateTensorInfo(h),g}if(n!=null)return this.convertAndCacheOnCPU(t);if(s==="string")return n;let c=this.activeTimers!=null,p;c&&(p=b.now());let m;if(s==="complex64"){let f=this.readSync(i.real.dataId),h=this.readSync(i.imag.dataId);m=I.mergeRealAndImagArrays(f,h)}else m=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=b.now()-p),this.convertAndCacheOnCPU(t,m)}read(t){return B(this,null,function*(){if(this.pendingRead.has(t)){let g=this.pendingRead.get(t);return new Promise(d=>g.push(d))}let o=this.texData.get(t),{values:n,shape:s,slice:i,dtype:a,complexTensorInfos:l,isPacked:u}=o;if(i!=null){let g;u?g=new Ur(s,kn):g=new lr(s,kn);let d=this.runWebGLProgram(g,[{dataId:t,shape:s,dtype:a}],a),x=this.read(d.dataId);return this.disposeIntermediateTensorInfo(d),x}if(n!=null)return this.convertAndCacheOnCPU(t);if(L().getBool("DEBUG")&&!L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&L().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,p;if(a!=="complex64"&&L().get("WEBGL_BUFFER_SUPPORTED")){p=this.decode(t);let g=this.texData.get(p.dataId);c=this.gpgpu.createBufferFromTexture(g.texture.texture,...lm(s))}this.pendingRead.set(t,[]),a!=="complex64"&&(yield this.gpgpu.createAndWaitForFence());let m;if(a==="complex64"){let g=yield Promise.all([this.read(l.real.dataId),this.read(l.imag.dataId)]),d=g[0],x=g[1];m=I.mergeRealAndImagArrays(d,x)}else if(c==null)m=this.getValuesFromTexture(t);else{let g=b.sizeFromShape(s);m=this.gpgpu.downloadFloat32MatrixFromBuffer(c,g)}if(p!=null&&this.disposeIntermediateTensorInfo(p),c!=null){let g=this.gpgpu.gl;mt(g,()=>g.deleteBuffer(c))}let f=this.convertAndCacheOnCPU(t,m),h=this.pendingRead.get(t);return this.pendingRead.delete(t),h.forEach(g=>g(f)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&vo().removeDataId(t,this),this.pendingDeletes--),f})}readToGPU(t,o={}){let n=this.texData.get(t),{values:s,shape:i,slice:a,dtype:l,isPacked:u,texture:c}=n;if(l==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(a!=null){let h;u?h=new Ur(i,kn):h=new lr(i,kn);let g=this.runWebGLProgram(h,[{dataId:t,shape:i,dtype:l}],l),d=this.readToGPU(g,o);return this.disposeIntermediateTensorInfo(g),d}if(c==null)throw s!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let p=this.decode(t,o.customTexShape),m=vo().makeTensorFromTensorInfo(p),f=this.texData.get(p.dataId);return Object.assign({tensorRef:m},f.texture)}bufferSync(t){let o=this.readSync(t.dataId);if(t.dtype==="string")try{let n=o.map(s=>b.decodeString(s));return ft(t.shape,t.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ft(t.shape,t.dtype,o)}checkNumericalProblems(t){if(t!=null)for(let o=0;o<t.length;o++){let n=t[o];if(!ST(n))throw L().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:o,dtype:n,isPacked:s}=this.texData.get(t),i=b.sizeFromShape(o);if(L().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let f=this.decode(t),h=this.texData.get(f.dataId),g=this.gpgpu.downloadMatrixFromPackedTexture(h.texture.texture,...lm(o)).subarray(0,i);return this.disposeIntermediateTensorInfo(f),g}let a=L().getBool("WEBGL_PACK")&&s===!0,l=a?mm(o):o,u=a?new ad(l):new id(l),c=this.runWebGLProgram(u,[{shape:l,dtype:n,dataId:t}],"float32"),p=this.texData.get(c.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(p.texture.texture,p.texShape[0],p.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),m}timerAvailable(){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let o=this.activeTimers,n=[],s=!1;this.programTimersStack==null?(this.programTimersStack=n,s=!0):this.activeTimers.push(n),this.activeTimers=n,t();let i=b.flatten(this.activeTimers.map(u=>u.query)).filter(u=>u!=null),a=b.flatten(this.activeTimers.map(u=>u.name)).filter(u=>u!=null);this.activeTimers=o,s&&(this.programTimersStack=null);let l={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return B(this,null,function*(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let u=yield Promise.all(i);l.kernelMs=b.sum(u),l.getExtraProfileInfo=()=>u.map((c,p)=>({name:a[p],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else l.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,l})}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:b.now(),endMs:null}}endTimer(t){return L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=b.now(),t)}getQueryTime(t){return B(this,null,function*(){if(L().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let o=t;return o.endMs-o.startMs})}disposeData(t,o=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(o?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!o&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:n}=this.texData.get(t);return n!=null&&(this.disposeData(n.real.dataId,o),this.disposeData(n.imag.dataId,o)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:o,dtype:n,texShape:s,usage:i,isPacked:a,slice:l}=this.texData.get(t),u=l&&l.origDataId||t,c=this.dataRefCount.get(u);c>1?this.dataRefCount.set(u,c-1):(this.dataRefCount.delete(u),o!=null&&(this.numBytesInGPU-=this.computeBytes(s,n),this.textureManager.releaseTexture(o,s,i,a)));let p=this.texData.get(t);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,o=hH){return L().getBool("WEBGL_CPU_FORWARD")&&t.every(n=>this.texData.get(n.dataId).texture==null&&b.sizeFromShape(n.shape)<o)}getGPGPUContext(){return this.gpgpu}where(t){I.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let o=t.dataSync();return cH(t.shape,o)}packedUnaryOp(t,o,n){let s=new Ur(t.shape,o),i=this.compileAndRun(s,[t],n);return vo().makeTensorFromTensorInfo(i)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let s=Ad(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,s)}if(L().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Rw,t.dtype);let o=new lr(t.shape,Rw),n=this.compileAndRun(o,[t]);return vo().makeTensorFromTensorInfo(n)}makeTensorInfo(t,o,n){let s;if(o==="string"&&n!=null&&n.length>0&&b.isString(n[0])){let i=n.map(a=>b.encodeString(a));s=this.write(i,t,o)}else s=this.write(n,t,o);return this.texData.get(s).usage=null,{dataId:s,shape:t,dtype:o}}makeOutput(t,o,n){return vo().makeTensorFromTensorInfo(this.makeTensorInfo(t,o,n),this)}unpackTensor(t){let o=new _d(t.shape);return this.runWebGLProgram(o,[t],t.dtype)}packTensor(t){let o=new Dd(t.shape);return this.runWebGLProgram(o,[t],t.dtype,null,!0)}packedReshape(t,o){let n=[ba(t.shape),...wa(t.shape)],s={dtype:t.dtype,shape:n,dataId:t.dataId},i=[ba(o),...wa(o)],a=new ip(i,n),l=!0,u=[n],c=this.runWebGLProgram(a,[s],t.dtype,u,l);return{dataId:c.dataId,shape:o,dtype:c.dtype}}decode(t,o){let n=this.texData.get(t),{isPacked:s,shape:i,dtype:a}=n;if(o!=null){let f=b.sizeFromShape(i),h=o[0]*o[1]*4;b.assert(f<=h,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let l=mm(i),u;s?u=new sd(l):u=new nd(l);let c=!0,p=[o??lm(l)],m=this.runWebGLProgram(u,[{shape:l,dtype:a,dataId:t}],a,p,c,o);return{dtype:a,shape:i,dataId:m.dataId}}runWebGLProgram(t,o,n,s,i=!1,a){let l=this.makeTensorInfo(t.outputShape,n),u=this.texData.get(l.dataId);if(t.packedOutput&&(u.isPacked=!0),t.outPackingScheme===Tl.DENSE){let y=a??lm(t.outputShape);u.texShape=y.map(w=>w*2)}if(t.outTexUsage!=null&&(u.usage=t.outTexUsage),b.sizeFromShape(l.shape)===0)return u.values=b.getTypedArrayFromDType(l.dtype,0),l;let c=[],p=o.map(y=>{if(y.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let w=this.texData.get(y.dataId);if(w.texture==null){if(!t.packedInputs&&b.sizeFromShape(y.shape)<=L().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:y.shape,texData:null,isUniform:!0,uniformValues:w.values};t.packedInputs&&(w.isPacked=!0,w.shape=y.shape)}if(this.uploadToGPU(y.dataId),!!w.isPacked!=!!t.packedInputs)y=w.isPacked?this.unpackTensor(y):this.packTensor(y),c.push(y),w=this.texData.get(y.dataId);else if(w.isPacked&&!kl(w.shape,y.shape)){let C=y,T=y.shape;y.shape=w.shape,y=this.packedReshape(y,T),c.push(y),w=this.texData.get(y.dataId),C.shape=T}return{shape:y.shape,texData:w,isUniform:!1}});this.uploadToGPU(l.dataId);let m={shape:l.shape,texData:u,isUniform:!1},f=ZT(t,p,m),h=this.getAndSaveBinary(f,()=>XT(this.gpgpu,t,p,m)),g=this.activeTimers!=null,d;g&&(d=this.startTimer()),L().get("ENGINE_COMPILE_ONLY")||YT(this.gpgpu,h,p,m,s),c.forEach(y=>this.disposeIntermediateTensorInfo(y)),g&&(d=this.endTimer(d),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(d)}));let x=L().getNumber("WEBGL_FLUSH_THRESHOLD");if(x>0){let y=b.now();y-this.lastGlFlushTime>x&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=y)}if(!L().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&i===!1){let y=this.unpackTensor(l);return this.disposeIntermediateTensorInfo(l),y}return l}compileAndRun(t,o,n,s,i=!1){return n=n||o[0].dtype,this.runWebGLProgram(t,o,n,s,i)}getAndSaveBinary(t,o){return t in this.binaryCache||(this.binaryCache[t]=o()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(L().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(o=>{this.gpgpu.deleteProgram(this.binaryCache[o].webGLProgram),delete this.binaryCache[o]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=M(()=>{if(!L().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=L().getBool("DEBUG");L().set("DEBUG",!1);let o=this.abs(st(1e-8)).dataSync()[0];if(L().set("DEBUG",t),o>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?pH:mH}uploadToGPU(t){let o=this.texData.get(t),{shape:n,dtype:s,values:i,texture:a,usage:l,isPacked:u}=o;if(a!=null)return;let c=this.activeTimers!=null,p;c&&(p=b.now());let m=o.texShape;if(m==null&&(m=LT(n,u),o.texShape=m),i!=null){let f=mm(n),h,g=m[1],d=m[0],x=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(u||!x)&&([g,d]=Nn(m[0],m[1])),u?h=new ld(f,x):h=new fm(f,x);let y=x?[d,g]:m,w=this.makeTensorInfo(y,s),C=this.texData.get(w.dataId);x?C.usage=vr.PIXELS:C.usage=vr.UPLOAD,C.texShape=y,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(w.dataId),g,d,i);let T=[[d,g]],$=this.runWebGLProgram(h,[w],s,T,!0),_=this.texData.get($.dataId);o.texShape=_.texShape,o.isPacked=_.isPacked,o.usage=_.usage,L().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(o.texture=_.texture,o.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(w),c&&(this.uploadWaitMs+=b.now()-p)}else{let f=this.acquireTexture(m,l,s,u);o.texture=f}}convertAndCacheOnCPU(t,o){let n=this.texData.get(t),{dtype:s}=n;return o!=null&&(n.values=xH(o,s)),n.values}acquireTexture(t,o,n,s){if(this.numBytesInGPU+=this.computeBytes(t,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${i} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,o,s)}computeBytes(t,o){return t[0]*t[1]*b.bytesPerElement(o)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}checkCompileCompletionAsync(){return B(this,null,function*(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,o]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(o));return Promise.all(t)}else{for(let[,o]of Object.entries(this.binaryCache)){let n=new Promise(s=>{try{this.checkCompletion_(o),s(!0)}catch(i){throw i}});t.push(n)}return Promise.all(t)}})}checkCompletionAsync_(t){return B(this,null,function*(){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(yield vl(),this.checkCompletionAsync_(t))})}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Ub(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);let{variablesLocations:o,customUniformLocations:n,infLoc:s,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:l,outTexShapeLocation:u}=jb(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=o,t.customUniformLocations=n,t.infLoc=s,t.nanLoc=i,t.outShapeLocation=a,t.outShapeStridesLocation=l,t.outTexShapeLocation=u}}createTensorFromGPUData(t,o,n){t.channels=t.channels||"RGBA";let{texture:s,height:i,width:a,channels:l}=t,u=vo().backend;if(!u.gpgpu.gl.isTexture(s))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let c=u.writeTexture(s,o,n,i,a,l);return vo().makeTensorFromDataId(c,o,n,u)}}return r.nextDataId=0,r})();function xH(r,e){if(e==="float32"||e==="complex64")return r;if(e==="int32"||e==="bool"){let t=e==="int32"?new Int32Array(r.length):new Uint8Array(r.length);for(let o=0;o<t.length;++o)t[o]=Math.round(r[o]);return t}else throw new Error(`Unknown dtype ${e}`)}Yi.isBrowser()&&uf("webgl",()=>new sk,2);var ap=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var Hr=class{constructor(e,t,o){this.variableNames=["A","B"],this.outputShape=I.assertAndGetBroadcastShape(t,o),this.enableShapeUniforms=jt(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var so=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var no=class{constructor(e,t,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=I.assertAndGetBroadcastShape(t,o);let s=this.outputShape.length;this.enableShapeUniforms=jt(s);let i="";if(n)if(s===0||b.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${kt(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let l=$e("coords",s);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${l[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${l[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}};function De(r){let{inputs:e,backend:t}=r,{x:o}=e;return t.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var ik={kernelName:cn,backendName:"webgl",kernelFunc:De};function Kr(r){let{inputs:e,backend:t}=r,{real:o,imag:n}=e,s=t.makeTensorInfo(o.shape,"complex64"),i=t.texData.get(s.dataId),a=De({inputs:{x:o},backend:t}),l=De({inputs:{x:n},backend:t});return i.complexTensorInfos={real:a,imag:l},s}var ak={kernelName:ru,backendName:"webgl",kernelFunc:Kr};var _w="return (a < 0.) ? b * a : a;",Fw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function yH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{alpha:s}=o,i=t.makeTensorInfo([],"float32",b.createScalarValue(s,"float32")),a=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new no(Fw,n.shape,i.shape):new Hr(_w,n.shape,i.shape),l=t.runWebGLProgram(a,[n,i],"float32");return t.disposeIntermediateTensorInfo(i),l}var lk={kernelName:wi,backendName:"webgl",kernelFunc:yH};var Ow="return (a < 0.) ? b * a : a;",Lw=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function bH(r){let{inputs:e,backend:t}=r,{x:o,alpha:n}=e,s=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new no(Lw,o.shape,n.shape):new Hr(Ow,o.shape,n.shape);return t.runWebGLProgram(s,[o,n],"float32")}var uk={kernelName:_i,backendName:"webgl",kernelFunc:bH};var Do="if (isnan(x)) return x;";function dt({opSnippet:r,packedOpSnippet:e,cpuKernelImpl:t,dtype:o}){return({inputs:n,backend:s})=>{let{x:i}=n,a=s,l=o||i.dtype;if(a.shouldExecuteOnCPU([i])&&t!=null){let p=a.texData.get(i.dataId),m=t(p.values,l);return a.makeTensorInfo(i.shape,l,m)}let u=L().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&e!=null,c;return u?c=new Ur(i.shape,e):c=new lr(i.shape,r),a.runWebGLProgram(c,[i],l)}}function Ht({opSnippet:r,packedOpSnippet:e,checkOutOfBounds:t=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:i,backend:a})=>{let{a:l,b:u}=i,c=a;if(o&&l.dtype==="complex64"){let h=c.texData.get(l.dataId),g=c.texData.get(u.dataId),[d,x]=[[h.complexTensorInfos.real,g.complexTensorInfos.real],[h.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(w=>{let[C,T]=w,A={dataId:C.dataId,dtype:C.dtype,shape:l.shape},$={dataId:T.dataId,dtype:T.dtype,shape:u.shape},_=new Hr(r,l.shape,u.shape);return c.runWebGLProgram(_,[A,$],Le(C.dtype,T.dtype))}),y=Kr({inputs:{real:d,imag:x},backend:c});return c.disposeIntermediateTensorInfo(d),c.disposeIntermediateTensorInfo(x),y}let p=s||Le(l.dtype,u.dtype);if((l.dtype==="string"||u.dtype==="string"||c.shouldExecuteOnCPU([l,u]))&&n!=null){let h=c.texData.get(l.dataId).values,g=c.texData.get(u.dataId).values,d=l.dtype==="string"?I.fromUint8ToStringArray(h):h,x=l.dtype==="string"?I.fromUint8ToStringArray(g):g,[y,w]=n(l.shape,u.shape,d,x,p),C=c.makeTensorInfo(w,p),T=c.texData.get(C.dataId);return T.values=y,C}let m=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&e!=null,f;return m?f=new no(e,l.shape,u.shape,t):f=new Hr(r,l.shape,u.shape),c.runWebGLProgram(f,[l,u],p)}}function zs(r,e=!1){if(r==="linear")return e?tk:j1;if(r==="relu")return e?rk:Y1;if(r==="elu")return e?ek:X1;if(r==="relu6")return e?ok:Z1;if(r==="prelu")return e?Lw:Ow;if(r==="leakyrelu")return e?Fw:_w;if(r==="sigmoid")return e?nk:J1;throw new Error(`Activation ${r} has not been implemented for the WebGL backend.`)}var lp=class{constructor(e,t,o,n=!1,s=!1,i=!1,a=null,l=!1,u=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=jt(this.outputShape.length);let c=n?e[1]:e[2],p=Math.ceil(c/2),m=n?"i * 2, rc.y":"rc.y, i * 2",f=s?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",x="";a&&(l?d=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:u?d=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:d=`vec4 activation(vec4 x) {
          ${a}
        }`,x="result = activation(result);");let y=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),l&&this.variableNames.push("preluActivationWeights"),u&&this.variableNames.push("leakyreluAlpha");let w="rc.x",C="rc.x";e[0]<t[0]?w=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(C=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${d}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${w};
        int batchB = ${C};
        for (int i = 0; i < ${p}; i++) {
          vec4 a = getMatrixA(batchA, ${m});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${h[0]} * ${g[0]});
          result += (${h[1]} * ${g[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${y}

        ${x}

        setOutput(result);
      }
    `}};var Pw={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},ym=class{constructor(e,t,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=I.assertAndGetBroadcastShape(t,o),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var ck="return a * b;";function bm(r){let{inputs:e,backend:t}=r,{a:o,b:n}=e,s=I.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let a=t.texData.get(o.dataId),l=t.texData.get(n.dataId),u=new ym(Pw.REAL,o.shape,n.shape),c=new ym(Pw.IMAG,o.shape,n.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:l.complexTensorInfos.real.dataId,dtype:l.complexTensorInfos.real.dtype,shape:n.shape},{dataId:l.complexTensorInfos.imag.dataId,dtype:l.complexTensorInfos.imag.dtype,shape:n.shape}],m=t.runWebGLProgram(u,p,"float32"),f=t.runWebGLProgram(c,p,"float32"),h=Kr({inputs:{real:m,imag:f},backend:t});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),h}if(t.shouldExecuteOnCPU([o,n])){let a=t.texData.get(o.dataId),l=t.texData.get(n.dataId),[u,c]=w1(o.shape,n.shape,a.values,l.values,s),p=t.makeTensorInfo(c,s),m=t.texData.get(p.dataId);return m.values=u,p}let i;return L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new no(ck,o.shape,n.shape):i=new Hr(ck,o.shape,n.shape),t.runWebGLProgram(i,[o,n],s)}var pk={kernelName:us,backendName:"webgl",kernelFunc:bm};function mk(r,e,t){let o=[ba(r.shape),...wa(r.shape)],n={dtype:r.dtype,shape:o,dataId:r.dataId},s=[ba(e),...wa(e)],i=new ip(s,o),a=!0,l=[o],u=t.runWebGLProgram(i,[n],r.dtype,l,a);return{dataId:u.dataId,shape:e,dtype:u.dtype}}function tt(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{shape:s}=o,i=t,a=b.sizeFromShape(n.shape),l=b.inferFromImplicitShape(s,a),u=b.sizeFromShape(l);b.assert(a===u,()=>`The new shape (${l}) has ${u} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let c=i.texData.get(n.dataId);return c.isPacked&&!kl(n.shape,l)&&!(c.texture!==null&&kl(c.shape,l))?mk(n,l,i):(i.incRef(n.dataId),{dataId:n.dataId,shape:l,dtype:n.dtype})}var fk={kernelName:Oi,backendName:"webgl",kernelFunc:tt};var wm=class{constructor(e,t){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=e;this.outputShape=[n,i];let a=Math.floor(o/4)*4,l=o%4,u="sumValue += dot(values, ones);";if(t!=null){let p=1/t;u=`sumValue += dot(values * ${b.isInt(p)?p.toPrecision(2):p}, ones);`}let c="";s%o>0&&(c=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${c}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${u}
        }

        int inIdx = inOffset + ${a};
        if (${l===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${u}
        } else if (${l===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${u}
        } else if (${l===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${u}
        }
        setOutput(sumValue);
      }
    `}};var Od=class{constructor(e,t){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=e;this.outputShape=[n,i];let a="0.0",l="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",l="min"):t==="max"&&(a="-1.0 / 1e-20",l="max");let u=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");let c=Math.floor(o/4)*4,p=o%4,m=`
      if (${t==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${t==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${l}(values, minMaxValue);
        if (${t==="min"} || ${t==="max"}) {
          minMaxValue = ${l}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";t==="all"?(a="1.0",m=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(a="0.0",m=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${m}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${m}
        }
        setOutput(${u});
      }
    `}};function CH(r){let e=[];for(;e.length===0||e[e.length-1].outSize!==1;){let t=e.length?e[e.length-1].outSize:r[1],o=I.computeOptimalWindowSize(t);e.push({inSize:t,windowSize:o,outSize:Math.ceil(t/o)})}return e}function io(r,e,t,o){let n=CH(r.shape),s=r;for(let i=0;i<n.length;i++){let{inSize:a,windowSize:l,outSize:u}=n[i],c,p;t==="mean"?c=i===0?new wm({windowSize:l,inSize:a,batchSize:r.shape[0],outSize:u},a):new wm({windowSize:l,inSize:a,batchSize:r.shape[0],outSize:u}):c=new Od({windowSize:l,inSize:a,batchSize:r.shape[0],outSize:u},t),p=s,s=o.runWebGLProgram(c,[s],e),p.dataId!==r.dataId&&o.disposeIntermediateTensorInfo(p)}return s}var Ld=class{constructor(e,t){this.variableNames=["A"];let o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=e[t[i]];this.outputShape=o,this.rank=o.length;let n=kt(this.rank),s=vH(t);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function vH(r){let e=r.length;if(e>6)throw Error(`Transpose for rank ${e} is not yet supported`);let t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(e);for(let n=0;n<r.length;n++)o[r[n]]=t[n];return o.join()}var Pd=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(e.length);for(let c=0;c<o.length;c++)o[c]=e[t[c]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=kt(this.rank),s=Dw("rc",this.rank),i=new Array(this.rank);for(let c=0;c<t.length;c++)i[t[c]]=s[c];let a=`vec2(${i.slice(-2).join()})`,l=`++${s[this.rank-1]} < ${o[this.rank-1]}`,u=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${n} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${u};
      if(${l}) {
        result[1] = ${u};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${o[this.rank-2]}) {
        result[2] = ${u};
        if(${l}) {
          result[3] = ${u};
        }
      }
      setOutput(result);
    }
    `}};function Ca(r,e,t){let o=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Pd(r.shape,e):new Ld(r.shape,e);return t.runWebGLProgram(o,[r],r.dtype)}function hk(r,e,t,o){let n=e,s=r.shape.length,i=b.parseAxisParam(n,r.shape),a=i,l=I.getAxesPermutation(a,s),u=l!=null,c=r;u&&(c=Ca(r,l,o),a=I.getInnerMostAxes(a.length,s)),I.assertAxesAreInnerMostDims("sum",a,s);let[p,m]=I.computeOutAndReduceShapes(c.shape,a),f=p;t&&(f=I.expandShapeToKeepDim(p,i));let h=b.sizeFromShape(m),d=b.sizeFromShape(r.shape)/h,x=tt({inputs:{x:c},attrs:{shape:[d,h]},backend:o}),y=tl(r.dtype),w=io(x,y,"sum",o),C=tt({inputs:{x:w},attrs:{shape:f},backend:o});return o.disposeIntermediateTensorInfo(x),o.disposeIntermediateTensorInfo(w),u&&o.disposeIntermediateTensorInfo(c),C}function Rl(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o;return hk(n,s,i,t)}var dk={kernelName:Vi,backendName:"webgl",kernelFunc:Rl};function pe(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{perm:s}=o,i=t,a=n.shape.length,l=new Array(a);for(let c=0;c<l.length;c++)l[c]=n.shape[s[c]];let u;if(i.shouldExecuteOnCPU([n])){let p=i.texData.get(n.dataId).values,m=Dl(p,n.shape,n.dtype,s,l);u=i.makeTensorInfo(l,n.dtype);let f=i.texData.get(u.dataId);f.values=m}else u=Ca(n,s,i);return u}var gk={kernelName:mn,backendName:"webgl",kernelFunc:pe};var zw=1e3;function _l({a:r,b:e,transposeA:t,transposeB:o,backend:n,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:l=null}){let u=r.shape.length,c=e.shape.length,p=t?r.shape[u-2]:r.shape[u-1],m=o?e.shape[c-1]:e.shape[c-2],f=t?r.shape[u-1]:r.shape[u-2],h=o?e.shape[c-2]:e.shape[c-1],g=r.shape.slice(0,-2),d=e.shape.slice(0,-2),x=b.sizeFromShape(g),y=b.sizeFromShape(d),C=Jr.assertAndGetBroadcastShape(r.shape.slice(0,-2),e.shape.slice(0,-2)).concat([f,h]);b.assert(p===m,()=>`Error in matMul: inner shapes (${p}) and (${m}) of Tensors with shapes ${r.shape} and ${e.shape} and transposeA=${t} and transposeB=${o} must match.`);let T=t?[x,p,f]:[x,f,p],A=o?[y,h,m]:[y,m,h],$=tt({inputs:{x:r},backend:n,attrs:{shape:T}}),_=tt({inputs:{x:e},backend:n,attrs:{shape:A}}),O=[$,_],z=Math.max(x,y),V=t?$.shape[1]:$.shape[2],G=s!=null,W=i!=null,H=l==="leakyrelu",K=l!=null?zs(l,!0):null,Y=G||W||H||K!=null,J;if((f===1||h===1)&&V>zw&&Y===!1){let Q=$,ot=_;t&&(Q=pe({inputs:{x:$},backend:n,attrs:{perm:[0,2,1]}}),O.push(Q)),o&&(ot=pe({inputs:{x:_},backend:n,attrs:{perm:[0,2,1]}}),O.push(ot));let nt=h!==1,lt=h===1,at=Q;nt&&(at=tt({inputs:{x:Q},backend:n,attrs:{shape:[z,V,1]}}),O.push(at));let pt=h===1?2:1,ut=ot;lt&&(ut=tt({inputs:{x:ot},backend:n,attrs:{shape:[z,1,V]}}),O.push(ut));let ht=bm({inputs:{a:at,b:ut},backend:n});J=Rl({inputs:{x:ht},backend:n,attrs:{axis:pt,keepDims:!0}}),O.push(ht)}else{let Q=Le(r.dtype,e.dtype),ot=new lp(T,A,[z,f,h],t,o,G,K,W,H),nt=[$,_];if(s!=null&&nt.push(s),W&&nt.push(i),H){let lt=n.makeTensorInfo([],"float32",b.createScalarValue(a,"float32"));nt.push(lt),O.push(lt)}J=n.runWebGLProgram(ot,nt,Q)}let X=tt({inputs:{x:J},backend:n,attrs:{shape:C}});O.push(J);for(let Q of O)n.disposeIntermediateTensorInfo(Q);return X}function SH(r){let{inputs:e,backend:t,attrs:o}=r,{a:n,b:s,bias:i,preluActivationWeights:a}=e,{transposeA:l,transposeB:u,activation:c,leakyreluAlpha:p}=o;return _l({a:n,b:s,transposeA:l,transposeB:u,backend:t,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:c})}var xk={kernelName:Ka,backendName:"webgl",kernelFunc:SH};var yk="return abs(x);";function NH(r){let{inputs:e,backend:t}=r,{x:o}=e;if(t.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=t.texData.get(o.dataId),i=Ad(s.values);return t.makeTensorInfo(o.shape,o.dtype,i)}let n;return L().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Ur(o.shape,yk):n=new lr(o.shape,yk),t.runWebGLProgram(n,[o],o.dtype)}var bk={kernelName:ei,backendName:"webgl",kernelFunc:NH};var TH=Ue+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,IH=dt({opSnippet:TH}),wk={kernelName:Ln,backendName:"webgl",kernelFunc:IH};var kH=Ue+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,EH=dt({opSnippet:kH}),Ck={kernelName:Pn,backendName:"webgl",kernelFunc:EH};var vk="return a + b;",AH=Ht({opSnippet:vk,packedOpSnippet:vk,supportsComplex:!0,cpuKernelImpl:QI}),Sk={kernelName:Bo,backendName:"webgl",kernelFunc:AH};var zd=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var Md=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function Bd(r){let{inputs:e,backend:t}=r,o=e;if(o.length===1)return De({inputs:{x:o[0]},backend:t});if(o.length>L().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let l=Math.floor(o.length/2),u=Bd({inputs:o.slice(0,l),backend:t}),c=Bd({inputs:o.slice(l),backend:t});return Bd({inputs:[u,c],backend:t})}let n=o.map(l=>l.dtype).reduce((l,u)=>Le(l,u)),s=o.map(l=>l.shape),a=L().getBool("WEBGL_PACK")?new Md(o[0].shape,s):new zd(o[0].shape,s);return t.runWebGLProgram(a,o,n)}var Nk={kernelName:ri,backendName:"webgl",kernelFunc:Bd};function $H(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=I.getAxesPermutation(u,a),p=n;c!=null&&(p=pe({inputs:{x:n},backend:t,attrs:{perm:c}}),u=I.getInnerMostAxes(u.length,a)),I.assertAxesAreInnerMostDims("all",u,a);let[m,f]=I.computeOutAndReduceShapes(p.shape,u),h=b.sizeFromShape(f),g=tt({inputs:{x:p},backend:t,attrs:{shape:[-1,h]}}),d=io(g,g.dtype,"all",t),x;if(i){let y=I.expandShapeToKeepDim(m,l);x=tt({inputs:{x:d},backend:t,attrs:{shape:y}})}else x=tt({inputs:{x:d},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),c!=null&&t.disposeIntermediateTensorInfo(p),x}var Tk={kernelName:Yl,backendName:"webgl",kernelFunc:$H};function DH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=I.getAxesPermutation(u,a),p=n;c!=null&&(p=pe({inputs:{x:n},backend:t,attrs:{perm:c}}),u=I.getInnerMostAxes(u.length,a)),I.assertAxesAreInnerMostDims("any",u,a);let[m,f]=I.computeOutAndReduceShapes(p.shape,u),h=b.sizeFromShape(f),g=tt({inputs:{x:p},backend:t,attrs:{shape:[-1,h]}}),d=io(g,g.dtype,"any",t),x;if(i){let y=I.expandShapeToKeepDim(m,l);x=tt({inputs:{x:d},backend:t,attrs:{shape:y}})}else x=tt({inputs:{x:d},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),c!=null&&t.disposeIntermediateTensorInfo(p),x}var Ik={kernelName:Zl,backendName:"webgl",kernelFunc:DH};var Vd=class{constructor(e,t,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:i}=e;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=t==="max"?">":"<",l=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${n}; i++) {
          int inIdx = ${l};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};var Gd=class{constructor(e,t,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,b.assert(e.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=e[e.length-1],i=Math.ceil(s/t);this.outputShape=e.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");let a=this.outputShape,l=a.length,u=kt(l),c=$e("coords",l),p,m;if(i===1){m=l+1;let _=kt(m);p=`
        ${_} sourceLocR = ${_}(${c.join()}, 0);
        ++${c[l-1]};
        ${_} sourceLocG = ${_}(${c.join()}, 0);
        ++${c[l-2]};
        ${_} sourceLocA = ${_}(${c.join()}, 0);
        --${c[l-1]};
        ${_} sourceLocB = ${_}(${c.join()}, 0);
        --${c[l-2]};`}else m=l,p=`
        ${u} sourceLocR = coords;
        ++${c[l-1]};
        ${u} sourceLocG = coords;
        ++${c[l-2]};
        ${u} sourceLocA = coords;
        --${c[l-1]};
        ${u} sourceLocB = coords;
        --${c[l-2]};`;let f=["x","y","z","w","u","v"].slice(0,m),h="."+f[m-1],g=f.map(_=>"int "+_),d=$e("sourceLocR",m-1).concat("inIdx.r"),x=$e("sourceLocG",m-1).concat("inIdx.g"),y=$e("sourceLocB",m-1).concat("inIdx.b"),w=$e("sourceLocA",m-1).concat("inIdx.a"),C=o==="max"?"greaterThan":"lessThan",T=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${d.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${y.join()}),
                             getBestIndicesAChannel(${w.join()})));`,A=`vec4(
            getAChannel(${d.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${y.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${w.join()}) : 0.)`,$=n?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${$}
      void main() {
        ${u} coords = getOutputCoords();
        bool hasNextCol = ${c[l-1]} < ${a[l-1]-1};
        bool hasNextRow = ${c[l-2]} < ${a[l-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${h}, sourceLocG${h},
          sourceLocB${h}, sourceLocA${h}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${A};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${T}
          vec4 candidate = ${A};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${C}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function kk(r,e,t,o=null){let n=e.shape[0],s=e.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let i=I.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:n,outSize:Math.ceil(s/i)},l=new Vd(a,t,o==null),u=[e];o!=null&&u.push(o);let c=r.runWebGLProgram(l,u,"int32");if(c.shape[1]===1)return c;let p=kk(r,e,t,c);return r.disposeIntermediateTensorInfo(c),p}function Ek(r,e,t,o=null){let n=o!=null?o.shape:e.shape,s=n[n.length-1],i=I.computeOptimalWindowSize(s),a=new Gd(n,i,t,o==null),l=o==null?[e]:[e,o],u=r.runWebGLProgram(a,l,"int32");if(u.shape.length===e.shape.length){let c=Ek(r,e,t,u);return r.disposeIntermediateTensorInfo(u),c}return u}function Wd(r,e,t,o){let n=[t];if(I.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,e.shape.length),!L().getBool("WEBGL_PACK_REDUCE")||e.shape.length<=2){let s=[],i=r.texData.get(e.dataId),a=i!==null&&i.isPacked,l=e;a&&(l=r.unpackTensor(e),s.push(l));let[u,c]=I.computeOutAndReduceShapes(l.shape,n),p=b.sizeFromShape(c),m=tt({inputs:{x:l},backend:r,attrs:{shape:[-1,p]}});s.push(m);let f=kk(r,m,o);s.push(f);let h=tt({inputs:{x:f},backend:r,attrs:{shape:u}});return s.forEach(g=>r.disposeIntermediateTensorInfo(g)),h}return Ek(r,e,o)}function RH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s}=o,i=b.parseAxisParam(s,n.shape),a=I.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=pe({inputs:{x:n},backend:t,attrs:{perm:a}}),u.push(l),i=I.getInnerMostAxes(i.length,l.shape.length)),I.assertAxesAreInnerMostDims("argMax",[i[0]],l.shape.length);let c=Wd(t,l,i[0],"max");return u.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}var Ak={kernelName:oi,backendName:"webgl",kernelFunc:RH};function _H(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s}=o,i=b.parseAxisParam(s,n.shape),a=I.getAxesPermutation(i,n.shape.length),l=n,u=[];a!=null&&(l=pe({inputs:{x:n},backend:t,attrs:{perm:a}}),u.push(l),i=I.getInnerMostAxes(i.length,l.shape.length)),I.assertAxesAreInnerMostDims("argMin",[i[0]],l.shape.length);let c=Wd(t,l,i[0],"min");return u.forEach(p=>t.disposeIntermediateTensorInfo(p)),c}var $k={kernelName:ni,backendName:"webgl",kernelFunc:_H};var FH=Ue+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,OH=dt({opSnippet:FH}),Dk={kernelName:zn,backendName:"webgl",kernelFunc:OH};var LH=Ue+"return log(x + sqrt(x * x + 1.0));",PH=dt({opSnippet:LH}),Rk={kernelName:Mn,backendName:"webgl",kernelFunc:PH};var zH=Ue+`
  return atan(x);
`,MH=dt({opSnippet:zH}),_k={kernelName:Bn,backendName:"webgl",kernelFunc:MH};var BH=ap+`
  return atan(a, b);
`,VH=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+so+`
  return result;
`,GH=Ht({opSnippet:BH,packedOpSnippet:VH}),Fk={kernelName:Gn,backendName:"webgl",kernelFunc:GH};var WH=Ue+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,UH=dt({opSnippet:WH}),Ok={kernelName:Vn,backendName:"webgl",kernelFunc:UH};var Qo=class{constructor(e,t,o,n=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=e.filterWidth,a=e.strideHeight,l=e.strideWidth,u=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,f=e.padInfo.top,h=e.padInfo.left;this.outputShape=e.outShape;let g=t==="avg",d=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,x=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,y="0.0";if(g||(y="-1.0 / 1e-20"),o){let _=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${l});
        const ivec2 pads = ivec2(${f}, ${h});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${m};
                wC += ${c}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${_} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?d:x:`wR * ${m} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let w="max",C=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(C="avgValue / max(count, 1.0)");let T=Math.floor(i/4)*4,A=i%4,$=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${w}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${l});
      const ivec2 pads = ivec2(${f}, ${h});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${u}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${T}; wC += 4) {
            int xC = xCCorner + wC * ${c};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              getValue(batch, xR, xC + 3 * ${c}, d)
            );

            ${$}
          }

          int xC = xCCorner + ${T};
          if (${A===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${$}
          } else if (${A===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              initializationValue,
              initializationValue
            );

            ${$}
          } else if (${A===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${c}, d),
              getValue(batch, xR, xC + 2 * ${c}, d),
              initializationValue
            );

            ${$}
          }
        }
        setOutput(${C});
      }
    `}},va=class{constructor(e,t,o,n=!1,s=!1){if(this.variableNames=["x"],t==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=e.filterWidth,a=e.strideDepth,l=e.strideHeight,u=e.strideWidth,c=e.dilationDepth,p=e.dilationHeight,m=e.dilationWidth,f=e.effectiveFilterDepth,h=e.effectiveFilterHeight,g=e.effectiveFilterWidth,d=e.padInfo.front,x=e.padInfo.top,y=e.padInfo.left;this.outputShape=e.outShape;let w=t==="avg",C="0.0";if(w||(C="-1.0 / 1e-20"),o){let z=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${l}, ${u});
        const ivec3 pads = ivec3(${d}, ${x}, ${y});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${c}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${g};
                  wC += ${m}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${z} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${n?s?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${h} * ${g} +
                      wR * ${g} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let T="max",A=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t==="avg"&&(A="avgValue / max(count, 1.0)");let $=Math.floor(i/4)*4,_=i%4,O=`
      if (${w}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${T}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${l}, ${u});
      const ivec3 pads = ivec3(${d}, ${x}, ${y});
      const float initializationValue = ${C};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${C});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${c}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${$}; wC += 4) {
              int xC = xCCorner + wC * ${m};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                getValue(batch, xD, xR, xC + 3 * ${m}, ch)
              );

              ${O}
            }

            int xC = xCCorner + ${$};
            if (${_===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${O}
            } else if (${_===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                initializationValue,
                initializationValue
              );

              ${O}
            } else if (${_===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                initializationValue
              );

              ${O}
            }
          }
        }
        setOutput(${A});
      }
    `}};function HH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;Tn(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(I.eitherStridesOrDilationsAreOne(i,u),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=I.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))return De({inputs:{x:n},backend:t});let p=new Qo(c,"avg",!1);return t.runWebGLProgram(p,[n],"float32")}var Lk={kernelName:si,backendName:"webgl",kernelFunc:HH};function KH(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:l,dataFormat:u}=o,c=[1,1,1],p=I.computePool3DInfo(n.shape,s,i,c,a,l,u),m=new va(p,"avg",!1);return t.runWebGLProgram(m,[n],"float32")}var Pk={kernelName:ii,backendName:"webgl",kernelFunc:KH};var Ud=class{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterHeight,o=e.filterWidth,n=e.strideHeight,s=e.strideWidth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterHeight,u=e.effectiveFilterWidth,c=l-1-e.padInfo.top,p=u-1-e.padInfo.left,m=1/(t*o);this.userCode=`
      const ivec2 pads = ivec2(${c}, ${p});
      const float avgMultiplier = float(${m});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${l};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${u};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},Hd=class{constructor(e){this.variableNames=["dy"],this.outputShape=e.inShape;let t=e.filterDepth,o=e.filterHeight,n=e.filterWidth,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,p=e.effectiveFilterDepth,m=e.effectiveFilterHeight,f=e.effectiveFilterWidth,h=p-1-e.padInfo.front,g=m-1-e.padInfo.top,d=f-1-e.padInfo.left,x=1/(t*o*n);this.userCode=`
      const ivec3 pads = ivec3(${h}, ${g}, ${d});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${l}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${m};
              wR += ${u}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${c}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function qH(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],m=I.computePool3DInfo(i.shape,a,l,p,u,c),f=new Hd(m);return t.runWebGLProgram(f,[n],i.dtype)}var zk={kernelName:Ql,backendName:"webgl",kernelFunc:qH};function jH(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s;Tn([n,s],"avgPoolGrad");let{filterSize:a,strides:l,pad:u}=o,c=I.computePool2DInfo(i.shape,a,l,1,u),p=new Ud(c);return t.runWebGLProgram(p,[n],i.dtype)}var Mk={kernelName:Jl,backendName:"webgl",kernelFunc:jH};function XH(r){let{inputs:e,backend:t,attrs:o}=r,{a:n,b:s}=e,{transposeA:i,transposeB:a}=o;return _l({a:n,b:s,transposeA:i,transposeB:a,backend:t})}var Bk={kernelName:ai,backendName:"webgl",kernelFunc:XH};var Kd=class{constructor(e,t,o,n,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],I.assertAndGetBroadcastShape(e,t),I.assertAndGetBroadcastShape(e,o);let a="0.0";n!=null&&(I.assertAndGetBroadcastShape(e,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="1.0";s!=null&&(I.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${l};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var qd=class{constructor(e,t,o,n,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],I.assertAndGetBroadcastShape(e,t),I.assertAndGetBroadcastShape(e,o);let a="vec4(0.0)";n!=null&&(I.assertAndGetBroadcastShape(e,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let l="vec4(1.0)";s!=null&&(I.assertAndGetBroadcastShape(e,s),this.variableNames.push("scale"),l="getScaleAtOutCoords()"),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${l};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var YH=({inputs:r,backend:e,attrs:t})=>{let{x:o,mean:n,variance:s,offset:i,scale:a}=r;b.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),b.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),b.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:l}=t;l==null&&(l=.001);let u=[o,n,s],c=null;i!=null&&(c=i.shape,u.push(i));let p=null;a!=null&&(p=a.shape,u.push(a));let m=L().getBool("WEBGL_PACK_NORMALIZATION")?new qd(o.shape,n.shape,s.shape,c,p,l):new Kd(o.shape,n.shape,s.shape,c,p,l);return e.runWebGLProgram(m,u,u[0].dtype)},Vk={kernelName:yi,backendName:"webgl",kernelFunc:YH};var jd=class{constructor(e){this.variableNames=["source"],this.outputShape=e,this.rank=e.length;let t=kt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=ZH(this.rank),n,s=e.map((i,a)=>`sourceLoc.${Mw[a]} = start[${a}] + coords.${Mw[a]};`);n=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},Mw=["x","y","z","w","u","v"];function ZH(r){if(r===1)return"sourceLoc";if(r<=6)return Mw.slice(0,r).map(e=>"sourceLoc."+e).join(",");throw Error(`Slicing for rank ${r} is not yet supported`)}var Xd=class{constructor(e){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let t=kt(this.rank),o=$e("coords",this.rank),n=$e("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,i=`getChannel(getSource(${n.join()}), ${s})`,a=`
      result.x = ${i};
      if (++${o[this.rank-1]} < ${e[this.rank-1]}) {
        ++${n[this.rank-1]};
        result.y = ${i};
        --${n[this.rank-1]};
      }
    `,l=this.rank===1?"":`
      --${o[this.rank-1]};
      if (++${o[this.rank-2]} < ${e[this.rank-2]}) {
        ++${n[this.rank-2]};
        result.z = ${i};
        if (++${o[this.rank-1]} < ${e[this.rank-1]}) {
          ++${n[this.rank-1]};
          result.w = ${i};
        }
      }
    `,u=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((c,p)=>`start[${p}]`).join()});`:e.map((c,p)=>`${n[p]} = ${o[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${u}
        vec4 result = vec4(0.);
        ${a}
        ${l}
        setOutput(result);
      }
    `}};function JH(r,e,t,o){let n=o.texData.get(r.dataId),s=o.makeTensorInfo(t,r.dtype),i=o.texData.get(s.dataId);Object.assign(i,n),i.refCount=1,i.shape=t,i.dtype=r.dtype;let a=Qe.computeFlatOffset(e,b.computeStrides(r.shape));n.slice&&(a+=n.slice.flatOffset),i.slice={flatOffset:a,origDataId:n.slice&&n.slice.origDataId||r.dataId};let l=o.dataRefCount.get(i.slice.origDataId)||1;return o.dataRefCount.set(i.slice.origDataId,l+1),s}function tn(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,size:i}=o,[a,l]=Qe.parseSliceParams(n,s,i);if(Qe.assertParamsValid(n,a,l),b.sizeFromShape(l)===0)return t.makeTensorInfo(l,n.dtype,[]);if(t.shouldExecuteOnCPU([n])||n.dtype==="string"){let p=t.texData.get(n.dataId),m=D1(p.values,a,l,n.shape,n.dtype);return t.makeTensorInfo(l,n.dtype,m)}let{isPacked:u}=t.texData.get(n.dataId),c=Qe.isSliceContinous(n.shape,a,l);if(u||!c){let p=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Xd(l):new jd(l),m=[a];return t.runWebGLProgram(p,[n],n.dtype,m)}return t.uploadToGPU(n.dataId),JH(n,a,l,t)}var Gk={kernelName:Bi,backendName:"webgl",kernelFunc:tn};var QH=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockShape:s,crops:i}=o;b.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((y,w)=>y*w),l=I.getReshaped(n.shape,s,a),u=I.getPermuted(l.length,s.length),c=I.getReshapedPermuted(n.shape,s,a),p=I.getSliceBeginCoords(i,s.length),m=I.getSliceSize(c,i,s.length),f=[],h=tt({inputs:{x:n},backend:t,attrs:{shape:l}}),g=pe({inputs:{x:h},backend:t,attrs:{perm:u}}),d=tt({inputs:{x:g},backend:t,attrs:{shape:c}}),x=tn({inputs:{x:d},backend:t,attrs:{begin:p,size:m}});return f.push(h),f.push(g),f.push(d),f.forEach(y=>t.disposeIntermediateTensorInfo(y)),x},Wk={kernelName:li,backendName:"webgl",kernelFunc:QH};function tK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,weights:s}=e,{size:i}=o,a=t.readSync(n.dataId),l=t.readSync(s.dataId),u=Ed(a,l,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,u)}var Uk={kernelName:tu,backendName:"webgl",kernelFunc:tK};var eK=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,rK=`
  return float(int(a.r) & int(b.r));
`;function oK(r){let{inputs:e,backend:t}=r,{a:o,b:n}=e,s=L().getBool("WEBGL_PACK_BINARY_OPERATIONS"),i=L().getNumber("WEBGL_VERSION");if(t.shouldExecuteOnCPU([o,n])||i===1){let l=t.texData.get(o.dataId).values,u=t.texData.get(n.dataId).values,[c,p]=e1(o.shape,n.shape,l,u,o.dtype),m=t.makeTensorInfo(p,o.dtype),f=t.texData.get(m.dataId);return f.values=c,m}let a;return s?a=new no(eK,o.shape,n.shape,!1):a=new Hr(rK,o.shape,n.shape),t.runWebGLProgram(a,[o,n],o.dtype)}var Hk={kernelName:La,backendName:"webgl",kernelFunc:oK};function nK(r){let{inputs:e,backend:t}=r,{s0:o,s1:n}=e,s=t.readSync(o.dataId),i=t.readSync(n.dataId),a=I.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return t.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var Kk={kernelName:eu,backendName:"webgl",kernelFunc:nK};var sK="return float(a != b);",Bw=Ht({opSnippet:sK,cpuKernelImpl:v1,dtype:"bool"}),qk={kernelName:Ua,backendName:"webgl",kernelFunc:Bw};function Ms(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.texData.get(o.dataId);return De({inputs:{x:n.complexTensorInfos.real},backend:t})}var jk={kernelName:Fu,backendName:"webgl",kernelFunc:Ms};var iK="return float(int(x));";function Xk(r,e){let t=new lr(r.shape,iK),o=e.runWebGLProgram(t,[r],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function Vw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return De({inputs:{x:n},backend:t});let i=ne(n.shape),a=Vw({inputs:{x:n},backend:t,attrs:{dtype:"float32"}}),l=Kr({inputs:{real:a,imag:i},backend:t});return i.dispose(),t.disposeIntermediateTensorInfo(a),l}if(n.dtype==="complex64"){let i=Ms({inputs:{input:n},backend:t}),a=Vw({inputs:{x:i},backend:t,attrs:{dtype:s}});return t.disposeIntermediateTensorInfo(i),a}if(!b.hasEncodingLoss(n.dtype,s)){let i=De({inputs:{x:n},backend:t});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(t.shouldExecuteOnCPU([n])){let i=t.texData.get(n.dataId).values,[a,l,u]=r1(i,n.shape,n.dtype,s);return t.makeTensorInfo(a,l,u)}if(s==="int32")return Xk(n,t);if(s==="bool"){let i=t.makeTensorInfo([],"bool",b.getTypedArrayFromDType("bool",1)),l=Bw({inputs:{a:n,b:i},backend:t});return t.disposeIntermediateTensorInfo(i),l}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var Yk={kernelName:un,backendName:"webgl",kernelFunc:Vw};var Zk="return ceil(x);",aK=dt({opSnippet:Zk,packedOpSnippet:Zk,cpuKernelImpl:o1}),Jk={kernelName:Wn,backendName:"webgl",kernelFunc:aK};var Yd=class{constructor(e){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var Zd=class{constructor(e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function lK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{clipValueMin:s,clipValueMax:i}=o,a;L().getBool("WEBGL_PACK_CLIP")?a=new Zd(n.shape):a=new Yd(n.shape);let l=[[s],[i]];return t.runWebGLProgram(a,[n],n.dtype,l)}var Qk={kernelName:Un,backendName:"webgl",kernelFunc:lK};var Jd=class{constructor(e){this.variableNames=["real","imag"],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function tE(r,e){return{dataId:e.dataId,dtype:e.dtype,shape:r.shape}}function uK(r){let{inputs:e,backend:t}=r,{x:o}=e,n=t.texData.get(o.dataId),s=new Jd(o.shape),i=[tE(o,n.complexTensorInfos.real),tE(o,n.complexTensorInfos.imag)];return t.runWebGLProgram(s,i,i[0].dtype)}var eE={kernelName:ui,backendName:"webgl",kernelFunc:uK};var Qd=class{constructor(e){this.outputShape=[],this.outputShape=I.computeOutShape(e,1),this.variableNames=e.map((i,a)=>`T${a}`);let t=new Array(e.length-1);t[0]=e[0][1];for(let i=1;i<t.length;i++)t[i]=t[i-1]+e[i][1];let o=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<t.length;i++){let a=t[i-1];o.push(`else if (yC < ${t[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let n=t.length,s=t[t.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var eg=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=I.computeOutShape(e,t);let o=this.outputShape,n=o.length,s=kt(n),i=$e("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=e.map((g,d)=>`T${d}`);let l=new Array(e.length-1);l[0]=e[0][t];for(let g=1;g<l.length;g++)l[g]=l[g-1]+e[g][t];let u=a[t],c=a.slice(-2),p=a.join(),m=`if (${u} < ${l[0]}) {
        return getChannel(
            getT0(${p}), vec2(${c.join()}));
        }`;for(let g=1;g<l.length;g++){let d=l[g-1];m+=`
        if (${u} < ${l[g]}  && ${u} >= ${l[g-1]}) {
          return getChannel(
            getT${g}(${tg(a,u,d)}),
            vec2(${tg(c,u,d)}));
        }`}let f=l.length,h=l[l.length-1];m+=`
        return getChannel(
          getT${f}(${tg(a,u,h)}),
          vec2(${tg(c,u,h)}));`,this.userCode=`
      float getValue(${a.map(g=>"int "+g)}) {
        ${m}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[n-1]} = ${i[n-1]} + 1;
        if (${i[n-1]} < ${o[n-1]}) {
          result.g = getValue(${i});
        }

        ${i[n-2]} = ${i[n-2]} + 1;
        if (${i[n-2]} < ${o[n-2]}) {
          result.a = getValue(${i});
        }

        ${i[n-1]} = ${i[n-1]} - 1;
        if (${i[n-2]} < ${o[n-2]} &&
            ${i[n-1]} < ${o[n-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}};function tg(r,e,t){let o=r.indexOf(e);return r.map((s,i)=>i===o?`${s} - ${t}`:s).join()}function Fl(r){let{inputs:e,backend:t}=r,{input:o}=e,n=t.texData.get(o.dataId);return De({inputs:{x:n.complexTensorInfos.imag},backend:t})}var rE={kernelName:wu,backendName:"webgl",kernelFunc:Fl};function up(r,e,t){let o=r[0].dtype;if(o==="complex64"){let f=r.map(y=>Ms({inputs:{input:y},backend:t})),h=r.map(y=>Fl({inputs:{input:y},backend:t})),g=up(f,e,t),d=up(h,e,t),x=Kr({inputs:{real:g,imag:d},backend:t});return f.forEach(y=>t.disposeIntermediateTensorInfo(y)),h.forEach(y=>t.disposeIntermediateTensorInfo(y)),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),x}let n=t.shouldExecuteOnCPU(r);if(o==="string"&&(n=!0),n){let f=r.map(C=>{let A=[-1,b.sizeFromShape(C.shape.slice(e))];return tt({inputs:{x:C},backend:t,attrs:{shape:A}})}),h=f.map(C=>({vals:t.readSync(C.dataId),shape:C.shape})),g=I.computeOutShape(f.map(C=>C.shape),1),d=f[0].shape[0]===1,x=n1(h,g,o,d),y=I.computeOutShape(r.map(C=>C.shape),e),w=t.makeTensorInfo(y,o,x);return f.forEach(C=>t.disposeIntermediateTensorInfo(C)),w}let s=r.filter(f=>b.sizeFromShape(f.shape)>0),i=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let f=i?new lr(r[0].shape,kn):new Ur(r[0].shape,kn);return t.runWebGLProgram(f,r,o)}let a=L().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>a){let f=[];for(let g=0;g<s.length;g+=a){let d=s.slice(g,g+a);f.push(up(d,e,t))}let h=up(f,e,t);for(let g of f)t.disposeIntermediateTensorInfo(g);return h}if(i){let f=new eg(s.map(h=>h.shape),e);return t.runWebGLProgram(f,s,o)}let{tensors2D:l,outShape:u}=cK(s,e,t),c=new Qd(l.map(f=>f.shape)),p=t.runWebGLProgram(c,l,o);l.forEach(f=>t.disposeIntermediateTensorInfo(f));let m=tt({inputs:{x:p},attrs:{shape:u},backend:t});return t.disposeIntermediateTensorInfo(p),m}function cK(r,e,t){let o=I.computeOutShape(r.map(s=>s.shape),e);return{tensors2D:r.map(s=>tt({inputs:{x:s},attrs:{shape:[-1,b.sizeFromShape(s.shape.slice(e))]},backend:t})),outShape:o}}function Gw(r){let{inputs:e,backend:t,attrs:o}=r,{axis:n}=o,s=b.parseAxisParam(n,e[0].shape)[0],i=e.map(u=>u.shape);I.assertParamsConsistent(i,s);let a=I.computeOutShape(e.map(u=>u.shape),s);if(b.sizeFromShape(a)===0)return t.makeTensorInfo(a,e[0].dtype,[]);let l=e.filter(u=>b.sizeFromShape(u.shape)>0);return l.length===1?De({inputs:{x:l[0]},backend:t}):up(l,s,t)}var oE={kernelName:ci,backendName:"webgl",kernelFunc:Gw};var cp=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=e.outShape;let i=e.padInfo.top,a=e.padInfo.left,l=e.strideHeight,u=e.strideWidth,c=e.dilationHeight,p=e.dilationWidth,m=e.filterHeight,f=e.filterWidth,h=Math.floor(e.inChannels/4)*4,g=e.inChannels%4,d=e.dataFormat==="channelsLast",x=d?1:2,y=d?2:3,w=d?3:1,C="",T="";o&&(n?C=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?C=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:C=`
          float activation(float x) {
            ${o}
          }
        `,T="result = activation(result);");let A=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${C}

      const ivec2 strides = ivec2(${l}, ${u});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${w}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${y}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${m}; wR++) {
          int xR = xRCorner + wR * ${c};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${d}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${g===1}) {

              if (${d}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${g===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${d}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${g===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${d}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${A}
        ${T}
        setOutput(result);
      }
    `}},rg=class{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let t=e.padInfo.front,o=e.padInfo.top,n=e.padInfo.left,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,c=e.dilationWidth,p=e.filterDepth,m=e.filterHeight,f=e.filterWidth,h=Math.floor(e.inChannels/4)*4,g=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${i}, ${a});
      const ivec3 pads = ivec3(${t}, ${o}, ${n});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${l};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m}; wR++) {
            int xR = xRCorner + wR * ${u};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${c};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${g===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${g===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${g===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var pp=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=jt(this.outputShape.length);let i=e.padInfo.left,a=e.strideWidth,l=e.dilationWidth,u=e.filterHeight,c=e.filterWidth,p=c,m=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let d=0;d<c;d++)m+=`
           vec4 xTexelC${d*2};
           int xTexelC${d*2}Ready;
           vec4 xTexelC${d*2+1};
           int xTexelC${d*2+1}Ready;
           vec4 xC${d};`;m+=`
     for (int r = 0; r < ${u}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let d=0;d<c;d++)m+=`
           xTexelC${d*2} = vec4(0.0);
           xTexelC${d*2}Ready = 0;
           xTexelC${d*2+1} = vec4(0.0);
           xTexelC${d*2+1}Ready = 0;
           xC${d} = vec4(0.0);`;m+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let d=0;d<(p+1)/2;d++){let x=d*2;if(m+=`
           xC = xCCorner + ${x*l};
           `,a===1){if(x<c&&(i%2===1?(m+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,l===1&&x>0?m+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:m+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):m+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<c)){let y=i%2===0?b.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(m+=`
                   xCOffset = xC + imod(pads[1], 2) + ${y};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,l>1?m+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:m+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):y===1?m+=`
                     xC${x+1} = xTexelC${x};
                     `:m+=`
                     xCOffset = xC + ${y};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<c&&(i%2===1?(m+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<c&&(m+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(m+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<c&&(m+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<c&&(m+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<c&&(m+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}m+=`
     }
   `,m+=`
     }
   `,m+=`
     }
   `;let f="",h="";o&&(n?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${o}
         }`:s?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${o}
         }`:f=`vec4 activation(vec4 x) {
           ${o}
         }`,h="result = activation(result);");let g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${m}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${g}
         ${h}
         setOutput(result);
       }
     `}};var og=class{constructor(e,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=e,this.enableShapeUniforms=jt(this.outputShape.length);let{dataFormat:o}=t,n=we(),s=o==="channelsLast",i=s?1:2,a=s?2:3,l=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,u="";for(let c=0;c<=1;c++)for(let p=0;p<=1;p++)u+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${c};

          ${l}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${c*2+p}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${u}

        ${n.output} = result;
      }
    `}};function ng(r,e){let t=r.length;return t>=3?e?[...r.slice(0,-3),r[t-3]*r[t-2],r[t-1]]:[...r.slice(0,-3),r[t-3],r[t-2]*r[t-1]]:!e&&t===1&&r[0]>1?[r[0],1]:null}function sg({x:r,filter:e,convInfo:t,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let l=r.shape,u=o.texData.get(r.dataId),c=t.inChannels,p=l[0]*l[1]*l[2],m=t.outChannels,f=t.dataFormat==="channelsLast",h=!1,g=!1,d,x=[];if(s!=null){let C=ng(s.shape,f);C!=null&&(s=tt({inputs:{x:s},backend:o,attrs:{shape:C}}),x.push(s))}if(n!=null){let C=ng(n.shape,f);C!=null&&(n=tt({inputs:{x:n},backend:o,attrs:{shape:C}}),x.push(n))}if(!((p===1||m===1)&&c>zw)&&u.isPacked&&f&&u.texture!=null&&l[2]%2!==0&&b.arraysEqual(u.shape.slice(-3),l.slice(-3))){let C=l[0]*l[1]*(l[2]+1),T={dataId:r.dataId,shape:[1,C,t.inChannels],dtype:r.dtype},A=u.shape;u.shape=u.shape.slice(),u.shape[u.shape.length-2]++,b.assert(kl(u.shape,T.shape),()=>`packed reshape ${u.shape} to ${T.shape} isn't free`);let $=tt({inputs:{x:e},backend:o,attrs:{shape:[1,t.inChannels,t.outChannels]}});x.push($);let _=_l({a:T,b:$,backend:o,transposeA:h,transposeB:g,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),O=o.texData.get(_.dataId);b.assert(O.isPacked,()=>"batchMatMul result is expected to be packed"),u.shape=A,O.shape=t.outShape,d=De({inputs:{x:_},backend:o}),d.shape=t.outShape,x.push(_)}else{let C=t.outHeight*t.outWidth,T=tt({inputs:{x:r},backend:o,attrs:{shape:f?[t.batchSize,C,t.inChannels]:[t.batchSize,t.inChannels,C]}}),A=tt({inputs:{x:e},backend:o,attrs:{shape:[1,t.inChannels,t.outChannels]}}),$=_l({a:f?T:A,b:f?A:T,transposeA:!f,transposeB:g,backend:o,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i});d=tt({inputs:{x:$},backend:o,attrs:{shape:t.outShape}}),x.push(T),x.push(A),x.push($)}for(let C of x)o.disposeIntermediateTensorInfo(C);return d}function ig({x:r,filter:e,convInfo:t,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:l,filterHeight:u,inChannels:c,outWidth:p,outHeight:m,dataFormat:f}=t,h=f==="channelsLast",g=l*u*c,d=m*p,x=[t.batchSize,g,d],y=!0,w=!1,C=[];if(s!=null){let X=ng(s.shape,h);X!=null&&(s=tt({inputs:{x:s},backend:o,attrs:{shape:X}}),C.push(s))}if(n!=null){let X=ng(n.shape,h);X!=null&&(n=tt({inputs:{x:n},backend:o,attrs:{shape:X}}),C.push(n))}let T=tt({inputs:{x:e},backend:o,attrs:{shape:[1,g,b.sizeFromShape(e.shape)/g]}});C.push(T);let A=new og(x,t),$=[r.shape,[t.padInfo.top,t.padInfo.left],[t.strideHeight,t.strideWidth],[t.dilationHeight,t.dilationWidth],[t.inChannels],[t.filterWidth*t.inChannels],[t.outWidth]],_=o.runWebGLProgram(A,[r],"float32",$),O=tt({inputs:{x:_},backend:o,attrs:{shape:x}});C.push(_),C.push(O);let z=n!=null,V=s!=null,G=a==="leakyrelu",W=a?zs(a,!0):null,H=new lp(h?O.shape:T.shape,h?T.shape:O.shape,h?[t.batchSize,d,t.outChannels]:[t.batchSize,t.outChannels,d],y,w,z,W,V,G),K=h?[O,T]:[T,O];if(n&&K.push(n),V&&K.push(s),G){let X=o.makeTensorInfo([],"float32",b.createScalarValue(i,"float32"));K.push(X),C.push(X)}let Y=o.runWebGLProgram(H,K,"float32"),J=tt({inputs:{x:Y},backend:o,attrs:{shape:t.outShape}});C.push(Y);for(let X of C)o.disposeIntermediateTensorInfo(X);return J}function pK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dataFormat:l,dilations:u,dimRoundingMode:c}=o,p=I.convertConv2DDataFormat(l),m=I.computeConv2DInfo(n.shape,s.shape,i,u,a,c,!1,p),f;if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))f=sg({x:n,filter:s,convInfo:m,backend:t});else if(m.strideWidth<=2&&p==="channelsLast"&&L().getBool("WEBGL_EXP_CONV")){let g=new pp(m),d=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]];f=t.runWebGLProgram(g,[n,s],"float32",d)}else if(L().getBool("WEBGL_CONV_IM2COL"))f=ig({x:n,filter:s,convInfo:m,backend:t});else{let g=new cp(m);f=t.runWebGLProgram(g,[n,s],"float32")}let h=tt({inputs:{x:f},backend:t,attrs:{shape:m.outShape}});return t.disposeIntermediateTensorInfo(f),h}var nE={kernelName:pi,backendName:"webgl",kernelFunc:pK};var ag=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,o=e.strideWidth,n=e.padInfo.top,s=e.padInfo.left,i=e.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${n};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${i?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},lg=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,o=e.filterWidth,n=e.strideHeight,s=e.strideWidth,i=e.dataFormat==="channelsLast",a=t-1-e.padInfo.top,l=o-1-e.padInfo.left,u=i?1:2,c=i?2:3,p=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${u}], coords[${c}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},ug=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideDepth,o=e.strideHeight,n=e.strideWidth,s=e.padInfo.front,i=e.padInfo.top,a=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${s};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${o} - ${i};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${n} - ${a};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},cg=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterDepth,o=e.filterHeight,n=e.filterWidth,s=e.strideDepth,i=e.strideHeight,a=e.strideWidth,l=t-1-e.padInfo.front,u=o-1-e.padInfo.top,c=n-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${l}, ${u}, ${c});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${o}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${o} - 1 - wR;

            for (int wC = 0; wC < ${n}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${n} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function mK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,pad:a,dataFormat:l,dimRoundingMode:u,filterShape:c}=o,p=I.convertConv2DDataFormat(l),m=I.computeConv2DInfo(n.shape,c,i,1,a,u,!1,p),f=new ag(m);return t.runWebGLProgram(f,[n,s],"float32")}var sE={kernelName:ou,backendName:"webgl",kernelFunc:mK};var pg=class{constructor(e){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=e.inShape,this.enableShapeUniforms=jt(this.outputShape.length);let t=e.filterHeight,o=e.filterWidth,n=t-1-e.padInfo.top,s=o-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${n}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            int wCPerm = ${o} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function fK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{inputShape:i,strides:a,pad:l,dataFormat:u,dimRoundingMode:c}=o,p=I.convertConv2DDataFormat(u),m=I.computeConv2DInfo(i,s.shape,a,1,l,c,!1,p);if(L().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&p==="channelsLast"){let f=[[m.strideHeight,m.strideWidth]],h=new pg(m);return t.runWebGLProgram(h,[n,s],"float32",f)}else{let f=new lg(m);return t.runWebGLProgram(f,[n,s],"float32")}}var iE={kernelName:mi,backendName:"webgl",kernelFunc:fK};function hK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l}=o,u=I.computeConv3DInfo(n.shape,s.shape,i,l,a),c=new rg(u);return t.runWebGLProgram(c,[n,s],"float32")}var aE={kernelName:fi,backendName:"webgl",kernelFunc:hK};function dK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,pad:a,filterShape:l}=o,u=I.computeConv3DInfo(n.shape,l,i,1,a),c=new ug(u);return t.runWebGLProgram(c,[n,s],"float32")}var lE={kernelName:nu,backendName:"webgl",kernelFunc:dK};function gK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{pad:i,strides:a,inputShape:l}=o,u=I.computeConv3DInfo(l,s.shape,a,1,i),c=new cg(u);return t.runWebGLProgram(c,[n,s],"float32")}var uE={kernelName:su,backendName:"webgl",kernelFunc:gK};var xK=Do+`
  return cos(x);
`,yK=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${so}
  return result;
`,bK=dt({opSnippet:xK,packedOpSnippet:yK}),cE={kernelName:Hn,backendName:"webgl",kernelFunc:bK};var wK=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,CK=dt({opSnippet:wK}),pE={kernelName:Kn,backendName:"webgl",kernelFunc:CK};var mg=class{constructor(e,t,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,l,u]=e,[c]=t,[p,m]=o;this.outputShape=[c,p,m,u];let f=n==="bilinear"?1:0,[h,g]=[`${a-1}.0`,`${l-1}.0`],[d,x,y]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[w,C,T]=m>1?[`${(l-1)/(m-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${d});
      const float width_ratio = float(${w});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${C};

        float in_y = ${y};
        if( in_y < 0.0 || in_y > ${h} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${T};
        if( in_x < 0.0 || in_x > ${g} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};var vK=r=>{let{inputs:e,backend:t,attrs:o}=r,{image:n,boxes:s,boxInd:i}=e,{cropSize:a,method:l,extrapolationValue:u}=o,c=new mg(n.shape,s.shape,a,l,u);return t.runWebGLProgram(c,[n,s,i],"float32")},mE={kernelName:au,backendName:"webgl",kernelFunc:vK};var mp=function(r){return r.Prod="*",r.Sum="+",r}(mp||{}),Cm=class{constructor(e,t,o,n){this.op=e,this.outputShape=t,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===mp.Prod?"1.0":"0.0",a=o?i:`getX(${fE(s,"coords",this.op)})`,l=this.outputShape[this.outputShape.length-1],u="",c="";o?(u=n?`end != ${l-1}`:"end != 0",c=n?"end + 1":"end - 1"):(u=n?`end + pow2 < ${l}`:"end >= pow2",c=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${kt(s)} coords = getOutputCoords();
        int end = ${hE(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${u}) {
          int idx = ${c};
          ${hE(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${fE(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function fE(r,e,t){if(r===1)return`${e}`;if(r===2)return`${e}.x, ${e}.y`;if(r===3)return`${e}.x, ${e}.y, ${e}.z`;if(r===4)return`${e}.x, ${e}.y, ${e}.z, ${e}.w`;throw new Error(`Cumulative ${t} for rank ${r} is not yet supported`)}function hE(r,e,t){if(r===1)return`${e}`;if(r===2)return`${e}.y`;if(r===3)return`${e}.z`;if(r===4)return`${e}.w`;throw new Error(`Cumulative ${t} for rank ${r} is not yet supported`)}function fg(r,e,t,o,n,s){let i=e.shape.length,a=I.getAxesPermutation([o],i),l=e;a!=null&&(l=pe({inputs:{x:e},backend:t,attrs:{perm:a}}));let u=I.getInnerMostAxes(1,i)[0];if(u!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${e.shape.length-1} but got axis=${o}`);let c=l.shape[u],p=De({inputs:{x:l},backend:t});for(let m=0;m<=Math.ceil(Math.log2(c))-1;m++){let f=new Cm(r,l.shape,!1,s),h=[[m]],g=p;p=t.runWebGLProgram(f,[p],p.dtype,h),t.disposeIntermediateTensorInfo(g)}if(n){let m=new Cm(r,l.shape,n,s),f=p;p=t.runWebGLProgram(m,[p],p.dtype),t.disposeIntermediateTensorInfo(f)}if(a!=null){let m=I.getUndoAxesPermutation(a),f=pe({inputs:{x:p},backend:t,attrs:{perm:m}});return t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(l),f}return p}function SK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,exclusive:i,reverse:a}=o;return fg(mp.Prod,n,t,s,i,a)}var dE={kernelName:iu,backendName:"webgl",kernelFunc:SK};function NK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,exclusive:i,reverse:a}=o;return fg(mp.Sum,n,t,s,i,a)}var gE={kernelName:hi,backendName:"webgl",kernelFunc:NK};function TK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,weights:s}=e,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let l=t.readSync(n.dataId),u=t.readSync(s.dataId),c=Ed(l,u,s.dtype,s.shape,i);return t.makeTensorInfo([i],s.dtype,c)}else if(n.shape.length===2){let l=t.bufferSync(n),u=t.bufferSync(s),c=t1(l,u,i,a);return t.makeTensorInfo(c.shape,s.dtype,c.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var xE={kernelName:lu,backendName:"webgl",kernelFunc:TK};var hg=class{constructor(e,t,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=o,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function IK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockSize:s,dataFormat:i}=o,a=n.shape[0],l=i==="NHWC"?n.shape[1]:n.shape[2],u=i==="NHWC"?n.shape[2]:n.shape[3],c=i==="NHWC"?n.shape[3]:n.shape[1],p=l*s,m=u*s,f=c/(s*s),h=i==="NHWC"?[a,p,m,f]:[a,f,p,m],g=new hg(h,s,i);return t.runWebGLProgram(g,[n],n.dtype)}var yE={kernelName:uu,backendName:"webgl",kernelFunc:IK};var fp=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=jt(this.outputShape.length);let i=e.filterHeight,a=e.filterWidth,l=e.outChannels/e.inChannels,u="",c="";o&&(n?u=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?u=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:u=`
          float activation(float x) {
            ${o}
          }
        `,c="result = activation(result);");let p=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${u}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${l};
        int q = d2 - d1 * ${l};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${p}
        ${c}
        setOutput(result);
      }
    `}};var hp=class{constructor(e,t=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=e.outShape,this.enableShapeUniforms=jt(this.outputShape.length);let i=e.outChannels/e.inChannels,a=e.padInfo.left,l=e.strideWidth,u=e.dilationWidth,c=e.filterHeight,p=e.filterWidth,m=p,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<p;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${c}; r++) {
      `;for(let x=0;x<p;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(m+1)/2;x++){let y=x*2;if(f+=`
          xC = xCCorner + ${y*u};
          `,l===1){if(y<p&&(a%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }
              `,u===1&&y>0?f+=`
                xC${y} = vec4(xTexelC${y-2}.zw, xTexelC${y}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${y} = vec4(previous.zw, xTexelC${y}.xy);
                  } else {
                    xC${y} = vec4(0.0, 0.0, xTexelC${y}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                xC${y} = xTexelC${y};
                `,y+1<p)){let w=a%2===0?b.nearestLargerEven(u):u;u%2===0&&a%2===1||u%2!==0&&a%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${w};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                    xTexelC${y+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${y+1}.zw = vec2(0.0);
                    }
                    xTexelC${y+1}Ready = 1;
                  }
                  `,u>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${y+1} = vec4(previous.zw, xTexelC${y+1}.xy);
                    } else {
                     xC${y+1} = vec4(0.0, 0.0, xTexelC${y+1}.xy);
                    }
                    `:f+=`
                    xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.xy);
                    `):w===1?f+=`
                    xC${y+1} = xTexelC${y};
                    `:f+=`
                    xCOffset = xC + ${w};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                      xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${y+1}.zw = vec2(0.0);
                      }
                      xTexelC${y+1}Ready = 1;
                    }

                    xC${y+1} = xTexelC${y+1};
                    `}}else y<p&&(a%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${y+1}Ready == 0) {
                  xTexelC${y+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${y+1}.zw = vec2(0.0);
                  }
                  xTexelC${y+1}Ready = 1;
                }

                xC${y} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
              `,y+1<p&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${y+1} = vec4(xTexelC${y+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${y}Ready == 0) {
                  xTexelC${y} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${y}.zw = vec2(0.0);
                  }
                  xTexelC${y}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${y+1}Ready == 0) {
                  xTexelC${y+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${y+1}.zw = vec2(0.);
                  }
                  xTexelC${y+1}Ready = 1;
                }

                xC${y} = vec4(
                  xTexelC${y}.xy, xTexelC${y+1}.xy);
              `,y+1<p&&(f+=`
                  xC${y+1} = vec4(xTexelC${y}.zw, xTexelC${y+1}.zw);
                `)));y<p&&(f+=`
            wTexel = getW(r, ${y}, d1, q);
            dotProd += xC${y} * vec4(wTexel.xz, wTexel.xz);
          `,y+1<p&&(f+=`
              wTexel = getW(r, ${y+1}, d1, q);
              dotProd += xC${y+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let h="",g="";o&&(n?h=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?h=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:h=`vec4 activation(vec4 x) {
          ${o}
        }`,g="result = activation(result);");let d=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${h}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${d}
        ${g}
        setOutput(result);
      }
    `}};function kK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l,dimRoundingMode:u}=o,c=l;c==null&&(c=[1,1]),b.assert(I.eitherStridesOrDilationsAreOne(i,c),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let p=I.computeConv2DInfo(n.shape,s.shape,i,c,a,u,!0),m;L().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?m=new hp(p):m=new fp(p);let f=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return t.runWebGLProgram(m,[n,s],"float32",f)}var bE={kernelName:di,backendName:"webgl",kernelFunc:kK};var dg=class{constructor(e){this.variableNames=["x","dy"],this.outputShape=e.filterShape;let t=e.strideHeight,o=e.strideWidth,n=e.padInfo.top,s=e.padInfo.left,i=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${n};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},gg=class{constructor(e){this.variableNames=["dy","W"],this.outputShape=e.inShape;let t=e.filterHeight,o=e.filterWidth,n=e.strideHeight,s=e.strideWidth,i=t-1-e.padInfo.top,a=o-1-e.padInfo.left,l=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${l}; dm++) {
              int d2 = d1 * ${l} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function EK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,dy:s}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:u,filterShape:c}=o,p=I.computeConv2DInfo(n.shape,c,i,a,l,u,!0),m=new dg(p);return t.runWebGLProgram(m,[n,s],"float32")}var wE={kernelName:cu,backendName:"webgl",kernelFunc:EK};function AK(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,filter:s}=e,{strides:i,dilations:a,pad:l,dimRoundingMode:u,inputShape:c}=o,p=I.computeConv2DInfo(c,s.shape,i,a,l,u,!0),m=new gg(p);return t.runWebGLProgram(m,[n,s],"float32")}var CE={kernelName:pu,backendName:"webgl",kernelFunc:AK};var xg=class{constructor(e){this.variableNames=["X"],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function $K(r){let{inputs:e,backend:t}=r,{x:o}=e,n=[...o.shape,...o.shape],s=b.sizeFromShape(o.shape),i=tt({inputs:{x:o},backend:t,attrs:{shape:[s]}}),a=new xg(s),l=t.runWebGLProgram(a,[i],i.dtype),u=tt({inputs:{x:l},backend:t,attrs:{shape:n}});return t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(l),u}var vE={kernelName:mu,backendName:"webgl",kernelFunc:$K};var yg=class{constructor(e){this.variableNames=["x","W"],this.outputShape=e.outShape;let{inHeight:t,inWidth:o,padInfo:n,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:l,dilationHeight:u,dilationWidth:c}=e,{top:p,left:m}=n;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${i});
      const ivec2 pads = ivec2(${p}, ${m});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${u};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${l}; w++) {
              int wIn = wBeg + w * ${c};

              if (wIn >= 0 && wIn < ${o}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function DK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s}=e,{strides:i,pad:a,dilations:l}=o,u=I.computeDilation2DInfo(n.shape,s.shape,i,a,"NHWC",l),c,p=new yg(u);c=t.runWebGLProgram(p,[n,s],"float32");let m=tt({inputs:{x:c},backend:t,attrs:{shape:u.outShape}});return t.disposeIntermediateTensorInfo(c),m}var SE={kernelName:gi,backendName:"webgl",kernelFunc:DK};function RK(r){let{inputs:e,backend:t,attrs:o}=r,{equation:n}=o,s=e,{allDims:i,summedDims:a,idDims:l}=I.decodeEinsumEquation(n,s.length);I.checkEinsumDimSizes(i.length,l,s);let{path:u,steps:c}=I.getEinsumComputePath(a,l),p=c.length,m=null,f=i.length,h=[];for(let g=0;g<p;++g){for(let d of c[g]){let{permutationIndices:x,expandDims:y}=I.getEinsumPermutation(f,l[d]),w;I.isIdentityPermutation(x)?w=s[d]:(w=pe({inputs:{x:s[d]},backend:t,attrs:{perm:x}}),h.push(w));let C=w.shape.slice();for(let T=0;T<y.length;++T)C.splice(y[T],0,1);b.arraysEqual(w.shape,C)||(w=tt({inputs:{x:w},backend:t,attrs:{shape:C}}),h.push(w)),m===null?m=w:(m=bm({inputs:{a:w,b:m},backend:t}),h.push(m))}g<p-1&&(u[g]>=0&&(m=Rl({inputs:{x:m},backend:t,attrs:{axis:u[g]-(i.length-f),keepDims:!1}}),h.push(m)),f--)}for(let g of h)g!==m&&t.disposeIntermediateTensorInfo(g);return m}var NE={kernelName:fu,backendName:"webgl",kernelFunc:RK};var _K="return (x >= 0.0) ? x : (exp(x) - 1.0);",FK=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,OK=dt({opSnippet:_K,packedOpSnippet:FK}),TE={kernelName:jn,backendName:"webgl",kernelFunc:OK};var LK="return (b >= 0.0) ? a : a * (b + 1.0);",PK=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,zK=r=>{let{inputs:e,backend:t}=r,{dy:o,y:n}=e,s=L().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new no(PK,o.shape,n.shape):new Hr(LK,o.shape,n.shape);return t.runWebGLProgram(s,[o,n],o.dtype)},IE={kernelName:hu,backendName:"webgl",kernelFunc:zK};var MK=`
  return vec4(equal(a, b));
`,BK="return float(a == b);",VK=Ht({opSnippet:BK,packedOpSnippet:MK,dtype:"bool",cpuKernelImpl:s1}),kE={kernelName:Pa,backendName:"webgl",kernelFunc:VK};var GK=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${I.ERF_P};
  float a1 = ${I.ERF_A1};
  float a2 = ${I.ERF_A2};
  float a3 = ${I.ERF_A3};
  float a4 = ${I.ERF_A4};
  float a5 = ${I.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,WK=dt({opSnippet:GK}),EE={kernelName:Xn,backendName:"webgl",kernelFunc:WK};var UK=Do+`
  return exp(x);
`,HK=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ww=dt({opSnippet:UK,packedOpSnippet:HK,cpuKernelImpl:i1,dtype:"float32"}),AE={kernelName:Yn,backendName:"webgl",kernelFunc:Ww};function bg(r){let{inputs:e,attrs:t,backend:o}=r,{dim:n}=t,{input:s}=e,i=s.shape.length,a=s.shape.slice(),l=n;return n<0&&(b.assert(-(i+1)<=n,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),l=i+n+1),a.splice(l,0,1),tt({inputs:{x:s},backend:o,attrs:{shape:a}})}var $E={kernelName:xi,backendName:"webgl",kernelFunc:bg};var DE="return exp(x) - 1.0;",KK=dt({opSnippet:DE,packedOpSnippet:DE,cpuKernelImpl:a1}),RE={kernelName:Zn,backendName:"webgl",kernelFunc:KK};var vm=class{constructor(e,t,o){this.variableNames=["real","imag"];let n=t[1];this.outputShape=t;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=o?`${n}.0`:"1.0",a;if(e==="real")a="return real * expR - imag * expI;";else if(e==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function wg(r,e,t){let o=t.texData.get(r.dataId),n=b.sizeFromShape(r.shape),s=r.shape[r.shape.length-1],i=n/s,a=tt({inputs:{x:r},backend:t,attrs:{shape:[i,s]}}),l=a.shape,u=new vm("real",l,e),c=new vm("imag",l,e),p=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:l},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:l}],m=t.runWebGLProgram(u,p,"float32"),f=t.runWebGLProgram(c,p,"float32"),h=Kr({inputs:{real:m,imag:f},backend:t});t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f);let g=tt({inputs:{x:h},backend:t,attrs:{shape:r.shape}});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(h),g}function qK(r){let{inputs:e,backend:t}=r,{input:o}=e;return wg(o,!1,t)}var _E={kernelName:du,backendName:"webgl",kernelFunc:qK};var Cg=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function Bs(r){let{backend:e,attrs:t}=r,{shape:o,value:n}=t,{dtype:s}=t;if(s=s||b.inferDtype(n),s==="string"){let i=b.getArrayFromDType(s,b.sizeFromShape(o));return i.fill(n),e.makeTensorInfo(o,s,i)}else{let i=new Cg(o,n),a=[[n]];return e.runWebGLProgram(i,[],s,a)}}var FE={kernelName:gu,backendName:"webgl",kernelFunc:Bs};var vg=class{constructor(e){this.variableNames=["Image"],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var OE={kernelName:xu,backendName:"webgl",kernelFunc:({inputs:r,backend:e})=>{let{image:t}=r,o=e,n=new vg(t.shape);return o.runWebGLProgram(n,[t],t.dtype)}};var LE="return floor(x);",jK=dt({opSnippet:LE,packedOpSnippet:LE,cpuKernelImpl:l1}),PE={kernelName:Jn,backendName:"webgl",kernelFunc:jK};var XK=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,YK=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,ZK=Ht({opSnippet:XK,packedOpSnippet:YK,dtype:"int32"}),zE={kernelName:Qn,backendName:"webgl",kernelFunc:ZK};var Sg=class{constructor(e){this.variableNames=["A"];let t=we(),[o,n]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}.0, ${o}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};var Ng=class{constructor(e){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let t=we(),[o,n]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${n}.0, ${o}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}};var ME={kernelName:zp,backendName:"webgl",kernelFunc:JK},dp,Uw=L().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function JK(r){let{inputs:e,backend:t,attrs:o}=r,{pixels:n}=e,{numChannels:s}=o,i=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[l,u]=i?[n.videoWidth,n.videoHeight]:[n.width,n.height],c=[u,l],p=[u,l,s];if(a||i){let g=L().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(dp==null||g!==Uw)&&(Uw=g,dp=document.createElement("canvas").getContext("2d",{willReadFrequently:Uw})),dp.canvas.width=l,dp.canvas.height=u,dp.drawImage(n,0,0,l,u),n=dp.canvas}let m=t.makeTensorInfo(c,"int32");t.texData.get(m.dataId).usage=vr.PIXELS,t.gpgpu.uploadPixelDataToTexture(t.getTexture(m.dataId),n);let f=L().getBool("WEBGL_PACK")?new Ng(p):new Sg(p),h=t.runWebGLProgram(f,[m],"int32");return t.disposeData(m.dataId),h}function QK(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=e,{strides:l,pad:u,dataFormat:c,dilations:p,dimRoundingMode:m,activation:f,leakyreluAlpha:h}=o,g=I.convertConv2DDataFormat(c),d=I.computeConv2DInfo(n.shape,s.shape,l,p,u,m,!1,g),x,y=[],w=i!=null,C=a!=null,T=f==="leakyrelu",A=()=>{let _=[n,s],O=(z,V)=>{if(V==="NCHW"&&z.shape.length===1&&z.shape[0]!==1){let G=tt({inputs:{x:z},backend:t,attrs:{shape:[z.shape[0],1,1]}});return y.push(G),G}return z};if(w&&_.push(O(i,c)),C&&_.push(O(a,c)),T){let z=t.makeTensorInfo([],"float32",b.createScalarValue(h,"float32"));_.push(z),y.push(z)}return _};if(d.filterHeight===1&&d.filterWidth===1&&d.dilationHeight===1&&d.dilationWidth===1&&d.strideHeight===1&&d.strideWidth===1&&(d.padInfo.type==="SAME"||d.padInfo.type==="VALID"))x=sg({x:n,filter:s,convInfo:d,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:h});else if(d.strideWidth<=2&&g==="channelsLast"&&L().getBool("WEBGL_EXP_CONV")){let _=f?zs(f,!0):null,O=new pp(d,w,_,C,T),z=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]],V=A();x=t.runWebGLProgram(O,V,"float32",z)}else if(L().getBool("WEBGL_CONV_IM2COL"))x=ig({x:n,filter:s,convInfo:d,backend:t,bias:i,activation:f,preluActivationWeights:a,leakyreluAlpha:h});else{let _=f?zs(f,!1):null,O=new cp(d,w,_,C,T),z=A();x=t.runWebGLProgram(O,z,"float32")}let $=tt({inputs:{x},backend:t,attrs:{shape:d.outShape}});return y.push(x),y.forEach(_=>t.disposeIntermediateTensorInfo(_)),$}var BE={kernelName:qa,backendName:"webgl",kernelFunc:QK};function tq(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=e,{strides:l,pad:u,dilations:c,dimRoundingMode:p,activation:m,leakyreluAlpha:f}=o,h=[],g=c;g==null&&(g=[1,1]),b.assert(I.eitherStridesOrDilationsAreOne(l,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${l} and dilations '${g}'`);let d=I.computeConv2DInfo(n.shape,s.shape,l,g,u,p,!0),x=L().getBool("WEBGL_PACK_DEPTHWISECONV")&&d.strideWidth<=2&&d.outChannels/d.inChannels===1,y=m?zs(m,x):null,w=[n,s],C=i!=null,T=a!=null,A=m==="leakyrelu";if(C&&w.push(i),T&&w.push(a),A){let z=t.makeTensorInfo([],"float32",b.createScalarValue(f,"float32"));w.push(z),h.push(z)}let $;x?$=new hp(d,C,y,T,A):$=new fp(d,C,y,T,A);let _=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]],O=t.runWebGLProgram($,w,"float32",_);return h.forEach(z=>t.disposeIntermediateTensorInfo(z)),O}var VE={kernelName:ja,backendName:"webgl",kernelFunc:tq};var Tg=class{constructor(e,t,o,n){this.sliceDim=e,this.strides=t,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=kt(o.length),i=`
    int index;`;for(let a=0;a<this.sliceDim;a++)i+=`
          index = round(getIndices(coords[0], ${a}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[a]};
          flattenIndex += index * ${this.strides[a]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${i}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function eq(r){let{inputs:e,backend:t}=r,{params:o,indices:n}=e,s=n.shape,i=s[s.length-1],a=b.sizeFromShape(o.shape),[l,u,c,p]=I.prepareAndValidate(o,n),m=tt({inputs:{x:n},backend:t,attrs:{shape:[u,i]}}),f=tt({inputs:{x:o},backend:t,attrs:{shape:[b.sizeFromShape(o.shape)/c,c]}});if(t.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let x=t.readSync(n.dataId),y=t.bufferSync(o),w=u1(x,y,o.dtype,u,i,c,p,o.shape,a);return t.makeTensorInfo(l,o.dtype,w.values)}let h=new Tg(i,p,[u,c],o.shape),g=t.runWebGLProgram(h,[f,m],f.dtype),d=tt({inputs:{x:g},backend:t,attrs:{shape:l}});return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(g),d}var GE={kernelName:yu,backendName:"webgl",kernelFunc:eq};var Ig=class{constructor(e,t){this.variableNames=["A","indices"],this.outputShape=t,this.rank=t.length;let o=kt(this.rank),n=rq(e,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function rq(r,e){let t=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<r.length;n++)n===2?o.push("index"):o.push(`${t[n]}`);return o.join()}function Hw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,indices:s}=e,{axis:i,batchDims:a}=o,l=b.parseAxisParam(i,n.shape)[0];if(L().get("DEBUG")){let y=t.readSync(s.dataId),w=n.shape[l];for(let C=0;C<y.length;++C){let T=y[C];b.assert(T<=w-1&&T>=0,()=>`GatherV2: the index value ${T} is not in [0, ${w-1}]`)}}let u=I.segment_util.collectGatherOpShapeInfo(n,s,l,a),c=b.sizeFromShape(s.shape),p=[],m=tt({inputs:{x:n},backend:t,attrs:{shape:[u.batchSize,u.outerSize,u.dimSize,u.sliceSize]}}),f=tt({inputs:{x:s},backend:t,attrs:{shape:[u.batchSize,c/u.batchSize]}});p.push(m),p.push(f);let h=[u.batchSize,u.outerSize,c/u.batchSize,u.sliceSize];if(t.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let y=t.bufferSync(f),w=t.bufferSync(m),C=c1(w,y,h);return p.forEach(T=>t.disposeIntermediateTensorInfo(T)),t.makeTensorInfo(u.outputShape,C.dtype,C.values)}let g=new Ig(m.shape,h),d=t.runWebGLProgram(g,[m,f],m.dtype);p.push(d);let x=tt({inputs:{x:d},backend:t,attrs:{shape:u.outputShape}});return p.forEach(y=>t.disposeIntermediateTensorInfo(y)),x}var WE={kernelName:bi,backendName:"webgl",kernelFunc:Hw};var oq="return float(a > b);",nq=`
  return vec4(greaterThan(a, b));
`,sq=Ht({opSnippet:oq,packedOpSnippet:nq,cpuKernelImpl:p1,dtype:"bool"}),UE={kernelName:za,backendName:"webgl",kernelFunc:sq};var iq="return float(a >= b);",aq=`
  return vec4(greaterThanEqual(a, b));
`,lq=Ht({opSnippet:iq,packedOpSnippet:aq,dtype:"bool",cpuKernelImpl:m1}),HE={kernelName:ts,backendName:"webgl",kernelFunc:lq};function uq(r){let{inputs:e,backend:t}=r,{input:o}=e;return wg(o,!0,t)}var KE={kernelName:bu,backendName:"webgl",kernelFunc:uq};var cq="return float(!isnan(x) && !isinf(x));",pq=dt({opSnippet:cq,dtype:"bool"}),qE={kernelName:es,backendName:"webgl",kernelFunc:pq};var mq="return float(isinf(x));",fq=dt({opSnippet:mq,dtype:"bool"}),jE={kernelName:rs,backendName:"webgl",kernelFunc:fq};var hq="return float(isnan(x));",dq=dt({opSnippet:hq,dtype:"bool"}),XE={kernelName:os,backendName:"webgl",kernelFunc:dq};var gq="return float(a < b);",xq=`
  return vec4(lessThan(a, b));
`,yq=Ht({opSnippet:gq,packedOpSnippet:xq,cpuKernelImpl:f1,dtype:"bool"}),YE={kernelName:Ma,backendName:"webgl",kernelFunc:yq};var bq="return float(a <= b);",wq=`
  return vec4(lessThanEqual(a, b));
`,Cq=Ht({opSnippet:bq,packedOpSnippet:wq,cpuKernelImpl:h1,dtype:"bool"}),ZE={kernelName:Ba,backendName:"webgl",kernelFunc:Cq};function vq(r){let{backend:e,attrs:t}=r,{start:o,stop:n,num:s}=t,i=d1(o,n,s);return e.makeTensorInfo([i.length],"float32",i)}var JE={kernelName:Cu,backendName:"webgl",kernelFunc:vq};var Sq=Do+`
  return x < 0.0 ? 0./0. : log(x);
`,Nq=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,Tq=dt({opSnippet:Sq,packedOpSnippet:Nq,cpuKernelImpl:g1}),QE={kernelName:ns,backendName:"webgl",kernelFunc:Tq};var Iq=Do+`
  return log(1.0 + x);
`,kq=dt({opSnippet:Iq}),t2={kernelName:ss,backendName:"webgl",kernelFunc:kq};var Eq="return float(a >= 1.0 && b >= 1.0);",Aq=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,$q=Ht({opSnippet:Eq,packedOpSnippet:Aq,dtype:"bool"}),e2={kernelName:Va,backendName:"webgl",kernelFunc:$q};var Dq="return float(!(x >= 1.0));",Rq=dt({opSnippet:Dq}),r2={kernelName:Ga,backendName:"webgl",kernelFunc:Rq};var _q="return float(a >= 1.0 || b >= 1.0);",Fq=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,Oq=Ht({opSnippet:_q,packedOpSnippet:Fq,dtype:"bool"}),o2={kernelName:Wa,backendName:"webgl",kernelFunc:Oq};var kg=class{constructor(e,t,o,n,s){this.variableNames=["x"],this.outputShape=[];let i=t,a=e[3]-1;this.outputShape=e;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${l};
        setOutput(val);
      }
    `}};var Eg=class{constructor(e,t,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=t,a=e[3]-1;this.outputShape=e;let l,u=`float(${o}) + float(${n}) * sum`;s===.5?l=`inversesqrt(${u})`:s===1?l=`1.0/(${u})`:l=`exp(log(${u}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${l};
        setOutput(result);
      }
    `}};var Lq=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{depthRadius:s,bias:i,alpha:a,beta:l}=o,u=L().getBool("WEBGL_PACK_NORMALIZATION")?new Eg(n.shape,s,i,a,l):new kg(n.shape,s,i,a,l);return t.runWebGLProgram(u,[n],n.dtype)},n2={kernelName:Ci,backendName:"webgl",kernelFunc:Lq};var Ag=class{constructor(e,t,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${n}) * norm + float(${o});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${n})
                * float(${s})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};var Pq=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n,y:s,dy:i}=e,{depthRadius:a,bias:l,alpha:u,beta:c}=o,p=new Ag(n.shape,a,l,u,c);return t.runWebGLProgram(p,[n,s,i],n.dtype)},s2={kernelName:vu,backendName:"webgl",kernelFunc:Pq};function i2(r,e,t,o){let n=b.sizeFromShape(e),i=b.sizeFromShape(r.shape)/n,a=tt({inputs:{x:r},attrs:{shape:[i,n]},backend:o}),l=io(a,r.dtype,"max",o),u=tt({inputs:{x:l},attrs:{shape:t},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}function Kw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reductionIndices:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=I.getAxesPermutation(u,a),p=c!=null,m=t.shouldExecuteOnCPU([n]),f=n;if(p){if(m){let w=t.texData.get(f.dataId).values,C=new Array(a);for(let $=0;$<C.length;$++)C[$]=n.shape[c[$]];let T=Dl(w,n.shape,n.dtype,c,C);f=t.makeTensorInfo(C,n.dtype);let A=t.texData.get(f.dataId);A.values=T}else f=Ca(n,c,t);u=I.getInnerMostAxes(u.length,a)}I.assertAxesAreInnerMostDims("max",u,a);let[h,g]=I.computeOutAndReduceShapes(f.shape,u),d=h;i&&(d=I.expandShapeToKeepDim(h,l));let x;if(m){let w=t.texData.get(f.dataId).values,C=x1(w,b.sizeFromShape(g),d,n.dtype);x=t.makeTensorInfo(d,n.dtype);let T=t.texData.get(x.dataId);T.values=C}else x=i2(f,g,d,t);return p&&t.disposeIntermediateTensorInfo(f),x}var a2={kernelName:vi,backendName:"webgl",kernelFunc:Kw};var zq=ap+`
  return max(a, b);
`,Mq=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+so+`
  return result;
`,Bq=Ht({opSnippet:zq,packedOpSnippet:Mq,cpuKernelImpl:y1}),l2={kernelName:is,backendName:"webgl",kernelFunc:Bq};function Vq(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;Tn(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=o,u=1;b.assert(I.eitherStridesOrDilationsAreOne(i,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${u}'`);let c=I.computePool2DInfo(n.shape,s,i,u,a,l);if(c.filterWidth===1&&c.filterHeight===1&&b.arraysEqual(c.inShape,c.outShape))return De({inputs:{x:n},backend:t});let p=new Qo(c,"max",!1);return t.runWebGLProgram(p,[n],n.dtype)}var u2={kernelName:Si,backendName:"webgl",kernelFunc:Vq};function Gq(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{filterSize:s,strides:i,pad:a,dataFormat:l,dimRoundingMode:u}=o,c=[1,1,1],p=I.computePool3DInfo(n.shape,s,i,c,a,u,l),m=new va(p,"max",!1);return t.runWebGLProgram(m,[n],n.dtype)}var c2={kernelName:Ni,backendName:"webgl",kernelFunc:Gq};var $g=class{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideHeight,o=e.strideWidth,n=e.dilationHeight,s=e.effectiveFilterHeight,i=e.effectiveFilterWidth,a=s-1-e.padInfo.top,l=i-1-e.padInfo.left,u=s*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${l});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${n}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${u} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},Dg=class{constructor(e){this.variableNames=["dy","maxPos"],this.outputShape=e.inShape;let t=e.strideDepth,o=e.strideHeight,n=e.strideWidth,s=e.dilationDepth,i=e.dilationHeight,a=e.dilationWidth,l=e.effectiveFilterDepth,u=e.effectiveFilterHeight,c=e.effectiveFilterWidth,p=l-1-e.padInfo.front,m=u-1-e.padInfo.top,f=c-1-e.padInfo.left,h=l*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${l};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${u};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${c};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${n}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${h} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${u} * ${c} +
                  wR * ${c} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function Wq(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s}=e,i=s,{filterSize:a,strides:l,pad:u,dimRoundingMode:c}=o,p=[1,1,1],m=I.computePool3DInfo(i.shape,a,l,p,u,c),f=new va(m,"max",!0),h=t.runWebGLProgram(f,[i],i.dtype),g=new Dg(m),d=t.runWebGLProgram(g,[n,h],i.dtype);return t.disposeIntermediateTensorInfo(h),d}var p2={kernelName:Nu,backendName:"webgl",kernelFunc:Wq};function Uq(r){let{inputs:e,backend:t,attrs:o}=r,{dy:n,input:s,output:i}=e,a=s;Tn([s,i],"maxPoolGrad");let{filterSize:l,strides:u,pad:c,dimRoundingMode:p}=o,m=I.computePool2DInfo(a.shape,l,u,1,c,p),f=!0,h=new Qo(m,"max",f),g=t.runWebGLProgram(h,[a],a.dtype),d=new $g(m),x=t.runWebGLProgram(d,[n,g],a.dtype);return t.disposeIntermediateTensorInfo(g),x}var m2={kernelName:Su,backendName:"webgl",kernelFunc:Uq};function f2(r,e,t,o){let n=new Qo(t,"max",!1),s=o.runWebGLProgram(n,[r],"float32");n=new Qo(t,"max",!0,!0,e);let i=o.runWebGLProgram(n,[r],"float32");return[s,i]}var h2={kernelName:Tu,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:o}=r,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=e,l=t;b.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let u=[1,1];b.assert(I.eitherStridesOrDilationsAreOne(s,u),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${u}'`);let c=I.computePool2DInfo(o.shape,n,s,u,i),[p,m]=f2(o,a,c,l);return[p,m]}};function d2(r,e,t,o){let n=b.sizeFromShape(e),i=b.sizeFromShape(r.shape)/n,a=tt({inputs:{x:r},attrs:{shape:[i,n]},backend:o}),l=io(a,"float32","mean",o),u=tt({inputs:{x:l},attrs:{shape:t},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(l),u}var g2={kernelName:Ti,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{x:o}=r,{keepDims:n,axis:s}=e,i=t,a=o.shape.length,l=b.parseAxisParam(s,o.shape),u=l,c=I.getAxesPermutation(u,a),p=c!=null,m=i.shouldExecuteOnCPU([o]),f=[],h=o;if(p){if(m){let C=i.texData.get(h.dataId).values,T=new Array(a);for(let _=0;_<T.length;_++)T[_]=o.shape[c[_]];let A=Dl(C,o.shape,o.dtype,c,T);h=i.makeTensorInfo(T,o.dtype);let $=i.texData.get(h.dataId);$.values=A}else h=Ca(o,c,i);f.push(h),u=I.getInnerMostAxes(u.length,a)}I.assertAxesAreInnerMostDims("sum",u,a);let[g,d]=I.computeOutAndReduceShapes(h.shape,u),x=g;n&&(x=I.expandShapeToKeepDim(g,l));let y=d2(h,d,x,i);for(let w of f)i.disposeIntermediateTensorInfo(w);return y}};function Hq(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=b.parseAxisParam(s,n.shape),u=l,c=I.getAxesPermutation(u,a),p=n;c!=null&&(p=pe({inputs:{x:n},backend:t,attrs:{perm:c}}),u=I.getInnerMostAxes(u.length,n.shape.length)),I.assertAxesAreInnerMostDims("min",u,a);let[m,f]=I.computeOutAndReduceShapes(p.shape,u),h=b.sizeFromShape(f),g=tt({inputs:{x:p},backend:t,attrs:{shape:[-1,h]}}),d=io(g,g.dtype,"min",t),x;if(i){let y=I.expandShapeToKeepDim(m,l);x=tt({inputs:{x:d},backend:t,attrs:{shape:y}})}else x=tt({inputs:{x:d},backend:t,attrs:{shape:m}});return t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(d),c!=null&&t.disposeIntermediateTensorInfo(p),x}var x2={kernelName:Ii,backendName:"webgl",kernelFunc:Hq};var Kq=ap+`
  return min(a, b);
`,qq=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+so+`
  return result;
`,jq=Ht({opSnippet:Kq,packedOpSnippet:qq,cpuKernelImpl:b1}),y2={kernelName:as,backendName:"webgl",kernelFunc:jq};var Rg=class{constructor(e,t,o){this.variableNames=["x"],this.outputShape=t.map((c,p)=>c[0]+e[p]+c[1]);let n=e.length,s=kt(n),i=t.map(c=>c[0]).join(","),a=t.map((c,p)=>c[0]+e[p]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),u=o==="reflect"?0:1;if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${u};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${u};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${n}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${u};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${u};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${l}));
      }
    `}};var _g=class{constructor(e,t,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((h,g)=>h[0]+e[g]+h[1]);let n=e.length,s=kt(n),i=t.map(h=>h[0]).join(","),a=t.map((h,g)=>h[0]+e[g]).join(","),l=$e("rc",n),u=$e("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,m=o==="reflect"?0:1,f="";if(n===1){let h=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${m};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${m};
        }
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${h}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
      `}else{let h=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${m}) +
                gte * ((end - 1) * 2 - source + ${m});
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${u.join()}), ${p});
        ${l[n-1]} += 1;
        if(${c}) {
          ${h}
          result[1] = getChannel(getX(${u.join()}), ${p});
        }
        rc = outputLoc;
        ${l[n-2]} += 1;
        if(${l[n-2]} < ${this.outputShape[n-2]}) {
          ${h}
          result[2] = getChannel(getX(${u.join()}), ${p});
          ${l[n-1]} += 1;
          if(${c}) {
            ${h}
            result[3] = getChannel(getX(${u.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}};var Xq=({inputs:r,backend:e,attrs:t})=>{let{x:o}=r,{paddings:n,mode:s}=t,i=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new _g(o.shape,n,s):new Rg(o.shape,n,s);return e.runWebGLProgram(i,[o],o.dtype)},b2={kernelName:ki,backendName:"webgl",kernelFunc:Xq};var Yq=`if (b == 0.0) return NAN;
  return mod(a, b);`,Zq=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+so+`
  return result;
`,Jq=Ht({opSnippet:Yq,packedOpSnippet:Zq}),w2={kernelName:ls,backendName:"webgl",kernelFunc:Jq};var Fg=class{constructor(e,t,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[e,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}};var Qq=`
if (a == b) {
  return 1.0;
};
return a / b;`,tj=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,qw=Ht({opSnippet:Qq,packedOpSnippet:tj,checkOutOfBounds:!0}),C2={kernelName:qn,backendName:"webgl",kernelFunc:qw};var v2="return a - b;",jw=Ht({opSnippet:v2,packedOpSnippet:v2,supportsComplex:!0,cpuKernelImpl:B1}),S2={kernelName:Ns,backendName:"webgl",kernelFunc:jw};function Xw(r){let{inputs:e,backend:t,attrs:o}=r,{logits:n}=e,{dim:s}=o,i=b.parseAxisParam([s],n.shape),a=Kw({inputs:{x:n},backend:t,attrs:{reductionIndices:i,keepDims:!1}}),l=I.expandShapeToKeepDim(a.shape,i),u=tt({inputs:{x:a},backend:t,attrs:{shape:l}}),c=jw({inputs:{a:n,b:u},backend:t}),p=Ww({inputs:{x:c},backend:t}),m=Rl({inputs:{x:p},backend:t,attrs:{axis:i,keepDims:!1}}),f=tt({inputs:{x:m},backend:t,attrs:{shape:l}}),h=qw({inputs:{a:p,b:f},backend:t});return t.disposeIntermediateTensorInfo(a),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(f),h}var N2={kernelName:Ui,backendName:"webgl",kernelFunc:Xw};function ej(r){let{inputs:e,backend:t,attrs:o}=r,{logits:n}=e,{numSamples:s,seed:i,normalized:a}=o,l=a?n:Xw({inputs:{logits:n},backend:t,attrs:{dim:n.shape.length-1}}),u=l.shape[0],c=l.shape[1],p=new Fg(u,c,s),m=[[i]],f=t.runWebGLProgram(p,[l],"int32",m);return a||t.disposeIntermediateTensorInfo(l),f}var T2={kernelName:Iu,backendName:"webgl",kernelFunc:ej};var rj=Ue+`
  return -x;
`,oj=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function nj(r){let{inputs:e,backend:t}=r,{x:o}=e;if(t.shouldExecuteOnCPU([o])){let s=t.texData.get(o.dataId),[i,a]=C1(s.values,o.shape,o.dtype);return t.makeTensorInfo(a,o.dtype,i)}let n;return L().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Ur(o.shape,oj):n=new lr(o.shape,rj),t.runWebGLProgram(n,[o],o.dtype)}var I2={kernelName:Ei,backendName:"webgl",kernelFunc:nj};var sj=gr.nonMaxSuppressionV3Impl;function ij(r){I.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l}=o,u=t.readSync(n.dataId),c=t.readSync(s.dataId),{selectedIndices:p}=sj(u,c,i,a,l);return t.makeTensorInfo([p.length],"int32",new Int32Array(p))}var k2={kernelName:ku,backendName:"webgl",kernelFunc:ij};var aj=gr.nonMaxSuppressionV4Impl;function lj(r){I.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,padToMaxOutputSize:u}=o,c=t.readSync(n.dataId),p=t.readSync(s.dataId),{selectedIndices:m,validOutputs:f}=aj(c,p,i,a,l,u);return[t.makeTensorInfo([m.length],"int32",new Int32Array(m)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}var E2={kernelName:Eu,backendName:"webgl",kernelFunc:lj};var uj=gr.nonMaxSuppressionV5Impl;function cj(r){I.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:e,backend:t,attrs:o}=r,{boxes:n,scores:s}=e,{maxOutputSize:i,iouThreshold:a,scoreThreshold:l,softNmsSigma:u}=o,c=t.readSync(n.dataId),p=t.readSync(s.dataId),m=i,f=a,h=l,g=u,{selectedIndices:d,selectedScores:x}=uj(c,p,m,f,h,g);return[t.makeTensorInfo([d.length],"int32",new Int32Array(d)),t.makeTensorInfo([x.length],"float32",new Float32Array(x))]}var A2={kernelName:Au,backendName:"webgl",kernelFunc:cj};var Og=class{constructor(e,t,o,n){this.variableNames=["indices"],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var pj=r=>{let{inputs:e,backend:t,attrs:o}=r,{indices:n}=e,{dtype:s,depth:i,onValue:a,offValue:l}=o,u=b.sizeFromShape(n.shape),c=new Og(u,i,a,l),p=tt({inputs:{x:n},backend:t,attrs:{shape:[u]}}),m=t.runWebGLProgram(c,[p],s);t.disposeIntermediateTensorInfo(p);let f=[...n.shape,i],h=tt({inputs:{x:m},backend:t,attrs:{shape:f}});return t.disposeIntermediateTensorInfo(m),h},$2={kernelName:$i,backendName:"webgl",kernelFunc:pj};function Sm(r){let{inputs:e,backend:t}=r,{x:o}=e;if(o.dtype==="complex64"){let n=Ms({inputs:{input:o},backend:t}),s=Sm({inputs:{x:n},backend:t}),i=Fl({inputs:{input:o},backend:t}),a=Sm({inputs:{x:i},backend:t}),l=Kr({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Bs({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:t})}var D2={kernelName:qi,backendName:"webgl",kernelFunc:Sm};function R2(r){let{inputs:e,backend:t}=r,{x:o}=e;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=Ms({inputs:{input:o},backend:t}),s=R2({inputs:{x:n},backend:t}),i=Fl({inputs:{input:o},backend:t}),a=Sm({inputs:{x:i},backend:t}),l=Kr({inputs:{real:s,imag:a},backend:t});return t.disposeIntermediateTensorInfo(n),t.disposeIntermediateTensorInfo(s),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(a),l}else return Bs({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:t})}var _2={kernelName:Ai,backendName:"webgl",kernelFunc:R2};function mj(r){let{inputs:e,backend:t,attrs:o}=r,{axis:n}=o;if(e.length===1)return bg({inputs:{input:e[0]},backend:t,attrs:{dim:n}});let s=e[0].shape,i=e[0].dtype;e.forEach(c=>{b.assertShapesMatch(s,c.shape,"All tensors passed to stack must have matching shapes"),b.assert(i===c.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],l=e.map(c=>{let p=bg({inputs:{input:c},backend:t,attrs:{dim:n}});return a.push(p),p}),u=Gw({inputs:l,backend:t,attrs:{axis:n}});return a.forEach(c=>t.disposeIntermediateTensorInfo(c)),u}var F2={kernelName:Di,backendName:"webgl",kernelFunc:mj};var Lg=class{constructor(e,t,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((u,c)=>u[0]+e[c]+u[1]);let n=e.length,s=kt(n),i=t.map(u=>u[0]).join(","),a=t.map((u,c)=>u[0]+e[c]).join(","),l=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${l}));
        }
      }
    `}};var Pg=class{constructor(e,t,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=t.map((g,d)=>g[0]+e[d]+g[1]);let n=e.length,s=kt(n),i=t.map(g=>g[0]).join(","),a=t.map((g,d)=>g[0]+e[d]).join(","),l=$e("rc",n),u=$e("source",n),c=`${l[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${u.slice(-2).join()})`,m=[`${s} rc = outputLoc;`,`${l[n-1]} += 1;
       if(${c}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${l[n-2]} += 1;
       if(${l[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${l[n-1]} += 1;
         if(${c}) {`],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="";for(let g=0,d=n===1?2:4;g<d;g++)h+=`
        ${m[g]}
        if (${f}) {
          result[${g}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${g}] = getChannel(getX(${u.join()}), ${p});
        }
      `;h+=n===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}};var Yw=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{paddings:s,constantValue:i}=o;if(b.sizeFromShape(n.shape)===0){let u=s.map((c,p)=>c[0]+n.shape[p]+c[1]);return Bs({backend:t,attrs:{shape:u,value:i,dtype:n.dtype}})}let a=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Pg(n.shape,s,i):new Lg(n.shape,s,i),l=[[i]];return t.runWebGLProgram(a,[n],n.dtype,l)},O2={kernelName:Ri,backendName:"webgl",kernelFunc:Yw};var fj=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,hj=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+so+`
  return result;
`,dj=Ht({opSnippet:fj,packedOpSnippet:hj}),L2={kernelName:cs,backendName:"webgl",kernelFunc:dj};function gj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{axis:s,keepDims:i}=o,a=n.shape.length,l=[],u=b.parseAxisParam(s,n.shape),c=u,p=I.getAxesPermutation(c,a),m=n;p!=null&&(m=pe({inputs:{x:n},backend:t,attrs:{perm:p}}),c=I.getInnerMostAxes(c.length,a),l.push(m)),I.assertAxesAreInnerMostDims("prod",c,a);let f;if(t.shouldExecuteOnCPU([m])){let h=t.texData.get(m.dataId).values,{outVals:g,outShape:d,outDtype:x}=S1(m.shape,m.dtype,h,c);f=t.makeTensorInfo(d,x,g)}else{let[h,g]=I.computeOutAndReduceShapes(m.shape,c),d=b.sizeFromShape(g),x=tt({inputs:{x:m},backend:t,attrs:{shape:[-1,d]}}),y=tl(n.dtype),w=io(x,y,"prod",t);f=tt({inputs:{x:w},backend:t,attrs:{shape:h}}),l.push(x),l.push(w)}if(i){l.push(f);let h=I.expandShapeToKeepDim(f.shape,u);f=tt({inputs:{x:f},backend:t,attrs:{shape:h}})}return l.forEach(h=>t.disposeIntermediateTensorInfo(h)),f}var P2={kernelName:Fi,backendName:"webgl",kernelFunc:gj};function xj(r){let{inputs:e,backend:t,attrs:o}=r,{paramsNestedSplits:n,paramsDenseValues:s,indices:i}=e,{outputRaggedRank:a}=o,l=n.map(x=>t.readSync(x.dataId)),u=n.map(x=>x.shape),c=t.readSync(s.dataId),p=t.readSync(i.dataId),[m,f,h]=N1(l,u,c,s.shape,s.dtype,p,i.shape,a),g=m.map(x=>t.makeTensorInfo([x.length],"int32",x)),d=t.makeTensorInfo(h,s.dtype,f);return g.concat([d])}var z2={kernelName:$u,backendName:"webgl",kernelFunc:xj};function yj(r){let{inputs:e,backend:t}=r,{starts:o,limits:n,deltas:s}=e,i=t.readSync(o.dataId),a=t.readSync(n.dataId),l=t.readSync(s.dataId),[u,c]=T1(i,o.shape,o.dtype,a,n.shape,l,s.shape),p=t.makeTensorInfo([u.length],"int32",u),m=t.makeTensorInfo([c.length],o.dtype,c);return[p,m]}var M2={kernelName:Du,backendName:"webgl",kernelFunc:yj};function bj(r){let{inputs:e,backend:t,attrs:o}=r,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=e,{rowPartitionTypes:l}=o,u=t.readSync(n.dataId),c=t.readSync(s.dataId),p=t.readSync(i.dataId),m=a.map(d=>t.readSync(d.dataId)),f=a.map(d=>d.shape),[h,g]=I1(u,n.shape,c,s.shape,s.dtype,p,i.shape,m,f,l);return t.makeTensorInfo(h,s.dtype,g)}var B2={kernelName:Ru,backendName:"webgl",kernelFunc:bj};var Zw=r=>{let{backend:e,attrs:t}=r,{start:o,stop:n,step:s,dtype:i}=t,a=k1(o,n,s,i);return e.makeTensorInfo([a.length],i,a)},V2={kernelName:_u,backendName:"webgl",kernelFunc:Zw};var wj="return 1.0 / x;",Cj=dt({opSnippet:wj}),G2={kernelName:ps,backendName:"webgl",kernelFunc:Cj};var vj=Ue+`
  return (x < 0.0) ? 0.0 : x;
`,Sj=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Nj=dt({opSnippet:vj,packedOpSnippet:Sj}),W2={kernelName:ms,backendName:"webgl",kernelFunc:Nj};var Tj=Ue+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Ij=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,kj=dt({opSnippet:Tj,packedOpSnippet:Ij}),U2={kernelName:fs,backendName:"webgl",kernelFunc:kj};var zg=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m;s?m="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":m="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};var Mg=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m;s?m="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":m="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${o-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function Ej(r){let{inputs:e,backend:t,attrs:o}=r,{images:n}=e,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=L().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Mg(n.shape,l,u,s,i):new zg(n.shape,l,u,s,i);return t.runWebGLProgram(c,[n],"float32")}var H2={kernelName:Pi,backendName:"webgl",kernelFunc:Ej};var Bg=class{constructor(e,t,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,n,s]=t,[,i,a]=e,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],m=1/c,f=1/p,h=Math.ceil(m)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${h});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${n-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function Aj(r){let{inputs:e,backend:t,attrs:o}=r,{images:n,dy:s}=e,{alignCorners:i}=o,a=new Bg(s.shape,n.shape,i);return t.runWebGLProgram(a,[s],s.dtype)}var K2={kernelName:Lu,backendName:"webgl",kernelFunc:Aj};var Vg=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m=n?"0.5":"0.0",f;s?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${c[0]/p[0]},
          ${c[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${l}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var Gg=class{constructor(e,t,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,l,u]=e;this.outputShape=[i,t,o,u];let c=[n&&t>1?a-1:a,n&&o>1?l-1:l],p=[n&&t>1?t-1:t,n&&o>1?o-1:o],m=n?"0.5":"0.0",f;s?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${c[0]/p[0]},
          ${c[1]/p[1]},
          ${c[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${l}.0,
                                     ${l}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${u-1};
        bool hasNextRow = coords.z < ${o-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function $j(r){let{inputs:e,backend:t,attrs:o}=r,{images:n}=e,{alignCorners:s,halfPixelCenters:i,size:a}=o,[l,u]=a,c=L().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Gg(n.shape,l,u,s,i):new Vg(n.shape,l,u,s,i);return t.runWebGLProgram(c,[n],n.dtype)}var q2={kernelName:Li,backendName:"webgl",kernelFunc:$j};var Wg=class{constructor(e,t,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t;let[,n,s]=t,[,i,a]=e,l=[o&&i>1?n-1:n,o&&a>1?s-1:s],u=[o&&i>1?i-1:i,o&&a>1?a-1:a],c=l[0]/u[0],p=l[1]/u[1],m=1/c,f=1/p,h=Math.ceil(m)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${c});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${h});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${l[0]}) *
                (float(dyR) / float(${u[0]}));

            float sourceFracCol =
                float(${l[1]}) *
                  (float(dyC) / float(${u[1]}));

            int sourceNearestRow = int(min(
                float(int(${n}) - 1),
                ${o} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${o} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function Dj(r){let{inputs:e,backend:t,attrs:o}=r,{images:n,dy:s}=e,{alignCorners:i}=o,a=new Wg(s.shape,n.shape,i);return t.runWebGLProgram(a,[s],s.dtype)}var j2={kernelName:Ou,backendName:"webgl",kernelFunc:Dj};var Ug=class{constructor(e,t){this.variableNames=["x"];let o=e.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=e,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let n=a=>t.indexOf(a)!==-1&&e[a]!==1?`${e[a]} - coords[${a}] - 1`:`coords[${a}]`,s=e.map((a,l)=>n(l)).join(","),i=kt(o);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var Hg=class{constructor(e,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=e.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=e;let n=$e("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,i=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,a=kt(o);o===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${l(n.slice())};
          if(${s}){
            result.g = ${u(n.slice())};
          }
          if(${i}) {
            result.b = ${c(n.slice())};
            if(${s}) {
              result.a = ${p(n.slice())};
            }
          }
          setOutput(result);
        }
    `;function l(h){return m(h)}function u(h){return h[o-1]="("+h[o-1]+" + 1)",m(h)}function c(h){return h[o-2]="("+h[o-2]+" + 1)",m(h)}function p(h){return h[o-1]="("+h[o-1]+" + 1)",h[o-2]="("+h[o-2]+" + 1)",m(h)}function m(h){let g=e.map((y,w)=>f(w,h)),d=g.join(","),x=g.slice(-2).join(",");return`getChannel(getX(${d}), vec2(${x}))`}function f(h,g){return t.indexOf(h)!==-1&&e[h]!==1?`${e[h]} - ${g[h]} - 1`:`${g[h]}`}}};function Rj(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{dims:s}=o,i=n.shape.length,a=b.parseAxisParam(s,n.shape);if(i===0)return De({inputs:{x:n},backend:t});let l=L().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Hg(n.shape,a):new Ug(n.shape,a);return t.runWebGLProgram(l,[n],n.dtype)}var X2={kernelName:zi,backendName:"webgl",kernelFunc:Rj};var Kg=class{constructor(e,t){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=e[1],n=e[2];this.outputShape=e;let s="";typeof t=="number"?s=`float outputValue = ${t.toFixed(2)};`:s=`
        vec3 fill = vec3(${t.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${n} && coordY >= 0 && coordY < ${o}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var Y2={kernelName:Qu,backendName:"webgl",kernelFunc:({inputs:r,attrs:e,backend:t})=>{let{image:o}=r,{radians:n,fillValue:s,center:i}=e,a=t,l=new Kg(o.shape,s),[u,c]=I.getImageCenter(i,o.shape[1],o.shape[2]),p=[[u,c,Math.sin(n),Math.cos(n)]];return a.runWebGLProgram(l,[o],o.dtype,p)}};var _j=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,Fj=dt({opSnippet:_j}),Z2={kernelName:hs,backendName:"webgl",kernelFunc:Fj};var Oj="return inversesqrt(x);",Lj=dt({opSnippet:Oj,cpuKernelImpl:E1}),J2={kernelName:ds,backendName:"webgl",kernelFunc:Lj};var Sa=class{constructor(e,t,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let u=kt(s.length),c=kt(i.length),p="";o===1?p="i":o===2&&(p="i, j");let m=`getIndices(${p})`,f="";n===1?f="i":n===2&&(f="i, coords[1]");let h=`getUpdates(${f})`,g="";l&&(g="coords[0], coords[1]");let d=`getDefaultValue(${g})`,x=t>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${m});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${h};
              found = true;
            }
          }
          setOutput(mix(${d}, sum, float(found)));
        }
      `}};var qg=class{constructor(e,t,o,n,s,i,a=!0,l=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=i;let u=kt(s.length),c=kt(i.length),p="";o===1?p="i":o===2&&(p="i, j");let m=`getIndices(${p})`,f="";n===1?f="i":n===2&&(f="i, coords[1]");let h=`getUpdates(${f})`,g="";l&&(g="coords[0], coords[1]");let d=`getDefaultValue(${g})`,x=t>1?"strides[j]":"strides",y=t>1?"strides[j + 1]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${m});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${y};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${h};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${d}, sum, found));
        }
      `}};function Pj(r){let{inputs:e,backend:t,attrs:o}=r,{indices:n,updates:s}=e,{shape:i}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=I.calculateShapes(s,n,i),m=[p/u,u];if(p===0)return t.makeTensorInfo(i,n.dtype);let f=tt({inputs:{x:n},backend:t,attrs:{shape:[l,a]}}),h=tt({inputs:{x:s},backend:t,attrs:{shape:[l,u]}}),g=t.makeTensorInfo([],"float32",new Float32Array([0])),d;L().getBool("WEBGL_PACK")?d=new qg(l,a,f.shape.length,h.shape.length,c,m):d=new Sa(l,a,f.shape.length,h.shape.length,c,m);let x=t.runWebGLProgram(d,[h,f,g],h.dtype),y=tt({inputs:{x},backend:t,attrs:{shape:i}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(x),t.disposeIntermediateTensorInfo(g),y}var Q2={kernelName:Pu,backendName:"webgl",kernelFunc:Pj};var jg=class{constructor(e,t,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[e,o];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=L().getNumber("WEBGL_VERSION")===2?s:i,l=n==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${l} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function zj(r){let{inputs:e,backend:t,attrs:o}=r,{sortedSequence:n,values:s}=e,{side:i}=o,a=new jg(n.shape[0],n.shape[1],s.shape[1],i),l=[[n.shape[1]]];return t.runWebGLProgram(a,[n,s],"int32",l)}var tA={kernelName:Mu,backendName:"webgl",kernelFunc:zj};var Xg=class{constructor(e,t,o){this.variableNames=["c","a","b"],this.outputShape=t;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],u=[];for(let c=0;c<t.length;c++)u.push(`${a[c]}`),c<e&&l.push(`${a[c]}`);n=l.join(),s=u.join()}let i=kt(o);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function Mj(r){let{inputs:e,backend:t}=r,{condition:o,t:n,e:s}=e,i=new Xg(o.shape.length,n.shape,n.shape.length);return t.runWebGLProgram(i,[o,n,s],Le(n.dtype,s.dtype))}var eA={kernelName:Mi,backendName:"webgl",kernelFunc:Mj};var Bj=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${I.SELU_SCALEALPHA};
  float scale = ${I.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Vj=dt({opSnippet:Bj}),rA={kernelName:gs,backendName:"webgl",kernelFunc:Vj};var Gj=Do+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,Wj=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Uj=dt({opSnippet:Gj,packedOpSnippet:Wj,cpuKernelImpl:$1}),oA={kernelName:ws,backendName:"webgl",kernelFunc:Uj};var Hj=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,Kj=dt({opSnippet:Hj}),nA={kernelName:bs,backendName:"webgl",kernelFunc:Kj};var qj=Do+`
  return sin(x);
`,jj=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${so}
  return result;
`,Xj=dt({opSnippet:qj,packedOpSnippet:jj}),sA={kernelName:xs,backendName:"webgl",kernelFunc:Xj};var Yj=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,Zj=dt({opSnippet:Yj}),iA={kernelName:ys,backendName:"webgl",kernelFunc:Zj};var Jj=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,Qj=dt({opSnippet:Jj}),aA={kernelName:Cs,backendName:"webgl",kernelFunc:Qj};var t6=r=>{let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{blockShape:s,paddings:i}=o;b.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((x,y)=>x*y),l=[[0,0]];l.push(...i);for(let x=1+s.length;x<n.shape.length;++x)l.push([0,0]);let u=[],c=Yw({inputs:{x:n},backend:t,attrs:{paddings:l,constantValue:0}}),p=I.getReshaped(c.shape,s,a,!1),m=I.getPermuted(p.length,s.length,!1),f=I.getReshapedPermuted(c.shape,s,a,!1),h=tt({inputs:{x:c},backend:t,attrs:{shape:p}}),g=pe({inputs:{x:h},backend:t,attrs:{perm:m}}),d=tt({inputs:{x:g},backend:t,attrs:{shape:f}});return u.push(c),u.push(h),u.push(g),u.forEach(x=>t.disposeIntermediateTensorInfo(x)),d},lA={kernelName:Gi,backendName:"webgl",kernelFunc:t6};function e6(r){let{inputs:e,backend:t}=r,{indices:o,values:n,denseShape:s,defaultValue:i}=e;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=t.readSync(o.dataId),l=t.readSync(n.dataId),u=t.readSync(s.dataId),c=t.readSync(i.dataId)[0],[p,m,f,h,g]=R1(a,o.shape,o.dtype,l,n.dtype,u,c);return[t.makeTensorInfo(m,o.dtype,p),t.makeTensorInfo([m[0]],n.dtype,f),t.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(d=>Number(d)))),t.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var uA={kernelName:Bu,backendName:"webgl",kernelFunc:e6};function r6(r){let{inputs:e,backend:t}=r,{inputIndices:o,inputShape:n,newShape:s}=e;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(t.readSync(n.dataId)),a=t.readSync(o.dataId),l=Array.from(t.readSync(s.dataId)),[u,c,p]=_1(a,o.shape,o.dtype,i,l);return[t.makeTensorInfo(c,o.dtype,u),t.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var cA={kernelName:Vu,backendName:"webgl",kernelFunc:r6};function o6(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=t.readSync(o.dataId),a=t.readSync(n.dataId),l=t.readSync(s.dataId),[u,c]=$d(i,o.shape,o.dtype,a,l,!0);return t.makeTensorInfo(c,o.dtype,u)}var pA={kernelName:Gu,backendName:"webgl",kernelFunc:o6};function n6(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=t.readSync(o.dataId),a=t.readSync(n.dataId),l=t.readSync(s.dataId),[u,c]=$d(i,o.shape,o.dtype,a,l);return t.makeTensorInfo(c,o.dtype,u)}var mA={kernelName:Wu,backendName:"webgl",kernelFunc:n6};function s6(r){let{inputs:e,backend:t,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:i}=e,{outputShape:a}=o,{sliceRank:l,numUpdates:u,sliceSize:c,strides:p,outputSize:m}=I.calculateShapes(s,n,a),f=!1;if(s.dtype==="string"){let x=t.bufferSync(n),y=t.bufferSync(s),w=b.decodeString(t.readSync(i.dataId)[0]),C=A1(x,y,a,m,c,u,l,p,w,f);return t.makeTensorInfo(a,C.dtype,C.values)}let h=new Sa(u,l,n.shape.length,s.shape.length,p,[m,1],f),g=t.runWebGLProgram(h,[s,n,i],s.dtype),d=tt({inputs:{x:g},backend:t,attrs:{shape:a}});return t.disposeIntermediateTensorInfo(g),d}var fA={kernelName:Uu,backendName:"webgl",kernelFunc:s6};function i6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{numOrSizeSplits:s,axis:i}=o,a=b.parseAxisParam(i,n.shape)[0],l=I.prepareSplitSize(n,s,a),u=n.shape.length,c=new Array(u).fill(0),p=n.shape.slice();return l.map(m=>{let f=[...p];f[a]=m;let h=tn({inputs:{x:n},backend:t,attrs:{begin:c,size:f}});return c[a]+=m,h})}var hA={kernelName:Wi,backendName:"webgl",kernelFunc:i6};var dA="return sqrt(x);",a6=dt({opSnippet:dA,packedOpSnippet:dA,cpuKernelImpl:F1}),gA={kernelName:vs,backendName:"webgl",kernelFunc:a6};var l6="return x * x;",u6=dt({opSnippet:l6}),xA={kernelName:Hu,backendName:"webgl",kernelFunc:u6};var yA="return (a - b) * (a - b);",c6=Ht({opSnippet:yA,packedOpSnippet:yA}),bA={kernelName:Ss,backendName:"webgl",kernelFunc:c6};function p6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e;if(n.dtype!=="string")throw new Error("Input must be of datatype string");let s=t.readSync(n.dataId),i=I.fromUint8ToStringArray(s),a=O1(i,"string",o);return t.makeTensorInfo(n.shape,"string",a)}var wA={kernelName:Ha,backendName:"webgl",kernelFunc:p6};function m6({inputs:r,attrs:e,backend:t}){let{x:o}=r,n=Ue+`
    return x > 0.0 ? 1.0 : float(${e.alpha});
  `,s=new lr(o.shape,n);return t.runWebGLProgram(s,[o],o.dtype)}var CA={kernelName:ks,backendName:"webgl",kernelFunc:m6};var Yg=class{constructor(e,t,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=kt(o.length),i=kt(o.length),a="";if(n===1)a="coords * strides + begin";else{let l=0;a=o.map((u,c)=>(l++,o.length===1?`coords * strides[${c}] + begin[${c}]`:`coords[${l-1}] * strides[${c}] + begin[${c}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${e});
      ${s} strides = ${s}(${t});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function f6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:m}=o,{finalShapeSparse:f,finalShape:h,isIdentity:g,sliceDim0:d,isSimpleSlice:x,begin:y,end:w,strides:C}=Qe.sliceInfo(n.shape,s,i,a,l,u,c,p,m),T;if(g)T=tt({inputs:{x:n},backend:t,attrs:{shape:h}});else if(d||x){b.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let $=Qe.computeOutShape(y,w,C),_=tn({inputs:{x:n},backend:t,attrs:{begin:y,size:$}});T=tt({inputs:{x:_},backend:t,attrs:{shape:h}}),t.disposeIntermediateTensorInfo(_)}else if(t.shouldExecuteOnCPU([n])){let _=t.readSync(n.dataId),O=ft(n.shape,n.dtype,_),z=L1(f,O,C,y);T=t.makeTensorInfo(h,n.dtype,z.values)}else{let _=new Yg(y,C,f);T=t.runWebGLProgram(_,[n],n.dtype)}let A=tt({inputs:{x:T},backend:t,attrs:{shape:h}});return t.disposeIntermediateTensorInfo(T),A}var vA={kernelName:Ku,backendName:"webgl",kernelFunc:f6};function h6(r){let{inputs:e,backend:t,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=o,{data:c,dataSplits:p}=e,m=t.readSync(c.dataId),f=t.readSync(p.dataId),[h,g]=P1(m,f,n,s,i,a,l,u);return[t.makeTensorInfo([h.length],"string",h),t.makeTensorInfo(p.shape,"int32",g)]}var SA={kernelName:qu,backendName:"webgl",kernelFunc:h6};function d6(r){let{inputs:e,backend:t,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:i}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=t.readSync(s.dataId),l=t.readSync(i.dataId)[0],[u,c,p]=z1(a,l,n),m=c.length;return[t.makeTensorInfo([m,2],"int32",u),t.makeTensorInfo([m],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(p))]}var NA={kernelName:ju,backendName:"webgl",kernelFunc:d6};function g6(r){let{inputs:e,backend:t,attrs:o}=r,{numBuckets:n}=o,{input:s}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=t.readSync(s.dataId),a=M1(i,n);return t.makeTensorInfo(s.shape,"int32",a)}var TA={kernelName:Xu,backendName:"webgl",kernelFunc:g6};var x6="return tan(x);",y6=dt({opSnippet:x6}),IA={kernelName:Ts,backendName:"webgl",kernelFunc:y6};var b6=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,w6=dt({opSnippet:b6}),kA={kernelName:Is,backendName:"webgl",kernelFunc:w6};function C6(r){let{inputs:e,backend:t,attrs:o}=r,{tensor:n,indices:s,updates:i}=e,{}=o,{sliceRank:a,numUpdates:l,sliceSize:u,strides:c,outputSize:p}=I.calculateShapes(i,s,n.shape),m=[p/u,u];if(p===0)return t.makeTensorInfo(n.shape,s.dtype);let f=tt({inputs:{x:s},backend:t,attrs:{shape:[l,a]}}),h=tt({inputs:{x:i},backend:t,attrs:{shape:[l,u]}}),g=tt({inputs:{x:n},backend:t,attrs:{shape:m}}),d=new Sa(l,a,f.shape.length,h.shape.length,c,m,!1,!0),x=t.runWebGLProgram(d,[h,f,g],g.dtype),y=tt({inputs:{x},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(x),y}var EA={kernelName:zu,backendName:"webgl",kernelFunc:C6};var Zg=class{constructor(e,t){this.variableNames=["A"];let o=new Array(e.length);for(let i=0;i<o.length;i++)o[i]=e[i]*t[i];this.outputShape=o,this.rank=o.length;let n=kt(this.rank),s=v6(e);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function v6(r){let e=r.length;if(e>5)throw Error(`Tile for rank ${e} is not yet supported`);if(e===1)return`imod(resRC, ${r[0]})`;let t=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<r.length;n++)o.push(`imod(${t[n]}, ${r[n]})`);return o.join()}function Jw(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let l=t.readSync(n.dataId),u=n.dtype==="string"?l.map(m=>b.decodeString(m)):l,c=ft(n.shape,n.dtype,u),p=V1(c,s);return t.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new Zg(n.shape,s);return t.runWebGLProgram(i,[n],n.dtype)}var AA={kernelName:pn,backendName:"webgl",kernelFunc:Jw};var Jg=class{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},Qg=class{constructor(e){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function Ol(r,e){e!==null&&r.disposeIntermediateTensorInfo(e)}function $A(r){let e=1;for(;e<r;)e*=2;return e}function S6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{k:s,sorted:i}=o,a=L().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),l=L().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),u=n.shape,c=u[u.length-1];if(t.shouldExecuteOnCPU([n])||c<a||s>l){let z=t.readSync(n.dataId),[V,G]=G1(z,u,n.dtype,s,i);return[t.makeTensorInfo(V.shape,V.dtype,V.values),t.makeTensorInfo(G.shape,G.dtype,G.values)]}if(s===0)return u[u.length-1]=0,[t.makeTensorInfo(u,n.dtype,[]),t.makeTensorInfo(u,"int32",[])];if(c===1)return[n,Bs({attrs:{shape:u,dtype:"int32",value:0},backend:t})];let p=t.texData.get(n.dataId),m=p!==null&&p.isPacked,f=m?t.unpackTensor(n):n,g=b.sizeFromShape(u)/c,d=tt({inputs:{x:f},attrs:{shape:[g,c]},backend:t});m&&Ol(t,f);let x=$A(s),y=$A(c),w=null,C=()=>w===null?[d,d]:[d,w],T=(z,V,G)=>{let W=C(),H=new Jg(G),Y=[[c],[w===null?1:0],[Number.NEGATIVE_INFINITY],[z],[V]],J=w;w=t.runWebGLProgram(H,W,"int32",Y),Ol(t,J)};for(let z=1;z<x;z*=2){let V=z*2;for(let G=z;G>=1;G/=2)T(V,G,[g,y])}for(let z=y;z>x;z/=2){let V=C(),G=new Qg([g,z/2]),H=[[c],[w===null?1:0],[x]],K=w;w=t.runWebGLProgram(G,V,"int32",H),Ol(t,K);let Y=x/2,J=Y*2;for(let X=Y;X>=1;X/=2)T(J,X,w.shape)}let A=w;w=tn({inputs:{x:w},backend:t,attrs:{begin:0,size:[g,s]}}),Ol(t,A);let $=Hw({inputs:{x:d,indices:w},backend:t,attrs:{axis:1,batchDims:1}});Ol(t,d);let _=u.slice(0,-1);_.push(s),A=w,w=tt({inputs:{x:w},attrs:{shape:_},backend:t}),Ol(t,A);let O=$;return $=tt({inputs:{x:$},attrs:{shape:_},backend:t}),Ol(t,O),[$,w]}var DA={kernelName:Yu,backendName:"webgl",kernelFunc:S6};var tx=class{constructor(e,t,o,n,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=o==="nearest"?1:2,l;switch(n){case"constant":l=1;break;case"reflect":l=2;break;case"wrap":l=3;break;case"nearest":l=4;break;default:l=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${l} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${l} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function N6(r){let{inputs:e,backend:t,attrs:o}=r,{image:n,transforms:s}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=o,[c,p,m,f]=n.shape,[h,g]=u??[p,m],d=[c,h,g,f],x=new tx(p,m,i,a,l,d);return t.runWebGLProgram(x,[n,s],"float32")}var RA={kernelName:Zu,backendName:"webgl",kernelFunc:N6};function T6(r){let{inputs:e,attrs:t,backend:o}=r,{axis:n}=t,{x:s}=e;Tn(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=o.readSync(s.dataId),{outputValues:a,outputShape:l,indices:u}=W1(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([u.length],"int32",u)]}var _A={kernelName:Ju,backendName:"webgl",kernelFunc:T6};function I6(r){let{inputs:e,backend:t,attrs:o}=r,{value:n}=e,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n,a=i.shape.length,l=n.shape[s],u=new Array(a-1),c=0;for(let g=0;g<a;g++)g!==s&&(u[c++]=i.shape[g]);let p=[],m=new Array(a).fill(0),f=i.shape.slice();f[s]=1;let h=new Array(l);for(let g=0;g<h.length;g++){m[s]=g;let d=tn({inputs:{x:i},backend:t,attrs:{begin:m,size:f}}),x=tt({inputs:{x:d},backend:t,attrs:{shape:u}});h[g]=x,p.push(d)}return p.forEach(g=>t.disposeIntermediateTensorInfo(g)),h}var FA={kernelName:Hi,backendName:"webgl",kernelFunc:I6};var ex=class{constructor(e,t){this.variableNames=["x","segmentIds"];let o=e.windowSize,n=e.batchSize,s=e.inSize,i=e.numSegments,a=i*Math.ceil(s/o);this.outputShape=[n,a];let l="0.0",u="sumValue",c=Math.floor(o/4)*4,p=o%4,m=`
        sumValue += dot(values, segFilter);
    `,f="";s%o>0&&(f=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${l};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${h}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${o}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${c}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${m}
        }

        int inIdx = inOffset + ${c};
        if (${p===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${m}
        } else if (${p===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${m}
        } else if (${p===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${m}
        }
        setOutput(${u});
      }
    `}};function k6(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,segmentIds:s}=e,{numSegments:i}=o,a=n.shape.length,l=[],u=0,c=I.getAxesPermutation([u],a),p=n;c!=null&&(p=pe({inputs:{x:n},backend:t,attrs:{perm:c}}),l.push(p),u=I.getInnerMostAxes(1,a)[0]);let m=I.segment_util.computeOutShape(p.shape,u,i),f=b.sizeFromShape([p.shape[u]]),h=tt({inputs:{x:p},backend:t,attrs:{shape:[-1,f]}});l.push(h);let g=tl(n.dtype),d=(C,T,A,$,_)=>{let O=C.shape[0],z=C.shape[1],V=I.segment_util.segOpComputeOptimalWindowSize(z,_),G={windowSize:V,inSize:z,batchSize:O,numSegments:_},W=new ex(G,T),H=t.compileAndRun(W,[C,A],$);if(l.push(H),H.shape[1]===_)return H;let K=Zw({backend:t,attrs:{start:0,stop:_,step:1,dtype:"float32"}}),Y=Jw({inputs:{x:K},backend:t,attrs:{reps:[z/V]}});return l.push(K),l.push(Y),d(H,T,Y,$,_)},x=d(h,"unsortedSegmentSum",s,g,i),y=tt({inputs:{x},backend:t,attrs:{shape:m}}),w=y;if(c!=null){l.push(y);let C=I.getUndoAxesPermutation(c);w=pe({inputs:{x:w},backend:t,attrs:{perm:C}})}return l.forEach(C=>t.disposeIntermediateTensorInfo(C)),w}var OA={kernelName:Ki,backendName:"webgl",kernelFunc:k6};var E6=[xk,bk,wk,Ck,Sk,Nk,Tk,Ik,Ak,$k,Dk,Rk,_k,Fk,Ok,Lk,Pk,zk,Mk,Bk,Vk,Wk,Uk,Hk,Kk,Yk,Jk,Qk,ak,eE,oE,nE,sE,iE,aE,lE,uE,cE,pE,mE,dE,gE,xE,yE,bE,wE,CE,vE,SE,NE,TE,IE,kE,EE,AE,$E,RE,_E,FE,OE,PE,zE,ME,BE,VE,GE,WE,UE,HE,ik,KE,rE,qE,jE,XE,lk,YE,ZE,JE,QE,t2,e2,r2,o2,n2,s2,a2,l2,u2,c2,p2,m2,h2,g2,x2,y2,b2,w2,T2,pk,I2,k2,E2,A2,qk,$2,_2,F2,O2,L2,uk,P2,z2,M2,B2,V2,jk,C2,G2,W2,U2,fk,H2,K2,q2,j2,X2,Y2,Z2,J2,Q2,tA,eA,rA,oA,nA,sA,iA,Gk,N2,aA,lA,uA,cA,pA,mA,fA,hA,gA,xA,bA,wA,CA,vA,SA,NA,TA,S2,dk,IA,kA,EA,AA,DA,RA,gk,_A,FA,OA,D2];for(let r of E6)Jm(r);var rx={kernelName:ei,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,To(j(t,"float32"),-1))}}};var LA={kernelName:Ln,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=$t(j(t,"float32")),n=Xt(et(st(1),o));return _t(rt(r,n))}}}};var PA={kernelName:Pn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=Xt(et($t(j(t,"float32")),1));return rt(r,o)}}}};var zA={kernelName:Bo,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=r,l=Jt(t.shape,n);return l.length>0&&(a=it(a,l)),R(a,t.shape)},b:()=>{let a=r,l=Jt(o.shape,n);return l.length>0&&(a=it(a,l)),R(a,o.shape)}}}};var MA={kernelName:ri,saveAllInputs:!0,gradFunc:(r,e)=>{let t={};return e.forEach((o,n)=>{t[n]=()=>r.clone()}),t}};var BA={kernelName:oi,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>gt(t)}}};var VA={kernelName:ni,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>gt(t)}}};var GA={kernelName:zn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,Xt(et(st(1),$t(j(t,"float32")))))}}};var WA={kernelName:Mn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=Xt(U(st(1),$t(j(t,"float32"))));return rt(r,o)}}}};var UA={kernelName:Gn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=U($t(t),$t(o)),l=D(r,rt(o,a)),u=Jt(t.shape,n);return u.length>0&&(l=it(l,u)),R(l,t.shape)},b:()=>{let a=U($t(t),$t(o)),l=_t(D(r,rt(t,a))),u=Jt(o.shape,n);return u.length>0&&(l=it(l,u)),R(l,o.shape)}}}};var HA={kernelName:Bn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,U($t(j(t,"float32")),1))}}};var KA={kernelName:Vn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,et(st(1),$t(j(t,"float32"))))}}};function A6(r,e,t,o,n,s){let i=S(r,"dy","avgPool3dGrad"),a=S(e,"input","avgPool3dGrad"),l=i,u=a,c=!1;a.rank===4&&(c=!0,l=R(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]]),u=R(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),E(l.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${l.rank}.`),E(u.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${u.rank}.`),ee("avgPool3dGrad",n,s);let p={dy:l,input:u},m={filterSize:t,strides:o,pad:n,dimRoundingMode:s},f=k.runKernel(Ql,p,m);return c?R(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var qA=N({avgPool3dGrad_:A6});var jA={kernelName:ii,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{filterSize:n,strides:s,pad:i,dimRoundingMode:a}=t;return{x:()=>qA(r,o,n,s,i,a)}}};function $6(r,e,t,o,n){let s=S(r,"dy","avgPoolGrad"),i=S(e,"input","avgPoolGrad");E(i.rank===s.rank,()=>`Rank of input (${i.rank}) does not match rank of dy (${s.rank})`);let a=i,l=s,u=!1;i.rank===3&&(u=!0,a=R(i,[1,i.shape[0],i.shape[1],i.shape[2]]),l=R(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(l.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${l.rank}.`),E(a.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${a.rank}.`);let c={dy:l,input:a},p={filterSize:t,strides:o,pad:n},m=k.runKernel(Jl,c,p);return u?R(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var XA=N({avgPoolGrad_:$6});var YA={kernelName:si,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{filterSize:n,strides:s,pad:i}=t;return{x:()=>XA(r,o,n,s,i)}}};var ZA={kernelName:ai,inputsToSave:["a","b"],gradFunc:(r,e,t)=>{let[o,n]=e,{transposeA:s,transposeB:i}=t;return!s&&!i?{a:()=>Dt(r,n,!1,!0),b:()=>Dt(o,r,!0,!1)}:!s&&i?{a:()=>Dt(r,n,!1,!1),b:()=>Dt(r,o,!0,!1)}:s&&!i?{a:()=>Dt(n,r,!1,!0),b:()=>Dt(o,r,!1,!1)}:{a:()=>Dt(n,r,!0,!0),b:()=>Dt(r,o,!0,!0)}}};var JA={kernelName:li,gradFunc:(r,e,t)=>{let{blockShape:o,crops:n}=t;return{x:()=>ua(r,o,n)}}};var QA={kernelName:cC,gradFunc:(r,e,t)=>{let o=t,n=o.inputShape,s=o.shape,i=Array.from(s);for(let l=n.length-1;l>=0;l--)if(n[l]===s[l])i[l]=1;else if(n[l]!==1)throw new Error(`broadcastTo(): [${n}] cannot be broadcast to [${s}].`);let a=[];for(let l=0;l<i.length;l++)i[l]>1&&a.push(l);return{x:()=>it(r,a,!0)}}};var t$={kernelName:un,gradFunc:r=>({x:()=>r.clone()})};var e$={kernelName:Wn,gradFunc:r=>({x:()=>gt(r)})};var r$={kernelName:Un,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{clipValueMin:n,clipValueMax:s}=t;return{x:()=>re(fr(Er(o,n),Qr(o,s)),r,gt(r))}}};var o$={kernelName:ui,inputsToSave:["x"],gradFunc:rx.gradFunc};var n$={kernelName:ci,saveAllInputs:!0,gradFunc:(r,e,t)=>{let o=e.map(l=>l.shape),{axis:n}=t,s=Be(n,e[0].shape)[0],i=o.map(l=>l[s]);return Ge(r,i,s).map(l=>()=>l)}};var s$={kernelName:pi,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let[o,n]=e,{dilations:s,strides:i,pad:a,dataFormat:l}=t;return E(po(s),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`),{x:()=>gc(o.shape,r,n,i,a,l),filter:()=>Lc(o,r,n.shape,i,a,l)}}};var i$={kernelName:mi,inputsToSave:["dy","filter"],gradFunc:(r,e,t)=>{let[o,n]=e,{strides:s,pad:i,dataFormat:a,dimRoundingMode:l}=t;return{dy:()=>Br(r,n,s,i,a,1,l),filter:()=>Lc(r,o,n.shape,s,i,a,l)}}};function D6(r,e,t,o,n){let s=r;r.rank===4&&(s=R(r,[1,r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));let i=e;i.rank===4&&(i=R(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]])),E(s.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${s.shape}.`),E(i.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${i.shape}.`),E(t.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${t}.`),E(s.shape[4]===t[3],()=>`Error in conv3dDerFilter: depth of input ${s.shape[4]}) must match input depth in filter (${t[3]}.`),E(i.shape[4]===t[4],()=>`Error in conv3dDerFilter: depth of dy (${i.shape[4]}) must match output depth for filter (${t[4]}).`);let a={x:s,dy:i},l={strides:o,pad:n,filterShape:t};return k.runKernel(nu,a,l)}var a$=N({conv3DBackpropFilter_:D6});var l$={kernelName:fi,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let{dilations:o,strides:n,pad:s}=t;E(po(o),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);let[i,a]=e;return{x:()=>Lf(i.shape,r,a,n,s),filter:()=>a$(i,r,a.shape,n,s)}}};var u$={kernelName:Hn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(_t(Ec(j(t,"float32"))),r)}}};var c$={kernelName:Kn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(Ac(j(t,"float32")),r)}}};var p$={kernelName:hi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{axis:n,exclusive:s,reverse:i}=t;return{x:()=>{let a=By([n],o.rank),l=bc(r,n,s,!i);return a!=null&&(l=Rt(l,a)),l}}}};var m$={kernelName:di,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let{dilations:o,strides:n,pad:s,dimRoundingMode:i}=t,a=o??[1,1];E(po(a),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${a}'`);let[l,u]=e;return E(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${l.rank}.`),E(u.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${u.rank}.`),E(l.shape[3]===u.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${l.shape[3]}) must match the inChannels dimension in filter ${u.shape[2]}.`),E(nr(n,a),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${n} and dilations '${a}'.`),ee("depthwiseConv2d",s,i),{x:()=>xh(l.shape,r,u,n,s,a,i),filter:()=>gh(l,r,u.shape,n,s,a,i)}}};var f$={kernelName:gi,inputsToSave:["x","filter"],gradFunc:(r,e,t)=>{let[o,n]=e,s={x:o,filter:n,dy:r},i={x:o,filter:n,dy:r};return{x:()=>k.runKernel(Op,s,t),filter:()=>k.runKernel(Lp,i,t)}}};var h$={kernelName:jn,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e,o={dy:r,y:t};return{x:()=>k.runKernel(hu,o)}}};var d$={kernelName:Xn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e,o=D(Ie(_t($t(t))),2/Math.sqrt(Math.PI));return{x:()=>D(r,o)}}};var g$={kernelName:Yn,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,t)}}};var x$={kernelName:xi,inputsToSave:["input"],gradFunc:(r,e)=>{let[t]=e;return{input:()=>R(r,t.shape)}}};var y$={kernelName:Zn,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,Ie(t))}}};var b$={kernelName:Jn,gradFunc:r=>({x:()=>gt(r)})};var w$={kernelName:Qn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=rt(r,j(o,"float32")),l=Jt(t.shape,n);return l.length>0?R(it(a,l),t.shape):a},b:()=>{let a=D(r,j(t,"float32")),l=Jt(o.shape,n);l.length>0&&(a=R(it(a,l),o.shape));let u=$t(o);return _t(rt(a,j(u,"float32")))}}}};var C$={kernelName:yi,inputsToSave:["x","mean","variance","scale"],gradFunc:(r,e,t)=>{let{varianceEpsilon:o}=t,[n,s,i,a]=e,l=a??st(1),u=Jt(s.shape,n.shape),c=[];if(s.rank===1){for(let C=0;C<n.shape.length-1;++C)c.push(n.shape[C]);c.push(1)}let p=et(n,s),m=D(r,l),f=Tc(U(i,st(o))),h=D(D(D(f,f),f),st(-.5));return{x:()=>s.rank===1?R(D(D(r,ir(R(f,[1,1,1,s.shape[0]]),c)),l),n.shape):R(D(D(r,f),l),n.shape),mean:()=>{let C=D(D(f,st(-1)),m);return s.rank===1&&(C=it(C,u)),R(C,s.shape)},variance:()=>{let C=D(D(h,p),m);return s.rank===1&&(C=it(C,u)),R(C,s.shape)},scale:()=>{let C=D(p,f),T=D(r,C);return s.rank===1&&(T=it(T,u)),R(T,s.shape)},offset:()=>{let C=r;return s.rank===1&&(C=it(C,u)),R(C,s.shape)}}}};var N$={kernelName:bi,inputsToSave:["x","indices"],gradFunc:(r,e,t)=>{let[o,n]=e,{axis:s,batchDims:i}=t,a=Be(s,o.shape)[0],l=(u,c,p)=>()=>{let m=u.shape,f=c.size,h=m.slice(0,a),g=h.length,d=m.slice(s,m.length).slice(1),x=d.length,y=v$(0,g),w=v$(g+1,g+1+x),C=S$([h,[f],d]),T=R(p,C),A=R(c,[f]),$=S$([[g],y,w]),_=Rt(T,$),O=Oc(_,A,u.shape[a]),z=Xp($);return O=Rt(O,z),O};if(i===1){let u=o.shape[0],c=o.split(u,0);return{x:()=>be(c.map((f,h)=>l(f,n.slice(h,1),r.slice(h,1))())).reshape(o.shape),indices:()=>n}}else return{x:l(o,n,r),indices:()=>n}}};function v$(r,e){let t=[];for(let o=r;o<e;++o)t.push(o);return t}function S$(r){let e=[];for(let t=0;t<r.length;++t)for(let o=0;o<r[t].length;++o)e.push(r[t][o]);return e}var T$={kernelName:ts,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e;return{a:()=>gt(t),b:()=>gt(o)}}};var I$={kernelName:cn,gradFunc:r=>({x:()=>j(r,"float32")})};var k$={kernelName:es,gradFunc:r=>({x:()=>gt(r)})};var E$={kernelName:rs,gradFunc:r=>({x:()=>gt(r)})};var A$={kernelName:os,gradFunc:r=>({x:()=>gt(r)})};var $$={kernelName:wi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{alpha:n}=t,s=ye(o,0);return{x:()=>re(s,r,D(r,n))}}};var D$={kernelName:ss,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,U(t,1))}}};var R$={kernelName:ns,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,j(t,"float32"))}}};var _$={kernelName:pC,inputsToSave:[],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o]=e,{axis:n}=t;return{logits:()=>{let i=Ie(o);return et(r,D(it(r,n,!0),i))}}}};function R6(r,e,t,o=5,n=1,s=1,i=.5){let a={x:r,y:e,dy:t},l={depthRadius:o,bias:n,alpha:s,beta:i};return k.runKernel(vu,a,l)}var F$=N({localResponseNormalizationBackprop_:R6});var O$={kernelName:Ci,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o,n]=e,{depthRadius:s,bias:i,alpha:a,beta:l}=t;return{x:()=>F$(o,n,r,s,i,a,l)}}};function ox(r,e,t,o){return e.rank<t.rank&&(e=R(e,No(e.shape,o))),r.rank<t.rank&&(r=R(r,No(r.shape,o))),{x:()=>D(r,j(wr(t,e),r.dtype))}}var Qw={kernelName:vi,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let o=t,{reductionIndices:n}=o,s=e[0],i=e[1],a=Be(n,s.shape),l=ox(r,i,s,a);return{x:()=>l.x()}}};var L$={kernelName:is,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e;return{a:()=>D(r,j(Er(t,o),"float32")),b:()=>D(r,j(_s(t,o),"float32"))}}};function _6(r,e,t,o,n,s,i){let a=S(r,"dy","maxPool3dGrad"),l=S(e,"input","maxPool3dGrad"),u=S(t,"output","maxPool3dGrad"),c=a,p=l,m=u,f=!1;l.rank===4&&(f=!0,c=R(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]]),p=R(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]]),m=R(u,[1,u.shape[0],u.shape[1],u.shape[2],u.shape[3]])),E(c.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),E(p.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${p.rank}.`),E(m.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${m.rank}.`),ee("maxPool3dGrad",s,i);let h={dy:c,input:p,output:m},g={filterSize:o,strides:n,pad:s,dimRoundingMode:i},d=k.runKernel(Nu,h,g);return f?R(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var P$=N({maxPool3dGrad_:_6});var z$={kernelName:Ni,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o,n]=e,{filterSize:s,strides:i,pad:a,dimRoundingMode:l}=t;return{x:()=>P$(r,o,n,s,i,a,l)}}};function F6(r,e,t,o,n,s,i){let a=S(r,"dy","maxPoolGrad"),l=S(e,"input","maxPoolGrad"),u=S(t,"output","maxPoolGrad");E(l.rank===a.rank,()=>`Rank of input (${l.rank}) does not match rank of dy (${a.rank})`),E(a.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${a.rank}.`),E(l.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${l.rank}.`),ee("maxPoolGrad",s,i);let c={dy:a,input:l,output:u},p={filterSize:o,strides:n,pad:s,dimRoundingMode:i};return k.runKernel(Su,c,p)}var M$=N({maxPoolGrad_:F6});var B$={kernelName:Si,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o,n]=e,{filterSize:s,strides:i,pad:a}=t;return{x:()=>M$(r,o,n,s,i,a)}}};var V$={kernelName:Ti,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{axis:n}=t,s=Be(n,o.shape),a=My(o.shape,s)[1],l=Ot(a);return{x:()=>{let c=o.shape.slice();s.forEach(f=>{c[f]=1});let p=R(r,c);return rt(D(p,Fe(o.shape,"float32")),l)}}}};var G$={kernelName:Ii,inputsToSave:["x"],outputsToSave:[!0],gradFunc:(r,e,t)=>{let o=t,{axis:n}=o,[s,i]=e,a=Be(n,s.shape),l=ox(r,i,s,a);return{x:()=>l.x()}}};var W$={kernelName:as,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e;return{a:()=>D(r,j(Qr(t,o),"float32")),b:()=>D(r,j(ye(t,o),"float32"))}}};var U$={kernelName:ki,inputsToSave:["x"],gradFunc:(r,e,t)=>{let o=e[0],{paddings:n}=t,s=n.map(i=>i[0]);return{x:()=>bt(r,s,o.shape)}}};var H$={kernelName:ls,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=Jt(t.shape,n);return a.length>0?R(it(r,a),t.shape):r},b:()=>{let a=D(r,_t(Cn(rt(t,o)))),l=Jt(o.shape,n);return l.length>0?R(it(a,l),o.shape):a}}}};var K$={kernelName:us,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=D(r,j(o,"float32")),l=Jt(t.shape,n);return l.length>0?R(it(a,l),t.shape):a},b:()=>{let a=D(r,j(t,"float32")),l=Jt(o.shape,n);return l.length>0?R(it(a,l),o.shape):a}}}};var q$={kernelName:Ei,gradFunc:r=>({x:()=>_t(r)})};var j$={kernelName:$i,inputsToSave:["indices"],gradFunc:(r,e)=>{let t=e[0];return{indices:()=>ne(t.shape,"float32")}}};var X$={kernelName:Ai,gradFunc:r=>({x:()=>gt(r)})};var Y$={kernelName:Di,saveAllInputs:!0,gradFunc:(r,e,t)=>{let{axis:o}=t;return We(r,o).map(s=>()=>s)}};var t0={kernelName:Ri,inputsToSave:["x"],gradFunc:(r,e,t)=>{let o=e[0],{paddings:n}=t,s=n.map(i=>i[0]);return{x:()=>bt(r,s,o.shape)}}};var Z$={kernelName:cs,inputsToSave:["a","b"],outputsToSave:[!0],gradFunc:(r,e)=>{let[t,o,n]=e,s=t,i=o,a=It(s.shape,i.shape);return{a:()=>{let c=j(i,"float32"),p=D(r,D(c,mr(s,et(c,st(1))))),m=Jt(s.shape,a);return m.length>0&&(p=it(p,m)),R(p,s.shape)},b:()=>{let c=ye(s,0),p=re(c,Ze(s),gt(s)),m=D(r,D(n,p)),f=Jt(i.shape,a);return f.length>0&&(m=it(m,f)),R(m,i.shape)}}}};var J$={kernelName:_i,inputsToSave:["x","alpha"],gradFunc:(r,e)=>{let[t,o]=e,n=ye(t,0);return{x:()=>re(n,r,D(r,o)),alpha:()=>{let s=re(n,gt(r),D(r,t)),i=Jt(o.shape,r.shape);return i.length>0&&(s=it(s,i)),R(s,o.shape)}}}};function O6(r,e,t){let o=r.shape.slice();o[t]=1;let n=R(e,o),s=ll(r,t,!0,!1),i=ll(r,t,!0,!0),a=D(s,i);return D(n,a)}function L6(r,e,t){let o=r.shape.length,n=o-t.length,s=I.getAxesPermutation(t,o),i=r;s!=null&&(i=Rt(r,s));let a=i.shape.slice(),u=a.splice(o-t.length,t.length).reduce((m,f)=>m*f,1);a.push(u);let c=i.reshape(a),p=O6(c,e,n);if(p=p.reshape(i.shape),s!=null){let m=I.getUndoAxesPermutation(s);p=Rt(p,m)}return p}var Q$={kernelName:Fi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{axis:n}=t,s=[];return n==null?s=o.shape.map((i,a)=>a):typeof n=="number"?s=[n]:s=n,{x:()=>L6(o,r,s)}}};var tD={kernelName:qn,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=rt(r,j(o,"float32")),l=Jt(t.shape,n);return l.length>0?R(it(a,l),t.shape):a},b:()=>{let a=D(r,j(t,"float32")),l=Jt(o.shape,n);l.length>0&&(a=R(it(a,l),o.shape));let u=$t(o);return _t(rt(a,j(u,"float32")))}}}};var eD={kernelName:ps,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,_t($t(t)))}}};var rD={kernelName:fs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e,o=D(Qr(t,6),To(t));return{x:()=>D(r,j(o,"float32"))}}};var oD={kernelName:ms,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,j(To(t),"float32"))}}};var nD={kernelName:Oi,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>R(r,t.shape)}}};var sD={kernelName:Pi,inputsToSave:["images"],gradFunc:(r,e,t)=>{let[o]=e,n={dy:r,images:o};return{images:()=>k.runKernel(Lu,n,t)}}};var iD={kernelName:Li,inputsToSave:["images"],gradFunc:(r,e,t)=>{let[o]=e,n={dy:r,images:o};return{images:()=>k.runKernel(Ou,n,t)}}};var aD={kernelName:zi,gradFunc:(r,e,t)=>{let{dims:o}=t,n=Be(o,r.shape);return{x:()=>Ve(r,n)}}};var lD={kernelName:hs,gradFunc:r=>({x:()=>gt(r)})};var uD={kernelName:ds,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>_t(rt(r,D(mr(t,1.5),2)))}}};var cD={kernelName:Mi,inputsToSave:["condition"],gradFunc:(r,e)=>{let[t]=e;return{condition:()=>j(gt(t),"float32"),t:()=>D(r,j(t,r.dtype)),e:()=>D(r,j(aa(t),r.dtype))}}};var pD={kernelName:gs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>{let o=ye(t,st(0)),n=st(cb),s=st(pb),i=D(r,s),a=D(D(r,n),Ie(j(t,"float32")));return re(o,i,a)}}}};var mD={kernelName:ws,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,D(t,et(st(1),t)))}}};var fD={kernelName:bs,gradFunc:r=>({x:()=>gt(r)})};var hD={kernelName:xs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(ea(j(t,"float32")),r)}}};var dD={kernelName:ys,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(yc(j(t,"float32")),r)}}};var gD={kernelName:Bi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{begin:n,size:s}=t,i=o.shape,[a,l]=ub(o,n,s),u=[];for(let c=0;c<r.rank;c++)u.push([a[c],i[c]-a[c]-l[c]]);return{x:()=>Ar(r,u)}}};var xD={kernelName:Ui,outputsToSave:[!0],gradFunc:(r,e,t)=>{let[o]=e,{dim:n}=t,s=!0,i=D(r,o);return{logits:()=>et(i,D(it(i,[n],s),o))}}};var yD={kernelName:Cs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,sr(t))}}};var e0={kernelName:Gi,gradFunc:(r,e,t)=>{let{blockShape:o,paddings:n}=t;return{x:()=>ta(r,o,n)}}};var r0={kernelName:Wi,gradFunc:(r,e,t)=>{let{axis:o}=t;return{x:()=>Gt(r,o)}}};var bD={kernelName:vs,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,D(Xt(j(t,"float32")),2))}}};var wD={kernelName:Hu,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(r,D(j(t,"float32"),2))}}};var CD={kernelName:Ss,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=st(2);return{a:()=>D(r,D(n,et(t,o))),b:()=>D(r,D(n,et(o,t)))}}};var vD={kernelName:ks,gradFunc:r=>({x:()=>gt(r)})};var SD={kernelName:Ns,inputsToSave:["a","b"],gradFunc:(r,e)=>{let[t,o]=e,n=It(t.shape,o.shape);return{a:()=>{let a=r,l=Jt(t.shape,n);return l.length>0&&(a=it(a,l)),R(a,t.shape)},b:()=>{let a=r,l=Jt(o.shape,n);return l.length>0&&(a=it(a,l)),R(_t(a),o.shape)}}}};var ND={kernelName:Vi,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,n=o.shape.slice(),{axis:s}=t;Be(s,o.shape).forEach(u=>{n[u]=1});let a=R(r,n),l=D(a,Fe(o.shape,"float32"));return{x:()=>l}}};var TD={kernelName:Ts,inputsToSave:["x"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>rt(r,$t(ea(t)))}}};var ID={kernelName:Is,outputsToSave:[!0],gradFunc:(r,e)=>{let[t]=e;return{x:()=>D(et(st(1),$t(t)),r)}}};var kD={kernelName:pn,inputsToSave:["x"],gradFunc:(r,e,t)=>{let[o]=e,{reps:n}=t;return{x:()=>{let i=gt(o);if(o.rank===1)for(let a=0;a<n[0];++a)i=U(i,bt(r,[a*o.shape[0]],[o.shape[0]]));else if(o.rank===2)for(let a=0;a<n[0];++a)for(let l=0;l<n[1];++l)i=U(i,bt(r,[a*o.shape[0],l*o.shape[1]],[o.shape[0],o.shape[1]]));else if(o.rank===3)for(let a=0;a<n[0];++a)for(let l=0;l<n[1];++l)for(let u=0;u<n[2];++u)i=U(i,bt(r,[a*o.shape[0],l*o.shape[1],u*o.shape[2]],[o.shape[0],o.shape[1],o.shape[2]]));else if(o.rank===4)for(let a=0;a<n[0];++a)for(let l=0;l<n[1];++l)for(let u=0;u<n[2];++u)for(let c=0;c<n[3];++c)i=U(i,bt(r,[a*o.shape[0],l*o.shape[1],u*o.shape[2],c*o.shape[3]],[o.shape[0],o.shape[1],o.shape[2],o.shape[3]]));else throw new Error(`Gradient for tile operation is not implemented for rank-${o.rank} tensors yet.`);return i}}}};var ED={kernelName:mn,gradFunc:(r,e,t)=>{let o=t,{perm:n}=o,s=Xp(n);return{x:()=>Rt(r,s)}}};var AD={kernelName:Hi,gradFunc:(r,e,t)=>{let o=t,{axis:n}=o;return{value:()=>be(r,n)}}};var $D={kernelName:Ki,inputsToSave:["segmentIds"],gradFunc:(r,e)=>{let[t]=e;return{x:()=>P6(r,t)}}};function P6(r,e){let t=Gr(e,gt(e)),o=vn(r,t),n=Er(e,st(0,"int32")),s=o.rank-n.rank;for(let a=0;a<s;++a)n=xe(n,a+1);n=fr(n,Fe(o.shape,"bool"));let i=gt(o);return re(n,o,i)}var DD={kernelName:qi,gradFunc:r=>({x:()=>gt(r)})};var z6=[rx,LA,PA,zA,MA,BA,VA,GA,WA,UA,HA,KA,jA,YA,ZA,JA,QA,t$,e$,r$,o$,n$,i$,s$,l$,u$,c$,p$,m$,f$,tD,h$,d$,g$,x$,y$,w$,b$,C$,N$,T$,I$,k$,E$,A$,$$,D$,R$,_$,O$,Qw,Qw,L$,z$,B$,V$,G$,W$,U$,H$,K$,q$,j$,X$,Y$,t0,t0,Z$,J$,Q$,eD,rD,oD,nD,sD,iD,aD,lD,uD,cD,pD,mD,fD,hD,dD,gD,xD,yD,e0,e0,r0,r0,bD,CD,wD,vD,SD,ND,TD,ID,kD,ED,AD,$D,DD];for(let r of z6)fC(r);F().prototype.abs=function(){return this.throwIfDisposed(),ae(this)};F().prototype.acos=function(){return this.throwIfDisposed(),yf(this)};F().prototype.acosh=function(){return this.throwIfDisposed(),bf(this)};F().prototype.add=function(r){return this.throwIfDisposed(),U(this,r)};F().prototype.all=function(r,e){return this.throwIfDisposed(),mc(this,r,e)};F().prototype.any=function(r,e){return this.throwIfDisposed(),il(this,r,e)};F().prototype.argMax=function(r){return this.throwIfDisposed(),dn(this,r)};F().prototype.argMin=function(r){return this.throwIfDisposed(),wf(this,r)};F().prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,()=>"The array must have only 1 element."),R(this,[])};F().prototype.asType=function(r){return this.throwIfDisposed(),j(this,r)};F().prototype.as1D=function(){return this.throwIfDisposed(),R(this,[this.size])};F().prototype.as2D=function(r,e){return this.throwIfDisposed(),R(this,[r,e])};F().prototype.as3D=function(r,e,t){return this.throwIfDisposed(),R(this,[r,e,t])};F().prototype.as4D=function(r,e,t,o){return this.throwIfDisposed(),R(this,[r,e,t,o])};F().prototype.as5D=function(r,e,t,o,n){return this.throwIfDisposed(),R(this,[r,e,t,o,n])};F().prototype.asin=function(){return this.throwIfDisposed(),Cf(this)};F().prototype.asinh=function(){return this.throwIfDisposed(),vf(this)};F().prototype.atan=function(){return this.throwIfDisposed(),Sf(this)};F().prototype.atan2=function(r){return this.throwIfDisposed(),Nf(this,r)};F().prototype.atanh=function(){return this.throwIfDisposed(),Tf(this)};F().prototype.avgPool=function(r,e,t,o){return this.throwIfDisposed(),Qi(this,r,e,t,o)};F().prototype.batchToSpaceND=function(r,e){return this.throwIfDisposed(),ta(this,r,e)};F().prototype.batchNorm=function(r,e,t,o,n){return this.throwIfDisposed(),xn(this,r,e,t,o,n)};F().prototype.broadcastTo=function(r){return this.throwIfDisposed(),yn(this,r)};F().prototype.cast=function(r){return this.throwIfDisposed(),j(this,r)};F().prototype.ceil=function(){return this.throwIfDisposed(),Df(this)};F().prototype.clipByValue=function(r,e){return this.throwIfDisposed(),Xe(this,r,e)};F().prototype.concat=function(r,e){return this.throwIfDisposed(),r instanceof Ft&&(r=[r]),Gt([this,...r],e)};F().prototype.conv1d=function(r,e,t,o,n,s){return this.throwIfDisposed(),dc(this,r,e,t,o,n,s)};F().prototype.conv2dTranspose=function(r,e,t,o,n){return this.throwIfDisposed(),xc(this,r,e,t,o,n)};F().prototype.conv2d=function(r,e,t,o,n,s){return this.throwIfDisposed(),Br(this,r,e,t,o,n,s)};F().prototype.cos=function(){return this.throwIfDisposed(),ea(this)};F().prototype.cosh=function(){return this.throwIfDisposed(),yc(this)};F().prototype.cumprod=function(r,e,t){return this.throwIfDisposed(),ll(this,r,e,t)};F().prototype.cumsum=function(r,e,t){return this.throwIfDisposed(),bc(this,r,e,t)};F().prototype.depthToSpace=function(r,e){return this.throwIfDisposed(),zf(this,r,e)};F().prototype.depthwiseConv2d=function(r,e,t,o,n,s){return this.throwIfDisposed(),bn(this,r,e,t,o,n,s)};F().prototype.dilation2d=function(r,e,t,o,n){return this.throwIfDisposed(),Mf(this,r,e,t,o,n)};F().prototype.divNoNan=function(r){return this.throwIfDisposed(),Bf(this,r)};F().prototype.div=function(r){return this.throwIfDisposed(),rt(this,r)};F().prototype.dot=function(r){return this.throwIfDisposed(),Vf(this,r)};F().prototype.elu=function(){return this.throwIfDisposed(),wn(this)};F().prototype.equal=function(r){return this.throwIfDisposed(),wr(this,r)};F().prototype.erf=function(){return this.throwIfDisposed(),wc(this)};F().prototype.euclideanNorm=function(r,e){return this.throwIfDisposed(),Gf(this,r,e)};F().prototype.exp=function(){return this.throwIfDisposed(),Ie(this)};F().prototype.expandDims=function(r){return this.throwIfDisposed(),xe(this,r)};F().prototype.expm1=function(){return this.throwIfDisposed(),Wf(this)};F().prototype.fft=function(){return this.throwIfDisposed(),ma(this)};F().prototype.flatten=function(){return this.throwIfDisposed(),R(this,[this.size])};F().prototype.floor=function(){return this.throwIfDisposed(),Cn(this)};F().prototype.floorDiv=function(r){return this.throwIfDisposed(),pc(this,r)};F().prototype.gather=function(r,e,t){return this.throwIfDisposed(),vn(this,r,e,t)};F().prototype.greaterEqual=function(r){return this.throwIfDisposed(),Er(this,r)};F().prototype.greater=function(r){return this.throwIfDisposed(),ye(this,r)};F().prototype.ifft=function(){return this.throwIfDisposed(),Os(this)};F().prototype.irfft=function(){return this.throwIfDisposed(),Rc(this)};F().prototype.isFinite=function(){return this.throwIfDisposed(),Uf(this)};F().prototype.isInf=function(){return this.throwIfDisposed(),Hf(this)};F().prototype.isNaN=function(){return this.throwIfDisposed(),Kf(this)};F().prototype.leakyRelu=function(r){return this.throwIfDisposed(),na(this,r)};F().prototype.lessEqual=function(r){return this.throwIfDisposed(),Qr(this,r)};F().prototype.less=function(r){return this.throwIfDisposed(),_s(this,r)};F().prototype.localResponseNormalization=function(r,e,t,o){return this.throwIfDisposed(),qf(this,r,e,t,o)};F().prototype.logSigmoid=function(){return this.throwIfDisposed(),jf(this)};F().prototype.logSoftmax=function(r){return this.throwIfDisposed(),Cc(this,r)};F().prototype.logSumExp=function(r,e){return this.throwIfDisposed(),ia(this,r,e)};F().prototype.log=function(){return this.throwIfDisposed(),Ze(this)};F().prototype.log1p=function(){return this.throwIfDisposed(),sa(this)};F().prototype.logicalAnd=function(r){return this.throwIfDisposed(),fr(this,r)};F().prototype.logicalNot=function(){return this.throwIfDisposed(),aa(this)};F().prototype.logicalOr=function(r){return this.throwIfDisposed(),vc(this,r)};F().prototype.logicalXor=function(r){return this.throwIfDisposed(),Xf(this,r)};F().prototype.matMul=function(r,e,t){return this.throwIfDisposed(),Dt(this,r,e,t)};F().prototype.maxPool=function(r,e,t,o){return this.throwIfDisposed(),la(this,r,e,t,o)};F().prototype.max=function(r,e){return this.throwIfDisposed(),Ye(this,r,e)};F().prototype.maximum=function(r){return this.throwIfDisposed(),Gr(this,r)};F().prototype.mean=function(r,e){return this.throwIfDisposed(),oe(this,r,e)};F().prototype.min=function(r,e){return this.throwIfDisposed(),Ds(this,r,e)};F().prototype.minimum=function(r){return this.throwIfDisposed(),fo(this,r)};F().prototype.mirrorPad=function(r,e){return this.throwIfDisposed(),Jf(this,r,e)};F().prototype.mod=function(r){return this.throwIfDisposed(),Qf(this,r)};F().prototype.mul=function(r){return this.throwIfDisposed(),D(this,r)};F().prototype.neg=function(){return this.throwIfDisposed(),_t(this)};F().prototype.norm=function(r,e,t){return this.throwIfDisposed(),Rs(this,r,e,t)};F().prototype.notEqual=function(r){return this.throwIfDisposed(),Ko(this,r)};F().prototype.oneHot=function(r,e=1,t=0){return this.throwIfDisposed(),pl(this,r,e,t)};F().prototype.onesLike=function(){return this.throwIfDisposed(),He(this)};F().prototype.pad=function(r,e){return this.throwIfDisposed(),Ar(this,r,e)};F().prototype.pool=function(r,e,t,o,n,s){return this.throwIfDisposed(),th(this,r,e,t,o,n,s)};F().prototype.pow=function(r){return this.throwIfDisposed(),mr(this,r)};F().prototype.prelu=function(r){return this.throwIfDisposed(),ca(this,r)};F().prototype.prod=function(r,e){return this.throwIfDisposed(),eh(this,r,e)};F().prototype.reciprocal=function(){return this.throwIfDisposed(),ih(this)};F().prototype.relu=function(){return this.throwIfDisposed(),ar(this)};F().prototype.relu6=function(){return this.throwIfDisposed(),Sc(this)};F().prototype.reshapeAs=function(r){return this.throwIfDisposed(),R(this,r.shape)};F().prototype.reshape=function(r){return this.throwIfDisposed(),R(this,r)};F().prototype.resizeBilinear=function(r,e,t){return this.throwIfDisposed(),Sh(this,r,e,t)};F().prototype.resizeNearestNeighbor=function(r,e,t){return this.throwIfDisposed(),Nh(this,r,e,t)};F().prototype.reverse=function(r){return this.throwIfDisposed(),Ve(this,r)};F().prototype.rfft=function(){return this.throwIfDisposed(),fa(this)};F().prototype.round=function(){return this.throwIfDisposed(),Nc(this)};F().prototype.rsqrt=function(){return this.throwIfDisposed(),Tc(this)};F().prototype.selu=function(){return this.throwIfDisposed(),Ic(this)};F().prototype.separableConv2d=function(r,e,t,o,n,s){return this.throwIfDisposed(),kc(this,r,e,t,o,n,s)};F().prototype.sigmoid=function(){return this.throwIfDisposed(),sr(this)};F().prototype.sign=function(){return this.throwIfDisposed(),ah(this)};F().prototype.sin=function(){return this.throwIfDisposed(),Ec(this)};F().prototype.sinh=function(){return this.throwIfDisposed(),Ac(this)};F().prototype.slice=function(r,e){return this.throwIfDisposed(),bt(this,r,e)};F().prototype.softmax=function(r){return this.throwIfDisposed(),pa(this,r)};F().prototype.softplus=function(){return this.throwIfDisposed(),Ho(this)};F().prototype.spaceToBatchND=function(r,e){return this.throwIfDisposed(),ua(this,r,e)};F().prototype.split=function(r,e){return this.throwIfDisposed(),Ge(this,r,e)};F().prototype.sqrt=function(){return this.throwIfDisposed(),Xt(this)};F().prototype.square=function(){return this.throwIfDisposed(),$t(this)};F().prototype.squaredDifference=function(r){return this.throwIfDisposed(),_c(this,r)};F().prototype.squeeze=function(r){return this.throwIfDisposed(),Cr(this,r)};F().prototype.stack=function(r,e){this.throwIfDisposed();let t=r instanceof Ft?[this,r]:[this,...r];return be(t,e)};F().prototype.step=function(r){return this.throwIfDisposed(),To(this,r)};F().prototype.stridedSlice=function(r,e,t,o,n,s,i,a){return this.throwIfDisposed(),lh(this,r,e,t,o,n,s,i,a)};F().prototype.sub=function(r){return this.throwIfDisposed(),et(this,r)};F().prototype.sum=function(r,e){return this.throwIfDisposed(),it(this,r,e)};F().prototype.tan=function(){return this.throwIfDisposed(),uh(this)};F().prototype.tanh=function(){return this.throwIfDisposed(),Uo(this)};F().prototype.tile=function(r){return this.throwIfDisposed(),ir(this,r)};F().prototype.toBool=function(){return this.throwIfDisposed(),j(this,"bool")};F().prototype.toFloat=function(){return this.throwIfDisposed(),j(this,"float32")};F().prototype.toInt=function(){return this.throwIfDisposed(),j(this,"int32")};F().prototype.topk=function(r,e){return this.throwIfDisposed(),ph(this,r,e)};F().prototype.transpose=function(r){return this.throwIfDisposed(),Rt(this,r)};F().prototype.unique=function(r){return this.throwIfDisposed(),mh(this,r)};F().prototype.unsortedSegmentSum=function(r,e){return this.throwIfDisposed(),Oc(this,r,e)};F().prototype.unstack=function(r){return this.throwIfDisposed(),We(this,r)};F().prototype.where=function(r,e){return this.throwIfDisposed(),re(r,this,e)};F().prototype.zerosLike=function(){return this.throwIfDisposed(),gt(this)};var go=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},Dr=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},P=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},wt=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}},nx=class r extends Error{constructor(e){super(e),Object.setPrototypeOf(this,r.prototype)}};var Nm=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let o=this.cache.keys().next().value;this.cache.delete(o)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw new Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let o=this.cache.keys().next().value;this.cache.delete(o)}this.maxEntries=e}};function _o(r,e){if(Array.isArray(r)){let t=[];for(let o=0;o<e;o++)t=t.concat(r);return t}else{let t=new Array(e);return t.fill(r),t}}function xo(r,e){if(!r)throw new nx(e)}function n0(r,e){let t=0;for(let o of r)o===e&&t++;return t}function er(r){return r.length===1?r[0]:r}function Kt(r){return Array.isArray(r)?r:[r]}function Fo(r){let t=r.replace(/(.)([A-Z][a-z0-9]+)/g,"$1_$2").replace(/([a-z])([A-Z])/g,"$1_$2").toLowerCase();return t[0]!=="_"?t:"private"+t}function Vs(r){return r.length<=1||r.indexOf("_")===-1?r:r.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}var Ro={};function gp(r){if(r==null)return null;let e={};return e.className=r.getClassName(),e.config=r.getConfig(),e}function o0(r){if(!(r==null||typeof r!="object"))if(Array.isArray(r))r.forEach(e=>o0(e));else{let e=Object.keys(r);for(let t of e){let o=r[t];o!=null&&typeof o=="object"&&(!Array.isArray(o)&&o.type==="ndarray"&&typeof o.value=="number"?r[t]=o.value:o0(o))}}}function En(r,e={},t={},o="object",n=!1){if(typeof r=="string"){let s=r,i;if(s in t)i=t[s];else if(s in Ro)i=Ro[s];else if(i=e[s],i==null)throw new P(`Unknown ${o}: ${r}. This may be due to one of the following reasons:
1. The ${o} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${o} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return i}else{let s=r;if(s.className==null||s.config==null)throw new P(`${o}: Improper config format: ${JSON.stringify(s)}.
'className' and 'config' must set.`);let i=s.className,a,l;if(i in t?[a,l]=t[i]:i in Ro?[a,l]=Ro.className:i in e&&([a,l]=e[i]),a==null)throw new P(`Unknown ${o}: ${i}. This may be due to one of the following reasons:
1. The ${o} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.
2. The custom ${o} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(l!=null){let u={};for(let f of Object.keys(Ro))u[f]=Ro[f];for(let f of Object.keys(t))u[f]=t[f];let c=s.config;c.customObjects=u;let p=Object.assign({},Ro);for(let f of Object.keys(t))Ro[f]=t[f];o0(s.config);let m=l(a,s.config,t,n);return Ro=Object.assign({},p),m}else{let u=Object.assign({},Ro);for(let p of Object.keys(t))Ro[p]=t[p];let c=new a(s.config);return Ro=Object.assign({},u),c}}}function M6(r,e){return r<e?-1:r>e?1:0}function Tm(r,e){return-1*M6(r,e)}function Oo(r){if(r==null)return r;let e=[];for(let t of r)e.indexOf(t)===-1&&e.push(t);return e}function RD(r){if(r==null)throw new P(`Invalid value in obj: ${JSON.stringify(r)}`);for(let e in r)if(r.hasOwnProperty(e))return!1;return!0}function An(r,e,t){if(t!=null&&r.indexOf(t)<0)throw new P(`${t} is not a valid ${e}.  Valid values are ${r} or null/undefined.`)}function sx(r,e,t=0,o=1/0){return xo(t>=0),xo(o>=t),Array.isArray(r)&&r.length>=t&&r.length<=o&&r.every(n=>typeof n===e)}function Re(r,e){Array.isArray(r)?(b.assert(r.length>0,()=>`${e} is unexpectedly an empty array.`),r.forEach((t,o)=>Re(t,`element ${o+1} of ${e}`))):b.assert(Number.isInteger(r)&&r>0,()=>`Expected ${e} to be a positive integer, but got ${_D(r)}.`)}function _D(r){return r===null?"null":Array.isArray(r)?"["+r.map(e=>_D(e)).join(",")+"]":typeof r=="string"?`"${r}"`:`${r}`}function FD(r,e,t){let o=t!=null?t():b.now(),n;return(...i)=>{let a=t!=null?t():b.now();return a-o<e||(o=a,n=r(...i)),n}}function ix(r){return r==="relu"?"relu":r==="linear"?"linear":r==="elu"?"elu":null}var B6=0;function lx(){return B6++}var ax={};function Na(r=""){return r in ax||(ax[r]=0),ax[r]+=1,r+ax[r].toString()}var OD=["channelsFirst","channelsLast"],LD=["nearest","bilinear"],PD=["valid","same","causal"],zD=["max","avg"],MD=["sum","mul","concat","ave"];var xp=new Map;function me(r){An(OD,"DataFormat",r)}function VD(r){An(LD,"InterpolationFormat",r)}function Rr(r){An(PD,"PaddingMode",r)}function s0(r){An(zD,"PoolMode",r)}var Im=[],BD="/";function rn(r,e){Im.push(r);try{let t=e();return Im.pop(),t}catch(t){throw Im.pop(),t}}function V6(){return Im.length===0?"":Im.join(BD)+BD}function ux(r){if(!GD(r))throw new Error("Not a valid tensor name: '"+r+"'");return V6()+r}function cx(r){if(!GD(r))throw new Error("Not a valid tensor name: '"+r+"'");xp.has(r)||xp.set(r,0);let e=xp.get(r);if(xp.set(r,xp.get(r)+1),e>0){let t=`${r}_${e}`;return xp.set(t,1),t}else return r}var G6=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/);function GD(r){return!!r.match(G6)}function WD(r){return r===parseInt(r.toString(),10)}function Lo(r,e,t){e==null&&(e=0),t==null&&(t=r.length);let o=1;for(let n=e;n<t;++n)o*=r[n];return o}function Ll(r){if(r.length===0)return Number.NaN;let e=Number.POSITIVE_INFINITY;for(let t=0;t<r.length;t++){let o=r[t];o<e&&(e=o)}return e}function on(r){if(r.length===0)return Number.NaN;let e=Number.NEGATIVE_INFINITY;for(let t=0;t<r.length;t++){let o=r[t];o>e&&(e=o)}return e}function _r(r,e){if(e<r)throw new P(`end (${e}) < begin (${r}) is forbidden.`);let t=[];for(let o=r;o<e;++o)t.push(o);return t}var i0;function Me(){return i0==null&&(i0=cf().epsilon()),i0}function Fr(){return"channelsLast"}function Sr(r,e){return j(r,e)}function Ws(r,e=-1){let t=r.shape.slice();return e<0&&(e=t.length+e+1),t.splice(e,0,1),R(r,t)}function UD(r,e){return M(()=>{if(r.shape.length!==2)throw new P(`repeat() expects a rank-2 tensor, but received a rank-${r.shape.length} tensor.`);let t=Ws(r,1);return mx(t,[1,e,1])})}function HD(r){let e=[Lo(r.shape)];return R(r,e)}function KD(r){if(r.rank<=1)throw new P(`batchFlatten requires a minimum rank of 2. Got rank: ${r.rank}.`);let e=[r.shape[0],Lo(r.shape,1)];return R(r,e)}function Gs(r,e,t){return M(()=>{switch(r.rank){case 1:return $c(r,e,t);case 2:return Jp(r,[e,0],[t,r.shape[1]]);case 3:return Dc(r,[e,0,0],[t,r.shape[1],r.shape[2]]);case 4:return dl(r,[e,0,0,0],[t,r.shape[1],r.shape[2],r.shape[3]]);case 5:return bt(r,[e,0,0,0,0],[t,r.shape[1],r.shape[2],r.shape[3],r.shape[4]]);case 6:return bt(r,[e,0,0,0,0,0],[t,r.shape[1],r.shape[2],r.shape[3],r.shape[4],r.shape[5]]);default:throw new P(`sliceAlongFirstAxis() received an unsupported tensor rank: ${r.rank}`)}})}function a0(r,e,t){return M(()=>{switch(r.rank){case 1:return $c(r,e,t);case 2:return Jp(r,[0,e],[r.shape[0],t]);case 3:return Dc(r,[0,0,e],[r.shape[0],r.shape[1],t]);case 4:return dl(r,[0,0,0,e],[r.shape[0],r.shape[1],r.shape[2],t]);default:throw new P(`sliceAlongLastAxis() received an unsupported tensor rank: ${r.rank}`)}})}function km(r,e,t,o){return M(()=>{switch(r.rank){case 1:return $c(r,e,t);case 2:switch(o){case 1:return Gs(r,e,t);case 2:return a0(r,e,t);default:throw new P(`The axis is not within the rank of the tensor ${o}`)}case 3:switch(o){case 1:return Gs(r,e,t);case 2:return Dc(r,[0,e,0],[r.shape[0],t,r.shape[2]]);case 3:return a0(r,e,t);default:throw new P(`The axis is not within the rank of the tensor ${o}`)}case 4:switch(o){case 1:return Gs(r,e,t);case 2:return dl(r,[0,e,0,0],[r.shape[0],t,r.shape[2],r.shape[3]]);case 3:return dl(r,[0,0,e,0],[r.shape[0],r.shape[1],t,r.shape[3]]);case 4:return a0(r,e,t);default:throw new P(`The axis is not within the rank of the tensor ${o}`)}default:throw new P(`sliceAlongLastAxis() received an unsupported tensor rank: ${r.rank}`)}})}function yp(r,e=-1){let t;return e<0&&(t=r[0].rank,t!==0?e=t:e=0),e===r[0].rank&&(e=-1),Gt(r,e)}function u0(r,e){switch(r.rank){case 1:return Rf([r,e]);case 2:return hc([r,e],0);case 3:return _f([r,e],0);case 4:return Ff([r,e],0);default:throw new P(`concatAlongFirstAxis() received an unsupported tensor rank: ${r.rank}`)}}function mx(r,e){if(Array.isArray(e)||(e=[e]),r.rank!==e.length)throw new P(`The length of input n (${e.length}) does not match the number of dimensions in input x (${r.rank})`);return ir(r,e)}function bp(r,e=0,t=1,o,n){return hl(r,e,t,o,n)}function Po(r,e,t,o){if(r.rank<2||e.rank<2)throw new wt(`dot requires both inputs to be rank >= 2 but got x shape = ${r.shape} and y shape = ${e.shape}`);if(e.rank>=3){let n=r.shape.slice(-1)[0],s=e.shape.slice(-2)[0];if(n!==s)throw new wt(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${r.shape} and  y shape = ${e.shape}`)}if(r.rank===2&&e.rank===2)return ha.matMul({a:r,b:e,transposeA:!1,transposeB:!1,bias:o?l0(r.rank,o,Fr()):null,activation:t});{let n=r.shape.slice(),s=n.pop();r=R(r,[-1,s]);let i=e.shape.slice(),a=i.pop(),l=i.pop(),u=[...i,a],c=Array.from({length:e.rank},(h,g)=>g===0?e.rank-2:g<=e.rank-2?g-1:g);e=R(Rt(e,c),[l,-1]);let p=[...n,...u];return R(ha.matMul({a:r,b:e,transposeA:!1,transposeB:!1,bias:o?l0(r.rank,o,Fr()):null,activation:t}),p)}}function fx(r,e,t){return M(()=>(Array.isArray(e)?e=le(e,"int32"):e=j(e,"int32"),vn(r,e,t)))}function Pl(r){return D(r,r)}function l0(r,e,t){let o=e.shape;if(e.rank!==1&&e.rank!==r)throw new P(`Unexpected bias dimensions: ${e.rank}; expected it to be 1 or ${r}`);if(r===5){if(t==="channelsFirst")return o.length===1?R(e,[1,o[0],1,1,1]):R(e,[1,o[3],o[0],o[1],o[2]]);if(t==="channelsLast")return o.length===1?R(e,[1,1,1,1,o[0]]):R(e,[1].concat(o))}else if(r===4){if(t==="channelsFirst")return o.length===1?R(e,[1,o[0],1,1]):R(e,[1,o[2],o[0],o[1]]);if(t==="channelsLast")return o.length===1?R(e,[1,1,1,o[0]]):R(e,[1].concat(o))}else if(r===3){if(t==="channelsFirst")return o.length===1?R(e,[1,o[0],1]):R(e,[1,o[1],o[0]]);if(t==="channelsLast")return o.length===1?R(e,[1,1,o[0]]):R(e,[1].concat(o))}else if(r<3)return e;throw new P(`Unsupported input rank by biasAdd: ${e.rank}`)}function Or(r,e,t){return M(()=>(t==null&&(t=Fr()),me(t),U(r,l0(r.rank,e,t))))}function qD(r,e=1){if(e!==1)throw new wt(`Support for alpha values other than 1 (${e}) is not implemented yet.`);return wn(r)}function jD(r){return M(()=>rt(r,U(ae(r),1)))}function hx(r,e,t,o){return M(()=>Xy(r,e,t,o))}function XD(r){return M(()=>{let e=U(.5,D(.2,r));return Xe(e,0,1)})}function Ta(r,e,t=!1){return t?r():e()}var YD=["fanIn","fanOut","fanAvg"],ZD=["normal","uniform","truncatedNormal"];function W6(r){An(YD,"FanMode",r)}function U6(r){An(ZD,"Distribution",r)}var Lr=class extends q.Serializable{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},tR=(()=>{class r extends Lr{apply(t,o){return ne(t,o)}}return r.className="Zeros",r})();q.registerClass(tR);var dx=(()=>{class r extends Lr{apply(t,o){return Fe(t,o)}}return r.className="Ones",r})();q.registerClass(dx);var eR=(()=>{class r extends Lr{constructor(t){if(super(),typeof t!="object")throw new P(`Expected argument of type ConstantConfig but got ${t}`);if(t.value===void 0)throw new P(`config must have value set but got ${t}`);this.value=t.value}apply(t,o){return M(()=>D(st(this.value),Fe(t,o)))}getConfig(){return{value:this.value}}}return r.className="Constant",r})();q.registerClass(eR);var rR=(()=>{class r extends Lr{constructor(t){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=t.minval||this.DEFAULT_MINVAL,this.maxval=t.maxval||this.DEFAULT_MAXVAL,this.seed=t.seed}apply(t,o){return to(t,this.minval,this.maxval,o,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}}return r.className="RandomUniform",r})();q.registerClass(rR);var oR=(()=>{class r extends Lr{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,o){if(o=o||"float32",o!=="float32"&&o!=="int32")throw new wt(`randomNormal does not support dType ${o}.`);return bp(t,this.mean,this.stddev,o,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}return r.className="RandomNormal",r})();q.registerClass(oR);var nR=(()=>{class r extends Lr{constructor(t){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=t.mean||this.DEFAULT_MEAN,this.stddev=t.stddev||this.DEFAULT_STDDEV,this.seed=t.seed}apply(t,o){if(o=o||"float32",o!=="float32"&&o!=="int32")throw new wt(`truncatedNormal does not support dType ${o}.`);return Fc(t,this.mean,this.stddev,o,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}}return r.className="TruncatedNormal",r})();q.registerClass(nR);var sR=(()=>{class r extends Lr{constructor(t){super(),this.gain=t.gain!=null?t.gain:1}apply(t,o){return M(()=>{if(t.length!==2||t[0]!==t[1])throw new P("Identity matrix initializer can only be used for 2D square matrices.");return D(this.gain,ul(t[0]))})}getConfig(){return{gain:this.gain}}}return r.className="Identity",r})();q.registerClass(sR);function H6(r,e="channelsLast"){let t,o;if(me(e),r.length===2)t=r[0],o=r[1];else if([3,4,5].indexOf(r.length)!==-1){if(e==="channelsFirst"){let n=Lo(r,2);t=r[1]*n,o=r[0]*n}else if(e==="channelsLast"){let n=Lo(r,0,r.length-2);t=r[r.length-2]*n,o=r[r.length-1]*n}}else{let n=Lo(r);t=Math.sqrt(n),o=Math.sqrt(n)}return[t,o]}var ao=(()=>{class r extends Lr{constructor(t){if(super(),t.scale<0)throw new P(`scale must be a positive float. Got: ${t.scale}`);this.scale=t.scale==null?1:t.scale,this.mode=t.mode==null?"fanIn":t.mode,W6(this.mode),this.distribution=t.distribution==null?"normal":t.distribution,U6(this.distribution),this.seed=t.seed}apply(t,o){let n=H6(t),s=n[0],i=n[1],a=this.scale;if(this.mode==="fanIn"?a/=Math.max(1,s):this.mode==="fanOut"?a/=Math.max(1,i):a/=Math.max(1,(s+i)/2),this.distribution==="normal"){let l=Math.sqrt(a);if(o=o||"float32",o!=="float32"&&o!=="int32")throw new wt(`${this.getClassName()} does not support dType ${o}.`);return Fc(t,0,l,o,this.seed)}else{let l=Math.sqrt(3*a);return to(t,-l,l,o,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}}return r.className="VarianceScaling",r})();q.registerClass(ao);var c0=(()=>{class r extends ao{constructor(t){super({scale:1,mode:"fanAvg",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return ao.className}}return r.className="GlorotUniform",r})();q.registerClass(c0);var p0=(()=>{class r extends ao{constructor(t){super({scale:1,mode:"fanAvg",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return ao.className}}return r.className="GlorotNormal",r})();q.registerClass(p0);var m0=(()=>{class r extends ao{constructor(t){super({scale:2,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return ao.className}}return r.className="HeNormal",r})();q.registerClass(m0);var f0=(()=>{class r extends ao{constructor(t){super({scale:2,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return ao.className}}return r.className="HeUniform",r})();q.registerClass(f0);var h0=(()=>{class r extends ao{constructor(t){super({scale:1,mode:"fanIn",distribution:"normal",seed:t==null?null:t.seed})}getClassName(){return ao.className}}return r.className="LeCunNormal",r})();q.registerClass(h0);var d0=(()=>{class r extends ao{constructor(t){super({scale:1,mode:"fanIn",distribution:"uniform",seed:t==null?null:t.seed})}getClassName(){return ao.className}}return r.className="LeCunUniform",r})();q.registerClass(d0);var iR=(()=>{class r extends Lr{constructor(t){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=t.gain==null?this.DEFAULT_GAIN:t.gain,this.seed=t.seed}apply(t,o){return M(()=>{if(t.length<2)throw new wt("Shape must be at least 2D.");if(o!=="int32"&&o!=="float32"&&o!==void 0)throw new TypeError(`Unsupported data type ${o}.`);o=o;let n=b.sizeFromShape(t.slice(0,-1)),s=t[t.length-1],i=n*s;i>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${i}) elements: Slowness may result.`);let a=[Math.max(s,n),Math.min(s,n)],l=bp(a,0,1,o,this.seed),u=Jy.qr(l,!1),c=u[0],m=u[1].flatten().stridedSlice([0],[Math.min(s,n)*Math.min(s,n)],[Math.min(s,n)+1]);return c=D(c,m.sign()),n<s&&(c=c.transpose()),D(st(this.gain),c.reshape(t))})}getConfig(){return{gain:this.gain,seed:this.seed}}}return r.className="Orthogonal",r})();q.registerClass(iR);var JD={constant:"Constant",glorotNormal:"GlorotNormal",glorotUniform:"GlorotUniform",heNormal:"HeNormal",heUniform:"HeUniform",identity:"Identity",leCunNormal:"LeCunNormal",leCunUniform:"LeCunUniform",ones:"Ones",orthogonal:"Orthogonal",randomNormal:"RandomNormal",randomUniform:"RandomUniform",truncatedNormal:"TruncatedNormal",varianceScaling:"VarianceScaling",zeros:"Zeros"};function QD(r,e={}){return En(r,q.SerializationMap.getMap().classNameMap,e,"initializer")}function se(r){return gp(r)}function Yt(r){if(typeof r=="string"){let e=r in JD?JD[r]:r;if(e==="GlorotNormal")return new p0;if(e==="GlorotUniform")return new c0;if(e==="HeNormal")return new m0;if(e==="HeUniform")return new f0;if(e==="LeCunNormal")return new h0;if(e==="LeCunUniform")return new d0;{let t={};return t.className=e,t.config={},QD(t)}}else return r instanceof Lr?r:QD(r)}function gx(r){return Array.isArray(r)&&Array.isArray(r[0])}function wp(r){return r.length===0?[]:Array.isArray(r[0])?r:[r]}function xt(r){let e;if(Array.isArray(r)){if(r.length!==1)throw new P(`Expected Tensor length to be 1; got ${r.length}`);e=r[0]}else e=r;return e}function At(r){if(Array.isArray(r)&&Array.isArray(r[0])){if(r.length===1)return r=r,r[0];throw new P(`Expected exactly 1 Shape; got ${r.length}`)}else return r}function Cp(r){let e=0;for(let t of r)t.shape.length===0?e+=1:e+=t.shape.reduce((o,n)=>o*n);return e}var lR="Variable",Em=class{constructor(e,t="float32",o=lR,n=!0,s=null){this.dtype=t??"float32",this.shape=e.shape,this.id=lx(),o=o??lR,this.originalName=ux(o),this.name=cx(this.originalName),this.trainable_=n,this.constraint=s,this.val=fh(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),q6(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw new Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}};function q6(r,e){if(r.shape.toString()!==e.shape.toString())throw new Error("Shape mismatch: "+JSON.stringify(r.shape)+" vs. "+JSON.stringify(e.shape))}function Am(r){return r.map(e=>e.read())}function vp(r){r.forEach(e=>{e[0].write(e[1])})}var Qt=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape!=null?this.ndim=e.shape.length:this.ndim=e.ndim,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},Nr=class{constructor(e,t,o,n,s,i,a){this.dtype=e,this.shape=t,this.sourceLayer=o,this.inputs=n,this.callArgs=s,this.outputTensorIndex=a,this.id=lx(),i!=null&&(this.originalName=ux(i),this.name=cx(this.originalName)),this.rank=t.length}},j6=0,Us=class{constructor(e,t){this.callArgs=t,this.id=j6++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let o of e.inboundLayers)o?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t!=null?e.push(t.name):e.push(null);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},X6=0,Ct=class extends q.Serializable{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=X6++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let o=this.getClassName();t=Fo(o)+"_"+Na(o)}if(this.name=t,this.trainable_=e.trainable==null?!0:e.trainable,e.inputShape!=null||e.batchInputShape!=null){let o;if(e.batchInputShape!=null)o=e.batchInputShape;else if(e.inputShape!=null){let s=null;e.batchSize!=null&&(s=e.batchSize),o=[s].concat(e.inputShape)}this.batchInputShape=o;let n=e.dtype;n==null&&(n=e.inputDType),n==null&&(n="float32"),this.dtype=n}e.weights!=null?this.initialWeights=e.weights:this.initialWeights=null,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+"_ib-"+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new Dr(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new P(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return er(this.getNodeAtIndex(e,"input").inputTensors)}getOutputAt(e){return er(this.getNodeAtIndex(e,"output").outputTensors)}get input(){if(this.inboundNodes.length>1)throw new go(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new go(`Layer ${this.name} is not connected, no input to return.`);return er(this.getNodeAtIndex(0,"input").inputTensors)}get output(){if(this.inboundNodes.length===0)throw new go(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new go(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return er(this.getNodeAtIndex(0,"output").outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw new Error("Cannot call the resetStates() method of a non-stateful Layer object.")}assertInputCompatibility(e){let t=Kt(e);if(this.inputSpec==null||this.inputSpec.length===0)return;let o=Kt(this.inputSpec);if(t.length!==o.length)throw new P(`Layer ${this.name} expects ${o.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let n=0;n<t.length;n++){let s=t[n],i=o[n];if(i==null)continue;let a=s.rank;if(i.ndim!=null&&a!==i.ndim)throw new P(`Input ${n} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new P(`Input ${n} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new P(`Input ${n} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&s.dtype!==i.dtype)throw new P(`Input ${n} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${s.dtype}.`);if(i.axes){let l=s.shape;for(let u in i.axes){let c=Number(u),p=i.axes[u],m=c>=0?l[c]:l[l.length+c];if(p!=null&&[p,null].indexOf(m)===-1)throw new P(`Input ${n} is incompatible with layer ${this.name}: expected axis ${c} of input shape to have value ${p} but got shape ${l}.`)}}if(i.shape!=null)for(let l=0;l<i.shape.length;++l){let u=i.shape[l],c=s.shape[l];if(u!=null&&c!=null&&u!==c)throw new P(`Input ${n} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${s.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t=t||{},this.assertNotDisposed();let o=Kt(e),n=J6(e),s=Q6(e);if(n===s)throw new P("Arguments to apply() must be all SymbolicTensors or all Tensors");return rn(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let i=[];for(let a of Kt(e))i.push(a.shape);this.build(er(i)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&s&&(this._refCount=1)}if(this.assertInputCompatibility(e),s){let i=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,i);let a=Kt(i),l=[];for(let u of a)o.indexOf(u)!==-1&&(u=u.clone()),l.push(u);if(i=er(l),this.activityRegularizer!=null)throw new wt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return i}else{let i=Y6(e),a=this.computeOutputShape(i),l,u=Z6(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?i[0]:i),a!=null&&a.length>0&&Array.isArray(a[0])?l=a.map((c,p)=>new Nr(u,c,this,Kt(e),t,this.name,p)):l=new Nr(u,a,this,Kt(e),t,this.name),this.addInboundNode(e,l,null,null,i,a,t),this._refCount++,this.activityRegularizer!=null)throw new wt("Layer invocation in the presence of activity regularizer(s) is not supported yet.");return l}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((o,n)=>{o!=null&&e[n]!=null&&e[n]!==o&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new go(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let o=JSON.stringify(t.outputShapes);e.indexOf(o)===-1&&e.push(o)}if(e.length===1){let t=this.inboundNodes[0].outputShapes;return Array.isArray(t)&&Array.isArray(t[0])&&t.length===1?t[0]:t}else throw new go(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new Dr(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return Cp(this.weights)}build(e){this.built=!0}getWeights(e=!1){return Am(e?this.trainableWeights:this.weights)}setWeights(e){M(()=>{let t=this.weights;if(t.length!==e.length)throw new P(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let o=[],n=Am(t);for(let s=0;s<n.length;++s){let i=n[s],a=t[s],l=e[s];if(!b.arraysEqual(i.shape,l.shape))throw new P(`Layer weight shape ${i.shape} not compatible with provided weight shape ${l.shape}`);o.push([a,l])}vp(o)})}addWeight(e,t,o,n,s,i,a,l){if(this._addedWeightNames.indexOf(e)!==-1)throw new P(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),o==null&&(o="float32"),this.fastWeightInitDuringBuild&&(n=l!=null?l():Yt("zeros"));let u=n.apply(t,o),c=new Em(u,o,e,i,a);return u.dispose(),s!=null&&this.addLoss(()=>s.apply(c.read())),i==null&&(i=!0),i?this._trainableWeights.push(c):this._nonTrainableWeights.push(c),c}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=Kt(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(o=>{if(o!=null)throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw new TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,o){if(!this.supportsMasking)return;let n=this.computeMask(e,o),s=Kt(t),i=Kt(n);if(s.length!==i.length)throw new Error(`${this.name} outputs ${s.length} tensors but ${s.length} masks for those tensors`);for(let a=0;a<s.length;a++)s[a].kerasMask=i[a]}addInboundNode(e,t,o,n,s,i,a=null){let l=Kt(e);t=Kt(t),o=Kt(o),n=Kt(n),s=wp(s),i=wp(i);let u=[],c=[],p=[];for(let m of l)u.push(m.sourceLayer),c.push(m.nodeIndex),p.push(m.tensorIndex);new Us({outboundLayer:this,inboundLayers:u,nodeIndices:c,tensorIndices:p,inputTensors:l,outputTensors:t,inputMasks:o,outputMasks:n,inputShapes:s,outputShapes:i},a);for(let m=0;m<t.length;m++)t[m].sourceLayer=this,t[m].nodeIndex=this.inboundNodes.length-1,t[m].tensorIndex=m}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw new Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw new Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw new Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}};function Y6(r){r=Kt(r);let e=[];for(let t of r)e.push(t.shape);return er(e)}function Z6(r){return"float32"}function g0(r,e,t){if((e==null||t!=null&&t>0)&&(e=r.sourceLayer,t=r.nodeIndex),e.inboundNodes.length===0)return[r];{let o=e.inboundNodes[t];if(o.inboundLayers.length===0)return o.inputTensors;{let n=[];for(let s=0;s<o.inboundLayers.length;s++){let i=o.inputTensors[s],a=o.inboundLayers[s],l=o.nodeIndices[s],u=g0(i,a,l);for(let c of u)n.indexOf(c)===-1&&n.push(c)}return n}}}function J6(r){let e=!0;for(let t of Kt(r))if(!(t instanceof Nr)){e=!1;break}return e}function Q6(r){let e=!0;for(let t of Kt(r))if(t instanceof Nr){e=!1;break}return e}var zl=(()=>{class r extends Ct{constructor(t){if(super({dtype:t.dtype,name:t.name!=null?t.name:Na("input").toString()}),t.batchSize==null&&(t.batchSize=null),t.sparse==null&&(t.sparse=!1),this.trainable=!1,this.built=!0,this.sparse=t.sparse,t.inputShape!=null&&t.batchInputShape!=null)throw new P("Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.");let o=t.batchInputShape;if(o==null){if(t.inputShape==null)throw new P("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");o=[t.batchSize].concat(t.inputShape)}else if(t.batchSize!=null)throw new P("Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.");let n=t.dtype||"float32";this.batchInputShape=o,this.dtype=n,this.inputSpec=[{shape:o}];let s=new Nr(this.dtype,this.batchInputShape,this,[],{},this.name);s.nodeIndex=0,s.tensorIndex=0,new Us({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[s],outputTensors:[s],inputMasks:[null],outputMasks:[null],inputShapes:[o],outputShapes:[o]})}apply(t,o){throw new P(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}}return r.className="InputLayer",r})();q.registerClass(zl);function x0(r){if(r.batchShape==null&&r.shape==null)throw new Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(r.batchShape!=null&&r.shape!=null)throw new P("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let e=r.batchShape;r.shape!=null&&e==null&&(e=[null].concat(r.shape));let t=r.dtype;return t==null&&(t="float32"),new zl({batchInputShape:e,name:r.name,dtype:t,sparse:r.sparse}).inboundNodes[0].outputTensors[0]}function tX(r,e){if(r.dtype==null||r.dtype===e.dtype)return e;try{return j(e,r.dtype)}catch{throw new P(`The dtype of the feed (${e.dtype}) can not be cast to the dtype of the key '${r.name}' (${r.dtype}).`)}}var $n=class r{constructor(e){if(this.id2Value={},this.id2Mask={},this.name2Id={},e instanceof r)for(let t in e.id2Value)this.id2Value[t]=e.id2Value[t],t in e.id2Mask&&(this.id2Mask[t]=e.id2Mask[t]);else{if(e==null)return;for(let t of e)this.add(t.key,t.value)}}add(e,t,o){if(this.id2Value[e.id]==null)this.id2Value[e.id]=tX(e,t),this.name2Id[e.name]=e.id,o!=null&&(this.id2Mask[e.id]=o);else throw new P(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof Nr){if(this.id2Value[e.id]==null)throw new P(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{let t=this.name2Id[e];if(t==null)throw new P(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof Nr){if(this.id2Value[e.id]==null)throw new P(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{let t=this.name2Id[e];if(t==null)throw new P(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&Nt(this.id2Mask)}},xx=new Nm,yx=new Nm;function cR(r){xx?.setMaxEntries(r),yx?.setMaxEntries(r)}function Ml(r,e,t,o){let n=t==null?!1:t.training,s=Array.isArray(r),i=s?r:[r],a=i.map(h=>h.name),l=[],u=e.names();for(let h of a)u.indexOf(h)!==-1?l.push(e.getValue(h)):l.push(null);o!=null&&(o.maxNumTensors=-1/0,o.minNumTensors=1/0);let c=a.join(",")+"|"+e.names().sort().join(","),p=xx.get(c),m;if(p==null){let h=eX(i,e);p=h.sorted,m=h.recipientCounts,xx.put(c,p),yx.put(c,m)}m={},n||Object.assign(m,yx.get(c));let f=new $n(e);for(let h=0;h<p.length;++h){if(o!=null){let O=Wp().numTensors;O>o.maxNumTensors&&(o.maxNumTensors=O),O<o.minNumTensors&&(o.minNumTensors=O)}let g=p[h],d=g.sourceLayer;if(d instanceof zl)continue;let x=[],y=[],w=[],C=!1;for(let O of g.inputs){let z=f.getValue(O),V=f.getMask(O);x.push(z),y.push(V),V!=null&&(C=!0),n||(m[O.name]--,m[O.name]===0&&!e.hasKey(O)&&a.indexOf(O.name)===-1&&!z.isDisposed&&O.sourceLayer.stateful!==!0&&w.push(z))}C&&(t=t||{},t.mask=y[0]);let T=Kt(d.apply(x,t)),A=null;d.supportsMasking&&(A=d.computeMask(x,y));let $=oX(g),_=Array.isArray($)?$:[$];for(let O=0;O<_.length;++O){f.hasKey(_[O])||f.add(_[O],T[O],Array.isArray(A)?A[0]:A);let z=a.indexOf(_[O].name);z!==-1&&(l[z]=T[O])}n||Nt(w)}return f.disposeMasks(),s?l:l[0]}function eX(r,e){b.assert(r!=null&&r.length>0,()=>"Expected at least one fetch, got none");let t=[],o={};if(r.length===1){let n=uR(r[0],e);t=n.sorted,o=n.recipientMap}else{let n=new Set;for(let s of r){let{sorted:i,recipientMap:a}=uR(s,e);for(let l of i)n.has(l.name)||(t.push(l),n.add(l.name));for(let l in a)o[l]==null&&(o[l]=new Set),a[l].forEach(u=>o[l].add(u))}}return{sorted:t,recipientCounts:rX(o)}}function rX(r){let e={};for(let t in r)e[t]=r[t].size;return e}function uR(r,e){let t=new Set,o=[],n={};for(let a of e.names())t.add(a);let s=[],i=[];for(s.push(r);s.length>0;){let a=s[s.length-1];if(t.has(a.name)){s.pop();continue}let l=i[i.length-1]===s.length-1;if(a.inputs.length===0||l)s.pop(),o.push(a),t.add(a.name),l&&i.pop();else{i.push(s.length-1);for(let u of a.inputs)n[u.name]==null&&(n[u.name]=new Set),n[u.name].add(a.name),!t.has(u.name)&&s.push(u)}}return{sorted:o,recipientMap:n}}function oX(r){let e;if(r.sourceLayer.inboundNodes.length===1)e=r.sourceLayer.output;else{let t=null;for(let o=0;o<r.sourceLayer.inboundNodes.length;++o)for(let n of r.sourceLayer.inboundNodes[o].outputTensors)if(n.id===r.id){t=o;break}e=r.sourceLayer.getOutputAt(t)}return e}var nX=L();nX.registerFlag("TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES",()=>100,cR);function y0(r,e){return M(()=>Xt(it(D(r,r),e,!0)))}var Bl=class extends q.Serializable{getConfig(){return{}}},fR=(()=>{class r extends Bl{constructor(t){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return M(()=>{let o=y0(t,this.axis),n=Xe(o,0,this.maxValue);return D(t,rt(n,U(Me(),o)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}}return r.className="MaxNorm",r})();q.registerClass(fR);var hR=(()=>{class r extends Bl{constructor(t){super(),this.defaultAxis=0,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return M(()=>rt(t,U(Me(),y0(t,this.axis))))}getConfig(){return{axis:this.axis}}}return r.className="UnitNorm",r})();q.registerClass(hR);var dR=(()=>{class r extends Bl{apply(t){return ar(t)}}return r.className="NonNeg",r})();q.registerClass(dR);var gR=(()=>{class r extends Bl{constructor(t){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=t.minValue!=null?t.minValue:this.defaultMinValue,this.maxValue=t.maxValue!=null?t.maxValue:this.defaultMaxValue,this.rate=t.rate!=null?t.rate:this.defaultRate,this.axis=t.axis!=null?t.axis:this.defaultAxis}apply(t){return M(()=>{let o=y0(t,this.axis),n=U(D(this.rate,Xe(o,this.minValue,this.maxValue)),D(1-this.rate,o));return D(t,rt(n,U(Me(),o)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}}return r.className="MinMaxNorm",r})();q.registerClass(gR);var pR={maxNorm:"MaxNorm",minMaxNorm:"MinMaxNorm",nonNeg:"NonNeg",unitNorm:"UnitNorm"};function ve(r){return gp(r)}function mR(r,e={}){return En(r,q.SerializationMap.getMap().classNameMap,e,"constraint")}function Se(r){if(r==null)return null;if(typeof r=="string"){let t={className:r in pR?pR[r]:r,config:{}};return mR(t)}else return r instanceof Bl?r:mR(r)}function Hs(r){return B(this,null,function*(){if(r==null)return;let e=[],t=[],o=[];for(let n in r){let s=r[n];if(typeof s!="number"){let i=s;e.push(i.data()),t.push(n),o.push(i)}}if(e.length>0){let n=yield Promise.all(e);for(let s=0;s<n.length;++s)r[t[s]]=n[s][0];Nt(o)}})}function bx(r){if(r!=null)for(let e in r){let t=r[e];typeof t!="number"&&t.dispose()}}var aX=125,Ia=class{constructor(){this.validationData=null}setParams(e){this.params=e}onEpochBegin(e,t){return B(this,null,function*(){})}onEpochEnd(e,t){return B(this,null,function*(){})}onBatchBegin(e,t){return B(this,null,function*(){})}onBatchEnd(e,t){return B(this,null,function*(){})}onTrainBegin(e){return B(this,null,function*(){})}onTrainEnd(e){return B(this,null,function*(){})}setModel(e){}},wx=class{constructor(e,t=10){e==null&&(e=[]),this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}onEpochBegin(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onEpochBegin(e,t)})}onEpochEnd(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onEpochEnd(e,t)})}onBatchBegin(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onBatchBegin(e,t)})}onBatchEnd(e,t){return B(this,null,function*(){t==null&&(t={});for(let o of this.callbacks)yield o.onBatchEnd(e,t)})}onTrainBegin(e){return B(this,null,function*(){e==null&&(e={});for(let t of this.callbacks)yield t.onTrainBegin(e)})}onTrainEnd(e){return B(this,null,function*(){e==null&&(e={});for(let t of this.callbacks)yield t.onTrainEnd(e)})}},b0=class extends Ia{constructor(){super()}onEpochBegin(e){return B(this,null,function*(){this.seen=0,this.totals={}})}onBatchEnd(e,t){return B(this,null,function*(){t==null&&(t={});let o=t.size==null?0:t.size;this.seen+=o;for(let n in t){let s=t[n];if(typeof s=="number")this.totals.hasOwnProperty(n)||(this.totals[n]=0),this.totals[n]=this.totals[n]+s*o;else{let i;n in this.totals?i=this.totals[n]:this.totals[n]=0;let a=M(()=>U(this.totals[n],D(s,o)));this.totals[n]=a,i?.dispose()}}})}onEpochEnd(e,t){return B(this,null,function*(){if(t!=null)for(let o of this.params.metrics)this.totals[o]!=null&&(typeof this.totals[o]=="number"?t[o]=this.totals[o]/this.seen:M(()=>{let n=D(rt(1,this.seen),this.totals[o]);t[o]=n,this.totals[o].dispose(),ce(t[o])}))})}},Cx=class extends Ia{onTrainBegin(e){return B(this,null,function*(){this.epoch=[],this.history={}})}onEpochEnd(e,t){return B(this,null,function*(){t==null&&(t={}),this.epoch.push(e);for(let o in t)this.history[o]==null&&(this.history[o]=[]),this.history[o].push(t[o])})}syncData(){return B(this,null,function*(){let e=[],t=[],o=[];for(let s in this.history){let i=this.history[s];for(let a=0;a<i.length;++a)if(typeof i[a]!="number"){let l=i[a];e.push(l.data()),t.push(s),o.push(a)}}let n=yield Promise.all(e);for(let s=0;s<n.length;++s)this.history[t[s]][o[s]].dispose(),this.history[t[s]][o[s]]=n[s][0]})}},vx=class extends Ia{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||vl,this.yieldEvery=t||"auto",this.yieldEvery==="auto"&&(this.yieldEvery=aX),this.yieldEvery==="never"&&e.onYield!=null)throw new Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");b.isNumber(this.yieldEvery)&&(this.maybeWait=FD(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}maybeWait(e,t,o){return B(this,null,function*(){let n=[];this.yield!=null&&(yield Hs(o),n.push(this.yield(e,t,o))),n.push(this.nextFrameFunc()),yield Promise.all(n)})}onEpochBegin(e,t){return B(this,null,function*(){this.currentEpoch=e,this.epochBegin!=null&&(yield Hs(t),yield this.epochBegin(e,t))})}onEpochEnd(e,t){return B(this,null,function*(){let o=[];this.epochEnd!=null&&(yield Hs(t),o.push(this.epochEnd(e,t))),this.yieldEvery==="epoch"&&o.push(this.nextFrameFunc()),yield Promise.all(o)})}onBatchBegin(e,t){return B(this,null,function*(){this.batchBegin!=null&&(yield Hs(t),yield this.batchBegin(e,t))})}onBatchEnd(e,t){return B(this,null,function*(){let o=[];this.batchEnd!=null&&(yield Hs(t),o.push(this.batchEnd(e,t))),this.yieldEvery==="batch"?o.push(this.nextFrameFunc()):b.isNumber(this.yieldEvery)&&o.push(this.maybeWait(this.currentEpoch,e,t)),yield Promise.all(o)})}onTrainBegin(e){return B(this,null,function*(){this.trainBegin!=null&&(yield Hs(e),yield this.trainBegin(e))})}onTrainEnd(e){return B(this,null,function*(){this.trainEnd!=null&&(yield Hs(e),yield this.trainEnd(e))})}};function Sx(r,e){return r==null&&(r={}),r instanceof Ia?[r]:Array.isArray(r)&&r[0]instanceof Ia?r:Kt(r).map(o=>new vx(o,e))}var xR=(()=>{class r{constructor(){}static registerCallbackConstructor(t,o){b.assert(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),r.checkForDuplicate(o),r.constructors[t]==null&&(r.constructors[t]=[]),r.constructors[t].push(o)}static checkForDuplicate(t){for(let o in r.constructors)r.constructors[+o].forEach(s=>{if(s===t)throw new P("Duplicate callback constructor.")})}static clear(){r.constructors={}}static createCallbacks(t){let o=[];for(let n in r.constructors){let s=+n;t>=s&&o.push(...r.constructors[s])}return o.map(n=>new n)}}return r.constructors={},r})();function Nx(r,e,t,o,n,s,i,a,l){let u=new Cx,c=[new b0,...xR.createCallbacks(e)];r!=null&&c.push(...r),c.push(u);let p=new wx(c);return p.setParams({epochs:t,initialEpoch:o,samples:n,steps:s,batchSize:i,verbose:e,doValidation:a,metrics:l}),{callbackList:p,history:u}}function lo(r,e={},t=!1){return En(r,q.SerializationMap.getMap().classNameMap,e,"layer",t)}function $m(r,e){return M(()=>{r.dtype!=="float32"&&(r=j(r,"float32"));let t=it(Pl(r),e,!0),o=So(t.shape,Me()),n=Xt(Gr(t,o));return rt(r,n)})}function Vl(r,e){return M(()=>oe(Pl(et(e,r)),-1))}function Rm(r,e){return M(()=>oe(ae(et(e,r)),-1))}function _m(r,e){return M(()=>{let t=et(r,e),o=Xe(ae(r),Me(),Number.MAX_VALUE),n=ae(rt(t,o));return D(100,oe(n,-1))})}function lX(r,e){return M(()=>{let t=Xe(e,Me(),Number.MAX_VALUE),o=Ze(U(1,t)),n=Xe(r,Me(),Number.MAX_VALUE),s=Ze(U(1,n));return oe(Pl(et(o,s)),-1)})}function uX(r,e){return M(()=>{let t=Gr(0,et(1,D(r,e)));return oe(Pl(t),-1)})}function cX(r,e){return M(()=>{let t=Gr(0,et(1,D(r,e)));return oe(t,-1)})}function pX(r,e){return M(()=>{let t=it(D(r,e),-1),o=Ye(D(et(1,r),e),-1);return Gr(0,U(1,et(o,t)))})}function mX(r,e){return M(()=>{let t=Math.log(2),o=et(e,r),n=et(U(o,Ho(D(-2,o))),t);return oe(n,-1)})}function Gl(r,e,t=!1){return M(()=>{if(t)e=pa(e);else{let o=it(e,e.shape.length-1,!0);e=rt(e,o)}return e=Xe(e,Me(),1-Me()),_t(it(D(j(r,"float32"),Ze(e)),e.shape.length-1))})}function Sp(r,e,t=!1){return M(()=>{let o=j(Cn(HD(r)),"int32");e=Xe(e,Me(),1-Me());let n=e.shape,s=R(pl(o,n[n.length-1]),n);return Gl(s,e,t)})}function fX(r,e){if(!b.arraysEqual(r.shape,e.shape))throw new P(`logits and labels must have the same shape, but got shapes ${JSON.stringify(r.shape)} and ${JSON.stringify(e.shape)}`);return M(()=>{let t=ar(e),o=_t(ae(e));return U(et(t,D(e,r)),sa(Ie(o)))})}function Np(r,e){return M(()=>{let t;return t=Xe(e,Me(),1-Me()),t=Ze(rt(t,et(1,t))),oe(fX(r,t),-1)})}function hX(r,e){return M(()=>{let t=Xe(r,Me(),1),o=Xe(e,Me(),1);return it(D(r,Ze(rt(t,o))),-1)})}function dX(r,e){return M(()=>{let t=Ze(U(Me(),e));return oe(et(e,D(r,t)),-1)})}function Tx(r,e){return M(()=>{let t=$m(r,-1),o=$m(e,-1),n=D(t,o);return _t(it(n,-1))})}var Dm={meanSquaredError:Vl,meanAbsoluteError:Rm,meanAbsolutePercentageError:_m,meanSquaredLogarithmicError:lX,squaredHinge:uX,hinge:cX,categoricalHinge:pX,logcosh:mX,categoricalCrossentropy:Gl,sparseCategoricalCrossentropy:Sp,binaryCrossentropy:Np,kullbackLeiblerDivergence:hX,poisson:dX,cosineProximity:Tx};function Ix(r){if(typeof r=="string"){if(r in Dm)return Dm[r];let e=`Unknown loss ${r}`;throw r.toLowerCase().includes("softmaxcrossentropy")&&(e=`Unknown loss ${r}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new P(e)}else return r}function Ex(r,e){return M(()=>{let t=D(.5,He(e)),o=Sr(ye(e,t),r.dtype);return oe(wr(r,o),-1)})}function Ax(r,e){return M(()=>Sr(wr(dn(r,-1),dn(e,-1)),"float32"))}function gX(r,e){return M(()=>j(it(fr(wr(r,1),wr(e,1))),"float32"))}function xX(r,e){return M(()=>j(it(fr(wr(r,0),wr(e,1))),"float32"))}function bR(r,e){return M(()=>{let t=gX(r,e),o=xX(r,e),n=U(t,o);return j(re(ye(n,0),rt(t,n),0),"float32")})}function w0(r,e){return Np(r,e)}function C0(r,e){return r.rank===e.rank&&(r=Cr(r,[r.rank-1])),e=dn(e,-1),e.dtype!==r.dtype&&(e=j(e,r.dtype)),j(wr(r,e),"float32")}var yX=Vl,bX=Vl,wX=Rm,CX=Rm,vX=_m,SX=_m,$x=Gl,NX=Tx,v0=Sp,kx={binaryAccuracy:Ex,categoricalAccuracy:Ax,precision:bR,categoricalCrossentropy:$x,sparseCategoricalCrossentropy:v0,mse:yX,MSE:bX,mae:wX,MAE:CX,mape:vX,MAPE:SX,cosine:NX};function wR(r){if(typeof r=="string"&&r in kx)return kx[r];if(typeof r!="string"&&r!=null)return r;throw new P(`Unknown metric ${r}`)}function Fm(r){if(xo(r!==null,`Unknown LossOrMetricFn ${r}`),typeof r=="string")return r;{let e;for(let t of Object.keys(Dm))if(Dm[t]===r){e=t;break}if(e!==void 0)return e;for(let t of Object.keys(kx))if(kx[t]===r){e=t;break}return e!==void 0?e:r.name}}function vR(r){let e={Adagrad:()=>Cl.adagrad(.01),Adadelta:()=>Cl.adadelta(1,.95,Me()),Adam:()=>Cl.adam(.001,.9,.999,Me()),Adamax:()=>Cl.adamax(.002,.9,.999,Me(),0),RMSProp:()=>Cl.rmsprop(.001,.9,0,Me()),SGD:()=>Cl.sgd(.01)};if(e.adagrad=e.Adagrad,e.adadelta=e.Adadelta,e.adam=e.Adam,e.adamax=e.Adamax,e.rmsprop=e.RMSProp,e.sgd=e.SGD,r in e)return e[r]();throw new P(`Unknown Optimizer ${r}`)}function N0(r,e,t=!1){if(r==null||typeof r!="object"||Object.getPrototypeOf(r)!==Object.prototype||!S0(r))throw new Error("User-defined metadata is expected to be a JSON object, but is not.");if(t){let o=JSON.stringify(r);o.length>1048576&&console.warn(`User-defined metadata of model "${e}" is too large in size (length=${o.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= 1048576.`)}}function S0(r){if(r===null)return!0;if(typeof r=="object")if(Object.getPrototypeOf(r)===Object.prototype){let e=Object.keys(r);for(let t of e)if(typeof t!="string"||!S0(r[t]))return!1;return!0}else if(Array.isArray(r)){for(let e of r)if(!S0(e))return!1;return!0}else return!1;else{let e=typeof r;return e==="string"||e==="number"||e==="boolean"}}function SR(r,e,t,o=console.log){let n=kX(r),s=["Layer (type)","Input Shape","Output shape","Param #"];n?(e=e||90,t=t||[.32,.61,.89,1]):(e=e||115,t=t||[.24,.48,.7,.8,1]),t[t.length-1]<=1&&(t=t.map(c=>Math.floor(e*c)));let i;if(!n){s.push("Receives inputs"),i=[];for(let c in r.nodesByDepth)i.push(...r.nodesByDepth[c])}o("_".repeat(e)),Dx(s,t,o),o("=".repeat(e));let a=r.layers;for(let c=0;c<a.length;++c)n?EX(a[c],t,o):AX(a[c],t,i,o),o((c===a.length-1?"=":"_").repeat(e));r.checkTrainableWeightsConsistency();let l=IX(r),u=Cp(r.nonTrainableWeights);o(`Total params: ${l+u}`),o(`Trainable params: ${l}`),o(`Non-trainable params: ${u}`),o("_".repeat(e))}function IX(r){let e;return r.collectedTrainableWeights!=null?e=Cp(r.collectedTrainableWeights):e=Cp(r.trainableWeights),e}function kX(r){let e=!0,t=[],o=[];for(let n in r.nodesByDepth)t.push(r.nodesByDepth[n]);for(let n of t){if(n.length>1||n.length===1&&n[0].inboundLayers.length>1){e=!1;break}o.push(...n)}if(e)for(let n of r.layers){let s=!1;for(let i of n.inboundNodes)if(o.indexOf(i)!==-1)if(s){e=!1;break}else s=!0;if(!e)break}return e}function Dx(r,e,t=console.log){let o="";for(let n=0;n<r.length;++n)n>0&&(o=o.slice(0,o.length-1)+" "),o+=r[n],o=o.slice(0,e[n]),o+=" ".repeat(e[n]-o.length);t(o)}function EX(r,e,t){let o,n;try{n=r.inboundNodes.map(l=>JSON.stringify(l.inputShapes)).join(",")}catch{n="multiple"}try{o=JSON.stringify(r.outputShape)}catch{o="multiple"}let s=r.name,i=r.getClassName(),a=[`${s} (${i})`,n,o,r.countParams().toString()];Dx(a,e,t)}function AX(r,e,t,o){let n,s;try{s=r.inboundNodes.map(p=>JSON.stringify(p.inputShapes)).join(",")}catch{s="multiple"}try{n=JSON.stringify(r.outputShape)}catch{n="multiple"}let i=[];for(let p of r.inboundNodes)if(!(t!=null&&t.length>0&&t.indexOf(p)===-1))for(let m=0;m<p.inboundLayers.length;++m){let f=p.inboundLayers[m].name,h=p.nodeIndices[m],g=p.tensorIndices[m];i.push(`${f}[${h}][${g}]`)}let a=r.name,l=r.getClassName(),u=i.length===0?"":i[0],c=[`${a} (${l})`,s,n,r.countParams().toString(),u];Dx(c,e,o);for(let p=1;p<i.length;++p)Dx(["","","","",i[p]],e,o)}function NR(r,e,t){return(r==="inboundNodes"||r==="outputLayers"||r==="inputLayers")&&e===0&&typeof t=="string"}function Om(r,e){if(r===null)return null;if(typeof r=="string")return Vs(r);if(typeof r=="number"||typeof r=="boolean")return r;if(r instanceof Array){let t=[],o=r.length;for(let n=0;n<o;++n){let s=r[n];NR(e,n,s)?t.push(s):t.push(Om(s,e))}return t}else{let t={};for(let o of Object.keys(r)){let n=r[o];if(o==="name"&&typeof n=="string")t[o]=n;else{let s=Vs(o);t[s]=Om(n,s)}}return t}}function Rx(r,e){if(r==null)return null;if(typeof r=="string")return Fo(r);if(typeof r=="number"||typeof r=="boolean")return r;if(r instanceof Array){let t=[],o=r.length;for(let n=0;n<o;++n){let s=r[n];NR(e,n,s)?t.push(s):t.push(Rx(s,e))}return t}else{let t={};for(let o of Object.keys(r)){let n=r[o],s=Fo(o);(o==="name"||o==="className")&&typeof n=="string"?t[s]=n:t[s]=Rx(n,o)}return t}}var Tp="4.22.0";var $X=r=>{let e=Object.keys(r);if(e.length===0)return!1;let t=e[0].split("/");return!isNaN(parseInt(t[t.length-1],10))},_x=class r extends Ct{constructor(e){if(super({}),this.containerNodes=new Set,this.name=e.name,this.name==null){let y=this.getClassName().toLowerCase();this.name=Na(y)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(e.inputs)?this.inputs=e.inputs.slice():this.inputs=[e.inputs],Array.isArray(e.outputs)?this.outputs=e.outputs.slice():this.outputs=[e.outputs],Oo(this.inputs).length!==this.inputs.length)throw new P(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(y=>y.name)}`);Oo(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(y=>y.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let y of this.outputs){let w=y.sourceLayer,C=y.nodeIndex,T=y.tensorIndex;this.outputLayers.push(w),this.outputLayersNodeIndices.push(C),this.outputLayersTensorIndices.push(T)}for(let y of this.inputs){let w=y.sourceLayer,C=y.nodeIndex,T=y.tensorIndex;xo(C===0,"input layer has >1 nodes"),xo(T===0,"input layer has >1 tensors"),this.inputLayers.push(w),this.inputLayersNodeIndices.push(C),this.inputLayersTensorIndices.push(T)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let y=0;y<this.inputLayers.length;y++){let w=this.inputLayers[y];if(!(w instanceof zl))throw new TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${e.inputs}. Input ${y} (0-based) originates from layer type ${w.getClassName()}.`);this.inputNames.push(w.name),this.feedInputShapes.push(w.batchInputShape),this.feedInputNames.push(w.name)}for(let y of this.outputLayers)this.outputNames.push(y.name);this.internalInputShapes=this.inputs.map(y=>y.shape),this.internalOutputShapes=this.outputs.map(y=>y.shape);let t={},o={},n={},s={},i={},a=[],l=(y,w,C,T,A,$)=>{(T==null||A==null||$==null)&&(T=y.sourceLayer,A=y.nodeIndex,$=y.tensorIndex);let _=T.inboundNodes[A];if(C.indexOf(_)!==-1)throw new Dr(`The tensor ${y.name} at layer "${T.name}" is part of a cycle.`);if(w.indexOf(_)!==-1)return;this.containerNodes.add(r.nodeKey(T,A)),T.id in i||(i[T.id]=Object.keys(i).length),C.indexOf(_)===-1&&C.push(_);let O=_.inboundLayers.length;for(let z=0;z<O;z++){let V=_.inputTensors[z],G=_.inboundLayers[z],W=_.nodeIndices[z],H=_.tensorIndices[z];l(V,w,C,G,W,H)}for(w.push(_);C.indexOf(_)>=0;)C.splice(C.indexOf(_),1);a.push(_)},u=[],c=[];for(let y of this.outputs)l(y,u,c);let p=a.slice().reverse();for(let y of p){o[y.id]=y,y.id in t||(t[y.id]=0);let w=t[y.id],C=n[y.outboundLayer.id]==null?0:n[y.outboundLayer.id];w=Math.max(w,C),n[y.outboundLayer.id]=w,s[y.outboundLayer.id]=y.outboundLayer,t[y.id]=w;for(let T=0;T<y.inboundLayers.length;T++){let A=y.inboundLayers[T],$=y.nodeIndices[T],_=A.inboundNodes[$],O=t[_.id]==null?0:t[_.id];t[_.id]=Math.max(w+1,O),o[_.id]=_}}let m={};for(let y in t){let w=t[y];w in m||(m[w]=[]),m[w].push(o[y])}let f={};for(let y in n){let w=n[y];w in f||(f[w]=[]),f[w].push(s[y])}let h=Object.keys(f).map(y=>parseInt(y,10)).sort(Tm);this.layers=[];for(let y of h){let w=f[y];w.sort((C,T)=>{let A=i[C.id],$=i[T.id];return A<$?-1:A>$?1:0});for(let C of w)C instanceof r&&this.internalContainerRefs.push(C),this.layers.push(C)}this.layersByDepth=f,h=Object.keys(m).map(y=>parseInt(y,10)).sort(Tm);let g=this.inputs.slice(),d=[];for(let y of h)for(let w of m[y]){let C=w.outboundLayer;if(C!=null){for(let T of w.inputTensors)if(g.indexOf(T)===-1)throw new Dr(`Graph disconnected: cannot obtain value for tensor ${T} at layer "${C.name}". The following previous layers were accessed without issue: ${d}`);for(let T of w.outputTensors)g.push(T);d.push(C.name)}}this.nodesByDepth=m;let x=this.layers.map(y=>y.name);for(let y of x){let w=x.filter(C=>C===y).length;if(w!==1)throw new Dr(`The name "${y}" is used ${w} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(x))}this.outboundNodes=[],this.inboundNodes=[],new Us({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(y=>null),outputMasks:this.outputs.map(y=>null),inputShapes:this.inputs.map(y=>y.shape),outputShapes:this.outputs.map(y=>y.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw new Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(o=>o.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new P("Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.");if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let o of this.layers)t.push(...o.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let o={},n=0,s=$X(e);s&&this.parseWeights(e);for(let a of this.layers)for(let[l,u]of a.weights.entries()){let c=s?`${u.name.split("/").slice(0,-1).join("/")+"/"}${l}`:u.originalName;if(o[c]!=null)throw new P(`Duplicate weight name: ${c}`);o[c]=u,n++}let i=[];for(let a in e){let l=a;if(o[a]==null){let u=a.split("/");l=u.slice(0,-2).concat([u[u.length-1]]).join("/")}if(o[l]!=null)i.push([o[l],e[a]]);else if(t)throw new P(`Provided weight data has no target variable: ${a}`);delete o[l]}if(t){let a=[];for(let l in o)a.push(l);if(a.length>0)throw new P(`${a.length} of ${n} weights are not set: ${a}`)}vp(i)}parseWeights(e){for(let t in Object.keys(e)){let o=t.split("/"),n=["vars","layer_checkpoint_dependencies"],s=o.map(i=>i.startsWith("_")?i.slice(1):i).filter(i=>!n.includes(i)).join("/");s!==t&&(e[s]=e[t],delete e[t])}}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${Tp}`,t.backend="TensorFlow.js",t}toJSON(e,t=!0){let o=Rx(this.updatedConfig());return t?JSON.stringify(o):o}call(e,t){return M(()=>{e=Kt(e);let o=new $n;for(let n=0;n<this.inputs.length;++n)o.add(this.inputs[n],e[n]);return Ml(this.outputs,o,t)})}computeMask(e,t){return M(()=>{e=Kt(e);let o;return t==null?o=_o(null,e.length):o=Kt(t),this.runInternalGraph(e,o)[1]})}computeOutputShape(e){let t=wp(e);if(t.length!==this.inputLayers.length)throw new P(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let o={};for(let a=0;a<t.length;a++){let l=this.inputLayers[a],u=t[a],c=l.name+"_0_0";o[c]=u}let n=Object.keys(this.nodesByDepth).map(a=>parseInt(a,10)).sort(Tm);if(n.length>1)for(let a of n){let l=this.nodesByDepth[a];for(let u of l){let c=u.outboundLayer;if(this.inputLayers.map(g=>g.id).indexOf(c.id)!==-1)continue;let p=[];for(let g=0;g<u.inboundLayers.length;g++){let d=u.inboundLayers[g],x=u.nodeIndices[g],y=u.tensorIndices[g],w=`${d.name}_${x}_${y}`,C=o[w];p.push(C)}let m=c.computeOutputShape(er(p)),f=wp(m),h=c.inboundNodes.indexOf(u);for(let g=0;g<f.length;g++){let d=`${c.name}_${h}_${g}`;o[d]=f[g]}}}let s=[],i=[];for(let a=0;a<this.outputLayers.length;a++){let l=this.outputLayers[a],u=this.outputLayersNodeIndices[a],c=this.outputLayersTensorIndices[a],p=`${l.name}_${u}_${c}`;i.push(p)}for(let a=0;a<i.length;a++){let l=i[a];xo(l in o),s.push(o[l])}return er(s)}runInternalGraph(e,t){t==null&&(t=_o(null,e.length));let o={};for(let l=0;l<this.inputs.length;++l){let u=this.inputs[l],c=e[l],p=t[l];o[u.id]=[c,p]}let n=Object.keys(this.nodesByDepth).map(l=>parseInt(l,10)).sort(Tm);for(let l of n){let u=this.nodesByDepth[l];for(let c of u){let p=c.outboundLayer,m=c.inputTensors,f=c.outputTensors,h=new Array;for(let g of m)g.id in o&&h.push(o[g.id]);if(h.length===m.length){let g={},d,x,y,w;if(c.callArgs!=null&&(g=c.callArgs),h.length===1){let[C,T]=h[0];g.mask==null&&(g.mask=T),y=Kt(p.call(C,g)),w=Kt(p.computeMask(C,T)),d=[C],x=[T]}else d=h.map(C=>C[0]),x=h.map(C=>C[1]),g.mask==null&&(g.mask=x),y=Kt(p.call(d,g)),w=Kt(p.computeMask(d,x));if(p.activityRegularizer)throw new wt("LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.");for(let C=0;C<f.length;++C){let T=f[C],A=y[C],$=w[C];o[T.id]=[A,$]}}}}let s=[],i=[],a=[];for(let l of this.outputs){xo(l.id in o,`Could not compute output ${l.name} : ${l.id}`);let[u,c]=o[l.id];a.push(u.shape),s.push(u),i.push(c)}return[s,i,a]}buildNodeConversionMap(e){let t={},o;for(let n of this.layers){o=n instanceof r?1:0;for(let s=0;s<n.inboundNodes.length;s++){let i=r.nodeKey(n,s);this.containerNodes.has(i)&&(t[i]=o,o+=1)}}return t}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new P("Provide either a layer name or layer index");if(typeof e=="number")return this.findLayer(e);for(let o of this.layers)if(o.name===e)return o;throw new P(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new P(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return M(()=>{let e=[];for(let t of this.layers)for(let o=0;o<t.inboundNodes.length;++o){let n=r.nodeKey(t,o);this.containerNodes.has(n)&&e.push(...t.calculateLosses())}return e})}getConfig(){let e={name:this.name},t=this.buildNodeConversionMap(this.layers),o=[];for(let i of this.layers){let a=i.getClassName(),l=i.getConfig(),u=[];for(let p=0;p<i.inboundNodes.length;p++){let m=i.inboundNodes[p],f=r.nodeKey(i,p),h={};if(this.containerNodes.has(f)){if(m.callArgs)try{JSON.stringify(m.callArgs),h=m.callArgs}catch{console.warn(`Layer ${i.name} was passed non-serializable keyword arguments: ${m.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),h={}}if(m.inboundLayers.length>0){let g=[];for(let d=0;d<m.inboundLayers.length;d++){let x=m.inboundLayers[d],y=m.nodeIndices[d],w=m.tensorIndices[d],C=r.nodeKey(x,y),T=t[C];T==null&&(T=0),g.push([x.name,T,w,h])}u.push(g)}}}let c={};c.name=i.name,c.className=a,c.config=l,c.inboundNodes=u,o.push(c)}e.layers=o;let n=[];for(let i=0;i<this.inputLayers.length;i++){let a=this.inputLayers[i],l=this.inputLayersNodeIndices[i],u=r.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=t[u];c==null&&(c=0);let p=this.inputLayersTensorIndices[i];n.push([a.name,c,p])}e.inputLayers=n;let s=[];for(let i=0;i<this.outputLayers.length;i++){let a=this.outputLayers[i],l=this.outputLayersNodeIndices[i],u=r.nodeKey(a,l);if(!this.containerNodes.has(u))continue;let c=t[u];c==null&&(c=0);let p=this.outputLayersTensorIndices[i];s.push([a.name,c,p])}return e.outputLayers=s,e}static fromConfig(e,t,o={},n=!1){let s={},i={};function a(d,x){d.name in i?i[d.name].push(x):i[d.name]=[x]}function l(d,x){let y=[],w;for(let C of x){let T=C[0],A=C[1],$=C[2];if(w=C[3]==null?{}:C[3],!(T in s)){a(d,x);return}let _=s[T];if(_.inboundNodes.length<=A){a(d,x);return}let O=_.inboundNodes[A];y.push(O.outputTensors[$])}y.length>0&&d.apply(er(y),w)}function u(d){let x=d.name,y=lo(d,t.customObjects!=null?t.customObjects:{});y.setFastWeightInitDuringBuild(n),s[x]=y,d.inboundNodes.forEach(C=>{if(!(C instanceof Array))throw new P(`Corrupted configuration, expected array for nodeData: ${C}`);a(y,C)})}let c=t.name,p=t.layers;for(let d of p)u(d);for(;!RD(i);)for(let d of p){let x=s[d.name];if(x.name in i){let y=i[x.name];delete i[x.name];for(let w of y)l(x,w)}}let m=[],f=[],h=t.inputLayers;for(let d of h){let x=d[0],y=d[1],w=d[2];xo(x in s);let T=s[x].inboundNodes[y].outputTensors;m.push(T[w])}let g=t.outputLayers;for(let d of g){let x=d[0],y=d[1],w=d[2];xo(x in s);let T=s[x].inboundNodes[y].outputTensors;f.push(T[w])}return new e({inputs:m,outputs:f,name:c})}get stateful(){if(this._stateful)throw new P("Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.");for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){M(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}};function DX(r,e,t){let o=e.length;if(r==null||Array.isArray(r)&&r.length===0)return e.map(n=>null);if(o===1)return Array.isArray(r)&&r.length===1?r:typeof r=="object"&&e[0]in r?[r[e[0]]]:[r];if(Array.isArray(r)){if(r.length!==o)throw new Error(`Provided ${t} is an array of ${r.length} element(s), but the model has ${o} outputs. Make sure a set of weights is provided for each model output.`);return r}else if(typeof r=="object"&&Object.keys(r).length>0&&typeof r[Object.keys(r)[0]]=="object"){let n=[];return e.forEach(s=>{s in r?n.push(r[s]):n.push(null)}),n}else throw new Error(`The model has multiple (${o}) outputs, so ${t} must be either an array with ${o} elements or an object with ${e} keys. Provided ${t} not understood: ${JSON.stringify(r)}`)}function Fx(r,e){return DX(r,e,"classWeight")}function Ox(r,e,t,o){return B(this,null,function*(){if(e!=null||o!=null)throw new Error("Support sampleWeight is not implemented yet");if(t!=null){let n=M(()=>{if(r.shape.length===1)return kr(r);if(r.shape.length===2){if(r.shape[1]>1)return dn(r,1);if(r.shape[1]===1)return R(r,[r.shape[0]]);throw new Error(`Encountered unexpected last-dimension size (${r.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw new Error(`Unexpected rank of target (y) tensor (${r.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),s=Array.from(yield n.data());Nt(n);let i=[];return s.forEach(a=>{if(t[a]==null)throw new Error(`classWeight must contain all classes in the training data. The class ${a} exists in the data but not in classWeight`);i.push(t[a])}),le(i,"float32")}else return null})}function TR(r,e){return D(r,e)}var RX=32;function ER(r,e){let t,o,n=e;t=n.xs,o=n.ys,b.assert(t!=null&&o!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${e}`);let s=IR("input",r.inputNames,t),i=IR("output",r.outputNames,o),a=s[0].shape[0];b.assert(s.length===r.inputs.length,()=>`LayersModel has ${r.inputs.length} inputs, but the dataset provides ${s.length} inputs.  (Expected input keys: ${JSON.stringify(r.inputNames)})`),b.assert(i.length===r.outputs.length,()=>`LayersModel has ${r.outputs.length} outputs, but the dataset provides ${i.length} outputs.  (Expected output keys: ${JSON.stringify(r.outputNames)})`);for(let l=0;l<s.length;l++)b.assert(s[l].shape[0]===a,()=>`Batch size mismatch: input ${r.inputNames[l]} has ${s[l].shape[0]}; expected  ${a} based on input ${r.inputNames[0]}.`);for(let l=0;l<i.length;l++)b.assert(i[l].shape[0]===a,()=>`Batch size mismatch: output ${r.outputNames[l]} has ${i[l].shape[0]}; expected  ${a} based on input ${r.inputNames[0]}.`);return{xs:s,ys:i}}function IR(r,e,t){if(t instanceof Ft)return[t];if(Array.isArray(t))return b.assert(t.length===e.length,()=>`Received an array of ${t.length} Tensors, but expected ${e.length} to match the ${r} keys ${e}.`),t;{let o=[];for(let n of e){if(t[n]==null)throw new P(`The feature data generated by the dataset lacks the required ${r} key '${n}'.`);o.push(t[n])}return o}}function _X(r){if(r.length===3)throw new wt("Validation with sample weights is not implemented yet.");return{xs:r[0],ys:r[1]}}function AR(r,e,t){return B(this,null,function*(){let o=t.batchesPerEpoch!=null;if(b.assert(r.optimizer!=null,()=>"You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig)."),b.assert(t!=null,()=>"For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call."),b.assert(t.epochs!=null&&t.epochs>0&&Number.isInteger(t.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${t.epochs}`),b.assert(!o||t.batchesPerEpoch>0&&Number.isInteger(t.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${t.batchesPerEpoch}`),b.assert(t.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),r.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");r.isTraining=!0;try{let n=t.validationData!=null,s,i;if(n)if(kR(t.validationData))b.assert(t.validationBatches==null||t.validationBatches>0&&Number.isInteger(t.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${t.validationBatches}`);else{let d=_X(t.validationData);s=d.xs,i=d.ys}let a=r.makeTrainFunction(),l=r.getDedupedMetricsNames(),u;n?u=l.slice().concat(l.map(d=>"val_"+d)):u=l.slice();let c=Sx(t.callbacks,t.yieldEvery),p=t.verbose==null?1:t.verbose,{callbackList:m,history:f}=Nx(c,p,t.epochs,null,null,FX(e,t),null,n,u);m.setModel(r),r.history=f,yield m.onTrainBegin(),r.stopTraining_=!1;let h=t.initialEpoch==null?0:t.initialEpoch,g=yield e.iterator();for(;h<t.epochs;){let d={};yield m.onEpochBegin(h);let x=0,y=0;for(o||(g=yield e.iterator());!o||x<t.batchesPerEpoch;){let w=yield g.next();if(o&&w.done){console.warn(`You provided \`batchesPerEpoch\` as ${t.batchesPerEpoch}, but your dataset iterator ran out of data after ${x} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${t.batchesPerEpoch*t.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(w.value!=null){let{xs:C,ys:T}=ER(r,w.value),A={};A.batch=y,A.size=C[0].shape[0],yield m.onBatchBegin(y,A);let $=[];if(t.classWeight!=null){let z=Fx(t.classWeight,r.outputNames);for(let V=0;V<z.length;++V)$.push(yield Ox(T[V],null,z[V]))}let _=C.concat(T).concat($),O=a(_);Nt(_);for(let z=0;z<l.length;++z){let V=l[z],G=O[z];A[V]=G,ce(G)}yield m.onBatchEnd(y,A),bx(A),y++,x++}if(o?x>=t.batchesPerEpoch:w.done){if(n){let C;kR(t.validationData)?C=Kt(yield r.evaluateDataset(t.validationData,{batches:t.validationBatches})):C=Kt(r.evaluate(s,i,{batchSize:t.validationBatchSize==null?RX:t.validationBatchSize,verbose:0}));for(let T=0;T<r.metricsNames.length;++T)d[`val_${r.metricsNames[T]}`]=C[T]}break}if(r.stopTraining_)break}if(yield m.onEpochEnd(h,d),h++,r.stopTraining_)break}return yield m.onTrainEnd(),yield r.history.syncData(),r.history}finally{r.isTraining=!1}})}function FX(r,e){let t=null;return e.batchesPerEpoch!=null?t=e.batchesPerEpoch:Number.isFinite(r.size)&&(t=r.size),t}function kR(r){return typeof r.iterator=="function"}function OX(r){return typeof r.next=="function"}function $R(r,e,t){return B(this,null,function*(){t=t||{};let o=t.batches!=null,n=r.testFunction,s=[];if(t.verbose>0)throw new wt("Verbose mode is not implemented yet.");b.assert(!o||t.batches>0&&Number.isInteger(t.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(t.batches)}`);let i=OX(e)?e:yield e.iterator(),a=0,l=0;for(;!o||l<t.batches;){let u=yield i.next();if(s=M(()=>{if(u.value){let{xs:c,ys:p}=ER(r,u.value),m=c.concat(p),f=M(()=>n(m));if(Nt(m),l===0)for(let g=0;g<f.length;++g)s.push(st(0));let h=m[0].shape[0];for(let g=0;g<f.length;++g){let d=f[g],x=s[g];s[g]=M(()=>U(s[g],D(h,d))),l>0&&Nt(x)}Nt(f),a+=h,++l}return s}),u.done){o&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${t.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let u=0;u<s.length;++u){let c=s[u];s[u]=rt(s[u],a),Nt(c)}return er(s)})}function Lx(r){b.assert(r>0&&Number.isInteger(r),()=>`batchSize is required to be a positive integer, but got ${r}`)}function Ip(r,e,t){return r==null?[null]:Array.isArray(r)?r.map(o=>Gs(o,e,t-e)):Gs(r,e,t-e)}function Px(r,e){return M(()=>r==null?null:Array.isArray(r)?r.map(t=>Px(t,e)):fx(r,e.dtype==="int32"?e:j(e,"int32")))}function zx(r,e){let t=[],o=0,n=null;for(;o<r;)n=o+e,n>=r&&(n=r),t.push([o,n]),o=n;return t}function T0(r){let e=[];r instanceof Ft&&(r=[r]);for(let t=0;t<r.length;++t){let o=r[t];if(o.rank===1)e.push(Ws(o,1));else{if(o.rank===0)throw new Error("Expected tensor to be at least 1D, but received a 0D tensor (scalar).");e.push(o)}}return e}function zo(r,e){if(r==null)return;let t=[];if(e instanceof Ft)t.push(e.id);else if(Array.isArray(e))e.forEach(n=>t.push(n.id));else if(e!=null)for(let n in e){let s=e[n];t.push(s.id)}let o=[];if(r instanceof Ft)t.indexOf(r.id)===-1&&o.push(r);else if(Array.isArray(r))r.forEach(n=>{t.indexOf(n.id)===-1&&o.push(n)});else if(r!=null)for(let n in r){let s=r[n];t.indexOf(s.id)===-1&&o.push(s)}o.forEach(n=>{n.isDisposed||n.dispose()})}function LX(r){return r instanceof Ft}function I0(r){return Array.isArray(r)}function DR(r){return!LX(r)&&!I0(r)}function RR(r,e,t,o=!0,n=""){if(e==null||e.length===0){if(r!=null){let i=!1;if(I0(r)&&r.length>0)i=!0;else if(DR(r)){for(let a in r)if(r.hasOwnProperty(a)){i=!0;break}}else i=!0;if(i)throw new P(`Error when checking model ${n} expected no data, but got ${r}`)}return[]}if(r==null)return e.map(i=>null);let s;if(DR(r)){r=r,s=[];for(let i of e){if(r[i]==null)throw new P(`No data provided for "${i}". Need data for each key in: ${e}`);s.push(r[i])}}else if(I0(r)){if(r=r,r.length!==e.length)throw new P(`Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${e.length} Tensor(s), but instead got the following list of Tensor(s): ${r}`);s=r}else{if(r=r,e.length>1)throw new P(`The model ${n} expects ${e.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${r.shape}`);s=[r]}if(s=T0(s),t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;let a=s[i];if(a.shape.length!==t[i].length)throw new P(`Error when checking ${n}: expected ${e[i]} to have ${t[i].length} dimension(s). but got array with shape ${a.shape}`);for(let l=0;l<t[i].length;++l){if(l===0&&!o)continue;let u=a.shape[l],c=t[i][l];if(c!=null&&c>=0&&u!==c)throw new P(`${n} expected a batch of elements where each example has shape [${t[i].slice(1,t[i].length)}] (i.e.,tensor shape [*,${t[i].slice(1,t[i].length)}]) but the ${n} received an input with ${a.shape[0]} examples, each with shape [${a.shape.slice(1,a.shape.length)}] (tensor shape [${a.shape}])`)}}return s}function PX(r,e,t){let o=Oo(r.map(s=>s.shape[0]));o.sort();let n=Oo(e.map(s=>s.shape[0]));if(n.sort(),o.length>1)throw new P(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(r.map(s=>s.shape))}`);if(n.length>1)throw new P(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(s=>s.shape))}`);if(o.length>0&&n.length>0&&!b.arraysEqual(o,n))throw new P(`Input Tensors should have the same number of samples as target Tensors. Found ${o[0]} input sample(s) and ${n[0]} target sample(s).`)}function zX(r,e,t){let o=[Vl,Np,Gl];for(let n=0;n<r.length;++n){let s=r[n],i=e[n],a=t[n];if(i!=null){if(i===Gl&&s.shape[s.shape.length-1]===1)throw new P(`You are passing a target array of shape ${s.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(o.indexOf(i)!==-1){let l=s.shape.slice(1),u=a.slice(1);for(let c=0;c<l.length;++c){let p=l[c],m=u[c];if(m!=null&&p!==m)throw new P(`A target Tensor with shape ${s.shape} was passed for an output of shape ${a}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function _R(r,e,t,o=!0,n=""){let s;if(Array.isArray(r)){if(r.length!==e.length)throw new P(`Error when checking model ${n}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${e.length} Tensor(s), but instead got ${r.length} Tensors(s).`);s=r}else{if(e.length>1)throw new P(`The model expects ${e.length} ${n} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(r.shape)}.`);s=[r]}if(t!=null)for(let i=0;i<e.length;++i){if(t[i]==null)continue;let a=s[i];if(a.shape.length!==t[i].length)throw new P(`Error when checking ${n}: expected ${e[i]} to have ${t[i].length} dimension(s), but got array with shape ${JSON.stringify(a.shape)}`);for(let l=0;l<t[i].length;++l){if(l===0&&!o)continue;let u=a.shape[l],c=t[i][l];if(c!=null&&c!==u)throw new P(`Error when checking ${n}: expected ${e[i]} to have shape ${JSON.stringify(t[i])} but got array with shape ${JSON.stringify(a.shape)}.`)}}}function MX(r,e){if(r==null||Array.isArray(r)&&r.length===0)return e.map(o=>[]);let t;if(typeof r=="string"||typeof r=="function")t=[r];else if(Array.isArray(r)||typeof r=="object")t=r;else throw new TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${r}`);if(Array.isArray(t))return e.map(o=>t);{let o=[];for(let n of e){let s=t.hasOwnProperty(n)?t[n]:[];Array.isArray(s)||(s=[s]),o.push(s)}return o}}var BX="layers-model",Ks=(()=>{class r extends _x{constructor(t){super(t),this.isTraining=!1}summary(t,o,n=console.log){if(!this.built)throw new P("This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).");SR(this,t,o,n)}compile(t){if(t.loss==null&&(t.loss=[]),this.loss=t.loss,typeof t.optimizer=="string")this.optimizer_=vR(t.optimizer),this.isOptimizerOwned=!0;else{if(!(t.optimizer instanceof dr))throw new P("User-defined optimizer must be an instance of tf.Optimizer.");this.optimizer_=t.optimizer,this.isOptimizerOwned=!1}let o=[];if(!Array.isArray(t.loss)&&typeof t.loss!="string"&&typeof t.loss!="function"){t.loss=t.loss;for(let a in t.loss)if(this.outputNames.indexOf(a)===-1)throw new P(`Unknown entry in loss dictionary: "${a}". Only expected the following keys: ${this.outputNames}`);for(let a of this.outputNames)t.loss[a]==null&&console.warn(`Output "${a}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${a} during training`),o.push(Ix(t.loss[a]))}else if(Array.isArray(t.loss)){if(t.loss.length!==this.outputs.length)throw new P(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${t.loss}.`);o=t.loss.map(l=>Ix(l))}else{let a=Ix(t.loss);this.outputs.forEach(l=>{o.push(a)})}this.lossFunctions=o,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let a=0;a<this.outputs.length;++a){let l=this.internalOutputShapes[a],u=this.outputNames[a];this.feedOutputNames.push(u),this.feedOutputShapes.push(l),this.feedLossFns.push(this.lossFunctions[a])}let n=[];this.metrics=t.metrics,this.metricsNames=["loss"],this.metricsTensors=[],rn("loss",()=>{for(let a=0;a<this.outputs.length;++a){if(n.indexOf(a)!==-1)continue;let l=this.lossFunctions[a];this.outputs.length>1&&(this.metricsTensors.push([l,a]),this.metricsNames.push(this.outputNames[a]+"_loss"))}});let s=MX(t.metrics,this.outputNames),i=(a,l,u)=>{this.outputNames.length>1&&(l=this.outputNames[a]+"_"+l),this.metricsNames.push(l),this.metricsTensors.push([u,a])};rn("metric",()=>{for(let a=0;a<this.outputs.length;++a){if(n.indexOf(a)!==-1)continue;let l=s[a];(c=>{let p="",m,f,h;for(let g of c){if(typeof g=="string"&&["accuracy","acc","crossentropy","ce"].indexOf(g)!==-1){let x=this.internalOutputShapes[a];x[x.length-1]===1||this.lossFunctions[a]===Np?["accuracy","acc"].indexOf(g)!==-1?f=Ex:["crossentropy","ce"].indexOf(g)!==-1&&(f=w0):this.lossFunctions[a]===Sp?["accuracy","acc"].indexOf(g)!==-1?f=C0:["crossentropy","ce"].indexOf(g)!==-1&&(f=v0):["accuracy","acc"].indexOf(g)!==-1?f=Ax:["crossentropy","ce"].indexOf(g)!==-1&&(f=$x);let y;["accuracy","acc"].indexOf(g)!==-1?y="acc":["crossentropy","ce"].indexOf(g)!==-1&&(y="ce"),h=f,m=p+y}else h=wR(g),m=p+Fm(g);let d;rn(m,()=>{d=h}),i(a,m,d)}})(l)}}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(t,o,n={}){let s=n.batchSize==null?32:n.batchSize;Lx(s);let a=this.standardizeUserDataXY(t,o,!0,s);try{let l=a[0].concat(a[1]);this.makeTestFunction();let u=this.testFunction,c=this.testLoop(u,l,s,n.verbose,n.steps);return er(c)}finally{zo(a[0],t),zo(a[1],o)}}evaluateDataset(t,o){return B(this,null,function*(){return this.makeTestFunction(),$R(this,t,o)})}checkNumSamples(t,o,n,s="steps"){let i;if(n!=null){if(i=null,o!=null)throw new P(`If ${s} is set, batchSize must be null or undefined.Got batchSize = ${o}`)}else if(t!=null)Array.isArray(t)?i=t[0].shape[0]:i=t.shape[0];else throw new P(`Either the input data should have a defined shape, or ${s} shoud be specified.`);return i}execute(t,o){if(Array.isArray(o)&&o.length===0)throw new P("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(o),s=n?o:[o],i=this.retrieveSymbolicTensors(s),a=new $n;if(t instanceof Ft&&(t=[t]),Array.isArray(t)){if(t.length!==this.inputs.length)throw new P(`The number of inputs provided (${t.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let u=0;u<this.inputs.length;++u)a.add(this.inputs[u],t[u])}else for(let u of this.inputs){let c=t[u.name];if(c==null)throw new P(`No value is provided for the model's input ${u.name}`);a.add(u,c)}let l=Ml(i,a);return n?l:l[0]}retrieveSymbolicTensors(t){let o=_o(null,t.length),n=t.length;for(let s of this.layers){let i=Array.isArray(s.output)?s.output:[s.output],a=i.map(l=>l.name);for(let l=0;l<t.length;++l){let u=a.indexOf(t[l]);if(u!==-1&&(o[l]=i[u],n--),n===0)break}if(n===0)break}if(n>0){let s=[];throw o.forEach((i,a)=>{i==null&&s.push(t[a])}),new P(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(s)}`)}return o}predictLoop(t,o=32,n=!1){return M(()=>{let s=this.checkNumSamples(t);if(n)throw new wt("Verbose predictLoop() is not implemented yet.");let i=zx(s,o),a=this.outputs.map(l=>[]);for(let l=0;l<i.length;++l)M(()=>{let c=i[l][0],p=i[l][1],m=Ip(t,c,p),f=[];if(Array.isArray(m))for(let g=0;g<m.length;++g)f.push({key:this.inputs[g],value:m[g]});else f.push({key:this.inputs[0],value:m});let h=new $n(f);return Ml(this.outputs,h)}).forEach((c,p)=>a[p].push(c));return er(a.map(l=>Gt(l,0)))})}predict(t,o={}){let n=T0(t);_R(n,this.inputNames,this.feedInputShapes,!1);try{let s=o.batchSize==null?32:o.batchSize;return Lx(s),this.predictLoop(n,s)}finally{zo(n,t)}}predictOnBatch(t){_R(t,this.inputNames,this.feedInputShapes,!0);let o=(Array.isArray(t)?t[0]:t).shape[0];return this.predictLoop(t,o)}standardizeUserDataXY(t,o,n=!0,s){if(this.optimizer_==null)throw new Dr("You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).");let i=[];for(let a=0;a<this.feedOutputShapes.length;++a){let l=this.feedOutputShapes[a];this.feedLossFns[a]===Sp?i.push(l.slice(0,l.length-1).concat([1])):i.push(l)}if(t=RR(t,this.feedInputNames,this.feedInputShapes,!1,"input"),o=RR(o,this.feedOutputNames,i,!1,"target"),PX(t,o,null),zX(o,this.feedLossFns,this.feedOutputShapes),this.stateful&&s!=null&&s>0&&t[0].shape[0]%s!==0)throw new P(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${s}. Found: ${t[0].shape[0]} sample(s).`);return[t,o]}standardizeUserData(t,o,n,s,i=!0,a){return B(this,null,function*(){let[l,u]=this.standardizeUserDataXY(t,o,i,a);if(n!=null)throw new Error("sample weight is not supported yet.");let c=null;if(s!=null){let p=Fx(s,this.outputNames);c=[];for(let m=0;m<p.length;++m)c.push(yield Ox(u[m],null,p[m]))}return[l,u,c]})}testLoop(t,o,n,s=0,i){return M(()=>{let a=this.checkNumSamples(o,n,i,"steps"),l=[];if(s>0)throw new wt("Verbose mode is not implemented yet.");if(i!=null)throw new wt("steps mode in testLoop() is not implemented yet");{let u=zx(a,n),c=le(_r(0,a));for(let p=0;p<u.length;++p){let m=u[p][0],f=u[p][1],h=Gs(c,m,f-m),g=Px(o,h),d=t(g);if(p===0)for(let x=0;x<d.length;++x)l.push(st(0));for(let x=0;x<d.length;++x){let y=d[x];l[x]=U(l[x],D(f-m,y))}}for(let p=0;p<l.length;++p)l[p]=rt(l[p],a)}return l})}getDedupedMetricsNames(){let t=this.metricsNames,o=[];for(let n=0;n<t.length;++n){let s=t[n],i=s;if(n0(t,s)>1){let a=n0(t.slice(0,n),s);i+=`_${a}`}o.push(i)}return o}makeTrainFunction(){return t=>{let o=[],n=t.slice(0,this.inputs.length),s=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=t.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],l=()=>{let m=[];for(let d=0;d<this.inputs.length;++d)m.push({key:this.inputs[d],value:n[d]});let f=new $n(m),h=Ml(this.outputs,f,{training:!0}),g;for(let d=0;d<this.lossFunctions.length;++d){let x=this.lossFunctions[d],y=x(s[d],h[d]);i[d]!=null&&(y=TR(y,i[d]));let w=oe(y);o.push(w),d===0?g=y:g=U(g,y)}for(let d=0;d<this.metricsTensors.length;++d){let x;if(this.outputs.length>1&&d<this.outputs.length)x=o[d];else{let y=this.metricsTensors[d][0],w=this.metricsTensors[d][1];x=oe(y(s[w],h[w]))}ce(x),a.push(x)}return g=oe(g),this.calculateLosses().forEach(d=>{g=U(g,d)}),g},u=this.collectedTrainableWeights.map(m=>m.read());return[this.optimizer_.minimize(l,!0,u)].concat(a)}}makeTestFunction(){this.testFunction=t=>M(()=>{let o=[],n,s=t.slice(0,this.inputs.length),i=t.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let c=0;c<this.inputs.length;++c)a.push({key:this.inputs[c],value:s[c]});let l=new $n(a),u=Ml(this.outputs,l);for(let c=0;c<this.lossFunctions.length;++c){let p=this.lossFunctions[c],m=oe(p(i[c],u[c]));c===0?n=m:n=U(n,m),o.push(n)}for(let c=0;c<this.metricsTensors.length;++c){let p=this.metricsTensors[c][0],m=this.metricsTensors[c][1],f=oe(p(i[m],u[m]));o.push(f)}return o})}fit(s,i){return B(this,arguments,function*(t,o,n={}){if(this.isTraining)throw new Error("Cannot start training because another fit() call is ongoing.");this.isTraining=!0;let a,l,u,c,p,m,f,h,g;try{let d=n.batchSize==null?32:n.batchSize;Lx(d);let y=yield this.standardizeUserData(t,o,n.sampleWeight,n.classWeight,!1,d);a=y[0],l=y[1],g=y[2];let w=!1,C;if(n.validationData!=null&&n.validationData.length>0){if(w=!0,n.validationData.length===2)p=n.validationData[0],m=n.validationData[1];else throw n.validationData.length===3?new wt("validationData including sample weights is not supported yet."):new P(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let W=yield this.standardizeUserData(p,m,null,null,!0,d);f=W[0],h=W[1],C=f.concat(h)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){w=!0;let G=Math.floor(a[0].shape[0]*(1-n.validationSplit)),W=a[0].shape[0];f=Ip(a,G,W),u=a,a=Ip(a,0,G),h=Ip(l,G,W),c=l,l=Ip(l,0,G),C=f.concat(h)}else n.validationSteps!=null&&(w=!0);let T=a.concat(l).concat(g);this.checkTrainableWeightsConsistency();let A=this.makeTrainFunction(),$=this.getDedupedMetricsNames(),_,O;w?(this.makeTestFunction(),_=this.testFunction,O=$.slice().concat($.map(G=>"val_"+G))):(_=null,C=[],O=$.slice());let z=Sx(n.callbacks,n.yieldEvery);return yield this.fitLoop(A,T,$,d,n.epochs,n.verbose,z,_,C,n.shuffle,O,n.initialEpoch,null,null)}finally{this.isTraining=!1,zo(a,t),zo(l,o),zo(u,t),zo(c,o),zo(f,p),zo(h,m),g!=null&&Nt(g)}})}fitLoop(t,o,n,s,i,a,l,u,c,p,m,f,h,g){return B(this,null,function*(){s==null&&(s=32),i==null&&(i=1),p==null&&(p=!0),f==null&&(f=0);let d=!1;if(u!=null&&c!=null&&(d=!0),g!=null&&(d=!0,h==null))throw new P("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let x=this.checkNumSamples(o,s,h,"steps_per_epoch"),y;x!=null&&(y=_r(0,x)),a==null&&(a=1);let{callbackList:w,history:C}=Nx(l,a,i,f,x,h,s,d,m);w.setModel(this),this.history=C,yield w.onTrainBegin(),this.stopTraining_=!1;for(let T=f;T<i;++T){yield w.onEpochBegin(T);let A={};if(h!=null)throw new wt("stepsPerEpoch mode is not implemented yet.");{if(p==="batch")throw new wt("batch shuffling is not implemneted yet");p&&b.shuffle(y);let $=le(y),_=zx(x,s);for(let O=0;O<_.length;++O){let z={};if(yield w.onBatchBegin(O,z),M(()=>{let V=_[O][0],G=_[O][1],W=Gs($,V,G-V);z.batch=O,z.size=G-V;let H=Px(o,W),K=t(H);for(let Y=0;Y<n.length;++Y){let J=n[Y],X=K[Y];z[J]=X,ce(X)}if(O===_.length-1&&d){let Y=this.testLoop(u,c,s);for(let J=0;J<n.length;++J){let X=n[J],Q=Y[J];ce(Q),A["val_"+X]=Q}}}),yield w.onBatchEnd(O,z),bx(z),this.stopTraining_)break}$.dispose()}if(yield w.onEpochEnd(T,A),this.stopTraining_)break}return yield w.onTrainEnd(),yield this.history.syncData(),this.history})}fitDataset(t,o){return B(this,null,function*(){return AR(this,t,o)})}trainOnBatch(t,o){return B(this,null,function*(){let n=yield this.standardizeUserData(t,o),s=n[0],i=n[1],l=this.makeTrainFunction()(s.concat(i)),u=[];for(let c of l){let p=yield c.data();u.push(p[0])}return Nt(l),zo(n[0],t),zo(n[1],o),er(u)})}getNamedWeights(t){let o=[],n=t!=null&&t.trainableOnly,s=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let a=0;a<s.length;++a)n&&!s[a].trainable||o.push({name:s[a].originalName,tensor:i[a]});return o}set stopTraining(t){this.stopTraining_=t}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(t){this.optimizer_!==t&&(this.optimizer_=t,this.isOptimizerOwned=!1)}dispose(){let t=super.dispose();if(t.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let o=Wp().numTensors;this.optimizer_.dispose(),t.numDisposedVariables+=o-Wp().numTensors}return t}getLossIdentifiers(){let t;if(typeof this.loss=="string")t=Fo(this.loss);else if(Array.isArray(this.loss)){for(let o of this.loss)if(typeof o!="string")throw new Error("Serialization of non-string loss is not supported.");t=this.loss.map(o=>Fo(o))}else{let o=Object.keys(this.loss);t={};let n=this.loss;for(let s of o)if(typeof n[s]=="string")t[s]=Fo(n[s]);else throw new Error("Serialization of non-string loss is not supported.")}return t}getMetricIdentifiers(){if(typeof this.metrics=="string"||typeof this.metrics=="function")return[Fo(Fm(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(t=>Fo(Fm(t)));{let t={};for(let o in this.metrics)t[o]=Fo(Fm(this.metrics[o]));return t}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(t){if(t.weighted_metrics!=null)throw new Error("Loading weight_metrics is not supported yet.");if(t.loss_weights!=null)throw new Error("Loading loss_weights is not supported yet.");if(t.sample_weight_mode!=null)throw new Error("Loading sample_weight_mode is not supported yet.");let o=Om(t.optimizer_config),n=lo(o),s;if(typeof t.loss=="string")s=Vs(t.loss);else if(Array.isArray(t.loss))s=t.loss.map(a=>Vs(a));else if(t.loss!=null){s={};for(let a in t.loss)s[a]=Vs(t.loss[a])}let i;if(Array.isArray(t.metrics))i=t.metrics.map(a=>Vs(a));else if(t.metrics!=null){i={};for(let a in t.metrics)i[a]=Vs(t.metrics[a])}this.compile({loss:s,metrics:i,optimizer:n})}save(t,o){return B(this,null,function*(){if(typeof t=="string"){let c=jo.getSaveHandlers(t);if(c.length===0)throw new P(`Cannot find any save handlers for URL '${t}'`);if(c.length>1)throw new P(`Found more than one (${c.length}) save handlers for URL '${t}'`);t=c[0]}if(t.save==null)throw new P("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=yield jo.encodeWeights(this.getNamedWeights(o)),l={modelTopology:this.toJSON(null,!1),format:BX,generatedBy:`TensorFlow.js tfjs-layers v${Tp}`,convertedBy:null};if((o==null?!1:o.includeOptimizer)&&this.optimizer!=null){l.trainingConfig=this.getTrainingConfig();let c="optimizer",{data:p,specs:m}=yield jo.encodeWeights(yield this.optimizer.getWeights(),c);n.specs.push(...m),n.data=jo.concatenateArrayBuffers([n.data,p])}return this.userDefinedMetadata!=null&&(N0(this.userDefinedMetadata,this.name,!0),l.userDefinedMetadata=this.userDefinedMetadata),l.weightData=n.data,l.weightSpecs=n.specs,t.save(l)})}setUserDefinedMetadata(t){N0(t,this.name),this.userDefinedMetadata=t}getUserDefinedMetadata(){return this.userDefinedMetadata}}return r.className="Model",r})();q.registerClass(Ks);var VX=(()=>{class r extends Ks{}return r.className="Functional",r})();q.registerClass(VX);var k0=(()=>{class r extends Ks{constructor(t){if(super({inputs:[],outputs:[]}),t=t||{},this.trainable=!0,this.built=!1,this.name=t.name!=null?t.name:Na("sequential_"),t.layers!=null)for(let o of t.layers)this.add(o)}checkShape(t){if(t.inboundNodes[0].outputTensors[0].shape.some(n=>n<0))throw new P(`Negative dimension size caused by adding layer ${t.name} with input shape [${t.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let o=t instanceof r||t instanceof Ks,n;if(o){if(n=t,n.outputs.length!==1)throw new P("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");if(n.inputs.length!==1)throw new P("All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.")}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new P("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let s=x0({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+"_input"});t.apply(s)}if(o)this.outputs=n.outputs,this.inputs=n.inputs;else{if(t.inboundNodes.length!==1)throw new P(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new P("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=g0(this.outputs[0])}this.inboundNodes=[],new Us({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:_o(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(s=>s.shape),outputShapes:this.outputs[0].shape})}else{let s=t.apply(this.outputs[0]);if(Array.isArray(s))throw new TypeError("All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.");this.checkShape(t),this.outputs=[s],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw new TypeError("There are no layers in the model.");if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let t=this.layers.length-1;this.layers[t].outboundNodes=[],this.outputs=[this.layers[t].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(t,o){return this.model==null&&this.build(),this.model.call(t,o)}build(t){if(At(t),this.inputs.length===0||this.outputs.length===0)throw new TypeError("Sequential model cannot be built: model is empty. Add some layers first.");this.model=new Ks({inputs:this.inputs,outputs:this.outputs[0],name:this.name+"_model"}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(t,o,n=console.log){this.built||this.build(),super.summary(t,o,n)}setWeights(t){this.model==null&&this.build(),this.model.setWeights(t)}evaluate(t,o,n={}){if(!this.built)throw new Dr("The model needs to be compiled before being used.");return this.model.evaluate(t,o,n)}evaluateDataset(t,o){return B(this,null,function*(){if(!this.built)throw new Dr("The model needs to be compiled before being used.");return this.model.evaluateDataset(t,o)})}predict(t,o={}){return this.model==null&&this.build(),this.model.predict(t,o)}predictOnBatch(t){return this.model==null&&this.build(),this.model.predictOnBatch(t)}compile(t){this.build(),this.model.compile(t),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(t){this.model.optimizer=t}fit(s,i){return B(this,arguments,function*(t,o,n={}){if(!this.built)throw new Dr("The model needs to be compiled before being used.");return this.model.fit(t,o,n)})}fitDataset(t,o){return B(this,null,function*(){if(!this.built)throw new Dr("The model needs to be compiled before being used.");return this.model.fitDataset(t,o)})}trainOnBatch(t,o){return B(this,null,function*(){return this.model.trainOnBatch(t,o)})}static fromConfig(t,o,n={},s=!1){let i,a={};if(o instanceof Array){if(o[0].className==null||o[0].className==="Merge")throw new P("Legacy serialization format not supported yet.");i=o}else b.assert(o.layers!=null,()=>"When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field."),i=o.layers,delete o.layers,a=o;let l=new t(a);if(!(l instanceof r))throw new wt(`Sequential.fromConfig called on non-Sequential input: ${l}`);for(let u of i){let p=lo(u,void 0,s);s&&p.setFastWeightInitDuringBuild(!0),l.add(p)}return l}set stopTraining(t){if(this.model==null)throw new P("Cannot set the stopTraining property of a sequential model before it is compiled.");this.model.stopTraining=t}get stopTraining(){if(this.model==null)throw new P("Cannot get the stopTraining property of a sequential model before it is compiled.");return this.model.stopTraining}getConfig(){let t=[];for(let o of this.layers){let n={};n.className=o.getClassName(),n.config=o.getConfig(),t.push(n)}return{name:this.name,layers:t}}}return r.className="Sequential",r})();q.registerClass(k0);var ur=class extends q.Serializable{getConfig(){return{}}},WX=(()=>{class r extends ur{apply(t,o=1){return qD(t,o)}}return r.className="elu",r})();q.registerClass(WX);var UX=(()=>{class r extends ur{apply(t){return Ic(t)}}return r.className="selu",r})();q.registerClass(UX);var HX=(()=>{class r extends ur{apply(t){return ar(t)}}return r.className="relu",r})();q.registerClass(HX);var KX=(()=>{class r extends ur{apply(t){return M(()=>fo(6,ar(t)))}}return r.className="relu6",r})();q.registerClass(KX);var qX=(()=>{class r extends ur{apply(t){return t}}return r.className="linear",r})();q.registerClass(qX);var jX=(()=>{class r extends ur{apply(t){return sr(t)}}return r.className="sigmoid",r})();q.registerClass(jX);var XX=(()=>{class r extends ur{apply(t){return XD(t)}}return r.className="hardSigmoid",r})();q.registerClass(XX);var YX=(()=>{class r extends ur{apply(t){return Ho(t)}}return r.className="softplus",r})();q.registerClass(YX);var ZX=(()=>{class r extends ur{apply(t){return jD(t)}}return r.className="softsign",r})();q.registerClass(ZX);var JX=(()=>{class r extends ur{apply(t){return Uo(t)}}return r.className="tanh",r})();q.registerClass(JX);var A0=(()=>{class r extends ur{apply(t,o=-1){return pa(t,o)}}return r.className="softmax",r})();q.registerClass(A0);var QX=(()=>{class r extends ur{apply(t,o=-1){return Cc(t,o)}}return r.className="logSoftmax",r})();q.registerClass(QX);var t5=(()=>{class r extends ur{apply(t){return M(()=>M(()=>{let o=Math.sqrt(2),n=D(.5,U(1,wc(rt(t,o))));return D(t,n)}))}}return r.className="gelu",r})();q.registerClass(t5);var e5=(()=>{class r extends ur{apply(t){return M(()=>D(.5,D(t,U(1,Uo(D(Xt(rt(2,Math.PI)),U(t,D(.044715,mr(t,3)))))))))}}return r.className="gelu_new",r})();q.registerClass(e5);var r5=(()=>{class r extends ur{apply(t){return M(()=>D(t,Uo(Ho(t))))}}return r.className="mish",r})();q.registerClass(r5);var o5=(()=>{class r extends ur{apply(t,o=1){return M(()=>D(sr(D(t,o)),t))}}return r.className="swish",r})();q.registerClass(o5);function nn(r){return r.getClassName()}function E0(r,e={}){return En(r,q.SerializationMap.getMap().classNameMap,e,"activation")}function sn(r){if(r==null){let e={};return e.className="linear",e.config={},E0(e)}if(typeof r=="string"){let e={};return e.className=r,e.config={},E0(e)}else return r instanceof ur?r:E0(r)}function n5(r){if(r!=null&&typeof r!="object")throw new Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${r}`)}var Mx=class extends q.Serializable{},LR=(()=>{class r extends Mx{constructor(t){super(),n5(t),this.l1=t==null||t.l1==null?.01:t.l1,this.l2=t==null||t.l2==null?.01:t.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(t){return M(()=>{let o=ne([1]);return this.hasL1&&(o=U(o,it(D(this.l1,ae(t))))),this.hasL2&&(o=U(o,it(D(this.l2,Pl(t))))),R(o,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(t,o){return new t({l1:o.l1,l2:o.l2})}}return r.className="L1L2",r})();q.registerClass(LR);var FR={l1l2:"L1L2"};function qt(r){return gp(r)}function OR(r,e={}){return En(r,q.SerializationMap.getMap().classNameMap,e,"regularizer")}function te(r){if(r==null)return null;if(typeof r=="string"){let t={className:r in FR?FR[r]:r,config:{}};return OR(t)}else return r instanceof Mx?r:OR(r)}var PR=(()=>{class r extends Ct{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null&&(this.maxValue=t.maxValue)}call(t,o){t=xt(t);let n=ar(t);return this.maxValue!=null&&(n=Xe(n,0,this.maxValue)),n}computeOutputShape(t){return t}getConfig(){let t={maxValue:this.maxValue},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ReLU",r})();q.registerClass(PR);var zR=(()=>{class r extends Ct{constructor(t){super(t??{}),this.DEFAULT_ALPHA=.3,t==null&&(t={}),this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,o){let n=xt(t);return na(n,this.alpha)}computeOutputShape(t){return t}getConfig(){let t={alpha:this.alpha},o=super.getConfig();return Object.assign(t,o),t}}return r.className="LeakyReLU",r})();q.registerClass(zR);var MR=(()=>{class r extends Ct{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA_INITIALIZER="zeros",t==null&&(t={}),this.supportsMasking=!0,this.alphaInitializer=Yt(t.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=te(t.alphaRegularizer),this.alphaConstraint=Se(t.alphaConstraint),t.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(t.sharedAxes))this.sharedAxes=t.sharedAxes;else if(typeof t.sharedAxes=="number")this.sharedAxes=[t.sharedAxes];else throw new P(`Expected sharedAxes to be a number or an array of numbers, but got ${t.sharedAxes}`)}build(t){t=At(t);let o=t.slice(1);if(this.sharedAxes!=null)for(let s of this.sharedAxes)o[s-1]=1;this.alpha=this.addWeight("alpha",o,"float32",this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let s=1;s<t.length;++s)n[s]=t[s];this.inputSpec=[new Qt({ndim:t.length,axes:n})],this.built=!0}call(t,o){return t=xt(t),ca(t,this.alpha.read())}getConfig(){let t={alphaInitializer:se(this.alphaInitializer),alphaRegularizer:qt(this.alphaRegularizer),alphaConstraint:ve(this.alphaConstraint),sharedAxes:this.sharedAxes},o=super.getConfig();return Object.assign(t,o),t}}return r.className="PReLU",r})();q.registerClass(MR);var BR=(()=>{class r extends Ct{constructor(t){if(super(t??{}),this.DEFAULT_ALPHA=1,t==null&&(t={}),t.alpha!=null&&t.alpha!==this.DEFAULT_ALPHA)throw new wt(`Non-default alpha value (${t.alpha}) is not supported by the ELU layer yet.`);this.alpha=t.alpha==null?this.DEFAULT_ALPHA:t.alpha}call(t,o){let n=xt(t);return wn(n)}computeOutputShape(t){return t}getConfig(){let t={alpha:this.alpha},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ELU",r})();q.registerClass(BR);var VR=(()=>{class r extends Ct{constructor(t){super(t??{}),this.DEFAULT_THETA=1,t==null&&(t={}),this.theta=t.theta==null?this.DEFAULT_THETA:t.theta}call(t,o){let n=xt(t);return D(n,j(ye(n,this.theta),"float32"))}computeOutputShape(t){return t}getConfig(){let t={theta:this.theta},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ThresholdedReLU",r})();q.registerClass(VR);var GR=(()=>{class r extends Ct{constructor(t){super(t??{}),this.DEFAULT_AXIS=1,t==null&&(t={}),this.softmax=new A0().apply,this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis}call(t,o){return M(()=>{let n=xt(t),s=o.mask;if(s!=null){let i=D(et(Fe(n.shape),j(s,n.dtype)),st(-1e9));n=U(n,i)}return this.axis instanceof Array?this.axis.length>1?Ie(et(n,ia(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(t){return t}getConfig(){let t={axis:this.axis},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Softmax",r})();q.registerClass(GR);function ka(r,e,t){if(typeof r=="number")return _o(r,e);if(r.length!==e)throw new P(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${r.length} elements.`);for(let o=0;o<e;++o){let n=r[o];if(!WD(n))throw new P(`The ${t} argument must be an integer or tuple of ${e} integers. Received: ${JSON.stringify(r)} including a non-integer number ${n}`)}return r}function qr(r,e,t,o,n=1){if(r==null)return r;let s=e+(e-1)*(n-1),i;return t==="same"?i=r:i=r-s+1,Math.floor((i+o-1)/o)}function an(r,e,t,o){if(r==null)return null;if(o==="valid")r=r*e+on([t-e,0]);else if(o==="same")r=r*e;else throw new P(`Unsupport padding mode: ${o}.`);return r}function Pm(r,e){return M(()=>(me(e),e==="channelsFirst"?Rt(r,[0,2,3,1]):r))}function $0(r,e){return M(()=>(me(e),e==="channelsFirst"?Rt(r,[0,2,3,4,1]):r))}function i5(r,e,t,o=1,n="valid",s,i=1){return M(()=>{if(s==null&&(s=Fr()),me(s),r.shape.length!==3)throw new P(`The input of a conv1dWithBias operation should be 3, but is ${r.shape.length} instead.`);if(e.shape.length!==3)throw new P(`The kernel for a conv1dWithBias operation should be 3, but is ${e.shape.length} instead`);if(t!=null&&t.shape.length!==1)throw new P(`The bias for a conv1dWithBias operation should be 1, but is ${t.shape.length} instead`);if(s==="channelsFirst"&&(r=Rt(r,[0,2,1])),n==="causal")throw new wt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");let a=dc(r,e,o,n==="same"?"same":"valid","NWC",i);return t!=null&&(a=Or(a,t)),a})}function WR(r,e,t,o=[1,1],n="valid",s,i,a=null){return M(()=>{if(s==null&&(s=Fr()),me(s),r.rank!==3&&r.rank!==4)throw new P(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${r.rank}.`);if(e.rank!==3&&e.rank!==4)throw new P(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${r.rank}.`);let l=Pm(r,s);if(n==="causal")throw new wt("The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.");return l=ha.conv2d({x:l,filter:e,strides:o,pad:n==="same"?"same":"valid",dilations:i,dataFormat:"NHWC",bias:t,activation:a}),s==="channelsFirst"&&(l=Rt(l,[0,3,1,2])),l})}function a5(r,e,t,o=[1,1,1],n="valid",s,i){return M(()=>{if(s==null&&(s=Fr()),me(s),r.rank!==4&&r.rank!==5)throw new P(`conv3dWithBias expects input to be of rank 4 or 5, but received ${r.rank}.`);if(e.rank!==4&&e.rank!==5)throw new P(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${r.rank}.`);let a=$0(r,s);if(n==="causal")throw new wt("The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.");return a=Of(a,e,o,n==="same"?"same":"valid","NDHWC",i),t!=null&&(a=Or(a,t)),s==="channelsFirst"&&(a=Rt(a,[0,4,1,2,3])),a})}var Lm=class r extends Ct{constructor(e,t){if(super(t),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",r.verifyArgs(t),this.rank=e,Re(this.rank,"rank"),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new wt(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=ka(t.kernelSize,e,"kernelSize"),this.strides=ka(t.strides==null?1:t.strides,e,"strides"),this.padding=t.padding==null?"valid":t.padding,Rr(this.padding),this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,me(this.dataFormat),this.activation=sn(t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.biasInitializer=Yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=Se(t.biasConstraint),this.biasRegularizer=te(t.biasRegularizer),this.activityRegularizer=te(t.activityRegularizer),this.dilationRate=ka(t.dilationRate==null?1:t.dilationRate,e,"dilationRate"),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new P(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new P(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate=="number")this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new P(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(xo("kernelSize"in e,"required key 'kernelSize' not in config"),typeof e.kernelSize!="number"&&!sx(e.kernelSize,"number",1,3))throw new P(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:nn(this.activation),useBias:this.useBias,biasInitializer:se(this.biasInitializer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),biasConstraint:ve(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},kp=class r extends Lm{constructor(e,t){super(e,t),this.kernel=null,r.verifyArgs(t),this.filters=t.filters,Re(this.filters,"filters"),this.kernelInitializer=Yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=Se(t.kernelConstraint),this.kernelRegularizer=te(t.kernelRegularizer)}build(e){e=At(e);let t=this.dataFormat==="channelsFirst"?1:e.length-1;if(e[t]==null)throw new P(`The channel dimension of the input should be defined. Found ${e[t]}`);let o=e[t],n=this.kernelSize.concat([o,this.filters]);this.kernel=this.addWeight("kernel",n,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:o}}],this.built=!0}call(e,t){return M(()=>{e=xt(e);let o,n=this.bias==null?null:this.bias.read(),s=ix(this.activation.getClassName());if(s!=null&&this.rank===2)o=WR(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,s);else{if(this.rank===1)o=i5(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)o=WR(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)o=a5(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new wt("convolutions greater than 3D are not implemented yet.");this.activation!=null&&(o=this.activation.apply(o))}return o})}computeOutputShape(e){e=At(e);let t=[],o=this.dataFormat==="channelsLast"?e.slice(1,e.length-1):e.slice(2);for(let s=0;s<o.length;++s){let i=qr(o[s],this.kernelSize[s],this.padding,this.strides[s],typeof this.dilationRate=="number"?this.dilationRate:this.dilationRate[s]);t.push(i)}let n=[e[0]];return this.dataFormat==="channelsLast"?(n=n.concat(t),n.push(this.filters)):(n.push(this.filters),n=n.concat(t)),n}getConfig(){let e={filters:this.filters,kernelInitializer:se(this.kernelInitializer),kernelRegularizer:qt(this.kernelRegularizer),kernelConstraint:ve(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!("filters"in e)||typeof e.filters!="number"||e.filters<1)throw new P(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},D0=(()=>{class r extends kp{constructor(t){super(2,t),r.verifyArgs(t)}getConfig(){let t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!sx(t.kernelSize,"number",1,2))throw new P(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(t.kernelSize)}.`)}}return r.className="Conv2D",r})();q.registerClass(D0);var R0=(()=>{class r extends kp{constructor(t){super(3,t),r.verifyArgs(t)}getConfig(){let t=super.getConfig();return delete t.rank,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!(Array.isArray(t.kernelSize)&&(t.kernelSize.length===1||t.kernelSize.length===3)))throw new P(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(t.kernelSize)}.`)}}return r.className="Conv3D",r})();q.registerClass(R0);var UR=(()=>{class r extends D0{constructor(t){if(super(t),this.inputSpec=[new Qt({ndim:4})],this.padding!=="same"&&this.padding!=="valid")throw new P(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=At(t),t.length!==4)throw new P("Input should have rank 4; Received input shape: "+JSON.stringify(t));let o=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[o]==null)throw new P("The channel dimension of the inputs should be defined. Found `None`.");let n=t[o],s=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight("kernel",s,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Qt({ndim:4,axes:{[o]:n}})],this.built=!0}call(t,o){return M(()=>{let n=xt(t);if(n.shape.length!==4)throw new P(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${n.shape.length}`);let s=n.shape,i=s[0],a,l;this.dataFormat==="channelsFirst"?(a=2,l=3):(a=1,l=2);let u=s[a],c=s[l],p=this.kernelSize[0],m=this.kernelSize[1],f=this.strides[0],h=this.strides[1],g=an(u,f,p,this.padding),d=an(c,h,m,this.padding),x=[i,g,d,this.filters];this.dataFormat!=="channelsLast"&&(n=Rt(n,[0,2,3,1]));let y=xc(n,this.kernel.read(),x,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&(y=Rt(y,[0,3,1,2])),this.bias!=null&&(y=Or(y,this.bias.read(),this.dataFormat)),this.activation!=null&&(y=this.activation.apply(y)),y})}computeOutputShape(t){t=At(t);let o=t.slice(),n,s,i;this.dataFormat==="channelsFirst"?(n=1,s=2,i=3):(n=3,s=1,i=2);let a=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],c=this.strides[1];return o[n]=this.filters,o[s]=an(o[s],u,a,this.padding),o[i]=an(o[i],c,l,this.padding),o}getConfig(){let t=super.getConfig();return delete t.dilationRate,t}}return r.className="Conv2DTranspose",r})();q.registerClass(UR);var HR=(()=>{class r extends R0{constructor(t){if(super(t),this.inputSpec=[new Qt({ndim:5})],this.padding!=="same"&&this.padding!=="valid")throw new P(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(t){if(t=At(t),t.length!==5)throw new P("Input should have rank 5; Received input shape: "+JSON.stringify(t));let o=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[o]==null)throw new P("The channel dimension of the inputs should be defined. Found `None`.");let n=t[o],s=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight("kernel",s,"float32",this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new Qt({ndim:5,axes:{[o]:n}})],this.built=!0}call(t,o){return M(()=>{let n=xt(t);if(n.shape.length!==5)throw new P(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${n.shape.length}`);let s=n.shape,i=s[0],a,l,u;this.dataFormat==="channelsFirst"?(u=2,a=3,l=4):(u=1,a=2,l=3);let c=s[u],p=s[a],m=s[l],f=this.kernelSize[0],h=this.kernelSize[1],g=this.kernelSize[2],d=this.strides[0],x=this.strides[1],y=this.strides[2],w=an(c,d,f,this.padding),C=an(p,x,h,this.padding),T=an(m,y,g,this.padding),A=[i,w,C,T,this.filters];this.dataFormat!=="channelsLast"&&(n=Rt(n,[0,2,3,4,1]));let $=Pf(n,this.kernel.read(),A,this.strides,this.padding);return this.dataFormat!=="channelsLast"&&($=Rt($,[0,4,1,2,3])),this.bias!==null&&($=Or($,this.bias.read(),this.dataFormat)),this.activation!==null&&($=this.activation.apply($)),$})}computeOutputShape(t){t=At(t);let o=t.slice(),n,s,i,a;this.dataFormat==="channelsFirst"?(n=1,s=2,i=3,a=4):(n=4,s=1,i=2,a=3);let l=this.kernelSize[0],u=this.kernelSize[1],c=this.kernelSize[2],p=this.strides[0],m=this.strides[1],f=this.strides[2];return o[n]=this.filters,o[s]=an(o[s],p,l,this.padding),o[i]=an(o[i],m,u,this.padding),o[a]=an(o[a],f,c,this.padding),o}getConfig(){let t=super.getConfig();return delete t.dilationRate,t}}return r.className="Conv3DTranspose",r})();q.registerClass(HR);var l5=(()=>{class r extends kp{constructor(t,o){if(super(t,o),this.DEFAULT_DEPTHWISE_INITIALIZER="glorotUniform",this.DEFAULT_POINTWISE_INITIALIZER="glorotUniform",this.depthwiseKernel=null,this.pointwiseKernel=null,o.filters==null)throw new P("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(o.kernelInitializer!=null||o.kernelRegularizer!=null||o.kernelConstraint!=null)throw new P("Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.");if(o.padding!=null&&o.padding!=="same"&&o.padding!=="valid")throw new P(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(o.padding)}`);this.depthMultiplier=o.depthMultiplier==null?1:o.depthMultiplier,this.depthwiseInitializer=Yt(o.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=te(o.depthwiseRegularizer),this.depthwiseConstraint=Se(o.depthwiseConstraint),this.pointwiseInitializer=Yt(o.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=te(o.pointwiseRegularizer),this.pointwiseConstraint=Se(o.pointwiseConstraint)}build(t){if(t=At(t),t.length<this.rank+2)throw new P(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(t)}`);let o=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[o]==null||t[o]<0)throw new P(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(t[o])}`);let n=t[o],s=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let l=0;l<this.rank;++l)i.push(1);i.push(n*this.depthMultiplier,this.filters);let a=!0;this.depthwiseKernel=this.addWeight("depthwise_kernel",s,"float32",this.depthwiseInitializer,this.depthwiseRegularizer,a,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight("pointwise_kernel",i,"float32",this.pointwiseInitializer,this.pointwiseRegularizer,a,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[this.filters],"float32",this.biasInitializer,this.biasRegularizer,a,this.biasConstraint):this.bias=null,this.inputSpec=[new Qt({ndim:this.rank+2,axes:{[o]:n}})],this.built=!0}call(t,o){return M(()=>{t=xt(t);let n;if(this.rank===1)throw new wt("1D separable convolution is not implemented yet.");return this.rank===2&&(this.dataFormat==="channelsFirst"&&(t=Rt(t,[0,2,3,1])),n=kc(t,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,"NHWC")),this.useBias&&(n=Or(n,this.bias.read(),this.dataFormat)),this.activation!=null&&(n=this.activation.apply(n)),this.dataFormat==="channelsFirst"&&(n=Rt(n,[0,3,1,2])),n})}getConfig(){let t=super.getConfig();return delete t.rank,delete t.kernelInitializer,delete t.kernelRegularizer,delete t.kernelConstraint,t.depthwiseInitializer=se(this.depthwiseInitializer),t.pointwiseInitializer=se(this.pointwiseInitializer),t.depthwiseRegularizer=qt(this.depthwiseRegularizer),t.pointwiseRegularizer=qt(this.pointwiseRegularizer),t.depthwiseConstraint=ve(this.depthwiseConstraint),t.pointwiseConstraint=ve(this.pointwiseConstraint),t}}return r.className="SeparableConv",r})();var KR=(()=>{class r extends l5{constructor(t){super(2,t)}}return r.className="SeparableConv2D",r})();q.registerClass(KR);var qR=(()=>{class r extends kp{constructor(t){super(1,t),r.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let t=super.getConfig();return delete t.rank,delete t.dataFormat,t}static verifyArgs(t){if(typeof t.kernelSize!="number"&&!sx(t.kernelSize,"number",1,1))throw new P(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(t.kernelSize)}.`)}}return r.className="Conv1D",r})();q.registerClass(qR);var jR=(()=>{class r extends Ct{constructor(t){super(t),typeof t.cropping=="number"?this.cropping=[[t.cropping,t.cropping],[t.cropping,t.cropping]]:typeof t.cropping[0]=="number"?this.cropping=[[t.cropping[0],t.cropping[0]],[t.cropping[1],t.cropping[1]]]:this.cropping=t.cropping,this.dataFormat=t.dataFormat===void 0?"channelsLast":t.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(t){return this.dataFormat==="channelsFirst"?[t[0],t[1],t[2]-this.cropping[0][0]-this.cropping[0][1],t[3]-this.cropping[1][0]-this.cropping[1][1]]:[t[0],t[1]-this.cropping[0][0]-this.cropping[0][1],t[2]-this.cropping[1][0]-this.cropping[1][1],t[3]]}call(t,o){return M(()=>{if(t=xt(t),this.dataFormat==="channelsLast"){let n=km(t,this.cropping[0][0],t.shape[1]-this.cropping[0][0]-this.cropping[0][1],2);return km(n,this.cropping[1][0],t.shape[2]-this.cropping[1][1]-this.cropping[1][0],3)}else{let n=km(t,this.cropping[0][0],t.shape[2]-this.cropping[0][0]-this.cropping[0][1],3);return km(n,this.cropping[1][0],t.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)}})}getConfig(){let t={cropping:this.cropping,dataFormat:this.dataFormat},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Cropping2D",r})();q.registerClass(jR);var XR=(()=>{class r extends Ct{constructor(t){super(t),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=t.size==null?this.DEFAULT_SIZE:t.size,this.dataFormat=t.dataFormat==null?"channelsLast":t.dataFormat,me(this.dataFormat),this.interpolation=t.interpolation==null?"nearest":t.interpolation,VD(this.interpolation)}computeOutputShape(t){if(this.dataFormat==="channelsFirst"){let o=t[2]==null?null:this.size[0]*t[2],n=t[3]==null?null:this.size[1]*t[3];return[t[0],t[1],o,n]}else{let o=t[1]==null?null:this.size[0]*t[1],n=t[2]==null?null:this.size[1]*t[2];return[t[0],o,n,t[3]]}}call(t,o){return M(()=>{let n=xt(t),s=n.shape;if(this.dataFormat==="channelsFirst"){n=Rt(n,[0,2,3,1]);let i=this.size[0]*s[2],a=this.size[1]*s[3],l=this.interpolation==="nearest"?Je.resizeNearestNeighbor(n,[i,a]):Je.resizeBilinear(n,[i,a]);return Rt(l,[0,3,1,2])}else{let i=this.size[0]*s[1],a=this.size[1]*s[2];return this.interpolation==="nearest"?Je.resizeNearestNeighbor(n,[i,a]):Je.resizeBilinear(n,[i,a])}})}getConfig(){let t={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},o=super.getConfig();return Object.assign(t,o),t}}return r.className="UpSampling2D",r})();q.registerClass(XR);function u5(r,e,t=[1,1],o="valid",n,s){return M(()=>{n==null&&(n=Fr()),me(n);let i=Pm(r,n);if(r.rank!==4)throw new P(`Input for depthwiseConv2d is required to be 4-D, but is instead ${r.rank}-D`);if(e.rank!==4)throw new P(`depthwiseKernel is required to be 4-D, but is instead ${e.rank}-D`);return i=bn(i,e,t,o==="same"?"same":"valid","NHWC",s),n==="channelsFirst"&&(i=Rt(i,[0,3,1,2])),i})}var YR=(()=>{class r extends Lm{constructor(t){super(2,t),this.depthwiseKernel=null,this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=Yt(t.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=Se(t.depthwiseConstraint),this.depthwiseRegularizer=te(t.depthwiseRegularizer)}build(t){if(t=At(t),t.length<4)throw new P(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(t)}.`);let o=this.dataFormat==="channelsFirst"?1:3;if(t[o]==null||t[o]<0)throw new P(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${t[o]}).`);let n=t[o],s=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight("depthwise_kernel",s,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight("bias",[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,o){return M(()=>{t=xt(t);let n=u5(t,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(n=Or(n,this.bias.read(),this.dataFormat)),this.activation!=null&&(n=this.activation.apply(n)),n})}computeOutputShape(t){t=At(t);let o=this.dataFormat==="channelsFirst"?t[2]:t[1],n=this.dataFormat==="channelsFirst"?t[3]:t[2],s=this.dataFormat==="channelsFirst"?t[1]*this.depthMultiplier:t[3]*this.depthMultiplier,i=qr(o,this.kernelSize[0],this.padding,this.strides[0]),a=qr(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat==="channelsFirst"?[t[0],s,i,a]:[t[0],i,a,s]}getConfig(){let t=super.getConfig();return t.depthMultiplier=this.depthMultiplier,t.depthwiseInitializer=se(this.depthwiseInitializer),t.depthwiseRegularizer=qt(this.depthwiseRegularizer),t.depthwiseConstraint=ve(this.depthwiseRegularizer),t}}return r.className="DepthwiseConv2D",r})();q.registerClass(YR);function _0(r,e,t,o){if(Array.isArray(r)){if(e!=null||t!=null)throw new P("When inputs is an array, neither initialState or constants should be provided");o!=null&&(t=r.slice(r.length-o,r.length),r=r.slice(0,r.length-o)),r.length>1&&(e=r.slice(1,r.length)),r=r[0]}function n(s){return s==null||Array.isArray(s)?s:[s]}return e=n(e),t=n(t),{inputs:r,initialState:e,constants:t}}function F0(r,e,t,o=!1,n,s,i=!1,a=!1){return M(()=>{let l=e.shape.length;if(l<3)throw new P(`Input should be at least 3D, but is ${l}D.`);let u=[1,0].concat(_r(2,l));if(e=Rt(e,u),s!=null)throw new wt("The rnn() functoin of the deeplearn.js backend does not support constants yet.");i&&console.warn("Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend."),n!=null&&(n=j(j(n,"bool"),"float32"),n.rank===l-1&&(n=xe(n,-1)),n=Rt(n,u)),o&&(e=Ve(e,0),n!=null&&(n=Ve(n,0)));let c=[],p,m=t,f=e.shape[0],h=We(e),g;n!=null&&(g=We(n));for(let x=0;x<f;++x){let y=h[x],w=M(()=>r(y,m));if(n==null)p=w[0],m=w[1];else{let C=M(()=>{let T=g[x],A=et(He(T),T),$=U(D(w[0],T),D(m[0],A)),_=m.map((O,z)=>U(D(w[1][z],T),D(O,A)));return{output:$,newStates:_}});p=C.output,m=C.newStates}a&&c.push(p)}let d;return a&&(d=be(c,1)),[p,d,m]})}var Aa=(()=>{class r extends Ct{constructor(t){super(t);let o;if(t.cell==null)throw new P("cell property is missing for the constructor of RNN.");if(Array.isArray(t.cell)?o=new P0({cells:t.cell}):o=t.cell,o.stateSize==null)throw new P("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=o,this.returnSequences=t.returnSequences==null?!1:t.returnSequences,this.returnState=t.returnState==null?!1:t.returnState,this.goBackwards=t.goBackwards==null?!1:t.goBackwards,this._stateful=t.stateful==null?!1:t.stateful,this.unroll=t.unroll==null?!1:t.unroll,this.supportsMasking=!0,this.inputSpec=[new Qt({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){if(this.states_==null){let t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;return _r(0,t).map(o=>null)}else return this.states_}setStates(t){this.states_=t}computeOutputShape(t){gx(t)&&(t=t[0]),t=t;let o=this.cell.stateSize;Array.isArray(o)||(o=[o]);let n=o[0],s;if(this.returnSequences?s=[t[0],t[1],n]:s=[t[0],n],this.returnState){let i=[];for(let a of o)i.push([t[0],a]);return[s].concat(i)}else return s}computeMask(t,o){return M(()=>{Array.isArray(o)&&(o=o[0]);let n=this.returnSequences?o:null;if(this.returnState){let s=this.states.map(i=>null);return[n].concat(s)}else return n})}get states(){if(this.states_==null){let t=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,o=[];for(let n=0;n<t;++n)o.push(null);return o}else return this.states_}set states(t){this.states_=t}build(t){if(this.numConstants!=null)throw new wt("Constants support is not implemented in RNN yet.");gx(t)&&(t=t[0]),t=t;let n=this.stateful?t[0]:null,s=t.slice(2);this.inputSpec[0]=new Qt({shape:[n,null,...s]});let i=[t[0]].concat(t.slice(2));this.cell.build(i);let a;if(Array.isArray(this.cell.stateSize)?a=this.cell.stateSize:a=[this.cell.stateSize],this.stateSpec!=null){if(!b.arraysEqual(this.stateSpec.map(l=>l.shape[l.shape.length-1]),a))throw new P(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=a.map(l=>new Qt({shape:[null,l]}));this.stateful&&this.resetStates()}resetStates(t,o=!1){M(()=>{if(!this.stateful)throw new go("Cannot call resetStates() on an RNN Layer that is not stateful.");let n=this.inputSpec[0].shape[0];if(n==null)throw new P("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(s=>ne([n,s])):this.states_=[ne([n,this.cell.stateSize])];else if(t==null)Nt(this.states_),this.keptStates!=null&&(Nt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(s=>ne([n,s])):this.states_[0]=ne([n,this.cell.stateSize]);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new P(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);o===!0?this.keptStates.push(this.states_.slice()):Nt(this.states_);for(let s=0;s<this.states_.length;++s){let i=t[s],a=Array.isArray(this.cell.stateSize)?this.cell.stateSize[s]:this.cell.stateSize,l=[n,a];if(!b.arraysEqual(i.shape,l))throw new P(`State ${s} is incompatible with layer ${this.name}: expected shape=${l}, received shape=${i.shape}`);this.states_[s]=i}}this.states_=this.states_.map(s=>ce(s.clone()))})}apply(t,o){let n=o==null?null:o.initialState,s=o==null?null:o.constants;o==null&&(o={});let i=_0(t,n,s,this.numConstants);t=i.inputs,n=i.initialState,s=i.constants;let a=[],l=[];if(n!=null){o.initialState=n,a=a.concat(n),this.stateSpec=[];for(let c of n)this.stateSpec.push(new Qt({shape:c.shape}));l=l.concat(this.stateSpec)}if(s!=null&&(o.constants=s,a=a.concat(s),this.numConstants=s.length),a[0]instanceof Nr){let c=[t].concat(a),p=this.inputSpec.concat(l),m=this.inputSpec;this.inputSpec=p;let f=super.apply(c,o);return this.inputSpec=m,f}else return super.apply(t,o)}call(t,o){return M(()=>{let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;t=xt(t),i==null&&(this.stateful?i=this.states_:i=this.getInitialState(t));let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new P(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn("Ignoring unroll = true for RNN layer, due to imperative backend.");let l={training:s},c=F0((g,d)=>{let x=this.cell.call([g].concat(d),l);return[x[0],x.slice(1)]},t,i,this.goBackwards,n,null,this.unroll,this.returnSequences),p=c[0],m=c[1],f=c[2];this.stateful&&this.resetStates(f,s);let h=this.returnSequences?m:p;return this.returnState?[h].concat(f):h})}getInitialState(t){return M(()=>{let o=ne(t.shape);return o=it(o,[1,2]),o=Ws(o),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(n=>n>1?mx(o,[1,n]):o):this.cell.stateSize>1?[mx(o,[1,this.cell.stateSize])]:[o]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(t)}getConfig(){let t=super.getConfig(),o={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(o.numConstants=this.numConstants);let n=this.cell.getConfig();return this.getClassName()===r.className&&(o.cell={className:this.cell.getClassName(),config:n}),Object.assign(Object.assign(Object.assign({},n),t),o)}static fromConfig(t,o,n={}){let s=o.cell,i=lo(s,n);return new t(Object.assign(o,{cell:i}))}}return r.className="RNN",r})();q.registerClass(Aa);var Ea=class extends Ct{},O0=(()=>{class r extends Ea{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Re(this.units,"units"),this.activation=sn(t.activation==null?this.DEFAULT_ACTIVATION:t.activation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Yt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=te(t.kernelRegularizer),this.recurrentRegularizer=te(t.recurrentRegularizer),this.biasRegularizer=te(t.biasRegularizer),this.kernelConstraint=Se(t.kernelConstraint),this.recurrentConstraint=Se(t.recurrentConstraint),this.biasConstraint=Se(t.biasConstraint),this.dropout=Ll([1,on([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Ll([1,on([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=At(t),this.kernel=this.addWeight("kernel",[t[t.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,o){return M(()=>{if(t=t,t.length!==2)throw new P(`SimpleRNNCell expects 2 input Tensors, got ${t.length}.`);let n=t[1];t=t[0];let s=o.training==null?!1:o.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=qs({ones:()=>He(t),rate:this.dropout,training:s,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=qs({ones:()=>He(n),rate:this.recurrentDropout,training:s,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,l=this.recurrentDropoutMask;a!=null?i=Po(D(t,a),this.kernel.read()):i=Po(t,this.kernel.read()),this.bias!=null&&(i=Or(i,this.bias.read())),l!=null&&(n=D(n,l));let u=U(i,Po(n,this.recurrentKernel.read()));return this.activation!=null&&(u=this.activation.apply(u)),[u,u]})}getConfig(){let t=super.getConfig(),o={units:this.units,activation:nn(this.activation),useBias:this.useBias,kernelInitializer:se(this.kernelInitializer),recurrentInitializer:se(this.recurrentInitializer),biasInitializer:se(this.biasInitializer),kernelRegularizer:qt(this.kernelRegularizer),recurrentRegularizer:qt(this.recurrentRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ve(this.kernelConstraint),recurrentConstraint:ve(this.recurrentConstraint),biasConstraint:ve(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},t),o)}}return r.className="SimpleRNNCell",r})();q.registerClass(O0);var ZR=(()=>{class r extends Aa{constructor(t){t.cell=new O0(t),super(t)}call(t,o){return M(()=>{this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}static fromConfig(t,o){return new t(o)}}return r.className="SimpleRNN",r})();q.registerClass(ZR);var L0=(()=>{class r extends Ea{constructor(t){if(super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.resetAfter)throw new P("GRUCell does not support reset_after parameter set to true.");this.units=t.units,Re(this.units,"units"),this.activation=sn(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=sn(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Yt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=te(t.kernelRegularizer),this.recurrentRegularizer=te(t.recurrentRegularizer),this.biasRegularizer=te(t.biasRegularizer),this.kernelConstraint=Se(t.kernelConstraint),this.recurrentConstraint=Se(t.recurrentConstraint),this.biasConstraint=Se(t.biasConstraint),this.dropout=Ll([1,on([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Ll([1,on([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){t=At(t);let o=t[t.length-1];this.kernel=this.addWeight("kernel",[o,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight("bias",[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(t,o){return M(()=>{if(t=t,t.length!==2)throw new P(`GRUCell expects 2 input Tensors (inputs, h, c), got ${t.length}.`);let n=o.training==null?!1:o.training,s=t[1];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=qs({ones:()=>He(t),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=qs({ones:()=>He(s),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,l,u,c;0<this.dropout&&this.dropout<1&&(t=D(t,i[0]));let p=Po(t,this.kernel.read());this.useBias&&(p=Or(p,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(s=D(s,a[0]));let m=this.recurrentKernel.read(),[f,h]=Ge(m,[2*this.units,this.units],m.rank-1),g=Po(s,f),[d,x,y]=Ge(p,3,p.rank-1),[w,C]=Ge(g,2,g.rank-1);l=this.recurrentActivation.apply(U(d,w)),u=this.recurrentActivation.apply(U(x,C));let T=Po(D(u,s),h);c=this.activation.apply(U(y,T));let A=U(D(l,s),D(U(1,_t(l)),c));return[A,A]})}getConfig(){let t=super.getConfig(),o={units:this.units,activation:nn(this.activation),recurrentActivation:nn(this.recurrentActivation),useBias:this.useBias,kernelInitializer:se(this.kernelInitializer),recurrentInitializer:se(this.recurrentInitializer),biasInitializer:se(this.biasInitializer),kernelRegularizer:qt(this.kernelRegularizer),recurrentRegularizer:qt(this.recurrentRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ve(this.kernelConstraint),recurrentConstraint:ve(this.recurrentConstraint),biasConstraint:ve(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},t),o)}}return r.className="GRUCell",r})();q.registerClass(L0);var JR=(()=>{class r extends Aa{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new L0(t),super(t)}call(t,o){return M(()=>{this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}static fromConfig(t,o){return o.implmentation===0&&(o.implementation=1),new t(o)}}return r.className="GRU",r})();q.registerClass(JR);var zm=(()=>{class r extends Ea{constructor(t){super(t),this.DEFAULT_ACTIVATION="tanh",this.DEFAULT_RECURRENT_ACTIVATION="hardSigmoid",this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_RECURRENT_INITIALIZER="orthogonal",this.DEFAULT_BIAS_INITIALIZER="zeros",this.units=t.units,Re(this.units,"units"),this.activation=sn(t.activation===void 0?this.DEFAULT_ACTIVATION:t.activation),this.recurrentActivation=sn(t.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:t.recurrentActivation),this.useBias=t.useBias==null?!0:t.useBias,this.kernelInitializer=Yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=Yt(t.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=Yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=t.unitForgetBias,this.kernelRegularizer=te(t.kernelRegularizer),this.recurrentRegularizer=te(t.recurrentRegularizer),this.biasRegularizer=te(t.biasRegularizer),this.kernelConstraint=Se(t.kernelConstraint),this.recurrentConstraint=Se(t.recurrentConstraint),this.biasConstraint=Se(t.biasConstraint),this.dropout=Ll([1,on([0,t.dropout==null?0:t.dropout])]),this.recurrentDropout=Ll([1,on([0,t.recurrentDropout==null?0:t.recurrentDropout])]),this.dropoutFunc=t.dropoutFunc,this.implementation=t.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(t){var o;t=At(t);let n=t[t.length-1];this.kernel=this.addWeight("kernel",[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight("recurrent_kernel",[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let s;if(this.useBias){if(this.unitForgetBias){let i=this.biasInitializer,a=this.units;s=new(o=class extends Lr{apply(u,c){let p=i.apply([a]),m=new dx().apply([a]),f=i.apply([a*2]);return u0(u0(p,m),f)}},o.className="CustomInit",o)}else s=this.biasInitializer;this.bias=this.addWeight("bias",[this.units*4],null,s,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(t,o){return M(()=>{let n=o.training==null?!1:o.training;if(t=t,t.length!==3)throw new P(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let s=t[1],i=t[2];t=t[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=qs({ones:()=>He(t),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=qs({ones:()=>He(s),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,l=this.recurrentDropoutMask,u,c,p,m;0<this.dropout&&this.dropout<1&&(t=D(t,a[0]));let f=Po(t,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(s=D(s,l[0])),f=U(f,Po(s,this.recurrentKernel.read())),this.useBias&&(f=Or(f,this.bias.read()));let[h,g,d,x]=Ge(f,4,f.rank-1);u=this.recurrentActivation.apply(h),c=this.recurrentActivation.apply(g),p=U(D(c,i),D(u,this.activation.apply(d))),m=this.recurrentActivation.apply(x);let y=D(m,this.activation.apply(p));return[y,y,p]})}getConfig(){let t=super.getConfig(),o={units:this.units,activation:nn(this.activation),recurrentActivation:nn(this.recurrentActivation),useBias:this.useBias,kernelInitializer:se(this.kernelInitializer),recurrentInitializer:se(this.recurrentInitializer),biasInitializer:se(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:qt(this.kernelRegularizer),recurrentRegularizer:qt(this.recurrentRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ve(this.kernelConstraint),recurrentConstraint:ve(this.recurrentConstraint),biasConstraint:ve(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},t),o)}}return r.className="LSTMCell",r})();q.registerClass(zm);var QR=(()=>{class r extends Aa{constructor(t){t.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),t.cell=new zm(t),super(t)}call(t,o){return M(()=>{this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}static fromConfig(t,o){return o.implmentation===0&&(o.implementation=1),new t(o)}}return r.className="LSTM",r})();q.registerClass(QR);var P0=(()=>{class r extends Ea{constructor(t){super(t),this.cells=t.cells}get stateSize(){let t=[];for(let o of this.cells.slice().reverse())Array.isArray(o.stateSize)?t.push(...o.stateSize):t.push(o.stateSize);return t}call(t,o){return M(()=>{t=t;let n=t.slice(1),s=[];for(let l of this.cells.slice().reverse())Array.isArray(l.stateSize)?s.push(n.splice(0,l.stateSize.length)):s.push(n.splice(0,1));s.reverse();let i=[],a;for(let l=0;l<this.cells.length;++l){let u=this.cells[l];n=s[l],l===0?a=[t[0]].concat(n):a=[a[0]].concat(n),a=u.call(a,o),i.push(a.slice(1))}n=[];for(let l of i.slice().reverse())n.push(...l);return[a[0]].concat(n)})}build(t){gx(t)&&(t=t[0]),t=t;let o;this.cells.forEach((n,s)=>{rn(`RNNCell_${s}`,()=>{n.build(t),Array.isArray(n.stateSize)?o=n.stateSize[0]:o=n.stateSize,t=[t[0],o]})}),this.built=!0}getConfig(){let t=super.getConfig(),o=i=>({className:i.getClassName(),config:i.getConfig()}),s={cells:this.cells.map(o)};return Object.assign(Object.assign({},t),s)}static fromConfig(t,o,n={}){let s=[];for(let i of o.cells)s.push(lo(i,n));return new t({cells:s})}get trainableWeights(){if(!this.trainable)return[];let t=[];for(let o of this.cells)t.push(...o.trainableWeights);return t}get nonTrainableWeights(){let t=[];for(let o of this.cells)t.push(...o.nonTrainableWeights);if(!this.trainable){let o=[];for(let n of this.cells)o.push(...n.trainableWeights);return o.concat(t)}return t}getWeights(){let t=[];for(let o of this.cells)t.push(...o.weights);return Am(t)}setWeights(t){let o=[];for(let n of this.cells){let s=n.weights.length,i=t.splice(s);for(let a=0;a<n.weights.length;++a)o.push([n.weights[a],i[a]])}vp(o)}}return r.className="StackedRNNCells",r})();q.registerClass(P0);function qs(r){let{ones:e,rate:t,training:o=!1,count:n=1,dropoutFunc:s}=r,i=()=>s!=null?s(e(),t):hx(e(),t),a=()=>Ta(i,e,o);return!n||n<=1?ce(a().clone()):Array(n).fill(void 0).map(a).map(u=>ce(u.clone()))}var c5=function(r,e){var t={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,o=Object.getOwnPropertySymbols(r);n<o.length;n++)e.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(r,o[n])&&(t[o[n]]=r[o[n]]);return t};var p5=(()=>{class r extends Aa{constructor(t){if(t.unroll)throw new wt("Unrolling is not possible with convolutional RNNs.");if(Array.isArray(t.cell))throw new wt("It is not possible at the moment to stack convolutional cells.");super(t),this.inputSpec=[new Qt({ndim:5})]}call(t,o){return M(()=>{if(this.cell.dropoutMask!=null&&(Nt(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Nt(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),o&&o.constants)throw new P("ConvRNN2D cell does not support constants");let n=o==null?null:o.mask,s=o==null?null:o.training,i=o==null?null:o.initialState;return super.call(t,{mask:n,training:s,initialState:i})})}computeOutputShape(t){let o=this.computeSingleOutputShape(t);return this.returnSequences||(o=[o[0],...o.slice(2)]),this.returnState&&(o=[o,...Array(2).fill([t[0],...o.slice(-3)])]),o}getInitialState(t){return M(()=>{let{stateSize:o}=this.cell,n=t.shape,s=this.computeSingleOutputShape(n),i=[s[0],...s.slice(2)],a=ne(i);return Array.isArray(o)?Array(o.length).fill(a):[a]})}resetStates(t,o=!1){M(()=>{if(!this.stateful)throw new go("Cannot call resetStates() on an RNN Layer that is not stateful.");let n=this.inputSpec[0].shape,s=this.computeSingleOutputShape(n),i=[s[0],...s.slice(2)];if(n[0]==null)throw new P("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>ne(i)):this.states_=[ne(i)];else if(t==null)Nt(this.states_),this.keptStates!=null&&(Nt(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>ne(i)):this.states_[0]=ne(i);else{if(Array.isArray(t)||(t=[t]),t.length!==this.states_.length)throw new P(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${t.length} state value(s). Input received: ${t}`);o?this.keptStates.push(this.states_.slice()):Nt(this.states_);for(let l=0;l<this.states_.length;++l){let u=t[l],c=i;if(!b.arraysEqual(u.shape,c))throw new P(`State ${l} is incompatible with layer ${this.name}: expected shape=${c}, received shape=${u.shape}`);this.states_[l]=u}}this.states_=this.states_.map(l=>ce(l.clone()))})}computeSingleOutputShape(t){let{dataFormat:o,filters:n,kernelSize:s,padding:i,strides:a,dilationRate:l}=this.cell,u=o==="channelsFirst",c=t[u?3:2],p=t[u?4:3],m=qr(c,s[0],i,a[0],l[0]),f=qr(p,s[1],i,a[1],l[1]);return[...t.slice(0,2),...u?[n,m,f]:[m,f,n]]}}return r.className="ConvRNN2D",r})(),z0=(()=>{class r extends zm{constructor(t){let{filters:o,kernelSize:n,strides:s,padding:i,dataFormat:a,dilationRate:l}=t;super(Object.assign(Object.assign({},t),{units:o})),this.filters=o,Re(this.filters,"filters"),this.kernelSize=ka(n,2,"kernelSize"),this.kernelSize.forEach(u=>Re(u,"kernelSize")),this.strides=ka(s||1,2,"strides"),this.strides.forEach(u=>Re(u,"strides")),this.padding=i||"valid",Rr(this.padding),this.dataFormat=a||"channelsLast",me(this.dataFormat),this.dilationRate=ka(l||1,2,"dilationRate"),this.dilationRate.forEach(u=>Re(u,"dilationRate"))}build(t){var o;t=At(t);let n=this.dataFormat==="channelsFirst"?1:t.length-1;if(t[n]==null)throw new P(`The channel dimension of the input should be defined. Found ${t[n]}`);let s=t[n],i=4,a=this.kernelSize.concat([s,this.filters*i]);this.kernel=this.addWeight("kernel",a,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let l=this.kernelSize.concat([this.filters,this.filters*i]);if(this.recurrentKernel=this.addWeight("recurrent_kernel",l,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let u;if(this.unitForgetBias){let c=this.biasInitializer,p=this.filters;u=new(o=class extends Lr{apply(f,h){let g=c.apply([p]),d=Fe([p]),x=c.apply([p*2]);return yp([g,d,x])}},o.className="CustomInit",o)}else u=this.biasInitializer;this.bias=this.addWeight("bias",[this.filters*i],null,u,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(t,o){return M(()=>{if(t.length!==3)throw new P(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${t.length}.`);let n=o.training||!1,s=t[0],i=t[1],a=t[2],l=4;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=qs({ones:()=>He(s),rate:this.dropout,training:n,count:l,dropoutFunc:this.dropoutFunc}));let u=this.dropoutMask,c=(nt,lt,at)=>!lt||!lt[at]?nt:D(lt[at],nt),p=c(s,u,0),m=c(s,u,1),f=c(s,u,2),h=c(s,u,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=qs({ones:()=>He(i),rate:this.recurrentDropout,training:n,count:l,dropoutFunc:this.dropoutFunc}));let g=this.recurrentDropoutMask,d=c(i,g,0),x=c(i,g,1),y=c(i,g,2),w=c(i,g,3),C=3,[T,A,$,_]=Ge(this.kernel.read(),l,C),[O,z,V,G]=this.useBias?Ge(this.bias.read(),l):[null,null,null,null];p=this.inputConv(p,T,O,this.padding),m=this.inputConv(m,A,z,this.padding),f=this.inputConv(f,$,V,this.padding),h=this.inputConv(h,_,G,this.padding);let[W,H,K,Y]=Ge(this.recurrentKernel.read(),l,C);d=this.recurrentConv(d,W),x=this.recurrentConv(x,H),y=this.recurrentConv(y,K),w=this.recurrentConv(w,Y);let J=this.recurrentActivation.apply(U(p,d)),X=this.recurrentActivation.apply(U(m,x)),Q=U(D(X,a),D(J,this.activation.apply(U(f,y)))),ot=D(this.recurrentActivation.apply(U(h,w)),this.activation.apply(Q));return[ot,ot,Q]})}getConfig(){let t=super.getConfig(),{units:o}=t,n=c5(t,["units"]),s={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),s)}inputConv(t,o,n,s){let i=Br(t,o,this.strides,s||"valid",this.dataFormat==="channelsFirst"?"NCHW":"NHWC",this.dilationRate);return n?Or(i,n,this.dataFormat):i}recurrentConv(t,o){return Br(t,o,1,"same",this.dataFormat==="channelsFirst"?"NCHW":"NHWC")}}return r.className="ConvLSTM2DCell",r})();q.registerClass(z0);var t_=(()=>{class r extends p5{constructor(t){let o=new z0(t);super(Object.assign(Object.assign({},t),{cell:o}))}static fromConfig(t,o){return new t(o)}}return r.className="ConvLSTM2D",r})();q.registerClass(t_);var M0=(()=>{class r extends Ct{constructor(t){super(t),this.rate=Math.max(Math.min(t.rate,1),0),this.noiseShape=t.noiseShape,this.seed=t.seed,this.supportsMasking=!0}getNoiseShape(t){if(this.noiseShape==null)return this.noiseShape;let o=t.shape,n=[];for(let s=0;s<this.noiseShape.length;++s)n.push(this.noiseShape[s]==null?o[s]:this.noiseShape[s]);return n}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t);if(0<this.rate&&this.rate<1){let s=o.training==null?!1:o.training,i=this.getNoiseShape(n);return Ta(()=>hx(n,this.rate,i,this.seed),()=>n,s)}return t})}getConfig(){let t={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},o=super.getConfig();return Object.assign(t,o),t}dispose(){return super.dispose()}}return r.className="Dropout",r})();q.registerClass(M0);var e_=(()=>{class r extends M0{constructor(t){super(t),this.inputSpec=[{ndim:3}]}getNoiseShape(t){let o=t.shape;return[o[0],1,o[2]]}}return r.className="SpatialDropout1D",r})();q.registerClass(e_);var r_=(()=>{class r extends Ct{constructor(t){if(super(t),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER="glorotNormal",this.DEFAULT_BIAS_INITIALIZER="zeros",t.batchInputShape==null&&t.inputShape==null&&t.inputDim!=null){let o=null;t.batchSize!=null&&(o=t.batchSize),this.batchInputShape=[o,t.inputDim]}this.units=t.units,Re(this.units,"units"),this.activation=sn(t.activation),t.useBias!=null&&(this.useBias=t.useBias),this.kernelInitializer=Yt(t.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=Yt(t.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=Se(t.kernelConstraint),this.biasConstraint=Se(t.biasConstraint),this.kernelRegularizer=te(t.kernelRegularizer),this.biasRegularizer=te(t.biasRegularizer),this.activityRegularizer=te(t.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(t){t=At(t);let o=t[t.length-1];this.kernel==null&&(this.kernel=this.addWeight("kernel",[o,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight("bias",[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:o}}],this.built=!0}computeOutputShape(t){t=At(t);let o=t.slice();return o[o.length-1]=this.units,o}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t),s=ix(this.activation.getClassName()),i;return s!=null?i=Po(n,this.kernel.read(),s,this.bias?this.bias.read():null):(i=Po(n,this.kernel.read()),this.bias!=null&&(i=Or(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))),i})}getConfig(){let t={units:this.units,activation:nn(this.activation),useBias:this.useBias,kernelInitializer:se(this.kernelInitializer),biasInitializer:se(this.biasInitializer),kernelRegularizer:qt(this.kernelRegularizer),biasRegularizer:qt(this.biasRegularizer),activityRegularizer:qt(this.activityRegularizer),kernelConstraint:ve(this.kernelConstraint),biasConstraint:ve(this.biasConstraint)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Dense",r})();q.registerClass(r_);var o_=(()=>{class r extends Ct{constructor(t){t=t||{},super(t),this.inputSpec=[{minNDim:3}],this.dataFormat=t.dataFormat}computeOutputShape(t){t=At(t);for(let o of t.slice(1))if(o==null)throw new P(`The shape of the input to "Flatten" is not fully defined (got ${t.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[t[0],Lo(t,1)]}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t);if(this.dataFormat==="channelsFirst"&&n.rank>1){let s=[0];for(let i=2;i<n.rank;++i)s.push(i);s.push(1),n=Rt(n,s)}return KD(n)})}getConfig(){let t={};this.dataFormat!=null&&(t.dataFormat=this.dataFormat);let o=super.getConfig();return Object.assign(t,o),t}}return r.className="Flatten",r})();q.registerClass(o_);var n_=(()=>{class r extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.activation=sn(t.activation)}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t);return this.activation.apply(n)})}getConfig(){let t={activation:nn(this.activation)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Activation",r})();q.registerClass(n_);var s_=(()=>{class r extends Ct{constructor(t){super(t),this.n=t.n,this.inputSpec=[{ndim:2}]}computeOutputShape(t){return[t[0],this.n,t[1]]}call(t,o){return M(()=>(t=xt(t),UD(t,this.n)))}getConfig(){let t={n:this.n},o=super.getConfig();return Object.assign(t,o),t}}return r.className="RepeatVector",r})();q.registerClass(s_);var i_=(()=>{class r extends Ct{constructor(t){super(t),this.targetShape=t.targetShape;for(let o=0;o<this.targetShape.length;++o)this.isUnknown(this.targetShape[o])&&(this.targetShape[o]=null)}isUnknown(t){return t<0||t==null}fixUnknownDimension(t,o){let n="Total size of new array must be unchanged.",s=o.slice(),i=1,a=null;for(let u=0;u<s.length;++u){let c=s[u];if(this.isUnknown(c))if(a===null)a=u;else throw new P("Can only specifiy one unknown dimension.");else i*=c}let l=Lo(t);if(a!==null){if(i===0||l%i!==0)throw new P(n);s[a]=l/i}else if(l!==i)throw new P(n);return s}computeOutputShape(t){let o=!1;for(let n=0;n<t.length;++n)if(this.isUnknown(t[n])){o=!0;break}return o?t.slice(0,1).concat(this.targetShape):t.slice(0,1).concat(this.fixUnknownDimension(t.slice(1),this.targetShape))}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t),s=n.shape,i=s.slice(0,1).concat(this.fixUnknownDimension(s.slice(1),this.targetShape));return R(n,i)})}getConfig(){let t={targetShape:this.targetShape},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Reshape",r})();q.registerClass(i_);var a_=(()=>{class r extends Ct{constructor(t){if(super(t),t.dims==null)throw new Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(t.dims))throw new Error(`Permute constructor requires \`dims\` to be an Array, but received ${t.dims} instead.`);let o=_r(1,t.dims.length+1);if(!b.arraysEqual(t.dims.slice().sort(),o))throw new Error("Invalid permutation `dims`: "+JSON.stringify(t.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=t.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new Qt({ndim:this.dims.length+1})]}computeOutputShape(t){t=At(t);let o=t.slice();return this.dims.forEach((n,s)=>{o[s+1]=t[n]}),o}call(t,o){return Rt(xt(t),this.dimsIncludingBatch)}getConfig(){let t={dims:this.dims},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Permute",r})();q.registerClass(a_);var l_=(()=>{class r extends Ct{constructor(t){super(t??{}),this.supportsMasking=!0,t!=null?this.maskValue=t.maskValue==null?0:t.maskValue:this.maskValue=0}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={maskValue:this.maskValue};return Object.assign(o,t),o}computeMask(t,o){let n=xt(t);return il(Ko(n,this.maskValue),-1)}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t),a=il(Ko(n,this.maskValue),-1,!0);return D(n,j(a,n.dtype))})}}return r.className="Masking",r})();q.registerClass(l_);var u_=(()=>{class r extends Ct{constructor(t){if(super(t),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER="randomUniform",t.batchInputShape==null&&t.inputShape==null){let o=null;t.batchSize!=null&&(o=t.batchSize),t.inputLength==null?this.batchInputShape=[o,null]:this.batchInputShape=[o].concat(Kt(t.inputLength))}this.inputDim=t.inputDim,Re(this.inputDim,"inputDim"),this.outputDim=t.outputDim,Re(this.outputDim,"outputDim"),this.embeddingsInitializer=Yt(t.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=te(t.embeddingsRegularizer),this.activityRegularizer=te(t.activityRegularizer),this.embeddingsConstraint=Se(t.embeddingsConstraint),this.maskZero=t.maskZero,this.supportsMasking=t.maskZero,this.inputLength=t.inputLength}build(t){this.embeddings=this.addWeight("embeddings",[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(t){}computeMask(t,o){return M(()=>this.maskZero?(t=xt(t),Ko(t,gt(t))):null)}computeOutputShape(t){if(t=At(t),this.inputLength==null)return[...t,this.outputDim];let o=Kt(this.inputLength);if(o.length!==t.length-1)throw new P(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);{let n=0;for(let s=0;s<o.length;++s){let i=o[s],a=t[s+1];if(i!=null&&a!=null&&i!==a)throw new P(`"inputLength" is ${this.inputLength}, but received input shape has shape ${t}`);i==null&&(o[n]=a),n++}}return[t[0],...o,this.outputDim]}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t);n.dtype!=="int32"&&(n=Sr(n,"int32"));let s=fx(this.embeddings.read(),R(n,[n.size]));return R(s,At(this.computeOutputShape(n.shape)))})}getConfig(){let t={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:se(this.embeddingsInitializer),embeddingsRegularizer:qt(this.embeddingsRegularizer),activityRegularizer:qt(this.activityRegularizer),embeddingsConstraint:ve(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Embedding",r})();q.registerClass(u_);var js=class extends Ct{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new wt}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let o=e.slice(0,e.length-t.length);for(let n=0;n<t.length;++n){let s=e[e.length-t.length+n],i=t[n];if(s==null||i==null||s<0||i<0)o.push(null);else if(s===1)o.push(i);else if(i===1)o.push(s);else{if(s!==i)throw new P("Operands could not be broadcast together with shapes "+JSON.stringify(e)+" "+JSON.stringify(t));o.push(s)}}return o}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[At(e)]),e=e,e.length<2)throw new P(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let s of e)s!=null&&s[0]!==null&&t.push(s[0]);if(t=Oo(t),t.length>1)throw new P(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let o=e[0]==null?null:e[0].slice(1);for(let s=1;s<e.length;++s){let i=e[s]==null?null:e[s].slice(1);o=this.computeElementwiseOpOutputShape(o,i)}let n=e.map(s=>s.length);e.indexOf(null)===-1&&Oo(n).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return M(()=>{if(e=e,this.reshapeRequired){let o=[],n=e.map(s=>s.rank);if(n.indexOf(null)===-1){let s=on(n);for(let i of e){let a=i.rank;for(let l=0;l<s-a;++l)i=Ws(i,1);o.push(i)}return this.mergeFunction(o)}else{let s=!1;for(let l of e){let u=l.rank;if(u==null){let c=l.shape,p=c[0],m=c.slice(1).concat([p]),f=R(l,[p].concat(Lo(c.slice(1))));f=Rt(f,[1,0]),f=R(f,m),o.push(f),s=!0}else if(u>1){let c=_r(1,u).concat([0]);o.push(Rt(l,c)),s=!0}else o.push(l)}let i=this.mergeFunction(o),a=i.rank;if(s){if(a==null){let l=i.shape,u=l.length,c=l[u-1],p=[c].concat(l.slice(0,l.length-1));i=R(Rt(R(i,[-1,c]),[1,0]),p)}else if(a>1){let l=[a-1].concat(_r(0,a-1));i=Rt(i,l)}}return i}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;e[0]==null?t=null:t=e[0].slice(1);for(let n=1;n<e.length;++n){let s=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,s)}let o=[];for(let n of e)n!=null&&n[0]!==null&&o.push(n[0]);return o=Oo(o),o.length===1?t=o.concat(t):t=[null].concat(t),t}computeMask(e,t){return M(()=>{if(t==null)return null;if(!Array.isArray(t))throw new P("`mask` should be an Array");if(!Array.isArray(e))throw new P("`inputs` should be an Array");if(t.length!==e.length)throw new P(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(n=>n==null))return null;t=t.map(n=>n==null?n:xe(n,0));let o=t[0];for(let n=1;n<t.length-1;++n)o=fr(o,t[n]);return o})}},c_=(()=>{class r extends js{constructor(t){super(t)}mergeFunction(t){return M(()=>{let o=t[0].clone();for(let n=1;n<t.length;++n)o=U(o,t[n]);return o})}}return r.className="Add",r})();q.registerClass(c_);var p_=(()=>{class r extends js{constructor(t){super(t)}mergeFunction(t){return M(()=>{let o=t[0].clone();for(let n=1;n<t.length;++n)o=D(o,t[n]);return o})}}return r.className="Multiply",r})();q.registerClass(p_);var m_=(()=>{class r extends js{constructor(t){super(t)}mergeFunction(t){return M(()=>{let o=t[0].clone();for(let n=1;n<t.length;++n)o=U(o,t[n]);return D(1/t.length,o)})}}return r.className="Average",r})();q.registerClass(m_);var f_=(()=>{class r extends js{constructor(t){super(t)}mergeFunction(t){return M(()=>{let o=t[0];for(let n=1;n<t.length;++n)o=Gr(o,t[n]);return o})}}return r.className="Maximum",r})();q.registerClass(f_);var h_=(()=>{class r extends js{constructor(t){super(t)}mergeFunction(t){return M(()=>{let o=t[0];for(let n=1;n<t.length;++n)o=fo(o,t[n]);return o})}}return r.className="Minimum",r})();q.registerClass(h_);var d_=(()=>{class r extends js{constructor(t){super(t),this.DEFAULT_AXIS=-1,t==null&&(t={}),this.axis=t.axis==null?this.DEFAULT_AXIS:t.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){if(!(Array.isArray(t)&&Array.isArray(t[0]))||t.length===1)throw new P("A `Concatenate` layer should be called on a list of at least 2 inputs");t=t;let o=!0;for(let s of t)if(s!=null){o=!1;break}if(o)return;let n=[];for(let s=0;s<t.length;++s){let i=t[s].slice();i.splice(this.axis,1);let a=!1;for(let l of n)if(b.arraysEqual(l,i)){a=!0;break}a||n.push(i)}if(n.length>1)throw new P("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(t))}mergeFunction(t){return M(()=>yp(t,this.axis))}computeOutputShape(t){if(!(Array.isArray(t)&&Array.isArray(t[0])))throw new P("A `Concatenate` layer should be called on a list of inputs.");let o=t,n=o[0].slice(),s=this.axis<0?n.length+this.axis:this.axis;for(let i of o.slice(1)){if(n[s]==null||i[s]==null){n[s]=null;break}n[s]+=i[s]}return n}computeMask(t,o){if(o==null)return null;if(!Array.isArray(o))throw new P("`mask` should be an array for Concatenate");if(!Array.isArray(t))throw new P("`inputs` should be an array for Concatenate");if(o.length!==t.length)throw new P(`Mismatch in the length of mask (${o.length}) and the legnth of inputs (${t.length})`);return M(()=>{let n=!0;if(o.forEach(a=>{if(a!=null){n=!1;return}}),n)return null;let s=[];for(let a=0;a<t.length;++a)o[a]==null?s.push(j(He(t[a]),"bool")):o[a].rank<t[a].rank?s.push(xe(o[a],-1)):s.push(o[a]);let i=Gt(s,this.axis);return mc(i,-1,!1)})}getConfig(){let t={axis:this.axis},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Concatenate",r})();q.registerClass(d_);function Mm(r,e){for(;r<0;)r+=e;return r}function m5(r,e,t){if(r.shape.length>3||e.shape.length>3)throw new wt("batchDot is not implemented for tensors of 4D or higher rank yet");if(b.assert(r.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${r.shape.length}`),b.assert(r.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${e.shape.length}`),typeof t=="number"&&(t=[t,t]),r.dtype==="complex64"||e.dtype==="complex64")throw new wt("batchDot is not implemented for complex64-type Tensors yet.");let o=r.shape.length,n=e.shape.length;t==null&&(t=[o-1,n-2]);let s=t;return M(()=>{let i;if(o>n){i=o-n;let l=[];for(let u=0;u<i;++u)l.push(1);e=R(e,e.shape.concat(l))}else if(n>o){i=n-o;let l=[];for(let u=0;u<i;++u)l.push(1);r=R(r,r.shape.concat(l))}else i=0;let a;if(r.shape.length===2&&e.shape.length===2)s[0]===s[1]?a=it(D(r,e),s[0]):a=it(D(Rt(r,[1,0]),e),s[1]);else{let l=s[0]!==r.shape.length-1,u=s[1]===e.shape.length-1;a=Dt(r,e,l,u)}if(i>0){let l;o>n?l=o+n-3:l=o-1;let u=[];for(let c=l;c<l+i;++c)u.push(c);a=Cr(a,u)}return a.shape.length===1&&(a=xe(a,1)),a})}var g_=(()=>{class r extends js{constructor(t){super(t),this.axes=t.axes,this.normalize=t.normalize==null?!1:t.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(t){b.assert(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let o=t[0],n=t[1];if(o.length>3||n.length>3)throw new wt("Dot layer does not support tensors of 4D or higher rank yet.");let s=this.interpretAxes(o,n);if(o[s[0]]!==n[s[1]])throw new P(`Dimension incompatibility: ${o[s[0]]} !== ${n[s[1]]}`)}mergeFunction(t){if(t.length!==2)throw new P(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${t.length} input(s).`);let o=t[0],n=t[1],s;return Array.isArray(this.axes)?s=this.axes.map((i,a)=>Mm(i,t[a].shape.length)):s=[Mm(this.axes,o.shape.length),Mm(this.axes,n.shape.length)],this.normalize&&(o=$m(o,s[0]),n=$m(n,s[1])),m5(o,n,s)}interpretAxes(t,o){let n;return Array.isArray(this.axes)?n=this.axes:n=[Mm(this.axes,t.length),Mm(this.axes,o.length)],n}computeOutputShape(t){b.assert(Array.isArray(t)&&t.length===2&&Array.isArray(t[0])&&Array.isArray(t[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let o=t[0].slice(),n=t[1].slice();if(o.length>3||n.length>3)throw new wt("Dot layer does not support tensors of 4D or higher rank yet.");let s=this.interpretAxes(o,n);o.splice(s[0],1),n.splice(s[1],1),n.splice(0,1);let i=o.concat(n);return i.length===1&&i.push(1),i}computeMask(t,o){return null}getConfig(){let t={axes:this.axes,normalize:this.normalize},o=super.getConfig();return Object.assign(t,o),t}}return r.className="Dot",r})();q.registerClass(g_);var x_=(()=>{class r extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.stddev=t.stddev}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={stddev:this.stddev};return Object.assign(o,t),o}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t);return Ta(()=>U(bp(n.shape,0,this.stddev),n),()=>n,o.training||!1)})}}return r.className="GaussianNoise",r})();q.registerClass(x_);var y_=(()=>{class r extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={rate:this.rate};return Object.assign(o,t),o}call(t,o){return M(()=>{this.invokeCallHook(t,o);let n=xt(t);return this.rate>0&&this.rate<1?Ta(()=>{let i=Math.sqrt(this.rate/(1-this.rate));return D(n,bp(n.shape,1,i))},()=>n,o.training||!1):n})}}return r.className="GaussianDropout",r})();q.registerClass(y_);var b_=(()=>{class r extends Ct{constructor(t){super(t),this.supportsMasking=!0,this.rate=t.rate,this.noiseShape=t.noiseShape}_getNoiseShape(t){return this.noiseShape||xt(t).shape}computeOutputShape(t){return t}getConfig(){let t=super.getConfig(),o={rate:this.rate};return Object.assign(o,t),o}call(t,o){return M(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(t);return Ta(()=>{let i=xt(t),u=-1.6732632423543772*1.0507009873554805,c=Er(to(n),this.rate);c=Sr(c,"float32");let p=((1-this.rate)*(1+this.rate*u**2))**-.5,m=-p*u*this.rate,f=U(D(i,c),D(U(c,-1),u));return U(D(f,p),m)},()=>xt(t),o.training||!1)}return t})}}return r.className="AlphaDropout",r})();q.registerClass(b_);function Bm(r,e,t,o,n,s=.001){let i;if(r.rank===2)i=kf(r,e,t,o,n,s);else if(r.rank===3)i=Ef(r,e,t,o,n,s);else if(r.rank===4)i=Af(r,e,t,o,n,s);else throw new wt(`batchNormalization is not implemented for array of rank ${r.rank} yet`);return i}function f5(r,e,t,o,n=.001){return M(()=>{let s=cl(r,o),i=s.mean,a=s.variance;return[Bm(r,i,a,t,e,n),i,a]})}function h5(r,e,t,o,n=.001){return M(()=>{let s=cl(r,o),i=s.mean,a=s.variance,l=[];for(let h of _r(0,r.rank))o.indexOf(h)!==-1?l.push(1):l.push(r.shape[h]);let u=R(i,l),c=R(a,l),p=e==null?null:R(e,l),m=t==null?null:R(t,l);return[Bm(r,u,c,m,p,n),i,a]})}function d5(r,e,t,o,n=.001){return b.arraysEqual(o.slice().sort(),_r(0,r.rank-1))?f5(r,e,t,o,n):h5(r,e,t,o,n)}var w_=(()=>{class r extends Ct{constructor(t){t==null&&(t={}),super(t),this.supportsMasking=!0,this.axis=t.axis==null?-1:t.axis,this.momentum=t.momentum==null?.99:t.momentum,this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Yt(t.betaInitializer||"zeros"),this.gammaInitializer=Yt(t.gammaInitializer||"ones"),this.movingMeanInitializer=Yt(t.movingMeanInitializer||"zeros"),this.movingVarianceInitializer=Yt(t.movingVarianceInitializer||"ones"),this.betaConstraint=Se(t.betaConstraint),this.gammaConstraint=Se(t.gammaConstraint),this.betaRegularizer=te(t.betaRegularizer),this.gammaRegularizer=te(t.gammaRegularizer)}build(t){t=At(t);let o=this.axis>=0?this.axis:this.axis+t.length,n=t[o];if(n==null)throw new P(`Axis ${o} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(t)}.`);this.inputSpec=[new Qt({ndim:t.length,axes:{[o]:n}})];let s=[n];this.scale&&(this.gamma=this.addWeight("gamma",s,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight("beta",s,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight("moving_mean",s,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight("moving_variance",s,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(t,o){return M(()=>{let n=o.training==null?!1:o.training,s=xt(t),i=s.shape,a=i.length,l=_r(0,a),u=this.axis>=0?this.axis:this.axis+a;l.splice(u,1);let c=_o(1,a);c[u]=i[u];let p=l.slice();p.sort();let m=!b.arraysEqual(p,_r(0,a).slice(0,a-1)),f=()=>{if(m){let w=R(this.movingMean.read(),c),C=R(this.movingVariance.read(),c),T=this.center?R(this.beta.read(),c):null,A=this.scale?R(this.gamma.read(),c):null;return Bm(s,w,C,T,A,this.epsilon)}else return Bm(s,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!n)return f();let[h,g,d]=d5(s,this.gamma.read(),this.beta.read(),l,this.epsilon),x=(w,C,T)=>{M(()=>{let A=1-T,$=w.read(),_=D(et($,C),A);w.write(et($,_))})};return(()=>{x(this.movingMean,g,this.momentum),x(this.movingVariance,d,this.momentum)})(),h})}getConfig(){let t={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:se(this.betaInitializer),gammaInitializer:se(this.gammaInitializer),movingMeanInitializer:se(this.movingMeanInitializer),movingVarianceInitializer:se(this.movingVarianceInitializer),betaRegularizer:qt(this.betaRegularizer),gammaRegularizer:qt(this.gammaRegularizer),betaConstraint:ve(this.betaConstraint),gammaConstraint:ve(this.gammaConstraint)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="BatchNormalization",r})();q.registerClass(w_);var C_=(()=>{class r extends Ct{constructor(t){if(t==null&&(t={}),super(t),this.axis=t.axis==null?-1:t.axis,typeof this.axis=="number"){if(!Number.isInteger(this.axis))throw new Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let o of this.axis)if(!Number.isInteger(o))throw new Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw new Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=t.epsilon==null?.001:t.epsilon,this.center=t.center==null?!0:t.center,this.scale=t.scale==null?!0:t.scale,this.betaInitializer=Yt(t.betaInitializer||"zeros"),this.gammaInitializer=Yt(t.gammaInitializer||"ones"),this.betaRegularizer=te(t.betaRegularizer),this.gammaRegularizer=te(t.gammaRegularizer),this.supportsMasking=!0}build(t){t=At(t);let o=t.length;typeof this.axis=="number"&&(this.axis=[this.axis]);for(let i=0;i<this.axis.length;++i)this.axis[i]<0&&(this.axis[i]+=o);for(let i of this.axis)if(i<0||i>=o)throw new Error(`Invalid axis: ${i}`);if(this.axis.length!==Oo(this.axis).length)throw new Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(i=>t[i]),s=!0;this.scale?this.gamma=this.addWeight("gamma",n,"float32",this.gammaInitializer,this.gammaRegularizer,s):this.gamma=null,this.center?this.beta=this.addWeight("beta",n,"float32",this.betaInitializer,this.betaRegularizer,s):this.beta=null,this.built=!0}call(t,o){let n=xt(t),s=n.shape,i=s.length;return M(()=>{let{mean:l,variance:u}=cl(n,this.axis,!0),c=_o(1,i);for(let d of this.axis)c[d]=s[d];let p=d=>d!=null&&d.shape.length!==i?R(d,c):d,m=this.scale?p(this.gamma.read()):null,f=this.center?p(this.beta.read()):null,h=[],g=[];for(let d=0;d<i;++d)this.axis.indexOf(d)!==-1?(h.push(s[d]),g.push(1)):(h.push(1),g.push(s[d]));return l=ir(l,h),u=ir(u,h),m!=null&&(m=ir(m,g)),f!=null&&(f=ir(f,g)),Bm(n,l,u,f,m,this.epsilon)})}getConfig(){let t={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:se(this.betaInitializer),gammaInitializer:se(this.gammaInitializer),betaRegularizer:qt(this.betaRegularizer),gammaRegularizer:qt(this.gammaRegularizer)},o=super.getConfig();return Object.assign(t,o),t}}return r.className="LayerNormalization",r})();q.registerClass(C_);function g5(r,e,t){return M(()=>{if(r.rank!==4)throw new P(`temporalPadding expects input tensor to be 4-D, but received a ${r.rank}-D tensor.`);if(e==null&&(e=[[1,1],[1,1]]),e.length!==2||e[0].length!==2||e[1].length!==2)throw new P("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(t==null&&(t=Fr()),t!=="channelsLast"&&t!=="channelsFirst")throw new P(`Unknown data format: ${t}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let o;return t==="channelsFirst"?o=[[0,0],[0,0],e[0],e[1]]:o=[[0,0],e[0],e[1],[0,0]],Ar(r,o)})}var v_=(()=>{class r extends Ct{constructor(t){if(t==null&&(t={}),super(t),this.dataFormat=t.dataFormat==null?Fr():t.dataFormat,t.padding==null)this.padding=[[1,1],[1,1]];else if(typeof t.padding=="number")this.padding=[[t.padding,t.padding],[t.padding,t.padding]];else{if(t.padding=t.padding,t.padding.length!==2)throw new P(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${t.padding.length} array.`);let o,n;if(typeof t.padding[0]=="number")o=[t.padding[0],t.padding[0]],n=[t.padding[1],t.padding[1]];else{if(t.padding=t.padding,t.padding[0].length!==2)throw new P(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${t.padding[0].length} array.`);if(o=t.padding[0],t.padding[1].length!==2)throw new P(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${t.padding[1].length} array.`);n=t.padding[1]}this.padding=[o,n]}this.inputSpec=[new Qt({ndim:4})]}computeOutputShape(t){t=At(t);let o,n;return this.dataFormat==="channelsFirst"?(t[2]!=null&&t[2]>=0?o=t[2]+this.padding[0][0]+this.padding[0][1]:o=null,t[3]!=null&&t[3]>=0?n=t[3]+this.padding[1][0]+this.padding[1][1]:n=null,[t[0],t[1],o,n]):(t[1]!=null&&t[1]>=0?o=t[1]+this.padding[0][0]+this.padding[0][1]:o=null,t[2]!=null&&t[2]>=0?n=t[2]+this.padding[1][0]+this.padding[1][1]:n=null,[t[0],o,n,t[3]])}call(t,o){return M(()=>g5(xt(t),this.padding,this.dataFormat))}getConfig(){let t={padding:this.padding,dataFormat:this.dataFormat},o=super.getConfig();return Object.assign(t,o),t}}return r.className="ZeroPadding2D",r})();q.registerClass(v_);function Hx(r,e,t,o,n,s){return M(()=>{me(n),s0(s),Rr(o),t==null&&(t=[1,1]),o==null&&(o="valid"),n==null&&(n=Fr()),s==null&&(s="max"),r=Pm(r,n);let i,a=o==="same"?"same":"valid";return s==="max"?i=la(r,e,t,a):i=Qi(r,e,t,a),n==="channelsFirst"&&(i=Rt(i,[0,3,1,2])),i})}function S_(r,e,t,o,n,s){return M(()=>{me(n),s0(s),Rr(o),t==null&&(t=[1,1,1]),o==null&&(o="valid"),n==null&&(n=Fr()),s==null&&(s="max"),r=$0(r,n);let i,a=o==="same"?"same":"valid";return s==="max"?i=Zf(r,e,t,a):i=If(r,e,t,a),n==="channelsFirst"&&(i=Rt(i,[0,4,1,2,3])),i})}var Bx=class extends Ct{constructor(e){if(e.poolSize==null&&(e.poolSize=2),super(e),typeof e.poolSize=="number")this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]=="number")this.poolSize=e.poolSize;else throw new P(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(Re(this.poolSize,"poolSize"),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides=="number")this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]=="number")this.strides=e.strides;else throw new P(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);Re(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,Rr(this.padding),this.inputSpec=[new Qt({ndim:3})]}computeOutputShape(e){e=At(e);let t=qr(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return M(()=>{this.invokeCallHook(e,t),e=Ws(xt(e),2);let o=this.poolingFunction(xt(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,"channelsLast");return Cr(o,[2])})}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},N_=(()=>{class r extends Bx{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return me(i),Rr(s),Hx(t,o,n,s,i,"max")}}return r.className="MaxPooling1D",r})();q.registerClass(N_);var T_=(()=>{class r extends Bx{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return me(i),Rr(s),Hx(t,o,n,s,i,"avg")}}return r.className="AveragePooling1D",r})();q.registerClass(T_);var Vx=class extends Ct{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new P(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];Re(this.poolSize,"poolSize"),Re(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,me(this.dataFormat),Rr(this.padding),this.inputSpec=[new Qt({ndim:4})]}computeOutputShape(e){e=At(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],o=this.dataFormat==="channelsFirst"?e[3]:e[2];return t=qr(t,this.poolSize[0],this.padding,this.strides[0]),o=qr(o,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,o]:[e[0],t,o,e[3]]}call(e,t){return M(()=>(this.invokeCallHook(e,t),this.poolingFunction(xt(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},I_=(()=>{class r extends Vx{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return me(i),Rr(s),Hx(t,o,n,s,i,"max")}}return r.className="MaxPooling2D",r})();q.registerClass(I_);var k_=(()=>{class r extends Vx{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return me(i),Rr(s),Hx(t,o,n,s,i,"avg")}}return r.className="AveragePooling2D",r})();q.registerClass(k_);var Gx=class extends Ct{constructor(e){if(e.poolSize==null&&(e.poolSize=[2,2,2]),super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new P(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];Re(this.poolSize,"poolSize"),Re(this.strides,"strides"),this.padding=e.padding==null?"valid":e.padding,this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,me(this.dataFormat),Rr(this.padding),this.inputSpec=[new Qt({ndim:5})]}computeOutputShape(e){e=At(e);let t=this.dataFormat==="channelsFirst"?e[2]:e[1],o=this.dataFormat==="channelsFirst"?e[3]:e[2],n=this.dataFormat==="channelsFirst"?e[4]:e[3];return t=qr(t,this.poolSize[0],this.padding,this.strides[0]),o=qr(o,this.poolSize[1],this.padding,this.strides[1]),n=qr(n,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat==="channelsFirst"?[e[0],e[1],t,o,n]:[e[0],t,o,n,e[4]]}call(e,t){return M(()=>(this.invokeCallHook(e,t),this.poolingFunction(xt(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},E_=(()=>{class r extends Gx{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return me(i),Rr(s),S_(t,o,n,s,i,"max")}}return r.className="MaxPooling3D",r})();q.registerClass(E_);var A_=(()=>{class r extends Gx{constructor(t){super(t)}poolingFunction(t,o,n,s,i){return me(i),Rr(s),S_(t,o,n,s,i,"avg")}}return r.className="AveragePooling3D",r})();q.registerClass(A_);var Wx=class extends Ct{constructor(e){super(e),this.inputSpec=[new Qt({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new wt}},$_=(()=>{class r extends Wx{constructor(t){super(t||{})}call(t,o){return M(()=>{let n=xt(t);return oe(n,1)})}}return r.className="GlobalAveragePooling1D",r})();q.registerClass($_);var D_=(()=>{class r extends Wx{constructor(t){super(t||{})}call(t,o){return M(()=>{let n=xt(t);return Ye(n,1)})}}return r.className="GlobalMaxPooling1D",r})();q.registerClass(D_);var Ux=class extends Ct{constructor(e){super(e),this.dataFormat=e.dataFormat==null?"channelsLast":e.dataFormat,me(this.dataFormat),this.inputSpec=[new Qt({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat==="channelsLast"?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new wt}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},R_=(()=>{class r extends Ux{call(t,o){return M(()=>{let n=xt(t);return this.dataFormat==="channelsLast"?oe(n,[1,2]):oe(n,[2,3])})}}return r.className="GlobalAveragePooling2D",r})();q.registerClass(R_);var __=(()=>{class r extends Ux{call(t,o){return M(()=>{let n=xt(t);return this.dataFormat==="channelsLast"?Ye(n,[1,2]):Ye(n,[2,3])})}}return r.className="GlobalMaxPooling2D",r})();q.registerClass(__);var Kx=class extends Ct{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null?this.layer.trainable:!1}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,o={}){let n=t.layer,s=lo(n,o);delete t.layer;let i={layer:s};return Object.assign(i,t),new e(i)}},F_=(()=>{class r extends Kx{constructor(t){super(t),this.supportsMasking=!0}build(t){if(t=At(t),t.length<3)throw new P(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(t)}`);this.inputSpec=[{shape:t}];let o=[t[0]].concat(t.slice(2));this.layer.built||(this.layer.build(o),this.layer.built=!0),super.build(t)}computeOutputShape(t){t=At(t);let o=[t[0]].concat(t.slice(2)),n=this.layer.computeOutputShape(o),s=t[1];return[n[0],s].concat(n.slice(1))}call(t,o){return M(()=>(t=xt(t),F0((a,l)=>[xt(this.layer.call(a,o)),[]],t,[],!1,null,null,!1,!0)[1]))}}return r.className="TimeDistributed",r})();q.registerClass(F_);function x5(r){An(MD,"BidirectionalMergeMode",r)}var y5="concat",O_=(()=>{class r extends Kx{constructor(t){super(t);let o=t.layer.getConfig(),n={};n.className=t.layer.getClassName(),n.config=o,this.forwardLayer=lo(n),o.goBackwards=o.goBackwards!==!0;let s={};if(s.className=t.layer.getClassName(),s.config=o,this.backwardLayer=lo(s),this.forwardLayer.name="forward_"+this.forwardLayer.name,this.backwardLayer.name="backward_"+this.backwardLayer.name,this.mergeMode=t.mergeMode===void 0?y5:t.mergeMode,x5(this.mergeMode),t.weights)throw new wt("weights support is not implemented for Bidirectional layer yet.");this._stateful=t.layer.stateful,this.returnSequences=t.layer.returnSequences,this.returnState=t.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=t.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(t){this._trainable=t,this.forwardLayer!=null&&(this.forwardLayer.trainable=t),this.backwardLayer!=null&&(this.backwardLayer.trainable=t)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(t){let o=t.length,n=Math.floor(o/2);this.forwardLayer.setWeights(t.slice(0,n)),this.backwardLayer.setWeights(t.slice(n))}computeOutputShape(t){let o=this.forwardLayer.computeOutputShape(t);Array.isArray(o)&&Array.isArray(o[0])||(o=[o]),o=o;let n,s,i;return this.returnState&&(i=o.slice(1)),n=o[0],n=n,this.mergeMode==="concat"?(n[n.length-1]*=2,s=[n]):this.mergeMode==null?s=[n,n.slice()]:s=[n],this.returnState?this.mergeMode==null?s.concat(i).concat(i.slice()):[n].concat(i).concat(i.slice()):er(s)}apply(t,o){let n=o==null?null:o.initialState,s=o==null?null:o.constants;o==null&&(o={});let i=_0(t,n,s,this.numConstants);if(t=i.inputs,n=i.initialState,s=i.constants,Array.isArray(t)&&(n=t.slice(1),t=t[0]),(n==null||n.length===0)&&s==null)return super.apply(t,o);let a=[],l=[];if(n!=null){let c=n.length;if(c%2>0)throw new P("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");o.initialState=n,a.push(...n);let p=n.map(m=>new Qt({shape:m.shape}));this.forwardLayer.stateSpec=p.slice(0,c/2),this.backwardLayer.stateSpec=p.slice(c/2),l.push(...p)}if(s!=null)throw new wt("Support for constants in Bidirectional layers is not implemented yet.");let u=a[0]instanceof Nr;for(let c of a)if(c instanceof Nr!==u)throw new P("The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors");if(u){let c=[t].concat(a),p=this.inputSpec.concat(l),m=this.inputSpec;this.inputSpec=p;let f=super.apply(c,o);return this.inputSpec=m,f}else return super.apply(t,o)}call(t,o){return M(()=>{let n=o.initialState,s,i;if(n==null)s=this.forwardLayer.call(t,o),i=this.backwardLayer.call(t,o);else{let u=n.slice(0,n.length/2),c=n.slice(n.length/2);s=this.forwardLayer.call(t,Object.assign(o,{initialState:u})),i=this.backwardLayer.call(t,Object.assign(o,{initialState:c}))}let a;this.returnState&&(Array.isArray(s)&&(a=s.slice(1).concat(i.slice(1))),s=s[0],i=i[0]),this.returnSequences&&(i=Ve(i,1));let l;return this.mergeMode==="concat"?l=yp([s,i]):this.mergeMode==="sum"?l=U(s,i):this.mergeMode==="ave"?l=D(.5,U(s,i)):this.mergeMode==="mul"?l=D(s,i):this.mergeMode==null&&(l=[s,i]),this.returnState?this.mergeMode==null?l.concat(a):[l].concat(a):l})}resetStates(t){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(t){rn(this.forwardLayer.name,()=>{this.forwardLayer.build(t)}),rn(this.backwardLayer.name,()=>{this.backwardLayer.build(t)}),this.built=!0}computeMask(t,o){Array.isArray(o)&&(o=o[0]);let n;if(this.returnSequences?this.mergeMode==null?n=[o,o]:n=o:this.mergeMode==null?n=[null,null]:n=null,this.returnState){let i=this.forwardLayer.states.map(a=>null);return Array.isArray(n)?n.concat(i).concat(i):[n].concat(i).concat(i)}else return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(t){super.setFastWeightInitDuringBuild(t),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(t),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(t)}getConfig(){let t={mergeMode:this.mergeMode},o=super.getConfig();return Object.assign(t,o),t}static fromConfig(t,o){let n=lo(o.layer);if(delete o.layer,o.numConstants!=null)throw new wt("Deserialization of a Bidirectional layer with numConstants present is not supported yet.");let s=o;return s.layer=n,new t(s)}}return r.className="Bidirectional",r})();q.registerClass(O_);var L_=(()=>{class r extends Ct{constructor(t){super(t),this.scale=t.scale,t.offset?this.offset=t.offset:this.offset=0}getConfig(){let t={scale:this.scale,offset:this.offset},o=super.getConfig();return Object.assign(t,o),t}call(t,o){return M(()=>(t=xt(t),t.dtype!=="float32"&&(t=Sr(t,"float32")),U(D(t,this.scale),this.offset)))}}return r.className="Rescaling",r})();q.registerClass(L_);var{resizeBilinear:b5,cropAndResize:w5}=Je,P_=(()=>{class r extends Ct{constructor(t){super(t),this.height=t.height,this.width=t.width}centerCrop(t,o,n,s,i,a,l,u){return M(()=>{let c,p=!1,m=o/a,f=n/l,h=(s+o)/a,g=(i+n)/l,d=[m,f,h,g],x=[];t.rank===3?(p=!0,c=be([t])):c=t;for(let A=0;A<c.shape[0];A++)x.push(d);let y=qe(x,[x.length,4]),w=Sn(0,x.length,1,"int32"),T=w5(c,y,w,[s,i],"nearest");return p?Sr(xt(We(T)),u):Sr(T,u)})}upsize(t,o,n,s){return M(()=>{let i=b5(t,[o,n]);return Sr(i,s)})}call(t,o){return M(()=>{let n=xt(t),s=n.dtype,i=n.shape,a=i[i.length-3],l=i[i.length-2],u=0;a!==this.height&&(u=Math.floor((a-this.height)/2));let c=0;return l!==this.width&&(c=Math.floor((l-this.width)/2),c===0&&(c=1)),u>=0&&c>=0?this.centerCrop(n,u,c,this.height,this.width,a,l,s):this.upsize(t,this.height,this.width,s)})}getConfig(){let t={height:this.height,width:this.width},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){t=At(t);let o=t.length-3,n=t.length-2;return t[o]=this.height,t[n]=this.width,t}}return r.className="CenterCrop",r})();q.registerClass(P_);function z_(r,e,t,o){let n=xt(r);if(n.dtype!=="int32"&&(n=Sr(n,"int32")),e==="int")return n;let s=n.shape;if(n.rank===0&&(n=xe(n,-1)),e==="oneHot"&&n.shape[n.shape.length-1]!==1&&(n=xe(n,-1)),n.rank>2)throw new P(`When outputMode is not int, maximum output rank is 2 Received outputMode ${e} and input shape ${s} which would result in output rank ${n.rank}.`);let i=["multiHot","oneHot"].includes(e),a=n,l;if(typeof o<"u"&&e==="count"?l=jp(a,o,t,i):l=jp(a,[],t,i),e!=="tfIdf")return l;if(o)return D(l,o);throw new P("When outputMode is 'tfIdf', weights must be provided.")}var M_=(()=>{class r extends Ct{constructor(t){super(t),this.numTokens=t.numTokens,t.outputMode?this.outputMode=t.outputMode:this.outputMode="multiHot"}getConfig(){let t={numTokens:this.numTokens,outputMode:this.outputMode},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){return t=At(t),t==null?[this.numTokens]:this.outputMode==="oneHot"&&t[t.length-1]!==1?(t.push(this.numTokens),t):(t[t.length-1]=this.numTokens,t)}call(t,o){return M(()=>{t=xt(t),t.dtype!=="int32"&&(t=Sr(t,"int32"));let n;if(typeof o.countWeights<"u"){if(this.outputMode!=="count")throw new P(`countWeights is not used when outputMode !== count.
              Received countWeights=${o.countWeights}`);n=xt(o.countWeights)}let s=Ye(t),i=Ds(t),a=ye(this.numTokens,s).bufferSync().get(0),l=Er(i,0).bufferSync().get(0);if(!(a&&l))throw new P(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return z_(t,this.outputMode,this.numTokens,n)})}}return r.className="CategoryEncoding",r})();q.registerClass(M_);var v5=["bilinear","nearest"],B_=new Set(v5),V_=(()=>{class r extends Ct{constructor(t){if(super(t),this.height=t.height,this.width=t.width,t.interpolation)if(B_.has(t.interpolation))this.interpolation=t.interpolation;else throw new P(`Invalid interpolation parameter: ${t.interpolation} is not implemented`);else this.interpolation="bilinear";this.cropToAspectRatio=!!t.cropToAspectRatio}computeOutputShape(t){t=At(t);let o=t[2];return[this.height,this.width,o]}getConfig(){let t={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},o=super.getConfig();return Object.assign(t,o),t}call(t,o){return M(()=>{let n=[this.height,this.width];if(this.interpolation==="bilinear")return Je.resizeBilinear(t,n,!this.cropToAspectRatio);if(this.interpolation==="nearest")return Je.resizeNearestNeighbor(t,n,!this.cropToAspectRatio);throw new Error(`Interpolation is ${this.interpolation} but only ${[...B_]} are supported`)})}}return r.className="Resizing",r})();q.registerClass(V_);var G_=(()=>{class r{constructor(t){this.seed=t}next(){if(this.seed!==void 0)return this.seed++}}return r.className="RandomSeed",r})();var W_=(()=>{class r extends Ct{constructor(t){super(t),this.randomGenerator=new G_(t.seed)}getConfig(){let t={seed:this.randomGenerator.seed},o=super.getConfig();return Object.assign(t,o),t}}return r.className="BaseRandomLayer",r})();var S5=["bilinear","nearest"],U_=new Set(S5),H_=(()=>{class r extends W_{constructor(t){super(t);let{factor:o,interpolation:n="bilinear"}=t;if(this.factor=o,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new P(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new P(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new P(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n)if(U_.has(n))this.interpolation=n;else throw new P(`Invalid interpolation parameter: ${n} is not implemented`)}getConfig(){let t={factor:this.factor,interpolation:this.interpolation},o=super.getConfig();return Object.assign(t,o),t}computeOutputShape(t){t=At(t);let o=t[2];return[this.imgHeight,-1,o]}call(t,o){return M(()=>{let n=xt(t);this.imgHeight=n.shape[n.shape.length-3];let s=n.shape[n.shape.length-2];this.widthFactor=to([1],1+this.widthLower,1+this.widthUpper,"float32",this.randomGenerator.next());let i=this.widthFactor.dataSync()[0]*s;i=Math.round(i);let a=[this.imgHeight,i];switch(this.interpolation){case"bilinear":return Je.resizeBilinear(t,a);case"nearest":return Je.resizeNearestNeighbor(t,a);default:throw new Error(`Interpolation is ${this.interpolation}
          but only ${[...U_]} are supported`)}})}}return r.className="RandomWidth",r})();q.registerClass(H_);var F5=Dp(Zp());var R5=Dp(Zp());var Gve=Symbol("out"),Wve=Symbol("field"),Uve=Symbol("quote"),Hve=Symbol("quoteafterquote"),Kve=Symbol("quoteinquote");var H5=gr.whereImpl,q_=(()=>{class r extends Fn{nextDataId(){return r.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Ra(this,vo())}write(t,o,n){this.firstUse&&(this.firstUse=!1,L().get("IS_NODE")&&I.warn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
        ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=t.data.get(o.dataId).values,l=t.data.get(n.dataId).values,u=t.data.get(s.dataId).values,c=t.data.get(i.dataId).values[0],[p,m,f,h,g]=bd(a,o.shape,o.dtype,l,n.dtype,u,c);return[t.makeTensorInfo(m,o.dtype,p),t.makeTensorInfo([m[0]],n.dtype,f),t.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(d=>Number(d)))),t.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var uL={kernelName:Bu,backendName:"cpu",kernelFunc:rZ};function oZ(r){let{inputs:e,backend:t}=r,{inputIndices:o,inputShape:n,newShape:s}=e;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(t.data.get(n.dataId).values),a=t.data.get(o.dataId).values,l=Array.from(t.data.get(s.dataId).values),[u,c,p]=wd(a,o.shape,o.dtype,i,l);return[t.makeTensorInfo(c,o.dtype,u),t.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var cL={kernelName:Vu,backendName:"cpu",kernelFunc:oZ};function nZ(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${s.shape}`);if(n.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let i=t.data.get(o.dataId).values,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,[u,c]=sp(i,o.shape,o.dtype,a,l,!0);return t.makeTensorInfo(c,o.dtype,u)}var pL={kernelName:Gu,backendName:"cpu",kernelFunc:nZ};function sZ(r){let{inputs:e,backend:t}=r,{data:o,indices:n,segmentIds:s}=e;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${s.shape}`);if(n.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let i=t.data.get(o.dataId).values,a=t.data.get(n.dataId).values,l=t.data.get(s.dataId).values,[u,c]=sp(i,o.shape,o.dtype,a,l);return t.makeTensorInfo(c,o.dtype,u)}var mL={kernelName:Wu,backendName:"cpu",kernelFunc:sZ};function iZ(r){let{inputs:e,backend:t,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:i}=e,{outputShape:a}=o,{sliceRank:l,numUpdates:u,sliceSize:c,strides:p,outputSize:m}=I.calculateShapes(s,n,a),f=!1,h=t.bufferSync(n),g;switch(s.dtype){case"bool":{let d=t.bufferSync(s),x=!!t.data.get(i.dataId).values[0];g=Jo(h,d,a,m,c,u,l,p,x,f);break}case"float32":{let d=t.bufferSync(s),x=t.data.get(i.dataId).values[0];g=Jo(h,d,a,m,c,u,l,p,x,f);break}case"int32":{let d=t.bufferSync(s),x=t.data.get(i.dataId).values[0];g=Jo(h,d,a,m,c,u,l,p,x,f);break}case"string":{let d=t.bufferSync(s),x=b.decodeString(t.data.get(i.dataId).values[0]);g=Jo(h,d,a,m,c,u,l,p,x,f);break}default:throw new Error(`Unsupported type ${s.dtype}`)}return t.makeTensorInfo(a,g.dtype,g.values)}var fL={kernelName:Uu,backendName:"cpu",kernelFunc:iZ};function aZ(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{numOrSizeSplits:s,axis:i}=o,a=b.parseAxisParam(i,n.shape)[0],l=I.prepareSplitSize(n,s,a),u=new Array(n.shape.length).fill(0),c=n.shape.slice();return l.map(p=>{let m=[...c];m[a]=p;let f=$o({inputs:{x:n},backend:t,attrs:{begin:u,size:m}});return u[a]+=p,f})}var hL={kernelName:Wi,backendName:"cpu",kernelFunc:aZ};var dL={kernelName:Hu,backendName:"cpu",kernelFunc:({inputs:r,backend:e})=>{let{x:t}=r,o=e;Z(t,"square");let n=o.data.get(t.dataId).values,s=new Float32Array(n.length);for(let a=0;a<n.length;++a){let l=n[a];s[a]=l*l}return{dataId:o.write(s,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};var lZ=vt(ks,(r,e)=>{let t=e;return isNaN(r)?NaN:r>0?1:t.alpha}),gL={kernelName:ks,backendName:"cpu",kernelFunc:lZ};function uZ(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{begin:s,end:i,strides:a,beginMask:l,endMask:u,ellipsisMask:c,newAxisMask:p,shrinkAxisMask:m}=o;Z(n,"stridedSlice");let{finalShapeSparse:f,finalShape:h,isIdentity:g,sliceDim0:d,isSimpleSlice:x,begin:y,end:w,strides:C}=Qe.sliceInfo(n.shape,s,i,a,l,u,c,p,m),T;if(g)T=zt({inputs:{x:n},backend:t,attrs:{shape:h}});else if(d||x){b.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let A=Qe.computeOutShape(y,w,C),$=$o({inputs:{x:n},backend:t,attrs:{begin:y,size:A}});T=zt({inputs:{x:$},backend:t,attrs:{shape:h}}),t.disposeIntermediateTensorInfo($)}else{let A=t.bufferSync(n),$=Cd(f,A,C,y);T=t.makeTensorInfo(h,$.dtype,$.values)}return T}var xL={kernelName:Ku,backendName:"cpu",kernelFunc:uZ};function cZ(r){let{inputs:e,backend:t,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:l,preserveShortSequences:u}=o,{data:c,dataSplits:p}=e,m=t.data.get(c.dataId).values,f=t.data.get(p.dataId).values,[h,g]=vd(m,f,n,s,i,a,l,u);return[t.makeTensorInfo([h.length],"string",h),t.makeTensorInfo(p.shape,"int32",g)]}var yL={kernelName:qu,backendName:"cpu",kernelFunc:cZ};function pZ(r){let{inputs:e,backend:t,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:i}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=t.data.get(s.dataId).values,l=t.data.get(i.dataId).values[0],[u,c,p]=Sd(a,l,n),m=c.length;return[t.makeTensorInfo([m,2],"int32",u),t.makeTensorInfo([m],"string",c),t.makeTensorInfo([2],"int32",new Int32Array(p))]}var bL={kernelName:ju,backendName:"cpu",kernelFunc:pZ};function mZ(r){let{inputs:e,backend:t,attrs:o}=r,{numBuckets:n}=o,{input:s}=e;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=t.data.get(s.dataId).values,a=Nd(i,n);return t.makeTensorInfo(s.shape,"int32",a)}var wL={kernelName:Xu,backendName:"cpu",kernelFunc:mZ};var fZ=vt(Ts,r=>Math.tan(r)),CL={kernelName:Ts,backendName:"cpu",kernelFunc:fZ};var hZ=vt(Is,r=>Math.tanh(r)),vL={kernelName:Is,backendName:"cpu",kernelFunc:hZ};function dZ(r){let{inputs:e,backend:t}=r,{tensor:o,indices:n,updates:s}=e,{sliceRank:i,numUpdates:a,sliceSize:l,strides:u,outputSize:c}=I.calculateShapes(s,n,o.shape),p=!1,m=t.bufferSync(n),f=t.bufferSync(s),h=t.bufferSync(o),g=Jo(m,f,o.shape,c,l,a,i,u,h,p);return t.makeTensorInfo(o.shape,g.dtype,g.values)}var SL={kernelName:zu,backendName:"cpu",kernelFunc:dZ};function gZ(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{reps:s}=o;Z(n,"tile");let i=Td(t.bufferSync(n),s);return t.makeTensorInfo(i.shape,i.dtype,i.values)}var NL={kernelName:pn,backendName:"cpu",kernelFunc:gZ};function xZ(r){let{inputs:e,backend:t,attrs:o}=r,{x:n}=e,{k:s,sorted:i}=o;Z(n,"topk");let a=t.data.get(n.dataId).values,[l,u]=Id(a,n.shape,n.dtype,s,i);return[t.makeTensorInfo(l.shape,l.dtype,l.values),t.makeTensorInfo(u.shape,u.dtype,u.values)]}var TL={kernelName:Yu,backendName:"cpu",kernelFunc:xZ};function yZ(r){let{inputs:e,attrs:t,backend:o}=r,{image:n,transforms:s}=e,{interpolation:i,fillMode:a,fillValue:l,outputShape:u}=t,[c,p,m,f]=n.shape,[h,g]=u??[p,m],d=[c,h,g,f],x=b.computeStrides(n.shape),y=x[0],w=x[1],C=x[2],T=b.computeStrides(d),A=T[0],$=T[1],_=T[2],O=b.getTypedArrayFromDType(n.dtype,b.sizeFromShape(d));O.fill(l);let z=o.data.get(n.dataId).values,V=o.data.get(s.dataId).values;for(let W=0;W<c;++W){let H=s.shape[0]===1?V:V.subarray(W*8,W*8+8);for(let K=0;K<h;++K)for(let Y=0;Y<g;++Y)for(let J=0;J<f;++J){let X,Q=H[6]*Y+H[7]*K+1;if(Q===0)continue;let ot=(H[0]*Y+H[1]*K+H[2])/Q,nt=(H[3]*Y+H[4]*K+H[5])/Q,lt=IL(ot,m,a),at=IL(nt,p,a);switch(i){case"nearest":X=SZ(z,p,m,y,w,C,W,at,lt,J,l);break;case"bilinear":X=NZ(z,p,m,y,w,C,W,at,lt,J,l);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}let pt=W*A+K*$+Y*_+J;O[pt]=X}return o.makeTensorInfo(d,n.dtype,O)}return{dataId:o.write(O,d,n.dtype),shape:n.shape,dtype:n.dtype}}var kL={kernelName:Zu,backendName:"cpu",kernelFunc:yZ};function IL(r,e,t){switch(t){case"reflect":return bZ(r,e);case"wrap":return wZ(r,e);case"nearest":return vZ(r,e);case"constant":default:return CZ(r,e)}}function bZ(r,e){let t=r;if(t<0)if(e<=1)t=0;else{let o=2*e;t<o&&(t=o*Math.trunc(-t/o)+t),t=t<-e?t+o:-t-1}else if(t>e-1)if(e<=1)t=0;else{let o=2*e;t-=o*Math.trunc(t/o),t>=e&&(t=o-t-1)}return b.clamp(0,t,e-1)}function wZ(r,e){let t=r;if(t<0)if(e<=1)t=0;else{let o=e-1;t+=e*(Math.trunc(-t/o)+1)}else if(t>e-1)if(e<=1)t=0;else{let o=e-1;t-=e*Math.trunc(t/o)}return b.clamp(0,t,e-1)}function CZ(r,e){return r}function vZ(r,e){return b.clamp(0,r,e-1)}function Hm(r,e,t,o,n,s,i,a,l,u,c){let p=i*o+a*n+l*s+u;return 0<=a&&a<e&&0<=l&&l<t?r[p]:c}function SZ(r,e,t,o,n,s,i,a,l,u,c){let p=Math.round(a),m=Math.round(l);return Hm(r,e,t,o,n,s,i,p,m,u,c)}function NZ(r,e,t,o,n,s,i,a,l,u,c){let p=Math.floor(a),m=Math.floor(l),f=p+1,h=m+1,g=(h-l)*Hm(r,e,t,o,n,s,i,p,m,u,c)+(l-m)*Hm(r,e,t,o,n,s,i,p,h,u,c),d=(h-l)*Hm(r,e,t,o,n,s,i,f,m,u,c)+(l-m)*Hm(r,e,t,o,n,s,i,f,h,u,c);return(f-a)*g+(a-p)*d}function TZ(r){let{inputs:e,attrs:t,backend:o}=r,{axis:n}=t,{x:s}=e;Z(s,"unique");let i=o.data.get(s.dataId).values,{outputValues:a,outputShape:l,indices:u}=kd(i,n,s.shape,s.dtype);return[o.makeTensorInfo(l,s.dtype,a),o.makeTensorInfo([u.length],"int32",u)]}var EL={kernelName:Ju,backendName:"cpu",kernelFunc:TZ};function IZ(r){let{inputs:e,backend:t,attrs:o}=r,{value:n}=e,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n.shape.length,a=n.shape[s],l=new Array(i-1),u=0;for(let f=0;f<i;f++)f!==s&&(l[u++]=n.shape[f]);let c=new Array(i).fill(0),p=n.shape.slice();p[s]=1;let m=new Array(a);for(let f=0;f<m.length;f++){c[s]=f;let h=$o({inputs:{x:n},backend:t,attrs:{begin:c,size:p}});m[f]=zt({inputs:{x:h},backend:t,attrs:{shape:l}}),t.disposeIntermediateTensorInfo(h)}return m}var AL={kernelName:Hi,backendName:"cpu",kernelFunc:IZ};function kZ(r){let{inputs:e,backend:t,attrs:o}=r,{x:n,segmentIds:s}=e,{numSegments:i}=o;Z(n,"unsortedSegmentSum");let a=n.shape.length,l=s.shape.length,u=[],c=[],p=a-l,m=s;for(let h=0;h<p;++h){let g=Ap({inputs:{input:m},backend:t,attrs:{dim:h+1}});m=g,c.push(g)}for(let h=0;h<i;++h){let g=b.createScalarValue(h,"int32"),d=t.makeTensorInfo([],"int32",g),x=iw({inputs:{a:d,b:m},backend:t}),y=Eo({inputs:{x},backend:t,attrs:{dtype:"float32"}}),w=$l({inputs:{a:y,b:n},backend:t}),C=Xs({inputs:{x:w},backend:t,attrs:{axis:0,keepDims:!1}});u.push(C),c.push(d),c.push(x),c.push(y),c.push(w),c.push(C)}let f=J0({inputs:u,backend:t,attrs:{axis:0}});return c.forEach(h=>t.disposeIntermediateTensorInfo(h)),f}var $L={kernelName:Ki,backendName:"cpu",kernelFunc:kZ};var EZ=[eF,hI,rF,oF,bI,nF,sF,iF,aF,lF,uF,cF,pF,mF,fF,dF,gF,xF,yF,tF,bF,wF,CF,wI,vF,yI,CI,SF,dI,NF,IF,kF,EF,AF,$F,DF,RF,_F,FF,OF,LF,PF,zF,MF,BF,VF,GF,WF,UF,HF,KF,qF,XF,j_,YF,vI,ZF,SI,JF,NI,QF,tO,eO,TI,II,rO,oO,nO,sO,kI,EI,gI,iO,TF,aO,lO,uO,X_,AI,$I,cO,DI,pO,mO,fO,hO,dO,gO,xO,RI,yO,bO,wO,CO,SO,NO,TO,_I,IO,kO,$O,FI,OI,DO,RO,_O,LI,FO,PO,zO,Yx,MO,Y_,zI,BO,VO,GO,WO,xI,Gm,UO,Z_,J_,Q_,HO,KO,qO,jO,XO,YO,ZO,WI,JO,tL,eL,rL,HI,oL,nL,sL,KI,EO,aL,lL,uL,cL,pL,mL,fL,hL,jI,dL,XI,YI,gL,xL,yL,bL,wL,ZI,jF,CL,vL,SL,NL,TL,kL,PI,EL,AL,$L,OO];for(let r of EZ)Jm(r);var $Z=["video"],DZ=["canvas"],DL=class r{videoElement;canvasElement;model;detectedText="";ngOnInit(){this.startVideo(),this.loadHandposeModel()}loadHandposeModel(){return B(this,null,function*(){this.model=yield bT(),console.log("Modelo Handpose cargado."),this.checkVideoAndStartDetection()})}startVideo(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.error("La API getUserMedia no es compatible con este navegador."),alert("Tu navegador no soporta la API getUserMedia necesaria para acceder a la c\xE1mara.");return}navigator.mediaDevices.getUserMedia({video:!0}).then(e=>{let t=this.videoElement.nativeElement;t.srcObject=e,t.onloadedmetadata=()=>{t.play(),this.checkVideoAndStartDetection()}}).catch(e=>{console.error("Error al acceder a la c\xE1mara",e),e.name==="NotAllowedError"&&alert("Se requiere permiso para acceder a la c\xE1mara. Por favor, permite el acceso en la configuraci\xF3n del navegador.")})}checkVideoAndStartDetection(){this.model&&this.videoElement.nativeElement.readyState>=3?this.detectHands():setTimeout(()=>this.checkVideoAndStartDetection(),500)}detectHands(){return B(this,null,function*(){let e=this.videoElement.nativeElement,t=this.canvasElement.nativeElement,o=t.getContext("2d");if(o)for(t.width=e.videoWidth,t.height=e.videoHeight;;){let n=yield this.model.estimateHands(e);o.clearRect(0,0,t.width,t.height),n.length>0&&n.forEach(s=>{let i=s.landmarks;this.drawHand(o,i),this.detectGesture(i)}),yield vl()}})}drawHand(e,t){e.fillStyle="red",t.forEach(([o,n])=>{e.beginPath(),e.arc(o,n,5,0,2*Math.PI),e.fill()})}detectGesture(e){let t="",o=e[4],n=e[8],s=e[12],i=e[16],a=e[20];n[1]>e[0][1]&&s[1]>e[0][1]&&i[1]>e[0][1]&&a[1]>e[0][1]&&o[0]<n[0]?t="A":n[1]<e[0][1]&&s[1]<e[0][1]&&i[1]<e[0][1]&&a[1]<e[0][1]&&o[1]<e[0][1]?t="B":Math.abs(n[0]-a[0])>20&&Math.abs(n[1]-a[1])<50&&Math.abs(o[0]-n[0])<50&&(t="C"),this.updateDetectedText(t)}updateDetectedText(e){this.detectedText=e}static \u0275fac=function(t){return new(t||r)};static \u0275cmp=Q0({type:r,selectors:[["app-sign-translator"]],viewQuery:function(t,o){if(t&1&&(Qx($Z,5),Qx(DZ,5)),t&2){let n;ty(n=ey())&&(o.videoElement=n.first),ty(n=ey())&&(o.canvasElement=n.first)}},standalone:!0,features:[oC],decls:11,vars:1,consts:[["video",""],["canvas",""],[1,"main-container"],[1,"camera-container"],["autoplay","","playsinline",""],[1,"text-display"]],template:function(t,o){t&1&&(qm(0,"div",2)(1,"div",3),eC(2,"video",4,0)(4,"canvas",null,1),jm(),qm(6,"div",5)(7,"h2"),ry(8,"Letra Detectada:"),jm(),qm(9,"p"),ry(10),jm()()()),t&2&&(tC(10),rC(o.detectedText))},styles:['.main-container[_ngcontent-%COMP%]{position:relative;width:100%;height:100vh;background-image:url("./media/blur-Q6QIKACJ.webp");background-size:cover;background-position:center;background-repeat:no-repeat;display:flex;flex-direction:column;align-items:start;justify-content:start}.camera-container[_ngcontent-%COMP%]{position:relative;width:100%;max-width:600px}video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:auto;max-width:100%;z-index:0}.text-display[_ngcontent-%COMP%]{position:relative;z-index:1;font-size:1.5rem;color:#333;text-align:center;background:#fff0;padding:10px;border-radius:5px;width:100%;margin-top:80%}']})};export{DL as SignTranslatorComponent};