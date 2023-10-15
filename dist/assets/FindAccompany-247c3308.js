import{s as n,f as N,b as R,e as r,a as e,Y as M,j as h}from"./vendor-5d52e3a8.js";import{g as z,B as C}from"./common-408be586.js";import{A as D}from"./main-5ee14d30.js";/* empty css                       */const Q=z("token"),U={Authorization:`Bearer ${Q}`},W=d=>{const m=N(),p=R(a=>a.auth.id),[l,w]=r.useState([]);return r.useEffect(()=>{async function a(){try{const k=await(await fetch(`${C}/api/recruitments-list/?id=${p}`,{method:"get",headers:U})).json();w(k)}catch(b){console.error("Error:",b)}}a()},[]),e(H,{children:l.map(a=>e("div",{onClick:()=>m(`/findaccompany/detail/${a.recruitmentBoardId}`),children:e(D,{post:a})},a.recruitmentBoardId))})},H=n.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,J=z("token"),E={Authorization:`Bearer ${J}`},K=d=>{const{id:m,isAuthenticated:p}=R(o=>o.auth),[l,w]=r.useState(),a=N(),{search:b}=M(),k=r.useRef(null),[G,O]=r.useState(),[y,f]=r.useState(!1),[x,S]=r.useState(Number),[v,_]=r.useState([]),[u,j]=r.useState([]),Y=o=>{const t=v.includes(o);_(t?v.filter(i=>i!==o):[...v,o])},$=(o,t,i)=>{const c=u.findIndex(s=>s.content===t);j(c!==-1?s=>s.filter((g,q)=>q!==c):s=>[...s,{id:o,content:t,sort_type:i}])};V(k,()=>f(!1));const L=r.useCallback(async()=>{if(p)if(u.length===0){const t=await(await fetch(`${C}/api/recruitments-list/`,{method:"GET",headers:E})).json();w(t)}else{const t=await(await fetch(`${C}/api/recruitments-list/${b}`,{method:"GET",headers:E})).json();w(t)}},[b]);r.useEffect(()=>{L()},[L]);const T=()=>{const o=u.map(({id:t,sort_type:i})=>{if(i==="home_team")return`${i}_id=${t+1}`;if(i==="recruit")return`now_status=${G}`}).filter(t=>t!==void 0).map((t,i)=>i===0?t:"&"+t).join("");a(`?${o}`)};return h(X,{children:[e(Z,{ref:k,children:P.map(({sort_type:o,title:t,contents:i},c)=>{if(o==="home_team")return h(F,{children:[e(B,{className:x===c?"show":"hide",onClick:()=>{S(c),f(!0)},children:t}),h(te,{className:x===c&&y?"show":"hide",children:[i.map((s,g)=>e(ne,{onClick:()=>$(g,s[1],o),children:e(se,{isSelected:v.includes(s[1]),onClick:()=>Y(s[1]),children:e(re,{src:s[0],alt:"팀로고"})})},g)),e(A,{children:e(I,{onClick:()=>{T(),f(!1)},children:"필터 적용"})})]})]},c);if(o==="recruit")return h(F,{children:[e(B,{className:x===c?"show":"hide",onClick:()=>{S(c),f(!0)},children:t}),h(ee,{className:x===c&&y?"show":"hide",children:[i.map((s,g)=>e(oe,{onClick:()=>{O(parseInt(s[1])),$(g,s[1],o)},children:h(ie,{children:[e("input",{type:"radio",name:"recruits"}),s[0]]})},g)),e(A,{children:e(I,{onClick:()=>{T(),f(!1)},children:"필터 적용"})})]})]},c)})}),e(ce,{children:(u==null?void 0:u.length)!==0?l==null?void 0:l.map((o,t)=>e("div",{onClick:()=>a(`/findaccompany/detail/${o.recruitmentBoardId}`),children:e(D,{post:o})},t)):e(W,{})})]})},P=[{sort_type:"home_team",title:"구단별",contents:[["https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg","강원FC"],["https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg","광주FC"],["https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg","대구FC"],["https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg","대전하나시티즌"],["https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg","수원삼성블루윙즈"],["https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg","FC서울"],["https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg","포항스틸러스"],["https://kickstorage.blob.core.windows.net/logo/jeju_united.svg","제주유나이티드"],["https://kickstorage.blob.core.windows.net/logo/incheon_united.svg","인천유나이티드"],["https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg","울산현대"],["https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg","수원FC"],["https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg","전북현대모터스"]]},{sort_type:"recruit",title:"모집 여부",contents:[["모집중","0"],["모집종료","1"],["모집완료","2"]]}],V=(d,m)=>{r.useEffect(()=>{const p=l=>{!d.current||d.current.contains(l.target)||m(l)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[d,m])},X=n.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Z=n.ul`
  display: flex;
`,F=n.li`
  position: relative;
`,B=n.div`
  padding: 10px;
  margin: 0 5px;
  border: 1px solid #dbdbdb;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &.show {
    background-color: #1f1f45;
    color: white;
  }
`,ee=n.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  width: 240px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: block;
  }
`,te=n.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  /* width: 100%; */
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 3개의 열로 그리드 설정 */
    grid-gap: 5px; /* 열 사이의 간격 설정 */
    justify-content: flex-start;
    align-items: center;
  }
`,oe=n.div`
  margin: 10px 0;
  cursor: pointer;
`,ne=n.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`,se=n.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${d=>d.isSelected?"#ffcd40":"white"};
`,ie=n.label`
  display: flex;
  gap: 10px;
`,re=n.img`
  height: 40px;
  pointer-events: none;
`,A=n.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`,I=n.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`,ce=n.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,ge=d=>e(ae,{children:e(K,{})}),ae=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;export{ge as default};
