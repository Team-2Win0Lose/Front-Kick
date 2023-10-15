import{s as t,f as z,j as i,a as e,B as L}from"./vendor-e594e6cf.js";import{t as T}from"./common-1cfa3065.js";const A=n=>n.slice(0,20)+"...",P=n=>n.split("오")[0],B=n=>n===0?"모집중":n===1?"모집완료":"모집종료",Y=n=>{var l,s,x,h,f,u,g,m,y,b,v,w;return z(),i(H,{children:[i(S,{children:[e(D,{children:e(F,{src:"",alt:""})}),e("div",{children:e(J,{children:A(n.post.title)})})]}),i(G,{children:[n.post.tourCardIdList.attraction?e(r,{children:i(o,{children:[e(c,{children:e(p,{src:(s=(l=n.post.tourCardIdList)==null?void 0:l.attraction[0])==null?void 0:s.firstimage})}),e(d,{children:(h=(x=n.post.tourCardIdList)==null?void 0:x.attraction[0])==null?void 0:h.title})]})}):e(r,{children:i(o,{children:[e(c,{children:"카드 사진"}),e(d,{children:"카드 이름"})]})}),n.post.tourCardIdList.restaurant?e(r,{children:i(o,{children:[e(c,{children:e(p,{src:(u=(f=n.post.tourCardIdList)==null?void 0:f.restaurant[0])==null?void 0:u.firstimage})}),e(d,{children:(m=(g=n.post.tourCardIdList)==null?void 0:g.restaurant[0])==null?void 0:m.title})]})}):e(r,{children:i(o,{children:[e(c,{children:"카드 사진"}),e(d,{children:"카드 이름"})]})}),n.post.tourCardIdList.accommodation?e(r,{children:i(o,{children:[e(c,{children:e(p,{src:(b=(y=n.post.tourCardIdList)==null?void 0:y.accommodation[0])==null?void 0:b.firstimage})}),e(d,{children:(w=(v=n.post.tourCardIdList)==null?void 0:v.accommodation[0])==null?void 0:w.title})]})}):e(r,{children:i(o,{children:[e(c,{children:"카드 사진"}),e(d,{children:"카드 이름"})]})})]}),i(K,{children:[i(V,{children:[i(_,{children:[e(j,{src:T(n.post.homeTeamId)}),e(a,{children:"Home"})]}),e(a,{children:"VS"}),i(q,{children:[e(j,{src:""}),e(a,{children:"Away"})]})]}),e(N,{}),i(C,{children:[e(I,{children:e(k,{children:P(n.post.term)})}),e(C,{children:e(I,{children:e(k,{children:n.post.meetingPlace})})})]}),i(O,{children:[i(U,{children:[e(Q,{children:e(L,{})}),i(R,{children:[n.post.minNum,"/",n.post.maxNum]})]}),e(M,{children:e(E,{children:B(n.post.now_status)})})]})]})]})},H=t.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  padding: 15px 10px;
  margin-top: 20px;
  gap: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  background-color: #1f1f45;
  color: white;
  font-weight: bold;
`,N=t.div`
  width: 1px;
  height: 20px;
  background-color: #9b9b9b;
  border: none;
`,S=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 4px;
`,D=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,F=t.img`
  width: 40px;
  height: 40px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`,V=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,M=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,_=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,q=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,j=t.img`
  width: 27px;
  height: 27px;

  border: none;
  border-radius: 100%;
  background-color: #9b9b9b;
`,a=t.p`
  font-size: 8px;
  color: black;
`,E=t.div`
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
`,G=t.div`
  display: flex;
  width: 340px;
  height: 138px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: flex-start;
  padding: 8px 0;
  gap: 8px;
  /* background-color: #ffffff; */
`,J=t.p`
  font-size: 16px;
  color: white;
`,r=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`,o=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: #fff;
  border: none;
  border-radius: 25px;
  width: 108px;
  height: 122px;
`,c=t.div`
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
`,p=t.img`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 100%;
`,d=t.p`
  font-size: 10px;
  color: black;
`;t.div`
  margin-top: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;t.p`
  font-size: 11px;
  font-weight: 350;
  color: #d8d7d7;
`;const K=t.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 4px 0;
  background-color: white;
  border-radius: 180px;
`,O=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 3px; */
`,Q=t.div``,R=t.p`
  font-size: 12px;
`,C=t.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
`,I=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
`,U=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`,k=t.p`
  font-size: 12px;
`;export{Y as A};
