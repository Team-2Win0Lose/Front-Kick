import{e as R,R as ce,Z as Ie,s as o,u as z,a as i,j as b,b as D,E as Le,X as $e,Q,D as Ge,a0 as Pe,f as Ve,S as qe}from"./vendor-5d52e3a8.js";import{I as Ue}from"./react-icons-515e81fc.js";import{S as Ke}from"./react-slick-9fa7b3c7.js";/* empty css                       */import{C as Ye,q as Ze,u as Xe,v as ze,w as Ne,D as Je,x as ge,y as re,z as Qe,A as j,E as F,F as x,H as et,I as tt,J as nt,K as B,R as L,L as it,_ as N,M as $,N as st,O as at,Q as ot,T as ee,U as he,V as rt,W as pe,X as lt,Y as dt,Z as le,$ as ct,a0 as gt,a1 as ht,a2 as pt,a3 as ft,a4 as fe,a5 as ut,a6 as ue,a7 as mt,a8 as xt,a9 as yt,aa as bt,ab as vt,ac as ne,ad as wt,ae as St,af as Ct,ag as kt,ah as Rt,ai as Et,aj as Dt,c as _,a as me,ak as Mt,k as _e,al as oe,am as G,an as ie,ao as Tt,ap as It,aq as Pt}from"./common-408be586.js";import{P as J}from"./CreateRoom-d731f5c0.js";class je extends R.Component{constructor(){super(...arguments),this.elRef=R.createRef(),this.isUpdating=!1,this.isUnmounting=!1,this.state={customRenderingMap:new Map},this.requestResize=()=>{this.isUnmounting||(this.cancelResize(),this.resizeId=requestAnimationFrame(()=>{this.doResize()}))}}render(){const e=[];for(const t of this.state.customRenderingMap.values())e.push(ce.createElement(zt,{key:t.id,customRendering:t}));return ce.createElement("div",{ref:this.elRef},e)}componentDidMount(){const e=new Ye;this.handleCustomRendering=e.handle.bind(e),this.calendar=new Ze(this.elRef.current,Object.assign(Object.assign({},this.props),{handleCustomRendering:this.handleCustomRendering})),this.calendar.render();let t;e.subscribe(n=>{const r=Date.now(),s=!t;(s||this.isUpdating||this.isUnmounting||r-t<100?Fe:Ie.flushSync)(()=>{this.setState({customRenderingMap:n},()=>{t=r,s?this.doResize():this.requestResize()})})})}componentDidUpdate(){this.isUpdating=!0,this.calendar.resetOptions(Object.assign(Object.assign({},this.props),{handleCustomRendering:this.handleCustomRendering})),this.isUpdating=!1}componentWillUnmount(){this.isUnmounting=!0,this.cancelResize(),this.calendar.destroy()}doResize(){this.calendar.updateSize()}cancelResize(){this.resizeId!==void 0&&(cancelAnimationFrame(this.resizeId),this.resizeId=void 0)}getApi(){return this.calendar}}je.act=Fe;class zt extends R.PureComponent{render(){const{customRendering:e}=this.props,{generatorMeta:t}=e,n=typeof t=="function"?t(e.renderProps):t;return Ie.createPortal(n,e.containerEl)}}function Fe(a){a()}var Nt=':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';Xe(Nt);function U(a,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of a)t[n.row].push(n);return t}function K(a,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of a)t[n.firstCol].push(n);return t}function xe(a,e){let t=[];if(a){for(let n=0;n<e;n+=1)t[n]={affectedInstances:a.affectedInstances,isEvent:a.isEvent,segs:[]};for(let n of a.segs)t[n.row].segs.push(n)}else for(let n=0;n<e;n+=1)t[n]=null;return t}const He=ze({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function Be(a){let{display:e}=a.eventRange.ui;return e==="list-item"||e==="auto"&&!a.eventRange.def.allDay&&a.firstCol===a.lastCol&&a.isStart&&a.isEnd}class Ae extends le{render(){let{props:e}=this;return x(ct,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:He,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class Oe extends le{render(){let{props:e,context:t}=this,{options:n}=t,{seg:r}=e,s=n.eventTimeFormat||He,d=gt(r,s,t,!0,e.defaultDisplayEventEnd);return x(pt,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:ht(e.seg,t),defaultGenerator:_t,timeText:d,isResizing:!1,isDateSelecting:!1}))}}function _t(a){return x(N,null,x("div",{className:"fc-daygrid-event-dot",style:{borderColor:a.borderColor||a.backgroundColor}}),a.timeText&&x("div",{className:"fc-event-time"},a.timeText),x("div",{className:"fc-event-title"},a.event.title||x(N,null," ")))}class jt extends le{constructor(){super(...arguments),this.compileSegs=j(Ft)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return x(St,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let r=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return x(N,null,t.map(s=>{let d=s.eventRange.instance.instanceId;return x("div",{className:"fc-daygrid-event-harness",key:d,style:{visibility:r[d]?"hidden":""}},Be(s)?x(Oe,Object.assign({seg:s,isDragging:!1,isSelected:d===e.eventSelection,defaultDisplayEventEnd:!1},$(s,e.todayRange))):x(Ae,Object.assign({seg:s,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:d===e.eventSelection,defaultDisplayEventEnd:!1},$(s,e.todayRange))))}))}})}}function Ft(a){let e=[],t=[];for(let n of a)e.push(n.seg),n.isVisible||t.push(n.seg);return{allSegs:e,invisibleSegs:t}}const Ht=ze({week:"narrow"});class Bt extends B{constructor(){super(...arguments),this.rootElRef=F(),this.state={dayNumberId:ft()},this.handleRootEl=e=>{fe(this.rootElRef,e),fe(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:r}=this,{options:s,dateEnv:d}=e,{date:l,dateProfile:c}=t;const h=t.showDayNumber&&Ot(l,c.currentRange,d);return x(xt,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:At,date:l,dateProfile:c,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:h,extraRenderProps:t.extraRenderProps},(u,w)=>x("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&x(ut,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:ue(e,l,"week"),date:l,defaultFormat:Ht}),!w.isDisabled&&(t.showDayNumber||mt(s)||t.forceDayTop)?x("div",{className:"fc-daygrid-day-top"},x(u,{elTag:"a",elClasses:["fc-daygrid-day-number",h&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},ue(e,l)),{id:n.dayNumberId})})):t.showDayNumber?x("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},x("a",{className:"fc-daygrid-day-number"}," ")):void 0,x("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,x("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},x(jt,{allDayDate:l,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:r,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),x("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}}function At(a){return a.dayNumberText||x(N,null," ")}function Ot(a,e,t){const{start:n,end:r}=e,s=yt(r,-1),d=t.getYear(n),l=t.getMonth(n),c=t.getYear(s),h=t.getMonth(s);return!(d===c&&l===h)&&(a.valueOf()===n.valueOf()||t.getDay(a)===1&&a.valueOf()<r.valueOf())}function Wt(a,e,t,n,r,s,d){let l=new Gt;l.allowReslicing=!0,l.strictOrder=n,e===!0||t===!0?(l.maxCoord=s,l.hiddenConsumes=!0):typeof e=="number"?l.maxStackCnt=e:typeof t=="number"&&(l.maxStackCnt=t,l.hiddenConsumes=!0);let c=[],h=[];for(let k=0;k<a.length;k+=1){let p=a[k],{instanceId:f}=p.eventRange.instance,m=r[f];m!=null?c.push({index:k,thickness:m,span:{start:p.firstCol,end:p.lastCol+1}}):h.push(p)}let u=l.addSegs(c),w=l.toRects(),{singleColPlacements:C,multiColPlacements:y,leftoverMargins:S}=Lt(w,a,d),v=[],g=[];for(let k of h){y[k.firstCol].push({seg:k,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let p=k.firstCol;p<=k.lastCol;p+=1)C[p].push({seg:H(k,p,p+1,d),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let k=0;k<d.length;k+=1)v.push(0);for(let k of u){let p=a[k.index],f=k.span;y[f.start].push({seg:H(p,f.start,f.end,d),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let m=f.start;m<f.end;m+=1)v[m]+=1,C[m].push({seg:H(p,m,m+1,d),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let k=0;k<d.length;k+=1)g.push(S[k]);return{singleColPlacements:C,multiColPlacements:y,moreCnts:v,moreMarginTops:g}}function Lt(a,e,t){let n=$t(a,t.length),r=[],s=[],d=[];for(let l=0;l<t.length;l+=1){let c=n[l],h=[],u=0,w=0;for(let y of c){let S=e[y.index];h.push({seg:H(S,l,l+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:y.levelCoord-u}),u=y.levelCoord+y.thickness}let C=[];u=0,w=0;for(let y of c){let S=e[y.index],v=y.span.end-y.span.start>1,g=y.span.start===l;w+=y.levelCoord-u,u=y.levelCoord+y.thickness,v?(w+=y.thickness,g&&C.push({seg:H(S,y.span.start,y.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:y.levelCoord,marginTop:0})):g&&(C.push({seg:H(S,y.span.start,y.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:w}),w=0)}r.push(h),s.push(C),d.push(w)}return{singleColPlacements:r,multiColPlacements:s,leftoverMargins:d}}function $t(a,e){let t=[];for(let n=0;n<e;n+=1)t.push([]);for(let n of a)for(let r=n.span.start;r<n.span.end;r+=1)t[r].push(n);return t}function H(a,e,t,n){if(a.firstCol===e&&a.lastCol===t-1)return a;let r=a.eventRange,s=r.range,d=bt(s,{start:n[e].date,end:re(n[t-1].date,1)});return Object.assign(Object.assign({},a),{firstCol:e,lastCol:t-1,eventRange:{def:r.def,ui:Object.assign(Object.assign({},r.ui),{durationEditable:!1}),instance:r.instance,range:d},isStart:a.isStart&&d.start.valueOf()===s.start.valueOf(),isEnd:a.isEnd&&d.end.valueOf()===s.end.valueOf()})}class Gt extends vt{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:n}=this,r=s=>!this.forceHidden[ne(s)];for(let s=0;s<n.length;s+=1)n[s]=n[s].filter(r);return t}handleInvalidInsertion(e,t,n){const{entriesByLevel:r,forceHidden:s}=this,{touchingEntry:d,touchingLevel:l,touchingLateral:c}=e;if(this.hiddenConsumes&&d){const h=ne(d);if(!s[h])if(this.allowReslicing){const u=Object.assign(Object.assign({},d),{span:wt(d.span,t.span)}),w=ne(u);s[w]=!0,r[l][c]=u,this.splitEntry(d,t,n)}else s[h]=!0,n.push(d)}return super.handleInvalidInsertion(e,t,n)}}class We extends B{constructor(){super(...arguments),this.cellElRefs=new L,this.frameElRefs=new L,this.fgElRefs=new L,this.segHarnessRefs=new L,this.rootElRef=F(),this.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:r}=n,s=e.cells.length,d=K(e.businessHourSegs,s),l=K(e.bgEventSegs,s),c=K(this.getHighlightSegs(),s),h=K(this.getMirrorSegs(),s),{singleColPlacements:u,multiColPlacements:w,moreCnts:C,moreMarginTops:y}=Wt(it(e.fgEventSegs,r.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,r.eventOrderStrict,t.eventInstanceHeights,t.maxContentHeight,e.cells),S=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return x("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((v,g)=>{let k=this.renderFgSegs(g,e.forPrint?u[g]:w[g],e.todayRange,S),p=this.renderFgSegs(g,Vt(h[g],w),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return x(Bt,{key:v.key,elRef:this.cellElRefs.createRef(v.key),innerElRef:this.frameElRefs.createRef(v.key),dateProfile:e.dateProfile,date:v.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&g===0,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:v.extraRenderProps,extraDataAttrs:v.extraDataAttrs,extraClassNames:v.extraClassNames,extraDateSpan:v.extraDateSpan,moreCnt:C[g],moreMarginTop:y[g],singlePlacements:u[g],fgContentElRef:this.fgElRefs.createRef(v.key),fgContent:x(N,null,x(N,null,k),x(N,null,p)),bgContent:x(N,null,this.renderFillSegs(c[g],"highlight"),this.renderFillSegs(d[g],"non-business"),this.renderFillSegs(l[g],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let n=this.props;this.updateSizing(!Ne(e,n))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,r,s,d,l){let{context:c}=this,{eventSelection:h}=this.props,{framePositions:u}=this.state,w=this.props.cells.length===1,C=s||d||l,y=[];if(u)for(let S of t){let{seg:v}=S,{instanceId:g}=v.eventRange.instance,k=g+":"+e,p=S.isVisible&&!r[g],f=S.isAbsolute,m="",E="";f&&(c.isRtl?(E=0,m=u.lefts[v.lastCol]-u.lefts[v.firstCol]):(m=0,E=u.rights[v.firstCol]-u.rights[v.lastCol])),y.push(x("div",{className:"fc-daygrid-event-harness"+(f?" fc-daygrid-event-harness-abs":""),key:k,ref:C?null:this.segHarnessRefs.createRef(k),style:{visibility:p?"":"hidden",marginTop:f?"":S.marginTop,top:f?S.absoluteTop:"",left:m,right:E}},Be(v)?x(Oe,Object.assign({seg:v,isDragging:s,isSelected:g===h,defaultDisplayEventEnd:w},$(v,n))):x(Ae,Object.assign({seg:v,isDragging:s,isResizing:d,isDateSelecting:l,isSelected:g===h,defaultDisplayEventEnd:w},$(v,n)))))}return y}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:r}=this.props,{framePositions:s}=this.state,d=[];if(s)for(let l of e){let c=n?{right:0,left:s.lefts[l.lastCol]-s.lefts[l.firstCol]}:{left:0,right:s.rights[l.firstCol]-s.rights[l.lastCol]};d.push(x("div",{key:ot(l.eventRange),className:"fc-daygrid-bg-harness",style:c},t==="bg-event"?x(st,Object.assign({seg:l},$(l,r))):at(t)))}return x(N,{},...d)}updateSizing(e){let{props:t,state:n,frameElRefs:r}=this;if(!t.forPrint&&t.clientWidth!==null){if(e){let c=t.cells.map(h=>r.currentMap[h.key]);if(c.length){let h=this.rootElRef.current,u=new ee(h,c,!0,!1);(!n.framePositions||!n.framePositions.similarTo(u))&&this.setState({framePositions:new ee(h,c,!0,!1)})}}const s=this.state.eventInstanceHeights,d=this.queryEventInstanceHeights(),l=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({eventInstanceHeights:Object.assign(Object.assign({},s),d),maxContentHeight:l?this.computeMaxContentHeight():null})}}queryEventInstanceHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let r=Math.round(e[n].getBoundingClientRect().height),s=n.split(":")[0];t[s]=Math.max(t[s]||0,r)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}}We.addStateEquality({eventInstanceHeights:Ne});function Vt(a,e){if(!a.length)return[];let t=qt(e);return a.map(n=>({seg:n,isVisible:!0,isAbsolute:!0,absoluteTop:t[n.eventRange.instance.instanceId],marginTop:0}))}function qt(a){let e={};for(let t of a)for(let n of t)e[n.seg.eventRange.instance.instanceId]=n.absoluteTop;return e}class Ut extends B{constructor(){super(...arguments),this.splitBusinessHourSegs=j(U),this.splitBgEventSegs=j(U),this.splitFgEventSegs=j(U),this.splitDateSelectionSegs=j(U),this.splitEventDrag=j(xe),this.splitEventResize=j(xe),this.rowRefs=new L}render(){let{props:e,context:t}=this,n=e.cells.length,r=this.splitBusinessHourSegs(e.businessHourSegs,n),s=this.splitBgEventSegs(e.bgEventSegs,n),d=this.splitFgEventSegs(e.fgEventSegs,n),l=this.splitDateSelectionSegs(e.dateSelectionSegs,n),c=this.splitEventDrag(e.eventDrag,n),h=this.splitEventResize(e.eventResize,n),u=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return x(Et,{unit:"day"},(w,C)=>x(N,null,e.cells.map((y,S)=>x(We,{ref:this.rowRefs.createRef(S),key:y.length?y[0].date.toISOString():S,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:C,dateProfile:e.dateProfile,cells:y,renderIntro:e.renderRowIntro,businessHourSegs:r[S],eventSelection:e.eventSelection,bgEventSegs:s[S].filter(Kt),fgEventSegs:d[S],dateSelectionSegs:l[S],eventDrag:c[S],eventResize:h[S],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:u,forPrint:e.forPrint}))))}componentDidMount(){const e=this.rowRefs.currentMap[0].getCellEls()[0];this.rootEl=e?e.closest(".fc-daygrid-body"):null,this.rootEl&&this.context.registerInteractiveComponent(this,{el:this.rootEl,isHitComboAllowed:this.props.isHitComboAllowed})}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new ee(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new ee(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:r}=this,s=n.leftToIndex(e),d=r.topToIndex(t);if(d!=null&&s!=null){let l=this.props.cells[d][s];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(d,s),allDay:!0},l.extraDateSpan),dayEl:this.getCellEl(d,s),rect:{left:n.lefts[s],right:n.rights[s],top:r.tops[d],bottom:r.bottoms[d]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date,r=re(n,1);return{start:n,end:r}}}function Kt(a){return a.eventRange.def.allDay}class Yt extends B{constructor(){super(...arguments),this.elRef=F(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:r}=e,s=n===!0||t===!0;s&&!r&&(s=!1,t=null,n=null);let d=["fc-daygrid-body",s?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",r?"":"fc-daygrid-body-natural"];return x("div",{ref:this.elRef,className:d.join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},x("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:r?e.clientHeight:""}},e.colGroupNode,x("tbody",{role:"presentation"},x(Ut,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=Zt(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),n=t.closest(".fc-scroller"),r=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=r?r+1:0}this.needsScrollReset=!1}}}function Zt(a,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=a.querySelector(`[data-date="${Ct(e.currentDate)}-01"]`)),t||(t=a.querySelector(`[data-date="${kt(e.currentDate)}"]`)),t}class Xt extends Rt{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class Jt extends B{constructor(){super(...arguments),this.slicer=new Xt,this.tableRef=F()}render(){let{props:e,context:t}=this;return x(Yt,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class Qt extends Je{buildRenderRange(e,t,n){let r=super.buildRenderRange(e,t,n),{props:s}=this;return en({currentRange:r,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:s.fixedWeekCount,dateEnv:s.dateEnv})}}function en(a){let{dateEnv:e,currentRange:t}=a,{start:n,end:r}=t,s;if(a.snapToWeek&&(n=e.startOfWeek(n),s=e.startOfWeek(r),s.valueOf()!==r.valueOf()&&(r=ge(s,1))),a.fixedWeekCount){let d=e.startOfWeek(e.startOfMonth(re(t.end,-1))),l=Math.ceil(Qe(d,r));r=ge(r,6-l)}return{start:n,end:r}}class tn extends B{constructor(){super(...arguments),this.headerElRef=F()}renderSimpleLayout(e,t){let{props:n,context:r}=this,s=[],d=he(r.options);return e&&s.push({type:"header",key:"header",isSticky:d,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),s.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),x(pe,{elClasses:["fc-daygrid"],viewSpec:r.viewSpec},x(rt,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:s}))}renderHScrollLayout(e,t,n,r){let s=this.context.pluginHooks.scrollGridImpl;if(!s)throw new Error("No ScrollGrid implementation");let{props:d,context:l}=this,c=!d.forPrint&&he(l.options),h=!d.forPrint&&lt(l.options),u=[];return e&&u.push({type:"header",key:"header",isSticky:c,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),u.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),h&&u.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:dt}]}),x(pe,{elClasses:["fc-daygrid"],viewSpec:l.viewSpec},x(s,{liquid:!d.isHeightAuto&&!d.forPrint,forPrint:d.forPrint,collapsibleWidth:d.forPrint,colGroups:[{cols:[{span:n,minWidth:r}]}],sections:u}))}}class nn extends tn{constructor(){super(...arguments),this.buildDayTableModel=j(sn),this.headerRef=F(),this.tableRef=F()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,r=this.buildDayTableModel(n.dateProfile,t),s=e.dayHeaders&&x(et,{ref:this.headerRef,dateProfile:n.dateProfile,dates:r.headerDates,datesRepDistinctDays:r.rowCnt===1}),d=l=>x(Jt,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:r,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:l.tableColGroupNode,tableMinWidth:l.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:l.clientWidth,clientHeight:l.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(s,d,r.colCnt,e.dayMinWidth):this.renderSimpleLayout(s,d)}}function sn(a,e){let t=new tt(a.renderRange,e);return new nt(t,/year|month|week/.test(a.currentRangeUnit))}var an=Dt({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:nn,dateProfileGeneratorClass:Qt},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});const on=a=>{const[e,t]=R.useState("#eeeeee"),n=z(),r=s=>{t("#efd44c"),n(Mt({game_schedule_id:s.extendedProps.game_schedule_id,homename:s.extendedProps.home_team_name,awayname:s.extendedProps.away_team_name,home_team_id:s.extendedProps.home_team_id,date:s.start.toLocaleString("ko-KR"),stadium:s.extendedProps.stadium}))};return i("div",{children:b(dn,{style:{background:e},children:[b(be,{children:[b(cn,{children:[i(ye,{src:me(a.event.extendedProps.home_team_name),alt:a.event.extendedProps.home_team_name}),i(rn,{children:" vs "}),i(ye,{src:me(a.event.extendedProps.away_team_name),alt:a.event.extendedProps.away_team_name})]}),b(gn,{children:[b(we,{children:[i(Se,{children:"경기 일정"}),i(ve,{children:a.event.start.toLocaleString("ko-KR")})]}),b(we,{children:[i(Se,{children:"경기 장소"}),b(ve,{children:[a.event.extendedProps.stadium," 경기장"]})]})]})]}),i(be,{children:i(ln,{onClick:()=>r(a.event),children:"선택"})})]})})},rn=o.div`
  font-size: 30px;
  padding: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: black;
`,ln=o.div`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: black;
  /* background-color: white;
  border-radius: 15px; */
`,dn=o.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eeeeee;
  border-radius: 20px;
  margin: 10px auto;
  ${_.lessThan("mobile")`

	`}
`,ye=o.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`,be=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10%;
`,cn=o.div`
  display: flex;
  padding: 10px;
  margin-right: 10%;
  align-items: center;
  justify-content: center;
`,gn=o.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 15px;
`,ve=o.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`,we=o.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
  color: black;
`,Se=o.div`
  align-items: center;
  font-size: 20px;
`,hn=({teamName:a,teamEvents:e})=>{const[t,n]=R.useState(),r=e.map(c=>({...c,start:new Date(c.date)}));return b(pn,{children:[i(je,{plugins:[an],initialView:"dayGridMonth",events:r,eventContent:c=>{const{home_team_name:h,opponent_team_logo_img_url:u}=c.event.extendedProps;return i(fn,{children:h&&i(mn,{src:`https://kickstorage.blob.core.windows.net${u}`,alt:h})})},eventClick:c=>{n(c.event)}}),t&&i(un,{children:i(on,{event:t,onClose:()=>{n(null)}})})]})},pn=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  //캘린더 전체 사이즈
  .fc {
    width: 100%;
    height: 100%;
  }

  // toolbar container
  .fc .fc-toolbar.fc-header-toolbar {
    margin-top: 20px;
    padding: 0 30px;
    background-color: #1f1f45;
    height: 63px;
    font-weight: 600;
    font-size: 13px;
    /* line-height: 29px; */
    color: white;
    border-radius: 20px 20px 20px 20px;
    ${_.lessThan("mobile")`
      font-size:10px;
      padding: 0 20px;
	`}
  }

  // toolbar 버튼
  .fc .fc-button-primary {
    background-color: transparent;
    border: none;

    span {
      font-size: 30px;
    }

    :hover {
      background-color: transparent;
    }
  }

  // 요일 부분
  .fc-theme-standard th {
    height: 32px;
    padding-top: 3.5px;
    background: #1f1f45;
    border: 1px solid #dddee0;
    font-weight: 100;
    font-size: 16px;
    color: white;
  }

  // 오늘 날짜 배경색
  .fc .fc-daygrid-day.fc-day-today {
    color: #1f1f45;
  }

  // 날짜별 그리드
  .fc .fc-daygrid-day-frame {
  }

  // 날짜  ex) 2일
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    padding: 10px 0 0 10px;
  }

  // 각 이벤트 요소
  .fc-event {
    cursor: pointer;
    margin-bottom: 5px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    /* background-color:#1F1F45; */
  }
  /* 일요일 날짜 빨간색 */
  .fc-day-sun a {
    color: red;
    text-decoration: none;
  }

  /* 토요일 날짜 파란색 */
  .fc-day-sat a {
    color: blue;
    text-decoration: none;
  }
`,fn=o.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 100%;
  margin-bottom: -30%;
  color: black;
`;o.div`
  font-size: 12px;
  font-weight: bold;
`;const un=o.div`
  width: 100%;
  margin-top: 20px;
`,mn=o.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${_.lessThan("mobile")`
    width: 40px;
    height: 40px;
	`}
`,xn=[{item:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg",home_team_name:"강원",name:"강원FC"},{item:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg",home_team_name:"광주",name:"광주FC"},{item:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg",home_team_name:"대구",name:"대구FC"},{item:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg",home_team_name:"대전",name:"대전하나시티즌"},{item:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg",home_team_name:"수원",name:"수원삼성블루윙즈"},{item:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg",home_team_name:"수원FC",name:"수원FC"},{item:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg",home_team_name:"울산",name:"울산현대"},{item:"https://kickstorage.blob.core.windows.net/logo/incheon_united.svg",home_team_name:"인천",name:"인천유나이티드"},{item:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg",home_team_name:"전북",name:"전북현대모터스"},{item:"https://kickstorage.blob.core.windows.net/logo/jeju_united.svg",home_team_name:"제주",name:"제주유나이티드"},{item:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg",home_team_name:"포항",name:"포항스틸러스"},{item:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg",home_team_name:"서울",name:"FC서울"}],yn=()=>{const a={dots:!1,autoplay:!1,infinite:!0,slidesToShow:7,slidesToScroll:2,swipeToSlide:!0,accessibility:!0,autoplaySpeed:3e3,speed:500,prevArrow:i(Tn,{children:"‹"}),nextArrow:i(In,{children:"›"})},[e,t]=R.useState([]),[n,r]=R.useState("강원FC"),s=l=>{r(l)},d=R.useCallback(async l=>{const h=await(await fetch(`https://kick-back.azurewebsites.net/api/game_schedule/?home_team_name=${l}`,{method:"GET"})).json();t(h)},[]);return b(wn,{children:[i(bn,{...a,children:xn.map((l,c)=>i(vn,{onClick:()=>{s(l.home_team_name),d(l.home_team_name)},isSelected:n===l.home_team_name,children:b(Sn,{children:[i(kn,{children:i(Dn,{children:i(Rn,{src:l.item,alt:"정보가 없습니다."})})}),i(Mn,{children:i(En,{children:l.name})})]},c)},c))}),n&&i(Cn,{children:i(hn,{teamName:n,teamEvents:e})})]})},bn=o(Ke)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
  }

  .slick-slide > div {
    margin-right: 20%;
  }
`,vn=o.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${a=>a.isSelected?"#49496d":"transparent"};
`,wn=o.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`,Sn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Cn=o.div`
  background-color: white;
`,kn=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  overflow: hidden;
`,Rn=o.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  ${_.lessThan("mobile")`
      width: 40px;
      height: 40px;
	`}
`,En=o.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${_.lessThan("mobile")`
      font-size: 5px;
	`}
`,Dn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Mn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Tn=o.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,In=o.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,Ce=()=>i(Pn,{children:i(zn,{children:i(yn,{})})}),Pn=o.div`
  height:100%;
  overflow-x: hidden;
`,zn=o.div`
  height:100%;
  background-color: #1F1F45;
  overflow-x: hidden;
`,{kakao:I}=window,Nn=a=>{let e=[];const t=z(),{detailMeetingPlace:n,meetingPlace:r}=D(s=>s.summary);return R.useEffect(()=>{const s=document.getElementById("map"),d={center:new I.maps.LatLng(37.566826,126.9786567),level:3},l=new I.maps.Map(s,d),c=new I.maps.services.Places,h=new I.maps.InfoWindow({zIndex:1});u();function u(){let f=a.searchKeyword;if(!f.replace(/^\s+|\s+$/g,""))return console.log("키워드를 입력해주세요!"),!1;c.keywordSearch(f,w)}function w(f,m,E){if(m===I.maps.services.Status.OK)C(f),g(E);else if(m===I.maps.services.Status.ZERO_RESULT){alert("검색 결과가 존재하지 않습니다.");return}else if(m===I.maps.services.Status.ERROR){alert("검색 결과 중 오류가 발생했습니다.");return}}function C(f){const m=document.getElementById("places-list"),E=document.getElementById("search-result"),M=document.createDocumentFragment(),T=new I.maps.LatLngBounds;m&&p(m),v();for(var P=0;P<f.length;P++){let V=new I.maps.LatLng(f[P].y,f[P].x),A=S(V,P),te=y(P,f[P]);T.extend(V),function(q,de){I.maps.event.addListener(q,"mouseover",function(){k(q,de)}),I.maps.event.addListener(q,"mouseout",function(){h.close()}),te.onmouseover=function(){k(q,de)},te.onmouseout=function(){h.close()}}(A,f[P].place_name),M.appendChild(te)}m&&m.appendChild(M),E&&(E.scrollTop=0),l.setBounds(T)}function y(f,m){const E=document.createElement("li");let M=`
    <div class="info" style="display: flex; justify-content: flex-start; align-items: center;gap:10px; border-bottom:1px solid gray; padding: 5px;">
      <div>
        <label class="checkbox-container" style="display: flex; justify-content: center; align-items: center; gap: 10px;">
          <input type="radio" name="place" class="checkbox-input">
          <div class="checkbox-custom"></div>
          <div>        
            <h5 class="info-item place-name" style="font-size: 16px; ">${m.place_name}</h5>
            ${m.road_address_name?`<p class="info-item road-address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${m.road_address_name}
                  </p>
                  <p class="info-item address-name" style="font-size:12px; padding: 5px 0;  font-weight: 400; color: #666666;">
                    ${m.address_name}
                    </p>`:`<p class="info-item address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${m.address_name}
                  </p>`}
          </div>
        </label>
      </div>
    </div>
    `;E.innerHTML=M,E.className="item",E.onclick=function(){var P;(P=a.handleSearchLocation)==null||P.call(a,m.place_name,m.address_name)};const T=E.querySelector(".checkbox-input");return T==null||T.addEventListener("click",()=>{t(_e({meetingPlace:m.place_name,detailMeetingPlace:n,meetingPlaceAddress:m.address_name})),E.classList.toggle("checked")}),E}function S(f,m,E){var M="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",T=new I.maps.Size(36,37),P={spriteSize:new I.maps.Size(36,691),spriteOrigin:new I.maps.Point(0,m*46+10),offset:new I.maps.Point(13,37)},V=new I.maps.MarkerImage(M,T,P),A=new I.maps.Marker({position:f,image:V});return A.setMap(l),e.push(A),A}function v(){for(var f=0;f<e.length;f++)e[f].setMap(null);e=[]}function g(f){const m=document.getElementById("pagination");let E=document.createDocumentFragment(),M;for(;m.hasChildNodes();)m.lastChild&&m.removeChild(m.lastChild);for(M=1;M<=f.last;M++){const T=document.createElement("div");T.href="#",T.innerHTML=M.toString(),M===f.current?T.className="on":T.onclick=function(P){return function(){f.gotoPage(P)}}(M),E.appendChild(T)}m.appendChild(E)}function k(f,m){const E='<div style="padding:10px; z-index:1;" class="marker-title">'+m+"</div>";h.setContent(E),h.open(l,f)}function p(f){for(;f.hasChildNodes();)f.lastChild&&f.removeChild(f.lastChild)}},[a.searchKeyword,n]),i(_n,{children:b(jn,{children:[i(Fn,{id:"map",className:"map"}),b(Hn,{id:"search-result",children:[i(Bn,{children:b(An,{children:[a.searchKeyword," 관련 검색결과"]})}),i(On,{children:i(Wn,{id:"places-list"})}),i(Ln,{id:"pagination"})]})]})})},_n=o.div`
  align-items: center;
  justify-content: center;
`,jn=o.div`
  display: flex;
  align-items: flex-start;
  /* background-color: #e6e3e3; */
  padding: 20px;
  height: 100%;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  ${_.lessThan("mobile")`
      flex-direction: column;
	`}
`,Fn=o.div`
  width: 700px;
  height: 600px;
  background-color: #e0e0e0;
  border-radius: 10px 0 0 10px;
  margin-bottom: 20px;
  ${_.lessThan("mobile")`
    width: 100%;
    height: 300px;
	`}
`,Hn=o.div`
  width: 60%;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgb(248,248,248);
  border-radius: 0 10px 10px 0;
  align-items: center;
  ${_.lessThan("mobile")`
      padding: 0px;
	`}
`,Bn=o.p`
  font-size: 1px;
  padding: 10px;
  font-weight: bold;
`,An=o.span`
  color: black;
  font-size: 20px;
`,On=o.div`
  width: 100%;
  max-height: 600px;
  padding: 10px;
  overflow-y: auto;
  ${_.lessThan("mobile")`
      max-height: 200px;
	`}
`,Wn=o.ul`
  list-style: none;
  padding: 10px;
  color: #1f1f45;
  .item {
    div{
      color: black;

    }
    padding: 3px 0;
  }
`,Ln=o.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,$n=()=>{const a=z(),{meetingPlace:e,detailMeetingPlace:t,meetingPlaceAddress:n}=D(p=>p.summary),[r,s]=R.useState(""),[d,l]=R.useState(""),c=(p,f)=>{s(p),l(f)};let[h,u]=R.useState("");const[w,C]=R.useState(""),[y,S]=R.useState(""),v=p=>{p.preventDefault(),C(p.target.value)},g=p=>{p.preventDefault(),S(w)};return i(Gn,{children:i(Vn,{children:b(qn,{children:[i(Yn,{children:b(Zn,{children:[i(Un,{children:i(Xn,{onSubmit:g,children:b(Jn,{htmlFor:"place",className:"form__label",children:[i(Qn,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:v,placeholder:"장소를 입력해보세요!",required:!0}),i(ei,{children:i(Kn,{className:"btn form__submit",type:"submit",value:"검색",onClick:()=>{w===""?alert("검색어를 입력해주세요."):g({preventDefault:()=>{}})}})})]})})}),i(Nn,{searchKeyword:y,handleSearchLocation:c})]})}),i(ke,{children:b("div",{className:"SearchContainer",children:[i(ti,{children:r||e}),i(ni,{children:d||n})]})}),i(ke,{children:i("input",{className:"detail",type:"text",id:"loc",value:h||t,onChange:p=>{u(p.target.value),a(_e({detailMeetingPlace:p.target.value,meetingPlace:e,meetingPlaceAddress:n}))},placeholder:"상세 위치를 입력해주세요."})})]})})})},Gn=o.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Vn=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,qn=o.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,Un=o.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .SearchContainer {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    min-height: 50px;
  }
  .detail {
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 16px;
  }
`,ke=o.div`
  width: 100%;
  height: 70px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .SearchContainer {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    min-height: 50px;
  }
  .detail {
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 15px;
    /* border: none; 
    outline: none;  */
    font-size: 16px;
  }

  ${_.lessThan("mobile")`
    .detail {
      border-radius: 12px;
      border: 1px solid #ccc;
      width: 100%;
      padding: 10px;
      /* border: none; 
      outline: none;  */
      font-size: 16px;
    }
     
	`}
`,Kn=o(Le)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
`,Yn=o.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Zn=o.div``;o.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const Xn=o.form`
  width: 100%;
`,Jn=o.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`,Qn=o.input`
  display: flex;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  font-size: 16px;
  background-color: rgb(248, 248, 248);
`,ei=o.div`
  padding: 10px;
`;o.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const ti=o.p`
  font-size: 18px;
  font-weight: 500;
`,ni=o.p`
  font-size: 14px;
  font-weight: 400;
`,ii=a=>{const e=z(),{term:t,minNum:n,maxNum:r}=D(h=>h.summary),[s,d]=R.useState(),[l,c]=R.useState();return b(si,{children:[i(O,{children:"최소"}),i(Re,{children:i("input",{type:"number",value:s||n,onChange:h=>{d(Number(h.target.value)||n),e(oe({term:t,minNum:Number(h.target.value)||n,maxNum:l||r}))}})}),i(O,{children:"명"}),i(O,{children:"-"}),i(O,{children:"최대"}),i(Re,{children:i("input",{type:"number",value:l||r,onChange:h=>{c(Number(h.target.value)||r),e(oe({term:t,minNum:s||n,maxNum:Number(h.target.value)||r}))}})}),i(O,{children:"명"})]})},si=o.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,O=o.div`
  display:flex;
  justify-content:center;
  align-items:center;
`,Re=o.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 40px;
    padding: 10px;
    font-size: 16px;
    appearance: none;
    -webkit-appearance: none;
    text-align: center;
    
  }
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
`,ai=a=>i("div",{}),oi=a=>{const e=z(),{minNum:t,maxNum:n,term:r}=D(u=>u.summary),[s,d]=R.useState(new Date),[l,c]=R.useState(null),h=u=>{if(u){const[w,C]=u;d(w),c(C)}};return R.useEffect(()=>{if(s&&l){const u=s.toLocaleDateString("ko-KR"),w=l.toLocaleDateString("ko-KR"),C=`${u} ~ ${w}`;e(oe({term:C,minNum:t,maxNum:n}))}},[s,l]),b("div",{children:[i(li,{children:s&&l||r?r?i(Q,{children:i(Y,{children:r})}):b(Q,{children:[i(Y,{children:s==null?void 0:s.toLocaleDateString("ko-KR")}),i(Y,{children:" ~ "}),i(Y,{children:l==null?void 0:l.toLocaleDateString("ko-KR")})]}):i("div",{children:"날짜를 선택해주세요."})}),i(ri,{locale:Ge,dateFormat:"yyyy년 MM월 dd일",dateFormatCalendar:"yyyy년 MM월",minDate:new Date,placeholderText:"날짜를 선택해주세요.",selected:s,onChange:h,startDate:s,endDate:l,selectsRange:!0,inline:!0})]})},ri=o($e)`
  width: 350px; 
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items:center;


`,li=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`,Y=o.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;function di({}){return b(ci,{children:[i(ii,{}),i(oi,{}),i(ai,{})]})}const ci=o.div`
margin: 20px auto;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`,gi=a=>{const e=z(),{title:t,content:n,tag:r,img:s}=D(h=>h.summary),[d,l]=R.useState(null);return b(hi,{children:[i("label",{htmlFor:"imageInput",children:i(pi,{children:d||s?i(mi,{src:d||s,alt:"Selected"}):b(Q,{children:[i(fi,{}),i(ui,{children:"대표 이미지 선택"})]})})}),i("input",{id:"imageInput",type:"file",accept:"image/*",style:{display:"none"},onChange:h=>{var w;const u=(w=h.target.files)==null?void 0:w[0];if(u){const C=new FileReader;C.onload=()=>{const y=C.result;l(y),e(G({img:y,title:t,content:n,tag:r}))},C.readAsDataURL(u)}}})]})},hi=o.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,pi=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  /* border: 1px solid #ccc; */
  width: 300px;
  height: 300px;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
`,fi=o(Pe)`
  width: 40px;
  height: 40px;
  color: #ccc;
`,ui=o.div`
  margin-top: 10px;
  color: #ccc;
`,mi=o.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
  object-fit: cover;
`,xi=a=>{const e=z(),{img:t,content:n,tag:r,title:s}=D(c=>c.summary);let[d,l]=R.useState("");return i(yi,{children:i("input",{type:"text",id:"title",value:d||s,placeholder:"제목을 입력해주세요.",onChange:c=>{l(c.target.value),e(G({img:t,title:c.target.value,content:n,tag:r}))}})})},yi=o.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 300px; 
    padding: 10px; 
    /* border: none; 
    outline: none;  */
    font-size: 16px; 
    
  }
`,bi=a=>{const e=z(),{title:t,img:n,tag:r,content:s}=D(c=>c.summary);let[d,l]=R.useState("");return i(wi,{children:i(vi,{value:d||s,onChange:c=>{l(c.target.value),e(G({img:n,title:t,content:c.target.value,tag:r}))},placeholder:"내용을 입력해주세요."})})},vi=o.textarea`
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 16px;
  /* border: none;
  outline: none; */
`,wi=o.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,se=[{idx:1,name:"여행 위주",origName:"# 여행 위주"},{idx:2,name:"자유로운",origName:"# 자유로운"},{idx:3,name:"조용히",origName:"# 조용히"},{idx:4,name:"숙박",origName:"# 숙박"},{idx:5,name:"당일치기",origName:"# 당일치기"},{idx:6,name:"시끌벅적",origName:"# 시끌벅적"},{idx:7,name:"우천시 취소",origName:"# 우천시 취소"},{idx:8,name:"시간 조율",origName:"# 시간 조율"},{idx:9,name:"남성",origName:"# 남성"},{idx:10,name:"여성",origName:"# 여성"},{idx:11,name:"10대",origName:"# 10대"},{idx:12,name:"20대",origName:"# 20대"},{idx:13,name:"30대",origName:"# 30대"},{idx:14,name:"40대",origName:"# 40대"},{idx:15,name:"50대",origName:"# 50대"},{idx:16,name:"60대",origName:"# 60대"},{idx:17,name:"70대",origName:"# 70대"},{idx:18,name:"80대",origName:"# 80대"},{idx:19,name:"90대",origName:"# 90대"}],Si=()=>{const[a,e]=R.useState(!0),[t,n]=R.useState([...se]);let[r,s]=R.useState([]);const[d,l]=R.useState(),c=z(),{img:h,content:u,title:w,tag:C}=D(p=>p.summary),y=()=>{n([...se]),e(p=>!p)},S=(p,f,m)=>p.split(f).join(m),v=p=>{const f=p.target.value,E=se.map(M=>{const T={...M};return T.name.indexOf(f)>-1&&(T.name=S(T.name,f,`<b style='color:black'>${f}</b>`)),T}).filter(M=>M.name.indexOf(f)>-1);n([...E])},g=p=>()=>{if(y(),!r.some(m=>m.idx===p.idx)){const m=new Set([...r,p]),E=[...r,p];s([...Array.from(m)]),c(G({tag:E.map(M=>M),img:h,content:u,title:w}))}},k=p=>{const f=r.filter(m=>m.idx!==p);s([...f]),c(G({tag:f.map(m=>m),img:h,content:u,title:w}))};return C.length!==0&&(r=[...C]),b(Ci,{children:[i(ki,{onClick:y,children:b(Ri,{children:[i(Ei,{children:"태그를 선택해주세요."}),i(Di,{filterState:a})]})}),a?i(Ii,{children:r==null?void 0:r.map(p=>i(Ni,{hover:p.idx===d,onMouseOver:()=>{l(p.idx)},onMouseOut:()=>{l(void 0)},onClick:()=>{k(p.idx)},children:p.origName},p.idx))}):b(zi,{children:[i(Pi,{onChange:v,placeholder:"태그 검색하기"}),i(Mi,{}),i(Ti,{children:t==null?void 0:t.map(p=>i(_i,{onClick:g(p),dangerouslySetInnerHTML:{__html:p.name}},p.idx))})]})]})},Ci=o.div``,ki=o.div`
  padding: 10px;
  border: 1px solid #ccc;
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  display: inline-block;
  &:last-child {
    padding-bottom: 10px;
  }
`,Ri=o.div`
  padding: 3px 0;
  cursor: pointer;
`,Ei=o.div`
  font-size: 15px;
  float: left;
  color: #8e8e8e;
`,Di=o.div`
  width: 25px;
  height: 15px;
  float: right;
  background-repeat: no-repeat;
  background-size: cover;
`,Mi=o.div`
  color: #1f1f45;
  font-size: 29px;
  position: absolute;
`,Ti=o.div`
  width: 300px;
  height: 165px;
  padding: 5px;
  margin-right: 5px;
  overflow-y: auto;
`,Ii=o.div`
  width: 300px;
  margin-top: 10px;
`,Pi=o.input`
  width: 280px;
  height: 30px;
  border-radius: 5px;
  padding: 3px;
  border: 1px solid #3f3f3f;
  margin-right: 5px;
`,zi=o.div`
  width: 300px;
  height: 215px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
`,Ni=o.div`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  position: relative;
  background-color: #1f1f45;
  color: white;
  border-radius: 6px;
  font-size: 14px;
  margin-right: 6px;
  margin-bottom: 5px;
  cursor: pointer;
  font-weight: 500;
  height: 30px;
  ${()=>`
    &:after {
      position: absolute;
      right: -5px;
      top: -7px;
      content: '✖︎';
      font-size: 10px;
      transition: all 0.2s ease;
      color: black;
    }
    `}
`,_i=o.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1f1f45;
    color: black;
  }
