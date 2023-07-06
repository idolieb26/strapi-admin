"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[801],{29761:function(Q,S,n){n.r(S),n.d(S,{default:function(){return Kt}});var e=n(32735),s=n(43383),O=n(20108),C=n(33795),b=n.n(C),I={i8:"4.9.2"},T=n(67927),f=n(53038),y=n(15062),N=n(74506),$=n(51968),z=n(88311),se=n.n(z),xe=n(58107),M=n(8471),be=n(60216),r=n.n(be),B=n(67879),m=n(87933),re=n(71933),V=n(67563),De=n(50563),P=n(72850),H=n(41415),ie=n(35331);const ke=(0,M.ZP)(m.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,le=({onClose:t,onSkip:a,children:o,hideSkip:i})=>{const{formatMessage:p}=(0,B.Z)();return e.createElement(re.h,null,e.createElement(ke,{onClick:t,padding:8,justifyContent:"center"},e.createElement(V.i,{onEscape:t},e.createElement(m.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,s.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:d=>d.stopPropagation()},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(De.h,{onClick:t,"aria-label":p({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(ie.Z,null)})),e.createElement(P.x,{paddingLeft:7,paddingRight:7,paddingBottom:i?8:0},o),!i&&e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(H.z,{variant:"tertiary",onClick:a},p({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};le.propTypes={children:r().node.isRequired,onClose:r().func.isRequired,onSkip:r().func.isRequired,hideSkip:r().bool.isRequired};var Ze=le,ce=n(97889);const de={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1};var Be=(t=de,a)=>(0,ce.ZP)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}}),E=n(49372),ue=n(8482);const We=M.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:t})=>t.colors.neutral800};
  }
