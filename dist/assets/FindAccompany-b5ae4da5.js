import{s as n,f as I,b as A,e as r,a as e,Y as O,j as h}from"./vendor-e594e6cf.js";/* empty css                         */import{g as N,B as v}from"./common-1cfa3065.js";import{A as R}from"./main-acd4ddec.js";/* empty css                       */N("token");const Y=d=>{const l=I();A(a=>a.auth.id);const[p,u]=r.useState([]);return r.useEffect(()=>{async function a(){try{const k=await(await fetch(`${v}/api/recruitments-list/`,{method:"get"})).json();u(k)}catch(b){console.error("Error:",b)}}a()},[]),e(q,{children:p.map(a=>e("div",{onClick:()=>l(`/findaccompany/detail/${a.recruitmentBoardId}`),children:e(R,{post:a})},a.recruitmentBoardId))})},q=n.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`;N("token");const M=d=>{A(o=>o.auth);const[l,p]=r.useState(),u=I(),{search:a}=O(),b=r.useRef(null),[k,z]=r.useState(),[C,f]=r.useState(!1),[w,y]=r.useState(Number),[x,S]=r.useState([]),[g,_]=r.useState([]),D=o=>{const t=x.includes(o);S(t?x.filter(i=>i!==o):[...x,o])},j=(o,t,i)=>{const c=g.findIndex(s=>s.content===t);_(c!==-1?s=>s.filter((m,G)=>G!==c):s=>[...s,{id:o,content:t,sort_type:i}])};U(b,()=>f(!1));const L=r.useCallback(async()=>{if(g.length===0){const t=await(await fetch(`${v}/api/recruitments-list/`,{method:"GET"})).json();p(t)}else{const t=await(await fetch(`${v}/api/recruitments-list/${a}`,{method:"GET"})).json();p(t)}},[a]);r.useEffect(()=>{L()},[L]);const T=()=>{const o=g.map(({id:t,sort_type:i})=>{if(i==="home_team")return`${i}_id=${t+1}`;if(i==="recruit")return`now_status=${k}`}).filter(t=>t!==void 0).map((t,i)=>i===0?t:"&"+t).join("");u(`?${o}`)};return h(W,{children:[e(H,{ref:b,children:Q.map(({sort_type:o,title:t,contents:i},c)=>{if(o==="home_team")return h(E,{children:[e($,{className:w===c?"show":"hide",onClick:()=>{y(c),f(!0)},children:t}),h(K,{className:w===c&&C?"show":"hide",children:[i.map((s,m)=>e(V,{onClick:()=>j(m,s[1],o),children:e(X,{isSelected:x.includes(s[1]),onClick:()=>D(s[1]),children:e(ee,{src:s[0],alt:"팀로고"})})},m)),e(F,{children:e(B,{onClick:()=>{T(),f(!1)},children:"필터 적용"})})]})]},c);if(o==="recruit")return h(E,{children:[e($,{className:w===c?"show":"hide",onClick:()=>{y(c),f(!0)},children:t}),h(J,{className:w===c&&C?"show":"hide",children:[i.map((s,m)=>e(P,{onClick:()=>{z(parseInt(s[1])),j(m,s[1],o)},children:h(Z,{children:[e("input",{type:"radio",name:"recruits"}),s[0]]})},m)),e(F,{children:e(B,{onClick:()=>{T(),f(!1)},children:"필터 적용"})})]})]},c)})}),e(te,{children:(g==null?void 0:g.length)!==0?l==null?void 0:l.map((o,t)=>e("div",{onClick:()=>u(`/findaccompany/detail/${o.recruitmentBoardId}`),children:e(R,{post:o})},t)):e(Y,{})})]})},Q=[{sort_type:"home_team",title:"구단별",contents:[["https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg","강원FC"],["https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg","광주FC"],["https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg","대구FC"],["https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg","대전하나시티즌"],["https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg","수원삼성블루윙즈"],["https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg","FC서울"],["https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg","포항스틸러스"],["https://kickstorage.blob.core.windows.net/logo/jeju_united.svg","제주유나이티드"],["https://kickstorage.blob.core.windows.net/logo/incheon_united.svg","인천유나이티드"],["https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg","울산현대"],["https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg","수원FC"],["https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg","전북현대모터스"]]},{sort_type:"recruit",title:"모집 여부",contents:[["모집중","0"],["모집종료","1"],["모집완료","2"]]}],U=(d,l)=>{r.useEffect(()=>{const p=u=>{!d.current||d.current.contains(u.target)||l(u)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[d,l])},W=n.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,H=n.ul`
  display: flex;
`,E=n.li`
  position: relative;
`,$=n.div`
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
`,J=n.div`
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
`,K=n.div`
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
`,P=n.div`
  margin: 10px 0;
  cursor: pointer;
`,V=n.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`,X=n.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${d=>d.isSelected?"#ffcd40":"white"};
`,Z=n.label`
  display: flex;
  gap: 10px;
`,ee=n.img`
  height: 40px;
  pointer-events: none;
`,F=n.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`,B=n.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`,te=n.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,ae=d=>e(oe,{children:e(M,{})}),oe=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;export{ae as default};
