"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[3677],{15415:function(M,r,t){t.r(r),t.d(r,{default:function(){return Z}});var e=t(32735),l=t(43383),d=t(74758),i=t(67879),c=t(83983),m=t(94638),o=t(96709),a=t(27649),E=t(82055),T=t(17e3),y=t(56755),C=t(33827),f=t(94547),u=t(19786),g=t(49372),L=t(35658),O=t(20108);const A=async()=>{const{get:n}=(0,l.tg)(),{data:s}=await n("/admin/plugins");return s};var D=n=>{const s=(0,l.lm)();return(0,O.useQuery)("list-enabled-plugins",()=>A(),{onSuccess(){n&&n()},onError(){s({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})},I=()=>{const{formatMessage:n}=(0,i.Z)(),{notifyStatus:s}=(0,m.G)();(0,l.go)();const P=n({id:"global.plugins",defaultMessage:"Plugins"}),x=()=>{s(n({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:P}))},{status:h,data:p}=D(x);return h!=="success"&&h!=="error"?e.createElement(o.A,null,e.createElement(a.o,{"aria-busy":!0},e.createElement(l.dO,null))):e.createElement(o.A,null,e.createElement(a.o,null,e.createElement(E.T,{title:P,subtitle:n({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),e.createElement(T.D,null,e.createElement(y.i,{colCount:2,rowCount:p?.plugins?.length??0+1},e.createElement(C.h,null,e.createElement(f.Tr,null,e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.name",defaultMessage:"Name"}))),e.createElement(u.Th,null,e.createElement(g.Z,{variant:"sigma",textColor:"neutral600"},n({id:"global.description",defaultMessage:"description"}))))),e.createElement(L.p,null,p.plugins.map(({name:v,displayName:B,description:N})=>e.createElement(f.Tr,{key:v},e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},n({id:`global.plugins.${v}`,defaultMessage:B}))),e.createElement(u.Td,null,e.createElement(g.Z,{textColor:"neutral800"},n({id:`global.plugins.${v}.description`,defaultMessage:N}))))))))))},Z=()=>{const{formatMessage:n}=(0,i.Z)(),s=n({id:"global.plugins",defaultMessage:"Plugins"});return e.createElement(l.O4,{permissions:c.Z.marketplace.main},e.createElement(d.q,{title:s}),e.createElement(I,null))}},96709:function(M,r,t){t.d(r,{A:function(){return o}});var e=t(32735),l=t(60216),d=t(8471),i=t(72850);const c=(0,d.ZP)(i.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:a})=>a?"auto 1fr":"1fr"};
`,m=(0,d.ZP)(i.x)`
  overflow-x: hidden;
`,o=({sideNav:a,children:E})=>e.createElement(c,{hasSideNav:Boolean(a)},a,e.createElement(m,{paddingBottom:10},E));o.defaultProps={sideNav:void 0},o.propTypes={children:l.node.isRequired,sideNav:l.node}}}]);