import{s as t,a as n,e as a,j as d}from"./vendor-e594e6cf.js";const r=e=>n(s,{children:n(l,{})}),s=t.div`
  width: 100%;
`,l=t.div`
  margin: 0 auto;
`,x=e=>{const[o,c]=a.useState(1);return d(f,{children:[n(g,{page:o,onClick:()=>{c(1),e.handleAccompanyComponent(1)},children:n(i,{children:"내가 모집한 동행"})}),n(h,{page:o,onClick:()=>{c(2),e.handleAccompanyComponent(2)},children:n(i,{children:"내가 신청한 동행"})})]})},f=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  padding: 2px 3px;
`,g=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${e=>e.page===1?"#fff":"#d9d9d9"};
`,h=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${e=>e.page===1?"#d9d9d9":"#fff"};
`,i=t.p`
  color: black;
  font-weight: bold;
  font-size: 14px;
`,m=e=>n(u,{children:n(y,{})}),u=t.div`
  width: 100%;
`,y=t.div`
  margin: 0 auto;
`,k=e=>{const[o,c]=a.useState(1);return d(C,{children:[n(x,{handleAccompanyComponent:p=>{c(p)}}),o===1?n(m,{}):n(r,{})]})},C=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 25px;
`;export{k as default};
