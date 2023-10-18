import{s as n,m as B,j as i,a as t,B as H}from"../../vendor-032019a3.js";import{a,b as S}from"../../common-77df1045.js";const N=e=>e.length>20?e.slice(0,20)+"...":e,D=e=>e.split("오")[0],F=e=>e===0?"모집중":e===1?"모집완료":"모집종료",rt=e=>{var l,h,f,g,u,m,y,b,w,v,j,I,C;const x=B();return i(V,{onClick:()=>x(`/findaccompany/detail/${e.post.recruitmentBoardId}`),children:[i(_,{children:[t($,{children:t(q,{src:a(e.post.TeamId),alt:e.post.title})}),i("div",{children:[t(R,{children:N(e.post.title)}),t(U,{children:(l=S(e.post.tagList))==null?void 0:l.map((A,P)=>i(W,{children:["#",A]},P))})]})]}),i(Q,{children:[e.post.tourCardIdList.attraction?t(r,{children:i(o,{children:[t(c,{children:t(p,{src:(f=(h=e.post.tourCardIdList)==null?void 0:h.attraction[0])==null?void 0:f.firstimage})}),t(d,{children:(u=(g=e.post.tourCardIdList)==null?void 0:g.attraction[0])==null?void 0:u.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"카드 사진"}),t(d,{children:"카드 이름"})]})}),e.post.tourCardIdList.restaurant?t(r,{children:i(o,{children:[t(c,{children:t(p,{src:(y=(m=e.post.tourCardIdList)==null?void 0:m.restaurant[0])==null?void 0:y.firstimage})}),t(d,{children:(w=(b=e.post.tourCardIdList)==null?void 0:b.restaurant[0])==null?void 0:w.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"카드 사진"}),t(d,{children:"카드 이름"})]})}),e.post.tourCardIdList.accommodation?t(r,{children:i(o,{children:[t(c,{children:t(p,{src:(j=(v=e.post.tourCardIdList)==null?void 0:v.accommodation[0])==null?void 0:j.firstimage})}),t(d,{children:(C=(I=e.post.tourCardIdList)==null?void 0:I.accommodation[0])==null?void 0:C.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"카드 사진"}),t(d,{children:"카드 이름"})]})})]}),i(X,{children:[i(E,{children:[i(J,{children:[t(k,{src:a(e.post.TeamId)}),t(s,{children:"Home"})]}),t(s,{children:"VS"}),i(K,{children:[t(k,{src:a(e.post.opponentTeamId)}),t(s,{children:"Away"})]})]}),t(M,{}),i(T,{children:[t(L,{children:t(z,{children:D(e.post.term)})}),t(T,{children:t(L,{children:t(z,{children:e.post.meetingPlace})})})]}),i(Y,{children:[i(et,{children:[t(Z,{children:t(H,{})}),i(tt,{children:[e.post.nowHeadCount,"/",e.post.maxNum]})]}),t(G,{children:t(O,{children:F(e.post.now_status)})})]})]})]})},V=n.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 15px 10px;
  /* margin-top: 20px; */
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1f1f45;
  color: white;
  font-weight: bold;
`,M=n.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,_=n.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,$=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,q=n.img`
  width: 50px;
  height: 50px;
  object-fit: fill;
  border: none;
  border-radius: 100%;
`,E=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,G=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,J=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,K=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,k=n.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  /* background-color: #9b9b9b; */
`,s=n.p`
  font-size: 8px;
  color: black;
`,O=n.div`
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
`,Q=n.div`
  display: flex;
  width: 340px;
  height: 138px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`,R=n.p`
  font-size: 16px;
  color: white;
`,r=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`,o=n.div`
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
`,c=n.div`
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
`,p=n.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
`,d=n.div`
  width: 80%;
  font-size: 10px;
  color: black;
  word-break: break-all;
  text-align: center;
`,U=n.ul`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`,W=n.li`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`,X=n.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`,Y=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`,Z=n.div``,tt=n.p`
  font-size: 12px;
`,T=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,L=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`,et=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,z=n.p`
  font-size: 12px;
`;export{rt as A};
