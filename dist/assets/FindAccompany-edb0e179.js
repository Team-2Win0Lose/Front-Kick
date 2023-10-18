import{s as t,M as Y,j as i,a as e,W as Q,k as U,e as l,Y as J}from"./vendor-0071affc.js";import{w as F,g as K,B as P}from"./common-a87b2a0c.js";import{c as X}from"./shared/FindAccompanyDetail/main-6c852666.js";const Z=n=>n.length>20?n.slice(0,20)+"...":n,ee=n=>n.split("오")[0],te=n=>n===0?"모집중":n===1?"모집완료":"모집종료",ne=n=>{var p,u,v,C,L,S,j,g,h,T,f,I,x;const a=Y();return i(ie,{onClick:()=>a(`/findaccompany/detail/${n.post.recruitmentBoardId}`),children:[i(re,{children:[e(ce,{children:e(se,{src:F(n.post.TeamId),alt:n.post.title})}),i("div",{children:[e(he,{children:Z(n.post.title)}),e(fe,{children:(p=X(n.post.tagList))==null?void 0:p.map((_,z)=>i(xe,{children:["#",_]},z))})]})]}),i(ge,{children:[n.post.tourCardIdList.attraction?e(b,{children:i(w,{children:[e(y,{children:e($,{src:(v=(u=n.post.tourCardIdList)==null?void 0:u.attraction[0])==null?void 0:v.firstimage})}),e(k,{children:(L=(C=n.post.tourCardIdList)==null?void 0:C.attraction[0])==null?void 0:L.title})]})}):e(b,{children:i(w,{children:[e(y,{children:"카드 사진"}),e(k,{children:"카드 이름"})]})}),n.post.tourCardIdList.restaurant?e(b,{children:i(w,{children:[e(y,{children:e($,{src:(j=(S=n.post.tourCardIdList)==null?void 0:S.restaurant[0])==null?void 0:j.firstimage})}),e(k,{children:(h=(g=n.post.tourCardIdList)==null?void 0:g.restaurant[0])==null?void 0:h.title})]})}):e(b,{children:i(w,{children:[e(y,{children:"카드 사진"}),e(k,{children:"카드 이름"})]})}),n.post.tourCardIdList.accommodation?e(b,{children:i(w,{children:[e(y,{children:e($,{src:(f=(T=n.post.tourCardIdList)==null?void 0:T.accommodation[0])==null?void 0:f.firstimage})}),e(k,{children:(x=(I=n.post.tourCardIdList)==null?void 0:I.accommodation[0])==null?void 0:x.title})]})}):e(b,{children:i(w,{children:[e(y,{children:"카드 사진"}),e(k,{children:"카드 이름"})]})})]}),i(me,{children:[i(de,{children:[i(ae,{children:[e(H,{src:F(n.post.TeamId)}),e(B,{children:"Home"})]}),e(B,{children:"VS"}),i(pe,{children:[e(H,{src:F(n.post.opponentTeamId)}),e(B,{children:"Away"})]})]}),e(oe,{}),i(R,{children:[e(D,{children:e(G,{children:ee(n.post.term)})}),e(R,{children:e(D,{children:e(G,{children:n.post.meetingPlace})})})]}),i(be,{children:[i(ke,{children:[e(we,{children:e(Q,{})}),i(ye,{children:[n.post.nowHeadCount,"/",n.post.maxNum]})]}),e(le,{children:e(ue,{children:te(n.post.now_status)})})]})]})]})},ie=t.div`
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
`,oe=t.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,re=t.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,ce=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,se=t.img`
  width: 50px;
  height: 50px;
  object-fit: fill;
  border: none;
  border-radius: 100%;
`,de=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,le=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,ae=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,pe=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,H=t.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  /* background-color: #9b9b9b; */
`,B=t.p`
  font-size: 8px;
  color: black;
`,ue=t.div`
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
`,ge=t.div`
  display: flex;
  width: 340px;
  height: 138px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`,he=t.p`
  font-size: 16px;
  color: white;
`,b=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`,w=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  width: 108px;
  height: 122px;
