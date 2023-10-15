import{a3 as b,d as x,a as t,j as n,s as i}from"./vendor-35a6e146.js";import{P as l}from"./shared/CreateRoom/FindAccompanyDetail-a7ce7aca.js";import{ar as y}from"./common-3ec6ebaa.js";/* empty css                       */const L=()=>{const{postId:p}=b(),[e,u]=x.useState();return x.useEffect(()=>{async function c(){try{const a=await y(p);u(a)}catch(a){console.error("Error : ",a)}}c()},[p]),e===void 0?t("div",{children:"Loading..."}):n(v,{children:[t(w,{children:t(I,{src:e.data.data.img,alt:"선택한 배경 사진이 없습니다.(No Image)"})}),t(j,{children:e.data.data.title}),n(r,{children:[t(o,{children:"🔥 매치 정보"}),t(k,{children:n(m,{children:[n(f,{children:[t(s,{children:t(h,{children:e.data.data.date})}),t(s,{children:t(h,{children:e.data.data.stadium})})]}),t(g,{children:n(d,{children:[" ",e.data.data.homename," vs ",e.data.data.awayname," "]})})]})})]}),n(r,{children:[t(o,{children:"🔥 동행 정보"}),t(C,{children:n(m,{children:[t(f,{children:n(s,{children:[t(d,{children:"희망 인원 "}),n(d,{children:[" ",e.data.data.minNum," ~ ",e.data.data.maxNum," 명"]})]})}),n(g,{children:[n(d,{children:[" ","동행 장소 ",e.data.data.meetingPlace," ",e.data.detailMeetingPlace]}),n(d,{children:[" 동행 기간 ",e.data.data.term," "]})]})]})})]}),n(r,{children:[t(o,{children:"🔥 태그 정보"}),t(F,{children:e.data.data.tag.map((c,a)=>t(T,{children:c},a))})]}),n(r,{children:[t(o,{children:"🔥 카드 정보"}),t(P,{children:t(A,{children:n(E,{children:[e.data.data.cardInfo.house.length>0&&t(l,{index:0,ischk:!1,list:e.data.data.cardInfo.house}),e.data.data.cardInfo.food.length>0&&t(l,{index:1,ischk:!1,list:e.data.data.cardInfo.food}),e.data.data.cardInfo.attraction.length>0&&t(l,{index:2,ischk:!1,list:e.data.data.cardInfo.attraction})]})})})]}),t(z,{children:e.data.data.content})]})},v=i.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,r=i.div`
  justify-content: left;
  align-items: left;
`,w=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
`,I=i.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`,j=i.div`
  justify-content: left;
  align-items: center;
  margin-bottom: 20px;
  width: 300px;
  padding: 10px;
  font-size: 25px;
  /* border: none;
  outline: none;
  border-radius: 10px;
  border: 1px solid #ccc; */
`,k=i.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,h=i.div`
  font-size: 12px;
  padding: 5px;
  font-weight: bold;
  text-align: left;
`,s=i.div`
  align-items: center;
  gap: 10px;
`,o=i.div`
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 10px;
`,d=i.div`
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,m=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,f=i.div`
  justify-content: left;
  align-items: center;
`,g=i.div`
  gap: 15px;
`,C=i.div`
  flex-shrink: 0;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
`,F=i.div`
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 300px;
`,T=i.div`
  background-color: #1f1f45;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
`,z=i.div`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 15px;
  line-height: 1.3;
  /* border: none;
  outline: none; */
`,P=i.div`
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 300px;
  height: 200px;
`,E=i.div`
  display: flex;
`,A=i.div`
  max-height: 200px;
  overflow-y: auto;
  /* Chrome 브라우저 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 2px;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 2px;
  }
`;export{L as default};
