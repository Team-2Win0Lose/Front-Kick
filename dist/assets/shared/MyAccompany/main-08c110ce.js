import{s as n,m as P,j as i,a as t,B as H}from"../../vendor-490cfcbe.js";import{a,b as _}from"../../common-311e16a2.js";const S=e=>e.length>20?e.slice(0,20)+"...":e,E=e=>e.split("오")[0],D=e=>e===0?"모집중":e===1?"모집완료":"모집종료",s=e=>e>0,ot=e=>{var l,p,u,g,m,y,b,w,v,j,I,C,k;const h=P();return i(F,{onClick:()=>h(`/findaccompany/detail/${e.post.recruitmentBoardId}`),children:[i($,{children:[t(M,{children:t(q,{src:a(e.post.TeamId),alt:e.post.title})}),i("div",{children:[t(U,{children:S(e.post.title)}),t(W,{children:(l=_(e.post.tagList))==null?void 0:l.map((B,N)=>i(X,{children:["#",B]},N))})]})]}),i(R,{children:[s(e.post.tourCardIdList.attraction.length)?t(r,{children:i(o,{children:[t(c,{children:t(f,{src:(u=(p=e.post.tourCardIdList)==null?void 0:p.attraction[0])==null?void 0:u.firstimage})}),t(d,{children:(m=(g=e.post.tourCardIdList)==null?void 0:g.attraction[0])==null?void 0:m.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"No Image"}),t(d,{children:"관광지 선택안함"})]})}),s(e.post.tourCardIdList.restaurant.length)?t(r,{children:i(o,{children:[t(c,{children:t(f,{src:(b=(y=e.post.tourCardIdList)==null?void 0:y.restaurant[0])==null?void 0:b.firstimage})}),t(d,{children:(v=(w=e.post.tourCardIdList)==null?void 0:w.restaurant[0])==null?void 0:v.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"No Image"}),t(d,{children:"식당 선택안함"})]})}),s(e.post.tourCardIdList.accommodation.length)?t(r,{children:i(o,{children:[t(c,{children:t(f,{src:(I=(j=e.post.tourCardIdList)==null?void 0:j.accommodation[0])==null?void 0:I.firstimage})}),t(d,{children:(k=(C=e.post.tourCardIdList)==null?void 0:C.accommodation[0])==null?void 0:k.title})]})}):t(r,{children:i(o,{children:[t(c,{children:"No Image"}),t(d,{children:"숙박 선택안함"})]})})]}),i(Y,{children:[i(G,{children:[i(K,{children:[t(T,{src:a(e.post.TeamId)}),t(x,{children:"Home"})]}),t(x,{children:"VS"}),i(O,{children:[t(T,{src:a(e.post.opponentTeamId)}),t(x,{children:"Away"})]})]}),t(V,{}),i(L,{children:[t(z,{children:t(A,{children:E(e.post.term)})}),t(L,{children:t(z,{children:t(A,{children:e.post.meetingPlace})})})]}),i(Z,{children:[i(nt,{children:[t(tt,{children:t(H,{})}),i(et,{children:[e.post.nowHeadCount,"/",e.post.maxNum]})]}),t(J,{children:t(Q,{now_status:e.post.now_status,children:D(e.post.now_status)})})]})]})]})},F=n.div`
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
`,V=n.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,$=n.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,M=n.div`
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
`,G=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,J=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,K=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,O=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,T=n.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  /* background-color: #9b9b9b; */
`,x=n.p`
  font-size: 8px;
  color: black;
`,Q=n.div`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${e=>{if(e.now_status===0)return"#35CB00";if(e.now_status===1)return"#ffa500";if(e.now_status===2)return"#E72E2E"}};
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 8px;
  font-weight: 350;
`,R=n.div`
  display: flex;
  width: 340px;
  height: 138px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`,U=n.p`
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
`,f=n.img`
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
`,W=n.ul`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`,X=n.li`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`,Y=n.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`,Z=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`,tt=n.div``,et=n.p`
  font-size: 12px;
`,L=n.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,z=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`,nt=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,A=n.p`
  font-size: 12px;
`;export{ot as A};