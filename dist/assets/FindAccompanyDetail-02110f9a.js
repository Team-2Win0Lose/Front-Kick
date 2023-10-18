import{f as p,a3 as w,j as i,a as e,s as o}from"./vendor-6e44eb02.js";import{aw as u,ax as y,B as j}from"./common-96e4c6f2.js";import{c as T}from"./shared/FindAccompanyDetail/main-7b65b9c7.js";const R=()=>{const[n,g]=p.useState(),{recruitment_board_id:f}=w();p.useEffect(()=>{async function s(){try{const v=await(await fetch(`${j}/api/recruitment/?recruitment_board_id=${f}`,{method:"get"})).json();g(v)}catch(d){console.error("Error:",d)}}s()},[]);const b=n==null?void 0:n.tagList;return i(k,{children:[e(I,{children:e(C,{src:n==null?void 0:n.thumbnail,alt:"선택한 배경 사진이 없습니다.(No Image)"})}),e(F,{children:n==null?void 0:n.title}),i(r,{children:[e(c,{children:"🔥 매치 정보"}),e(z,{children:i(h,{children:[i(m,{children:[e(l,{children:e(x,{children:n==null?void 0:n.createdDate})}),e(l,{children:e(x,{children:u(n==null?void 0:n.TeamId)})})]}),e(a,{children:i(t,{children:[" ",y(n==null?void 0:n.TeamId)," vs"," ",n==null?void 0:n.opponentTeamId," "]})})]})})]}),i(r,{children:[e(c,{children:"🔥 동행 정보"}),e(E,{children:i(h,{children:[e(m,{children:i(l,{children:[e(t,{children:"희망 인원 "}),i(t,{children:[" ",n==null?void 0:n.minNum," ~ ",n==null?void 0:n.maxNum," 명"]})]})}),i(a,{children:[i(t,{children:[" ","동행 장소 ",n==null?void 0:n.meetingPlace," ",n==null?void 0:n.detailMeetingPlace]}),i(t,{children:[" 동행 기간 ",n==null?void 0:n.term," "]})]})]})})]}),"\\"," ",i(r,{children:[e(c,{children:"🔥 태그 정보"}),e(S,{children:T(b).map((s,d)=>e(_,{children:s},d))})]}),i(r,{children:[e(c,{children:"🔥 카드 정보"}),e(L,{children:e(N,{})})]}),e(B,{children:n==null?void 0:n.content})]})},k=o.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,r=o.div`
  justify-content: left;
  align-items: left;
`,I=o.div`
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
`,C=o.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,F=o.div`
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 25px;
  /* border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc; */
`,z=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,x=o.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,l=o.div`
  align-items: center;
  gap: 10px;
`,c=o.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,t=o.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,h=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,m=o.div`
  justify-content: left;
  align-items: center;
`,a=o.div`
  gap: 15px;
`,E=o.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,S=o.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`,_=o.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,B=o.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`,L=o.div`
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
`;o.div`
  display: flex;
`;const N=o.div`
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
`;export{R as default};
