import{R as s,_ as h,a as t,c as B,m as T,n as L,o as O,q as P,t as N,F as G,v as V,P as K,w as H,x as U,y as W,s as e,u as M,b as w,j as a,f as c,X,z as Y,B as A,l as q,D as J,E as Q,H as Z,I as ee,J as te,L as ne,K as oe}from"./vendor-6e44eb02.js";import{m as ie,a as ae,b as re,s as le,S as ce,d as de,e as I,f as se,h as me,i as pe,B as R,j as E,k as he,l as ue,n as ge,o as fe,G as xe}from"./common-96e4c6f2.js";const ye=s.lazy(()=>h(()=>import("./App-cd0ba811.js"),["assets/App-cd0ba811.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/common-96e4c6f2.js"])),be=s.lazy(()=>h(()=>import("./EmailLogin-bd5d3737.js"),["assets/EmailLogin-bd5d3737.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/react-hook-form-a904dda8.js","assets/shared/EmailLogin/Signup-2d670fe8.js","assets/common-96e4c6f2.js","assets/shared/EmailLogin/Login-50333407.js"])),we=s.lazy(()=>h(()=>import("./Login-ac2c1c22.js"),["assets/Login-ac2c1c22.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/shared/EmailLogin/Login-50333407.js"])),ve=s.lazy(()=>h(()=>import("./main-399ee6ff.js"),["assets/main-399ee6ff.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/react-slick-bbe54c8b.js","assets/common-96e4c6f2.js","assets/FindAccompany-4f198899.js","assets/shared/FindAccompanyDetail/main-7b65b9c7.js","assets/slick-carousel-8aeec13f.css"])),_e=s.lazy(()=>h(()=>import("./Signup-2da6acd2.js"),["assets/Signup-2da6acd2.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/react-hook-form-a904dda8.js","assets/shared/EmailLogin/Signup-2d670fe8.js","assets/common-96e4c6f2.js"])),Ce=s.lazy(()=>h(()=>import("./Onboarding-3a8927c0.js"),["assets/Onboarding-3a8927c0.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/shared/ModifyPersonalData/Onboarding-55f2a21d.js","assets/react-slick-bbe54c8b.js","assets/common-96e4c6f2.js","assets/slick-carousel-8aeec13f.css"])),ke=s.lazy(()=>h(()=>import("./FindAccompany-4f198899.js"),["assets/FindAccompany-4f198899.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/common-96e4c6f2.js","assets/shared/FindAccompanyDetail/main-7b65b9c7.js"])),Se=s.lazy(()=>h(()=>import("./CreateRoom-c14d3d29.js"),["assets/CreateRoom-c14d3d29.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/react-icons-81a06fb5.js","assets/react-slick-bbe54c8b.js","assets/common-96e4c6f2.js","assets/CreateRoom-c8b3546c.js","assets/slick-carousel-8aeec13f.css"])),Fe=s.lazy(()=>h(()=>import("./MyAccompany-4ddf8353.js"),["assets/MyAccompany-4ddf8353.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css"])),$e=s.lazy(()=>h(()=>import("./AddCourse-9d535a24.js"),["assets/AddCourse-9d535a24.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/AddCourse-a647af7e.js"])),Me=s.lazy(()=>h(()=>import("./Id-eae00eca.js"),["assets/Id-eae00eca.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css"])),Ie=s.lazy(()=>h(()=>import("./UserEmail-73059156.js"),["assets/UserEmail-73059156.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css"])),je=s.lazy(()=>h(()=>import("./Password-690e81da.js"),["assets/Password-690e81da.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/react-hook-form-a904dda8.js"])),Ae=s.lazy(()=>h(()=>import("./ManageAccompany-1a49cab7.js"),["assets/ManageAccompany-1a49cab7.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/react-icons-81a06fb5.js"])),Re=s.lazy(()=>h(()=>import("./KakaoCallBack-9a876fce.js"),["assets/KakaoCallBack-9a876fce.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/common-96e4c6f2.js"])),Ee=s.lazy(()=>h(()=>import("./FindAccompanyDetail-02110f9a.js"),["assets/FindAccompanyDetail-02110f9a.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/common-96e4c6f2.js","assets/shared/FindAccompanyDetail/main-7b65b9c7.js"])),ze=s.lazy(()=>h(()=>import("./ModifyPersonalData-4ccb4f45.js"),["assets/ModifyPersonalData-4ccb4f45.js","assets/vendor-6e44eb02.js","assets/vendor-d428ba04.css","assets/shared/ModifyPersonalData/Onboarding-55f2a21d.js","assets/react-slick-bbe54c8b.js","assets/common-96e4c6f2.js","assets/slick-carousel-8aeec13f.css"])),Be=[{path:"/",element:t(ye,{}),children:[{index:!0,path:"/",element:t(ve,{}),label:"main"},{path:"/login",element:t(we,{}),label:"Login"},{path:"/auth/kakao/callback",element:t(Re,{}),label:"KakaoCallback"},{path:"/emaillogin",element:t(be,{}),label:"EmailLogin"},{path:"/find/id",element:t(Me,{}),label:"FindId"},{path:"/find/useremail",element:t(Ie,{}),label:"UserEmail"},{path:"/find/password",element:t(je,{}),label:"FindPassword"},{path:"/signup",element:t(_e,{}),label:"Signup"},{path:"/signup/onboarding",element:t(Ce,{}),label:"Onboarding"},{path:"/findaccompany",element:t(ke,{}),label:"FindAccompany"},{path:"/findaccompany/detail/:recruitment_board_id",element:t(Ee,{}),label:"FindAccompanyDetail"},{path:"/createroom",element:t(Se,{}),label:"CreateRoom"},{path:"/myaccompany",element:t(Fe,{}),label:"Myaccompany"},{path:"/myaccompany/manage/:id",element:t(Ae,{}),label:"ManageAccompany"},{path:"/addcourse",element:t($e,{}),label:"AddCourse"},{path:"/mypage",element:t(ze,{}),label:"AddCourse"}]}],j={mobile:"600px",tablet:"900px",laptop:"1200px",desktop:"1800px"},De={mainColor:"#0a4297",mobile:`(max-width: ${j.mobile})`,tablet:`(max-width: ${j.tablet})`,laptop:`(max-width: ${j.laptop})`,desktop:`(min-width: ${j.desktop})`},Te={teamName:"",teamGrade:"",teamImg:"",location:"",teamStadium:"",totalMatching:""};let Le=B({name:"team",initialState:Te,reducers:{register:(o,i)=>{o.teamName=i.payload.teamName,o.teamGrade=i.payload.teamGrade,o.teamImg=i.payload.teamImg,o.location=i.payload.location,o.teamStadium=i.payload.teamStadium,o.totalMatching=i.payload.totalMatching},deleteAction:o=>{o.teamName="",o.teamGrade="",o.location="",o.teamStadium="",o.totalMatching=""}}});const Oe=Le.reducer,Pe={isAllChecked:!1};let Ne=B({name:"term",initialState:Pe,reducers:{isChecked:o=>{o.isAllChecked=!0},isNotChecked:o=>{o.isAllChecked=!1}}});const Ge=Ne.reducer,Ve={key:"root",storage:N,whitelist:["team","modal","term","auth","teamfilter","selecteditem","summary","accompany"]},Ke=T({team:Oe,modal:ie,term:Ge,auth:ae,teamfilter:re,selecteditem:le,summary:ce,accompany:de}),He=L(Ve,Ke),D=O({reducer:He,middleware:o=>o({serializableCheck:{ignoredActions:[G,V,K,H,U,W]}})});P(D);const Ue=[{teamName:"울산 현대 축구단",teamImg:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png",teamGrade:1,teamStadium:"울산 문수축구경기장",location:"울산광역시",teamCardOwner:"999",totalMatching:"19392",currentMatching:190,follower:133},{teamName:"포항 스틸러스",teamImg:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png",teamGrade:2,teamStadium:"포항스틸야드",location:"포항시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:9,follower:133},{teamName:"FC 서울",teamImg:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.png",teamGrade:3,teamStadium:"서울월드컵경기장",location:"서울특별시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:6,follower:133},{teamName:"제주 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeju_united.png",teamGrade:4,teamStadium:"제주월드컵경기장",location:"제주특별자치도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"전북 현대 모터스",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png",teamGrade:5,teamStadium:"전주월드컵경기장",location:"전라북도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:112,follower:133},{teamName:"대구 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.png",teamGrade:6,teamStadium:"DGB 대구은행파크",location:"대구광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:972,follower:133},{teamName:"대전 하나 시티즌",teamImg:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png",teamGrade:7,teamStadium:"대전월드컵경기장",location:"대전광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"광주 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png",teamGrade:8,teamStadium:"광주축구전용구장",location:"광주광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"인천 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/incheon_united.png",teamGrade:9,teamStadium:"인천축구전용경기장",location:"인천광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.png",teamGrade:10,teamStadium:"수원종합운동장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"강원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png",teamGrade:11,teamStadium:"강릉종합운동장, 춘천 종합운동장",location:"강원도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 삼성 블루윙즈",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png",teamGrade:12,teamStadium:"수원월드컵경기장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133}],We=o=>{const i=M(),m=w(r=>r.teamfilter.teamNames),d=r=>{m.includes(r)?i(se(r)):i(me(r))},u=()=>{i(pe()),console.log(m)};return a(Ye,{children:[t(qe,{children:Ue.map(r=>a(Je,{backgroundColor:m.includes(r.teamName),onClick:()=>d(r.teamName),children:[t(Qe,{src:r.teamImg}),t(Ze,{children:r.teamName})]},r.teamGrade))}),a(Xe,{children:[t(z,{onClick:u,children:"필터 지우기"}),t(z,{onClick:()=>i(I()),children:"찾기"})]})]})},z=e.div`
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
`,qe=e.div`
  width: 312px;
  padding: 300px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`,Je=e.div`
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
`,Qe=e.img`
  width: 80px;
  height: 80px;
`,Ze=e.p`
  font-size: 10px;
  font-weight: bold;
`,et=o=>{const[i,m]=c.useState([]),d=r=>{i.includes(r)?m(i.filter(g=>g!==r)):m([...i,r])},u=()=>{console.log(i)};return a(tt,{children:[a(nt,{children:[a(ot,{onClick:()=>d("모집중"),children:[" ",i.includes("모집중")?"해제":"모집중"]}),a(at,{onClick:()=>d("모집마감임박"),children:[" ",i.includes("모집마감임박")?"해제":"모집마감임박"]}),a(it,{onClick:()=>d("모집마감"),children:[" ",i.includes("모집마감")?"해제":"모집마감"]})," "]}),t("button",{onClick:u,children:"선택한 버튼 확인"})]})},tt=e.div`
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
`,nt=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,ot=e.div`
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
`,it=e.div`
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
`,at=e.div`
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
`,rt=o=>{const[i,m]=c.useState([null,null]),[d,u]=i,r=()=>{console.log(i.slice())};return a("div",{children:[t(lt,{locale:Y,dateFormat:"yyyy.MM.dd",dateFormatCalendar:"yyyy년 MM월",shouldCloseOnSelect:!0,closeOnScroll:!1,minDate:new Date,placeholderText:"날짜를 선택해주세요.",selectsRange:!0,startDate:d,endDate:u,onChange:g=>{g instanceof Date?m([g,g]):Array.isArray(g)&&m(g)},withPortal:!0}),t("button",{onClick:()=>r(),children:"구간 확인"})]})},lt=e(X)`
  width: 200%;
  height: 60px;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
`,ct=o=>t(dt,{children:t(st,{children:t(rt,{})})}),dt=e.div`
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
`,st=e.div`
  height: auto;
`,mt=o=>a(pt,{children:[t(ht,{children:t(ut,{})}),"`"]}),pt=e.div`
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
`;const ht=e.div`
  height:100%;
  overflow-x: hidden;
`,ut=e.div`
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
`;const gt=o=>{const i=w(n=>n.summary.stadium),m=w(n=>n.summary.homename),[d,u]=c.useState(""),r=n=>{n.preventDefault(),u(n.target.value)},[g,_]=c.useState(""),C=n=>{n.preventDefault(),_(d)},k=()=>{d===""&&alert("검색어를 입력해주세요.")},[f,S]=c.useState(),x=c.useCallback(async()=>{const l=await(await fetch(`${R}/api/tour_api/recommend/?team_id=${E(m)}&content_type_id=12`,{method:"GET"})).json();S(l)},[]);c.useEffect(()=>{x()},[x]);const y=M(),[p,b]=c.useState([]),F=n=>{p.some(l=>l.title===n.title)?b(p.filter(l=>l.title!==n.title)):b([...p,n])},$=()=>{p.length>0&&p.map(n=>y(he(n)))};return a(ft,{children:[t(yt,{children:"관광지 코스 추가"}),t(bt,{children:t(wt,{children:t(vt,{children:t(kt,{children:t(St,{children:t(_t,{children:t(Ft,{onSubmit:C,children:a($t,{htmlFor:"place",className:"form__label",children:[t(Mt,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:r,placeholder:"가고싶은 장소를 검색해보세요!"}),t(It,{children:t(Ct,{className:"btn form__submit",type:"submit",value:"검색",onClick:k})})]})})})})})})})}),a(At,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),t(xt,{children:t(jt,{children:f==null?void 0:f.item.map((n,l)=>t(Rt,{children:t(Dt,{children:a(zt,{children:[t(Ot,{children:t(Pt,{type:"checkbox",onChange:()=>{F(n)}})}),t(Et,{src:n.firstimage,alt:n.title}),a(Tt,{children:[t(Bt,{children:n.title}),t(Lt,{children:n.addr1})]})]})})},l))})}),t(Gt,{children:t(Nt,{onClick:()=>{$(),y(I())},children:"선택 완료"})})]})},ft=e.div`
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
`,xt=e.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,yt=e.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,bt=e.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,wt=e.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,vt=e.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,_t=e.div`
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
`,Ct=e(A)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,kt=e.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,St=e.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;e.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const Ft=e.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,$t=e.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,Mt=e.input`
  width: 1000px;
  height: 100%;
`,It=e.div``;e.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const jt=e.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,At=e.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,Rt=e.div`
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
`,Et=e.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,zt=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Bt=e.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,Dt=e.div`
  display: flex;
  justify-content: space-between;
`,Tt=e.div`
  align-items: center;
`,Lt=e.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,Ot=e.div`
  margin-left: 10px;
`,Pt=e.input``,Nt=e.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,Gt=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,Vt=o=>{const i=w(n=>n.summary.stadium),m=w(n=>n.summary.homename),[d,u]=c.useState(""),r=n=>{n.preventDefault(),u(n.target.value)},[g,_]=c.useState(""),C=n=>{n.preventDefault(),_(d)},k=()=>{d===""&&alert("검색어를 입력해주세요.")},[f,S]=c.useState(),x=c.useCallback(async()=>{const l=await(await fetch(`${R}/api/tour_api/recommend/?team_id=${E(m)}&content_type_id=39`,{method:"GET"})).json();S(l)},[]);c.useEffect(()=>{x()},[x]);const y=M(),[p,b]=c.useState([]),F=n=>{p.some(l=>l.title===n.title)?b(p.filter(l=>l.title!==n.title)):b([...p,n])},$=()=>{p.length>0&&p.map(n=>y(ue(n)))};return a(Kt,{children:[t(Ut,{children:"음식점 코스 추가"}),t(Wt,{children:t(Xt,{children:t(Yt,{children:t(Qt,{children:t(Zt,{children:t(qt,{children:t(en,{onSubmit:C,children:a(tn,{htmlFor:"place",className:"form__label",children:[t(nn,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:r,placeholder:"가고싶은 장소를 검색해보세요!"}),t(on,{children:t(Jt,{className:"btn form__submit",type:"submit",value:"검색",onClick:k})})]})})})})})})})}),a(rn,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),t(Ht,{children:t(an,{children:f==null?void 0:f.item.map((n,l)=>t(ln,{children:t(mn,{children:a(dn,{children:[t(un,{children:t(gn,{type:"checkbox",onChange:()=>{F(n)}})}),t(cn,{src:n.firstimage,alt:n.title}),a(pn,{children:[t(sn,{children:n.title}),t(hn,{children:n.addr1})]})]})})},l))})}),t(xn,{children:t(fn,{onClick:()=>{$(),y(I())},children:"선택 완료"})})]})},Kt=e.div`
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
`,Ht=e.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,Ut=e.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,Wt=e.div`
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
`,qt=e.div`
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
`,Jt=e(A)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,Qt=e.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Zt=e.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;e.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const en=e.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,tn=e.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,nn=e.input`
  width: 1000px;
  height: 100%;
`,on=e.div``;e.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const an=e.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,rn=e.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,ln=e.div`
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
`,cn=e.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,dn=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,sn=e.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,mn=e.div`
  display: flex;
  justify-content: space-between;
`,pn=e.div`
  align-items: center;
`,hn=e.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,un=e.div`
  margin-left: 10px;
`,gn=e.input``,fn=e.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,xn=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,yn=o=>{const i=w(n=>n.summary.stadium),m=w(n=>n.summary.homename),[d,u]=c.useState(""),r=n=>{n.preventDefault(),u(n.target.value)},[g,_]=c.useState(""),C=n=>{n.preventDefault(),_(d)},k=()=>{d===""&&alert("검색어를 입력해주세요.")},[f,S]=c.useState(),x=c.useCallback(async()=>{const l=await(await fetch(`${R}/api/tour_api/recommend/?team_id=${E(m)}&content_type_id=32`,{method:"GET"})).json();S(l)},[]);c.useEffect(()=>{x()},[x]);const y=M(),[p,b]=c.useState([]),F=n=>{p.some(l=>l.title===n.title)?b(p.filter(l=>l.title!==n.title)):b([...p,n])},$=()=>{p.length>0&&p.map(n=>y(ge(n)))};return a(bn,{children:[t(vn,{children:"숙박 코스 추가"}),t(_n,{children:t(Cn,{children:t(kn,{children:t($n,{children:t(Mn,{children:t(Sn,{children:t(In,{onSubmit:C,children:a(jn,{htmlFor:"place",className:"form__label",children:[t(An,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:r,placeholder:"가고싶은 장소를 검색해보세요!"}),t(Rn,{children:t(Fn,{className:"btn form__submit",type:"submit",value:"검색",onClick:k})})]})})})})})})})}),a(zn,{children:["⚽️ ",i," 경기장 주변 추천 장소"]}),t(wn,{children:t(En,{children:f==null?void 0:f.item.map((n,l)=>t(Bn,{children:t(On,{children:a(Tn,{children:[t(Gn,{children:t(Vn,{type:"checkbox",onChange:()=>{F(n)}})}),t(Dn,{src:n.firstimage,alt:n.title}),a(Pn,{children:[t(Ln,{children:n.title}),t(Nn,{children:n.addr1})]})]})})},l))})}),t(Hn,{children:t(Kn,{onClick:()=>{$(),y(I())},children:"선택 완료"})})]})},bn=e.div`
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
`,wn=e.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`,vn=e.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,_n=e.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Cn=e.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,kn=e.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,Sn=e.div`
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
`,$n=e.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Mn=e.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;e.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const In=e.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,jn=e.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,An=e.input`
  width: 1000px;
  height: 100%;
`,Rn=e.div``;e.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const En=e.div`
  height: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`,zn=e.div`
  border: 1px;
  font-size: 18px;
  font-weight: bold;
`,Bn=e.div`
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
`,Dn=e.img`
  width: 50px;
  height: 50px;
  /* object-fit: contain; */
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 50%;
`,Tn=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Ln=e.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
`,On=e.div`
  display: flex;
  justify-content: space-between;
`,Pn=e.div`
  align-items: center;
`,Nn=e.div`
  font-size: 12px;
  font-weight: bold;
  padding-right: 5px;
`,Gn=e.div`
  margin-left: 10px;
`,Vn=e.input``,Kn=e.div`
  width: 160px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #1f1f45;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`,Hn=e.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`,v={TeamModal:"TeamModal",DateModal:"DateModal",CruitModal:"CruitModal",TeamCardModal:"TeamCardModal",AttractionSearchModal:"AttractionSearchModal",FoodSearchModal:"FoodSearchModal",HouseSearchModal:"HouseSearchModal"},Un=[{type:v.TeamModal,component:t(We,{})},{type:v.DateModal,component:t(ct,{})},{type:v.CruitModal,component:t(et,{})},{type:v.TeamCardModal,component:t(mt,{})},{type:v.AttractionSearchModal,component:t(gt,{})},{type:v.FoodSearchModal,component:t(Vt,{})},{type:v.HouseSearchModal,component:t(yn,{})}],Wn=o=>{const{modalType:i,isOpen:m}=w(fe),d=M();if(!m)return null;const u=Un.find(g=>g.type===i);return a(Xn,{children:[t(Yn,{onClick:()=>d(I())}),(()=>u==null?void 0:u.component)()]})},Xn=e.div`
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
`;q.defaults.withCredentials=!0;const qn=J(Be),Jn=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;Q.createRoot(document.getElementById("root")).render(t(Z,{store:D,children:t(s.Suspense,{fallback:t(Jn,{children:t(ee,{color:"#1f1f45",size:"50"})}),children:t(te,{children:a(ne,{theme:De,children:[t(xe,{}),t(Wn,{}),t(oe,{router:qn})]})})})}));
