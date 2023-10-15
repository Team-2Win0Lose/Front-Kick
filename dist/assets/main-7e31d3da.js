import{s as t,a as e,j as n,u as b,f as c,b as w,O as v}from"./vendor-6e44eb02.js";import{S as u}from"./react-slick-bbe54c8b.js";/* empty css                       */import{c as i,t as y}from"./common-feb29b35.js";import F from"./FindAccompany-0ddc816f.js";const T=()=>e(z,{className:"carousel",children:n(u,{...{dots:!0,autoplay:!0,Infinite:!0,slidesToshow:1,slidesToscroll:1,swipeToslide:!0,autoplaySpeed:3e3,speed:500},children:[e(p,{children:e(x,{children:e(h,{src:"/assets/banner3.png",alt:"logo"})})}),e(p,{children:e(x,{children:e(h,{src:"/assets/banner2.png",alt:"logo"})})}),e(p,{children:e(x,{children:e(h,{src:"/assets/banner1.png",alt:"logo"})})})]})}),p=t.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,x=t.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,h=t.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`,z=t.div`
    width: 100%;
`,j=()=>{b();const[r,a]=c.useState([]),l=c.useCallback(async()=>{const s=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();a(s)},[]);c.useEffect(()=>{l()},[l]);const d=[...r||[]].sort((o,s)=>s.recruit_ing-o.recruit_ing);return e(C,{className:"carousel",children:e($,{...{dots:!1,autoplay:!0,infinite:!0,slidesToShow:4,slidesToScroll:4,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,prevArrow:e(N,{children:"‹"}),nextArrow:e(D,{children:"›"})},children:d==null?void 0:d.map((o,s)=>s!==12&&n(k,{backgroundColor:o.team_color_sub,children:[e(_,{backgroundColor:o.team_color_main,children:e(S,{children:s+1})}),n(G,{children:[e(B,{children:e(I,{src:y(o.original_team_name),alt:o.original_team_name})}),n(M,{children:[e(A,{children:o.original_team_name}),n(R,{children:[n(f,{children:[e(m,{children:"팔로워"}),e(g,{children:o.follower})]}),n(f,{children:[e(m,{children:"현재 동행팀"}),e(g,{children:o.recruit_ing})]})]})]})]})]},s))})})},C=t.div`
  padding: 0 30px;
`,$=t(u)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -15px;
  }

  .slick-slide > div {
    margin-right: 40px;
  }
`,k=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  background-color: ${r=>r.backgroundColor||"#FFFFFF"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
`,_=t.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${r=>r.backgroundColor||"#FFFFFF"};
  border-radius: 20px 20px 0 0;
  width: 100%;
`,S=t.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 30px;
	`}
  @font-face {
    font-family: 'Giants-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`,B=t.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%; 
  left: 50%; 
  background-color: #FFFFFF;
  border-radius:50%;
  ${i.lessThan("tablet")`
		width: 90px;
    height: 90px;
	`}
  transform: translate(-50%, -50%);
   ${i.lessThan("mobile")`
		width: 50px;
    height: 50px;
	`}
  
`,I=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${i.lessThan("tablet")`
		width: 80px;
    height: 80px;
	`}
  ${i.lessThan("mobile")`
		width:50px;
    height:50px;
	`}
`,A=t.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
	`}
`,G=t.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,M=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`,R=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
   ${i.lessThan("mobile")`
		padding: 0px;
	`}
`,g=t.div`
  font-size: 20px;
  color: white;
   ${i.lessThan("mobile")`
		font-size: 10px;
	`}
`,f=t.div`
  display: flex;
  width: 230px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
    ${i.lessThan("tablet")`
		width: 100%;
	`}
  ${i.lessThan("mobile")`
		width: 80%;
	`}
`,m=t.div`
  font-size: 20px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 10px;
	`}
`;t.div`
  margin-top: 10px;
  box-sizing: border-box;
  width: 60px;
  height: 24px;
  margin-right: 10px;
  background: #ffffff;
  border: 1px solid #1f1f45;
  text-align: center;
  font-size: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;t.div`
  width: 80px;
  height: 29px;
  display: flex;
  border: none;
  border-radius: 12px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;const N=t.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,D=t.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,ie=r=>{const a=w(l=>l.auth.isAuthenticated);return n("div",{children:[a?n(E,{children:[e(Y,{children:"👋 현재 나의 동행일정 (0)"}),e(q,{children:e(O,{children:"예정 중인 동행이 없어요 🥲"})})]}):e(v,{}),e(P,{children:e(T,{})}),n(L,{children:[e(J,{children:"🏆 구단별 응원순위"}),e(Q,{children:"구단별 모집이 완료된 동행팀 수"}),e(j,{})]}),n(V,{children:[e(H,{children:"🙋‍♂️ 동행 구경하기"}),e(K,{children:"나의 동행을 찾아보세요!"}),e(F,{})]})]})},E=t.div`
  margin-bottom:30px;
`,L=t.div`
  background-color:#1F1F45;
  border-radius:15px;
  padding: 10px 0;
`,P=t.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`,V=t.div`
  display : flex;
  flex-direction: column;
  padding: 10px 0;
`,Y=t.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`,O=t.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  color:#5c5c5c;
  font-size: 20px;
  font-weight: bold;
`,q=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  background: #eeeeee;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
`,H=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  ${i.lessThan("mobile")`
		font-size: 20px;
    border: 1px;
	`}

`,J=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
    border: 1px;
	`}

`,K=t.div` 
  font-size: 15px;
  margin-left: 20px;
`,Q=t.div` 
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;export{ie as default};
