import{m as en,e as r,k as dn,a3 as on,j as d,a as e,Q as g,s as o}from"./vendor-a1ee613c.js";import{P as p}from"./shared/CreateRoom/FindAccompanyDetail-4cd63605.js";import{g as sn,ay as _,az as z,aA as f,b as P,B as v}from"./common-fdb541e1.js";import{a as cn}from"./react-icons-74110d71.js";const rn=sn("token"),S={Authorization:`Bearer ${rn}`},kn=()=>{var L,T;const H=en(),[J,Q]=r.useState(0),[W,G]=r.useState(0),[K,V]=r.useState(""),[X,Y]=r.useState(),x=dn(s=>s.auth.id),[n,Z]=r.useState(),{recruitment_board_id:I}=on(),[q,D]=r.useState(!1);r.useEffect(()=>{for(const s in n==null?void 0:n.applyingUserIdList)n!=null&&n.applyingUserIdList.hasOwnProperty(s)&&(n==null?void 0:n.applyingUserIdList[s]).user_id===x&&D(!0)},[n,x]),r.useEffect(()=>{async function s(){try{const m=await(await fetch(`${v}/api/recruitment/?recruitment_board_id=${I}`,{method:"get"})).json();Z(m)}catch(i){console.error("Error:",i)}}s()},[J]);const C=n==null?void 0:n.tagList,u=async()=>{try{(n==null?void 0:n.hostId)!==x?await(await fetch(`${v}/api/recruitment/?recruitment_board_id=${I}`,{method:"PATCH",headers:S})).json()&&(g.success("🤝 동행 신청 완료!"),H("/")):g.warning("본인의 동행에는 신청할 수 없습니다.")}catch{g.error("동행 신청 실패!")}},j=(s,i,m)=>{G(s),V(i),Y(m),Q(m+1),setTimeout(()=>{nn()},100)},nn=async()=>{try{const i=await(await fetch(`${v}/api/my-recruitment/?recruitment_board_id=${W}&applying_user_id=${K}&is_accept=${X}`,{method:"PATCH",headers:S})).json();console.log(i)}catch(s){console.log(s)}};return x!==(n==null?void 0:n.hostId)?d(A,{children:[e(B,{children:n==null?void 0:n.title}),d(t,{children:[e(l,{children:"🔥 매치 정보"}),e(F,{children:d(y,{children:[d(a,{children:[e(h,{children:e(b,{children:_(n==null?void 0:n.createdDate)})}),e(h,{children:e(b,{children:z(n==null?void 0:n.TeamId)})})]}),e(w,{children:d(c,{children:[" ",f(n==null?void 0:n.TeamId)," vs"," ",f(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(t,{children:[e(l,{children:"🔥 동행 정보"}),e(U,{children:d(y,{children:[e(a,{children:d(h,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(w,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(t,{children:[e(l,{children:"🔥 태그 정보"}),e($,{children:(L=P(C))==null?void 0:L.map((s,i)=>e(N,{children:s},i))})]}),d(t,{children:[e(l,{children:"🔥 카드 정보"}),e(O,{children:e(R,{children:d(M,{children:[e(p,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(p,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(p,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(E,{children:n==null?void 0:n.content})]}),x?q?e(k,{onClick:()=>u(),children:"신청완료"}):e(k,{onClick:()=>u(),children:"신청"}):e("div",{children:e(k,{onClick:()=>g.warning("로그인을 해주세요!"),children:"신청"})})]}):d(A,{children:[e(B,{children:n==null?void 0:n.title}),d(tn,{children:[d("h1",{children:["동행 신청 인원"," ",(n==null?void 0:n.applyingUserIdList)&&Object.values(n==null?void 0:n.applyingUserIdList).length,"/",n==null?void 0:n.maxNum," 예약 인원"," ",Object.values(n==null?void 0:n.appliedUserIdList).length]}),e(ln,{children:Object.values(n==null?void 0:n.applyingUserIdList).map((s,i)=>d(pn,{children:[d(hn,{children:[e(xn,{children:e(cn,{size:"29"})}),e(mn,{children:s.user_id})]}),d(bn,{children:[e(gn,{onClick:()=>j(n==null?void 0:n.recruitmentBoardId,s.user_id,0),children:"수락"}),e(fn,{onClick:()=>j(n==null?void 0:n.recruitmentBoardId,s.user_id,1),children:"거절"})]})]},i))})]}),d(t,{children:[e(l,{children:"🔥 매치 정보"}),e(F,{children:d(y,{children:[d(a,{children:[e(h,{children:e(b,{children:_(n==null?void 0:n.createdDate)})}),e(h,{children:e(b,{children:z(n==null?void 0:n.TeamId)})})]}),e(w,{children:d(c,{children:[" ",f(n==null?void 0:n.TeamId)," vs"," ",f(n==null?void 0:n.opponentTeamId)," "]})})]})})]}),d(t,{children:[e(l,{children:"🔥 동행 정보"}),e(U,{children:d(y,{children:[e(a,{children:d(h,{children:[e(c,{children:"희망 인원 "}),d(c,{children:[" ",n==null?void 0:n.minNum," 명 ~ ",n==null?void 0:n.maxNum," ","명"]})]})}),d(w,{children:[d(c,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),d(t,{children:[e(l,{children:"🔥 태그 정보"}),e($,{children:(T=P(C))==null?void 0:T.map((s,i)=>e(N,{children:s},i))})]}),d(t,{children:[e(l,{children:"🔥 카드 정보"}),e(O,{children:e(R,{children:d(M,{children:[e(p,{index:0,ischk:!1,list:n==null?void 0:n.tourCardIdList.accommodation}),e(p,{index:1,ischk:!1,list:n==null?void 0:n.tourCardIdList.restaurant}),e(p,{index:2,ischk:!1,list:n==null?void 0:n.tourCardIdList.attraction})]})})}),e(E,{children:n==null?void 0:n.content})]})]})},k=o.div`
  background-color: #1f1f45;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`,A=o.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,t=o.div`
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
`,F=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,b=o.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,h=o.div`
  align-items: center;
  gap: 10px;
`,l=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,c=o.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,y=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,a=o.div`
  justify-content: left;
  align-items: center;
`,w=o.div`
  gap: 15px;
`,U=o.div`
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
`,O=o.div`
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
`,R=o.div`
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
`,tn=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 50%;
`,ln=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`,pn=o.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,hn=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,xn=o.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`,mn=o.div`
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
`,gn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`,fn=o.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`,bn=o.div`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;export{kn as default};
