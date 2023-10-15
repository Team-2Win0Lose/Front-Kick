import{s as t,M as F,l as M,d,a as e,j as n,W as J,X as K,Y as U}from"./vendor-35a6e146.js";import{q}from"./common-3ec6ebaa.js";/* empty css                       */const Z=q("token"),ee={Authorization:`Bearer ${Z}`},te=r=>{F();const p=M(g=>g.auth.id),[u,a]=d.useState([]);return d.useEffect(()=>{async function g(){try{const w=await(await fetch(`/api/recruitments/?id=${p}`,{method:"get",headers:ee})).json();a(w)}catch(b){console.error("Error:",b)}}g()},[]),console.log(u),e(ne,{})},ne=t.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,oe=r=>r.split("~")[0],ie=r=>(F(),n(re,{children:[n(se,{children:[e(de,{children:e(ae,{src:"",alt:""})}),e("div",{})]}),n(xe,{children:[e(j,{children:n(S,{children:[e(_,{children:"카드 사진"}),e(z,{children:"카드 이름"})]})}),e(j,{children:n(S,{children:[e(_,{children:"카드 사진"}),e(z,{children:"카드 이름"})]})}),e(j,{children:n(S,{children:[e(_,{children:"카드 사진"}),e(z,{children:"카드 이름"})]})})]}),n(fe,{children:[n(le,{children:[n(ue,{children:[e(I,{src:""}),e(C,{children:"Home"})]}),e(C,{children:"VS"}),n(ge,{children:[e(I,{src:""}),e(C,{children:"Away"})]})]}),e(ce,{}),n(P,{children:[e(D,{children:e(R,{children:oe(r.boxdata.term)})}),e(P,{children:e(D,{children:e(R,{children:r.boxdata.meetingPlace})})})]}),n(be,{children:[n(ye,{children:[e(me,{children:e(J,{})}),n(we,{children:[r.boxdata.minNum,"/",r.boxdata.maxNum]})]}),e(pe,{children:e(he,{children:r.boxdata.nowStatus})})]})]})]})),re=t.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 15px 10px;
  margin-top: 20px;
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1f1f45;
  color: white;
  font-weight: bold;
`,ce=t.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,se=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,de=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,ae=t.img`
  width: 40px;
  height: 40px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`,le=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,pe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,ue=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ge=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,I=t.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  background-color: #9b9b9b;
`,C=t.p`
  font-size: 8px;
  color: black;
`,he=t.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffa500;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 8px;
  font-weight: 350;
`,xe=t.div`
  display: flex;
  width: 100%;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`;t.p`
  font-size: 16px;
  color: white;
`;const j=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`,S=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  width: 108px;
  height: 122px;
`,_=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
  font-size: 6px;
  background-color: #9b9b9b;
`,z=t.p`
  font-size: 10px;
  color: black;
`;t.div`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;t.p`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`;const fe=t.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`,be=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`,me=t.div``,we=t.p`
  font-size: 12px;
