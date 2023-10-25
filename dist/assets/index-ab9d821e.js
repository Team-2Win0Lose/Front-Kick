import{R as c,_ as m,a as e,c as F,m as W,n as q,o as X,q as Y,t as J,F as Z,v as Q,P as ee,w as te,x as ne,y as oe,s as t,u as I,b as z,j as l,e as v,X as ae,z as ie,B as re,l as le,D as ce,E as de,H as se,I as me,J as pe,L as ue,K as he}from"./vendor-34c37101.js";import{m as ge,a as fe,b as xe,s as ye,S as we,d as be,e as O,f as ve,h as _e,i as ke,P,c as E,j as Ce,k as Me,G as Se}from"./common-e20ce833.js";/* empty css                       */const Ee=c.lazy(()=>m(()=>import("./App-538f8ace.js"),["assets/App-538f8ace.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-icons-2d76b7e0.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css"])),Re=c.lazy(()=>m(()=>import("./EmailLogin-aba33e2e.js"),["assets/EmailLogin-aba33e2e.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-hook-form-79ab92fe.js","assets/shared/EmailLogin/Signup-206bc41b.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css","assets/shared/EmailLogin/Login-eea4a924.js"])),Ie=c.lazy(()=>m(()=>import("./Login-71f10a42.js"),["assets/Login-71f10a42.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/shared/EmailLogin/Login-eea4a924.js"])),ze=c.lazy(()=>m(()=>import("./main-3cdf69d5.js"),["assets/main-3cdf69d5.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-slick-2febd1cd.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css","assets/FindAccompany-0b4b48fe.js"])),Pe=c.lazy(()=>m(()=>import("./Signup-0c7ace79.js"),["assets/Signup-0c7ace79.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-hook-form-79ab92fe.js","assets/shared/EmailLogin/Signup-206bc41b.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css"])),Ae=c.lazy(()=>m(()=>import("./Onboarding-be61b4ab.js"),["assets/Onboarding-be61b4ab.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/shared/ModifyPersonalData/Onboarding-1283d6e5.js","assets/react-slick-2febd1cd.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css"])),Le=c.lazy(()=>m(()=>import("./FindAccompany-0b4b48fe.js"),["assets/FindAccompany-0b4b48fe.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css"])),Te=c.lazy(()=>m(()=>import("./CreateRoom-0fea2f3f.js"),["assets/CreateRoom-0fea2f3f.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-icons-2d76b7e0.js","assets/react-slick-2febd1cd.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css","assets/CreateRoom-347b262b.js"])),Fe=c.lazy(()=>m(()=>import("./MyAccompany-0c1a6add.js"),["assets/MyAccompany-0c1a6add.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css"])),Oe=c.lazy(()=>m(()=>import("./AddCourse-cba850ac.js"),["assets/AddCourse-cba850ac.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/AddCourse-4171088a.js"])),De=c.lazy(()=>m(()=>import("./Id-161e9ba6.js"),["assets/Id-161e9ba6.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css"])),je=c.lazy(()=>m(()=>import("./UserEmail-5397aa62.js"),["assets/UserEmail-5397aa62.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css"])),Be=c.lazy(()=>m(()=>import("./Password-b3c08fe8.js"),["assets/Password-b3c08fe8.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-hook-form-79ab92fe.js"])),$e=c.lazy(()=>m(()=>import("./ManageAccompany-feb1c9ff.js"),["assets/ManageAccompany-feb1c9ff.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/react-icons-2d76b7e0.js"])),Ne=c.lazy(()=>m(()=>import("./KakaoCallBack-7a35aba9.js"),["assets/KakaoCallBack-7a35aba9.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css"])),Ge=c.lazy(()=>m(()=>import("./FindAccompanyDetail-0e049a3b.js"),["assets/FindAccompanyDetail-0e049a3b.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css"])),Ve=c.lazy(()=>m(()=>import("./ModifyPersonalData-cba48e48.js"),["assets/ModifyPersonalData-cba48e48.js","assets/vendor-34c37101.js","assets/vendor-d428ba04.css","assets/shared/ModifyPersonalData/Onboarding-1283d6e5.js","assets/react-slick-2febd1cd.js","assets/common-e20ce833.js","assets/slick-carousel-8aeec13f.css"])),Ke=[{path:"/",element:e(Ee,{}),children:[{index:!0,path:"/",element:e(ze,{}),label:"main"},{path:"/login",element:e(Ie,{}),label:"Login"},{path:"/auth/kakao/callback",element:e(Ne,{}),label:"KakaoCallback"},{path:"/emaillogin",element:e(Re,{}),label:"EmailLogin"},{path:"/find/id",element:e(De,{}),label:"FindId"},{path:"/find/useremail",element:e(je,{}),label:"UserEmail"},{path:"/find/password",element:e(Be,{}),label:"FindPassword"},{path:"/signup",element:e(Pe,{}),label:"Signup"},{path:"/signup/onboarding",element:e(Ae,{}),label:"Onboarding"},{path:"/findaccompany",element:e(Le,{}),label:"FindAccompany"},{path:"/findaccompany/detail/:postId",element:e(Ge,{}),label:"FindAccompanyDetail"},{path:"/createroom",element:e(Te,{}),label:"CreateRoom"},{path:"/myaccompany",element:e(Fe,{}),label:"Myaccompany"},{path:"/myaccompany/manage/:id",element:e($e,{}),label:"ManageAccompany"},{path:"/addcourse",element:e(Oe,{}),label:"AddCourse"},{path:"/mypage",element:e(Ve,{}),label:"AddCourse"}]}],S={mobile:"600px",tablet:"900px",laptop:"1200px",desktop:"1800px"},He={mainColor:"#0a4297",mobile:`(max-width: ${S.mobile})`,tablet:`(max-width: ${S.tablet})`,laptop:`(max-width: ${S.laptop})`,desktop:`(min-width: ${S.desktop})`},Ue={teamName:"",teamGrade:"",teamImg:"",location:"",teamStadium:"",totalMatching:""};let We=F({name:"team",initialState:Ue,reducers:{register:(n,o)=>{n.teamName=o.payload.teamName,n.teamGrade=o.payload.teamGrade,n.teamImg=o.payload.teamImg,n.location=o.payload.location,n.teamStadium=o.payload.teamStadium,n.totalMatching=o.payload.totalMatching},deleteAction:n=>{n.teamName="",n.teamGrade="",n.location="",n.teamStadium="",n.totalMatching=""}}});const qe=We.reducer,Xe={isAllChecked:!1};let Ye=F({name:"term",initialState:Xe,reducers:{isChecked:n=>{n.isAllChecked=!0},isNotChecked:n=>{n.isAllChecked=!1}}});const Je=Ye.reducer,Ze={key:"root",storage:J,whitelist:["team","modal","term","auth","teamfilter","selecteditem","summary","accompany"]},Qe=W({team:qe,modal:ge,term:Je,auth:fe,teamfilter:xe,selecteditem:ye,summary:we,accompany:be}),et=q(Ze,Qe),D=X({reducer:et,middleware:n=>n({serializableCheck:{ignoredActions:[Z,Q,ee,te,ne,oe]}})});Y(D);const tt=[{teamName:"울산 현대 축구단",teamImg:"https://kickstorage.blob.core.windows.net/logo/ulsan_hyundai.png",teamGrade:1,teamStadium:"울산 문수축구경기장",location:"울산광역시",teamCardOwner:"999",totalMatching:"19392",currentMatching:190,follower:133},{teamName:"포항 스틸러스",teamImg:"https://kickstorage.blob.core.windows.net/logo/pohang_stealus.png",teamGrade:2,teamStadium:"포항스틸야드",location:"포항시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:9,follower:133},{teamName:"FC 서울",teamImg:"https://kickstorage.blob.core.windows.net/logo/fc_seoul.png",teamGrade:3,teamStadium:"서울월드컵경기장",location:"서울특별시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:6,follower:133},{teamName:"제주 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeju_united.png",teamGrade:4,teamStadium:"제주월드컵경기장",location:"제주특별자치도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"전북 현대 모터스",teamImg:"https://kickstorage.blob.core.windows.net/logo/jeonbuk_hyundai_motors.png",teamGrade:5,teamStadium:"전주월드컵경기장",location:"전라북도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:112,follower:133},{teamName:"대구 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/daegu_fc.png",teamGrade:6,teamStadium:"DGB 대구은행파크",location:"대구광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:972,follower:133},{teamName:"대전 하나 시티즌",teamImg:"https://kickstorage.blob.core.windows.net/logo/daejun_hana_citizen.png",teamGrade:7,teamStadium:"대전월드컵경기장",location:"대전광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"광주 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gwangju_fc.png",teamGrade:8,teamStadium:"광주축구전용구장",location:"광주광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:912,follower:133},{teamName:"인천 유나이티드 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/incheon_united.png",teamGrade:9,teamStadium:"인천축구전용경기장",location:"인천광역시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_fc.png",teamGrade:10,teamStadium:"수원종합운동장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"강원 FC",teamImg:"https://kickstorage.blob.core.windows.net/logo/gangwon_fc.png",teamGrade:11,teamStadium:"강릉종합운동장, 춘천 종합운동장",location:"강원도",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133},{teamName:"수원 삼성 블루윙즈",teamImg:"https://kickstorage.blob.core.windows.net/logo/suwon_samsung_bluewings.png",teamGrade:12,teamStadium:"수원월드컵경기장",location:"수원시",teamCardOwner:"1289",totalMatching:"19392",currentMatching:12,follower:133}],nt=n=>{const o=I(),p=z(r=>r.teamfilter.teamNames),h=r=>{p.includes(r)?o(ve(r)):o(_e(r))},x=()=>{o(ke()),console.log(p)};return l(at,{children:[e(it,{children:tt.map(r=>l(rt,{backgroundColor:p.includes(r.teamName),onClick:()=>h(r.teamName),children:[e(lt,{src:r.teamImg}),e(ct,{children:r.teamName})]},r.teamGrade))}),l(ot,{children:[e(T,{onClick:x,children:"필터 지우기"}),e(T,{onClick:()=>o(O()),children:"찾기"})]})]})},T=t.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 25px;
  background-color: #272727;
  color: white;
  border-radius: 12px;
`,ot=t.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,at=t.div`
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
`,it=t.div`
  width: 312px;
  padding: 300px 9px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
`,rt=t.div`
  padding: 10px;
  width: 140px;
  gap: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${n=>n.backgroundColor?"#A4BBF9":"white"};
  border: ${n=>n.backgroundColor?"1px solid #fff":"1px solid #d9d9d9"};
  color: ${n=>n.backgroundColor?"white":"black"};
`,lt=t.img`
  width: 80px;
  height: 80px;
`,ct=t.p`
  font-size: 10px;
  font-weight: bold;
`,dt=n=>{const[o,p]=v.useState([]),h=r=>{o.includes(r)?p(o.filter(y=>y!==r)):p([...o,r])},x=()=>{console.log(o)};return l(st,{children:[l(mt,{children:[l(pt,{onClick:()=>h("모집중"),children:[" ",o.includes("모집중")?"해제":"모집중"]}),l(ht,{onClick:()=>h("모집마감임박"),children:[" ",o.includes("모집마감임박")?"해제":"모집마감임박"]}),l(ut,{onClick:()=>h("모집마감"),children:[" ",o.includes("모집마감")?"해제":"모집마감"]})," "]}),e("button",{onClick:x,children:"선택한 버튼 확인"})]})},st=t.div`
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
`,mt=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,pt=t.div`
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
`,ut=t.div`
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
`,ht=t.div`
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
`,gt=n=>{const[o,p]=v.useState([null,null]),[h,x]=o,r=()=>{console.log(o.slice())};return l("div",{children:[e(ft,{locale:ie,dateFormat:"yyyy.MM.dd",dateFormatCalendar:"yyyy년 MM월",shouldCloseOnSelect:!0,closeOnScroll:!1,minDate:new Date,placeholderText:"날짜를 선택해주세요.",selectsRange:!0,startDate:h,endDate:x,onChange:y=>{y instanceof Date?p([y,y]):Array.isArray(y)&&p(y)},withPortal:!0}),e("button",{onClick:()=>r(),children:"구간 확인"})]})},ft=t(ae)`
  width: 200%;
  height: 60px;
  font-size: 12px;
  border-radius: 10px;
  text-align: center;
`,xt=n=>e(yt,{children:e(wt,{children:e(gt,{})})}),yt=t.div`
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
`,wt=t.div`
  height: auto;
`,bt=n=>l(vt,{children:[e(_t,{children:e(kt,{})}),"`"]}),vt=t.div`
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
`;const _t=t.div`
  height:100%;
  overflow-x: hidden;
`,kt=t.div`
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
`;const Ct=n=>l(Mt,{children:[e(Et,{children:"관광지 코스 추가"}),e(St,{children:e(P,{index:2})})]}),Mt=t.div`
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 30%;
  height: 547px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
`,St=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,Et=t.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,{kakao:s}=window,Rt=n=>{let o=[];const p=I(),{detailMeetingPlace:h,meetingPlace:x}=z(r=>r.summary);return v.useEffect(()=>{const r=document.getElementById("map"),y={center:new s.maps.LatLng(37.566826,126.9786567),level:3},w=new s.maps.Map(r,y),j=new s.maps.services.Places,k=new s.maps.InfoWindow({zIndex:1});B();function B(){let a=n.searchKeyword;if(!a.replace(/^\s+|\s+$/g,""))return console.log("키워드를 입력해주세요!"),!1;j.keywordSearch(a,$)}function $(a,i,d){if(i===s.maps.services.Status.OK)N(a),H(d);else if(i===s.maps.services.Status.ZERO_RESULT){alert("검색 결과가 존재하지 않습니다.");return}else if(i===s.maps.services.Status.ERROR){alert("검색 결과 중 오류가 발생했습니다.");return}}function N(a){const i=document.getElementById("places-list"),d=document.getElementById("search-result"),f=document.createDocumentFragment(),g=new s.maps.LatLngBounds;i&&U(i),K();for(var u=0;u<a.length;u++){let C=new s.maps.LatLng(a[u].y,a[u].x),_=V(C,u),R=G(u,a[u]);g.extend(C),function(M,L){s.maps.event.addListener(M,"mouseover",function(){A(M,L)}),s.maps.event.addListener(M,"mouseout",function(){k.close()}),R.onmouseover=function(){A(M,L)},R.onmouseout=function(){k.close()}}(_,a[u].place_name),f.appendChild(R)}i&&i.appendChild(f),d&&(d.scrollTop=0),w.setBounds(g)}function G(a,i){const d=document.createElement("li");let f=`
    <div class="info" style="display: flex; justify-content: flex-start; align-items: center;gap:10px; border-bottom:1px solid gray; padding: 5px;">
      <div>
        <label class="checkbox-container" style="display: flex; justify-content: center; align-items: center; gap: 10px;">
          <input type="checkbox" name="place" class="checkbox-input">
          <div class="checkbox-custom"></div>
          <div>        
            <h5 class="info-item place-name" style="font-size: 16px; ">${i.place_name}</h5>
            ${i.road_address_name?`<p class="info-item road-address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${i.road_address_name}
                  </p>
                  <p class="info-item address-name" style="font-size:12px; padding: 5px 0;  font-weight: 400; color: #666666;">
                    ${i.address_name}
                    </p>`:`<p class="info-item address-name" style="font-size:12px; padding: 5px 0; font-weight: 400; color: #666666;">
                    ${i.address_name}
                  </p>`}
          </div>
        </label>
      </div>
    </div>
    `;d.innerHTML=f,d.className="item",d.onclick=function(){var u;(u=n.handleSearchLocation)==null||u.call(n,i.place_name,i.address_name)};const g=d.querySelector(".checkbox-input");return g==null||g.addEventListener("click",()=>{p(Ce({meetingPlace:i.place_name,detailMeetingPlace:h,meetingPlaceAddress:i.address_name})),d.classList.toggle("checked")}),d}function V(a,i,d){var f="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",g=new s.maps.Size(36,37),u={spriteSize:new s.maps.Size(36,691),spriteOrigin:new s.maps.Point(0,i*46+10),offset:new s.maps.Point(13,37)},C=new s.maps.MarkerImage(f,g,u),_=new s.maps.Marker({position:a,image:C});return _.setMap(w),o.push(_),_}function K(){for(var a=0;a<o.length;a++)o[a].setMap(null);o=[]}function H(a){const i=document.getElementById("pagination");let d=document.createDocumentFragment(),f;for(;i.hasChildNodes();)i.lastChild&&i.removeChild(i.lastChild);for(f=1;f<=a.last;f++){const g=document.createElement("div");g.href="#",g.innerHTML=f.toString(),f===a.current?g.className="on":g.onclick=function(u){return function(){a.gotoPage(u)}}(f),d.appendChild(g)}i.appendChild(d)}function A(a,i){const d='<div style="padding:10px; z-index:1;" class="marker-title">'+i+"</div>";k.setContent(d),k.open(w,a)}function U(a){for(;a.hasChildNodes();)a.lastChild&&a.removeChild(a.lastChild)}},[n.searchKeyword,h]),e(It,{children:l(zt,{children:[e(Pt,{id:"map",className:"map"}),l(At,{id:"search-result",children:[e(Lt,{children:l(Tt,{children:[n.searchKeyword," 관련 검색결과"]})}),e(Ft,{children:e(Ot,{id:"places-list"})}),e(Dt,{id:"pagination"})]})]})})},It=t.div`
  align-items: center;
  justify-content: center;
`,zt=t.div`
  display: flex;
  align-items: flex-start;
  /* background-color: #e6e3e3; */
  padding: 20px;
  height: 100%;
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  ${E.lessThan("mobile")`
      flex-direction: column;
	`}
`,Pt=t.div`
  width: 400px;
  height: 500px;
  background-color: #e0e0e0;
  border-radius: 10px 0 0 10px;
  margin-bottom: 10px;
  ${E.lessThan("mobile")`
    width: 100%;
    height: 300px;
	`}
`,At=t.div`
  width: 60%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: rgb(248,248,248);
  border-radius: 0 10px 10px 0;
  align-items: center;
  ${E.lessThan("mobile")`
      padding: 0px;
	`}
`,Lt=t.p`
  font-size: 1px;
  padding: 10px;
  font-weight: bold;
`,Tt=t.span`
  color: black;
  font-size: 20px;
`,Ft=t.div`
  width: 100%;
  max-height: 600px;
  padding: 10px;
  overflow-y: auto;
  ${E.lessThan("mobile")`
      max-height: 200px;
	`}
`,Ot=t.ul`
  list-style: none;
  padding: 10px;
  color: #1f1f45;
  .item {
    div{
      color: black;

    }
    padding: 3px 0;
  }
`,Dt=t.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,jt=()=>{const[n,o]=v.useState("");v.useState("");const p=w=>{w.preventDefault(),o(w.target.value)},[h,x]=v.useState("");return e(Bt,{children:e($t,{children:e(Nt,{children:e(Kt,{children:l(Ht,{children:[e(Gt,{children:e(Ut,{onSubmit:w=>{w.preventDefault(),x(n)},children:l(Wt,{htmlFor:"place",className:"form__label",children:[e(qt,{type:"text",id:"movie-title",className:"form__input",name:"place",onChange:p,placeholder:"가고싶은 장소를 검색해보세요!",required:!0}),e(Xt,{children:e(Vt,{className:"btn form__submit",type:"submit",value:"검색",onClick:()=>{n===""&&alert("검색어를 입력해주세요.")}})})]})})}),e(Rt,{searchKeyword:h})]})})})})})},Bt=t.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,$t=t.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Nt=t.div`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`,Gt=t.div`
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
    width: 260px;
    padding: 10px;
    /* border: none; 
    outline: none;  */
    font-size: 14px;
  }
`,Vt=t(re)`
  color: #1f1f45;
  width: 30px;
  height: 30px;
  margin-left: 10px;
`,Kt=t.div`
  /* Add your styles for the landing page container here */
  /* For example: padding, background-color, etc. */
`,Ht=t.div`
  /* Add your styles for the landing page inner container here */
  /* For example: padding, width, etc. */
`;t.div`
  /* Add your styles for the search form container here */
  /* For example: margin, padding, etc. */
`;const Ut=t.form`
  /* Add your styles for the search form here */
  /* For example: display, flex-direction, etc. */
`,Wt=t.label`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Add your styles for the form label here */
  /* For example: display, flex-direction, etc. */
`,qt=t.input`
  width: 1000px;
  height: 100%;
`,Xt=t.div``;t.input`
  /* Add your styles for the form submit button here */
  /* For example: background-color, color, padding, etc. */
`;const Yt=n=>l(Zt,{children:[l(Jt,{children:[e(en,{children:"음식점 코스 추가"}),e(jt,{})]}),e(Qt,{children:e(P,{index:1})})]}),Jt=t.div`
  flex-direction:column;
`,Zt=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 80%;
  height: 90%;
  overflow-x: auto;
  overflow-y: auto;
  z-index: 100;
`,Qt=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,en=t.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,tn=n=>l(nn,{children:[e(an,{children:"숙박 코스 추가"}),e(on,{children:e(P,{index:0})})]}),nn=t.div`
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  background-color: #fff;
  border-radius: 10px;
  width: 30%;
  height: 547px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 100;
`,on=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,an=t.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`,b={TeamModal:"TeamModal",DateModal:"DateModal",CruitModal:"CruitModal",TeamCardModal:"TeamCardModal",AttractionSearchModal:"AttractionSearchModal",FoodSearchModal:"FoodSearchModal",HouseSearchModal:"HouseSearchModal"},rn=[{type:b.TeamModal,component:e(nt,{})},{type:b.DateModal,component:e(xt,{})},{type:b.CruitModal,component:e(dt,{})},{type:b.TeamCardModal,component:e(bt,{})},{type:b.AttractionSearchModal,component:e(Ct,{})},{type:b.FoodSearchModal,component:e(Yt,{})},{type:b.HouseSearchModal,component:e(tn,{})}],ln=n=>{const{modalType:o,isOpen:p}=z(Me),h=I();if(!p)return null;const x=rn.find(y=>y.type===o);return l(cn,{children:[e(dn,{onClick:()=>h(O())}),(()=>x==null?void 0:x.component)()]})},cn=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`,dn=t.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;le.defaults.withCredentials=!0;const sn=ce(Ke),mn=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;de.createRoot(document.getElementById("root")).render(e(se,{store:D,children:e(c.Suspense,{fallback:e(mn,{children:e(me,{color:"#1f1f45",size:"50"})}),children:e(pe,{children:l(ue,{theme:He,children:[e(Se,{}),e(ln,{}),e(he,{router:sn})]})})})}));