`,pe=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,B.Z)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:Ge,b:Ne,p:Ue,light:Fe,ul:je,li:Qe}))},Ge=t=>e.createElement(E.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},t),Ne=t=>e.createElement(E.Z,{fontWeight:"semiBold"},t),Ue=t=>e.createElement(E.Z,null,t),Fe=t=>e.createElement(E.Z,{textColor:"neutral600"},t),je=t=>e.createElement(P.x,{paddingLeft:6},e.createElement("ul",null,t)),Qe=t=>e.createElement(We,null,t);pe.propTypes={id:r().string.isRequired,defaultMessage:r().string.isRequired};var $e=pe,Y=n(78024),ze=n(14317);const J=({number:t,last:a,type:o})=>e.createElement(P.x,{paddingTop:3,paddingBottom:a?0:3},e.createElement(ze.Z,{number:t,type:o}));J.defaultProps={number:void 0,last:!1,type:""},J.propTypes={number:r().number,last:r().bool,type:r().string};var me=J,W=n(23678);const w=({title:t,content:a,cta:o,onCtaClick:i,sectionIndex:p,stepIndex:d,hasSectionAfter:h})=>{const{formatMessage:u}=(0,B.Z)(),g=p>0,c=d>0,v=p+1;return e.createElement(e.Fragment,null,e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,justifyContent:"center",minWidth:(0,s.Q1)(30)},g&&e.createElement(Y.Z,{type:W.hx,minHeight:(0,s.Q1)(24)})),e.createElement(E.Z,{variant:"sigma",textColor:"primary600"},u({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(m.k,null,e.createElement(m.k,{marginRight:8,minWidth:(0,s.Q1)(30)},e.createElement(me,{number:p+1,type:c?W.hx:W.lW})),e.createElement(E.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},u(t))),e.createElement(m.k,{alignItems:"stretch"},e.createElement(m.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,s.Q1)(30)},h&&e.createElement(e.Fragment,null,e.createElement(Y.Z,{type:W.hx}),c&&e.createElement(me,{number:v+1,type:W.lW,last:!0}))),e.createElement(P.x,null,e.createElement($e,{...a}),o&&(o.target?e.createElement(s.Qj,{endIcon:e.createElement(ue.Z,null),onClick:i,to:o.target},u(o.title)):e.createElement(H.z,{endIcon:e.createElement(ue.Z,null),onClick:i},u(o.title))))),c&&h&&e.createElement(P.x,{paddingTop:3},e.createElement(m.k,{marginRight:8,justifyContent:"center",width:(0,s.Q1)(30)},e.createElement(Y.Z,{type:W.hx,minHeight:(0,s.Q1)(24)}))))};w.defaultProps={currentStep:null,cta:void 0},w.propTypes={sectionIndex:r().number.isRequired,stepIndex:r().number.isRequired,hasSectionAfter:r().bool.isRequired,content:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired,cta:r().shape({target:r().string,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired})}),currentStep:r().string,onCtaClick:r().func.isRequired,title:r().shape({id:r().string.isRequired,defaultMessage:r().string.isRequired}).isRequired};var Ke=w,Ve=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:i,isGuidedTourVisible:p,setSkipped:d}=(0,s.c1)(),[h,u]=(0,e.useState)(t),[{stepContent:g,sectionIndex:c,stepIndex:v,hasSectionAfter:D,hasStepAfter:L},F]=(0,e.useReducer)(Be,de),{trackUsage:G}=(0,s.rS)();(0,e.useEffect)(()=>{if(!t){u(!1);return}const[k]=se()(a,t);u(!k&&p)},[t,a,p]),(0,e.useEffect)(()=>{if(t){const[k]=se()(xe.Z,t),x=Object.keys(a),[A,l]=t.split("."),Z=x.indexOf(A),K=Object.keys(a[A]).indexOf(l),ne=Z<x.length-1,ae=K<Object.keys(a[A]).length-1;F({type:"UPDATE_MODAL",content:k,newSectionIndex:Z,newStepIndex:K,newHasSectionAfter:ne,newHasStepAfter:ae})}},[t,a]);const R=()=>{i(t,!0),G(g.trackingEvent),o(null)},j=()=>{d(!0),o(null),G("didSkipGuidedtour")};return h&&g?e.createElement(Ze,{hideSkip:!L&&!D,onSkip:j,onClose:R},e.createElement(Ke,{...g,onCtaClick:R,currentStep:t,sectionIndex:c,stepIndex:v,hasSectionAfter:D})):null},U=n(14911),ge=n(9026),He=n(15300),Ye=n(61450),Je=n(1897),X=n(78464),he=n(42889),we=n(25390),Xe=n(64838),qe=n(9371),_e=n(73165),et=n(92967);const tt=(0,M.ZP)(P.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,fe=(0,M.ZP)(U.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,Ee=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[i,p]=(0,e.useState)(!1),{logos:{menu:d}}=(0,T.um)(),[h,u]=(0,s.Yw)("navbar-condensed",!1),{userDisplayName:g}=(0,s.QI)(),{formatMessage:c}=(0,B.Z)(),{trackUsage:v}=(0,s.rS)(),{pathname:D}=(0,f.TH)(),L=(0,f.k6)(),{post:F}=(0,s.tg)(),G=g.split(" ").map(l=>l.substring(0,1)).join("").substring(0,2),R=()=>p(l=>!l),j=async()=>{await F("/admin/logout"),s.I8.clearAppStorage(),R(),L.push("/auth/login")},k=l=>{!l.currentTarget.contains(l.relatedTarget)&&l.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&p(!1)},x=(l=null)=>{v("willNavigate",{from:D,to:l})},A=c({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(He.$,{condensed:h},e.createElement(Ye.D,{as:U.OL,workplace:c({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:A,icon:e.createElement("img",{src:d.custom||d.default,alt:c({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),e.createElement(ge.i,null),e.createElement(Je._,null,e.createElement(X.O,{as:U.OL,to:"/content-manager",icon:e.createElement(_e.Z,null),onClick:()=>x("/content-manager")},c({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(he.y,{label:c({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"})},a.map(l=>{const Z=l.icon;return e.createElement(X.O,{as:U.OL,to:l.to,key:l.to,icon:e.createElement(Z,null),onClick:()=>x(l.to)},c(l.intlLabel))})):null,t.length>0?e.createElement(he.y,{label:c({id:"app.components.LeftMenu.general",defaultMessage:"General"})},t.map(l=>{const Z=l.icon;return e.createElement(X.O,{as:U.OL,badgeContent:l.notificationsCount>0&&l.notificationsCount.toString()||void 0,to:l.to,key:l.to,icon:e.createElement(Z,null),onClick:()=>x(l.to)},c(l.intlLabel))})):null),e.createElement(we.q,null,e.createElement(Xe.r,{id:"main-nav-user-button",ref:o,onClick:R,initials:G},g),i&&e.createElement(tt,{onBlur:k,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(V.i,{onEscape:R},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:0},e.createElement(fe,{tabIndex:0,onClick:R,to:"/me"},e.createElement(E.Z,null,c({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(fe,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(E.Z,{textColor:"danger600"},c({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(et.Z,null))))),e.createElement(qe.w,{onClick:()=>u(l=>!l)},c(h?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"}))))};Ee.propTypes={generalSectionLinks:r().array.isRequired,pluginsSectionLinks:r().array.isRequired};var nt=Ee,at=n(10728);const ot=(0,M.ZP)(P.x)`
  flex: 1;
