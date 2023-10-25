import{R as s,_ as h,a as e,c as X,n as Q,o as Z,q as ee,t as te,v as ne,F as oe,w as ie,P as ae,x as re,y as le,z as ce,s as t,u as I,k as C,j as r,e as c,X as de,D as se,E as z,Q as me,l as pe,H as he,I as ue,J as ge,K as fe,L as xe,M as ye,N as be}from"./vendor-3c23d344.js";import{m as we,d as ve,e as _e,s as Ce,S as ke,f as Se,h as A,i as $e,j as Fe,k as Me,c as T,B as R,l as B,n as je,o as Ie,p as Ae,q as Ee,G as Re}from"./common-6abcfddc.js";const ze=s.lazy(()=>h(()=>import("./App-ee171f46.js"),["assets/App-ee171f46.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/common-6abcfddc.js"])),Te=s.lazy(()=>h(()=>import("./EmailLogin-1ea80cf9.js"),["assets/EmailLogin-1ea80cf9.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/react-hook-form-8ab4f686.js","assets/shared/EmailLogin/Signup-a339ff61.js","assets/common-6abcfddc.js","assets/shared/EmailLogin/Login-216f256d.js"])),Be=s.lazy(()=>h(()=>import("./Login-b283ffd6.js"),["assets/Login-b283ffd6.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/shared/EmailLogin/Login-216f256d.js","assets/common-6abcfddc.js"])),De=s.lazy(()=>h(()=>import("./main-c9defeb4.js"),["assets/main-c9defeb4.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/react-slick-e8cc0b22.js","assets/common-6abcfddc.js","assets/FindAccompany-5949395f.js","assets/shared/MyAccompany/main-467c4813.js","assets/slick-carousel-8aeec13f.css"])),Le=s.lazy(()=>h(()=>import("./Signup-6a032fc8.js"),["assets/Signup-6a032fc8.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/react-hook-form-8ab4f686.js","assets/shared/EmailLogin/Signup-a339ff61.js","assets/common-6abcfddc.js"])),Oe=s.lazy(()=>h(()=>import("./Onboarding-d8592e20.js"),["assets/Onboarding-d8592e20.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/shared/ModifyPersonalData/Onboarding-796c57e7.js","assets/react-slick-e8cc0b22.js","assets/common-6abcfddc.js","assets/slick-carousel-8aeec13f.css"])),Pe=s.lazy(()=>h(()=>import("./FindAccompany-5949395f.js"),["assets/FindAccompany-5949395f.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/common-6abcfddc.js","assets/shared/MyAccompany/main-467c4813.js"])),Ne=s.lazy(()=>h(()=>import("./CreateRoom-d45ca5f7.js"),["assets/CreateRoom-d45ca5f7.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/react-slick-e8cc0b22.js","assets/common-6abcfddc.js","assets/shared/CreateRoom/FindAccompanyDetail-25bd7f0f.js","assets/slick-carousel-8aeec13f.css"])),Ge=s.lazy(()=>h(()=>import("./MyAccompany-9fe74e38.js"),["assets/MyAccompany-9fe74e38.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/shared/MyAccompany/main-467c4813.js","assets/common-6abcfddc.js"])),Ve=s.lazy(()=>h(()=>import("./AddCourse-b083e64d.js"),["assets/AddCourse-b083e64d.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/AddCourse-f2fbabeb.js"])),Ke=s.lazy(()=>h(()=>import("./Id-57823c47.js"),["assets/Id-57823c47.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css"])),He=s.lazy(()=>h(()=>import("./UserEmail-d6692b1f.js"),["assets/UserEmail-d6692b1f.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css"])),Ue=s.lazy(()=>h(()=>import("./Password-383e3029.js"),["assets/Password-383e3029.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/react-hook-form-8ab4f686.js"])),We=s.lazy(()=>h(()=>import("./ManageAccompany-db243b59.js"),["assets/ManageAccompany-db243b59.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css"])),qe=s.lazy(()=>h(()=>import("./KakaoCallBack-ab7e66f7.js"),["assets/KakaoCallBack-ab7e66f7.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/common-6abcfddc.js"])),Xe=s.lazy(()=>h(()=>import("./FindAccompanyDetail-b77826b9.js"),["assets/FindAccompanyDetail-b77826b9.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/shared/CreateRoom/FindAccompanyDetail-25bd7f0f.js","assets/common-6abcfddc.js"])),Ye=s.lazy(()=>h(()=>import("./ModifyPersonalData-64d84535.js"),["assets/ModifyPersonalData-64d84535.js","assets/vendor-3c23d344.js","assets/vendor-fed1d6d0.css","assets/shared/ModifyPersonalData/Onboarding-796c57e7.js","assets/react-slick-e8cc0b22.js","assets/common-6abcfddc.js","assets/slick-carousel-8aeec13f.css"])),Je=[{path:"/",element:e(ze,{}),children:[{index:!0,path:"/",element:e(De,{}),label:"main"},{path:"/login",element:e(Be,{}),label:"Login"},{path:"/auth/kakao/callback",element:e(qe,{}),label:"KakaoCallback"},{path:"/emaillogin",element:e(Te,{}),label:"EmailLogin"},{path:"/find/id",element:e(Ke,{}),label:"FindId"},{path:"/find/useremail",element:e(He,{}),label:"UserEmail"},{path:"/find/password",element:e(Ue,{}),label:"FindPassword"},{path:"/signup",element:e(Le,{}),label:"Signup"},{path:"/signup/onboarding",element:e(Oe,{}),label:"Onboarding"},{path:"/findaccompany",element:e(Pe,{}),label:"FindAccompany"},{path:"/findaccompany/detail/:recruitment_board_id",element:e(Xe,{}),label:"FindAccompanyDetail"},{path:"/createroom",element:e(Ne,{}),label:"CreateRoom"},{path:"/myaccompany",element:e(Ge,{}),label:"Myaccompany"},{path:"/myaccompany/manage/:id",element:e(We,{}),label:"ManageAccompany"},{path:"/addcourse",element:e(Ve,{}),label:"AddCourse"},{path:"/mypage",element:e(Ye,{}),label:"AddCourse"}]}],E={mobile:"600px",tablet:"900px",laptop:"1200px",desktop:"1800px"},Qe={mainColor:"#0a4297",mobile:`(max-width: ${E.mobile})`,tablet:`(max-width: ${E.tablet})`,laptop:`(max-width: ${E.laptop})`,desktop:`(min-width: ${E.desktop})`},Ze={teamName:"",teamGrade:"",teamImg:"",location:"",teamStadium:"",totalMatching:""};let et=X({name:"team",initialState:Ze,reducers:{register:(o,i)=>{o.teamName=i.payload.teamName,o.teamGrade=i.payload.teamGrade,o.teamImg=i.payload.teamImg,o.location=i.payload.location,o.teamStadium=i.payload.teamStadium,o.totalMatching=i.payload.totalMatching},deleteAction:o=>{o.teamName="",o.teamGrade="",o.location="",o.teamStadium="",o.totalMatching=""}}});const tt=et.reducer,nt={isAllChecked:!1};let ot=X({name:"term",initialState:nt,reducers:{isChecked:o=>{o.isAllChecked=!0},isNotChecked:o=>{o.isAllChecked=!1}}});const it=ot.reducer,at={key:"root",storage:ne,whitelist:["team","modal","term","auth","teamfilter","selecteditem","summary","accompany"]},rt=Q({team:tt,modal:we,term:it,auth:ve,teamfilter:_e,selecteditem:Ce,summary:ke,accompany:Se}),lt=Z(at,rt),Y=ee({reducer:lt,middleware:o=>o({serializableCheck:{ignoredActions:[oe,ie,ae,re,le,ce]}})});te(Y);const ct=[{teamName:"울산 현대 축구단",teamImg:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png",teamGrade:1,teamStadium:"울산 문수축구경기장",location:"울산광역시",teamCardOwner:"999",totalMatching:"19392",currentMatching:190,follower:133},{teamName:"포항 스틸러스",teamImg:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png",teamGrade:2,teamStadium:"포항스틸야드",location:"포항시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:9,follower:133},{teamName:"FC 서울",teamImg:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.png",teamGrade:3,teamStadium:"서울월드컵경기장",location:"서울특별시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:6,follower:133},{teamName:"제주 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeju_united.png",teamGrade:4,teamStadium:"제주월드컵경기장",location:"제주특별자치도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"전북 현대 모터스",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png",teamGrade:5,teamStadium:"전주월드컵경기장",location:"전라북도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:112,follower:133},{teamName:"대구 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.png",teamGrade:6,teamStadium:"DGB 대구은행파크",location:"대구광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:972,follower:133},{teamName:"대전 하나 시티즌",teamImg:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png",teamGrade:7,teamStadium:"대전월드컵경기장",location:"대전광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"광주 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png",teamGrade:8,teamStadium:"광주축구전용구장",location:"광주광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"인천 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/incheon_united.png",teamGrade:9,teamStadium:"인천축구전용경기장",location:"인천광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.png",teamGrade:10,teamStadium:"수원종합운동장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"강원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png",teamGrade:11,teamStadium:"강릉종합운동장, 춘천 종합운동장",location:"강원도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 삼성 블루윙즈",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png",teamGrade:12,teamStadium:"수원월드컵경기장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133}],dt=o=>{const i=I(),m=C(l=>l.teamfilter.teamNames),d=l=>{m.includes(l)?i($e(l)):i(Fe(l))},u=()=>{i(Me()),console.log(m)};return r(mt,{children:[e(pt,{children:ct.map(l=>r(ht,{backgroundColor:m.includes(l.teamName),onClick:()=>d(l.teamName),children:[e(ut,{src:l.teamImg}),e(gt,{children:l.teamName})]},l.teamGrade))}),r(st,{children:[e(D,{onClick:u,children:"필터 지우기"}),e(D,{onClick:()=>i(A()),children:"찾기"})]})]})},D=t.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #272727;
  color: white;
  border-radius: 12px;
`,st=t.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,mt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: absolute; */
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
  gap: 10px;
`,pt=t.div`
  width: 312px;
  padding: 300px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`,ht=t.div`
  padding: 10px;
  width: 140px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${o=>o.backgroundColor?"#A4BBF9":"white"};
  border: ${o=>o.backgroundColor?"1px solid #fff":"1px solid #d9d9d9"};
  color: ${o=>o.backgroundColor?"white":"black"};
`,ut=t.img`
  width: 80px;
  height: 80px;
`,gt=t.p`
  font-size: 10px;
  font-weight: bold;
`,ft=o=>{const[i,m]=c.useState([]),d=l=>{i.includes(l)?m(i.filter(g=>g!==l)):m([...i,l])},u=()=>{console.log(i)};return r(xt,{children:[r(yt,{children:[r(bt,{onClick:()=>d("모집중"),children:[" ",i.includes("모집중")?"해제":"모집중"]}),r(vt,{onClick:()=>d("모집마감임박"),children:[" ",i.includes("모집마감임박")?"해제":"모집마감임박"]}),r(wt,{onClick:()=>d("모집마감"),children:[" ",i.includes("모집마감")?"해제":"모집마감"]})," "]}),e("button",{onClick:u,children:"선택한 버튼 확인"})]})},xt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  width: auto;
  height: 25%;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
  gap: 10px;
`,yt=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,bt=t.div`
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: green;
  color: white;
`,wt=t.div`
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: black;
  color: white;
`,vt=t.div`
  width: 80px;
  height: 30px;
  border: 1px solid white;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: red;
  color: white;
`,_t=o=>{const[i,m]=c.useState([null,null]),[d,u]=i,l=()=>{console.log(i.slice())};return r("div",{children:[e(Ct,{locale:se,dateFormat:"yyyy.MM.dd",dateFormatCalendar:"yyyy년 MM월",shouldCloseOnSelect:!0,closeOnScroll:!1,minDate:new Date,placeholderText:"날짜를 선택해주세요.",selectsRange:!0,startDate:d,endDate:u,onChange:g=>{g instanceof Date?m([g,g]):Array.isArray(g)&&m(g)},withPortal:!0}),e("button",{onClick:()=>l(),children:"구간 확인"})]})},Ct=t(de)`
  width: 200%;
  height: 60px;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
`,kt=o=>e(St,{children:e($t,{children:e(_t,{})})}),St=t.div`
  display: flex;

  position: absolute;
  width: 80%;
  height: 547px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
`,$t=t.div`
  height: auto;
`,Ft=o=>r(Mt,{children:[e(jt,{children:e(It,{})}),"`"]}),Mt=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  height: 300px;
  background-color: #fff;
  border: none;
  z-index: 10000;
  padding: 50px 24px;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  border-radius: 12px;
`;t.div`
  height: auto;
`;const jt=t.div`
  height:100%;
  overflow-x: hidden;
`,It=t.div`
  display: flex;
  flex-direction: column;
`;t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background: #eeeeee;
  border-radius: 50%;
  margin-top: 15%;
  margin-bottom: 5%;
  overflow: hidden;
`;t.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;t.div`
  font-size: 10px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
`;t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;t.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;const At=o=>{const i=C(n=>n.summary.stadium),m=C(n=>n.summary.homename),[d,u]=c.useState(""),l=n=>{n.preventDefault(),u(n.target.value)},[g,F]=c.useState(""),y=n=>{n.preventDefault(),F(d)},M=()=>{d===""&&alert("검색어를 입력해주세요.")},[b,j]=c.useState(),w=c.useCallback(async()=>{const p=await(await fetch(`${R}/api/tour_api/recommend/?team_id=${B(m)}&content_type_id=12`,{method:"GET"})).json();j(p)},[]);c.useEffect(()=>{w()},[w]);const k=I(),[f,_]=c.useState([]),v=n=>{f.some(p=>p.title===n.title)?_(f.filter(p=>p.title!==n.title)):_([...f,n])},$=()=>{f.length>0&&f.map(n=>k(je(n)))};return r(Et,{children:[e(zt,{children:"관광지 코스 추가"}),e(Tt,{children:e(Bt,{children:e(Dt,{children:e(Pt,{children:e(Nt,{children:e(Lt,{children:e(Gt,{onSubmit:y,children:r(Vt,{htmlFor:"place",className:"form__label",children:[e(Kt,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:l,placeholder:"가고싶은 장소를 검색해보세요!"}),e(Ht,{children:e(Ot,{className:"btn form__submit",type:"submit",value:"검색",onClick:M})})]})})})})})})})}),r(Wt,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),e(Rt,{children:e(Ut,{children:b==null?void 0:b.item.map((n,p)=>e(qt,{children:e(Qt,{children:r(Yt,{children:[e(tn,{children:e(nn,{type:"checkbox",onChange:()=>{v(n)}})}),e(Xt,{src:n.firstimage,alt:n.title}),r(Zt,{children:[e(Jt,{children:n.title}),e(en,{children:n.addr1})]})]})})},p))})}),e(an,{children:e(on,{onClick:()=>{$(),k(A())},children:"선택 완료"})})]})},Et=t.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 40%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  z-index: 100;
  ${T.lessThan("mobile")`
    width: 100%;
    height:500%;
	`}
`,Rt=t.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,zt=t.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,Tt=t.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Bt=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Dt=t.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,Lt=t.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  /* margin-bottom:40px; */
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 320px;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 14px;
  }
`,Ot=t(z)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,Pt=t.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Nt=t.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;t.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const Gt=t.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,Vt=t.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,Kt=t.input`
  width: 1000px;
  height: 100%;
`,Ht=t.div``;t.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const Ut=t.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Wt=t.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,qt=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
`,Xt=t.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,Yt=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Jt=t.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,Qt=t.div`
  display: flex;
  justify-content: space-between;
`,Zt=t.div`
  align-items: center;
`,en=t.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,tn=t.div`
  margin-left: 10px;
`,nn=t.input``,on=t.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,an=t.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,rn=o=>{const i=C(a=>a.summary.stadium),m=C(a=>a.summary.homename),[d,u]=c.useState(""),l=a=>{a.preventDefault(),u(a.target.value)},[g,F]=c.useState(null),[y,M]=c.useState();c.useEffect(()=>{async function a(){try{const J=await(await fetch(`${R}/api/tour_api/keyword/?keyword=${g}&content_type_id=39`,{method:"get"})).json();M(J)}catch{me.error("에러 발생")}}a()},[g]);const b=a=>{a.preventDefault(),F(d)},j=()=>{d===""&&alert("검색어를 입력해주세요.")},[w,k]=c.useState(),f=c.useCallback(async()=>{const x=await(await fetch(`${R}/api/tour_api/recommend/?team_id=${B(m)}&content_type_id=39`,{method:"GET"})).json();k(x)},[]);c.useEffect(()=>{f()},[f]);const _=I(),[v,$]=c.useState([]),n=a=>{v.some(x=>x.title===a.title)?$(v.filter(x=>x.title!==a.title)):$([...v,a])},p=()=>{v.length>0&&v.map(a=>_(Ie(a)))};return r(ln,{children:[e(cn,{children:"음식점 코스 추가"}),e(dn,{children:e(sn,{children:e(mn,{children:e(un,{children:e(gn,{children:e(pn,{children:e(fn,{onSubmit:b,children:r(xn,{htmlFor:"place",className:"form__label",children:[e(yn,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:l,placeholder:"가고싶은 장소를 검색해보세요!"}),e(bn,{children:e(hn,{className:"btn form__submit",type:"submit",value:"검색",onClick:j})})]})})})})})})})}),r(wn,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),e(L,{children:e(O,{children:w==null?void 0:w.item.map((a,x)=>e(P,{children:e(K,{children:r(G,{children:[e(W,{children:e(q,{type:"checkbox",onChange:()=>{n(a)}})}),e(N,{src:a.firstimage,alt:a.title}),r(H,{children:[e(V,{children:a.title}),e(U,{children:a.addr1})]})]})})},x))})}),e(L,{children:e(O,{children:(y==null?void 0:y.item)&&(y==null?void 0:y.item.map((a,x)=>e(P,{children:e(K,{children:r(G,{children:[e(W,{children:e(q,{type:"checkbox",onChange:()=>{n(a)}})}),e(N,{src:a.firstimage,alt:a.title}),r(H,{children:[e(V,{children:a.title}),e(U,{children:a.addr1})]})]})})},x)))})}),e(_n,{children:e(vn,{onClick:()=>{p(),_(A())},children:"선택 완료"})})]})},ln=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 50%;
  height: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
  z-index: 100;
  ${T.lessThan("mobile")`
    width: 100%;
    height:500%;
	`}
`,L=t.div`
  padding: 10px 0;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,cn=t.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 550px;
  margin-bottom: 10px;
`,dn=t.div`
  margin: 10px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  /* gap: 30px; */
`,sn=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,mn=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
`,pn=t.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  /* margin-bottom:40px; */
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 320px;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 14px;
  }
`,hn=t(z)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,un=t.div`
  width: 100%;
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,gn=t.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;t.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const fn=t.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,xn=t.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,yn=t.input`
  width: 1000px;
  height: 100%;
`,bn=t.div``;t.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const O=t.div`
  height: auto;
  margin: 0 auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
`,wn=t.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,P=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  /* margin-bottom: 10px; */
`,N=t.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,G=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,V=t.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,K=t.div`
  display: flex;
  justify-content: space-between;
`,H=t.div`
  align-items: center;
`,U=t.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,W=t.div`
  margin-left: 10px;
`,q=t.input``,vn=t.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,_n=t.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Cn=o=>{const i=C(n=>n.summary.stadium),m=C(n=>n.summary.homename),[d,u]=c.useState(""),l=n=>{n.preventDefault(),u(n.target.value)},[g,F]=c.useState(""),y=n=>{n.preventDefault(),F(d)},M=()=>{d===""&&alert("검색어를 입력해주세요.")},[b,j]=c.useState(),w=c.useCallback(async()=>{const p=await(await fetch(`${R}/api/tour_api/recommend/?team_id=${B(m)}&content_type_id=32`,{method:"GET"})).json();j(p)},[]);c.useEffect(()=>{w()},[w]);const k=I(),[f,_]=c.useState([]),v=n=>{f.some(p=>p.title===n.title)?_(f.filter(p=>p.title!==n.title)):_([...f,n])},$=()=>{f.length>0&&f.map(n=>k(Ae(n)))};return r(kn,{children:[e($n,{children:"숙박 코스 추가"}),e(Fn,{children:e(Mn,{children:e(jn,{children:e(En,{children:e(Rn,{children:e(In,{children:e(zn,{onSubmit:y,children:r(Tn,{htmlFor:"place",className:"form__label",children:[e(Bn,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:l,placeholder:"가고싶은 장소를 검색해보세요!"}),e(Dn,{children:e(An,{className:"btn form__submit",type:"submit",value:"검색",onClick:M})})]})})})})})})})}),r(On,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),e(Sn,{children:e(Ln,{children:b==null?void 0:b.item.map((n,p)=>e(Pn,{children:e(Kn,{children:r(Gn,{children:[e(Wn,{children:e(qn,{type:"checkbox",onChange:()=>{v(n)}})}),e(Nn,{src:n.firstimage,alt:n.title}),r(Hn,{children:[e(Vn,{children:n.title}),e(Un,{children:n.addr1})]})]})})},p))})}),e(Yn,{children:e(Xn,{onClick:()=>{$(),k(A())},children:"선택 완료"})})]})},kn=t.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 40%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  z-index: 100;
  ${T.lessThan("mobile")`
    width:100%;
    height:500%;
	`}
