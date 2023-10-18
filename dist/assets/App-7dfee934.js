import{G as w,s as i,m as y,k as h,a as e,j as o,O as q,e as d,u as J,Q as g,S as N,T as m,U as X,V as Y}from"./vendor-032019a3.js";import{u as Z,c as l,B as D,v as ee}from"./common-77df1045.js";import{k as te}from"./react-toastify-31657824.js";function ne(n){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(n)}function ie(n){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z"}}]})(n)}const V=n=>{const r=y();return h(t=>t.auth.isAuthenticated)?e(O,{children:o(E,{children:[n.profileImg!==void 0?e(re,{src:n.profileImg}):e(ce,{children:e(ie,{size:"60"})}),o(H,{children:[n.name!==""&&o(x,{children:[n.name," 님"]}),n.nickname!==""&&o(x,{children:[n.nickname," 님"]}),e(oe,{children:n.email})]}),e(q,{size:"30",onClick:()=>r("/mypage")})]})}):e(O,{children:e(E,{children:e(H,{onClick:()=>{r("/login")},children:e(x,{children:"로그인을 해주세요"})})})})},O=i.div`
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
`,oe=i.p`
  font-weight: 500;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #585858;
`,E=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`,H=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 10px;
`,re=i.img`
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
`,ae=n=>e(se,{children:o(he,{children:[e(me,{teamcolor:n.team_color_main,children:e(de,{src:n.logo_img_url,alt:n.original_team_name})}),o(ue,{teamcolor:n.team_color_sub,children:[e(le,{children:Z(n.original_team_name)}),o(ge,{children:[o(p,{children:[n.follower," 팔로워"]}),o(p,{children:[n.recruit_end," 마감된 동행팀"]}),o(p,{children:["현재 ",n.recruit_ing,"팀 동행중"]})]})]})]})}),le=i.div`
  font-size: 20px;
  flex-direction: column;
`,p=i.p`
  font-size: 12px;
`,se=i.div`
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
`,de=i.img`
  width: 50px;
  height: 50px;
`,he=i.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`,ge=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`,me=i.div`
  position: absolute;
  width: 40%;
  height: 100%;

  top: 0;
  left: 0;
  background-color: ${n=>n.teamcolor||"#FFFFFF"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0 0 12px;
`,ue=i.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 20px;
  top: 0;
  width: 60%;
  height: 100%;
  left: 40%;
  background-color: ${n=>n.teamcolor||"#FFFFFF"};
  border-radius: 0 12px 12px 0;
`;i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;function fe({isOpen:n,setIsOpen:r}){var C,z,F,$,j,S,A,I,L,T,B,M;const c=d.useRef(),[t,P]=d.useState(),R=h(s=>s.auth.isAuthenticated),{token:U,id:W}=h(s=>s.auth),K=J();d.useEffect(()=>(document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}));const _=d.useCallback(async()=>{const Q=await(await fetch(`${D}/api/user/profile/?id=${W}`,{method:"get",headers:{Authorization:`Bearer ${U}`}})).json();P(Q)},[]);d.useEffect(()=>{_()},[_]);const k=s=>{c.current.contains(s.target)||a()},a=()=>{r(!1)};return R?o(g,{children:[n&&e(be,{onClick:a}),o(G,{id:"sidebar",ref:c,className:n?"open":"",children:[e(N,{size:"30",color:"#ffffff",alt:"close",onClick:a,onKeyDown:a}),o("ul",{children:[o(v,{children:[e(b,{children:"내 정보"}),e(V,{profileImg:(C=t==null?void 0:t.profile)==null?void 0:C.profileImg,name:(z=t==null?void 0:t.profile)==null?void 0:z.name,nickname:(F=t==null?void 0:t.profile)==null?void 0:F.nickname,email:($=t==null?void 0:t.profile)==null?void 0:$.email})]}),e(b,{children:"나의 응원팀"}),e(v,{children:e(ae,{team_id:(j=t==null?void 0:t.profile)==null?void 0:j.cheering_team_id,follower:(S=t==null?void 0:t.cheering_team)==null?void 0:S.follower,logo_img_url:`https://kickstorage.blob.core.windows.net${(A=t==null?void 0:t.cheering_team)==null?void 0:A.logo_img_url}`,original_team_name:(I=t==null?void 0:t.cheering_team)==null?void 0:I.original_team_name,recruit_end:(L=t==null?void 0:t.cheering_team)==null?void 0:L.recruit_end,recruit_ing:(T=t==null?void 0:t.cheering_team)==null?void 0:T.recruit_ing,team_color_main:(B=t==null?void 0:t.cheering_team)==null?void 0:B.team_color_main,team_color_sub:(M=t==null?void 0:t.cheering_team)==null?void 0:M.team_color_sub})}),e(xe,{children:e(pe,{onClick:()=>{K(ee()),a()},children:"로그아웃"})})]})]})]}):o(G,{id:"sidebar",ref:c,className:n?"open":"",children:[e(N,{size:"30",color:"#ffffff",alt:"close",onClick:a,onKeyDown:a}),e("ul",{children:o(v,{onClick:()=>a(),children:[e(b,{children:"내 정보"}),e(V,{})]})})]})}const G=i.div`
  z-index: 5000;
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
  ${l.lessThan("mobile")`
    width:55%;
    right:-55%;
	`}
`,b=i.li`
  margin: 15px 0px;
  font-size: 1rem;
  color: #ffffff;
  ${l.lessThan("mobile")`
    margin: 10px 0px;
	`}
`,v=i.div`
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 12px;
`,xe=i.div`
  width: 85%;
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,pe=i.div`
  width: 80px;
  padding: 10px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  color: white;
  border-radius: 12px;
`,be=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 어두운 배경색과 투명도 조절 */
  z-index: 4; /* 배경 레이어가 사이드바 레이어 위에 나타나도록 설정 */
`;function ve(){const[n,r]=d.useState(!1);return o("div",{children:[e("div",{role:"button",onClick:()=>{r(!0)},children:e(we,{})}),e(fe,{isOpen:n,setIsOpen:r})]})}const we=i(ne)`
  color: black;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  ${l.lessThan("mobile")`
    width: 30px;
		height: 30px;
	`}
`,ye=()=>{const n=y();return e(ke,{onClick:()=>{n("/")},children:e(_e,{src:"/assets/officiallogo.png",alt:"logo"})})},_e=i.img`
  height: 30px;
  font-size: 20px;
  ${l.lessThan("mobile")`
		height: 20px;
	`}
`,ke=i.button`
  background: transparent;
  border: none; 
  padding: 25px;
`;function Ce(n){return w({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"}}]})(n)}const ze=()=>{const n=h(c=>c.auth.isAuthenticated),r=y();return o("div",{children:[" ",n?e(g,{}):e(Fe,{onClick:()=>{r("/login")},children:"로그인"})]})};i(Ce)`
  //color: white;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;const Fe=i.div`
  cursor: pointer;
  //color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  font-size: 20px;
  ${l.lessThan("mobile")`
		font-size: 15px;
	`}
`,$e=()=>{const n={color:"#000000",fontweight:900,textDecoration:"none"},r={color:"#807e7e",fontWeight:900,textDecoration:"none"},c=h(t=>t.auth.isAuthenticated);return o(je,{children:[e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:r,to:"/",children:"홈"})})}),e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:r,to:"/findaccompany",children:"동행 찾기"})})}),c?e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:r,to:"/createroom",children:"동행 만들기"})})}):e(g,{}),c?e(f,{children:e(u,{children:e(m,{style:({isActive:t})=>t?n:r,to:"/myaccompany",children:"내 동행"})})}):e(g,{})]})},u=i.div`
  font-size: 20px;
  ${l.lessThan("mobile")`
		font-size: 15px;
	`}
`,je=i.div`
  font-weight: bold;
  background-color: #ffffff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
  margin-bottom:20px;
`,f=i.div`
  margin-right: 20px;
`,Se=()=>{const n=h(r=>r.auth.isAuthenticated);return o(Ae,{children:[o(Ie,{className:n?"":"no-header",children:[e(ye,{}),e(ze,{}),n&&e(ve,{})]}),e(Le,{}),e($e,{})]})},Ae=i.div`
  display: flex;
  flex-direction: column;
`,Ie=i.header`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  background: #ffffff;
  //background: #1F1F45;
  overflow-x: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${l.lessThan("mobile")`
		font-size: 15px;
	`}
`,Le=i.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  ${l.lessThan("mobile")`
		margin: 1px 0;
	`}
`,Te=()=>e(g,{children:e("footer",{children:e(Be,{})})}),Be=i.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  min-height: 300px;
  background-color: #1f1f45;
`,Me=n=>o(g,{children:[e(Se,{}),e(Ne,{children:n.children}),e(Te,{})]}),Ne=i.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  /* padding: 200px 0; */
`;function He(){return o(Me,{children:[e(X,{}),e(Y,{}),e(te,{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,theme:"light",limit:1})]})}export{He as default};
