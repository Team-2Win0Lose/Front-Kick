import{s as t,a as e,j as o,u as y,e as c,k as v,m as T,Q as F}from"./vendor-032019a3.js";import{S as b}from"./react-slick-6744f890.js";/* empty css                       */import{c as i,t as k,g as z,B as j}from"./common-77df1045.js";import C from"./FindAccompany-8dbaca8d.js";import{A as $}from"./shared/MyAccompany/main-d941e367.js";const _=()=>e(S,{className:"carousel",children:o(b,{...{dots:!0,autoplay:!0,Infinite:!0,slidesToshow:1,slidesToscroll:1,swipeToslide:!0,autoplaySpeed:3e3,speed:500},children:[e(p,{children:e(h,{children:e(x,{src:"/assets/banner4.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(x,{src:"/assets/banner3.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(x,{src:"/assets/banner2.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(x,{src:"/assets/banner1.png",alt:"logo"})})})]})}),p=t.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,h=t.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,x=t.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`,S=t.div`
    width: 100%;
`,B=()=>{y();const[s,a]=c.useState([]),d=c.useCallback(async()=>{const r=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();a(r)},[]);c.useEffect(()=>{d()},[d]);const l=[...s||[]].sort((n,r)=>r.recruit_ing-n.recruit_ing);return e(A,{className:"carousel",children:e(I,{...{dots:!1,autoplay:!0,infinite:!0,slidesToShow:4,slidesToScroll:4,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,prevArrow:e(Y,{children:"‹"}),nextArrow:e(Q,{children:"›"})},children:l==null?void 0:l.map((n,r)=>r!==12&&o(E,{backgroundColor:n.team_color_sub,children:[e(R,{backgroundColor:n.team_color_main,children:e(G,{children:r+1})}),o(L,{children:[e(M,{children:e(N,{src:k(n.original_team_name),alt:n.original_team_name})}),o(P,{children:[e(D,{children:n.original_team_name}),o(V,{children:[o(m,{children:[e(u,{children:"팔로워"}),e(f,{children:n.follower})]}),o(m,{children:[e(u,{children:"현재 동행팀"}),e(f,{children:n.recruit_ing})]})]})]})]})]},r))})})},A=t.div`
  padding: 0 50px;
`,I=t(b)`
  .slick-slide {
  }

  .slick-list {
    margin-right: -15px;
  }

  .slick-slide > div {
    margin-right: 40px;
  }

  .slick-prev{
  }
`,E=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 343px;
  background-color: ${s=>s.backgroundColor||"#FFFFFF"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
`,R=t.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${s=>s.backgroundColor||"#FFFFFF"};
  border-radius: 20px 20px 0 0;
  width: 100%;
`,G=t.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
	`}
  @font-face {
    font-family: 'Giants-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/Giants-Bold.woff2')
      format('woff2');
    font-weight: 700;
    font-style: normal;
  }
`,M=t.div`
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
  
`,N=t.img`
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
`,D=t.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
	`}
`,L=t.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,P=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`,V=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
   ${i.lessThan("mobile")`
		padding: 0px;
	`}
`,f=t.div`
  font-size: 20px;
  color: white;
   ${i.lessThan("mobile")`
		font-size: 10px;
	`}
`,m=t.div`
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
`,u=t.div`
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
`;const Y=t.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,Q=t.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,U=z("token"),q={Authorization:`Bearer ${U}`},pe=s=>{const[a,d]=c.useState([]),l=v(n=>n.auth.isAuthenticated);c.useEffect(()=>{async function n(){try{const w=await(await fetch(`${j}/api/my-recruitment`,{method:"get",headers:q})).json();d(w)}catch(r){console.error("Error:",r)}}n()},[]);const g=T();return o("div",{children:[l?o(H,{children:[o(X,{children:["👋 현재 나의 동행일정 (",a.length,")"]}),a.length===0?e(ee,{children:e(Z,{children:"예정 중인 동행이 없어요 🥲"})}):e(J,{children:a==null?void 0:a.map((n,r)=>e("div",{onClick:()=>g(`/findaccompany/detail/${n.recruitmentBoardId}`),children:e($,{post:n})},n.recruitmentBoardId))})]}):e(F,{}),e(O,{children:e(_,{})}),o(K,{children:[e(ne,{children:"🏆 구단별 응원순위"}),e(oe,{children:"구단별 모집이 완료된 동행팀 수"}),e(B,{})]}),o(W,{children:[e(te,{children:"🙋‍♂️ 동행 구경하기"}),e(ie,{children:"나의 동행을 찾아보세요!"}),e(C,{})]})]})},H=t.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`,J=t.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4열로 배치 */
  justify-content: center;
  align-content: center;
  gap: 20px;
  background: #eeeeee;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 12px;
`,K=t.div`
  background-color: #1f1f45;
  border-radius: 15px;
  padding: 10px 0;
`,O=t.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`,W=t.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  ${i.lessThan("mobile")`

	`}
`,X=t.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`,Z=t.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #5c5c5c;
  font-size: 20px;
  font-weight: bold;
`,ee=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  background: #eeeeee;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
`,te=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  ${i.lessThan("mobile")`
		font-size: 20px;
	`}
`,ne=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
	`}
`,ie=t.div`
  font-size: 15px;
  margin-left: 20px;
`,oe=t.div`
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;export{pe as default};
