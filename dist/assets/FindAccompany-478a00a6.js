import{s as t,M as V,j as i,a as e,W as q,b as Q,e as a,Y as U}from"./vendor-e66f6ed6.js";import{p as J,g as K,B as A}from"./common-ddc03157.js";/* empty css                       */const X=n=>n.slice(0,20)+"...",Z=n=>n.split("오")[0],ee=n=>n===0?"모집중":n===1?"모집완료":"모집종료",te=n=>{var l,p,u,k,v,L,S,C,g,h,j,f;return V(),i(ne,{children:[i(oe,{children:[e(re,{children:e(ce,{src:"",alt:""})}),e("div",{children:e(ge,{children:X(n.post.title)})})]}),i(ue,{children:[n.post.tourCardIdList.attraction?e(m,{children:i(b,{children:[e(w,{children:e(_,{src:(p=(l=n.post.tourCardIdList)==null?void 0:l.attraction[0])==null?void 0:p.firstimage})}),e(y,{children:(k=(u=n.post.tourCardIdList)==null?void 0:u.attraction[0])==null?void 0:k.title})]})}):e(m,{children:i(b,{children:[e(w,{children:"카드 사진"}),e(y,{children:"카드 이름"})]})}),n.post.tourCardIdList.restaurant?e(m,{children:i(b,{children:[e(w,{children:e(_,{src:(L=(v=n.post.tourCardIdList)==null?void 0:v.restaurant[0])==null?void 0:L.firstimage})}),e(y,{children:(C=(S=n.post.tourCardIdList)==null?void 0:S.restaurant[0])==null?void 0:C.title})]})}):e(m,{children:i(b,{children:[e(w,{children:"카드 사진"}),e(y,{children:"카드 이름"})]})}),n.post.tourCardIdList.accommodation?e(m,{children:i(b,{children:[e(w,{children:e(_,{src:(h=(g=n.post.tourCardIdList)==null?void 0:g.accommodation[0])==null?void 0:h.firstimage})}),e(y,{children:(f=(j=n.post.tourCardIdList)==null?void 0:j.accommodation[0])==null?void 0:f.title})]})}):e(m,{children:i(b,{children:[e(w,{children:"카드 사진"}),e(y,{children:"카드 이름"})]})})]}),i(he,{children:[i(se,{children:[i(le,{children:[e(B,{src:J(n.post.homeTeamId)}),e(T,{children:"Home"})]}),e(T,{children:"VS"}),i(ae,{children:[e(B,{src:""}),e(T,{children:"Away"})]})]}),e(ie,{}),i(P,{children:[e(R,{children:e(H,{children:Z(n.post.term)})}),e(P,{children:e(R,{children:e(H,{children:n.post.meetingPlace})})})]}),i(fe,{children:[i(be,{children:[e(xe,{children:e(q,{})}),i(me,{children:[n.post.minNum,"/",n.post.maxNum]})]}),e(de,{children:e(pe,{children:ee(n.post.now_status)})})]})]})]})},ne=t.div`
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
`,ie=t.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,oe=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,re=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,ce=t.img`
  width: 40px;
  height: 40px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`,se=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,de=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,le=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ae=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,B=t.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  background-color: #9b9b9b;
`,T=t.p`
  font-size: 8px;
  color: black;
`,pe=t.div`
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
`,ue=t.div`
  display: flex;
  width: 340px;
  height: 138px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`,ge=t.p`
  font-size: 16px;
  color: white;
`,m=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`,b=t.div`
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
`,w=t.div`
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
`,_=t.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
`,y=t.p`
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
`;const he=t.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`,fe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`,xe=t.div``,me=t.p`
  font-size: 12px;
