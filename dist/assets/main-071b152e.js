import{s as t,a as e,j as o,u as y,e as d,k as v,m as T,O as $}from"./vendor-cdd8924f.js";import{S as b}from"./react-slick-b06b373c.js";/* empty css                       */import{c as n,t as k,g as F,B as z}from"./common-06e38f36.js";import j from"./FindAccompany-6076aac9.js";import{A as C}from"./shared/MyAccompany/main-e673cab7.js";import"./react-icons-ebf3d52b.js";const S=()=>e(_,{className:"carousel",children:o(b,{...{dots:!0,autoplay:!0,Infinite:!0,slidesToshow:1,slidesToscroll:1,swipeToslide:!0,autoplaySpeed:3e3,speed:500},children:[e(p,{children:e(h,{children:e(g,{src:"/assets/banner4.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(g,{src:"/assets/banner3.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(g,{src:"/assets/banner2.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(g,{src:"/assets/banner1.png",alt:"logo"})})})]})}),p=t.div`
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
`,g=t.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
`,_=t.div`
    width: 100%;
`,B=()=>{y();const[a,s]=d.useState([]),c=d.useCallback(async()=>{const r=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();s(r)},[]);d.useEffect(()=>{c()},[c]);const l=[...a||[]].sort((i,r)=>r.recruit_ing-i.recruit_ing);return e(A,{className:"carousel",children:e(I,{...{dots:!1,autoplay:!0,infinite:!0,slidesToShow:4,slidesToScroll:4,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,prevArrow:e(Y,{children:"‹"}),nextArrow:e(O,{children:"›"}),responsive:[{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2,autoplay:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!1}}]},children:l==null?void 0:l.map((i,r)=>r!==12&&o(E,{backgroundColor:i.team_color_sub,children:[e(R,{backgroundColor:i.team_color_main,children:e(G,{children:r+1})}),o(L,{children:[e(M,{children:e(N,{src:k(i.original_team_name),alt:i.original_team_name})}),o(P,{children:[e(D,{children:i.original_team_name}),o(V,{children:[o(m,{children:[e(u,{children:"팔로워"}),e(f,{children:i.follower})]}),o(m,{children:[e(u,{children:"현재 동행팀"}),e(f,{children:i.recruit_ing})]})]})]})]})]},r))})})},A=t.div`
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
  background-color: ${a=>a.backgroundColor||"#FFFFFF"};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 20px;
  ${n.lessThan("mobile")`
		height: 200px;
    margin-left:2%;
    margin-right:2%;
    margin-bottom: 10px;
	`}
`,R=t.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${a=>a.backgroundColor||"#FFFFFF"};
  border-radius: 20px 20px 0 0;
  width: 100%;
  ${n.lessThan("mobile")`
		height:60px;
    padding: 5px;
	`}
`,G=t.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 30px;
    padding: 2px;
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
  ${n.lessThan("tablet")`
		width: 90px;
    height: 90px;
	`}
  transform: translate(-50%, -50%);
   ${n.lessThan("mobile")`
		width: 70px;
    height: 70px;
    top: 30%;
	`}
  
`,N=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${n.lessThan("tablet")`
		width: 80px;
    height: 80px;
	`}
  ${n.lessThan("mobile")`
		width:60px;
    height:60px;
	`}
`,D=t.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 20px;
    padding:1px;
	`}
`,L=t.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${n.lessThan("mobile")`
		padding: 0px;
	`}
`,P=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  ${n.lessThan("mobile")`
		margin-top: 50px;
	`}
`,V=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
   ${n.lessThan("mobile")`
	`}
`,f=t.div`
  font-size: 20px;
  color: white;
   ${n.lessThan("mobile")`
		font-size: 15px;
	`}
`,m=t.div`
  display: flex;
  width: 100%;
  padding: 5px;
  gap:40px;
  font-size:10px;
  align-items: center;
  justify-content: space-between;
`,u=t.div`
  font-size: 20px;
  color: white;
  ${n.lessThan("mobile")`
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
`,O=t.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,U=F("token"),q={Authorization:`Bearer ${U}`},he=a=>{const[s,c]=d.useState([]),l=v(i=>i.auth.isAuthenticated);d.useEffect(()=>{async function i(){try{const w=await(await fetch(`${z}/api/my-recruitment`,{method:"get",headers:q})).json();c(w)}catch(r){console.error("Error:",r)}}i()},[]);const x=T();return o("div",{children:[l?o(H,{children:[o(X,{children:["👋 현재 나의 동행일정 (",s.length,")"]}),s.length===0?e(ee,{children:e(Z,{children:"예정 중인 동행이 없어요 🥲"})}):e(J,{children:s.length>0&&(s==null?void 0:s.map((i,r)=>e("div",{onClick:()=>x(`/findaccompany/detail/${i.recruitmentBoardId}`),children:e(C,{post:i})},i.recruitmentBoardId)))})]}):e($,{}),e(Q,{children:e(S,{})}),o(K,{children:[e(ie,{children:"🏆 구단별 응원순위"}),e(oe,{children:"구단별 모집이 완료된 동행팀 수"}),e(B,{})]}),o(W,{children:[e(te,{children:"🙋‍♂️ 동행 구경하기"}),e(ne,{children:"나의 동행을 찾아보세요!"}),e(j,{})]})]})},H=t.div`
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
  ${n.lessThan("mobile")`
		padding: 5px 0;
	`}
`,Q=t.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`,W=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  ${n.lessThan("mobile")`

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
  font-weight: bold;
  padding: 20px;
  ${n.lessThan("mobile")`
		font-size: 20px;
    padding: 10px 0;
	`}
`,ie=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  color: white;
  ${n.lessThan("mobile")`
		font-size: 20px;
	`}
`,ne=t.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
  ${n.lessThan("mobile")`
		margin-left: 0px;
	`}
`,oe=t.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;export{he as default};
