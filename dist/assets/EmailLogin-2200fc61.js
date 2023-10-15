import{s as o,u as v,f as S,b as j,e as z,a as t,j as r,W as x}from"./vendor-e594e6cf.js";import{u as A}from"./react-hook-form-eddfd687.js";import{l as L}from"./shared/EmailLogin/Signup-c50ad09d.js";import{o as F,p as Z}from"./common-1cfa3065.js";import{L as q}from"./shared/EmailLogin/Login-348ba27e.js";/* empty css                       */const B=g=>{const h=v(),b=S(),a=j(i=>i.auth.isAuthenticated);z.useEffect(()=>{a&&b("/")},[a]);const{register:c,handleSubmit:w,formState:{errors:n},getValues:y}=A({mode:"onSubmit",reValidateMode:"onChange"});return t(C,{onSubmit:w(async i=>{var d,l,p;try{const{email:s,password:k}=i,e=await L(s,k);e!==void 0?"user"in e&&(h(F({id:e.user.id,email:(d=e==null?void 0:e.user)==null?void 0:d.email,name:(l=e==null?void 0:e.user)==null?void 0:l.name,token:(p=e==null?void 0:e.token)==null?void 0:p.access,isAuthenticated:!0})),e.token.access&&Z("token",`${e.token.access}`,{path:"/"})):console.log("res is undefined")}catch(s){console.error(s)}}),children:r(D,{children:[t(m,{id:"email",type:"text",placeholder:"이메일 또는 아이디",...c("email",{required:"이메일은 필수 입력입니다.",pattern:{value:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,message:"이메일 형식에 맞지 않습니다."}})}),n.email&&t(f,{role:"alert",children:n.email.message}),t(m,{id:"password",type:"password",placeholder:"비밀번호",...c("password",{required:"비밀번호는 필수 입력입니다.",minLength:{value:7,message:"7자리 이상 비밀번호를 입력하세요."},validate:{check:i=>{if(y("password")!==i)return"비밀번호가 일치하지 않습니다."}}})}),n.password&&t(f,{role:"alert",children:n.password.message}),r(E,{children:[t(u,{to:"/find/id",children:"이메일 찾기"}),t(u,{to:"/find/password",children:"비밀번호 찾기"}),t(M,{to:"/signup",children:"회원가입"})]}),t(V,{type:"submit",children:"로그인"})]})})},C=o.form`
  margin-top: 75px;
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
`,D=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
`,m=o.input`
  width: 339px;
  height: 55px;
  border: 1px solid #818181;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
`,E=o.div`
  width: 330px;
  justify-content: space-between;
  padding: 0;
  display: flex;
  gap: 5px;
`,u=o(x)`
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  color: black;
`,M=o(x)`
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  color: black;
`,V=o.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`,f=o.small`
  color: red;
`,J=g=>r(W,{children:[t(q,{}),t(_,{children:t(B,{})})]}),W=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`,_=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 55px;
`;export{J as default};
