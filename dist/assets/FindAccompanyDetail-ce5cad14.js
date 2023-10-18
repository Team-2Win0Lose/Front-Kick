import{M as T,k as z,e as h,a3 as B,j as t,a as e,s as o}from"./vendor-0071affc.js";import{P as l}from"./shared/CreateRoom/FindAccompanyDetail-278acc5a.js";import{g as F,ax as L,ay as m,B as g}from"./common-a87b2a0c.js";import{a as _,c as A}from"./shared/FindAccompanyDetail/main-6c852666.js";const P=F("token"),S={Authorization:`Bearer ${P}`},Z=()=>{var x;const y=T(),w=z(i=>i.auth.id),[n,k]=h.useState(),{recruitment_board_id:a}=B();h.useEffect(()=>{async function i(){try{const I=await(await fetch(`${g}/api/recruitment/?recruitment_board_id=${a}`,{method:"get"})).json();k(I)}catch(d){console.error("Error:",d)}}i()},[]);const C=n==null?void 0:n.tagList,j=async()=>{if((n==null?void 0:n.hostId)!==w){const d=await(await fetch(`${g}/api/recruitment/?recruitment_board_id=${a}`,{method:"PATCH",headers:S})).json();alert(d.message),y("/")}};return t(N,{children:[e($,{children:e(M,{src:n==null?void 0:n.thumbnail,alt:"선택한 배경 사진이 없습니다.(No Image)"})}),e(R,{children:n==null?void 0:n.title}),t(r,{children:[e(c,{children:"🔥 매치 정보"}),e(G,{children:t(b,{children:[t(u,{children:[e(p,{children:e(f,{children:_(n==null?void 0:n.createdDate)})}),e(p,{children:e(f,{children:L(n==null?void 0:n.TeamId)})})]}),e(v,{children:t(s,{children:[" ",m(n==null?void 0:n.TeamId)," vs"," ",m(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),t(r,{children:[e(c,{children:"🔥 동행 정보"}),e(H,{children:t(b,{children:[e(u,{children:t(p,{children:[e(s,{children:"희망 인원 "}),t(s,{children:[" ",n==null?void 0:n.minNum," ~ ",n==null?void 0:n.maxNum," 명"]})]})}),t(v,{children:[t(s,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),t(s,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),t(r,{children:[e(c,{children:"🔥 태그 정보"}),e(J,{children:(x=A(C))==null?void 0:x.map((i,d)=>e(U,{children:i},d))})]}),t(r,{children:[e(c,{children:"🔥 카드 정보"}),e(q,{children:e(O,{children:t(K,{children:[e(l,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(l,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(l,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})})]}),e(W,{children:n==null?void 0:n.content}),e(E,{onClick:()=>j(),children:"신청"})]})},E=o.div`
  background-color: #1f1f45;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`,N=o.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,r=o.div`
  justify-content: left;
  align-items: left;
`,$=o.div`
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
`,M=o.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,R=o.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  word-break: break-all;
  width: 300px;
  height: auto;
  font-size: 24px;
`,G=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,f=o.div`
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
`,s=o.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,b=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,u=o.div`
  justify-content: left;
  align-items: center;
`,v=o.div`
  gap: 15px;
`,H=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,J=o.div`
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
`;export{Z as default};