`,P=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,D=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`,ye=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,R=t.p`
  font-size: 12px;
`,ke=q("token"),G={Authorization:`Bearer ${ke}`},ve=r=>{const{id:p,isAuthenticated:u}=M(o=>o.auth);d.useState([null,null]);const[a,g]=d.useState(),b=F(),{search:w}=U(),E=d.useRef(null),[O,V]=d.useState(),[y,h]=d.useState(!1),[x,k]=d.useState(Number),[m,N]=d.useState([]),[v,B]=d.useState([]),W=o=>{const i=m.includes(o);N(i?m.filter(l=>l!==o):[...m,o])},X=(o,i,l)=>{const c=v.findIndex(s=>s.content===i);B(c!==-1?s=>s.filter((f,Q)=>Q!==c):s=>[...s,{id:o,content:i,sort_type:l}])};je(E,()=>h(!1));const Y=d.useCallback(async()=>{if(u)if(v.length===0){const i=await(await fetch(`https://kick-back.azurewebsites.net/api/recruitments_list/?id=${p}`,{method:"GET",headers:G})).json();g(i)}else{const i=await(await fetch(`https://kick-back.azurewebsites.net/api/recruitments_list/?id=${p}${w}`,{method:"GET",headers:G})).json();g(i)}},[]);d.useEffect(()=>{Y()},[]);const H=()=>{const o=v.map(({id:i,sort_type:l})=>{if(l==="home_team")return`${l}_id=${i+1}`;if(l==="recruit")return`now_status=${O}`}).map(i=>"&"+i).join("");b(`?${o}`)};return n(Se,{children:[e(_e,{ref:E,children:Ce.map(({sort_type:o,title:i,contents:l},c)=>{if(o==="home_team")return n(L,{children:[e(T,{className:x===c?"show":"hide",onClick:()=>{k(c),h(!0)},children:i}),n(Te,{className:x===c&&y?"show":"hide",children:[l.map((s,f)=>e(Ae,{onClick:()=>X(f,s[1],o),children:e(Fe,{isSelected:m.includes(s[1]),onClick:()=>W(s[1]),children:e(Ne,{src:s[0],alt:"팀로고"})})},f)),e($,{children:e(A,{onClick:()=>{H(),h(!1)},children:"필터 적용"})})]})]},c);if(o==="recruit")return n(L,{children:[e(T,{className:x===c?"show":"hide",onClick:()=>{k(c),h(!0)},children:i}),n(ze,{className:x===c&&y?"show":"hide",children:[l.map((s,f)=>e($e,{onClick:()=>V(s[1]==="모집중"),children:n(Ee,{children:[e("input",{type:"checkbox"}),s]})},f)),e($,{children:e(A,{onClick:()=>{H(),h(!1)},children:"필터 적용"})})]})]},c);if(o==="date")return n(L,{children:[e(T,{className:x===c?"show":"hide",onClick:()=>{k(c),h(!0)},children:i}),e(Le,{className:x===c&&y?"show":"hide",children:e($,{children:e(A,{children:"필터 적용"})})})]},c)})}),e(Be,{children:(a==null?void 0:a.length)!==0&&a!==void 0?a==null?void 0:a.map((o,i)=>e("div",{children:e(ie,{boxdata:o})},i)):e("div",{})})]})},Ce=[{sort_type:"home_team",title:"구단별",contents:[["https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png","강원FC"],["https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png","광주FC"],["https://kickstorage.blob.core.windows.net/logo/daegu_fc.png","대구FC"],["https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png","대전하나시티즌"],["https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png","수원삼성블루윙즈"],["https://kickstorage.blob.core.windows.net/logo/suwon_fc.png","수원FC"],["https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png","울산현대"],["https://kickstorage.blob.core.windows.net/logo/incheon_united.png","인천유나이티드"],["https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png","전북현대모터스"],["https://kickstorage.blob.core.windows.net/logo/jeju_united.png","제주유나이티드"],["https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png","포항스틸러스"],["https://kickstorage.blob.core.windows.net/logo/fc_seoul.png","FC서울"]]},{sort_type:"recruit",title:"모집 여부",contents:[["모집중"],["모집마감"]]},{sort_type:"date",title:"날짜 선택",contents:[]}],je=(r,p)=>{d.useEffect(()=>{const u=a=>{!r.current||r.current.contains(a.target)||p(a)};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[r,p])},Se=t.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,_e=t.ul`
  display: flex;
`,L=t.li`
  position: relative;
`,T=t.div`
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
`,ze=t.div`
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
`,Le=t.div`
  position: absolute;
  display: none;
  padding: 20px;
  top: 45px;
  left: 5px;
  width: 340px;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  background-color: white;
  z-index: 200;

  &.show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,Te=t.div`
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
`,$e=t.div`
  margin: 10px 0;
  cursor: pointer;
`,Ae=t.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`,Fe=t.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${r=>r.isSelected?"#ffcd40":"white"};
`,Ee=t.label`
  display: flex;
  gap: 10px;
`,Ne=t.img`
  height: 40px;
  pointer-events: none;
`,$=t.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`,A=t.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;t(K)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 10px 30px;
  width: 250px;
  /* height: 46px; */
  text-align: center;
`;const Be=t.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,He=r=>e(Ie,{children:e(ve,{})}),Ie=t.div`
  margin: 0 auto;
  display: flex;
  width: auto;
  justify-content: center;
  align-content: center;
  /* gap: 20px;
  margin-bottom: 10px; */
`,Me=r=>n(Pe,{children:[e(He,{}),e(te,{})]}),Pe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;export{Me as default};
