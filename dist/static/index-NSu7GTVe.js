import{l as $,c as I,r as w,am as T,an as A,j as p,Y as D,Q as K,ao as L,i as q,a9 as N,a0 as Q,ap as W,aq as Y,V as z}from"./sanity-Cvz1l7lw.js";const F=$(K)`
  position: relative;
`;function J(n){const t=I(3),{children:e}=n,{collapsed:a}=L();let s;return t[0]!==e||t[1]!==a?(s=p.jsx(F,{hidden:a,height:"fill",overflow:"auto",children:e}),t[0]=e,t[1]=a,t[2]=s):s=t[2],s}function M(n){const t=I(11),{actionHandlers:e,index:a,menuItems:s,menuItemGroups:l,title:o}=n,{features:r}=q();if(!(s!=null&&s.length)&&!o)return null;let i;t[0]!==e||t[1]!==l||t[2]!==s?(i=p.jsx(Y,{menuItems:s,menuItemGroups:l,actionHandlers:e}),t[0]=e,t[1]=l,t[2]=s,t[3]=i):i=t[3];let c;t[4]!==r.backButton||t[5]!==a?(c=r.backButton&&a>0&&p.jsx(N,{as:Q,"data-as":"a",icon:W,mode:"bleed",tooltipProps:{content:"Back"}}),t[4]=r.backButton,t[5]=a,t[6]=c):c=t[6];let d;return t[7]!==i||t[8]!==c||t[9]!==o?(d=p.jsx(z,{actions:i,backButton:c,title:o}),t[7]=i,t[8]=c,t[9]=o,t[10]=d):d=t[10],d}var X=Object.defineProperty,Z=Object.defineProperties,ee=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,g=(n,t,e)=>t in n?X(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,B=(n,t)=>{for(var e in t||(t={}))S.call(t,e)&&g(n,e,t[e]);if(j)for(var e of j(t))H.call(t,e)&&g(n,e,t[e]);return n},te=(n,t)=>Z(n,ee(t)),E=(n,t)=>{var e={};for(var a in n)S.call(n,a)&&t.indexOf(a)<0&&(e[a]=n[a]);if(n!=null&&j)for(var a of j(n))t.indexOf(a)<0&&H.call(n,a)&&(e[a]=n[a]);return e};function se(n){var t;const e=I(33);let a,s,l,o;e[0]!==n?(t=n,{index:a,pane:s,paneKey:l}=t,o=E(t,["index","pane","paneKey"]),e[0]=n,e[1]=a,e[2]=s,e[3]=l,e[4]=o):(a=e[1],s=e[2],l=e[3],o=e[4]);let r,i,c,d,u;if(e[5]!==s){const v=s,{child:C,component:G,menuItems:R,menuItemGroups:U,type:ne}=v,V=E(v,["child","component","menuItems","menuItemGroups","type"]);i=C,r=G,d=R,c=U,u=V,e[5]=s,e[6]=r,e[7]=i,e[8]=c,e[9]=d,e[10]=u}else r=e[6],i=e[7],c=e[8],d=e[9],u=e[10];const[y,k]=w.useState(null),{title:b}=T(s),O=b===void 0?"":b,h=y==null?void 0:y.actionHandlers;let m;e[11]!==a||e[12]!==c||e[13]!==d||e[14]!==h||e[15]!==O?(m=p.jsx(M,{actionHandlers:h,index:a,menuItems:d,menuItemGroups:c,title:O}),e[11]=a,e[12]=c,e[13]=d,e[14]=h,e[15]=O,e[16]=m):m=e[16];let f;e[17]!==r||e[18]!==i||e[19]!==l||e[20]!==u||e[21]!==o?(f=A.isValidElementType(r)&&p.jsx(r,te(B(B({},o),u),{ref:k,child:i,paneKey:l})),e[17]=r,e[18]=i,e[19]=l,e[20]=u,e[21]=o,e[22]=f):f=e[22];let _;e[23]!==r?(_=w.isValidElement(r)&&r,e[23]=r,e[24]=_):_=e[24];let P;e[25]!==f||e[26]!==_?(P=p.jsxs(J,{children:[f,_]}),e[25]=f,e[26]=_,e[27]=P):P=e[27];let x;return e[28]!==l||e[29]!==o.isSelected||e[30]!==m||e[31]!==P?(x=p.jsxs(D,{id:l,minWidth:320,selected:o.isSelected,children:[m,P]}),e[28]=l,e[29]=o.isSelected,e[30]=m,e[31]=P,e[32]=x):x=e[32],x}export{se as default};