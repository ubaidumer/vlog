_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{GfUn:function(e,t,r){"use strict";r.r(t);var a=r("q1tI"),o=r.n(a),i=(r("1e71"),r("7K+I"),r("HALo")),n=r("dhJC"),s=r("cpVT"),l=r("R/WZ"),c=r("tRbT"),u=r("kbOB"),d=o.a.createElement,m=Object(l.a)((function(e){return{leftHeroImage:Object(s.a)({width:"50%",backgroundImage:"url('https://assets.it22.nl/tda/signup/left-hero.png')",background:"white",objectFit:"cover",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh",display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},e.breakpoints.down("sm"),{display:"none"}),rightHeroImage:Object(s.a)({width:"50%",backgroundImage:"url('https://assets.it22.nl/tda/signup/right-hero.png')",background:"white",objectFit:"cover",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"100vh"},e.breakpoints.down("sm"),{padding:"75px 0"}),imagesWrapper:{display:"flex"},leftSideLogo:Object(s.a)({background:"white",display:"flex",justifyContent:"center",width:"50vw"},e.breakpoints.down("md"),{width:"100vw"}),textWhite:{color:"white"}}})),p=function(e){e.tours,e.themeMode,e.className;var t=Object(n.a)(e,["tours","themeMode","className"]),r=m();return d(c.a,Object(i.a)({container:!0,justify:"space-between",alignItems:"center",className:r.imagesWrapper},t),d(c.a,{item:!0,xs:12,sm:12,md:6,className:r.leftHeroImage},d("a",{href:"/",title:"Go Back To Home Page"},d("div",{className:r.leftHeroWrapper},d("div",{className:r.leftSideLogo},d(u.b,{src:"https://assets.it22.nl/tda/logo.png"}))))),d(c.a,{item:!0,xs:12,sm:12,md:6,className:r.rightHeroImage},d(E,null)))},h=r("xvhg"),f=r("ofer"),g=r("r9w1"),w=r("Z3vd"),b=r("a1gY"),v=r.n(b),x=r("iuhU"),O=r("41Hj"),y=o.a.createElement;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=Object(l.a)((function(e){return{root:{color:"white",width:"100%","& .MuiFormLabel-root":{color:"white"},"& .MuiOutlinedInput-root":{borderColor:"white",color:"white","& fieldset":{borderColor:"white"}},"& .Mui-focused":{color:"white","& fieldset":{color:"white"}},"& .MuiOutlinedInput-input::placeholder":{color:"white"},"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{color:"white",borderColor:"white"}},formContainer:{height:"100%",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",minHeight:"calc(100vh - ".concat(e.mixins.toolbar["@media (min-width:600px)"].minHeight,"px)"),maxWidth:500,margin:"0 auto"},section:{paddingTop:0,paddingBottom:0},title:{color:"white",fontWeight:"bold",fontSize:"2.85rem"},subTitle:{color:"white",marginBottom:"1rem",fontSize:"1.25rem"},textField:{borderColor:"white"},label:{color:"white"},link:{fontSize:16,color:"white",fontWeight:700,"&:hover":{textDecoration:"underline"}},linksWrapper:Object(s.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},e.breakpoints.down("xs"),{flexDirection:"column !important",alignItems:"flex-start !important"}),signUpButton:{background:"white",border:"1px solid white",textTransform:"capitalize",color:"#404040","&:hover":{background:"#404040",color:"white"}},checkbox:Object(s.a)({},e.breakpoints.down("xs"),{display:"flex",flexDirection:"column",alignSelf:"flex-start",paddingTop:5})}})),P={email:{presence:{allowEmpty:!1,message:"is required"},email:!0,length:{maximum:300}},password:{presence:{allowEmpty:!1,message:"is required"},length:{minimum:8}},confirmPassword:{presence:{allowEmpty:!1,message:"is required"},equality:"password",length:{minimum:8}}},E=function(){var e=N(),t=o.a.useState({isValid:!1,values:{},touched:{},errors:{}}),r=Object(h.a)(t,2),a=r[0],i=r[1];o.a.useEffect((function(){var e=v()(a.values,P);i((function(t){return k(k({},t),{},{isValid:!e,errors:e||{}})}))}),[a.values]);var n=function(e){e.persist(),i((function(t){return k(k({},t),{},{values:k(k({},t.values),{},Object(s.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:k(k({},t.touched),{},Object(s.a)({},e.target.name,!0))})}))},l=function(e){return!(!a.touched[e]||!a.errors[e])};return y(O.i,{className:e.section},y("div",{className:e.formContainer},y(f.a,{align:"left",variant:"h4",gutterBottom:!0,className:Object(x.a)("section-header__title",e.title)},"Reset Password"),y(f.a,{variant:"h6",align:"left",className:Object(x.a)("section-header__subtitle",e.subTitle)},"Here you can reset your password"),y("div",{className:e.root},y("form",{name:"login-form",method:"post",onSubmit:function(e){e.preventDefault(),a.isValid&&window.location.replace("/"),i((function(e){return k(k({},e),{},{touched:k(k({},e.touched),e.errors)})}))}},y(c.a,{container:!0,spacing:2},y(c.a,{item:!0,xs:12,sm:12,lg:12},y(g.a,{className:e.textField,placeholder:"E-mail",label:"E-mail *",variant:"outlined",size:"medium",name:"email",fullWidth:!0,InputProps:{classes:{input:e.input}},helperText:l("email")?a.errors.email[0]:null,error:l("email"),onChange:n,type:"email",value:a.values.email||null})),y(c.a,{item:!0,xs:12,sm:12,lg:12},y(g.a,{className:e.textField,placeholder:"Password",label:"Password *",variant:"outlined",size:"medium",name:"password",fullWidth:!0,helperText:l("password")?a.errors.password[0]:null,error:l("password"),onChange:n,type:"password",value:a.values.password||""})),y(c.a,{item:!0,xs:12,sm:12,lg:12},y(g.a,{className:e.textField,placeholder:"Confirm Password",label:"Confirm Password *",variant:"outlined",size:"medium",name:"confirmPassword",fullWidth:!0,helperText:l("confirmPassword")?a.errors.confirmPassword[0]:null,error:l("confirmPassword"),onChange:n,type:"password",value:a.values.confirmPassword||""})),y(c.a,{item:!0,xs:12},y(w.a,{className:e.signUpButton,size:"large",variant:"contained",type:"submit",color:"primary",fullWidth:!0},"Reset Password")),y(c.a,{item:!0,xs:12,className:e.linksWrapper},y(f.a,{className:e.label,variant:"subtitle1",color:"textSecondary",align:"left"},"Go back to"," ",y("a",{className:e.link,href:"/signin"},"Login")," ","page")))))))},I=o.a.createElement,C=function(e){var t=e.themeMode;return I("div",null,I(p,{themeMode:t}))},_=r("Exl5"),W=r("69Y9"),H=o.a.createElement;t.default=function(){return H(W.a,{component:C,layout:_.a})}},X9eL:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reset-password",function(){return r("GfUn")}])}},[["X9eL",0,1,2,4,3,5]]]);