`,y=t.div`
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
`,$=t.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
`,k=t.div`
  width: 80%;
  font-size: 10px;
  color: black;
  word-break: break-all;
  text-align: center;
`,fe=t.ul`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`,xe=t.li`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`,me=t.div`
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
`,we=t.div``,ye=t.p`
  font-size: 12px;
`,R=t.div`
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
`,ke=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,G=t.p`
  font-size: 12px;
`;K("token");const ve=n=>{U(o=>o.auth);const[a,p]=l.useState(),u=Y(),{search:v}=J(),C=l.useRef(null),[L,S]=l.useState(),[j,g]=l.useState(!1),[h,T]=l.useState(Number),[f,I]=l.useState([]),[x,_]=l.useState([]),z=o=>{const r=f.includes(o);I(r?f.filter(s=>s!==o):[...f,o])},A=(o,r,s)=>{const d=x.findIndex(c=>c.content===r);_(d!==-1?c=>c.filter((m,q)=>q!==d):c=>[...c,{id:o,content:r,sort_type:s}])};je(C,()=>g(!1));const E=l.useCallback(async()=>{if(x.length===0){const r=await(await fetch(`${P}/api/recruitments-list/`,{method:"GET"})).json();p(r)}else{const r=await(await fetch(`${P}/api/recruitments-list/${v}`,{method:"GET"})).json();p(r)}},[v]);l.useEffect(()=>{E()},[E]);const N=()=>{const o=x.map(({id:r,sort_type:s})=>{if(s==="home_team")return`team_id=${r+1}`;if(s==="recruit")return`now_status=${L}`}).filter(r=>r!==void 0).map((r,s)=>s===0?r:"&"+r).join("");u(`?${o}`)};return i(Te,{children:[e(Ie,{ref:C,children:Ce.map(({sort_type:o,title:r,contents:s},d)=>{if(o==="home_team")return i(M,{children:[e(O,{className:h===d?"show":"hide",onClick:()=>{T(d),g(!0)},children:r}),i(Se,{className:h===d&&j?"show":"hide",children:[s.map((c,m)=>e(ze,{onClick:()=>A(m,c[1],o),children:e(Fe,{isSelected:f.includes(c[1]),onClick:()=>z(c[1]),children:e($e,{src:c[0],alt:"팀로고"})})},m)),e(V,{children:e(W,{onClick:()=>{N(),g(!1)},children:"필터 적용"})})]})]},d);if(o==="recruit")return i(M,{children:[e(O,{className:h===d?"show":"hide",onClick:()=>{T(d),g(!0)},children:r}),i(Le,{className:h===d&&j?"show":"hide",children:[s.map((c,m)=>e(_e,{onClick:()=>{S(parseInt(c[1])),A(m,c[1],o)},children:i(Be,{children:[e("input",{type:"radio",name:"recruits"}),c[0]]})},m)),e(V,{children:e(W,{onClick:()=>{N(),g(!1)},children:"필터 적용"})})]})]},d)})}),e(Ae,{children:a==null?void 0:a.map((o,r)=>e("div",{onClick:()=>u(`/findaccompany/detail/${o.recruitmentBoardId}`),children:e(ne,{post:o})},o.recruitmentBoardId))})]})},Ce=[{sort_type:"home_team",title:"구단별",contents:[["https://kickstorage.blob.core.windows.net/logo/gangwon_fc.svg","강원FC"],["https://kickstorage.blob.core.windows.net/logo/gwangju_fc.svg","광주FC"],["https://kickstorage.blob.core.windows.net/logo/daegu_fc.svg","대구FC"],["https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.svg","대전하나시티즌"],["https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.svg","수원삼성블루윙즈"],["https://kickstorage.blob.core.windows.net/logo/fc_seoul.svg","FC서울"],["https://kickstorage.blob.core.windows.net/logo/pohang_stealus.svg","포항스틸러스"],["https://kickstorage.blob.core.windows.net/logo/jeju_united.svg","제주유나이티드"],["https://kickstorage.blob.core.windows.net/logo/incheon_united.svg","인천유나이티드"],["https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.svg","울산현대"],["https://kickstorage.blob.core.windows.net/logo/suwon_fc.svg","수원FC"],["https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.svg","전북현대모터스"]]},{sort_type:"recruit",title:"모집 여부",contents:[["모집중","0"],["모집종료","1"],["모집완료","2"]]}],je=(n,a)=>{l.useEffect(()=>{const p=u=>{!n.current||n.current.contains(u.target)||a(u)};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[n,a])},Te=t.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,Ie=t.ul`
  display: flex;
`,M=t.li`
  position: relative;
`,O=t.div`
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
`,Le=t.div`
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
`,Se=t.div`
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
`,_e=t.div`
  margin: 10px 0;
  cursor: pointer;
`,ze=t.div`
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
  background-color: ${n=>n.isSelected?"#ffcd40":"white"};
`,Be=t.label`
  display: flex;
  gap: 10px;
`,$e=t.img`
  height: 40px;
  pointer-events: none;
`,V=t.div`
  grid-column: span 4;
  margin-top: 10px;
  padding-top: 20px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
`,W=t.button`
  background-color: #1f1f45;
  margin: 2px;
  padding: 5px 10px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`,Ae=t.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,Re=n=>e(Ee,{children:e(ve,{})}),Ee=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;export{Re as default};
