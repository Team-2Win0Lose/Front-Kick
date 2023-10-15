import{G as b,s as i,M as w,b as d,a as e,j as o,N as q,f as s,u as J,O as h,Q as T,l as X,S as m,T as Y,U as Z}from"./vendor-6e44eb02.js";import{B as D,p as ee,c as g}from"./common-feb29b35.js";function te(n){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(n)}function ne(n){return b({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z"}}]})(n)}const V=n=>{const c=w();return d(t=>t.auth.isAuthenticated)?e(E,{children:o(H,{children:[n.profileImg!==void 0?e(oe,{src:n.profileImg}):e(ce,{children:e(ne,{size:"60"})}),o(G,{children:[n.name!==""&&o(x,{children:[n.name," 님"]}),n.nickname!==""&&o(x,{children:[n.nickname," 님"]}),e(ie,{children:n.email})]}),e(q,{size:"30",onClick:()=>c("/mypage")})]})}):e(E,{children:e(H,{children:e(G,{onClick:()=>{c("/login")},children:e(x,{children:"로그인을 해주세요"})})})})},E=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`,x=i.p`
  font-weight: 500;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000000;
  margin-bottom: 10px;
`,ie=i.p`
  font-weight: 500;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`,H=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`,G=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
`,oe=i.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  object-fit: contain;
  margin-right: 5px;
`,ce=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
`,re=n=>e(le,{children:o(de,{children:[e(ge,{teamcolor:n.team_color_main,children:e(se,{src:n.logo_img_url,alt:n.original_team_name})}),o(me,{teamcolor:n.team_color_sub,children:[e(ae,{children:n.original_team_name}),e("div",{children:n.follower}),e("div",{children:n.recruit_ing})]}),e(he,{children:n.recruit_ing})]})}),ae=i.div`
  font-size: 20px;
  flex-direction:column;
`,le=i.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  width: 300px;
  height: 150px;
  background: #ffffff;
  border-radius: 15px;
`,se=i.img`
  width: 50px;
  height: 50px;
`,de=i.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 10px; */
`,he=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
`,ge=i.div`
  position: absolute;
  width: 40%;
  height: 100%;

  top: 0;
  left: 0;
  background-color: ${n=>n.teamcolor||"#FFFFFF"};
  display: flex;
  justify-content: center;
  align-items: center;
`,me=i.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 60%;
  height: 100%;
  left: 40%;
  background-color: ${n=>n.teamcolor||"#FFFFFF"};
`;function ue({isOpen:n,setIsOpen:c}){var C,z,F,A,S,$,j,I,L,B,M,N;const r=s.useRef(),[t,R]=s.useState(),K=d(a=>a.auth.isAuthenticated),{token:y,id:P}=d(a=>a.auth),U=J();s.useEffect(()=>(document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}));const _=s.useCallback(async()=>{const Q=await(await fetch(`${D}/api/user/profile/?id=${P}`,{method:"get",headers:{Authorization:`Bearer ${y}`}})).json();R(Q)},[]);s.useEffect(()=>{_()},[_]);const k=a=>{r.current.contains(a.target)||l()},W=()=>{X.post("https://kapi.kakao.com/v1/user/logout",{},{headers:{Authorization:`Bearer ${y}`,"Content-type":"application/x-www-form-urlencoded"}}).then(a=>{console.log(a)}).catch(a=>{console.error(a)})},l=()=>{c(!1)};return console.log(t),K?o(h,{children:[n&&e(pe,{onClick:l}),o(O,{id:"sidebar",ref:r,className:n?"open":"",children:[e(T,{size:"30",color:"#ffffff",alt:"close",onClick:l,onKeyDown:l}),o("ul",{children:[o(v,{children:[e(p,{children:"내 정보"}),e(V,{profileImg:(C=t==null?void 0:t.profile)==null?void 0:C.profileImg,name:(z=t==null?void 0:t.profile)==null?void 0:z.name,nickname:(F=t==null?void 0:t.profile)==null?void 0:F.nickname,email:(A=t==null?void 0:t.profile)==null?void 0:A.email})]}),e(p,{children:"나의 응원팀"}),e(v,{children:e(re,{team_id:(S=t==null?void 0:t.profile)==null?void 0:S.cheering_team_id,follower:($=t==null?void 0:t.cheering_team)==null?void 0:$.follower,logo_img_url:(j=t==null?void 0:t.cheering_team)==null?void 0:j.logo_img_url,original_team_name:(I=t==null?void 0:t.cheering_team)==null?void 0:I.original_team_name,recruit_end:(L=t==null?void 0:t.cheering_team)==null?void 0:L.recruit_end,recruit_ing:(B=t==null?void 0:t.cheering_team)==null?void 0:B.recruit_ing,team_color_main:(M=t==null?void 0:t.cheering_team)==null?void 0:M.team_color_main,team_color_sub:(N=t==null?void 0:t.cheering_team)==null?void 0:N.team_color_sub})}),e(fe,{children:e(xe,{onClick:()=>{U(ee()),l(),W()},children:"로그아웃"})})]})]})]}):o(O,{id:"sidebar",ref:r,className:n?"open":"",children:[e(T,{size:"30",color:"#ffffff",alt:"close",onClick:l,onKeyDown:l}),e("ul",{children:o(v,{onClick:()=>l(),children:[e(p,{children:"내 정보"}),e(V,{})]})})]})}const O=i.div`
  z-index: 5;
  padding: 10px;
  background-color: #1f1f45;
  height: 100%;
  width: 25%;
  right: -25%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`,p=i.li`
  margin: 15px 0px;
  font-size: 1rem;
  color: #ffffff;
`,v=i.div`
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
`,fe=i.div`
  width: 85%;
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,xe=i.div`
  width: 80px;
  padding: 10px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  border-radius: 12px;
`,pe=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경색과 투명도 조절 */
  z-index: 4; /* 배경 레이어가 사이드바 레이어 위에 나타나도록 설정 */
`;function ve(){const[n,c]=s.useState(!1);return o("div",{children:[e("div",{role:"button",onClick:()=>{c(!0)},children:e(be,{})}),e(ue,{isOpen:n,setIsOpen:c})]})}const be=i(te)`
  color: black;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  ${g.lessThan("mobile")`
    width: 30px;
		height: 30px;
	`}
`,we=()=>{const n=w();return e(_e,{onClick:()=>{n("/")},children:e(ye,{src:"/assets/officiallogo.png",alt:"logo"})})},ye=i.img`
  height: 30px;
  font-size: 20px;
  ${g.lessThan("mobile")`
		height: 20px;
	`}
`,_e=i.button`
  background: transparent;
  border: none; 
  padding: 25px;
`;function ke(n){return b({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"}}]})(n)}const Ce=()=>{const n=d(r=>r.auth.isAuthenticated),c=w();return o("div",{children:[" ",n?e(h,{}):e(ze,{onClick:()=>{c("/login")},children:"로그인"})]})};i(ke)`
  //color: white;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;const ze=i.div`
  cursor: pointer;
  //color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  font-size: 20px;
`,Fe=()=>{const n={color:"#000000",fontweight:900,textDecoration:"none"},c={color:"#807e7e",fontWeight:900,textDecoration:"none"},r=d(t=>t.auth.isAuthenticated);return o(Ae,{children:[e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/",children:"홈"})})}),e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/findaccompany",children:"동행 찾기"})})}),r?e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/createroom",children:"동행 만들기"})})}):e(h,{}),r?e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/myaccompany",children:"내 동행"})})}):e(h,{})]})},u=i.div`
  font-size: 20px;
  ${g.lessThan("mobile")`
		font-size: 15px;
	`}
`,Ae=i.div`
  font-weight: bold;
  background-color: #ffffff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
  margin-bottom:20px;
`,f=i.div`
  margin-right: 20px;
`,Se=()=>{const n=d(c=>c.auth.isAuthenticated);return o($e,{children:[o(je,{className:n?"":"no-header",children:[e(we,{}),e(Ce,{}),n&&e(ve,{})]}),e(Ie,{}),e(Fe,{})]})},$e=i.div`
  display: flex;
  flex-direction: column;
`,je=i.header`
  width: 100%;

  /* height: 100%; */
  justify-content: space-between;
  margin: 0px;
  display: flex;
  align-items: center;
  background: #ffffff;
  //background: #1F1F45;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${g.lessThan("mobile")`
		font-size: 15px;
	`}
`,Ie=i.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  ${g.lessThan("mobile")`
		margin: 2px 0;
	`}
`,Le=()=>e(h,{children:e("footer",{children:e(Be,{})})}),Be=i.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  min-height: 300px;
  background-color: #1f1f45;
`,Me=n=>o(h,{children:[e(Se,{}),e(Ne,{children:n.children}),e(Le,{})]}),Ne=i.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  /* padding: 200px 0; */
`;function Ee(){return o(Me,{children:[e(Y,{}),e(Z,{})]})}export{Ee as default};
