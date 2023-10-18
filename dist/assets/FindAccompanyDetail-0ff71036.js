import{m as A,k as B,e as g,a3 as F,j as i,a as e,s as o}from"./vendor-032019a3.js";import{P as l}from"./shared/CreateRoom/FindAccompanyDetail-5018aac4.js";import{g as L,ay as _,az as E,aA as f,b as P,B as b}from"./common-77df1045.js";import{Q as a}from"./react-toastify-31657824.js";const S=L("token"),N={Authorization:`Bearer ${S}`},D=()=>{var m;const C=A(),h=B(t=>t.auth.id),[n,j]=g.useState(),{recruitment_board_id:x}=F();g.useEffect(()=>{async function t(){try{const z=await(await fetch(`${b}/api/recruitment/?recruitment_board_id=${x}`,{method:"get"})).json();j(z)}catch(d){console.error("Error:",d)}}t()},[]);const I=n==null?void 0:n.tagList,T=async()=>{try{(n==null?void 0:n.hostId)!==h&&await(await fetch(`${b}/api/recruitment/?recruitment_board_id=${x}`,{method:"PATCH",headers:N})).json()&&(a.success("🤝 동행 신청 완료!"),C("/"))}catch{a.error("동행 신청 실패!")}};return i($,{children:[e(M,{children:e(R,{src:n==null?void 0:n.thumbnail,alt:"선택한 배경 사진이 없습니다.(No Image)"})}),e(G,{children:n==null?void 0:n.title}),i(s,{children:[e(c,{children:"🔥 매치 정보"}),e(H,{children:i(v,{children:[i(w,{children:[e(p,{children:e(u,{children:_(n==null?void 0:n.createdDate)})}),e(p,{children:e(u,{children:E(n==null?void 0:n.TeamId)})})]}),e(k,{children:i(r,{children:[" ",f(n==null?void 0:n.TeamId)," vs"," ",f(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),i(s,{children:[e(c,{children:"🔥 동행 정보"}),e(J,{children:i(v,{children:[e(w,{children:i(p,{children:[e(r,{children:"희망 인원 "}),i(r,{children:[" ",n==null?void 0:n.minNum," ~ ",n==null?void 0:n.maxNum," 명"]})]})}),i(k,{children:[i(r,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),i(r,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),i(s,{children:[e(c,{children:"🔥 태그 정보"}),e(Q,{children:(m=P(I))==null?void 0:m.map((t,d)=>e(U,{children:t},d))})]}),i(s,{children:[e(c,{children:"🔥 카드 정보"}),e(q,{children:e(O,{children:i(K,{children:[e(l,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(l,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(l,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})})]}),e(W,{children:n==null?void 0:n.content}),h?e(y,{onClick:()=>T(),children:"신청"}):e("div",{children:e(y,{onClick:()=>a.warning("로그인을 해주세요!"),children:"신청"})})]})},y=o.div`
  background-color: #1f1f45;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`,$=o.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,s=o.div`
  justify-content: left;
  align-items: left;
`,M=o.div`
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
  margin-bottom: 20px;
`,R=o.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,G=o.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  word-break: break-all;
  width: 300px;
  height: auto;
  font-size: 24px;
`,H=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,u=o.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,p=o.div`
  align-items: center;
  gap: 10px;
`,c=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,r=o.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,v=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,w=o.div`
  justify-content: left;
  align-items: center;
`,k=o.div`
  gap: 15px;
`,J=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,Q=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`,U=o.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,W=o.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`,q=o.div`
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
`,K=o.div`
  display: flex;
`,O=o.div`
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
`;export{D as default};
