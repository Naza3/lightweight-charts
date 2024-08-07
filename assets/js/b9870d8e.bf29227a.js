"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30410],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=p(n),c=i,g=h["".concat(l,".").concat(c)]||h[c]||u[c]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[h]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(58168),i=(n(96540),n(15680));const a={sidebar_label:"Custom Series Types",sidebar_position:2},s="Custom Series Types",o={unversionedId:"plugins/custom_series",id:"version-4.2/plugins/custom_series",title:"Custom Series Types",description:"Custom series allow developers to create new types of series with their own data",source:"@site/versioned_docs/version-4.2/plugins/custom_series.md",sourceDirName:"plugins",slug:"/plugins/custom_series",permalink:"/lightweight-charts/docs/plugins/custom_series",draft:!1,tags:[],version:"4.2",sidebarPosition:2,frontMatter:{sidebar_label:"Custom Series Types",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Series Primitives",permalink:"/lightweight-charts/docs/plugins/series-primitives"},next:{title:"Canvas Rendering Target",permalink:"/lightweight-charts/docs/plugins/canvas-rendering-target"}},l={},p=[{value:"Defining a Custom Series",id:"defining-a-custom-series",level:2},{value:"Renderer",id:"renderer",level:3},{value:"Update",id:"update",level:3},{value:"Price Value Builder",id:"price-value-builder",level:3},{value:"Whitespace",id:"whitespace",level:3},{value:"Default Options",id:"default-options",level:3},{value:"Destroy",id:"destroy",level:3}],d={toc:p},h="wrapper";function u(e){let{components:t,...n}=e;return(0,i.yg)(h,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"custom-series-types"},"Custom Series Types"),(0,i.yg)("p",null,"Custom series allow developers to create new types of series with their own data\nstructures, and rendering logic (implemented using\n",(0,i.yg)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D"},"CanvasRenderingContext2D"),"\nmethods). These custom series extend the current capabilities of our built-in\nseries, providing a consistent API which mirrors the built-in chart types."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"These series are expected to have a uniform width for each data point, which\nensures that the chart maintains a consistent look and feel across all series\ntypes. The only restriction on the data structure is that it should extend the\n",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/CustomData"},(0,i.yg)("inlineCode",{parentName:"a"},"CustomData"))," interface (have a valid time\nproperty for each data point).")),(0,i.yg)("h2",{id:"defining-a-custom-series"},"Defining a Custom Series"),(0,i.yg)("p",null,"A custom series should implement the\n",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView"},(0,i.yg)("inlineCode",{parentName:"a"},"ICustomSeriesPaneView"))," interface.\nThe interface defines the basic functionality and structure required for\ncreating a custom series view."),(0,i.yg)("p",null,"It includes the following methods and properties:"),(0,i.yg)("h3",{id:"renderer"},"Renderer"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ICustomSeriesPaneView property:\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView#renderer"},(0,i.yg)("inlineCode",{parentName:"a"},"renderer")))),(0,i.yg)("p",null,"This method should return a renderer which implements the\n",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneRenderer"},(0,i.yg)("inlineCode",{parentName:"a"},"ICustomSeriesPaneRenderer")),"\ninterface and is used to draw the series data on the main chart pane."),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneRenderer#draw"},(0,i.yg)("inlineCode",{parentName:"a"},"draw"))," method of the\nrenderer is evoked whenever the chart needs to draw the series."),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/#pricetocoordinateconverter"},(0,i.yg)("inlineCode",{parentName:"a"},"PriceToCoordinateConverter")),"\nprovided as the 2nd argument to the draw method is a convenience function for\nchanging prices into vertical coordinate values. It is provided since the\nseries' original data will most likely be defined in price values, and the\nrenderer needs to draw with coordinates. The values returned by the converter\nwill be defined in mediaSize (unscaled by ",(0,i.yg)("inlineCode",{parentName:"p"},"devicePixelRatio"),")."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"CanvasRenderingTarget2D")," provided within the ",(0,i.yg)("inlineCode",{parentName:"p"},"draw")," function is explained in\nmore detail on the ",(0,i.yg)("a",{parentName:"p",href:"./canvas-rendering-target"},"Canvas Rendering Target")," page.")),(0,i.yg)("h3",{id:"update"},"Update"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ICustomSeriesPaneView property:\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView#update"},(0,i.yg)("inlineCode",{parentName:"a"},"update")))),(0,i.yg)("p",null,"This method will be called with the latest data for the renderer to use during\nthe next paint."),(0,i.yg)("p",null,"The update method is evoked with two parameters: ",(0,i.yg)("inlineCode",{parentName:"p"},"data")," (discussed below), and\n",(0,i.yg)("inlineCode",{parentName:"p"},"seriesOptions"),". seriesOptions is a reference to the currently applied options\nfor the series"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PaneRendererCustomData"},(0,i.yg)("inlineCode",{parentName:"a"},"PaneRendererCustomData")),"\ninterface provides the data that can be used within the renderer for drawing the\nseries data. It includes the following properties:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"bars"),": List of all the series' items and their x coordinates. See\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/CustomBarItemData"},(0,i.yg)("inlineCode",{parentName:"a"},"CustomBarItemData"))," for more details"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"barSpacing"),": Spacing between consecutive bars."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"visibleRange"),": The current visible range of items on the chart.")),(0,i.yg)("h3",{id:"price-value-builder"},"Price Value Builder"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ICustomSeriesPaneView property:\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView#priceValueBuilder"},(0,i.yg)("inlineCode",{parentName:"a"},"priceValueBuilder")))),(0,i.yg)("p",null,"A function for interpreting the custom series data and returning an array of\nnumbers representing the prices values for the item, specifically the equivalent\nhighest, lowest, and current price values for the data item."),(0,i.yg)("p",null,"These price values are used by the chart to determine the auto-scaling (to\nensure the items are in view) and the crosshair and price line positions. The\nlargest and smallest values in the array will be used to specify the visible\nrange of the painted item, and the last value will be used for the crosshair and\nprice line position."),(0,i.yg)("h3",{id:"whitespace"},"Whitespace"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ICustomSeriesPaneView property:\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView#iswhitespace"},(0,i.yg)("inlineCode",{parentName:"a"},"isWhitespace")))),(0,i.yg)("p",null,"A function used by the library to determine which data points provided by the\nuser should be considered Whitespace. The method should return ",(0,i.yg)("inlineCode",{parentName:"p"},"true")," when the\ndata point is Whitespace. Data points which are whitespace data won't be provided to\nthe renderer, or the ",(0,i.yg)("inlineCode",{parentName:"p"},"priceValueBuilder"),"."),(0,i.yg)("h3",{id:"default-options"},"Default Options"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ICustomSeriesPaneView property:\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView#defaultoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"defaultOptions")))),(0,i.yg)("p",null,"The default options to be used for the series. The user can override these\nvalues using the options argument in\n",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/IChartApi#addcustomseries"},(0,i.yg)("inlineCode",{parentName:"a"},"addCustomSeries")),", or via the\n",(0,i.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/ISeriesApi#applyoptions"},(0,i.yg)("inlineCode",{parentName:"a"},"applyOptions"))," method on the\n",(0,i.yg)("inlineCode",{parentName:"p"},"ISeriesAPI"),"."),(0,i.yg)("h3",{id:"destroy"},"Destroy"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ICustomSeriesPaneView property:\n",(0,i.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/api/interfaces/ICustomSeriesPaneView#destroy"},(0,i.yg)("inlineCode",{parentName:"a"},"destroy")))),(0,i.yg)("p",null,"This method will be evoked when the series has been removed from the chart. This\nmethod should be used to clean up any objects, references, and other items that\ncould potentially cause memory leaks."),(0,i.yg)("p",null,"This method should contain all the necessary code to clean up the object before\nit is removed from memory. This includes removing any event listeners or timers\nthat are attached to the object, removing any references to other objects, and\nresetting any values or properties that were modified during the lifetime of the\nobject."))}u.isMDXComponent=!0}}]);