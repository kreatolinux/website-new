function g(){}const ut=t=>t;function at(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function E(t){t.forEach(U)}function T(t){return typeof t=="function"}function Ht(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let S;function It(t,e){return S||(S=document.createElement("a")),S.href=e,t===S.href}function ft(t){return Object.keys(t).length===0}function _t(t,...e){if(t==null)return g;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(_t(e,n))}function Gt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?at(n.ctx.slice(),t[1](i(e))):n.ctx}function Jt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)l[c]=e.dirty[c]|r[c];return l}return e.dirty|r}return e.dirty}function Kt(t,e,n,i,r,l){if(r){const s=V(e,n,i,l);t.p(s,r)}}function Qt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ut(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Vt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Xt(t){const e={};for(const n in t)e[n]=!0;return e}function Yt(t){return t&&T(t.destroy)?t.destroy:g}const X=typeof window<"u";let dt=X?()=>window.performance.now():()=>Date.now(),H=X?t=>requestAnimationFrame(t):g;const w=new Set;function Y(t){w.forEach(e=>{e.c(t)||(w.delete(e),e.f())}),w.size!==0&&H(Y)}function ht(t){let e;return w.size===0&&H(Y),{promise:new Promise(n=>{w.add(e={c:t,f:n})}),abort(){w.delete(e)}}}let q=!1;function mt(){q=!0}function pt(){q=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const u=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:yt(1,r,h=>e[n[h]].claim_order,u))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const l=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);l.reverse(),s.sort((o,u)=>o.claim_order-u.claim_order);for(let o=0,u=0;o<s.length;o++){for(;u<l.length&&s[o].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(s[o],_)}}function $t(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=et("style");return xt(Z(t),e),e.sheet}function xt(t,e){return $t(t.head||t,e),e.sheet}function wt(t,e){if(q){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){q&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function vt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function te(){return I(" ")}function ee(){return I("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Et(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:W(t,i,e[i])}function ie(t,e){for(const n in e)W(t,n,e[n])}function kt(t,e){Object.keys(e).forEach(n=>{Nt(t,n,e[n])})}function Nt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:W(t,e,n)}function re(t){return/-/.test(t)?kt:Et}function jt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){At(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function it(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||l.push(c.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(e))}function se(t,e,n){return it(t,e,n,et)}function ce(t,e,n){return it(t,e,n,vt)}function Ct(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function oe(t){return Ct(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ue(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ae(t,e,n){t.classList[n?"add":"remove"](e)}function rt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function fe(t,e){return new t(e)}const M=new Map;let P=0;function St(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ot(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function J(t,e,n,i,r,l,s,c=0){const o=16.666/i;let u=`{
`;for(let y=0;y<=1;y+=o){const $=e+(n-e)*l(y);u+=y*100+`%{${s($,1-$)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${St(_)}_${c}`,h=Z(t),{stylesheet:f,rules:d}=M.get(h)||Ot(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,P+=1,a}function Mt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||Pt())}function Pt(){H(()=>{P||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),M.clear())})}let j;function N(t){j=t}function A(){if(!j)throw new Error("Function called outside component initialization");return j}function _e(t){A().$$.on_mount.push(t)}function de(t){A().$$.after_update.push(t)}function he(){const t=A();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const l=rt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function me(t,e){return A().$$.context.set(t,e),e}function pe(t){return A().$$.context.get(t)}function ye(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],K=[];let v=[];const Q=[],st=Promise.resolve();let F=!1;function ct(){F||(F=!0,st.then(ot))}function ge(){return ct(),st}function D(t){v.push(t)}const z=new Set;let b=0;function ot(){if(b!==0)return;const t=j;do{try{for(;b<x.length;){const e=x[b];b++,N(e),Dt(e.$$)}}catch(e){throw x.length=0,b=0,e}for(N(null),x.length=0,b=0;K.length;)K.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];z.has(n)||(z.add(n),n())}v.length=0}while(x.length);for(;Q.length;)Q.pop()();F=!1,z.clear(),N(t)}function Dt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Tt(t){const e=[],n=[];v.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),v=e}let k;function qt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function B(t,e,n){t.dispatchEvent(rt(`${e?"intro":"outro"}${n}`))}const O=new Set;let p;function $e(){p={r:0,c:[],p}}function be(){p.r||E(p.c),p=p.p}function Lt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function xe(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),p.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Rt={duration:0};function we(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),s=i?0:1,c=null,o=null,u=null;function _(){u&&Mt(t,u)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=ut,tick:$=g,css:L}=l||Rt,R={start:dt()+d,b:f};f||(R.group=p,p.r+=1),c||o?o=R:(L&&(_(),u=J(t,s,f,m,d,y,L)),f&&$(0,1),c=a(R,m),D(()=>B(t,f,"start")),ht(C=>{if(o&&C>o.start&&(c=a(o,m),o=null,B(t,c.b,"start"),L&&(_(),u=J(t,s,c.b,c.duration,0,y,l.css))),c){if(C>=c.end)$(s=c.b,1-s),B(t,c.b,"end"),o||(c.b?_():--c.group.r||E(c.group.c)),c=null;else if(C>=c.start){const lt=C-c.start;s=c.a+c.d*y(lt/c.duration),$(s,1-s)}}return!!(c||o)}))}return{run(f){T(l)?qt().then(()=>{l=l(r),h(f)}):h(f)},end(){_(),c=o=null}}}function ve(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],c=e[l];if(c){for(const o in s)o in c||(i[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[l]=c}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}function ke(t){t&&t.c()}function Ne(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(U).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),l.forEach(D)}function Bt(t,e){const n=t.$$;n.fragment!==null&&(Tt(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(x.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function je(t,e,n,i,r,l,s,c=[-1]){const o=j;N(t);const u=t.$$={fragment:null,ctx:[],props:l,update:g,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Ft(t,a)),h}):[],u.update(),_=!0,E(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){mt();const a=jt(e.target);u.fragment&&u.fragment.l(a),a.forEach(tt)}else u.fragment&&u.fragment.c();e.intro&&Lt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),pt(),ot()}N(o)}class Ae{$destroy(){Bt(this,1),this.$destroy=g}$on(e,n){if(!T(n))return g;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ft(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{vt as $,zt as A,Bt as B,Vt as C,me as D,at as E,Ut as F,g as G,ye as H,Gt as I,re as J,Yt as K,ne as L,Kt as M,Qt as N,Jt as O,ve as P,T as Q,E as R,Ae as S,D as T,we as U,Ee as V,Xt as W,he as X,ae as Y,wt as Z,Et as _,te as a,ce as a0,ie as a1,pe as a2,It as a3,Wt as a4,Zt as b,oe as c,xe as d,ee as e,be as f,Lt as g,tt as h,je as i,de as j,et as k,se as l,jt as m,W as n,_e as o,ue as p,I as q,Ct as r,Ht as s,ge as t,le as u,$e as v,K as w,fe as x,ke as y,Ne as z};
