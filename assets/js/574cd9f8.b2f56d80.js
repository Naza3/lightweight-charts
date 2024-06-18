"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3963],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=l(r),y=i,d=g["".concat(p,".").concat(y)]||g[y]||u[y]||a;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},96960:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(58168),i=(r(96540),r(15680));const a={id:"SeriesOptionsMap",title:"Interface: SeriesOptionsMap",sidebar_label:"SeriesOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},s=void 0,o={unversionedId:"api/interfaces/SeriesOptionsMap",id:"version-4.1/api/interfaces/SeriesOptionsMap",title:"Interface: SeriesOptionsMap",description:"Represents the type of options for each series type.",source:"@site/versioned_docs/version-4.1/api/interfaces/SeriesOptionsMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesOptionsMap",permalink:"/lightweight-charts/docs/api/interfaces/SeriesOptionsMap",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"SeriesOptionsMap",title:"Interface: SeriesOptionsMap",sidebar_label:"SeriesOptionsMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},p={},l=[{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Custom",id:"custom",level:3}],c={toc:l},g="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(g,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Represents the type of options for each series type."),(0,i.yg)("p",null,"For example a bar series has options represented by ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barseriesoptions"},"BarSeriesOptions"),"."),(0,i.yg)("h2",{id:"properties"},"Properties"),(0,i.yg)("h3",{id:"bar"},"Bar"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Bar"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#barseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"BarSeriesOptions"))),(0,i.yg)("p",null,"The type of bar series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"candlestick"},"Candlestick"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Candlestick"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#candlestickseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CandlestickSeriesOptions"))),(0,i.yg)("p",null,"The type of candlestick series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"area"},"Area"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Area"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#areaseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"AreaSeriesOptions"))),(0,i.yg)("p",null,"The type of area series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"baseline"},"Baseline"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Baseline"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#baselineseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"BaselineSeriesOptions"))),(0,i.yg)("p",null,"The type of baseline series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"line"},"Line"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Line"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#lineseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"LineSeriesOptions"))),(0,i.yg)("p",null,"The type of line series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"histogram"},"Histogram"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Histogram"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#histogramseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"HistogramSeriesOptions"))),(0,i.yg)("p",null,"The type of histogram series options."),(0,i.yg)("hr",null),(0,i.yg)("h3",{id:"custom"},"Custom"),(0,i.yg)("p",null,"\u2022 ",(0,i.yg)("strong",{parentName:"p"},"Custom"),": ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#customseriesoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"CustomSeriesOptions"))),(0,i.yg)("p",null,"The type of a custom series options."))}u.isMDXComponent=!0}}]);