import{s as t,a as i,j as r,e as l}from"../../vendor-34c37101.js";import{S as j}from"../../react-slick-2febd1cd.js";/* empty css                           */import{t as p,c as k}from"../../common-e20ce833.js";const T=e=>i(S,{children:r(z,{teamcolor:e==null?void 0:e.team_color_sub,children:[i(C,{teamcolor:e==null?void 0:e.team_color_main}),i(A,{children:i(B,{children:i(I,{src:p(e==null?void 0:e.logo_img_url)})})}),r(N,{children:[i(E,{children:e==null?void 0:e.team_name}),r($,{children:[r(G,{children:[i(c,{children:e==null?void 0:e.recruit_ing}),i(d,{children:"모집 중인 동행 팀"})]}),i(b,{}),r(M,{children:[i(c,{children:e==null?void 0:e.follower}),i(d,{children:"팔로워"})]}),i(b,{}),r(W,{children:[i(c,{children:e==null?void 0:e.recruit_end}),i(d,{children:"마감된 동행 팀"})]})]})]})]})}),S=t.div`
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`,z=t.div`
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 264px;
  height: 360px;
  background-color: ${e=>e.teamcolor||"#FFFFFF"};
  border-radius: 12px;
`,C=t.div`
  z-index: 1;
  position: absolute;
  top: 0;
  height: 120px;
  width: 264px;
  background-color: ${e=>e.teamcolor||"#FFFFFF"};
  border-radius: 12px 12px 0 0;
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
  
`,A=t.div`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  object-fit: cover;
  font-weight: bold;
  margin-bottom: 120px;
  width: 180px;
  height: 180px;
  border: none;
  border-radius: 90px;
`,I=t.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`,N=t.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  top: 120px;
  z-index: 2;
  width: 264px;
  height: 240px;
  padding: 0 25px 50px;

  border-radius: 12px;
  gap: 9px;
`,E=t.div`
  font-size: 25px;
  font-weight: bold;
  font-weight: medium;
  color: #ffffff;
  margin-bottom: 20px;
`,$=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: #ffffff;
`,b=t.div`
  width: 4px;
  height: 4px;
  background-color: #9b9b9b;
  border: none;
  border-radius: 100%;
`,G=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`,M=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`,W=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #ffffff;
`,c=t.p`
  font-size: 15px;
  font-weight: bolder;
  color: #ffffff;
`,d=t.p`
  font-size: 10px;
  font-weight: bolder;
  color: #ffffff;
`,ee=()=>{var f,m,g,x,h,u,_;const[e,y]=l.useState(),[w,v]=l.useState([]),s=l.useCallback(async()=>{const a=await(await fetch("https://kick-back.azurewebsites.net/api/team_info/list_detail",{method:"GET"})).json();v(a)},[]);l.useEffect(()=>{s()},[s]);const o=[...w||[]].sort((n,a)=>a.recruit_ing-n.recruit_ing),F=n=>{y(n)};return r(L,{children:[i(H,{...{dots:!1,autoplay:!1,infinite:!0,slidesToShow:7,slidesToScroll:2,swipeToSlide:!0,autoplaySpeed:3e3,speed:500,accessibility:!0,prevArrow:i(K,{children:"‹"}),nextArrow:i(Q,{children:"›"}),responsive:[{breakpoint:1024,settings:{slidesToShow:5,slidesToScroll:2}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}}]},children:o.map((n,a)=>a!==12&&r("div",{children:[i(O,{children:i(Y,{onClick:()=>F(n.original_team_name),children:i(q,{children:i(D,{src:p(n.original_team_name),alt:n.original_team_name})})})},a),i(J,{children:i(P,{children:n.team_name})})]},a))}),e&&i(T,{original_team_name:e,team_color_main:((f=o.find(n=>n.original_team_name===e))==null?void 0:f.team_color_main)||"",team_name:((m=o.find(n=>n.original_team_name===e))==null?void 0:m.team_name)||"",team_color_sub:((g=o.find(n=>n.original_team_name===e))==null?void 0:g.team_color_sub)||"",logo_img_url:((x=o.find(n=>n.original_team_name===e))==null?void 0:x.original_team_name)||"",recruit_ing:((h=o.find(n=>n.original_team_name===e))==null?void 0:h.recruit_ing)||1,follower:((u=o.find(n=>n.original_team_name===e))==null?void 0:u.follower)||1,recruit_end:((_=o.find(n=>n.original_team_name===e))==null?void 0:_.recruit_end)||1})]})},H=t(j)`
  max-width: 100vw;
  width: 100%;
  overflow: hidden;

  .slick-slide {
  }

  .slick-list {
    margin-right: -20%;
  }

  .slick-slide > div {
    margin-right: 20%;
  }
`,L=t.div`
  display: flex;
  flex-direction: column;
`,O=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Y=t.div`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 10%;
  overflow: hidden;
`;t.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%; 
  left: 50%; 
  background-color: #FFFFFF;
  border-radius:50%;
  transform: translate(-50%, -50%);
`;const D=t.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  justify-content: center;
  align-items: center;
`,P=t.div`
  font-size: 15px;
  color: #ffffff;
  margin-top: 10%;
  margin-bottom: 10%;
  ${k.lessThan("tablet")`
		font-size: 10px;
	`}
`,q=t.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,J=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,K=t.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`,Q=t.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 1;
  cursor: pointer;
  font-size: 24px;
`;export{ee as O};
