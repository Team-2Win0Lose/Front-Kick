import{u as m,M as d,e as u,l as e,a as h,N as k}from"./vendor-34c37101.js";import{n as l,ar as _,as as f}from"./common-e20ce833.js";/* empty css                       */const x=g=>{const s=m(),n=d();return u.useEffect(()=>{const c=new URL(document.location.toString()).searchParams.get("code"),r="authorization_code",i=`${_}`,p=`${f}`;e.post(`https://kauth.kakao.com/oauth/token?grant_type=${r}&client_id=${i}&redirect_url=${p}&code=${c}`,{},{headers:{"Content-type":"application/x-www-form-urlencoded;charset-utf-8"}}).then(t=>{const{access_token:o}=t.data;e.post("https://kapi.kakao.com/v2/user/me",{},{headers:{Authorization:`Bearer ${o}`,"Content-type":"application/x-www-formencoded;charset=utf-8"}}).then(a=>{console.log(a),s(l({token:o,email:a.data.kakao_account.email,name:a.data.kakao_account.profile.nickname,profileImg:a.data.properties.thumbnail_image}))})}).catch(t=>{console.error(t)}),n("/home")},[]),h(k,{})};export{x as default};
