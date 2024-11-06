/* empty css                        */import{R as Qi}from"./react-quill-hFw82yV6.js";import{r as i,j as e}from"./react-BhD1l8em.js";import{c as Ki}from"./react-dom-CBJo6_CG.js";import{R as _t,a as ke,b as zt,c as je,d as Ji,e as Xi}from"./recoil-nkAhtTSZ.js";import{u as te,a as ie,b as Vt,Q as Di,c as Gi,R as es}from"./@tanstack-CD7-eO2F.js";import{L as b,c as ts,R as is}from"./react-router-dom-BRfDkQUF.js";import{d as fe,c as D,O as jt,f as le,g as Re}from"./react-router-DxAffJZf.js";import{d as h,f as ss}from"./styled-components-BS-Tg61p.js";import{a as as}from"./axios-CCb-kr4I.js";import{u as wt}from"./usehooks-ts-DmehSPdR.js";import{S as vt,A as ns,N as At,P as rs,a as yt}from"./swiper-CN8zHVlS.js";import{d as re,c as ls,l as os}from"./dayjs-Ct0Q4Ttf.js";import{C as ds}from"./react-spinners-BT11pcIP.js";import{u as he,C as Ce}from"./react-hook-form-CLILOrlW.js";import{t as He}from"./@hookform-WJACotcq.js";import{o as Se,s as P,n as Ne,b as ee,Z as cs,i as fi,a as Ht,d as si}from"./zod-BH6bGEnM.js";import{L as ps}from"./react-scroll-m7HlqQZz.js";import{_ as ai}from"./react-star-ratings-Y-cnRIiD.js";import{l as xs}from"./react-daum-postcode-DNS69oBW.js";import{D as gt}from"./react-datepicker-BusDMgSL.js";import{r as hs}from"./styled-reset-C4BU8k83.js";import"./classnames-BWlOjCkQ.js";import"./lodash-C-Hlc9Xx.js";import"./quill-CJcoyVQG.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Va2Jh8gM.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./lodash.debounce-DWe-dgD7.js";import"./lodash.throttle-BojNFQ9H.js";import"./prop-types-BKNjMPK8.js";import"./object-assign-LtR7LJbL.js";import"./clsx-B-dksMZM.js";import"./date-fns-Dk9e3ahJ.js";import"./@floating-ui-BGQ2t30y.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const p of c.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&n(p)}).observe(document,{childList:!0,subtree:!0});function a(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(l){if(l.ep)return;l.ep=!0;const c=a(l);fetch(l.href,c)}})();function ui({children:t}){const s=fe();return i.useEffect(()=>{window.scrollTo(0,0)},[s.pathname]),e.jsx("div",{children:t})}const xe=_t({key:"user",default:{isLogin:!1,isLoginError:!1,data:{user_id:null,name:null,token:null,is_company:null,is_admin:null}},effects:[({setSelf:t,onSet:s})=>{const a=localStorage.getItem("token"),n=localStorage.getItem("user_id"),l=localStorage.getItem("user_type"),c=localStorage.getItem("name");a&&n&&t({isLogin:!0,isLoginError:!1,data:{user_id:JSON.parse(n),name:c,token:a,is_company:JSON.parse(l)}}),s((p,r,o)=>{o?(localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type"),localStorage.removeItem("name")):(localStorage.setItem("user_id",JSON.stringify(p.data.user_id??"")),localStorage.setItem("name",JSON.stringify(p.data.name??"")),localStorage.setItem("token",p.data.token??""),localStorage.setItem("user_type",JSON.stringify(p.data.is_company)??""))})}]}),ms=h.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  background-color: #000;
`,gs=h.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  & .user_name {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  & .close_btn {
    margin-left: auto;
    width: 30px;
    height: 30px;
    padding: 5px;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`,fs=h.div`
  padding: 20px 16px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  & li {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 20px 0;
  }
`,bi=t=>i.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{x:1.52344,width:20.4717,height:2.15492,rx:1,transform:"rotate(45 1.52344 0)",fill:"white"}),i.createElement("rect",{x:16,y:1.52344,width:20.4717,height:2.15492,rx:1,transform:"rotate(135 16 1.52344)",fill:"white"})),ni=({children:t,setClose:s})=>{const n=ke(xe).isLogin,l=localStorage.getItem("name"),c=()=>{s(!1),document.body.style.overflow="auto"};return e.jsxs(ms,{children:[e.jsxs(gs,{children:[n&&e.jsx("div",{className:"user_name",children:`${JSON.parse(l)} 님`}),e.jsx("button",{onClick:()=>c(),className:"close_btn",children:e.jsx(bi,{})})]}),e.jsx(fs,{children:t})]})},us=h.header`
  padding: 72px 110px 55px;
  background-color: #000;
  display: flex;
  align-items: center;
  @media (max-width: 1400px) {
    padding: 72px 70px 55px;
  }
  @media (max-width: 1200px) {
    padding: 72px 40px 55px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`,bs=h.header`
  display: none;
  padding: 0 16px;
  @media (max-width: 1024px) {
    display: block;
  }
`,_s=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`,_i=h.h1`
  flex: 0 0 auto;
  margin-right: 97px;
  width: 208px;
  @media (max-width: 1400px) {
    margin-right: 30px;
  }
  @media (max-width: 1200px) {
    margin-right: 20px;
  }
  @media (max-width: 1024px) {
    width: 130px;
  }
  @media (max-width: 400px) {
    width: 80px;
  }
  & a {
    display: block;
    & svg {
      width: 100%;
      height: auto;
    }
  }
`,js=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,ji=h.nav`
  width: 100%;
  & > div > form {
    width: 100%;
    max-width: 666px;
    & > div {
      width: 100%;
    }
  }
`;h.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 1400px) {
    gap: 10px;
  }
  @media (max-width: 1024px) {
    padding: 10px 0 25px;
  }
`;h.li`
  color: #fff;
  font-weight: 700;
`;const wi=h.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  & .searh_page_link {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    @media (max-width: 400px) {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    & a {
      display: block;
      width: 100%;
      height: 100%;
      & svg {
        width: 100%;
        height: 100%;
        & path {
          fill: #fff;
        }
      }
    }
  }
  & .toggle_menu {
    width: 30px;
    height: 30px;
    @media (max-width: 400px) {
      width: 20px;
      height: 20px;
    }
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`,ri=h.div`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 35px;
  & > div {
    padding: ${t=>t.$loginState?"0 15px":"0 18px"};
    @media (max-width: 1400px) {
      padding: ${t=>t.$loginState?"0 10px":"0 14px"};
    }
  }
  & > div:first-child {
    position: relative;
  }
  & > .login:first-child::after {
    content: "";
    position: absolute;
    background-color: #b0b8c1;
    width: 1px;
    height: 18px;
    top: 50%;
    right: 0;
    transform: translatey(-50%);
  }
  @media (max-width: 1400px) {
    margin-right: 20px;
  }
  @media (max-width: 1300px) {
    margin-right: 10px;
  }
`,vi=h.div`
  display: flex;
  gap: 18px;
  align-items: center;
  @media (max-width: 1400px) {
    gap: 10px;
  }
  @media (max-width: 1300px) {
    gap: 5px;
  }
  @media (max-width: 1024px) {
    gap: 10px;
    margin-right: 15px;
  }
  @media (max-width: 400px) {
    gap: 5px;
    margin-right: 5px;
  }
  & > .btn1,
  & > .btn2 {
    padding: 10px 20px;
    border-radius: 50rem;
    font-weight: 700;
    font-size: 16px;
    @media (max-width: 1024px) {
      padding: 8px 10px;
      font-size: 12px;
    }
  }
  & > .btn1 {
    background-color: #fff;
    color: #235ef3;
  }

  & > .btn2 {
    background-color: #235ef3;
    color: #fff;
  }
`,Mt=t=>i.createElement("svg",{width:1382,height:335,viewBox:"0 0 1382 335",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("mask",{id:"path-1-outside-1_724_15833",maskUnits:"userSpaceOnUse",x:0,y:0,width:1382,height:335,fill:"black"},i.createElement("rect",{fill:"white",width:1382,height:335}),i.createElement("path",{d:"M164.404 227.459L117.81 308.999H97.6191L51.5424 230.048V327.119H9.34855V145.919H46.6241L108.491 253.086L169.323 145.919H206.598L206.857 327.119H164.663L164.404 227.459Z"}),i.createElement("path",{d:"M281.447 145.919V327.119H236.405V145.919H281.447Z"}),i.createElement("path",{d:"M395.158 330.484C377.383 330.484 361.334 326.515 347.01 318.577C332.687 310.466 321.47 299.249 313.359 284.925C305.248 270.602 301.193 254.466 301.193 236.519C301.193 218.572 305.248 202.436 313.359 188.113C321.642 173.789 332.946 162.658 347.269 154.72C361.593 146.609 377.642 142.554 395.417 142.554C410.776 142.554 424.668 145.487 437.093 151.355C449.691 157.05 460.045 165.247 468.156 175.946L439.164 203.903C427.947 189.752 414.141 182.677 397.746 182.677C387.91 182.677 379.109 184.92 371.343 189.407C363.75 193.894 357.796 200.279 353.482 208.562C349.168 216.673 347.01 225.992 347.01 236.519C347.01 247.046 349.168 256.365 353.482 264.476C357.796 272.587 363.75 278.885 371.343 283.372C379.109 287.859 387.91 290.103 397.746 290.103C414.313 290.103 428.119 283.027 439.164 268.876L468.156 296.833C460.045 307.705 449.691 316.075 437.093 321.942C424.668 327.637 410.689 330.484 395.158 330.484Z"}),i.createElement("path",{d:"M621.36 327.119H485.201V145.919H617.995V183.712H530.242V216.846H607.9V253.604H530.242V289.067H621.36V327.119Z"}),i.createElement("path",{d:"M848.76 227.459L802.165 308.999H781.974L735.898 230.048V327.119H693.704V145.919H730.979L792.846 253.086L853.678 145.919H890.953L891.212 327.119H849.019L848.76 227.459Z"}),i.createElement("path",{d:"M959.33 290.62L945.352 327.119H899.017L975.638 145.919H1020.16L1096.53 327.119H1049.41L1035.43 290.62H959.33ZM997.382 192.254L973.568 254.639H1021.2L997.382 192.254Z"}),i.createElement("path",{d:"M1076.29 184.489V145.919H1228.76V184.489H1175.18V327.119H1130.14V184.489H1076.29Z"}),i.createElement("path",{d:"M1377.84 327.119H1241.68V145.919H1374.47V183.712H1286.72V216.846H1364.38V253.604H1286.72V289.067H1377.84V327.119Z"}),i.createElement("path",{d:"M80.8808 51.371V103.401H77.3862V4H80.8808V48.1353H96.2828V51.371H80.8808ZM54.089 8.78887V96.1534H4V8.78887H54.089ZM50.8533 92.7882V12.2834H7.49458V92.7882H50.8533Z"}),i.createElement("path",{d:"M182.598 103.401V4H186.222V103.401H182.598ZM133.674 7.36515C139.024 7.36515 143.77 9.04773 147.911 12.4129C152.053 15.778 155.289 20.8258 157.618 27.5561C159.948 34.2864 161.113 42.613 161.113 52.5358C161.113 62.4587 159.948 70.7853 157.618 77.5156C155.289 84.2459 152.053 89.2936 147.911 92.6588C143.77 96.0239 139.024 97.7065 133.674 97.7065C128.238 97.7065 123.449 96.0239 119.307 92.6588C115.166 89.2936 111.93 84.2459 109.6 77.5156C107.271 70.7853 106.106 62.4587 106.106 52.5358C106.106 42.613 107.271 34.2864 109.6 27.5561C111.93 20.8258 115.166 15.778 119.307 12.4129C123.449 9.04773 128.238 7.36515 133.674 7.36515ZM133.674 10.8597C129.015 10.8597 124.873 12.4129 121.249 15.5192C117.625 18.6255 114.777 23.3281 112.707 29.6269C110.636 35.8395 109.6 43.4758 109.6 52.5358C109.6 61.5959 110.636 69.2753 112.707 75.5742C114.777 81.7868 117.625 86.4462 121.249 89.5525C124.873 92.6588 129.015 94.2119 133.674 94.2119C138.247 94.2119 142.303 92.6588 145.84 89.5525C149.378 86.4462 152.182 81.7868 154.253 75.5742C156.324 69.2753 157.36 61.5959 157.36 52.5358C157.36 43.4758 156.324 35.8395 154.253 29.6269C152.182 23.3281 149.378 18.6255 145.84 15.5192C142.303 12.4129 138.247 10.8597 133.674 10.8597Z"}),i.createElement("path",{d:"M247.946 32.4744C242.596 42.4835 236.125 50.5081 228.532 56.5481C220.939 62.5882 213.13 65.6082 205.105 65.6082V62.1136C212.267 62.1136 219.17 59.4819 225.814 54.2184C232.544 48.8687 238.325 41.8364 243.157 33.1215C248.076 24.4066 251.613 15.0877 253.77 5.16486L257.524 6.32972C255.539 14.6995 252.821 22.422 249.37 29.4975L292.34 63.2784L290.14 65.7376L247.946 32.4744ZM296.482 93.9531V97.3182H203.293V93.9531H296.482Z"}),i.createElement("path",{d:"M393.669 103.401H390.045V4H393.669V103.401ZM371.667 4.64715V101.719H368.043V50.8533H348.111V96.1534H309.929V8.78887H348.111V47.4881H368.043V4.64715H371.667ZM313.424 12.2834V92.7882H344.487V12.2834H313.424Z"}),i.createElement("path",{d:"M490.08 103.401V4H493.704V103.401H490.08ZM441.156 7.36515C446.506 7.36515 451.252 9.04773 455.393 12.4129C459.535 15.778 462.771 20.8258 465.101 27.5561C467.43 34.2864 468.595 42.613 468.595 52.5358C468.595 62.4587 467.43 70.7853 465.101 77.5156C462.771 84.2459 459.535 89.2936 455.393 92.6588C451.252 96.0239 446.506 97.7065 441.156 97.7065C435.72 97.7065 430.931 96.0239 426.79 92.6588C422.648 89.2936 419.412 84.2459 417.082 77.5156C414.753 70.7853 413.588 62.4587 413.588 52.5358C413.588 42.613 414.753 34.2864 417.082 27.5561C419.412 20.8258 422.648 15.778 426.79 12.4129C430.931 9.04773 435.72 7.36515 441.156 7.36515ZM441.156 10.8597C436.497 10.8597 432.355 12.4129 428.731 15.5192C425.107 18.6255 422.26 23.3281 420.189 29.6269C418.118 35.8395 417.082 43.4758 417.082 52.5358C417.082 61.5959 418.118 69.2753 420.189 75.5742C422.26 81.7868 425.107 86.4462 428.731 89.5525C432.355 92.6588 436.497 94.2119 441.156 94.2119C445.729 94.2119 449.785 92.6588 453.323 89.5525C456.86 86.4462 459.665 81.7868 461.735 75.5742C463.806 69.2753 464.842 61.5959 464.842 52.5358C464.842 43.4758 463.806 35.8395 461.735 29.6269C459.665 23.3281 456.86 18.6255 453.323 15.5192C449.785 12.4129 445.729 10.8597 441.156 10.8597Z"}),i.createElement("path",{d:"M518.282 69.6205V8.78887H596.846V12.2834H521.647V37.3927H596.069V40.8872H521.647V66.1259H598.658V69.6205H518.282ZM603.964 97.3182H510.775V93.9531H603.964V97.3182Z"})),i.createElement("path",{d:"M164.404 227.459L117.81 308.999H97.6191L51.5424 230.048V327.119H9.34855V145.919H46.6241L108.491 253.086L169.323 145.919H206.598L206.857 327.119H164.663L164.404 227.459Z",fill:"white"}),i.createElement("path",{d:"M281.447 145.919V327.119H236.405V145.919H281.447Z",fill:"white"}),i.createElement("path",{d:"M395.158 330.484C377.383 330.484 361.334 326.515 347.01 318.577C332.687 310.466 321.47 299.249 313.359 284.925C305.248 270.602 301.193 254.466 301.193 236.519C301.193 218.572 305.248 202.436 313.359 188.113C321.642 173.789 332.946 162.658 347.269 154.72C361.593 146.609 377.642 142.554 395.417 142.554C410.776 142.554 424.668 145.487 437.093 151.355C449.691 157.05 460.045 165.247 468.156 175.946L439.164 203.903C427.947 189.752 414.141 182.677 397.746 182.677C387.91 182.677 379.109 184.92 371.343 189.407C363.75 193.894 357.796 200.279 353.482 208.562C349.168 216.673 347.01 225.992 347.01 236.519C347.01 247.046 349.168 256.365 353.482 264.476C357.796 272.587 363.75 278.885 371.343 283.372C379.109 287.859 387.91 290.103 397.746 290.103C414.313 290.103 428.119 283.027 439.164 268.876L468.156 296.833C460.045 307.705 449.691 316.075 437.093 321.942C424.668 327.637 410.689 330.484 395.158 330.484Z",fill:"white"}),i.createElement("path",{d:"M621.36 327.119H485.201V145.919H617.995V183.712H530.242V216.846H607.9V253.604H530.242V289.067H621.36V327.119Z",fill:"white"}),i.createElement("path",{d:"M848.76 227.459L802.165 308.999H781.974L735.898 230.048V327.119H693.704V145.919H730.979L792.846 253.086L853.678 145.919H890.953L891.212 327.119H849.019L848.76 227.459Z",fill:"white"}),i.createElement("path",{d:"M959.33 290.62L945.352 327.119H899.017L975.638 145.919H1020.16L1096.53 327.119H1049.41L1035.43 290.62H959.33ZM997.382 192.254L973.568 254.639H1021.2L997.382 192.254Z",fill:"white"}),i.createElement("path",{d:"M1076.29 184.489V145.919H1228.76V184.489H1175.18V327.119H1130.14V184.489H1076.29Z",fill:"white"}),i.createElement("path",{d:"M1377.84 327.119H1241.68V145.919H1374.47V183.712H1286.72V216.846H1364.38V253.604H1286.72V289.067H1377.84V327.119Z",fill:"white"}),i.createElement("path",{d:"M80.8808 51.371V103.401H77.3862V4H80.8808V48.1353H96.2828V51.371H80.8808ZM54.089 8.78887V96.1534H4V8.78887H54.089ZM50.8533 92.7882V12.2834H7.49458V92.7882H50.8533Z",fill:"white"}),i.createElement("path",{d:"M182.598 103.401V4H186.222V103.401H182.598ZM133.674 7.36515C139.024 7.36515 143.77 9.04773 147.911 12.4129C152.053 15.778 155.289 20.8258 157.618 27.5561C159.948 34.2864 161.113 42.613 161.113 52.5358C161.113 62.4587 159.948 70.7853 157.618 77.5156C155.289 84.2459 152.053 89.2936 147.911 92.6588C143.77 96.0239 139.024 97.7065 133.674 97.7065C128.238 97.7065 123.449 96.0239 119.307 92.6588C115.166 89.2936 111.93 84.2459 109.6 77.5156C107.271 70.7853 106.106 62.4587 106.106 52.5358C106.106 42.613 107.271 34.2864 109.6 27.5561C111.93 20.8258 115.166 15.778 119.307 12.4129C123.449 9.04773 128.238 7.36515 133.674 7.36515ZM133.674 10.8597C129.015 10.8597 124.873 12.4129 121.249 15.5192C117.625 18.6255 114.777 23.3281 112.707 29.6269C110.636 35.8395 109.6 43.4758 109.6 52.5358C109.6 61.5959 110.636 69.2753 112.707 75.5742C114.777 81.7868 117.625 86.4462 121.249 89.5525C124.873 92.6588 129.015 94.2119 133.674 94.2119C138.247 94.2119 142.303 92.6588 145.84 89.5525C149.378 86.4462 152.182 81.7868 154.253 75.5742C156.324 69.2753 157.36 61.5959 157.36 52.5358C157.36 43.4758 156.324 35.8395 154.253 29.6269C152.182 23.3281 149.378 18.6255 145.84 15.5192C142.303 12.4129 138.247 10.8597 133.674 10.8597Z",fill:"white"}),i.createElement("path",{d:"M247.946 32.4744C242.596 42.4835 236.125 50.5081 228.532 56.5481C220.939 62.5882 213.13 65.6082 205.105 65.6082V62.1136C212.267 62.1136 219.17 59.4819 225.814 54.2184C232.544 48.8687 238.325 41.8364 243.157 33.1215C248.076 24.4066 251.613 15.0877 253.77 5.16486L257.524 6.32972C255.539 14.6995 252.821 22.422 249.37 29.4975L292.34 63.2784L290.14 65.7376L247.946 32.4744ZM296.482 93.9531V97.3182H203.293V93.9531H296.482Z",fill:"white"}),i.createElement("path",{d:"M393.669 103.401H390.045V4H393.669V103.401ZM371.667 4.64715V101.719H368.043V50.8533H348.111V96.1534H309.929V8.78887H348.111V47.4881H368.043V4.64715H371.667ZM313.424 12.2834V92.7882H344.487V12.2834H313.424Z",fill:"white"}),i.createElement("path",{d:"M490.08 103.401V4H493.704V103.401H490.08ZM441.156 7.36515C446.506 7.36515 451.252 9.04773 455.393 12.4129C459.535 15.778 462.771 20.8258 465.101 27.5561C467.43 34.2864 468.595 42.613 468.595 52.5358C468.595 62.4587 467.43 70.7853 465.101 77.5156C462.771 84.2459 459.535 89.2936 455.393 92.6588C451.252 96.0239 446.506 97.7065 441.156 97.7065C435.72 97.7065 430.931 96.0239 426.79 92.6588C422.648 89.2936 419.412 84.2459 417.082 77.5156C414.753 70.7853 413.588 62.4587 413.588 52.5358C413.588 42.613 414.753 34.2864 417.082 27.5561C419.412 20.8258 422.648 15.778 426.79 12.4129C430.931 9.04773 435.72 7.36515 441.156 7.36515ZM441.156 10.8597C436.497 10.8597 432.355 12.4129 428.731 15.5192C425.107 18.6255 422.26 23.3281 420.189 29.6269C418.118 35.8395 417.082 43.4758 417.082 52.5358C417.082 61.5959 418.118 69.2753 420.189 75.5742C422.26 81.7868 425.107 86.4462 428.731 89.5525C432.355 92.6588 436.497 94.2119 441.156 94.2119C445.729 94.2119 449.785 92.6588 453.323 89.5525C456.86 86.4462 459.665 81.7868 461.735 75.5742C463.806 69.2753 464.842 61.5959 464.842 52.5358C464.842 43.4758 463.806 35.8395 461.735 29.6269C459.665 23.3281 456.86 18.6255 453.323 15.5192C449.785 12.4129 445.729 10.8597 441.156 10.8597Z",fill:"white"}),i.createElement("path",{d:"M518.282 69.6205V8.78887H596.846V12.2834H521.647V37.3927H596.069V40.8872H521.647V66.1259H598.658V69.6205H518.282ZM603.964 97.3182H510.775V93.9531H603.964V97.3182Z",fill:"white"}),i.createElement("path",{d:"M164.404 227.459L117.81 308.999H97.6191L51.5424 230.048V327.119H9.34855V145.919H46.6241L108.491 253.086L169.323 145.919H206.598L206.857 327.119H164.663L164.404 227.459Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M281.447 145.919V327.119H236.405V145.919H281.447Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M395.158 330.484C377.383 330.484 361.334 326.515 347.01 318.577C332.687 310.466 321.47 299.249 313.359 284.925C305.248 270.602 301.193 254.466 301.193 236.519C301.193 218.572 305.248 202.436 313.359 188.113C321.642 173.789 332.946 162.658 347.269 154.72C361.593 146.609 377.642 142.554 395.417 142.554C410.776 142.554 424.668 145.487 437.093 151.355C449.691 157.05 460.045 165.247 468.156 175.946L439.164 203.903C427.947 189.752 414.141 182.677 397.746 182.677C387.91 182.677 379.109 184.92 371.343 189.407C363.75 193.894 357.796 200.279 353.482 208.562C349.168 216.673 347.01 225.992 347.01 236.519C347.01 247.046 349.168 256.365 353.482 264.476C357.796 272.587 363.75 278.885 371.343 283.372C379.109 287.859 387.91 290.103 397.746 290.103C414.313 290.103 428.119 283.027 439.164 268.876L468.156 296.833C460.045 307.705 449.691 316.075 437.093 321.942C424.668 327.637 410.689 330.484 395.158 330.484Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M621.36 327.119H485.201V145.919H617.995V183.712H530.242V216.846H607.9V253.604H530.242V289.067H621.36V327.119Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M848.76 227.459L802.165 308.999H781.974L735.898 230.048V327.119H693.704V145.919H730.979L792.846 253.086L853.678 145.919H890.953L891.212 327.119H849.019L848.76 227.459Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M959.33 290.62L945.352 327.119H899.017L975.638 145.919H1020.16L1096.53 327.119H1049.41L1035.43 290.62H959.33ZM997.382 192.254L973.568 254.639H1021.2L997.382 192.254Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M1076.29 184.489V145.919H1228.76V184.489H1175.18V327.119H1130.14V184.489H1076.29Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M1377.84 327.119H1241.68V145.919H1374.47V183.712H1286.72V216.846H1364.38V253.604H1286.72V289.067H1377.84V327.119Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M80.8808 51.371V103.401H77.3862V4H80.8808V48.1353H96.2828V51.371H80.8808ZM54.089 8.78887V96.1534H4V8.78887H54.089ZM50.8533 92.7882V12.2834H7.49458V92.7882H50.8533Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M182.598 103.401V4H186.222V103.401H182.598ZM133.674 7.36515C139.024 7.36515 143.77 9.04773 147.911 12.4129C152.053 15.778 155.289 20.8258 157.618 27.5561C159.948 34.2864 161.113 42.613 161.113 52.5358C161.113 62.4587 159.948 70.7853 157.618 77.5156C155.289 84.2459 152.053 89.2936 147.911 92.6588C143.77 96.0239 139.024 97.7065 133.674 97.7065C128.238 97.7065 123.449 96.0239 119.307 92.6588C115.166 89.2936 111.93 84.2459 109.6 77.5156C107.271 70.7853 106.106 62.4587 106.106 52.5358C106.106 42.613 107.271 34.2864 109.6 27.5561C111.93 20.8258 115.166 15.778 119.307 12.4129C123.449 9.04773 128.238 7.36515 133.674 7.36515ZM133.674 10.8597C129.015 10.8597 124.873 12.4129 121.249 15.5192C117.625 18.6255 114.777 23.3281 112.707 29.6269C110.636 35.8395 109.6 43.4758 109.6 52.5358C109.6 61.5959 110.636 69.2753 112.707 75.5742C114.777 81.7868 117.625 86.4462 121.249 89.5525C124.873 92.6588 129.015 94.2119 133.674 94.2119C138.247 94.2119 142.303 92.6588 145.84 89.5525C149.378 86.4462 152.182 81.7868 154.253 75.5742C156.324 69.2753 157.36 61.5959 157.36 52.5358C157.36 43.4758 156.324 35.8395 154.253 29.6269C152.182 23.3281 149.378 18.6255 145.84 15.5192C142.303 12.4129 138.247 10.8597 133.674 10.8597Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M247.946 32.4744C242.596 42.4835 236.125 50.5081 228.532 56.5481C220.939 62.5882 213.13 65.6082 205.105 65.6082V62.1136C212.267 62.1136 219.17 59.4819 225.814 54.2184C232.544 48.8687 238.325 41.8364 243.157 33.1215C248.076 24.4066 251.613 15.0877 253.77 5.16486L257.524 6.32972C255.539 14.6995 252.821 22.422 249.37 29.4975L292.34 63.2784L290.14 65.7376L247.946 32.4744ZM296.482 93.9531V97.3182H203.293V93.9531H296.482Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M393.669 103.401H390.045V4H393.669V103.401ZM371.667 4.64715V101.719H368.043V50.8533H348.111V96.1534H309.929V8.78887H348.111V47.4881H368.043V4.64715H371.667ZM313.424 12.2834V92.7882H344.487V12.2834H313.424Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M490.08 103.401V4H493.704V103.401H490.08ZM441.156 7.36515C446.506 7.36515 451.252 9.04773 455.393 12.4129C459.535 15.778 462.771 20.8258 465.101 27.5561C467.43 34.2864 468.595 42.613 468.595 52.5358C468.595 62.4587 467.43 70.7853 465.101 77.5156C462.771 84.2459 459.535 89.2936 455.393 92.6588C451.252 96.0239 446.506 97.7065 441.156 97.7065C435.72 97.7065 430.931 96.0239 426.79 92.6588C422.648 89.2936 419.412 84.2459 417.082 77.5156C414.753 70.7853 413.588 62.4587 413.588 52.5358C413.588 42.613 414.753 34.2864 417.082 27.5561C419.412 20.8258 422.648 15.778 426.79 12.4129C430.931 9.04773 435.72 7.36515 441.156 7.36515ZM441.156 10.8597C436.497 10.8597 432.355 12.4129 428.731 15.5192C425.107 18.6255 422.26 23.3281 420.189 29.6269C418.118 35.8395 417.082 43.4758 417.082 52.5358C417.082 61.5959 418.118 69.2753 420.189 75.5742C422.26 81.7868 425.107 86.4462 428.731 89.5525C432.355 92.6588 436.497 94.2119 441.156 94.2119C445.729 94.2119 449.785 92.6588 453.323 89.5525C456.86 86.4462 459.665 81.7868 461.735 75.5742C463.806 69.2753 464.842 61.5959 464.842 52.5358C464.842 43.4758 463.806 35.8395 461.735 29.6269C459.665 23.3281 456.86 18.6255 453.323 15.5192C449.785 12.4129 445.729 10.8597 441.156 10.8597Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"}),i.createElement("path",{d:"M518.282 69.6205V8.78887H596.846V12.2834H521.647V37.3927H596.069V40.8872H521.647V66.1259H598.658V69.6205H518.282ZM603.964 97.3182H510.775V93.9531H603.964V97.3182Z",stroke:"white",strokeWidth:7.62144,mask:"url(#path-1-outside-1_724_15833)"})),ws=t=>i.createElement("svg",{width:19,height:14,viewBox:"0 0 19 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{width:19,height:2,rx:1,fill:"white"}),i.createElement("rect",{y:6,width:19,height:2,rx:1,fill:"white"}),i.createElement("rect",{y:12,width:19,height:2,rx:1,fill:"white"})),vs=_t({key:"alretState",default:{isOpen:!1,text:""}}),Ae=_t({key:"confirmState",default:{isOpen:!1,text:"",confirm:!1,okBtn:"취소하기",logout:!1,logoutOk:!1}}),ys=_t({key:"toastState",default:{isOpen:!1,text:""}}),Ye=()=>{const[t,s]=zt(Ae),a=ke(Ae),n=i.useCallback(({logoutOk:c,confirm:p,callback:r})=>{s(o=>({...o,isOpen:!1,confirm:p,logoutOk:c,callback:r,text:"",okBtn:""}))},[s]),l=i.useCallback(({logout:c,text:p,okBtn:r})=>s({isOpen:!0,text:p,confirm:!1,okBtn:r,logout:c,logoutOk:!1}),[s]);return{confirmData:t,confirmValue:a,closeConfirm:n,openConfirm:l}},Cs=()=>{const[t,s]=i.useState(!1),[a,n]=i.useState(!0),{openConfirm:l,confirmValue:c}=Ye(),r=ke(xe).isLogin,o=fe(),f=je(xe),m=je(Ae),g=D(),j=()=>{s(!0),document.body.style.overflow="hidden"},d=()=>{s(!1),document.body.style.overflow="auto"};i.useLayoutEffect(()=>{o.pathname==="/"?n(!0):n(!1)},[o.pathname]);const u=()=>{l({text:"로그아웃 하시겠습니까?",okBtn:"확인",logout:!0})};return i.useEffect(()=>{c.logoutOk===!0&&(f(),m(),g("/"))},[c.logoutOk]),e.jsxs(bs,{children:[e.jsxs(_s,{children:[e.jsx(_i,{children:e.jsx(b,{to:"/",children:e.jsx(Mt,{})})}),e.jsxs(wi,{children:[e.jsx(vi,{children:e.jsx(b,{to:"/host/main",className:"btn1",children:"행사등록"})}),e.jsx("button",{onClick:()=>j(),className:"toggle_menu",children:e.jsx(ws,{})})]})]}),a&&e.jsx(ji,{}),!r&&t&&e.jsx(ni,{setClose:s,children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(b,{to:"/login",onClick:d,children:"로그인"})}),e.jsx("li",{children:e.jsx(b,{to:"/join",onClick:d,children:"회원가입"})})]})}),r&&t&&e.jsx(ni,{setClose:s,children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(b,{to:"/mypage/apply-list",onClick:d,children:"신청 행사"})}),e.jsx("li",{children:e.jsx(b,{to:"/mypage/cancel-list",onClick:d,children:"취소 내역"})}),e.jsx("li",{children:e.jsx(b,{to:"/mypage/wish-list",onClick:d,children:"관심 행사"})}),e.jsx("li",{children:e.jsx(b,{to:"/mypage/past-list",onClick:d,children:"지난 행사"})}),e.jsx("li",{children:e.jsx(b,{to:"/mypage/user-modify",onClick:d,children:"내 정보 수정"})}),e.jsx("li",{children:e.jsx("button",{onClick:u,style:{color:"#fff"},children:"로그아웃"})})]})})]})},O=as.create({baseURL:"https://api.micemate.io/"}),Ns=()=>te({mutationFn:async t=>(await O({method:"POST",url:"/api/users",headers:{"Content-Type":"application/json"},data:t})).data}),ks=()=>{const t=Ji(xe);return te({mutationFn:async s=>(await O({method:"POST",url:"/api/auth",headers:{"Content-Type":"application/json"},data:{email:s.email,password:s.password,remember_me:s.remember}})).data,onSuccess:s=>{const a={isLogin:!0,isLoginError:!1,data:{user_id:s.data.user_id,name:s.data.name,token:s.data.token,is_company:s.data.is_company}};t({...a})}})},yi=t=>ie({queryKey:["token",t],queryFn:async()=>(await O({method:"GET",url:"/api/auth",headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`}})).data,refetchInterval:108e5,enabled:!!t}),Hs=t=>i.createElement("svg",{width:28,height:30,viewBox:"0 0 28 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M0 4.6875C0 4.43886 0.0921872 4.2004 0.256282 4.02459C0.420376 3.84877 0.642936 3.75 0.875 3.75H3.5C3.69518 3.75006 3.88474 3.82003 4.03853 3.9488C4.19232 4.07756 4.30152 4.25772 4.34875 4.46062L5.0575 7.5H25.375C25.5079 7.50004 25.6391 7.53252 25.7585 7.59497C25.878 7.65743 25.9826 7.74822 26.0644 7.86045C26.1462 7.97268 26.203 8.10341 26.2307 8.2427C26.2583 8.382 26.2559 8.5262 26.2237 8.66437L23.5987 19.9144C23.5515 20.1173 23.4423 20.2974 23.2885 20.4262C23.1347 20.555 22.9452 20.6249 22.75 20.625H7C6.80482 20.6249 6.61526 20.555 6.46147 20.4262C6.30768 20.2974 6.19848 20.1173 6.15125 19.9144L2.8175 5.625H0.875C0.642936 5.625 0.420376 5.52623 0.256282 5.35041C0.0921872 5.1746 0 4.93614 0 4.6875ZM5.495 9.375L7.6825 18.75H22.0675L24.255 9.375H5.495ZM8.75 24.375C8.28587 24.375 7.84075 24.5725 7.51256 24.9242C7.18437 25.2758 7 25.7527 7 26.25C7 26.7473 7.18437 27.2242 7.51256 27.5758C7.84075 27.9275 8.28587 28.125 8.75 28.125C9.21413 28.125 9.65925 27.9275 9.98744 27.5758C10.3156 27.2242 10.5 26.7473 10.5 26.25C10.5 25.7527 10.3156 25.2758 9.98744 24.9242C9.65925 24.5725 9.21413 24.375 8.75 24.375ZM5.25 26.25C5.25 25.2554 5.61875 24.3016 6.27513 23.5984C6.9315 22.8951 7.82174 22.5 8.75 22.5C9.67826 22.5 10.5685 22.8951 11.2249 23.5984C11.8813 24.3016 12.25 25.2554 12.25 26.25C12.25 27.2446 11.8813 28.1984 11.2249 28.9016C10.5685 29.6049 9.67826 30 8.75 30C7.82174 30 6.9315 29.6049 6.27513 28.9016C5.61875 28.1984 5.25 27.2446 5.25 26.25ZM21 24.375C20.5359 24.375 20.0908 24.5725 19.7626 24.9242C19.4344 25.2758 19.25 25.7527 19.25 26.25C19.25 26.7473 19.4344 27.2242 19.7626 27.5758C20.0908 27.9275 20.5359 28.125 21 28.125C21.4641 28.125 21.9092 27.9275 22.2374 27.5758C22.5656 27.2242 22.75 26.7473 22.75 26.25C22.75 25.7527 22.5656 25.2758 22.2374 24.9242C21.9092 24.5725 21.4641 24.375 21 24.375ZM17.5 26.25C17.5 25.2554 17.8687 24.3016 18.5251 23.5984C19.1815 22.8951 20.0717 22.5 21 22.5C21.9283 22.5 22.8185 22.8951 23.4749 23.5984C24.1313 24.3016 24.5 25.2554 24.5 26.25C24.5 27.2446 24.1313 28.1984 23.4749 28.9016C22.8185 29.6049 21.9283 30 21 30C20.0717 30 19.1815 29.6049 18.5251 28.9016C17.8687 28.1984 17.5 27.2446 17.5 26.25Z",fill:"white"})),Ss=t=>i.createElement("svg",{width:24,height:26,viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_730_62662)"},i.createElement("path",{d:"M5.25 0C5.44891 0 5.63968 0.0856024 5.78033 0.237976C5.92098 0.390349 6 0.597012 6 0.8125V1.625H18V0.8125C18 0.597012 18.079 0.390349 18.2197 0.237976C18.3603 0.0856024 18.5511 0 18.75 0C18.9489 0 19.1397 0.0856024 19.2803 0.237976C19.421 0.390349 19.5 0.597012 19.5 0.8125V1.625H21C21.7956 1.625 22.5587 1.96741 23.1213 2.5769C23.6839 3.1864 24 4.01305 24 4.875V22.75C24 23.612 23.6839 24.4386 23.1213 25.0481C22.5587 25.6576 21.7956 26 21 26H3C2.20435 26 1.44129 25.6576 0.87868 25.0481C0.316071 24.4386 0 23.612 0 22.75V4.875C0 4.01305 0.316071 3.1864 0.87868 2.5769C1.44129 1.96741 2.20435 1.625 3 1.625H4.5V0.8125C4.5 0.597012 4.57902 0.390349 4.71967 0.237976C4.86032 0.0856024 5.05109 0 5.25 0V0ZM3 3.25C2.60218 3.25 2.22064 3.4212 1.93934 3.72595C1.65804 4.0307 1.5 4.44402 1.5 4.875V6.5H22.5V4.875C22.5 4.44402 22.342 4.0307 22.0607 3.72595C21.7794 3.4212 21.3978 3.25 21 3.25H3ZM22.5 8.125H1.5V22.75C1.5 23.181 1.65804 23.5943 1.93934 23.899C2.22064 24.2038 2.60218 24.375 3 24.375H21C21.3978 24.375 21.7794 24.2038 22.0607 23.899C22.342 23.5943 22.5 23.181 22.5 22.75V8.125Z",fill:"white"}),i.createElement("path",{d:"M16.5 12.1875C16.5 11.972 16.579 11.7653 16.7197 11.613C16.8603 11.4606 17.0511 11.375 17.25 11.375H18.75C18.9489 11.375 19.1397 11.4606 19.2803 11.613C19.421 11.7653 19.5 11.972 19.5 12.1875V13.8125C19.5 14.028 19.421 14.2347 19.2803 14.387C19.1397 14.5394 18.9489 14.625 18.75 14.625H17.25C17.0511 14.625 16.8603 14.5394 16.7197 14.387C16.579 14.2347 16.5 14.028 16.5 13.8125V12.1875Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_730_62662"},i.createElement("rect",{width:24,height:26,fill:"white"})))),li=t=>i.createElement("svg",{width:30,height:32,viewBox:"0 0 30 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M15 16C16.4918 16 17.9226 15.3679 18.9775 14.2426C20.0324 13.1174 20.625 11.5913 20.625 10C20.625 8.4087 20.0324 6.88258 18.9775 5.75736C17.9226 4.63214 16.4918 4 15 4C13.5082 4 12.0774 4.63214 11.0225 5.75736C9.96763 6.88258 9.375 8.4087 9.375 10C9.375 11.5913 9.96763 13.1174 11.0225 14.2426C12.0774 15.3679 13.5082 16 15 16ZM18.75 10C18.75 11.0609 18.3549 12.0783 17.6516 12.8284C16.9484 13.5786 15.9946 14 15 14C14.0054 14 13.0516 13.5786 12.3483 12.8284C11.6451 12.0783 11.25 11.0609 11.25 10C11.25 8.93913 11.6451 7.92172 12.3483 7.17157C13.0516 6.42143 14.0054 6 15 6C15.9946 6 16.9484 6.42143 17.6516 7.17157C18.3549 7.92172 18.75 8.93913 18.75 10ZM26.25 26C26.25 28 24.375 28 24.375 28H5.625C5.625 28 3.75 28 3.75 26C3.75 24 5.625 18 15 18C24.375 18 26.25 24 26.25 26ZM24.375 25.992C24.3731 25.5 24.0863 24.02 22.815 22.664C21.5925 21.36 19.2919 20 15 20C10.7063 20 8.4075 21.36 7.185 22.664C5.91375 24.02 5.62875 25.5 5.625 25.992H24.375Z",fill:"white"})),Ee=()=>{const[t,s]=zt(vs),a=i.useCallback(()=>{s(l=>({...l,isOpen:!1})),t!=null&&t.callBack&&t.callBack()},[s,t]),n=i.useCallback(({text:l,callback:c})=>s({isOpen:!0,text:l,callBack:c}),[s]);return{alretData:t,closeAlret:a,openAlret:n}},Es=()=>{const t=ke(xe),s=je(xe),a=localStorage.getItem("token"),{data:n,isError:l}=yi(a),c=t.isLogin,p=D(),{openAlret:r}=Ee();return i.useEffect(()=>{n&&localStorage.setItem("user_type",n.data.is_company),l&&n===void 0&&(r({text:`토큰이 만료되어 로그아웃 되었습니다.
 메인화면으로 돌아갑니다.`,callback:()=>{p("/",{replace:!0})}}),s())},[n,l,s]),e.jsxs("div",{children:[e.jsxs(us,{className:"maxframe",children:[e.jsx(_i,{children:e.jsx(b,{to:"/",children:e.jsx(Mt,{})})}),e.jsxs(js,{children:[e.jsx(ji,{}),e.jsxs(wi,{children:[!c&&e.jsxs(ri,{$loginState:c,children:[e.jsx("div",{className:"login",children:e.jsx(b,{to:"/login",children:"로그인"})}),e.jsx("div",{children:e.jsx(b,{to:"/join",children:"회원가입"})})]}),c&&e.jsxs(ri,{children:[e.jsx("div",{children:e.jsx(b,{to:"/mypage/wish-list",children:e.jsx(Hs,{})})}),e.jsx("div",{children:e.jsx(b,{to:"/mypage/apply-list",children:e.jsx(Ss,{})})}),e.jsx("div",{children:t.data.is_company?e.jsx(b,{to:"/host/my/mypage",children:e.jsx(li,{})}):e.jsx(b,{to:"/mypage/user-modify",children:e.jsx(li,{})})})]}),e.jsx(vi,{children:e.jsx(b,{to:"/host-main",className:"btn1",children:"행사등록"})})]})]})]}),e.jsx(Cs,{})]})},Ls=t=>i.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18.3164C9 14.7213 9 12.9237 9.85669 11.629C10.2392 11.0508 10.7344 10.5557 11.3126 10.1731C12.6073 9.31641 14.4049 9.31641 18 9.31641C21.5951 9.31641 23.3927 9.31641 24.6874 10.1731C25.2656 10.5557 25.7608 11.0508 26.1433 11.629C27 12.9237 27 14.7213 27 18.3164C27 21.9115 27 23.7091 26.1433 25.0039C25.7608 25.582 25.2656 26.0772 24.6874 26.4597C23.3927 27.3164 21.5951 27.3164 18 27.3164C14.4049 27.3164 12.6073 27.3164 11.3126 26.4597C10.7344 26.0772 10.2392 25.582 9.85669 25.0039C9 23.7091 9 21.9115 9 18.3164ZM22.6596 18.3165C22.6596 20.8898 20.5735 22.9759 18.0002 22.9759C15.4269 22.9759 13.3408 20.8898 13.3408 18.3165C13.3408 15.7431 15.4269 13.657 18.0002 13.657C20.5735 13.657 22.6596 15.7431 22.6596 18.3165ZM18.0002 21.3995C19.7029 21.3995 21.0832 20.0191 21.0832 18.3165C21.0832 16.6138 19.7029 15.2334 18.0002 15.2334C16.2975 15.2334 14.9172 16.6138 14.9172 18.3165C14.9172 20.0191 16.2975 21.3995 18.0002 21.3995ZM22.8436 14.5178C23.4483 14.5178 23.9385 14.0276 23.9385 13.4229C23.9385 12.8183 23.4483 12.3281 22.8436 12.3281C22.239 12.3281 21.7488 12.8183 21.7488 13.4229C21.7488 14.0276 22.239 14.5178 22.8436 14.5178Z",fill:"white"})),zs=t=>i.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),i.createElement("path",{d:"M18.4402 25.2961L14.378 25.2202C13.0628 25.1937 11.7443 25.2465 10.4548 24.9724C8.49323 24.5629 8.35427 22.555 8.20886 20.8708C8.0085 18.5029 8.08606 16.0921 8.46417 13.744C8.67763 12.4265 9.51766 11.6404 10.8167 11.5548C15.2021 11.2443 19.6166 11.2811 23.9922 11.426C24.4544 11.4393 24.9197 11.5118 25.3753 11.5944C27.6246 11.9974 27.6795 14.2728 27.8253 16.1882C27.9707 18.1234 27.9093 20.0686 27.6314 21.9906C27.4084 23.582 26.9818 24.9166 25.1814 25.0454C22.9257 25.2139 20.7217 25.3495 18.4596 25.3063C18.4597 25.2961 18.4467 25.2961 18.4402 25.2961ZM16.052 21.2671C17.7519 20.2697 19.4194 19.2889 21.1096 18.2982C19.4065 17.3008 17.7422 16.32 16.052 15.3293V21.2671Z",fill:"white"})),Vs=t=>i.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),i.createElement("path",{d:"M12.9896 16.9581C12.6245 16.9581 12.3281 17.2578 12.3281 17.6267C12.3281 17.9957 12.6245 18.2953 12.9896 18.2953C13.3546 18.2953 13.651 17.9957 13.651 17.6267C13.651 17.2578 13.3546 16.9581 12.9896 16.9581Z",fill:"white"}),i.createElement("path",{d:"M19.5205 18.3275C19.9137 18.3275 20.2324 18.0054 20.2324 17.6079C20.2324 17.2105 19.9137 16.8884 19.5205 16.8884C19.1273 16.8884 18.8086 17.2105 18.8086 17.6079C18.8086 18.0054 19.1273 18.3275 19.5205 18.3275Z",fill:"white"}),i.createElement("path",{d:"M25.4327 10.3164H11.3689C9.95022 10.3164 8.80078 11.4782 8.80078 12.9121V21.3482C8.80078 22.7822 9.95022 23.944 11.3689 23.944H16.3368L18.026 27.9671C18.026 27.9671 18.1425 28.3164 18.4234 28.3164C18.7043 28.3164 18.8208 27.9671 18.8208 27.9671L20.51 23.944H25.4314C26.8501 23.944 27.9995 22.7822 27.9995 21.3482V12.9121C27.9995 11.4782 26.8501 10.3164 25.4314 10.3164H25.4327ZM14.8327 17.7739C14.825 19.3164 13.2471 19.3596 13.2471 19.3596C12.6374 19.3596 12.2931 18.9514 12.2931 18.9514V19.2287H11.145V14.4403C11.145 14.4403 11.1398 14.439 11.145 14.4376V14.4403C11.2162 14.452 12.2931 14.4376 12.2931 14.4376V16.2693C12.5636 15.8035 13.3442 15.8114 13.3442 15.8114C15.045 15.971 14.8327 17.7739 14.8327 17.7739ZM16.8546 15.9579V19.2366H15.7298V15.9906C15.7298 15.5484 15.1874 15.4267 15.1874 15.4267V14.282C16.9828 14.3552 16.8533 15.9579 16.8533 15.9579H16.8546ZM19.5198 19.3622C18.4791 19.3622 17.6351 18.5772 17.6351 17.6077C17.6351 16.6383 18.4791 15.8533 19.5198 15.8533C20.5605 15.8533 21.4045 16.6383 21.4045 17.6077C21.4045 18.5772 20.5605 19.3622 19.5198 19.3622ZM25.6799 19.3622C25.6799 19.3622 25.6954 21.0277 24.0218 21.0277H23.5118V19.9483H23.8185C23.8185 19.9483 24.5227 20.0137 24.5136 18.9174C24.5136 18.9174 24.3764 19.3609 23.3888 19.3609C23.3888 19.3609 21.9895 19.2588 21.9895 17.8786V17.3552C21.9895 17.3552 22.0219 15.9239 23.5584 15.8101C23.5584 15.8101 24.1654 15.7447 24.5369 16.2523V15.9004H25.6773V19.3609L25.6799 19.3622Z",fill:"white"}),i.createElement("path",{d:"M23.8943 18.3102C24.2782 18.3102 24.5894 17.9956 24.5894 17.6076C24.5894 17.2196 24.2782 16.905 23.8943 16.905C23.5104 16.905 23.1992 17.2196 23.1992 17.6076C23.1992 17.9956 23.5104 18.3102 23.8943 18.3102Z",fill:"white"})),As=t=>i.createElement("svg",{width:36,height:37,viewBox:"0 0 36 37",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{y:.316406,width:36,height:36,rx:8,fill:"#292E37"}),i.createElement("path",{d:"M25.0511 11.3164H10.5268C10.255 11.3164 10.0025 11.3747 9.76953 11.4912L17.789 17.996L25.8084 11.4912C25.5754 11.3747 25.3424 11.3164 25.0511 11.3164Z",fill:"white"}),i.createElement("path",{d:"M18.3348 19.7836C18.1794 19.9195 17.9852 19.9778 17.7911 19.9778C17.5969 19.9778 17.4027 19.9195 17.2474 19.7836L8.80078 12.9292C8.80078 12.968 8.80078 12.9875 8.80078 13.0457V23.5894C8.80078 24.5409 9.57748 25.3176 10.5289 25.3176H25.0726C26.0241 25.3176 26.8008 24.5409 26.8008 23.5894V13.0457C26.8008 13.0069 26.8008 12.9875 26.8008 12.9292L18.3348 19.7836Z",fill:"white"})),Ms=h.footer`
  display: flex;
  flex-direction: column;
  padding: 0 200px;
  justify-content: center;
  height: 376px;
  @media (max-width: 1400px) {
    padding: 0 100px;
  }
  @media (max-width: 1350px) {
    padding: 0 50px;
  }
  @media (max-width: 1190px) {
    padding: 0 20px;
  }
  @media (max-width: 1050px) {
    padding: 0 10px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;
    height: 280px;
    margin-bottom: 40px;
  }
`,Fs=h.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  & .logo {
    width: 100%;
    & > svg {
      max-width: 208px;
      width: 100%;
      height: auto;
      @media (max-width: 1024px) {
        max-width: 130px;
      }
    }
  }
  & .footer_nav {
    width: 80%;
    display: flex;
    font-weight: 500;
    color: #fff;
    gap: 32px;
    padding-bottom: 45px;
    @media (max-width: 1240px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      padding-top: 10px;
      font-size: 12px;
      gap: 15px;
      padding-bottom: 20px;
    }
  }
`,Bs=h.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  & .link_area {
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  & .sns_link {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: 20px;
    @media (max-width: 1024px) {
      padding: 10px 0;
      gap: 12px;
    }
  }
  & .sns_link li a {
    display: block;
    width: 30px;
  }
  & .sns_link li a svg {
    width: 100%;
  }
  & .docs_link {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    color: #fff;

    @media (max-width: 1240px) {
      font-size: 12px;
    }
  }
  & .desc {
    width: 80%;
    color: #b0b8c1;
    font-size: 14px;
    line-height: 1.5;
    @media (max-width: 1240px) {
      width: 100%;
      font-size: 10px;
    }
  }
  & .desc a {
    text-decoration: underline;
  }
  & .copyright {
    padding-top: 10px;
  }
`,Ts=()=>e.jsxs(Ms,{className:"maxframe",children:[e.jsx(Fs,{children:e.jsx("p",{className:"logo",children:e.jsx(Mt,{})})}),e.jsxs(Bs,{children:[e.jsxs("div",{className:"link_area",children:[e.jsxs("ul",{className:"sns_link",children:[e.jsx("li",{children:e.jsx(b,{to:"https://www.instagram.com/mindsground?igsh=MmVnaThtdHF4Z2V2&utm_source=qr",target:"_blank",children:e.jsx(Ls,{})})}),e.jsx("li",{children:e.jsx(b,{to:"https://www.youtube.com/@mindsground_official",target:"_blank",children:e.jsx(zs,{})})}),e.jsx("li",{children:e.jsx(b,{to:"https://blog.naver.com/mindsstudio",target:"_blank",children:e.jsx(Vs,{})})}),e.jsx("li",{children:e.jsx(b,{to:"mailto:admin@mindsground.com",target:"_blank",children:e.jsx(As,{})})})]}),e.jsxs("div",{className:"docs_link",children:[e.jsx("a",{href:"/user/downloadFile/마인즈그라운드_창업기업확인서.pdf",download:"마인즈그라운드_창업기업확인서.pdf",children:"창업기업확인서 받기"}),"   |   ",e.jsx("a",{href:"/user/downloadFile/마인즈그라운드_사회적기업확인서.pdf",download:"마인즈그라운드_사회적기업확인서.pdf",children:"사회적기업확인서 받기"})]})]}),e.jsxs("div",{className:"desc",children:[e.jsx("p",{children:"마인즈그라운드 주식회사  |  대표이사 : 민환기  |  사업자 등록번호 : 732-87-01581"}),e.jsx("p",{children:"서울특별시 금천구 가산디지털1로 171 SKV1 301호"}),e.jsx("p",{children:"Tel : 02-6747-7513  |  Fax : 02 -6499-7513  |  E-mail : admin@mindsground.com"}),e.jsx("p",{children:e.jsx(b,{to:"/privacy-policy",children:"개인정보처리방침"})}),e.jsx("p",{className:"copyright",children:"Copyright © 마인즈그라운드 주식회사. All Rights Reserved."})]})]})]}),Ps=h.main`
  min-height: 60vh;
`,Zs=h.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,$s=h.div`
  position: fixed;
  width: 595px;
  /* height: 181px; */
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 0 35px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (max-width: 1024px) {
    width: auto;
    right: 16px;
    left: 16px;
    transform: none;
    transform: translateY(-50%);
  }
  & .alret_header {
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    & .close_btn {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  & .desc {
    word-break: keep-all;
    white-space: pre-line;
    padding: 25px 0 30px;
    text-align: center;
    line-height: 1.3;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  & .btn_area {
    text-align: center;
    padding-bottom: 30px;
    & button {
      width: 134px;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;
      @media (max-width: 400px) {
        width: 100px;
        padding: 8px;
        font-size: 15px;
      }
    }
    & .primary {
      background-color: #09338c;
      color: #fff;
      border: 2px solid rgba(11, 12, 55, 1);
    }
  }
`,Ci=t=>i.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M1 1L13 13",stroke:"#555555",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M13 1L0.999999 13",stroke:"#555555",strokeLinecap:"round",strokeLinejoin:"round"})),Ni=()=>{const{alretData:t,closeAlret:s}=Ee();return e.jsx(e.Fragment,{children:t.isOpen&&e.jsx(Zs,{children:e.jsxs($s,{children:[e.jsx("div",{className:"alret_header",children:e.jsx("button",{onClick:s,className:"close_btn",children:e.jsx(Ci,{})})}),e.jsx("div",{className:"desc",children:t.text}),e.jsx("div",{className:"btn_area",children:e.jsx("button",{onClick:s,className:"primary",children:"확인"})})]})})})},Is=h.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,Os=h.div`
  position: fixed;
  width: 595px;
  /* height: 181px; */
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 0 35px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (max-width: 1024px) {
    width: auto;
    right: 16px;
    left: 16px;
    transform: none;
    transform: translateY(-50%);
  }
  & .alret_header {
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    & .close_btn {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  & .desc {
    word-break: keep-all;
    padding: 25px 0 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  & .btn_area {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding-bottom: 30px;
    & button {
      width: 134px;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;

      @media (max-width: 400px) {
        width: 100px;
        padding: 8px;
        font-size: 15px;
      }
    }
    & .secondary {
      border: 2px solid rgba(9, 51, 140, 1);
    }
    & .primary {
      background-color: #09338c;
      color: #fff;
      border: 2px solid rgba(11, 12, 55, 1);
    }
  }
`,ki=()=>{const{confirmData:t,closeConfirm:s}=Ye();return e.jsx(e.Fragment,{children:t.isOpen&&e.jsx(Is,{children:e.jsxs(Os,{children:[e.jsx("div",{className:"alret_header",children:e.jsx("button",{onClick:()=>s({confirm:!1}),className:"close_btn",children:e.jsx(Ci,{})})}),e.jsx("div",{className:"desc",children:t.text}),e.jsxs("div",{className:"btn_area",children:[e.jsx("button",{onClick:()=>s({confirm:!1}),className:"secondary",children:"닫기"}),t.logout===!0&&e.jsx("button",{onClick:()=>s({logoutOk:!0}),className:"primary",children:"확인"}),t.logout===!1&&e.jsx("button",{onClick:()=>s({confirm:!0}),className:"primary",children:t.okBtn})]})]})})})},we=()=>{const[t,s]=zt(ys),a=i.useCallback(()=>{s({isOpen:!1,text:""})},[]),n=i.useCallback(l=>{s({isOpen:!0,text:l});const c=setTimeout(()=>{a()},3e3);return()=>clearTimeout(c)},[a]);return{toastData:t,openToast:n,closeToast:a}},qs=h.div`
  position: fixed;
  bottom: 48px;
  color: #fff;
  background-color: rgba(41, 46, 55, 1);
  border-radius: 50rem;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 500;
  left: 50%;
  transform: translateX(-50%);
  transition: all 1s;
  z-index: 999;
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 10px 30px;
    bottom: 30px;
  }
`,Hi=()=>{const{toastData:t}=we();return e.jsx(e.Fragment,{children:t.isOpen&&e.jsx(qs,{children:t.text})})},Rs=()=>e.jsxs(ui,{children:[e.jsx(Es,{}),e.jsx(Ps,{children:e.jsx(jt,{})}),e.jsx(Ts,{}),e.jsx(ki,{}),e.jsx(Ni,{}),e.jsx(Hi,{})]}),Ws=h.div`
  position: absolute;
  top: 52px;
  left: 56px;
  width: 280px;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  padding: 30px 20px;
  @media (max-width: 1600px) {
    width: 250px;
  }
  @media (max-width: 1400px) {
    left: 20px;
  }
  & h2 {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`,Ys=h.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,mt=h.li`
  width: 100%;
  position: relative;
  font-size: 18px;

  color: ${t=>t.$isOn?"#fff":"rgba(255, 255, 255, 0.5)"};
  padding: 10px 25px;
  border-radius: 50rem;
  font-weight: 600;
  background-color: ${t=>t.$target&&"rgba(255, 255, 255, 0.1)"};
  cursor: pointer;
  &.sub_list {
    font-size: 16px;
    font-weight: 500;
    padding: 10px 25px;
  }
  & a,
  & button {
    display: block;
    color: ${t=>t.$target?"#fff":"rgba(255, 255, 255, 0.5)"};
  }
  & > span {
    position: absolute;
    display: block;
    right: 16px;
    top: 50%;
    transform: translateY(-50%)
      rotate(${t=>t.$isOn?"180deg":"0"});
    width: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg path {
      stroke-opacity: ${t=>t.$isOn?1:.5};
    }
  }
`,Us=h.div`
  display: ${t=>t.$isOn?"block":"none"};
  border-radius: 0 0 4px 4px;
  border-top: none;
`;h.li`
  font-size: 13px;
  padding: 5px 9px 6px;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: -0.001em;
`;const Qs=t=>i.createElement("svg",{width:16,height:9,viewBox:"0 0 16 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M1 1L8 8L15 1",stroke:"white",strokeOpacity:.5,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Ks=[{id:"00",name:"참여 행사 관리",type:"toggleButton",subMenu:[{id:"00-00",path:"/mypage/apply-list",name:"신청 행사"},{id:"00-01",path:"/mypage/cancel-list",name:"취소 내역"},{id:"00-02",path:"/mypage/wish-list",name:"관심 행사"},{id:"00-03",path:"/mypage/past-list",name:"지난 행사"}]}],Js=()=>{const{openConfirm:t,confirmValue:s}=Ye(),[a,n]=i.useState(!1),l=fe(),c=je(xe),p=je(Ae),r=D(),o=()=>{t({text:"로그아웃 하시겠습니까?",okBtn:"확인",logout:!0})};i.useEffect(()=>{s.logoutOk===!0&&(c(),p(),r("/"))},[s.logoutOk]);const f=()=>{n(m=>!m)};return i.useEffect(()=>{l.pathname!=="/mypage/user-modify"&&n(!0)},[l.pathname]),e.jsxs(Ws,{children:[e.jsx("h2",{children:"마이페이지"}),e.jsxs(Ys,{children:[Ks.map(m=>e.jsxs("div",{children:[e.jsxs(mt,{onClick:f,$isOn:a,children:[m.name,e.jsx("span",{children:e.jsx(Qs,{})})]}),e.jsx(Us,{$isOn:a,children:m.subMenu&&m.subMenu.map(g=>e.jsx(mt,{$target:l.pathname.indexOf(g.path)>=0,children:e.jsx(b,{to:g.path,children:g.name})},g.id))})]},m.id)),e.jsx(mt,{$target:l.pathname.indexOf("/mypage/user-modify")>=0,children:e.jsx(b,{to:"/mypage/user-modify",children:"내 정보 수정"})}),e.jsx(mt,{children:e.jsx("button",{onClick:o,children:"로그아웃"})})]})]})},Xs=h.div`
  position: relative;
  display: flex;
  padding: 0px 110px 0 0;
  @media (max-width: 1400px) {
    padding: 0px 70px 0 0;
  }
  @media (max-width: 1200px) {
    padding: 0px 20px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px 0;
  }
`,Ds=h.h3`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
    gap: 0px;
  }
  & .title {
    @media (max-width: 1024px) {
      display: ${t=>t.$subPage&&"none"};
    }
  }
  & .prev_btn {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50rem;
    overflow: hidden;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 24px;
      height: 24px;
    }
    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: 1024px) {
        width: 76px;
        height: 76px;
      }
    }
  }
  & .sub_icon {
    @media (max-width: 1024px) {
      display: ${t=>t.$subPage&&"none"};
    }
  }
`,Gs=h.div`
  padding-left: 364px;
  width: 100%;
  min-height: 90vh;
  @media (max-width: 1600px) {
    padding-left: 324px;
  }
  @media (max-width: 1400px) {
    padding-left: 280px;
  }
  @media (max-width: 1024px) {
    padding: 0;
    min-height: auto;
  }
`,ea=t=>i.createElement("svg",{width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M1 15L8 8L1 1",stroke:"white",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ta=t=>i.createElement("svg",{width:116,height:116,viewBox:"0 0 116 116",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{filter:"url(#filter0_d_724_46418)"},i.createElement("circle",{cx:58,cy:58,r:18,transform:"rotate(180 58 58)",fill:"#F7FAFB",fillOpacity:.28,shapeRendering:"crispEdges"})),i.createElement("path",{d:"M68.125 58.2812L50.9687 58.2813M50.9687 58.2813L57.4899 51.8125M50.9687 58.2813L57.4899 64.75",stroke:"white",strokeWidth:2,strokeLinecap:"round"}),i.createElement("defs",null,i.createElement("filter",{id:"filter0_d_724_46418",x:0,y:0,width:116,height:116,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},i.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),i.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),i.createElement("feOffset",null),i.createElement("feGaussianBlur",{stdDeviation:20}),i.createElement("feComposite",{in2:"hardAlpha",operator:"out"}),i.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),i.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_724_46418"}),i.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_724_46418",result:"shape"})))),ia=()=>{const[t,s]=i.useState(),a=fe(),n=D(),l=wt("(max-width:1024px)");return i.useEffect(()=>{a.pathname==="/mypage/apply-list"?s({title:"신청 행사"}):a.pathname==="/mypage/cancel-list"?s({title:"취소 내역"}):a.pathname==="/mypage/wish-list"?s({title:"관심 행사"}):a.pathname==="/mypage/past-list"?s({title:"지난 행사"}):a.pathname==="/mypage/user-modify"?s({title:"내 정보 수정"}):a.pathname==="/mypage/apply-list/booth-select/01"?s({title:"신청 행사",subTitle:"2024 케이펫페어 서울"}):a.pathname==="/mypage/apply-list/booth-check/01"?s({title:"신청 행사",subTitle:"2024 케이펫페어 서울"}):a.pathname==="/mypage/user-modify/with-draw"?s({title:"탈퇴하기"}):s({})},[a.pathname]),e.jsxs(Xs,{className:"maxframe",children:[!l&&e.jsx(Js,{}),e.jsxs(Gs,{children:[t&&e.jsxs(Ds,{$subPage:t==null?void 0:t.subTitle,children:[t.subTitle&&e.jsx("span",{onClick:()=>{n(-1)},className:"prev_btn",children:e.jsx(ta,{})}),e.jsx("span",{className:"title",children:t.title}),t.subTitle&&e.jsxs(e.Fragment,{children:[e.jsx(ea,{className:"sub_icon"}),e.jsx("span",{className:"sub_title",children:t.subTitle})]})]}),e.jsx(jt,{})]})]})},sa=h.div`
  & > .main_swiper {
    padding: 45px 0;
    @media (max-width: 1024px) {
      padding: 20px 0 0;
    }
  }
  & > .main_swiper .swiper-slide figure {
    position: relative;
    aspect-ratio: 1920/840;
    overflow: hidden;
    border-radius: 30px;
    @media (max-width: 1024px) {
      border-radius: 10px;
    }
  }
  & > .main_swiper .swiper-slide figure img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > .main_swiper .swiper-slide figure img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* navigation */
  & > .main_swiper .swiper-button-prev,
  & > .main_swiper .swiper-button-next {
    width: 64px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .main_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 139px);
  }
  & > .main_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 139px);
  }
  & > .main_swiper .swiper-button-prev::after,
  & > .main_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  & > .main_swiper .swiper-button-prev::after {
    background-image: url("/user/images/icon/arrow_prev_main.png");
  }
  & > .main_swiper .swiper-button-next::after {
    background-image: url("/user/images/icon/arrow_next_main.png");
  }
  /* pagination */
  & > .main_swiper .swiper-pagination {
    bottom: var(--swiper-pagination-bottom, 0);
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .main_swiper .swiper-pagination .swiper-pagination-bullet {
    background-color: #fff;
  }
`,aa=({bannerImgs:t})=>{const s=a=>{window.open(a)};return e.jsx(sa,{children:e.jsx(vt,{slidesPerView:1.05,centeredSlides:!0,spaceBetween:5,navigation:!0,pagination:!0,modules:[ns,At,rs],loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{1024:{spaceBetween:24}},className:"main_swiper",children:t&&t.map((a,n)=>e.jsx(yt,{onClick:()=>s(a.url),children:e.jsx("figure",{children:e.jsx("img",{src:a.img,alt:`메인배너_${n}`})})},n))})})},na=h.div`
  padding: 160px 0 0;
  @media (max-width: 1024px) {
    padding: 0;
  }
`,ra=h.div`
  word-break: keep-all;
  color: #fff;
  padding: 0 60px 40px;
  @media (max-width: 1650px) {
    padding: 0 30px 20px;
  }
  @media (max-width: 1024px) {
    text-align: center;
    padding: 30px 16px 20px;
  }
  & h3 {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 13px;
    @media (max-width: 1024px) {
      font-size: 16px;
      padding-bottom: 5px;
    }
  }
  & span {
    font-size: 24px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`,la=h.div`
  & > .event_swiper {
    padding: 0 60px;
    @media (max-width: 1650px) {
      padding: 0 30px;
    }
    @media (max-width: 1024px) {
      padding: 0 16px;
    }
  }
  & > .event_swiper::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    width: 60px;
    z-index: 2;
    @media (max-width: 1650px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      width: 16px;
    }
  }
  & > .event_swiper::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    width: 60px;
    z-index: 1;
    @media (max-width: 1650px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      width: 16px;
    }
  }

  /* navigation */
  & > .event_swiper .swiper-button-prev,
  & > .event_swiper .swiper-button-next {
    width: 76px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    top: var(--swiper-navigation-top-offset, 43%);
    @media (max-width: 1650px) {
      width: 50px;
      height: 43px;
    }
    @media (max-width: 1024px) {
      width: 35px;
      height: 31px;
    }
  }
  & > .event_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1650px) {
      left: var(--swiper-navigation-sides-offset, 8px);
    }
    @media (max-width: 1024px) {
      left: var(--swiper-navigation-sides-offset, 5px);
    }
  }
  & > .event_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1650px) {
      right: var(--swiper-navigation-sides-offset, 8px);
    }
    @media (max-width: 1024px) {
      right: var(--swiper-navigation-sides-offset, 5px);
    }
  }
  & > .event_swiper .swiper-button-prev::after,
  & > .event_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 1650px) {
      background-size: 174%;
    }
  }
  & > .event_swiper .swiper-button-prev::after {
    background-image: url("/user/images/icon/arrow_prev.png");
  }
  & > .event_swiper .swiper-button-next::after {
    background-image: url("/user/images/icon/arrow_next.png");
  }
`,oa=h.div`
  position: relative;
`,da=h.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #000;
  position: absolute;
  top: 26px;
  right: 27px;
  border-radius: 50rem;
  z-index: 2;
  color: #fff;
  padding: 8px 10px;
  font-size: 18px;
  line-height: 1;
  @media (max-width: 1300px) {
    top: 25px;
    right: 25px;
  }
  @media (max-width: 1024px) {
    top: 15px;
    right: 15px;
    font-size: 10px;
    gap: 5px;
    padding: 6px 6px;
  }
  & .heart_icon {
    width: 13px;
    height: 13px;
    @media (max-width: 1024px) {
      width: 12px;
    }
    & svg {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`,ca=h.figure`
  position: relative;
  overflow: hidden;
  aspect-ratio: 432/612;
  border-radius: 20px;
  background-color: #ddd;
  & > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .end_event {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    border-radius: 10px;
  }
`,pa=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 30px 10px 0;
  @media (max-width: 1024px) {
    padding: 15px 5px 0;
  }
  & > div:first-child {
    padding-right: 10px;
  }
  & > div:last-child {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  & .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 1.2;
    @media (max-width: 1300px) {
      font-size: 20px;
    }
    & .title {
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .infomation {
    color: #b0b8c1;
    line-height: 1.2;
    @media (max-width: 1024px) {
      font-size: 9px;
    }
  }
  & .dday {
    padding: 5px 20px;
    background-color: #235ef3;
    border-radius: 9px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    @media (max-width: 1300px) {
      padding: 5px 13px;
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      padding: 7px 5px;
      font-size: 14px;
      border-radius: 4px;
      min-width: 62px;
    }
  }
  & .price {
    padding-top: 15px;
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 1300px) {
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      font-size: 14px;
      border-radius: 4px;
    }
  }
`,Si=t=>i.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_730_61909)"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.00366 1.47733C13.9964 -3.65492 26.4794 5.32596 9.00366 16.8741C-8.47209 5.32708 4.01091 -3.65492 9.00366 1.47733Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_730_61909"},i.createElement("rect",{width:18,height:18,fill:"white"})))),Ei=t=>i.createElement("svg",{width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_730_61925)"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.00183 3.09058L8.19521 2.26145C6.30183 0.315203 2.83008 0.986828 1.57683 3.4337C0.98846 4.58458 0.85571 6.2462 1.93008 8.36683C2.96508 10.4087 5.11833 12.8545 9.00183 15.5185C12.8853 12.8545 15.0375 10.4087 16.0736 8.36683C17.148 6.24508 17.0163 4.58458 16.4268 3.4337C15.1736 0.986828 11.7018 0.314078 9.80846 2.26033L9.00183 3.09058ZM9.00183 16.8741C-8.24779 5.47558 3.69071 -3.42092 8.80383 1.28495C8.87133 1.34683 8.93771 1.41095 9.00183 1.47733C9.06531 1.41101 9.13136 1.34721 9.19983 1.28608C14.3118 -3.42317 26.2515 5.47445 9.00183 16.8741Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_730_61925"},i.createElement("rect",{width:18,height:18,fill:"white"}))));re.extend(ls);re.extend(os);re.locale("ko");const ft=t=>{if(t)return t.split(" ")[0].replace(/-/g,"/")},me=t=>{if(t)return t.split(" ")[0]},ut=t=>{if(t){const s=re(t);if(!s.isValid())throw new Error("Invalid date string");return s.toDate()}},bt=t=>{if(t){const s=String(t.getHours()).padStart(2,"0"),a=String(t.getMinutes()).padStart(2,"0");return`${s}:${a}`}},ge=t=>{if(t){const s=t.split(" ")[0],[a,n,l]=s.split("-");return`${a}년 ${n}월 ${l}일`}},oi=t=>re(t).format("MM월DD일(ddd) HH:mm"),G=t=>Number(t)>0?`${t.replace(/\B(?=(\d{3})+(?!\d))/g,",")}원`:"무료",St=t=>{const s=new Date,a=new Date(t);a.setHours(24,0,0,0);const n=a.getTime()-s.getTime(),l=Math.floor(n/(1e3*60*60*24));return l>0?`-${l}`:`+${Math.abs(l)}`},ct=t=>ie({queryKey:["userInformation",t],queryFn:async()=>(await O({method:"GET",url:`/api/users/${t.user_id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),Li=()=>te({mutationFn:async t=>(await O({method:"PUT",url:`/api/users/${t.user_id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`},data:t.modifyData})).data}),xa=()=>te({mutationFn:async t=>(await O({method:"DELETE",url:`/api/users/${t.user_id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),ha=()=>te({mutationFn:async({token:t,user_id:s,formData:a})=>(await O({method:"POST",url:`/api/users/${s}/company/logo`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${t}`},data:a})).data}),ma=()=>te({mutationFn:async({token:t,user_id:s,formData:a})=>(await O({method:"POST",url:`/api/users/${s}/company`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${t}`},data:a})).data}),pt=t=>{const s=fe();return ie({queryKey:["myEvent",t],queryFn:async()=>(await O({method:"GET",url:`/api/users/${t.user_id}/events?${s.search}`,params:{type:t.type},headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data})},ga=()=>te({mutationFn:async t=>(await O({method:"PUT",url:"/api/users/password/reset",headers:{"Content-Type":"application/json"},data:{email:t}})).data}),Ft=()=>te({mutationFn:async t=>(await O({method:"POST",url:`/api/users/${t.user_id}/events/${t.event_id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),fa=()=>te({mutationFn:async({token:t,user_id:s,boothList:a})=>(await O({method:"POST",url:`/api/users/${s}/booths`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:{ids:a}})).data}),zi=({id:t,title:s,img:a,event_start_date:n,event_end_date:l,position:c,price:p,likes:r,like_state:o})=>{const f=Ft(),m=localStorage.getItem("token"),g=localStorage.getItem("user_id"),{openAlret:j}=Ee(),[d,u]=i.useState(0),[C,N]=i.useState(!1),k=D();i.useEffect(()=>{r&&u(r),o&&N(o)},[r,o]);const V={text:"로그인이 필요한 기능입니다.",callback:()=>{k("/login")}},S=H=>{if(m&&g){const v={token:m,user_id:g,event_id:H};f.mutate(v),N(x=>!x),C===!0?u(x=>x-1):C===!1&&u(x=>x+1)}else j(V)};return e.jsxs(oa,{children:[e.jsxs(da,{onClick:()=>S(t),children:[e.jsx("span",{children:d}),e.jsx("span",{className:"heart_icon",children:C?e.jsx(Si,{}):e.jsx(Ei,{})})]}),e.jsxs(b,{to:`/detail/${t}`,children:[e.jsxs(ca,{children:[e.jsx("img",{src:`https://api.micemate.io/storage/${a}`}),Number(St(l))>0&&e.jsx("p",{className:"end_event",children:"종료행사"})]}),e.jsxs(pa,{children:[e.jsxs("div",{children:[e.jsx("p",{className:"title",children:s}),e.jsxs("p",{className:"infomation",children:[`${ft(n)} ~ ${ft(l)}`,e.jsx("br",{}),c]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"dday",children:`D${St(l)}`}),e.jsx("p",{className:"price",children:`${G(p.toString())}`})]})]})]})]})},lt=({title:t,subTitle:s,eventList:a})=>e.jsx(na,{className:"maxframe EventSliderWrap",children:a&&a.length>0?e.jsxs(e.Fragment,{children:[e.jsxs(ra,{className:"TitleBox",children:[t&&e.jsx("h3",{children:t}),e.jsx("span",{children:s})]}),e.jsx(la,{children:e.jsx(vt,{slidesPerView:2,spaceBetween:10,navigation:!0,modules:[At],loop:!0,loopAdditionalSlides:1,observer:!0,observeParents:!0,breakpoints:{1024:{slidesPerView:3,spaceBetween:15},1650:{slidesPerView:4,spaceBetween:24}},className:"event_swiper",children:a.map(n=>e.jsx(yt,{children:e.jsx(zi,{id:n.id,title:n.title,img:n.img,event_start_date:n.event_start_date,event_end_date:n.event_end_date,position:n.position,price:n.price,likes:n.likes,like_state:n.like_state})},n.id))})})]}):e.jsx("div",{children:"행사정보가 없습니다."})}),ua=h.div`
  padding-bottom: 210px;
  @media (max-width: 1024px) {
    padding-bottom: 40px;
  }
`,ba=h.div`
  margin-top: 160px;
  @media (max-width: 1024px) {
    margin-top: 25px;
  }
  & > img {
    width: 100%;
  }
`,_a=(t,s)=>ie({queryKey:["reviewList",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}/reviews`,headers:{"Content-Type":"application/json",...s?{authorization:`Bearer ${s}`}:{}}})).data}),ot=(t,s)=>ie({queryKey:["eventList",t,s],queryFn:async()=>(await O({method:"GET",url:`/api/events?type=${t}`,headers:{"Content-Type":"application/json",...s?{authorization:`Bearer ${s}`}:{}}})).data}),ja=t=>{const s=fe();return ie({queryKey:["eventManage",s.search],queryFn:async()=>(await O({method:"GET",url:`/api/events/manage${s.search}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`}})).data})},wa=()=>te({mutationFn:async({token:t,event_id:s})=>(await O({method:"DELETE",url:"/api/events/manage",headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:{ids:s}})).data}),xt=(t,s)=>ie({queryKey:["eventDetail",t,s],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}`,headers:{"Content-Type":"application/json",...s?{authorization:`Bearer ${s}`}:{}}})).data}),Vi=(t,s)=>ie({queryKey:["EventApplyInformation",t,s],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}/application-info`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data}),va=(t,s)=>{const a=fe();return ie({queryKey:["EventPartyQuery",a.search],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}/applications${a.search}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},ya=(t,s,a)=>ie({queryKey:["EventPartyDetailQuery",t,a,s],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}/applications/${a}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data}),Ca=(t,s)=>ie({queryKey:["ApplyEdit",t,s],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}/applications/me`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data}),Ai=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"POST",url:`/api/events/${s}/apply`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${t}`},data:a})).data}),Na=t=>ie({queryKey:["eventReviewList",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t.event_id}/reviews`,headers:{"Content-Type":"application/json",...t.token?{authorization:`Bearer ${t.token}`}:{}},params:{id:t.event_id,page:t.page,type:t.sort_type}})).data}),ka=t=>{const s=fe();return ie({queryKey:["eventSearch",s.search],queryFn:async()=>(await O({method:"GET",url:`/api/events/search${s.search}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`}})).data})},Ha=()=>te({mutationFn:async t=>(await O({method:"DELETE",url:`/api/events/${t.event_id}/cancel`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),Sa=()=>te({mutationFn:async t=>(await O({method:"POST",url:"/api/events",headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`},data:t.data})).data}),Ea=t=>ie({queryKey:["ApplyRegisterState",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t.event_id}/edit`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data,enabled:!!t.event_id}),Mi=()=>te({mutationFn:async({token:t,event_id:s})=>(await O({method:"POST",url:`/api/events/${s}/edit`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`}})).data}),Bt=t=>ie({queryKey:["ApplyRegisterState",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t.event_id}/edit/general`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),La=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/general`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${t}`},data:a})).data}),za=t=>ie({queryKey:["ApplyRegisterDetail",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t.event_id}/edit/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),Va=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:JSON.stringify(a)})).data}),Fi=t=>ie({queryKey:["ApplyRegisterRecruit",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t.event_id}/edit/application`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),Aa=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/application`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:a})).data}),Ma=t=>ie({queryKey:["ApplyRegisterSurvey",t],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t.event_id}/edit/survey`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t.token}`}})).data}),Fa=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/survey`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:a})).data}),Ba=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/faq`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:a})).data}),Ta=()=>te({mutationFn:async({token:t,event_id:s,formData:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/images`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${t}`},data:a})).data}),Pa=()=>te({mutationFn:async({token:t,event_id:s,data:a})=>(await O({method:"DELETE",url:`/api/events/${s}/edit/images`,headers:{"Content-Type":"application/json",authorization:`Bearer ${t}`},data:a})).data}),Tt=(t,s)=>ie({queryKey:["EventBoothList",location.search],queryFn:async()=>(await O({method:"GET",url:`/api/events/${t}/booths`,headers:{"Content-Type":"application/json",...s?{authorization:`Bearer ${s}`}:{}}})).data}),Za=()=>te({mutationFn:async({token:t,event_id:s,formData:a})=>(await O({method:"POST",url:`/api/events/${s}/edit/booth`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${t}`},data:a})).data}),ve=()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"5rem 0"},children:e.jsx(ds,{color:"#dddddd",loading:!0,size:50})}),$a=t=>ie({queryKey:["banner",t],queryFn:async()=>(await O({method:"GET",url:`/api/banners?type=${t}`})).data}),Ia=[{img:"./images/dummy/banner_1.png",url:"#"},{img:"./images/dummy/banner_2.png",url:"#"},{img:"./images/dummy/banner_3.png",url:"#"}],Oa=()=>{var V,S,H,v,x;const t=localStorage.getItem("token"),{data:s,isLoading:a,error:n}=ot(1,t),{data:l,isLoading:c,error:p}=ot(2,t),{data:r,isLoading:o,error:f}=ot(3,t),{data:m,isLoading:g,error:j}=ot(4,t),{data:d,isLoading:u,isError:C}=$a(1),N=a||c||o||g||u,k=n||p||f||j||C;return N?e.jsx(ve,{}):k?e.jsx("div",{children:"오류가 발생했습니다. 데이터를 불러올 수 없습니다."}):e.jsxs(ua,{children:[e.jsx(aa,{bannerImgs:Ia}),e.jsx(lt,{title:"AI 메이트가 맞추는 취향저격 전시",subTitle:"마이스 메이트가 추천해드려요! 회원가입하면 더 정확한 추천을 받을 수 있어요 ✨",eventList:(V=s==null?void 0:s.data)==null?void 0:V.items}),e.jsx(lt,{title:"New! 따끈따끈 신규행사",subTitle:"마이스 메이트에 새롭게 등록된 행사를 모아봤어요 ✨",eventList:(S=l==null?void 0:l.data)==null?void 0:S.items}),((H=d==null?void 0:d.data)==null?void 0:H.items.length)>0&&e.jsx(ba,{children:e.jsx("img",{src:`https://api.micemate.io/storage/${d.data.items[0].img}`})}),e.jsx(lt,{title:"마이스 메이트 인기 전시 모음 ",subTitle:"가장 관심을 많이 받고있는 인기 행사 놓치지마세요!",eventList:(v=r==null?void 0:r.data)==null?void 0:v.items}),e.jsx(lt,{title:"마이스 메이트 주말 특급 정보",subTitle:"이번 주말, 마이스 메이트가 추천하는 핫한 행사 ✨",eventList:(x=m==null?void 0:m.data)==null?void 0:x.items})]})},qa=h.div`
  padding: 190px 0 370px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 80px 0 100px;
  }
  @media (max-width: 380px) {
    padding: 80px 16px 100px;
  }
`,di=h.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 319px;
  height: 40px;
  border-radius: 50rem;
  font-weight: 600;
  position: relative;
  font-size: 16px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 380px) {
    width: 100%;
  }
  &.kakao {
    background-color: #fee500;
    border: 1px solid #fee500;
  }
  &.naver {
    background-color: #00c73c;
    border: 1px solid #00c73c;
    color: #fff;
  }
  &.gmail {
    background-color: #fff;
    border: 1px solid #e0e0e0;
  }
  &.mail {
    background-color: #1e9eff;
    border: 1px solid #e0e0e0;
    color: #fff;
  }
  &.login {
    color: #8d8991;
    background-color: transparent;
    margin-top: 10px;
  }
  & .icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    & svg {
      display: block;
    }
  }
`,Ra=t=>i.createElement("svg",{width:26,height:18,viewBox:"0 0 26 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("rect",{x:1.75,y:.75,width:22.5,height:16.5,rx:2.25,fill:"white",stroke:"#1E9EFF",strokeWidth:1.5}),i.createElement("path",{d:"M1 3L12.7333 10L25 3",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M2 15L10 8.5L12.5 10L15.5 8.5L24 15",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Wa=()=>{const t=D();return e.jsxs(qa,{children:[e.jsxs(di,{onClick:()=>{t("/join/form")},className:"mail",children:[e.jsx("span",{className:"icon",children:e.jsx(Ra,{})}),e.jsx("span",{children:"이메일 계정으로 가입하기"})]}),e.jsx(di,{onClick:()=>{t("/login")},className:"login",children:e.jsx("span",{children:"이미 회원이신가요?"})})]})},Ke=()=>ie({queryKey:["category"],queryFn:async()=>(await O.get("/api/categories")).data.data}),Ya=h.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & label {
    color: #fff;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & input {
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 50rem;
    padding: 15px;
    color: #fff;
    font-size: 16px;
  }
  & input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`,Ua=h.input`
  width: 100%;
  padding: 15px 16px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d6deeb;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  &::placeholder {
    color: #738096;
    font-size: 14px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  &[type="date"]::-webkit-calendar-picker-indicator {
    /* display: none; */
    color: #738096;
  }
`;h.div`
  & input {
    width: 100%;
    padding: 15px 16px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #d6deeb;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
    &::placeholder {
      color: #738096;
      font-size: 14px;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
    &[type="date"]::-webkit-calendar-picker-indicator {
      /* display: none; */
      color: #738096;
    }
  }
`;const Qa=h.div`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 18px;
    @media (max-width: 1024px) {
      width: 100%;
      font-size: 16px;
    }
  }
  & input {
    width: 412px;
    margin-top: 15px;
    padding: 15px 20px;
    font-size: 16px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      width: 100%;
      padding: 15px;
    }
    &::placeholder {
      color: #fff;
      font-size: 16px;
    }
  }
  & input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`,Ka=h.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .input_area .input {
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    display: block;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,Et=({label:t,type:s,id:a,placeholder:n,register:l})=>e.jsxs(Ya,{children:[e.jsx("label",{children:t}),e.jsx("input",{type:s,id:a,...l&&l(a),placeholder:n,autoComplete:"off"})]}),at=({type:t,id:s,register:a,placeholder:n,onChange:l})=>e.jsx(Ua,{type:t,id:s,...a&&a(s),placeholder:n,autoComplete:"off",onChange:l}),kt=({label:t,type:s,id:a,placeholder:n,register:l,onChange:c})=>e.jsxs(Qa,{className:"InputTextC",children:[e.jsx("label",{htmlFor:a,children:t}),e.jsx("input",{type:s,id:a,...l&&l(a),placeholder:n,autoComplete:"off",onChange:c})]}),nt=({label:t,type:s,id:a,register:n,required:l,onChange:c})=>e.jsxs(Ka,{children:[e.jsxs("label",{htmlFor:a,className:"label",children:[e.jsx("span",{className:"txt",children:t}),l&&e.jsx("span",{className:"req",children:" *"})]}),e.jsx("div",{className:"input_area",children:e.jsx("input",{type:s,id:a,autoComplete:"off",...n&&n(a),className:"input",onChange:c})})]}),Ja=h.div`
  width: 100%;
  & input {
    display: none;
  }
  & label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #738096;
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #d6deeb;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & input[type="radio"]:checked ~ label {
    background-color: #235ef3;
    border: 1px solid #235ef3;
    color: #fff;
  }
`,Xa=h.div`
  width: 100%;
  & input {
    display: none;
  }
  & label {
    position: relative;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding-left: 25px;
  }
  & input[type="radio"]:checked ~ label {
    color: #fff;
  }
  & label::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50rem;
    border: 2px solid #fff;
  }
  & input[type="radio"]:checked ~ label::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50rem;
    background-color: #fff;
  }
`,ci=({label:t,id:s,name:a,register:n})=>e.jsxs(Ja,{children:[e.jsx("input",{type:"radio",id:s,value:s,...n&&n(a)}),e.jsx("label",{htmlFor:s,children:t})]}),_e=({label:t,id:s,name:a,register:n,defaultChecked:l})=>e.jsxs(Xa,{children:[e.jsx("input",{type:"radio",id:s,value:s,name:a,...n&&n(a),defaultChecked:l}),e.jsx("label",{htmlFor:s,children:t})]}),Da=h.div`
  & input {
    display: none;
  }
  & label {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    line-height: 1.4;
    & .req {
      color: rgba(255, 0, 0, 1);
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & label::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 0.5px solid #fff;
    border-radius: 3px;
  }
  & input[type="checkbox"]:checked ~ label::before {
    background-image: url("/user/images/icon/chk.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
  }
`,Ga=h.div`
  & input {
    display: none;
  }
  & label {
    position: relative;
    padding-left: 24px;
    font-size: 14px;
    cursor: pointer;
    color: #738096;
    line-height: 1.4;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & label::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    background-image: url("/user/images/icon/round_chk.png");
    background-size: cover;
  }
  & input[type="checkbox"]:checked ~ label::before {
    background-image: url("/user/images/icon/round_chk_on.png");
  }
`,Ve=({label:t,id:s,register:a,onChange:n,required:l,checked:c})=>e.jsxs(Da,{className:"InputCheckboxA",children:[n&&e.jsx("input",{type:"checkbox",id:s,...a&&a(s),checked:c,onChange:n}),!n&&e.jsx("input",{type:"checkbox",id:s,...a&&a(s)}),e.jsxs("label",{htmlFor:s,children:[t,l&&e.jsx("span",{className:"req",children:" *"})]})]}),Ue=({label:t,id:s,register:a,onChange:n})=>e.jsxs(Ga,{children:[n&&e.jsx("input",{type:"checkbox",id:s,...a&&a(s),onChange:n,value:t}),!n&&e.jsx("input",{type:"checkbox",id:s,...a&&a(s)}),e.jsx("label",{htmlFor:s,children:t})]}),en=h.div`
  pointer-events: all;
  width: 100%;
  position: relative;
`,tn=h.div`
  width: 100%;
  padding: 15px 16px;
  background-color: #fff;
  position: relative;
  font-size: 14px;
  color: #738096;
  border-radius: ${t=>t.$isOn?"4px 4px 0 0":"4px"};
  border: 1px solid #d6deeb;
  border-bottom: ${t=>t.$isOn&&"1px solid #fff;"};
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  & > span {
    position: absolute;
    display: block;
    right: 10px;
    top: 50%;
    transform: translateY(-50%)
      rotate(${t=>t.$isOn?"180deg":"0"});
    width: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`,sn=h.div`
  display: ${t=>t.$isOn?"block":"none"};
  width: 100%;
  position: absolute;
  top: 45px;
  z-index: 5;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  padding: 10px 14px 25px;
  border: 1px solid #dddddd;
  border-top: none;
`;h.li`
  font-size: 13px;
  padding: 5px 9px 6px;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: -0.001em;
`;const an=h.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .select_box {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px 20px 10px 15px;
    & .icon {
      width: 18px;
      height: 9px;
      opacity: 0.5;
      transform: rotate(${t=>t.$isOn?"180deg":"0deg"});
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .option_box {
    display: ${t=>t.$isOn?"block":"none"};
    padding: 26px 17px;
    position: absolute;
    width: 100%;
    background-color: rgba(18, 18, 18, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    z-index: 5;
  }
  & .option {
    cursor: pointer;
    padding: 10px 0;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;h.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .select_box {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px 15px;
    height: 53px;
    & .icon {
      width: 18px;
      height: 9px;
      opacity: 0.5;
      transform: rotate(${t=>t.$isOn?"180deg":"0deg"});
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .option_box {
    display: ${t=>t.$isOn?"block":"none"};
    padding: 26px 17px;
    position: absolute;
    width: 100%;
    background-color: rgba(18, 18, 18, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    z-index: 5;
  }
  & .option {
    cursor: pointer;
    padding: 10px 0;
  }
`;const nn=t=>i.createElement("svg",{width:14,height:8,viewBox:"0 0 14 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M13 1L7 7L1 0.999999",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})),Lt=t=>i.createElement("svg",{width:12,height:7,viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M1 1L6 6L11 1",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),rn=({text:t,children:s})=>{const[a,n]=i.useState(!1),l=()=>{n(c=>!c)};return e.jsxs(en,{children:[e.jsxs(tn,{onClick:l,$isOn:a,children:[t,e.jsx("span",{children:e.jsx(nn,{})})]}),e.jsx(sn,{$isOn:a,children:s})]})},ln=({label:t,required:s,optionList:a,setTarget:n})=>{const[l,c]=i.useState(!1),[p,r]=i.useState(""),o=i.useRef(null),f=()=>{c(j=>!j)};i.useEffect(()=>{var j;a&&r((j=a[0])==null?void 0:j.value)},[a]);const m=(j,d)=>{n(j),r(d),c(!1)},g=j=>{o.current&&!o.current.contains(j.target)&&c(!1)};return i.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]),e.jsxs(an,{ref:o,$isOn:l,children:[e.jsxs("p",{className:"label",children:[e.jsx("span",{className:"txt",children:t}),s&&e.jsx("span",{className:"req",children:" *"})]}),e.jsxs("div",{className:"select_box",children:[e.jsxs("div",{onClick:f,className:"select",children:[e.jsx("span",{children:p}),e.jsx("span",{className:"icon",children:e.jsx(Lt,{})})]}),e.jsx("ul",{className:"option_box",children:a.map((j,d)=>e.jsx("li",{onClick:()=>m(j.type,j.value),className:"option",children:j.value},d))})]})]})},on=h.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`,dn=h.li`
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  color: #1e9eff;
  background-color: #fff;
  font-weight: 500;
  border-radius: 4px;
  display: flex;
  align-items: center;
  & .close_btn {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    cursor: pointer;
    & svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  & .label {
    display: block;
    padding-left: 16px;
  }
`,cn=t=>i.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M1.34375 1L6.95181 7",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M6.95117 1L1.34311 7",stroke:"#1E9EFF",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),Bi=({hashList:t,onClick:s})=>e.jsx(on,{children:t.map(a=>e.jsxs(dn,{children:[e.jsx("span",{onClick:()=>s(a.id),className:"close_btn",children:e.jsx(cn,{})}),e.jsx("span",{className:"label",children:a.name})]},a.id))}),pn=h.div`
  padding: 94px 0 57px;
  background-color: #0b0c37;
  @media (max-width: 400px) {
    padding: 50px 16px 40px;
  }
`,xn=h.form`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 400px) {
    width: 100%;
  }
`,rt=h.div`
  width: 100%;
  display: flex;
  column-gap: 7px;
  & > div {
    width: 100%;
  }
  &.password {
    flex-direction: column;
    & > input:first-child {
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }
    & > input:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`,hn=h.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  & > div:last-child label {
    border-left: none !important;
  }
`,mn=h.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 23px;
  & > div {
    width: 50%;
  }
  & > div label {
    font-size: 16px;
    font-weight: 600;
  }
`,gn=h.div`
  background-color: #fff;
  border-radius: 2px;
  & > div {
    padding: 14px 16px;
  }
  & > div:first-child {
    border-bottom: 1px solid #d6deeb;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div {
      padding-left: 16px;
    }
    & > div:last-child {
      padding-left: 0;
    }
  }
  & .required_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .link {
      position: relative;
      font-size: 12px;
      color: #9b9b9b;
      padding-right: 10px;
    }
    & .link::after {
      content: "";
      position: absolute;
      width: 5px;
      height: 9px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background-size: cover;
      background-image: url("/user/images/icon/link_arrow.png");
    }
  }
`,fn=h.button`
  font-size: 16px;
  color: #fff;
  width: 100%;
  background-color: #1f8ce6;
  border: 1px solid #0077d9;
  padding: 10px 0;
  border-radius: 2px;
  &:disabled {
    pointer-events: none;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,un=Se({email:P().trim().min(1,"아이디를 입력해주세요.").email({message:"올바른 이메일을 입력해주세요."}),password:P().trim().min(1,"비밀번호를 입력해주세요.").regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/," 영문,숫자조합 8자리 이상 입력해주세요."),passwordChk:P(),name:P().trim().min(1,"이름을 입력해주세요.").min(2,"이름을 확인해주세요."),birth:P().trim().min(1,"생년월일을 입력해주세요.").regex(/^\d{4}-\d{2}-\d{2}$/,"올바른 날짜 형식으로 입력해주세요.").refine(t=>{const s=new Date(t);return!isNaN(s.getTime())},"유효한 날짜를 입력해주세요."),gender:P({message:"성별을 선택해주세요."}),interests:Ne().array().min(1,"관심분야를 최소 하나 이상 선택해야 합니다."),allChk:ee().default(!1).optional(),agree_01:ee(),agree_02:ee().default(!1).optional(),agree_03:ee(),agree_04:ee()}).superRefine(({passwordChk:t,password:s},a)=>{t!==s&&a.addIssue({code:cs.custom,message:"비밀번호를 확인해주세요.",path:["passwordChk"]})}),bn=()=>{var _,T,M,z,$,L,I,E,F,B,W,se,R,X,ue,We,Me,Fe,Be,Te,Pe,Ze;const[t,s]=i.useState([]),[a,n]=i.useState([]),[l,c]=i.useState(!1),p=Ns(),{openAlret:r}=Ee(),o=D(),{data:f}=Ke(),{register:m,handleSubmit:g,setValue:j,control:d,watch:u,setError:C,formState:{errors:N}}=he({resolver:He(un)}),k=K=>{let q=K.target.value.replace(/\D/g,"");q.length>4&&q.length<=6?q=q.slice(0,4)+"-"+q.slice(4):q.length>6&&(q=q.slice(0,4)+"-"+q.slice(4,6)+"-"+q.slice(6,8)),j("birth",q)},V=K=>{s(q=>q.filter(oe=>oe!==K)),n(q=>q.filter(oe=>oe.id!==K)),j("interests",t.filter(q=>q!==K)),j(`checkbox-${K}`,!1)},S=(K,q)=>{const oe=K.target,ye=oe.value;oe.checked?(s(de=>[...de,q]),n(de=>[...de,{id:q,name:ye}])):(s(de=>de.filter(ze=>ze!==q)),n(de=>de.filter(ze=>ze.id!==q)))};i.useEffect(()=>{j("interests",t)},[t,j,a]);const H=u("allChk"),v=u("agree_01"),x=u("agree_03"),w=u("agree_04");i.useEffect(()=>{const K=["agree_01","agree_02","agree_03","agree_04"];H===!0?K.forEach(q=>j(q,!0)):K.forEach(q=>j(q,!1))},[H,j]),i.useEffect(()=>{c(!!(v&&x&&w))},[v,x,w]);const Z=g(K=>{const q=()=>{if(K.gender==="man")return!1;if(K.gender==="woman")return!0},oe={name:K.name,email:K.email,password:K.password,c_password:K.passwordChk,birth:K.birth,sex:q(),interests:t,terms_of_uses:{1:K.agree_01,2:K.agree_02,3:K.agree_03,4:K.agree_04}};p.mutate(oe,{onSuccess:()=>{r({text:`회원가입이 완료되었습니다.
이메일 인증 후 서비스를 이용할 수 있습니다.`,callback:()=>{o("/login",{replace:!0})}})},onError:ye=>{var de;const Le=ye;console.log(Le.response.data),((de=Le.response)==null?void 0:de.data.message)==="이미 회원이 존재합니다."&&C("apiError",{type:"manual",message:"사용중인 이메일 입니다."})}})});return p.isPending?e.jsx(ve,{}):e.jsx(pn,{children:e.jsxs(xn,{onSubmit:Z,children:[e.jsx(rt,{children:e.jsx(at,{type:"text",id:"email",register:m,placeholder:"이메일(ID)"})}),((_=N.email)==null?void 0:_.message)&&e.jsx("p",{className:"err_msg",children:(M=(T=N.email)==null?void 0:T.message)==null?void 0:M.toString()}),e.jsxs(rt,{className:"password",children:[e.jsx(at,{type:"password",id:"password",register:m,placeholder:"비밀번호"}),e.jsx(at,{type:"password",id:"passwordChk",register:m,placeholder:"비밀번호 확인"})]}),((z=N.password)==null?void 0:z.message)&&e.jsx("p",{className:"err_msg",children:(L=($=N.password)==null?void 0:$.message)==null?void 0:L.toString()}),((I=N.passwordChk)==null?void 0:I.message)&&e.jsx("p",{className:"err_msg",children:(F=(E=N.passwordChk)==null?void 0:E.message)==null?void 0:F.toString()}),e.jsx(rt,{children:e.jsx(at,{type:"text",id:"name",register:m,placeholder:"이름"})}),((B=N.name)==null?void 0:B.message)&&e.jsx("p",{className:"err_msg",children:(se=(W=N.name)==null?void 0:W.message)==null?void 0:se.toString()}),e.jsxs(rt,{children:[e.jsx(at,{id:"birth",register:m,placeholder:"생년월일 8자리",onChange:k}),e.jsxs(hn,{children:[e.jsx(ci,{id:"man",label:"남",name:"gender",register:m}),e.jsx(ci,{id:"woman",label:"여",name:"gender",register:m})]})]}),((R=N.birth)==null?void 0:R.message)&&e.jsx("p",{className:"err_msg",children:(ue=(X=N.birth)==null?void 0:X.message)==null?void 0:ue.toString()}),((We=N.gender)==null?void 0:We.message)&&e.jsx("p",{className:"err_msg",children:(Fe=(Me=N.gender)==null?void 0:Me.message)==null?void 0:Fe.toString()}),e.jsx(rt,{children:e.jsx(rn,{text:"관심 분야",children:e.jsx(mn,{children:e.jsx(Ce,{name:"interests",control:d,render:({field:K})=>e.jsx(e.Fragment,{children:f&&K&&f.map(q=>e.jsx(Ue,{label:q.name,id:`checkbox-${q.id}`,onChange:oe=>{S(oe,q.id)},register:m},q.id))})})})})}),a.length>=1&&e.jsx(Bi,{hashList:a,onClick:V}),N.interests&&e.jsx("p",{className:"err_msg",children:(Te=(Be=N.interests)==null?void 0:Be.message)==null?void 0:Te.toString()}),e.jsxs(gn,{children:[e.jsx(Ue,{label:"선택 포함 전체 약관 동의",id:"allChk",register:m}),e.jsxs("div",{children:[e.jsxs("div",{className:"required_box",children:[e.jsx(Ue,{label:"이용약관 동의 (필수)",id:"agree_01",register:m}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/terms-service",target:"blank_",children:"약관 보기"})})]}),e.jsx(Ue,{label:"이벤트 혜택 알림 수신 동의 (선택)",id:"agree_02",register:m}),e.jsxs("div",{className:"required_box",children:[e.jsx(Ue,{label:"성별, 생년 정보 제공 동의 (필수)",id:"agree_03",register:m}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/gender-birth-information",target:"blank_",children:"내용 확인"})})]}),e.jsxs("div",{className:"required_box",children:[e.jsx(Ue,{label:"개인 정보 수집 및 이용 동의 (필수)",id:"agree_04",register:m}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/personal-information",target:"blank_",children:"내용 확인"})})]})]})]}),N.apiError&&e.jsx("p",{className:"err_msg",children:(Ze=(Pe=N.apiError)==null?void 0:Pe.message)==null?void 0:Ze.toString()}),e.jsx(fn,{disabled:!l,className:"btn",children:"회원가입"})]})})},_n=h.div`
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`,jn=h.div`
  padding: 64px 0 47px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  padding-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  & h2 {
    font-weight: 700;
    padding-bottom: 44px;
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
  }
  & span {
    font-weight: 500;
  }
`,wn=h.form`
  width: 384px;
  margin: 0 auto;
  & > .input_box {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 10px;
  }
  & > .login_stay {
    padding: 20px 0 15px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`,vn=h.button`
  background-color: #fff;
  font-size: 16px;
  width: 100%;
  border-radius: 50rem;
  color: #09338c;
  font-weight: 700;
  padding: 15px 0;
  &[disabled] {
    cursor: auto;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,yn=h.div`
  padding: 15px 0 25px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,Cn=h.div`
  & h3 {
    text-align: center;
    color: #fff;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .btn_area {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`,Nn=h.p`
  padding: 120px 0 40px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,kn=Se({email:P().email({message:"올바른 이메일을 입력해주세요."}),password:P(),remember:ee()}),Hn=()=>{var d,u,C,N;const[t,s]=i.useState(!1),a=ke(xe),n=ks(),l=D(),{register:c,handleSubmit:p,setError:r,watch:o,formState:{errors:f}}=he({resolver:He(kn)}),m=o("email"),g=o("password");i.useEffect(()=>{m!=null&&m.trim()&&(g==null?void 0:g.trim())!==void 0?s(!0):s(!1)},[m,g]);const j=p(k=>{const V={email:k.email,password:k.password,remember:k.remember};n.mutate(V)});return i.useEffect(()=>{n.isSuccess&&(a.data.is_company===!0?l("/host-main",{replace:!0}):l("/",{replace:!0}))},[n.isSuccess,l,a.data.is_company]),i.useEffect(()=>{var k,V,S;if(n.isError){const H=n.error;(S=(V=(k=H==null?void 0:H.response)==null?void 0:k.data)==null?void 0:V.data)!=null&&S.error?H.response.data.data.error==="Unauthorised"?r("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}):r("apiError",{type:"manual",message:H.response.data.data.error}):r("apiError",{type:"manual",message:"알 수 없는 오류가 발생했습니다."})}},[n.isError,n.error,r]),e.jsxs(_n,{children:[e.jsxs(jn,{children:[e.jsx("h2",{children:"LOGIN"}),e.jsx("span",{children:"즐거운 만남을 시작해보세요!"})]}),e.jsxs(wn,{onSubmit:j,children:[e.jsxs("div",{className:"input_box",children:[e.jsx(Et,{label:"이메일(ID)",type:"text",id:"email",placeholder:"이메일 입력",register:c}),e.jsx(Et,{label:"비밀번호",type:"password",id:"password",placeholder:"비밀번호 입력",register:c})]}),f.email&&e.jsx("p",{className:"err_msg",children:(u=(d=f.email)==null?void 0:d.message)==null?void 0:u.toString()}),f.apiError&&e.jsx("p",{className:"err_msg",children:(N=(C=f.apiError)==null?void 0:C.message)==null?void 0:N.toString()}),e.jsx("div",{className:"login_stay",children:e.jsx(Ve,{label:"로그인유지",id:"remember",register:c})}),e.jsx(vn,{disabled:!t,children:"로그인"})]}),e.jsxs(yn,{children:[e.jsx(b,{to:"/login/password-find",children:"비밀번호 찾기"}),"   |   ",e.jsx(b,{to:"/join",children:"회원가입"})]}),e.jsx(Cn,{}),e.jsx(Nn,{className:"desc_btn",children:e.jsx(b,{to:"/privacy-policy",children:"개인정보 처리방침"})})]})},Sn=h.div`
  width: 384px;
  margin: 0 auto 160px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 16px;
  }
`,En=h.div`
  padding: 130px 0 58px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 1024px) {
    padding: 64px 0 58px;
    font-size: 18px;
  }
  & h2 {
    font-weight: 700;
    padding-bottom: 44px;
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
  }
  & span {
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`,Ln=h.form`
  & input {
    margin-bottom: 12px;
  }
  & .err_msg {
    height: 20px;
  }
`,zn=h.button`
  margin-top: 30px;
  background-color: #fff;
  font-size: 16px;
  width: 100%;
  border-radius: 50rem;
  color: #09338c;
  font-weight: 700;
  padding: 15px 0;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`,Vn=Se({email:P().trim().min(1,"이메일을 입력해주세요.").email({message:"올바른 이메일을 입력해주세요."})}),An=()=>{var f,m,g,j,d,u;const t=ga(),{openAlret:s}=Ee(),a=D(),n={text:"메일로 임시 비밀번호를 발송했습니다.",callback:()=>{a("/login")}},{setError:l,register:c,handleSubmit:p,formState:{errors:r}}=he({resolver:He(Vn)}),o=p(C=>{t.mutate(C.email,{onSuccess:()=>{s(n)},onError:()=>{l("apiError",{type:"manual",message:"가입된 정보가 없습니다. 이메일을 확인해주세요."})}})});return e.jsxs(Sn,{children:[e.jsxs(En,{children:[e.jsx("h2",{children:"비밀번호 찾기"}),e.jsx("span",{children:"가입하신 이메일로 임시 비밀번호를 전송해드립니다."})]}),e.jsxs(Ln,{onSubmit:o,children:[e.jsx(Et,{label:"이메일(ID)",type:"text",id:"email",placeholder:"이메일 입력",register:c}),((f=r.email)==null?void 0:f.message)&&e.jsx("p",{className:"err_msg",children:(g=(m=r.email)==null?void 0:m.message)==null?void 0:g.toString()}),((j=r.apiError)==null?void 0:j.message)&&e.jsx("p",{className:"err_msg",children:(u=(d=r.apiError)==null?void 0:d.message)==null?void 0:u.toString()}),e.jsx(zn,{children:"임시 비밀번호 받기"})]})]})},Mn=h.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,Fn=h.div`
  padding-top: 97px;
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    padding-top: 58px;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    gap: 5px;
  }

  & button {
    background-color: rgba(41, 46, 55, 1);
    color: #fff;
    font-size: 16px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .icon {
    min-width: 48px;
  }
  & .on {
    background-color: rgba(35, 94, 243, 1);
  }
`,Bn=t=>i.createElement("svg",{width:8,height:14,viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.35489 0.645917C7.40146 0.692363 7.4384 0.747539 7.46361 0.808284C7.48881 0.869029 7.50179 0.93415 7.50179 0.999917C7.50179 1.06568 7.48881 1.13081 7.46361 1.19155C7.4384 1.2523 7.40146 1.30747 7.35489 1.35392L1.70789 6.99992L7.35489 12.6459C7.44878 12.7398 7.50153 12.8671 7.50153 12.9999C7.50153 13.1327 7.44878 13.26 7.35489 13.3539C7.26101 13.4478 7.13367 13.5005 7.00089 13.5005C6.86812 13.5005 6.74078 13.4478 6.64689 13.3539L0.646894 7.35392C0.60033 7.30747 0.563387 7.2523 0.538181 7.19155C0.512974 7.1308 0.5 7.06568 0.5 6.99992C0.5 6.93415 0.512974 6.86903 0.538181 6.80828C0.563387 6.74754 0.60033 6.69236 0.646894 6.64592L6.64689 0.645917C6.69334 0.599354 6.74852 0.562411 6.80926 0.537205C6.87001 0.511998 6.93513 0.499023 7.00089 0.499023C7.06666 0.499023 7.13178 0.511998 7.19253 0.537205C7.25327 0.562411 7.30845 0.599354 7.35489 0.645917Z",fill:"#EDEFF3"})),Tn=t=>i.createElement("svg",{width:8,height:14,viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0.646894 0.645917C0.693339 0.599354 0.748515 0.562411 0.80926 0.537205C0.870005 0.511998 0.935126 0.499023 1.00089 0.499023C1.06666 0.499023 1.13178 0.511998 1.19253 0.537205C1.25327 0.562411 1.30845 0.599354 1.35489 0.645917L7.35489 6.64592C7.40146 6.69236 7.4384 6.74754 7.46361 6.80828C7.48881 6.86903 7.50179 6.93415 7.50179 6.99992C7.50179 7.06568 7.48881 7.1308 7.46361 7.19155C7.4384 7.2523 7.40146 7.30747 7.35489 7.35392L1.35489 13.3539C1.26101 13.4478 1.13367 13.5005 1.00089 13.5005C0.868118 13.5005 0.74078 13.4478 0.646894 13.3539C0.553007 13.26 0.500262 13.1327 0.500262 12.9999C0.500262 12.8671 0.553007 12.7398 0.646894 12.6459L6.29389 6.99992L0.646894 1.35392C0.60033 1.30747 0.563387 1.2523 0.538181 1.19155C0.512974 1.13081 0.5 1.06568 0.5 0.999917C0.5 0.93415 0.512974 0.869029 0.538181 0.808284C0.563387 0.747539 0.60033 0.692363 0.646894 0.645917Z",fill:"#EDEFF3"})),ht=({total:t,page:s,setPage:a,size:n=4})=>{const l=D(),c=fe(),p=Math.ceil(t/n),o=(Math.ceil(s/n)-1)*n+1,f=Math.min(o+n-1,p),m=d=>{a(d);const u=new URLSearchParams(c.search);u.set("page",d.toString()),l(`?${u.toString()}`)},g=()=>{o>1&&m(o-1)},j=()=>{f<p&&m(f+1)};return i.useEffect(()=>{const u=new URLSearchParams(c.search).get("page");if(u){const C=parseInt(u,10);C!==s&&C>0&&C<=p&&a(C)}},[c.search,a,s,p]),e.jsxs(Fn,{className:"pagination",children:[e.jsx("button",{type:"button",onClick:g,disabled:o===1,className:"icon",children:e.jsx(Bn,{})}),Array.from({length:f-o+1},(d,u)=>e.jsx("button",{onClick:()=>m(o+u),className:s===o+u?"on":"",children:o+u},u)),e.jsx("button",{type:"button",onClick:j,disabled:f===p,className:"icon",children:e.jsx(Tn,{})})]})},Pn=h.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: rgba(41, 46, 55, 0.5);
  align-items: center;
  border-radius: 20px;
  padding: 37px 33px;
  @media (max-width: 1400px) {
    padding: 60px 33px;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 16px;
  }
`,Zn=h.figure`
  width: 100%;
  max-width: 437px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 437 / 246;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  & a {
    display: block;
    width: 100%;
    height: 100%;
  }
  & img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .blind {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
`,$n=h.div`
  width: 100%;
  padding-left: 45px;
  padding-right: 400px;
  align-items: center;
  @media (max-width: 1720px) {
    padding-left: 20px;
    padding-right: 260px;
  }
  @media (max-width: 1600px) {
    padding-right: 210px;
  }
  @media (max-width: 1400px) {
    padding-right: 0px;
  }
  @media (max-width: 1024px) {
    padding-left: 0;
    padding-top: 15px;
  }
`,In=h.div`
  & .apply {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 22px;
    @media (max-width: 1024px) {
      justify-content: space-between;
      margin-bottom: 12px;
    }
    & .state {
      min-width: 130px;
      text-align: center;
      padding: 12px 10px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      font-weight: 700;
      @media (max-width: 1024px) {
        min-width: 100px;
        font-size: 13px;
        padding: 8px 16px;
      }
    }
    & .date {
      color: #6c757d;
      font-size: 16px;
      @media (max-width: 1024px) {
        font-size: 13px;
      }
    }
  }

  & .txt_box {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    & .title {
      margin: 0 0 10px;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
    & .date,
    & .location {
      color: #b0b8c1;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`,On=h.div`
  position: absolute;
  right: 27px;
  bottom: 27px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    position: static;
    padding: 4px 0 20px;
    justify-content: flex-end;
  }
  & > button {
    font-weight: 500;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`,qn=h.div`
  position: absolute;
  right: 152px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 1720px) {
    right: 70px;
  }
  @media (max-width: 1600px) {
    right: 27px;
  }
  @media (max-width: 1400px) {
    position: static;
    position: static;
    transform: translateY(0);
  }
  & a {
    display: block;
    min-width: 277px;
    padding: 32px 10px;
    background-color: #fff;
    color: #235ef3;
    font-weight: 700;
    font-size: 24px;
    border-radius: 10px;
    text-align: center;
    @media (max-width: 1720px) {
      min-width: 210px;
    }
    @media (max-width: 1600px) {
      margin-top: 10px;
      min-width: 277px;
      min-width: 200px;
    }
    @media (max-width: 1400px) {
      padding: 15px 10px;
    }
    @media (max-width: 1024px) {
      margin-top: 0;
      min-width: auto;
      padding: 15px 10px;
      width: 100%;
      font-size: 20px;
    }
  }
`,Rn=h.div`
  position: absolute;
  top: 37px;
  right: 37px;
  @media (max-width: 1024px) {
    top: 22px;
    right: 22px;
  }
  & button {
    width: 55px;
    height: 55px;
    background-color: rgba(59, 64, 72, 1);
    border-radius: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      width: 22px;
      height: 22px;
    }
  }
`,Wn=({id:t,title:s,img:a,event_start_date:n,event_end_date:l,position:c,date:p,is_booth:r,liked_booth:o,url:f,eventState:m})=>{const g=Ha(),j=Ft(),d=localStorage.getItem("token"),u=localStorage.getItem("user_id"),{openAlret:C}=Ee(),{openConfirm:N,confirmValue:k}=Ye(),V=Vt(),[S,H]=i.useState(!1),[v,x]=i.useState(""),w=je(Ae),[Z,_]=i.useState(!0);i.useEffect(()=>{H(k.confirm)},[k.confirm]),i.useEffect(()=>{if(S===!0&&v.length>0){const z={token:d,event_id:v};g.mutate(z)}},[S]);const T=z=>{N({text:"취소하시겠습니까? 취소 확정 후에는 복구하실 수 없습니다.",okBtn:"취소하기",logout:!1}),x(z)};i.useEffect(()=>{if(g.isSuccess){const z={text:"취소가 완료되었습니다."};H(!1),w(),x(""),C(z),V.invalidateQueries({queryKey:["myEvent"]})}g.isError&&(H(!1),x(""))},[g.isSuccess,g.isError]);const M=z=>{const $={token:d,user_id:u,event_id:z};j.mutate($),_(L=>!L)};return e.jsxs(Pn,{children:[e.jsx(Zn,{children:e.jsxs(b,{to:`/detail/${t}`,children:[m.state==="cancel"&&e.jsx("span",{className:"blind",children:"취소완료"}),e.jsx("img",{src:`https://api.micemate.io/storage/${a}`})]})}),e.jsxs($n,{children:[e.jsxs(In,{children:[p&&e.jsxs("div",{className:"apply",children:[e.jsx("span",{className:"state",children:m.label}),e.jsxs("span",{className:"date",children:["신청일 : ",p]})]}),e.jsxs("div",{className:"txt_box",children:[e.jsx("span",{className:"title",children:s}),e.jsx("span",{className:"date",children:`${ft(n)} ~ ${ft(l)}`}),e.jsx("span",{className:"location",children:c})]})]}),m.state==="apply"&&e.jsxs(On,{children:[e.jsx(b,{to:`/detail/${t}/apply/edit`,children:"수정"}),"  |  ",e.jsx("button",{onClick:()=>T(JSON.stringify(t)),children:"취소"})]}),m.state==="apply"&&e.jsxs(qn,{children:[r&&o&&e.jsx(b,{to:`/mypage/apply-list/booth-check/${t}`,children:"AI 추천 부스 보기"}),r&&!o&&e.jsx(b,{to:`/mypage/apply-list/booth-select/${t}`,children:"AI 추천 부스 받기"}),f&&e.jsx(b,{to:f,target:"_blank",children:"행사 접속하기"})]}),m.state==="wish"&&e.jsx(Rn,{children:e.jsx("button",{onClick:()=>M(t),children:Z?e.jsx(Si,{}):e.jsx(Ei,{})})})]})]})},Yn=h.div`
  display: flex;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`,Un=h.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
`,dt=({list:t})=>{const[s,a]=i.useState({state:"",name:"",label:""}),n=fe();return i.useLayoutEffect(()=>{n.pathname==="/mypage/apply-list"?a({state:"apply",name:"신청 행사",label:"참가 신청 완료"}):n.pathname==="/mypage/cancel-list"?a({state:"cancel",name:"취소 행사",label:"취소 완료"}):n.pathname==="/mypage/wish-list"?a({state:"wish",name:"관심 행사",label:"관심 행사"}):n.pathname==="/mypage/past-list"&&a({state:"end",name:"지난 행사",label:"지난 행사"})},[n]),e.jsx(e.Fragment,{children:t&&t.length<=0?e.jsx(Yn,{children:e.jsx("p",{children:`${s.name}가 없어요.`})}):e.jsx(Un,{children:t&&t.map(l=>e.jsx(Wn,{id:l.id,title:l.title,img:l.img,event_start_date:l.event_start_date,event_end_date:l.event_end_date,position:l.position,date:l.date,is_booth:l.is_booth,liked_booth:l.liked_booth,url:l.url,eventState:s},l.id))})})},Qn=()=>{var p,r,o;const[t,s]=i.useState(1),a=localStorage.getItem("token"),n=localStorage.getItem("user_id"),c=pt({token:a,user_id:n,type:1,page:t});return e.jsxs(Mn,{children:[e.jsx(dt,{list:(p=c.data)==null?void 0:p.data.items}),((r=c.data)==null?void 0:r.data.total)>=4&&e.jsx(ht,{total:(o=c.data)==null?void 0:o.data.total,page:t,setPage:s})]})},Kn=h.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,Jn=()=>{var p,r,o;const[t,s]=i.useState(1),a=localStorage.getItem("token"),n=localStorage.getItem("user_id"),c=pt({token:a,user_id:n,type:2,page:t});return e.jsxs(Kn,{children:[e.jsx(dt,{list:(p=c.data)==null?void 0:p.data.items}),((r=c.data)==null?void 0:r.data.total)>=4&&e.jsx(ht,{total:(o=c.data)==null?void 0:o.data.total,page:t,setPage:s})]})},Xn=h.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,Dn=()=>{var p,r,o;const[t,s]=i.useState(1),a=localStorage.getItem("token"),n=localStorage.getItem("user_id"),c=pt({token:a,user_id:n,type:3,page:t});return e.jsxs(Xn,{children:[e.jsx(dt,{list:(p=c.data)==null?void 0:p.data.items}),((r=c.data)==null?void 0:r.data.total)>=4&&e.jsx(ht,{total:(o=c.data)==null?void 0:o.data.total,page:t,setPage:s})]})},Gn=h.div`
  padding: 0 0 97px;
  color: #fff;
  @media (max-width: 1024px) {
    padding: 0 0 58px;
  }
`,er=()=>{var p,r,o,f;const[t,s]=i.useState(1),a=localStorage.getItem("token"),n=localStorage.getItem("user_id"),c=pt({token:a,user_id:n,type:4,page:t});return e.jsxs(Gn,{children:[e.jsx(dt,{list:(p=c.data)==null?void 0:p.data.items}),e.jsx(dt,{list:(r=c.data)==null?void 0:r.data.items}),((o=c.data)==null?void 0:o.data.total)>=4&&e.jsx(ht,{total:(f=c.data)==null?void 0:f.data.total,page:t,setPage:s})]})},Ct=(t,s,a)=>{let n=t.target.value.replace(/\D/g,"");n.length>7?n=n.slice(0,3)+"-"+n.slice(3,7)+"-"+n.slice(7,11):n.length>3&&(n=n.slice(0,3)+"-"+n.slice(3,7)),s(a,n)},Nt=(t,s,a)=>{let n=t.target.value.replace(/\D/g,"");n.length>4&&n.length<=6?n=n.slice(0,4)+"-"+n.slice(4):n.length>6&&(n=n.slice(0,4)+"-"+n.slice(4,6)+"-"+n.slice(6,8)),s(a,n)},tr=h.div`
  position: relative;
  padding: 50px 20px 86px 140px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 24px 14px 40px;
    margin-bottom: 80px;
  }
`,ir=h.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  & > div {
    display: flex;
    align-items: center;
    font-weight: 500;
    flex-wrap: wrap;
    & .label {
      min-width: 120px;
      font-size: 18px;
      @media (max-width: 1024px) {
        font-size: 14px;
        min-width: 90px;
      }
      @media (max-width: 400px) {
        font-size: 14px;
        min-width: 70px;
      }
    }
    & .info {
      font-size: 16px;
    }
  }
`,sr=h.form`
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 40px;
  }

  & .err_msg {
    padding-top: 10px;
  }

  & .radio_box {
    display: flex;
    align-items: center;
    & .label {
      min-width: 120px;
      font-size: 18px;
      @media (max-width: 1024px) {
        gap: 16px;
      }
    }
    & > div {
      width: auto;
      margin-right: 35px;
      & > label {
        color: #fff;
        padding-left: 30px;
      }
    }
  }
  & .favorite_box {
    & .label {
      font-weight: 700;
      padding-bottom: 23px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    & .favorite_list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
      @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      & > div {
        min-width: 170px;
        @media (max-width: 1024px) {
          min-width: auto;
        }
      }
    }
  }
`,ar=h.div`
  padding-top: 100px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    gap: 40px;
  }
  & .submit_btn {
    z-index: 50;
    position: absolute;
    bottom: 67px;
    right: 54px;
    background-color: rgba(35, 94, 243, 1);
    border: 1px solid rgba(11, 12, 55, 1);
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    padding: 15px 55px;
    @media (max-width: 1024px) {
      position: static;
      width: 100%;
      padding: 15px 10px;
    }
  }
  & a {
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    display: inline;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`,nr=Se({password:P().regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/," 영문,숫자조합 8자리 이상 입력해주세요.").optional(),contact:P().nullable().optional(),birth:P().trim().date("날짜 형식으로 입력해주세요."),gender:P(),interests:Ne().array().min(1,"관심분야를 최소 하나 이상 선택해야 합니다.")}),rr=()=>{var V,S,H,v,x,w,Z,_,T,M,z,$;const t=localStorage.getItem("token"),s=localStorage.getItem("user_id"),[a,n]=i.useState([]),l=Ke(),c={token:t,user_id:s},{data:p}=ct(c),r=Li(),{openToast:o}=we(),{register:f,handleSubmit:m,setValue:g,control:j,formState:{errors:d}}=he({resolver:He(nr)});i.useEffect(()=>{p&&(n(p.data.interests),g("password",p.data.password),g("contact",p.data.contact),g("birth",p.data.birth),g("gender",p.data.sex?"woman":"man"),g("interests",p.data.interests))},[p,g]);const u=L=>{Ct(L,g,"contact")},C=L=>{Nt(L,g,"birth")},N=(L,I)=>{const E=I?[...a,L]:a.filter(F=>F!==L);n(E),g("interests",E)},k=m(L=>{const I=()=>{if(L.gender==="man")return!1;if(L.gender==="woman")return!0},E={token:t,user_id:s,modifyData:{birth:L.birth,sex:I(),interests:L.interests}};L.contact&&(E.modifyData.contact=L.contact),L.password&&(E.modifyData.password=L.password),r.mutate(E,{onSuccess:()=>{o("저장 되었습니다.")},onError:F=>{console.log(F)}})});return e.jsx(tr,{children:p&&e.jsxs(e.Fragment,{children:[e.jsxs(ir,{children:[e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"이름"}),e.jsx("span",{className:"info",children:p.data.name})]}),e.jsxs("div",{children:[e.jsx("span",{className:"label",children:"이메일(ID)"}),e.jsx("span",{className:"info",children:p.data.email})]})]}),e.jsxs(sr,{onSubmit:k,children:[e.jsxs("div",{className:"td_form",children:[e.jsx(kt,{label:"전화번호",type:"text",id:"contact",placeholder:"전화번호를 입력하세요",register:f,onChange:u}),((V=d.contact)==null?void 0:V.message)&&e.jsx("p",{className:"err_msg",children:(H=(S=d.contact)==null?void 0:S.message)==null?void 0:H.toString()})]}),e.jsxs("div",{className:"td_form",children:[e.jsx(kt,{label:"비밀번호 변경",type:"password",id:"password",placeholder:"비밀번호를 입력하세요",register:f}),((v=d.password)==null?void 0:v.message)&&e.jsx("p",{className:"err_msg",children:(w=(x=d.password)==null?void 0:x.message)==null?void 0:w.toString()})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("p",{className:"label",children:"성별"}),e.jsx(_e,{label:"남",id:"man",name:"gender",register:f}),e.jsx(_e,{label:"여",id:"woman",name:"gender",register:f})]}),e.jsxs("div",{className:"td_form",children:[e.jsx(kt,{label:"생년월일",type:"text",id:"birth",placeholder:"생년월일을 입력하세요",register:f,onChange:C}),((Z=d.birth)==null?void 0:Z.message)&&e.jsx("p",{className:"err_msg",children:(T=(_=d.birth)==null?void 0:_.message)==null?void 0:T.toString()})]}),e.jsxs("div",{className:"favorite_box",children:[e.jsx("p",{className:"label",children:"관심분야"}),e.jsx("div",{className:"favorite_list",children:e.jsx(Ce,{name:"interests",control:j,render:({field:L})=>{var I;return e.jsx(e.Fragment,{children:l&&L.value&&((I=l==null?void 0:l.data)==null?void 0:I.map(E=>e.jsx(Ve,{label:E.name,id:JSON.stringify(E.id),checked:a.includes(E.id),onChange:F=>{N(E.id,F.target.checked)}},E.id)))})}})}),((M=d.interests)==null?void 0:M.message)&&e.jsx("p",{className:"err_msg",children:($=(z=d.interests)==null?void 0:z.message)==null?void 0:$.toString()})]}),e.jsxs(ar,{children:[e.jsx("button",{className:"submit_btn",children:"저장"}),e.jsx(b,{to:"/mypage/user-modify/with-draw",children:"마이스 메이트 탈퇴하기"})]})]})]})})},lr=h.div`
  padding: 20px 0 0;
  position: relative;
`,or=h.div`
  background-color: #121212;
  border-radius: 10px;
`,dr=h.div`
  position: relative;
  padding: 60px 40px 0;
  @media (max-width: 1024px) {
    padding: 24px 16px 0;
  }
  & > h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      font-size: 18px;
      padding-bottom: 25px;
    }
  }
`,cr=h.div`
  padding-bottom: 50px;
  display: flex;
  @media (max-width: 1024px) {
    padding-bottom: 35px;
  }
  & .filter_btn {
    margin-right: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 5px 15px;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
    border: 1px solid ${t=>t.$filterOn?"#235EF3":"#e6e6e6"};
    background-color: ${t=>t.$filterOn&&"#235EF3"};
    @media (max-width: 1024px) {
      position: absolute;
      top: 20px;
      right: 16px;
      margin-right: 0;
      gap: 10px;
      font-size: 13px;
      & svg {
        width: 13px;
      }
    }
  }
  /* HashBox */
  & > ul {
    gap: 16px;
    @media (max-width: 1024px) {
      gap: 12px;
    }
    & > li {
      font-size: 22px;
      @media (max-width: 1024px) {
        font-size: 16px;
        padding: 11px 12px;
      }
      & .close_btn {
        width: 13px;
        height: 13px;
      }
      & .label {
        padding-left: 25px;
      }
    }
  }
`,pr=h.div`
  position: absolute;
  left: 0;
  top: 196px;
  width: 340px;
  padding: 35px 30px;
  background-color: #000000;
  border: 1px solid #292e37;
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 30px 16px;
    border: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    overflow-y: scroll;
  }
  & .title_area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
    & .reset_btn {
      font-size: 14px;
      font-weight: 700;
      color: #b0b8c1;
      cursor: pointer;
    }
  }

  & .radio_box {
    padding-top: 34px;
    & .type {
      display: block;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding-bottom: 36px;
    }
    & .radio_list {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
  }
  & .btn_box {
    display: flex;
    padding-top: 40px;
    @media (max-width: 1024px) {
      padding-top: 50px;
    }
    & button {
      margin-left: auto;
      border-radius: 10px;
      padding: 11px 50px;
      background-color: #235ef3;
      color: #fff;
      font-weight: 600;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`,xr=h.div`
  padding: 0 60px 80px;
  display: grid;
  column-gap: 24px;
  row-gap: 80px;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1650px) {
    padding: 0 30px 80px;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px 80px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
`,hr=h.ul`
  display: flex;
  justify-content: space-around;

  & .none_swiper_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;h.div`
  & .swiper-slide {
    /* width: auto !important; */
  }
`;const pi=h.li`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  @media (max-width: 1024px) {
    padding: 16px 0;
  }
`,mr=({categoryList:t})=>{const s=wt("(max-width:1400px)");return e.jsxs(hr,{className:"maxframe",children:[!s&&e.jsx("ul",{className:"none_swiper_wrap",children:t.map(a=>e.jsx(pi,{children:a.name},a.id))}),s&&e.jsx(vt,{slidesPerView:2.5,centeredSlides:!1,spaceBetween:3,loop:!1,breakpoints:{800:{slidesPerView:6.5},500:{slidesPerView:4.5},400:{slidesPerView:3.5}},className:"category_swiper",children:t.map(a=>e.jsx(yt,{children:e.jsx(pi,{children:a.name})},a.id))})]})},gr=t=>i.createElement("svg",{width:24,height:23,viewBox:"0 0 24 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 2.0001C16.9545 2.0001 16.6619 2.0583 16.389 2.17137C16.116 2.28444 15.8679 2.45018 15.659 2.65911C15.4501 2.86804 15.2843 3.11608 15.1713 3.38906C15.0582 3.66204 15 3.95462 15 4.2501C15 4.54557 15.0582 4.83815 15.1713 5.11114C15.2843 5.38412 15.4501 5.63216 15.659 5.84109C15.8679 6.05002 16.116 6.21575 16.389 6.32883C16.6619 6.4419 16.9545 6.5001 17.25 6.5001C17.8467 6.5001 18.419 6.26304 18.841 5.84109C19.2629 5.41913 19.5 4.84683 19.5 4.2501C19.5 3.65336 19.2629 3.08106 18.841 2.65911C18.419 2.23715 17.8467 2.0001 17.25 2.0001ZM13.575 3.5001C13.7471 2.65238 14.207 1.89024 14.8768 1.34281C15.5466 0.795387 16.385 0.496338 17.25 0.496338C18.115 0.496338 18.9534 0.795387 19.6232 1.34281C20.293 1.89024 20.7529 2.65238 20.925 3.5001H24V5.0001H20.925C20.7529 5.84781 20.293 6.60995 19.6232 7.15738C18.9534 7.70481 18.115 8.00386 17.25 8.00386C16.385 8.00386 15.5466 7.70481 14.8768 7.15738C14.207 6.60995 13.7471 5.84781 13.575 5.0001H0V3.5001H13.575ZM6.75 9.5001C6.15326 9.5001 5.58097 9.73715 5.15901 10.1591C4.73705 10.5811 4.5 11.1534 4.5 11.7501C4.5 12.3468 4.73705 12.9191 5.15901 13.3411C5.58097 13.763 6.15326 14.0001 6.75 14.0001C7.34674 14.0001 7.91903 13.763 8.34099 13.3411C8.76295 12.9191 9 12.3468 9 11.7501C9 11.1534 8.76295 10.5811 8.34099 10.1591C7.91903 9.73715 7.34674 9.5001 6.75 9.5001ZM3.075 11.0001C3.24714 10.1524 3.70705 9.39024 4.37681 8.84281C5.04657 8.29539 5.88498 7.99634 6.75 7.99634C7.61502 7.99634 8.45343 8.29539 9.12319 8.84281C9.79295 9.39024 10.2529 10.1524 10.425 11.0001H24V12.5001H10.425C10.2529 13.3478 9.79295 14.11 9.12319 14.6574C8.45343 15.2048 7.61502 15.5039 6.75 15.5039C5.88498 15.5039 5.04657 15.2048 4.37681 14.6574C3.70705 14.11 3.24714 13.3478 3.075 12.5001H0V11.0001H3.075ZM17.25 17.0001C16.6533 17.0001 16.081 17.2372 15.659 17.6591C15.2371 18.0811 15 18.6534 15 19.2501C15 19.8468 15.2371 20.4191 15.659 20.8411C16.081 21.263 16.6533 21.5001 17.25 21.5001C17.8467 21.5001 18.419 21.263 18.841 20.8411C19.2629 20.4191 19.5 19.8468 19.5 19.2501C19.5 18.6534 19.2629 18.0811 18.841 17.6591C18.419 17.2372 17.8467 17.0001 17.25 17.0001ZM13.575 18.5001C13.7471 17.6524 14.207 16.8902 14.8768 16.3428C15.5466 15.7954 16.385 15.4963 17.25 15.4963C18.115 15.4963 18.9534 15.7954 19.6232 16.3428C20.293 16.8902 20.7529 17.6524 20.925 18.5001H24V20.0001H20.925C20.7529 20.8478 20.293 21.61 19.6232 22.1574C18.9534 22.7048 18.115 23.0039 17.25 23.0039C16.385 23.0039 15.5466 22.7048 14.8768 22.1574C14.207 21.61 13.7471 20.8478 13.575 20.0001H0V18.5001H13.575Z",fill:"white"})),fr=t=>i.createElement("svg",{width:31,height:31,viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M25.3167 27.125L17.1792 18.9875C16.5333 19.5042 15.7906 19.9132 14.951 20.2146C14.1115 20.516 13.2181 20.6667 12.2708 20.6667C9.92431 20.6667 7.93837 19.854 6.31302 18.2286C4.68767 16.6033 3.875 14.6174 3.875 12.2708C3.875 9.92431 4.68767 7.93837 6.31302 6.31302C7.93837 4.68767 9.92431 3.875 12.2708 3.875C14.6174 3.875 16.6033 4.68767 18.2286 6.31302C19.854 7.93837 20.6667 9.92431 20.6667 12.2708C20.6667 13.2181 20.516 14.1115 20.2146 14.951C19.9132 15.7906 19.5042 16.5333 18.9875 17.1792L27.125 25.3167L25.3167 27.125ZM12.2708 18.0833C13.8854 18.0833 15.2578 17.5182 16.388 16.388C17.5182 15.2578 18.0833 13.8854 18.0833 12.2708C18.0833 10.6562 17.5182 9.28385 16.388 8.15365C15.2578 7.02344 13.8854 6.45833 12.2708 6.45833C10.6562 6.45833 9.28385 7.02344 8.15365 8.15365C7.02344 9.28385 6.45833 10.6562 6.45833 12.2708C6.45833 13.8854 7.02344 15.2578 8.15365 16.388C9.28385 17.5182 10.6562 18.0833 12.2708 18.0833Z",fill:"#B0B8C1"})),ur=t=>i.createElement("svg",{width:20,height:19,viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_848_8221)"},i.createElement("path",{d:"M9.55688 17.9853L0.865234 9.29976L9.55688 0.614258",stroke:"white",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"}),i.createElement("path",{d:"M0.958984 9.2998H19.3865",stroke:"white",strokeWidth:2,strokeMiterlimit:10,strokeLinecap:"round"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_848_8221"},i.createElement("rect",{width:20,height:18.5995,fill:"white"})))),br=h.div`
  position: relative;
`,_r=h.form`
  @media (max-width: 1024px) {
    padding: 0 16px;
    position: ${t=>t.$filter&&"fixed"};
    z-index: ${t=>t.$filter&&"99"};
    top: ${t=>t.$filter&&"11px"};
    left: ${t=>t.$filter&&"40px"};
    right: ${t=>t.$filter&&"0"};
    margin-bottom: ${t=>t.$filter&&"11px"};
  }
  & > div {
    position: relative;
    width: 666px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & input {
    width: 100%;
    background-color: rgba(41, 46, 55, 0.7);
    padding: 21px 63px 21px 33px;
    font-size: 18px;
    color: #fff;
    border-radius: 50rem;
    line-height: 1;
    @media (max-width: 1024px) {
      padding: 12px 43px 12px 16px;
      font-size: 12px;
    }
  }
  & input::placeholder {
    color: #fff;
    font-size: 18px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & button {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    & svg {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
      right: 15px;
    }
  }
`,jr=h.div`
  width: 924px;
  padding: 34px 25px;
  position: absolute;
  background-color: #000;
  border-radius: 10px;
  left: 50%;
  top: 73px;
  transform: translateX(-50%);
  font-size: 16px;
  z-index: 5;
  box-shadow: 0 1px 4px;
  @media (max-width: 1024px) {
    width: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    transform: translateX(0);
    flex-direction: column;
    padding: 60px 0;
  }
  & .back_btn {
    position: absolute;
    top: 21px;
    left: 17px;
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
  & .title {
    color: #fff;
    font-weight: 700;
    flex: 0 0 auto;
  }
`,wr=h.div`
  display: flex;

  @media (max-width: 1024px) {
    padding: 25px;
    flex-direction: column;
    overflow-y: scroll;
    height: 90vh;
  }
`,vr=h.div`
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  padding-top: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 0;
  }

  & .btn_area {
    position: absolute;
    bottom: -10px;
    right: 20px;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      top: 0;
      right: 0;
      bottom: auto;
    }
  }
  & .btn_area::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & .btn_area button {
    color: rgba(255, 255, 255, 0.5);
    padding: 0 12px;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    column-gap: 32px;
    row-gap: 20px;
    @media (max-width: 1024px) {
      padding: 25px 0;
    }
  }
  & li {
    color: #fff;
  }
`,yr=h.div`
  width: 50%;
  display: flex;
  padding: 30px 0 0 50px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    padding: 25px 0 0 0;
  }
  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 32px;
    row-gap: 20px;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      padding-left: 0;
      padding: 25px 0;
    }
  }

  & .category {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
  }
  & .category li {
    width: 50%;
    /* padding-bottom: 20px; */
  }
  & .category li:first-child {
    width: 100%;
  }
`,Cr=()=>{const[t,s]=i.useState(""),[a,n]=i.useState(!1),l=i.useRef(null),c=wt("(max-width: 1024px)"),p=()=>{n(!0),c===!0&&(document.body.style.overflow="hidden")},r=()=>{n(!1),c===!0&&(document.body.style.overflow="auto")};return e.jsxs(br,{children:[e.jsx(_r,{$filter:a,children:e.jsxs("div",{children:[e.jsx("input",{type:"text",placeholder:"마이스 메이트에서 나의 맞춤 행사를 찾아보세요!",onChange:o=>{s(o.target.value)},value:t,onFocus:p,onBlur:r}),e.jsx("button",{children:e.jsx(fr,{})})]})}),a&&e.jsxs(jr,{ref:l,children:[e.jsx("button",{className:"back_btn",children:e.jsx(ur,{})}),e.jsxs(wr,{children:[e.jsxs(vr,{children:[e.jsx("p",{className:"title",children:"최근 검색어"}),e.jsxs("div",{className:"btn_area",children:[e.jsx("button",{children:"검색 기록 끄기"}),e.jsx("button",{children:"검색 기록 삭제"})]}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(b,{to:"",children:"마케팅"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온온온온온온온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"최근 검색어"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"농축산농축산농축산"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"환경"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"test"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"온라인"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"교육"})})]})]}),e.jsxs(yr,{children:[e.jsx("p",{className:"title",children:"카테고리"}),e.jsxs("ul",{className:"category",children:[e.jsx("li",{children:e.jsx(b,{to:"",children:"전체"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"농축산/식음료"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"뷰티/화장품"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"에너지/환경"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"금융/부동산"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"섬유/의류"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"교육"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"금속/기계"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"임신/출산/육아"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"보건/의료"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"웨딩"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"건설/건축"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"문화/예술"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"가정용품"})}),e.jsx("li",{children:e.jsx(b,{to:"",children:"레저/관광"})})]})]})]})]})]})},Nr=()=>{const[t,s]=i.useState(!1),a=wt("(max-width: 1024px)"),n=()=>{s(f=>!f),a&&!t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},l=localStorage.getItem("token"),{data:c,isLoading:p,isError:r}=ka(l),{data:o}=Ke();return p?e.jsx(ve,{}):r?e.jsx("div",{style:{color:"#fff"},children:"데이터 불러오기 실패"}):e.jsxs(lr,{children:[a&&e.jsx(Cr,{}),e.jsx(mr,{categoryList:o}),e.jsxs(or,{children:[e.jsxs(dr,{className:"maxframe",children:[e.jsx("h2",{children:"검색결과"}),e.jsxs(cr,{$filterOn:t,children:[e.jsxs("button",{onClick:n,className:"filter_btn",children:[e.jsx(gr,{}),e.jsx("span",{children:"필터"})]}),t&&e.jsxs(pr,{children:[e.jsxs("div",{className:"title_area",children:[e.jsx("span",{className:"title",children:"필터"}),e.jsx("span",{className:"reset_btn",children:"필터 초기화"})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("span",{className:"type",children:"온/오프라인별"}),e.jsxs("ul",{className:"radio_list",children:[e.jsx("li",{children:e.jsx(_e,{label:"온/오프라인 모두",id:"typeAll",name:"type",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(_e,{label:"온라인",id:"online",name:"type"})}),e.jsx("li",{children:e.jsx(_e,{label:"오프라인",id:"offline",name:"type"})})]})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("span",{className:"type",children:"날짜별"}),e.jsxs("ul",{className:"radio_list",children:[e.jsx("li",{children:e.jsx(_e,{label:"모든 날짜",id:"dateAll",name:"date",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(_e,{label:"이번주 행사",id:"thisWeek",name:"date"})}),e.jsx("li",{children:e.jsx(_e,{label:"지난 행사",id:"lastWeek",name:"date"})})]})]}),e.jsxs("div",{className:"radio_box",children:[e.jsx("span",{className:"type",children:"참가비"}),e.jsxs("ul",{className:"radio_list",children:[e.jsx("li",{children:e.jsx(_e,{label:"유/무료 모두",id:"priceAll",name:"price",defaultChecked:!0})}),e.jsx("li",{children:e.jsx(_e,{label:"유료",id:"charged",name:"price"})}),e.jsx("li",{children:e.jsx(_e,{label:"무료",id:"free",name:"price"})})]})]}),e.jsx("div",{className:"btn_box",children:e.jsx("button",{onClick:n,children:"적용"})})]}),e.jsx(Bi,{hashList:[{name:"무료",id:1},{name:"뷰티/화장품",id:2}],onClick:f=>console.log(f)})]})]}),e.jsx(xr,{className:"maxframe",children:c.data.items&&c.data.items.map(f=>e.jsx(zi,{id:f.id,title:f.title,img:f.img,event_start_date:f.event_start_date,event_end_date:f.event_end_date,position:f.position,price:f.price,likes:f.likes,like_state:f.like_state},f.id))})]})]})},kr=h.div`
  padding: 26px 0 185px;
  position: relative;
  @media (max-width: 1024px) {
    padding: 24px 0 76px;
    & .EventSliderWrap .TitleBox {
      padding: 40px 16px 16px;
      text-align: left;
    }
  }
`,Hr=h.div`
  padding: 0 110px 0 56px;
  display: flex;
  gap: 51px;
  @media (max-width: 1650px) {
    padding: 0 30px;
    gap: 20px;
  }
  @media (max-width: 1300px) {
    padding: 0 20px;
    gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px;
    flex-direction: column;
  }
`,Sr=h.div`
  max-width: 1190px;
  width: 100%;
`,Er=h.div`
  /* flex: 1 1 auto; */
  width: 405px;
  min-width: 320px;
  color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
  }
`,Lr=h.div`
  padding-bottom: 80px;
  @media (max-width: 1024px) {
    padding-bottom: 0;
  }
  & .thumb_img {
    position: relative;
    max-width: 1191px;
    aspect-ratio: 1191 / 627;
    overflow: hidden;
    border-radius: 20px;
    @media (max-width: 1024px) {
      border-radius: 10px;
    }
    & img {
      width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`,zr=h.div`
  position: relative;
  padding: 38px 185px 0 34px;
  @media (max-width: 1300px) {
    padding: 38px 185px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 16px 0 30px;
  }
  & .title_box {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 1024px) {
      justify-content: space-between;
    }
    & h2 {
      color: #fff;
      font-size: 32px;
      font-weight: 800;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
    & .d_day {
      padding: 6px;
      background-color: #235ef3;
      font-weight: 700;
      font-size: 24px;
      color: #fff;
      border-radius: 9px;
      min-width: 80px;
      text-align: center;
      @media (max-width: 1024px) {
        border-radius: 50rem;
        font-size: 10px;
        min-width: 40px;
      }
    }
  }

  & .desc_box {
    padding: 12px 0 15px;
    color: #b0b8c1;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1.2;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 10px;
      padding-right: 105px;
    }
    & span {
      display: block;
    }
    & .date {
      position: relative;
      padding-right: 40px;
      @media (max-width: 1024px) {
        padding-right: 0;
      }
    }
    & .date::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 18px;
      width: 2px;
      height: 20px;
      background-color: #b0b8c1;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  & .rating_box {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
    & .icon {
      display: block;
      width: 18px;
      height: 18px;
      @media (max-width: 1024px) {
        width: 12px;
        height: 12px;
      }
      & svg {
        width: 100%;
        height: 100%;
      }
    }
    & .count {
      color: #235ef3;
    }
  }

  & .public_btn_box {
    position: absolute;
    right: 0;
    top: 37px;
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 1024px) {
      top: 53px;
      gap: 20px;
    }
    & .icon_btn {
      cursor: pointer;
      width: 55px;
      height: 55px;
      @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
      }
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  & .apply_btn_box {
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 1024px) {
      margin-top: 23px;
      position: static;
    }
    & .btn {
      border-radius: 8px;
      padding: 11px 16px;
      min-width: 177px;
      font-weight: 600;
      text-align: center;
      @media (max-width: 1024px) {
        width: 100%;
        font-size: 16px;
      }
    }
    & .primary {
      background-color: #235ef3;
      color: #fff;
      cursor: pointer;
    }
    & .disable {
      cursor: default;
      background-color: #495057;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,Vr=h.div`
  display: ${t=>t.$on?"block":"none"};
  position: fixed;
  bottom: 48px;
  color: #fff;
  background-color: rgba(41, 46, 55, 1);
  border-radius: 50rem;
  padding: 15px 50px;
  font-size: 16px;
  font-weight: 500;
  left: 50%;
  transform: translateX(-50%);
  transition: all 1s;
  z-index: 999;
  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 10px 30px;
    bottom: 30px;
  }
`,Ar=t=>i.createElement("svg",{width:55,height:55,viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("circle",{cx:27.5,cy:27.5,r:27.5,fill:"#3B4048"}),i.createElement("g",{clipPath:"url(#clip0_746_68963)"},i.createElement("path",{d:"M27.9999 21.6951L27.014 20.6817C24.6999 18.3029 20.4566 19.1238 18.9249 22.1144C18.2057 23.5211 18.0435 25.5519 19.3566 28.1438C20.6216 30.6394 23.2534 33.6287 27.9999 36.8847C32.7464 33.6287 35.3767 30.6394 36.6431 28.1438C37.9562 25.5506 37.7954 23.5211 37.0749 22.1144C35.5431 19.1238 31.2999 18.3016 28.9857 20.6803L27.9999 21.6951ZM27.9999 38.5416C6.91698 24.6101 21.5085 13.7366 27.7579 19.4882C27.8404 19.5638 27.9215 19.6422 27.9999 19.7233C28.0774 19.6423 28.1582 19.5643 28.2419 19.4896C34.4899 13.7338 49.0827 24.6087 27.9999 38.5416Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_746_68963"},i.createElement("rect",{width:22,height:22,fill:"white",transform:"translate(17 17)"})))),Mr=t=>i.createElement("svg",{width:55,height:55,viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("circle",{cx:27.5,cy:27.5,r:27.5,fill:"#3B4048"}),i.createElement("g",{clipPath:"url(#clip0_2319_7840)"},i.createElement("path",{d:"M27.9999 21.6951L27.014 20.6817C24.6999 18.3029 20.4566 19.1238 18.9249 22.1144C18.2057 23.5211 18.0435 25.5519 19.3566 28.1438C20.6216 30.6394 23.2534 33.6287 27.9999 36.8847C32.7464 33.6287 35.3767 30.6394 36.6431 28.1438C37.9562 25.5506 37.7954 23.5211 37.0749 22.1144C35.5431 19.1238 31.2999 18.3016 28.9857 20.6803L27.9999 21.6951ZM27.9999 38.5416C6.91698 24.6101 21.5085 13.7366 27.7579 19.4882C27.8404 19.5638 27.9215 19.6422 27.9999 19.7233C28.0774 19.6423 28.1582 19.5643 28.2419 19.4896C34.4899 13.7338 49.0827 24.6087 27.9999 38.5416Z",fill:"white"})),i.createElement("g",{clipPath:"url(#clip1_2319_7840)"},i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.0046 20.8058C34.1068 14.5331 49.3638 25.5097 28.0046 39.6241C6.64533 25.5111 21.9023 14.5331 28.0046 20.8058Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_2319_7840"},i.createElement("rect",{width:22,height:22,fill:"white",transform:"translate(17 17)"})),i.createElement("clipPath",{id:"clip1_2319_7840"},i.createElement("rect",{width:22,height:22,fill:"white",transform:"translate(17 19)"})))),Fr=t=>i.createElement("svg",{width:55,height:55,viewBox:"0 0 55 55",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("circle",{cx:27.5,cy:27.5,r:27.5,fill:"#3B4048"}),i.createElement("g",{clipPath:"url(#clip0_746_68966)"},i.createElement("path",{d:"M31.1254 20.4377C31.1253 19.6312 31.4088 18.8503 31.9263 18.2317C32.4438 17.613 33.1623 17.1961 33.9562 17.0537C34.75 16.9114 35.5687 17.0527 36.2689 17.453C36.9691 17.8533 37.5062 18.487 37.7864 19.2433C38.0665 19.9996 38.0718 20.8304 37.8013 21.5902C37.5308 22.35 37.0017 22.9905 36.3066 23.3996C35.6116 23.8088 34.7948 23.9605 33.9992 23.8282C33.2036 23.696 32.4798 23.2882 31.9545 22.6762L22.7172 26.9662C22.9296 27.6392 22.9296 28.3612 22.7172 29.0342L31.9545 33.3242C32.5098 32.6784 33.285 32.2617 34.13 32.155C34.975 32.0482 35.8295 32.2589 36.528 32.7463C37.2265 33.2336 37.7191 33.9629 37.9105 34.7929C38.1019 35.6228 37.9784 36.4942 37.5639 37.2382C37.1494 37.9823 36.4735 38.5459 35.6671 38.82C34.8607 39.0941 33.9813 39.059 33.1992 38.7216C32.4172 38.3842 31.7883 37.7686 31.4343 36.9939C31.0804 36.2192 31.0266 35.3407 31.2835 34.5287L22.0462 30.2387C21.589 30.7716 20.9794 31.1517 20.2997 31.3278C19.6199 31.5039 18.9025 31.4677 18.244 31.2238C17.5855 30.98 17.0174 30.5404 16.6162 29.9641C16.2151 29.3878 16 28.7024 16 28.0002C16 27.298 16.2151 26.6126 16.6162 26.0363C17.0174 25.46 17.5855 25.0203 18.244 24.7765C18.9025 24.5327 19.6199 24.4964 20.2997 24.6726C20.9794 24.8487 21.589 25.2288 22.0462 25.7617L31.2835 21.4717C31.1783 21.1371 31.125 20.7884 31.1254 20.4377Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_746_68966"},i.createElement("rect",{width:22,height:22,fill:"white",transform:"translate(16 17)"})))),Br=t=>i.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_759_23095)"},i.createElement("path",{d:"M10.8359 46.3285C9.67787 46.9225 8.36387 45.8815 8.59787 44.5525L11.0879 30.3625L0.518867 20.2945C-0.468133 19.3525 0.0448665 17.6305 1.36787 17.4445L16.0619 15.3565L22.6139 2.37555C23.2049 1.20555 24.8039 1.20555 25.3949 2.37555L31.9469 15.3565L46.6409 17.4445C47.9639 17.6305 48.4769 19.3525 47.4869 20.2945L36.9209 30.3625L39.4109 44.5525C39.6449 45.8815 38.3309 46.9225 37.1729 46.3285L23.9999 39.5605L10.8329 46.3285H10.8359Z",fill:"#1E9EFF"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_759_23095"},i.createElement("rect",{width:48,height:48,fill:"white"})))),Pt=({thumnaildata:t,applyBtn:s})=>{var S,H,v;const a=Ft(),[n,l]=i.useState(!1),c=D(),{openAlret:p}=Ee(),[r,o]=i.useState(!1),f=ke(xe),{id:m}=le(),g=localStorage.getItem("token"),j=localStorage.getItem("user_id"),{data:d}=_a(m,g);i.useEffect(()=>{t.like&&o(t.like)},[t.like]);const u={text:"로그인이 필요한 기능입니다.",callback:()=>{c("/login")}},C=()=>{if(g&&j){const x={token:g,user_id:j,event_id:Number(m)};a.mutate(x),o(w=>!w)}else p(u)},N=async()=>{const x=window.location.href;try{await navigator.clipboard.writeText(x),l(!0),setTimeout(()=>{l(!1)},5e3)}catch{l(!1)}},k=x=>{const w=new Date,Z=new Date(x.replace(" ","T"));return w<Z},V=(x,w)=>{f.isLogin===!0?x===1||x===2||x===3?c(`/detail/${m}/apply`):(x===4||x===5)&&window.open(w):c("/login")};return e.jsxs(Lr,{children:[e.jsx("figure",{className:"thumb_img",children:e.jsx("img",{src:`https://api.micemate.io/storage/${t.img}`})}),e.jsxs(zr,{children:[e.jsxs("div",{className:"title_box",children:[e.jsx("h2",{children:t.title}),e.jsx("p",{className:"d_day",children:`D${St(t.event_end_date)}`})]}),e.jsxs("div",{className:"desc_box",children:[e.jsx("span",{className:"date",children:`${ge(t.event_start_date)} ~
            ${ge(t.event_end_date)}`}),e.jsx("span",{className:"location",children:t.position1})]}),e.jsxs("div",{className:"rating_box",children:[e.jsx("span",{className:"icon",children:e.jsx(Br,{})}),e.jsx("span",{className:"rating",children:((S=d==null?void 0:d.data)==null?void 0:S.rate)===null?0:(H=d==null?void 0:d.data)==null?void 0:H.rate}),e.jsx("span",{className:"count",children:`(${(v=d==null?void 0:d.data)==null?void 0:v.total})`})]}),e.jsxs("div",{className:"public_btn_box",children:[e.jsx("div",{onClick:C,className:"icon_btn",children:r?e.jsx(Mr,{}):e.jsx(Ar,{})}),e.jsx("div",{onClick:N,className:"icon_btn",children:e.jsx(Fr,{})})]}),s&&e.jsx("div",{className:"apply_btn_box",children:k(t.event_end_date)&&k(t.event_start_date)&&(k(t.application_end_date)?k(t.application_start_date)?e.jsx("div",{className:"btn disable",children:"신청기간이 아닙니다."}):e.jsx("div",{onClick:()=>{V(t.payable_type,t.payable_price_url)},className:"btn primary",children:"사전 신청하기"}):e.jsx("div",{className:"btn disable",children:"신청기간이 마감되었습니다."}))})]}),e.jsx(Vr,{$on:n,children:"URL 이 복사되었습니다."})]})},Tr=h.div`
  display: flex;
  align-items: center;
  margin-bottom: 37px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  background-color: #000;
  z-index: 99;
  & a {
    cursor: pointer;
    display: block;
    min-width: 162px;
    padding: 14px 10px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    @media (max-width: 1024px) {
      min-width: auto;
      width: 100%;
      font-size: 15px;
      padding: 15px 2px;
    }
  }
  & .active {
    position: relative;
    color: rgba(49, 111, 233, 1);
  }
  & .active::after {
    content: "";
    position: absolute;
    background-color: rgba(49, 111, 233, 1);
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 50rem;
  }
`,Pr=h.div`
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  color: #fff;
  padding: 0 55px 100px;
  @media (max-width: 1300px) {
    padding: 0px 20px 100px;
  }
  @media (max-width: 1300px) {
    padding: 0px 20px 40px;
  }
  & section {
    padding-top: 100px;
    @media (max-width: 1024px) {
      padding-top: 40px;
    }
  }
  & section:first-child {
    padding-top: 83px;
    @media (max-width: 1024px) {
      padding-top: 40px;
    }
  }
  & section h3 {
    color: #fff;
    font-weight: 800;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  & .info_list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px) {
      gap: 14px;
    }
    & .item {
      display: flex;
      font-weight: 500;
      align-items: center;
      @media (max-width: 1024px) {
        font-size: 14px;
        align-items: flex-start;
        word-break: keep-all;
      }
      & .tit {
        min-width: 100px;
        color: rgba(176, 184, 193, 1);
      }
      & .desc {
        color: #fff;
      }
    }
  }
`,Zr=h.section``,$r=h.section`
  & .detail_box {
    height: ${t=>t.$detailView?"auto":"800px"};
    min-height: 800px;
    position: relative;
    overflow: hidden;
    @media (max-width: 1024px) {
      max-height: ${t=>t.$detailView?"auto":"400px"};
      min-height: 400px;
    }
    & .image {
      width: 100%;
      & img {
        width: 100%;
      }
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.5rem;
      }
      strong {
        font-weight: bold;
      }
      em {
        font-style: italic;
      }
      ol {
        list-style-type: auto;
        list-style-position: inside;
        text-align: center;
        padding-left: 0;
        margin: 0;
      }
      ul {
        list-style-type: disc;
        list-style-position: inside;
        text-align: center;
        padding-left: 0;
        margin: 0;
      }
      ul li::marker {
        font-size: 0.8em; /* 점 크기 조절 */
      }
      .ql-align-center {
        text-align: center;
      }
      .ql-align-right {
        text-align: right;
      }
      .ql-align-justify {
        text-align: justify;
      }

      blockquote {
        border-left: 4px solid #ccc;
        margin-bottom: 5px;
        margin-top: 5px;
        padding-left: 16px;
      }
    }

    & .more_box {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: linear-gradient(
        180deg,
        ${t=>t.$detailView?"none":"rgba(217, 217, 217, 0) 0%,rgba(136, 137, 139, 0.43) 39.5%,#121212 89.5%"}
      );
      img {
        width: 100%;
      }

      & .btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
        & button {
          min-width: 177px;
          padding: 12px 10px;
          color: #fff;
          font-weight: 600;
          background-color: rgba(49, 111, 233, 1);
          border-radius: 10px;
          @media (max-width: 1024px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`,Ir=h.section`
  & .icon {
    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
    }
    & svg {
      @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .question {
    cursor: pointer;
  }
  & .faq_item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 0;
    @media (max-width: 1024px) {
      padding: 16px 0;
      line-height: 1.3;
    }
  }
  & .faq_item:first-child {
    padding: 0;
    padding-bottom: 25px;
    @media (max-width: 1024px) {
      padding-bottom: 16px;
    }
  }
  & .faq_item > div {
    display: flex;
    align-items: center;
    gap: 46px;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 14px;
      gap: 11px;
    }
  }
  & .answer {
    padding-top: 25px;
    @media (max-width: 1024px) {
      padding-top: 16px;
    }
  }
`,Or=h.section``,qr=t=>i.createElement("svg",{width:29,height:30,viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M15.5234 16.1992L26.3234 26.9992",stroke:"#316FE9",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("circle",{cx:13.5,cy:13.5,r:11,stroke:"#316FE9",strokeWidth:5})),Rr=t=>i.createElement("svg",{width:29,height:30,viewBox:"0 0 29 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M14.5 3L3 26.7931",stroke:"#6EA8FE",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M14.5 3L26 26.7931",stroke:"#6EA8FE",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("path",{d:"M7.75781 16.8789H21.2406",stroke:"#6EA8FE",strokeWidth:5,strokeLinecap:"round",strokeLinejoin:"round"})),Wr=[{id:1,name:"기본 정보"},{id:2,name:"상세 정보"},{id:3,name:"FAQ"},{id:4,name:"문의하기"}],Yr=(t,s,a)=>{if(t===1)return"무료";if(t===2)return`사전신청 무료 / 현장구매 유료(${G(String(a))})`;if(t===3)return`사전 신청 무료 / 기간 한정 유료(${G(String(s))}) / 현장 구매 시 유료(${G(String(a))})`;if(t===4)return`사전 신청 유료(${G(String(s))}) / 현장 결제 유료(${G(String(a))})`;if(t===5)return`유료(${G(String(a))})`},Ur=({contentdata:t})=>{const[s,a]=i.useState(!1),[n,l]=i.useState(null),c=p=>{l(n===p?null:p)};return e.jsxs(e.Fragment,{children:[e.jsx(Tr,{children:Wr.map(p=>e.jsx(ps,{to:`section${p.id}`,spy:!0,smooth:!0,offset:-70,duration:500,children:p.name},p.id))}),e.jsxs(Pr,{children:[e.jsxs(Zr,{id:"section1",children:[e.jsx("h3",{children:"기본 정보"}),e.jsxs("ul",{className:"info_list",children:[e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"행사 기간"}),e.jsx("span",{className:"desc",children:`${ge(t.event_start_date)} ~
            ${ge(t.event_end_date)}`})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"개최 장소"}),e.jsx("span",{className:"desc",children:t.position1})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"세부 장소"}),e.jsx("span",{className:"desc",children:t.position2})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"전시 분야"}),e.jsx("span",{className:"desc",children:t.category.name})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"참가 비용"}),e.jsx("span",{className:"desc",children:Yr(t.payable_type,t.payable_price1,t.payable_price2)})]})]})]}),e.jsxs($r,{id:"section2",$detailView:s,children:[e.jsx("h3",{children:"상세 정보"}),e.jsx("div",{className:"detail_box",children:e.jsxs("div",{children:[e.jsx("div",{className:"image",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:t.content}})}),e.jsx("div",{className:"more_box",children:e.jsx("p",{className:"btn",children:e.jsx("button",{onClick:()=>{a(p=>!p)},children:s?"접기":"더보기"})})})]})})]}),e.jsxs(Ir,{id:"section3",children:[e.jsx("h3",{children:"FAQ"}),e.jsx("ul",{className:"faq_list",children:t.faqs.map((p,r)=>e.jsxs("li",{className:"faq_item",children:[e.jsxs("div",{onClick:()=>c(r),className:"question",children:[e.jsx("span",{className:"icon",children:e.jsx(qr,{})}),e.jsx("span",{className:"txt",children:p.question})]}),n===r&&e.jsxs("div",{className:"answer",children:[e.jsx("span",{className:"icon",children:e.jsx(Rr,{})}),e.jsx("span",{className:"txt",children:p.answer})]})]},r))})]}),e.jsxs(Or,{id:"section4",children:[e.jsx("h3",{children:"문의하기"}),e.jsxs("ul",{className:"info_list",children:[e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"담당자"}),e.jsx("span",{className:"desc",children:t.contact_name})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"전화번호"}),e.jsx("span",{className:"desc",children:t.contact_number})]}),e.jsxs("li",{className:"item",children:[e.jsx("span",{className:"tit",children:"이메일"}),e.jsx("span",{className:"desc",children:t.contact_email})]})]})]})]})]})},Qr=h.div`
  /* width: 405px; */
`,Kr=h.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  & button {
    width: 100%;
    padding: 15px 10px;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
  }
  & .active {
    position: relative;
  }
  & .active::after {
    content: "";
    position: absolute;
    background-color: rgba(49, 111, 233, 1);
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 50rem;
  }
`,Jr=h.div`
  /* padding: 16px; */
`,Xr=h.div`
  /* pointer-events: ${t=>t.$loading?"all":"none"}; */
  width: ${t=>`${t.$width}px`};
  position: relative;
`,Dr=h.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  padding: 10px 0;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  & .txt {
    min-width: 50px;
  }
`,Gr=h.ul`
  display: ${t=>t.$isOn?"block":"none"};
  width: 100%;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 10;
  border-radius: 5px;
  background-color: #000;
  padding: 5px 15px;
  border: 1px solid #fff;
`,el=h.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  cursor: pointer;
`,tl=[{text:"베스트순",value:1},{text:"최신순",value:2}],il=({setSortType:t,width:s})=>{const[a,n]=i.useState(!1),[l,c]=i.useState("베스트순"),p=i.useRef(null),r=()=>{n(g=>!g)},o=g=>{t(g)},f=(g,j)=>{c(g),o(j),n(!1)},m=g=>{p.current&&!p.current.contains(g.target)&&n(!1)};return i.useEffect(()=>(document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[]),e.jsxs(Xr,{ref:p,$width:s,children:[e.jsxs(Dr,{onClick:r,$isOn:a,children:[e.jsx("span",{className:"txt",children:l}),e.jsx("span",{children:a?e.jsx(Lt,{}):e.jsx(Lt,{})})]}),e.jsx(Gr,{$isOn:a,children:tl.map(g=>e.jsx(el,{onClick:()=>f(g.text,g.value),children:g.text},g.value))})]})},sl=h.div`
  position: relative;
  word-break: keep-all;
  padding: 15px 50px 15px 20px;
  background-color: rgba(8, 66, 152, 1);
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 7px;
  & button {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    padding: 6px;
    & svg {
      width: 10px;
      height: 10px;
      display: block;
    }
  }
`,al=h.div`
  padding: 16px 0;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  & .pagination {
    padding-top: 30px;
    justify-content: center;
  }
`,nl=h.div`
  padding: 0 16px;
`,rl=h.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  & .stars {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    @media (max-width: 1500px) {
      gap: 5px;
    }
    & .star-ratings {
      display: flex !important;
      gap: 6px;
      @media (max-width: 1500px) {
        gap: 3px;
      }
    }
  }
  & .stars .total {
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .average {
    font-size: 30px;
    font-weight: 600;
  }
`,ll=h.ul`
  padding: 10px 0 0;
`,xi=h.li`
  position: relative;
  padding: 12px 16px 55px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  & .writer_info {
    color: rgba(176, 184, 193, 1);
    font-size: 14px;
    padding: 14px 0;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .desc {
    font-size: 14px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .like_btn {
    min-width: 50px;
    padding: 5px 0;
    position: absolute;
    right: 16px;
    bottom: 12px;
    background-color: rgba(35, 94, 243, 1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    & .num {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`,hi="M10.8359 46.3285C9.67787 46.9226 8.36387 45.8815 8.59787 44.5525L11.0879 30.3625L0.518867 20.2945C-0.468133 19.3525 0.0448665 17.6305 1.36787 17.4445L16.0619 15.3565L22.6139 2.37555C23.2049 1.20555 24.8039 1.20555 25.3949 2.37555L31.9469 15.3565L46.6409 17.4445C47.9639 17.6305 48.4769 19.3525 47.4869 20.2945L36.9209 30.3625L39.4109 44.5525C39.6449 45.8815 38.3309 46.9226 37.1729 46.3285L23.9999 39.5606L10.8329 46.3285H10.8359Z",ol=t=>i.createElement("svg",{width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_767_24184)"},i.createElement("path",{d:"M8.31 0.290575C7.41375 0.0662197 6.58125 0.744917 6.52125 1.62356C6.45375 2.61016 6.30562 3.51603 6.12 4.05486C6.00281 4.3928 5.67094 5.00579 5.145 5.59343C4.62281 6.17826 3.94312 6.69925 3.14719 6.91703C2.51719 7.08882 1.875 7.63516 1.875 8.43307V12.1889C1.875 12.9821 2.51437 13.5632 3.2325 13.6392C4.23562 13.7463 4.69875 14.0288 5.17125 14.3179L5.21625 14.3461C5.47125 14.501 5.75812 14.6728 6.12562 14.8004C6.49781 14.9281 6.93281 15.0041 7.5 15.0041H10.7812C11.6597 15.0041 12.2803 14.5564 12.5944 14.0053C12.7462 13.7453 12.8282 13.4504 12.8325 13.1492C12.8325 13.0065 12.8109 12.8563 12.7603 12.7137C12.9487 12.4668 13.1166 12.1711 13.2178 11.8679C13.3209 11.5581 13.3791 11.1526 13.2216 10.7893C13.2862 10.6672 13.3341 10.5368 13.3706 10.411C13.4428 10.1575 13.4766 9.87777 13.4766 9.60648C13.4766 9.33612 13.4428 9.05732 13.3706 8.80293C13.3378 8.68598 13.2945 8.57224 13.2412 8.46311C13.4054 8.22925 13.511 7.95931 13.5492 7.67603C13.5874 7.39275 13.557 7.10443 13.4606 6.83536C13.2675 6.27964 12.8212 5.80276 12.3356 5.6413C11.5416 5.37658 10.6453 5.38222 9.97687 5.44323C9.8381 5.45574 9.69963 5.47139 9.56156 5.49017C9.88679 4.09559 9.86683 2.64256 9.50344 1.25746C9.44021 1.03554 9.31893 0.834552 9.15213 0.675292C8.98534 0.516032 8.77908 0.40428 8.55469 0.351592L8.31 0.290575Z",fill:"white"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_767_24184"},i.createElement("rect",{width:15,height:15.0196,fill:"white",transform:"translate(0 0.247314)"})))),dl=t=>i.createElement("svg",{width:15,height:16,viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_724_48675)"},i.createElement("path",{d:"M8.31 0.290575C7.41375 0.0662197 6.58125 0.744917 6.52125 1.62356C6.45375 2.61016 6.30562 3.51603 6.12 4.05486C6.00281 4.3928 5.67094 5.00579 5.145 5.59343C4.62281 6.17826 3.94313 6.69925 3.14719 6.91703C2.51719 7.08882 1.875 7.63516 1.875 8.43307V12.1889C1.875 12.9821 2.51437 13.5632 3.2325 13.6392C4.23562 13.7463 4.69875 14.0288 5.17125 14.3179L5.21625 14.3461C5.47125 14.501 5.75812 14.6728 6.12562 14.8004C6.49781 14.9281 6.93281 15.0041 7.5 15.0041H10.7812C11.6597 15.0041 12.2803 14.5564 12.5944 14.0053C12.7462 13.7453 12.8282 13.4504 12.8325 13.1492C12.8325 13.0065 12.8109 12.8563 12.7603 12.7137C12.9487 12.4668 13.1166 12.1711 13.2178 11.8679C13.3209 11.5581 13.3791 11.1526 13.2216 10.7893C13.2862 10.6672 13.3341 10.5368 13.3706 10.411C13.4428 10.1575 13.4766 9.87777 13.4766 9.60648C13.4766 9.33612 13.4428 9.05732 13.3706 8.80293C13.3378 8.68598 13.2945 8.57224 13.2412 8.46311C13.4054 8.22925 13.511 7.95931 13.5492 7.67603C13.5874 7.39275 13.557 7.10443 13.4606 6.83536C13.2675 6.27964 12.8212 5.80277 12.3356 5.6413C11.5416 5.37658 10.6453 5.38222 9.97687 5.44323C9.8381 5.45574 9.69963 5.47139 9.56156 5.49017C9.88679 4.09559 9.86683 2.64256 9.50344 1.25746C9.44021 1.03554 9.31893 0.834552 9.15213 0.675292C8.98534 0.516032 8.77908 0.40428 8.55469 0.351592L8.31 0.290575ZM10.7812 14.0664H7.5C7.02187 14.0664 6.69094 14.0016 6.43125 13.9124C6.16781 13.8214 5.95687 13.6984 5.70375 13.5435L5.66625 13.521C5.14594 13.2027 4.54312 12.8348 3.33187 12.7061C3.01969 12.6724 2.8125 12.4339 2.8125 12.1898V8.43307C2.8125 8.19464 3.02437 7.92334 3.39375 7.8229C4.42031 7.54128 5.24719 6.88793 5.84437 6.21956C6.43969 5.55306 6.84187 4.83494 7.005 4.36276C7.23281 3.70565 7.38656 2.7031 7.45687 1.6874C7.48031 1.34758 7.79437 1.12979 8.08219 1.20114L8.32781 1.26309C8.47781 1.30064 8.56969 1.39733 8.59781 1.50247C8.98067 2.96314 8.93346 4.50352 8.46187 5.93794C8.43518 6.01772 8.4304 6.10322 8.44802 6.18548C8.46564 6.26775 8.50503 6.34376 8.56205 6.40556C8.61907 6.46736 8.69163 6.51267 8.77214 6.53676C8.85266 6.56085 8.93815 6.56282 9.01969 6.54248L9.0225 6.54154L9.03562 6.53873L9.09 6.52558C9.41058 6.45742 9.73489 6.40821 10.0612 6.3782C10.6828 6.32188 11.4272 6.32751 12.0394 6.53215C12.2034 6.5866 12.4612 6.81377 12.5737 7.14232C12.6741 7.43145 12.6553 7.77127 12.3244 8.1017L11.9934 8.43307L12.3244 8.76538C12.3647 8.80575 12.4228 8.89774 12.4687 9.06108C12.5137 9.21784 12.5391 9.40841 12.5391 9.60648C12.5391 9.80549 12.5137 9.99511 12.4687 10.1528C12.4219 10.3162 12.3647 10.4081 12.3244 10.4485L11.9934 10.7799L12.3244 11.1122C12.3684 11.1563 12.4266 11.2783 12.3291 11.5703C12.2275 11.8534 12.066 12.1112 11.8556 12.326L11.5247 12.6573L11.8556 12.9896C11.8612 12.9943 11.8941 13.0366 11.8941 13.1492C11.8899 13.2869 11.8509 13.4213 11.7806 13.5397C11.6259 13.8101 11.3091 14.0654 10.7812 14.0654V14.0664Z",fill:"white"})),i.createElement("path",{d:"M4.82031 6.68311C4.99888 8.11354 5.24888 11.4035 4.82031 13.1201",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"}),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_724_48675"},i.createElement("rect",{width:15,height:15.0196,fill:"white",transform:"translate(0 0.247314)"})))),cl=({reviewData:t,page:s,setPage:a,setSortType:n})=>{const[l,c]=i.useState(!0);return e.jsxs(e.Fragment,{children:[l&&e.jsxs(sl,{children:[e.jsxs("span",{children:["전시회 참여 후 리뷰를 작성해주세요.",e.jsx("br",{}),"고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다"]}),e.jsx("button",{onClick:()=>c(!1),children:e.jsx(bi,{})})]}),e.jsxs(al,{children:[e.jsxs(nl,{children:[e.jsxs(rl,{children:[e.jsxs("div",{className:"stars",children:[e.jsx(ai,{rating:t.rate,starRatedColor:"rgba(30, 158, 255, 1)",starEmptyColor:"rgba(85, 85, 85, 1)",starDimension:"22px",starSpacing:"0",svgIconPath:hi}),e.jsx("p",{className:"total",children:`${t.total===void 0?0:t.total}개 평점`})]}),e.jsx("div",{className:"average",children:t.rate})]}),e.jsx(il,{width:122,setSortType:n})]}),e.jsx(ll,{children:t!=null&&t.items?t.items.map(p=>e.jsxs(xi,{children:[e.jsx(ai,{rating:p.rate,starRatedColor:"rgba(30, 158, 255, 1)",starEmptyColor:"rgba(85, 85, 85, 1)",starDimension:"10px",starSpacing:"2px",svgIconPath:hi}),e.jsxs("p",{className:"writer_info",children:[p.name," · ",ge(p.created_at)]}),e.jsx("p",{className:"desc",children:p.content}),e.jsxs("button",{className:"like_btn",children:[e.jsx("span",{className:"icon",children:p.like_state?e.jsx(ol,{}):e.jsx(dl,{})}),e.jsx("span",{className:"num",children:"30"})]})]},p.id)):e.jsx(xi,{children:"등록된 리뷰가 없습니다."})}),e.jsx(ht,{total:t.total,page:s,setPage:a})]})]})},pl=h.div`
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  & {
    padding: 12px 0 54px;
  }
  & li {
    padding: 24px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  & .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`,xl=({boothListData:t})=>e.jsx(pl,{children:e.jsxs("ul",{children:[(t==null?void 0:t.items)&&(t==null?void 0:t.items.map(s=>e.jsx("li",{children:e.jsx("span",{className:"text",children:s.name})},s.id))),(t==null?void 0:t.items.length)<=0&&e.jsx("li",{children:e.jsx("span",{children:"참여기업 리스트가 없습니다."})})]})}),hl=({reviewData:t,boothListData:s,page:a,setPage:n,setSortType:l})=>{const[c,p]=i.useState("review");return e.jsxs(Qr,{children:[e.jsxs(Kr,{children:[e.jsx("button",{onClick:()=>p("review"),className:c==="review"?"active":"",children:"리뷰"}),e.jsx("button",{onClick:()=>p("company"),className:c==="company"?"active":"",children:"참여 기업"})]}),e.jsxs(Jr,{children:[c==="review"&&e.jsx(cl,{reviewData:t,page:a,setPage:n,setSortType:l}),c==="company"&&e.jsx(xl,{boothListData:s.data})]})]})},ml=()=>{const{id:t}=le(),s=localStorage.getItem("token"),a=localStorage.getItem("user_id"),n=localStorage.getItem("name"),[l,c]=i.useState(1),[p,r]=i.useState(1),[o,f]=i.useState(!0),{data:m,isLoading:g,error:j}=ot(1,s),{data:d,isLoading:u,isError:C}=xt(t,s),{data:N,isLoading:k,isError:V}=Na({token:s,user_id:a,event_id:JSON.parse(t),page:l,sort_type:p}),{data:S,isLoading:H,isError:v}=Tt(t,s);return i.useEffect(()=>{d&&f(!d.data.applied)},[d,o]),g||u||k||H?e.jsx(ve,{}):j||C||V||v?e.jsx("div",{children:"데이터 없음"}):e.jsxs(kr,{className:"maxframe",children:[e.jsxs(Hr,{children:[e.jsxs(Sr,{children:[e.jsx(Pt,{thumnaildata:d.data,applyBtn:o}),e.jsx(Ur,{contentdata:d.data})]}),e.jsx(Er,{children:e.jsx(hl,{reviewData:N,boothListData:S,page:l,setPage:c,setSortType:r})})]}),e.jsx(lt,{title:`AI 메이트가 맞추는 '${JSON.parse(n)}' 님의 취향저격 전시`,eventList:m.data.items})]})},gl=h.div`
  line-height: 1.2;
  & h3 {
    font-size: 32px;
    padding: 97px 32px 32px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
      padding: 40px 12px 16px;
    }
  }
  & .field {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & .input_box {
      background-color: rgba(18, 18, 18, 1);
      border-radius: 10px;
      padding: 32px 67px 32px 46px;
      @media (max-width: 1024px) {
        padding: 20px 12px;
      }
      & .mt_16 {
        margin-top: 20px;
      }
    }

    & .InputCheckboxA {
      padding: 10px 0;
    }
    & .InputCheckboxA label {
      font-size: 24px;
      padding-left: 37px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }

    & .requird {
      color: #fff;
      width: 100%;
      padding: 10px 15px;
      display: block;
      font-size: 24px;
      font-weight: 500;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }
`,fl=h.div`
  background-color: rgba(18, 18, 18, 1);
  border-radius: 10px;
  padding: 32px 46px;
  @media (max-width: 1024px) {
    padding: 20px 12px;
  }
  & .title_area {
    margin-top: 20px;
  }
  & .title_area .tit {
    display: block;
    font-size: 24px;
    margin-bottom: 17px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .sub {
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .download_btn {
    max-width: 532px;
    width: 100%;
    margin: 17px 0 19px;
    padding: 10px 0;
    border-radius: 10px;
    width: 100%;
    color: #fff;
    background-color: rgba(49, 111, 233, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    @media (max-width: 1024px) {
      max-width: 100%;
    }
    & .icon {
      width: 15px;
      height: 15px;
      & svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  & .alret_chang {
    max-width: 532px;
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(49, 111, 233, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    @media (max-width: 1024px) {
      font-size: 12px;
      max-width: 100%;
    }
    & .icon {
      width: 10px;
      height: 10px;
      & svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    & .txt {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }
  }

  & .agree {
    margin: 23px 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & label {
      font-size: 14px;
    }
  }

  & .upload {
    & input {
      display: none;
    }
    & .label {
      padding: 20px 10px;
      display: block;
      max-width: 532px;
      width: 100%;
      border-radius: 10px;
      background-color: rgba(248, 250, 251, 0.2);
      margin-top: 15px;
      @media (max-width: 1024px) {
        max-width: 100%;
      }
      & span {
        padding: 10px 0;
        max-width: 240px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: block;
        font-size: 16px;
        font-weight: 500;
      }
      & span.btn {
        border-radius: 50rem;
        color: rgba(9, 51, 140, 1);
        background-color: #fff;
      }
      & span.txt {
        color: #fff;
      }
    }
  }
`,ul=t=>i.createElement("svg",{width:15,height:15,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M7.96837 6.09375C7.96837 5.96943 7.91898 5.8502 7.83107 5.76229C7.74317 5.67439 7.62394 5.625 7.49962 5.625C7.3753 5.625 7.25607 5.67439 7.16816 5.76229C7.08025 5.8502 7.03087 5.96943 7.03087 6.09375V9.64969L5.95649 8.57438C5.91291 8.53079 5.86117 8.49622 5.80423 8.47263C5.74728 8.44905 5.68625 8.43691 5.62462 8.43691C5.56298 8.43691 5.50195 8.44905 5.44501 8.47263C5.38806 8.49622 5.33632 8.53079 5.29274 8.57438C5.24916 8.61796 5.21459 8.6697 5.191 8.72664C5.16741 8.78358 5.15527 8.84462 5.15527 8.90625C5.15527 8.96789 5.16741 9.02892 5.191 9.08586C5.21459 9.1428 5.24916 9.19454 5.29274 9.23813L7.16774 11.1131C7.21128 11.1568 7.26301 11.1914 7.31996 11.215C7.37691 11.2387 7.43796 11.2508 7.49962 11.2508C7.56127 11.2508 7.62232 11.2387 7.67927 11.215C7.73622 11.1914 7.78795 11.1568 7.83149 11.1131L9.70649 9.23813C9.75007 9.19454 9.78465 9.1428 9.80823 9.08586C9.83182 9.02892 9.84396 8.96789 9.84396 8.90625C9.84396 8.84462 9.83182 8.78358 9.80823 8.72664C9.78465 8.6697 9.75007 8.61796 9.70649 8.57438C9.66291 8.53079 9.61117 8.49622 9.55423 8.47263C9.49728 8.44905 9.43625 8.43691 9.37462 8.43691C9.31298 8.43691 9.25195 8.44905 9.19501 8.47263C9.13806 8.49622 9.08632 8.53079 9.04274 8.57438L7.96837 9.64969V6.09375Z",fill:"white"}),i.createElement("path",{d:"M13.125 13.125V4.21875L8.90625 0H3.75C3.25272 0 2.77581 0.197544 2.42417 0.549175C2.07254 0.900806 1.875 1.37772 1.875 1.875V13.125C1.875 13.6223 2.07254 14.0992 2.42417 14.4508C2.77581 14.8025 3.25272 15 3.75 15H11.25C11.7473 15 12.2242 14.8025 12.5758 14.4508C12.9275 14.0992 13.125 13.6223 13.125 13.125ZM8.90625 2.8125C8.90625 3.18546 9.05441 3.54315 9.31813 3.80687C9.58185 4.07059 9.93954 4.21875 10.3125 4.21875H12.1875V13.125C12.1875 13.3736 12.0887 13.6121 11.9129 13.7879C11.7371 13.9637 11.4986 14.0625 11.25 14.0625H3.75C3.50136 14.0625 3.2629 13.9637 3.08709 13.7879C2.91127 13.6121 2.8125 13.3736 2.8125 13.125V1.875C2.8125 1.62636 2.91127 1.3879 3.08709 1.21209C3.2629 1.03627 3.50136 0.9375 3.75 0.9375H8.90625V2.8125Z",fill:"white"})),Ti=t=>i.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_724_46867)"},i.createElement("path",{d:"M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM8.93 6.588L7.93 11.293C7.86 11.633 7.959 11.826 8.234 11.826C8.428 11.826 8.721 11.756 8.92 11.58L8.832 11.996C8.545 12.342 7.912 12.594 7.367 12.594C6.664 12.594 6.365 12.172 6.559 11.275L7.297 7.807C7.361 7.514 7.303 7.408 7.01 7.337L6.559 7.256L6.641 6.875L8.931 6.588H8.93ZM8 5.5C7.73478 5.5 7.48043 5.39464 7.29289 5.20711C7.10536 5.01957 7 4.76522 7 4.5C7 4.23478 7.10536 3.98043 7.29289 3.79289C7.48043 3.60536 7.73478 3.5 8 3.5C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5C9 4.76522 8.89464 5.01957 8.70711 5.20711C8.51957 5.39464 8.26522 5.5 8 5.5Z",fill:"#EEEEEE"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_724_46867"},i.createElement("rect",{width:16,height:16,fill:"white"})))),Pi=({EventApplyInformation:t,applyType:s,setApplyType:a,applyList:n,register:l,errors:c,setValue:p,isEdit:r,editData:o})=>{var V,S,H,v,x,w,Z,_,T,M,z,$,L,I,E,F;const[f,m]=i.useState(!1),[g,j]=i.useState();i.useEffect(()=>{p("type",s),r&&(p("type",o==null?void 0:o.type),p("name",o==null?void 0:o.name),p("email",o==null?void 0:o.email),p("contact",o==null?void 0:o.contact),p("contact",o==null?void 0:o.contact),o!=null&&o.information&&o.information.forEach(B=>{p(`${B.name}`,B.answer)}))},[o,r,s]);const d=B=>{Ct(B,p,"contact")},u=B=>{j(B),B&&p("xlsx",B)},C=i.useCallback(B=>{B.preventDefault(),B.stopPropagation();const W=B.dataTransfer.files;W&&W.length>0&&u(W[0])},[]),N=i.useCallback(B=>{B.preventDefault()},[]),k=(B,W,se)=>{if(B===1)return"무료";if(B===2)return`사전신청 무료 / 현장구매 유료(${G(String(se))})`;if(B===3)return`사전 신청 무료 / 기간 한정 유료(${G(String(W))}) / 현장 구매 시 유료(${G(String(se))})`;if(B===4)return`사전 신청 유료(${G(String(W))}) / 현장 결제 유료(${G(String(se))})`;if(B===5)return`유료(${G(String(se))})`};return e.jsxs(gl,{children:[e.jsx("div",{className:"field",children:e.jsxs("div",{className:"input_box",children:[e.jsx(ln,{label:"신청 유형",required:!1,optionList:n,setTarget:a}),e.jsx("div",{className:"requird mt_16",children:k((V=t==null?void 0:t.data)==null?void 0:V.payable_type,(S=t==null?void 0:t.data)==null?void 0:S.payable_price1,(H=t==null?void 0:t.data)==null?void 0:H.payable_price2)})]})}),e.jsx("h3",{children:"신청자 기본정보"}),e.jsxs("div",{className:"field",children:[e.jsxs("div",{className:"input_box",children:[e.jsx(nt,{label:"이름",type:"text",id:"name",register:l,required:!0}),((v=c.name)==null?void 0:v.message)&&e.jsx("p",{className:"err_msg",children:(w=(x=c.name)==null?void 0:x.message)==null?void 0:w.toString()})]}),e.jsxs("div",{className:"input_box",children:[e.jsx(nt,{label:"이메일",type:"text",id:"email",register:l,required:!0}),((Z=c.email)==null?void 0:Z.message)&&e.jsx("p",{className:"err_msg",children:(T=(_=c.email)==null?void 0:_.message)==null?void 0:T.toString()})]}),e.jsxs("div",{className:"input_box",children:[e.jsx(nt,{label:"휴대전화번호",type:"text",id:"contact",register:l,required:!0,onChange:d}),((M=c.contact)==null?void 0:M.message)&&e.jsx("p",{className:"err_msg",children:($=(z=c.contact)==null?void 0:z.message)==null?void 0:$.toString()})]}),(L=t==null?void 0:t.data)==null?void 0:L.information.map(B=>e.jsx("div",{className:"input_box",children:e.jsx(nt,{label:B.name,type:"text",id:B.name,required:B.required,register:l})},B.id))]}),s===1&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{children:"단체신청"}),e.jsxs(fl,{children:[e.jsxs("div",{className:"input_box",children:[e.jsx(nt,{label:"단체명",type:"text",id:"group",required:!0,register:l}),((I=c.group)==null?void 0:I.message)&&e.jsx("p",{className:"err_msg",children:(F=(E=c.group)==null?void 0:E.message)==null?void 0:F.toString()})]}),e.jsxs("div",{className:"title_area",children:[e.jsx("span",{className:"tit",children:"참가자 엑셀 등록하기"}),e.jsx("span",{className:"sub",children:"엑셀 양식으로 업로드하여 한번에 참가자를 등록할 수 있습니다. (지원 파일 양식 : xlsx)"})]}),e.jsxs("button",{type:"button",className:"download_btn",children:[e.jsx("span",{className:"icon",children:e.jsx(ul,{})}),e.jsx("span",{className:"txt",children:e.jsx("a",{href:"/host/downloadFile/[마이스메이트]참가자리스트_엑셀추가하기.xlsx",download:"[마이스메이트]참가자리스트_엑셀추가하기.xlsx",children:"엑셀 양식 내려받기"})})]}),e.jsxs("p",{className:"alret_chang",children:[e.jsx("span",{className:"icon",children:e.jsx(Ti,{})}),e.jsx("span",{className:"txt",children:"정보/그룹을 수정한 경우 새로운 양식으로 등록해주세요."})]}),e.jsxs("div",{className:"agree",children:[e.jsx("p",{className:"sub",children:"개인정보 보호를 위해 제3자 제공 동의가 완료된 참가자 명단을 등록할 수 있습니다."}),e.jsx(Ve,{label:"네, 제3자 제공 동의를 받은 개인 정보입니다.",id:"excel_agree",register:l,onChange:B=>{const W=B.target;m(W.checked)}})]}),e.jsx("p",{className:"sub",children:"엑셀 양식을 업로드해주세요."}),e.jsxs("div",{onDrop:C,onDragOver:N,className:"upload",children:[e.jsxs("label",{htmlFor:"excelUpload",className:"label",children:[e.jsx("span",{className:"btn",children:"업로드 파일 선택"}),e.jsx("span",{className:"txt",children:g?g==null?void 0:g.name:"또는 여기에 끌어서 놓기"})]}),e.jsx("input",{type:"file",id:"excelUpload",...l("xlsx"),disabled:!f,style:{display:"none"},onChange:B=>u(B.target.files?B.target.files[0]:null)})]})]})]})]})},bl=h.div`
  width: 100%;
  padding: 48px 16px 64px;
  background-color: rgba(18, 18, 18, 1);
  border-radius: 5px;
  @media (max-width: 1024px) {
    padding: 32px 16px 40px;
  }
  & h3 {
    padding-left: 20px;
    font-weight: 700;
    font-size: 32px;
    @media (max-width: 1024px) {
      padding-left: 0;
      font-size: 20px;
    }
  }
  & .apply_desc {
    padding: 37px 30px 46px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1024px) {
      padding: 16px 0 40px;
    }
  }
  & .apply_desc .type {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    & .tit {
      font-size: 24px;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    & .info {
      font-weight: 700;
      font-size: 32px;
      @media (max-width: 1024px) {
        font-size: 24px;
      }
    }
  }
  & .all_chk {
    padding: 0 20px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      padding: 0 0 16px;
    }
  }
  & .all_chk label {
    padding-left: 35px;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
  & .agree_list {
    padding: 42px 20px 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px) {
      padding: 20px 0 60px;
    }
  }
  & .agree_list label {
    padding-left: 35px;
  }
  & .agree_list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .link a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
  }

  & .submit_btn {
    text-align: center;
    & button {
      min-width: 290px;
      padding: 20px 10px;
      background-color: rgba(49, 111, 233, 1);
      border-radius: 50rem;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
  }
`,Zi=({applyType:t,register:s,setValue:a,watch:n})=>{const l=["agree1","agree2","agree3","agree4"],p=n(l).every(Boolean),r=o=>{l.forEach(f=>a(f,o))};return i.useEffect(()=>{a("allAgree",p)},[p,a]),e.jsxs(bl,{children:[e.jsx("h3",{children:"신청 내용"}),e.jsxs("div",{className:"apply_desc",children:[e.jsxs("div",{className:"type",children:[e.jsx("span",{className:"tit",children:"신청 유형"}),e.jsx("span",{className:"info",children:t===0?"개인 신청":"단체 신청"})]}),e.jsxs("div",{className:"type",children:[e.jsx("span",{className:"tit",children:"신청 비용"}),e.jsx("span",{className:"info",children:"사전등록 무료"})]})]}),e.jsx("div",{className:"all_chk",children:e.jsx(Ve,{label:"전체 동의하기",id:"allChk",register:s,checked:p,onChange:o=>{const f=o.target;r(f.checked)}})}),e.jsxs("div",{className:"agree_list",children:[e.jsxs("div",{children:[e.jsx(Ve,{label:"(필수) 성별 생년 정보 제공 동의",id:"agree1",register:s}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/gender-birth-information",target:"blank_",children:"자세히 보기"})})]}),e.jsxs("div",{children:[e.jsx(Ve,{label:"(필수) 개인정보 수집 이용 동의",id:"agree2",register:s}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/personal-information",target:"blank_",children:"자세히 보기"})})]}),e.jsxs("div",{children:[e.jsx(Ve,{label:"(필수) 제 3자 제공 동의",id:"agree3",register:s}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/onward-transfer",target:"blank_",children:"자세히 보기"})})]}),e.jsxs("div",{children:[e.jsx(Ve,{label:"(선택) 마케팅 정보 수신 동의",id:"agree4",register:s}),e.jsx("p",{className:"link",children:e.jsx(b,{to:"/markeyting-information",target:"blank_",children:"자세히 보기"})})]})]}),e.jsx("div",{className:"submit_btn",children:e.jsx("button",{type:"submit",disabled:!(n("agree1")&&n("agree2")&&n("agree3")),children:"사전 신청하기"})})]})},$i=h.div``,Ii=h.form`
  padding: 26px 80px 170px;
  display: flex;
  gap: 55px;
  @media (max-width: 1650px) {
    padding: 26px 30px 170px;
    gap: 20px;
  }
  @media (max-width: 1300px) {
    padding: 26px 20px 170px;
    gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px 84px;
    flex-direction: column;
  }
`,Oi=h.div`
  max-width: 1204px;
  width: 100%;
`,qi=h.div``,Ri=h.div`
  width: 477px;
  min-width: 380px;
  color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
  }
`,_l=t=>{if(t===0)return[{type:0,value:"개인 신청"}];if(t===1)return[{type:1,value:"단체 신청"}];if(t===2)return[{type:0,value:"개인 신청"},{type:1,value:"단체 신청"}]},jl=(t,s)=>{var l;const a={type:Ne().default(0),name:P().trim().min(1,"이름을 입력해 주세요."),email:P().trim().min(1,"이메일을 입력해 주세요.").email({message:"올바른 이메일을 입력해주세요."}),contact:P().trim().min(1,"전화번호를 입력해 주세요."),group:t===1||t===2?P().min(1,"단체명은 필수입니다."):P().optional(),xlsx:t===1||t===2?fi(File).refine(c=>c&&["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/haansoftxlsx"].includes(c.type),{message:"엑셀 파일(.xlsx 또는 .xls) 형식만 업로드 가능합니다."}):ee().optional(),excel_agree:t===1||t===2?ee():ee().optional(),allChk:ee().optional(),agree1:ee(),agree2:ee(),agree3:ee(),agree4:ee().default(!1).optional()},n=(((l=s==null?void 0:s.data)==null?void 0:l.information)||[]).reduce((c,p)=>(c[p.name]=p.required?P().min(1,`${p.name}은(는) 필수입니다.`):P().optional(),c),{});return Se({...a,...n})},wl=()=>{const[t,s]=i.useState(0),[a,n]=i.useState([]),l=D(),{id:c}=le(),p=localStorage.getItem("token"),r=Ai(),{data:o}=Vi(c,p),f=!1,m=jl(t,o),{setValue:g,register:j,handleSubmit:d,watch:u,formState:{errors:C}}=he({resolver:He(m)});i.useEffect(()=>{var H,v,x,w;o&&(((H=o==null?void 0:o.data)==null?void 0:H.application_type)===2?s(0):((v=o==null?void 0:o.data)==null?void 0:v.application_type)>2&&s((x=o==null?void 0:o.data)==null?void 0:x.application_type),n(_l((w=o==null?void 0:o.data)==null?void 0:w.application_type)))},[o]);const{data:N,isLoading:k,isError:V}=xt(c,p);if(k)return e.jsx(ve,{});if(V)return e.jsx("div",{children:"데이터 없음"});const S=d(H=>{var T;const v=new FormData,x=(M,z)=>{z!=null&&!(z instanceof File&&z.size===0)&&v.append(M,z)};x("type",H.type),x("name",H.name),x("email",H.email),x("contact",H.contact),x("group",H.group),x("xlsx",H.xlsx);const w={},Z={},_={5:H.agree1,6:H.agree2,7:H.agree3,8:H.agree4};(T=o==null?void 0:o.data)!=null&&T.information&&o.data.information.forEach(M=>{H[M.name]!==void 0&&(w[M.id]=H[M.name])}),x("information",JSON.stringify(Object.keys(w).length?w:[])),x("surveys",JSON.stringify(Object.keys(Z).length?Z:[])),x("terms_of_uses",JSON.stringify(Object.keys(_).length?_:[])),r.mutate({token:p,event_id:c,data:v},{onSuccess:()=>{l("/detail/finish")},onError:M=>{console.log(M)}})});return e.jsx($i,{className:"maxframe",children:e.jsxs(Ii,{onSubmit:S,children:[e.jsxs(Oi,{children:[e.jsx(Pt,{thumnaildata:N.data,applyBtn:!1}),e.jsx(qi,{children:e.jsx(Pi,{register:j,applyType:t,setApplyType:s,applyList:a,errors:C,setValue:g,EventApplyInformation:o,isEdit:f})})]}),e.jsx(Ri,{children:e.jsx(Zi,{watch:u,setValue:g,register:j,applyType:t})})]})})},vl=t=>{if(t===0)return[{type:0,value:"개인 신청"}];if(t===1)return[{type:1,value:"단체 신청"}];if(t===2)return[{type:0,value:"개인 신청"},{type:1,value:"단체 신청"}]},yl=(t,s)=>{var l;const a={type:Ne().default(0),name:P().trim().min(1,"이름을 입력해 주세요."),email:P().trim().min(1,"이메일을 입력해 주세요.").email({message:"올바른 이메일을 입력해주세요."}),contact:P().trim().min(1,"전화번호를 입력해 주세요."),group:t===1||t===2?P().min(1,"단체명은 필수입니다."):P().optional(),xlsx:t===1||t===2?fi(File).refine(c=>c&&["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/haansoftxlsx"].includes(c.type),{message:"엑셀 파일(.xlsx 또는 .xls) 형식만 업로드 가능합니다."}):ee().optional(),excel_agree:t===1||t===2?ee():ee().optional(),allChk:ee().optional(),agree1:ee(),agree2:ee(),agree3:ee(),agree4:ee().default(!1).optional()},n=(((l=s==null?void 0:s.data)==null?void 0:l.information)||[]).reduce((c,p)=>(c[p.name]=p.required?P().min(1,`${p.name}은(는) 필수입니다.`):P().optional(),c),{});return Se({...a,...n})},Cl=()=>{const t=D(),{id:s}=le(),a=localStorage.getItem("token"),[n,l]=i.useState(0),[c,p]=i.useState([]),r=Ai(),{data:o}=Vi(s,a),f=!0,{data:m}=Ca(s,a),g=yl(n,o),{setValue:j,register:d,handleSubmit:u,watch:C,formState:{errors:N}}=he({resolver:He(g)});i.useEffect(()=>{var v,x;o&&(l((v=o==null?void 0:o.data)==null?void 0:v.application_type),p(vl((x=o==null?void 0:o.data)==null?void 0:x.application_type)))},[o]);const{data:k,isLoading:V,isError:S}=xt(s,a);if(V)return e.jsx(ve,{});if(S)return e.jsx("div",{children:"데이터 없음"});const H=u(v=>{var M;const x=new FormData,w=(z,$)=>{$!=null&&!($ instanceof File&&$.size===0)&&x.append(z,$)};w("type",v==null?void 0:v.type),w("name",v==null?void 0:v.name),w("email",v==null?void 0:v.email),w("contact",v==null?void 0:v.contact),w("group",v==null?void 0:v.group),w("xlsx",v!=null&&v.xlsx?v.xlsx[0]:void 0);const Z={},_={},T={5:v==null?void 0:v.agree1,6:v==null?void 0:v.agree2,7:v==null?void 0:v.agree3,8:v==null?void 0:v.agree4};(M=o==null?void 0:o.data)!=null&&M.information&&o.data.information.forEach(z=>{v[z.name]!==void 0&&(Z[z.id]=v[z.name])}),w("information",JSON.stringify(Object.keys(Z).length?Z:[])),w("surveys",JSON.stringify(Object.keys(_).length?_:[])),w("terms_of_uses",JSON.stringify(Object.keys(T).length?T:[])),r.mutate({token:a,event_id:s,data:x},{onSuccess:()=>{var z,$,L;((z=o==null?void 0:o.data)==null?void 0:z.payable_type)===1||(($=o==null?void 0:o.data)==null?void 0:$.payable_type)===2?t("/detail/finish"):window.open((L=o==null?void 0:o.data)==null?void 0:L.payable_price_url)},onError:z=>{console.log(z)}})});return e.jsx($i,{className:"maxframe",children:e.jsxs(Ii,{onSubmit:H,children:[e.jsxs(Oi,{children:[e.jsx(Pt,{thumnaildata:k==null?void 0:k.data,applyBtn:!1}),e.jsx(qi,{children:e.jsx(Pi,{register:d,applyType:n,setApplyType:l,applyList:c,errors:N,setValue:j,EventApplyInformation:o,isEdit:f,editData:m==null?void 0:m.data})})]}),e.jsx(Ri,{children:e.jsx(Zi,{watch:C,setValue:j,register:d,applyType:n})})]})})},Nl=t=>i.createElement("svg",{width:283,height:69,viewBox:"0 0 283 69",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("path",{d:"M282.338 68.0001H254.285V30.6667H281.645V38.4534H263.565V45.2801H279.565V52.8534H263.565V60.1601H282.338V68.0001Z",fill:"white"}),i.createElement("path",{d:"M220.211 38.6134V30.6667H251.624V38.6134H240.584V68.0001H231.304V38.6134H220.211Z",fill:"white"}),i.createElement("path",{d:"M196.112 60.4801L193.232 68.0001H183.685L199.472 30.6667H208.645L224.379 68.0001H214.672L211.792 60.4801H196.112ZM203.952 40.2134L199.045 53.0667H208.859L203.952 40.2134Z",fill:"white"}),i.createElement("path",{d:"M173.331 47.4667L163.731 64.2667H159.571L150.077 48.0001V68.0001H141.384V30.6667H149.064L161.811 52.7467L174.344 30.6667H182.024L182.077 68.0001H173.384L173.331 47.4667Z",fill:"white"}),i.createElement("path",{d:"M126.479 68.0001H98.4255V30.6667H125.786V38.4534H107.706V45.2801H123.706V52.8534H107.706V60.1601H126.479V68.0001Z",fill:"white"}),i.createElement("path",{d:"M79.8737 68.6934C76.2114 68.6934 72.9048 67.8756 69.9537 66.2401C67.0025 64.569 64.6914 62.2579 63.0203 59.3067C61.3492 56.3556 60.5137 53.0312 60.5137 49.3334C60.5137 45.6356 61.3492 42.3112 63.0203 39.3601C64.727 36.409 67.0559 34.1156 70.007 32.4801C72.9581 30.809 76.2648 29.9734 79.927 29.9734C83.0914 29.9734 85.9537 30.5778 88.5137 31.7867C91.1092 32.9601 93.2426 34.649 94.9137 36.8534L88.9403 42.6134C86.6292 39.6978 83.7848 38.2401 80.407 38.2401C78.3803 38.2401 76.567 38.7023 74.967 39.6267C73.4025 40.5512 72.1759 41.8667 71.287 43.5734C70.3981 45.2445 69.9537 47.1645 69.9537 49.3334C69.9537 51.5023 70.3981 53.4223 71.287 55.0934C72.1759 56.7645 73.4025 58.0623 74.967 58.9867C76.567 59.9112 78.3803 60.3734 80.407 60.3734C83.8203 60.3734 86.6648 58.9156 88.9403 56.0001L94.9137 61.7601C93.2426 64.0001 91.1092 65.7245 88.5137 66.9334C85.9537 68.1067 83.0737 68.6934 79.8737 68.6934Z",fill:"white"}),i.createElement("path",{d:"M56.4453 30.6667V68.0001H47.1653V30.6667H56.4453Z",fill:"white"}),i.createElement("path",{d:"M32.3307 47.4667L22.7307 64.2667H18.5708L9.07742 48.0001V68.0001H0.384083V30.6667H8.06408L20.8107 52.7467L33.3441 30.6667H41.0241L41.0774 68.0001H32.3841L32.3307 47.4667Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M282.338 68.0001V60.1601H263.565V52.8534H279.565V45.2801H263.565V38.4534H281.645V30.6667H254.285V68.0001H282.338ZM263.765 38.6534H281.845V30.4667H254.085V68.2001H282.538V59.9601H263.765V53.0534H279.765V45.0801H263.765V38.6534Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M220.211 38.6134H231.304V68.0001H240.584V38.6134H251.624V30.6667H220.211V38.6134ZM240.784 38.8134H251.824V30.4667H220.011V38.8134H231.104V68.2001H240.784V38.8134Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M193.232 68.0001L196.112 60.4801H211.792L214.672 68.0001H224.379L208.645 30.6667H199.472L183.685 68.0001H193.232ZM211.654 60.6801L214.534 68.2001H224.68L208.778 30.4667H199.339L183.384 68.2001H193.37L196.25 60.6801H211.654ZM203.952 40.2134L208.859 53.0667H199.045L203.952 40.2134ZM203.952 40.7742L199.336 52.8667H208.568L203.952 40.7742Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M173.331 47.4667L173.384 68.0001H182.077L182.024 30.6667H174.344L161.811 52.7467L149.064 30.6667H141.384V68.0001H150.077V48.0001L159.571 64.2667H163.731L173.331 47.4667ZM173.133 48.2165L173.185 68.2001H182.278L182.224 30.4667H174.228L161.809 52.3442L149.18 30.4667H141.184V68.2001H150.277V48.7396L159.456 64.4667H163.847L173.133 48.2165Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M126.479 68.0001V60.1601H107.706V52.8534H123.706V45.2801H107.706V38.4534H125.786V30.6667H98.4255V68.0001H126.479ZM107.906 38.6534H125.986V30.4667H98.2255V68.2001H126.679V59.9601H107.906V53.0534H123.906V45.0801H107.906V38.6534Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M69.8567 66.415L69.8551 66.4141C66.8725 64.7251 64.5353 62.3879 62.8463 59.4053C61.1567 56.4214 60.3137 53.0625 60.3137 49.3334C60.3137 45.6043 61.1567 42.2454 62.8463 39.2615L62.8472 39.2599C64.5717 36.278 66.9266 33.9587 69.9095 32.3054C72.8928 30.6164 76.2335 29.7734 79.927 29.7734C83.1168 29.7734 86.0082 30.3827 88.5975 31.6051C91.2218 32.7918 93.3815 34.5012 95.073 36.7326L95.1803 36.8741L88.9205 42.9104L88.7836 42.7376C86.506 39.8644 83.717 38.4401 80.407 38.4401C78.4124 38.4401 76.6345 38.8945 75.068 39.7993C73.538 40.7036 72.3369 41.9905 71.4644 43.6658L71.4636 43.6673C70.5922 45.3055 70.1537 47.1925 70.1537 49.3334C70.1537 51.4744 70.5922 53.3613 71.4636 54.9995C72.3358 56.6393 73.5369 57.9092 75.068 58.8141C76.6345 59.719 78.4124 60.1734 80.407 60.1734C83.753 60.1734 86.5414 58.7487 88.7827 55.877L88.9193 55.702L95.1793 61.7384L95.074 61.8797C93.3826 64.1469 91.2229 65.8922 88.5981 67.1147L88.597 67.1152C86.0075 68.3021 83.0985 68.8934 79.8737 68.8934C76.1805 68.8934 72.84 68.0684 69.8567 66.415ZM74.967 58.9867C73.4025 58.0623 72.1759 56.7645 71.287 55.0934C70.3981 53.4223 69.9537 51.5023 69.9537 49.3334C69.9537 47.1645 70.3981 45.2445 71.287 43.5734C72.1759 41.8667 73.4025 40.5512 74.967 39.6267C76.567 38.7023 78.3803 38.2401 80.407 38.2401C83.7238 38.2401 86.5263 39.6457 88.8146 42.4568C88.8567 42.5085 88.8986 42.5607 88.9403 42.6134L94.9137 36.8534C93.2426 34.649 91.1092 32.9601 88.5137 31.7867C85.9537 30.5778 83.0914 29.9734 79.927 29.9734C76.2648 29.9734 72.9581 30.809 70.007 32.4801C67.0559 34.1156 64.727 36.409 63.0203 39.3601C61.3492 42.3112 60.5137 45.6356 60.5137 49.3334C60.5137 53.0312 61.3492 56.3556 63.0203 59.3067C64.6914 62.2579 67.0025 64.569 69.9537 66.2401C72.9048 67.8756 76.2114 68.6934 79.8737 68.6934C83.0737 68.6934 85.9537 68.1067 88.5137 66.9334C91.1092 65.7245 93.2426 64.0001 94.9137 61.7601L88.9403 56.0001C88.899 56.0531 88.8574 56.1056 88.8156 56.1577C86.5611 58.9682 83.7583 60.3734 80.407 60.3734C78.3803 60.3734 76.567 59.9112 74.967 58.9867Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M56.4453 30.6667H47.1653V68.0001H56.4453V30.6667ZM56.6453 30.4667V68.2001H46.9653V30.4667H56.6453Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32.3307 47.4667L32.3841 68.0001H41.0774L41.0241 30.6667H33.3441L20.8107 52.7467L8.06408 30.6667H0.384083V68.0001H9.07742V48.0001L18.5708 64.2667H22.7307L32.3307 47.4667ZM32.1327 48.2164L32.1846 68.2001H41.2777L41.2238 30.4667H33.2276L20.8093 52.3442L8.17956 30.4667H0.184082V68.2001H9.27741V48.7396L18.4559 64.4667H22.8468L32.1327 48.2164Z",fill:"white"}),i.createElement("path",{d:"M179.241 14.9467V2.4134H195.428V3.1334H179.935V8.30674H195.268V9.02674H179.935V14.2267H195.801V14.9467H179.241ZM196.895 20.6534H177.695V19.9601H196.895V20.6534Z",fill:"white"}),i.createElement("path",{d:"M173.431 21.9067V1.42674H174.178V21.9067H173.431ZM163.351 2.12007C164.453 2.12007 165.431 2.46674 166.284 3.16007C167.138 3.8534 167.804 4.8934 168.284 6.28007C168.764 7.66674 169.004 9.38229 169.004 11.4267C169.004 13.4712 168.764 15.1867 168.284 16.5734C167.804 17.9601 167.138 19.0001 166.284 19.6934C165.431 20.3867 164.453 20.7334 163.351 20.7334C162.231 20.7334 161.244 20.3867 160.391 19.6934C159.538 19.0001 158.871 17.9601 158.391 16.5734C157.911 15.1867 157.671 13.4712 157.671 11.4267C157.671 9.38229 157.911 7.66674 158.391 6.28007C158.871 4.8934 159.538 3.8534 160.391 3.16007C161.244 2.46674 162.231 2.12007 163.351 2.12007ZM163.351 2.84007C162.391 2.84007 161.538 3.16007 160.791 3.80007C160.044 4.44007 159.458 5.40896 159.031 6.70674C158.604 7.98674 158.391 9.56007 158.391 11.4267C158.391 13.2934 158.604 14.8756 159.031 16.1734C159.458 17.4534 160.044 18.4134 160.791 19.0534C161.538 19.6934 162.391 20.0134 163.351 20.0134C164.293 20.0134 165.129 19.6934 165.858 19.0534C166.586 18.4134 167.164 17.4534 167.591 16.1734C168.018 14.8756 168.231 13.2934 168.231 11.4267C168.231 9.56007 168.018 7.98674 167.591 6.70674C167.164 5.40896 166.586 4.44007 165.858 3.80007C165.129 3.16007 164.293 2.84007 163.351 2.84007Z",fill:"white"}),i.createElement("path",{d:"M153.567 21.9067H152.82V1.42674H153.567V21.9067ZM149.034 1.56007V21.5601H148.287V11.0801H144.18V20.4134H136.314V2.4134H144.18V10.3867H148.287V1.56007H149.034ZM137.034 3.1334V19.7201H143.434V3.1334H137.034Z",fill:"white"}),i.createElement("path",{d:"M123.543 7.2934C122.441 9.35563 121.108 11.009 119.543 12.2534C117.979 13.4978 116.37 14.1201 114.716 14.1201V13.4001C116.192 13.4001 117.614 12.8578 118.983 11.7734C120.37 10.6712 121.561 9.22229 122.556 7.42674C123.57 5.63118 124.299 3.71118 124.743 1.66674L125.516 1.90674C125.108 3.63118 124.548 5.22229 123.836 6.68007L132.69 13.6401L132.236 14.1467L123.543 7.2934ZM133.543 19.9601V20.6534H114.343V19.9601H133.543Z",fill:"white"}),i.createElement("path",{d:"M110.079 21.9067V1.42674H110.826V21.9067H110.079ZM99.9993 2.12007C101.102 2.12007 102.079 2.46674 102.933 3.16007C103.786 3.8534 104.453 4.8934 104.933 6.28007C105.413 7.66674 105.653 9.38229 105.653 11.4267C105.653 13.4712 105.413 15.1867 104.933 16.5734C104.453 17.9601 103.786 19.0001 102.933 19.6934C102.079 20.3867 101.102 20.7334 99.9993 20.7334C98.8793 20.7334 97.8926 20.3867 97.0393 19.6934C96.186 19.0001 95.5193 17.9601 95.0393 16.5734C94.5593 15.1867 94.3193 13.4712 94.3193 11.4267C94.3193 9.38229 94.5593 7.66674 95.0393 6.28007C95.5193 4.8934 96.186 3.8534 97.0393 3.16007C97.8926 2.46674 98.8793 2.12007 99.9993 2.12007ZM99.9993 2.84007C99.0393 2.84007 98.186 3.16007 97.4393 3.80007C96.6926 4.44007 96.106 5.40896 95.6793 6.70674C95.2526 7.98674 95.0393 9.56007 95.0393 11.4267C95.0393 13.2934 95.2526 14.8756 95.6793 16.1734C96.106 17.4534 96.6926 18.4134 97.4393 19.0534C98.186 19.6934 99.0393 20.0134 99.9993 20.0134C100.942 20.0134 101.777 19.6934 102.506 19.0534C103.235 18.4134 103.813 17.4534 104.239 16.1734C104.666 14.8756 104.879 13.2934 104.879 11.4267C104.879 9.56007 104.666 7.98674 104.239 6.70674C103.813 5.40896 103.235 4.44007 102.506 3.80007C101.777 3.16007 100.942 2.84007 99.9993 2.84007Z",fill:"white"}),i.createElement("path",{d:"M89.1221 11.1867V21.9067H88.4021V1.42674H89.1221V10.5201H92.2954V11.1867H89.1221ZM83.6021 2.4134V20.4134H73.2821V2.4134H83.6021ZM82.9354 19.7201V3.1334H74.0021V19.7201H82.9354Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M179.241 14.9467H195.801V14.2267H179.935V9.02674H195.268V8.30674H179.935V3.1334H195.428V2.4134H179.241V14.9467ZM180.72 3.91854H196.213V1.62827H178.456V15.7319H196.587V13.4416H180.72V9.81187H196.053V7.5216H180.72V3.91854ZM196.895 20.6534V19.9601H177.695V20.6534H196.895ZM197.68 21.4385H176.91V19.1749H197.68V21.4385Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M172.646 22.6919V0.641602H174.963V22.6919H172.646ZM159.777 6.95195L159.776 6.95502C159.384 8.13081 159.176 9.61455 159.176 11.4267C159.176 13.2375 159.383 14.7311 159.776 15.9264C160.174 17.1189 160.696 17.9384 161.302 18.4573C161.91 18.9786 162.583 19.2283 163.351 19.2283C164.096 19.2283 164.749 18.9817 165.339 18.4634C165.93 17.9447 166.446 17.1236 166.845 15.928C167.238 14.7324 167.446 13.2383 167.446 11.4267C167.446 9.61455 167.238 8.13081 166.846 6.95502L166.845 6.95195C166.445 5.73571 165.929 4.90726 165.339 4.39005C164.749 3.87177 164.096 3.62521 163.351 3.62521C162.583 3.62521 161.91 3.8749 161.302 4.39619C160.698 4.91335 160.175 5.73967 159.777 6.95195ZM167.564 16.2527C167.398 16.7382 167.21 17.1767 167 17.5682C166.673 18.1769 166.292 18.672 165.858 19.0534C165.839 19.0694 165.821 19.0852 165.803 19.1008C165.087 19.7092 164.27 20.0134 163.351 20.0134C162.421 20.0134 161.592 19.7134 160.862 19.1133C160.838 19.0937 160.815 19.0737 160.791 19.0534C160.076 18.4403 159.507 17.5335 159.085 16.333C159.067 16.2803 159.049 16.2272 159.031 16.1734C158.604 14.8756 158.391 13.2934 158.391 11.4267C158.391 9.56007 158.604 7.98674 159.031 6.70674C159.051 6.64479 159.072 6.58359 159.093 6.52314C159.514 5.31721 160.08 4.40952 160.791 3.80007C160.815 3.77978 160.838 3.75981 160.862 3.74017C161.592 3.1401 162.421 2.84007 163.351 2.84007C164.27 2.84007 165.087 3.14428 165.803 3.7527C165.821 3.76829 165.839 3.78408 165.858 3.80007C166.173 4.0772 166.46 4.416 166.719 4.81646C167.058 5.34083 167.349 5.97092 167.591 6.70674C167.698 7.02792 167.792 7.36757 167.872 7.72569C168.111 8.79478 168.231 10.0285 168.231 11.4267C168.231 13.2934 168.018 14.8756 167.591 16.1734C167.582 16.2 167.573 16.2264 167.564 16.2527ZM167.377 4.38789C167.731 4.92368 168.033 5.55441 168.284 6.28007C168.422 6.67843 168.54 7.10394 168.638 7.55658C168.882 8.67957 169.004 9.96962 169.004 11.4267C169.004 13.3957 168.782 15.0596 168.336 16.4185C168.336 16.4195 168.336 16.4205 168.335 16.4216C168.326 16.4499 168.317 16.4781 168.307 16.5061C168.3 16.5286 168.292 16.5511 168.284 16.5734C168.111 17.0729 167.914 17.5274 167.693 17.9369C167.319 18.6293 166.875 19.1932 166.362 19.6284C166.336 19.6504 166.31 19.6721 166.284 19.6934C165.431 20.3867 164.453 20.7334 163.351 20.7334C162.231 20.7334 161.244 20.3867 160.391 19.6934C160.362 19.6697 160.333 19.6457 160.304 19.6212C159.492 18.9287 158.854 17.9128 158.391 16.5734C158.372 16.518 158.353 16.462 158.334 16.4055C158.334 16.4046 158.334 16.4036 158.333 16.4027C157.892 15.0467 157.671 13.3881 157.671 11.4267C157.671 9.477 157.889 7.82639 158.326 6.4749C158.326 6.47393 158.326 6.47296 158.327 6.472C158.348 6.40734 158.369 6.34336 158.391 6.28007C158.854 4.94072 159.492 3.92478 160.304 3.23225C160.333 3.20779 160.362 3.18373 160.391 3.16007C161.244 2.46674 162.231 2.12007 163.351 2.12007C164.453 2.12007 165.431 2.46674 166.284 3.16007C166.31 3.1814 166.336 3.20306 166.362 3.22505C166.738 3.54373 167.076 3.93134 167.377 4.38789ZM173.431 1.42674V21.9067H174.178V1.42674H173.431ZM163.351 1.33493C164.633 1.33493 165.786 1.74336 166.779 2.55072C167.778 3.36228 168.514 4.54336 169.026 6.02324C169.544 7.51795 169.789 9.32661 169.789 11.4267C169.789 13.5269 169.544 15.3355 169.026 16.8302C168.514 18.3101 167.778 19.4912 166.779 20.3028C165.786 21.1101 164.633 21.5185 163.351 21.5185C162.054 21.5185 160.892 21.1121 159.896 20.3028C158.897 19.4912 158.161 18.3101 157.649 16.8302C157.132 15.3355 156.886 13.5269 156.886 11.4267C156.886 9.32661 157.132 7.51795 157.649 6.02324C158.161 4.54336 158.897 3.36228 159.896 2.55072C160.892 1.74139 162.054 1.33493 163.351 1.33493Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M154.352 22.6919H152.035V0.641602H154.352V22.6919ZM149.819 0.774935V22.3452H147.502V11.8652H144.965V21.1985H135.529V1.62827H144.965V9.6016H147.502V0.774935H149.819ZM148.287 21.5601H149.034V1.56007H148.287V10.3867H144.18V2.4134H136.314V20.4134H144.18V11.0801H148.287V21.5601ZM143.434 3.1334H137.034V19.7201H143.434V3.1334ZM142.649 3.91854V18.9349H137.819V3.91854H142.649ZM153.567 21.9067V1.42674H152.82V21.9067H153.567Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M124.812 6.44858C125.423 5.09513 125.912 3.64094 126.28 2.08788L126.45 1.37426L124.158 0.663024L123.976 1.49995C123.548 3.46875 122.847 5.31476 121.873 7.04084L121.87 7.04602C120.917 8.76509 119.789 10.1294 118.496 11.158C117.239 12.1535 115.984 12.6149 114.716 12.6149H113.931V14.9052H114.716C116.582 14.9052 118.359 14.1989 120.032 12.8679C121.477 11.718 122.724 10.2498 123.777 8.47743L132.33 15.22L133.833 13.54L124.812 6.44858ZM123.155 7.98695C123.267 7.79587 123.377 7.60094 123.485 7.40215C123.504 7.36603 123.524 7.32978 123.543 7.2934L132.236 14.1467L132.69 13.6401L123.836 6.68007C123.855 6.64271 123.873 6.60527 123.891 6.56774C124.576 5.14066 125.118 3.58699 125.516 1.90674L124.743 1.66674C124.687 1.92398 124.627 2.17925 124.562 2.43255C124.111 4.19238 123.442 5.85711 122.556 7.42674C122.404 7.70118 122.248 7.96751 122.086 8.22575C121.22 9.61279 120.222 10.7662 119.092 11.686C119.056 11.7154 119.019 11.7445 118.983 11.7734C117.614 12.8578 116.192 13.4001 114.716 13.4001V14.1201C114.979 14.1201 115.241 14.1043 115.502 14.0729C116.842 13.9112 118.152 13.3337 119.432 12.3404C119.433 12.3402 119.433 12.34 119.433 12.3397C119.47 12.3113 119.507 12.2825 119.543 12.2534C120.75 11.2934 121.819 10.0901 122.751 8.64347C122.889 8.42993 123.023 8.21109 123.155 7.98695ZM134.328 19.1749V21.4385H113.558V19.1749H134.328ZM133.543 19.9601H114.343V20.6534H133.543V19.9601Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M109.294 22.6919V0.641602H111.611V22.6919H109.294ZM96.4252 6.95195L96.4241 6.95502C96.0322 8.13081 95.8244 9.61455 95.8244 11.4267C95.8244 13.2379 96.032 14.7317 96.4248 15.9272C96.8225 17.1193 97.345 17.9385 97.9502 18.4573C98.5584 18.9786 99.2317 19.2283 99.9993 19.2283C100.745 19.2283 101.398 18.9817 101.988 18.4634C102.579 17.9444 103.095 17.1229 103.494 15.9264C103.887 14.7311 104.094 13.2375 104.094 11.4267C104.094 9.61455 103.886 8.13081 103.494 6.95502L103.493 6.95195C103.094 5.73571 102.577 4.90726 101.988 4.39005C101.398 3.87177 100.745 3.62521 99.9993 3.62521C99.2317 3.62521 98.5584 3.8749 97.9502 4.39619C97.3469 4.91335 96.8237 5.73967 96.4252 6.95195ZM104.212 16.2536C104.046 16.7391 103.858 17.1776 103.648 17.5691C103.321 18.1774 102.94 18.6722 102.506 19.0534C102.488 19.0694 102.469 19.0852 102.451 19.1008C101.735 19.7092 100.918 20.0134 99.9993 20.0134C99.0697 20.0134 98.2402 19.7134 97.5106 19.1133C97.4867 19.0937 97.463 19.0737 97.4393 19.0534C96.724 18.4403 96.1555 17.5335 95.7339 16.333C95.7154 16.2803 95.6972 16.2272 95.6793 16.1734C95.2526 14.8756 95.0393 13.2934 95.0393 11.4267C95.0393 9.56007 95.2526 7.98674 95.6793 6.70674C95.6997 6.64479 95.7204 6.58359 95.7415 6.52314C96.1623 5.31721 96.7283 4.40952 97.4393 3.80007C97.463 3.77978 97.4867 3.75982 97.5106 3.74017C98.2402 3.1401 99.0697 2.84007 99.9993 2.84007C100.918 2.84007 101.735 3.14428 102.451 3.75269C102.469 3.76828 102.488 3.78408 102.506 3.80007C102.822 4.07727 103.109 4.41618 103.368 4.81678C103.707 5.34108 103.997 5.97107 104.239 6.70674C104.346 7.02786 104.44 7.36745 104.52 7.7255C104.76 8.79463 104.879 10.0284 104.879 11.4267C104.879 13.2934 104.666 14.8756 104.239 16.1734C104.23 16.2003 104.221 16.227 104.212 16.2536ZM104.027 4.38952C104.38 4.92496 104.682 5.55514 104.933 6.28007C105.071 6.67849 105.189 7.10407 105.287 7.55679C105.531 8.67973 105.653 9.96971 105.653 11.4267C105.653 13.3957 105.43 15.0596 104.985 16.4185C104.984 16.4195 104.984 16.4205 104.984 16.4216C104.975 16.4496 104.965 16.4774 104.956 16.5052C104.948 16.528 104.94 16.5507 104.933 16.5734C104.76 17.0731 104.562 17.5278 104.341 17.9374C103.967 18.6296 103.523 19.1933 103.011 19.6284C102.985 19.6504 102.959 19.6721 102.933 19.6934C102.079 20.3867 101.102 20.7334 99.9993 20.7334C98.8793 20.7334 97.8926 20.3867 97.0393 19.6934C97.0102 19.6697 96.9813 19.6457 96.9526 19.6212C96.1407 18.9287 95.5029 17.9128 95.0393 16.5734C95.0201 16.518 95.0013 16.462 94.9829 16.4055C94.9826 16.4046 94.9823 16.4036 94.9819 16.4027C94.5402 15.0467 94.3193 13.3881 94.3193 11.4267C94.3193 9.477 94.5376 7.82639 94.9741 6.4749C94.9744 6.47393 94.9748 6.47297 94.9751 6.472C94.996 6.40734 95.0174 6.34336 95.0393 6.28007C95.5029 4.94072 96.1407 3.92478 96.9526 3.23225C96.9813 3.20779 97.0102 3.18373 97.0393 3.16007C97.8926 2.46674 98.8793 2.12007 99.9993 2.12007C101.102 2.12007 102.079 2.46674 102.933 3.16007C102.959 3.1814 102.985 3.20306 103.011 3.22505C103.387 3.54411 103.725 3.93227 104.027 4.38952ZM110.079 1.42674V21.9067H110.826V1.42674H110.079ZM99.9993 1.33493C101.281 1.33493 102.434 1.74336 103.428 2.55072C104.427 3.36228 105.162 4.54336 105.675 6.02324C106.192 7.51795 106.438 9.32661 106.438 11.4267C106.438 13.5269 106.192 15.3355 105.675 16.8302C105.162 18.3101 104.427 19.4912 103.428 20.3028C102.434 21.1101 101.281 21.5185 99.9993 21.5185C98.7026 21.5185 97.5403 21.1121 96.5442 20.3028C95.5453 19.4912 94.8096 18.3101 94.2973 16.8302C93.78 15.3355 93.5342 13.5269 93.5342 11.4267C93.5342 9.32661 93.78 7.51795 94.2973 6.02324C94.8096 4.54336 95.5453 3.36228 96.5442 2.55072C97.5403 1.74139 98.7026 1.33493 99.9993 1.33493Z",fill:"white"}),i.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M88.4021 21.9067H89.1221V11.1867H92.2954V10.5201H89.1221V1.42674H88.4021V21.9067ZM89.9072 9.73494V0.641602H87.617V22.6919H89.9072V11.9719H93.0806V9.73494H89.9072ZM84.3872 1.62827V21.1985H72.497V1.62827H84.3872ZM82.1503 3.91854H74.7872V18.9349H82.1503V3.91854ZM74.0021 3.1334H82.9354V19.7201H74.0021V3.1334ZM83.6021 2.4134H73.2821V20.4134H83.6021V2.4134Z",fill:"white"})),kl=h.div`
  min-height: 70vh;
  padding-top: 200px;
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 70px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div {
    text-align: center;
    word-break: keep-all;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  & .logo {
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      padding-bottom: 20px;
    }
  }

  & .msg {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 80px;
    @media (max-width: 1024px) {
      font-size: 24px;
      padding-bottom: 40px;
    }
  }

  & .link_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    & .home {
      color: #fff;
    }
    & .apply_list {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`,Hl=()=>e.jsx(kl,{children:e.jsxs("div",{children:[e.jsx("p",{className:"logo",children:e.jsx(Nl,{})}),e.jsx("p",{className:"msg",children:"행사 신청이 완료되었습니다"}),e.jsxs("div",{className:"link_box",children:[e.jsx("span",{className:"home",children:e.jsx(b,{to:"/",children:"홈으로 돌아가기"})}),e.jsx("span",{className:"apply_list",children:e.jsx(b,{to:"/mypage/apply-list",children:"신청 내역 확인하기 >"})})]})]})}),Sl=h.div`
  position: relative;
  padding: 0 0 97px;
  margin-bottom: 100px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 0 0 24px;
    margin-bottom: 80px;
  }
`,El=h.div`
  padding: 30px 120px 82px;
  @media (max-width: 1700px) {
    padding: 30px 50px 82px;
  }
  @media (max-width: 1400px) {
    padding: 30px 30px 82px;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px;
  }
`,Ll=h.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100px;
  @media (max-width: 1024px) {
    min-height: auto;
  }
  & .main_title {
    font-size: 40px;
    font-weight: 700;
    padding-right: 26px;
    @media (max-width: 1024px) {
      font-size: 20px;
      padding-right: 12px;
    }
  }
`,zl=h.div`
  position: absolute;
  left: 250px;
  width: 450px;
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
  z-index: 10;
  @media (max-width: 1400px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 310px;
    padding: 10px 15px 20px;
    left: 30px;
    top: 25px;
  }
  @media (max-width: 400px) {
    left: 0;
    width: 100%;
  }
  & span {
    font-weight: 500;
    display: block;
    font-size: 12px;
    color: #000;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .tit {
    font-weight: 600;
    padding-bottom: 8px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`,Vl=h.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  word-break: keep-all;
  @media (max-width: 1024px) {
    padding-top: 12px;
    font-size: 13px;
  }
`,Al=h.div`
  position: relative;
  & > .booth_list_swiper {
    padding: 0 120px;
    @media (max-width: 1700px) {
      padding: 0 50px;
    }
    @media (max-width: 1400px) {
      padding: 0 30px 160px;
    }
    @media (max-width: 1024px) {
      padding: 0 12px 74px;
    }
  }
  & > .booth_list_swiper::before,
  & > .booth_list_swiper::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #15171c;
    width: 120px;
    z-index: 1;
    @media (max-width: 1700px) {
      width: 50px;
    }
    @media (max-width: 1400px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .booth_list_swiper::before {
    left: 0;
  }
  & > .booth_list_swiper::after {
    right: 0;
  }

  /* navigation */
  & > .booth_list_swiper .swiper-button-prev,
  & > .booth_list_swiper .swiper-button-next {
    width: 64px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    @media (max-width: 1400px) {
      top: var(--swiper-navigation-top-offset, auto);
      bottom: 0;
    }
    @media (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }
  }
  & > .booth_list_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1700px) {
      left: var(--swiper-navigation-sides-offset, 30px);
    }
    @media (max-width: 1024px) {
      left: var(--swiper-navigation-sides-offset, 12px);
    }
  }
  & > .booth_list_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1700px) {
      right: var(--swiper-navigation-sides-offset, 10px);
    }
    @media (max-width: 1400px) {
      right: var(--swiper-navigation-sides-offset, auto);
      left: 200px;
    }
    @media (max-width: 1024px) {
      left: 20%;
    }
  }
  & > .booth_list_swiper .swiper-button-prev::after,
  & > .booth_list_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      background-size: 95px;
    }
  }
  & > .booth_list_swiper .swiper-button-prev::after {
    background-image: url("/user/images/icon/arrow_prev_main.png");
  }
  & > .booth_list_swiper .swiper-button-next::after {
    background-image: url("/user/images/icon/arrow_next_main.png");
  }
`,Ml=h.div`
  padding: 60px 120px 0;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1700px) {
    padding: 60px 60px 0;
  }
  @media (max-width: 1400px) {
    position: absolute;
    right: 30px;
    bottom: 97px;
    padding: 0;
  }
  @media (max-width: 1024px) {
    right: 12px;
    bottom: 20px;
  }
  & button {
    background-color: rgba(35, 94, 243, 1);
    border: 1px solid rgba(11, 12, 55, 1);
    padding: 15px 50px;
    color: #fff;
    border-radius: 10px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`,Fl=h.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 22px;
  row-gap: 30px;
  @media (max-width: 1700px) {
    column-gap: 10px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }
`,Bl=h.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & figure {
    position: relative;
    margin: 10px 0 12px;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 100/100;
    background-color: #000;

    & img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
    & .name {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-weight: 700;
      color: #fff;
      font-size: 16px;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
  & a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .num {
    display: none;
  }
  &.target .num,
  &.outline .num {
    z-index: 10;
    position: absolute;
    left: -12px;
    top: 12px;
    background-color: rgba(30, 158, 255, 1);
    display: block;
    width: 46px;
    height: 46px;
    border-radius: 50rem;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1700px) {
      width: 40px;
      height: 40px;
      font-size: 20px;
      left: -5px;
      top: 15px;
    }
    @media (max-width: 1024px) {
      width: 24px;
      height: 24px;
      font-size: 16px;
      left: -3px;
      top: 17px;
    }
  }
  &.target figure {
    border: 10px solid rgba(30, 158, 255, 1);
    @media (max-width: 1024px) {
      border: 4px solid rgba(30, 158, 255, 1);
    }
    & img {
      width: 110%;
    }
  }
`,Tl=({boothList:t,selectList:s,setSelectList:a})=>{const[n,l]=i.useState(),c=r=>{s.includes(r)?(l(void 0),a(o=>o.filter(f=>f!==r))):(l(r),a(o=>[...o,r]))},p=r=>{const o=s.indexOf(r);return o!==-1?o+1:""};return e.jsx(Fl,{children:t&&t.map(r=>{let o="";return n===r.id?o="target":s.includes(r.id)?o="outline":o="",e.jsxs(Bl,{onClick:()=>c(r.id),className:o,children:[e.jsx("span",{className:"num",children:p(r.id)}),e.jsx("p",{className:"title",children:r.position}),e.jsx("figure",{children:r.image?e.jsx("img",{src:r.image,alt:r.name}):e.jsx("span",{className:"name",children:r.name})}),e.jsx(b,{to:r.url,target:"_blank",children:"홈페이지 바로가기"})]},r.id)})})},Pl=()=>{var N;const[t,s]=i.useState(!0),a=localStorage.getItem("token"),n=localStorage.getItem("user_id"),{id:l}=le(),{data:c,isLoading:p}=Tt(l,a),[r,o]=i.useState([]),f=fa(),m=D(),{openToast:g}=we(),d=((k,V)=>{const S=[];for(let H=0;H<(k==null?void 0:k.length);H+=V)S.push(k.slice(H,H+V));return S})((N=c==null?void 0:c.data)==null?void 0:N.items,21),u=()=>{s(k=>!k)},C=()=>{r.length>=5?f.mutate({token:a,user_id:n,boothList:r},{onSuccess:()=>{m(`/mypage/apply-list/booth-check/${l}`,{replace:!0})}}):g("다섯개 이상 선택해주세요.")};return p?e.jsx(ve,{}):e.jsxs(Sl,{children:[e.jsxs(El,{children:[e.jsxs(Ll,{children:[e.jsx("span",{className:"main_title",children:"AI 추천 부스"}),e.jsx("button",{onClick:u,className:"offset_btn",children:e.jsx(Ti,{})}),t&&e.jsxs(zl,{children:[e.jsx("span",{className:"tit",children:"AI 추천 부스 서비스 이용방법"}),e.jsx("span",{children:"· 기업은 순위대로 5개 이상 골라주셔야 좀 더 정확한 추천이 가능해요."}),e.jsx("span",{children:"· 참가기업에 대한 자세한 정보는 웹페이지를 참고해주세요."})]})]}),e.jsx(Vl,{children:"몇 가지 정보만 알려주시면 평균 5개 이상의 추천부스를 받을 수 있어요!"})]}),e.jsx(Al,{children:e.jsx(vt,{slidesPerView:1,navigation:!0,modules:[At],spaceBetween:15,loop:!0,breakpoints:{1400:{spaceBetween:10},1700:{spaceBetween:22}},className:"booth_list_swiper",children:d.map((k,V)=>e.jsx(yt,{children:e.jsx(Tl,{boothList:k,selectList:r,setSelectList:o})},V))})}),e.jsx(Ml,{children:e.jsx("button",{onClick:C,children:"다음"})})]})},Zl=h.div`
  position: relative;
  padding: 134px 40px 100px;
  margin-bottom: 100px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  & .download_icon {
    position: absolute;
    top: 46px;
    right: 54px;
  }
  @media (max-width: 1024px) {
    padding: 12px 12px 56px;
    margin-bottom: 60px;
  }
`,$l=h.div`
  width: 100%;
  & img {
    width: 100%;
  }
`;h.div`
  position: absolute;
  top: 40px;
  left: 40px;
  @media (max-width: 1024px) {
    position: static;
  }

  & button {
    font-weight: 700;
    background-color: rgba(13, 110, 253, 1);
    font-size: 24px;
    padding: 12px 55px;
    border-radius: 10px;
    color: #fff;
    @media (max-width: 1200px) {
      padding: 12px 30px;
    }
    @media (max-width: 1024px) {
      margin-top: 24px;
      width: 100%;
      padding: 17px 10px;
      font-size: 16px;
    }
  }
`;const Il=h.div`
  & > div {
    margin-top: 60px;
    @media (max-width: 1024px) {
      margin-top: 32px;
    }
  }
  & .type_title {
    font-weight: 700;
    padding-bottom: 20px;
  }
  & .booth_list {
    display: flex;
    column-gap: 8px;
    row-gap: 12px;
    flex-wrap: wrap;
    align-items: center;
    & > li {
      padding: 10px 15px;
      color: #fff;
      border-radius: 50rem;
    }
  }
  & .booth_list.commend > li {
    background-color: rgba(61, 139, 253, 1);
  }
  & .booth_list.wish > li {
    background-color: rgba(245, 103, 103, 1);
    display: flex;
    gap: 8px;
    align-items: center;
    & .icon {
      width: 15px;
      height: 15px;
      display: block;
      cursor: pointer;
      @media (max-width: 1024px) {
        width: 10px;
        height: 10px;
      }
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
`,Ol=t=>i.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("circle",{cx:24,cy:24,r:24,fill:"#3B4048"}),i.createElement("path",{d:"M12.75 25.8501C12.9489 25.8501 13.1397 25.9291 13.2803 26.0698C13.421 26.2104 13.5 26.4012 13.5 26.6001V30.3501C13.5 30.7479 13.658 31.1295 13.9393 31.4108C14.2206 31.6921 14.6022 31.8501 15 31.8501H33C33.3978 31.8501 33.7794 31.6921 34.0607 31.4108C34.342 31.1295 34.5 30.7479 34.5 30.3501V26.6001C34.5 26.4012 34.579 26.2104 34.7197 26.0698C34.8603 25.9291 35.0511 25.8501 35.25 25.8501C35.4489 25.8501 35.6397 25.9291 35.7803 26.0698C35.921 26.2104 36 26.4012 36 26.6001V30.3501C36 31.1457 35.6839 31.9088 35.1213 32.4714C34.5587 33.034 33.7956 33.3501 33 33.3501H15C14.2044 33.3501 13.4413 33.034 12.8787 32.4714C12.3161 31.9088 12 31.1457 12 30.3501V26.6001C12 26.4012 12.079 26.2104 12.2197 26.0698C12.3603 25.9291 12.5511 25.8501 12.75 25.8501Z",fill:"white"}),i.createElement("path",{d:"M23.469 28.781C23.5386 28.8508 23.6214 28.9063 23.7125 28.9441C23.8036 28.9819 23.9013 29.0013 24 29.0013C24.0986 29.0013 24.1963 28.9819 24.2874 28.9441C24.3785 28.9063 24.4613 28.8508 24.531 28.781L29.031 24.281C29.1718 24.1402 29.2509 23.9492 29.2509 23.75C29.2509 23.5508 29.1718 23.3598 29.031 23.219C28.8901 23.0782 28.6991 22.9991 28.5 22.9991C28.3008 22.9991 28.1098 23.0782 27.969 23.219L24.75 26.4395V13.25C24.75 13.0511 24.671 12.8603 24.5303 12.7197C24.3896 12.579 24.1989 12.5 24 12.5C23.8011 12.5 23.6103 12.579 23.4696 12.7197C23.329 12.8603 23.25 13.0511 23.25 13.25V26.4395L20.031 23.219C19.8901 23.0782 19.6991 22.9991 19.5 22.9991C19.3008 22.9991 19.1098 23.0782 18.969 23.219C18.8281 23.3598 18.749 23.5508 18.749 23.75C18.749 23.9492 18.8281 24.1402 18.969 24.281L23.469 28.781Z",fill:"white"})),ql=()=>{var r,o,f;const t=localStorage.getItem("token"),{id:s}=le(),{data:a,isLoading:n}=Tt(s,t),l=(r=a==null?void 0:a.data)==null?void 0:r.items.filter(m=>m.like===!0),c=m=>fetch(m).then(g=>g.blob()).then(g=>URL.createObjectURL(g)),p=async(m,g)=>{const j=document.createElement("a");j.href=await c(m),j.download=g,document.body.appendChild(j),j.click(),document.body.removeChild(j)};return n?e.jsx(ve,{}):e.jsxs(Zl,{children:[e.jsx("div",{children:((o=a==null?void 0:a.data)==null?void 0:o.img)&&e.jsx("button",{onClick:()=>{var m;p(`https://api.micemate.io/storage/${(m=a==null?void 0:a.data)==null?void 0:m.img}`,"부스 이미지")},className:"download_icon",children:e.jsx(Ol,{})})}),e.jsx($l,{children:e.jsx("img",{src:`https://api.micemate.io/storage/${(f=a==null?void 0:a.data)==null?void 0:f.img}`})}),e.jsx(Il,{children:e.jsxs("div",{children:[e.jsx("p",{className:"type_title",children:"추천 부스 리스트"}),e.jsx("ul",{className:"booth_list wish",children:l==null?void 0:l.map(m=>e.jsx("li",{children:e.jsx("span",{children:`${m.position} ${m.name}`})},m.id))})]})})]})},Rl=h.div`
  position: relative;
  padding: 50px 140px 280px 140px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  margin-bottom: 160px;
  @media (max-width: 1400px) {
    padding: 50px 70px 280px 70px;
  }
  @media (max-width: 1024px) {
    padding: 24px 14px 80px;
    margin-bottom: 80px;
  }
  & .title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      font-size: 18px;
      padding-bottom: 24px;
    }
  }
  & .info_box {
    padding: 36px 0 100px;
    line-height: 2;
    word-break: keep-all;
    @media (max-width: 1024px) {
      padding: 24px 0 50px;
      font-size: 14px;
    }
  }

  & .chk_wrap {
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
    & label {
      padding-left: 30px;
    }
  }

  & .btn_area {
    position: absolute;
    bottom: 67px;
    right: 54px;
    @media (max-width: 1024px) {
      position: static;
    }
    & .err_txt {
      color: rgba(245, 103, 103, 1);
      font-size: 16px;
      font-weight: 500;
      padding-right: 24px;
      @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 1.2;
        word-break: keep-all;
      }
    }
    & button,
    & a {
      padding: 15px 40px;
      background-color: rgba(18, 18, 18, 1);
      border: 2px solid rgba(9, 51, 140, 1);
      color: #fff;
      font-size: 16px;
      border-radius: 10px;
      @media (max-width: 1024px) {
        margin-top: 30px;
        width: 100%;
      }
    }
  }
`,Wl=()=>{var V,S,H,v;const t=localStorage.getItem("token"),s=localStorage.getItem("user_id"),a=xa(),{openConfirm:n}=Ye(),[l,c]=i.useState(!1),p=je(Ae),r=je(xe),o=ke(Ae),{openAlret:f}=Ee(),m=D(),[g,j]=i.useState(!1),[d,u]=i.useState(!1),N=pt({token:t,user_id:s,type:1,page:1});i.useEffect(()=>{var x,w;((w=(x=N==null?void 0:N.data)==null?void 0:x.data)==null?void 0:w.total)<=0&&d?j(!0):j(!1)},[(S=(V=N==null?void 0:N.data)==null?void 0:V.data)==null?void 0:S.total,d]);const k=()=>{n({text:"탈퇴하시겠습니까?",okBtn:"확인",logout:!1})};return i.useEffect(()=>{c(o.confirm)},[o.confirm]),i.useEffect(()=>{if(l===!0){const x={token:t,user_id:s};a.mutate(x,{onSuccess:()=>{c(!1),p(),r(),m("/with-draw-finish")},onError:()=>{const w={text:"요청이 실패하였습니다. 다시 시도해 주세요."};c(!1),f(w)}})}c(o.confirm)},[l]),e.jsxs(Rl,{children:[e.jsx("div",{className:"title",children:"그 동안 서비스를 이용해주셔서 감사합니다."}),e.jsxs("div",{className:"info_box",children:["- 회원탈퇴 신청 시, 회원님 이메일 아이디로 즉시 탈퇴 처리가 진행됩니다.",e.jsx("br",{}),"- 회원가입 시, 입력한 회원정보는 모두 삭제됩니다.",e.jsx("br",{}),"- 회원탈퇴가 완료된 이메일은 본인을 포함한 타인 모두 재사용이나 복구가 불가능합니다.",e.jsx("br",{}),"- 회원탈퇴 완료 후, 삭제된 행사와 접수내역의 데이터는 복구되지 않습니다.",e.jsx("br",{}),"- 등록한 행사나 참가한 행사 중에 진행중인 행사가 있을 시, 탈퇴가 불가능합니다. 행사 내역 삭제나 취소를 후에 탈퇴 부탁드립니다."]}),e.jsx("div",{className:"chk_wrap",children:e.jsx(Ve,{label:"안내사항을 모두 확인하였으며, 이에 동의합니다.",id:"agree01",onChange:x=>{u(x.target.checked)}})}),e.jsxs("div",{className:"btn_area",children:[((v=(H=N==null?void 0:N.data)==null?void 0:H.data)==null?void 0:v.total)>0&&e.jsx("span",{className:"err_txt",children:"참가한 행사가 존재합니다. [마이페이지 >신청 행사 내역]에서 취소해주세요."}),e.jsx("button",{onClick:k,disabled:!g,children:"탈퇴하기"})]})]})},Yl=h.div`
  min-height: 70vh;
  padding-top: 200px;
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 70px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .desc_box {
    text-align: center;
    word-break: keep-all;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @media (max-width: 1024px) {
      gap: 10px;
    }
    & span:first-child {
      font-size: 24px;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }
    & span:last-child {
      font-size: 16px;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
  & a {
    display: block;
    margin-top: 44px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
`,Ul=()=>e.jsx(Yl,{children:e.jsxs("p",{className:"desc_box",children:[e.jsx("span",{children:"탈퇴가 완료되었습니다."}),e.jsx("span",{children:"그 동안 서비스를 이용해주셔서 감사합니다."}),e.jsx(b,{to:"/",children:"홈으로 돌아가기"})]})}),Ql=h.form`
  max-width: 584px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`,Kl=h.figure`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 584/328;
  border-radius: 10px;
  & img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Jl=h.form`
  width: 100%;
  & .text_box {
    padding: 48px 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    word-break: keep-all;
    line-height: 1.2;
    @media (max-width: 1024px) {
      padding: 24px 0 32px;
    }
    & :first-child {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }

    & :last-child {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
  & .input_text_area {
    width: 100%;
    margin: 24px 0 16px;
    @media (max-width: 1024px) {
      margin: 40px 0 24px;
    }
  }
  & .submit_area {
    & button {
      padding: 15px 10px;
      border-radius: 10px;
      width: 100%;
      background-color: #235ef3;
      color: #fff;
      font-size: 16px;
    }
  }
`,Xl=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  @media (max-width: 400px) {
    gap: 5px;
  }
`,Dl=h.span`
  cursor: pointer;
  &.fill svg path {
    fill: #1e9eff;
  }
  &.stroke svg path {
    fill: #555;
  }
`,Gl=t=>i.createElement("svg",{width:48,height:48,viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},i.createElement("g",{clipPath:"url(#clip0_759_23108)"},i.createElement("path",{d:"M10.8359 46.3285C9.67787 46.9226 8.36387 45.8815 8.59787 44.5525L11.0879 30.3625L0.518867 20.2945C-0.468133 19.3525 0.0448665 17.6305 1.36787 17.4445L16.0619 15.3565L22.6139 2.37555C23.2049 1.20555 24.8039 1.20555 25.3949 2.37555L31.9469 15.3565L46.6409 17.4445C47.9639 17.6305 48.4769 19.3525 47.4869 20.2945L36.9209 30.3625L39.4109 44.5525C39.6449 45.8815 38.3309 46.9226 37.1729 46.3285L23.9999 39.5606L10.8329 46.3285H10.8359Z",fill:"#555555"})),i.createElement("defs",null,i.createElement("clipPath",{id:"clip0_759_23108"},i.createElement("rect",{width:48,height:48,fill:"white"})))),eo=()=>{const t=["first","second","third","fourth","five"],[s,a]=i.useState(0);return e.jsx(Xl,{children:t.map((n,l)=>e.jsx(Dl,{onClick:()=>a(l+1),className:s>l?"fill":"stroke",children:e.jsx(Gl,{})},n))})},to=h.div`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  padding: 15px 20px;
  min-height: 96px;
  & textarea {
    width: 100%;
    min-height: 64px;
    resize: none;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
    & ::placeholder {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;h.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & textarea {
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    display: block;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    resize: none;
    min-height: 120px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;const io=({placeholder:t})=>e.jsx(to,{children:e.jsx("textarea",{placeholder:t})}),so=()=>e.jsxs(Ql,{children:[e.jsx(Kl,{children:e.jsx("img",{src:"./dummy_image_01.png"})}),e.jsxs(Jl,{children:[e.jsxs("div",{className:"text_box",children:[e.jsx("span",{children:"ㅇㅇㅇ님, 참여한 행사는 어떠셨나요?"}),e.jsx("span",{children:"리뷰를 남겨주시면 더 좋은 행사를 준비하는데에 큰 도움이 될 수 있어요!"})]}),e.jsx(eo,{}),e.jsx("div",{className:"input_text_area",children:e.jsx(io,{placeholder:"참여한 행사에 대해 더 남겨주실 의견이 있으신가요?"})}),e.jsx("div",{className:"submit_area",children:e.jsx("button",{children:"리뷰 남기기"})})]})]}),Je=h.div`
  max-width: 1496px;
  margin: 67px auto 180px;
  padding: 0 30px;
  color: #fff;
  line-height: 1.5;
  & a,
  & button {
    font-weight: 700;
    text-decoration: underline;
    color: #fff;
  }
  & .pb_20 {
    padding-bottom: 20px;
  }

  @media (max-width: 1024px) {
    margin: 30px auto 80px;
    padding: 0 16px;
  }
  & .title {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 30px;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  &.desc {
    word-break: keep-all;
    font-size: 16px;
    font-weight: 500px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .box {
    padding: 0 0 10px 5px;
    font-size: 15px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    & .num {
      font-size: 9px;
    }
  }
  & h3 {
    font-weight: 700;
    padding-bottom: 15px;
  }
  & h4 {
    padding-bottom: 10px;
    font-size: 14px;
  }
  & h5 {
    padding-bottom: 10px;
    font-size: 14px;
  }

  /* table */
  & .table {
    width: 70%;
    text-align: left;
    border-collapse: collapse;
    border-color: #fff;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .table th,
  & .table td {
    padding: 5px 20px;
    border: 1px solid #fff;
    font-size: 16px;
    font-weight: 500px;
    word-break: keep-all;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .table th {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,ao=()=>e.jsxs(Je,{children:[e.jsx("h2",{className:"title",children:"[성별 생년 정보 제공 동의]"}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"수집목적"}),e.jsx("th",{children:"수집항목"}),e.jsx("th",{children:"보유/이용기간"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"50%",children:"신규 서비스 개발 및 마케팅에 활용. 통계학적 특성, 이용 형태 등에 따른 맞춤형 서비스 제공, 광고 게재, 이벤트 참여 기회 제 공, 접속 빈도 파악, 회원의 서비스 이용에 대한 통계"}),e.jsx("td",{width:"20%",children:"생년, 성별"}),e.jsx("td",{width:"30%",children:"회원탈퇴 또는 동의철회 시"})]})})]}),e.jsxs("div",{className:"desc",children:["자세한 내용은 ",e.jsx(b,{to:"/privacy-policy",children:"개인정보 처리방침"}),"을 참고하시기 바랍니다."]})]}),no=()=>e.jsxs(Je,{children:[e.jsx("h2",{className:"title",children:"[개인정보 수집 이용 동의]"}),e.jsxs("div",{className:"desc",children:["회원가입 수집·이용 동의서",e.jsx("br",{}),e.jsx("br",{}),"마이스메이트 (주식회사 마인즈그라운드)의 개인정보 수집 이용 목적은 다음과 같습니다.",e.jsx("br",{}),"내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.",e.jsx("br",{}),e.jsx("br",{}),"수집 목적: 회원가입 및 이용자 식별",e.jsx("br",{}),"필수수집 항목: 이름, 이메일, 비밀번호, 카카오톡ID, 네이버ID",e.jsx("br",{}),"선택수집 항목: 전화번호, 소속, 부서, 직급/직할, 출생년도, 성별, 활동지역, 관심분야",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),e.jsx("br",{}),"수집 목적: 서비스관련 각종 고지 안내",e.jsx("br",{}),"수집 항목: 이름, 이메일, 휴대전화번호",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),"수집 목적: 고객 관계 관리(CRM)",e.jsx("br",{}),"필수수집 항목: 이름, 이메일",e.jsx("br",{}),"선택수집 항목: 전화번호, 소속 및 직함, 연령, 성별",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),e.jsx("br",{}),"수집 목적: 행사 참가자 식별 및 행사 운영",e.jsx("br",{}),"필수수집 항목: 이메일, 이름, 성별",e.jsx("br",{}),"선택수집 항목: 휴대전화번호, 기타 호스트가 요청하는 정보",e.jsx("br",{}),"보유·이용기간: 회원탈퇴 까지",e.jsx("br",{}),e.jsx("br",{}),"자세한 내용은"," ",e.jsx(b,{to:"/privacy-policy",children:"개인정보처리방침(링크)"}),"을 확인해주세요.",e.jsx("br",{}),"귀하는 위와 같이 개인정보를 수집·이용하는데 동의를 거부할 권리가 있습니다. ",e.jsx("br",{}),"필수 수집 항목에 대한 동의를 거절하는 경우 서비스 이용이 제한 될 수 있습니다.",e.jsx("br",{})]})]}),ro=()=>e.jsxs(Je,{children:[e.jsx("h2",{className:"title",children:"[마이스 메이트 개인정보 처리방침]"}),e.jsxs("div",{className:"desc",children:[e.jsxs("div",{className:"box",children:["'주식회사 마인즈그라운드'(이하 '회사')이(가) 운영하는 ‘마이스메이트’가 취급하는 모든 개인정보는 개인정보 보호법 및 “회사” 개인정보 보호지침 등 관련 법령상의 개인정보 보호 규정을 준수하여 수집,보유, 처리 되고 있습니다.",e.jsx("br",{})," 시행일 : 2024-10-30"]}),e.jsxs("div",{className:"box",children:['"회사"는 개인정보 보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.',e.jsx("br",{}),' "회사"는 개인정보 처리방침을 변경하는 경우에는 시행의 시기, 변경된 내용을 정보주체가 쉽게 확인할 수 있도록 변경 전·후를 비교하여 공개하도록 할 예정입니다.']}),e.jsx("h3",{children:"1. 개인정보의 처리목적, 개인정보의 처리 및 보유기간, 처리하는 개인정보의 항목"}),e.jsxs("div",{className:"box",children:['"회사가 인터넷을통해 제공하는 전시회 정보 플랫폼 ‘’(이하 "마이스 메이트"라 한다)는 개인정보를 다음의 목적을 위해 수집합니다.',e.jsx("br",{}),"수집한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다."]}),e.jsx("h4",{children:"1) 홈페이지 회원가입 및 관리"}),e.jsx("div",{className:"box",children:"회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 서비스 부정이용 방지, 각종 고지 및 통지 등을 목적으로 개인정보를 처리합니다."}),e.jsx("h3",{children:"2. 수집하는 개인정보의 항목"}),e.jsx("div",{className:"box",children:'"마이스 메이트"는 서비스 제공을 위해 필요한 최소한의 범위 내에서 다음과 같은 개인정보를 수집하고 있습니다. 선택항목 정보는 회원에게 더 나은 서비스를 제공하기 위해 추가로 수집하는 정보입니다. 회원이 원하지 않을 경우 해당 추가정보는 수집하지 않으며, 이로 인한 서비스 이용 상의 제한은 없습니다.'}),e.jsx("h4",{children:"1) 수집 항목"}),e.jsxs("div",{className:"box",children:["- 전시주최자/호스트 회원 : 상호/업체명, 사업자등록번호, 대표자명, 사업장 소재지, 담당자명, 담당자 연락처(휴대폰), 이메일 주소, 회사홈페이지, 블로그, 페이스북, 인스타그램",e.jsx("br",{}),"- 일반회원 : 이름, 연락처(휴대폰), 이메일 주소, 성별, 연령"]}),e.jsx("h3",{children:"3. 개인정보의 처리 및 보유기간"}),e.jsxs("div",{className:"box",children:["회원의 개인정보는 원칙적으로 개인정보의 처리목적이 달성되거나 해당 서비스가 폐지되면 지체없이 파기합니다.",e.jsx("br",{}),"단, 다음의 정보에 대하여는 아래의 사유로 일정기간 동안 보존합니다. - 보유기간 : 2년 또는 회원 탈퇴 시까지"]}),e.jsx("h3",{children:"4. 개인정보의 제3자 제공"}),e.jsx("div",{className:"box",children:'"회사"는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 아래의 경우를 제외하고는 정보주체의 사전 동의 없이는 본래의 목적 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다.'}),e.jsx("h4",{children:"1) 정보주체로부터 별도의 동의를 받는 경우"}),e.jsx("h4",{children:"2) 법률에 특별한 규정이 있는 경우"}),e.jsx("h4",{children:"3) 정보주체 또는 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우"}),e.jsx("h4",{children:"4) 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우"}),e.jsx("h4",{children:"5) 개인정보를 목적 외의 용도로 이용하거나 이를 제3자에게 제공하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우로서 보호위원회의 심의·의결을 거친 경우"}),e.jsx("h4",{children:"4) 통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정 개인을 알아 볼 수 없는 형태로 개인정보를 제공하는 경우"}),e.jsx("h4",{children:"6) 조약, 그 밖의 국제협정의 이행을 위하여 외국정보 또는 국제기구에 제공하기 위하여 필요한 경우"}),e.jsx("h4",{children:"7) 범죄의 수사와 공소의 제기 및 유지를 위하여 필요한 경우"}),e.jsx("h4",{children:"8) 법원의 재판업무 수행을 위하여 필요한 경우"}),e.jsx("h4",{children:"9) 형 및 감호, 보호처분의 집행을 위하여 필요한 경우"}),e.jsx("h3",{children:"5. 정보주체의 권리·의무 및 그 행사 방법"}),e.jsx("div",{className:"box",children:"정보주체는 아래와 같은 권리를 행사 할 수 있으며, 만14세 미만 아동의 법정대리인은 그 아동의 개인정보에 대한 열람, 정정·삭제, 처리정지를 요구할 수 있습니다."}),e.jsx("h4",{children:"1) 개인정보 열람 요구"}),e.jsxs("div",{className:"box",children:['"회사"에서 보유하고 있는 개인정보파일은「개인정보 보호법」제35조(개인정보의 열람)에 따라 자신의 개인정보에 대한 열람을 요구할 수 있습니다.',e.jsx("br",{}),"다만, 개인정보 열람 요구는 법 제35조 5항에 의하여 아래와 같이 제한될 수 있습니다."]}),e.jsx("h5",{children:"가. 정보주체로부터 별도의 동의를 받는 경우"}),e.jsx("h5",{children:"나. 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우"}),e.jsx("h5",{children:"다. 공공기관이 아래 각 목의 어느 하나에 해당하는 업무를 수행할 때 중대한 지장을 초래하는 경우"}),e.jsxs("div",{className:"box",children:["- 조세의 부과·징수 또는 환급에 관한 업무 - 학력·기능 및 채용에 관한 시험, 자격 심사에 관한 업무",e.jsx("br",{})," - 보상금·급부금 산정 등에 대하여 진행 중인 평가 또는 판단에 관한 업무",e.jsx("br",{})," - 다른 법률에 따라 진행 중인 감사 및 조사에 관한 업무"]}),e.jsx("h4",{children:"2) 개인정보 정정·삭제 요구"}),e.jsxs("div",{className:"box",children:['"회사"에서 보유하고 있는 개인정보파일은「개인정보 보호법」제36조(개인정보의 정정·삭제)에 따라 정정·삭제를 요구할 수 있습니다.',e.jsx("br",{}),"다만, 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다."]}),e.jsx("h4",{children:"3) 개인정보 처리정지 요구"}),e.jsxs("div",{className:"box",children:['"회사"에서 보유하고 있는 개인정보파일은 「개인정보보호법」 제37조(개인정보의 처리정지 등)에 따라 처리정지를 요구할 수 있습니다.',e.jsx("br",{}),"다만, 개인정보 처리정지 요구는 법 제37조 2항에 의하여 거절될 수 있습니다."]}),e.jsx("h5",{children:"가. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여 불가피한 경우"}),e.jsx("h5",{children:"나. 다른 사람의 생명·신체를 해할 우려가 있거나 다른 사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우"}),e.jsx("h5",{children:"다. 공공기관이 개인정보를 처리하지 아니하면 다른 법률에서 정하는 소관 업무를 수행할 수 없는 경우"}),e.jsx("h5",{children:"라. 개인정보를 처리하지 아니하면 정보주체와 약정한 서비스를 제공하지 못하는 등 계약의 이행이 곤란한 경우로서 정보주체가 계약의 해지 의사를 명확하게 밝히지 아니한 경우"}),e.jsx("h3",{children:"6. 개인정보의 파기"}),e.jsx("div",{className:"box",children:'"회사"는 원칙적으로 개인정보 보존기간이 경과되거나, 개인정보 처리목적이 달성된 경우에는 지체 없이 파기합니다. 파기의 절차, 기한 및 방법은 아래와 같습니다.'}),e.jsx("h4",{children:"1) 파기 절차"}),e.jsx("div",{className:"box",children:"개인정보는 목적 달성 후 즉시 또는 별도의 공간에 옮겨져 내부 방침 및 기타 관련법령에 따라 일정기간 저장된 후 파기됩니다. 별도의 공간으로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다."}),e.jsx("h4",{children:"2) 파기 기한 및 파기 방법"}),e.jsxs("div",{className:"box",children:["보유기간이 만료되었거나 개인정보의 처리목적달성, 해당 업무의 폐지 등 그 개인정보가 불필요하게 되었을 때에는 지체없이 파기합니다. 전자적 파일형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.",e.jsx("br",{}),"종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다."]}),e.jsx("h3",{children:"7. 개인정보의 안전성 확보 조치"}),e.jsx("div",{className:"box",children:'"회사"는 개인정보 보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적, 관리적, 물리적 조치를 하고 있습니다.'}),e.jsx("h4",{children:"1) 개인정보 취급직원의 최소화 및 교육"}),e.jsx("div",{className:"box",children:"개인정보를 취급하는 직원은 반드시 필요한 인원에 한하여 지정 · 관리하고 있으며 취급직원을 대상으로 안전한 관리를 위한 교육을 실시하고 있습니다."}),e.jsx("h4",{children:"2) 개인정보에 대한 접근 제한"}),e.jsx("div",{className:"box",children:"개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여·변경·말소를 통하여 개인정보에 대한 접근통제를 위한 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다."}),e.jsx("h4",{children:"3) 접속기록의 보관"}),e.jsx("div",{className:"box",children:"개인정보처리시스템에 접속한 기록(웹 로그, 요약정보 등)을 최소 6개월 이상 보관·관리하고 있습니다."}),e.jsx("h4",{children:"4) 개인정보의 암호화"}),e.jsx("div",{className:"box",children:"개인정보는 암호화 등을 통해 안전하게 저장 및 관리되고 있습니다. 또한 중요한 데이터는 저장 및 전송 시 암호화하여 사용하는 등의 별도 보안기능을 사용하고 있습니다."}),e.jsx("h4",{children:"5) 보안프로그램 설치 및 주기적 점검·갱신"}),e.jsx("div",{className:"box",children:"해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적으로 갱신·점검하고 있습니다."}),e.jsx("h4",{children:"6) 비인가자에 대한 출입 통제"}),e.jsx("div",{className:"box",children:"개인정보를 보관하고 있는 개인정보시스템의 물리적 보관 장소를 별도로 두고 이에 대해 출입통제 절차를 수립, 운영하고 있습니다."}),e.jsx("h4",{children:"7) 정기적인 자체 점검 실시"}),e.jsx("div",{className:"box",children:"개인정보 취급 관련 안정성 확보를 위해 정기적으로 소속·산하기관을 포함하여 개인정보 보호관리 점검을 실시하고 있습니다."}),e.jsx("h4",{children:"8) 내부관리계획의 수립 및 시행"}),e.jsx("div",{className:"box",children:"개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다."}),e.jsx("h3",{children:"8. 개인정보 보호책임자 및 담당자"}),e.jsx("div",{className:"box",children:'"회사"는 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호 책임 담당부서를 지정하고 있습니다.'}),e.jsx("h4",{children:"1) 개인정보보호 담당자 부서: 경영지원팀 "}),e.jsx("div",{className:"box",children:"연락처 : admin@mindsground.com"}),e.jsx("h3",{children:"9. 권익침해 구제방법"}),e.jsx("div",{className:"box",children:"개인정보주체 및 법정대리인은 개인정보침해로 인한 피해를 구제 받기 위하여 개인정보 분쟁조정위원회, 한국인터넷진흥원 개인정보 침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 또한, 개인정보의 열람, 정정·삭제, 처리정지 등에 대한 정보주체자의 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익을 침해 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다."}),e.jsxs("h4",{children:["1) 개인정보 분쟁조정위원회 : 2-2100-2499(",e.jsx("button",{onClick:()=>{window.open("https://www.kopico.go.kr")},children:"www.kopico.go.kr"}),"),(국번없이) 118"]}),e.jsx("h4",{children:"2) 개인정보 침해신고센터 : (국번없이) 118 ( privacy.kisa.or.kr)"}),e.jsx("h4",{children:"3) 대검찰청 사이버범죄수사과 : 02-3480-3570 ( cybercid@spo.go.kr)"}),e.jsx("h4",{children:"4) 경찰청 사이버안전국 : 02-3150-2659 ( cyberbureau.police.go.kr)"}),e.jsxs("h4",{children:["5) 행정심판에 대한 자세한 사항은 국민권익위원회(",e.jsx("button",{onClick:()=>{window.open("https://www.acrc.go.kr/")},children:"www.acrc.go.kr"}),")홈페이지를 참고하시기 바랍니다."]})]})]}),lo=()=>e.jsx("div",{children:e.jsxs(Je,{children:[e.jsx("h2",{className:"title",children:"[제 3자 제공 동의]"}),e.jsxs("div",{className:"desc",children:["국내 제3자 제공 동의서",e.jsx("br",{}),e.jsx("br",{}),"행사 참가자 관리 및 행사운영에 필요한 서비스 제공",e.jsx("br",{}),"(메일 및 문자 발송 등)",e.jsx("br",{}),e.jsx("br",{}),"마이스메이트 관리(주식회사 마인즈그라운드)의 개인정보 수집 이용 목적은 다음과 같습니다. 내용을 자세히 읽어 보신 후 동의 여부를 결정하여 주시기 바랍니다.",e.jsx("br",{}),e.jsx("br",{}),"제공받는 자: 마인즈그라운드",e.jsx("br",{}),"제공 목적: 행사 참가자 관리 및 행사운영에 필요한 서비스 제공",e.jsx("br",{}),"제공 항목: 이름/이메일/기타 업로드 파일 내 포함된 주최사가 수집한 개인정보",e.jsx("br",{}),"제공 받은 자의 보유·이용기간: 주최사가 등록된 정보를 삭제하거나 주최사의 회원탈퇴 까지",e.jsx("br",{}),"자세한 내용은 ",e.jsx(b,{to:"/privacy-policy",children:"개인정보처리방침"}),"을 확인해주세요."]})]})}),oo=()=>e.jsxs(Je,{children:[e.jsx("h2",{className:"title",children:"[마케팅 정보 수신 동의]"}),e.jsxs("div",{className:"desc pb_20",children:["마케팅 정보 수신 동의",e.jsx("br",{}),e.jsx("br",{}),"마이스메이트 (주식회사 마인즈그라운드)는 개인정보보호법 및 정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 광고성 정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다. 마케팅 정보 수신 동의 시 마케팅 수신에 일괄 동의한 것으로 처리됩니다.",e.jsx("br",{}),"마이스메이트 광고성정보 수신동의 서비스 이용자의 개인정보를 수집하는 목적은 다음과 같습니다."]}),e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"수집목적"}),e.jsx("th",{children:"수집항목"}),e.jsx("th",{children:"보유/이용기간"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{width:"50%",children:"- 신규 기능 및 서비스 홍보 및 이용 권유"}),e.jsx("td",{width:"20%",children:"이메일, 이름, 회사명"}),e.jsx("td",{width:"30%",children:"회원탈퇴 또는 동의철회 시"})]})})]}),e.jsx("div",{className:"desc",children:"동의를 거부할 권리가 있으며, 동의 거부 시 회원가입을 통한 기본서비스 이용은 가능하나, 광고 및 이벤트 안내 등의 서비스가 제한됩니다."})]}),co=()=>e.jsxs(Je,{children:[e.jsx("h2",{className:"title",children:"[서비스 이용약관]"}),e.jsx("h3",{children:"제 1 조 (목적)"}),e.jsx("div",{className:"box",children:'본 약관은 주식회사 마인즈그라운드의 플랫폼서비스, 마이스메이트(이하 "회사"라 합니다)가 운영, 제공하는 마이스메이트 서비스 및 관련 제반서비스, 기타 서비스(이하 "서비스")를 이용함에 있어 회사와 서비스 이용자의 권리.의무 및 책임사항을 규정함을 목적으로 합니다.'}),e.jsx("h3",{children:"제 2 조 (정의)"}),e.jsxs("div",{className:"box",children:['"서비스 이용자"란 회원과 비회원을 말한다.',e.jsx("br",{}),'"회원"이란 회사에 회원가입을 하고 회사의 가입 승인이 완료된 서비스 이용자를 말한다.',e.jsx("br",{}),'"비회원"이란 회원에 가입하지 않고 "회사" 서비스를 이용할 수 있는 자를 말한다. ',e.jsx("br",{}),'"플랫폼"이란 회사가 운영하는 웹사이트를 말한다.']}),e.jsx("h3",{children:"제 3 조 (약관 등의 명시와 설명 및 개정)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 이 약관의 내용과 상호 및 대표자의 성명, 영업소 소재지 주소, 전화번호, 사업자등록번호, 등 필요정보를 이용자가 쉽게 알 수 있도록 플랫폼 메인하단에 게시합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 온라인 디지털콘텐츠산업발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법, 정보통신망 이용촉진 및 정보보호에 관한법률(이하 '정보통신망법') 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 7일 전부터 적용일 이후 상당한 기간 동안 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 적용일자 30일 전부터 적용일 이후 상당한 기간 동안 각각 이를 회사 인터넷 홈페이지에 공지하고 등록된 서비스이용자의 전자우편주소로 개정약관을 발송하여 고지합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 회사가 전항에 따라 서비스 이용자에게 통지하면서 공지 또는 고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 의사표시가 없는 경우에는 서비스 이용자가 변경된 약관을 승인한 것으로 봅니다. 서비스 이용자는 개정약관에 동의하지 않을 경우 제17조제1항의 규정에 따라 이용계약을 해지할 수 있습니다."]}),e.jsx("h3",{children:"제 4 조 (회원가입절차)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"}),' 서비스 이용자가 본 약관을 읽고 "동의" 버튼을 누르거나 "확인" 등에 체크하는 경우 본 약관에 동의한 것으로 간주합니다. ',e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사의 서비스 이용을 위한 회원가입은 서비스 이용자가 전항과 같이 동의한 후, 회사가 정한 온라인 회원가입 신청서에 회원 아이디를 포함한 필수사항을 입력하고, 회원가입버튼을 누르는 방법으로 합니다. 다만, 회사가 필요하다고 인정하는 경우 서비스 이용자에게 별도의 서류를 제출하도록 할 수 있습니다.",e.jsx("br",{})]}),e.jsx("h3",{children:"제 5 조 (회원등록의 성립과 유보 및 거절)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회원등록은 제3조에 정한 절차에 의한 서비스 이용자의 회원가입 신청과 회사의 회원등록 승낙에 의하여 성립합니다. 회사는 회원가입 신청자가 필수사항 등을 성실히 입력하여 가입신청을 완료하였을 때에는 필요한 사항을 확인한 후 지체 없이 이를 승낙하여야 합니다. 단 회원가입 신청서 제출 이외에 별도의 자료 제출이 요구되는 경우에는 예외로 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 아래 각 호의 어느 하나에 해당하는 경우에는 회원등록의 승낙을 유보할 수 있습니다.",e.jsx("br",{}),"제공서비스 설비용량에 현실적인 여유가 없는 경우",e.jsx("br",{}),"서비스를 제공하기에는 기술적으로 문제가 있다고 판단되는 경우",e.jsx("br",{}),"기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사는 아래 각 호의 어느 하나에 해당하는 경우에는 회원등록을 거절할 수 있습니다.",e.jsx("br",{}),"가입신청서의 내용을 허위로 기재하였거나 허위서류를 첨부하여 가입신청을 하는 경우",e.jsx("br",{}),"만14세 미만이 개인정보제공에 대한 동의를 부모 등 법정대리인으로부터 받지 않은 경우",e.jsx("br",{}),"기타 회사가 관련법령 등을 기준으로 하여 명백하게 사회질서 및 미풍양속에 반할 우려가 있음을 인정하는 경우",e.jsx("br",{}),"제17조제2항에 의하여 회사가 계약을 해지했던 회원이 다시 회원가입 신청을 하는 경우"]}),e.jsx("h3",{children:"제 6 조 (회원 아이디 등의 관리책임)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회원은 서비스 이용을 위한 회원 아이디 및 비밀번호의 관리에 대한 책임을 지며 그 외 본인의 회원 아이디의 제3자에 의한 부정사용 등 회원의 고의과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 회사의 고의과실로 인하여 야기된 경우는 회사가 책임을 부담합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회원은 회원 아이디 및 비밀번호 그 외 추가정보 등을 도난당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 본인의 회원 비밀번호를 수정하는 등의 조치를 취하여야 하며 즉시 이를 회사에 통보하여 회사의 안내를 따라야 합니다."]}),e.jsx("h3",{children:"제 7 조 (개인정보의 보호)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 서비스를 제공하기 위하여 관련 법령의 규정에 따라 서비스 이용자로부터 필요한 개인정보를 수집합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"}),' 회사는 서비스의 제공과 관련하여 알게 된 서비스 이용자의 개인정보를 본인의 동의 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여 노력합니다. 서비스 이용자의 개인정보보호에 관한 기타의 사항은 정보통신망법 및 회사가 별도로 정한 "개인정보처리방침"에 따릅니다.']}),e.jsx("h3",{children:"제 8 조 (회원정보의 변경)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회원은 서비스 설정화면에서 언제든지 본인의 회원정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 회원 아이디 등은 수정이 불가능합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회원은 회원가입 신청 시 기재한 사항이 변경되었을 경우, 온라인으로 수정을 하거나 전자우편 등 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회원이 전항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다."]}),e.jsx("h3",{children:"제 9 조 (서비스 범위 및 이용)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 서비스 이용자에게 아래와 같은 서비스를 제공합니다.",e.jsx("br",{}),"가. 플랫폼서비스 행사의 주최, 행사 참가자 모집, 관리 및 등록, 행사페이지 개설, 행사안내 메일 및 문자전송, 행사정보안내 등 서비스 이용자에게 제공되는 서비스와 그 외 원활한 행사진행을 위하여 행사 기획부터 행사 종료 후 사후관리까지 행사전반에 걸쳐서 서비스 이용자에게 제공되는 서비스",e.jsx("br",{}),"나. 행사가이드서비스",e.jsx("br",{}),"사이트 내에서 제공하는 행사 추천, 부스 추천, 챗봇 등 행사참가자에게 제공하는 서비스",e.jsx("br",{}),"기타 서비스",e.jsx("br",{}),"제1호의 서비스와 관련한 부가서비스 및 그 외 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 서비스 이용자에게 제공하는 일체의 서비스",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 서비스 이용은 회사의 서비스 사용승낙 직후부터 가능합니다. ",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 민법상 미성년자인 서비스 이용자가 유료서비스를 이용할 경우 미성년자인 서비스 이용자는 결제 전 법정대리인의 동의를 얻어야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 서비스 이용시간은 회사의 업무상 또는 기술상 불가능한 경우를 제외하고는 연중무휴 1일 24시간(00:00-24:00)으로 함을 원칙으로 합니다. 다만, 서비스설비의 정기점검 등의 사유로 회사가 서비스를 특정범위로 분할하여 별도로 날짜와 시간을 정할 수 있습니다.",e.jsx("br",{})]}),e.jsx("h3",{children:"제 10 조 (서비스 이용자에 대한 통지 등)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사가 서비스 이용자에게 통지하는 경우 등록된 서비스 이용자의 전자우편주소로 통지할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 전항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 7일 이상 사이트의 공지사항 페이지 등에 게시함으로써 전항의 통지를 갈음할 수 있습니다. 단, 서비스 이용자 본인의 거래와 관련하여 중대한 영향을 미치는 사항은 상당한 기간 동안 게시판을 통해 이를 공지하고 서비스 이용자의 등록된 전자우편주소로 개별통지합니다."]}),e.jsx("h3",{children:"제 11 조 (권리의 귀속 및 저작물의 이용)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"}),' 서비스 이용자가 서비스 내에 게시한 게시물 등(이하 "게시물 등"이라 합니다)의 저작권은 해당 게시물 등의 저작자에게 귀속되며, 해당 게시물 등이 타인의 지적재산권을 침해하여 발생되는 모든 책임은 저작자에게 있습니다',e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 게시물 등은 검색결과 내지 서비스 및 관련 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 서비스 이용자는 언제든지 고객센터 또는 각 서비스 내 관리기능을 통해 해당 게시물 등에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 요청할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사는 전항 이외의 방법으로 서비스 이용자의 게시물 등을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 서비스 이용자의 동의를 얻습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 서비스 이용자의 게시물 등에 대해 제3자로부터 저작권 및 기타 권리의 침해로 이의가 제기된 경우 회사는 해당 게시물 등을 법령에 따라 정지 또는 삭제할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑤"})," 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다."]}),e.jsx("h3",{children:"제 12 조 (서비스 이용의 제한 및 중지)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 아래 각 호의 어느 하나에 해당하는 사유가 발생한 경우에는 서비스 이용자의 서비스 이용을 제한하거나 중지시킬 수 있습니다.",e.jsx("br",{}),"서비스 이용자가 회사 서비스의 운영을 고의과실로 방해하는 경우",e.jsx("br",{}),"서비스 이용자가 제13조의 의무를 위반한 경우",e.jsx("br",{}),"서비스용 설비 점검, 교체, 보수 또는 공사로 인하여 부득이한 경우",e.jsx("br",{}),"전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우",e.jsx("br",{}),"국가비상사태, 서비스의 장애 또는 서비스 이용의 폭주 등 서비스 이용에 지장이 있을 때",e.jsx("br",{}),"기타 중대한 사유로 인하여 회사가 서비스 제공이 부적당하다고 인정하는 경우",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한 기간 등을 제9조의 규정에 따라 서비스 이용자에게 알려야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 제17조 제2항에 의해 회사가 회원과의 계약을 해지하고 탈퇴시키기로 결정한 경우 회사는 회원의 탈퇴 처리 전에 이를 제9조의 규정에 따라 회원에게 통지하고, 회원은 회사의 통지를 받은 날로부터 30일 이내에 이에 대한 항변의 기회를 가집니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 회원이 서비스를 이용하는 도중, 연속하여 12개월 동안 서비스를 이용하기 위해 log-in한 기록이 없는 경우, 회사는 당해 회원의 서비스이용을 제한할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑤"}),' 정보통신망법에 의해 다른 서비스 이용자의 공개된 게시물 등이 본인의 사생활을 침해하거나 명예를 훼손하는 등 권리를 침해 받은 서비스 이용자 또는 제3자(이하 "삭제 등 신청인"이라 합니다)는 그 침해사실을 소명하여 회사에 해당 게시물 등의 삭제 또는 반박 내용의 게재를 요청할 수 있습니다. 이 경우 회사는 해당 게시물 등의 권리 침해 여부를 판단할 수 없거나 당사자 간의 다툼이 예상되는 경우 해당 게시물 등에 대한 접근을 임시적으로 차단하는 조치(이하 "임시조치"라 합니다)를 최장 30일까지 취합니다.',e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑥"}),' 제5항에 의해 본인의 게시물 등이 임시조치된 서비스 이용자(이하 "게시자"라 합니다)는 임시조치기간 중 회사에 해당 게시물 등을 복원해 줄 것을 요청(이하 "재게시 청구"라 합니다)할 수 있으며, 회사는 임시조치된 게시물 등의 명예훼손 등 판단에 대한 방송통신심의위원회 심의 요청에 대한 게시자 및 삭제 등 신청인의 동의가 있는 경우 게시자 및 삭제 등 신청인을 대리하여 이를 요청하고 동의가 없는 경우 회사가 이를 판단하여 게시물 등의 복원 여부를 결정합니다. 게시자의 재게시 청구가 있는 경우 임시조치 기간 내에 방송통신심의위원회 또는 회사의 결정이 있으면 그 결정에 따르고 그 결정이 임시조치 기간 내에 있지 않는 경우 해당 게시물 등은 임시조치 만료일 이후 복원됩니다. 재게시 청구가 없는 경우 해당 게시물 등은 임시조치 기간 만료 이후 삭제됩니다.',e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑦"}),' 회사는 서비스 내에 게시된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 제5항에 따른 서비스 이용자 또는 제3자의 신고가 없는 경우에도 임시조치(이하 "임의의 임시조치"라 합니다)를 취할 수 있습니다. 임의의 임시조치된 게시물 등의 처리 절차는 제5항 후단 및 제6항의 규정에 따릅니다.',e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑧"})," 서비스 이용자의 게시물 등으로 인한 법률상 이익 침해를 근거로, 다른 서비스 이용자 또는 제3자가 서비스 이용자 또는 회사를 대상으로 하여 민형사상의 법적 조치(예: 형사고소, 가처분 신청, 손해배상청구 등 민사소송의 제기)를 취하는 경우, 회사는 동 법적 조치의 결과인 법원의 확정판결이 있을 때까지 관련 게시물 등에 대한 접근을 잠정적으로 제한할 수 있습니다. 게시물 등의 접근 제한과 관련한 법적 조치의 소명, 법원의 확정판결에 대한 소명 책임은 게시물 등에 대한 조치를 요청하는 자가 부담합니다."]}),e.jsx("h3",{children:"제 13 조 (회사의 의무)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사는 회사의 서비스 제공 및 보안과 관련된 설비를 지속적이고 안정적인 서비스 제공에 적합하도록 유지, 점검 또는 복구 등의 조치를 성실히 이행하여야 합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 서비스 이용자가 수신 동의를 하지 않은 영리 목적의 광고성 전자우편, SMS 문자메시지 등을 발송하지 아니합니다."]}),e.jsx("h3",{children:"제 14 조 (서비스 이용자의 의무)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 서비스 이용자는 아래 각 호의 어느 하나에 해당하는 행위를 하여서는 아니 됩니다.",e.jsx("br",{}),e.jsx("br",{}),"회원가입신청 또는 변경 시 허위내용을 등록하는 행위",e.jsx("br",{}),"서비스에 게시된 정보를 변경하거나 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 영리 또는 비영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위.",e.jsx("br",{}),"회사가 제공하는 서비스를 이용하여 제3자에게 본인을 홍보할 기회를 제공하거나 제3자의 홍보를 대행하는 등의 방법으로 금전을 수수하거나 서비스를 이용할 권리를 양도하고 이를 대가로 금전을 수수하는 행위.",e.jsx("br",{}),"회사 및 기타 제3자에 대한 허위의 사실을 게재하거나 지적재산권을 침해하는 등 회사나 제3자의 권리를 침해하는 행위",e.jsx("br",{}),"다른 회원 아이디 및 비밀번호를 도용하여 부당하게 서비스를 이용하는 행위",e.jsx("br",{}),"정크메일(junk mail), 스팸메일(spam mail), 행운의 편지(chain letters), 피라미드 조직에",e.jsx("br",{}),"가입할 것을 권유하는 메일, 외설 또는 폭력적인 메시지&화상&음성 등이 담긴 메일을",e.jsx("br",{}),"보내거나 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위",e.jsx("br",{}),"정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)를 전송하거나 게시하는 행위",e.jsx("br",{}),"청소년보호법에서 규정하는 청소년유해매체물을 게시하는 행위",e.jsx("br",{}),"공공질서 또는 미풍양속에 위배되는 내용의 정보, 문장, 도형, 음성 등을 유포하는 행위",e.jsx("br",{}),"회사의 직원이나 서비스의 관리자를 가장하거나 사칭 또는 타인의 명의를 도용하여 글을 게시하거나 메일을 발송하는 행위",e.jsx("br",{}),"컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 발송하는 행위",e.jsx("br",{}),"스토킹(stalking), 욕설, 채팅글 도배 등 다른 서비스 이용자의 서비스 이용을 방해하는 행위",e.jsx("br",{}),"다른 서비스 이용자의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위",e.jsx("br",{}),"불특정 다수의 서비스 이용자를 대상으로 하여 광고 또는 선전을 게시하거나 스팸메일을 전송할 목적으로 회사에서 제공하는 메일발송 등의 서비스를 이용하여 영리활동을 하는 행위",e.jsx("br",{}),"회사가 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링, 디컴파일, 디스어셈블 하는 행위.",e.jsx("br",{}),"현행 법령, 본 약관 기타 서비스 이용에 관한 규정을 위반하는 행위",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 회사는 서비스 이용자가 전항의 행위를 하는 경우 해당 게시물 등을 삭제 또는 임시조치할 수 있고 서비스의 이용을 제한하거나 일방적으로 본 계약을 해지할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회사가 제공하는 서비스 중 관련 법령 등의 규정에 의하여 성인인증이 필요한 경우 서비스 이용자는 해당 서비스를 이용하기 위하여 회사가 제공하는 방법에 따라 실명정보를 회사에 제공하여야 합니다."]}),e.jsx("h3",{children:"제 15 조 (양도금지)"}),e.jsx("div",{className:"box",children:"서비스 이용자의 서비스 받을 권리는 이를 양도 내지 증여하거나 질권의 목적으로 사용할 수 없습니다."}),e.jsx("h3",{children:"제 16 조 (이용계약의 해지)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 서비스 이용자가 서비스 이용계약을 해지하고자 하는 때에는 언제든지 '문의하기' 또는 마이페이지에서 회원탈퇴 신청 후, 회사가 정한 절차에 따라 서비스 이용계약을 해지하거나 회원 아이디를 삭제하고 탈퇴할 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 서비스 이용자가 제13조의 규정을 위반한 경우 회사는 일방적으로 본 계약을 해지할 수 있고, 이로 인하여 서비스 운영에 손해가 발생한 경우 이에 대한 민형사상 책임도 물을 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 회원이 서비스를 이용하는 도중, 연속하여 1년 동안 서비스를 이용하기 위해 회사의 서비스에 log-in한 기록이 없는 경우 회사는 당해 회원의 회원자격을 상실시킬 수 있습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"④"})," 유료서비스 이용계약의 해지는 서비스 이용자의 서비스 해지신청 및 회사의 승낙에 의해 성립합니다. 단, 정기 결제 서비스의 경우 정기결제 페이지에서 '해지하기' 버튼을 클릭하면 다음 결제일부터 자동 결제가 진행되지 않습니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑤"})," 회사가 승낙한 시점에 해지의 효과는 발생하며 환불에 대해서는 제16조의 규정을 따릅니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"⑥"})," 각 개별 유료서비스에서 전항의 규정과 다른 계약해지의 방법 및 효과를 개별약관에서 규정하고 있는 경우 각 개별 유료서비스의 계약해지에 관해서는 당해 개별 약관의 규정을 따릅니다."]}),e.jsx("h3",{children:"제 17 조 (면책)"}),e.jsxs("div",{className:"box",children:["회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 서비스 이용자에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.",e.jsx("br",{}),"천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우",e.jsx("br",{}),"서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우",e.jsx("br",{}),"서비스 이용자의 귀책사유로 서비스 이용에 장애가 있는 경우",e.jsx("br",{}),"제1호 내지 제3호를 제외한 기타 회사의 고의과실이 없는 사유로 인한 경우"]}),e.jsx("h3",{children:"제18조 (재판권 및 준거법)"}),e.jsxs("div",{className:"box",children:[e.jsx("span",{className:"num",children:"①"})," 회사와 서비스 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시 서비스 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 법원을 전속관할로 합니다. 다만, 전자상거래 외 분쟁의 경우와 제소 당시 서비스 이용자의 주소 또는 거소가 분명하지 않거나 외국거주자의 경우에는 민사소송법상의 관할법원에 소송을 제기합니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"②"})," 본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.",e.jsx("br",{}),e.jsx("span",{className:"num",children:"③"})," 본 약관에 명시되지 않은 사항에 대해서는 관련법령에 의하고, 법에 명시되지 않은 부분에 대하여는 관습에 의합니다."]})]}),po=h.div`
  font-family: "Pretendard", sans-serif;
  color: #fff;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  menu,
  nav,
  section,
  article,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }
  body {
    -webkit-text-size-adjust: none;
    word-wrap: break-word;
    word-break: break-all;
  }
  body.fixed {
    overflow-y: hidden;
  }
  body,
  input,
  select,
  textarea,
  button,
  pre,
  a {
    border: none;
    font-size: 16px;
    font-family: "Pretendard", sans-serif;
    color: #fff;
  }
  ul,
  ol,
  li {
    list-style-type: none;
  }
  table {
    border-spacing: 0;
  }
  img,
  fieldset {
    border: 0;
  }
  address,
  cite,
  code {
    font-style: normal;
    font-weight: normal;
  }
  em,
  i {
    font-style: normal;
  }
  label,
  img,
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }
  .hide,
  legend {
    overflow: hidden;
    display: block;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }
  hr {
    display: none;
  }
  main,
  header,
  section,
  nav,
  footer,
  aside,
  article,
  figure {
    display: block;
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    font-weight: 500;
    outline: none;
    outline-offset: 2px;
  }
  pre {
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }

  /* button */
  .btn {
    display: inline-flex;
    min-width: 135px;
    height: 43px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 6px;
    color: #fff;
  }
  .btn.white {
    background-color: #fff;
    color: #09338c;
  }
  .btn.dark_blue {
    background-color: #09338c;
    color: #fff;
  }
  .btn.blue {
    background-color: #235ef3;
  }
  .btn.light_blue {
    background-color: #1e9eff;
  }
  .btn.brighter_blue {
    background-color: #6ea8fe;
    color: #343a40;
  }
  .btn.gray {
    background-color: #ffffff33;
  }
  .btn.light_gray {
    background-color: #6c757d;
    color: #fff;
  }
  .btn.brighter_gray {
    background-color: #b0b8c1;
    color: #343a40;
  }
  .btn.yellow {
    background-color: #ecd144;
    color: #343a40;
  }
  .btn.round {
    height: 39px;
    border-radius: 39px;
    font-size: 16px;
    font-weight: 700;
    min-width: 96px;
  }

  .wrap {
    min-width: 1920px;
    margin: 0 auto;
    position: relative;
  }

  /* header */
  .header {
    position: absolute;
    z-index: 5;
    left: 0;
    top: 0;
    right: 0;
  }
  .header .inner {
    display: flex;
    justify-content: space-between;
    min-height: 152px;
    padding: 64px 212px 24px 60px;
    max-width: 1920px;
    margin: 0 auto;
  }
  .header .main_logo {
    height: 64px;
  }
  .header .main_logo a,
  .header .main_logo img {
    display: block;
    height: 100%;
  }
  .header .btn_wrap {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .header .btn {
    min-width: unset;
    padding: 0 20px;
  }
  .header .btn.white {
    color: #235ef3;
  }
  .header .my_btn {
    display: block;
    width: 30px;
    height: 32px;
    background: url("/host/icon/header_my_icon.png") no-repeat center/contain;
    margin-right: 32px;
  }
  .header .txt_btns {
    margin-right: 32px;
    font-size: 0;
  }
  .header .txt_btns .btn {
    padding: 0;
    font-size: 16px;
  }
  .header .txt_btns .btn ~ .btn {
    padding-left: 19px;
    margin-left: 18px;
    border-left: 1px solid #fff;
    height: auto;
    border-radius: 0;
  }

  .main_visual {
    height: 100vh;
    position: relative;
    background: url("/host/banner/main_visual.png") no-repeat center/cover;
  }
  .main_visual .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding-top: 100px;
  }
  .main_visual .inner .title {
    font-size: 64px;
    color: #b0b8c1;
    line-height: 90px;
    font-weight: 700;
  }
  .main_visual .inner .title b {
    color: #fff;
  }
  .main_visual .inner .enroll_btn {
    display: inline-block;
    width: 280px;
    height: 64px;
    line-height: 64px;
    background-color: #1e9eff;
    color: #fff;
    border-radius: 32px;
    margin-top: 153px;
    font-size: 32px;
    font-weight: 700;
  }

  .sect01 {
    padding-top: 97px;
  }
  .sect01 .title {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
  }
  .sect01 ul {
    display: flex;
    width: 1192px;
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 100px;
  }
  .sect01 li {
    width: 584px;
    min-height: 348px;
    background-color: #292e3799;
    border-radius: 24px;
    padding: 44px 44px 50px;
  }
  .sect01 li .step {
    font-size: 32px;
    font-weight: 700;
    color: #50b9ff;
  }
  .sect01 li .tit {
    font-size: 72px;
    font-weight: 700;
    margin-top: 16.5px;
    color: #fff;
  }
  .sect01 li .desc {
    font-size: 20px;
    color: #ced4da;
    line-height: 36px;
    margin-top: 32px;
  }

  .sect02 {
    padding-top: 257px;
  }
  .sect02 .title {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    color: #b0b8c1;
  }
  .sect02 .title b {
    color: #fff;
  }
  .sect02 ul {
    display: flex;
    gap: 135px;
    justify-content: center;
    padding-top: 164px;
  }
  .sect02 li {
    width: 320px;
    min-height: 480px;
    padding: 32px 0;
    background-color: #ffffff33;
    border-radius: 20px;
    text-align: center;
    position: relative;
  }
  .sect02 li .img {
    width: 160px;
    height: 160px;
    overflow: hidden;
    margin: 0 auto;
  }
  .sect02 li .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .sect02 li .tit {
    margin-top: 38px;
    font-size: 32px;
    font-weight: 700;
  }
  .sect02 li .desc {
    margin-top: 64px;
    font-size: 24px;
  }
  .sect02 li ~ li:before {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    background-color: #5b5b5b9e;
    position: absolute;
    left: -67.5px;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    box-shadow: 0px 0px 40px 0px #00000040;
    background: #5b5b5b9e url("/host/icon/arrow_r_icon.png") no-repeat
      center/13px;
  }

  .sect03 {
    padding-top: 304px;
    padding-bottom: 63px;
  }
  .sect03 .title {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
    color: #fff;
  }
  .sect03 ul {
    width: 1240px;
    margin: 0 auto;
    padding-top: 96px;
  }
  .sect03 li {
    font-size: 32px;
    font-weight: 500;
    color: #ffffff80;
  }
  .sect03 li b {
    font-weight: 700;
    color: #fff;
  }
  .sect03 li ~ li {
    margin-top: 58px;
  }

  .sect04 {
    height: 400px;
    background: url("/host/banner/main_sub_visual.png") no-repeat center/cover;
  }
  .sect04 .inner {
    text-align: center;
  }
  .sect04 .title {
    font-size: 48px;
    color: #fff;
    font-weight: 700;
    padding-top: 90px;
  }
  .sect04 .enroll_btn {
    width: 260px;
    line-height: 64px;
    display: inline-block;
    text-align: center;
    border-radius: 32px;
    background-color: #fff;
    color: #1e9eff;
    margin-top: 47px;
    font-size: 32px;
    font-weight: 700;
  }

  .footer {
    margin-top: 18px;
  }
  .footer .inner {
    max-width: 1920px;
    height: 376px;
    padding: 64px 272px 90px 212px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .footer .l_area {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .footer .l_area .foot_logo {
    height: 64px;
  }
  .footer .l_area .foot_logo img {
    height: 100%;
  }
  .footer .l_area .btm_area {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .footer .l_area .sns_btns {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .footer .l_area .sns_btns .btn {
    display: block;
    width: 36px;
    height: 36px;
    min-width: unset;
    padding: 0;
  }
  .footer .l_area .sns_btns .btn img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer .l_area .txt_btns {
    font-size: 14px;
    font-weight: 500;
    display: flex;
  }
  .footer .l_area .txt_btns a ~ a {
    padding-left: 20px;
    margin-left: 20px;
    border-left: 1px solid #fff;
  }
  .footer .r_area .fnb {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    gap: 40px;
    margin-top: 40px;
  }
  .footer .r_area .fnb a {
    font-size: inherit;
    font-weight: inherit;
  }
  .footer .r_area .address_wrap {
    margin-top: 44px;
    font-size: 14px;
    color: #b0b8c1;
    line-height: 20px;
  }
  .footer .r_area .copyright {
    margin-top: 4px;
    font-size: 14px;
    color: #b0b8c1;
    line-height: 28px;
  }
  .footer .r_area .address_wrap a {
    color: inherit;
    font-size: inherit;
    text-decoration: underline;
  }
`,xo=h.header``,Wi="/assets/main_logo_w-BBqllR6y.png",Yi=()=>{const t=localStorage.getItem("token"),s=ke(xe),a=je(xe),{data:n,isError:l}=yi(t),c=D(),{openAlret:p}=Ee();return i.useEffect(()=>{n&&localStorage.setItem("user_type",n.data.is_company),l&&n===void 0&&(p({text:`토큰이 만료되어 로그아웃 되었습니다.
 메인화면으로 돌아갑니다.`,callback:()=>{c("/",{replace:!0})}}),localStorage.removeItem("user_type"),a())},[n,l,a]),e.jsx(xo,{children:e.jsx("div",{className:"header",children:e.jsxs("div",{className:"inner",children:[e.jsx("h1",{className:"main_logo",children:e.jsx(b,{to:"/",children:e.jsx("img",{src:Wi,alt:"마이스 메이트"})})}),!s.isLogin&&e.jsxs("div",{className:"btn_wrap",children:[e.jsxs("div",{className:"txt_btns",children:[e.jsx(b,{to:"/login",className:"btn",children:"로그인"}),e.jsx(b,{to:"/join",className:"btn",children:"회원가입"})]}),e.jsx(b,{to:"/host-main",className:"btn white round",children:"행사등록"})]}),s.isLogin&&e.jsxs("div",{className:"btn_wrap",children:[s.data.is_company?e.jsx(b,{to:"/host/my/mypage",className:"my_btn"}):e.jsx(b,{to:"/mypage/user-modify",className:"my_btn"}),s.data.is_company?e.jsx(b,{to:"/host/my/dashboard",className:"btn white round",children:"대시보드"}):e.jsx(b,{to:"/host/corporate",className:"btn white round",children:"행사등록"}),e.jsx(b,{to:"",className:"btn blue round",children:"AI챗봇"})]})]})})})},ho="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZjSURBVHgB7ZxPTBRXHMd/b1YNKpD1YKkLiXNpuzWKaAA5tVtsD42JQg/VpBYw2qSUJurF1LYWDenfk01j24MNf9QETywmpgdFFtMDbk2zioGRHjo9LNbWpCtL0Lawr+832VmHZXZ8s74ZgZ1PsuEx+2Z257u/3/v9fm9mHoE8CQbrZK2xbEb7myKSXwLqh4UAparenE2RxH/Tq1VVjSQgDwhPJ1kO+YuKp6oI8e1ie4QIUJkCWRhi2CNGKMRmgPaPj0TDPDtYCoTCrCqdPsiahxapIFao7IfuGr0ZPWHVKadAwY3VISL5OllThqWNSlOz+5Rb1yNmb/rMNr5Yue0gIVIvay41qzHDz8615Zmycvjrbnwo+815AgUr69qZWX0BBQcJmYk0RyDNcgpSHB0SWltWcf/e3fhwZovewLBNVtDfwCNB/yVbFGVYxX8kfSsTZxA8ED9ZTjv1fzSBgptqWmDpRyt+WK6HURybaQuSmsFjDiwpbtf+emNPbh5IK9dIZHmqCjxMWTk7HZIoAU+gHKA2EqFkM3iYQ8h6iRZGOZEXJAWyRMgCmcNZiBAmECy9aQyhLAMXKQ+s0156m5fJ5BQkk0mtHZ+4o73cAgWSwSECTISmvXtg+ysv2RKEB+X2rxC9/gv0nO2FCecEkwmr4Ck4wAdHDkHTW3vADc6c64XPvzoJTiBcoJKSEuj+4VsIvvAcuAlaVPP+9zKuKAoJBPNZx8eui4PgZ35z8ksQjVCBGnbuYOPNy/C0qK3eytx6N4hEqEBtrQfAadCFwv0Xc0ayttZ3NDcXhTCB6pnliI5U2aAob7zZBB9+0gGvvd6oRbBsSkqKhbq4MIFqq7eA0wwMXp1jOWfOnTftt71enJsLSxSDwechH9BlBq5chbHb46w9pW1DK8DxpLZmq6W75LLYinXiLFmYQKU2/R6F6Tl7HnqYFZiFZrQOFAcH3aa9uzNtRRmH8IWLWhL6accx02MHyp8FUQjLgy792Mc9BqGbtLCchbdkwON2sdzKzvFxjBKBQAsq5upnJg5ax6usHAmkBdDLCGP9hfvwilQqMIoJs6DRG8Nc/fCXNYrzNnOb91l6kD3WYB90pVPfnc5sq2HjEmbpPGzYXAciEJ5JW5Gdv7S9ewCOHjlsOhCjpeD7xtzqZ2ZVeAw3cVWgvguPTg6zbp7EEkVCyzE7hhu4JhCGcLQAnYZdO7j3zbYi0QWpFa4JpLA8R0fPc3jBvkY3jE/8AW7hngVNTmXa+UQZY5TEXMgtXBOopJQvDcjFZPKRwIFyZ2s+I64JFDDkL3bnlbGvcdxxuig24ppAxgl7xE64NuZCgazjOI2rYd4YuU59f1rLmB8H9gkbQjvWZW7iqkA4iW90teb9rZaWhCEd55l1cN/GnfzpgQiElRrXfrrENZOHNVaL4aQRTATxxMvTg288fkdLCI15E4K1GG96IKrUEFasYpThEQhPEKcpPjrWkdmGQmSLYQSPe5RdRuIVR+SFRVddTAetBadHAhyDbW26QG2w4VoiM21hFoSDqZ3ogn0vM5Gi6QIU99d/eUwK69n0B06d2sm4dZKGnOlJESZQPD4B+aBNreYhghVjHNGRF2Eupgj8Uk+KyFJEmEADg0OuVtlWWA34dhEmEPp9n8uTWWZYXVTMB6FRDLNjN+/dyQY/G7+DSIQKhFZk52qFSOxeKeFFeB7k1Be1AgOEU5/p2A1UCCZ3eIeZU7fD4GB8+cpQzkvQIiAbKmv/dvp5VCwVUCR86bOJdqcs9PsU0Uom0/PbLkTNBFoQPqchg4cZ6lOpxRYTEqWggoc5FC2I0N/BwxwC9yUCJK8lGwoElblYKgYe5lAakcDni4CHKdQnxSQlho8/U8+K5qOiNlqYpyD1g8ccKCXaoieaQEXSQ3zQQQUPHVUZGe7ChiZQLBZLMMkOg4eGbj1IZu2Oe3/GlbVlFWtYU8wFpcXL18rItcz6JfPWDwpu2jZICISgECE0PHYjOuf22Hm1WJHvn0ZmY91QcNDuB2TVvuytuVegqqw7ToC2QwHAzvPE6M3ocfP3LAhW1ckwSzuXqsuxQj0CbEBWbg1HcvXhWgUvuLEuBFKqhdVt+JSIDIsbNQXQT1IkbCWMDpdARuSqkL9o5mEVISk/ECJTfe1EStbDQiI9S4HFOKs3E9IsxKZXrFbVmL31FP8Hi3B6wG37VsYAAAAASUVORK5CYII=",mo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATbSURBVHgB7ZxPbBRVHMe/v7dACnSbJYKNXRLmoiwJ1GoK7M29eDAmaj2oibaWyEHhAF5MJMG2aTCGE0ZRD9XSePFGS8JRuniqpZqVElzx4HjYVZTD0m0KSruP9yadst2d/dOdt/Sx+z5JM29mdpPZz7x/v990HqFGIpGo5RQ2LDrbHLEQAw9BBzi33eJSjjL3Frbath3PoAaomg9ZVizU0jrfRRR4WXwjRuAWB+khY20kiCOxCD5xY3Z6vJovlBUkxWxpWzgmiscfUSHlsMWNPnf96vRQuQ+VFBTZ2x0jFhgVRQuNjc1zS4eS12biXicDXgf3dB48RsS+E8VGqzVehMRv7X+8PYx/b6YuF54sEhTpjA6IavUJmg6KeUlaJcipOU0px4ViO9p33r51MzW1csQtyGGbNvE/YMjw/+mZZHLKljvMPSrkTMIgCdFGPuruOIIi+/b3o/FHq+oRcz05isvicg1ib8OwCjEpHnC2pu8pzR22eRujjbkuGDzZvLQQY5xgBJVAumHE6WkYvCHaxXhzhBM1QTlYjEiTHI6OkBCExktjKIXBUBYpyIKhFJapQRUwgiqwAXUmGAyiLdjqlMMdT6w6V7hfirnsPLLZbNHxVPqvVdt6oFTQge5n0fvWG4jsftKRIuU8LJK//S7+buDzL0eQViiMRBaRQwEfD5/EKy+9CB04+9UIzgpRKlDSB0kxusiRHH33MPaL2qwCJYL6RLPSjaPvHYYKfAsKir5G9jm6IftDFX2gb0F7dj8FXVFx43wLan2II9VaqXYaUQ4FNcjfXfKa36hCC0HB5Ulgrbz6Wp8zJNdDlBaC2hQ0MTlvkaLGJy5CN3wL6gj7v0sSGS6c+GjYEaUqdAiHNahBqpHhwvMv9ODEyeG6xljVom00P37hIvrfObLuzU7rdMeDZteL9UL7fFDvm69j7OsvsF7UPR9UKzJUOCLiqQOKgs5a0U6QjJ8+/OC4NtkB34LSKTHSdEMJMgLvE01KVaItlfI/CmpRg2QzOiUSbipmvvnMzc/DL74F+Z2rfHbmdN3SJelUGn7xPYrN+Yyh6plLUjHR9C0olf4buqLi2nwLujLzE3RFhi1+8S0oK55ZTc/8DN24ouialMykdUxTnFd0TWoEicDy/AV9JH1/6bJzTSoI7GjfOQgFXJr8wRk1wuEObN/+GNYDmZUc+eZbDJ06DVUoe7Kaj5wJu8N34eRPpmhLZSHzn+MXkv983h2+3WNyP1vi+b1f6iKokTD//lIBI6gCjMBrehu4ScgwDjKCSpMxTawCjHPYMHgj3DAQ/xMGbwi3RSdt+qAy2KKJ5RIweMN5nCEQiMPgCQ+wBEsm5OvP3NSiYmzpxhnmOdgEDKvgnJxFTxxBLezuGbGxYXCxk7NT52TBEZRIJDJC2fswOLi1R7Kydsetf1JJkTzbJopRNDefJmd/XFm/pGj9oMi+g5NEiKEZIT7+6y/TPfmHimKxlsB/PaKOjaHp4GN3aMuhwqOlV6DqjA6KVMgAmgDxO4euX50e9D5XhkhX1MISH23UJicC9ThEh5y8NhUv9ZmqVsGL7I3GwHL9Im57Do/+O652DpigHI2XE+NSlaB8rK5YqGXxbhdRLgQii7trJ3LaBZ1YzlLIYFzEmxm2hMTCpq22nVjbeor3AbY/lC6HFwh9AAAAAElFTkSuQmCC",go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYPSURBVHgB7ZxNbBNHFMffjAGFjyCjQiMwEr4AiwRpikjwrT700lYC3EOL1AJB5FCaStBLJSqlCY0UInqgPaRUKigkJGrogThVEYfmC9RDMAgZghKTHro9OC0tB5NEgbaJp/OmGbNJ1saxZ+ONvb/LjvfD2vnve2/em7WHQIZoms8rGsumxDZOqJsCc4MdYEyXzek4if07uVrX9f4YZABJ5ySv1+8uWjNRRohrP7/CT4B5GRB7iLEwwoRBeApY18hgKJjOBSkFQmFWrZ08wZsnl6ggqdD5g740dD90OtVJSQXSdu7xE+pq5k0v5Dc6i08fjTy402920GW2c0fp3hOE0A7ezDerMcPN+1r5cokH/noUvTH34DyBtFJfLTerRig4iN9MpFkCCcspSHEkxL+hZPOTx4+iA4k9soHDNlnBfgWHGPuHvBqJDOj4gcq9XJw+cEDcZDlrlh+EQNqu8krI/9EqfXiuh6M4NmcsiB4Bh1nwpLhWbJ3Yk5yndOU6SpbHy8DBlJXTk37KCDgCJQG1oYSRV8DBHEK2UFYY5URGkDh4KSE2mcOxI4QLBPk3jaEUCg4pQYG84JAM7zKwAG37NtixfSssNmPjEzD8cARGR38HVSgVSOOiNNR/Jra5JPjDNThz9ksYHx+HbCF8DoiBAlCUlotfQ3FxMdiByMNf4O13DkG2uPgEUR0o4Lu2i7B+/UtgF8S98Nmu23fuQjYoGcUq9uwGz6aNYDcO7HsLskWJQJtsKA6i4qE5edALcAR6AZbkQYjMRYqL15iObCEePPGNQTmPX3bGMgs6VVMPr78REPmIGcGua3Dk2IdiKFaRr1hFzl0M85XWtitgVyxzMSPobqHbd8Hj2ZhwqYb6Gojy/ZinDHORjKBFRUf/EFtMQOe6KO5HYcfG+HFtG/88IfbhaKo63bBcoJ6+myL1lxx67yCc+uSkaGP+hAJNGFystf0KNJ2/MMvtqj+ogurjVaKNolZy14zOxDgUZGxGoIbPa8CzP/vcx4jlLoY3brSAy+0dIv6YgVbRePZc4hqZXzV9c0EEdeRTHtvMxLEKywXCTnZfvwo/Xe9MCBVKkv43nf921jXd/BrpkjJOydIBs2T8zqvft1pa/1kuED5l7ABu063y0fVkp2VMmZhjJfK7rC5xLI9B+MTRLdbyfEg+fcyNzMCAK2OW7Dh+RqS7oXDoUpfb0aIId8sRS11sUUYxY5DGjh5+/6DpeYd5AO/pvSk6jXHHeI0M7B8dPyZyK4xDjV+cA6uxTKAAjxHoKtg5HOYxAGvaVi7Cuwn3KS/fDdVQJYZ/BC0LYwoKikLJcwL73kxcg6MgtvE4WiUeRwu1CssEOpDGcIsCVpiUGhiAU01VyOMofKfROj3q49GiuJhVYCkjQUutsKCuy4tqHoXB6V4rWNIWNHRvAKwmr+eDsEbLFiUC9fTdADvS05v9fSkRCJ9Ua1sH2A1jLpUpylwMb0bFE1OFsajNBmUvDiWYnwR4DpRujZRsStbIQl4ld/diqfKjSExVoFyghYIC3fq5O+lxrN9wajZX5HwUw/glywozOpPMHS0WthjmW9vNAzzGEGOhmwtsIRC6kdkkWq7FQWyTKJqNgMEuR6AEaC3GiS8UJ6rwh1CZQgmwjP4NrJr/k83n78c6beBenBhlQGwhECJjjnxfZgNitqrmUZgz/LWPqiRPBUTbtbePEPCDw3wY9FMg7DdwMIfAEx6k7RODbIhOGYuHwcEcxriLuVz94GAKc9EwjYTx78/MsaL56KiNyKQZ0C5wmAVjRCx6IgQqos/wd3I6OEj0yODAJWwIgcLhcIxL9jE4CKT1IIm1Ox7/GY1sKNm8jjd9UNh8FRm8lVi/ZN76QQWdWRMWHL4XChh3zZvuKHL9HeA21gIFB2t5SlYdnbs3+QpUpb46PhVSCwUA7+fpofuhOvNjKdDKfF6YZs356nKMF6PAA3LkwUB/snPSWgVP2+nzA41X8rrtNVj6/3HV4wBdJE6CqYSRpCWQEW+Z31009ayMkLgbCPEyuXYiI1vATszMUmAxzuvNGJ2G8OSK1boeXth6iv8BlktOggl2JhQAAAAASUVORK5CYII=",fo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgB7ZxNbBtFFMffG7dV2iaReygRTaXuBeFKbQioJZYQ4KpwQEhAOEClko+KHgoFNb30AwklEUiEcCCoKnAoykepFHpoEySOqR1OIVTINFW7DQeWQ4oKPbh1lJYQezpvm7X8sfY67qzt2POTrB2P11rvf9/8Z97sehAKxOfza2ZhzZK5jSPzMuBeKAc4N6xiLI6R/xc2GoYRikABYD47aVrAW1M734zoeV18I4DANQ5YHmKsjDByCC8BH5+dmR7L5ws5BSJhNtQvHBHFrlUqSC4McaGHrl2Z7s21U1aBfDt2BZB5BkVRg8rG4PHYAf3q5ZDdhx67yu1NLUcQ2agoVlrU2OEV59r5WEMj/HtrbjL9wwyBfE3+bhFWfVB1YMBOpBSBzMipSnEsMLC5Yeud27fmphI1VoG6bVzH/wRFhC/i07o+ZdAbZtUKcYKgILy4lg9ab0yBfDt3d0Ll91b5I8Z61ItTcTmCWAcoUhCD4m5zq7wnO/fY+k0M18abQWHL+thCgHEEJVAWSBuGHJ8ChT2I2xivjnSiIDAOGkMskzmccgSFQFB50xhSYaDICQmkgSIbmoogB5RADqwBidTV1cFLe16AUnA3Og/Xb8zCzZt/g0ykClRfVwtt7+wD35NPQLGZE8J0vvs+yEZqE6Mf+eZbbXD6mzNQTCYuTYrjtpvHl41HTDH2gGR+vfybGfLPP+cHtzn97Rno/bQfFhcXwQ2kRNAbr70Kh987mFJ39tyoGU1uXFUiGo3CRx9/khGtz+56Bk4cOwqykNbEDh86CCePdaXU6Tf+MH1BtkgPm3I7jP34U0p92/63Yei7r6G+thZkIdWD2vbvgwvnz8KWLY8n6uhkXn6lFUa+HwUZUPNN9xvqPU+Ii3NSYuRYSB8HUQ82LK5iskhE3xcDj2zeI+d+gA4RkdS8LOg4dLx2cXHcwJWBYqP40RdFJLWLkE+GDLWjgCZHgvT1f2m+krEuhpvDCtdG0nViTERmmW7e1ERW4ku0H4lK0ZMM+Q0158a0SJWN66kGmfepgf4MX6IejsYvubBMnrbJuOU3dhQlF9sr0o90X4qKcdKHR49n9SXLb5Ijjb4/5KLf2FG0ZNXypb17XkypJ1/6oOt4ivFafpNcZ/kNjXOKSVGzefKlUwOfZ/jSpeDDVIGakp3f0ECUxHHbb+yQmqzmC/kSnexn/QOJKLF8yW7fdEGLScnmgygqLpwfyRgvWdDgj/ymlOIQJZ0wa1we5O1O8xUSjcQrtt/YUfIZRUskihSKGjLxi0KcUviNHSXxIDtMrzlU2uZkh5qTdkAJ5IASyAElkANKIAeUQA5UpEB35+dBFlIEmghOQjmh67MgCykC0dxOsW8WZoPudKTf7XgUcHtTCwdJUE5FqQLdgi4FE8GfpUezVIEqEdWLOaAEcoAh8IL+DVwlRBgHVAJlJ6KamAOMczBAYY/QhgHyv0BhD8IdYdLKg3JgiCYWD4PCHs5DDDyeEChs4R4WZnqY/v7MVRRlYpA2ZjfPgY2DIgXO0Vz0xBSoht0fEBsDFBaGPjM1RAVToHA4HBGSFeeJpFWAFT1EYu2O2//M6Zsbtm4SRfef/i5vvtJnfkmsX5KxfpBvZ0sQEQJQjSAfu/77dGtyVUYuVuP5r1XE2DBUHXz4Hm44kF6bfQWqJn+PmArphipAnGfvtSvTPfaf5cDX7NcgxgcrtcmJRD0EwpD1q1OhbPvktQqeb4c/ACzeKfI2egJTg9WNEQcYxziO5RLGIi+BktGaA96apfvNiHEvIGrcWjuR4zYoJ5ZnKSgZF/lmhMUgvLBuo2GEV7ae4gPIeOcQTv0vrQAAAABJRU5ErkJggg==",uo=()=>e.jsx("footer",{className:"footer",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"l_area",children:[e.jsx("div",{className:"foot_logo",children:e.jsx("img",{src:Wi,alt:""})}),e.jsxs("div",{className:"btm_area",children:[e.jsxs("div",{className:"sns_btns",children:[e.jsx(b,{to:"https://www.instagram.com/mindsground?igsh=MmVnaThtdHF4Z2V2&utm_source=qr",target:"_blank",className:"btn",children:e.jsx("img",{src:ho,alt:""})}),e.jsx(b,{to:"https://www.youtube.com/@mindsground_official",target:"_blank",className:"btn",children:e.jsx("img",{src:mo,alt:""})}),e.jsx(b,{to:"https://blog.naver.com/mindsstudio",target:"_blank",className:"btn",children:e.jsx("img",{src:go,alt:""})}),e.jsx(b,{to:"mailto:admin@mindsground.com",target:"_blank",className:"btn",children:e.jsx("img",{src:fo,alt:""})})]}),e.jsxs("div",{className:"txt_btns",children:[e.jsx("a",{href:"#none",children:"창업기업확인서 받기"}),e.jsx("a",{href:"#none",children:"사회적기업확인서 받기"})]})]})]}),e.jsxs("div",{className:"r_area",children:[e.jsxs("div",{className:"fnb",children:[e.jsx(b,{to:"/event-list?page=1&date=1",children:"이번주 행사"}),e.jsx(b,{to:"/event-list?page=1&price=2",children:"무료 행사"}),e.jsx(b,{to:"/event-list?page=1&progress=2",children:"온라인 행사"}),e.jsx(b,{to:"/event-list",children:"메이트 PICK"})]}),e.jsxs("div",{className:"address_wrap",children:["마인즈그라운드 주식회사 ㅣ 대표이사 : 민환기 ㅣ 사업자 등록번호 : 732-87-01581",e.jsx("br",{}),"서울특별시 금천구 가산디지털1로 171 SKV1 301호",e.jsx("br",{}),"Tel : 02-6747-7513 ㅣ Fax : 02 -6499-7513 ㅣ E-mail : admin@mindsground.com",e.jsx("br",{}),e.jsx(b,{to:"/privacy-policy",children:"개인정보처리방침"})]}),e.jsx("div",{className:"copyright",children:"Copyright © 마인즈그라운드 주식회사. All Rights Reserved."})]})]})}),bo="/assets/main_sect02_01-DPhhA7v4.png",_o="/assets/main_sect02_02-CM4LcTHY.png",jo="/assets/main_sect02_03-DFe-BKX1.png",wo="/assets/main_sect02_04-CE4S65Xb.png",vo=()=>{const t=D(),s=ke(xe),a=()=>{s.isLogin===!1?t("/login"):s.data.is_company===!1?t("/host/corporate"):s.data.is_company===!0&&t("/host/my/apply-register/new")};return e.jsx(po,{children:e.jsxs("div",{className:"wrap",children:[e.jsx(Yi,{}),e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"main_visual",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"title",children:[e.jsx("b",{children:"AI"}),"로 연결되는 ",e.jsx("b",{children:"완벽한 행사 파트너"}),e.jsx("br",{}),e.jsx("b",{children:"마이스 메이트"}),"가 함께합니다"]}),e.jsx("button",{onClick:a,className:"enroll_btn",children:"행사 등록하기"})]})}),e.jsxs("div",{className:"sect01",children:[e.jsx("div",{className:"title",children:e.jsx("b",{children:"메이트님의 성공적인 행사, AI로 더 쉽고 스마트하게!"})}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("div",{className:"step",children:"Point 1"}),e.jsx("div",{className:"tit",children:"Promotion"}),e.jsxs("div",{className:"desc",children:["단순한 홍보가 아닌 AI 행사 추천으로 맞춤 고객에게",e.jsx("br",{}),"메이트님의 행사를 효율적으로 노출합니다"]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"step",children:"Point 2"}),e.jsx("div",{className:"tit",children:"Management"}),e.jsx("div",{className:"desc",children:"더 쉽고 간편하게 모집현황을 확인해보세요"})]}),e.jsxs("li",{children:[e.jsx("div",{className:"step",children:"Point 3"}),e.jsx("div",{className:"tit",children:"Marketing"}),e.jsxs("div",{className:"desc",children:["AI 이용료는 무료입니다 !",e.jsx("br",{}),"효과적으로 행사의 맞춤 참관객을 모집해보세요"]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"step",children:"Point 4"}),e.jsx("div",{className:"tit",children:"Community"}),e.jsxs("div",{className:"desc",children:["방문 참관객의 생생한 후기를 통해",e.jsx("br",{}),"다음 행사를 더 멋지게 준비해보세요"]})]})]})]}),e.jsxs("div",{className:"sect02",children:[e.jsxs("div",{className:"title",children:["멋진 행사 개최의 시작",e.jsx("br",{}),e.jsx("b",{children:"메이트의 행사 등록 프로세스"})]}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("div",{className:"img",children:e.jsx("img",{src:bo,alt:""})}),e.jsx("div",{className:"tit",children:"메이트 등록"}),e.jsxs("div",{className:"desc",children:["기존회원은 기업회원전환,",e.jsx("br",{}),"신규회원은 회원가입을",e.jsx("br",{}),"진행해주세요."]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"img",children:e.jsx("img",{src:_o,alt:""})}),e.jsx("div",{className:"tit",children:"행사 업로드"}),e.jsxs("div",{className:"desc",children:["모객을 진행하고자하는",e.jsx("br",{}),"행사의 정보를 올려주세요.",e.jsx("br",{}),"심사기간이 1-2일",e.jsx("br",{}),"소요됩니다."]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"img",children:e.jsx("img",{src:jo,alt:""})}),e.jsx("div",{className:"tit",children:"참관객 모집"}),e.jsxs("div",{className:"desc",children:["마이스 메이트에서",e.jsx("br",{}),"더 많은 참관객을",e.jsx("br",{}),"모집해 보세요."]})]}),e.jsxs("li",{children:[e.jsx("div",{className:"img",children:e.jsx("img",{src:wo,alt:""})}),e.jsx("div",{className:"tit",children:"참관객 관리"}),e.jsxs("div",{className:"desc",children:["마이페이지에서",e.jsx("br",{}),"쉽고 합리적으로 참관객",e.jsx("br",{}),"현황을 확인하고",e.jsx("br",{}),"관리 할 수 있어요."]})]})]})]}),e.jsxs("div",{className:"sect03",children:[e.jsx("div",{className:"title",children:"이런 점 궁금하셨나요? FAQ"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("b",{style:{marginBottom:"15px",display:"block"},children:"Q. 마이스 메이트 플랫폼은 무엇이 다른가요?"}),e.jsx("b",{children:"A."})," 마이스 메이트는 모든 MICE 행사를 모아, 기업과 고객이 인공지능 기술을 통해 만나고 최적의 이벤트와 고객을 연결할 수 있도록 도와주는 플랫폼입니다."]}),e.jsxs("li",{children:[e.jsx("b",{style:{marginBottom:"15px",display:"block"},children:"Q. AI 맞춤형 행사가 어떻게 추천 되나요?"}),e.jsx("b",{children:"A."})," 고객의 관심사, 과거 참여 기록, 프로필 데이터를 분석한 AI 알고리즘이 최적의 행사를 추천합니다."]}),e.jsxs("li",{children:[e.jsx("b",{style:{marginBottom:"15px",display:"block"},children:"Q. 기업회원은 어떻게 가입하나요?"}),e.jsx("b",{children:"A."})," 홈페이지 우측 상단 행사 등록하기를 통해 기본 정보로 회원가입/ 기업정보를 입력하여",e.jsx("br",{}),"가입하실 수 있습니다."]}),e.jsxs("li",{children:[e.jsx("b",{style:{marginBottom:"15px",display:"block"},children:"Q. 이용 요금은 어떻게 되나요?"}),e.jsx("b",{children:"A."})," 모든 기능은 기본으로 무료제공되며, 추가 광고,홍보가 필요할 시 유료 이용가능합니다.",e.jsx("br",{}),"상세 내용은 프로모션 페이지를 참고해주세요"]})]})]}),e.jsx("div",{className:"sect04",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"title",children:["지금 바로 최고의 행사를 만들어 볼까요?",e.jsx("br",{}),"마이스 메이트에서 시작됩니다"]}),e.jsx("button",{onClick:a,className:"enroll_btn",children:"행사 등록하기"})]})})]}),e.jsx(uo,{})]})})},yo=h.div`
  font-family: "Pretendard", sans-serif;
  color: #fff;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  menu,
  nav,
  section,
  article,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption {
    margin: 0;
    padding: 0;
    font-family: "Pretendard", sans-serif;
  }

  body.fixed {
    overflow-y: hidden;
  }
  input,
  select,
  textarea,
  button,
  pre {
    border: none;
    font-size: 16px;
    font-family: "Pretendard", sans-serif;
    color: #fff;
  }
  ul,
  ol,
  li {
    list-style-type: none;
  }
  table {
    border-spacing: 0;
  }
  img,
  fieldset {
    border: 0;
  }
  address,
  cite,
  code {
    font-style: normal;
    font-weight: normal;
  }
  em,
  i {
    font-style: normal;
  }
  label,
  img,
  input,
  select,
  textarea,
  button {
    vertical-align: middle;
  }
  .hide,
  legend {
    overflow: hidden;
    display: block;
    position: absolute;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
  }
  hr {
    display: none;
  }
  main,
  header,
  section,
  nav,
  footer,
  aside,
  article,
  figure {
    display: block;
  }
  a {
    color: #fff;
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    background-color: transparent;
    font-weight: 500;
    outline: none;
    outline-offset: 2px;
  }
  pre {
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }

  /* input */
  input[type="password"],
  input[type="tel"],
  input[type="time"],
  input[type="text"],
  input[type="search"],
  input[type="email"],
  input[type="file"],
  input[type="url"],
  input[type="number"],
  input[type="date"],
  textarea,
  pre {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    border: 0.5px solid #fff;
    background-color: transparent;
    transition: all 0.15s, width 0s;
    box-sizing: border-box;
    vertical-align: middle;
    outline: none;
    outline-offset: 2px;
  }
  pre {
    overflow: auto;
  }

  input[type="password"]::-moz-reveal,
  input[type="password"]::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  input[type="email"],
  input[type="number"],
  input[type="password"],
  input[type="date"],
  input[type="text"] {
    height: 48px;
    line-height: 47px;
    padding: 0 18px;
    border-radius: 10px;
  }
  input[type="date"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input[type="date"] {
    position: relative;
    letter-spacing: -1px;
  }
  input[type="date"]::-webkit-calendar-picker-indicator,
  input[type="date"]::-webkit-inner-spin-button {
    background: url("/images/icon/date_inp_icon.png") no-repeat center/contain;
    width: 19px;
    height: 19px;
    cursor: pointer;
  }
  input[type="date"].small::-webkit-calendar-picker-indicator,
  input[type="date"].small::-webkit-inner-spin-button {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }

  textarea::-webkit-input-placeholder,
  input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 500;
  }

  input.small {
    height: 24px;
    line-height: 23px;
    border-radius: 5px;
    padding: 0 5px;
  }

  textarea,
  pre {
    resize: none;
    width: 100%;
    border-radius: 6px;
    padding: 12px;
    height: 100%;
  }
  textarea:focus {
    outline: none;
    border: 1.5px solid #000;
    padding: 11.5px;
    color: #24272a;
  }
  textarea::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  textarea::-webkit-scrollbar-thumb {
    background: #b4b7ba;
    border-radius: 100px;
    border: 10px solid transparent;
  }
  textarea::-webkit-scrollbar-track {
    background: #b4b7ba;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  input[type="text"]::-ms-clear {
    display: none;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select::-ms-expand {
    display: none;
  }
  select {
    background-color: transparent;
    border: 0.5px solid #fff;
    border-radius: 10px;
    height: 48px;
    padding: 0 18px;
  }
  select {
    background: url("/images/icon/select_arrow_big.png") no-repeat right 20px
      center/10px;
  }
  select option {
    color: #000;
  }
  select option:disabled {
    display: none;
  }

  /* 텍스트박스(공통사항)-자동완성스타일 */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    -webkit-box-shadow: none !important;
    -webkit-text-fill-color: #fff !important;
  }

  /* display */
  .dis_none {
    display: none;
  }
  .dis_block {
    display: block;
  }
  .dis_inblock {
    display: inline-block;
  }
  .dis_flex {
    display: flex;
    align-items: center;
  }

  .gap5 {
    gap: 5px;
  }
  .gap7 {
    gap: 7px;
  }
  .gap10 {
    gap: 10px;
  }
  .gap11 {
    gap: 11px;
  }
  .gap16 {
    gap: 16px;
  }
  .gap19 {
    gap: 19px;
  }
  .gap20 {
    gap: 20px;
  }
  .gap21 {
    gap: 21px;
  }
  .gap23 {
    gap: 23px;
  }
  .gap32 {
    gap: 32px;
  }
  .gap38 {
    gap: 38px;
  }
  .flex1 {
    flex: 1;
  }

  .justify_between {
    justify-content: space-between;
  }
  .justify_end {
    justify-content: flex-end;
  }
  .justify_center {
    justify-content: center;
  }
  .align_start {
    align-items: flex-start;
  }
  .align_end {
    align-items: flex-end;
  }

  .row_item_7 {
    flex-wrap: wrap;
    gap: 18px 0;
  }
  .row_item_7 .item {
    width: calc((100% / 7));
  }

  /* text-align */
  .txt_center {
    text-align: center !important;
  }
  .txt_left {
    text-align: left !important;
  }
  .txt_right {
    text-align: right !important;
  }

  .underline {
    text-decoration: underline;
  }

  /* font-size */
  .fs_0 {
    font-size: 0;
  }
  .fs_10 {
    font-size: 10px;
  }
  .fs_11 {
    font-size: 11px;
  }
  .fs_12 {
    font-size: 12px;
  }
  .fs_13 {
    font-size: 13px !important;
  }
  .fs_14 {
    font-size: 14px !important;
  }
  .fs_15 {
    font-size: 15px;
  }
  .fs_16 {
    font-size: 16px;
  }
  .fs_18 {
    font-size: 18px;
  }
  .fs_19 {
    font-size: 19px;
  }
  .fs_20 {
    font-size: 20px;
  }
  .fs_24 {
    font-size: 24px;
  }
  .fs_40 {
    font-size: 40px;
  }

  /* font-weight */
  .fw_400 {
    font-weight: 400;
  }
  .fw_500 {
    font-weight: 500;
  }
  .fw_600 {
    font-weight: 600;
  }
  .fw_700 {
    font-weight: 700;
  }

  /* line-height */

  /* color */
  .col_gray {
    color: rgba(255, 255, 255, 0.5);
  }
  .col_red {
    color: #f66;
  }
  .col_orange {
    color: #ffad15 !important;
  }
  .col_yellow {
    color: #ecd144;
  }
  .col_green {
    color: #359d9e;
  }
  .col_blue {
    color: #1a73e8;
  }
  .col_darkblue {
    color: #09338c;
  }
  .col_white {
    color: #fff;
  }

  /* margin */
  .mt_4 {
    margin-top: 4px;
  }
  .mt_7 {
    margin-top: 7px;
  }
  .mt_8 {
    margin-top: 8px;
  }
  .mt_10 {
    margin-top: 10px;
  }
  .mt_12 {
    margin-top: 12px;
  }
  .mt_14 {
    margin-top: 14px;
  }
  .mt_15 {
    margin-top: 15px;
  }
  .mt_16 {
    margin-top: 16px;
  }
  .mt_18 {
    margin-top: 18px;
  }
  .mt_20 {
    margin-top: 20px;
  }
  .mt_22 {
    margin-top: 22px;
  }
  .mt_24 {
    margin-top: 24px;
  }
  .mt_25 {
    margin-top: 25px;
  }
  .mt_26 {
    margin-top: 26px;
  }
  .mt_29 {
    margin-top: 29px;
  }
  .mt_30 {
    margin-top: 30px;
  }
  .mt_32 {
    margin-top: 32px;
  }
  .mt_36 {
    margin-top: 36px;
  }
  .mt_40 {
    margin-top: 40px;
  }
  .mt_44 {
    margin-top: 44px;
  }
  .mt_48 {
    margin-top: 48px;
  }
  .mt_55 {
    margin-top: 55px;
  }
  .mt_62 {
    margin-top: 62px;
  }
  .mt_64 {
    margin-top: 64px;
  }
  .mt_80 {
    margin-top: 80px;
  }
  .mt_100 {
    margin-top: 100px;
  }
  .mt_190 {
    margin-top: 190px;
  }
  .mt_250 {
    margin-top: 250px;
  }
  .mt_326 {
    margin-top: 326px;
  }

  .ml_4 {
    margin-left: 4px;
  }
  .ml_22 {
    margin-left: 22px;
  }
  .ml_86 {
    margin-left: 86px;
  }
  .mr_22 {
    margin-right: 22px;
  }

  /* padding */
  .pl_15 {
    padding-left: 15px;
  }
  .pr_0 {
    padding-right: 0 !important;
  }
  .pr_20 {
    padding-right: 20px;
  }
  .pr_52 {
    padding-right: 52px;
  }

  /* width */
  .w_full {
    width: 100%;
  }
  .w_60 {
    width: 60px;
  }
  .w_72 {
    width: 72px;
  }
  .w_83 {
    width: 83px;
  }
  .w_96 {
    width: 96px;
  }
  .w_104 {
    width: 104px;
  }
  .w_136 {
    width: 136px;
  }
  .w_177 {
    width: 177px;
  }
  .w_240 {
    width: 240px;
  }
  .w_292 {
    width: 292px;
  }
  .w_364 {
    width: 364px;
  }
  .w_372 {
    width: 372px;
  }
  .w_384 {
    width: 384px;
  }
  .w_412 {
    width: 412px;
  }
  .w_548 {
    width: 548px;
  }
  .w_767 {
    width: 767px;
  }
  .w_880 {
    width: 880px;
  }

  .min_w_84 {
    min-width: 84px !important;
  }

  /* height */
  .min_h_300 {
    min-height: 300px;
  }
  .min_h_864 {
    min-height: 864px;
  }

  /* input */
  /* input */
  .date_inp_wrap {
    position: relative;
  }
  .date_inp_wrap input[type="date"] {
    position: absolute;
    right: 15px;
    top: 0;
    width: 19px;
    padding: 0;
    border: 0;
    cursor: pointer;
    opacity: 0;
  }
  .date_inp_wrap label {
    position: absolute;
    right: 15px;
    top: calc(50% - 10px);
    width: 19px;
    height: 20px;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: url("/images/icon/date_inp_icon.png") no-repeat center/contain;
  }

  .num_inp_wrap {
    position: relative;
    border-radius: 10px;
  }
  .num_inp_wrap input {
    width: 100%;
  }
  .num_inp_wrap .increase {
    width: 25px;
    height: 24px;
    right: 1px;
    top: 1px;
    position: absolute;
    background: #0d224f url("/images/icon/arrow_t_icon.png") no-repeat
      center/10px;
    border-top-right-radius: 10px;
  }
  .num_inp_wrap .decrease {
    width: 25px;
    height: 24px;
    right: 1px;
    bottom: 1px;
    position: absolute;
    background: #0d224f url("/images/icon/arrow_b_icon.png") no-repeat
      center/10px;
    border-bottom-right-radius: 10px;
  }

  input.small.search {
    padding-left: 44px;
    background: url("/images/icon/search_icon.png") no-repeat left 12px
      center/15px;
  }

  input.type_w {
    background-color: #d9d9d9;
    color: #000;
  }
  input.type_w::placeholder {
    color: #a1a1a1;
  }

  input.type_err {
    border: 2px solid #dab600;
  }

  .file_inp {
    width: 75px;
    height: 75px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border: 0.5px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    font-size: 12px;
  }
  .file_inp:before {
    content: "";
    display: block;
    width: 26px;
    height: 26px;
    background: url("/images/icon/camera_icon.png") no-repeat center/contain;
  }
  .file_inp.vertical {
    width: 60px;
  }
  .file_inp.horizontal {
    width: 100px;
  }

  /* checkbox */
  .checkbox {
    display: inline-block;
  }
  .checkbox input {
    width: 0px;
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: -9999px;
  }
  .checkbox label {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    padding-left: 16px;
    text-indent: 6px;
    background: url("/images/icon/chk_off.png") no-repeat left top/16px;
  }
  .checkbox input:checked + label {
    background-image: url("/images/icon/chk_on.png");
  }
  .checkbox.big label {
    height: 32px;
    line-height: 32px;
    padding-left: 32px;
    background-size: 32px;
  }

  .checkbox02 {
    display: inline-block;
    position: relative;
  }
  .checkbox02 input {
    width: 0px;
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: -9999px;
  }
  .checkbox02 label {
    width: 100%;
    height: 48px;
    display: inline-flex;
    align-items: center;
    padding-left: 52px;
    border: 0.5px solid #fff;
    border-radius: 10px;
    position: relative;
  }
  .checkbox02 label:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -8px;
    border: 0.5px solid #fff;
  }
  .checkbox02 input:checked + label {
    padding-left: 52px;
    border: 2px solid #09338c;
    background-color: #0d224f33;
    color: #fff;
  }
  .checkbox02 input:checked + label:before {
    background: url("/images/icon/chk_on_02.png") no-repeat center 5px/10px;
    background-color: #0d224f;
    left: 20px;
  }
  .checkbox02 label .col_red {
    margin-left: 6px;
  }
  .checkbox02 .required_toggle_btn {
    position: absolute !important;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .checkbox02 input:required + label:after {
    content: "*";
    display: block;
    color: #f66;
    margin-left: 6px;
  }
  .checkbox02 input:required + label + .required_toggle_btn i {
    background: #778dbd;
  }
  .checkbox02 input:required + label + .required_toggle_btn i:before {
    background: #09338c;
    transform: translate(0%, -50%);
  }

  /* checkbox02 수정 */
  .checkbox_toggle {
    display: inline-block;
    position: relative;
  }
  .checkbox_toggle .input {
    width: 0px;
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: -9999px;
  }
  .checkbox_toggle .label {
    width: 100%;
    height: 48px;
    display: inline-flex;
    align-items: center;
    padding-left: 52px;
    border: 0.5px solid #fff;
    border-radius: 10px;
    position: relative;
  }
  .checkbox_toggle .label:before {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 2px;
    overflow: hidden;
    position: absolute;
    left: 20px;
    top: 50%;
    margin-top: -8px;
    border: 0.5px solid #fff;
  }
  .checkbox_toggle .input:checked + .label {
    padding-left: 52px;
    border: 2px solid #09338c;
    background-color: #0d224f33;
    color: #fff;
  }
  .checkbox_toggle .input:checked + .label:before {
    background: url("/images/icon/chk_on_02.png") no-repeat center 5px/10px;
    background-color: #0d224f;
    left: 20px;
  }
  .checkbox_toggle .label .col_red {
    margin-left: 6px;
  }
  .checkbox_toggle .required_toggle_btn {
    position: absolute !important;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .checkbox_toggle .input:required + .label:after {
    content: "*";
    display: block;
    color: #f66;
    margin-left: 6px;
  }
  .checkbox_toggle .input:checked + .required_toggle_btn i {
    background: #778dbd;
  }
  .checkbox_toggle .input:checked + .required_toggle_btn i:before {
    background: #09338c;
    transform: translate(0%, -50%);
  }
  .checkbox_toggle .toggle:checked + .required_toggle_btn i:before {
    background: #09338c;
    transform: translate(0%, -50%);
  }
  /* checkbox02 수정 */
  .radio {
    display: inline-block;
  }
  .radio input {
    width: 0px;
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: -9999px;
  }
  .radio label {
    display: inline-block;
    height: 24px;
    line-height: 24px;
    padding-left: 24px;
    text-indent: 10px;
    background: url("/images/icon/radio_off.png") no-repeat left top/24px;
  }
  .radio input:checked + label {
    background-image: url("/images/icon/radio_on.png");
  }

  .radio02 {
    display: inline-block;
  }
  .radio02 input {
    width: 0px;
    height: 0px;
    overflow: hidden;
    position: absolute;
    left: -9999px;
  }
  .radio02 label {
    display: inline-block;
    height: 15px;
    line-height: 15px;
    padding-left: 15px;
    text-indent: 10px;
    background: url("/images/icon/radio02_off.png") no-repeat left top/15px;
    font-size: 14px;
    color: #393939;
    font-weight: 500;
  }
  .radio02 input:checked + label {
    background-image: url("/images/icon/radio02_on.png");
  }

  /* button */
  .btn {
    display: inline-flex;
    min-width: 135px;
    height: 48px;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 6px;
  }
  .btn.white {
    background-color: #fff;
    color: #09338c;
  }
  .btn.dark_blue {
    background-color: #09338c;
    color: #fff;
  }
  .btn.blue {
    background-color: #235ef3;
  }
  .btn.light_blue {
    background-color: #1e9eff;
  }
  .btn.brighter_blue {
    background-color: #6ea8fe;
    color: #343a40;
  }
  .btn.gray {
    background-color: #ffffff33;
  }
  .btn.light_gray {
    background-color: #6c757d;
    color: #fff;
  }
  .btn.brighter_gray {
    background-color: #b0b8c1;
    color: #343a40;
  }
  .btn.yellow {
    background-color: #ecd144;
    color: #343a40;
  }
  .btn.blue_bor {
    border: 2px solid #09338c;
  }

  .btn.w_72 {
    min-width: unset;
  }

  .btn.small {
    height: 32px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    min-width: 72px;
  }
  .btn.round {
    height: 39px;
    border-radius: 39px;
    font-size: 16px;
    font-weight: 700;
    min-width: 96px;
  }
  .btn.h_36 {
    height: 36px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  .btn.gray.small {
    color: #ffffff80;
  }

  .btn.border_w {
    height: 24px;
    min-width: 48px;
    border: 0.5px solid #fff;
    border-radius: 5px;
    font-size: 16px;
    background-color: transparent;
  }
  select.btn.border_w {
    padding-right: 30px;
    background: url("/images/icon/select_arrow.png") no-repeat right 12px
      center/8px;
  }
  input:checked + .btn.border_w {
    background-color: #fff;
    color: #1e9eff;
  }

  .sort_btn {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    height: 19px;
    padding-left: 27px;
    background: url("/images/icon/arrow_sort_icon.png") no-repeat left
      center/contain;
  }

  .btn_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .required_toggle_btn {
    position: relative;
    font-size: 14px;
    padding-right: 27px;
  }
  .required_toggle_btn i {
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 21px;
    height: 8px;
    border-radius: 8px;
    background: #d9d9d9;
  }
  .required_toggle_btn i:before {
    content: "";
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    left: 50%;
    top: 50%;
    transform: translate(-100%, -50%);
    background: #ffffff;
    box-shadow: 0 1px 4px #00000040;
    transition: all 0.3s;
  }
  .required_toggle_btn.active i {
    background: #778dbd;
  }
  .required_toggle_btn.active i:before {
    background: #09338c;
    transform: translate(0%, -50%);
  }

  .download_btn {
    width: 48px;
    height: 48px;
    display: inline-block;
    border-radius: 50%;
    background: #3b4048 url("/images/icon/download_icon.png") no-repeat
      center/24px;
  }

  /* pagination */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pagination .num {
    display: block;
    font-size: 16px;
    color: #ffffff80;
    font-weight: 500;
  }
  .pagination .num.active {
    color: #fff;
  }
  .pagination .num ~ .num {
    margin-left: 18px;
  }
  .pagination .pagi_prev {
    display: block;
    width: 16px;
    height: 23px;
    padding: 0 4px;
    background: url("/images/icon/pagi_prev.png") no-repeat center/8px;
    margin-right: 6px;
  }
  .pagination .pagi_next {
    display: block;
    width: 16px;
    height: 23px;
    padding: 0 4px;
    background: url("/images/icon/pagi_next.png") no-repeat center/8px;
    margin-left: 6px;
  }

  /* icon */
  .arrow_t_icon {
    display: inline-block;
    width: 14px;
    height: 7px;
    vertical-align: middle;
    background: url("/images/icon/arrow_t_icon.png") no-repeat center/contain;
  }
  .arrow_b_icon {
    display: inline-block;
    width: 14px;
    height: 7px;
    vertical-align: middle;
    background: url("/images/icon/arrow_b_icon.png") no-repeat center/contain;
  }
  .arrow_r_icon {
    display: inline-block;
    width: 14px;
    height: 7px;
    vertical-align: middle;
    background: url("/images/icon/arrow_r_icon.png") no-repeat center/contain;
  }
  .date_icon {
    margin-left: 5px;
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    background: url("/images/icon/date_inp_icon.png") no-repeat center/contain;
  }
  .info_icon {
    display: inline-block;
    width: 10px;
    height: 10px;
    vertical-align: middle;
    background: url("/images/icon/info_circle_fill.png") no-repeat
      center/contain;
  }

  .blue_icon_box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #09338c;
    font-size: 20px;
    font-weight: 700;
  }

  /* layout */
  .wrap {
    width: 1920px;
    margin: 0 auto;
    position: relative;
    padding: 0 212px 0 60px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    padding-bottom: 64px;
    padding-top: 6px;
  }
  .container .cont_area {
    width: 1344px;
  }
  .container .cont_area .cont_panel {
    background-color: rgba(41, 46, 55, 0.5);
    border-radius: 20px;
    padding: 50px 54px 62px 52px;
  }
  .container .cont_area .cont_panel.type2 {
    padding: 101px 54px 64px 134px;
  }

  .container .history_tit {
    width: 100%;
    padding-left: 17px;
    display: flex;
    padding-bottom: 15px;
    align-items: center;
    padding-top: 91px;
  }
  .container .history_tit .item {
    display: block;
    line-height: 38px;
    font-size: 32px;
    font-weight: 700;
  }
  .container .history_tit .item ~ .item {
    margin-left: 21px;
    padding-left: 23px;
    background: url("/images/icon/arrow_r_icon.png") no-repeat left center/7px;
  }
  .container .history_tit .btn {
    margin-left: 16px;
    cursor: default;
  }

  /* header */
  .header .inner {
    display: flex;
    justify-content: space-between;
    min-height: 152px;
    padding: 64px 0 24px 0;
  }
  .header .main_logo {
    height: 64px;
  }
  .header .main_logo a,
  .header .main_logo img {
    display: block;
    height: 100%;
  }
  .header .btn_wrap {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  .header .btn {
    min-width: unset;
    padding: 0 20px;
  }
  .header .btn.white {
    color: #235ef3;
  }
  .header .my_btn {
    display: block;
    width: 30px;
    height: 32px;
    background: url("/images/icon/header_my_icon.png") no-repeat center/contain;
    margin-right: 32px;
  }

  /* lnb */
  .lnb_area {
    width: 280px;
  }
  .lnb_area .lnb01 {
    width: 280px;
    padding: 30px 19px;
    background-color: rgba(41, 46, 55, 0.5);
    border-radius: 20px;
  }
  .lnb_area .lnb01 > li ~ li {
    margin-top: 10px;
  }
  .lnb_area .lnb01 .depth01 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff80;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px;
    line-height: 40px;
    border-radius: 20px;
  }
  .lnb_area .lnb01 .depth02_list {
    padding-top: 0;
    max-height: 0;
    transition: all 1s;
    overflow: hidden;
  }
  .lnb_area .lnb01 .depth02_list .depth02 {
    display: flex;
    width: 100%;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff80;
    padding: 0 26px;
  }
  .lnb_area .lnb01 .depth01.active,
  .lnb_area .lnb01 .depth01:hover {
    color: #fff;
    background-color: #ffffff1a;
    width: 100%;
  }
  .lnb_area .lnb01 .depth02_list .depth02 ~ .depth02 {
    margin-top: 4px;
  }
  .lnb_area .lnb01 .depth01.active .arrow_b_icon {
    transform: rotateZ(180deg);
  }
  .lnb_area .lnb01 .depth02_list.active {
    max-height: 150px;
    padding-top: 18px;
  }
  .lnb_area .lnb01 .depth02_list .depth02.active,
  .lnb_area .lnb01 .depth02_list .depth02:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .lnb_area .lnb02_wrap {
    padding-top: 27px;
    width: 280px;
  }
  .lnb_area .lnb02_wrap .user_area {
    display: flex;
    gap: 28px;
    align-items: center;
  }
  .lnb_area .lnb02_wrap .user_area .img {
    width: 102px;
    height: 102px;
    border-radius: 50%;
    background-color: #a0a0a0;
    overflow: hidden;
  }
  .lnb_area .lnb02_wrap .user_area .img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .lnb_area .lnb02_wrap .user_area .user_name {
    font-size: 20px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .lnb_area .lnb02_wrap .user_area .admini {
    font-size: 16px;
    font-weight: 400;
    margin-top: 5px;
  }
  .lnb_area .lnb02_wrap .title_tag {
    width: 240px;
    line-height: 40px;
    border-radius: 20px;
    background-color: #fff;
    padding: 0 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
    color: #09338c;
    text-align: center;
    margin-top: 19px;
  }
  .lnb_area .lnb02 {
    margin-top: 16px;
    width: 240px;
  }
  .lnb_area .lnb02 > li ~ li {
    margin-top: 10px;
  }
  .lnb_area .lnb02 .depth01 {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff80;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 10px 29px;
    height: 40px;
    border-radius: 20px;
  }
  .lnb_area .lnb02 .depth02_list {
    max-height: 0;
    padding-top: 0;
    transition: all 1s;
    overflow: hidden;
  }
  .lnb_area .lnb02 .depth02_list .depth02 {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    padding-left: 45px;
    border-radius: 20px;
    color: #ffffff80;
  }
  .lnb_area .lnb02 .depth02_list .depth02 ~ .depth02 {
    margin-top: 10px;
  }
  .lnb_area .lnb02 .depth01.active,
  .lnb_area .lnb02 .depth01:hover {
    color: #fff;
    background-color: #ffffff1a;
  }
  .lnb_area .lnb02 > li:first-child .depth01.active,
  .lnb_area .lnb02 > li:first-child .depth01:hover {
    background-color: transparent;
  }
  .lnb_area .lnb02 .depth01.active .arrow_b_icon {
    transform: rotateZ(180deg);
  }
  .lnb_area .lnb02 .depth02_list.active {
    max-height: 500px;
    padding-top: 8px;
  }
  .lnb_area .lnb02 .depth02_list .depth02.active,
  .lnb_area .lnb02 .depth02_list .depth02:hover {
    color: #fff;
    background-color: #ffffff1a;
  }

  .lnb_area .add_new_btn {
    display: inline-flex;
    width: 280px;
    background-color: #fff;
    border-radius: 30px;
    height: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    color: #235ef3;
    font-weight: 18px;
    font-weight: 700;
  }
  .lnb_area .add_new_btn + .lnb01 {
    margin-top: 15px;
  }

  /* tit_wrap */
  .tit_wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .tit_wrap > div {
    display: flex;
  }
  .tit_wrap .tit {
    font-size: 24px;
    font-weight: 700;
  }
  .tit_wrap .tit02 {
    font-size: 18px;
    font-weight: 700;
  }
  .tit_wrap > div .sort_btn {
    margin-left: 15px;
    margin-top: 10px;
  }

  /* table */
  table.type1 {
    width: 100%;
    text-align: center;
  }
  table.type1 thead th {
    font-size: 16px;
    font-weight: 700;
    padding: 0 4px 17px;
    border-bottom: 1px solid #ffffff33;
  }
  table.type1 thead td {
  }
  table.type1 tbody th {
  }
  table.type1 tbody td {
    padding: 9.5px 4px;
    font-weight: 500;
    font-size: 16px;
  }
  table.type1 tbody tr:first-child td {
    padding-top: 26px;
  }
  table.type1 tbody td .btn.small {
    margin: -10px 0;
  }

  table table.type1 thead th {
    border: 0;
    padding-bottom: 0;
  }
  table table.type1 tbody td {
    border: 0;
  }
  table table.type1 tbody tr:first-child td {
    padding-top: 9.5px;
  }

  table i.btn.small {
    cursor: default;
  }

  table.type1 tbody td .banner_img {
    width: 80px;
    height: 45px;
    border-radius: 10px;
    margin: 0 auto;
  }
  table.type1 tbody td .banner_img img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  table.type2 {
    width: 100%;
    text-align: left;
    border-top: 1px solid #ffffff80;
    border-left: 1px solid #ffffff80;
  }
  table.type2 tbody th {
    height: 38px;
    padding: 9px 12px;
    line-height: 19px;
  }
  table.type2 tbody td {
    height: 38px;
    padding: 5px 34px;
    line-height: 19px;
  }
  table.type2 tbody th,
  table.type2 tbody td {
    border-right: 1px solid #ffffff80;
    border-bottom: 1px solid #ffffff80;
  }
  table.type2 tbody td.ver_top {
    vertical-align: top;
    padding-top: 9px;
    line-height: 19px;
  }
  table.type2 tbody th.ver_top {
    vertical-align: top;
    padding-top: 9px;
    line-height: 19px;
  }
  table.type2 tbody td .row_item_7 {
    padding: 6px 0;
    gap: 18px 0;
  }

  table.type3 {
    width: 100%;
    text-align: left;
  }

  table.type3 tbody th {
    height: 40px;
    padding: 10px 9px;
    border: 0.5px solid #fff;
    background-color: #d9d9d91a;
    border-radius: 5px 0 0 5px;
  }
  table.type3 tbody td {
    height: 40px;
    padding: 7px 12px;
    border: 0.5px solid #fff;
    border-radius: 0 5px 5px 0;
    display: flex;
    gap: 5px;
  }

  table.type4 {
    width: 100%;
  }
  table.type4 tbody th,
  table.type4 tbody td {
    height: 44px;
  }

  table.type5 {
  }
  table.type5 tbody th,
  table.type5 tbody td {
    font-size: 18px;
    text-align: left;
    padding: 9px 0;
  }

  /* modal_wrap */
  .modal_wrap {
    position: fixed;
    inset: 0;
    z-index: 1000;
    color: #000;
  }
  .modal_wrap .dim_layer {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal_wrap .modal_inner {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 30px 24px;
    min-width: 595px;
  }
  .modal_wrap .modal_inner .modal_close {
    width: 24px;
    height: 24px;
    background: url("/images/icon/modal_close_x.png") no-repeat center/contain;
    position: absolute;
    top: 11px;
    right: 17px;
  }
  .modal_wrap .modal_inner .modal_body {
    max-height: calc(100vh - 300px);
    overflow: auto;
  }
  .modal_wrap .modal_tit {
    font-size: 16px;
    color: #000;
    font-weight: 700;
    text-align: center;
    padding-bottom: 20px;
    border-top: 1px solid #e6e6e6;
    padding-top: 22px;
  }
  .modal_wrap .modal_inner .modal_btn {
    margin-top: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }
  .modal_wrap .modal_inner .modal_btn > * {
    width: 44px;
    font-size: 16px;
    font-weight: 700;
    width: 134px;
    height: 35px;
  }
  .modal_wrap .modal_inner .modal_btn .blue_bor.btn {
    color: #09338c;
  }

  .modal_wrap.confirm .modal_inner .modal_btn > *,
  .modal_wrap.alert .modal_inner .modal_btn > * {
    color: #000;
  }

  .modal_wrap.prompt01 textarea {
    border: 0.5px solid #969696;
    border-radius: 10px;
    background-color: #f7f7f7;
    padding: 10px 22px;
    font-size: 12px;
  }
  .modal_wrap.prompt01 textarea::placeholder {
    color: #000;
  }

  .modal_wrap.detailPop .modal_inner {
    width: 595px;
    padding: 69px 0 0 46px;
  }
  .modal_wrap.detailPop .modal_inner .modal_body {
    padding-right: 51px;
    padding-bottom: 98px;
  }
  .modal_wrap.detailPop .modal_tit {
    font-size: 24px;
    color: #09338c;
    font-weight: 700;
    border: 0;
    padding-top: 0;
  }
  .modal_wrap.detailPop .key_val_list li {
    display: flex;
    align-items: center;
  }
  .modal_wrap.detailPop .key_val_list li ~ li {
    margin-top: 12px;
  }
  .modal_wrap.detailPop .key_val_list .key {
    width: 105px;
    font-size: 16px;
    font-weight: 600;
    color: #1c1c1c;
  }
  .modal_wrap.detailPop .key_val_list .val {
    flex: 1;
    display: inline-flex;
    min-height: 40px;
    align-items: center;
    position: relative;
    padding: 10px 22px 10px 60px;
    border: 0.5px solid #969696;
    border-radius: 10px;
    background-color: #f7f7f7;
    line-height: 17px;
  }
  .modal_wrap.detailPop .key_val_list .val:before {
    content: "";
    display: block;
    width: 17px;
    height: 18px;
    background: url("/images/icon/pen_icon.png") no-repeat center/contain;
    position: absolute;
    left: 17px;
    top: 11px;
  }

  /* toast_pop */
  .toast_pop {
    position: fixed;
    z-index: 1001;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    display: inline-flex;
    height: 48px;
    align-items: center;
    padding: 0 48px;
    font-size: 16px;
    font-weight: 500;
    background-color: #292e37;
    border-radius: 32px;
    white-space: nowrap;
    animation: toast_ani 3s forwards;
  }
  @keyframes toast_ani {
    0% {
      bottom: -100px;
    }
    10% {
      bottom: 48px;
    }
    90% {
      bottom: 48px;
    }
    100% {
      bottom: -100px;
    }
  }

  .infomation_blue_box {
    padding: 12px 20px;
    border-radius: 10px;
    background-color: #09338c80;
  }

  .dashboard_panel_wrap ul {
    display: flex;
    gap: 24px;
  }
  .dashboard_panel_wrap li {
    flex: 1;
    padding: 20px 24px 20px;
    background-color: #ffffff0d;
    border-radius: 10px;
    height: 167px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .dashboard_panel_wrap li .tit {
    font-size: 24px;
    font-weight: 700;
  }
  .dashboard_panel_wrap li .num_wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 12px;
    font-size: 24px;
    color: #ffffff80;
    font-weight: 700;
    line-height: 1.4;
  }
  .dashboard_panel_wrap li .num_wrap .num {
    color: #fff;
    font-size: 56px;
    line-height: 1;
  }
  .dashboard_panel_wrap li .increase {
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    color: #3d8bfd;
    right: 24px;
    bottom: 70px;
  }

  .border_item {
    height: 64px;
    border: 0.5px solid #ffffff;
    border-radius: 10px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 6px;
  }

  .border_item_list li {
    height: 70px;
    border: 0.5px solid #fff;
    border-radius: 10px;
    padding: 0 18px 0 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    gap: 9px;
  }
  .border_item_list li:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 9px;
    background-color: #fff;
  }
  .border_item_list li ~ li {
    margin-top: 14px;
  }
  .border_item_list li .tit {
    font-size: 22px;
    font-weight: 600;
  }
  .border_item_list li .btn {
    min-width: 92px;
    height: 40px;
    font-size: 16px;
  }
  .border_item_list li .btn.gray {
    color: #ffffff80;
  }
  .border_item_list li .state {
    flex: 1;
    font-size: 12px;
  }
  .border_item_list li .state.col_blue {
    color: #09338c;
  }
  .border_item_list li.blue:before {
    background-color: #09338c;
  }
  .border_item_list li.blue .btn.gray {
    background-color: transparent;
    border: 0.5px solid #ffffff;
  }

  .survey_card {
    border: 0.5px solid #ffffff80;
    border-radius: 10px;
    padding: 20px 16px 16px 20px;
    position: relative;
    overflow: hidden;
  }
  .survey_card:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 9px;
    background-color: #09338c;
  }
  .survey_card .head {
    display: flex;
    justify-content: space-between;
  }
  .survey_card .head input {
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid #eaeaea;
    height: 34px;
    line-height: 34px;
    background-color: #d9d9d933;
    color: #fff;
    padding: 0 9px;
    width: 430px;
  }
  .survey_card .head input::placeholder {
    color: #fff;
  }
  .survey_card .head select {
    height: 34px;
    padding: 0 20px;
    width: 165px;
    background: url("/images/icon/arrow_b_icon.png") no-repeat right 12px
      center/10px;
  }
  .survey_card .body {
    padding: 19px 9px 33px 9px;
    border-bottom: 1px solid #eaeaea80;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
  }
  .survey_card .body .option_tit {
    margin-left: 20px;
    position: relative;
    font-size: 12px;
    font-weight: 600;
  }
  .survey_card .body .option_tit:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1px solid #ffffff80;
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -6px;
  }
  .survey_card .body input {
    font-size: 12px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #eaeaea;
    height: 26px;
    line-height: 26px;
    padding: 0 9px;
    width: 100%;
  }
  .survey_card .body input::placeholder {
    font-size: 12px;
    color: #fff;
  }
  .survey_card .body .option_tit input {
    padding: 0;
  }
  .survey_card .body .option_add_btn {
    margin-left: 20px;
    position: relative;
    font-size: 12px;
    font-weight: 400;
    width: max-content;
    color: #1a73e8;
    text-decoration: underline;
  }
  .survey_card .body .option_add_btn:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    border: 1px solid #ffffff80;
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -6px;
  }
  .survey_card .btm {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 19px;
    padding-top: 11px;
  }
  .survey_card .btm .delete_btn {
    width: 22px;
    height: 22px;
    background: url("/images/icon/survey_trash_btn.png") no-repeat
      center/contain;
  }
  .survey_card .btm .file_btn {
    width: 22px;
    height: 22px;
    background: url("/images/icon/survey_files_btn.png") no-repeat
      center/contain;
  }
  .survey_card .btm .bor_line {
    width: 1px;
    height: 19px;
    display: block;
    background-color: #eaeaea;
    margin-left: 10px;
  }

  .white_tag_list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 24px;
    align-items: center;
  }
  .white_tag_list li {
    height: 29px;
    display: inline-flex;
    align-items: center;
    border-radius: 15px;
    background-color: #fff;
    padding: 0 13px 0 19px;
    font-size: 16px;
    color: #1e9eff;
    font-weight: 500;
    gap: 20px;
  }
  .white_tag_list li .delete_btn {
    width: 10px;
    height: 10px;
    background: url("/images/icon/tag_delete_btn.png") no-repeat center/contain;
  }

  /* 행사설정_참가기업관리 */
  .enroll_gray_box {
    background-color: #ffffff1a;
    border-radius: 14px;
    padding: 38px 0 38px;
    text-align: center;
    height: 300px;
  }
  .enroll_gray_box .btn_wrap {
    flex-direction: column;
    gap: 6px;
  }
  .enroll_gray_box .btn_wrap .btn {
    width: 240px;
    height: 32px;
    border-radius: 14px;
    font-size: 16px;
  }

  .file_upload_item {
    padding: 10px 24px 10px 19px;
    background-color: #fff;
    display: flex;
    gap: 7px;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    height: 62px;
    margin-top: 13px;
    color: #4d4d4d;
    font-weight: 700;
  }
  .file_upload_item p {
    margin-top: 3px;
  }
  .file_upload_item .chk_icon {
    display: block;
    width: 30px;
    height: 30px;
    background: url("/images/icon/file_chk_green.png") no-repeat center/contain;
  }
  .file_upload_item .file_icon {
    display: block;
    width: 34.5px;
    height: 34.5px;
    background: url("/images/icon/file_upload_icon.png") no-repeat
      center/contain;
  }

  /* 로그인 */
  .login_pagi {
    padding-left: 152px;
    flex: 1;
    padding-top: 100px;
  }
  .login_pagi .inner {
    width: 384px;
    margin: 0 auto;
  }
  .login_pagi .login_tit {
    font-size: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 39px;
    font-weight: 500;
    white-space: nowrap;
  }
  .login_pagi .login_inp {
    margin-top: 37px;
  }
  .login_pagi .login_inp input {
  }
  .login_pagi .btn_wrap .btn {
    flex: 1;
  }

  .data_label {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
  .preview_label {
    position: relative;
    overflow: hidden;
  }
  .preview_img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    & .cancel_btn {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #fff;
      border-radius: 50em;
      top: 10px;
      right: 10px;
    }
    & ::before {
      content: "";
      display: block;
      top: 9px;
      right: 3px;
      position: absolute;
      background-color: #09338c;
      width: 14px;
      height: 2px;
      transform: rotate(-45deg);
      border-radius: 50rem;
    }
    & ::after {
      content: "";
      display: block;
      top: 9px;
      right: 3px;
      position: absolute;
      background-color: #09338c;
      width: 14px;
      height: 2px;
      transform: rotate(45deg);
      border-radius: 50rem;
    }
    & img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .menu_hide {
    pointer-events: none;
    position: relative;
  }
  .menu_hide::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    /* z-index: 10; */
  }
  .ql-container {
    list-style-type: inherit !important;
    background-color: #fff;
    height: 530px;
    color: #000;
  }

  .quill_editor strong {
    font-weight: bold;
  }
  .quill_editor em {
    font-style: italic;
  }
  .quill_editor ol {
    list-style-type: auto !important;
    list-style-position: inside;
    text-align: center;
    padding-left: 0;
    margin: 0;
  }
  .quill_editor ul {
    list-style-type: disc;
    list-style-position: inside;
    text-align: center;
    padding-left: 0;
    margin: 0;
  }
  .quill_editor ul li::marker {
    font-size: 0.8em; /* 점 크기 조절 */
  }

  .quill_editor .ql-align-center {
    text-align: center;
  }
  .quill_editor .ql-align-right {
    text-align: right;
  }
  .quill_editor .ql-align-justify {
    text-align: justify;
  }

  .quill_editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
  }

  .outline {
    border: 2px solid #dab600 !important;
  }
`,Co=()=>e.jsxs(ui,{children:[e.jsx(yo,{children:e.jsxs("div",{className:"wrap",children:[e.jsx(Yi,{}),e.jsx(jt,{})]})}),e.jsx(ki,{}),e.jsx(Ni,{}),e.jsx(Hi,{})]}),No="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAATCAYAAAAgcwuHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgBvVjtcdswDKV6/V9tUHaCegSO4A2qTBBvIGUCewOpE6SdQN0g7QRSJ7A3QIgznEAwxC/78u5wsknwEXgUSdiVuSMAwPoH2qmqqr+mAJ6j9o+aeGbPM5sCUCw1fUWe06ojvGMyBRN523s7whL4vadAUnict1HhmVJ5UDxvrcIBxN2sJVAkgPd/hDS0EZ42gQOT+hHg2JBYMezvIoCS/GXFO2/PSjC7xOQlj1xNp3BYxW/0diCbRF8vB2cJoEw4wHnvcp+a2nliVuHhOCg86PMSilEkOIGyXUhQjuYWAfrUMbQSbwkGePoARw1LwR3r24rEbIDnwPxezA0CTFdKrvs65nsUSXFsIjyYaEfmWHufIiKb87iYM1cAGbhJgJj0K7W5nHkD3Hx7uAT/kfk3n0w++ErNJg3c7xs97Up/Lng8KUL+Y5/tZ/MxOEX6Z9lAq7n2Sv/2hc3O3CGWEgFiyZTAZrZ/MeVY3DK3CoDnR71aZr5jo4znpbJVxszenth3PDuaFT9Ln3F7/TdhfF/EArffAi7iqx52cH0LxHh2zPfA2gfW3kU4ZP2yKRWAFxVjxJef0r3oG1nfc4RnYr5b1r64ZiFcB7RXuRYKIO/THvRKcA9LWOHjRH+7Mtc+FKMQcgK9EpSle4PtFTlfSHF//jLr+On3+x8ixFOY/7CYvWEf7kHcr7hKXJQnP7ZTAsPX+TGD58HzDIIDz5hR+GEeeOXhgYn9jvUNnuPhMthCOhoxcZc4rjMBZPDsAhypvwbxzKj5wGIB2PhB8cUtMkJCdUY8DpavcjYPi2VSeJBjK8dU5o6A86uI6uJWmhOuR43j8m8QPmdz/nephCcpllccVWYfO4hrGQAAAABJRU5ErkJggg==",ko=()=>e.jsxs("div",{children:[e.jsx(b,{to:"/host/my/apply-register/new",className:"add_new_btn",children:"+ 새로운 행사 등록하기"}),e.jsx("ul",{className:"lnb01",children:e.jsx("li",{children:e.jsx("a",{href:"#none",className:"depth01 active",children:"나의 행사 리스트"})})})]}),Ho=()=>{const t=je(xe),s=je(Ae),a=D(),{openConfirm:n,confirmValue:l}=Ye(),c=()=>{n({text:"로그아웃 하시겠습니까?",okBtn:"확인",logout:!0})};return i.useEffect(()=>{l.logoutOk===!0&&(t(),s(),a("/host-main"))},[l.logoutOk]),e.jsxs("div",{className:"",children:[e.jsx(b,{to:"/host/my/apply-register/new",className:"add_new_btn",children:"행사 개설하기"}),e.jsxs("ul",{className:"lnb01",children:[e.jsx("li",{children:e.jsx(b,{to:"/host/my/mypage",className:"depth01 active",children:"내 정보 수정"})}),e.jsx("li",{children:e.jsx("button",{onClick:c,className:"depth01",children:"로그아웃"})})]})]})},So=()=>{const{id:t}=le(),[s,a]=i.useState(!0),n=fe(),l=()=>{a(p=>!p)},c=p=>n.pathname.indexOf(p)>=0?"active":"";return e.jsxs("div",{className:"menu_hide",children:[e.jsx("div",{className:"title_tag",children:"행사 개설하기"}),e.jsxs("ul",{className:"lnb02",children:[e.jsxs("li",{children:[e.jsxs("p",{onClick:l,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["행사 상세설정",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(b,{to:`/host/my/apply-register/edit/${t}/general`,className:`depth02 ${c(`/host/my/apply-register/edit/${t}/general`)}`,children:"기본정보"}),e.jsx(b,{to:`/host/my/apply-register/edit/${t}/detail`,className:`depth02 ${c(`/host/my/apply-register/edit/${t}/detail`)}`,children:"상세페이지"}),e.jsx(b,{to:`/host/my/apply-register/edit/${t}/information`,className:`depth02 ${c(`/host/my/apply-register/edit/${t}/information`)}`,children:"모집정보"})]})]}),e.jsx("li",{children:e.jsx(b,{to:"./행사설정_참가자관리.html",className:"depth01",children:"참가자 관리"})}),e.jsx("li",{children:e.jsx(b,{to:"./행사설정_참가기업관리.html",className:"depth01",children:"참가기업 관리"})})]})]})},Eo=()=>{var o;const{id:t}=le(),s=localStorage.getItem("token"),[a,n]=i.useState(!0),l=fe(),{data:c}=Bt({token:s,event_id:t}),p=()=>{n(f=>!f)},r=f=>l.pathname.indexOf(f)>=0?"active":"";return e.jsxs("div",{children:[e.jsx("div",{className:"title_tag",children:(o=c==null?void 0:c.data)==null?void 0:o.title}),e.jsxs("ul",{className:"lnb02",children:[e.jsxs("li",{children:[e.jsxs("p",{onClick:p,className:`depth01 ${a?"active":""}`,style:{cursor:"pointer"},children:[e.jsx(b,{to:`/host/my/apply-register/edit/${t}/state`,children:"행사 상세설정"}),e.jsx("i",{className:"arrow_b_icon"})]}),a&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(b,{to:`/host/my/apply-register/edit/${t}/general`,className:`depth02 ${r(`/host/my/apply-register/edit/${t}/general`)}`,children:"기본정보"}),e.jsx(b,{to:`/host/my/apply-register/edit/${t}/detail`,className:`depth02 ${r(`/host/my/apply-register/edit/${t}/detail`)}`,children:"상세페이지"}),e.jsx(b,{to:`/host/my/apply-register/edit/${t}/application`,className:`depth02 ${r(`/host/my/apply-register/edit/${t}/application`)}`,children:"모집정보"})]})]}),e.jsx("li",{children:e.jsx(b,{to:`/host/my/event/${t}/party`,className:`depth01 ${l.pathname===`/host/my/event/${t}/party`?"active":""}`,children:"참가자 관리"})}),e.jsx("li",{children:e.jsx(b,{to:`/host/my/event/${t}/party-company`,className:`depth01 ${r(`/host/my/event/${t}/party-company`)}`,children:"참가기업 관리"})})]})]})},Lo=({authInfo:t,userInfo:s})=>{var j,d;const[a,n]=i.useState(),[l,c]=i.useState(null),[p,r]=i.useState(""),o=ha(),f=fe(),{openToast:m}=we();i.useEffect(()=>{f.pathname.indexOf("/host/my/dashboard")>=0?r("dashboard"):f.pathname.indexOf("/host/my/mypage")>=0?r("mypage"):f.pathname.indexOf("/host/my/apply-register/new")>=0?r("new"):r("register")},[f.pathname]),i.useEffect(()=>{var u;c(`https://api.micemate.io/storage/${(u=s==null?void 0:s.company)==null?void 0:u.logo}`)},[s,a]),i.useEffect(()=>{if(a){const u=new FormData;u.append("logo",a),o.mutate({token:t.token,user_id:t.user_id,formData:u},{onSuccess:()=>{m("프로필 이미지를 변경했습니다."),c(URL.createObjectURL(a))},onError:()=>{m("프로필 이미지 변경 실패, 다시 시도해 주세요.")}})}},[a]);const g=u=>{var N;const C=(N=u.target.files)==null?void 0:N[0];if(C){if(C.size>1048576||!["image/jpeg","image/png"].includes(C.type))return;const S=URL.createObjectURL(C);n(C),c(S)}};return e.jsx("div",{className:"lnb_area",children:e.jsxs("div",{className:"lnb02_wrap",children:[e.jsxs("div",{className:"user_area",children:[e.jsx("input",{id:"profile",type:"file",className:"hide",onChange:u=>{g(u)}}),e.jsx("label",{htmlFor:"profile",children:e.jsx("div",{className:"img",style:{cursor:"pointer"},children:e.jsx("img",{src:s.company.logo?l:No})})}),e.jsxs("div",{className:"user_name",children:[e.jsx("div",{className:"name",children:(j=s==null?void 0:s.company)==null?void 0:j.company_name}),e.jsx("div",{className:"admini",children:(d=s==null?void 0:s.company)==null?void 0:d.position})]})]}),p==="dashboard"&&e.jsx(ko,{}),p==="mypage"&&e.jsx(Ho,{}),p==="new"&&e.jsx(So,{}),p==="register"&&e.jsx(Eo,{})]})})},zo=()=>{const t=localStorage.getItem("token"),s=localStorage.getItem("user_id"),a={token:t,user_id:s},{data:n,isLoading:l,isError:c}=ct(a);return l?e.jsx(ve,{}):c?e.jsx("div",{children:"정보를 불러오지 못했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(Lo,{authInfo:a,userInfo:n==null?void 0:n.data}),e.jsx(jt,{context:{authInfo:a,myInformation:n}})]})},Vo=Se({company_name:P().trim().min(1,"회사명을 입력해주세요."),company_id_01:P().trim().min(3),company_id_02:P().trim().min(2),company_id_03:P().trim().min(5),company_id_file:Ht().refine(t=>t&&t[0].size>0,{message:"사업자 등록증을 첨부해주세요."}).refine(t=>{const s=["image/png","application/pdf"];return t&&t[0]&&s.some(a=>t[0].type.startsWith(a))},{message:"pdf또는 png파일로 업로드 해주세요."}),name:P().trim().min(1,"담당자 이름을 입력해주세요."),department:P().trim().min(1,"소속 부서를 입력해주세요."),position:P().trim().min(1,"직책을 입력해주세요."),contact:P().trim().min(1,"연락처를 입력해주세요.")}).refine(t=>t.company_id_01.length>=3&&t.company_id_02.length>=2&&t.company_id_03.length>=5,{message:"사업자 등록 번호를 입력해주세요.",path:["company_id"]}),Ao=()=>{var N,k,V,S,H,v,x,w,Z,_,T,M,z,$,L,I,E,F,B,W,se;const[t,s]=i.useState(""),a=ma(),n=localStorage.getItem("token"),l=localStorage.getItem("user_id"),c=D(),[p,r]=i.useState(null),o=R=>{Ct(R,j,"contact")},f=(R,X)=>{X&&X<Number(R.target.value)&&(R.target.value=R.target.value.slice(0,X))},{register:m,handleSubmit:g,setValue:j,formState:{errors:d}}=he({resolver:He(Vo)}),u=R=>{if(R.target.files){const X=R.target.files[0];X&&(r(X),s(X.name))}};i.useEffect(()=>{j("file_name_view",t)},[t,j]);const C=g(R=>{const X=new FormData;X.append("company_name",R.company_name),X.append("company_id",`${R.company_id_01}-${R.company_id_02}-${R.company_id_03}`),X.append("company_id_file",p),X.append("name",R.name),X.append("department",R.department),X.append("position",R.position),X.append("contact",R.contact),a.mutate({token:n,user_id:l,formData:X},{onSuccess:()=>{c("/host/corporate/finish",{replace:!0})},onError:ue=>{console.error("Submission failed: ",ue)}})});return e.jsx("div",{className:"container",children:e.jsx("div",{className:"login_pagi",children:e.jsxs("form",{onSubmit:C,className:"inner",children:[e.jsx("div",{className:"login_tit",children:e.jsx("span",{children:"행사등록을 위해 추가정보를 입력해주세요"})}),e.jsxs("div",{className:"login_inp",children:[e.jsx("p",{className:"fs_16 fw_500",children:"회사명"}),e.jsx("input",{type:"text",className:"w_full mt_12",placeholder:"회사명 입력",...m("company_name")}),((N=d.company_name)==null?void 0:N.message)&&e.jsx("p",{className:"err_msg mt_8",children:(V=(k=d.company_name)==null?void 0:k.message)==null?void 0:V.toString()}),e.jsx("p",{className:"fs_16 fw_500 mt_25",children:"사업자등록번호"}),e.jsxs("div",{className:"mt_12 dis_flex gap21",children:[e.jsx("input",{type:"number",className:"w_96",...m("company_id_01"),maxLength:3,onChange:R=>f(R,3)}),e.jsx("input",{type:"number",className:"w_72",...m("company_id_02"),maxLength:2,onChange:R=>f(R,2)}),e.jsx("input",{type:"number",className:"w_72 flex1",...m("company_id_03"),maxLength:5,onChange:R=>f(R,5)})]}),((S=d.company_id)==null?void 0:S.message)&&e.jsx("p",{className:"err_msg mt_8",children:(v=(H=d.company_id)==null?void 0:H.message)==null?void 0:v.toString()}),e.jsxs("p",{className:"fs_16 fw_500 mt_25",children:["사업자등록증 ",e.jsx("span",{className:"col_green fs_12",children:"*pdf 또는 png 파일로 업로드 해주세요."})]}),e.jsxs("div",{className:"mt_12 dis_flex gap21",children:[e.jsx("input",{type:"text",placeholder:"파일을 업로드 해주세요.",...m("file_name_view"),style:{width:"100%"},className:"flex1 type_w",disabled:!0}),e.jsx("input",{id:"company_id_file",type:"file",accept:"image/png, .pdf",multiple:!1,...m("company_id_file"),onChange:R=>{u(R)},className:"hide"}),e.jsx("label",{htmlFor:"company_id_file",className:"w_72 btn dark_blue fs_14",style:{minWidth:"72px"},children:"업로드"})]}),((x=d.company_id_file)==null?void 0:x.message)&&e.jsx("p",{className:"err_msg mt_8",children:(Z=(w=d.company_id_file)==null?void 0:w.message)==null?void 0:Z.toString()}),e.jsx("p",{className:"fs_16 fw_500 mt_25",children:"담당자 이름"}),e.jsx("input",{type:"text",className:"w_full mt_12",placeholder:"성함",...m("name")}),((_=d.name)==null?void 0:_.message)&&e.jsx("p",{className:"err_msg mt_8",children:(M=(T=d.name)==null?void 0:T.message)==null?void 0:M.toString()}),e.jsxs("div",{className:"dis_flex gap20 mt_25",style:{alignItems:"flex-start"},children:[e.jsxs("div",{className:"flex1",children:[e.jsx("p",{className:"fs_16 fw_500",children:"소속 부서"}),e.jsx("input",{type:"text",className:"w_full mt_12",placeholder:"소속 부서",...m("department")}),((z=d.department)==null?void 0:z.message)&&e.jsx("p",{className:"err_msg mt_8",children:(L=($=d.department)==null?void 0:$.message)==null?void 0:L.toString()})]}),e.jsxs("div",{className:"flex1",children:[e.jsx("p",{className:"fs_16 fw_500",children:"직책"}),e.jsx("input",{type:"text",className:"w_full mt_12",placeholder:"직책",...m("position")}),((I=d.position)==null?void 0:I.message)&&e.jsx("p",{className:"err_msg mt_8",children:(F=(E=d.position)==null?void 0:E.message)==null?void 0:F.toString()})]})]}),e.jsx("p",{className:"fs_16 fw_500 mt_25",children:"연락처"}),e.jsx("input",{type:"text",className:"w_full mt_12",placeholder:"핸드폰 번호 입력",...m("contact"),onChange:o}),((B=d.contact)==null?void 0:B.message)&&e.jsx("p",{className:"err_msg mt_8",children:(se=(W=d.contact)==null?void 0:W.message)==null?void 0:se.toString()})]}),e.jsx("div",{className:"btn_wrap mt_32",children:e.jsx("button",{type:"submit",className:"btn dark_blue fs_14",children:"제출"})})]})})})},Mo=()=>e.jsx("div",{className:"container",children:e.jsx("div",{className:"login_pagi",children:e.jsx("div",{className:"inner",children:e.jsxs("div",{className:"txt_center mt_100",children:[e.jsx("p",{className:"fs_24 fw_700",children:"계정신청이 완료되었습니다"}),e.jsxs("p",{className:"fs_24 fw_500 mt_44",children:["현재 계정은 ",e.jsx("b",{children:"승인 대기 상태"}),"입니다.",e.jsx("br",{}),"24시간 이내 처리가 완료될 예정이며, ",e.jsx("br",{}),"심사결과는 이메일로 전송됩니다."]}),e.jsx("div",{className:"btn_wrap mt_44",children:e.jsx(b,{to:"/host-main",className:"btn dark_blue",children:"메인 화면으로 돌아가기"})})]})})})}),Fo=Se({password:P().regex(/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/," 영문,숫자조합 8자리 이상 입력해주세요.").optional(),contact:P().nullable().optional(),birth:P().trim().date("날짜 형식으로 입력해주세요."),gender:P(),interests:Ne().array().min(1,"관심분야를 최소 하나 이상 선택해야 합니다.")}),Bo=()=>{var k,V,S,H,v,x,w,Z,_,T,M,z,$;const t=localStorage.getItem("token"),s=localStorage.getItem("user_id"),a=Ke(),[n,l]=i.useState([]),c=Li(),{openToast:p}=we(),{data:r}=ct({token:t,user_id:s}),{register:o,handleSubmit:f,setValue:m,control:g,formState:{errors:j}}=he({resolver:He(Fo)});i.useEffect(()=>{r&&(l(r.data.interests),m("password",r.data.password),m("contact",r.data.company.contact),m("birth",r.data.birth),m("gender",r.data.sex?"woman":"man"),m("interests",r.data.interests))},[r,m]);const d=L=>{Ct(L,m,"contact")},u=L=>{Nt(L,m,"birth")},C=(L,I)=>{const E=I?[...n,L]:n.filter(F=>F!==L);l(E),m("interests",E)},N=f(L=>{const I=()=>{if(L.gender==="man")return!1;if(L.gender==="woman")return!0},E={token:t,user_id:s,modifyData:{birth:L.birth,sex:I(),interests:L.interests}};L.contact&&(E.modifyData.contact=L.contact),L.password&&(E.modifyData.password=L.password),c.mutate(E,{onSuccess:()=>{p("저장 되었습니다.")},onError:()=>{p("저장 실패, 다시 시도해 주세요.")}})});return e.jsxs("div",{className:"cont_area",children:[e.jsx("div",{className:"history_tit",children:e.jsx("a",{className:"item",href:"#none",children:"내 정보 수정"})}),e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"w_880 type5",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"121px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"158px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{children:(k=r==null?void 0:r.data)==null?void 0:k.name}),e.jsx("th",{children:"사업자등록번호"}),e.jsx("td",{children:(S=(V=r==null?void 0:r.data)==null?void 0:V.company)==null?void 0:S.company_id})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{children:(H=r==null?void 0:r.data)==null?void 0:H.email}),e.jsx("th",{children:"소속 부서/직책"}),e.jsx("td",{children:(x=(v=r==null?void 0:r.data)==null?void 0:v.company)==null?void 0:x.department})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"기업명"}),e.jsx("td",{children:(Z=(w=r==null?void 0:r.data)==null?void 0:w.company)==null?void 0:Z.company_name}),e.jsx("th",{children:"연락처"}),e.jsx("td",{children:(T=(_=r==null?void 0:r.data)==null?void 0:_.company)==null?void 0:T.contact})]})]})]})}),e.jsxs("form",{onSubmit:N,children:[e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"fs_18",children:"전화번호"})}),e.jsx("div",{className:"table_wrap mt_10",children:e.jsx("input",{type:"text",...o("contact"),onChange:d,className:"w_412"})}),e.jsx("div",{className:"tit_wrap mt_24",children:e.jsx("h3",{className:"fs_18",children:"비밀번호 변경"})}),e.jsx("div",{className:"table_wrap mt_10",children:e.jsx("input",{type:"password",...o("password"),className:"w_412",placeholder:"비밀번호를 입력하세요"})}),e.jsxs("div",{className:"dis_flex mt_36",children:[e.jsx("h3",{className:"fs_18",children:"성별"}),e.jsxs("div",{className:"dis_flex ml_86 gap32",children:[e.jsxs("div",{className:"radio item",children:[e.jsx("input",{id:"man",value:"man",...o("gender"),type:"radio",name:"gender"}),e.jsx("label",{htmlFor:"man",children:"남"})]}),e.jsxs("div",{className:"radio item",children:[e.jsx("input",{id:"woman",value:"woman",...o("gender"),type:"radio",name:"gender"}),e.jsx("label",{htmlFor:"woman",children:"여"})]})]})]}),e.jsx("div",{className:"tit_wrap mt_20",children:e.jsx("h3",{className:"fs_18",children:"생년월일"})}),e.jsx("div",{className:"table_wrap mt_10",children:e.jsx("input",{type:"text",...o("birth"),onChange:u,className:"w_412"})}),e.jsx("div",{className:"tit_wrap mt_29",children:e.jsx("h3",{className:"fs_18",children:"관심분야"})}),e.jsx("div",{className:"dis_flex row_item_7 mt_24",children:e.jsx(Ce,{name:"interests",control:g,render:({field:L})=>{var I;return e.jsx(e.Fragment,{children:a&&L.value&&((I=a==null?void 0:a.data)==null?void 0:I.map(E=>e.jsxs("div",{className:"checkbox item",children:[e.jsx("input",{id:JSON.stringify(E.id),checked:n.includes(E.id),onChange:F=>{C(E.id,F.target.checked)},type:"checkbox"}),e.jsx("label",{htmlFor:JSON.stringify(E.id),children:E.name})]})))})}})}),((M=j.interests)==null?void 0:M.message)&&e.jsx("p",{className:"err_msg",style:{paddingTop:"20px"},children:($=(z=j.interests)==null?void 0:z.message)==null?void 0:$.toString()}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(b,{to:"/mypage/user-modify/with-draw",className:"col_gray underline",children:"마이스 메이트 탈퇴하기"})}),e.jsx("div",{className:"btn_wrap gap23",children:e.jsx("button",{className:"btn blue",children:"저장"})})]})]})]})]})},To=({boardData:t})=>{const s={ongoing:{title:"모집중인 행사",unit:"개"},pending:{title:"승인 대기중인 행사",unit:"개"},editing:{title:"수정중인 행사",unit:"개"},total:{title:"누적 행사 수",unit:"건"}};return e.jsx("div",{className:"dashboard_panel_wrap",children:e.jsx("ul",{children:t&&Object.entries(t).map(([a,{value:n,today:l}])=>e.jsxs("li",{children:[e.jsx("div",{className:"tit",children:s[a].title}),e.jsxs("div",{className:"num_wrap",children:[e.jsx("span",{className:"num",children:n}),e.jsx("span",{children:s[a].unit})]}),l>0&&e.jsx("div",{className:"increase",children:`+${l}`})]},a))})})},Po=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],Zo=[{value:"등록일",type:1},{value:"행사 개설일",type:2}],$o=[{value:"승인 대기",type:1},{value:"수정 중",type:2},{value:"모집 대기",type:3},{value:"모집 중",type:4},{value:"마감",type:5},{value:"행사 종료",type:6}],Io=({setFilterData:t,resetFilter:s})=>{const[a,n]=i.useState(),l=re().format("YYYY-MM-DD"),{register:c,handleSubmit:p,setValue:r,reset:o}=he(),f=d=>{let u="",C=re().format("YYYY-MM-DD");switch(d){case"today":u=re().format("YYYY-MM-DD");break;case"yesterday":u=re().subtract(1,"day").format("YYYY-MM-DD"),C=u;break;case"7days":u=re().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":u=re().subtract(1,"month").format("YYYY-MM-DD");break;case"all":u="",C="";break}r("startDate",u),r("endDate",C),n(d)},m=()=>{n(null)},g=d=>{t(d)},j=()=>{o(),s()};return e.jsxs("form",{onSubmit:p(g),children:[e.jsx("div",{className:"table_wrap mt_20",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{className:"btn border_w w_96",...c("sortType"),children:Zo.map(d=>e.jsx("option",{value:d.type,children:d.value},d.type))})}),Po.map(d=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:d.type,onChange:()=>f(d.type),checked:a===d.type,className:"hide"}),e.jsx("label",{htmlFor:d.type,className:"btn border_w",children:d.value})]},d.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...c("startDate"),id:"startDate",onClick:m,onChange:d=>r("startDate",d.target.value),defaultValue:l,className:"small w_104"}),e.jsx("label",{htmlFor:"startDate",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...c("endDate"),id:"endDate",onClick:m,onChange:d=>r("endDate",d.target.value),defaultValue:l,className:"small w_104"}),e.jsx("label",{htmlFor:"endDate",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...c("progressType"),className:"btn border_w w_96",children:$o.map(d=>e.jsx("option",{value:d.type,children:d.value},d.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...c("searchKeyword"),className:"small search w_548"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap mt_18",children:[e.jsx("button",{className:"btn small w_83 light_blue",type:"submit",children:"검색"}),e.jsx("button",{className:"btn small w_83 light_gray ml_4",type:"button",onClick:()=>j(),children:"초기화"})]})]})},Oo=[{type:0,text:"임시 저장",class:"yellow"},{type:1,text:"승인 대기",class:"brighter_blue"},{type:2,text:"수정 중",class:"yellow"},{type:3,text:"모집 대기",class:"brighter_gray"},{type:4,text:"모집 중",class:"brighter_gray"},{type:5,text:"마감",class:"gray"},{type:6,text:"행사 종료",class:"gray"}],qo=({eventList:t,checkedList:s,setCheckedList:a})=>{const[n,l]=i.useState(!1),c=o=>{a(f=>f.includes(o)?f.filter(m=>m!==o):[...f,o])},p=()=>{if(n)a([]);else{const o=t.filter(f=>f.state===0||f.state===1||f.state===2).map(f=>f.id);a(o)}l(!n)},r=o=>{const f=Oo.find(m=>m.type===o);return f||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"140px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:p,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"행사번호"}),e.jsx("th",{className:"txt_left",children:"행사명"}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 개설일"}),e.jsx("th",{}),e.jsx("th",{children:"미리보기"}),e.jsx("th",{children:"진행 상태"})]})}),e.jsx("tbody",{children:t&&t.map(o=>{const{text:f,class:m}=r(o.state),g=o.state!==0&&o.state!==1&&o.state!==2;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:o.id,checked:s.includes(o.id),onChange:()=>c(o.id),type:"checkbox",disabled:g}),e.jsx("label",{htmlFor:o.id})]})}),e.jsx("td",{children:o.id}),e.jsx("td",{className:"txt_left",children:e.jsx(b,{to:`/host/my/apply-register/edit/${o.id}/state`,children:o.title})}),e.jsx("td",{children:o.start_date?oi(o.start_date):"-"}),e.jsx("td",{children:o.publish_date?oi(o.publish_date):"-"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx(b,{to:`/host/${o.id}/priview`,target:"_blank",className:"btn small gray w_72",children:"미리보기"})}),e.jsx("td",{children:e.jsx("i",{className:`btn small  w_72 ${m}`,children:f})})]},o.id)})})]})})},Ui=({total:t,page:s,setPage:a,size:n=20})=>{const l=Math.ceil(t/n),p=(Math.ceil(s/n)-1)*n+1,r=Math.min(p+n-1,l),o=g=>{a(g)},f=()=>{p>1&&o(p-1)},m=()=>{r<l&&o(r+1)};return e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("button",{onClick:f,disabled:p===1,className:"pagi_prev"}),Array.from({length:r-p+1},(g,j)=>e.jsx("button",{onClick:()=>o(p+j),className:s===p+j?"num active":"num",children:p+j},j)),e.jsx("button",{type:"button",onClick:m,disabled:r===l,className:"pagi_next"})]})},Ro=()=>{var x,w,Z,_,T,M,z,$;const[t,s]=i.useState({}),[a,n]=i.useState(),[l,c]=i.useState([]),[p,r]=i.useState(1),o=Re(),f=D(),m=o.authInfo,{data:g}=ja(m.token),j=wa(),{openConfirm:d}=Ye(),{openAlret:u}=Ee(),C=ke(Ae),[N,k]=i.useState(!1),V=Vt();i.useEffect(()=>{const L={page:p??1,dateType:t.sortType,start:t.startDate,end:t.endDate,state:t.progressType,search:t.searchKeyword,order:t.order??"asc"},I=Object.fromEntries(Object.entries(L).filter(([,F])=>typeof F=="string"||Array.isArray(F)?F!==""&&F.length>0:F!=null).map(([F,B])=>[F,String(B)])),E=new URLSearchParams(I).toString();n(E)},[t,p]),i.useEffect(()=>{a&&(f(`?${a}`),V.invalidateQueries({queryKey:["eventManage"]}))},[a]);const S=()=>{s({}),r(1),f("?")},H=()=>{s({...t,order:t.order==="desc"?"asc":"desc"})},v=()=>{const L={text:`${l.length}건
삭제하시겠습니까?`,okBtn:"삭제하기",logout:!1};d(L)};return i.useEffect(()=>{k(C.confirm)},[C.confirm]),i.useEffect(()=>{N===!0&&l.length>0&&j.mutate({token:m.token,event_id:l},{onSuccess:()=>{u({text:"삭제가 완료되었습니다."}),V.invalidateQueries({queryKey:["eventManage"]})}})},[N]),e.jsxs("div",{className:"cont_area",children:[e.jsx("div",{className:"history_tit",children:e.jsx("p",{className:"item",children:"나의 행사 리스트"})}),e.jsxs("div",{className:"cont_panel",children:[e.jsx(To,{boardData:(x=g==null?void 0:g.data)==null?void 0:x.summary}),e.jsx(Io,{setFilterData:s,resetFilter:S}),e.jsxs("div",{className:"tit_wrap mt_12",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:t.searchKeyword?t.searchKeyword:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:`[총 행사 수 ${((w=g==null?void 0:g.data)==null?void 0:w.total)>0?(Z=g==null?void 0:g.data)==null?void 0:Z.total:0} 건]`})]}),e.jsx("button",{className:"sort_btn",onClick:H,children:"정렬"})]}),e.jsx("div",{children:e.jsx("button",{onClick:v,disabled:l.length===0,className:"mr_22",children:"삭제"})})]}),((T=(_=g==null?void 0:g.data)==null?void 0:_.items)==null?void 0:T.length)>0?e.jsx(qo,{eventList:(M=g==null?void 0:g.data)==null?void 0:M.items,checkedList:l,setCheckedList:c}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 행사가 없습니다"}),((z=g==null?void 0:g.data)==null?void 0:z.total)>20&&e.jsx(Ui,{total:($=g==null?void 0:g.data)==null?void 0:$.total,page:p,setPage:r})]})]})},Wo=Se({title:P().trim().min(1,"프로젝트 제목을 입력해주세요."),category:Ne().min(1,"행사 분야를 선택해주세요.")}),Yo=()=>{const t=localStorage.getItem("token"),s=localStorage.getItem("user_id"),a=Ke(),n=Sa(),c=Re().authInfo,p=D(),{openToast:r}=we(),{data:o}=ct({token:t,user_id:s}),{register:f,handleSubmit:m,control:g,formState:{isValid:j}}=he({resolver:He(Wo)}),d=m(u=>{const C={token:c.token,data:{title:u.title,category_id:u.category}};n.mutate(C,{onSuccess:N=>{r("저장 되었습니다.");const k=N.data.event_id;p(`/host/my/apply-register/edit/${k}/state`)}})});return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40 fw_700",children:`${o.data.company.company_name}님 반갑습니다`})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"성공적인 행사가 될 수 있도록 도와드리겠습니다."})}),e.jsxs("form",{onSubmit:d,children:[e.jsx("div",{className:"tit_wrap mt_62",children:e.jsxs("h3",{className:"fs_20",children:["프로젝트 제목 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_384",type:"text",placeholder:"제목을 입력해주세요",...f("title")})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 분야 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx(Ce,{name:"category",control:g,render:({field:{onChange:u,value:C}})=>{var N;return e.jsxs("select",{value:C,onChange:k=>{const V=parseInt(k.target.value);u(V)},defaultValue:"defalue",className:"w_384",children:[e.jsx("option",{value:"defalue",disabled:!0,children:"카테고리 선택"}),a&&((N=a==null?void 0:a.data)==null?void 0:N.map(k=>e.jsx("option",{value:k.id,children:k.name},k.id)))]})}})}),e.jsxs("div",{className:"dis_flex justify_between mt_326",children:[e.jsx("div",{className:"btn_wrap"}),e.jsx("div",{className:"btn_wrap gap23",children:e.jsx("button",{disabled:!j,className:"btn dark_blue w_292",children:"등록 시작"})})]})]})]})})},Uo=h.div`
  overflow-y: scroll;
  padding: 212px 40px 60px !important;
  position: fixed !important;
  top: 40px;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  right: 0;
  background-color: #000;
  width: 1400px;
  box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.2);
  /* button */
  .close_btn {
    position: absolute;
    top: 40px;
    right: 40px;
    width: 30px;
    height: 30px;
    display: block;
  }
  .close_btn::before,
  .close_btn::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #fff;
    right: 0;
    top: 40px;
  }
  .close_btn::before {
    transform: rotate(45deg);
  }
  .close_btn::after {
    transform: rotate(-45deg);
  }
  .btn {
    display: inline-flex;
    min-width: 135px;
    height: 43px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 6px;
  }
  .btn.white {
    background-color: #fff;
    color: #09338c;
  }
  .btn.dark_blue {
    background-color: #09338c;
    color: #fff;
  }
  .btn.blue {
    background-color: #235ef3;
  }
  .btn.light_blue {
    background-color: #1e9eff;
  }
  .btn.brighter_blue {
    background-color: #6ea8fe;
    color: #343a40;
  }
  .btn.gray {
    background-color: #ffffff33;
  }
  .btn.light_gray {
    background-color: #6c757d;
    color: #fff;
  }
  .btn.brighter_gray {
    background-color: #b0b8c1;
    color: #343a40;
  }
  .btn.yellow {
    background-color: #ecd144;
    color: #343a40;
  }

  .preview_page {
    background-color: #000;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 51px;
  }
  .preview_page .cont_wrap {
    flex: 1;
    /* width: 1191px; */
  }
  .preview_page .review_wrap {
    width: 406px;
    min-width: 406px;
  }

  .cont_wrap .top_wrap .m_img {
    width: 100%;
    height: 627px;
  }
  .cont_wrap .top_wrap .m_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cont_wrap .top_wrap .tit_area {
    margin-top: 38px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .cont_wrap .top_wrap .tit_area .area_l {
    padding-left: 34px;
  }
  .cont_wrap .top_wrap .tit_area .title {
    display: flex;
    align-items: center;
    position: relative;
    gap: 26px;
  }
  .cont_wrap .top_wrap .star {
    display: block;
    width: 18px;
    height: 18px;
    background: url("/images/icon/star-fill.png") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .cont_wrap .top_wrap .tit_area .title strong {
    font-size: 32px;
    line-height: 45px;
    color: #fff;
  }
  .cont_wrap .top_wrap .tit_area .title .d_day_tag {
    display: inline-flex;
    align-items: center;
    height: 35px;
    background-color: #235ef3;
    border-radius: 9px;
    color: #fff;
    font-size: 24px;
    padding: 0 20px;
    font-weight: 700;
    white-space: nowrap;
  }
  .cont_wrap .top_wrap .tit_area .desc {
    font-size: 20px;
    color: #b0b8c1;
    margin-top: 8px;
  }
  .cont_wrap .top_wrap .tit_area .score {
    font-size: 20px;
    line-height: 14px;
    margin-top: 16px;
    font-weight: 500;
    position: relative;
    padding-left: 20px;
  }
  .cont_wrap .top_wrap .tit_area .score .col_blue {
    color: #235ef3;
  }
  .cont_wrap .top_wrap .tit_area .btns {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }
  .cont_wrap .top_wrap .tit_area .btns .heart_btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #3b4048 url("/images/icon/heart_icon.png") no-repeat center/22px;
  }
  .cont_wrap .top_wrap .tit_area .btns .share_btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #3b4048 url("/images/icon/share_icon.png") no-repeat center/22px;
  }
  .cont_wrap .top_wrap .tit_area .btn.blue {
    margin-top: 24px;
    width: 177px;
  }

  .cont_wrap .info_wrap {
    padding-top: 76px;
  }
  .cont_wrap .info_wrap .tab_btns {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ffffff33;
  }
  .cont_wrap .info_wrap .tab_btns .tab_btn {
    display: block;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 14px;
    width: 162px;
    text-align: center;
    position: relative;
  }
  .cont_wrap .info_wrap .tab_btns .tab_btn:hover {
    color: #316fe9;
  }
  .cont_wrap .info_wrap .tab_btns .tab_btn:hover:after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 3px;
    border-radius: 3px;
    background-color: #316fe9;
    bottom: -1.5px;
  }
  .cont_wrap .info_wrap .info_box {
    margin-top: 37px;
    background-color: rgba(41, 46, 55, 0.5);
    border-radius: 10px;
    padding: 63px 52px 100px 58px;
  }
  .cont_wrap .info_wrap .info_box > div ~ div {
    margin-top: 100px;
  }
  .cont_wrap .info_wrap .info_box .tit {
    font-size: 18px;
    font-weight: 800;
    padding-bottom: 20px;
  }
  .cont_wrap .info_wrap .info_box .key_val_list li {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .cont_wrap .info_wrap .info_box .key_val_list li .key {
    color: #b0b8c1;
    width: 94px;
  }
  .cont_wrap .info_wrap .info_box .key_val_list li ~ li {
    margin-top: 18px;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs {
    max-height: 800px;
    overflow: hidden;
    position: relative;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(217, 217, 217, 0) 0%,
      rgba(136, 137, 139, 0.43) 39.5%,
      #121212 89.5%
    );
    pointer-events: none;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs img {
    width: 100%;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs .detail_more_btn {
    position: absolute;
    z-index: 10;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 177px;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs .img,
  .cont_wrap .info_wrap .info_box .detail_imgs .img img {
    display: block;
    width: 100%;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.active {
    max-height: unset;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.active:after {
    content: none;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.active .detail_more_btn {
    display: none;
  }
  .cont_wrap .info_wrap .info_box .faq_list li {
    padding-bottom: 27px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    margin-bottom: 27px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
  }
  .cont_wrap .info_wrap .info_box .faq_list .q_txt {
    padding-left: 73px;
    position: relative;
    cursor: pointer;
  }
  .cont_wrap .info_wrap .info_box .faq_list .q_txt:before {
    content: "";
    display: block;
    width: 27px;
    height: 27px;
    background: url("/images/icon/faq_list_q.png") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cont_wrap .info_wrap .info_box .faq_list .a_txt {
    padding-left: 73px;
    position: relative;
    margin-top: 26px;
  }
  .cont_wrap .info_wrap .info_box .faq_list .a_txt:before {
    content: "";
    display: block;
    width: 27px;
    height: 27px;
    background: url("/images/icon/faq_list_a.png") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: 0;
  }

  .review_wrap .tab_btns {
    display: flex;
    border-bottom: 1px solid #fff;
  }
  .review_wrap .tab_btns .tab_btn {
    flex: 1;
    line-height: 21px;
    padding: 6px 0;
    position: relative;
  }
  .review_wrap .tab_btns .tab_btn.active:after,
  .review_wrap .tab_btns .tab_btn:hover:after {
    content: "";
    display: block;
    width: 100%;
    bottom: -1.5px;
    position: absolute;
    height: 3px;
    border-radius: 3px;
    background-color: #235ef3;
  }
  .review_wrap .blue_comment_box {
    margin-top: 12px;
    padding: 8px 12px 8px 20px;
    background-color: #084298;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
  }
  .review_wrap .blue_comment_box_delete {
    width: 24px;
    height: 24px;
    background: url("/images/icon/x_icon.png") no-repeat center/contain;
  }
  .review_wrap .comment_box {
    margin-top: 7px;
    background-color: rgba(41, 46, 55, 0.5);
    border-radius: 10px;
    padding-bottom: 30px;
  }
  .review_wrap .comment_box .top_wrap {
    padding: 21px 16px;
  }
  .review_wrap .comment_box .top_wrap .score_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars {
    display: flex;
    gap: 6px;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span {
    display: block;
    width: 22px;
    height: 22px;
    position: relative;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span:before,
  .review_wrap .comment_box .top_wrap .score_wrap .stars span i {
    content: "";
    width: 100%;
    height: 100%;
    background: no-repeat left top/22px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span:before {
    background-image: url("/images/icon/star_svg_gray.svg");
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span i {
    background-image: url("/images/icon/star_svg.svg");
  }
  .review_wrap .comment_box .top_wrap .score_wrap .txt {
    flex: 1;
    font-size: 16px;
    padding-left: 14px;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .score_num {
    font-size: 30px;
    font-weight: 600;
  }
  .review_wrap .comment_box .top_wrap .select {
    background: transparent url("/images/icon/arrow_b_icon.png") no-repeat right
      center/10px;
    padding-right: 16px;
    font-size: 14px;
    margin-top: 10px;
  }
  .review_wrap .comment_box .top_wrap .select option {
    color: #000;
  }

  .review_wrap .comment_box .comment_list {
    padding: 0 3px;
  }
  .review_wrap .comment_box .comment_list li {
    border-bottom: 1px solid #ffffff1a;
    padding: 12px 16px;
  }
  .review_wrap .comment_box .comment_list .stars {
    display: flex;
    gap: 4px;
  }
  .review_wrap .comment_box .comment_list .stars span {
    display: block;
    width: 10px;
    height: 10px;
    position: relative;
  }
  .review_wrap .comment_box .comment_list .stars span:before,
  .review_wrap .comment_box .comment_list .stars span i {
    content: "";
    width: 100%;
    height: 100%;
    background: no-repeat left top/10px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .review_wrap .comment_box .comment_list .stars span:before {
    background-image: url("/images/icon/star_svg_gray.svg");
  }
  .review_wrap .comment_box .comment_list .stars span i {
    background-image: url("/images/icon/star_svg.svg");
  }
  .review_wrap .comment_box .comment_list .username {
    font-size: 14px;
    color: #b0b8c1;
    margin-top: 14px;
  }
  .review_wrap .comment_box .comment_list .comment_txt {
    font-size: 14px;
    margin-top: 14px;
    line-height: 18px;
  }
  .review_wrap .comment_box .comment_list .btn_wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 14px;
  }
  .review_wrap .comment_box .comment_list .like_btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 26px;
    padding: 0 6px;
    background-color: #235ef3;
    font-size: 12px;
    font-weight: 600;
    border-radius: 4px;
  }
  .review_wrap .comment_box .comment_list .like_btn:before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: url("/images/icon/like_icon.png") no-repeat center/contain;
  }
  .review_wrap .comment_box .comment_list .like_btn.active:before {
    background-image: url("/images/icon/like_active_icon.png");
  }
  .review_wrap .comment_box .pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  .review_wrap .comment_box .pagination .num {
    display: inline-flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #292e37;
    border-radius: 4px;
  }
  .review_wrap .comment_box .pagination .num.active {
    background-color: #235ef3;
  }
  .review_wrap .comment_box .pagination .pagi_prev,
  .review_wrap .comment_box .pagination .pagi_next {
    display: inline-flex;
    width: 48px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #292e37;
    border-radius: 4px;
    background: #292e37 no-repeat center/16px;
  }
  .review_wrap .comment_box .pagination .pagi_prev {
    background-image: url("/images/icon/chevron_left.png");
  }
  .review_wrap .comment_box .pagination .pagi_next {
    background-image: url("/images/icon/chevron_right.png");
  }
`,Qo=({target:t,setClose:s})=>{var m,g,j,d,u,C,N,k,V,S,H,v,x,w,Z,_,T,M,z,$;const a=localStorage.getItem("token"),{data:n}=xt(t,a),[l,c]=i.useState(null),[p,r]=i.useState(!1),o=(L,I,E)=>{if(L===1)return"무료";if(L===2)return`사전신청 무료 / 현장구매 유료(${G(String(I))})`;if(L===3)return`사전 신청 무료 / 기간 한정 유료(${G(String(I))}) / 현장 구매 시 유료(${G(String(E))})`;if(L===4)return`사전 신청 유료(${G(String(I))}) / 현장 결제 유료(${G(String(E))})`;if(L===5)return`유료(${G(String(E))})`},f=L=>{c(l===L?null:L)};return e.jsx(Uo,{children:e.jsxs("div",{className:"preview_page",children:[e.jsx("button",{onClick:()=>{s(!1)},className:"close_btn"}),e.jsxs("div",{className:"cont_wrap",children:[e.jsxs("div",{className:"top_wrap",children:[e.jsx("div",{className:"m_img",children:e.jsx("img",{src:`https://api.micemate.io/storage/${(m=n==null?void 0:n.data)==null?void 0:m.img}`})}),e.jsxs("div",{className:"tit_area",children:[e.jsxs("div",{className:"area_l",children:[e.jsxs("div",{className:"title",children:[e.jsx("strong",{children:(g=n==null?void 0:n.data)==null?void 0:g.title}),e.jsx("div",{className:"d_day_tag",children:"D-1"})]}),e.jsxs("div",{className:"desc",children:[`${ge((j=n==null?void 0:n.data)==null?void 0:j.event_start_date)} ~
            ${ge((d=n==null?void 0:n.data)==null?void 0:d.event_end_date)}`,"    |    ",(u=n==null?void 0:n.data)==null?void 0:u.position1]}),e.jsxs("div",{className:"score",children:[e.jsx("i",{className:"star"}),"4.4",e.jsx("span",{className:"col_blue",children:"(4,423)"})]})]}),e.jsxs("div",{className:"area_r",children:[e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"heart_btn"}),e.jsx("button",{className:"share_btn"})]}),e.jsx("button",{className:"btn blue",children:"사전 신청하기"})]})]})]}),e.jsxs("div",{className:"info_wrap",children:[e.jsxs("div",{className:"tab_btns",children:[e.jsx("a",{href:"#_info",className:"tab_btn",children:"기본정보"}),e.jsx("a",{href:"#_detail",className:"tab_btn",children:"상세정보"}),e.jsx("a",{href:"#_faq",className:"tab_btn",children:"FAQ"}),e.jsx("a",{href:"#_call",className:"tab_btn",children:"문의하기"})]}),e.jsxs("div",{className:"info_box",children:[e.jsxs("div",{id:"_info",children:[e.jsx("div",{className:"tit",children:"기본 정보"}),e.jsxs("ul",{className:"key_val_list",children:[e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"행사 기간"}),e.jsx("div",{className:"val",children:`${ge((C=n==null?void 0:n.data)==null?void 0:C.event_start_date)} ~
            ${ge((N=n==null?void 0:n.data)==null?void 0:N.event_end_date)}`})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"개최 장소"}),e.jsx("div",{className:"val",children:(k=n==null?void 0:n.data)==null?void 0:k.position1})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"세부 장소"}),e.jsx("div",{className:"val",children:(V=n==null?void 0:n.data)==null?void 0:V.position2})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"전시 분야"}),e.jsx("div",{className:"val",children:(S=n==null?void 0:n.data)==null?void 0:S.category.name})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"참가 비용"}),e.jsx("div",{className:"val",children:o((H=n==null?void 0:n.data)==null?void 0:H.payable_type,(v=n==null?void 0:n.data)==null?void 0:v.payable_price1,(x=n==null?void 0:n.data)==null?void 0:x.payable_price2)})]})]})]}),!p&&e.jsxs("div",{id:"_detail",children:[e.jsx("div",{className:"tit",children:"상세 정보"}),e.jsxs("div",{className:"detail_imgs",children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:(w=n==null?void 0:n.data)==null?void 0:w.content}}),e.jsx("button",{onClick:()=>r(!0),className:"btn blue detail_more_btn",children:"더보기"})]})]}),p&&e.jsxs("div",{id:"_detail",children:[e.jsx("div",{className:"tit",children:"상세 정보"}),e.jsxs("div",{className:"detail_imgs",style:{maxHeight:"auto"},children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:(Z=n==null?void 0:n.data)==null?void 0:Z.content}}),e.jsx("button",{onClick:()=>r(!1),className:"btn blue detail_more_btn",children:"더보기"})]})]}),e.jsxs("div",{id:"_faq",children:[e.jsx("div",{className:"tit",children:"FAQ"}),e.jsx("ul",{className:"faq_list",children:(T=(_=n==null?void 0:n.data)==null?void 0:_.faqs)==null?void 0:T.map((L,I)=>e.jsxs("li",{children:[e.jsx("div",{onClick:()=>f(I),className:"q_txt",children:L.question}),l===I&&e.jsx("div",{className:"a_txt",children:L.answer})]}))})]}),e.jsxs("div",{id:"_call",children:[e.jsx("div",{className:"tit",children:"문의하기"}),e.jsxs("ul",{className:"key_val_list",children:[e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"담당자"}),e.jsx("div",{className:"val",children:(M=n==null?void 0:n.data)==null?void 0:M.contact_name})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"전화번호"}),e.jsx("div",{className:"val",children:(z=n==null?void 0:n.data)==null?void 0:z.contact_number})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"이메일"}),e.jsx("div",{className:"val",children:($=n==null?void 0:n.data)==null?void 0:$.contact_email})]})]})]})]})]})]}),e.jsxs("div",{className:"review_wrap",children:[e.jsxs("div",{className:"tab_btns",children:[e.jsx("button",{className:"tab_btn active",children:"리뷰"}),e.jsx("button",{className:"tab_btn",children:"참여 기업"})]}),e.jsxs("div",{className:"blue_comment_box",children:["전시회 참여 후 리뷰를 작성해주세요.",e.jsx("br",{}),"고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다!",e.jsx("button",{className:"blue_comment_box_delete"})]}),e.jsxs("div",{className:"comment_box",children:[e.jsxs("div",{className:"top_wrap",children:[e.jsxs("div",{className:"score_wrap",children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"txt",children:"4,423개 평점"}),e.jsx("div",{className:"score_num",children:"4.4"})]}),e.jsxs("select",{className:"select",children:[e.jsx("option",{value:"1",children:"베스트순"}),e.jsx("option",{value:"2",children:"최신순"})]})]}),e.jsxs("ul",{className:"comment_list",children:[e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn active",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"0%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"0%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"0%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]})]}),e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"pagi_prev"}),e.jsx("button",{className:"num active",children:"1"}),e.jsx("button",{className:"num",children:"2"}),e.jsx("button",{className:"num",children:"3"}),e.jsx("button",{className:"num",children:"4"}),e.jsx("button",{className:"pagi_next"})]})]})]})]})})},mi=t=>{switch(t){case 0:return{text:"· 작성중",class:"col_orange"};case 1:return{text:"· 승인 대기중",class:"col_darkblue"};case 2:return{text:"· 수정 필요",class:"col_orange"};case 3:return{text:"· 완료",class:"col_darkblue"};default:return{text:"-",class:"col_blue"}}},Ko=[{title:"기본정보",key:"general"},{title:"상세페이지",key:"detail"},{title:"모집정보",key:"application"}],Jo=()=>{var k,V;const t=localStorage.getItem("token"),s=localStorage.getItem("user_id"),{data:a}=ct({token:t,user_id:s}),n=Fa(),l=Ba(),c=Mi(),r=Re().authInfo,{id:o}=le(),[f,m]=i.useState(!1),{openToast:g}=we(),j=D(),{data:d,isLoading:u,isError:C}=Ea({token:r.token,event_id:o});i.useEffect(()=>{a&&(n.mutate({token:r.token,event_id:o,data:{is_survey:!1}}),l.mutate({token:r.token,event_id:o,data:{is_FAQ:!1,contact_name:a.data.company.name,contact_email:a.data.email,contact_number:a.data.company.contact}}))},[a]);const N=()=>{c.mutate({token:t,event_id:o},{onSuccess:()=>{j("/host/my/apply-register/edit/finish")},onError:()=>{g("작성중인 필드가 있습니다.")}})};return u?e.jsx(ve,{}):C||!d?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"cont_area",children:[e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40 fw_700",children:"행사 상세설정"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위해 내용을 작성해주세요."})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"fs_20",children:"행사 등록 준비 상태"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsxs("div",{className:"border_item w_767",children:[e.jsx("span",{className:`${mi((k=d==null?void 0:d.data)==null?void 0:k.state).class}`,children:mi((V=d==null?void 0:d.data)==null?void 0:V.state).text}),e.jsx("p",{className:"fs_12 fw_500",children:"아래의 필수 항목들이 모두 작성 완료 상태로 바뀌면 [제출하기]를 누룰 수 있습니다."})]})}),e.jsx("div",{className:"tit_wrap mt_26",children:e.jsx("h3",{className:"fs_20",children:"작성 항목"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"w_767",children:e.jsx("ul",{className:"border_item_list",children:Ko.map(S=>{var H,v,x,w,Z,_,T,M,z,$,L,I,E,F;return e.jsxs("li",{className:"blue",children:[e.jsx("span",{className:"tit",children:S.title}),((H=d==null?void 0:d.data)==null?void 0:H.state)===0&&((v=d==null?void 0:d.data)==null?void 0:v[S.key])===!0&&e.jsx("span",{className:"state col_blue",children:"작성 완료"}),((x=d==null?void 0:d.data)==null?void 0:x.state)===1&&((w=d==null?void 0:d.data)==null?void 0:w[S.key])===!0&&e.jsx("span",{className:"state col_blue",children:"작성 완료"}),((Z=d==null?void 0:d.data)==null?void 0:Z.state)===2&&((_=d==null?void 0:d.data)==null?void 0:_[S.key])===!0&&e.jsx("span",{className:"state col_blue",children:"작성 완료"}),((T=d==null?void 0:d.data)==null?void 0:T.state)===3&&((M=d==null?void 0:d.data)==null?void 0:M[S.key])===!0&&e.jsx("span",{className:"state col_blue",children:"작성 완료"}),((z=d==null?void 0:d.data)==null?void 0:z.state)===0&&(($=d==null?void 0:d.data)==null?void 0:$[S.key])===!1&&e.jsx("span",{className:"state col_yellow",children:"작성 중"}),((L=d==null?void 0:d.data)==null?void 0:L.state)===1&&((I=d==null?void 0:d.data)==null?void 0:I[S.key])===!1&&e.jsx("span",{className:"state col_yellow",children:"작성 전"}),((E=d==null?void 0:d.data)==null?void 0:E.state)===2&&((F=d==null?void 0:d.data)==null?void 0:F[S.key])===!1&&e.jsx("span",{className:"state col_yellow",children:"수정 중"}),e.jsx(b,{to:`/host/my/apply-register/edit/${o}/${S.key}`,className:"btn gray",children:"작성하기"})]},S.key)})})})}),e.jsxs("div",{className:"dis_flex justify_between mt_40",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(b,{to:`/host/${o}/priview`,target:"_blank",className:"btn blue_bor",children:"미리보기"}),e.jsx("button",{onClick:N,className:"btn dark_blue",children:"제출하기"})]})]})]}),f&&e.jsx(Qo,{target:o,setClose:m})]})},Xo=[{type:0,name:"행사 비용을 선택해주세요."},{type:1,name:"무료"},{type:2,name:"사전 신청 시 무료 / 현장 구매 시 유료"},{type:3,name:"사전 신청 시 무료 / 기간 한정 유료 / 현장 구매 시 유료"},{type:4,name:"사전 신청 유료 / 현장 결제 유료"},{type:5,name:"유료"}],Do=()=>{var Me,Fe,Be,Te,Pe,Ze,K,q,oe,ye,Le,de,ze,Xe,De,A,pe,be,ne,$e,Ie,Ge,et,tt,it;const{openToast:t}=we(),{id:s}=le(),a=D(),[n,l]=i.useState(!1),p=Re().authInfo,[r,o]=i.useState(null),[f,m]=i.useState(null),[g,j]=i.useState(null),[d,u]=i.useState(null),C=Ke(),N=La(),k=xs.useDaumPostcodePopup(),V={token:p.token,event_id:s},{data:S}=Fi(V),H=10*1024*1024,v=Se({title:P().trim().min(1,"제목을 입력해주세요."),category:Ne().nullable().optional(),img1:Ht().nullable().optional().refine(y=>!y||y.length===0?!0:y[0].size<H,{message:"파일 크기는 10MB 이하이어야 합니다."}),img2:Ht().nullable().optional().refine(y=>!y||y.length===0?!0:y[0].size<H,{message:"파일 크기는 10MB 이하이어야 합니다."}),event_start_view:P().nullable().optional(),event_end_view:P().nullable().optional(),event_start_time:si().nullable().optional(),event_end_time:si().nullable().optional(),payable_type:Ne().nullable().optional(),payable_start_view:P().nullable().optional(),payable_end_view:P().nullable().optional(),payable_price_url:P().nullable().optional(),payable_price1:Ne().nullable().optional(),payable_price2:Ne().nullable().optional(),progress_type:P().nullable().optional(),progress_url:P().nullable().optional(),position1:P().nullable().optional(),position2:P().nullable().optional()}).refine(y=>y.event_start_view&&y.event_end_view?new Date(y.event_start_view)<=new Date(y.event_end_view):!0,{message:"종료 날짜는 시작 날짜 이후여야 합니다.",path:["event_end_date"]}).refine(y=>y.payable_start_view&&y.payable_end_view?new Date(y.payable_start_view)<=new Date(y.payable_end_view):!0,{message:"종료 날짜는 시작 날짜 이후여야 합니다.",path:["payable_end_date"]}).refine(y=>{var U,ae,ce,Oe;const Y=(U=S==null?void 0:S.data)!=null&&U.application_start_date?new Date((ae=S==null?void 0:S.data)==null?void 0:ae.application_start_date):null,J=(ce=S==null?void 0:S.data)!=null&&ce.application_end_date?new Date((Oe=S==null?void 0:S.data)==null?void 0:Oe.application_end_date):null;if(!Y||!J)return!0;let Q=!1;if(y.payable_start_view&&y.payable_end_view){const qe=new Date(y.payable_start_view),st=new Date(y.payable_end_view);(qe<Y||qe>J)&&(Q=!0),(st<Y||st>J)&&(Q=!0)}return!Q},{message:"유료 사전 신청 기간은 모집기간 안에 포함되어야 합니다.",path:["payable_end_date"]}),{data:x}=Bt({token:p.token,event_id:s}),{register:w,handleSubmit:Z,setValue:_,watch:T,control:M,formState:{errors:z}}=he({resolver:He(v)});console.log(z);const $=T("event_start_time"),L=T("event_end_time"),I=T("payable_type"),E=T("progress_type");i.useEffect(()=>{var y,Y,J,Q,U,ae,ce,Oe,qe,st,Zt,$t,It,Ot,qt,Rt,Wt,Yt,Ut,Qt,Kt,Jt,Xt,Dt,Gt,ei,ti,ii;x&&(x!=null&&x.data)&&(_("title",(y=x==null?void 0:x.data)==null?void 0:y.title),_("category",(J=(Y=x==null?void 0:x.data)==null?void 0:Y.category)==null?void 0:J.id),(Q=x==null?void 0:x.data)!=null&&Q.img1&&j(`https://api.micemate.io/storage/${(U=x==null?void 0:x.data)==null?void 0:U.img1}`),(ae=x==null?void 0:x.data)!=null&&ae.img2&&u(`https://api.micemate.io/storage/${(ce=x==null?void 0:x.data)==null?void 0:ce.img2}`),_("event_start_date",me((Oe=x==null?void 0:x.data)==null?void 0:Oe.event_start_date)),_("event_start_view",me((qe=x==null?void 0:x.data)==null?void 0:qe.event_start_date)),_("event_end_date",me((st=x==null?void 0:x.data)==null?void 0:st.event_end_date)),_("event_end_view",me((Zt=x==null?void 0:x.data)==null?void 0:Zt.event_end_date)),_("event_start_time",ut(($t=x==null?void 0:x.data)==null?void 0:$t.event_start_date)),_("event_end_time",ut((It=x==null?void 0:x.data)==null?void 0:It.event_end_date)),_("payable_type",(Ot=x==null?void 0:x.data)==null?void 0:Ot.payable_type),_("payable_start_view",me((qt=x==null?void 0:x.data)==null?void 0:qt.payable_start_date)),_("payable_start_date",me((Rt=x==null?void 0:x.data)==null?void 0:Rt.payable_start_date)),_("payable_end_view",me((Wt=x==null?void 0:x.data)==null?void 0:Wt.payable_end_date)),_("payable_end_date",me((Yt=x==null?void 0:x.data)==null?void 0:Yt.payable_end_date)),_("payable_price_url",(Ut=x==null?void 0:x.data)==null?void 0:Ut.payable_price_url),_("payable_price1",Number((Qt=x==null?void 0:x.data)==null?void 0:Qt.payable_price1)>0?(Kt=x==null?void 0:x.data)==null?void 0:Kt.payable_price1:null),_("payable_price2",Number((Jt=x==null?void 0:x.data)==null?void 0:Jt.payable_price2)>0?(Xt=x==null?void 0:x.data)==null?void 0:Xt.payable_price2:null),_("progress_type",JSON.stringify((Dt=x==null?void 0:x.data)==null?void 0:Dt.progress_type)),_("progress_url",((Gt=x==null?void 0:x.data)==null?void 0:Gt.progress_url)===null?"":(ei=x==null?void 0:x.data)==null?void 0:ei.progress_url),_("position1",(ti=x==null?void 0:x.data)==null?void 0:ti.position1),_("position2",(ii=x==null?void 0:x.data)==null?void 0:ii.position2))},[x]);const F=(y,Y)=>{Nt(y,_,Y)},B=(y,Y,J)=>{if(y.target.files){const Q=y.target.files[0],U=URL.createObjectURL(Q);Q&&(J(Q),Y(U))}},W=(y,Y,J,Q)=>{y.preventDefault(),_(Y,null),J(null),Q(null)},se=(y,Y)=>{const J=T(Y),Q=new Date(y);J&&(Q.setMinutes(Q.getMinutes()+30),_(Y,Q))},R=(y,Y)=>{const J=T(Y),Q=new Date(y);J&&(Q.setMinutes(Q.getMinutes()-30),_(Y,Q))},X=y=>{let Y="";y.userSelectedType==="R"?Y=y.roadAddress:Y=y.jibunAddress,_("position1",Y)},ue=()=>{k({onComplete:X})},We=Z(y=>{const Y=new FormData,J=bt(y.event_start_time),Q=bt(y.event_end_time),U=(ae,ce)=>{ce!=null&&!(ce instanceof File&&ce.size===0)&&Y.append(ae,ce)};U("title",y.title),U("category_id",y.category),U("img1",r||void 0),U("img2",f||void 0),U("event_start_date",y.event_start_view&&J?`${y.event_start_view} ${J}`:void 0),U("event_end_date",y.event_end_view&&Q?`${y.event_end_view} ${Q}`:void 0),U("payable_type",y.payable_type),U("payable_start_date",y.payable_start_view),U("payable_end_date",y.payable_end_view),U("payable_price_url",y.payable_price_url),U("payable_price1",y.payable_price1),U("payable_price2",y.payable_price2),U("progress_type",JSON.parse(y.progress_type)),U("progress_url",y.progress_url),U("position1",y.position1),U("position2",y.position2),N.mutate({token:p.token,event_id:s,data:Y},{onSuccess:()=>{n===!0&&a(`/host/my/apply-register/edit/${s}/detail`),t("저장 되었습니다.")},onError:ae=>{console.log(ae)}})});return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40 fw_700",children:"기본정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참관객 모집을 위한 행사의 기본 정보를 입력해주세요."})}),e.jsxs("form",{onSubmit:We,children:[e.jsx("div",{className:"tit_wrap mt_62",children:e.jsxs("h3",{className:"fs_20",children:["프로젝트 제목 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{...w("title"),className:`w_767 ${(Fe=(Me=x==null?void 0:x.data)==null?void 0:Me.is_reject)!=null&&Fe.title?"outline":""}`,type:"text"})}),((Be=z.title)==null?void 0:Be.message)&&e.jsx("p",{style:{paddingTop:"10px"},className:"err_msg",children:(Pe=(Te=z.title)==null?void 0:Te.message)==null?void 0:Pe.toString()}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 분야 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx(Ce,{name:"category",control:M,render:({field:{onChange:y,value:Y}})=>{var J,Q,U;return e.jsxs("select",{onChange:ae=>{const ce=parseInt(ae.target.value);y(ce)},defaultValue:"defalue",className:`w_767 ${(Q=(J=x==null?void 0:x.data)==null?void 0:J.is_reject)!=null&&Q.category?"outline":""}`,value:Y,children:[e.jsx("option",{value:"defalue",disabled:!0,children:"카테고리 선택"}),C&&((U=C==null?void 0:C.data)==null?void 0:U.map(ae=>e.jsx("option",{value:ae.id,children:ae.name},ae.id)))]})}})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["대표 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 대표 이미지를 등록해주세요."})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"대표 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 360*510픽셀(세로형), 1280*674픽셀(가로형) / 72dpi 이상"]})]})}),e.jsxs("div",{className:"dis_flex mt_10 gap16",children:[e.jsxs("div",{className:`${(K=(Ze=x==null?void 0:x.data)==null?void 0:Ze.is_reject)!=null&&K.img?"outline":""}`,children:[e.jsx("input",{id:"img1",type:"file",accept:"image/png,image/jpg,image/jpeg",multiple:!1,...w("img1"),onChange:y=>{B(y,j,o)},className:"hide"}),e.jsxs("label",{htmlFor:"img1",className:"file_inp vertical preview_label",children:[g&&e.jsxs("span",{className:"preview_img",children:[e.jsx("span",{onClick:y=>{W(y,"img1",j,o)},className:"cancel_btn"}),e.jsx("img",{src:g})]}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"세로형"})]}),e.jsxs("div",{className:`${(oe=(q=x==null?void 0:x.data)==null?void 0:q.is_reject)!=null&&oe.img?"outline":""}`,children:[e.jsx("input",{id:"img2",type:"file",multiple:!1,accept:"image/png,image/jpg,image/jpeg",...w("img2"),onChange:y=>{B(y,u,m)},className:"hide"}),e.jsxs("label",{htmlFor:"img2",className:"file_inp horizontal preview_label",children:[d&&e.jsxs("span",{className:"preview_img",children:[e.jsx("span",{onClick:y=>{W(y,"img2",u,m)},className:"cancel_btn"}),e.jsx("img",{src:d})]}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"가로형"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 일자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:`dis_flex w_767 ${(Le=(ye=x==null?void 0:x.data)==null?void 0:ye.is_reject)!=null&&Le.date?"outline":""}`,children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"행사 시작 일자를 선택해주세요.",...w("event_start_view"),onChange:y=>F(y,"event_start_view")}),e.jsx("label",{htmlFor:"event_start_date"}),e.jsx("input",{id:"event_start_date",type:"date",...w("event_start_date"),onChange:y=>_("event_start_view",y.target.value)})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{type:"text",...w("event_end_view"),onChange:y=>F(y,"event_end_view"),className:"w_full",placeholder:"행사 종료 일자를 선택해주세요."}),e.jsx("label",{htmlFor:"event_end_date"}),e.jsx("input",{id:"event_end_date",type:"date",...w("event_end_date"),onChange:y=>_("event_end_view",y.target.value)})]})]})}),((de=z.event_end_date)==null?void 0:de.message)&&e.jsx("p",{className:"err_msg",style:{paddingTop:"10px"},children:(Xe=(ze=z.event_end_date)==null?void 0:ze.message)==null?void 0:Xe.toString()}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 시간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:`dis_flex w_767 ${(A=(De=x==null?void 0:x.data)==null?void 0:De.is_reject)!=null&&A.time?"outline":""}`,children:[e.jsx("div",{className:"num_inp_wrap flex1",children:e.jsx(Ce,{name:"event_start_time",control:M,render:({field:{onChange:y,value:Y}})=>e.jsxs(e.Fragment,{children:[e.jsx(gt,{selected:Y,onChange:J=>y(J),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:30,dateFormat:"HH:mm",timeFormat:"HH:mm",showTimeCaption:!1,placeholderText:"행사 시작 시간을 입력해주세요."}),e.jsx("span",{onClick:()=>se($,"event_start_time"),className:"increase"}),e.jsx("span",{onClick:()=>R($,"event_start_time"),className:"decrease"})]})})}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsx("div",{className:"num_inp_wrap flex1",children:e.jsx(Ce,{name:"event_end_time",control:M,render:({field:{onChange:y,value:Y}})=>e.jsxs(e.Fragment,{children:[e.jsx(gt,{selected:Y,onChange:J=>y(J),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:30,dateFormat:"HH:mm",timeFormat:"HH:mm",showTimeCaption:!1,placeholderText:"행사 종료 시간을 입력해주세요."}),e.jsx("span",{onClick:()=>se(L,"event_end_time"),className:"increase"}),e.jsx("span",{onClick:()=>R(L,"event_end_time"),className:"decrease"})]})})})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["비용 설정 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"dis_flex justify_between w_767",children:[e.jsx(Ce,{name:"payable_type",control:M,render:({field:{onChange:y,value:Y}})=>{var J,Q;return e.jsxs("select",{onChange:U=>{const ae=parseInt(U.target.value);y(ae)},defaultValue:"defalue",className:`w_372 ${(Q=(J=x==null?void 0:x.data)==null?void 0:J.is_reject)!=null&&Q.payable?"outline":""}`,value:Y,children:[e.jsx("option",{value:"defalue",disabled:!0}),Xo.map(U=>e.jsx("option",{value:U.type,children:U.name},U.type))]})}}),I===2&&e.jsx("div",{id:"_sel1",children:e.jsx("input",{type:"number",...w("payable_price2",{valueAsNumber:!0}),className:"w_372",placeholder:"현장 신청 비용을 입력해주세요."})}),I===4&&e.jsx("div",{id:"_sel1",children:e.jsx("input",{type:"number",...w("payable_price1",{valueAsNumber:!0}),className:"w_372",placeholder:"유료 사전 신청 기간의 비용을 입력해주세요."})})]})}),I===3&&e.jsxs("div",{id:"_sel2",children:[e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsxs("div",{className:"dis_flex justify_between w_767 gap23",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 시작 날짜",...w("payable_start_view"),onChange:y=>F(y,"payable_start_view")}),e.jsx("label",{htmlFor:"payable_start_view"}),e.jsx("input",{id:"payable_start_view",type:"date",...w("payable_start_date"),onChange:y=>_("payable_start_view",y.target.value)})]}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 종료 날짜",...w("payable_end_view"),onChange:y=>F(y,"payable_end_view")}),e.jsx("label",{htmlFor:"payable_end_date"}),e.jsx("input",{id:"payable_end_date",type:"date",...w("payable_end_date"),onChange:y=>_("payable_end_view",y.target.value)})]}),e.jsx("input",{type:"number",...w("payable_price1",{valueAsNumber:!0}),className:"w_372",placeholder:"유료 사전 신청 기간의 비용을 입력해주세요."})]})}),((pe=z.payable_end_date)==null?void 0:pe.message)&&e.jsx("p",{className:"err_msg",style:{paddingTop:"10px"},children:(ne=(be=z.payable_end_date)==null?void 0:be.message)==null?void 0:ne.toString()}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{type:"text",...w("payable_price_url"),className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 txt_center"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"number",...w("payable_price2",{valueAsNumber:!0}),className:"w_372",placeholder:"현장 신청 비용을 입력해주세요."})})]}),I===4&&e.jsxs("div",{id:"_sel4",children:[e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"text",...w("payable_price_url"),className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 txt_center"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"number",...w("payable_price2",{valueAsNumber:!0}),className:"w_372",placeholder:"현장 신청 비용을 입력해주세요."})})]}),I===5&&e.jsx("div",{id:"_sel4",children:e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"text",className:"w_767",...w("payable_price_url"),placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 진행 방식 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:`dis_flex w_767 gap11 ${(Ie=($e=x==null?void 0:x.data)==null?void 0:$e.is_reject)!=null&&Ie.progress?"outline":""}`,children:[e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"0",...w("progress_type"),type:"radio",name:"progress_type",value:"0"}),e.jsx("label",{htmlFor:"0",children:"오프라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"1",...w("progress_type"),type:"radio",name:"progress_type",value:"1"}),e.jsx("label",{htmlFor:"1",children:"온라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"2",...w("progress_type"),type:"radio",name:"progress_type",value:"2"}),e.jsx("label",{htmlFor:"2",children:"하이브리드 행사"})]})]})}),(E==="1"||E==="2")&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{className:"w_767",...w("progress_url"),type:"text",placeholder:"온라인 행사 url를 입력해주세요. (온라인 / 하이브리드 행사 선택 시)"})}),(E==="0"||E==="2")&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 위치 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{type:"text",...w("position1"),onClick:ue,className:`w_767 ${(et=(Ge=x==null?void 0:x.data)==null?void 0:Ge.is_reject)!=null&&et.position?"outline":""}`,placeholder:"도로명/지번 주소 검색 (오프라인 / 하이브리드 행사 선택 시)"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{type:"text",...w("position2"),className:`w_767 ${(it=(tt=x==null?void 0:x.data)==null?void 0:tt.is_reject)!=null&&it.position?"outline":""}`,placeholder:"세부 주소"})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{onClick:()=>{l(!1)},className:"btn blue_bor",children:"임시 저장"}),e.jsx("button",{onClick:()=>{l(!0)},className:"btn dark_blue",children:"다음"})]})]})]})]})})},Go=()=>{var z,$,L,I;const[t,s]=i.useState(""),[a,n]=i.useState([]),[l,c]=i.useState([]),[p,r]=i.useState(""),[o,f]=i.useState([]),{id:m}=le(),j=Re().authInfo,{data:d}=za({token:j.token,event_id:m}),u=Va(),C=D(),N=i.useRef(null),{openToast:k}=we(),V=Ta(),S=Pa();i.useEffect(()=>{var E,F,B,W;(E=d==null?void 0:d.data)!=null&&E.content&&s(d.data.content),(F=d==null?void 0:d.data)!=null&&F.images&&n((B=d==null?void 0:d.data)==null?void 0:B.images),(W=d==null?void 0:d.data)!=null&&W.tags&&f(d.data.tags)},[d]);const H=E=>{const W=new DOMParser().parseFromString(E,"text/html").querySelectorAll("img");return Array.from(W).map(se=>se.src)},v=E=>{s(E);const F=H(E),B=a.filter(W=>!F.includes(`https://api.micemate.io/storage/${W.path}`)).map(W=>W.id);B.length>0&&c(W=>[...new Set([...W,...B])])},x=()=>{const E=document.createElement("input");E.setAttribute("type","file"),E.setAttribute("accept","image/png,image/jpg,image/jpeg"),E.click(),E.addEventListener("change",async()=>{const F=E.files[0],B=new FormData;B.append("img",F),V.mutate({token:j.token,event_id:m,formData:B},{onSuccess:W=>{var ue;const se=`https://api.micemate.io/storage/${(ue=W==null?void 0:W.data)==null?void 0:ue.path}`,R=N.current.getEditor(),X=R.getSelection();R.insertEmbed(X.index,"image",se),R.setSelection({index:X.index+1,length:0})},onSettled:()=>e.jsx(ve,{}),onError:()=>{}})})},w=i.useMemo(()=>({toolbar:{container:[[{header:"1"},{header:"2"}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{align:[]}],["image"]],handlers:{image:x}},clipboard:{matchVisual:!1}}),[]),Z=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","align","image"],_=E=>{if(E.key==="Enter"){if(E.preventDefault(),E.nativeEvent.isComposing)return;o.length<5&&p.length>0&&(o.includes(p)?k("중복된 단어 입니다."):f(F=>[...F,p.trim()])),r("")}},T=E=>{f(F=>F.filter((B,W)=>W!==E))},M=E=>{const F={content:t,tags:o};l.length>0&&S.mutate({token:j.token,event_id:m,data:{ids:l}}),u.mutate({token:j.token,event_id:m,data:F},{onSuccess:()=>{E===!0&&C(`/host/my/apply-register/edit/${m}/application`),k("저장 되었습니다.")}})};return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40 fw_700",children:"상세페이지"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위한 내용을 작성해주세요."})}),e.jsx("div",{className:"tit_wrap mt_62",children:e.jsxs("h3",{className:"tit02",children:["행사 상세내용 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 상세이미지 및 내용을 입력해주세요."})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"상세 내용 작성 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 이미지의 너비는 1100px 이상으로 등록해야 상세 페이지의 여백이 생기지 않습니다.",e.jsx("br",{}),"· 이미지는 png, jpg 확장자 파일만 가능하며 용량은 개당 10mb까지 업로드 가능합니다.",e.jsx("br",{}),"· 이미지 용량이 큰 경우 로딩 속도가 느려질 수 있습니다.",e.jsx("br",{}),"· 설명 글도 함께 작성할 수 있으니, 기본 정보 외의 추가할 세부 내용을 작성해주세요."]})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_20 ReactQuill",children:e.jsx("div",{className:`w_767 ${($=(z=d==null?void 0:d.data)==null?void 0:z.is_reject)!=null&&$.content?"ounline":""}`,children:e.jsx(Qi,{ref:N,value:t,onChange:v,modules:w,formats:Z,className:"quill_editor",theme:"snow"})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["태그 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"본 행사를 설명해줄 태그를 입력해주세요."})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{type:"text",onChange:E=>{r(E.target.value)},onKeyDown:E=>_(E),value:p,className:`w_372 ${(I=(L=d==null?void 0:d.data)==null?void 0:L.is_reject)!=null&&I.tag?"outline":""}`,placeholder:"태그는 최대 5개까지 입력 가능합니다."})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:e.jsx("ul",{className:"white_tag_list",children:o&&o.map((E,F)=>e.jsxs("li",{children:[E,e.jsx("button",{onClick:()=>T(F),className:"delete_btn"})]},`${E}_${F}`))})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{onClick:()=>M(!1),className:"btn blue_bor",children:"임시 저장"}),e.jsx("button",{onClick:()=>M(!0),className:"btn dark_blue",children:"다음"})]})]})]})})},ed=()=>{var I,E,F,B,W,se,R,X,ue,We,Me,Fe,Be,Te,Pe,Ze,K,q,oe,ye,Le,de,ze,Xe,De;const{openToast:t}=we(),[s,a]=i.useState(!1),n=D(),c=Re().authInfo,{id:p}=le(),{data:r}=Fi({token:c.token,event_id:p}),{data:o}=Bt({token:c.token,event_id:p}),f=Aa(),m=Mi(),[g,j]=i.useState(),[d,u]=i.useState(),[C,N]=i.useState(),[k,V]=i.useState(),[S,H]=i.useState(),[v,x]=i.useState();i.useEffect(()=>{var A,pe,be,ne,$e,Ie,Ge,et,tt,it,y,Y,J,Q,U,ae,ce,Oe,qe;_("event_start_date",me((A=r==null?void 0:r.data)==null?void 0:A.application_start_date)),_("event_start_view",me((pe=r==null?void 0:r.data)==null?void 0:pe.application_start_date)),_("event_start_time",ut((be=r==null?void 0:r.data)==null?void 0:be.application_start_date)),_("event_end_date",me((ne=r==null?void 0:r.data)==null?void 0:ne.application_end_date)),_("event_end_view",me(($e=r==null?void 0:r.data)==null?void 0:$e.application_end_date)),_("event_end_time",ut((Ie=r==null?void 0:r.data)==null?void 0:Ie.application_end_date)),_("application_type",JSON.stringify((Ge=r==null?void 0:r.data)==null?void 0:Ge.application_type)),_("team",(et=r==null?void 0:r.data)==null?void 0:et.information[0].is_set),_("team_child",(tt=r==null?void 0:r.data)==null?void 0:tt.information[0].required),_("department",(it=r==null?void 0:r.data)==null?void 0:it.information[1].is_set),_("department_child",(y=r==null?void 0:r.data)==null?void 0:y.information[1].required),_("title",(Y=r==null?void 0:r.data)==null?void 0:Y.information[2].is_set),_("title_child",(J=r==null?void 0:r.data)==null?void 0:J.information[2].required),_("gender",(Q=r==null?void 0:r.data)==null?void 0:Q.information[3].is_set),_("gender_child",(U=r==null?void 0:r.data)==null?void 0:U.information[3].required),_("age",(ae=r==null?void 0:r.data)==null?void 0:ae.information[4].is_set),_("age_child",(ce=r==null?void 0:r.data)==null?void 0:ce.information[4].required),_("residence",(Oe=r==null?void 0:r.data)==null?void 0:Oe.information[5].is_set),_("residence_child",(qe=r==null?void 0:r.data)==null?void 0:qe.information[5].required)},[r]);const{register:w,handleSubmit:Z,setValue:_,setError:T,control:M,formState:{errors:z}}=he(),$=(A,pe)=>{Nt(A,_,pe)},L=Z(A=>{var Ie;if(A.event_start_date&&A.event_end_date&&A.event_start_date>A.event_end_date){T("event_end_date",{type:"manual",message:"종료 날짜는 시작 날짜 이후여야 합니다."});return}if(((Ie=o==null?void 0:o.data)==null?void 0:Ie.event_end_date)<A.event_end_date){T("event_end_date",{type:"manual",message:"모집 기간은 행사 종료일 이후 일 수 없습니다."});return}const pe=bt(A.event_start_time),be=bt(A.event_end_time);let ne={};A.team&&(ne={...ne,1:A.team_child??!1}),A.department&&(ne={...ne,2:A.department_child??!1}),A.title&&(ne={...ne,3:A.title_child??!1}),A.gender&&(ne={...ne,4:A.gender_child??!1}),A.age&&(ne={...ne,5:A.age_child??!1}),A.residence&&(ne={...ne,6:A.residence_child??!1});const $e={information:ne,...A.event_start_date&&pe&&{application_start_date:`${A.event_start_date} ${pe}`},...A.event_end_date&&be&&{application_end_date:`${A.event_end_date} ${be}`},...A.application_type&&{application_type:A.application_type}};s===!0?f.mutate({token:c.token,event_id:p,data:$e},{onSuccess:()=>{m.mutate({token:c.token,event_id:p},{onSuccess:()=>{n("/host/my/apply-register/edit/finish")},onError:()=>{t("작성중인 필드가 있습니다.")}})}}):s===!1&&f.mutate({token:c.token,event_id:p,data:$e},{onSuccess:()=>{t("저장 되었습니다.")}})});return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40 fw_700",children:"모집정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 신청을 위해 모집 방법 및 수집할 정보를 입력해주세요."})}),e.jsxs("form",{onSubmit:L,children:[e.jsx("div",{className:"tit_wrap mt_62",children:e.jsxs("h3",{className:"fs_20",children:["모집 기간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:`w_767 dis_flex gap10 ${(E=(I=r==null?void 0:r.data)==null?void 0:I.is_reject)!=null&&E.application_date?"outline":""}`,children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{...w("event_start_view"),onChange:A=>$(A,"event_start_view"),type:"text",className:"w_full",placeholder:"시작 날짜"}),e.jsx("label",{htmlFor:"event_start_date"}),e.jsx("input",{id:"event_start_date",type:"date",...w("event_start_date"),onChange:A=>_("event_start_view",A.target.value)})]}),e.jsx("div",{className:"flex1",children:e.jsx(Ce,{name:"event_start_time",control:M,render:({field:{onChange:A,value:pe}})=>e.jsx(e.Fragment,{children:e.jsx(gt,{selected:pe,onChange:be=>A(be),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:30,dateFormat:"HH:mm",timeFormat:"HH:mm",showTimeCaption:!1,placeholderText:"시작 시간",className:"w_full"})})})}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{type:"text",...w("event_end_view"),onChange:A=>$(A,"event_end_view"),className:"w_full",placeholder:"종료 날짜"}),e.jsx("label",{htmlFor:"event_end_date"}),e.jsx("input",{id:"event_end_date",type:"date",...w("event_end_date"),onChange:A=>_("event_end_view",A.target.value)})]}),e.jsx("div",{className:"flex1",children:e.jsx(Ce,{name:"event_end_time",control:M,render:({field:{onChange:A,value:pe}})=>e.jsx(e.Fragment,{children:e.jsx(gt,{selected:pe,onChange:be=>A(be),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:30,dateFormat:"HH:mm",timeFormat:"HH:mm",showTimeCaption:!1,placeholderText:"종료 시간",className:"w_full"})})})})]})}),((F=z.event_end_date)==null?void 0:F.message)&&e.jsx("p",{className:"err_msg",style:{paddingTop:"10px"},children:(W=(B=z.event_end_date)==null?void 0:B.message)==null?void 0:W.toString()}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["모집 방법 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("h3",{className:"fs_12",children:"단체 신청 진행 시, 선택하신 수집 정보를 기반으로 한 엑셀 양식을 제공합니다."})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:`dis_flex w_767 gap11 ${(R=(se=r==null?void 0:r.data)==null?void 0:se.is_reject)!=null&&R.application_type?"outline":""}`,children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"0",...w("application_type"),type:"radio",name:"application_type",value:"0"}),e.jsx("label",{htmlFor:"0",children:"개인 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"1",...w("application_type"),type:"radio",name:"application_type",value:"1"}),e.jsx("label",{htmlFor:"1",children:"단체 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"2",...w("application_type"),type:"radio",name:"application_type",value:"2"}),e.jsx("label",{htmlFor:"2",children:"개인/단체 신청 모두"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["수집 정보 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_1",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_1",className:`${(ue=(X=r==null?void 0:r.data)==null?void 0:X.is_reject)!=null&&ue.application_information?"outline":""}`,children:"이름"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_2",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_2",className:`${(Me=(We=r==null?void 0:r.data)==null?void 0:We.is_reject)!=null&&Me.application_information?"outline":""}`,children:"이메일"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_3",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_3",className:`${(Be=(Fe=r==null?void 0:r.data)==null?void 0:Fe.is_reject)!=null&&Be.application_information?"outline":""}`,children:"휴대전화 번호"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{...w("team"),id:"chk03_4",type:"checkbox",className:"input",value:"1",onChange:A=>{j(A.target.checked),A.target.checked===!1&&_("team_child",!1)}}),e.jsx("label",{htmlFor:"chk03_4",className:`label ${(Pe=(Te=r==null?void 0:r.data)==null?void 0:Te.is_reject)!=null&&Pe.application_information?"outline":""}`,children:"소속 (회사/기관/학교명)"}),e.jsx("input",{...w("team_child"),type:"checkbox",className:"hide toggle",id:"team_child",disabled:!g}),e.jsxs("label",{htmlFor:"team_child",className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{...w("department"),id:"chk03_5",type:"checkbox",className:"input",value:"2",onChange:A=>{u(A.target.checked),A.target.checked===!1&&_("department_child",!1)}}),e.jsx("label",{htmlFor:"chk03_5",className:`label ${(K=(Ze=r==null?void 0:r.data)==null?void 0:Ze.is_reject)!=null&&K.application_information?"outline":""}`,children:"부서"}),e.jsx("input",{...w("department_child"),type:"checkbox",className:"hide toggle",id:"department_child",disabled:!d}),e.jsxs("label",{htmlFor:"department_child",className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{...w("title"),id:"title",type:"checkbox",className:"input",value:"3",onChange:A=>{N(A.target.checked),A.target.checked===!1&&_("title_child",!1)}}),e.jsx("label",{htmlFor:"title",className:`label ${(oe=(q=r==null?void 0:r.data)==null?void 0:q.is_reject)!=null&&oe.application_information?"outline":""}`,children:"직함"}),e.jsx("input",{...w("title_child"),type:"checkbox",className:"hide toggle",id:"title_child",disabled:!C}),e.jsxs("label",{htmlFor:"title_child",className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{...w("gender"),id:"chk03_7",type:"checkbox",className:"input",value:"4",onChange:A=>{V(A.target.checked),A.target.checked===!1&&_("gender_child",!1)}}),e.jsx("label",{htmlFor:"chk03_7",className:`label ${(Le=(ye=r==null?void 0:r.data)==null?void 0:ye.is_reject)!=null&&Le.application_information?"outline":""}`,children:"성별"}),e.jsx("input",{...w("gender_child"),type:"checkbox",className:"hide toggle",id:"gender_child",disabled:!k}),e.jsxs("label",{htmlFor:"gender_child",className:"required_toggle_btn ",children:["필수",e.jsx("i",{})]})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{...w("age"),id:"age",type:"checkbox",className:"input",value:"5",onChange:A=>{H(A.target.checked),A.target.checked===!1&&_("age_child",!1)}}),e.jsx("label",{htmlFor:"age",className:`label ${(ze=(de=r==null?void 0:r.data)==null?void 0:de.is_reject)!=null&&ze.application_information?"outline":""}`,children:"나이"}),e.jsx("input",{...w("age_child"),type:"checkbox",className:"hide toggle",id:"age_child",disabled:!S}),e.jsxs("label",{htmlFor:"age_child",className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{...w("residence"),id:"residence",type:"checkbox",className:"input",value:"6",onChange:A=>{x(A.target.checked),A.target.checked===!1&&_("residence_child",!1)}}),e.jsx("label",{htmlFor:"residence",className:`label ${(De=(Xe=r==null?void 0:r.data)==null?void 0:Xe.is_reject)!=null&&De.application_information?"outline":""}`,children:"거주 지역"}),e.jsx("input",{...w("residence_child"),type:"checkbox",className:"hide toggle",id:"residence_child",disabled:!v}),e.jsxs("label",{htmlFor:"residence_child",className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{onClick:()=>a(!1),className:"btn blue_bor",children:"저장"}),e.jsx("button",{onClick:()=>a(!0),className:"btn dark_blue",children:"행사 게시"})]})]})]})]})})},td=()=>{const{id:t}=le(),[s,a]=i.useState(""),l=Re().authInfo;Ma({token:l.token,event_id:t});const[c,p]=i.useState(["option1","option2"]),[r,o]=i.useState({type:0,title:"title",options:c,required:!0,is_reject:!1}),[f,m]=i.useState([{type:0,title:"title",options:["option1","option2"],required:!0,is_reject:!1}]),g=()=>{const d=[...f,r];m(d)},j=d=>{f.length!==1&&m(f.filter((u,C)=>C!==d))};return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"사전 설문"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"사전 설문 제작을 통해 행사에 필요한 데이터를 받아보세요."})}),e.jsx("div",{className:"tit_wrap mt_62",children:e.jsx("h3",{className:"fs_20",children:"사전 설문 사용 여부"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_1",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_1",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_2",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_2",children:"사용하지 않음"})]})]})}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"설문 리스트"})}),f==null?void 0:f.map((d,u)=>e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요."}),e.jsxs("select",{onChange:C=>{a(C.target.value)},children:[e.jsx("option",{value:"1",selected:!0,children:"단일 선택"}),e.jsx("option",{value:"2",children:"다중 선택"}),e.jsx("option",{value:"3",children:"장문"})]})]}),d.type===0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"option_tit",children:"옵션 1"}),e.jsx("div",{className:"option_tit",children:e.jsx("input",{type:"text",placeholder:"옵션을 입력해주세요."})}),e.jsx("button",{className:"option_add_btn",children:"옵션 추가"})]}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{onClick:()=>j(u),className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn active",children:["필수",e.jsx("i",{})]})]})]}),d.type===1&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"option_tit",children:"옵션 1"}),e.jsx("div",{className:"option_tit",children:e.jsx("input",{type:"text",placeholder:"옵션을 입력해주세요."})}),e.jsx("button",{className:"option_add_btn",children:"옵션 추가"})]}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{onClick:()=>j(u),className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn active",children:["필수",e.jsx("i",{})]})]})]}),d.type===2&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"텍스트를 입력하세요."})}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{onClick:()=>j(u),className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})]})]})},u)),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 dis_flex justify_end",children:e.jsx("button",{onClick:g,className:"btn h_36 dark_blue",children:"추가하기"})})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue_bor",children:"임시 저장"}),e.jsx("button",{className:"btn dark_blue",children:"다음"})]})]})]})})},id=()=>e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"FAQ & 문의"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참가자 문의에 대한 담당자 정보를 입력해주세요."})}),e.jsx("div",{className:"tit_wrap mt_62",children:e.jsx("h3",{className:"fs_20",children:"FAQ 사용 여부"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_1",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_1",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_2",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_2",children:"사용하지 않음"})]})]})}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"FAQ 리스트"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:e.jsxs("div",{className:"survey_card w_767",children:[e.jsx("div",{className:"head",children:e.jsx("input",{type:"text",placeholder:"Q. 제목을 입력해주세요."})}),e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"A. 답변을 입력해주세요."})}),e.jsx("div",{className:"btm",children:e.jsx("button",{className:"delete_btn"})})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 dis_flex justify_end",children:e.jsx("button",{className:"btn h_36 dark_blue",children:"추가하기"})})}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsxs("h3",{className:"fs_20",children:["문의 담당자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"이름"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"이메일"})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"휴대전화 번호"})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn dark_blue",children:"저장"}),e.jsx("button",{className:"btn dark_blue",children:"행사 게시"})]})]})]})}),sd=({applyId:t,setDetailPopUp:s})=>{var p,r,o,f,m,g,j,d;const a=localStorage.getItem("token"),{id:n}=le(),{data:l}=ya(n,a,t),c=()=>{s(!1)};return e.jsx(e.Fragment,{children:l&&e.jsxs("div",{className:"modal_wrap detailPop detailPop01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{onClick:c,className:"modal_close"}),e.jsxs("div",{className:"modal_body",children:[e.jsx("div",{className:"modal_tit",children:"사전 설문 결과"}),e.jsx("div",{className:"fs_18 fw_600 mt_48",children:"신청자 정보"}),e.jsxs("ul",{className:"key_val_list mt_24",children:[e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"신청 유형"}),e.jsx("div",{className:"val",children:((p=l==null?void 0:l.data)==null?void 0:p.type)===0?"개인 신청":"단체 신청"})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"이름"}),e.jsx("div",{className:"val",children:(r=l==null?void 0:l.data)==null?void 0:r.name})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"이메일"}),e.jsx("div",{className:"val",children:(o=l==null?void 0:l.data)==null?void 0:o.email})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"휴대전화"}),e.jsx("div",{className:"val",children:(f=l==null?void 0:l.data)==null?void 0:f.contact})]}),((m=l==null?void 0:l.data)==null?void 0:m.information)&&((g=l==null?void 0:l.data)==null?void 0:g.information.map((u,C)=>e.jsxs("li",{children:[e.jsx("div",{className:"key",children:u==null?void 0:u.name}),e.jsx("div",{className:"val",children:u==null?void 0:u.answer})]},C))),((j=l==null?void 0:l.data)==null?void 0:j.surveys)&&((d=l==null?void 0:l.data)==null?void 0:d.surveys.map((u,C)=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fs_16 fw_600 mt_16",children:u.type===0?"단일 선택":u.type===1?"다중 선택":u.type===2?"단답/장문형":""}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:u==null?void 0:u.name}),e.jsx("div",{className:"val",children:u==null?void 0:u.answer})]},C)]})))]}),e.jsx("a",{href:`https://api.micemate.io/storage/${l.data.xlsx}`,style:{backgroundColor:"#1E9EFF",padding:"6px 10px",borderRadius:"5px",display:"block",width:"180px",textAlign:"center",margin:"64px auto 0",fontSize:"16px"},children:"참가자 엑셀 다운로드"})]})]})]})})},ad=({partyList:t})=>{const[s,a]=i.useState(!1),[n,l]=i.useState(null),c=p=>{l(p),a(!0)};return e.jsxs("div",{className:"table_wrap mt_22",children:[(t==null?void 0:t.total)>0?e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"160px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"신청일"}),e.jsx("th",{children:"신청유형"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"이메일"}),e.jsx("th",{children:"휴대전화"}),e.jsx("th",{children:"단체명"}),e.jsx("th",{}),e.jsx("th",{children:"상세 보기"})]})}),e.jsx("tbody",{children:t&&(t==null?void 0:t.items.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:me(p.created_at)}),e.jsx("td",{children:p.type===0?"개인 신청":"단체 신청"}),e.jsx("td",{children:p.name}),e.jsx("td",{children:p.email}),e.jsx("td",{children:p.contact}),e.jsx("td",{children:p.group}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("button",{onClick:()=>{c(p.id)},className:"col_blue underline",children:"상세 보기"})})]},p.id)))})]}):e.jsx("div",{children:"해당하는 참가자가 없습니다. "}),s===!0&&e.jsx(sd,{applyId:n,setDetailPopUp:a})]})},nd=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],rd=[{value:"개인 신청",type:0},{value:"단체 신청",type:1}],ld=({setFilterData:t,resetFilter:s})=>{const[a,n]=i.useState(),l=re().format("YYYY-MM-DD"),{register:c,handleSubmit:p,setValue:r,reset:o}=he(),f=d=>{let u="",C=re().format("YYYY-MM-DD");switch(d){case"today":u=re().format("YYYY-MM-DD");break;case"yesterday":u=re().subtract(1,"day").format("YYYY-MM-DD"),C=u;break;case"7days":u=re().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":u=re().subtract(1,"month").format("YYYY-MM-DD");break;case"all":u="",C="";break}r("start",u),r("end",C),n(d)},m=()=>{n(null)},g=d=>{t(d)},j=()=>{o(),s()};return e.jsxs("form",{onSubmit:p(g),children:[e.jsx("div",{className:"table_wrap mt_20",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"기간"}),e.jsxs("td",{children:[nd.map(d=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:d.type,onChange:()=>f(d.type),checked:a===d.type,className:"hide"}),e.jsx("label",{htmlFor:d.type,className:"btn border_w",children:d.value})]},d.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...c("start"),id:"start",onClick:m,onChange:d=>r("start",d.target.value),defaultValue:l,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...c("end"),id:"end",onClick:m,onChange:d=>r("end",d.target.value),defaultValue:l,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...c("type"),className:"btn border_w w_96",children:rd.map(d=>e.jsx("option",{value:d.type,children:d.value},d.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...c("search"),className:"small search w_548"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap mt_18",children:[e.jsx("button",{className:"btn small w_83 light_blue",type:"submit",children:"검색"}),e.jsx("button",{className:"btn small w_83 light_gray ml_4",type:"button",onClick:()=>j(),children:"초기화"})]})]})},od=()=>{var u,C,N,k;const[t,s]=i.useState({}),[a,n]=i.useState(),[l,c]=i.useState(1),p=Re(),r=D(),o=p.authInfo,f=Vt(),{id:m}=le(),{data:g}=va(m,o.token);i.useEffect(()=>{const V={page:l??1,start:t.start,end:t.end,type:t.type,search:t.search,order:t.order??"asc"},S=Object.fromEntries(Object.entries(V).filter(([v,x])=>typeof x=="string"||Array.isArray(x)?x!==""&&x.length>0:x!=null).map(([v,x])=>[v,String(x)])),H=new URLSearchParams(S).toString();n(H)},[t,l]),i.useEffect(()=>{a&&(r(`?${a}`),f.invalidateQueries({queryKey:["EventPartyQuery"]}))},[a]);const j=()=>{s({}),c(1),r("?")},d=()=>{s({...t,order:t.order==="desc"?"asc":"desc"})};return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"fs_40",children:"참가자 관리"})}),e.jsx(ld,{setFilterData:s,resetFilter:j}),e.jsx("div",{className:"tit_wrap mt_30",children:e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:t.search?t.search:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:`[총 회원수 ${((u=g==null?void 0:g.data)==null?void 0:u.total)>0?(C=g==null?void 0:g.data)==null?void 0:C.total:0}명]`})]}),e.jsx("button",{onClick:d,className:"sort_btn",children:"정렬"})]})}),e.jsx(ad,{partyList:g==null?void 0:g.data}),((N=g==null?void 0:g.data)==null?void 0:N.total)>20&&e.jsx(Ui,{total:(k=g==null?void 0:g.data)==null?void 0:k.total,page:l,setPage:c})]})})},gi=10*1024*1024,dd=()=>{var w,Z;const[t,s]=i.useState(null),[a,n]=i.useState(null),[l,c]=i.useState(null),[p,r]=i.useState(!1),o=Za(),f=localStorage.getItem("token"),{id:m}=le(),{openToast:g}=we(),{register:j,handleSubmit:d,setValue:u,setError:C,formState:{errors:N}}=he(),k=(_,T)=>{if(_&&_.length>0){const M=_[0];console.log(M);const z=["image/jpeg","image/tiff","application/pdf","image/png"],$=["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel","application/haansoftxlsx"];if(T==="img"&&z.includes(M.type)){if(M.size>gi){c("이미지 파일의 크기는 10MB 이하이어야 합니다."),s(null),u("img",null);return}c(null),s(M),u("img",M)}else if(T==="xlsx"&&$.includes(M.type)){if(M.size>gi){c("엑셀 파일의 크기는 10MB 이하이어야 합니다."),n(null),u("xlsx",null);return}c(null),n(M),u("xlsx",M)}else{c("JPG, TIF, PDF, PNG 또는 엑셀 파일만 업로드 가능합니다."),s(null),n(null),u("img",null),u("xlsx",null);return}}else c(null),s(null),n(null),u("img",null),u("xlsx",null)},V=_=>{_.preventDefault(),r(!0)},S=()=>{r(!1)},H=(_,T)=>{_.preventDefault(),r(!1);const M=_.dataTransfer.files;k(M,T)},v=_=>(_/1024/1024).toFixed(2),x=d(()=>{const _=new FormData,T=(M,z)=>{z!=null&&!(z instanceof File&&z.size===0)&&_.append(M,z)};T("img",t??void 0),T("xlsx",a??void 0),o.mutate({token:f,event_id:m,formData:_},{onSuccess:()=>{g("저장 되었습니다.")},onError:()=>{o.error.response.data.data&&C("apiError",{type:"manual",message:"파일을 모두 등록해주세요"})}})});return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h2",{className:"fs_40",children:"참가기업 관리"})}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsxs("h3",{className:"fs_18",children:["부스배치도 & 기업 리스트 ",e.jsx("span",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("p",{className:"fs_16 fw_500 col_gray",children:["행사 부스 배치도와 기업 리스트를 등록해 주세요.",e.jsx("br",{}),"사전등록을 신청한 참관객에게",e.jsx("a",{href:"#none",className:"col_white underline",children:"마이스 메이트 AI 부스추천 서비스"}),"가 맞춤 부스를 추천해드립니다."]})}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{className:"dis_flex mt_24 pr_52 gap38",children:[e.jsxs("div",{onDragOver:V,onDragLeave:S,onDrop:_=>H(_,"img"),className:"enroll_gray_box flex1",children:[e.jsx("h4",{className:"fs_24",children:"부스배치도 이미지를 등록해주세요"}),e.jsxs("p",{className:"fs_16 mt_14",children:["JPG, TIF, PDF, PNG 파일만 등록 가능하며, 용량은 10MB 이하로 업로드 가능합니다.",e.jsx("br",{}),"부스배치도 이미지 내, 업체명이 기입된 파일로 등록해주실길 바랍니다."]}),e.jsxs("div",{className:"btn_wrap mt_36",children:[e.jsx("a",{href:"/host/downloadFile/[마이스메이트]예시_부스배치도.pdf",download:"[마이스메이트]예시_부스배치도.pdf",className:"btn white",children:"부스배치도 예시 이미지"}),e.jsx("input",{type:"file",id:"img",...j("img"),onChange:_=>k(_.target.files,"img"),className:"hide"}),e.jsx("label",{htmlFor:"img",className:"btn dark_blue",children:"업로드 파일 선택"})]}),e.jsx("p",{className:"fs_16 mt_10 fw_500",children:"또는 여기에 끌어서 놓기"})]}),e.jsxs("div",{onDragOver:V,onDragLeave:S,onDrop:_=>H(_,"xlsx"),className:"enroll_gray_box flex1",children:[e.jsx("h4",{className:"fs_24",children:"기업 리스트를 등록해주세요"}),e.jsxs("p",{className:"fs_16 mt_14",children:["xlsx 파일만 등록 가능하며, 용량은 10MB 이하로 업로드 가능합니다.",e.jsx("br",{}),"기업 리스트는 마이스 메이트에서 제공하는 양식에 맞춰 등록해주시길 바랍니다."]}),e.jsxs("div",{className:"btn_wrap mt_36",children:[e.jsx("a",{href:"/host/downloadFile/[마이스메이트]참가기업리스트.xlsx",download:"[마이스메이트]참가기업리스트.xlsx",className:"btn white",children:"기업 리스트 엑셀 양식"}),e.jsx("input",{type:"file",id:"xlsx",...j("xlsx"),onChange:_=>k(_.target.files,"xlsx"),className:"hide"}),e.jsx("label",{htmlFor:"xlsx",className:"btn dark_blue",children:"업로드 파일 선택"})]}),e.jsx("p",{className:"fs_16 mt_10 fw_500",children:"또는 여기에 끌어서 놓기"})]})]}),e.jsxs("div",{className:"dis_flex pr_52 gap38",children:[e.jsx("div",{className:"flex1",children:t&&e.jsxs("div",{className:"file_upload_item",children:[e.jsx("i",{className:"file_icon"}),e.jsxs("div",{className:"flex1",children:[e.jsx("p",{className:"fs_12",children:t.name}),e.jsx("p",{className:"fs_10",children:`${v(t.size)}mb`})]}),e.jsx("i",{className:"chk_icon"})]})}),e.jsx("div",{className:"flex1",children:a&&e.jsxs("div",{className:"file_upload_item",children:[e.jsx("i",{className:"file_icon"}),e.jsxs("div",{className:"flex1",children:[e.jsx("p",{className:"fs_12",children:a.name}),e.jsx("p",{className:"fs_10",children:`${v(a.size)}mb`})]}),e.jsx("i",{className:"chk_icon"})]})})]}),l&&e.jsx("p",{className:"err_msg",style:{paddingTop:"20px"},children:l}),N.apiError&&e.jsx("p",{style:{paddingTop:"10px"},className:"err_msg",children:(Z=(w=N.apiError)==null?void 0:w.message)==null?void 0:Z.toString()}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{type:"submit",className:"btn blue_bor",children:"임시저장"}),e.jsx("button",{type:"submit",className:"btn dark_blue",children:"등록하기"})]})]})]})]})})},cd=()=>e.jsx("div",{className:"cont_area",children:e.jsx("div",{className:"cont_panel min_h_864",children:e.jsx("div",{className:"inner",children:e.jsxs("div",{className:"txt_center mt_190",children:[e.jsx("p",{className:"fs_24 fw_700",children:"행사 등록이 완료되었습니다"}),e.jsxs("p",{className:"fs_24 fw_500 mt_44",children:["현재 행사는 ",e.jsx("b",{children:"승인 대기 상태"}),"입니다.",e.jsx("br",{}),"24시간 이내 처리가 완료될 예정이며, ",e.jsx("br",{}),"심사결과는 이메일로 전송됩니다."]}),e.jsx("div",{className:"btn_wrap mt_44",children:e.jsx(b,{to:"/host/my/dashboard",className:"btn dark_blue w_384",children:"대시보드로 돌아가기"})})]})})})}),pd=h.div`
  color: #fff;
  /* button */
  .btn {
    display: inline-flex;
    min-width: 135px;
    height: 43px;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    padding: 0 6px;
    color: #fff;
  }
  .btn.white {
    background-color: #fff;
    color: #09338c;
  }
  .btn.dark_blue {
    background-color: #09338c;
    color: #fff;
  }
  .btn.blue {
    background-color: #235ef3;
  }
  .btn.light_blue {
    background-color: #1e9eff;
  }
  .btn.brighter_blue {
    background-color: #6ea8fe;
    color: #343a40;
  }
  .btn.gray {
    background-color: #ffffff33;
  }
  .btn.light_gray {
    background-color: #6c757d;
    color: #fff;
  }
  .btn.brighter_gray {
    background-color: #b0b8c1;
    color: #343a40;
  }
  .btn.yellow {
    background-color: #ecd144;
    color: #343a40;
  }

  .wrap {
    width: 1920px;
    margin: 0 auto;
    position: relative;
    padding: 202px 212px 121px 60px;
  }

  .preview_page {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 51px;
  }
  .preview_page .cont_wrap {
    flex: 1;
    width: 1191px;
  }
  .preview_page .review_wrap {
    width: 406px;
    min-width: 406px;
  }

  .cont_wrap .top_wrap .m_img {
    width: 100%;
    height: 627px;
    border-radius: 20px;
    overflow: hidden;
  }
  .cont_wrap .top_wrap .m_img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .cont_wrap .top_wrap .tit_area {
    margin-top: 38px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  .cont_wrap .top_wrap .tit_area .area_l {
    padding-left: 34px;
  }
  .cont_wrap .top_wrap .tit_area .title {
    display: flex;
    align-items: center;
    position: relative;
    gap: 26px;
  }
  .cont_wrap .top_wrap .star {
    display: block;
    width: 18px;
    height: 18px;
    background: url("/images/icon/star-fill.png") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .cont_wrap .top_wrap .tit_area .title strong {
    font-size: 32px;
    line-height: 45px;
    color: #fff;
    font-weight: bold;
  }
  .cont_wrap .top_wrap .tit_area .title .d_day_tag {
    display: inline-flex;
    align-items: center;
    height: 35px;
    background-color: #235ef3;
    border-radius: 9px;
    color: #fff;
    font-size: 24px;
    padding: 0 20px;
    font-weight: 700;
    white-space: nowrap;
  }
  .cont_wrap .top_wrap .tit_area .desc {
    font-size: 20px;
    color: #b0b8c1;
    margin-top: 8px;
  }
  .cont_wrap .top_wrap .tit_area .score {
    font-size: 20px;
    line-height: 14px;
    margin-top: 16px;
    font-weight: 500;
    position: relative;
    padding-left: 20px;
  }
  .cont_wrap .top_wrap .tit_area .score .col_blue {
    color: #235ef3;
  }
  .cont_wrap .top_wrap .tit_area .btns {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
  }
  .cont_wrap .top_wrap .tit_area .btns .heart_btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #3b4048 url("/images/icon/heart_icon.png") no-repeat center/22px;
  }
  .cont_wrap .top_wrap .tit_area .btns .share_btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: #3b4048 url("/images/icon/share_icon.png") no-repeat center/22px;
  }
  .cont_wrap .top_wrap .tit_area .btn.blue {
    margin-top: 24px;
    width: 177px;
  }

  .cont_wrap .info_wrap {
    padding-top: 76px;
  }
  .cont_wrap .info_wrap .tab_btns {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ffffff33;
  }
  .cont_wrap .info_wrap .tab_btns .tab_btn {
    display: block;
    font-size: 18px;
    line-height: 21px;
    padding-bottom: 14px;
    width: 162px;
    text-align: center;
    position: relative;
  }
  .cont_wrap .info_wrap .tab_btns .tab_btn:hover {
    color: #316fe9;
  }
  .cont_wrap .info_wrap .tab_btns .tab_btn:hover:after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    height: 3px;
    border-radius: 3px;
    background-color: #316fe9;
    bottom: -1.5px;
  }
  .cont_wrap .info_wrap .info_box {
    margin-top: 37px;
    background-color: rgba(41, 46, 55, 0.5);
    border-radius: 10px;
    padding: 63px 52px 100px 58px;
  }
  .cont_wrap .info_wrap .info_box > div ~ div {
    margin-top: 100px;
  }
  .cont_wrap .info_wrap .info_box .tit {
    font-size: 18px;
    font-weight: 800;
    padding-bottom: 20px;
  }
  .cont_wrap .info_wrap .info_box .key_val_list li {
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .cont_wrap .info_wrap .info_box .key_val_list li .key {
    color: #b0b8c1;
    width: 94px;
  }
  .cont_wrap .info_wrap .info_box .key_val_list li ~ li {
    margin-top: 18px;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs {
    max-height: ${t=>t.$preview?"auto":"800px"};
    overflow: hidden;
    position: relative;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${t=>t.$preview?"none":"rgba(217, 217, 217, 0) 0%,rgba(136, 137, 139, 0.43) 39.5%,#121212 89.5%"}
    );
    pointer-events: none;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.on {
    max-height: auto !important;
  }

  .cont_wrap .info_wrap .info_box .detail_imgs img {
    width: 100%;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs .detail_more_btn {
    position: absolute;
    z-index: 10;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 177px;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs .img,
  .cont_wrap .info_wrap .info_box .detail_imgs .img img {
    display: block;
    width: 100%;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.active {
    max-height: unset;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.active:after {
    content: none;
  }
  .cont_wrap .info_wrap .info_box .detail_imgs.active .detail_more_btn {
    display: none;
  }
  .cont_wrap .info_wrap .info_box .faq_list li {
    padding-bottom: 27px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    margin-bottom: 27px;
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
  }
  .cont_wrap .info_wrap .info_box .faq_list .q_txt {
    padding-left: 73px;
    position: relative;
  }
  .cont_wrap .info_wrap .info_box .faq_list .q_txt:before {
    content: "";
    display: block;
    width: 27px;
    height: 27px;
    background: url("/images/icon/faq_list_q.png") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: 0;
  }
  .cont_wrap .info_wrap .info_box .faq_list .a_txt {
    padding-left: 73px;
    position: relative;
    margin-top: 26px;
  }
  .cont_wrap .info_wrap .info_box .faq_list .a_txt:before {
    content: "";
    display: block;
    width: 27px;
    height: 27px;
    background: url("/images/icon/faq_list_a.png") no-repeat center/contain;
    position: absolute;
    left: 0;
    top: 0;
  }

  .review_wrap .tab_btns {
    display: flex;
    border-bottom: 1px solid #fff;
  }
  .review_wrap .tab_btns .tab_btn {
    flex: 1;
    line-height: 21px;
    padding: 6px 0;
    position: relative;
    color: #fff;
  }
  .review_wrap .tab_btns .tab_btn.active:after,
  .review_wrap .tab_btns .tab_btn:hover:after {
    content: "";
    display: block;
    width: 100%;
    bottom: -1.5px;
    position: absolute;
    height: 3px;
    border-radius: 3px;
    background-color: #235ef3;
  }
  .review_wrap .blue_comment_box {
    margin-top: 12px;
    padding: 8px 12px 8px 20px;
    background-color: #084298;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
  }
  .review_wrap .blue_comment_box_delete {
    width: 24px;
    height: 24px;
    background: url("/images/icon/x_icon.png") no-repeat center/contain;
  }
  .review_wrap .comment_box {
    margin-top: 7px;
    background-color: rgba(41, 46, 55, 0.5);
    border-radius: 10px;
    padding-bottom: 30px;
  }
  .review_wrap .comment_box .top_wrap {
    padding: 21px 16px;
  }
  .review_wrap .comment_box .top_wrap .score_wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars {
    display: flex;
    gap: 6px;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span {
    display: block;
    width: 22px;
    height: 22px;
    position: relative;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span:before,
  .review_wrap .comment_box .top_wrap .score_wrap .stars span i {
    content: "";
    width: 100%;
    height: 100%;
    background: no-repeat left top/22px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span:before {
    background-image: url("/images/icon/star_svg_gray.svg");
  }
  .review_wrap .comment_box .top_wrap .score_wrap .stars span i {
    background-image: url("/images/icon/star_svg.svg");
  }
  .review_wrap .comment_box .top_wrap .score_wrap .txt {
    flex: 1;
    font-size: 16px;
    padding-left: 14px;
  }
  .review_wrap .comment_box .top_wrap .score_wrap .score_num {
    font-size: 30px;
    font-weight: 600;
  }
  .review_wrap .comment_box .top_wrap .select {
    /* background: transparent url("/images/icon/arrow_b_icon.png") no-repeat right
      center/10px; */
    padding-right: 16px;
    font-size: 14px;
    margin-top: 10px;
    color: #fff;
    background-color: #16171b;
  }
  .review_wrap .comment_box .top_wrap .select option {
    color: #000;
    background-color: #fff;
  }

  .review_wrap .comment_box .comment_list {
    padding: 0 3px;
  }
  .review_wrap .comment_box .comment_list li {
    border-bottom: 1px solid #ffffff1a;
    padding: 12px 16px;
  }
  .review_wrap .comment_box .comment_list .stars {
    display: flex;
    gap: 4px;
  }
  .review_wrap .comment_box .comment_list .stars span {
    display: block;
    width: 10px;
    height: 10px;
    position: relative;
  }
  .review_wrap .comment_box .comment_list .stars span:before,
  .review_wrap .comment_box .comment_list .stars span i {
    content: "";
    width: 100%;
    height: 100%;
    background: no-repeat left top/10px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .review_wrap .comment_box .comment_list .stars span:before {
    background-image: url("/images/icon/star_svg_gray.svg");
  }
  .review_wrap .comment_box .comment_list .stars span i {
    background-image: url("/images/icon/star_svg.svg");
  }
  .review_wrap .comment_box .comment_list .username {
    font-size: 14px;
    color: #b0b8c1;
    margin-top: 14px;
  }
  .review_wrap .comment_box .comment_list .comment_txt {
    font-size: 14px;
    margin-top: 14px;
    line-height: 18px;
  }
  .review_wrap .comment_box .comment_list .btn_wrap {
    display: flex;
    justify-content: flex-end;
    margin-top: 14px;
  }
  .review_wrap .comment_box .comment_list .like_btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    height: 26px;
    padding: 0 6px;
    background-color: #235ef3;
    font-size: 12px;
    font-weight: 600;
    border-radius: 4px;
    color: #fff;
  }
  .review_wrap .comment_box .comment_list .like_btn:before {
    content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: url("/images/icon/like_icon.png") no-repeat center/contain;
  }
  .review_wrap .comment_box .comment_list .like_btn.active:before {
    background-image: url("/images/icon/like_active_icon.png");
  }
  .review_wrap .comment_box .pagination {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }
  .review_wrap .comment_box .pagination .num {
    display: inline-flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #292e37;
    border-radius: 4px;
    color: #fff;
  }
  .review_wrap .comment_box .pagination .num.active {
    background-color: #235ef3;
  }
  .review_wrap .comment_box .pagination .pagi_prev,
  .review_wrap .comment_box .pagination .pagi_next {
    display: inline-flex;
    width: 48px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: #292e37;
    border-radius: 4px;
    background: #292e37 no-repeat center/16px;
  }
  .review_wrap .comment_box .pagination .pagi_prev {
    background-image: url("/images/icon/chevron_left.png");
  }
  .review_wrap .comment_box .pagination .pagi_next {
    background-image: url("/images/icon/chevron_right.png");
  }
`,xd=()=>{var p,r,o,f,m,g,j,d,u,C,N,k,V,S,H,v,x;const t=localStorage.getItem("token"),{id:s}=le(),{data:a}=xt(s,t),[n,l]=i.useState(!1),c=(w,Z,_)=>{if(w===1)return"무료";if(w===2)return`사전신청 무료 / 현장구매 유료(${G(String(Z))})`;if(w===3)return`사전 신청 무료 / 기간 한정 유료(${G(String(Z))}) / 현장 구매 시 유료(${G(String(_))})`;if(w===4)return`사전 신청 유료(${G(String(Z))}) / 현장 결제 유료(${G(String(_))})`;if(w===5)return`유료(${G(String(_))})`};return e.jsx(pd,{$preview:n,children:e.jsx("div",{className:"wrap",children:e.jsxs("div",{className:"preview_page",children:[e.jsxs("div",{className:"cont_wrap",children:[e.jsxs("div",{className:"top_wrap",children:[e.jsx("div",{className:"m_img",children:e.jsx("img",{src:`https://api.micemate.io/storage/${(p=a==null?void 0:a.data)==null?void 0:p.img}`})}),e.jsxs("div",{className:"tit_area",children:[e.jsxs("div",{className:"area_l",children:[e.jsxs("div",{className:"title",children:[e.jsx("strong",{children:(r=a==null?void 0:a.data)==null?void 0:r.title}),e.jsx("div",{className:"d_day_tag",children:"D-1"})]}),e.jsxs("div",{className:"desc",children:[`${ge((o=a==null?void 0:a.data)==null?void 0:o.event_start_date)} ~
            ${ge((f=a==null?void 0:a.data)==null?void 0:f.event_end_date)}`,"    |    ",(m=a==null?void 0:a.data)==null?void 0:m.position1]}),e.jsxs("div",{className:"score",children:[e.jsx("i",{className:"star"}),"4.4",e.jsx("span",{className:"col_blue",children:"(4,423)"})]})]}),e.jsxs("div",{className:"area_r",children:[e.jsxs("div",{className:"btns",children:[e.jsx("button",{className:"heart_btn"}),e.jsx("button",{className:"share_btn"})]}),e.jsx("button",{className:"btn blue",children:"사전 신청하기"})]})]})]}),e.jsxs("div",{className:"info_wrap",children:[e.jsxs("div",{className:"tab_btns",children:[e.jsx("a",{href:"#_info",className:"tab_btn",children:"기본정보"}),e.jsx("a",{href:"#_detail",className:"tab_btn",children:"상세정보"}),e.jsx("a",{href:"#_call",className:"tab_btn",children:"문의하기"})]}),e.jsxs("div",{className:"info_box",children:[e.jsxs("div",{id:"_info",children:[e.jsx("div",{className:"tit",children:"기본 정보"}),e.jsxs("ul",{className:"key_val_list",children:[e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"행사 기간"}),e.jsx("div",{className:"val",children:`${ge((g=a==null?void 0:a.data)==null?void 0:g.event_start_date)} ~
            ${ge((j=a==null?void 0:a.data)==null?void 0:j.event_end_date)}`})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"개최 장소"}),e.jsx("div",{className:"val",children:(d=a==null?void 0:a.data)==null?void 0:d.position1})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"세부 장소"}),e.jsx("div",{className:"val",children:(u=a==null?void 0:a.data)==null?void 0:u.position2})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"전시 분야"}),e.jsx("div",{className:"val",children:(C=a==null?void 0:a.data)==null?void 0:C.category.name})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"참가 비용"}),e.jsx("div",{className:"val",children:c((N=a==null?void 0:a.data)==null?void 0:N.payable_type,(k=a==null?void 0:a.data)==null?void 0:k.payable_price1,(V=a==null?void 0:a.data)==null?void 0:V.payable_price2)})]})]})]}),e.jsxs("div",{id:"_detail",children:[e.jsx("div",{className:"tit",children:"상세 정보"}),e.jsxs("div",{className:"detail_imgs",children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:(S=a==null?void 0:a.data)==null?void 0:S.content}}),e.jsx("button",{onClick:()=>l(w=>!w),className:"btn blue detail_more_btn",children:n?"접기":"더보기"})]})]}),e.jsxs("div",{id:"_call",children:[e.jsx("div",{className:"tit",children:"문의하기"}),e.jsxs("ul",{className:"key_val_list",children:[e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"담당자"}),e.jsx("div",{className:"val",children:(H=a==null?void 0:a.data)==null?void 0:H.contact_name})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"전화번호"}),e.jsx("div",{className:"val",children:(v=a==null?void 0:a.data)==null?void 0:v.contact_number})]}),e.jsxs("li",{children:[e.jsx("div",{className:"key",children:"이메일"}),e.jsx("div",{className:"val",children:(x=a==null?void 0:a.data)==null?void 0:x.contact_email})]})]})]})]})]})]}),e.jsxs("div",{className:"review_wrap",children:[e.jsxs("div",{className:"tab_btns",children:[e.jsx("button",{className:"tab_btn active",children:"리뷰"}),e.jsx("button",{className:"tab_btn",children:"참여 기업"})]}),e.jsxs("div",{className:"blue_comment_box",children:["전시회 참여 후 리뷰를 작성해주세요.",e.jsx("br",{}),"고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다!",e.jsx("button",{className:"blue_comment_box_delete"})]}),e.jsxs("div",{className:"comment_box",children:[e.jsxs("div",{className:"top_wrap",children:[e.jsxs("div",{className:"score_wrap",children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"txt",children:"4,423개 평점"}),e.jsx("div",{className:"score_num",children:"4.4"})]}),e.jsxs("select",{className:"select",children:[e.jsx("option",{value:"1",children:"베스트순"}),e.jsx("option",{value:"2",children:"최신순"})]})]}),e.jsxs("ul",{className:"comment_list",children:[e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn active",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"0%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"0%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"0%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]}),e.jsxs("li",{children:[e.jsxs("div",{className:"stars",children:[e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"100%"}})}),e.jsx("span",{children:e.jsx("i",{style:{width:"40%"}})})]}),e.jsx("div",{className:"username",children:"마이스미츄 · 2024년 08월 23일"}),e.jsxs("div",{className:"comment_txt",children:["극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.",e.jsx("br",{}),"아쿠아맨2도 쿠플에서 볼 수 있기를..."]}),e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"like_btn",children:"30"})})]})]}),e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"pagi_prev"}),e.jsx("button",{className:"num active",children:"1"}),e.jsx("button",{className:"num",children:"2"}),e.jsx("button",{className:"num",children:"3"}),e.jsx("button",{className:"num",children:"4"}),e.jsx("button",{className:"pagi_next"})]})]})]})]})})})},hd=[{id:1,gubun:"메인",name:"메인페이지",link:"/"},{id:2,gubun:"메인",name:"메인페이지 > 검색",link:"/event-list"}],md=[{id:3,gubun:"로그인&회원가입",name:"로그인",link:"/login"},{id:4,gubun:"로그인&회원가입",name:"로그인 > 비밀번호 찾기",link:"/login/password-find"},{id:5,gubun:"로그인&회원가입",name:"회원가입",link:"/join"},{id:6,gubun:"로그인&회원가입",name:"회원가입 > 이메일 회원가입",link:"/join/form"}],gd=[{id:7,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 신청 행사",link:"/mypage/apply-list"},{id:8,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 신청 행사 > 부스 선택",link:"/mypage/apply-list/booth-select/01"},{id:9,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 신청 행사 > AI 추천 부스 받기",link:"/mypage/apply-list/booth-check/01"},{id:10,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 취소 내역",link:"/mypage/cancel-list"},{id:11,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 관심 행사",link:"/mypage/wish-list"},{id:12,gubun:"마이페이지",name:"마이페이지 > 참여 행사관리 > 지난 행사",link:"/mypage/past-list"},{id:13,gubun:"마이페이지",name:"마이페이지 > 내 정보 수정",link:"/mypage/user-modify"},{id:14,gubun:"마이페이지",name:"마이페이지 > 내 정보 수정 > 탈퇴",link:"/mypage/user-modify/with-draw"},{id:15,gubun:"마이페이지",name:"마이페이지 > 내 정보 수정 > 탈퇴 > 완료",link:"/with-draw-finish"}],fd=[{id:16,gubun:"행사 상세페이지",name:"행사 상세페이지",link:"/detail/01"},{id:17,gubun:"행사 상세페이지",name:"행사 상세페이지 > 신청하기",link:"/detail/01/apply"},{id:18,gubun:"행사 상세페이지",name:"행사 상세페이지 > 신청하기 > 신청완료",link:"/detail/01/finish"}],ud=[{id:19,gubun:"리뷰",name:"리뷰 남기기",link:"/edit-review"}],bd=[{id:20,gubun:"이용약관",name:"성별 생년 정보 제공 동의",link:"/gender-birth-information"},{id:21,gubun:"이용약관",name:"개인정보 수집 이용 동의",link:"/personal-information"},{id:22,gubun:"이용약관",name:"개인정보처리방침",link:"/privacy-policy"},{id:23,gubun:"이용약관",name:"제 3자 제공 동의",link:"/onward-transfer"},{id:24,gubun:"이용약관",name:"마케팅 정보 수신 동의",link:"/markeyting-information"},{id:25,gubun:"이용약관",name:"서비스 이용약관",link:"/terms-service"}],Qe={main:hd,loginJoin:md,myPage:gd,eventDetail:fd,review:ud,agree:bd},_d=h.div`
  padding: 40px 20px;
  & h1 {
    font-size: 18px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-weight: 600;
    margin-bottom: 16px;
    color: #fff;
  }
  & a {
    color: #007bff;
    text-decoration: underline;
  }
  & table {
    width: 100%;
    border-collapse: collapse;
    border: 0;
    border-bottom: 1px solid #ddd;
    table-layout: fixed;
    font-size: 14px;
    & th,
    & td {
      border: 1px solid #ddd;
      text-align: center;
      padding: 8px;
      margin: 0;
    }
    & tr:last-child th,
    & tr:last-child td {
      border-bottom: 0;
    }
    & th {
      background: #eee;
    }
    & td {
      background: #fff;
      color: #666;
    }
    & td.text_left {
      text-align: left;
    }
    & td input {
      width: 100%;
    }
    & td input:read-only {
      background: #f2f2f2;
    }
    & .space {
      background: #f2f2f2 !important;
      height: 36px;
    }
    & .ing {
      color: #e50000;
    }
  }
`,jd=()=>e.jsxs(_d,{children:[e.jsx("h1",{children:"셀버스 퍼블리싱 화면"}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{style:{width:"80px"},children:"번호"}),e.jsx("th",{style:{width:"20%"},children:"화면구분"}),e.jsx("th",{children:"화면명"}),e.jsx("th",{style:{width:"20%"},children:"링크"})]})}),e.jsxs("tbody",{children:[Qe.main.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.gubun}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.link.length>0?e.jsx(b,{to:t.link,target:"_blank",children:"바로가기"}):"작업예정"})]},t.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),Qe.loginJoin.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.gubun}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.link.length>0?e.jsx(b,{to:t.link,target:"_blank",children:"바로가기"}):"작업예정"})]},t.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),Qe.myPage.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.gubun}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.link.length>0?e.jsx(b,{to:t.link,target:"_blank",children:"바로가기"}):"작업예정"})]},t.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),Qe.eventDetail.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.gubun}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.link.length>0?e.jsx(b,{to:t.link,target:"_blank",children:"바로가기"}):"작업예정"})]},t.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),Qe.review.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.gubun}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.link.length>0?e.jsx(b,{to:t.link,target:"_blank",children:"바로가기"}):"작업예정"})]},t.id)),e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"space"})}),Qe.agree.map(t=>e.jsxs("tr",{children:[e.jsx("td",{children:t.id}),e.jsx("td",{children:t.gubun}),e.jsx("td",{children:t.name}),e.jsx("td",{children:t.link.length>0?e.jsx(b,{to:t.link,target:"_blank",children:"바로가기"}):"작업예정"})]},t.id))]})]})]}),wd=ts([{path:"/",element:e.jsx(Rs,{}),children:[{path:"/",element:e.jsx(Oa,{})},{path:"/join",element:e.jsx(Wa,{})},{path:"/join/form",element:e.jsx(bn,{})},{path:"/login",element:e.jsx(Hn,{})},{path:"/login/password-find",element:e.jsx(An,{})},{path:"mypage",element:e.jsx(ia,{}),children:[{path:"apply-list",element:e.jsx(Qn,{})},{path:"apply-list/booth-select/:id",element:e.jsx(Pl,{})},{path:"apply-list/booth-check/:id",element:e.jsx(ql,{})},{path:"cancel-list",element:e.jsx(Jn,{})},{path:"wish-list",element:e.jsx(Dn,{})},{path:"past-list",element:e.jsx(er,{})},{path:"user-modify",element:e.jsx(rr,{})},{path:"user-modify/with-draw",element:e.jsx(Wl,{})}]},{path:"/event-list",element:e.jsx(Nr,{})},{path:"/detail/:id",element:e.jsx(ml,{})},{path:"/detail/:id/apply",element:e.jsx(wl,{})},{path:"/detail/:id/apply/edit",element:e.jsx(Cl,{})},{path:"/detail/finish",element:e.jsx(Hl,{})},{path:"/with-draw-finish",element:e.jsx(Ul,{})},{path:"/gender-birth-information",element:e.jsx(ao,{})},{path:"/personal-information",element:e.jsx(no,{})},{path:"/privacy-policy",element:e.jsx(ro,{})},{path:"/onward-transfer",element:e.jsx(lo,{})},{path:"/markeyting-information",element:e.jsx(oo,{})},{path:"/terms-service",element:e.jsx(co,{})},{path:"/*",element:e.jsx("div",{style:{color:"#fff"},children:"없는 페이지 입니다."})}]},{path:"/link",element:e.jsx(jd,{})},{path:"/edit-review",element:e.jsx(so,{})},{path:"/host-main",element:e.jsx(vo,{})},{path:"/host",element:e.jsx(Co,{}),children:[{path:"/host/corporate",element:e.jsx(Ao,{})},{path:"/host/corporate/finish",element:e.jsx(Mo,{})},{path:"/host/my",element:e.jsx(zo,{}),children:[{path:"/host/my/mypage",element:e.jsx(Bo,{})},{path:"/host/my/dashboard",element:e.jsx(Ro,{})},{path:"/host/my/apply-register/new",element:e.jsx(Yo,{})},{path:"/host/my/apply-register/edit/:id/state",element:e.jsx(Jo,{})},{path:"/host/my/apply-register/edit/:id/general",element:e.jsx(Do,{})},{path:"/host/my/apply-register/edit/:id/detail",element:e.jsx(Go,{})},{path:"/host/my/apply-register/edit/:id/application",element:e.jsx(ed,{})},{path:"/host/my/apply-register/edit/:id/survey",element:e.jsx(td,{})},{path:"/host/my/apply-register/edit/:id/faq",element:e.jsx(id,{})},{path:"/host/my/apply-register/edit/finish",element:e.jsx(cd,{})},{path:"/host/my/event/:id/party",element:e.jsx(od,{})},{path:"/host/my/event/:id/party-company",element:e.jsx(dd,{})}]}]},{path:"/host/:id/priview",element:e.jsx(xd,{})}]),vd=()=>e.jsx(is,{router:wd}),yd=ss`
  ${hs};
  /* Pretendard */
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-Black.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-Black.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-ExtraBold.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-ExtraBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-Bold.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-Bold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-SemiBold.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-SemiBold.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 500;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-Medium.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-Medium.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-Regular.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-Regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 300;
    font-display: swap;
    src:  url('/fonts/woff2/Pretendard-Light.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-Light.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 200;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-ExtraLight.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-ExtraLight.woff') format('woff');
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 100;
    font-display: swap;
    src: url('/fonts/woff2/Pretendard-Thin.woff2') format('woff2'), 
    url('/fonts/woff/Pretendard-Thin.woff') format('woff');
  }

  :root{
    --primary-color:rgba(35, 94, 243, 1)
    --secondary-color :rgba(61, 139, 253, 1)
    --accent-color:rgba(255, 102, 102, 1)

  }

  * {
    box-sizing: border-box;
  }

  html{
    background-color:#000;
    font-size:18px;
    font-family: 'Pretendard';
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  button{
    font-family: 'Pretendard';
    padding: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color:#000;
    font-size: 18px;
  }
  input,select ,textarea,textarea::placeholder, input::placeholder{
    border: none;
    font-family: 'Pretendard';
    outline: none;
    font-size: 18px;
    padding: 0;
  }

  table, th, tr, td{
    font-family: 'Pretendard';
  }
  .err_msg{
    color: #F56767;
    padding:2px 0;
    font-size: 16px;
    font-weight: 500;
  }
  .maxframe{
    max-width: 1920px;
    margin: 0 auto;
  }
  .mt_8 {
    margin-top: 8px !important;
  }
`;function Cd(){return e.jsxs(e.Fragment,{children:[e.jsx(yd,{}),e.jsx(vd,{})]})}const Nd=new Di;Ki(document.getElementById("root")).render(e.jsx(Xi,{children:e.jsxs(Gi,{client:Nd,children:[e.jsx(Cd,{}),e.jsx(es,{})]})}));
