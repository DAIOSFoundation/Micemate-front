import styled from "styled-components";

export const HostMainWrap = styled.div`
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
`;
