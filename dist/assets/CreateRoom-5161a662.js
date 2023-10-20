import{e as _,R as ce,a1 as Pe,s as o,u as I,a as i,j as v,k as T,E as Le,X as Ge,S as ae,D as Ve,a2 as qe,m as Ue,a3 as Ke,T as Ye,Q as Xe}from"./vendor-490cfcbe.js";import{S as Ze}from"./react-slick-bffd3a80.js";/* empty css                       */import{C as Je,y as Qe,z as et,A as Ne,D as Ie,E as tt,F as ge,H as re,I as nt,J as j,K as F,L as x,M as it,N as st,O as at,P as B,R as W,Q as ot,_ as N,T as L,U as rt,V as lt,W as dt,X as J,Y as he,Z as ct,$ as pe,a0 as gt,a1 as ht,a2 as le,a3 as pt,a4 as mt,a5 as ft,a6 as ut,a7 as xt,a8 as me,a9 as yt,aa as fe,ab as bt,ac as vt,ad as wt,ae as St,af as Ct,ag as te,ah as kt,ai as Rt,aj as Et,ak as Tt,al as _t,am as Dt,an as Mt,c as C,t as ue,ao as xe,ap as je,aq as oe,ar as Q,as as ne,at as zt,au as Pt,av as Nt}from"./common-311e16a2.js";/* empty css                         */import{P as Z}from"./shared/CreateRoom/FindAccompanyDetail-362bb431.js";class Fe extends _.Component{constructor(){super(...arguments),this.elRef=_.createRef(),this.isUpdating=!1,this.isUnmounting=!1,this.state={customRenderingMap:new Map},this.requestResize=()=>{this.isUnmounting||(this.cancelResize(),this.resizeId=requestAnimationFrame(()=>{this.doResize()}))}}render(){const e=[];for(const t of this.state.customRenderingMap.values())e.push(ce.createElement(It,{key:t.id,customRendering:t}));return ce.createElement("div",{ref:this.elRef},e)}componentDidMount(){const e=new Je;this.handleCustomRendering=e.handle.bind(e),this.calendar=new Qe(this.elRef.current,Object.assign(Object.assign({},this.props),{handleCustomRendering:this.handleCustomRendering})),this.calendar.render();let t;e.subscribe(n=>{const r=Date.now(),a=!t;(a||this.isUpdating||this.isUnmounting||r-t<100?He:Pe.flushSync)(()=>{this.setState({customRenderingMap:n},()=>{t=r,a?this.doResize():this.requestResize()})})})}componentDidUpdate(){this.isUpdating=!0,this.calendar.resetOptions(Object.assign(Object.assign({},this.props),{handleCustomRendering:this.handleCustomRendering})),this.isUpdating=!1}componentWillUnmount(){this.isUnmounting=!0,this.cancelResize(),this.calendar.destroy()}doResize(){this.calendar.updateSize()}cancelResize(){this.resizeId!==void 0&&(cancelAnimationFrame(this.resizeId),this.resizeId=void 0)}getApi(){return this.calendar}}Fe.act=He;class It extends _.PureComponent{render(){const{customRendering:e}=this.props,{generatorMeta:t}=e,n=typeof t=="function"?t(e.renderProps):t;return Pe.createPortal(n,e.containerEl)}}function He(s){s()}var jt=':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';et(jt);function q(s,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of s)t[n.row].push(n);return t}function U(s,e){let t=[];for(let n=0;n<e;n+=1)t[n]=[];for(let n of s)t[n.firstCol].push(n);return t}function ye(s,e){let t=[];if(s){for(let n=0;n<e;n+=1)t[n]={affectedInstances:s.affectedInstances,isEvent:s.isEvent,segs:[]};for(let n of s.segs)t[n.row].segs.push(n)}else for(let n=0;n<e;n+=1)t[n]=null;return t}const Be=Ne({hour:"numeric",minute:"2-digit",omitZeroMinute:!0,meridiem:"narrow"});function $e(s){let{display:e}=s.eventRange.ui;return e==="list-item"||e==="auto"&&!s.eventRange.def.allDay&&s.firstCol===s.lastCol&&s.isStart&&s.isEnd}class Oe extends le{render(){let{props:e}=this;return x(pt,Object.assign({},e,{elClasses:["fc-daygrid-event","fc-daygrid-block-event","fc-h-event"],defaultTimeFormat:Be,defaultDisplayEventEnd:e.defaultDisplayEventEnd,disableResizing:!e.seg.eventRange.def.allDay}))}}class Ae extends le{render(){let{props:e,context:t}=this,{options:n}=t,{seg:r}=e,a=n.eventTimeFormat||Be,l=mt(r,a,t,!0,e.defaultDisplayEventEnd);return x(ut,Object.assign({},e,{elTag:"a",elClasses:["fc-daygrid-event","fc-daygrid-dot-event"],elAttrs:ft(e.seg,t),defaultGenerator:Ft,timeText:l,isResizing:!1,isDateSelecting:!1}))}}function Ft(s){return x(N,null,x("div",{className:"fc-daygrid-event-dot",style:{borderColor:s.borderColor||s.backgroundColor}}),s.timeText&&x("div",{className:"fc-event-time"},s.timeText),x("div",{className:"fc-event-title"},s.event.title||x(N,null," ")))}class Ht extends le{constructor(){super(...arguments),this.compileSegs=j(Bt)}render(){let{props:e}=this,{allSegs:t,invisibleSegs:n}=this.compileSegs(e.singlePlacements);return x(Rt,{elClasses:["fc-daygrid-more-link"],dateProfile:e.dateProfile,todayRange:e.todayRange,allDayDate:e.allDayDate,moreCnt:e.moreCnt,allSegs:t,hiddenSegs:n,alignmentElRef:e.alignmentElRef,alignGridTop:e.alignGridTop,extraDateSpan:e.extraDateSpan,popoverContent:()=>{let r=(e.eventDrag?e.eventDrag.affectedInstances:null)||(e.eventResize?e.eventResize.affectedInstances:null)||{};return x(N,null,t.map(a=>{let l=a.eventRange.instance.instanceId;return x("div",{className:"fc-daygrid-event-harness",key:l,style:{visibility:r[l]?"hidden":""}},$e(a)?x(Ae,Object.assign({seg:a,isDragging:!1,isSelected:l===e.eventSelection,defaultDisplayEventEnd:!1},L(a,e.todayRange))):x(Oe,Object.assign({seg:a,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:l===e.eventSelection,defaultDisplayEventEnd:!1},L(a,e.todayRange))))}))}})}}function Bt(s){let e=[],t=[];for(let n of s)e.push(n.seg),n.isVisible||t.push(n.seg);return{allSegs:e,invisibleSegs:t}}const $t=Ne({week:"narrow"});class Ot extends B{constructor(){super(...arguments),this.rootElRef=F(),this.state={dayNumberId:xt()},this.handleRootEl=e=>{me(this.rootElRef,e),me(this.props.elRef,e)}}render(){let{context:e,props:t,state:n,rootElRef:r}=this,{options:a,dateEnv:l}=e,{date:d,dateProfile:g}=t;const m=t.showDayNumber&&Wt(d,g.currentRange,l);return x(vt,{elTag:"td",elRef:this.handleRootEl,elClasses:["fc-daygrid-day",...t.extraClassNames||[]],elAttrs:Object.assign(Object.assign(Object.assign({},t.extraDataAttrs),t.showDayNumber?{"aria-labelledby":n.dayNumberId}:{}),{role:"gridcell"}),defaultGenerator:At,date:d,dateProfile:g,todayRange:t.todayRange,showDayNumber:t.showDayNumber,isMonthStart:m,extraRenderProps:t.extraRenderProps},(u,w)=>x("div",{ref:t.innerElRef,className:"fc-daygrid-day-frame fc-scrollgrid-sync-inner",style:{minHeight:t.minHeight}},t.showWeekNumber&&x(yt,{elTag:"a",elClasses:["fc-daygrid-week-number"],elAttrs:fe(e,d,"week"),date:d,defaultFormat:$t}),!w.isDisabled&&(t.showDayNumber||bt(a)||t.forceDayTop)?x("div",{className:"fc-daygrid-day-top"},x(u,{elTag:"a",elClasses:["fc-daygrid-day-number",m&&"fc-daygrid-month-start"],elAttrs:Object.assign(Object.assign({},fe(e,d)),{id:n.dayNumberId})})):t.showDayNumber?x("div",{className:"fc-daygrid-day-top",style:{visibility:"hidden"}},x("a",{className:"fc-daygrid-day-number"}," ")):void 0,x("div",{className:"fc-daygrid-day-events",ref:t.fgContentElRef},t.fgContent,x("div",{className:"fc-daygrid-day-bottom",style:{marginTop:t.moreMarginTop}},x(Ht,{allDayDate:d,singlePlacements:t.singlePlacements,moreCnt:t.moreCnt,alignmentElRef:r,alignGridTop:!t.showDayNumber,extraDateSpan:t.extraDateSpan,dateProfile:t.dateProfile,eventSelection:t.eventSelection,eventDrag:t.eventDrag,eventResize:t.eventResize,todayRange:t.todayRange}))),x("div",{className:"fc-daygrid-day-bg"},t.bgContent)))}}function At(s){return s.dayNumberText||x(N,null," ")}function Wt(s,e,t){const{start:n,end:r}=e,a=wt(r,-1),l=t.getYear(n),d=t.getMonth(n),g=t.getYear(a),m=t.getMonth(a);return!(l===g&&d===m)&&(s.valueOf()===n.valueOf()||t.getDay(s)===1&&s.valueOf()<r.valueOf())}function Lt(s,e,t,n,r,a,l){let d=new qt;d.allowReslicing=!0,d.strictOrder=n,e===!0||t===!0?(d.maxCoord=a,d.hiddenConsumes=!0):typeof e=="number"?d.maxStackCnt=e:typeof t=="number"&&(d.maxStackCnt=t,d.hiddenConsumes=!0);let g=[],m=[];for(let b=0;b<s.length;b+=1){let p=s[b],{instanceId:f}=p.eventRange.instance,h=r[f];h!=null?g.push({index:b,thickness:h,span:{start:p.firstCol,end:p.lastCol+1}}):m.push(p)}let u=d.addSegs(g),w=d.toRects(),{singleColPlacements:k,multiColPlacements:y,leftoverMargins:E}=Gt(w,s,l),S=[],R=[];for(let b of m){y[b.firstCol].push({seg:b,isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let p=b.firstCol;p<=b.lastCol;p+=1)k[p].push({seg:H(b,p,p+1,l),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let b=0;b<l.length;b+=1)S.push(0);for(let b of u){let p=s[b.index],f=b.span;y[f.start].push({seg:H(p,f.start,f.end,l),isVisible:!1,isAbsolute:!0,absoluteTop:0,marginTop:0});for(let h=f.start;h<f.end;h+=1)S[h]+=1,k[h].push({seg:H(p,h,h+1,l),isVisible:!1,isAbsolute:!1,absoluteTop:0,marginTop:0})}for(let b=0;b<l.length;b+=1)R.push(E[b]);return{singleColPlacements:k,multiColPlacements:y,moreCnts:S,moreMarginTops:R}}function Gt(s,e,t){let n=Vt(s,t.length),r=[],a=[],l=[];for(let d=0;d<t.length;d+=1){let g=n[d],m=[],u=0,w=0;for(let y of g){let E=e[y.index];m.push({seg:H(E,d,d+1,t),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:y.levelCoord-u}),u=y.levelCoord+y.thickness}let k=[];u=0,w=0;for(let y of g){let E=e[y.index],S=y.span.end-y.span.start>1,R=y.span.start===d;w+=y.levelCoord-u,u=y.levelCoord+y.thickness,S?(w+=y.thickness,R&&k.push({seg:H(E,y.span.start,y.span.end,t),isVisible:!0,isAbsolute:!0,absoluteTop:y.levelCoord,marginTop:0})):R&&(k.push({seg:H(E,y.span.start,y.span.end,t),isVisible:!0,isAbsolute:!1,absoluteTop:y.levelCoord,marginTop:w}),w=0)}r.push(m),a.push(k),l.push(w)}return{singleColPlacements:r,multiColPlacements:a,leftoverMargins:l}}function Vt(s,e){let t=[];for(let n=0;n<e;n+=1)t.push([]);for(let n of s)for(let r=n.span.start;r<n.span.end;r+=1)t[r].push(n);return t}function H(s,e,t,n){if(s.firstCol===e&&s.lastCol===t-1)return s;let r=s.eventRange,a=r.range,l=St(a,{start:n[e].date,end:re(n[t-1].date,1)});return Object.assign(Object.assign({},s),{firstCol:e,lastCol:t-1,eventRange:{def:r.def,ui:Object.assign(Object.assign({},r.ui),{durationEditable:!1}),instance:r.instance,range:l},isStart:s.isStart&&l.start.valueOf()===a.start.valueOf(),isEnd:s.isEnd&&l.end.valueOf()===a.end.valueOf()})}class qt extends Ct{constructor(){super(...arguments),this.hiddenConsumes=!1,this.forceHidden={}}addSegs(e){const t=super.addSegs(e),{entriesByLevel:n}=this,r=a=>!this.forceHidden[te(a)];for(let a=0;a<n.length;a+=1)n[a]=n[a].filter(r);return t}handleInvalidInsertion(e,t,n){const{entriesByLevel:r,forceHidden:a}=this,{touchingEntry:l,touchingLevel:d,touchingLateral:g}=e;if(this.hiddenConsumes&&l){const m=te(l);if(!a[m])if(this.allowReslicing){const u=Object.assign(Object.assign({},l),{span:kt(l.span,t.span)}),w=te(u);a[w]=!0,r[d][g]=u,this.splitEntry(l,t,n)}else a[m]=!0,n.push(l)}return super.handleInvalidInsertion(e,t,n)}}class We extends B{constructor(){super(...arguments),this.cellElRefs=new W,this.frameElRefs=new W,this.fgElRefs=new W,this.segHarnessRefs=new W,this.rootElRef=F(),this.state={framePositions:null,maxContentHeight:null,eventInstanceHeights:{}},this.handleResize=e=>{e&&this.updateSizing(!0)}}render(){let{props:e,state:t,context:n}=this,{options:r}=n,a=e.cells.length,l=U(e.businessHourSegs,a),d=U(e.bgEventSegs,a),g=U(this.getHighlightSegs(),a),m=U(this.getMirrorSegs(),a),{singleColPlacements:u,multiColPlacements:w,moreCnts:k,moreMarginTops:y}=Lt(ot(e.fgEventSegs,r.eventOrder),e.dayMaxEvents,e.dayMaxEventRows,r.eventOrderStrict,t.eventInstanceHeights,t.maxContentHeight,e.cells),E=e.eventDrag&&e.eventDrag.affectedInstances||e.eventResize&&e.eventResize.affectedInstances||{};return x("tr",{ref:this.rootElRef,role:"row"},e.renderIntro&&e.renderIntro(),e.cells.map((S,R)=>{let b=this.renderFgSegs(R,e.forPrint?u[R]:w[R],e.todayRange,E),p=this.renderFgSegs(R,Ut(m[R],w),e.todayRange,{},!!e.eventDrag,!!e.eventResize,!1);return x(Ot,{key:S.key,elRef:this.cellElRefs.createRef(S.key),innerElRef:this.frameElRefs.createRef(S.key),dateProfile:e.dateProfile,date:S.date,showDayNumber:e.showDayNumbers,showWeekNumber:e.showWeekNumbers&&R===0,forceDayTop:e.showWeekNumbers,todayRange:e.todayRange,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,extraRenderProps:S.extraRenderProps,extraDataAttrs:S.extraDataAttrs,extraClassNames:S.extraClassNames,extraDateSpan:S.extraDateSpan,moreCnt:k[R],moreMarginTop:y[R],singlePlacements:u[R],fgContentElRef:this.fgElRefs.createRef(S.key),fgContent:x(N,null,x(N,null,b),x(N,null,p)),bgContent:x(N,null,this.renderFillSegs(g[R],"highlight"),this.renderFillSegs(l[R],"non-business"),this.renderFillSegs(d[R],"bg-event")),minHeight:e.cellMinHeight})}))}componentDidMount(){this.updateSizing(!0),this.context.addResizeHandler(this.handleResize)}componentDidUpdate(e,t){let n=this.props;this.updateSizing(!Ie(e,n))}componentWillUnmount(){this.context.removeResizeHandler(this.handleResize)}getHighlightSegs(){let{props:e}=this;return e.eventDrag&&e.eventDrag.segs.length?e.eventDrag.segs:e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:e.dateSelectionSegs}getMirrorSegs(){let{props:e}=this;return e.eventResize&&e.eventResize.segs.length?e.eventResize.segs:[]}renderFgSegs(e,t,n,r,a,l,d){let{context:g}=this,{eventSelection:m}=this.props,{framePositions:u}=this.state,w=this.props.cells.length===1,k=a||l||d,y=[];if(u)for(let E of t){let{seg:S}=E,{instanceId:R}=S.eventRange.instance,b=R+":"+e,p=E.isVisible&&!r[R],f=E.isAbsolute,h="",c="";f&&(g.isRtl?(c=0,h=u.lefts[S.lastCol]-u.lefts[S.firstCol]):(h=0,c=u.rights[S.firstCol]-u.rights[S.lastCol])),y.push(x("div",{className:"fc-daygrid-event-harness"+(f?" fc-daygrid-event-harness-abs":""),key:b,ref:k?null:this.segHarnessRefs.createRef(b),style:{visibility:p?"":"hidden",marginTop:f?"":E.marginTop,top:f?E.absoluteTop:"",left:h,right:c}},$e(S)?x(Ae,Object.assign({seg:S,isDragging:a,isSelected:R===m,defaultDisplayEventEnd:w},L(S,n))):x(Oe,Object.assign({seg:S,isDragging:a,isResizing:l,isDateSelecting:d,isSelected:R===m,defaultDisplayEventEnd:w},L(S,n)))))}return y}renderFillSegs(e,t){let{isRtl:n}=this.context,{todayRange:r}=this.props,{framePositions:a}=this.state,l=[];if(a)for(let d of e){let g=n?{right:0,left:a.lefts[d.lastCol]-a.lefts[d.firstCol]}:{left:0,right:a.rights[d.firstCol]-a.rights[d.lastCol]};l.push(x("div",{key:dt(d.eventRange),className:"fc-daygrid-bg-harness",style:g},t==="bg-event"?x(rt,Object.assign({seg:d},L(d,r))):lt(t)))}return x(N,{},...l)}updateSizing(e){let{props:t,state:n,frameElRefs:r}=this;if(!t.forPrint&&t.clientWidth!==null){if(e){let g=t.cells.map(m=>r.currentMap[m.key]);if(g.length){let m=this.rootElRef.current,u=new J(m,g,!0,!1);(!n.framePositions||!n.framePositions.similarTo(u))&&this.setState({framePositions:new J(m,g,!0,!1)})}}const a=this.state.eventInstanceHeights,l=this.queryEventInstanceHeights(),d=t.dayMaxEvents===!0||t.dayMaxEventRows===!0;this.safeSetState({eventInstanceHeights:Object.assign(Object.assign({},a),l),maxContentHeight:d?this.computeMaxContentHeight():null})}}queryEventInstanceHeights(){let e=this.segHarnessRefs.currentMap,t={};for(let n in e){let r=Math.round(e[n].getBoundingClientRect().height),a=n.split(":")[0];t[a]=Math.max(t[a]||0,r)}return t}computeMaxContentHeight(){let e=this.props.cells[0].key,t=this.cellElRefs.currentMap[e],n=this.fgElRefs.currentMap[e];return t.getBoundingClientRect().bottom-n.getBoundingClientRect().top}getCellEls(){let e=this.cellElRefs.currentMap;return this.props.cells.map(t=>e[t.key])}}We.addStateEquality({eventInstanceHeights:Ie});function Ut(s,e){if(!s.length)return[];let t=Kt(e);return s.map(n=>({seg:n,isVisible:!0,isAbsolute:!0,absoluteTop:t[n.eventRange.instance.instanceId],marginTop:0}))}function Kt(s){let e={};for(let t of s)for(let n of t)e[n.seg.eventRange.instance.instanceId]=n.absoluteTop;return e}class Yt extends B{constructor(){super(...arguments),this.splitBusinessHourSegs=j(q),this.splitBgEventSegs=j(q),this.splitFgEventSegs=j(q),this.splitDateSelectionSegs=j(q),this.splitEventDrag=j(ye),this.splitEventResize=j(ye),this.rowRefs=new W}render(){let{props:e,context:t}=this,n=e.cells.length,r=this.splitBusinessHourSegs(e.businessHourSegs,n),a=this.splitBgEventSegs(e.bgEventSegs,n),l=this.splitFgEventSegs(e.fgEventSegs,n),d=this.splitDateSelectionSegs(e.dateSelectionSegs,n),g=this.splitEventDrag(e.eventDrag,n),m=this.splitEventResize(e.eventResize,n),u=n>=7&&e.clientWidth?e.clientWidth/t.options.aspectRatio/6:null;return x(Dt,{unit:"day"},(w,k)=>x(N,null,e.cells.map((y,E)=>x(We,{ref:this.rowRefs.createRef(E),key:y.length?y[0].date.toISOString():E,showDayNumbers:n>1,showWeekNumbers:e.showWeekNumbers,todayRange:k,dateProfile:e.dateProfile,cells:y,renderIntro:e.renderRowIntro,businessHourSegs:r[E],eventSelection:e.eventSelection,bgEventSegs:a[E].filter(Xt),fgEventSegs:l[E],dateSelectionSegs:d[E],eventDrag:g[E],eventResize:m[E],dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,clientWidth:e.clientWidth,clientHeight:e.clientHeight,cellMinHeight:u,forPrint:e.forPrint}))))}componentDidMount(){const e=this.rowRefs.currentMap[0].getCellEls()[0];this.rootEl=e?e.closest(".fc-daygrid-body"):null,this.rootEl&&this.context.registerInteractiveComponent(this,{el:this.rootEl,isHitComboAllowed:this.props.isHitComboAllowed})}componentWillUnmount(){this.rootEl&&(this.context.unregisterInteractiveComponent(this),this.rootEl=null)}prepareHits(){this.rowPositions=new J(this.rootEl,this.rowRefs.collect().map(e=>e.getCellEls()[0]),!1,!0),this.colPositions=new J(this.rootEl,this.rowRefs.currentMap[0].getCellEls(),!0,!1)}queryHit(e,t){let{colPositions:n,rowPositions:r}=this,a=n.leftToIndex(e),l=r.topToIndex(t);if(l!=null&&a!=null){let d=this.props.cells[l][a];return{dateProfile:this.props.dateProfile,dateSpan:Object.assign({range:this.getCellRange(l,a),allDay:!0},d.extraDateSpan),dayEl:this.getCellEl(l,a),rect:{left:n.lefts[a],right:n.rights[a],top:r.tops[l],bottom:r.bottoms[l]},layer:0}}return null}getCellEl(e,t){return this.rowRefs.currentMap[e].getCellEls()[t]}getCellRange(e,t){let n=this.props.cells[e][t].date,r=re(n,1);return{start:n,end:r}}}function Xt(s){return s.eventRange.def.allDay}class Zt extends B{constructor(){super(...arguments),this.elRef=F(),this.needsScrollReset=!1}render(){let{props:e}=this,{dayMaxEventRows:t,dayMaxEvents:n,expandRows:r}=e,a=n===!0||t===!0;a&&!r&&(a=!1,t=null,n=null);let l=["fc-daygrid-body",a?"fc-daygrid-body-balanced":"fc-daygrid-body-unbalanced",r?"":"fc-daygrid-body-natural"];return x("div",{ref:this.elRef,className:l.join(" "),style:{width:e.clientWidth,minWidth:e.tableMinWidth}},x("table",{role:"presentation",className:"fc-scrollgrid-sync-table",style:{width:e.clientWidth,minWidth:e.tableMinWidth,height:r?e.clientHeight:""}},e.colGroupNode,x("tbody",{role:"presentation"},x(Yt,{dateProfile:e.dateProfile,cells:e.cells,renderRowIntro:e.renderRowIntro,showWeekNumbers:e.showWeekNumbers,clientWidth:e.clientWidth,clientHeight:e.clientHeight,businessHourSegs:e.businessHourSegs,bgEventSegs:e.bgEventSegs,fgEventSegs:e.fgEventSegs,dateSelectionSegs:e.dateSelectionSegs,eventSelection:e.eventSelection,eventDrag:e.eventDrag,eventResize:e.eventResize,dayMaxEvents:n,dayMaxEventRows:t,forPrint:e.forPrint,isHitComboAllowed:e.isHitComboAllowed}))))}componentDidMount(){this.requestScrollReset()}componentDidUpdate(e){e.dateProfile!==this.props.dateProfile?this.requestScrollReset():this.flushScrollReset()}requestScrollReset(){this.needsScrollReset=!0,this.flushScrollReset()}flushScrollReset(){if(this.needsScrollReset&&this.props.clientWidth){const e=Jt(this.elRef.current,this.props.dateProfile);if(e){const t=e.closest(".fc-daygrid-body"),n=t.closest(".fc-scroller"),r=e.getBoundingClientRect().top-t.getBoundingClientRect().top;n.scrollTop=r?r+1:0}this.needsScrollReset=!1}}}function Jt(s,e){let t;return e.currentRangeUnit.match(/year|month/)&&(t=s.querySelector(`[data-date="${Et(e.currentDate)}-01"]`)),t||(t=s.querySelector(`[data-date="${Tt(e.currentDate)}"]`)),t}class Qt extends _t{constructor(){super(...arguments),this.forceDayIfListItem=!0}sliceRange(e,t){return t.sliceRange(e)}}class en extends B{constructor(){super(...arguments),this.slicer=new Qt,this.tableRef=F()}render(){let{props:e,context:t}=this;return x(Zt,Object.assign({ref:this.tableRef},this.slicer.sliceProps(e,e.dateProfile,e.nextDayThreshold,t,e.dayTableModel),{dateProfile:e.dateProfile,cells:e.dayTableModel.cells,colGroupNode:e.colGroupNode,tableMinWidth:e.tableMinWidth,renderRowIntro:e.renderRowIntro,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.showWeekNumbers,expandRows:e.expandRows,headerAlignElRef:e.headerAlignElRef,clientWidth:e.clientWidth,clientHeight:e.clientHeight,forPrint:e.forPrint}))}}class tn extends tt{buildRenderRange(e,t,n){let r=super.buildRenderRange(e,t,n),{props:a}=this;return nn({currentRange:r,snapToWeek:/^(year|month)$/.test(t),fixedWeekCount:a.fixedWeekCount,dateEnv:a.dateEnv})}}function nn(s){let{dateEnv:e,currentRange:t}=s,{start:n,end:r}=t,a;if(s.snapToWeek&&(n=e.startOfWeek(n),a=e.startOfWeek(r),a.valueOf()!==r.valueOf()&&(r=ge(a,1))),s.fixedWeekCount){let l=e.startOfWeek(e.startOfMonth(re(t.end,-1))),d=Math.ceil(nt(l,r));r=ge(r,6-d)}return{start:n,end:r}}class sn extends B{constructor(){super(...arguments),this.headerElRef=F()}renderSimpleLayout(e,t){let{props:n,context:r}=this,a=[],l=he(r.options);return e&&a.push({type:"header",key:"header",isSticky:l,chunk:{elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}}),a.push({type:"body",key:"body",liquid:!0,chunk:{content:t}}),x(pe,{elClasses:["fc-daygrid"],viewSpec:r.viewSpec},x(ct,{liquid:!n.isHeightAuto&&!n.forPrint,collapsibleWidth:n.forPrint,cols:[],sections:a}))}renderHScrollLayout(e,t,n,r){let a=this.context.pluginHooks.scrollGridImpl;if(!a)throw new Error("No ScrollGrid implementation");let{props:l,context:d}=this,g=!l.forPrint&&he(d.options),m=!l.forPrint&&gt(d.options),u=[];return e&&u.push({type:"header",key:"header",isSticky:g,chunks:[{key:"main",elRef:this.headerElRef,tableClassName:"fc-col-header",rowContent:e}]}),u.push({type:"body",key:"body",liquid:!0,chunks:[{key:"main",content:t}]}),m&&u.push({type:"footer",key:"footer",isSticky:!0,chunks:[{key:"main",content:ht}]}),x(pe,{elClasses:["fc-daygrid"],viewSpec:d.viewSpec},x(a,{liquid:!l.isHeightAuto&&!l.forPrint,forPrint:l.forPrint,collapsibleWidth:l.forPrint,colGroups:[{cols:[{span:n,minWidth:r}]}],sections:u}))}}class an extends sn{constructor(){super(...arguments),this.buildDayTableModel=j(on),this.headerRef=F(),this.tableRef=F()}render(){let{options:e,dateProfileGenerator:t}=this.context,{props:n}=this,r=this.buildDayTableModel(n.dateProfile,t),a=e.dayHeaders&&x(it,{ref:this.headerRef,dateProfile:n.dateProfile,dates:r.headerDates,datesRepDistinctDays:r.rowCnt===1}),l=d=>x(en,{ref:this.tableRef,dateProfile:n.dateProfile,dayTableModel:r,businessHours:n.businessHours,dateSelection:n.dateSelection,eventStore:n.eventStore,eventUiBases:n.eventUiBases,eventSelection:n.eventSelection,eventDrag:n.eventDrag,eventResize:n.eventResize,nextDayThreshold:e.nextDayThreshold,colGroupNode:d.tableColGroupNode,tableMinWidth:d.tableMinWidth,dayMaxEvents:e.dayMaxEvents,dayMaxEventRows:e.dayMaxEventRows,showWeekNumbers:e.weekNumbers,expandRows:!n.isHeightAuto,headerAlignElRef:this.headerElRef,clientWidth:d.clientWidth,clientHeight:d.clientHeight,forPrint:n.forPrint});return e.dayMinWidth?this.renderHScrollLayout(a,l,r.colCnt,e.dayMinWidth):this.renderSimpleLayout(a,l)}}function on(s,e){let t=new st(s.renderRange,e);return new at(t,/year|month|week/.test(s.currentRangeUnit))}var rn=Mt({name:"@fullcalendar/daygrid",initialView:"dayGridMonth",views:{dayGrid:{component:an,dateProfileGeneratorClass:tn},dayGridDay:{type:"dayGrid",duration:{days:1}},dayGridWeek:{type:"dayGrid",duration:{weeks:1}},dayGridMonth:{type:"dayGrid",duration:{months:1},fixedWeekCount:!0},dayGridYear:{type:"dayGrid",duration:{years:1}}}});const ln=s=>{const[e,t]=_.useState("#eeeeee"),n=I();_.useEffect(()=>{t("#eeeeee")},[s.event]);const r=l=>{t("#efd44c"),n(xe({game_schedule_id:l.extendedProps.game_schedule_id,homename:l.extendedProps.home_team_name,awayname:l.extendedProps.away_team_name,team_id:l.extendedProps.team_id,date:l.start.toLocaleString("ko-KR"),stadium:l.extendedProps.stadium,team_logo_img_url:l.extendedProps.team_logo_img_url,opponent_team_id:l.extendedProps.opponent_team_id,opponent_team_logo_img_url:l.extendedProps.opponent_team_logo_img_url}))},a=l=>{t("#eeeeee"),n(xe({game_schedule_id:"",homename:"",awayname:"",team_id:"",date:"",stadium:"",team_logo_img_url:"",opponent_team_id:"",opponent_team_logo_img_url:""}))};return i("div",{children:v(cn,{style:{background:e},children:[v(we,{children:[v(gn,{children:[i(ve,{src:ue(s.event.extendedProps.home_team_name),alt:s.event.extendedProps.home_team_name}),i(dn,{children:" vs "}),i(ve,{src:ue(s.event.extendedProps.away_team_name),alt:s.event.extendedProps.away_team_name})]}),v(hn,{children:[v(Ce,{children:[i(ke,{children:"경기 일정"}),i(Se,{children:s.event.start.toLocaleString("ko-KR")})]}),v(Ce,{children:[i(ke,{children:"경기 장소"}),v(Se,{children:[s.event.extendedProps.stadium," 경기장"]})]})]})]}),i(we,{children:e==="#efd44c"?i(be,{onClick:()=>a(s.event),children:"선택 해제"}):i(be,{onClick:()=>r(s.event),children:"선택"})})]})})},dn=o.div`
  font-size: 30px;
  padding: 30px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: black;
  ${C.lessThan("mobile")`
     padding: 5px;
     font-size: 15px;
	`}
`,be=o.div`
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  padding: 12px;
  color: black;
  /* background-color: white;
  border-radius: 15px; */
  ${C.lessThan("mobile")`
     padding: 5px;
     font-size: 15px;
	`}
`,cn=o.div`
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #eeeeee;
  border-radius: 20px;
  margin: 10px auto;
  ${C.lessThan("mobile")`
	`}
`,ve=o.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  ${C.lessThan("mobile")`
    height: 40px;
    width: 40px;
	`}
`,we=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10%;
  ${C.lessThan("mobile")`
     padding: 3px;
     gap: 3%;
	`}
`,gn=o.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  ${C.lessThan("mobile")`
     padding: 3px;
	`}
`,hn=o.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 15px;
  ${C.lessThan("mobile")`
     padding: 3px;
     gap: 3px;
	`}
`,Se=o.div`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  ${C.lessThan("mobile")`
    font-size: 12px;
	`}
`,Ce=o.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 20px;
  color: black;
  ${C.lessThan("mobile")`
     padding: 5px;
	`}
`,ke=o.div`
  align-items: center;
  font-size: 20px;
  ${C.lessThan("mobile")`
     font-size: 10px;
	`}
`,pn=({teamName:s,teamEvents:e})=>{const[t,n]=_.useState(),r=e.map(g=>({...g,start:new Date(g.date)}));return v(mn,{children:[i(Fe,{plugins:[rn],initialView:"dayGridMonth",events:r,eventContent:g=>{const{home_team_name:m,opponent_team_logo_img_url:u}=g.event.extendedProps;return i(fn,{children:m&&i(xn,{src:`https://kickstorage.blob.core.windows.net${u}`,alt:m})})},eventClick:g=>{n(g.event)}}),t&&i(un,{children:i(ln,{event:t,onClose:()=>{n(null)}})})]})},mn=o.div`
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
    ${C.lessThan("mobile")`
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
    ${C.lessThan("mobile")`
      display:flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 5px;
      margin-bottom: 5px;
	`}
  }

  // 날짜  ex) 2일
  .fc .fc-daygrid-day-top {
    flex-direction: row;
    padding: 10px 0 0 10px;
    ${C.lessThan("mobile")`
      padding: 3px 0 0 3px;
	`}
    
  }

  // 각 이벤트 요소
  .fc-event {
    cursor: pointer;
    padding: 5px;
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
`,xn=o.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  ${C.lessThan("mobile")`
    width: 100%;
    height: 100%;
    object-fit: contain;
	`}
`,yn=[{item:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg",home_team_name:"강원",name:"강원FC"},{item:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg",home_team_name:"광주",name:"광주FC"},{item:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg",home_team_name:"대구",name:"대구FC"},{item:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg",home_team_name:"대전",name:"대전하나시티즌"},{item:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg",home_team_name:"수원",name:"수원삼성블루윙즈"},{item:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg",home_team_name:"수원FC",name:"수원FC"},{item:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg",home_team_name:"울산",name:"울산현대"},{item:"https://kickstorage.blob.core.windows.net/logo/incheon_united.svg",home_team_name:"인천",name:"인천유나이티드"},{item:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg",home_team_name:"전북",name:"전북현대모터스"},{item:"https://kickstorage.blob.core.windows.net/logo/jeju_united.svg",home_team_name:"제주",name:"제주유나이티드"},{item:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg",home_team_name:"포항",name:"포항스틸러스"},{item:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg",home_team_name:"서울",name:"FC서울"}],bn=()=>{const s={dots:!1,autoplay:!1,infinite:!0,slidesToShow:7,slidesToScroll:2,swipeToSlide:!0,accessibility:!0,autoplaySpeed:3e3,speed:500,prevArrow:i(Mn,{children:"‹"}),nextArrow:i(zn,{children:"›"})},[e,t]=_.useState([]),[n,r]=_.useState("강원"),a=d=>{r(d)},l=_.useCallback(async d=>{const m=await(await fetch(`https://kick-back.azurewebsites.net/api/game_schedule/?team_name=${d}`,{method:"GET"})).json();t(m)},[]);return v(Sn,{children:[i(vn,{...s,children:yn.map((d,g)=>i(wn,{onClick:()=>{a(d.home_team_name),l(d.home_team_name)},isSelected:n===d.home_team_name,children:v(Cn,{children:[i(Rn,{children:i(_n,{children:i(En,{src:d.item,alt:"정보가 없습니다."})})}),i(Dn,{children:i(Tn,{children:d.home_team_name})})]},g)},g))}),n&&i(kn,{children:i(pn,{teamName:n,teamEvents:e})})]})},vn=o(Ze)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
  }

  .slick-slide > div {
    margin-right: 20%;
  }

  .slick-prev{
    left: 12px;
  }
  .slick-next{
    right: 12px;
  }

  ${C.lessThan("mobile")`
    font-size: 12px;
	`}
`,wn=o.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${s=>s.isSelected?"#49496d":"transparent"};
`,Sn=o.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`,Cn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,kn=o.div`
  background-color: white;
`,Rn=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  overflow: hidden;
`,En=o.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  ${C.lessThan("mobile")`
      width: 40px;
      height: 40px;
	`}
`,Tn=o.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${C.lessThan("mobile")`
      font-size: 1px;
	`}
`,_n=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Dn=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,Mn=o.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,zn=o.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,Re=()=>i(Pn,{children:i(Nn,{children:i(bn,{})})}),Pn=o.div`
  height:100%;
  overflow-x: hidden;
`,Nn=o.div`
  height:100%;
  background-color: #1F1F45;
  overflow-x: hidden;
`,{kakao:z}=window,In=s=>{let e=[];const t=I(),{detailMeetingPlace:n,meetingPlace:r}=T(a=>a.summary);return _.useEffect(()=>{const a=document.getElementById("map"),l={center:new z.maps.LatLng(37.566826,126.9786567),level:3},d=new z.maps.Map(a,l),g=new z.maps.services.Places,m=new z.maps.InfoWindow({zIndex:1});u();function u(){let f=s.searchKeyword;if(!f.replace(/^\s+|\s+$/g,""))return!1;g.keywordSearch(f,w)}function w(f,h,c){if(h===z.maps.services.Status.OK)k(f),R(c);else if(h===z.maps.services.Status.ZERO_RESULT){alert("검색 결과가 존재하지 않습니다.");return}else if(h===z.maps.services.Status.ERROR){alert("검색 결과 중 오류가 발생했습니다.");return}}function k(f){const h=document.getElementById("places-list"),c=document.getElementById("search-result"),D=document.createDocumentFragment(),M=new z.maps.LatLngBounds;h&&p(h),S();for(var P=0;P<f.length;P++){let G=new z.maps.LatLng(f[P].y,f[P].x),$=E(G,P),ee=y(P,f[P]);M.extend(G),function(V,de){z.maps.event.addListener(V,"mouseover",function(){b(V,de)}),z.maps.event.addListener(V,"mouseout",function(){m.close()}),ee.onmouseover=function(){b(V,de)},ee.onmouseout=function(){m.close()}}($,f[P].place_name),D.appendChild(ee)}h&&h.appendChild(D),c&&(c.scrollTop=0),d.setBounds(M)}function y(f,h){const c=document.createElement("li");let D=`
    <div class="info" style="display: flex; justify-content: flex-start; align-items: center;gap:10px; border-bottom:1px solid gray; padding: 5px;">
      <div>
        <label class="checkbox-container" style="display: flex; justify-content: center; align-items: center; gap: 10px;">
          <input type="radio" name="place" class="checkbox-input">
          <div class="checkbox-custom"></div>
          <div>        
            <h5 class="info-item place-name" style="font-size: 16px; ">${h.place_name}</h5>
            ${h.road_address_name?`<p class="info-item road-address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${h.road_address_name}
                  </p>
                  <p class="info-item address-name" style="font-size:12px; padding: 5px 0;  font-weight: 400; color: #666666;">
                    ${h.address_name}
                    </p>`:`<p class="info-item address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${h.address_name}
                  </p>`}
          </div>
        </label>
      </div>
    </div>
    `;c.innerHTML=D,c.className="item",c.onclick=function(){var P;(P=s.handleSearchLocation)==null||P.call(s,h.place_name,h.address_name)};const M=c.querySelector(".checkbox-input");return M==null||M.addEventListener("click",()=>{t(je({meetingPlace:h.place_name,detailMeetingPlace:n,meetingPlaceAddress:h.address_name})),c.classList.toggle("checked")}),c}function E(f,h,c){var D="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",M=new z.maps.Size(36,37),P={spriteSize:new z.maps.Size(36,691),spriteOrigin:new z.maps.Point(0,h*46+10),offset:new z.maps.Point(13,37)},G=new z.maps.MarkerImage(D,M,P),$=new z.maps.Marker({position:f,image:G});return $.setMap(d),e.push($),$}function S(){for(var f=0;f<e.length;f++)e[f].setMap(null);e=[]}function R(f){const h=document.getElementById("pagination");let c=document.createDocumentFragment(),D;for(;h.hasChildNodes();)h.lastChild&&h.removeChild(h.lastChild);for(D=1;D<=f.last;D++){const M=document.createElement("div");M.href="#",M.innerHTML=D.toString(),D===f.current?M.className="on":M.onclick=function(P){return function(){f.gotoPage(P)}}(D),c.appendChild(M)}h.appendChild(c)}function b(f,h){const c='<div style="padding:10px; z-index:1;" class="marker-title">'+h+"</div>";m.setContent(c),m.open(d,f)}function p(f){for(;f.hasChildNodes();)f.lastChild&&f.removeChild(f.lastChild)}},[s.searchKeyword,n]),i(jn,{children:v(Fn,{children:[i(Hn,{id:"map",className:"map"}),v(Bn,{id:"search-result",children:[i($n,{children:v(On,{children:[s.searchKeyword," 관련 검색결과"]})}),i(An,{children:i(Wn,{id:"places-list"})}),i(Ln,{id:"pagination"})]})]})})},jn=o.div`
  align-items: center;
  justify-content: center;
`,Fn=o.div`
  display: flex;
  align-items: flex-start;
  /* background-color: #e6e3e3; */
  height: 100%;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  ${C.lessThan("mobile")`
      flex-direction: column;
	`}
`,Hn=o.div`
  width: 700px;
  height: 600px;
  background-color: #e0e0e0;
  border-radius: 10px 0 0 10px;
  margin-bottom: 20px;
  font-size: 12px;
  ${C.lessThan("mobile")`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
	`}
`,Bn=o.div`
  width: 60%;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgb(248, 248, 248);
  border-radius: 0 10px 10px 0;
  align-items: center;
  ${C.lessThan("mobile")`
      padding: 0px;
      border-radius: 10px;
      width:100%;
	`}
`,$n=o.p`
  font-size: 1px;
  margin: 20px 0;
  padding: 20px;
  font-weight: bold;
  ${C.lessThan("mobile")`
    padding: 5px;
	`}
`,On=o.span`
  color: black;
  font-size: 20px;
  ${C.lessThan("mobile")`
     font-size: 20px;
	`}
`,An=o.div`
  width: 100%;
  max-height: 600px;
  padding: 10px;
  overflow-y: auto;
  ${C.lessThan("mobile")`
	`}
`,Wn=o.ul`
  list-style: none;
  padding: 10px;
  color: #1f1f45;
  .item {
    div {
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
`,Gn=()=>{const s=I(),{meetingPlace:e,detailMeetingPlace:t,meetingPlaceAddress:n}=T(p=>p.summary),[r,a]=_.useState(""),[l,d]=_.useState(""),g=(p,f)=>{a(p),d(f)};let[m,u]=_.useState("");const[w,k]=_.useState(""),[y,E]=_.useState(""),S=p=>{p.preventDefault(),k(p.target.value)},R=p=>{p.preventDefault(),E(w)};return i(Vn,{children:i(qn,{children:v(Un,{children:[i(Xn,{children:v(Zn,{children:[i(Kn,{children:i(Jn,{onSubmit:R,children:v(Qn,{htmlFor:"place",className:"form__label",children:[i(ei,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:S,placeholder:"장소를 입력해보세요!",required:!0}),i(ti,{children:i(Yn,{className:"btn form__submit",type:"submit",value:"검색",onClick:()=>{w===""?alert("검색어를 입력해주세요."):R({preventDefault:()=>{}})}})})]})})}),i(In,{searchKeyword:y,handleSearchLocation:g})]})}),i(Ee,{children:v("div",{className:"SearchContainer",children:[i(ni,{children:r||e}),i(ii,{children:l||n})]})}),i(Ee,{children:i("input",{className:"detail",type:"text",id:"loc",value:m||t,onChange:p=>{u(p.target.value),s(je({detailMeetingPlace:p.target.value,meetingPlace:e,meetingPlaceAddress:n}))},placeholder:"상세 위치를 입력해주세요."})})]})})})},Vn=o.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,qn=o.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Un=o.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  ${C.lessThan("mobile")`
     margin-bottom: 10px;
	`}
`,Kn=o.div`
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
`,Ee=o.div`
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

  ${C.lessThan("mobile")`
    .detail {
      border-radius: 12px;
      border: 1px solid #ccc;
      padding: 10px;
      /* border: none; 
      outline: none;  */
    }
     
	`}
`,Yn=o(Le)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  ${C.lessThan("mobile")`
     width:20px;
     height:20px;
	`}
`,Xn=o.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Zn=o.div``;o.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const Jn=o.form`
  width: 100%;
`,Qn=o.label`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`,ei=o.input`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 5px 10px;
  border: none;
  font-size: 16px;
  background-color: rgb(248, 248, 248);
  ${C.lessThan("mobile")`
     font-size:12px;
	`}
`,ti=o.div`
  padding: 10px;
  ${C.lessThan("mobile")`
     padding: 3px;
	`}
`;o.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const ni=o.p`
  font-size: 18px;
  font-weight: 500;
  ${C.lessThan("mobile")`
     font-size:10px;
	`}
`,ii=o.p`
  font-size: 14px;
  font-weight: 400;
  ${C.lessThan("mobile")`
     font-size:10px;
	`}
`,si=s=>{const e=I(),{term:t,minNum:n,maxNum:r}=T(m=>m.summary),[a,l]=_.useState(1),[d,g]=_.useState(1);return v(ai,{children:[i(O,{children:"최소"}),i(Te,{children:i("input",{type:"number",value:a||n,onChange:m=>{l(Number(m.target.value)||n),e(oe({term:t,minNum:Number(m.target.value)||n,maxNum:d||r}))}})}),i(O,{children:"명"}),i(O,{children:"-"}),i(O,{children:"최대"}),i(Te,{children:i("input",{type:"number",value:d||r,onChange:m=>{g(Number(m.target.value)||r),e(oe({term:t,minNum:a||n,maxNum:Number(m.target.value)||r}))}})}),i(O,{children:"명"})]})},ai=o.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,O=o.div`
  display:flex;
  justify-content:center;
  align-items:center;
`,Te=o.div`
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
`,oi=s=>i("div",{}),ri=s=>{const e=I(),{minNum:t,maxNum:n,term:r}=T(u=>u.summary),[a,l]=_.useState(new Date),[d,g]=_.useState(null),m=u=>{if(u){const[w,k]=u;l(w),g(k)}};return _.useEffect(()=>{if(a&&d){const u=a.toLocaleDateString("ko-KR"),w=d.toLocaleDateString("ko-KR"),k=`${u} ~ ${w}`;e(oe({term:k,minNum:t,maxNum:n}))}},[a,d]),v("div",{children:[i(di,{children:a&&d||r?r?i(ae,{children:i(K,{children:r})}):v(ae,{children:[i(K,{children:a==null?void 0:a.toLocaleDateString("ko-KR")}),i(K,{children:" ~ "}),i(K,{children:d==null?void 0:d.toLocaleDateString("ko-KR")})]}):i("div",{children:"날짜를 선택해주세요."})}),i(li,{locale:Ve,dateFormat:"yyyy년 MM월 dd일",dateFormatCalendar:"yyyy년 MM월",minDate:new Date,placeholderText:"날짜를 선택해주세요.",selected:a,onChange:m,startDate:a,endDate:d,selectsRange:!0,inline:!0})]})},li=o(Ge)`
  width: 350px; 
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items:center;


`,di=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`,K=o.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;function ci({}){return v(gi,{children:[i(si,{}),i(ri,{}),i(oi,{})]})}const gi=o.div`
margin: 20px auto;
width: 80%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`,hi=s=>{const e=I(),{img:t,content:n,tag:r,title:a}=T(g=>g.summary);let[l,d]=_.useState("");return i(pi,{children:i("input",{type:"text",id:"title",value:l||a,placeholder:"제목을 입력해주세요.",onChange:g=>{d(g.target.value),e(Q({img:t,title:g.target.value,content:n,tag:r}))}})})},pi=o.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width:100%;
  

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 100%;
    padding: 10px; 
    /* border: none; 
    outline: none;  */
    font-size: 16px; 
    
  }
`,mi=s=>{const e=I(),{title:t,img:n,tag:r,content:a}=T(g=>g.summary);let[l,d]=_.useState("");return i(ui,{children:i(fi,{value:l||a,onChange:g=>{d(g.target.value),e(Q({img:n,title:t,content:g.target.value,tag:r}))},placeholder:"내용을 입력해주세요."})})},fi=o.textarea`
  flex-shrink: 0;
  width: 100%;
  height: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 16px;
  /* border: none;
  outline: none; */
`,ui=o.div`
  flex-shrink: 0;
  background: #fff;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width:100%;
`,ie=[{idx:1,name:"여행 위주",origName:"# 여행 위주"},{idx:2,name:"자유로운",origName:"# 자유로운"},{idx:3,name:"조용히",origName:"# 조용히"},{idx:4,name:"숙박",origName:"# 숙박"},{idx:5,name:"당일치기",origName:"# 당일치기"},{idx:6,name:"시끌벅적",origName:"# 시끌벅적"},{idx:7,name:"우천시 취소",origName:"# 우천시 취소"},{idx:8,name:"시간 조율",origName:"# 시간 조율"},{idx:9,name:"남성",origName:"# 남성"},{idx:10,name:"여성",origName:"# 여성"},{idx:11,name:"10대",origName:"# 10대"},{idx:12,name:"20대",origName:"# 20대"},{idx:13,name:"30대",origName:"# 30대"},{idx:14,name:"40대",origName:"# 40대"},{idx:15,name:"50대",origName:"# 50대"},{idx:16,name:"60대",origName:"# 60대"},{idx:17,name:"70대",origName:"# 70대"},{idx:18,name:"80대",origName:"# 80대"},{idx:19,name:"90대",origName:"# 90대"}],xi=()=>{const[s,e]=_.useState(!0),[t,n]=_.useState([...ie]);let[r,a]=_.useState([]);const[l,d]=_.useState(),g=I(),{img:m,content:u,title:w,tag:k}=T(p=>p.summary),y=()=>{n([...ie]),e(p=>!p)},E=(p,f,h)=>p.split(f).join(h),S=p=>{const f=p.target.value,c=ie.map(D=>{const M={...D};return M.name.indexOf(f)>-1&&(M.name=E(M.name,f,`<b style='color:black'>${f}</b>`)),M}).filter(D=>D.name.indexOf(f)>-1);n([...c])},R=p=>()=>{if(y(),!r.some(h=>h.idx===p.idx)){const h=new Set([...r,p]),c=[...r,p];a([...Array.from(h)]),g(Q({tag:c.map(D=>D),img:m,content:u,title:w}))}},b=p=>{const f=r.filter(h=>h.idx!==p);a([...f]),g(Q({tag:f.map(h=>h),img:m,content:u,title:w}))};return k.length!==0&&(r=[...k]),v(yi,{children:[i(bi,{onClick:y,children:v(vi,{children:[i(wi,{children:"태그를 선택해주세요."}),i(Si,{filterState:s})]})}),s?i(Ri,{children:r==null?void 0:r.map(p=>i(_i,{hover:p.idx===l,onMouseOver:()=>{d(p.idx)},onMouseOut:()=>{d(void 0)},onClick:()=>{b(p.idx)},children:p.origName},p.idx))}):v(Ti,{children:[i(Ei,{onChange:S,placeholder:"태그 검색하기"}),i(Ci,{}),i(ki,{children:t==null?void 0:t.map(p=>i(Di,{onClick:R(p),dangerouslySetInnerHTML:{__html:p.name}},p.idx))})]})]})},yi=o.div`
  width:100%;
`,bi=o.div`
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  display: inline-block;
  &:last-child {
    padding-bottom: 10px;
  }
`,vi=o.div`
  cursor: pointer;
`,wi=o.div`
  font-size: 15px;
  float: left;
  color: #8e8e8e;
`,Si=o.div`
  width: 25px;
  height: 15px;
  float: right;
  background-repeat: no-repeat;
  background-size: cover;
`,Ci=o.div`
  color: #1f1f45;
  font-size: 29px;
  position: absolute;
`,ki=o.div`
  width: 300px;
  height: 165px;
  padding: 5px;
  margin-right: 5px;
  overflow-y: auto;
`,Ri=o.div`
  width: 300px;
  margin-top: 10px;
`,Ei=o.input`
  width: 280px;
  height: 30px;
  border-radius: 5px;
  padding: 3px;
  border: 1px solid #3f3f3f;
  margin-right: 5px;
`,Ti=o.div`
  width: 300px;
  height: 215px;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.25);
  padding: 10px;
`,_i=o.div`
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
`,Di=o.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1f1f45;
    color: black;
  }
`,Mi=s=>i(zi,{children:v(Pi,{children:[i(hi,{}),i(mi,{}),i(xi,{})]})}),zi=o.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Pi=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 30%;
  ${C.lessThan("mobile")`
		width:100%;
	`}
`;function Ni({}){const{img:s,title:e,stadium:t,date:n,homename:r,awayname:a,meetingPlace:l,detailMeetingPlace:d,term:g,minNum:m,maxNum:u,content:w,tag:k}=T(b=>b.summary),y=T(b=>b.selecteditem),E=T(b=>b.selecteditem.house),S=T(b=>b.selecteditem.food),R=T(b=>b.selecteditem.attraction);return v(Ii,{children:[i(ji,{children:e}),v(Y,{children:[i(X,{children:"🔥 매치 정보"}),i(Fi,{children:v(De,{children:[v(Me,{children:[i(se,{children:i(_e,{children:n})}),i(se,{children:v(_e,{children:[t," 경기장"]})})]}),i(ze,{children:v(A,{children:[" ",r&&a?r+" vs "+a:""," "]})})]})})]}),v(Y,{children:[i(X,{children:"🔥 동행 정보"}),i(Hi,{children:m&&u&&l&&d&&g?v(De,{children:[i(Me,{children:v(se,{children:[i(A,{children:"희망 인원 "}),v(A,{children:[" ",m," ~ ",u," 명"]})]})}),v(ze,{children:[v(A,{children:[" ","동행 장소 ",l," ",d]}),v(A,{children:[" 동행 기간 ",g," "]})]})]}):i(ae,{})})]}),v(Y,{children:[i(X,{children:"🔥 태그 정보"}),i(Bi,{children:k.map((b,p)=>i($i,{children:b.origName},p))})]}),v(Y,{children:[i(X,{children:"🔥 카드 정보"}),i(Ai,{children:i(Li,{children:v(Wi,{children:[y.house.length>0&&i(Z,{index:0,ischk:!1,list:E}),y.food.length>0&&i(Z,{index:1,ischk:!1,list:S}),y.attraction.length>0&&i(Z,{index:2,ischk:!1,list:R})]})})})]}),i(Oi,{children:w})]})}const Ii=o.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Y=o.div`
  justify-content: left;
  align-items: left;
`;o.div`
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
`;o.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  font-size: 12px;
`;const ji=o.div`
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
`,Fi=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,_e=o.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,se=o.div`
  align-items: center;
  gap: 10px;
`,X=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,A=o.div`
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
`,ze=o.div`
  gap: 15px;
`,Hi=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,Bi=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`,$i=o.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,Oi=o.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  word-break:break-all;
  /* border: none;
  outline: none; */
`,Ai=o.div`
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
`,Wi=o.div`
  display: flex;
`,Li=o.div`
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
`,Gi=({title:s,index:e})=>{const t=I();return v(Vi,{children:[i(qi,{children:s}),v(Ui,{children:[i(Ki,{index:e,onClick:()=>{e===0?t(ne({modalType:"HouseSearchModal",isOpen:!0})):e===1?t(ne({modalType:"FoodSearchModal",isOpen:!0})):e===2&&t(ne({modalType:"AttractionSearchModal",isOpen:!0}))},children:i(Yi,{})}),i(Z,{index:e,ischk:!0})]})]})},Vi=o.div`
  width:100%;
  padding: 10px;
`,qi=o.p`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`,Ui=o.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  justify-content: left;
  align-items: left;
  padding: 10px 0;
`,Ki=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${s=>{switch(s.index){case 0:return"#F0B86E";case 1:return"#9F91CC";case 2:return"#D4E2D4"}}};
  gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
`,Yi=o(qe)`
  width: 40px;
  height: 40px;
  color: white;
`,Xi=["🏠 숙박","🍚 음식점","🏖️ 관광지"],Zi=()=>i(Ji,{children:Xi.map((s,e)=>i(Gi,{title:s,index:e},e))}),Ji=o.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Qi=()=>{const[s,e]=_.useState(!1),t=Ue(),n=I(),{post:r,loading:a}=T(c=>c.accompany),l=["경기 일정 선택","모임장소","일정 카드 선택","상세 내용","상세 내용","내 동행 일정"],d=T(c=>c.summary.game_schedule_id),g=T(c=>c.selecteditem.attraction),m=T(c=>c.selecteditem.food),w={accommodation:T(c=>c.selecteditem.house).map(c=>({content_id:c.content_id,title:c.title,firstimage:c.firstimage})),restaurant:m.map(c=>({content_id:c.content_id,title:c.title,firstimage:c.firstimage})),attraction:g.map(c=>({content_id:c.content_id,title:c.title,firstimage:c.firstimage}))},[k,y]=_.useState(0),E=()=>{k>0&&y(c=>c-1)},R=T(c=>c.summary.tag).map(c=>c.name).join(","),b={token:T(c=>c.auth.token),schedule_id:T(c=>c.summary.game_schedule_id),home_team_name:T(c=>c.summary.homename),team_id:T(c=>c.summary.team_id),thumbnail:"dummyimg",title:T(c=>c.summary.title),content:T(c=>c.summary.content),tag_list:R,tour_card_id_list:w,meeting_place:T(c=>c.summary.meetingPlace),meeting_place_address:T(c=>c.summary.meetingPlaceAddress),detail_meeting_place:T(c=>c.summary.detailMeetingPlace),term:T(c=>c.summary.date),min_num:T(c=>c.summary.minNum),max_num:T(c=>c.summary.maxNum),now_status:0};_.useEffect(()=>{n(zt(b))},[s]);const p=async()=>{if(k<l.length-1)if(k===0)if(d==="")Xe.info("일정을 선택해주세요");else return y(c=>c+1);else y(c=>c+1);else k===l.length-1&&(e(!0),console.log(r,a),setTimeout(()=>{n(Pt()),n(Nt()),t("/")},3e3))},f=k===5?"완료":"다음";let h=null;switch(k){case 0:h=Re;break;case 1:h=Gn;break;case 2:h=Zi;break;case 3:h=ci;break;case 4:h=Mi;break;case 5:h=Ni;break;default:h=Re}return v(ns,{children:[v(ts,{children:[i(is,{onClick:E}),i(es,{children:l[k]}),i(ss,{onClick:()=>t("/")})]}),i(as,{children:i(h,{})}),i(os,{children:i(rs,{onClick:p,children:f})})]})},es=o.h1`
  display: flex;
  color: #000;
  font-size: 30px;
  font-weight: bold;
  ${C.lessThan("mobile")`
		font-size: 20px;
	`}
`,ts=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`,ns=o.div`
  font-weight: bold;
  background-color: #ffffff;
`,is=o(Ke)`
  width: 30px;
  height: 30px;
  color: #000000;
  ${C.lessThan("mobile")`
		width:25px;
    height:25px;
	`}
`,ss=o(Ye)`
  width: 40px;
  height: 40px;
  color: #000000;
  justify-content: right;
  align-items: right;
  ${C.lessThan("mobile")`
		width:25px;
    height:25px;
	`}
`,as=o.div`
  display: flex;
`,os=o.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,rs=o.div`
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
  ${C.lessThan("mobile")`
    margin-top: 20px;
    margin-bottom: 50px;
	`}
`,ms=()=>i("div",{children:i(Qi,{})});export{ms as default};