`,ji=a=>i(Fi,{children:b(Hi,{children:[i(gi,{}),i(xi,{}),i(bi,{}),i(Si,{})]})}),Fi=o.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Hi=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;function Bi({}){const{img:a,title:e,stadium:t,date:n,homename:r,awayname:s,meetingPlace:d,detailMeetingPlace:l,term:c,minNum:h,maxNum:u,content:w,tag:C}=D(S=>S.summary),y=D(S=>S.selecteditem);return b(Ai,{children:[i(Oi,{children:i(Wi,{src:a,alt:"선택한 배경 사진이 없습니다.(No Image)"})}),i(Li,{children:e}),b(Z,{children:[i(X,{children:"🔥 매치 정보"}),i($i,{children:b(De,{children:[b(Me,{children:[i(ae,{children:i(Ee,{children:n})}),i(ae,{children:b(Ee,{children:[t," 경기장"]})})]}),i(Te,{children:b(W,{children:[" ",r&&s?r+" vs "+s:""," "]})})]})})]}),b(Z,{children:[i(X,{children:"🔥 동행 정보"}),i(Gi,{children:h&&u&&d&&l&&c?b(De,{children:[i(Me,{children:b(ae,{children:[i(W,{children:"희망 인원 "}),b(W,{children:[" ",h," ~ ",u," 명"]})]})}),b(Te,{children:[b(W,{children:[" ","동행 장소 ",d," ",l]}),b(W,{children:[" 동행 기간 ",c," "]})]})]}):i(Q,{})})]}),b(Z,{children:[i(X,{children:"🔥 태그 정보"}),i(Vi,{children:C.map((S,v)=>i(qi,{children:S.origName},v))})]}),b(Z,{children:[i(X,{children:"🔥 카드 정보"}),i(Ki,{children:i(Zi,{children:b(Yi,{children:[y.house.length>0&&i(J,{index:0,ischk:!1}),y.food.length>0&&i(J,{index:1,ischk:!1}),y.attraction.length>0&&i(J,{index:2,ischk:!1})]})})})]}),i(Ui,{children:w})]})}const Ai=o.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Z=o.div`
  justify-content: left;
  align-items: left;
