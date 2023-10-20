import{s as n,m as B,u as V,j as d,a as e,D as X,X as A}from"./vendor-490cfcbe.js";import{u as G,C as H}from"./react-hook-form-e09f0b0b.js";/* empty css                         */import{s as R}from"./shared/EmailLogin/Signup-7b0c5e89.js";import"./common-311e16a2.js";const J=k=>{var g,m,u,h,x,f,b,w,y;const D=B();V();const{register:o,formState:{errors:t},handleSubmit:$,setError:c,control:j,getValues:z}=G({mode:"onBlur"}),S=async r=>{const{agree_terms_of_service1:i,agree_terms_of_service2:q}=z();if(r.password!==r.passwordConfirm)c("passwordConfirm",{message:"비밀번호가 일치하지 않습니다."},{shouldFocus:!0});else try{let{email:p,password:M,name:I,phone_number:W,gender:E,birth_date:L,agree_terms_of_service:v}=r;const l=new Date(L),N=l.getFullYear(),P=String(l.getMonth()+1).padStart(2,"0"),T=String(l.getDate()).padStart(2,"0"),Y=`${N}-${P}-${T}`;i&&q?v=!0:c("agree_terms_of_service",{message:"약관에 모두 동의해야합니다."},{shouldFocus:!0});const ae=await R(p,M,I,W,E,Y,v);D("/login")}catch(p){console.error(p)}},F=r=>{const i=r.target;i.value=i.value.replace(/[^0-9]/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3").replace(/(\-{1,2})$/g,"")},C=new Date;return d(K,{onSubmit:$(S),children:[e(O,{children:"입력사항"}),e("div",{children:d(Q,{children:[e(s,{...o("email",{required:"이메일을 올바르게 입력해주세요.",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"이메일을 올바르게 입력해주세요."}}),placeholder:"이메일을 입력해주세요."}),e(a,{children:(g=t==null?void 0:t.email)==null?void 0:g.message}),e(s,{type:"password",...o("password",{required:"비밀번호를 입력해주세요.",minLength:{value:8,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."}}),placeholder:"비밀번호를 입력해주세요."}),e(a,{children:(m=t==null?void 0:t.password)==null?void 0:m.message}),e(s,{type:"password",...o("passwordConfirm",{required:"비밀번호를 입력해주세요.",minLength:{value:8,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."}}),placeholder:"비밀번호를 한번 더 입력해주세요."}),e(a,{children:(u=t==null?void 0:t.passwordConfirm)==null?void 0:u.message}),e(s,{...o("name",{required:"이름을 입력해주세요",minLength:{value:3,message:"3글자 이상 입력해주세요."},pattern:{value:/^[A-za-z0-9가-힣]{3,10}$/,message:"가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자"}}),placeholder:"이름을 입력해주세요."}),e(a,{children:(h=t==null?void 0:t.name)==null?void 0:h.message}),e(U,{children:e(Z,{...o("phone_number",{required:"휴대폰 번호를 올바르게 입력해주세요.",pattern:{value:/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,message:"휴대폰 번호를 올바르게 입력해주세요."}}),onInput:F,placeholder:"휴대폰 번호를 입력해주세요."})}),e(a,{children:(x=t==null?void 0:t.phone_number)==null?void 0:x.message}),e(ne,{id:"gender",...o("gender",{required:!0}),children:d("optgroup",{label:"gender",children:[e(_,{id:"male",value:"male",children:"남성"}),e(_,{id:"female",value:"female",children:"여성"})]})}),e(ee,{children:"생년월일"}),e(H,{name:"birth_date",control:j,render:({field:r})=>e(re,{locale:X,selected:r.value?new Date(r.value):C,onChange:i=>r.onChange(i),showYearDropdown:!0,dateFormatCalendar:"MMMM",yearDropdownItemNumber:15,scrollableYearDropdown:!0})})]})}),e("div",{children:d("label",{children:[e("input",{type:"checkbox",...o("agree_terms_of_service1",{required:"약관을 동의해주세요"})}),"[필수] 약관 1에 동의합니다."]})}),e("div",{children:d("label",{children:[e("input",{type:"checkbox",...o("agree_terms_of_service2",{required:"약관을 동의해주세요"})}),"[필수] 약관 2에 동의합니다."]})}),e(a,{children:((f=t==null?void 0:t.agree_terms_of_service1)==null?void 0:f.message)||((b=t==null?void 0:t.agree_terms_of_service2)==null?void 0:b.message)}),e(te,{type:"submit",children:"가입하기"}),((w=t==null?void 0:t.extraError)==null?void 0:w.message)&&e("p",{children:(y=t==null?void 0:t.extraError)==null?void 0:y.message})]})},K=n.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
`,O=n.h1`
  font-weight: bold;
`,Q=n.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: #e7e7e7;
  border-radius: 17px;
  padding: 20px 17px;
`,s=n.input`
  width: 275px;
  height: 48px;
  border: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`,U=n.div`
  width: 275px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));

  border-radius: 12px;
`,Z=n.input`
  width: 210px;
  height: 48px;
  border: none;
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`;n.button`
  width: 51px;
  height: 24px;
  color: white;
  background-color: #898989;
  border-radius: 21px;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-right: 10px;
`;const ee=n.p`
  width: 100%;
  padding-left: 20px;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  justify-content: left;
  align-items: left;
`,a=n.p`
  width: 320px;
  font-size: 14px;
  color: red;
`,te=n.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`,ne=n.select`
  margin-bottom: 3px;
  display: flex;
  gap: 15px;
`,_=n.option`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  input {
    display: none;
    font-weight:bold;
  }
  span {
    margin-left: 4px;
    margin-top: 1px;
  }
`,re=n(A)`
  width: 275px;
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items: center;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  
`;n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: bold;
`;n.div`
  width: 275px;
  background-color: #f5f5f5;
  font-size: 16px;
  font-weight: bold;
  padding: 3px;
  border: none;
  text-align: center;
`;n.div`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
  text-align: center;
`;const ge=k=>d(ie,{children:[e(oe,{children:"회원가입"}),e(J,{})]}),oe=n.p`
  font-size: 27px;
  font-weight: 700;
  margin-top: 30px;
`,ie=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 0 300px;
`;export{ge as default};
