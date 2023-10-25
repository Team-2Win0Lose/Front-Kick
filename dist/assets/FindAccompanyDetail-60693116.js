import{m as ee,k as ne,e as l,a3 as de,j as d,a as n,Q as m,s as i}from"./vendor-cdd8924f.js";import{P as h}from"./shared/CreateRoom/FindAccompanyDetail-c714a75a.js";import{g as ie,ay as z,az as N,aA as g,b as L,B}from"./common-06e38f36.js";/* empty css                       */import{a as oe}from"./react-icons-ebf3d52b.js";const se=ie("token"),ce={Authorization:`Bearer ${se}`},ue=()=>{var T,A;const K=ee(),v=ne(o=>o.auth.id),[e,Q]=l.useState(),{recruitment_board_id:k}=de();l.useEffect(()=>{async function o(){try{const x=await(await fetch(`${B}/api/recruitment/?recruitment_board_id=${k}`,{method:"get"})).json();Q(x)}catch(s){console.error("Error:",s)}}o()},[]);const C=e==null?void 0:e.tagList,U=async()=>{try{(e==null?void 0:e.hostId)!==v?await(await fetch(`${B}/api/recruitment/?recruitment_board_id=${k}`,{method:"PATCH",headers:ce})).json()&&(m.success("🤝 동행 신청 완료!"),K("/")):m.warning("본인의 동행에는 신청할 수 없습니다.")}catch{m.error("동행 신청 실패!")}},W=[{id:1,requesterName:"Alice"},{id:2,requesterName:"Bob"},{id:3,requesterName:"Kim"},{id:4,requesterName:"Son"}],[y,fe]=l.useState(W),[G,O]=l.useState([]),V=o=>{const s=y.find(x=>x.id===o);s&&O(x=>[...x,s])},[j,X]=l.useState(!1),[I,Y]=l.useState(!1),Z=o=>{X(!0),V(o)},D=o=>{Y(!0)};return v!==(e==null?void 0:e.hostId)?d(S,{children:[n(q,{children:e==null?void 0:e.title}),d(t,{children:[n(r,{children:"🔥 매치 정보"}),n(F,{children:d(a,{children:[d(b,{children:[n(p,{children:n(f,{children:z(e==null?void 0:e.createdDate)})}),n(p,{children:n(f,{children:N(e==null?void 0:e.TeamId)})})]}),n(w,{children:d(c,{children:[" ",g(e==null?void 0:e.TeamId)," vs"," ",g(e==null?void 0:e.opponentTeamId)," "]})})]})})]}),d(t,{children:[n(r,{children:"🔥 동행 정보"}),n(R,{children:d(a,{children:[n(b,{children:d(p,{children:[n(c,{children:"희망 인원 "}),d(c,{children:[" ",e==null?void 0:e.minNum," 명 ~ ",e==null?void 0:e.maxNum," ","명"]})]})}),d(w,{children:[d(c,{children:[" ","동행 장소 ",e==null?void 0:e.meetingPlace," ",e==null?void 0:e.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",e==null?void 0:e.term," "]})]})]})})]}),d(t,{children:[n(r,{children:"🔥 태그 정보"}),n(_,{children:(T=L(C))==null?void 0:T.map((o,s)=>n(E,{children:o},s))})]}),d(t,{children:[n(r,{children:"🔥 카드 정보"}),n(M,{children:n(J,{children:d(H,{children:[n(h,{index:0,ischk:!1,list:e==null?void 0:e.tourCardIdList.accommodation}),n(h,{index:1,ischk:!1,list:e==null?void 0:e.tourCardIdList.restaurant}),n(h,{index:2,ischk:!1,list:e==null?void 0:e.tourCardIdList.attraction})]})})}),n($,{children:e==null?void 0:e.content})]}),v?n(P,{onClick:()=>U(),children:"신청"}):n("div",{children:n(P,{onClick:()=>m.warning("로그인을 해주세요!"),children:"신청"})})]}):d(S,{children:[n(q,{children:e==null?void 0:e.title}),d(te,{children:[d("h1",{children:["동행 신청 인원 ",G.length,"/4 예약 인원"," ",y.length]}),n(re,{className:"meeting-requests-list",children:y.map((o,s)=>d(le,{children:[d(he,{children:[n(pe,{children:n(oe,{size:"29"})}),n(xe,{children:o.requesterName})]}),!j&&!I&&d(u,{children:[n(me,{onClick:()=>Z(o.id),children:"수락"}),n(ge,{onClick:()=>D(o.id),children:"거절"})]}),j&&n(u,{children:n("p",{children:"참여 완료"})}),I&&n(u,{children:n("p",{children:"참여 거절"})})]},s))})]}),d(t,{children:[n(r,{children:"🔥 매치 정보"}),n(F,{children:d(a,{children:[d(b,{children:[n(p,{children:n(f,{children:z(e==null?void 0:e.createdDate)})}),n(p,{children:n(f,{children:N(e==null?void 0:e.TeamId)})})]}),n(w,{children:d(c,{children:[" ",g(e==null?void 0:e.TeamId)," vs"," ",g(e==null?void 0:e.opponentTeamId)," "]})})]})})]}),d(t,{children:[n(r,{children:"🔥 동행 정보"}),n(R,{children:d(a,{children:[n(b,{children:d(p,{children:[n(c,{children:"희망 인원 "}),d(c,{children:[" ",e==null?void 0:e.minNum," 명 ~ ",e==null?void 0:e.maxNum," ","명"]})]})}),d(w,{children:[d(c,{children:[" ","동행 장소 ",e==null?void 0:e.meetingPlace," ",e==null?void 0:e.detailMeetingPlace]}),d(c,{children:[" 동행 기간 ",e==null?void 0:e.term," "]})]})]})})]}),d(t,{children:[n(r,{children:"🔥 태그 정보"}),n(_,{children:(A=L(C))==null?void 0:A.map((o,s)=>n(E,{children:o},s))})]}),d(t,{children:[n(r,{children:"🔥 카드 정보"}),n(M,{children:n(J,{children:d(H,{children:[n(h,{index:0,ischk:!1,list:e==null?void 0:e.tourCardIdList.accommodation}),n(h,{index:1,ischk:!1,list:e==null?void 0:e.tourCardIdList.restaurant}),n(h,{index:2,ischk:!1,list:e==null?void 0:e.tourCardIdList.attraction})]})})}),n($,{children:e==null?void 0:e.content})]})]})},P=i.div`
  background-color: #1f1f45;
  padding: 10px 20px;
  border-radius: 12px;
  color: white;
  cursor: pointer;
`,S=i.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,t=i.div`
  justify-content: left;
  align-items: left;
  width: 50%;
`;i.div`
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
`;i.img`
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
`;const q=i.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  word-break: break-all;
  width: 50%;
  height: auto;
  font-size: 24px;
`,F=i.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,f=i.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,p=i.div`
  align-items: center;
  gap: 10px;
`,r=i.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,c=i.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,a=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,b=i.div`
  justify-content: left;
  align-items: center;
`,w=i.div`
  gap: 15px;
`,R=i.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  padding: 20px;
`,_=i.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 100%;
`,E=i.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,$=i.div`
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
`,M=i.div`
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
`,H=i.div`
  display: flex;
`,J=i.div`
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
`,te=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid black;
  padding: 10px 10px;
  border-radius: 12px;
  width: 50%;
`,re=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  padding: 5px 10px;
  width: 100%;
`,le=i.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`,he=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,pe=i.div`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  background-color: #898989;
`,xe=i.div`
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
`,me=i.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #5297ff;
`,ge=i.div`
  padding: 8px 20px;
  font-size: 12px;
  color: white;
  border: none;
  border-radius: 12px;
  background-color: #f25a5a;
`,u=i.div`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;export{ue as default};
