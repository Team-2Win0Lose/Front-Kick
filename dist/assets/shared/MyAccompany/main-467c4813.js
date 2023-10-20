import{s as n,m as B,j as i,a as e,B as H}from"../../vendor-3c23d344.js";import{a,b as S}from"../../common-6abcfddc.js";const D=t=>t.length>20?t.slice(0,20)+"...":t,F=t=>t.split("오")[0],V=t=>t===0?"모집중":t===1?"모집완료":"모집종료",s=t=>t>0,oe=t=>{var l,f,g,u,m,y,b,w,v,j,I,C,k;const h=B();return i(M,{onClick:()=>h(`/findaccompany/detail/${t.post.recruitmentBoardId}`),children:[i($,{children:[e(q,{children:e(E,{src:a(t.post.TeamId),alt:t.post.title})}),i("div",{children:[e(U,{children:D(t.post.title)}),e(W,{children:(l=S(t.post.tagList))==null?void 0:l.map((N,P)=>i(X,{children:["#",N]},P))})]})]}),i(R,{children:[s(t.post.tourCardIdList.attraction.length)?e(r,{children:i(o,{children:[e(c,{children:e(x,{src:(g=(f=t.post.tourCardIdList)==null?void 0:f.attraction[0])==null?void 0:g.firstimage})}),e(d,{children:(m=(u=t.post.tourCardIdList)==null?void 0:u.attraction[0])==null?void 0:m.title})]})}):e(r,{children:i(o,{children:[e(c,{children:"No Image"}),e(d,{children:"관광지 선택안함"})]})}),s(t.post.tourCardIdList.restaurant.length)?e(r,{children:i(o,{children:[e(c,{children:e(x,{src:(b=(y=t.post.tourCardIdList)==null?void 0:y.restaurant[0])==null?void 0:b.firstimage})}),e(d,{children:(v=(w=t.post.tourCardIdList)==null?void 0:w.restaurant[0])==null?void 0:v.title})]})}):e(r,{children:i(o,{children:[e(c,{children:"No Image"}),e(d,{children:"식당 선택안함"})]})}),s(t.post.tourCardIdList.accommodation.length)?e(r,{children:i(o,{children:[e(c,{children:e(x,{src:(I=(j=t.post.tourCardIdList)==null?void 0:j.accommodation[0])==null?void 0:I.firstimage})}),e(d,{children:(k=(C=t.post.tourCardIdList)==null?void 0:C.accommodation[0])==null?void 0:k.title})]})}):e(r,{children:i(o,{children:[e(c,{children:"No Image"}),e(d,{children:"숙박 선택안함"})]})})]}),i(Y,{children:[i(G,{children:[i(K,{children:[e(T,{src:a(t.post.TeamId)}),e(p,{children:"Home"})]}),e(p,{children:"VS"}),i(O,{children:[e(T,{src:a(t.post.opponentTeamId)}),e(p,{children:"Away"})]})]}),e(_,{}),i(L,{children:[e(z,{children:e(A,{children:F(t.post.term)})}),e(L,{children:e(z,{children:e(A,{children:t.post.meetingPlace})})})]}),i(Z,{children:[i(ne,{children:[e(ee,{children:e(H,{})}),i(te,{children:[t.post.nowHeadCount,"/",t.post.maxNum]})]}),e(J,{children:e(Q,{children:V(t.post.now_status)})})]})]})]})},M=n.div`
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
`,_=n.div`
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
`,q=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,E=n.img`
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
`,p=n.p`
  font-size: 8px;
  color: black;
`,Q=n.div`
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
`,x=n.img`
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
`,ee=n.div``,te=n.p`
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
`,ne=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,A=n.p`
  font-size: 12px;
`;export{oe as A};
