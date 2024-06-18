var k=Object.defineProperty;var y=(r,t,i)=>t in r?k(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var f=(r,t,i)=>(y(r,typeof t!="symbol"?t+"":t,i),i);import{R as v,T as C}from"./lightweight-charts.production-e1f3dc9f.js";import{p as d,a as m}from"./positions-0a54307c.js";import{g as W,c as g}from"./candles-e6ca9d48.js";const z={...v,whiskerColor:"rgba(106, 27, 154, 1)",lowerQuartileFill:"rgba(103, 58, 183, 1)",upperQuartileFill:"rgba(233, 30, 99, 1)",outlierColor:"rgba(149, 152, 161, 1)"};function B(r){const t=g(r,1),i=Math.floor(r),e=g(r/2,1);return{body:t,medianLine:Math.max(i,t),extremeLines:e,outlierRadius:Math.min(t,4)}}class M{constructor(){f(this,"_data",null);f(this,"_options",null)}draw(t,i){t.useBitmapCoordinateSpace(e=>this._drawImpl(e,i))}update(t,i){this._data=t,this._options=i}_drawImpl(t,i){if(this._data===null||this._data.bars.length===0||this._data.visibleRange===null||this._options===null)return;const e=this._options,n=this._data.bars.map(o=>({quartilesY:o.originalData.quartiles.map(s=>i(s)??0),outliers:(o.originalData.outliers||[]).map(s=>i(s)??0),x:o.x})),l=B(this._data.barSpacing),a=W(t.horizontalPixelRatio),u=W(t.verticalPixelRatio);for(let o=this._data.visibleRange.from;o<this._data.visibleRange.to;o++){const s=n[o];l.outlierRadius>2&&this._drawOutliers(t.context,s,l.outlierRadius,e,t.horizontalPixelRatio,t.verticalPixelRatio),this._drawWhisker(t.context,s,l.extremeLines,e,t.horizontalPixelRatio,t.verticalPixelRatio,a,u),this._drawBox(t.context,s,l.body,e,t.horizontalPixelRatio,t.verticalPixelRatio),this._drawMedianLine(t.context,s,l.medianLine,e,t.horizontalPixelRatio,t.verticalPixelRatio,u)}}_drawWhisker(t,i,e,n,l,a,u,o){t.save(),t.fillStyle=n.whiskerColor;const s=d(i.x,l,u),_=m(i.quartilesY[0],i.quartilesY[1],a);t.fillRect(s.position,_.position,s.length,_.length);const w=m(i.quartilesY[3],i.quartilesY[4],a);t.fillRect(s.position,w.position,s.length,w.length);const p=d(i.x,l,e),R=d(i.quartilesY[4],a,o);t.fillRect(p.position,R.position,p.length,R.length);const Y=d(i.quartilesY[0],a,o);t.fillRect(p.position,Y.position,p.length,Y.length),t.restore()}_drawBox(t,i,e,n,l,a){t.save();const u=m(i.quartilesY[2],i.quartilesY[3],a),o=m(i.quartilesY[1],i.quartilesY[2],a),s=d(i.x,l,e);t.fillStyle=n.lowerQuartileFill,t.fillRect(s.position,o.position,s.length,o.length),t.fillStyle=n.upperQuartileFill,t.fillRect(s.position,u.position,s.length,u.length),t.restore()}_drawMedianLine(t,i,e,n,l,a,u){const o=d(i.x,l,e),s=d(i.quartilesY[2],a,u);t.save(),t.fillStyle=n.whiskerColor,t.fillRect(o.position,s.position,o.length,s.length),t.restore()}_drawOutliers(t,i,e,n,l,a){t.save();const u=d(i.x,l,1,!0);t.fillStyle=n.outlierColor,t.lineWidth=0,i.outliers.forEach(o=>{t.beginPath();const s=d(o,a,1,!0);t.arc(u.position,s.position,e,0,2*Math.PI),t.fill(),t.closePath()}),t.restore()}}class x{constructor(){f(this,"_renderer");this._renderer=new M}priceValueBuilder(t){return[t.quartiles[4],t.quartiles[0],t.quartiles[2]]}isWhitespace(t){return t.quartiles===void 0}renderer(){return this._renderer}update(t,i){this._renderer.update(t,i)}defaultOptions(){return z}}const q=24*60*60;function h(r,t,i,e,n,l){return[l+r,l+t,l+i,l+e,l+n]}function c(r,t){return[{quartiles:h(55,70,80,85,95,t)},{quartiles:h(50,70,78,83,90,t)},{quartiles:h(58,68,75,85,90,t),outliers:[45+t,50+t]},{quartiles:h(55,65,70,80,88,t)},{quartiles:h(52,63,68,77,85,t)},{quartiles:h(50,65,72,76,88,t),outliers:[45+t,95+t,100+t]},{quartiles:h(40,60,78,85,90,t)},{quartiles:h(45,72,80,88,95,t)},{quartiles:h(47,70,82,86,97,t)},{quartiles:h(53,68,83,87,92,t),outliers:[45+t,100+t]}].map((i,e)=>({...i,time:r+e*q}))}function D(){return[...c(1677628800,0),...c(1677628800+1*10*q,20),...c(1677628800+2*10*q,40),...c(1677628800+(3*10+1)*q,30)]}const L=window.chart=C("chart",{autoSize:!0}),Q=new x,V=L.addCustomSeries(Q,{baseLineColor:"",priceLineVisible:!1,lastValueVisible:!1}),F=D();V.setData(F);L.timeScale().fitContent();
