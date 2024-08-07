"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42116],{15680:(e,r,n)=>{n.d(r,{xA:()=>g,yg:()=>c});var i=n(96540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function t(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,i,a=function(e,r){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var r=i.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):t(t({},r),e)),n},g=function(e){var r=s(e.components);return i.createElement(p.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},d=i.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),y=s(n),d=a,c=y["".concat(p,".").concat(d)]||y[d]||u[d]||l;return n?i.createElement(c,t(t({ref:r},g),{},{components:n})):i.createElement(c,t({ref:r},g))}));function c(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,t=new Array(l);t[0]=d;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[y]="string"==typeof e?e:a,t[1]=o;for(var s=2;s<l;s++)t[s]=n[s];return i.createElement.apply(null,t)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19422:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>t,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=n(58168),a=(n(96540),n(15680));const l={id:"LineStyleOptions",title:"Interface: LineStyleOptions",sidebar_label:"LineStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},t=void 0,o={unversionedId:"api/interfaces/LineStyleOptions",id:"version-4.1/api/interfaces/LineStyleOptions",title:"Interface: LineStyleOptions",description:"Represents style options for a line series.",source:"@site/versioned_docs/version-4.1/api/interfaces/LineStyleOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/LineStyleOptions",permalink:"/lightweight-charts/docs/4.1/api/interfaces/LineStyleOptions",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"LineStyleOptions",title:"Interface: LineStyleOptions",sidebar_label:"LineStyleOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},s=[{value:"Properties",id:"properties",level:2},{value:"color",id:"color",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineType",id:"linetype",level:3},{value:"lineVisible",id:"linevisible",level:3},{value:"pointMarkersVisible",id:"pointmarkersvisible",level:3},{value:"pointMarkersRadius",id:"pointmarkersradius",level:3},{value:"crosshairMarkerVisible",id:"crosshairmarkervisible",level:3},{value:"crosshairMarkerRadius",id:"crosshairmarkerradius",level:3},{value:"crosshairMarkerBorderColor",id:"crosshairmarkerbordercolor",level:3},{value:"crosshairMarkerBackgroundColor",id:"crosshairmarkerbackgroundcolor",level:3},{value:"crosshairMarkerBorderWidth",id:"crosshairmarkerborderwidth",level:3},{value:"lastPriceAnimation",id:"lastpriceanimation",level:3}],g={toc:s},y="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,i.A)({},g,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Represents style options for a line series."),(0,a.yg)("h2",{id:"properties"},"Properties"),(0,a.yg)("h3",{id:"color"},"color"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"color"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Line color."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"'#2196f3'")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"linestyle"},"lineStyle"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lineStyle"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/enums/LineStyle"},(0,a.yg)("inlineCode",{parentName:"a"},"LineStyle"))),(0,a.yg)("p",null,"Line style."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/enums/LineStyle#solid"},"Solid")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"linewidth"},"lineWidth"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lineWidth"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/#linewidth"},(0,a.yg)("inlineCode",{parentName:"a"},"LineWidth"))),(0,a.yg)("p",null,"Line width in pixels."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"3")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"linetype"},"lineType"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lineType"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/enums/LineType"},(0,a.yg)("inlineCode",{parentName:"a"},"LineType"))),(0,a.yg)("p",null,"Line type."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/enums/LineType#simple"},"Simple")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"linevisible"},"lineVisible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lineVisible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Show series line."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"pointmarkersvisible"},"pointMarkersVisible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"pointMarkersVisible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Show circle markers on each point."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"false")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"pointmarkersradius"},"pointMarkersRadius"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.yg)("strong",{parentName:"p"},"pointMarkersRadius"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Circle markers radius in pixels."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"undefined")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"crosshairmarkervisible"},"crosshairMarkerVisible"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"crosshairMarkerVisible"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"boolean")),(0,a.yg)("p",null,"Show the crosshair marker."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"true")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"crosshairmarkerradius"},"crosshairMarkerRadius"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"crosshairMarkerRadius"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Crosshair marker radius in pixels."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"4")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"crosshairmarkerbordercolor"},"crosshairMarkerBorderColor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"crosshairMarkerBorderColor"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"Crosshair marker border color. An empty string falls back to the color of the series under the crosshair."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"''")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"crosshairmarkerbackgroundcolor"},"crosshairMarkerBackgroundColor"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"crosshairMarkerBackgroundColor"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"string")),(0,a.yg)("p",null,"The crosshair marker background color. An empty string falls back to the color of the series under the crosshair."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"''")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"crosshairmarkerborderwidth"},"crosshairMarkerBorderWidth"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"crosshairMarkerBorderWidth"),": ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Crosshair marker border width in pixels."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"2")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"lastpriceanimation"},"lastPriceAnimation"),(0,a.yg)("p",null,"\u2022 ",(0,a.yg)("strong",{parentName:"p"},"lastPriceAnimation"),": ",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/enums/LastPriceAnimationMode"},(0,a.yg)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))),(0,a.yg)("p",null,"Last price animation mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"Default Value"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/api/enums/LastPriceAnimationMode#disabled"},"Disabled")))}u.isMDXComponent=!0}}]);