_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{DB6d:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r),i=(a("1e71"),a("7K+I"),a("HALo")),n=a("dhJC"),l=a("cpVT"),s=a("e45s"),c=a("Rq+t"),u=a("OA4S"),m=a("kbOB"),d=o.a.createElement,p=Object(s.a)((function(e){return{leftHeroImage:Object(l.a)({width:"50%",backgroundImage:"url('https://assets.it22.nl/tda/login/left-hero-2.png')",background:"white",objectFit:"cover",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},e.breakpoints.down("sm"),{display:"none"}),rightHeroImage:Object(l.a)({width:"50%",backgroundImage:"url('https://assets.it22.nl/tda/login/right-hero-3.png')",background:"white",objectFit:"cover",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh"},e.breakpoints.down("sm"),{padding:"75px 0"}),imagesWrapper:{display:"flex"},leftSideLogo:Object(l.a)({background:"white",display:"flex",justifyContent:"center",width:"50vw"},e.breakpoints.down("md"),{width:"100vw"}),textWhite:{color:"white"}}})),h=function(e){e.tours,e.themeMode,e.className;var t=Object(n.a)(e,["tours","themeMode","className"]),a=p();Object(c.a)();return d(u.a,Object(i.a)({container:!0,justify:"space-between",alignItems:"center",className:a.imagesWrapper},t),d(u.a,{item:!0,xs:12,sm:12,md:6,className:a.leftHeroImage},d("a",{href:"/",title:"Go Back To Home Page"},d("div",{className:a.leftHeroWrapper},d("div",{className:a.leftSideLogo},d(m.b,{src:"https://assets.it22.nl/tda/logo.png"}))))),d(u.a,{item:!0,xs:12,sm:12,md:6,className:a.rightHeroImage},d(P,null)))},g=a("xvhg"),f=a("v3sT"),b=a("xRp+"),w=a("TZn1"),v=a("a1gY"),x=a.n(v),O=a("iuhU"),j=a("41Hj"),y=o.a.createElement;function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=Object(s.a)((function(e){return{root:{color:"white",width:"100%","& .MuiFormLabel-root":{color:"white"},"& .MuiOutlinedInput-root":{borderColor:"white",color:"white","& fieldset":{borderColor:"white"}},"& .Mui-focused":{color:"white","& fieldset":{color:"white"}},"& .MuiOutlinedInput-input::placeholder":{color:"white"},"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{color:"white",borderColor:"white"}},formContainer:{height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",minHeight:"calc(100vh - ".concat(e.mixins.toolbar["@media (min-width:600px)"].minHeight,"px)"),maxWidth:500,margin:"0 auto"},section:{paddingTop:0,paddingBottom:0},title:{color:"white",fontWeight:"bold",fontSize:"2.85rem"},subTitle:{color:"white",marginBottom:"1rem",fontSize:"1.25rem"},textField:{borderColor:"white"},label:{color:"white"},link:{fontSize:16,color:"white",fontWeight:700,"&:hover":{textDecoration:"underline"}},linksWrapper:Object(l.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("xs"),{flexDirection:"column !important",alignItems:"flex-start !important"}),signInButton:{background:"white",border:"1px solid white",textTransform:"capitalize",color:"#404040","&:hover":{background:"#404040",color:"white"}}}})),E={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:300}},firstName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:120}},lastName:{presence:{allowEmpty:!1,message:"is required"},length:{maximum:120}},password:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:8}}},P=function(){var e=I(),t=o.a.useState({isValid:!1,values:{},touched:{},errors:{}}),a=Object(g.a)(t,2),r=a[0],i=a[1];o.a.useEffect((function(){var e=x()(r.values,E);i((function(t){return N(N({},t),{},{isValid:!e,errors:e||{}})}))}),[r.values]);var n=function(e){e.persist(),i((function(t){return N(N({},t),{},{values:N(N({},t.values),{},Object(l.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:N(N({},t.touched),{},Object(l.a)({},e.target.name,!0))})}))},s=function(e){return!(!r.touched[e]||!r.errors[e])};return y(j.i,{className:e.section},y("div",{className:e.formContainer},y(f.a,{align:"left",variant:"h4",gutterBottom:!0,className:Object(O.a)("section-header__title",e.title)},"Welcome"),y(f.a,{variant:"h6",align:"left",className:Object(O.a)("section-header__subtitle",e.subTitle)},"Please login into your account"),y("div",{className:e.root},y("form",{name:"login-form",method:"post",onSubmit:function(e){e.preventDefault(),r.isValid&&window.location.replace("/"),i((function(e){return N(N({},e),{},{touched:N(N({},e.touched),e.errors)})}))}},y(u.a,{container:!0,spacing:2},y(u.a,{item:!0,xs:12},y(b.a,{className:e.textField,placeholder:"E-mail",label:"E-mail *",variant:"outlined",size:"medium",name:"email",fullWidth:!0,InputProps:{classes:{input:e.input}},helperText:s("email")?r.errors.email[0]:null,error:s("email"),onChange:n,type:"email",value:r.values.email||""})),y(u.a,{item:!0,xs:12},y(b.a,{className:e.textField,placeholder:"Password",label:"Password *",variant:"outlined",size:"medium",name:"password",fullWidth:!0,helperText:s("password")?r.errors.password[0]:null,error:s("password"),onChange:n,type:"password",value:r.values.password||""})),y(u.a,{item:!0,xs:12},y(w.a,{className:e.signInButton,size:"large",variant:"contained",type:"submit",color:"primary",fullWidth:!0},"Sign In")),y(u.a,{item:!0,xs:12,className:e.linksWrapper},y(f.a,{className:e.label,variant:"subtitle1",color:"textSecondary",align:"left"},"Don\u2019t have an account?"," ",y("a",{className:e.link,href:"/signup"},"Signup")),y("a",{className:e.link,href:"/forgot-password"},"Forgot Password?")))))))},_=o.a.createElement,S=function(e){var t=e.themeMode;return _("div",null,_(h,{themeMode:t}))},C=a("Exl5"),D=a("69Y9"),W=o.a.createElement;t.default=function(){return W(D.a,{component:S,layout:C.a})}},hMb1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signin",function(){return a("DB6d")}])}},[["hMb1",0,1,2,4,3,5]]]);