`,P=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,R=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`,be=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,H=t.p`
  font-size: 12px;
`;K("token");const we=n=>{Q(r=>r.auth);const[l,p]=a.useState(),u=V(),{search:k}=U(),v=a.useRef(null),[L,S]=a.useState(),[C,g]=a.useState(!1),[h,j]=a.useState(Number),[f,z]=a.useState([]),[I,F]=a.useState([]),W=r=>{const o=f.includes(r);z(o?f.filter(s=>s!==r):[...f,r])},$=(r,o,s)=>{const d=I.findIndex(c=>c.content===o);F(d!==-1?c=>c.filter((x,Y)=>Y!==d):c=>[...c,{id:r,content:o,sort_type:s}])};ke(v,()=>g(!1));const E=a.useCallback(async()=>{if(I.length===0){const o=await(await fetch(`${A}/api/recruitments-list/`,{method:"GET"})).json();p(o)}else{const o=await(await fetch(`${A}/api/recruitments-list/${k}`,{method:"GET"})).json();p(o)}},[k]);a.useEffect(()=>{E()},[E]);const N=()=>{const r=I.map(({id:o,sort_type:s})=>{if(s==="home_team")return`${s}_id=${o+1}`;if(s==="recruit")return`now_status=${L}`}).filter(o=>o!==void 0).map((o,s)=>s===0?o:"&"+o).join("");u(`?${r}`)};return i(ve,{children:[e(Ce,{ref:v,children:ye.map(({sort_type:r,title:o,contents:s},d)=>{if(r==="home_team")return i(D,{children:[e(G,{className:h===d?"show":"hide",onClick:()=>{j(d),g(!0)},children:o}),i(Le,{className:h===d&&C?"show":"hide",children:[s.map((c,x)=>e(Ie,{onClick:()=>$(x,c[1],r),children:e(Te,{isSelected:f.includes(c[1]),onClick:()=>W(c[1]),children:e(ze,{src:c[0],alt:"팀로고"})})},x)),e(M,{children:e(O,{onClick:()=>{N(),g(!1)},children:"필터 적용"})})]})]},d);if(r==="recruit")return i(D,{children:[e(G,{className:h===d?"show":"hide",onClick:()=>{j(d),g(!0)},children:o}),i(je,{className:h===d&&C?"show":"hide",children:[s.map((c,x)=>e(Se,{onClick:()=>{S(parseInt(c[1])),$(x,c[1],r)},children:i(_e,{children:[e("input",{type:"radio",name:"recruits"}),c[0]]})},x)),e(M,{children:e(O,{onClick:()=>{N(),g(!1)},children:"필터 적용"})})]})]},d)})}),e(Fe,{children:l==null?void 0:l.map((r,o)=>e("div",{onClick:()=>u(`/findaccompany/detail/${r.recruitmentBoardId}`),children:e(te,{post:r})},o))})]})},ye=[{sort_type:"home_team",title:"구단별",contents:[["https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg","강원FC"],["https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg","광주FC"],["https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg","대구FC"],["https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg","대전하나시티즌"],["https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg","수원삼성블루윙즈"],["https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg","FC서울"],["https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg","포항스틸러스"],["https://kickstorage.blob.core.windows.net/logo/jeju_united.svg","제주유나이티드"],["https://kickstorage.blob.core.windows.net/logo/incheon_united.svg","인천유나이티드"],["https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg","울산현대"],["https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg","수원FC"],["https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg","전북현대모터스"]]},{sort_type:"recruit",title:"모집 여부",contents:[["모집중","0"],["모집종료","1"],["모집완료","2"]]}],ke=(n,l)=>{a.useEffect(()=>{const p=u=>{!n.current||n.current.contains(u.target)||l(u)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[n,l])},ve=t.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Ce=t.ul`
  display: flex;
`,D=t.li`
  position: relative;
`,G=t.div`
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
`,je=t.div`
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
`,Se=t.div`
  margin: 10px 0;
  cursor: pointer;
`,Ie=t.div`
  width: 100px;
  /* margin: 5px 0; */
  /* padding: 5px 5px; */
  cursor: pointer;
`,Te=t.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  /* border-bottom: 1px solid #dbdbdb; */
  padding: 10px 5px;
  border-radius: 12px;
  background-color: ${n=>n.isSelected?"#ffcd40":"white"};
`,_e=t.label`
  display: flex;
  gap: 10px;
`,ze=t.img`
  height: 40px;
  pointer-events: none;
`,M=t.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`,O=t.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`,Fe=t.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,Be=n=>e($e,{children:e(we,{})}),$e=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;export{Be as default};
