import{G as w,s as i,M as y,k as h,a as e,j as o,N as Q,e as d,u as J,O as g,Q as N,S as m,T as X,U as Y}from"./vendor-0071affc.js";import{p as Z,c as l,B as D,q as ee}from"./common-a87b2a0c.js";function te(n){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(n)}function ne(n){return w({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z"}}]})(n)}const V=n=>{const c=y();return h(t=>t.auth.isAuthenticated)?e(E,{children:o(H,{children:[n.profileImg!==void 0?e(oe,{src:n.profileImg}):e(ce,{children:e(ne,{size:"60"})}),o(G,{children:[n.name!==""&&o(x,{children:[n.name," 님"]}),n.nickname!==""&&o(x,{children:[n.nickname," 님"]}),e(ie,{children:n.email})]}),e(Q,{size:"30",onClick:()=>c("/mypage")})]})}):e(E,{children:e(H,{children:e(G,{onClick:()=>{c("/login")},children:e(x,{children:"로그인을 해주세요"})})})})},E=i.div`
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
`,re=n=>e(le,{children:o(de,{children:[e(ge,{teamcolor:n.team_color_main,children:e(se,{src:n.logo_img_url,alt:n.original_team_name})}),o(me,{teamcolor:n.team_color_sub,children:[e(ae,{children:Z(n.original_team_name)}),o(he,{children:[o(p,{children:[n.follower," 팔로워"]}),o(p,{children:[n.recruit_end," 마감된 동행팀"]}),o(p,{children:["현재 ",n.recruit_ing,"팀 동행중"]})]})]})]})}),ae=i.div`
  font-size: 20px;
  flex-direction: column;
`,p=i.p`
  font-size: 12px;
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
`,he=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
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
`;i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;function fe({isOpen:n,setIsOpen:c}){var C,z,F,$,j,S,A,I,L,T,B,M;const r=d.useRef(),[t,R]=d.useState(),P=h(s=>s.auth.isAuthenticated),{token:U,id:W}=h(s=>s.auth),K=J();d.useEffect(()=>(document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}));const _=d.useCallback(async()=>{const q=await(await fetch(`${D}/api/user/profile/?id=${W}`,{method:"get",headers:{Authorization:`Bearer ${U}`}})).json();R(q)},[]);d.useEffect(()=>{_()},[_]);const k=s=>{r.current.contains(s.target)||a()},a=()=>{c(!1)};return P?o(g,{children:[n&&e(pe,{onClick:a}),o(O,{id:"sidebar",ref:r,className:n?"open":"",children:[e(N,{size:"30",color:"#ffffff",alt:"close",onClick:a,onKeyDown:a}),o("ul",{children:[o(v,{children:[e(b,{children:"내 정보"}),e(V,{profileImg:(C=t==null?void 0:t.profile)==null?void 0:C.profileImg,name:(z=t==null?void 0:t.profile)==null?void 0:z.name,nickname:(F=t==null?void 0:t.profile)==null?void 0:F.nickname,email:($=t==null?void 0:t.profile)==null?void 0:$.email})]}),e(b,{children:"나의 응원팀"}),e(v,{children:e(re,{team_id:(j=t==null?void 0:t.profile)==null?void 0:j.cheering_team_id,follower:(S=t==null?void 0:t.cheering_team)==null?void 0:S.follower,logo_img_url:`https://kickstorage.blob.core.windows.net${(A=t==null?void 0:t.cheering_team)==null?void 0:A.logo_img_url}`,original_team_name:(I=t==null?void 0:t.cheering_team)==null?void 0:I.original_team_name,recruit_end:(L=t==null?void 0:t.cheering_team)==null?void 0:L.recruit_end,recruit_ing:(T=t==null?void 0:t.cheering_team)==null?void 0:T.recruit_ing,team_color_main:(B=t==null?void 0:t.cheering_team)==null?void 0:B.team_color_main,team_color_sub:(M=t==null?void 0:t.cheering_team)==null?void 0:M.team_color_sub})}),e(ue,{children:e(xe,{onClick:()=>{K(ee()),a()},children:"로그아웃"})})]})]})]}):o(O,{id:"sidebar",ref:r,className:n?"open":"",children:[e(N,{size:"30",color:"#ffffff",alt:"close",onClick:a,onKeyDown:a}),e("ul",{children:o(v,{onClick:()=>a(),children:[e(b,{children:"내 정보"}),e(V,{})]})})]})}const O=i.div`
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
`,ue=i.div`
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
`;function be(){const[n,c]=d.useState(!1);return o("div",{children:[e("div",{role:"button",onClick:()=>{c(!0)},children:e(ve,{})}),e(fe,{isOpen:n,setIsOpen:c})]})}const ve=i(te)`
  color: black;
  width: 40px;
  height: 40px;
  margin-right: 40px;
  ${l.lessThan("mobile")`
    width: 30px;
		height: 30px;
	`}
`,we=()=>{const n=y();return e(_e,{onClick:()=>{n("/")},children:e(ye,{src:"/assets/officiallogo.png",alt:"logo"})})},ye=i.img`
  height: 30px;
  font-size: 20px;
  ${l.lessThan("mobile")`
		height: 20px;
	`}
`,_e=i.button`
  background: transparent;
  border: none; 
  padding: 25px;
`;function ke(n){return w({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848 2.84 2.84 0 0 1-.848.575 2.715 2.715 0 0 1-2.064 0 2.84 2.84 0 0 1-.848-.575 2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406 4.883 4.883 0 0 0-1.088-1.135 5.207 5.207 0 0 0-1.04-.608 2.82 2.82 0 0 0 .464-.383 4.2 4.2 0 0 0 .624-.784 3.624 3.624 0 0 0 .528-1.934 3.71 3.71 0 0 0-.288-1.47 3.799 3.799 0 0 0-.816-1.199 3.845 3.845 0 0 0-1.2-.8 3.72 3.72 0 0 0-1.472-.287 3.72 3.72 0 0 0-1.472.288 3.631 3.631 0 0 0-1.2.815 3.84 3.84 0 0 0-.8 1.199 3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"}}]})(n)}const Ce=()=>{const n=h(r=>r.auth.isAuthenticated),c=y();return o("div",{children:[" ",n?e(g,{}):e(ze,{onClick:()=>{c("/login")},children:"로그인"})]})};i(ke)`
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
  ${l.lessThan("mobile")`
		font-size: 15px;
	`}
`,Fe=()=>{const n={color:"#000000",fontweight:900,textDecoration:"none"},c={color:"#807e7e",fontWeight:900,textDecoration:"none"},r=h(t=>t.auth.isAuthenticated);return o($e,{children:[e(u,{children:e(f,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/",children:"홈"})})}),e(u,{children:e(f,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/findaccompany",children:"동행 찾기"})})}),r?e(u,{children:e(f,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/createroom",children:"동행 만들기"})})}):e(g,{}),r?e(u,{children:e(f,{children:e(m,{style:({isActive:t})=>t?n:c,to:"/myaccompany",children:"내 동행"})})}):e(g,{})]})},f=i.div`
  font-size: 20px;
  ${l.lessThan("mobile")`
		font-size: 15px;
	`}
`,$e=i.div`
  font-weight: bold;
  background-color: #ffffff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
  margin-bottom:20px;
`,u=i.div`
  margin-right: 20px;
`,je=()=>{const n=h(c=>c.auth.isAuthenticated);return o(Se,{children:[o(Ae,{className:n?"":"no-header",children:[e(we,{}),e(Ce,{}),n&&e(be,{})]}),e(Ie,{}),e(Fe,{})]})},Se=i.div`
  display: flex;
  flex-direction: column;
`,Ae=i.header`
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
`,Ie=i.div`
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  ${l.lessThan("mobile")`
		margin: 1px 0;
	`}
`,Le=()=>e(g,{children:e("footer",{children:e(Te,{})})}),Te=i.div`
  display: flex;
  width: 100%;
  height: 200px;
  margin-top: 10px;
  min-height: 300px;
  background-color: #1f1f45;
`,Be=n=>o(g,{children:[e(je,{}),e(Me,{children:n.children}),e(Le,{})]}),Me=i.main`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 50px;
  /* padding: 200px 0; */
`;function Ee(){return o(Be,{children:[e(X,{}),e(Y,{})]})}export{Ee as default};