`,Oi=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
`,Wi=o.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  font-size: 12px;
`,Li=o.div`
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 25px;
  /* border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc; */
`,$i=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,Ee=o.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,ae=o.div`
  align-items: center;
  gap: 10px;
`,X=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,W=o.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,De=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Me=o.div`
  justify-content: left;
  align-items: center;
`,Te=o.div`
  gap: 15px;
`,Gi=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,Vi=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`,qi=o.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,Ui=o.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`,Ki=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
`,Yi=o.div`
  display: flex;
`,Zi=o.div`
  max-height: 200px;
  overflow-y: auto;
  /* Chrome 브라우저 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`,Xi=({title:a,index:e})=>{const t=z();return b(Ji,{children:[i(Qi,{children:a}),b(es,{children:[i(ts,{index:e,onClick:()=>{e===0?t(ie({modalType:"HouseSearchModal",isOpen:!0})):e===1?t(ie({modalType:"FoodSearchModal",isOpen:!0})):e===2&&t(ie({modalType:"AttractionSearchModal",isOpen:!0}))},children:i(ns,{})}),i(J,{index:e,ischk:!0})]})]})},Ji=o.div`
  width:100%;
  padding: 10px;
`,Qi=o.p`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`,es=o.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  justify-content: left;
  align-items: left;
  padding: 10px 0;
