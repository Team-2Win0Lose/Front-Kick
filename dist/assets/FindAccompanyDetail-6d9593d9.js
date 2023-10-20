import{m as D,e as l,k as nn,a6 as en,j as d,a as e,Q as m,a4 as dn,s as o}from"./vendor-490cfcbe.js";import{P as h}from"./shared/CreateRoom/FindAccompanyDetail-362bb431.js";import{g as on,ay as T,az as L,aA as g,b as _,B as v}from"./common-311e16a2.js";const sn=on("token"),z={Authorization:`Bearer ${sn}`},yn=()=>{var u,j;const R=D(),[H,J]=l.useState(0),[Q,W]=l.useState(0),[G,K]=l.useState(""),[V,X]=l.useState(),w=nn(i=>i.auth.id),[n,Y]=l.useState(),{recruitment_board_id:k}=en();l.useEffect(()=>{async function i(){try{const x=await(await fetch(`${v}/api/recruitment/?recruitment_board_id=${k}`,{method:"get"})).json();Y(x)}catch(s){console.error("Error:",s)}}i()},[H]);const I=n==null?void 0:n.tagList,Z=async()=>{try{(n==null?void 0:n.hostId)!==w?await(await fetch(`${v}/api/recruitment/?recruitment_board_id=${k}`,{method:"PATCH",headers:z})).json()&&(m.success("🤝 동행 신청 완료!"),R("/")):m.warning("본인의 동행에는 신청할 수 없습니다.")}catch{m.error("동행 신청 실패!")}},C=(i,s,x)=>{W(i),K(s),X(x),J(x+1),setTimeout(()=>{q()},100)},q=async()=>{try{const s=await(await fetch(`${v}/api/my-recruitment/?recruitment_board_id=${Q}&applying_user_id=${G}&is_accept=${V}`,{method:"PATCH",headers:z})).json();console.log(s)}catch(i){console.log(i)}};return w!==(n==null?void 0:n.hostId)?d(P,{children:[e(B,{children:n==null?void 0:n.title}),d(r,{children:[e(t,{children:"🔥 매치 정보"}),e(S,{children:d(b,{children:[d(a,{children:[e(p,{children:e(f,{children:T(n==null?void 0:n.createdDate)})}),e(p,{children:e(f,{children:L(n==null?void 0:n.TeamId)})})]}),e(y,{children:d(c,{children:[" ",g(n==null?void 0:n.TeamId)," vs"," ",g(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(r,{children:[e(t,{children:"🔥 동행 정보"}),e(F,{children:d(b,{children:[e(a,{children:d(p,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(y,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(r,{children:[e(t,{children:"🔥 태그 정보"}),e($,{children:(u=_(I))==null?void 0:u.map((i,s)=>e(N,{children:i},s))})]}),d(r,{children:[e(t,{children:"🔥 카드 정보"}),e(U,{children:e(O,{children:d(M,{children:[e(h,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(h,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(h,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(E,{children:n==null?void 0:n.content})]}),w?e(A,{onClick:()=>Z(),children:"신청"}):e("div",{children:e(A,{onClick:()=>m.warning("로그인을 해주세요!"),children:"신청"})})]}):d(P,{children:[e(B,{children:n==null?void 0:n.title}),d(cn,{children:[d("h1",{children:["동행 신청 인원"," ",(n==null?void 0:n.applyingUserIdList)&&Object.values(n==null?void 0:n.applyingUserIdList).length,"/",n==null?void 0:n.maxNum," 예약 인원"," ",Object.values(n==null?void 0:n.appliedUserIdList).length]}),e(rn,{children:Object.values(n==null?void 0:n.applyingUserIdList).map((i,s)=>d(tn,{children:[d(ln,{children:[e(hn,{children:e(dn,{size:"29"})}),e(pn,{children:i.user_id})]}),d(gn,{children:[e(xn,{onClick:()=>C(n==null?void 0:n.recruitmentBoardId,i.user_id,0),children:"수락"}),e(mn,{onClick:()=>C(n==null?void 0:n.recruitmentBoardId,i.user_id,1),children:"거절"})]})]},s))})]}),d(r,{children:[e(t,{children:"🔥 매치 정보"}),e(S,{children:d(b,{children:[d(a,{children:[e(p,{children:e(f,{children:T(n==null?void 0:n.createdDate)})}),e(p,{children:e(f,{children:L(n==null?void 0:n.TeamId)})})]}),e(y,{children:d(c,{children:[" ",g(n==null?void 0:n.TeamId)," vs"," ",g(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(r,{children:[e(t,{children:"🔥 동행 정보"}),e(F,{children:d(b,{children:[e(a,{children:d(p,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(y,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(r,{children:[e(t,{children:"🔥 태그 정보"}),e($,{children:(j=_(I))==null?void 0:j.map((i,s)=>e(N,{children:i},s))})]}),d(r,{children:[e(t,{children:"🔥 카드 정보"}),e(U,{children:e(O,{children:d(M,{children:[e(h,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(h,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(h,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(E,{children:n==null?void 0:n.content})]})]})},A=o.div`
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
`,f=o.div`
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
`,$=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
`,N=o.div`
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
`,cn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 50%;
`,rn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`,tn=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,ln=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,hn=o.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`,pn=o.div`
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
`,xn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`,mn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`,gn=o.div`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;export{yn as default};
