import{s as e,e as r,M as h,b as g,j as i,a as t,a1 as l,a2 as p,N as a}from"./vendor-34c37101.js";import{O as u}from"./shared/ModifyPersonalData/Onboarding-1283d6e5.js";import"./react-slick-2febd1cd.js";/* empty css                       */import"./common-e20ce833.js";const m=n=>{const[o,s]=r.useState(!1),d=()=>{s(!o)},f=h(),c=g(x=>x.auth.isAuthenticated);return r.useEffect(()=>{c||f("/")},[c]),i(y,{children:[i(b,{children:[t(w,{children:"계정 설정"}),t(v,{onClick:d,children:o?t(l,{size:"30"}):t(p,{size:"30"})})]}),o?i(j,{children:[i(z,{children:[t(B,{src:"",alt:"사용자 프로필 이미지"}),t($,{children:"프로필 이미지 변경"})]}),i(k,{children:[t(O,{children:"닉네임"}),t(C,{placeholder:"닉네임"})]}),t(A,{children:"저장하기"})]}):t(a,{})]})},y=e.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,b=e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`,w=e.h1`
  font-size: 32px;
  font-weight: bold;
`,v=e.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`,j=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,z=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,B=e.img`
  width: 214px;
  height: 214px;
  border-radius: 180px;
  border: 1px solid black;
`,$=e.div`
  width: 270px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #777;
  border-radius: 12px;
`,k=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`,O=e.p`
  font-size: 24px;
  font-weight: bold;
`,C=e.input`
  width: 560px;
  height: 64px;
  font-size: 24px;
  padding: 17px 30px;
  border: 1px solid #777;
  border-radius: 12px;
  &::placeholder {
    font-size: 24px;
    font-weight: bold;
    color: #999;
  }
`;e.div`
  width: 560px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;e.div`
  font-size: 24px;
  font-weight: bold;
  width: 250px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({isSelected:n})=>n?"1px solid #fff":"1px solid #000"};
  border-radius: 12px;

  background-color: ${({isSelected:n})=>n?"#418DFF":"#fff"};
  color: ${({isSelected:n})=>n?"#fff":"#000"};
`;const A=e.div`
  width: 560px;
  height: 64px;
  background-color: #418dff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`,S=n=>{const[o,s]=r.useState(!1);return i(T,{children:[i(M,{children:[t(D,{children:"나의 응원팀 설정"}),t(F,{onClick:()=>{s(!o)},children:o?t(l,{size:"30"}):t(p,{size:"30"})})]}),o?i(H,{children:[t(E,{children:t(N,{children:t(u,{})})}),t(I,{children:"저장하기"})]}):t(a,{})]})},T=e.div`
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,M=e.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,D=e.h1`
  font-size: 32px;
  font-weight: bold;
`,F=e.div`
  width: 65px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`,H=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,I=e.div`
  width: 560px;
  height: 64px;
  background-color: #418dff;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-weight: bold;
`,E=e.div`
  height: 100%;
  overflow-x: hidden;
`,N=e.div`
  height: 100%;
  background-color: #1f1f45;
  overflow-x: hidden;
`,Q=n=>t(P,{children:i(W,{children:[t(L,{children:"개인정보변경"}),t(m,{}),t(S,{})]})}),P=e.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,W=e.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 50px;
`,L=e.div`
  font-size: 40px;
  font-weight: bold;
`;export{Q as default};
