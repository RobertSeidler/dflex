(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+Sw5":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},"0qAl":function(t,e){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},"5WRv":function(t,e,n){var r=n("iNmH"),o=n("Qatm"),a=n("Zhxd"),i=n("kluZ");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},"6FTn":function(t,e,n){"use strict";var r=n("obyI");e.a=function(t){return null==t?null:r.siteUrl+"/"+t.replace(/^\//,"")}},"8lrx":function(t,e,n){var r=n("uUj8"),o=n("5WRv"),a=n("OvAC"),i=n("PE9J");function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var u=n("mXGw"),s=n("/FXl"),p=s.useMDXComponents,f=s.mdx,m=n("U+ow").useMDXScope;t.exports=function(t){var e=t.scope,n=t.components,a=t.children,c=i(t,["scope","components","children"]),s=p(n),d=m(e),g=u.useMemo((function(){if(!a)return null;var t=l({React:u,mdx:f},d),e=Object.keys(t),n=e.map((function(e){return t[e]}));return r(Function,["_fn"].concat(o(e),[""+a])).apply(void 0,[{}].concat(o(n)))}),[a,e]);return u.createElement(g,l({components:s},c))}},OvAC:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},Qatm:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},RXBc:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"pageQuery",(function(){return x}));n("mXGw");var r,o=n("Wbzz"),a=n("8lrx"),i=n.n(a),c=n("Zttt"),l=n("vfq0"),u=n("6FTn"),s=n("obyI"),p=n("zDcZ"),f=n("aAma"),m=n("v41N"),d=s.siteMetadata.title,g=s.siteMetadata.description,y=((r={marginTop:20,marginBottom:15})[p.c.greaterThan("medium")]={marginTop:60,marginBottom:65},r),b={"&&":{marginBottom:20}};function v(){var e,n,r;return t.createElement("header",{css:{fontFamily:"georgia, serif",backgroundColor:p.a.dark,color:p.a.white}},t.createElement("div",{css:(e={paddingTop:45,paddingBottom:10},e[p.c.greaterThan("small")]={paddingTop:60,paddingBottom:70},e[p.c.greaterThan("xlarge")]={maxWidth:1500,marginLeft:"auto",marginRight:"auto",position:"relative","::before":{content:" ",position:"absolute",top:0,left:0,bottom:0,right:0,backgroundRepeat:"no-repeat",backgroundPosition:"100% 100px",backgroundSize:"50% auto",opacity:.05}},e)},t.createElement("div",{css:{position:"relative"}},t.createElement(f.a,null,t.createElement("h1",{css:(n={color:p.a.logo,textAlign:"center",margin:0,fontSize:45,letterSpacing:"0.01em"},n[p.c.size("xsmall")]={fontSize:30},n[p.c.greaterThan("xlarge")]={fontSize:60},n)},d),t.createElement("p",{css:(r={paddingTop:15,textAlign:"center",fontSize:24,letterSpacing:"0.01em",fontWeight:200},r[p.c.size("xsmall")]={fontSize:16,maxWidth:"12em",marginLeft:"auto",marginRight:"auto"},r[p.c.greaterThan("xlarge")]={paddingTop:20,fontSize:30},r)},g)))))}function h(e){var n,r,a=e.allMdx;return t.createElement(f.a,null,t.createElement("div",{css:p.d.markdown},t.createElement("section",{css:[y,(n={},n[p.c.lessThan("medium")]={marginTop:0,marginBottom:0,overflowX:"auto",paddingTop:30,WebkitOverflowScrolling:"touch",position:"relative",maskImage:"linear-gradient(to right, transparent, white 10px, white 90%, transparent)"},n)]},t.createElement("div",{css:(r={display:"flex",flexDirection:"row"},r[p.c.lessThan("medium")]={display:"block",whiteSpace:"nowrap"},r)},a.edges.map((function(e,n){var r,a,c,l=e.node,u=l.body,s=l.frontmatter;return t.createElement("div",{key:n,css:(a={display:"flex",flexDirection:"column",flex:"0 1 33%",marginLeft:40,"&:first-of-type":(r={marginLeft:0},r[p.c.lessThan("medium")]={marginLeft:10},r)},a[p.c.lessThan("medium")]={display:"inline-block",verticalAlign:"top",marginLeft:0,whiteSpace:"normal",width:"75%",marginRight:20,paddingBottom:40,"&:first-of-type":{marginTop:0}},a)},t.createElement(o.Link,{css:[{background:"none !important",borderBottom:"none !important"},b,{"&&":(c={color:p.a.subtle,paddingTop:0,fontWeight:300,fontSize:20},c[p.c.greaterThan("xlarge")]={fontSize:24},c)}],to:s.next},s.title,t.createElement(m.a,{cssProps:{marginLeft:5,verticalAlign:-2,color:p.a.primary}})),t.createElement("div",null,t.createElement(i.a,null,u)))}))))))}var x="4006015635";e.default=function(e){var n=e.data,r=e.location;console.log("Home -> location",r);var o=n.allMdx;return t.createElement(c.a,{location:r},t.createElement(l.a,{title:d+" - "+g,canonicalUrl:Object(u.a)("/")}),t.createElement("div",{css:{width:"100%"}},t.createElement(v,null),t.createElement(h,{allMdx:o})))}}.call(this,n("OyLA"))},WI9V:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},Zhxd:function(t,e,n){var r=n("+Sw5");t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},iNmH:function(t,e,n){var r=n("+Sw5");t.exports=function(t){if(Array.isArray(t))return r(t)}},kluZ:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},uUj8:function(t,e,n){var r=n("WI9V"),o=n("0qAl");function a(e,n,i){return o()?t.exports=a=Reflect.construct:t.exports=a=function(t,e,n){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return n&&r(a,n.prototype),a},a.apply(null,arguments)}t.exports=a},vfq0:function(t,e,n){"use strict";var r=n("Yla7");n.d(e,"a",(function(){return r.a}))}}]);
//# sourceMappingURL=component---src-pages-index-js-578ff1c5c28231eaf1ad.js.map