`,Sn=t.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,$n=t.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,Fn=t.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Mn=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,jn=t.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,In=t.div`
  width: 100%;
  height: 50px;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 10px;
  /* margin-bottom:40px; */
  flex-shrink: 0;
  border-radius: 14.163px;
  /* background: #1F1F45; */
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 320px;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 14px;
  }
`,An=t(z)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,En=t.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Rn=t.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;t.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const zn=t.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,Tn=t.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,Bn=t.input`
  width: 1000px;
  height: 100%;
`,Dn=t.div``;t.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const Ln=t.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,On=t.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,Pn=t.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  background: #eeeeee;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
`,Nn=t.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,Gn=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Vn=t.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,Kn=t.div`
  display: flex;
  justify-content: space-between;
`,Hn=t.div`
  align-items: center;
`,Un=t.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,Wn=t.div`
  margin-left: 10px;
`,qn=t.input``,Xn=t.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,Yn=t.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,S={TeamModal:"TeamModal",DateModal:"DateModal",CruitModal:"CruitModal",TeamCardModal:"TeamCardModal",AttractionSearchModal:"AttractionSearchModal",FoodSearchModal:"FoodSearchModal",HouseSearchModal:"HouseSearchModal"},Jn=[{type:S.TeamModal,component:e(dt,{})},{type:S.DateModal,component:e(kt,{})},{type:S.CruitModal,component:e(ft,{})},{type:S.TeamCardModal,component:e(Ft,{})},{type:S.AttractionSearchModal,component:e(At,{})},{type:S.FoodSearchModal,component:e(rn,{})},{type:S.HouseSearchModal,component:e(Cn,{})}],Qn=o=>{const{modalType:i,isOpen:m}=C(Ee),d=I();if(!m)return null;const u=Jn.find(g=>g.type===i);return r(Zn,{children:[e(eo,{onClick:()=>d(A())}),(()=>u==null?void 0:u.component)()]})},Zn=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`,eo=t.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;pe.defaults.withCredentials=!0;const to=he(Je),no=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;ue.createRoot(document.getElementById("root")).render(e(ge,{store:Y,children:e(s.Suspense,{fallback:e(no,{children:e(fe,{color:"#1f1f45",size:"50"})}),children:e(xe,{children:r(ye,{theme:Qe,children:[e(Re,{}),e(Qn,{}),e(be,{router:to})]})})})}));
