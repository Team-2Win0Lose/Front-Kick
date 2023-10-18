import{R as s,_ as h,a as t,c as T,n as L,o as O,q as P,t as N,v as G,F as V,w as K,P as H,x as U,y as W,z as q,s as e,u as M,k as w,j as a,e as c,X,D as Y,E as A,l as J,H as Q,I as Z,J as ee,K as te,L as ne,M as oe,N as ie}from"./vendor-3ed0bc3f.js";import{m as ae,d as re,e as le,s as ce,S as de,f as se,h as I,i as me,j as pe,k as he,c as R,B as E,l as z,n as ue,o as ge,p as fe,q as xe,G as ye}from"./common-4ca9fc82.js";/* empty css                         */const be=s.lazy(()=>h(()=>import("./App-24424011.js"),["assets/App-24424011.js","assets/vendor-3ed0bc3f.js","assets/common-4ca9fc82.js","assets/react-toastify-74a02792.js","assets/react-toastify-55fec1ff.css"])),we=s.lazy(()=>h(()=>import("./EmailLogin-d1ce4d7b.js"),["assets/EmailLogin-d1ce4d7b.js","assets/vendor-3ed0bc3f.js","assets/react-hook-form-e1c6da34.js","assets/shared/EmailLogin/Signup-a92b5cf3.js","assets/common-4ca9fc82.js","assets/react-toastify-74a02792.js","assets/react-toastify-55fec1ff.css","assets/shared/EmailLogin/Login-42934734.js"])),ve=s.lazy(()=>h(()=>import("./Login-59740a6b.js"),["assets/Login-59740a6b.js","assets/vendor-3ed0bc3f.js","assets/shared/EmailLogin/Login-42934734.js"])),_e=s.lazy(()=>h(()=>import("./main-7a0e181b.js"),["assets/main-7a0e181b.js","assets/vendor-3ed0bc3f.js","assets/react-slick-aefab5e6.js","assets/common-4ca9fc82.js","assets/FindAccompany-98a3e02d.js","assets/shared/MyAccompany/main-66421448.js","assets/react-datepicker-d428ba04.css","assets/slick-carousel-8aeec13f.css"])),Ce=s.lazy(()=>h(()=>import("./Signup-949c1f6f.js"),["assets/Signup-949c1f6f.js","assets/vendor-3ed0bc3f.js","assets/react-hook-form-e1c6da34.js","assets/shared/EmailLogin/Signup-a92b5cf3.js","assets/common-4ca9fc82.js","assets/react-datepicker-d428ba04.css"])),ke=s.lazy(()=>h(()=>import("./Onboarding-85b8618f.js"),["assets/Onboarding-85b8618f.js","assets/vendor-3ed0bc3f.js","assets/shared/ModifyPersonalData/Onboarding-6bebb237.js","assets/react-slick-aefab5e6.js","assets/common-4ca9fc82.js","assets/slick-carousel-8aeec13f.css"])),Se=s.lazy(()=>h(()=>import("./FindAccompany-98a3e02d.js"),["assets/FindAccompany-98a3e02d.js","assets/vendor-3ed0bc3f.js","assets/common-4ca9fc82.js","assets/shared/MyAccompany/main-66421448.js","assets/react-datepicker-d428ba04.css"])),$e=s.lazy(()=>h(()=>import("./CreateRoom-22bef8fa.js"),["assets/CreateRoom-22bef8fa.js","assets/vendor-3ed0bc3f.js","assets/react-icons-ed999db8.js","assets/react-slick-aefab5e6.js","assets/common-4ca9fc82.js","assets/shared/CreateRoom/FindAccompanyDetail-508443cc.js","assets/react-toastify-74a02792.js","assets/react-toastify-55fec1ff.css","assets/slick-carousel-8aeec13f.css","assets/react-datepicker-d428ba04.css"])),Fe=s.lazy(()=>h(()=>import("./MyAccompany-2c8b1095.js"),["assets/MyAccompany-2c8b1095.js","assets/vendor-3ed0bc3f.js","assets/shared/MyAccompany/main-66421448.js","assets/common-4ca9fc82.js"])),Me=s.lazy(()=>h(()=>import("./AddCourse-787dd542.js"),["assets/AddCourse-787dd542.js","assets/vendor-3ed0bc3f.js","assets/AddCourse-5403a63a.js"])),Ie=s.lazy(()=>h(()=>import("./Id-bdfaa250.js"),["assets/Id-bdfaa250.js","assets/vendor-3ed0bc3f.js"])),je=s.lazy(()=>h(()=>import("./UserEmail-74a536a8.js"),["assets/UserEmail-74a536a8.js","assets/vendor-3ed0bc3f.js"])),Ae=s.lazy(()=>h(()=>import("./Password-f6c72aab.js"),["assets/Password-f6c72aab.js","assets/vendor-3ed0bc3f.js","assets/react-hook-form-e1c6da34.js"])),Re=s.lazy(()=>h(()=>import("./ManageAccompany-c7a915bc.js"),["assets/ManageAccompany-c7a915bc.js","assets/vendor-3ed0bc3f.js","assets/react-icons-ed999db8.js"])),Ee=s.lazy(()=>h(()=>import("./KakaoCallBack-e699c320.js"),["assets/KakaoCallBack-e699c320.js","assets/vendor-3ed0bc3f.js","assets/common-4ca9fc82.js"])),ze=s.lazy(()=>h(()=>import("./FindAccompanyDetail-b7538f26.js"),["assets/FindAccompanyDetail-b7538f26.js","assets/vendor-3ed0bc3f.js","assets/shared/CreateRoom/FindAccompanyDetail-508443cc.js","assets/common-4ca9fc82.js","assets/react-toastify-74a02792.js","assets/react-toastify-55fec1ff.css"])),De=s.lazy(()=>h(()=>import("./ModifyPersonalData-56965566.js"),["assets/ModifyPersonalData-56965566.js","assets/vendor-3ed0bc3f.js","assets/shared/ModifyPersonalData/Onboarding-6bebb237.js","assets/react-slick-aefab5e6.js","assets/common-4ca9fc82.js","assets/slick-carousel-8aeec13f.css"])),Te=[{path:"/",element:t(be,{}),children:[{index:!0,path:"/",element:t(_e,{}),label:"main"},{path:"/login",element:t(ve,{}),label:"Login"},{path:"/auth/kakao/callback",element:t(Ee,{}),label:"KakaoCallback"},{path:"/emaillogin",element:t(we,{}),label:"EmailLogin"},{path:"/find/id",element:t(Ie,{}),label:"FindId"},{path:"/find/useremail",element:t(je,{}),label:"UserEmail"},{path:"/find/password",element:t(Ae,{}),label:"FindPassword"},{path:"/signup",element:t(Ce,{}),label:"Signup"},{path:"/signup/onboarding",element:t(ke,{}),label:"Onboarding"},{path:"/findaccompany",element:t(Se,{}),label:"FindAccompany"},{path:"/findaccompany/detail/:recruitment_board_id",element:t(ze,{}),label:"FindAccompanyDetail"},{path:"/createroom",element:t($e,{}),label:"CreateRoom"},{path:"/myaccompany",element:t(Fe,{}),label:"Myaccompany"},{path:"/myaccompany/manage/:id",element:t(Re,{}),label:"ManageAccompany"},{path:"/addcourse",element:t(Me,{}),label:"AddCourse"},{path:"/mypage",element:t(De,{}),label:"AddCourse"}]}],j={mobile:"600px",tablet:"900px",laptop:"1200px",desktop:"1800px"},Be={mainColor:"#0a4297",mobile:`(max-width: ${j.mobile})`,tablet:`(max-width: ${j.tablet})`,laptop:`(max-width: ${j.laptop})`,desktop:`(min-width: ${j.desktop})`},Le={teamName:"",teamGrade:"",teamImg:"",location:"",teamStadium:"",totalMatching:""};let Oe=T({name:"team",initialState:Le,reducers:{register:(o,i)=>{o.teamName=i.payload.teamName,o.teamGrade=i.payload.teamGrade,o.teamImg=i.payload.teamImg,o.location=i.payload.location,o.teamStadium=i.payload.teamStadium,o.totalMatching=i.payload.totalMatching},deleteAction:o=>{o.teamName="",o.teamGrade="",o.location="",o.teamStadium="",o.totalMatching=""}}});const Pe=Oe.reducer,Ne={isAllChecked:!1};let Ge=T({name:"term",initialState:Ne,reducers:{isChecked:o=>{o.isAllChecked=!0},isNotChecked:o=>{o.isAllChecked=!1}}});const Ve=Ge.reducer,Ke={key:"root",storage:G,whitelist:["team","modal","term","auth","teamfilter","selecteditem","summary","accompany"]},He=L({team:Pe,modal:ae,term:Ve,auth:re,teamfilter:le,selecteditem:ce,summary:de,accompany:se}),Ue=O(Ke,He),B=P({reducer:Ue,middleware:o=>o({serializableCheck:{ignoredActions:[V,K,H,U,W,q]}})});N(B);const We=[{teamName:"울산 현대 축구단",teamImg:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png",teamGrade:1,teamStadium:"울산 문수축구경기장",location:"울산광역시",teamCardOwner:"999",totalMatching:"19392",currentMatching:190,follower:133},{teamName:"포항 스틸러스",teamImg:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png",teamGrade:2,teamStadium:"포항스틸야드",location:"포항시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:9,follower:133},{teamName:"FC 서울",teamImg:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.png",teamGrade:3,teamStadium:"서울월드컵경기장",location:"서울특별시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:6,follower:133},{teamName:"제주 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeju_united.png",teamGrade:4,teamStadium:"제주월드컵경기장",location:"제주특별자치도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"전북 현대 모터스",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png",teamGrade:5,teamStadium:"전주월드컵경기장",location:"전라북도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:112,follower:133},{teamName:"대구 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.png",teamGrade:6,teamStadium:"DGB 대구은행파크",location:"대구광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:972,follower:133},{teamName:"대전 하나 시티즌",teamImg:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png",teamGrade:7,teamStadium:"대전월드컵경기장",location:"대전광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"광주 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png",teamGrade:8,teamStadium:"광주축구전용구장",location:"광주광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"인천 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/incheon_united.png",teamGrade:9,teamStadium:"인천축구전용경기장",location:"인천광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.png",teamGrade:10,teamStadium:"수원종합운동장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"강원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png",teamGrade:11,teamStadium:"강릉종합운동장, 춘천 종합운동장",location:"강원도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 삼성 블루윙즈",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png",teamGrade:12,teamStadium:"수원월드컵경기장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133}],qe=o=>{const i=M(),m=w(r=>r.teamfilter.teamNames),d=r=>{m.includes(r)?i(me(r)):i(pe(r))},u=()=>{i(he()),console.log(m)};return a(Ye,{children:[t(Je,{children:We.map(r=>a(Qe,{backgroundColor:m.includes(r.teamName),onClick:()=>d(r.teamName),children:[t(Ze,{src:r.teamImg}),t(et,{children:r.teamName})]},r.teamGrade))}),a(Xe,{children:[t(D,{onClick:u,children:"필터 지우기"}),t(D,{onClick:()=>i(I()),children:"찾기"})]})]})},D=e.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #272727;
  color: white;
  border-radius: 12px;
`,Xe=e.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,Ye=e.div`
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
`,Je=e.div`
  width: 312px;
  padding: 300px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`,Qe=e.div`
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
`,Ze=e.img`
  width: 80px;
  height: 80px;
`,et=e.p`
  font-size: 10px;
  font-weight: bold;
`,tt=o=>{const[i,m]=c.useState([]),d=r=>{i.includes(r)?m(i.filter(g=>g!==r)):m([...i,r])},u=()=>{console.log(i)};return a(nt,{children:[a(ot,{children:[a(it,{onClick:()=>d("모집중"),children:[" ",i.includes("모집중")?"해제":"모집중"]}),a(rt,{onClick:()=>d("모집마감임박"),children:[" ",i.includes("모집마감임박")?"해제":"모집마감임박"]}),a(at,{onClick:()=>d("모집마감"),children:[" ",i.includes("모집마감")?"해제":"모집마감"]})," "]}),t("button",{onClick:u,children:"선택한 버튼 확인"})]})},nt=e.div`
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
`,ot=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,it=e.div`
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
`,at=e.div`
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
`,rt=e.div`
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
`,lt=o=>{const[i,m]=c.useState([null,null]),[d,u]=i,r=()=>{console.log(i.slice())};return a("div",{children:[t(ct,{locale:Y,dateFormat:"yyyy.MM.dd",dateFormatCalendar:"yyyy년 MM월",shouldCloseOnSelect:!0,closeOnScroll:!1,minDate:new Date,placeholderText:"날짜를 선택해주세요.",selectsRange:!0,startDate:d,endDate:u,onChange:g=>{g instanceof Date?m([g,g]):Array.isArray(g)&&m(g)},withPortal:!0}),t("button",{onClick:()=>r(),children:"구간 확인"})]})},ct=e(X)`
  width: 200%;
  height: 60px;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
`,dt=o=>t(st,{children:t(mt,{children:t(lt,{})})}),st=e.div`
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
`,mt=e.div`
  height: auto;
`,pt=o=>a(ht,{children:[t(ut,{children:t(gt,{})}),"`"]}),ht=e.div`
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
`;e.div`
  height: auto;
`;const ut=e.div`
  height:100%;
  overflow-x: hidden;
`,gt=e.div`
  display: flex;
  flex-direction: column;
`;e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;e.div`
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
`;e.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;e.div`
  font-size: 10px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
`;e.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;e.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;const ft=o=>{const i=w(n=>n.summary.stadium),m=w(n=>n.summary.homename),[d,u]=c.useState(""),r=n=>{n.preventDefault(),u(n.target.value)},[g,_]=c.useState(""),C=n=>{n.preventDefault(),_(d)},k=()=>{d===""&&alert("검색어를 입력해주세요.")},[f,S]=c.useState(),x=c.useCallback(async()=>{const l=await(await fetch(`${E}/api/tour_api/recommend/?team_id=${z(m)}&content_type_id=12`,{method:"GET"})).json();S(l)},[]);c.useEffect(()=>{x()},[x]);const y=M(),[p,b]=c.useState([]),$=n=>{p.some(l=>l.title===n.title)?b(p.filter(l=>l.title!==n.title)):b([...p,n])},F=()=>{p.length>0&&p.map(n=>y(ue(n)))};return a(xt,{children:[t(bt,{children:"관광지 코스 추가"}),t(wt,{children:t(vt,{children:t(_t,{children:t(St,{children:t($t,{children:t(Ct,{children:t(Ft,{onSubmit:C,children:a(Mt,{htmlFor:"place",className:"form__label",children:[t(It,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:r,placeholder:"가고싶은 장소를 검색해보세요!"}),t(jt,{children:t(kt,{className:"btn form__submit",type:"submit",value:"검색",onClick:k})})]})})})})})})})}),a(Rt,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),t(yt,{children:t(At,{children:f==null?void 0:f.item.map((n,l)=>t(Et,{children:t(Bt,{children:a(Dt,{children:[t(Pt,{children:t(Nt,{type:"checkbox",onChange:()=>{$(n)}})}),t(zt,{src:n.firstimage,alt:n.title}),a(Lt,{children:[t(Tt,{children:n.title}),t(Ot,{children:n.addr1})]})]})})},l))})}),t(Vt,{children:t(Gt,{onClick:()=>{F(),y(I())},children:"선택 완료"})})]})},xt=e.div`
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
  ${R.lessThan("mobile")`
    width: 100%;
    height:500%;
	`}
`,yt=e.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,bt=e.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,wt=e.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,vt=e.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,_t=e.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,Ct=e.div`
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
`,kt=e(A)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,St=e.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,$t=e.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;e.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const Ft=e.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,Mt=e.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,It=e.input`
  width: 1000px;
  height: 100%;
`,jt=e.div``;e.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const At=e.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Rt=e.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,Et=e.div`
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
`,zt=e.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,Dt=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Tt=e.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,Bt=e.div`
  display: flex;
  justify-content: space-between;
`,Lt=e.div`
  align-items: center;
`,Ot=e.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,Pt=e.div`
  margin-left: 10px;
`,Nt=e.input``,Gt=e.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,Vt=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Kt=o=>{const i=w(n=>n.summary.stadium),m=w(n=>n.summary.homename),[d,u]=c.useState(""),r=n=>{n.preventDefault(),u(n.target.value)},[g,_]=c.useState(""),C=n=>{n.preventDefault(),_(d)},k=()=>{d===""&&alert("검색어를 입력해주세요.")},[f,S]=c.useState(),x=c.useCallback(async()=>{const l=await(await fetch(`${E}/api/tour_api/recommend/?team_id=${z(m)}&content_type_id=39`,{method:"GET"})).json();S(l)},[]);c.useEffect(()=>{x()},[x]);const y=M(),[p,b]=c.useState([]),$=n=>{p.some(l=>l.title===n.title)?b(p.filter(l=>l.title!==n.title)):b([...p,n])},F=()=>{p.length>0&&p.map(n=>y(ge(n)))};return a(Ht,{children:[t(Wt,{children:"음식점 코스 추가"}),t(qt,{children:t(Xt,{children:t(Yt,{children:t(Zt,{children:t(en,{children:t(Jt,{children:t(tn,{onSubmit:C,children:a(nn,{htmlFor:"place",className:"form__label",children:[t(on,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:r,placeholder:"가고싶은 장소를 검색해보세요!"}),t(an,{children:t(Qt,{className:"btn form__submit",type:"submit",value:"검색",onClick:k})})]})})})})})})})}),a(ln,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),t(Ut,{children:t(rn,{children:f==null?void 0:f.item.map((n,l)=>t(cn,{children:t(pn,{children:a(sn,{children:[t(gn,{children:t(fn,{type:"checkbox",onChange:()=>{$(n)}})}),t(dn,{src:n.firstimage,alt:n.title}),a(hn,{children:[t(mn,{children:n.title}),t(un,{children:n.addr1})]})]})})},l))})}),t(yn,{children:t(xn,{onClick:()=>{F(),y(I())},children:"선택 완료"})})]})},Ht=e.div`
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
  ${R.lessThan("mobile")`
    width: 100%;
    height:500%;
	`}
`,Ut=e.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,Wt=e.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,qt=e.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Xt=e.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Yt=e.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,Jt=e.div`
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
`,Qt=e(A)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,Zt=e.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,en=e.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;e.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const tn=e.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,nn=e.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,on=e.input`
  width: 1000px;
  height: 100%;
`,an=e.div``;e.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const rn=e.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,ln=e.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,cn=e.div`
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
`,dn=e.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,sn=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,mn=e.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,pn=e.div`
  display: flex;
  justify-content: space-between;
`,hn=e.div`
  align-items: center;
`,un=e.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,gn=e.div`
  margin-left: 10px;
`,fn=e.input``,xn=e.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,yn=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,bn=o=>{const i=w(n=>n.summary.stadium),m=w(n=>n.summary.homename),[d,u]=c.useState(""),r=n=>{n.preventDefault(),u(n.target.value)},[g,_]=c.useState(""),C=n=>{n.preventDefault(),_(d)},k=()=>{d===""&&alert("검색어를 입력해주세요.")},[f,S]=c.useState(),x=c.useCallback(async()=>{const l=await(await fetch(`${E}/api/tour_api/recommend/?team_id=${z(m)}&content_type_id=32`,{method:"GET"})).json();S(l)},[]);c.useEffect(()=>{x()},[x]);const y=M(),[p,b]=c.useState([]),$=n=>{p.some(l=>l.title===n.title)?b(p.filter(l=>l.title!==n.title)):b([...p,n])},F=()=>{p.length>0&&p.map(n=>y(fe(n)))};return a(wn,{children:[t(_n,{children:"숙박 코스 추가"}),t(Cn,{children:t(kn,{children:t(Sn,{children:t(Mn,{children:t(In,{children:t($n,{children:t(jn,{onSubmit:C,children:a(An,{htmlFor:"place",className:"form__label",children:[t(Rn,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:r,placeholder:"가고싶은 장소를 검색해보세요!"}),t(En,{children:t(Fn,{className:"btn form__submit",type:"submit",value:"검색",onClick:k})})]})})})})})})})}),a(Dn,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),t(vn,{children:t(zn,{children:f==null?void 0:f.item.map((n,l)=>t(Tn,{children:t(Pn,{children:a(Ln,{children:[t(Vn,{children:t(Kn,{type:"checkbox",onChange:()=>{$(n)}})}),t(Bn,{src:n.firstimage,alt:n.title}),a(Nn,{children:[t(On,{children:n.title}),t(Gn,{children:n.addr1})]})]})})},l))})}),t(Un,{children:t(Hn,{onClick:()=>{F(),y(I())},children:"선택 완료"})})]})},wn=e.div`
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
  ${R.lessThan("mobile")`
    width:100%;
    height:500%;
	`}
`,vn=e.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,_n=e.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,Cn=e.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,kn=e.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Sn=e.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,$n=e.div`
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
`,Fn=e(A)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,Mn=e.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,In=e.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;e.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const jn=e.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,An=e.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,Rn=e.input`
  width: 1000px;
  height: 100%;
`,En=e.div``;e.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const zn=e.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,Dn=e.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,Tn=e.div`
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
`,Bn=e.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,Ln=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,On=e.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,Pn=e.div`
  display: flex;
  justify-content: space-between;
`,Nn=e.div`
  align-items: center;
`,Gn=e.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,Vn=e.div`
  margin-left: 10px;
`,Kn=e.input``,Hn=e.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,Un=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,v={TeamModal:"TeamModal",DateModal:"DateModal",CruitModal:"CruitModal",TeamCardModal:"TeamCardModal",AttractionSearchModal:"AttractionSearchModal",FoodSearchModal:"FoodSearchModal",HouseSearchModal:"HouseSearchModal"},Wn=[{type:v.TeamModal,component:t(qe,{})},{type:v.DateModal,component:t(dt,{})},{type:v.CruitModal,component:t(tt,{})},{type:v.TeamCardModal,component:t(pt,{})},{type:v.AttractionSearchModal,component:t(ft,{})},{type:v.FoodSearchModal,component:t(Kt,{})},{type:v.HouseSearchModal,component:t(bn,{})}],qn=o=>{const{modalType:i,isOpen:m}=w(xe),d=M();if(!m)return null;const u=Wn.find(g=>g.type===i);return a(Xn,{children:[t(Yn,{onClick:()=>d(I())}),(()=>u==null?void 0:u.component)()]})},Xn=e.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`,Yn=e.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;J.defaults.withCredentials=!0;const Jn=Q(Te),Qn=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;Z.createRoot(document.getElementById("root")).render(t(ee,{store:B,children:t(s.Suspense,{fallback:t(Qn,{children:t(te,{color:"#1f1f45",size:"50"})}),children:t(ne,{children:a(oe,{theme:Be,children:[t(ye,{}),t(qn,{}),t(ie,{router:Jn})]})})})}));
