import{u as m,f as d,e as u,m as e,a as h,Q as k}from"./vendor-e594e6cf.js";import{o as l,ar as _,as as f}from"./common-1cfa3065.js";/* empty css                       */const x=g=>{const s=m(),c=d();return u.useEffect(()=>{const n=new URL(document.location.toString()).searchParams.get("code"),r="authorization_code",i=`${_}`,p=`${f}`;e.post(`https://kauth.kakao.com/oauth/token?grant_type=${r}&client_id=${i}&redirect_url=${p}&code=${n}`,{},{headers:{"Content-type":"application/x-www-form-urlencoded;charset-utf-8"}}).then(t=>{const{access_token:o}=t.data;e.post("https://kapi.kakao.com/v2/user/me",{},{headers:{Authorization:`Bearer ${o}`,"Content-type":"application/x-www-formencoded;charset=utf-8"}}).then(a=>{console.log(a),s(l({token:o,email:a.data.kakao_account.email,name:a.data.kakao_account.profile.nickname,profileImg:a.data.properties.thumbnail_image}))})}).catch(t=>{console.error(t)}),c("/home")},[]),h(k,{})};export{x as default};