`,ye=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,B.Z)();return e.createElement(P.x,{background:"neutral100"},e.createElement(at.z,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(m.k,{alignItems:"flex-start"},a,e.createElement(ot,null,t)))};ye.propTypes={children:r().node.isRequired,sideNav:r().node.isRequired};var st=ye,q=n(8997),rt=n(26648),_=n(99140),it=n(28351),lt=n(3685),ct=n(45323),dt=n(29685),ut=n(2438),pt=n.p+"19eb2dfcf2603eb55733.png",mt=n(37272),gt=n(78429);const ht=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],ve={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},ft=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:mt.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:gt.Z}],Et=(0,M.ZP)(H.z)`
  border-radius: 50%;
  padding: ${({theme:t})=>t.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,yt=(0,M.ZP)(m.k)`
  transform: translate(-50%, -50%);
`,vt=(0,M.ZP)(m.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:t})=>`-${t.spaces[1]}`};
  }

  :hover {
    background: ${({theme:t})=>t.colors.primary100};

    /* Hover style for the number displayed */
    ${E.Z}:first-child {
      color: ${({theme:t})=>t.colors.primary500};
    }

    /* Hover style for the label */
    ${E.Z}:nth-child(1) {
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Ct=M.ZP.img`
  width: ${({theme:t})=>t.spaces[10]};
  height: ${({theme:t})=>t.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
  border-radius: ${({theme:t})=>t.borderRadius};
`,Ce=(0,M.ZP)(E.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,Te=(0,M.ZP)(Ce)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;var Tt=()=>{const t=(0,e.useRef)(),[a,o]=(0,e.useState)(!1),{formatMessage:i}=(0,B.Z)(),{communityEdition:p}=(0,s.QI)(),d=()=>{o(u=>!u)},h=[...ft,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:ct.Z,href:p?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(P.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(Et,{"aria-label":i(a?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:d,ref:t},e.createElement(_.J,{as:a?ie.Z:dt.Z,color:"buttonNeutral0"})),a&&e.createElement(re.h,null,e.createElement(it.M.Content,{padding:0,source:t,placement:"top-end",spacing:12},e.createElement(V.i,{onEscape:d},e.createElement(m.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(Ce,{fontWeight:"bold"},i({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(Te,{as:"a",href:ve.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},i(ve.label))),e.createElement(ge.i,null),ht.map(({href:u,duration:g,label:c},v)=>e.createElement(vt,{as:"a",href:u,target:"_blank",rel:"noreferrer noopener",key:u,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(P.x,{paddingRight:5},e.createElement(E.Z,{textColor:"neutral200",variant:"alpha"},v+1)),e.createElement(P.x,{position:"relative"},e.createElement(Ct,{src:pt,alt:""}),e.createElement(yt,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(_.J,{as:ut.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(m.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(E.Z,{fontWeight:"bold"},i(c)),e.createElement(lt.T,null,":"),e.createElement(E.Z,{textColor:"neutral600",variant:"pi"},g)))),e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},h.map(({label:u,href:g,icon:c})=>e.createElement(m.k,{gap:3,key:g},e.createElement(_.J,{as:c,color:"primary600"}),e.createElement(Te,{as:"a",href:g,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},i(u)))))))))};const Mt=(0,e.lazy)(()=>Promise.all([n.e(462),n.e(1657),n.e(994)]).then(n.bind(n,30258))),Pt=(0,e.lazy)(()=>n.e(3981).then(n.bind(n,55129))),St=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,15415))),It=(0,e.lazy)(()=>n.e(5516).then(n.bind(n,84538))),Me=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,53951))),Rt=(0,e.lazy)(()=>n.e(9501).then(n.bind(n,92336))),At=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,9972))),Pe=(0,e.lazy)(()=>n.e(5895).then(n.bind(n,74750))),Ot=()=>{const{trackUsage:t}=(0,s.rS)(),a=(0,y.I0)(),o=(0,y.v9)(i=>i.admin_app.status);(0,e.useEffect)(()=>{o==="init"&&(t("didAccessAuthenticatedAdministration"),a({type:rt.e}))},[o])};var Lt=()=>{Ot();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,T.H9)(),{menu:i}=(0,s.j1)(),{showTutorials:p}=(0,T.um)(),d=(0,e.useMemo)(()=>i.filter(h=>h.Component).map(({to:h,Component:u,exact:g})=>(0,q.ot)(u,h,g)),[i]);return t?e.createElement(s.dO,null):e.createElement(N.DndProvider,{backend:$.PD},e.createElement(st,{sideNav:e.createElement(nt,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(s.dO,null)},e.createElement(f.rs,null,e.createElement(f.AW,{path:"/",component:Pt,exact:!0}),e.createElement(f.AW,{path:"/me",component:At,exact:!0}),e.createElement(f.AW,{path:"/content-manager",component:Mt}),d,e.createElement(f.AW,{path:"/settings/:settingId",component:Pe}),e.createElement(f.AW,{path:"/settings",component:Pe,exact:!0}),e.createElement(f.AW,{path:"/marketplace"},e.createElement(It,null)),e.createElement(f.AW,{path:"/list-plugins",exact:!0},e.createElement(St,null)),e.createElement(f.AW,{path:"/404",component:Me}),e.createElement(f.AW,{path:"/500",component:Rt}),e.createElement(f.AW,{path:"",component:Me}))),e.createElement(Ve,null),p&&e.createElement(Tt,null)))},xt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]={...t[o]},a),{})}),bt=n(3040),Dt=n.n(bt);const Se={plugins:null};var kt=(t=Se,a)=>(0,ce.ZP)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{Dt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Zt=()=>{const{plugins:t}=(0,s.j1)(),[{plugins:a},o]=(0,e.useReducer)(kt,Se,()=>xt(t)),i=(0,e.useRef)(d=>{o({type:"SET_PLUGIN_READY",pluginId:d})});if(Object.keys(a).some(d=>a[d].isReady===!1)){const d=Object.keys(a).reduce((h,u)=>{const g=a[u].initializer;if(g){const c=a[u].pluginId;h.push(e.createElement(g,{key:c,setPlugin:i.current}))}return h},[]);return e.createElement(e.Fragment,null,d,e.createElement(s.dO,null))}return e.createElement(Lt,null)},Ie=n(17367);const Bt=()=>({type:Ie.l}),Wt=t=>({type:Ie.m,permissions:t}),Re=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:i}=(0,y.v9)(d=>d.rbacProvider),p=(0,y.I0)();return(0,e.useEffect)(()=>(p(Wt(a)),()=>{p(Bt())}),[a,p]),i?e.createElement(s.oL.Provider,{value:{allPermissions:i,refetchPermissions:o}},t):e.createElement(s.dO,null)};Re.propTypes={children:r().element.isRequired,permissions:r().array.isRequired,refetchPermissions:r().func.isRequired};var Gt=Re,Nt=n(84306),Ut=n(54770),ee=n.n(Ut),Ae=(t,a)=>!ee().valid(t)||!ee().valid(a)?!1:ee().lt(t,a);const Oe=I.i8,Ft=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),{get:te}=(0,s.tg)(),jt=async t=>{try{const{data:{tag_name:a}}=await Nt.default.get("https://api.github.com/repos/strapi/strapi/releases/latest");return Ae(Oe,a)&&Ft&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch{return Oe}},Qt=async()=>{try{const{data:t,headers:a}=await te("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},$t=async()=>{try{const{data:t,headers:a}=await te("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}},zt=async()=>{try{const{data:{data:{roles:t}}}=await te("/admin/users/me");return t}catch(t){throw new Error(t)}},Le=I.i8;var Kt=()=>{const{setGuidedTourVisibility:t}=(0,s.c1)(),a=(0,s.lm)(),o=(0,e.useRef)(t),i=s.I8.getUserInfo(),p=b()(i,"username")||(0,q.Pp)(i.firstname,i.lastname),[d,h]=(0,e.useState)(p),[u,g]=(0,e.useState)(null),{showReleaseNotification:c}=(0,T.um)(),[{data:v,status:D},{data:L,isLoading:F},{data:G,status:R,refetch:j,isFetched:k,isFetching:x},{data:A}]=(0,O.useQueries)([{queryKey:"app-infos",queryFn:Qt},{queryKey:"strapi-release",queryFn:()=>jt(a),enabled:c,initialData:Le},{queryKey:"admin-users-permission",queryFn:$t,initialData:[]},{queryKey:"user-roles",queryFn:zt}]),l=(0,e.useMemo)(()=>Ae(Le,L),[L]);(0,e.useEffect)(()=>{A&&A.find(({code:oe})=>oe==="strapi-super-admin")&&v?.autoReload&&o.current(!0)},[A,v]),(0,e.useEffect)(()=>{(async()=>{const oe=await(0,q.Qy)(i);g(oe)})()},[i]);const K=F||(x&&k||D==="loading"||R==="loading"),ne=(0,e.useMemo)(()=>({...v,userId:u,latestStrapiReleaseTag:L,setUserDisplayName:h,shouldUpdateStrapi:l,userDisplayName:d}),[v,L,l,d,u]);return K?e.createElement(s.dO,null):D==="error"?e.createElement("div",null,"error..."):e.createElement(s.NY.Provider,{value:ne},e.createElement(Gt,{permissions:G,refetchPermissions:j},e.createElement(Zt,null)))}},78024:function(Q,S,n){var e=n(32735),s=n(60216),O=n.n(s),C=n(43383),b=n(72850),I=n(23678);const T=({type:f,...y})=>e.createElement(b.x,{width:(0,C.Q1)(2),height:"100%",background:f===I.VM?"neutral300":"primary500",hasRadius:!0,...y});T.defaultProps={type:I.VM},T.propTypes={type:O().oneOf([I.lW,I.hx,I.VM])},S.Z=T},14317:function(Q,S,n){var e=n(32735),s=n(60216),O=n.n(s),C=n(43383),b=n(87933),I=n(99140),T=n(49372),f=n(66456),y=n(23678);const N=({type:$,number:z})=>$===y.hx?e.createElement(b.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,C.Q1)(30),height:(0,C.Q1)(30),justifyContent:"center"},e.createElement(I.J,{as:f.Z,"aria-hidden":!0,width:(0,C.Q1)(16),color:"neutral0"})):$===y.lW?e.createElement(b.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,C.Q1)(30),height:(0,C.Q1)(30),justifyContent:"center"},e.createElement(T.Z,{fontWeight:"semiBold",textColor:"neutral0"},z)):e.createElement(b.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,C.Q1)(30),height:(0,C.Q1)(30),justifyContent:"center"},e.createElement(T.Z,{fontWeight:"semiBold",textColor:"neutral600"},z));N.defaultProps={number:void 0,type:y.VM},N.propTypes={number:O().number,type:O().oneOf([y.lW,y.hx,y.VM])},S.Z=N},23678:function(Q,S,n){n.d(S,{VM:function(){return O},hx:function(){return s},lW:function(){return e}});const e="isActive",s="isDone",O="isNotDone"},58107:function(Q,S){const n={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}};S.Z=n}}]);