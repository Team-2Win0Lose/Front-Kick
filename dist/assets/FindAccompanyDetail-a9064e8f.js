import{m as Z,k as D,e as l,a3 as nn,j as d,a as e,Q as m,s as o}from"./vendor-a1ee613c.js";import{P as h}from"./shared/CreateRoom/FindAccompanyDetail-87a6966d.js";import{g as en,ay as T,az as L,aA as f,b as _,B as k}from"./common-1230f2e9.js";import{a as dn}from"./react-icons-74110d71.js";const on=en("token"),z={Authorization:`Bearer ${on}`},yn=()=>{var C,j;const R=Z(),w=D(i=>i.auth.id),[n,q]=l.useState(),{recruitment_board_id:u}=nn();l.useEffect(()=>{async function i(){try{const x=await(await fetch(`${k}/api/recruitment/?recruitment_board_id=${u}`,{method:"get"})).json();q(x)}catch(s){console.error("Error:",s)}}i()},[]);const I=n==null?void 0:n.tagList,H=async()=>{try{(n==null?void 0:n.hostId)!==w?await(await fetch(`${k}/api/recruitment/?recruitment_board_id=${u}`,{method:"PATCH",headers:z})).json()&&(m.success("🤝 동행 신청 완료!"),R("/")):m.warning("본인의 동행에는 신청할 수 없습니다.")}catch{m.error("동행 신청 실패!")}},[v,J]=l.useState(0),[Q,W]=l.useState(0),[G,K]=l.useState(""),[V,X]=l.useState(0),Y=(i,s,x)=>{W(i),K(s),X(x),J(v+1)};return l.useEffect(()=>{const i=async()=>{try{const x=await(await fetch(`${k}/api/my-recruitment/?recruitment_board_id=${Q}&applying_user_id=${G}&is_accept=${V}`,{method:"patch",headers:z})).json();console.log(x)}catch(s){console.log(s)}};v>0&&i()},[v]),w!==(n==null?void 0:n.hostId)?d(P,{children:[e(B,{children:n==null?void 0:n.title}),d(r,{children:[e(t,{children:"🔥 매치 정보"}),e(S,{children:d(b,{children:[d(a,{children:[e(p,{children:e(g,{children:T(n==null?void 0:n.createdDate)})}),e(p,{children:e(g,{children:L(n==null?void 0:n.TeamId)})})]}),e(y,{children:d(c,{children:[" ",f(n==null?void 0:n.TeamId)," vs"," ",f(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(r,{children:[e(t,{children:"🔥 동행 정보"}),e(F,{children:d(b,{children:[e(a,{children:d(p,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(y,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(r,{children:[e(t,{children:"🔥 태그 정보"}),e(N,{children:(C=_(I))==null?void 0:C.map((i,s)=>e($,{children:i},s))})]}),d(r,{children:[e(t,{children:"🔥 카드 정보"}),e(U,{children:e(O,{children:d(M,{children:[e(h,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(h,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(h,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(E,{children:n==null?void 0:n.content})]}),w?e(A,{onClick:()=>H(),children:"신청"}):e("div",{children:e(A,{onClick:()=>m.warning("로그인을 해주세요!"),children:"신청"})})]}):d(P,{children:[e(B,{children:n==null?void 0:n.title}),d(sn,{children:[d("h1",{children:["동행 신청 인원"," ",Object.values(n==null?void 0:n.appliedUserIdList).length,"/",n==null?void 0:n.maxNum," 예약 인원"," ",Object.keys(n==null?void 0:n.applyingUserIdList)]}),e(cn,{className:"meeting-requests-list",children:Object.values(n==null?void 0:n.appliedUserIdList).map((i,s)=>d(rn,{children:[d(tn,{children:[e(ln,{children:e(dn,{size:"29"})}),e(hn,{children:i.user_id})]}),d(mn,{children:[e(pn,{onClick:()=>Y(n==null?void 0:n.recruitmentBoardId,i.user_id,0),children:"수락"}),e(xn,{children:"거절"})]})]},s))})]}),d(r,{children:[e(t,{children:"🔥 매치 정보"}),e(S,{children:d(b,{children:[d(a,{children:[e(p,{children:e(g,{children:T(n==null?void 0:n.createdDate)})}),e(p,{children:e(g,{children:L(n==null?void 0:n.TeamId)})})]}),e(y,{children:d(c,{children:[" ",f(n==null?void 0:n.TeamId)," vs"," ",f(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(r,{children:[e(t,{children:"🔥 동행 정보"}),e(F,{children:d(b,{children:[e(a,{children:d(p,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(y,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(r,{children:[e(t,{children:"🔥 태그 정보"}),e(N,{children:(j=_(I))==null?void 0:j.map((i,s)=>e($,{children:i},s))})]}),d(r,{children:[e(t,{children:"🔥 카드 정보"}),e(U,{children:e(O,{children:d(M,{children:[e(h,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(h,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(h,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(E,{children:n==null?void 0:n.content})]})]})},A=o.div`
  background-color: #1f1f45;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`,P=o.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,r=o.div`
  justify-content: left;
  align-items: left;
  width: 50%;
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
  margin-bottom: 20px;
`;o.img`
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
`;const B=o.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  word-break: break-all;
  width: 50%;
  height: auto;
  font-size: 24px;
`,S=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,g=o.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,p=o.div`
  align-items: center;
  gap: 10px;
`,t=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,c=o.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,b=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,a=o.div`
  justify-content: left;
  align-items: center;
`,y=o.div`
  gap: 15px;
`,F=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,N=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
`,$=o.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,E=o.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`,U=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 200px;
`,M=o.div`
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
`,sn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 50%;
`,cn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`,rn=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,tn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,ln=o.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`,hn=o.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 120px;
  max-height: 34px;
  padding: 8px 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 14px;
`,pn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`,xn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`,mn=o.div`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;export{yn as default};
