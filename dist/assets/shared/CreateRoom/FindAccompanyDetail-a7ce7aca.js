import{G as v,s as o,u as b,l as r,a as i,j as m}from"../../vendor-35a6e146.js";import{r as l}from"../../common-3ec6ebaa.js";function h(e){return v({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(e)}const p=e=>{const s=b();let c;if(e.index===0&&(c=r(n=>n.selecteditem.house)),e.index===1&&(c=r(n=>n.selecteditem.food)),e.index===2&&(c=r(n=>n.selecteditem.attraction)),!c)return i("div",{children:"카드가 선택되지 않았습니다."});const f=t=>{e.index===0&&s(l({category:"house",itemToRemove:{IMG:"",name:t}})),e.index===1&&s(l({category:"food",itemToRemove:{IMG:"",name:t}})),e.index===2&&s(l({category:"attraction",itemToRemove:{IMG:"",name:t}}))};return e.list!==void 0?i(x,{children:e.list.map((t,n)=>t.name===""?i("div",{},n):m(u,{index:e.index,children:[i(a,{src:t.IMG}),i(d,{children:t.name}),e.ischk&&i(g,{onClick:()=>f(t.name),children:i(h,{size:"30"})})]},n))}):i(x,{children:c.map((t,n)=>t.name===""?i("div",{},n):m(u,{index:e.index,children:[i(a,{src:t.IMG}),i(d,{children:t.name}),e.ischk&&i(g,{onClick:()=>f(t.name),children:i(h,{size:"30"})})]},n))})},x=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
`,a=o.img`
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-size: cover;
`,d=o.p`
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
  background-color: ${e=>{switch(e.index){case 0:return"#F0B86E";case 1:return"#9F91CC";case 2:return"#D4E2D4"}}};
  gap: 15px;
  margin-bottom: 20px;

  ${a} {
    background-color: #ffffff;
    border-radius: 100%;
    background-size: cover;
  }

  ${d} {
    font-size: 10px;
    font-weight: bold;
    color: black;
  }
`,g=o.div`
  position: absolute;
  top: -10px;
  right: -10px;
  border: 0;
  outline: 0;
`;export{p as P};
