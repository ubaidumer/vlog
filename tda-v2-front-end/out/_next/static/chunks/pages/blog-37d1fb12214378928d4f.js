_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"7SZd":function(t,a,e){"use strict";var i=e("wx14"),n=e("Ff2n"),r=e("q1tI"),s=(e("17x9"),e("iuhU")),o=e("ofer"),c=e("H2TA"),l=e("4hqb"),d=r.forwardRef((function(t,a){var e=t.children,c=t.classes,d=t.className,p=t.component,g=void 0===p?"div":p,m=t.disablePointerEvents,u=void 0!==m&&m,b=t.disableTypography,h=void 0!==b&&b,f=t.position,y=t.variant,v=Object(n.a)(t,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),x=Object(l.b)()||{},w=y;return y&&x.variant,x&&!w&&(w=x.variant),r.createElement(l.a.Provider,{value:null},r.createElement(g,Object(i.a)({className:Object(s.a)(c.root,d,u&&c.disablePointerEvents,x.hiddenLabel&&c.hiddenLabel,"filled"===w&&c.filled,{start:c.positionStart,end:c.positionEnd}[f],"dense"===x.margin&&c.marginDense),ref:a},v),"string"!==typeof e||h?e:r.createElement(o.a,{color:"textSecondary"},e)))}));a.a=Object(c.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(d)},BR8T:function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return e("YbiN")}])},YbiN:function(t,a,e){"use strict";e.r(a);var i=e("q1tI"),n=e.n(i),r=e("cpVT"),s=e("R/WZ"),o=e("tr08"),c=e("lopY"),l=e("tRbT"),d=e("41Hj"),p=e("1e71"),g=e("7K+I"),m=e("HALo"),u=e("dhJC"),b=e("ofer"),h=e("kbOB"),f=e("Jc4N"),y=e("iuhU"),v=n.a.createElement,x=Object(s.a)((function(t){return{root:{paddingRight:20},cardProduct:{display:"flex",flexDirection:"column",alignItems:"center",height:"100%",width:"100%",boxShadow:"none",borderRadius:0,"& .card-product__content":{padding:t.spacing(2,0,0,0)},"& .card-product__media":{height:"100%",width:"100%","& img":{height:"100%",width:"100%"}}},image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},blogTitle:{fontWeight:700},sectionTitle:Object(r.a)({fontWeight:"bold",marginBottom:t.spacing(2)},t.breakpoints.up("md"),{marginBottom:t.spacing(3)})}})),w=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=x(),r=function(t){return v(h.b,Object(m.a)({},t,{className:n.image}))},s=function(t){return v("div",{className:n.blogContent},v(b.a,{variant:"body2",color:"textPrimary",className:n.blogTitle,gutterBottom:!0},t.title),v(b.a,{variant:"caption",color:"textPrimary"},v("i",null,t.author.name," - ",t.date)))};return v("div",Object(m.a)({className:Object(y.a)(e,n.root)},i),v(f.d,{title:"Similar Posts","data-aos":"fade-up",align:"left"}),v(l.a,{container:!0,spacing:2},a.map((function(t,a){return v(l.a,{item:!0,xs:6,md:3,key:a,"data-aos":"fade-up"},v(d.c,{className:n.cardProduct,mediaContent:v(r,Object(m.a)({},t.cover,{alt:t.title})),primaryCta:"",cardContent:v(s,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},O=e("Z3vd"),N=n.a.createElement,j=Object(s.a)((function(t){return{wrapper:{background:"#F5F7FF",padding:50},cardProduct:{display:"flex",flexDirection:"column",borderRadius:t.spacing(1),boxShadow:"none",background:"transparent",paddingBottom:t.spacing(2),"& .card-product__content":{padding:t.spacing(4),zIndex:1,background:t.palette.background.paper,width:"90%",margin:"0 auto",marginTop:t.spacing(-6),borderRadius:t.spacing(1),boxShadow:"0 3px 10px 2px rgba(0, 0, 0, 0.1)"},"& .card-product__media":{minHeight:300,"& img":{transitionDuration:".7s",transform:"scale(1.0)"}},"&:hover":{"& .card-product__media img":{transform:"scale(1.2)"}}},image:{objectFit:"cover"},blogTitle:{fontWeight:700},tags:{display:"flex",flexWrap:"wrap"},tag:Object(r.a)({padding:t.spacing(.5,1),borderRadius:t.spacing(.5),background:t.palette.primary.main,color:"white",margin:t.spacing(0,1,1,0)},t.breakpoints.up("md"),{margin:t.spacing(0,2,2,0)}),author:Object(r.a)({margin:t.spacing(1,0)},t.breakpoints.up("md"),{margin:t.spacing(2,0)}),title:{fontWeight:"bold"},descriptionCta:Object(r.a)({marginBottom:t.spacing(3)},t.breakpoints.up("md"),{marginBottom:t.spacing(4)}),button:Object(r.a)({border:"1px solid #3BB0E5",width:176,height:42,color:"#3BB0E5","&:hover":{color:"white",background:"#3BB0E5"},marginTop:t.spacing(2),alignSelf:"flex-start"},t.breakpoints.up("md"),{marginTop:t.spacing(3)}),link:{color:"inherit"}}})),k=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=j(),r=Object(o.a)(),s=Object(c.a)(r.breakpoints.up("md"),{defaultMatches:!0}),p=function(t){return N(h.b,Object(m.a)({},t,{className:n.image,lazyProps:{width:"100%",height:"100%"}}))},g=function(t){return N("div",null,N("div",{className:n.tags},t.tags.map((function(t,a){return N(b.a,{variant:"caption",className:n.tag,key:a},t)}))),N(b.a,{variant:"h6",color:"textPrimary",className:n.blogTitle},N("a",{className:n.link,href:"/blog-article"},t.title)),N(b.a,{variant:"body2",color:"textPrimary",className:n.author},N("i",null,t.author.name," - ",t.date)),N(b.a,{variant:"body1",color:"textPrimary"},t.subtitle))};return N("div",Object(m.a)({className:Object(y.a)(e,n.wrapper)},i),N(f.b,{title:"Featured articles",subtitle:"Keep track of what's happening with your data, change permissions.",primaryCta:N(O.a,{className:n.button,variant:"outlined",color:"primary",size:"large"},"View more"),align:"left",titleProps:{variant:"h4",color:"textPrimary",className:n.title},subtitleProps:{color:"textPrimary",noWrap:!1},className:n.descriptionCta,"data-aos":"fade-up"}),N(l.a,{container:!0,spacing:s?4:2},a.map((function(t,a){return N(l.a,{item:!0,xs:12,sm:6,key:a,"data-aos":"fade-up"},N(d.c,{className:n.cardProduct,mediaContent:N(p,Object(m.a)({},t.cover,{alt:t.title})),cardContent:N(g,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},S=(e("wx14"),e("Ff2n"),e("ADg1")),B=e("KmP9"),P=e("7SZd"),C=e("TTf+"),T=(n.a.createElement,Object(s.a)((function(){return{textWhite:{color:"white"},inputContainer:{display:"flex",justifyContent:"flex-start"},formControl:{maxWidth:400,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"white"}},"& .MuiInputBase-root":{color:"white"},"& .MuiInputAdornment-root i":{color:"white !important"}},image:{maxWidth:400}}})),e("sOrj")),_=n.a.createElement,E=Object(s.a)((function(t){return{root:{width:"100%",backgroundImage:"url('https://assets.it22.nl/tda/blog/hero.png')",background:"white",objectFit:"cover",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh"},textWhite:{color:"white"},title:{fontWeight:"bold",fontSize:"2.85rem"},subtitle:{fontSize:"1.25rem"},section:{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%, -50%)",paddingTop:0,paddingBottom:0,opacity:1,animationName:"fadeInOpacity",animationIterationCount:1,animationTimingFunction:"ease-in",animationDuration:"2s"},SearchBtnWrapper:{display:"flex",justifyContent:"center",marginTop:"1rem"},searchInputContainer:Object(r.a)({marginTop:"1.75rem",background:t.palette.background.paper,padding:t.spacing(2),boxShadow:"0 4px 14px 0 rgba(0, 0, 0, 0.11)",borderRadius:t.spacing(1),width:"100%",height:"100%",display:"flex",alignItems:"center","& .MuiOutlinedInput-notchedOutline":{border:"0 !important"},"& .MuiInputAdornment-positionStart":{marginRight:t.spacing(2)},"& .MuiOutlinedInput-adornedStart":{paddingLeft:0},"& .MuiOutlinedInput-input":{padding:0}},t.breakpoints.down("sm"),{padding:t.spacing(1)}),searchButton:Object(r.a)({background:"#3BB0E5",padding:"1rem 2rem",color:"white","&:hover":{color:"white",background:"#e9511c"},maxHeight:45,minWidth:135},t.breakpoints.down("sm"),{minWidth:"auto"})}})),A=function(t){var a=t.themeMode,e=t.className,r=Object(u.a)(t,["themeMode","className"]),s=E(),l=Object(o.a)(),b=(Object(c.a)(l.breakpoints.up("md"),{defaultMatches:!0}),Object(i.useState)(!1)),v=b[0],x=b[1],w=v;return _("div",Object(m.a)({className:Object(y.a)(s.root,e)},r),_(p.a,{onSidebarOpen:function(){x(!0)},openSidebar:v,pages:T.g,themeMode:a}),_(g.a,{onClose:function(){x(!1)},open:w,variant:"temporary",pages:T.g}),_(d.i,{className:s.section},_(n.a.Fragment,null,_(f.d,{title:"Our Newsroom",titleVariant:"h2",subtitle:"We are founded by a leading academic and researcher in the field of Industrial Systems Engineering.",subtitleVariant:"h4",align:"center","data-aos":"fade-up",disableGutter:!0,titleProps:{className:Object(y.a)(s.title,s.textWhite),variant:"h2"},subtitleProps:{className:"".concat(s.textWhite," ").concat(s.subtitle)}}),_("div",{className:s.searchInputContainer,"data-aos":"fade-up"},_(S.a,{fullWidth:!0,variant:"outlined"},_(B.a,{startAdornment:_(P.a,{position:"start"},_(h.a,{fontIconClass:"fas fa-search",fontIconColor:C.a.blueGrey[900]})),placeholder:"Search our articles"})),_(O.a,{color:"primary",variant:"contained",size:"large",className:s.searchButton},"Search")))))},W=n.a.createElement,I=Object(s.a)((function(t){return{cardProduct:{display:"flex",flexDirection:"column",borderRadius:t.spacing(1),"& .card-product__content":{padding:t.spacing(2)},"& .card-product__media":{minHeight:300}},image:{objectFit:"cover"},blogTitle:{fontWeight:700},tags:{display:"flex",flexWrap:"wrap",justifyContent:"center"},tag:{fontWeight:700,margin:t.spacing(0,1,1,0)},author:Object(r.a)({margin:t.spacing(1,0)},t.breakpoints.up("md"),{margin:t.spacing(2,0)}),title:{fontWeight:"bold",marginBottom:0},mt2:{marginTop:10},descriptionCta:{display:"flex",justifyContent:"space-between",alignItems:"flex-end"},button:Object(r.a)({border:"1px solid #3BB0E5",width:176,height:42,color:"#3BB0E5","&:hover":{color:"white",background:"#3BB0E5"},marginTop:t.spacing(2),alignSelf:"flex-start"},t.breakpoints.up("md"),{marginTop:t.spacing(3)}),link:{color:"inherit"}}})),R=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=I(),r=function(t){return W(h.b,Object(m.a)({},t,{className:n.image,lazyProps:{width:"100%",height:"100%"}}))},s=function(t){return W("div",null,W("div",{className:n.tags},t.tags.map((function(t,a){return W(b.a,{variant:"overline",color:"primary",className:n.tag,key:a},t)}))),W(b.a,{variant:"h6",color:"textPrimary",className:n.blogTitle,align:"center"},W("a",{className:n.link,href:"/blog-article"},t.title)),W(b.a,{variant:"body2",color:"textPrimary",className:n.author,align:"center"},W("i",null,t.author.name," - ",t.date)),W(b.a,{variant:"body1",color:"textPrimary",align:"center"},t.subtitle))};return W("div",Object(m.a)({className:Object(y.a)(e)},i),W(f.b,{title:"Latest stories",primaryCta:W(O.a,{className:n.button,variant:"outlined",color:"primary",size:"large"},"View all"),align:"left",titleProps:{variant:"h4",color:"textPrimary",className:n.title},className:n.descriptionCta,"data-aos":"fade-up"}),W(l.a,{container:!0,className:n.mt2,spacing:2},a.map((function(t,a){return W(l.a,{item:!0,xs:12,sm:6,key:a,"data-aos":"fade-up"},W(d.c,{withShadow:!0,liftUp:!0,className:n.cardProduct,mediaContent:W(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:W(s,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},M=n.a.createElement,F=Object(s.a)((function(t){var a,e;return{root:Object(r.a)({},t.breakpoints.down("xs"),{marginLeft:t.spacing(-2),marginRight:t.spacing(-2)}),gridItem:(a={marginBottom:t.spacing(2),paddingBottom:t.spacing(2)},Object(r.a)(a,t.breakpoints.up("md"),{marginBottom:t.spacing(3),paddingBottom:t.spacing(3),borderBottom:"1px solid ".concat(C.a.grey[200])}),Object(r.a)(a,"&:last-child",{marginBottom:0,borderBottom:0,paddingBottom:0}),a),cardProduct:Object(r.a)({display:"flex",alignItems:"center",height:"100%",borderRadius:0,boxShadow:"none",background:"transparent","& .card-product__content":Object(r.a)({padding:t.spacing(2,2,0,2)},t.breakpoints.up("sm"),{padding:t.spacing(0,0,0,2)}),"& .card-product__media":Object(r.a)({},t.breakpoints.up("sm"),{height:170,width:170,"& img":{height:170,width:170}})},t.breakpoints.down("sm"),{flexDirection:"column !important","& .card-product__content":{flex:"1 1 100%"},"& .card-product__media":{flex:"1 1 100%",width:"100%"}}),image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},button:{marginTop:t.spacing(1),alignSelf:"flex-start"},blogTitle:{fontWeight:700},author:{margin:t.spacing(1,0)},title:{fontWeight:"bold"},descriptionCta:(e={maxWidth:"100%",marginBottom:t.spacing(3),padding:t.spacing(0,2)},Object(r.a)(e,t.breakpoints.up("md"),{marginBottom:t.spacing(4),padding:0}),Object(r.a)(e,t.breakpoints.up("sm"),{padding:0}),e),link:{color:"inherit"}}})),L=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=F(),r=function(t){return M(h.b,Object(m.a)({},t,{className:n.image,lazyProps:{width:"100%",height:"100%"}}))},s=function(t){return M("div",{className:n.blogContent},M(b.a,{variant:"h6",color:"textPrimary",className:n.blogTitle},M("a",{className:n.link,href:"/blog-article"},t.title)),M(b.a,{variant:"body2",color:"textPrimary",className:n.author},M("i",null,t.author.name," - ",t.date)),M(b.a,{variant:"subtitle1",color:"textPrimary"},t.subtitle),M(h.c,{href:"/blog-article",title:"Learn more",variant:"body1",className:n.button}))};return M("div",Object(m.a)({className:Object(y.a)(n.root,e)},i),M(f.b,{title:"Latest Stories",align:"left",titleProps:{variant:"h4",color:"textPrimary",className:n.title,noWrap:!1},className:n.descriptionCta,"data-aos":"fade-up"}),M(l.a,{container:!0,spacing:0},a.map((function(t,a){return M(l.a,{item:!0,xs:12,key:a,"data-aos":"fade-up",className:n.gridItem},M(d.c,{className:n.cardProduct,mediaContent:M(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:M(s,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},D=n.a.createElement,q=Object(s.a)((function(t){return{cardProduct:Object(r.a)({display:"flex",alignItems:"center",height:"100%",borderRadius:t.spacing(1),boxShadow:"none","& .card-product__content":{paddingTop:t.spacing(2),paddingBottom:t.spacing(2),flex:"1 1 50%"},"& .card-product__media":{minHeight:300,height:"100%",flex:"1 1 50%",paddingRight:20}},t.breakpoints.down("sm"),{flexDirection:"column !important","& .card-product__content":{flex:"1 1 100%"},"& .card-product__media":{paddingRight:0,flex:"1 1 100%",width:"100%"}}),cardProductReverse:{flexDirection:"row-reverse"},image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},button:Object(r.a)({border:"1px solid #3BB0E5",width:176,height:42,color:"#3BB0E5","&:hover":{color:"white",background:"#3BB0E5"},marginTop:t.spacing(2),alignSelf:"flex-start"},t.breakpoints.up("md"),{marginTop:t.spacing(3)}),blogTitle:{textTransform:"uppercase",fontWeight:700},tags:{display:"flex",flexWrap:"wrap"},link:{color:"inherit"},tag:Object(r.a)({padding:t.spacing(.5,1),borderRadius:t.spacing(.5),background:t.palette.primary.main,color:"white",margin:t.spacing(0,1,1,0)},t.breakpoints.up("md"),{margin:t.spacing(0,2,2,0)}),author:Object(r.a)({margin:t.spacing(1,0)},t.breakpoints.up("md"),{margin:t.spacing(2,0)})}})),z=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=q(),r=Object(o.a)(),s=Object(c.a)(r.breakpoints.up("md"),{defaultMatches:!0}),p=function(t){return D(h.b,Object(m.a)({},t,{className:n.image,lazyProps:{width:"100%",height:"100%"}}))},g=function(t){return D("div",{className:n.blogContent},D("div",{className:n.tags},t.tags.map((function(t,a){return D(b.a,{variant:"caption",className:n.tag,key:a+1},t)}))),D(b.a,{variant:"h6",color:"textPrimary",className:n.blogTitle},D("a",{className:n.link,href:"/blog-article"},t.title)),D(b.a,{variant:"body2",color:"textPrimary",className:n.author},D("i",null,t.author.name," - ",t.date)),D(b.a,{variant:"subtitle1",color:"textPrimary"},t.subtitle),D(O.a,{variant:"outlined",color:"primary",size:"large",className:n.button},D("a",{className:n.link,href:"/blog-article"},"Read more")))};return D("div",Object(m.a)({className:e},i),D(f.d,{title:"The Most Popular News",subtitle:"Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions.",subtitleProps:{color:"textPrimary"},"data-aos":"fade-up"}),D(l.a,{container:!0,spacing:s?4:2},a.map((function(t,a){return D(l.a,{item:!0,xs:12,key:a,"data-aos":"fade-up"},D(d.c,{className:Object(y.a)(n.cardProduct,a%2===1?n.cardProductReverse:{}),mediaContent:D(p,Object(m.a)({},t.cover,{alt:t.title})),cardContent:D(g,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},V=n.a.createElement,H=Object(s.a)((function(t){return{root:Object(r.a)({padding:t.spacing(3,2),border:"1px solid ".concat(C.a.grey[200]),borderRadius:t.spacing(2)},t.breakpoints.up("md"),{padding:t.spacing(3)}),gridItem:{marginBottom:t.spacing(2),paddingBottom:t.spacing(2),borderBottom:"1px solid ".concat(C.a.grey[200]),"&:last-child":{marginBottom:0,borderBottom:0,paddingBottom:0}},cardProduct:{display:"flex",alignItems:"center",height:"100%",boxShadow:"none",borderRadius:0,"& .card-product__content":{padding:0,paddingLeft:t.spacing(2)},"& .card-product__media":{height:90,width:90,"& img":{height:90,width:90}}},image:{objectFit:"cover"},blogContent:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"},blogTitle:{fontWeight:700},tags:{display:"flex",flexWrap:"wrap"},tag:{margin:t.spacing(0,.5,.5,0),textTransform:"uppercase",fontWeight:700},sectionTitle:Object(r.a)({fontWeight:"bold",marginBottom:t.spacing(2)},t.breakpoints.up("md"),{marginBottom:t.spacing(3)}),link:{color:"inherit"}}})),J=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=H(),r=function(t){return V(h.b,Object(m.a)({},t,{className:n.image,lazyProps:{width:"100%",height:"100%"}}))},s=function(t){return V("div",{className:""},V("div",{className:n.tags},t.tags.map((function(t,a){return V(b.a,{variant:"caption",color:"primary",className:n.tag,key:a},t)}))),V(b.a,{variant:"body2",color:"textPrimary",className:n.blogTitle,gutterBottom:!0},t.title),V(b.a,{variant:"caption",color:"textPrimary"},V("i",null,t.author.name," - ",t.date)))};return V("div",Object(m.a)({className:Object(y.a)(n.root,e)},i),V(b.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,className:n.sectionTitle},"More Posts"),V(l.a,{container:!0,spacing:0},a.map((function(t,a){return V(l.a,{item:!0,xs:12,key:a,"data-aos":"fade-up",className:n.gridItem},V(d.c,{className:n.cardProduct,mediaContent:V(r,Object(m.a)({},t.cover,{alt:t.title})),cardContent:V(s,{title:t.title,subtitle:t.subtitle,author:t.author,date:t.date,tags:t.tags})}))}))))},K=e("r9w1"),Y=n.a.createElement,U=Object(s.a)((function(t){return{root:Object(r.a)({background:"white",padding:t.spacing(3,2),border:"1px solid ".concat(t.palette.alternate.dark),borderRadius:5},t.breakpoints.up("md"),{padding:t.spacing(3)}),cover:{width:200,height:200,display:"flex",justifyContent:"center",alignItems:"center",margin:"0 auto",marginBottom:t.spacing(3)},form:{"& .MuiTextField-root":{background:t.palette.background.paper},"& .MuiOutlinedInput-input":{background:t.palette.background.paper}},inputTitle:{fontWeight:700,marginBottom:t.spacing(1)},button:{border:"1px solid #3BB0E5",width:176,height:42,color:"white","&:hover":{color:"#3BB0E5",background:"white"},alignSelf:"flex-start"}}})),Z=function(t){var a=t.className,e=Object(u.a)(t,["className"]),i=U(),n=Object(o.a)(),r=Object(c.a)(n.breakpoints.up("md"),{defaultMatches:!0});return Y("div",Object(m.a)({className:Object(y.a)(i.root,a)},e),Y(f.d,{title:"Email Newsletter",subtitle:"Subscribe to our Newsletter for new blog posts, tips & new photos",titleProps:{variant:"h4",color:"textPrimary"},subtitleProps:{variant:"body1",color:"textPrimary"},"data-aos":"fade-up",align:"left"}),Y("div",{className:i.form},Y(l.a,{container:!0,spacing:r?4:2},Y(l.a,{item:!0,xs:12,"data-aos":"fade-up"},Y(b.a,{variant:"subtitle1",color:"textPrimary",className:i.inputTitle},"Full name"),Y(K.a,{placeholder:"Your full name",variant:"outlined",size:"medium",name:"fullname",fullWidth:!0,type:"text"})),Y(l.a,{item:!0,xs:12,"data-aos":"fade-up"},Y(b.a,{variant:"subtitle1",color:"textPrimary",className:i.inputTitle},"Email"),Y(K.a,{placeholder:"Your email address",variant:"outlined",size:"medium",name:"email",fullWidth:!0,type:"email"})),Y(l.a,{item:!0,container:!0,justify:"center",xs:12},Y(O.a,{className:i.button,variant:"contained",type:"submit",color:"primary",size:"large"},"Subscribe")),Y(l.a,{item:!0,container:!0,justify:"center",xs:12},Y(b.a,{variant:"caption",color:"textSecondary"},"Subscribe to our Newsletter for new blog posts, tips & new photos.")))))},X=n.a.createElement,G=Object(s.a)((function(t){var a;return{tags:{display:"flex",flexWrap:"wrap"},tag:(a={padding:t.spacing(.5,1),border:"1px solid ".concat(t.palette.primary.main),borderRadius:t.spacing(1),background:"transparent",margin:t.spacing(0,1,1,0),cursor:"pointer"},Object(r.a)(a,t.breakpoints.up("md"),{margin:t.spacing(0,2,2,0),padding:t.spacing(1,2)}),Object(r.a)(a,"&:hover",{color:"white",background:t.palette.primary.main}),a),sectionTitle:Object(r.a)({fontWeight:"bold",marginBottom:t.spacing(2)},t.breakpoints.up("md"),{marginBottom:t.spacing(3)})}})),$=function(t){var a=t.data,e=t.className,i=Object(u.a)(t,["data","className"]),n=G();return X("div",Object(m.a)({className:e},i),X(b.a,{variant:"h6",color:"textPrimary",gutterBottom:!0,className:n.sectionTitle},"Tags"),X("div",{className:n.tags},a.map((function(t,a){return X(b.a,{variant:"body2",color:"primary",className:n.tag,key:a},t)}))))},Q=[{cover:{src:"https://assets.it22.nl/tda/blog/blog-featured-img.png",srcSet:"https://assets.it22.nl/tda/blog/blog-featured-img.png 2x"},title:"A California Couple Design a Master Bed from Scratch",subtitle:"Cafe Coworking Has Become the Norm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Cafe Coworking Has Become the Norm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.Cafe Coworking Has Become the Norm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam.Cafe Coworking Has Become the Norm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",author:{name:"Rickie Baroch"},date:"May 03, 2021",tags:["master bed","design"]}],tt=[{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-half-width-1.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-half-width-1.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste",author:{name:"Jack Smith"},date:"May 01, 2021",tags:["vehicle","sports"]},{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-half-width-2.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-half-width-2.png 2x"},title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit\u200e",subtitle:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste",author:{name:"Kate Segelson"},date:"May 02, 2021",tags:["adventure","health"]}],at=[{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-1.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-1.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",subtitle:"",author:{name:"Veronica Adams"},date:"April 02, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-2.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-2.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",subtitle:"",author:{name:"Akachi Luccini"},date:"April 04, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-3.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-3.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",subtitle:"",author:{name:"Jack Smith"},date:"April 06, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-4.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-quarter-width-4.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",subtitle:"",author:{name:"Kate Segelson"},date:"April 10, 2021",tags:["vehicle"]}],et=[{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-1.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-1.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Kate Segelson"},date:"April 10, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-2.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-2.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone\u200e",author:{name:"Jack Smith"},date:"April 11, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-3.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-3.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Akachi Luccini"},date:"April 12, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Veronica Adams"},date:"April 13, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Veronica Adams"},date:"April 13, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Veronica Adams"},date:"April 13, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Veronica Adams"},date:"April 13, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png",srcSet:"https://assets.it22.nl/tda/blog/sidebar-posts-4.png 2x"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Veronica Adams"},date:"April 13, 2021",tags:["vehicle"]}],it=[{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-mini-1.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-mini-1.png 2x"},title:"Fast & Tasty Cakes",subtitle:"Some people get into food blogging just to share, while others are hoping to turn their passion into a profession. But while you know your way around the kitchen\u2026",author:{name:"Veronica Adams"},date:"April 13, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-mini-2.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-mini-2.png 2x"},title:"Fast & Tasty Cakes",subtitle:"Some people get into food blogging just to share, while others are hoping to turn their passion into a profession. But while you know your way around the kitchen\u2026",author:{name:"Veronica Adams"},date:"April 14, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/latest-stories-mini-3.png",srcSet:"https://assets.it22.nl/tda/blog/latest-stories-mini-3.png 2x"},title:"Fast & Tasty Cakes",subtitle:"Some people get into food blogging just to share, while others are hoping to turn their passion into a profession. But while you know your way around the kitchen\u2026",author:{name:"Veronica Adams"},date:"April 15, 2021",tags:["vehicle"]}],nt=[{cover:{src:"https://assets.it22.nl/tda/blog/more-stories-mini-1.png",srcSet:"https://assets.it22.nl/tda/blog/more-stories-mini-1.png"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Kate Segelson"},date:"April 15, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/more-stories-mini-2.png",srcSet:"https://assets.it22.nl/tda/blog/more-stories-mini-2.png"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"John Segelson"},date:"April 16, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/more-stories-mini-3.png",srcSet:"https://assets.it22.nl/tda/blog/more-stories-mini-3.png"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"Alison Segelson"},date:"April 17, 2021",tags:["vehicle"]},{cover:{src:"https://assets.it22.nl/tda/blog/more-stories-mini-4.png",srcSet:"https://assets.it22.nl/tda/blog/more-stories-mini-4.png"},title:"One of Saturn\u2019s largest rings may be newer than anyone",author:{name:"James Segelson"},date:"April 18, 2021",tags:["vehicle"]}],rt=["Business","Freelance","Money","Life Style","SEO","Wordpress","UX","Modern","Success"],st=n.a.createElement,ot=Object(s.a)((function(t){return{root:{height:"100%",width:"100%"},sidebarNewsletter:Object(r.a)({},t.breakpoints.down("sm"),{marginTop:t.spacing(3)}),section:Object(r.a)({},t.breakpoints.up("sm"),{paddingTop:t.spacing(2),paddingBottom:75}),lastSection:Object(r.a)({},t.breakpoints.up("sm"),{paddingTop:t.spacing(2),paddingBottom:30}),footerNewsletterSection:{background:t.palette.primary.dark}}})),ct=function(){var t=ot(),a=Object(o.a)(),e=Object(c.a)(a.breakpoints.up("md"),{defaultMatches:!0});return st("div",{className:t.root},st(A,null),st(d.i,{className:t.section},st(z,{data:Q})),st(d.i,{className:t.section},st(k,{data:tt})),st(d.i,{className:t.section},st(l.a,{container:!0,spacing:e?4:2},st(l.a,{item:!0,xs:12,md:8},st(R,{data:at})),st(l.a,{item:!0,xs:12,md:4},st(J,{data:et})))),st(d.i,{className:t.section},st(l.a,{style:{padding:50,background:"#F5F7FF"},container:!0,spacing:e?4:0},st(l.a,{item:!0,xs:12,md:8},st(L,{data:it})),st(l.a,{item:!0,xs:12,md:4},st(Z,{className:t.sidebarNewsletter})))),st(d.i,{className:t.lastSection},st(l.a,{container:!0},st(l.a,{item:!0,xs:12,md:8},st(w,{data:nt})),st(l.a,{item:!0,xs:12,md:4},st($,{data:rt})))))},lt=e("Exl5"),dt=e("69Y9"),pt=n.a.createElement;a.default=function(){return pt(dt.a,{component:ct,layout:lt.a})}}},[["BR8T",0,1,2,4,3,5,6]]]);