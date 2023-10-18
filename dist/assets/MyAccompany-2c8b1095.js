import{s as n,a as t,e as i,j as p,m as l}from"./vendor-3ed0bc3f.js";import{A as g}from"./shared/MyAccompany/main-66421448.js";import{g as m,B as f}from"./common-4ca9fc82.js";const h=e=>t(x,{children:t(u,{})}),x=n.div`
  width: 100%;
`,u=n.div`
  margin: 0 auto;
`,y=e=>{const[o,a]=i.useState(1);return p(w,{children:[t(C,{page:o,onClick:()=>{a(1),e.handleAccompanyComponent(1)},children:t(v,{page:o,children:"내가 모집한 동행"})}),t(k,{page:o,onClick:()=>{a(2),e.handleAccompanyComponent(2)},children:t($,{page:o,children:"내가 신청한 동행"})})]})},w=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f45;
  padding: 2px 3px;
`,C=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${e=>e.page===1?"#1f1f45":"white"};
`,k=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 25px;
  padding: 2px 5px;
  background-color: ${e=>e.page===1?"white":"#1f1f45"};
`,v=n.p`
  color: ${e=>e.page===1?"white":"black"};
  font-weight: bold;
  font-size: 14px;
`,$=n.p`
  color: ${e=>e.page===1?"black":"white"};
  font-weight: bold;
  font-size: 14px;
`,A=m("token"),j={Authorization:`Bearer ${A}`},B=e=>{const o=l(),[a,s]=i.useState([]);return i.useEffect(()=>{async function c(){try{const d=await(await fetch(`${f}/api/my-recruitment`,{method:"get",headers:j})).json();s(d)}catch(r){console.error("Error:",r)}}c()},[]),t(b,{children:t(M,{children:a==null?void 0:a.map((c,r)=>t("div",{onClick:()=>o(`/findaccompany/detail/${c.recruitmentBoardId}`),children:t(g,{post:c})},c.recruitmentBoardId))})})},b=n.div`
  width: 100%;
`,M=n.div`
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 30px;
`,I=e=>{const[o,a]=i.useState(1);return p(S,{children:[t(y,{handleAccompanyComponent:c=>{a(c)}}),o===1?t(B,{}):t(h,{})]})},S=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 25px;
`;export{I as default};
