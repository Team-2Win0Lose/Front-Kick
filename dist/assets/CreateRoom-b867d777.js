import{G as p,s as o,u as v,b as s,a as t,j as h}from"./vendor-6e44eb02.js";import{r as l}from"./common-feb29b35.js";function g(i){return p({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(i)}const k=i=>{const r=v();let c;if(i.index===0&&(c=s(n=>n.selecteditem.house)),i.index===1&&(c=s(n=>n.selecteditem.food)),i.index===2&&(c=s(n=>n.selecteditem.attraction)),!c)return t("div",{children:"카드가 선택되지 않았습니다."});const f=e=>{e.contenttypeid==="12"&&r(l({category:"attraction",itemToRemove:e})),e.contenttypeid==="39"&&r(l({category:"food",itemToRemove:e})),e.contenttypeid==="32"&&r(l({category:"house",itemToRemove:e}))};return i.list!==void 0?t(x,{children:i.list.map((e,n)=>e.title===""?t("div",{},n):h(u,{index:i.index,children:[t(d,{src:e.firstimage}),t(a,{children:e.title}),t(m,{onClick:()=>{f(e)},children:t(g,{size:"30"})})]},n))}):t(x,{children:c.map((e,n)=>e.title===""?t("div",{},n):h(u,{index:i.index,children:[t(d,{src:e.firstimage}),t(a,{children:e.title}),t(m,{onClick:()=>{f(e)},children:t(g,{size:"30"})})]},n))})},x=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
`,d=o.img`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-size: cover;
`,a=o.p`
  font-size: 15px;
  font-weight: bold;
  color: white;
`,u=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${i=>{switch(i.index){case 0:return"#F0B86E";case 1:return"#9F91CC";case 2:return"#D4E2D4"}}};
  gap: 15px;
  margin-bottom: 20px;

  ${d} {
    background-color: #ffffff;
    border-radius: 100%;
    background-size: cover;
  }

  ${a} {
    font-size: 10px;
    font-weight: bold;
    color: black;
  }
`,m=o.div`
  position: absolute;
  top: -10px;
  right: -10px;
  border: 0;
  outline: 0;
`;export{k as P};
