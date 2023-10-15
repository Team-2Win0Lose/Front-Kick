import{s as e,a as n,f as a,j as d}from"./vendor-6e44eb02.js";const r=t=>n(s,{children:n(l,{})}),s=e.div`
  width: 100%;
`,l=e.div`
  margin: 0 auto;
`,x=t=>{const[o,c]=a.useState(1);return d(f,{children:[n(g,{page:o,onClick:()=>{c(1),t.handleAccompanyComponent(1)},children:n(i,{children:"내가 모집한 동행"})}),n(h,{page:o,onClick:()=>{c(2),t.handleAccompanyComponent(2)},children:n(i,{children:"내가 신청한 동행"})})]})},f=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  padding: 2px 3px;
`,g=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${t=>t.page===1?"#fff":"#d9d9d9"};
`,h=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${t=>t.page===1?"#d9d9d9":"#fff"};
`,i=e.p`
  color: black;
  font-weight: bold;
  font-size: 14px;
`,m=t=>n(u,{children:n(y,{})}),u=e.div`
  width: 100%;
`,y=e.div`
  margin: 0 auto;
`,k=t=>{const[o,c]=a.useState(1);return d(C,{children:[n(x,{handleAccompanyComponent:p=>{c(p)}}),o===1?n(m,{}):n(r,{})]})},C=e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 25px;
`;export{k as default};
