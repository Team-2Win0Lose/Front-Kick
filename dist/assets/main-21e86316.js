import{s as t,a as e,j as s,u as y,e as d,k as T,m as $,O as k}from"./vendor-a1ee613c.js";import{S as w}from"./react-slick-f55c6e89.js";/* empty css                       */import{c as i,t as F,g as z,B as j}from"./common-1230f2e9.js";import C from"./FindAccompany-ea143d83.js";import{A as S}from"./shared/MyAccompany/main-68bdbd75.js";import"./react-icons-74110d71.js";const _=()=>e(B,{className:"carousel",children:s(w,{...{dots:!0,autoplay:!0,Infinite:!0,slidesToshow:1,slidesToscroll:1,swipeToslide:!0,autoplaySpeed:3e3,speed:500},children:[e(p,{children:e(h,{children:e(g,{src:"/assets/banner4.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(g,{src:"/assets/banner3.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(g,{src:"/assets/banner2.png",alt:"logo"})})}),e(p,{children:e(h,{children:e(g,{src:"/assets/banner1.png",alt:"logo"})})})]})}),p=t.div`
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
`,B=t.div`
    width: 100%;
`,A=()=>{y();const[a,o]=d.useState([]),c=d.useCallback(async()=>{const n=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();o(n)},[]);d.useEffect(()=>{c()},[c]);const l=[...a||[]].sort((r,n)=>n.recruit_ing-r.recruit_ing);return e(I,{className:"carousel",children:e(E,{...{dots:!1,autoplay:!0,infinite:!0,slidesToShow:4,slidesToScroll:4,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,prevArrow:e(U,{children:"‹"}),nextArrow:e(q,{children:"›"}),responsive:[{breakpoint:960,settings:{slidesToShow:2,slidesToScroll:2,autoplay:!1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,autoplay:!1}}]},children:l==null?void 0:l.map((r,n)=>n!==12&&s(R,{backgroundColor:r.team_color_sub,children:[e(G,{backgroundColor:r.team_color_main,children:e(M,{children:n+1})}),s(V,{children:[e(N,{children:e(D,{src:F(r.original_team_name),alt:r.original_team_name})}),s(Y,{children:[e(P,{children:r.original_team_name}),s(O,{children:[s(u,{children:[e(b,{children:"팔로워"}),e(m,{children:r.follower})]}),s(u,{children:[e(b,{children:"현재 동행팀"}),e(m,{children:r.recruit_ing})]})]})]})]})]},n))})})},I=t.div`
  padding: 0 50px;
`,E=t(w)`
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
`,R=t.div`
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
  ${i.lessThan("mobile")`
		height: 200px;
    margin-left:2%;
    margin-right:2%;
    margin-bottom: 10px;
	`}
`,G=t.div`
  display: flex;
  top: 0;
  left: 0;
  flex-direction: column;
  padding: 5px;
  height: 120px;
  background: ${a=>a.backgroundColor||"#FFFFFF"};
  border-radius: 20px 20px 0 0;
  width: 100%;
  ${i.lessThan("mobile")`
		height:60px;
    padding: 5px;
	`}
`,M=t.div`
  justify-content: left;
  align-items: left;
  font-size: 50px;
  font-weight: bold;
  padding: 3px;
  color: white;
  ${i.lessThan("mobile")`
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
`,N=t.div`
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
		width: 70px;
    height: 70px;
    top: 30%;
	`}
  
`,D=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  ${i.lessThan("tablet")`
		width: 80px;
    height: 80px;
	`}
  ${i.lessThan("mobile")`
		width:60px;
    height:60px;
	`}
`,P=t.div`
  justify-content: center;
  align-items: center;
  font-size: 25px;
  padding: 5px;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
    padding:1px;
	`}
`,V=t.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${i.lessThan("mobile")`
		padding: 0px;
	`}
`,Y=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  ${i.lessThan("mobile")`
		margin-top: 50px;
	`}
`,O=t.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
   ${i.lessThan("mobile")`
	`}
`,m=t.div`
  font-size: 20px;
  color: white;
   ${i.lessThan("mobile")`
		font-size: 15px;
	`}
`,u=t.div`
  display: flex;
  width: 100%;
  padding: 5px;
  gap:40px;
  font-size:10px;
  align-items: center;
  justify-content: space-between;
`,b=t.div`
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
`;const U=t.div`
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,q=t.div`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
  font-size: 24px;
`,H=z("token"),J={Authorization:`Bearer ${H}`},ge=a=>{const[o,c]=d.useState([]),{id:l,isAuthenticated:x}=T(n=>n.auth);d.useEffect(()=>{async function n(){try{const v=await(await fetch(`${j}/api/my-recruitment`,{method:"get",headers:J})).json();c(v)}catch(f){console.error("Error:",f)}}n()},[x,l]);const r=$();return s("div",{children:[x?s(K,{children:[s(L,{children:["👋 현재 나의 동행일정 (",o==null?void 0:o.length,")"]}),(o==null?void 0:o.length)===0?e(te,{children:e(ee,{children:"예정 중인 동행이 없어요 🥲"})}):e(Q,{children:o.length>0&&(o==null?void 0:o.map((n,f)=>e("div",{onClick:()=>r(`/findaccompany/detail/${n.recruitmentBoardId}`),children:e(S,{post:n})},n.recruitmentBoardId)))})]}):e(k,{}),e(X,{children:e(_,{})}),s(W,{children:[e(ne,{children:"🏆 구단별 응원순위"}),e(re,{children:"구단별 모집이 완료된 동행팀 수"}),e(A,{})]}),s(Z,{children:[e(ie,{children:"🙋‍♂️ 동행 구경하기"}),e(oe,{children:"나의 동행을 찾아보세요!"}),e(C,{})]})]})},K=t.div`
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`,Q=t.div`
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
`,W=t.div`
  background-color: #1f1f45;
  border-radius: 15px;
  padding: 10px 0;
  ${i.lessThan("mobile")`
		padding: 5px 0;
	`}
`,X=t.div`
  height: auto;
  overflow: hidden;
  margin-bottom: 20px;
`,Z=t.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 0;
  ${i.lessThan("mobile")`

	`}
`,L=t.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`,ee=t.div`
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: #5c5c5c;
  font-size: 20px;
  font-weight: bold;
`,te=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 100%;
  height: 30vh;
  background: #eeeeee;
  /* box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25); */
  border-radius: 20px;
`,ie=t.div`
  border: 1px;
  font-size: 25px;
  font-weight: bold;
  padding: 20px;
  ${i.lessThan("mobile")`
		font-size: 20px;
    padding: 10px 0;
	`}
`,ne=t.div`
  border: 1px;
  font-size: 25px;
  padding: 20px;
  font-weight: bold;
  color: white;
  ${i.lessThan("mobile")`
		font-size: 20px;
	`}
`,oe=t.div`
  font-size: 15px;
  margin-left: 20px;
  font-weight: bold;
  ${i.lessThan("mobile")`
		margin-left: 0px;
	`}
`,re=t.div`
  font-size: 15px;
  font-weight: bold;
  margin-left: 20px;
  margin-bottom: 30px;
  color: white;
`;export{ge as default};
