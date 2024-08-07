"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69502,18401],{19490:(e,t,n)=>{n.d(t,{Ay:()=>o});var a=n(58168),i=(n(96540),n(15680));const l={toc:[]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.yg)(r,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("details",null,(0,i.yg)("summary",null,"How to use the code sample"),(0,i.yg)("strong",null,"The code presented below requires:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"That ",(0,i.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,i.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,i.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,i.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,i.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,i.yg)("p",null,"Here is an example skeleton setup: ",(0,i.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,i.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}o.isMDXComponent=!0},35860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>c,default:()=>C,frontMatter:()=>s,metadata:()=>d,toc:()=>h});var a=n(58168),i=(n(96540),n(15680)),l=n(7951),r=n(19490),o=n(5546);const m="// remove-start\n// Lightweight Charts\u2122 Example: Legend\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/legends\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nchart.applyOptions({\n\trightPriceScale: {\n\t\tscaleMargins: {\n\t\t\ttop: 0.3, // leave some space for the legend\n\t\t\tbottom: 0.25,\n\t\t},\n\t},\n\tcrosshair: {\n\t\t// hide the horizontal crosshair line\n\t\thorzLine: {\n\t\t\tvisible: false,\n\t\t\tlabelVisible: false,\n\t\t},\n\t},\n\t// hide the grid lines\n\tgrid: {\n\t\tvertLines: {\n\t\t\tvisible: false,\n\t\t},\n\t\thorzLines: {\n\t\t\tvisible: false,\n\t\t},\n\t},\n});\n\nconst areaSeries = chart.addAreaSeries({\n\ttopColor: AREA_TOP_COLOR,\n\tbottomColor: AREA_BOTTOM_COLOR,\n\tlineColor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n\tcrossHairMarkerVisible: false,\n});\n\nareaSeries.setData([\n\t{ time: '2018-10-19', value: 26.19 },\n\t// hide-start\n\t{ time: '2018-10-22', value: 25.87 },\n\t{ time: '2018-10-23', value: 25.83 },\n\t{ time: '2018-10-24', value: 25.78 },\n\t{ time: '2018-10-25', value: 25.82 },\n\t{ time: '2018-10-26', value: 25.81 },\n\t{ time: '2018-10-29', value: 25.82 },\n\t{ time: '2018-10-30', value: 25.71 },\n\t{ time: '2018-10-31', value: 25.82 },\n\t{ time: '2018-11-01', value: 25.72 },\n\t{ time: '2018-11-02', value: 25.74 },\n\t{ time: '2018-11-05', value: 25.81 },\n\t{ time: '2018-11-06', value: 25.75 },\n\t{ time: '2018-11-07', value: 25.73 },\n\t{ time: '2018-11-08', value: 25.75 },\n\t{ time: '2018-11-09', value: 25.75 },\n\t{ time: '2018-11-12', value: 25.76 },\n\t{ time: '2018-11-13', value: 25.8 },\n\t{ time: '2018-11-14', value: 25.77 },\n\t{ time: '2018-11-15', value: 25.75 },\n\t{ time: '2018-11-16', value: 25.75 },\n\t{ time: '2018-11-19', value: 25.75 },\n\t{ time: '2018-11-20', value: 25.72 },\n\t{ time: '2018-11-21', value: 25.78 },\n\t{ time: '2018-11-23', value: 25.72 },\n\t{ time: '2018-11-26', value: 25.78 },\n\t{ time: '2018-11-27', value: 25.85 },\n\t{ time: '2018-11-28', value: 25.85 },\n\t{ time: '2018-11-29', value: 25.55 },\n\t{ time: '2018-11-30', value: 25.41 },\n\t{ time: '2018-12-03', value: 25.41 },\n\t{ time: '2018-12-04', value: 25.42 },\n\t{ time: '2018-12-06', value: 25.33 },\n\t{ time: '2018-12-07', value: 25.39 },\n\t{ time: '2018-12-10', value: 25.32 },\n\t{ time: '2018-12-11', value: 25.48 },\n\t{ time: '2018-12-12', value: 25.39 },\n\t{ time: '2018-12-13', value: 25.45 },\n\t{ time: '2018-12-14', value: 25.52 },\n\t{ time: '2018-12-17', value: 25.38 },\n\t{ time: '2018-12-18', value: 25.36 },\n\t{ time: '2018-12-19', value: 25.65 },\n\t{ time: '2018-12-20', value: 25.7 },\n\t{ time: '2018-12-21', value: 25.66 },\n\t{ time: '2018-12-24', value: 25.66 },\n\t{ time: '2018-12-26', value: 25.65 },\n\t{ time: '2018-12-27', value: 25.66 },\n\t{ time: '2018-12-28', value: 25.68 },\n\t{ time: '2018-12-31', value: 25.77 },\n\t{ time: '2019-01-02', value: 25.72 },\n\t{ time: '2019-01-03', value: 25.69 },\n\t{ time: '2019-01-04', value: 25.71 },\n\t{ time: '2019-01-07', value: 25.72 },\n\t{ time: '2019-01-08', value: 25.72 },\n\t{ time: '2019-01-09', value: 25.66 },\n\t{ time: '2019-01-10', value: 25.85 },\n\t{ time: '2019-01-11', value: 25.92 },\n\t{ time: '2019-01-14', value: 25.94 },\n\t{ time: '2019-01-15', value: 25.95 },\n\t{ time: '2019-01-16', value: 26.0 },\n\t{ time: '2019-01-17', value: 25.99 },\n\t{ time: '2019-01-18', value: 25.6 },\n\t{ time: '2019-01-22', value: 25.81 },\n\t{ time: '2019-01-23', value: 25.7 },\n\t{ time: '2019-01-24', value: 25.74 },\n\t{ time: '2019-01-25', value: 25.8 },\n\t{ time: '2019-01-28', value: 25.83 },\n\t{ time: '2019-01-29', value: 25.7 },\n\t{ time: '2019-01-30', value: 25.78 },\n\t{ time: '2019-01-31', value: 25.35 },\n\t{ time: '2019-02-01', value: 25.6 },\n\t{ time: '2019-02-04', value: 25.65 },\n\t{ time: '2019-02-05', value: 25.73 },\n\t{ time: '2019-02-06', value: 25.71 },\n\t{ time: '2019-02-07', value: 25.71 },\n\t{ time: '2019-02-08', value: 25.72 },\n\t{ time: '2019-02-11', value: 25.76 },\n\t{ time: '2019-02-12', value: 25.84 },\n\t{ time: '2019-02-13', value: 25.85 },\n\t{ time: '2019-02-14', value: 25.87 },\n\t{ time: '2019-02-15', value: 25.89 },\n\t{ time: '2019-02-19', value: 25.9 },\n\t{ time: '2019-02-20', value: 25.92 },\n\t{ time: '2019-02-21', value: 25.96 },\n\t{ time: '2019-02-22', value: 26.0 },\n\t{ time: '2019-02-25', value: 25.93 },\n\t{ time: '2019-02-26', value: 25.92 },\n\t{ time: '2019-02-27', value: 25.67 },\n\t{ time: '2019-02-28', value: 25.79 },\n\t{ time: '2019-03-01', value: 25.86 },\n\t{ time: '2019-03-04', value: 25.94 },\n\t{ time: '2019-03-05', value: 26.02 },\n\t{ time: '2019-03-06', value: 25.95 },\n\t{ time: '2019-03-07', value: 25.89 },\n\t{ time: '2019-03-08', value: 25.94 },\n\t{ time: '2019-03-11', value: 25.91 },\n\t{ time: '2019-03-12', value: 25.92 },\n\t{ time: '2019-03-13', value: 26.0 },\n\t{ time: '2019-03-14', value: 26.05 },\n\t{ time: '2019-03-15', value: 26.11 },\n\t{ time: '2019-03-18', value: 26.1 },\n\t{ time: '2019-03-19', value: 25.98 },\n\t{ time: '2019-03-20', value: 26.11 },\n\t{ time: '2019-03-21', value: 26.12 },\n\t{ time: '2019-03-22', value: 25.88 },\n\t{ time: '2019-03-25', value: 25.85 },\n\t{ time: '2019-03-26', value: 25.72 },\n\t{ time: '2019-03-27', value: 25.73 },\n\t{ time: '2019-03-28', value: 25.8 },\n\t{ time: '2019-03-29', value: 25.77 },\n\t{ time: '2019-04-01', value: 26.06 },\n\t{ time: '2019-04-02', value: 25.93 },\n\t{ time: '2019-04-03', value: 25.95 },\n\t{ time: '2019-04-04', value: 26.06 },\n\t{ time: '2019-04-05', value: 26.16 },\n\t{ time: '2019-04-08', value: 26.12 },\n\t{ time: '2019-04-09', value: 26.07 },\n\t{ time: '2019-04-10', value: 26.13 },\n\t{ time: '2019-04-11', value: 26.04 },\n\t{ time: '2019-04-12', value: 26.04 },\n\t{ time: '2019-04-15', value: 26.05 },\n\t{ time: '2019-04-16', value: 26.01 },\n\t{ time: '2019-04-17', value: 26.09 },\n\t{ time: '2019-04-18', value: 26.0 },\n\t{ time: '2019-04-22', value: 26.0 },\n\t{ time: '2019-04-23', value: 26.06 },\n\t{ time: '2019-04-24', value: 26.0 },\n\t{ time: '2019-04-25', value: 25.81 },\n\t{ time: '2019-04-26', value: 25.88 },\n\t{ time: '2019-04-29', value: 25.91 },\n\t{ time: '2019-04-30', value: 25.9 },\n\t{ time: '2019-05-01', value: 26.02 },\n\t{ time: '2019-05-02', value: 25.97 },\n\t{ time: '2019-05-03', value: 26.02 },\n\t{ time: '2019-05-06', value: 26.03 },\n\t{ time: '2019-05-07', value: 26.04 },\n\t{ time: '2019-05-08', value: 26.05 },\n\t{ time: '2019-05-09', value: 26.05 },\n\t{ time: '2019-05-10', value: 26.08 },\n\t{ time: '2019-05-13', value: 26.05 },\n\t{ time: '2019-05-14', value: 26.01 },\n\t{ time: '2019-05-15', value: 26.03 },\n\t{ time: '2019-05-16', value: 26.14 },\n\t{ time: '2019-05-17', value: 26.09 },\n\t{ time: '2019-05-20', value: 26.01 },\n\t{ time: '2019-05-21', value: 26.12 },\n\t{ time: '2019-05-22', value: 26.15 },\n\t{ time: '2019-05-23', value: 26.18 },\n\t{ time: '2019-05-24', value: 26.16 },\n\t{ time: '2019-05-28', value: 26.23 },\n\t// hide-end\n]);\n\nconst symbolName = 'ETC USD 7D VWAP';\n\nconst container = document.getElementById('container');\n\nconst legend = document.createElement('div');\nlegend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;`;\ncontainer.appendChild(legend);\n\nconst firstRow = document.createElement('div');\nfirstRow.innerHTML = symbolName;\nfirstRow.style.color = CHART_TEXT_COLOR;\nlegend.appendChild(firstRow);\n\nchart.subscribeCrosshairMove(param => {\n\tlet priceFormatted = '';\n\tif (param.time) {\n\t\tconst data = param.seriesData.get(areaSeries);\n\t\tconst price = data.value !== undefined ? data.value : data.close;\n\t\tpriceFormatted = price.toFixed(2);\n\t}\n\tfirstRow.innerHTML = `${symbolName} <strong>${priceFormatted}</strong>`;\n});\n\nchart.timeScale().fitContent();\n",u="// remove-start\n// Lightweight Charts\u2122 Example: Legend 3 Lines\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/legends\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nchart.applyOptions({\n\trightPriceScale: {\n\t\tscaleMargins: {\n\t\t\ttop: 0.4, // leave some space for the legend\n\t\t\tbottom: 0.15,\n\t\t},\n\t},\n\tcrosshair: {\n\t\t// hide the horizontal crosshair line\n\t\thorzLine: {\n\t\t\tvisible: false,\n\t\t\tlabelVisible: false,\n\t\t},\n\t},\n\t// hide the grid lines\n\tgrid: {\n\t\tvertLines: {\n\t\t\tvisible: false,\n\t\t},\n\t\thorzLines: {\n\t\t\tvisible: false,\n\t\t},\n\t},\n});\n\nconst areaSeries = chart.addAreaSeries({\n\ttopColor: AREA_TOP_COLOR,\n\tbottomColor: AREA_BOTTOM_COLOR,\n\tlineColor: LINE_LINE_COLOR,\n\tlineWidth: 2,\n\tcrossHairMarkerVisible: false,\n});\n\nconst data = [\n\t{ time: '2018-10-19', value: 26.19 },\n\t// hide-start\n\t{ time: '2018-10-22', value: 25.87 },\n\t{ time: '2018-10-23', value: 25.83 },\n\t{ time: '2018-10-24', value: 25.78 },\n\t{ time: '2018-10-25', value: 25.82 },\n\t{ time: '2018-10-26', value: 25.81 },\n\t{ time: '2018-10-29', value: 25.82 },\n\t{ time: '2018-10-30', value: 25.71 },\n\t{ time: '2018-10-31', value: 25.82 },\n\t{ time: '2018-11-01', value: 25.72 },\n\t{ time: '2018-11-02', value: 25.74 },\n\t{ time: '2018-11-05', value: 25.81 },\n\t{ time: '2018-11-06', value: 25.75 },\n\t{ time: '2018-11-07', value: 25.73 },\n\t{ time: '2018-11-08', value: 25.75 },\n\t{ time: '2018-11-09', value: 25.75 },\n\t{ time: '2018-11-12', value: 25.76 },\n\t{ time: '2018-11-13', value: 25.8 },\n\t{ time: '2018-11-14', value: 25.77 },\n\t{ time: '2018-11-15', value: 25.75 },\n\t{ time: '2018-11-16', value: 25.75 },\n\t{ time: '2018-11-19', value: 25.75 },\n\t{ time: '2018-11-20', value: 25.72 },\n\t{ time: '2018-11-21', value: 25.78 },\n\t{ time: '2018-11-23', value: 25.72 },\n\t{ time: '2018-11-26', value: 25.78 },\n\t{ time: '2018-11-27', value: 25.85 },\n\t{ time: '2018-11-28', value: 25.85 },\n\t{ time: '2018-11-29', value: 25.55 },\n\t{ time: '2018-11-30', value: 25.41 },\n\t{ time: '2018-12-03', value: 25.41 },\n\t{ time: '2018-12-04', value: 25.42 },\n\t{ time: '2018-12-06', value: 25.33 },\n\t{ time: '2018-12-07', value: 25.39 },\n\t{ time: '2018-12-10', value: 25.32 },\n\t{ time: '2018-12-11', value: 25.48 },\n\t{ time: '2018-12-12', value: 25.39 },\n\t{ time: '2018-12-13', value: 25.45 },\n\t{ time: '2018-12-14', value: 25.52 },\n\t{ time: '2018-12-17', value: 25.38 },\n\t{ time: '2018-12-18', value: 25.36 },\n\t{ time: '2018-12-19', value: 25.65 },\n\t{ time: '2018-12-20', value: 25.7 },\n\t{ time: '2018-12-21', value: 25.66 },\n\t{ time: '2018-12-24', value: 25.66 },\n\t{ time: '2018-12-26', value: 25.65 },\n\t{ time: '2018-12-27', value: 25.66 },\n\t{ time: '2018-12-28', value: 25.68 },\n\t{ time: '2018-12-31', value: 25.77 },\n\t{ time: '2019-01-02', value: 25.72 },\n\t{ time: '2019-01-03', value: 25.69 },\n\t{ time: '2019-01-04', value: 25.71 },\n\t{ time: '2019-01-07', value: 25.72 },\n\t{ time: '2019-01-08', value: 25.72 },\n\t{ time: '2019-01-09', value: 25.66 },\n\t{ time: '2019-01-10', value: 25.85 },\n\t{ time: '2019-01-11', value: 25.92 },\n\t{ time: '2019-01-14', value: 25.94 },\n\t{ time: '2019-01-15', value: 25.95 },\n\t{ time: '2019-01-16', value: 26.0 },\n\t{ time: '2019-01-17', value: 25.99 },\n\t{ time: '2019-01-18', value: 25.6 },\n\t{ time: '2019-01-22', value: 25.81 },\n\t{ time: '2019-01-23', value: 25.7 },\n\t{ time: '2019-01-24', value: 25.74 },\n\t{ time: '2019-01-25', value: 25.8 },\n\t{ time: '2019-01-28', value: 25.83 },\n\t{ time: '2019-01-29', value: 25.7 },\n\t{ time: '2019-01-30', value: 25.78 },\n\t{ time: '2019-01-31', value: 25.35 },\n\t{ time: '2019-02-01', value: 25.6 },\n\t{ time: '2019-02-04', value: 25.65 },\n\t{ time: '2019-02-05', value: 25.73 },\n\t{ time: '2019-02-06', value: 25.71 },\n\t{ time: '2019-02-07', value: 25.71 },\n\t{ time: '2019-02-08', value: 25.72 },\n\t{ time: '2019-02-11', value: 25.76 },\n\t{ time: '2019-02-12', value: 25.84 },\n\t{ time: '2019-02-13', value: 25.85 },\n\t{ time: '2019-02-14', value: 25.87 },\n\t{ time: '2019-02-15', value: 25.89 },\n\t{ time: '2019-02-19', value: 25.9 },\n\t{ time: '2019-02-20', value: 25.92 },\n\t{ time: '2019-02-21', value: 25.96 },\n\t{ time: '2019-02-22', value: 26.0 },\n\t{ time: '2019-02-25', value: 25.93 },\n\t{ time: '2019-02-26', value: 25.92 },\n\t{ time: '2019-02-27', value: 25.67 },\n\t{ time: '2019-02-28', value: 25.79 },\n\t{ time: '2019-03-01', value: 25.86 },\n\t{ time: '2019-03-04', value: 25.94 },\n\t{ time: '2019-03-05', value: 26.02 },\n\t{ time: '2019-03-06', value: 25.95 },\n\t{ time: '2019-03-07', value: 25.89 },\n\t{ time: '2019-03-08', value: 25.94 },\n\t{ time: '2019-03-11', value: 25.91 },\n\t{ time: '2019-03-12', value: 25.92 },\n\t{ time: '2019-03-13', value: 26.0 },\n\t{ time: '2019-03-14', value: 26.05 },\n\t{ time: '2019-03-15', value: 26.11 },\n\t{ time: '2019-03-18', value: 26.1 },\n\t{ time: '2019-03-19', value: 25.98 },\n\t{ time: '2019-03-20', value: 26.11 },\n\t{ time: '2019-03-21', value: 26.12 },\n\t{ time: '2019-03-22', value: 25.88 },\n\t{ time: '2019-03-25', value: 25.85 },\n\t{ time: '2019-03-26', value: 25.72 },\n\t{ time: '2019-03-27', value: 25.73 },\n\t{ time: '2019-03-28', value: 25.8 },\n\t{ time: '2019-03-29', value: 25.77 },\n\t{ time: '2019-04-01', value: 26.06 },\n\t{ time: '2019-04-02', value: 25.93 },\n\t{ time: '2019-04-03', value: 25.95 },\n\t{ time: '2019-04-04', value: 26.06 },\n\t{ time: '2019-04-05', value: 26.16 },\n\t{ time: '2019-04-08', value: 26.12 },\n\t{ time: '2019-04-09', value: 26.07 },\n\t{ time: '2019-04-10', value: 26.13 },\n\t{ time: '2019-04-11', value: 26.04 },\n\t{ time: '2019-04-12', value: 26.04 },\n\t{ time: '2019-04-15', value: 26.05 },\n\t{ time: '2019-04-16', value: 26.01 },\n\t{ time: '2019-04-17', value: 26.09 },\n\t{ time: '2019-04-18', value: 26.0 },\n\t{ time: '2019-04-22', value: 26.0 },\n\t{ time: '2019-04-23', value: 26.06 },\n\t{ time: '2019-04-24', value: 26.0 },\n\t{ time: '2019-04-25', value: 25.81 },\n\t{ time: '2019-04-26', value: 25.88 },\n\t{ time: '2019-04-29', value: 25.91 },\n\t{ time: '2019-04-30', value: 25.9 },\n\t{ time: '2019-05-01', value: 26.02 },\n\t{ time: '2019-05-02', value: 25.97 },\n\t{ time: '2019-05-03', value: 26.02 },\n\t{ time: '2019-05-06', value: 26.03 },\n\t{ time: '2019-05-07', value: 26.04 },\n\t{ time: '2019-05-08', value: 26.05 },\n\t{ time: '2019-05-09', value: 26.05 },\n\t{ time: '2019-05-10', value: 26.08 },\n\t{ time: '2019-05-13', value: 26.05 },\n\t{ time: '2019-05-14', value: 26.01 },\n\t{ time: '2019-05-15', value: 26.03 },\n\t{ time: '2019-05-16', value: 26.14 },\n\t{ time: '2019-05-17', value: 26.09 },\n\t{ time: '2019-05-20', value: 26.01 },\n\t{ time: '2019-05-21', value: 26.12 },\n\t{ time: '2019-05-22', value: 26.15 },\n\t{ time: '2019-05-23', value: 26.18 },\n\t{ time: '2019-05-24', value: 26.16 },\n\t{ time: '2019-05-28', value: 26.23 },\n\t// hide-end\n];\n\nareaSeries.setData(data);\n\nconst symbolName = 'AEROSPACE';\n\nconst container = document.getElementById('container');\n\nconst legend = document.createElement('div');\nlegend.style = `position: absolute; left: 12px; top: 12px; z-index: 1; font-size: 14px; font-family: sans-serif; line-height: 18px; font-weight: 300;`;\nlegend.style.color = CHART_TEXT_COLOR;\ncontainer.appendChild(legend);\n\nconst getLastBar = series => {\n\tconst lastIndex = series.dataByIndex(Number.MAX_SAFE_INTEGER, -1);\n\treturn series.dataByIndex(lastIndex);\n};\nconst formatPrice = price => (Math.round(price * 100) / 100).toFixed(2);\nconst setTooltipHtml = (name, date, price) => {\n\tlegend.innerHTML = `<div style=\"font-size: 24px; margin: 4px 0px;\">${name}</div><div style=\"font-size: 22px; margin: 4px 0px;\">${price}</div><div>${date}</div>`;\n};\n\nconst updateLegend = param => {\n\tconst validCrosshairPoint = !(\n\t\tparam === undefined || param.time === undefined || param.point.x < 0 || param.point.y < 0\n\t);\n\tconst bar = validCrosshairPoint ? param.seriesData.get(areaSeries) : getLastBar(areaSeries);\n\t// time is in the same format that you supplied to the setData method,\n\t// which in this case is YYYY-MM-DD\n\tconst time = bar.time;\n\tconst price = bar.value !== undefined ? bar.value : bar.close;\n\tconst formattedPrice = formatPrice(price);\n\tsetTooltipHtml(symbolName, time, formattedPrice);\n};\n\nchart.subscribeCrosshairMove(updateLegend);\n\nupdateLegend(undefined);\n\nchart.timeScale().fitContent();\n",s={title:"Legends",sidebar_label:"Legends",description:"Examples on how to add a legend to your chart.",pagination_prev:null,pagination_next:null,keywords:["example","legend"]},c=void 0,d={unversionedId:"how_to/legends",id:"how_to/legends",title:"Legends",description:"Examples on how to add a legend to your chart.",source:"@site/tutorials/how_to/legends.mdx",sourceDirName:"how_to",slug:"/how_to/legends",permalink:"/lightweight-charts/tutorials/how_to/legends",draft:!1,tags:[],version:"current",frontMatter:{title:"Legends",sidebar_label:"Legends",description:"Examples on how to add a legend to your chart.",pagination_prev:null,pagination_next:null,keywords:["example","legend"]},sidebar:"tutorialsSidebar"},v={},h=[{value:"How to",id:"how-to",level:2},{value:"Resources",id:"resources",level:2},{value:"Examples",id:"examples",level:2},{value:"Simple Legend Example",id:"simple-legend-example",level:3},{value:"3 Line Legend Example",id:"3-line-legend-example",level:3}],p={toc:h},g="wrapper";function C(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)(l.A,{notCurrent:"This example is for the latest published version of Lightweight\xa0Charts.",type:"caution",displayVersionMessage:!0,mdxType:"VersionWarningAdmonition"}),(0,i.yg)("p",null,"Lightweight Charts\u2122 doesn't include a built-in legend feature, however it is something which can be added\nto your chart by following the examples presented below."),(0,i.yg)("h2",{id:"how-to"},"How to"),(0,i.yg)("p",null,"In order to add a legend to the chart we need to create and position an ",(0,i.yg)("inlineCode",{parentName:"p"},"html")," into the desired position above\nthe chart. We can then subscribe to the crosshairMove events (",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi#subscribecrosshairmove"},"subscribeCrosshairMove"),") provided by the ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/IChartApi"},(0,i.yg)("inlineCode",{parentName:"a"},"IChartApi"))," instance, and manually\nupdate the content within our ",(0,i.yg)("inlineCode",{parentName:"p"},"html")," legend element."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"chart.subscribeCrosshairMove(param => {\n    let priceFormatted = '';\n    if (param.time) {\n        const dataPoint = param.seriesData.get(areaSeries);\n        const price = data.value !== undefined ? data.value : data.close;\n        priceFormatted = price.toFixed(2);\n    }\n    // legend is a html element which has already been created\n    legend.innerHTML = `${symbolName} <strong>${priceFormatted}</strong>`;\n});\n")),(0,i.yg)("p",null,"The process of creating the legend html element and positioning can be seen within the examples below.\nEssentially, we create a new div element within the container div (holding the chart) and then position\nand style it using ",(0,i.yg)("inlineCode",{parentName:"p"},"css"),"."),(0,i.yg)("p",null,"You can see full ",(0,i.yg)("a",{parentName:"p",href:"#examples"},"working examples")," below."),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/api/interfaces/IChartApi#subscribecrosshairmove"},"subscribeCrosshairMove")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/api/interfaces/MouseEventParams"},"MouseEventParams Interface")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/api#mouseeventhandler"},"MouseEventhandler"))),(0,i.yg)("p",null,"Below are a few external resources related to creating and styling html elements:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement"},"createElement")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML"},"innerHTML")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style"},"style property"))),(0,i.yg)("h2",{id:"examples"},"Examples"),(0,i.yg)(r.Ay,{mdxType:"UsageGuidePartial"}),(0,i.yg)("h3",{id:"simple-legend-example"},"Simple Legend Example"),(0,i.yg)(o.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,mdxType:"CodeBlock"},m),(0,i.yg)("h3",{id:"3-line-legend-example"},"3 Line Legend Example"),(0,i.yg)(o.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,mdxType:"CodeBlock"},u))}C.isMDXComponent=!0},11963:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(96540),i=n(20053),l=n(17559),r=n(21312);const o={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const m={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function s(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function c(e){const{children:t,type:n,title:r,icon:c}=s(e),d=function(e){const t=u[e]??e,n=m[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),v=r??d.label,{iconComponent:h}=d,p=c??a.createElement(h,null);return a.createElement("div",{className:(0,i.A)(l.G.common.admonition,l.G.common.admonitionType(e.type),"alert",`alert--${d.infimaClassName}`,o.admonition)},a.createElement("div",{className:o.admonitionHeading},a.createElement("span",{className:o.admonitionIcon},p),v),a.createElement("div",{className:o.admonitionContent},t))}},5546:(e,t,n)=>{n.d(t,{Ay:()=>C});var a=n(96540),i=n(77964),l=n(78478),r=n(95293),o=n(55597),m=n(6715);function u(e,t,n){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();n(e.width,e.height)}),!0)}const s={3.8:async e=>{const t=await n.e(73409).then(n.bind(n,73409));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:void 0}},"4.0":async e=>{const t=await n.e(37476).then(n.bind(n,37476));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:void 0}},4.1:async e=>{const t=await n.e(59631).then(n.bind(n,59631));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:(n,a,i)=>{const l=t.createChartEx(n,a,i);return u(e,n,l.resize.bind(l)),l}}},4.2:async e=>{const t=await n.e(90142).then(n.bind(n,90142));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:(n,a,i)=>{const l=t.createChartEx(n,a,i);return u(e,n,l.resize.bind(l)),l}}},current:async()=>{const e=await n.e(47839).then(n.bind(n,47839));return{module:e,createChart:(t,n)=>{const a=e.createChart(t,n);return u(window,t,a.resize.bind(a)),a},createChartEx:(t,n,a)=>{const i=e.createChartEx(t,n,a);return u(window,t,i.resize.bind(i)),i}}}},c="iframe_R_Fr";function d(e){const{script:t,iframeStyle:n}=e,{preferredVersion:i}=(0,o.g1)(),l=m&&m.length>0?m[0]:"",r=i?.name??l??"current",u=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),d=a.useRef(null);return a.useEffect((()=>{const e=d.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;const a=async()=>{try{const{module:e,createChart:n,createChartEx:a}=await s[r](t);Object.assign(t,e),t.createChart=n,t.createChartEx=a,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)a();else{const t=()=>{a(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[u]),a.createElement("iframe",{key:t,ref:d,srcDoc:u,className:c,style:n})}var v=n(82840);const h=()=>`${Math.random().toString(36).slice(2,11)}`;function p(e){return"string"==typeof e?e:function(){const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>t(h())),[]),e}()}const g=Object.keys(v.k.DARK);const C=e=>{const{chart:t,replaceThemeConstants:n,hideableCode:o,chartOnly:m,chartOnTop:u=!1,iframeStyle:s,replaceTabs:h=!0,codeUsage:C,...E}=e;let{children:f}=e;const{colorMode:L}=(0,r.G)(),O="dark"===L,y=p();if(n&&"string"==typeof f&&(f=function(e,t){const n=t?v.k.DARK:v.k.LIGHT;let a=e;for(const i of g)a=a.replace(new RegExp(i,"g"),`'${n[i]}'`);return a}(f,O)),h&&"string"==typeof f&&(f=f.replace(/\t/g,"    ")),f=f.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||o){const e=!m&&a.createElement(i.A,E,f),n=t&&a.createElement(l.A,{fallback:a.createElement("div",{className:c},"\xa0")},(()=>a.createElement(d,{script:f,iframeStyle:s}))),r=o&&a.createElement(a.Fragment,null,a.createElement("input",{id:y,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:y},"Show all code"));return u?a.createElement(a.Fragment,null,n,C,r,e):a.createElement(a.Fragment,null,C,r,e,n)}return a.createElement(i.A,E,f)}},7951:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(55597),i=n(11963),l=n(96540),r=n(6715);function o(e){let{notCurrent:t,isCurrent:n,type:o,title:m,displayVersionMessage:u}=e;const{preferredVersion:s,savePreferredVersionName:c}=(0,a.g1)(),d=Boolean(t&&!s?.isLast),v=Boolean(n&&s?.isLast),h=r&&r.length>0?r[0]:"",p=s?.label??s?.name??"";if(!d&&!v||!p)return l.createElement(l.Fragment,null);let g=(d?t:n)??"";return g=g.replace(/DOC_VERSION/g,p).replace(/CURRENT_VERSION/g,h),l.createElement("div",null,l.createElement(i.A,{type:o,title:m},l.createElement("p",null,g),u&&l.createElement("p",null,"You are currently viewing the documentation for the version tagged:"," ",l.createElement("strong",null,p),". ",l.createElement("br",null),l.createElement("strong",null,l.createElement("a",{href:"",onClick:()=>c(h)},"Switch to the latest published version"))," ","(",h,")")))}},82840:(e,t,n)=>{n.d(t,{k:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:e=>{e.exports=JSON.parse('["4.2","4.1","4.0","3.8"]')}}]);