`,ts=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${a=>{switch(a.index){case 0:return"#F0B86E";case 1:return"#9F91CC";case 2:return"#D4E2D4"}}};
  gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`,ns=o(Pe)`
  width: 40px;
  height: 40px;
  color: white;
`,is=["🏠 숙박","🍚 음식점","🏖️ 관광지"],ss=()=>i(as,{children:is.map((a,e)=>i(Xi,{title:a,index:e},e))}),as=o.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,os=()=>{const[a,e]=R.useState(!1),t=Ve(),n=z(),{post:r,loading:s}=D(g=>g.accompany),d=["경기 일정 선택","모임장소","일정 카드 선택","상세 내용","상세 내용","내 동행 일정"],[l,c]=R.useState(0),h=()=>{l>0&&c(g=>g-1)},w=D(g=>g.summary.tag).map(g=>g.name).join(","),C={token:D(g=>g.auth.token),game_schedule_id:D(g=>g.summary.game_schedule_id),home_team_name:D(g=>g.summary.homename),home_team_id:D(g=>g.summary.home_team_id),thumbnail:"imgDummy",title:D(g=>g.summary.title),content:D(g=>g.summary.content),tagList:w,tourCardIdList:[],meetingPlace:D(g=>g.summary.meetingPlace),meetingPlaceAddress:D(g=>g.summary.meetingPlaceAddress),detailMeetingPlace:D(g=>g.summary.detailMeetingPlace),term:D(g=>g.summary.date),minNum:D(g=>g.summary.minNum),maxNum:D(g=>g.summary.maxNum),nowStatus:0};R.useEffect(()=>{n(Tt(C))},[a]);const y=async()=>{l<d.length-1?c(g=>g+1):l===d.length-1&&(e(!0),console.log(r,s),setTimeout(()=>{n(It()),n(Pt()),t("/")},3e3))},S=l===5?"완료":"다음";let v=null;switch(l){case 0:v=Ce;break;case 1:v=$n;break;case 2:v=ss;break;case 3:v=di;break;case 4:v=ji;break;case 5:v=Bi;break;default:v=Ce}return b(ds,{children:[b(ls,{children:[i(cs,{onClick:h}),i(rs,{children:d[l]}),i(gs,{onClick:()=>t("/")})]}),i(hs,{children:i(v,{})}),i(ps,{children:i(fs,{onClick:y,children:S})})]})},rs=o.h1`
  display: flex;
  color: #000;
  font-size: 30px;
  font-weight: bold;
`,ls=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,ds=o.div`
  font-weight: bold;
  background-color: #ffffff;
`,cs=o(Ue)`
  width: 30px;
  height: 30px;
  color: #000000;
`,gs=o(qe)`
  width: 40px;
  height: 40px;
  color: #000000;
  justify-content: right;
  align-items: right;
`,hs=o.div`
  display: flex;
`,ps=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,fs=o.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  color: #ffffff;
`,ws=()=>i("div",{children:i(os,{})});export{ws as default};
