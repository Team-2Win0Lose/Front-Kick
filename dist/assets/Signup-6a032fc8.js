import{s as n,m as B,u as T,j as s,a as t,D as V,X}from"./vendor-3c23d344.js";import{u as A,C as G}from"./react-hook-form-8ab4f686.js";import{s as H}from"./shared/EmailLogin/Signup-a339ff61.js";import"./common-6abcfddc.js";const R=k=>{var g,m,u,h,x,f,b,w,v;const S=B();T();const{register:o,formState:{errors:e},handleSubmit:$,setError:c,control:j,getValues:z}=A({mode:"onBlur"}),D=async r=>{const{agree_terms_of_service1:a,agree_terms_of_service2:C}=z();if(r.password!==r.passwordConfirm)c("passwordConfirm",{message:"비밀번호가 일치하지 않습니다."},{shouldFocus:!0});else try{let{email:p,password:q,name:M,phone_number:I,gender:W,birth_date:E,agree_terms_of_service:y}=r;const l=new Date(E),L=l.getFullYear(),N=String(l.getMonth()+1).padStart(2,"0"),P=String(l.getDate()).padStart(2,"0"),Y=`${L}-${N}-${P}`;a&&C?y=!0:c("agree_terms_of_service",{message:"약관에 모두 동의해야합니다."},{shouldFocus:!0});const oe=await H(p,q,M,I,W,Y,y);S("/login")}catch(p){console.error(p)}},F=r=>{const a=r.target;a.value=a.value.replace(/[^0-9]/g,"").replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g,"$1-$2-$3").replace(/(\-{1,2})$/g,"")};return s(J,{onSubmit:$(D),children:[t(K,{children:"입력사항"}),t("div",{children:s(O,{children:[t(d,{...o("email",{required:"이메일을 올바르게 입력해주세요.",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"이메일을 올바르게 입력해주세요."}}),placeholder:"이메일을 입력해주세요."}),t(i,{children:(g=e==null?void 0:e.email)==null?void 0:g.message}),t(d,{type:"password",...o("password",{required:"비밀번호를 입력해주세요.",minLength:{value:8,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."}}),placeholder:"비밀번호를 입력해주세요."}),t(i,{children:(m=e==null?void 0:e.password)==null?void 0:m.message}),t(d,{type:"password",...o("passwordConfirm",{required:"비밀번호를 입력해주세요.",minLength:{value:8,message:"비밀번호는 숫자, 영문 대문자, 소문자, 특수문자를 포함한 8글자 이상이어야 합니다."}}),placeholder:"비밀번호를 한번 더 입력해주세요."}),t(i,{children:(u=e==null?void 0:e.passwordConfirm)==null?void 0:u.message}),t(d,{...o("name",{required:"이름을 입력해주세요",minLength:{value:3,message:"3글자 이상 입력해주세요."},pattern:{value:/^[A-za-z0-9가-힣]{3,10}$/,message:"가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자"}}),placeholder:"이름을 입력해주세요."}),t(i,{children:(h=e==null?void 0:e.name)==null?void 0:h.message}),t(Q,{children:t(U,{...o("phone_number",{required:"휴대폰 번호를 올바르게 입력해주세요.",pattern:{value:/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,message:"휴대폰 번호를 올바르게 입력해주세요."}}),onInput:F,placeholder:"휴대폰 번호를 입력해주세요."})}),t(i,{children:(x=e==null?void 0:e.phone_number)==null?void 0:x.message}),t(ee,{id:"gender",...o("gender",{required:!0}),children:s("optgroup",{label:"gender",children:[t(_,{id:"male",value:"male",children:"남성"}),t(_,{id:"female",value:"female",children:"여성"})]})}),t(G,{name:"birth_date",control:j,render:({field:r})=>t(te,{locale:V,selected:r.value?new Date(r.value):null,onChange:a=>r.onChange(a),showYearDropdown:!0,dateFormatCalendar:"MMMM",yearDropdownItemNumber:15,scrollableYearDropdown:!0})})]})}),t("div",{children:s("label",{children:[t("input",{type:"checkbox",...o("agree_terms_of_service1",{required:"약관을 동의해주세요"})}),"[필수] 약관 1에 동의합니다."]})}),t("div",{children:s("label",{children:[t("input",{type:"checkbox",...o("agree_terms_of_service2",{required:"약관을 동의해주세요"})}),"[필수] 약관 2에 동의합니다."]})}),t(i,{children:((f=e==null?void 0:e.agree_terms_of_service1)==null?void 0:f.message)||((b=e==null?void 0:e.agree_terms_of_service2)==null?void 0:b.message)}),t(Z,{type:"submit",children:"가입하기"}),((w=e==null?void 0:e.extraError)==null?void 0:w.message)&&t("p",{children:(v=e==null?void 0:e.extraError)==null?void 0:v.message})]})},J=n.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  gap: 20px;
`,K=n.h1`
  font-weight: bold;
`,O=n.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  background-color: #e7e7e7;
  border-radius: 17px;
  padding: 20px 17px;
`,d=n.input`
  width: 275px;
  height: 48px;
  border: none;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
  border-radius: 12px;
  padding: 18px 16px;
  background-color: #d9d9d9;
`,Q=n.div`
  width: 275px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d9d9d9;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));

  border-radius: 12px;
`,U=n.input`
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
`;const i=n.p`
  width: 320px;
  font-size: 14px;
  color: red;
`,Z=n.button`
  width: 339px;
  height: 55px;
  background: #1f1f45;
  border: #1f1f45;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
`,ee=n.select`
  margin-bottom: 16px;
  display: flex;
  gap: 15px;
`,_=n.option`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  input {
    display: none;
  }
  span {
    margin-left: 4px;
    margin-top: 1px;
  }
`,te=n(X)`
  width: 275px;
  height: 40px;
  font-size: 12px;
  border-radius: 10px;
  align-items: center;
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
`;const pe=k=>s(re,{children:[t(ne,{children:"회원가입"}),t(R,{})]}),ne=n.p`
  font-size: 27px;
  font-weight: 700;
  margin-top: 30px;
`,re=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 0 300px;
`;export{pe as default};
