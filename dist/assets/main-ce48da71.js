import{s as t,a as e,j as i,u as b,e as d,b as w,Q as v}from"./vendor-5d52e3a8.js";import{S as m}from"./react-slick-9fa7b3c7.js";/* empty css                       */import{c as s,a as y}from"./common-408be586.js";import F from"./FindAccompany-247c3308.js";import"./main-5ee14d30.js";const z=()=>e(j,{className:"carousel",children:i(m,{...{dots:!0,autoplay:!0,Infinite:!0,slidesToshow:1,slidesToscroll:1,swipeToslide:!0,autoplaySpeed:3e3,speed:500},children:[e(p,{children:e(x,{children:e(g,{src:"/assets/banner3.png",alt:"logo"})})}),e(p,{children:e(x,{children:e(g,{src:"/assets/banner2.png",alt:"logo"})})}),e(p,{children:e(x,{children:e(g,{src:"/assets/banner1.png",alt:"logo"})})})]})}),p=t.div`
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
`,g=t.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`,j=t.div`
    width: 100%;
`,C=()=>{b();const[o,l]=d.useState([]),a=d.useCallback(async()=>{const r=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();l(r)},[]);d.useEffect(()=>{a()},[a]);const c=[...o||[]].sort((n,r)=>r.recruit_ing-n.recruit_ing);return e(T,{className:"carousel",children:e(k,{...{dots:!1,autoplay:!0,infinite:!0,slidesToShow:4,slidesToScroll:4,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,prevArrow:e(N,{children:"‹"}),nextArrow:e(D,{children:"›"})},children:c==null?void 0:c.map((n,r)=>r!==12&&i(_,{backgroundColor:n.team_color_sub,children:[e($,{backgroundColor:n.team_color_main,children:e(S,{children:r+1})}),i(G,{children:[e(B,{children:e(I,{src:y(n.original_team_name),alt:n.original_team_name})}),i(M,{children:[e(A,{children:n.original_team_name}),i(R,{children:[i(f,{children:[e(u,{children:"팔로워"}),e(h,{children:n.follower})]}),i(f,{children:[e(u,{children:"현재 동행팀"}),e(h,{children:n.recruit_ing})]})]})]})]})]},r))})})},T=t.div`
  padding: 0 30px;
`,k=t(m)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -15px;
  }

  .slick-slide > div {
    margin-right: 40px;
  }
`,_=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  background-color: ${o=>o.backgroundColor||"#FFFFFF"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
`,$=t.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${o=>o.backgroundColor||"#FFFFFF"};
  border-radius: 20px 20px 0 0;
  width: 100%;
`,S=t.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${s.lessThan("mobile")`
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
  transform: translate(-50%, -50%);
  
`,I=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${s.lessThan("mobile")`
		width:100px;
    height:100px;
	`}
`,A=t.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${s.lessThan("mobile")`
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
`,h=t.div`
  font-size: 20px;
  color: white;
`,f=t.div`
  display: flex;
  width: 230px;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`,u=t.div`
  font-size: 20px;
  color: white;
  ${s.lessThan("mobile")`
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
`,ne=o=>{const l=w(a=>a.auth.isAuthenticated);return i("div",{children:[l?i(E,{children:[e(Y,{children:"👋 현재 나의 동행일정 (0)"}),e(q,{children:e(Q,{children:"예정 중인 동행이 없어요 🥲"})})]}):e(v,{}),e(P,{children:e(z,{})}),i(L,{children:[e(J,{children:"🏆 구단별 응원순위"}),e(O,{children:"구단별 모집이 완료된 동행팀 수"}),e(C,{})]}),i(V,{children:[e(H,{children:"🙋‍♂️ 동행 구경하기"}),e(K,{children:"나의 동행을 찾아보세요!"}),e(F,{})]})]})},E=t.div`
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
`,Q=t.div`
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
  ${s.lessThan("mobile")`
		font-size: 20px;
    border: 1px;
	`}

`,J=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  color: white;
  ${s.lessThan("mobile")`
		font-size: 20px;
    border: 1px;
	`}

`,K=t.div` 
  font-size: 15px;
  margin-left: 20px;
`,O=t.div` 
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;export{ne as default};
