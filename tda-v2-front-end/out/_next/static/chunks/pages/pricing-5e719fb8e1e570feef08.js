_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{"5CJo":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return a("Tee0")}])},Tee0:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),o=a.n(i),n=a("41Hj"),r=a("wx14"),s=a("Ff2n"),l=a("rePB"),c=a("iuhU"),d=a("R/WZ"),u=a("tr08"),p=a("lopY"),m=a("tRbT"),b=a("tVbE"),g=a("IsqK"),f=a("Jc4N"),h=o.a.createElement,y=Object(d.a)((function(e){return{fontWeightBold:{fontWeight:"bold"},faqTitle:Object(l.a)({display:"block",marginBottom:e.spacing(1)},e.breakpoints.up("md"),{marginBottom:e.spacing(2)})}})),v=function(e){var t=e.data,a=e.className,i=Object(s.a)(e,["data","className"]),o=y(),n=Object(u.a)(),l=Object(p.a)(n.breakpoints.up("md"),{defaultMatches:!0});return h("div",Object(r.a)({className:a},i),h(f.d,{title:"Frequently asked questions",titleProps:{className:o.fontWeightBold}}),h(m.a,{container:!0,spacing:l?4:0},t.map((function(e,t){return h(m.a,{item:!0,xs:12,sm:6,md:4,key:t},h(b.a,{disableGutters:!0,key:t,"data-aos":"fade-up"},h(g.a,{primary:e.title,secondary:e.text,primaryTypographyProps:{variant:"h6",className:Object(c.a)(o.fontWeightBold,o.faqTitle)},secondaryTypographyProps:{variant:"subtitle1",color:"textPrimary"}})))}))))},O=a("ODXe"),k=a("ofer"),j=a("Z3vd");a("TOwV"),a("17x9");function x(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var N=a("H2TA"),C=a("NqtD"),T=i.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,l=e.exclusive,d=void 0!==l&&l,u=e.onChange,p=e.orientation,m=void 0===p?"horizontal":p,b=e.size,g=void 0===b?"medium":b,f=e.value,h=Object(s.a)(e,["children","classes","className","exclusive","onChange","orientation","size","value"]),y=function(e,t){if(u){var a,i=f&&f.indexOf(t);f&&i>=0?(a=f.slice()).splice(i,1):a=f?f.concat(t):[t],u(e,a)}},v=function(e,t){u&&u(e,f===t?null:t)};return i.createElement("div",Object(r.a)({role:"group",className:Object(c.a)(o.root,n,"vertical"===m&&o.vertical),ref:t},h),i.Children.map(a,(function(e){return i.isValidElement(e)?i.cloneElement(e,{className:Object(c.a)(o.grouped,o["grouped".concat(Object(C.a)(m))],e.props.className),onChange:d?v:y,selected:void 0===e.props.selected?x(e.props.value,f):e.props.selected,size:e.props.size||g}):null})))})),w=Object(N.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),{name:"MuiToggleButtonGroup"})(T),R=a("ye/S"),B=a("VD++"),S=i.forwardRef((function(e,t){var a=e.children,o=e.classes,n=e.className,l=e.disabled,d=void 0!==l&&l,u=e.disableFocusRipple,p=void 0!==u&&u,m=e.onChange,b=e.onClick,g=e.selected,f=e.size,h=void 0===f?"medium":f,y=e.value,v=Object(s.a)(e,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return i.createElement(B.a,Object(r.a)({className:Object(c.a)(o.root,n,d&&o.disabled,g&&o.selected,"medium"!==h&&o["size".concat(Object(C.a)(h))]),disabled:d,focusRipple:!p,ref:t,onClick:function(e){b&&(b(e,y),e.isDefaultPrevented())||m&&m(e,y)},onChange:m,value:y,"aria-pressed":g},v),i.createElement("span",{className:o.label},a))})),P=Object(N.a)((function(e){return{root:Object(r.a)({},e.typography.button,{boxSizing:"border-box",borderRadius:e.shape.borderRadius,padding:11,border:"1px solid ".concat(Object(R.b)(e.palette.action.active,.12)),color:Object(R.b)(e.palette.action.active,.38),"&$selected":{color:e.palette.action.active,backgroundColor:Object(R.b)(e.palette.action.active,.12),"&:hover":{backgroundColor:Object(R.b)(e.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:Object(R.b)(e.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:Object(R.b)(e.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{padding:7,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:15,fontSize:e.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(S),E=a("kbOB"),L=o.a.createElement,z=Object(d.a)((function(e){return{pagePaddingTop:Object(l.a)({paddingTop:e.spacing(3)},e.breakpoints.up("md"),{paddingTop:e.spacing(5)}),sectionContainer:{backgroundColor:e.palette.primary.dark,paddingBottom:e.spacing(20),borderRadius:"0 0 100% 0"},textWhite:{color:"white"},fontWeightBold:{fontWeight:"bold"},toggleContainer:{display:"flex",justifyContent:"center",margin:e.spacing(0,2)},toggleButtonGroup:{background:"transparent"},toggleButton:{background:"transparent",border:"1px solid white",padding:e.spacing(1,5)},toggleButtonActive:{backgroundColor:"white !important"},toggleTitle:{textTransform:"capitalize"},toggleTitleActive:{color:e.palette.primary.main},pricingContainer:{position:"relative",marginTop:e.spacing(-20)},sectionNoPaddingTop:{paddingTop:0},cardPricing:{"& .countup-number__count-wrapper":{textAlign:"left",marginBottom:0,fontWeight:"bold"}}}})),W=function(e){var t=e.data,a=e.className,i=Object(s.a)(e,["data","className"]),l=z(),d=Object(u.a)(),b=Object(p.a)(d.breakpoints.up("md"),{defaultMatches:!0}),g=o.a.useState("annual"),h=Object(O.a)(g,2),y=h[0],v=h[1];return L("div",Object(r.a)({className:a},i),L("div",{className:l.sectionContainer},L(n.i,{narrow:!0,className:l.pagePaddingTop},L(o.a.Fragment,null,L(f.d,{title:"Pricing",subtitle:"We are founded by a leading academic and researcher in the field of Industrial Systems Engineering. ",titleProps:{className:Object(c.a)(l.textWhite,l.fontWeightBold),variant:"h2"},subtitleProps:{className:l.textWhite},"data-aos":"fade-up"}),L("div",{className:l.toggleContainer,"data-aos":"fade-up"},L(w,{value:y,exclusive:!0,onChange:function(e,t){v(t)},className:l.toggleButtonGroup},L(P,{value:"annual",className:Object(c.a)(l.toggleButton,"annual"===y?l.toggleButtonActive:{})},L(k.a,{variant:"subtitle1",className:Object(c.a)(l.fontWeightBold,l.textWhite,l.toggleTitle,"annual"===y?l.toggleTitleActive:{})},"Annual")),L(P,{value:"monthly",className:Object(c.a)(l.toggleButton,"monthly"===y?l.toggleButtonActive:{})},L(k.a,{variant:"subtitle1",className:Object(c.a)(l.fontWeightBold,l.textWhite,l.toggleTitle,"monthly"===y?l.toggleTitleActive:{})},"Monthly"))))))),L("div",{className:l.pricingContainer},L("div",null,L(n.i,{className:l.sectionNoPaddingTop},L(m.a,{container:!0,spacing:b?4:2},t.map((function(e,t){return L(m.a,{item:!0,xs:12,md:4,"data-aos":"fade-up",key:t},L(n.b,{variant:"outlined",withShadow:!!e.isHighlighted,title:e.title,liftUp:!0,subtitle:e.subtitle,priceComponent:L(k.a,{variant:"h3",color:"textPrimary"},"$","annual"===y?e.annual:e.monthly),features:e.features,featureCheckComponent:L(E.a,{fontIconClass:"far fa-check-circle",fontIconColor:d.palette.primary.main}),cta:L(j.a,{color:"primary",variant:e.isHighlighted?"contained":"outlined",fullWidth:!0,size:"large"},"Subscribe now"),disclaimer:e.disclaimer,className:l.cardPricing}))})))))))},q=o.a.createElement,A=function(e){var t=e.data,a=e.className,i=Object(s.a)(e,["data","className"]),o=Object(u.a)(),n=Object(p.a)(o.breakpoints.up("md"),{defaultMatches:!0});return q("div",Object(r.a)({className:a},i),q(f.d,{title:"Business grade quality for all plans",subtitle:"After 3 days all of your offers will arrive and you will have another 7 days to select your new company."}),q(m.a,{container:!0,justify:"center",spacing:n?4:2},t.map((function(e,t){return q(m.a,{item:!0,container:!0,direction:"column",xs:12,md:4,key:t,"data-aos":"fade-up"},q(f.d,{title:e.title,subtitle:e.subtitle,titleProps:{variant:"h6"},subtitleProps:{variant:"body1",color:"textPrimary"},align:"left",disableGutter:!0}),q("div",{style:{flexGrow:1}}),q(E.c,{title:"Learn more",variant:"subtitle1"}))}))))},_=a("TTf+"),F=o.a.createElement,M=Object(d.a)((function(e){return{gridItemBorder:Object(l.a)({},e.breakpoints.up("md"),{borderRight:"1px solid ".concat(_.a.grey[200])})}})),G=function(e){var t=e.className,a=Object(s.a)(e,["className"]),i=M(),o=Object(u.a)(),n=Object(p.a)(o.breakpoints.up("md"),{defaultMatches:!0});return F("div",Object(r.a)({className:t},a),F(m.a,{container:!0,spacing:n?4:2},F(m.a,{item:!0,xs:12,sm:6,className:i.gridItemBorder},F(f.d,{title:"Need a Support?",titleVariant:"h5",subtitle:"View message performance and test against variants and control.",subtitleVariant:"body1",subtitleColor:"textPrimary",ctaGroup:[F(E.c,{title:"Open a ticket"})],disableGutter:!0})),F(m.a,{item:!0,xs:12,sm:6},F(f.d,{title:"Customize Plan",titleVariant:"h5",subtitle:"Looking for something else? Request a Consultation to customize a plan.",subtitleVariant:"body1",subtitleColor:"textPrimary",ctaGroup:[F(E.c,{title:"Contact us"})],disableGutter:!0}))))},V=[{title:"Standard License",subtitle:"A pay-once license, just for you",monthly:49,annual:480,priceSuffix:" / MO",features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],disclaimer:"Fully featured 30-day free trial",isHighlighted:!1},{title:"Extended License",subtitle:"A pay-once license, just for you",monthly:79,annual:780,priceSuffix:" / MO",features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],disclaimer:"Fully featured 30-day free trial",isHighlighted:!0},{title:"Standard License +",subtitle:"A pay-once license, just for you",monthly:69,annual:680,priceSuffix:" / MO",features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],disclaimer:"Fully featured 30-day free trial",isHighlighted:!1}],H=[{id:"faq-1",title:"Flexible access to facilities.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-2",title:"Snacks, drinks, coffee, and more.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-3",title:"On site tech support.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-4",title:"Flexible access to facilities.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-5",title:"Snacks, drinks, coffee, and more.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"},{id:"faq-6",title:"On site tech support.",subtitle:"Our new key fobs make it so easy!",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum minima a possimus, amet perferendis, temporibus obcaecati pariatur.",link:"Check it out"}],I=[{title:"Move deals through your funnel \u2013 fast",subtitle:"Our chatbots and live chat capture more of your best leads and convert them while they\u2019re hot."},{title:"On demand services right at your front-door",subtitle:"Our chatbots and live chat capture more of your best leads and convert them while they\u2019re hot."},{title:"Online 24/7 support",subtitle:"Our chatbots and live chat capture more of your best leads and convert them while they\u2019re hot."}],D=o.a.createElement,J=function(){return D("div",null,D(W,{data:V}),D(n.j,null,D(G,null)),D(n.i,null,D(v,{data:H})),D(n.j,null,D(A,{data:I})))},$=a("Exl5"),X=a("69Y9"),U=o.a.createElement;t.default=function(){return U(X.a,{component:J,layout:$.a})}}},[["5CJo",0,1,2,4,3,5]]]);