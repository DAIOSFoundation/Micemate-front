import{r as h,j as e}from"./react-GgNxsn6d.js";import{c as ut}from"./react-dom-QkaEqh-z.js";import{R as Ce,a as Ee,b as J,c as gt,d as ue,e as yt}from"./recoil-D-jwd32P.js";import{u as pe,a as K,b as Fe,Q as Nt,c as wt,R as vt}from"./@tanstack-BdwTvngC.js";import{L as w,c as kt,R as At}from"./react-router-dom-C9w1ezDZ.js";import{d as Se,f as Ct}from"./styled-components-PsS2HYcQ.js";import{d as xe,c as _e,O as St,f as he}from"./react-router-xw_WwrXM.js";import{a as Yt}from"./axios-CCb-kr4I.js";import{u as ve}from"./react-hook-form-rx1EpASO.js";import{t as Pe}from"./@hookform-BTSKDkxf.js";import{o as Te,s as Ae,b as Et,n as Ft}from"./zod-D7J-fcuR.js";import{C as Pt}from"./react-spinners--gswIwTH.js";import{d as v,a as Tt,l as Ot}from"./dayjs-CN69eQz1.js";import{R as zt}from"./react-quill-DpUnCd_1.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Va2Jh8gM.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./lodash-DSq4vvuY.js";import"./quill-DGDbI1on.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const r of d.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function l(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(o){if(o.ep)return;o.ep=!0;const d=l(o);fetch(o.href,d)}})();const ct=Se.div`
  font-family: "Pretendard", sans-serif;
  color: #fff;

  /* reset */
  html,
  body,
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
  button:disabled,
  a:disabled,
  input:disabled,
  select:disabled {
    cursor: default;
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
  select[readonly] {
    pointer-events: none;
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
  .gap23 {
    gap: 23px;
  }
  .gap32 {
    gap: 32px;
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
  .align_start {
    align-items: flex-start;
  }
  .align_end {
    align-items: flex-end;
  }

  .row_item_7 {
    flex-wrap: wrap;
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
  .fs_11 {
    font-size: 11px;
  }
  .fs_12 {
    font-size: 12px;
  }
  .fs_13 {
    font-size: 13px !important;
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
  .col_blue {
    color: #1a73e8;
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
  .mt_25 {
    margin-top: 25px;
  }
  .mt_26 {
    margin-top: 26px;
  }
  .mt_30 {
    margin-top: 30px;
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
  .mt_63 {
    margin-top: 63px !important;
  }
  .mt_64 {
    margin-top: 64px;
  }
  .mt_80 {
    margin-top: 80px;
  }
  .mt_190 {
    margin-top: 190px;
  }

  .ml_4 {
    margin-left: 4px;
  }
  .ml_22 {
    margin-left: 22px;
  }

  /* padding */
  .pt_22 {
    padding-top: 22px;
  }
  .pl_15 {
    padding-left: 15px;
  }
  .pr_0 {
    padding-right: 0 !important;
  }
  .pr_20 {
    padding-right: 20px;
  }
  .pr_30 {
    padding-right: 30px;
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
  .w_364 {
    width: 364px;
  }
  .w_372 {
    width: 372px;
  }
  .w_548 {
    width: 548px;
  }
  .w_767 {
    width: 767px;
  }

  .min_w_84 {
    min-width: 84px !important;
  }

  /* height */

  .min_h_300 {
    min-height: 300px;
  }

  .cursor_default {
    cursor: default !important;
  }

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

  .date_img_wrap {
    position: relative;
  }
  .date_img_wrap i {
    position: absolute;
    top: calc(50% - 10px);
    right: 15px;
    width: 20px;
    height: 20px;
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

  /* button */
  .btn {
    display: inline-flex;
    min-width: 135px;
    height: 48px;
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
    display: inline-block;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    background: url("/images/icon/date_inp_icon.png") no-repeat center/contain;
    margin-left: 4px;
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
    padding-left: 321px;
    display: flex;
    padding-bottom: 15px;
    align-items: center;
    padding-top: 40px;
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
    min-height: 138px;
    padding: 48px 0 26px 0;
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
    margin-top: 28px;
  }
  .lnb_area .lnb01 .depth01 {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff80;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 26px;
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
  }
  .lnb_area .lnb01 .depth02_list .depth02 ~ .depth02 {
    margin-top: 10px;
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
    margin-top: 24px;
  }
  .lnb_area .lnb02 .depth01 {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff80;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 29px;
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
  }
  .lnb_area .lnb02 .depth01.active .arrow_b_icon {
    transform: rotateZ(180deg);
  }
  .lnb_area .lnb02 .depth02_list.active {
    max-height: 500px;
    padding-top: 18px;
  }
  .lnb_area .lnb02 .depth02_list .depth02.active,
  .lnb_area .lnb02 .depth02_list .depth02:hover {
    color: #fff;
    background-color: #ffffff1a;
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

  table.type1.table_hover tbody tr:hover td {
    background-color: #ffffff1a;
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
  }

  table.type4 {
    width: 100%;
  }
  table.type4 tbody th,
  table.type4 tbody td {
    height: 44px;
  }

  table i.btn.small {
    cursor: default;
  }

  .ft_table td {
    display: flex;
    align-items: center;
    gap: 4px;
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
    min-width: 400px;
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
  }
  .modal_wrap .modal_inner .modal_body .modal_tit {
    font-size: 16px;
    color: #000;
    font-weight: 700;
    text-align: center;
    padding-bottom: 20px;
  }
  .modal_wrap .modal_inner .modal_btn {
    margin-top: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  .modal_wrap .modal_inner .modal_btn > * {
    width: 44px;
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }
  .modal_wrap.prompt01 textarea {
    border: 0.5px solid #969696;
    border-radius: 10px;
    background-color: #f7f7f7;
    padding: 10px 22px;
    font-size: 12px;
    color: #000;
  }
  .modal_wrap.prompt01 textarea::placeholder {
    color: #000;
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
    color: #09338c;
    font-size: 12px;
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
  }
  .login_pagi .login_inp {
    margin-top: 58px;
  }
  .login_pagi .login_inp input {
    border-radius: 48px;
  }
  .login_pagi .btn_wrap .btn {
    flex: 1;
    border-radius: 48px;
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
  .quill_editor {
    background-color: #fff;
    .ql-container {
      height: 530px;
      color: #000;
    }
  }
  .loading_wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;function Mt({children:s}){const i=xe();return h.useEffect(()=>{window.scrollTo(0,0)},[i.pathname]),e.jsx("div",{children:s})}const $t=Se.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  color: #000;

  .dim_layer {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal_inner {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 30px 24px;
    min-width: 400px;
  }
  .modal_inner .modal_close {
    width: 24px;
    height: 24px;
    background: url("../images/icon/modal_close_x.png") no-repeat center/contain;
    position: absolute;
    top: 11px;
    right: 17px;
  }
  .modal_inner .modal_body {
  }
  .modal_inner .modal_body .modal_tit {
    font-size: 16px;
    color: #000;
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
    white-space: pre-wrap;
  }
  .modal_inner .modal_btn {
    margin-top: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  .modal_inner .modal_btn > * {
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }

  &.prompt01 textarea {
    border: 0.5px solid #969696;
    border-radius: 10px;
    background-color: #f7f7f7;
    padding: 10px 22px;
    font-size: 12px;
    color: #000;
  }
  &.prompt01 textarea::placeholder {
    color: #000;
  }
`,ot=Ce({key:"alretState",default:{isOpen:!1,text:""}}),Q=Ce({key:"confirmState",default:{isOpen:!1,text:"",confirm:!1,okBtn:"취소하기"}}),dt=Ce({key:"toastState",default:{isOpen:!1,text:""}}),je=()=>{const[s,i]=Ee(ot),l=h.useCallback(()=>{i(o=>({...o,isOpen:!1})),s!=null&&s.callBack&&s.callBack()},[i,s]),t=h.useCallback(({text:o,callback:d})=>i({isOpen:!0,text:o,callBack:d}),[i]);return{alretData:s,closeAlret:l,openAlret:t}},qt=()=>{const{alretData:s,closeAlret:i}=je();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsxs($t,{children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{className:"modal_close",onClick:i}),e.jsx("div",{className:"modal_body",children:e.jsx("div",{className:"modal_tit",children:s.text})}),e.jsx("div",{className:"modal_btn",children:e.jsx("button",{className:"close_btn",onClick:i,children:"확인"})})]})]})})},Bt=Se.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  color: #000;

  .dim_layer {
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal_inner {
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    padding: 40px 30px 24px;
    min-width: 400px;
  }
  .modal_inner .modal_close {
    width: 24px;
    height: 24px;
    background: url("../images/icon/modal_close_x.png") no-repeat center/contain;
    position: absolute;
    top: 11px;
    right: 17px;
  }
  .modal_inner .modal_body {
  }
  .modal_inner .modal_body .modal_tit {
    font-size: 16px;
    color: #000;
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
    white-space: pre-wrap;
  }
  .modal_inner .modal_btn {
    margin-top: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  .modal_inner .modal_btn > * {
    font-size: 16px;
    color: #000;
    font-weight: 700;
  }

  &.prompt01 textarea {
    border: 0.5px solid #969696;
    border-radius: 10px;
    background-color: #f7f7f7;
    padding: 10px 22px;
    font-size: 12px;
    color: #000;
  }
  &.prompt01 textarea::placeholder {
    color: #000;
  }
`,ge=()=>{const[s,i]=Ee(Q),l=J(Q),t=h.useCallback(({confirm:d,callback:r})=>{i(_=>({..._,isOpen:!1,confirm:d,callback:r}))},[i]),o=h.useCallback(({text:d,okBtn:r,type:_})=>i({isOpen:!0,text:d,confirm:!1,okBtn:r,type:_??""}),[i]);return{confirmData:s,confirmValue:l,closeConfirm:t,openConfirm:o}},Rt=()=>{const{confirmData:s,closeConfirm:i}=ge();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsxs(Bt,{children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{className:"modal_close",onClick:()=>i({confirm:!1})}),e.jsx("div",{className:"modal_body",children:e.jsx("div",{className:"modal_tit",children:s.text})}),e.jsxs("div",{className:"modal_btn",children:[e.jsx("button",{className:"confirm_btn",onClick:()=>i({confirm:!0}),children:s.okBtn}),e.jsx("button",{className:"close_btn",onClick:()=>i({confirm:!1}),children:"취소"})]})]})]})})},Oe=()=>{const[s,i]=Ee(dt),l=h.useCallback(()=>{i({isOpen:!1,text:""})},[]),t=h.useCallback(o=>{i({isOpen:!0,text:o});const d=setTimeout(()=>{l()},3e3);return()=>clearTimeout(d)},[l]);return{toastData:s,openToast:t,closeToast:l}},It=Se.div`
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
`,Ut=()=>{const{toastData:s}=Oe();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsx(It,{children:s.text})})},we=Ce({key:"user",default:{isLogin:!1,isLoginError:!1,data:{user_id:null,name:null,token:null,is_company:null,is_admin:null}},effects:[({setSelf:s,onSet:i})=>{const l=localStorage.getItem("token"),t=localStorage.getItem("user_id"),o=localStorage.getItem("user_type");l&&t&&s({isLogin:!0,isLoginError:!1,data:{user_id:JSON.parse(t),name:null,token:l,is_company:JSON.parse(o)}}),i((d,r,_)=>{_?(localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type")):(localStorage.setItem("user_id",JSON.stringify(d.data.user_id??"")),localStorage.setItem("token",d.data.token??""),localStorage.setItem("user_type",JSON.stringify(d.data.is_company)??""))})}]}),P=Yt.create({baseURL:"https://api-test.micemate.io"}),Qt=()=>{const s=gt(we);return pe({mutationFn:async i=>(await P({method:"POST",url:"/api/auth",headers:{"Content-Type":"application/json"},data:{email:i.email,password:i.password,remember_me:i.remember}})).data,onSuccess:i=>{const l={isSuccess:i.success,isLogin:!0,isLoginError:!1,data:{user_id:i.data.user_id,name:i.data.name,token:i.data.token,is_company:i.data.is_company,is_admin:i.data.is_admin}};s({...l})}})},Lt=s=>K({queryKey:["token",s],queryFn:async()=>(await P({method:"GET",url:"/api/auth",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data,refetchInterval:108e5,enabled:!!s}),Vt=()=>{localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type"),location.reload()},Ht="/assets/main_logo_w-BBqllR6y.png",Jt=()=>{const s=localStorage.getItem("token"),i=J(we),l=ue(we),t=J(Q),o=J(ot),d=J(dt),{data:r,isError:_}=Lt(s);return h.useEffect(()=>{_&&r===void 0&&l()},[r,_,l]),console.log(t,o,d),e.jsx("div",{className:"header",children:e.jsxs("div",{className:"inner",children:[e.jsxs("h1",{className:"main_logo",children:[i.isLogin,e.jsx(w,{to:i.isLogin?"/member/general":"/login",children:e.jsx("img",{src:Ht,alt:"마이스 메이트"})})]}),i.isLogin&&e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"btn blue round",onClick:Vt,children:"로그아웃"})})]})})},Kt=()=>{const s=_e(),l=J(we).isLogin;return h.useEffect(()=>{!l&&location.pathname.indexOf("/login")<0&&s("/login")},[s]),e.jsxs(Mt,{children:[e.jsx(ct,{children:e.jsxs("div",{className:"wrap",children:[e.jsx(Jt,{}),e.jsx(St,{})]})}),e.jsx(Rt,{}),e.jsx(qt,{}),e.jsx(Ut,{})]})},Xt=Te({email:Ae().email({message:"올바른 이메일을 입력해주세요."}),password:Ae(),remember:Et()}),Wt=()=>{var g,p,b,c;const[s,i]=h.useState(!1),l=J(we),t=Qt(),o=_e(),{register:d,handleSubmit:r,setError:_,watch:n,formState:{errors:m}}=ve({resolver:Pe(Xt)}),x=n("email"),f=n("password");h.useEffect(()=>{x!=null&&x.trim()&&(f==null?void 0:f.trim())!==void 0?i(!0):i(!1)},[x,f]);const a=r(j=>{const N={email:j.email,password:j.password,remember:j.remember};t.mutate(N)});return h.useEffect(()=>{t.isSuccess&&(l.data.is_admin===!0?o("/member/general",{replace:!0}):(_("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}),localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type")))},[t.isSuccess,o,l.data.is_admin]),h.useEffect(()=>{var j,N,k;if(t.isError){const u=t.error;(k=(N=(j=u==null?void 0:u.response)==null?void 0:j.data)==null?void 0:N.data)!=null&&k.error?(u.response.data.data.error==="Unauthorised"&&_("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}),u.response.data.data.error==="Not authenticate your email"&&_("apiError",{type:"manual",message:"이메일 인증이 필요합니다."})):_("apiError",{type:"manual",message:"알 수 없는 오류가 발생했습니다."})}},[t.isError,t.error,_]),e.jsx(ct,{children:e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"login_pagi",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"login_tit",children:[e.jsx("b",{children:"LOGIN"}),e.jsx("span",{children:"로그인이 필요합니다."})]}),e.jsxs("form",{onSubmit:a,children:[e.jsxs("div",{className:"login_inp",children:[e.jsx("p",{className:"fs_16 fw_500",children:"아이디"}),e.jsx("input",{type:"text",id:"email",className:"w_full mt_12",placeholder:"아이디",autoComplete:"off",...d&&d("email")}),e.jsx("p",{className:"fs_16 fw_500 mt_25",children:"비밀번호"}),e.jsx("input",{type:"password",id:"password",className:"w_full mt_12",placeholder:"비밀번호",autoComplete:"off",...d&&d("password")}),m.email&&e.jsx("p",{className:"err_msg",children:(p=(g=m.email)==null?void 0:g.message)==null?void 0:p.toString()}),m.apiError&&e.jsx("p",{className:"err_msg",children:(c=(b=m.apiError)==null?void 0:b.message)==null?void 0:c.toString()})]}),e.jsxs("div",{className:"checkbox mt_26",children:[e.jsx("input",{id:"remember",type:"checkbox",...d&&d("remember")}),e.jsx("label",{htmlFor:"remember",children:"로그인유지"})]}),e.jsx("div",{className:"btn_wrap mt_15",children:e.jsx("button",{type:"submit",className:"btn white login_btn",disabled:!s,children:"로그인"})})]})]})})})})})},Zt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAATCAYAAAAgcwuHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgBvVjtcdswDKV6/V9tUHaCegSO4A2qTBBvIGUCewOpE6SdQN0g7QRSJ7A3QIgznEAwxC/78u5wsknwEXgUSdiVuSMAwPoH2qmqqr+mAJ6j9o+aeGbPM5sCUCw1fUWe06ojvGMyBRN523s7whL4vadAUnict1HhmVJ5UDxvrcIBxN2sJVAkgPd/hDS0EZ42gQOT+hHg2JBYMezvIoCS/GXFO2/PSjC7xOQlj1xNp3BYxW/0diCbRF8vB2cJoEw4wHnvcp+a2nliVuHhOCg86PMSilEkOIGyXUhQjuYWAfrUMbQSbwkGePoARw1LwR3r24rEbIDnwPxezA0CTFdKrvs65nsUSXFsIjyYaEfmWHufIiKb87iYM1cAGbhJgJj0K7W5nHkD3Hx7uAT/kfk3n0w++ErNJg3c7xs97Up/Lng8KUL+Y5/tZ/MxOEX6Z9lAq7n2Sv/2hc3O3CGWEgFiyZTAZrZ/MeVY3DK3CoDnR71aZr5jo4znpbJVxszenth3PDuaFT9Ln3F7/TdhfF/EArffAi7iqx52cH0LxHh2zPfA2gfW3kU4ZP2yKRWAFxVjxJef0r3oG1nfc4RnYr5b1r64ZiFcB7RXuRYKIO/THvRKcA9LWOHjRH+7Mtc+FKMQcgK9EpSle4PtFTlfSHF//jLr+On3+x8ixFOY/7CYvWEf7kHcr7hKXJQnP7ZTAsPX+TGD58HzDIIDz5hR+GEeeOXhgYn9jvUNnuPhMthCOhoxcZc4rjMBZPDsAhypvwbxzKj5wGIB2PhB8cUtMkJCdUY8DpavcjYPi2VSeJBjK8dU5o6A86uI6uJWmhOuR43j8m8QPmdz/nephCcpllccVWYfO4hrGQAAAABJRU5ErkJggg==",Gt=()=>{const s=localStorage.getItem("token"),i=xe();return K({queryKey:["userList",i.search],queryFn:async()=>(await P({method:"GET",url:`/api/users${i.search}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},Dt=()=>{const s=localStorage.getItem("token"),i=xe(),l=i.search?`${i.search}&company=company`:"?company=company";return K({queryKey:["coporateList",i.search],queryFn:async()=>(await P({method:"GET",url:`/api/users${l}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},pt=s=>{const i=localStorage.getItem("token");return K({queryKey:["userDetail",s],queryFn:async()=>(await P({method:"GET",url:`/api/users/${s}/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${i}`}})).data,enabled:!!s})},xt=()=>pe({mutationFn:async s=>{const i=localStorage.getItem("token");return(await P({method:"PUT",url:`/api/users/${s.id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${i}`},data:s.modifyData})).data}}),ht=()=>{const s=localStorage.getItem("token");return pe({mutationFn:async i=>(await P({method:"DELETE",url:"/api/users",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:i})).data})},mt=()=>pe({mutationFn:async s=>(await P({method:"PUT",url:"/api/users/password/reset",headers:{"Content-Type":"application/json"},data:{email:s}})).data}),es=s=>K({queryKey:["userInformation",s],queryFn:async()=>(await P({method:"GET",url:`/api/users/${s.user_id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s.token}`}})).data}),ts=()=>{const s=localStorage.getItem("token");return pe({mutationFn:async({id:i,accept:l})=>(await P({method:"PUT",url:`/api/users/${i}/company/accept`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:{accept:l}})).data})},ss=()=>pe({mutationFn:async({token:s,user_id:i,formData:l})=>(await P({method:"POST",url:`/api/users/${i}/company/logo`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${s}`},data:l})).data}),W=()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem 0"},children:e.jsx(Pt,{color:"#dddddd",loading:!0,size:50})}),as=()=>{const[s,i]=h.useState(!1),l=xe(),t=()=>{i(d=>!d)},o=d=>l.pathname.indexOf(d)>=0?"active":"";return h.useEffect(()=>{l.pathname.indexOf("/member")>=0&&i(!0)},[l.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["회원관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(w,{to:"/member/general",className:`depth02 ${o("/member/general")}`,children:"회원 리스트"}),e.jsx(w,{to:"/member/corporate",className:`depth02 ${o("/member/corporate")}`,children:"기업회원 리스트"})]})]})},is=()=>{const[s,i]=h.useState(!1),l=xe(),t=()=>{i(d=>!d)},o=d=>l.pathname.indexOf(d)>=0?"active":"";return h.useEffect(()=>{l.pathname.indexOf("/event")>=0&&i(!0)},[l.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["행사관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsx("div",{className:"depth02_list active",children:e.jsx(w,{to:"/event",className:`depth02 ${o("/event")}`,children:"행사 리스트"})})]})},ns=()=>{const s=localStorage.getItem("token"),i=xe(),l=i.search?`${i.search}&order=desc`:"?order=desc";return K({queryKey:["eventManage",i.search],queryFn:async()=>(await P({method:"GET",url:`/api/events/manage${l}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},params:{}})).data})},ls=()=>{const s=localStorage.getItem("token");return pe({mutationFn:async({ids:i})=>(await P({method:"DELETE",url:"/api/events/manage",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:{ids:i}})).data})},rs=(s,i)=>{const l=localStorage.getItem("token");return K({queryKey:["usersEventList",s,i],queryFn:async()=>(await P({method:"GET",url:`/api/users/${s}/events?type=${i}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${l}`}})).data,enabled:!!s})},_t=s=>{const i=localStorage.getItem("token");return K({queryKey:["ApplyRegisterState",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit`,headers:{"Content-Type":"application/json",authorization:`Bearer ${i}`}})).data,enabled:!!s})},Ye=s=>{const i=localStorage.getItem("token");return K({queryKey:["ApplyRegisterGeneral",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit/general`,headers:{"Content-Type":"application/json",authorization:`Bearer ${i}`}})).data,enabled:!!s})},cs=s=>{const i=localStorage.getItem("token");return K({queryKey:["ApplyRegisterDetail",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${i}`}})).data,enabled:!!s})},os=s=>{const i=localStorage.getItem("token");return K({queryKey:["ApplyRegisterInfo",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit/application`,headers:{"Content-Type":"application/json",authorization:`Bearer ${i}`}})).data,enabled:!!s})},ds=()=>{const s=localStorage.getItem("token");return pe({mutationFn:async({id:i,data:l})=>(await P({method:"POST",url:`/api/events/${i}/edit/accept`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:l})).data})},ps=()=>{var _;const{id:s}=he(),[i,l]=h.useState(!0),t=xe(),{data:o}=Ye(s?Number(s):void 0),d=()=>{l(n=>!n)},r=n=>t.pathname.indexOf(n)>=0?"active":"";return e.jsxs("div",{children:[e.jsx("div",{className:"title_tag",children:(_=o==null?void 0:o.data)==null?void 0:_.title}),e.jsx("ul",{className:"lnb02",children:e.jsxs("li",{children:[e.jsxs("p",{onClick:d,className:`depth01 ${i?"active":""}`,style:{cursor:"pointer"},children:["행사 상세설정",e.jsx("i",{className:"arrow_b_icon"})]}),i&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(w,{to:`/event/apply/${s}/general`,className:`depth02 ${r(`/event/apply/${s}/general`)}`,children:"기본정보"}),e.jsx(w,{to:`/event/apply/${s}/detail`,className:`depth02 ${r(`/event/apply/${s}/detail`)}`,children:"상세페이지"}),e.jsx(w,{to:`/event/apply/${s}/information`,className:`depth02 ${r(`/event/apply/${s}/information`)}`,children:"모집정보"})]})]})})]})},I=()=>{var b,c;const[s,i]=h.useState(),[l,t]=h.useState(null),[o,d]=h.useState(""),r=xe(),_=localStorage.getItem("token"),n=localStorage.getItem("user_id"),m=ss(),x={token:_,user_id:n},{data:f,isLoading:a,isError:g}=es(x);h.useEffect(()=>{r.pathname.indexOf("/event/apply")>=0?d("type02"):d("type01")},[r.pathname]),h.useEffect(()=>{var j,N;t(`https://api.micemate.io/storage/${(N=(j=f==null?void 0:f.data)==null?void 0:j.company)==null?void 0:N.logo}`)},[f==null?void 0:f.data]),h.useEffect(()=>{if(s){const j=new FormData;j.append("logo",s),m.mutate({token:x==null?void 0:x.token,user_id:x==null?void 0:x.user_id,formData:j},{onSuccess:()=>{console.log("성공")},onError:N=>{console.log(N)}})}},[s]);const p=j=>{var k;const N=(k=j.target.files)==null?void 0:k[0];if(N){if(N.size>1048576||!["image/jpeg","image/png"].includes(N.type))return;const Y=URL.createObjectURL(N);i(N),t(Y)}};return e.jsxs("div",{className:"lnb_area",children:[o==="type01"&&e.jsxs("ul",{className:"lnb01",children:[e.jsx(as,{}),e.jsx(is,{})]}),o==="type02"&&e.jsxs("div",{className:"lnb02_wrap",children:[a||g?e.jsxs(e.Fragment,{children:[a&&e.jsx(W,{}),g&&e.jsx("div",{children:"정보를 불러오지 못했습니다."})]}):e.jsxs("div",{className:"user_area",children:[e.jsx("input",{id:"profile",type:"file",className:"hide",onChange:j=>{p(j)}}),e.jsx("label",{htmlFor:"profile",children:e.jsx("div",{className:"img",children:e.jsx("img",{src:l||Zt})})}),e.jsxs("div",{className:"user_name",children:[e.jsx("div",{className:"name",children:(c=(b=f==null?void 0:f.data)==null?void 0:b.company)==null?void 0:c.company_name}),e.jsx("div",{className:"admini",children:"마스터"})]})]}),e.jsx(ps,{})]})]})},xs=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],jt=({setFilterData:s,resetFilter:i,resetDate:l=null,userType:t=[]})=>{const[o,d]=h.useState(null),r=v().format("YYYY-MM-DD"),{register:_,handleSubmit:n,setValue:m,reset:x,watch:f}=ve(),a=c=>{let j="",N=v().format("YYYY-MM-DD");switch(c){case"today":j=v().format("YYYY-MM-DD");break;case"yesterday":j=v().subtract(1,"day").format("YYYY-MM-DD"),N=j;break;case"7days":j=v().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":j=v().subtract(1,"month").format("YYYY-MM-DD");break;case"all":j="",N="";break}m("start",j),m("end",N),d(c)},g=()=>{d(null)},p=c=>{s(c)},b=()=>{x(),i(),a(l),setTimeout(()=>{p(f())},10)};return h.useEffect(()=>{a(l),p(f())},[l]),e.jsxs("form",{onSubmit:n(p),children:[e.jsx("div",{className:"table_wrap ft_table",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[xs.map(c=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:c.type,onChange:()=>a(c.type),checked:o===c.type,className:"hide"}),e.jsx("label",{htmlFor:c.type,className:"btn border_w",children:c.value})]},c.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",..._("start"),id:"start",onClick:g,onChange:c=>m("start",c.target.value),defaultValue:r,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",..._("end"),id:"end",onClick:g,onChange:c=>m("end",c.target.value),defaultValue:r,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{..._("type"),className:"btn border_w",children:t.map(c=>e.jsx("option",{value:c.type,children:c.value},c.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",..._("search"),className:"small search w_548"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{type:"submit",className:"btn small light_blue",children:"검색"}),e.jsx("button",{type:"button",className:"btn small gray",onClick:b,children:"초기화"})]})]})},hs=[{type:0,text:"인증 대기",class:"col_gray"},{type:1,text:"일반 회원",class:""},{type:2,text:"탈퇴 회원",class:"col_gray"}],ms=({userList:s,checkedList:i,setCheckedList:l})=>{const[t,o]=h.useState(!1),d=n=>{l(m=>m.includes(n)?m.filter(x=>x!==n):[...m,n])},r=()=>{if(t)l([]);else{const n=s.map(m=>m.id);l(n)}o(!t)},_=n=>{const m=hs.find(x=>x.type===n);return m||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:r,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"아이디"}),e.jsx("th",{children:"휴대전화"}),e.jsx("th",{children:"생일"}),e.jsx("th",{children:"수신동의"}),e.jsx("th",{}),e.jsx("th",{children:"회원유형"})]})}),e.jsx("tbody",{children:s&&s.map(n=>{const{text:m,class:x}=_(n.state);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:n.id,checked:i.includes(n.id),onChange:()=>d(n.id),type:"checkbox"}),e.jsx("label",{htmlFor:n.id})]})}),e.jsx("td",{children:(n==null?void 0:n.created_at)??"-"}),e.jsx("td",{children:(n==null?void 0:n.name)??"-"}),e.jsx("td",{children:e.jsx(w,{to:`/member/general/detail/${n.id}`,children:(n==null?void 0:n.email)??"-"})}),e.jsx("td",{children:(n==null?void 0:n.contact)??"-"}),e.jsx("td",{children:(n==null?void 0:n.birth)??"-"}),e.jsx("td",{children:(n==null?void 0:n.agree)===!0?"동의":(n==null?void 0:n.agree)===!1?"동의안함":"-"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("span",{className:x,children:m})})]},n.id)})})]})})},ze=({total:s,page:i,setPage:l,size:t=20})=>{const o=Math.ceil(s/t),r=(Math.ceil(i/t)-1)*t+1,_=Math.min(r+t-1,o),n=f=>{l(f)},m=()=>{r>1&&n(r-1)},x=()=>{_<o&&n(_+1)};return e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("button",{onClick:m,disabled:r===1,className:"pagi_prev"}),Array.from({length:_-r+1},(f,a)=>e.jsx("button",{onClick:()=>n(r+a),className:i===r+a?"num active":"num",children:r+a},a)),e.jsx("button",{type:"button",onClick:x,disabled:_===o,className:"pagi_next"})]})},_s=()=>{var u,S,Y,T,E,R,q,z;const s=_e(),i=Fe(),{openConfirm:l}=ge(),{openAlret:t}=je(),o=J(Q),d=ue(Q),[r,_]=h.useState({}),[n,m]=h.useState(),[x,f]=h.useState([]),[a,g]=h.useState(1),{data:p}=Gt(),b=ht(),c=()=>{_({}),g(1),s("?")},j=()=>{_({...r,order:r.order==="asc"?"desc":"asc"})},N=()=>{if(x.length<=0)return t({text:"목록을 선택해주세요."});l({text:`선택 [${x.length}건]을 [탈퇴]
처리 하시겠습니까?`,okBtn:"탈퇴"}),d()},k=()=>{if(x.length<=0)return t({text:"목록을 선택해주세요."});l({text:`선택 [${x.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"삭제"}),d()};return h.useEffect(()=>{o.confirm===!0&&x.length>0&&b.mutate({delete:o.okBtn==="삭제",ids:x},{onSuccess:()=>{t({text:`${o.okBtn}가 완료되었습니다.`}),f([]),i.invalidateQueries({queryKey:["userList"]})}})},[o.confirm]),h.useEffect(()=>{const F={page:a??1,type:r.type&&r.type!=="none"?r.type:void 0,start:r.start??void 0,end:r.end??void 0,search:r.search??void 0,order:r.order??"desc"},L=Object.fromEntries(Object.entries(F).filter(([U,C])=>typeof C=="string"||Array.isArray(C)?C!==""&&C.length>0:C!=null).map(([U,C])=>[U,String(C)])),V=new URLSearchParams(L).toString();m(V)},[r,a]),h.useEffect(()=>{n&&(s(`?${n}`),i.invalidateQueries({queryKey:["userList"]}))},[n]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(w,{className:"item",to:"/member/general",children:"회원 리스트"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(jt,{setFilterData:_,resetFilter:c,resetDate:"7days",userType:[{value:"회원유형",type:"none"},{value:"일반회원",type:1},{value:"탈퇴회원",type:2}]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체 "}),e.jsx("span",{className:"col_gray",children:"검색결과 "}),e.jsxs("span",{className:"fs_16",children:["[총 회원수"," ",(u=p==null?void 0:p.data)!=null&&u.total?(Y=Number((S=p==null?void 0:p.data)==null?void 0:S.total))==null?void 0:Y.toLocaleString():0,"명]"]})]}),e.jsx("button",{type:"button",className:"sort_btn",onClick:j,children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:N,children:"탈퇴"}),e.jsx("button",{type:"button",className:"ml_22",onClick:k,children:"삭제"})]})]}),((E=(T=p==null?void 0:p.data)==null?void 0:T.items)==null?void 0:E.length)>0?e.jsx(ms,{userList:(R=p==null?void 0:p.data)==null?void 0:R.items,checkedList:x,setCheckedList:f}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 회원이 없습니다"}),((q=p==null?void 0:p.data)==null?void 0:q.total)>20&&e.jsx(ze,{total:(z=p==null?void 0:p.data)==null?void 0:z.total,page:a,setPage:g})]})})]})},js=()=>K({queryKey:["category"],queryFn:async()=>(await P.get("/api/categories")).data.data}),ft=(s,i,l)=>{let t=s.target.value.replace(/\D/g,"");t.length>7?t=t.slice(0,3)+"-"+t.slice(3,7)+"-"+t.slice(7,11):t.length>3&&(t=t.slice(0,3)+"-"+t.slice(3,7)),i(l,t)};v.extend(Tt);v.extend(Ot);v.locale("ko");const Ne=s=>v(s).format("MM월DD일(ddd) HH:mm"),fs=Te({contact:Ae().nullable().optional(),interests:Ft().array()}),ke=[{type:"1",text:"신청 행사"},{type:"2",text:"취소 내역"},{type:"3",text:"관심 행사"},{type:"4",text:"지난 행사"}],bs=()=>{var q,z,F,L,V,U,C,Z,G,D,ee,te,se,ae,ie,ne,le,re,ce,oe,de,A,B;const{id:s}=he(),{register:i,handleSubmit:l,setValue:t,formState:{errors:o}}=ve({resolver:Pe(fs)}),[d,r]=h.useState(!1),[_,n]=h.useState((q=ke==null?void 0:ke[0])==null?void 0:q.type),[m,x]=h.useState([]),[f,a]=h.useState(!1),{openToast:g}=Oe(),{openAlret:p}=je(),{data:b}=js(),{data:c,isLoading:j,isError:N}=pt(s?Number(s):void 0),{data:k}=rs(s?Number(s):void 0,_),u=mt(),S=xt(),Y=()=>{var M,$;const y=($=(M=c==null?void 0:c.data)==null?void 0:M.terms_of_uses)==null?void 0:$.find(fe=>fe.id===2);return y||null},T=(y,M)=>{const $=M?[...m,y]:m.filter(fe=>fe!==y);x($),t("interests",$)},E=()=>{var y;(y=c==null?void 0:c.data)!=null&&y.email&&(a(!0),u.mutate(c.data.email,{onSuccess:()=>{a(!1),p({text:"메일로 임시 비밀번호를 발송했습니다."})},onError:M=>{console.log(M)}}))},R=l(y=>{if(!s||!y.contact&&!d)return;const M={id:s?Number(s):void 0,modifyData:{interests:y.interests}};y.contact&&(M.modifyData.contact=y.contact),S.mutate(M,{onSuccess:()=>{g("수정되었습니다.")},onError:$=>{console.log($)}})});return h.useEffect(()=>{var y;c!==void 0&&!j&&(t("contact",((y=c==null?void 0:c.data)==null?void 0:y.contact)??""),t("interests",c.data.interests),x(c.data.interests))},[c,j,t]),j?e.jsx(W,{}):N?(alert("데이터가 없습니다."),window.history.back(),null):e.jsxs(e.Fragment,{children:[f&&e.jsx("div",{className:"loading_wrap",children:e.jsx(W,{})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(w,{className:"item",to:"/member/general",children:"회원 리스트"}),e.jsx("p",{className:"item",children:"회원 상세정보"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"tit",children:"기본정보"})}),e.jsxs("form",{onSubmit:R,children:[e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{children:((z=c==null?void 0:c.data)==null?void 0:z.name)??"-"}),e.jsx("th",{children:"출생년도"}),e.jsx("td",{children:((F=c==null?void 0:c.data)==null?void 0:F.birth)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{children:((L=c==null?void 0:c.data)==null?void 0:L.email)??"-"}),e.jsx("th",{children:"성별"}),e.jsx("td",{children:((V=c==null?void 0:c.data)==null?void 0:V.sex)===!0?"여":((U=c==null?void 0:c.data)==null?void 0:U.sex)===!1?"남":"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"비밀번호"}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"btn border_w w_136",onClick:E,children:"임시 비밀번호 생성"})}),e.jsx("th",{children:"비밀번호 변경일"}),e.jsx("td",{children:e.jsx("span",{className:"col_gray",children:(C=c==null?void 0:c.data)!=null&&C.password_updated_at?v((Z=c==null?void 0:c.data)==null?void 0:Z.password_updated_at).format("YYYY-MM-DD hh:mm:ss"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원구분"}),e.jsx("td",{children:e.jsx("select",{className:"btn border_w w_136",disabled:!0,children:e.jsx("option",{value:"",children:"일반회원"})})}),e.jsx("th",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"휴대폰번호"}),e.jsxs("td",{children:[e.jsx("input",{id:"contact",className:"small w_136",type:"text",...i&&i("contact"),onChange:y=>{ft(y,t,"contact")}}),((G=o.contact)==null?void 0:G.message)&&e.jsx("p",{className:"err_msg",children:(ee=(D=o.contact)==null?void 0:D.message)==null?void 0:ee.toString()})]}),e.jsx("th",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원가입일"}),e.jsx("td",{children:e.jsx("span",{className:"col_gray",children:(te=c==null?void 0:c.data)!=null&&te.created_at?v((se=c==null?void 0:c.data)==null?void 0:se.created_at).format("YYYY-MM-DD hh:mm:ss"):"-"})}),e.jsx("th",{}),e.jsx("td",{})]})]})]})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"수신동의 및 개인정보 이용 동의"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["마케팅 정보 수신",e.jsx("br",{}),"동의 (선택)"]}),e.jsx("td",{className:"ver_top",children:((ae=Y())==null?void 0:ae.agree)===!1?"동의 이력 없음":((ie=Y())==null?void 0:ie.agree)===!0?`동의함 (동의일: ${(ne=Y())!=null&&ne.updated_at?v((le=Y())==null?void 0:le.updated_at).format("YYYY-MM-DD"):"-"})`:"-"})]})})]})}),d&&e.jsxs("div",{id:"moreInfo",children:[e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"추가정보"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ver_top",children:"관심분야"}),e.jsxs("td",{children:[b&&e.jsx("div",{className:"dis_flex row_item_7",children:b.map(y=>e.jsxs("div",{className:"checkbox item",children:[e.jsx("input",{type:"checkbox",id:`checkbox-${y.id}`,checked:m.includes(y.id),onChange:M=>{T(y.id,M.target.checked)}}),e.jsx("label",{htmlFor:`checkbox-${y.id}`,children:y.name})]},y.id))}),o.interests&&e.jsx("p",{className:"err_msg",children:(ce=(re=o.interests)==null?void 0:re.message)==null?void 0:ce.toString()})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ver_top",children:"행사 관리"}),e.jsxs("td",{children:[e.jsx("div",{children:e.jsx("select",{className:"btn border_w w_136",value:_,onChange:y=>n(y.target.value),children:ke.map(y=>e.jsx("option",{value:y.type,children:y.text},y.type))})}),((de=(oe=k==null?void 0:k.data)==null?void 0:oe.items)==null?void 0:de.length)>0?e.jsx("div",{className:"table_wrap min_h_300",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"130px"}),e.jsx("col",{width:"240px"}),e.jsx("col",{width:""}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:""})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"행사번호"}),e.jsx("th",{children:"행사명"}),e.jsx("th",{}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 신청일"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:(B=(A=k==null?void 0:k.data)==null?void 0:A.items)==null?void 0:B.map(y=>e.jsxs("tr",{children:[e.jsx("td",{children:y.id??"-"}),e.jsx("td",{children:y.title??"-"}),e.jsx("td",{}),e.jsxs("td",{children:[y.event_start_date&&Ne(y.event_start_date)," ~ ",y.event_end_date&&Ne(y.event_end_date)]}),e.jsx("td",{children:y.date?Ne(y.date):"-"}),e.jsx("td",{})]},y.id))})]})}):e.jsx("div",{className:"table_wrap min_h_300 pt_22",children:"행사 데이터가 없습니다."})]})]})]})]})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap",children:!d&&e.jsx("button",{type:"button",className:"btn gray",onClick:()=>r(!0),children:"더보기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(w,{to:"/member/general",className:"btn blue",children:"취소"}),e.jsx("button",{type:"submit",className:"btn blue",children:"수정"})]})]})]})]})})]})]})},us=[{type:0,text:"승인 대기",class:"btn small light_blue cursor_default"},{type:1,text:"미승인 기업",class:"col_gray"},{type:2,text:"승인 기업",class:""},{type:3,text:"탈퇴 기업",class:"col_gray"}],gs=({userList:s,checkedList:i,setCheckedList:l})=>{const[t,o]=h.useState(!1),d=n=>{l(m=>m.includes(n)?m.filter(x=>x!==n):[...m,n])},r=()=>{if(t)l([]);else{const n=s.map(m=>m.id);l(n)}o(!t)},_=(n,m)=>{const x=us.find(f=>n!==2?f.type===m:f.type===3);return x||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"130px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:r,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"아이디"}),e.jsx("th",{children:"회사명"}),e.jsx("th",{children:"요청 날짜"}),e.jsx("th",{children:"회원 상태"})]})}),e.jsx("tbody",{children:s&&s.map(n=>{const{text:m,class:x}=_(n.state,n.accept);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:n.id,checked:i.includes(n.id),onChange:()=>d(n.id),type:"checkbox"}),e.jsx("label",{htmlFor:n.id})]})}),e.jsx("td",{children:(n==null?void 0:n.created_at)??"-"}),e.jsx("td",{children:(n==null?void 0:n.name)??"-"}),e.jsx("td",{children:e.jsx(w,{to:`/member/corporate/detail/${n.id}`,children:(n==null?void 0:n.email)??"-"})}),e.jsx("td",{children:(n==null?void 0:n.company_name)??"-"}),e.jsx("td",{children:(n==null?void 0:n.requested_at)??"-"}),e.jsx("td",{children:e.jsx("span",{className:x,children:m})})]},n.id)})})]})})},ys=()=>{var u,S,Y,T,E,R,q,z;const s=_e(),i=Fe(),{openConfirm:l}=ge(),{openAlret:t}=je(),o=J(Q),d=ue(Q),[r,_]=h.useState({}),[n,m]=h.useState(),[x,f]=h.useState([]),[a,g]=h.useState(1),{data:p}=Dt(),b=ht(),c=()=>{_({}),g(1),s("?")},j=()=>{_({...r,order:r.order==="asc"?"desc":"asc"})},N=()=>{if(x.length<=0)return t({text:"목록을 선택해주세요."});l({text:`선택 [${x.length}건]을 [탈퇴]
처리 하시겠습니까?`,okBtn:"확인",type:"탈퇴"})},k=()=>{if(x.length<=0)return t({text:"목록을 선택해주세요."});l({text:`선택 [${x.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"확인",type:"삭제"})};return h.useEffect(()=>{o.confirm===!0&&x.length>0&&b.mutate({delete:o.type==="삭제",ids:x},{onSuccess:()=>{t({text:`${o.type}가 완료되었습니다.`}),f([]),d(),i.invalidateQueries({queryKey:["coporateList"]})}})},[o.confirm]),h.useEffect(()=>{const F={page:a??1,type:r.type&&r.type!=="none"?r.type:void 0,start:r.start??void 0,end:r.end??void 0,search:r.search??void 0,order:r.order??"desc"},L=Object.fromEntries(Object.entries(F).filter(([U,C])=>typeof C=="string"||Array.isArray(C)?C!==""&&C.length>0:C!=null).map(([U,C])=>[U,String(C)])),V=new URLSearchParams(L).toString();m(V)},[r,a]),h.useEffect(()=>{n&&(s(`?${n}`),i.invalidateQueries({queryKey:["userList"]}))},[n]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(w,{className:"item",to:"/member/general",children:"기업회원 리스트"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(jt,{setFilterData:_,resetFilter:c,resetDate:"7days",userType:[{value:"회원유형",type:"none"},{value:"승인대기",type:1},{value:"승인기업",type:2},{value:"탈퇴기업",type:3}]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsxs("span",{className:"fs_16",children:["[총 회원수",(u=p==null?void 0:p.data)!=null&&u.total?(Y=Number((S=p==null?void 0:p.data)==null?void 0:S.total))==null?void 0:Y.toLocaleString():0,"명]"]})]}),e.jsx("button",{type:"button",className:"sort_btn",onClick:j,children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:N,children:"탈퇴"}),e.jsx("button",{type:"button",className:"ml_22",onClick:k,children:"삭제"})]})]}),((E=(T=p==null?void 0:p.data)==null?void 0:T.items)==null?void 0:E.length)>0?e.jsx(gs,{userList:(R=p==null?void 0:p.data)==null?void 0:R.items,checkedList:x,setCheckedList:f}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 회원이 없습니다"}),((q=p==null?void 0:p.data)==null?void 0:q.total)>20&&e.jsx(ze,{total:(z=p==null?void 0:p.data)==null?void 0:z.total,page:a,setPage:g})]})})]})},Ns=Te({contact:Ae().nullable().optional()}),ws=()=>{var T,E,R,q,z,F,L,V,U,C,Z,G,D,ee,te,se,ae,ie,ne,le,re,ce,oe,de,A,B,y,M,$,fe,Me,$e,qe,Be,Re,Ie,Ue,Qe,Le,Ve,He,Je,Ke,Xe,We,Ze,Ge,De,et,tt;const{id:s}=he(),{register:i,handleSubmit:l,setValue:t,formState:{errors:o}}=ve({resolver:Pe(Ns)}),[d,r]=h.useState(!1),_=ue(Q),{openToast:n}=Oe(),{openAlret:m}=je(),{openConfirm:x}=ge(),f=J(Q),{data:a,isLoading:g,isError:p}=pt(s?Number(s):void 0),b=mt(),c=xt(),j=ts(),N=()=>{var H,X;const O=(X=(H=a==null?void 0:a.data)==null?void 0:H.terms_of_uses)==null?void 0:X.find(me=>me.id===2);return O||null},k=()=>{var O;(O=a==null?void 0:a.data)!=null&&O.email&&(r(!0),b.mutate(a.data.email,{onSuccess:()=>{r(!1),m({text:"메일로 임시 비밀번호를 발송했습니다."})},onError:H=>{console.log(H)}}))},u=O=>{var X;const H=O?"승인":"미승인";x({text:`[${((X=a==null?void 0:a.data)==null?void 0:X.name)??"-"}]회원 기업회원으로 전환을 ${H}
처리 하시겠습니까?`,okBtn:"확인",type:H})};h.useEffect(()=>{f.confirm===!0&&j.mutate({id:s?Number(s):void 0,accept:f.type==="승인"},{onSuccess:()=>{m({text:`${f.type} 처리되었습니다.`,callback:()=>{location.reload()}}),_()},onError:O=>{console.log(O)}})},[f.confirm]);const S=l(O=>{if(!s||!O.contact)return;const H={id:s?Number(s):void 0,modifyData:{...O}};c.mutate(H,{onSuccess:()=>{n("수정되었습니다.")},onError:X=>{console.log(X)}})}),Y=()=>{var H,X;const O=`https://api.micemate.io/storage/${(X=(H=a==null?void 0:a.data)==null?void 0:H.company)==null?void 0:X.company_id_file}`;fetch(O).then(me=>me.blob()).then(me=>{var at,it;const st=window.URL.createObjectURL(new Blob([me])),ye=document.createElement("a");ye.href=st,ye.download=((it=(at=a==null?void 0:a.data)==null?void 0:at.company)==null?void 0:it.company_id_file.split("/").pop())||"download",document.body.appendChild(ye),ye.click(),window.URL.revokeObjectURL(st),document.body.removeChild(ye)}).catch(me=>{console.error("파일 다운로드 오류:",me)})};return h.useEffect(()=>{var O;a!==void 0&&!g&&t("contact",((O=a==null?void 0:a.data)==null?void 0:O.contact)??"")},[a,g,t]),g?e.jsx(W,{}):p?(alert("데이터가 없습니다."),window.history.back(),null):e.jsxs(e.Fragment,{children:[d&&e.jsx("div",{className:"loading_wrap",children:e.jsx(W,{})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(w,{className:"item",to:"/member/corporate",children:"기업회원 리스트"}),e.jsx("p",{className:"item",children:"기업회원 상세정보"}),((E=(T=a==null?void 0:a.data)==null?void 0:T.company)==null?void 0:E.accept)===0&&e.jsx("i",{className:"btn light_blue small",children:"승인대기"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"tit",children:"기본정보"})}),e.jsxs("form",{onSubmit:S,children:[e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"182px"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"160px"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{colSpan:3,children:((R=a==null?void 0:a.data)==null?void 0:R.name)??"-"}),e.jsx("th",{children:"출생년도"}),e.jsx("td",{colSpan:3,children:((q=a==null?void 0:a.data)==null?void 0:q.birth)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{colSpan:3,children:((z=a==null?void 0:a.data)==null?void 0:z.email)??"-"}),e.jsx("th",{children:"성별"}),e.jsx("td",{colSpan:3,children:((F=a==null?void 0:a.data)==null?void 0:F.sex)===!0?"여":((L=a==null?void 0:a.data)==null?void 0:L.sex)===!1?"남":"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"비밀번호"}),e.jsx("td",{colSpan:3,children:e.jsx("button",{className:"btn border_w w_136",onClick:k,disabled:((U=(V=a==null?void 0:a.data)==null?void 0:V.company)==null?void 0:U.accept)!==2,children:"임시 비밀번호 생성"})}),e.jsx("th",{children:"비밀번호 변경일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:(C=a==null?void 0:a.data)!=null&&C.password_updated_at?v((Z=a==null?void 0:a.data)==null?void 0:Z.password_updated_at).format("YYYY-MM-DD hh:mm:ss"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원구분"}),e.jsx("td",{colSpan:3,children:e.jsx("select",{className:"btn border_w w_136",disabled:!0,children:e.jsx("option",{value:"",children:"기업회원"})})}),e.jsx("th",{children:"회사명"}),e.jsx("td",{className:"pr_0",children:((D=(G=a==null?void 0:a.data)==null?void 0:G.company)==null?void 0:D.company_name)??"-"}),e.jsx("th",{children:"기업 전환일"}),e.jsx("td",{className:"pr_0",children:e.jsx("span",{className:"col_gray",children:(te=(ee=a==null?void 0:a.data)==null?void 0:ee.company)!=null&&te.accepted_at?v((ae=(se=a==null?void 0:a.data)==null?void 0:se.company)==null?void 0:ae.accepted_at).format("YYYY-MM-DD"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"휴대번호"}),e.jsxs("td",{colSpan:3,children:[e.jsx("input",{id:"contact",className:"small w_136",type:"text",...i&&i("contact"),onChange:O=>{ft(O,t,"contact")},disabled:((ne=(ie=a==null?void 0:a.data)==null?void 0:ie.company)==null?void 0:ne.accept)!==2}),((le=o.contact)==null?void 0:le.message)&&e.jsx("p",{className:"err_msg",children:(ce=(re=o.contact)==null?void 0:re.message)==null?void 0:ce.toString()})]}),e.jsx("th",{children:"담당자"}),e.jsx("td",{className:"pr_0",children:((de=(oe=a==null?void 0:a.data)==null?void 0:oe.company)==null?void 0:de.name)??"-"}),e.jsx("th",{children:"소속 부서/ 직책"}),e.jsxs("td",{className:"pr_0",children:[((B=(A=a==null?void 0:a.data)==null?void 0:A.company)==null?void 0:B.department)??"-"," /"," ",((M=(y=a==null?void 0:a.data)==null?void 0:y.company)==null?void 0:M.position)??"-"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원가입일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:($=a==null?void 0:a.data)!=null&&$.created_at?v((fe=a==null?void 0:a.data)==null?void 0:fe.created_at).format("YYYY-MM-DD hh:mm:ss"):"-"})}),e.jsx("th",{children:"사업자등록번호"}),e.jsx("td",{className:"pr_0",children:(($e=(Me=a==null?void 0:a.data)==null?void 0:Me.company)==null?void 0:$e.company_id)??"-"}),e.jsx("th",{children:"연락처"}),e.jsx("td",{className:"pr_0",children:((Be=(qe=a==null?void 0:a.data)==null?void 0:qe.company)==null?void 0:Be.contact)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"사업자등록"}),e.jsx("td",{colSpan:((Ie=(Re=a==null?void 0:a.data)==null?void 0:Re.company)==null?void 0:Ie.accept)===1?3:7,children:e.jsxs("div",{className:"dis_flex gap32",children:[e.jsx("span",{className:"col_gray",children:((Qe=(Ue=a==null?void 0:a.data)==null?void 0:Ue.company)==null?void 0:Qe.company_id_file_name)??"-"}),((Le=a==null?void 0:a.data)==null?void 0:Le.company)&&e.jsx("button",{type:"button",className:"btn border_w",onClick:Y,children:"저장"})]})}),((He=(Ve=a==null?void 0:a.data)==null?void 0:Ve.company)==null?void 0:He.accept)===1&&e.jsxs(e.Fragment,{children:[e.jsx("th",{children:"탈퇴일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:((Je=a==null?void 0:a.data)==null?void 0:Je.deleted_at)??"-"})})]})]})]})]})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"수신동의 및 개인정보 이용 동의"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["마케팅 정보 수신",e.jsx("br",{}),"동의 (선택)"]}),e.jsx("td",{className:"ver_top",children:((Ke=N())==null?void 0:Ke.agree)===!1?"동의 이력 없음":((Xe=N())==null?void 0:Xe.agree)===!0?`동의함 (동의일: ${(We=N())!=null&&We.updated_at?v((Ze=N())==null?void 0:Ze.updated_at).format("YYYY-MM-DD"):"-"})`:"-"})]})})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_190",children:[e.jsx("div",{className:"btn_wrap"}),e.jsx("div",{className:"btn_wrap gap23",children:((De=(Ge=a==null?void 0:a.data)==null?void 0:Ge.company)==null?void 0:De.accept)===0?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn gray",onClick:()=>u(!1),children:"미승인"}),e.jsx("button",{type:"button",className:"btn light_blue",onClick:()=>u(!0),children:"승인"})]}):((tt=(et=a==null?void 0:a.data)==null?void 0:et.company)==null?void 0:tt.accept)===2?e.jsxs(e.Fragment,{children:[e.jsx(w,{to:"/member/corporate",className:"btn blue",children:"취소"}),e.jsx("button",{type:"submit",className:"btn blue",children:"수정"})]}):e.jsx(w,{to:"/member/corporate",className:"btn blue",children:"확인"})})]})]})]})})]})]})},vs=({boardData:s})=>{const i={ongoing:{title:"진행중인 행사",unit:"개"},pending:{title:"행사 등록 승인대기",unit:"개"},editing:{title:"오늘 신규 등록 행사",unit:"개"},total:{title:"누적 행사 수",unit:"건"}};return e.jsx("div",{className:"dashboard_panel_wrap",children:e.jsx("ul",{children:s&&Object.entries(s).map(([l,{value:t,today:o}])=>e.jsxs("li",{children:[e.jsx("div",{className:"tit",children:i[l].title}),e.jsxs("div",{className:"num_wrap",children:[e.jsx("span",{className:"num",children:l==="editing"?o?Number(o).toLocaleString():0:t?Number(t).toLocaleString():0}),e.jsx("span",{children:i[l].unit})]}),l!=="editing"?o>0&&e.jsx("div",{className:"increase",children:`+${o?Number(o).toLocaleString():0}`}):null]},l))})})},ks=[{value:"등록일",type:"1"},{value:"행사 개설일",type:"2"}],As=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],Cs=[{value:"전체",type:"none"},{value:"승인대기",type:"1"},{value:"수정중",type:"2"},{value:"모집대기",type:"3"},{value:"모집중",type:"4"},{value:"마감",type:"5"},{value:"행사종료",type:"6"}],Ss=({setFilterData:s,resetFilter:i,resetDate:l=null})=>{const[t,o]=h.useState(null),d=v().format("YYYY-MM-DD"),{register:r,handleSubmit:_,setValue:n,reset:m,watch:x}=ve(),f=b=>{let c="",j=v().format("YYYY-MM-DD");switch(b){case"today":c=v().format("YYYY-MM-DD");break;case"yesterday":c=v().subtract(1,"day").format("YYYY-MM-DD"),j=c;break;case"7days":c=v().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":c=v().subtract(1,"month").format("YYYY-MM-DD");break;case"all":c="",j="";break}n("start",c),n("end",j),o(b)},a=()=>{o(null)},g=b=>{s(b)},p=()=>{m(),i(),f(l)};return h.useEffect(()=>{f(l),g(x())},[l]),e.jsx("form",{onSubmit:_(g),children:e.jsx("div",{className:"table_wrap ft_table mt_20",children:e.jsxs("table",{className:"type4",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"60px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{className:"btn border_w w_96",...r("dateType"),children:ks.map(b=>e.jsx("option",{value:b.type,children:b.value},b.type))})}),As.map(b=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:b.type,onChange:()=>f(b.type),checked:t===b.type,className:"hide"}),e.jsx("label",{htmlFor:b.type,className:"btn border_w",children:b.value})]},b.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...r("start"),id:"start",onClick:a,onChange:b=>n("start",b.target.value),defaultValue:d,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...r("end"),id:"end",onClick:a,onChange:b=>n("end",b.target.value),defaultValue:d,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...r("state"),className:"btn border_w w_96",children:Cs.map(b=>e.jsx("option",{value:b.type,children:b.value},b.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...r("search"),className:"small search w_364"})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("button",{type:"submit",className:"btn small w_83 light_blue",children:"검색"}),e.jsx("button",{type:"button",className:"btn small w_83 light_gray ml_4",onClick:p,children:"초기화"})]})]})]})]})]})})})},Ys="https://www.micemate.io/detail",Es=({setOpen:s,data:i})=>e.jsxs("div",{className:"modal_wrap prompt01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{type:"button",className:"modal_close",onClick:()=>s(!1)}),e.jsxs("div",{className:"modal_body",children:[e.jsx("div",{className:"modal_tit",children:"반려사유"}),e.jsx("div",{children:e.jsx("textarea",{className:"mt_8",rows:12,readOnly:!0,children:i??""})})]}),e.jsx("div",{className:"modal_btn mt_63",children:e.jsx("button",{type:"button",className:"confirm_btn",onClick:()=>s(!1),children:"확인"})})]})]}),Fs=[{type:0,text:"임시 저장",class:"yellow"},{type:1,text:"승인 대기",class:"brighter_blue"},{type:2,text:"수정 중",class:"yellow"},{type:3,text:"모집 대기",class:"brighter_gray"},{type:4,text:"모집 중",class:"brighter_gray"},{type:5,text:"마감",class:"gray"},{type:6,text:"행사 종료",class:"gray"}],Ps=({eventList:s,checkedList:i,setCheckedList:l})=>{const[t,o]=h.useState(!1),[d,r]=h.useState(""),[_,n]=h.useState(!1),m=a=>{l(g=>g.includes(a)?g.filter(p=>p!==a):[...g,a])},x=()=>{if(t)l([]);else{const a=s.map(g=>g.id);l(a)}o(!t)},f=a=>{const g=Fs.find(p=>p.type===a);return g||{text:"알 수 없음",class:""}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"140px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:x,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"행사번호"}),e.jsx("th",{className:"txt_left",children:"행사명"}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 개설일"}),e.jsx("th",{}),e.jsx("th",{children:"진행 상태"})]})}),e.jsx("tbody",{children:s&&s.map(a=>{const{text:g,class:p}=f(a.state);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:a.id,checked:i.includes(a.id),onChange:()=>m(a.id),type:"checkbox"}),e.jsx("label",{htmlFor:a.id})]})}),e.jsx("td",{children:a.id??"-"}),e.jsx("td",{className:"txt_left",children:a.state===3||a.state===4||a.state===5||a.state===6?e.jsx(w,{to:`${Ys}/${a.id}`,target:"_blank",children:a.title??"-"}):e.jsx(w,{to:`/event/apply/${a.id}`,children:a.title??"-"})}),e.jsx("td",{children:a.start_date?Ne(a.start_date):"-"}),e.jsx("td",{children:a.publish_date?Ne(a.publish_date):"-"}),e.jsx("td",{children:a.reject_reason?e.jsx("button",{className:"underline col_blue",onClick:()=>{n(!0),r(a.reject_reason)},children:"반려사유"}):""}),e.jsx("td",{children:e.jsx("i",{className:`btn small  w_72 ${p}`,children:g})})]},a.id)})})]})}),_&&e.jsx(Es,{setOpen:n,data:d})]})},Ts=()=>{var N,k,u,S,Y,T;const s=_e(),i=Fe(),{openConfirm:l}=ge(),{openAlret:t}=je(),o=J(Q),d=ue(Q),[r,_]=h.useState({}),[n,m]=h.useState(),[x,f]=h.useState([]),[a,g]=h.useState(1),{data:p}=ns(),b=ls(),c=()=>{_({}),g(1),s("?")},j=()=>{if(x.length<=0)return t({text:"목록을 선택해주세요."});l({text:`선택 [${x.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"확인"})};return h.useEffect(()=>{o.confirm===!0&&x.length>0&&b.mutate({ids:x},{onSuccess:()=>{t({text:"삭제가 완료되었습니다."}),d(),f([]),i.invalidateQueries({queryKey:["eventManage"]})}})},[o.confirm]),h.useEffect(()=>{const E={page:a??1,type:r.type&&r.type!=="none"?r.type:void 0,dateType:r.dateType??1,start:r.start??void 0,end:r.end??void 0,state:r.state!=="none"?r.state:void 0,search:r.search??void 0},R=Object.fromEntries(Object.entries(E).filter(([z,F])=>typeof F=="string"||Array.isArray(F)?F!==""&&F.length>0:F!=null).map(([z,F])=>[z,String(F)])),q=new URLSearchParams(R).toString();m(q)},[r,a]),h.useEffect(()=>{n&&(s(`?${n}`),i.invalidateQueries({queryKey:["userList"]}))},[n]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/event",children:"행사관리"}),e.jsx(w,{className:"item",to:"/event",children:"행사 리스트"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(vs,{boardData:(N=p==null?void 0:p.data)==null?void 0:N.summary}),e.jsx(Ss,{setFilterData:_,resetFilter:c,resetDate:"all"}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsx("h3",{className:"fs_18",children:"전체 검색결과"}),e.jsx("button",{type:"button",className:"pr_30",onClick:j,children:"삭제"})]}),((u=(k=p==null?void 0:p.data)==null?void 0:k.items)==null?void 0:u.length)>0?e.jsx(Ps,{eventList:(S=p==null?void 0:p.data)==null?void 0:S.items,checkedList:x,setCheckedList:f}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 행사가 없습니다"}),((Y=p==null?void 0:p.data)==null?void 0:Y.total)>20&&e.jsx(ze,{total:(T=p==null?void 0:p.data)==null?void 0:T.total,page:a,setPage:g})]})})]})},Os=({setOpen:s,title:i,reason:l,setReason:t,onSubmit:o})=>e.jsxs("div",{className:"modal_wrap prompt01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{type:"button",className:"modal_close",onClick:()=>s(!1)}),e.jsxs("div",{className:"modal_body",children:[e.jsxs("div",{className:"modal_tit",children:["[",i,"] 게시를",e.jsx("br",{}),"반려 처리 하시겠습니까?"]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("p",{className:"fs_16 fw_600",children:"*반려사유 작성"}),e.jsx("textarea",{className:"mt_8",placeholder:"세부 반려사유를 작성해주세요.",rows:12,value:l,onChange:d=>t(d.target.value)})]})})]}),e.jsxs("div",{className:"modal_btn mt_63",children:[e.jsx("button",{type:"button",className:"confirm_btn",onClick:()=>{o==null||o(),s(!1)},children:"확인"}),e.jsx("button",{type:"button",className:"close_btn",onClick:()=>s(!1),children:"취소"})]})]})]}),bt=()=>{var b;const{id:s}=he(),i=_e(),{openConfirm:l}=ge(),{openAlret:t}=je(),o=J(Q),[d,r]=h.useState(""),[_,n]=h.useState(!1),m=ue(Q),{data:x}=Ye(s?Number(s):void 0),{data:f}=_t(s?Number(s):void 0),a=ds(),g=c=>{var N;if(["general","detail","application"].some(k=>(f==null?void 0:f.data[k])===!1))return t({text:"작성완료되지 않은 항목이 존재합니다."});switch(c){case 0:return n(!0);case 1:return l({text:`[${((N=x==null?void 0:x.data)==null?void 0:N.title)??""}] 게시를 
승인 처리 하시겠습니까?`,okBtn:"확인"});default:return}},p=()=>{const c=sessionStorage.getItem("EVENT_ACCEPT"),j=JSON.parse(c);a.mutate({id:s?Number(s):void 0,data:{accept:!1,reject:j?{...j==null?void 0:j.reject,reason:d}:void 0}},{onSuccess:()=>{t({text:"행사가 반려되었습니다.",callback:()=>{location.reload()}}),m()}})};return h.useEffect(()=>{o.confirm===!0&&a.mutate({id:s?Number(s):void 0,data:{accept:!0}},{onSuccess:()=>{t({text:"행사가 승인되었습니다."}),m(),i("/event")}})},[o.confirm]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",onClick:()=>g(0),children:"반려"}),e.jsx("button",{className:"btn light_blue",onClick:()=>g(1),children:"승인"})]}),_&&e.jsx(Os,{setOpen:n,title:((b=x==null?void 0:x.data)==null?void 0:b.title)??"",reason:d,setReason:r,onSubmit:p})]})},nt=s=>{switch(s){case 0:return{text:"· 작성중",class:"col_orange"};case 1:return{text:"· 승인 대기중",class:"col_darkblue"};case 2:return{text:"· 수정 필요",class:"col_orange"};case 3:return{text:"· 완료",class:"col_darkblue"};default:return{text:"· 알 수 없음",class:"col_orange"}}},zs=s=>{switch(s){case!0:return{text:"작성완료",class:"col_blue"};case!1:return{text:"작성 전",class:"col_yellow"};default:return{text:"알 수 없음",class:"col_orange"}}},Ms=[{title:"기본정보",key:"general",url:"general"},{title:"상세페이지",key:"detail",url:"detail"},{title:"모집정보",key:"application",url:"information"}],$s=()=>{var r,_;const{id:s}=he(),i=_e(),{data:l}=Ye(s?Number(s):void 0),{data:t,isLoading:o,isError:d}=_t(s?Number(s):void 0);return h.useEffect(()=>{var f,a;if(!l)return sessionStorage.removeItem("EVENT_ACCEPT");const n=sessionStorage.getItem("EVENT_ACCEPT"),m=JSON.parse(n);let x;n&&m.id===s?x={id:s,reject:{...m.reject,...(f=l==null?void 0:l.data)==null?void 0:f.is_reject}}:x={id:s,reject:{...(a=l==null?void 0:l.data)==null?void 0:a.is_reject}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(x))},[l]),o?e.jsx(W,{}):d||!t?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"행사 상세설정"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위해 내용을 작성해주세요."})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"fs_20",children:"행사 등록 준비 상태"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"border_item w_767",children:e.jsx("span",{className:`${nt((r=t==null?void 0:t.data)==null?void 0:r.state).class}`,children:nt((_=t==null?void 0:t.data)==null?void 0:_.state).text})})}),e.jsx("div",{className:"tit_wrap mt_26",children:e.jsx("h3",{className:"fs_20",children:"작성 항목"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"w_767",children:e.jsx("ul",{className:"border_item_list",children:Ms.map(n=>{var m;return e.jsxs("li",{onClick:()=>i(`/event/apply/${s}/${n.url}`),style:{cursor:"pointer"},children:[e.jsx("span",{className:"tit",children:n.title}),e.jsx("p",{className:"btn gray",children:zs((m=t==null?void 0:t.data)==null?void 0:m[n.key]).text})]},n.key)})})})}),e.jsxs("div",{className:"dis_flex justify_between mt_40",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(w,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsx(bt,{})]})]})})]})},qs=[{type:1,name:"무료"},{type:2,name:"사전 신청 시 무료 / 현장 구매 시 유료"},{type:3,name:"사전 신청 시 무료 / 기간 한정 유료 / 현장 구매 시 유료"},{type:4,name:"사전 신청 유료 / 현장 결제 유료"},{type:5,name:"유료"}],Bs=()=>{var _,n,m,x,f,a,g,p,b,c,j,N,k,u,S,Y,T,E,R,q,z,F,L,V,U,C,Z,G,D,ee,te,se,ae,ie,ne,le,re,ce,oe,de;const{id:s}=he(),[i,l]=h.useState({}),{data:t,isLoading:o,isError:d}=Ye(s?Number(s):void 0),r=(A,B)=>{const y=sessionStorage.getItem("EVENT_ACCEPT"),M=JSON.parse(y);let $;y&&M.id===s?$={id:s,reject:{...M.reject,[B]:A.target.checked??!1}}:$={id:s,reject:{[B]:A.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify($)),l($==null?void 0:$.reject)};return h.useEffect(()=>{const A=sessionStorage.getItem("EVENT_ACCEPT"),B=JSON.parse(A);A&&B.id===s?l(B==null?void 0:B.reject):(l({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),o?e.jsx(W,{}):d?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"기본정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참관객 모집을 위한 행사의 기본 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"fs_20",children:["프로젝트 제목 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_767",type:"text",value:((_=t==null?void 0:t.data)==null?void 0:_.title)??"",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"title",type:"checkbox",checked:(i==null?void 0:i.title)??!1,onChange:A=>r(A,"title")}),e.jsx("label",{htmlFor:"title"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 분야 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("select",{className:"w_767",disabled:!0,children:e.jsx("option",{value:(n=t==null?void 0:t.data)==null?void 0:n.category.id,children:(m=t==null?void 0:t.data)==null?void 0:m.category.name})}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"category",type:"checkbox",checked:(i==null?void 0:i.category)??!1,onChange:A=>r(A,"category")}),e.jsx("label",{htmlFor:"category"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["대표 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 대표 이미지를 등록해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"대표 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 385*480픽셀(세로형), 1280*720픽셀(가로형) / 72dpi 이상"]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"img",type:"checkbox",checked:(i==null?void 0:i.img)??!1,onChange:A=>r(A,"img")}),e.jsx("label",{htmlFor:"img"})]})]}),e.jsxs("div",{className:"dis_flex mt_10 gap16",children:[e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"img1",className:"hide",disabled:!0}),e.jsxs("label",{htmlFor:"img1",className:"file_inp vertical preview_label",children:[((x=t==null?void 0:t.data)==null?void 0:x.img1)&&e.jsx("span",{className:"preview_img",children:e.jsx("img",{src:`https://api.micemate.io/storage/${(f=t==null?void 0:t.data)==null?void 0:f.img1}`})}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"세로형"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"img2",className:"hide",disabled:!0}),e.jsxs("label",{htmlFor:"img2",className:"file_inp horizontal preview_label",children:[((a=t==null?void 0:t.data)==null?void 0:a.img2)&&e.jsx("span",{className:"preview_img",children:e.jsx("img",{src:`https://api.micemate.io/storage/${(g=t==null?void 0:t.data)==null?void 0:g.img2}`})}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"가로형"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 일자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",id:"event_start_date",placeholder:"행사 시작 일자를 선택해주세요.",readOnly:!0,value:(p=t==null?void 0:t.data)!=null&&p.event_start_date?v((b=t==null?void 0:t.data)==null?void 0:b.event_start_date).format("YYYY-MM-DD"):""}),e.jsx("i",{className:"date_icon"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",id:"event_end_date",placeholder:"행사 종료 일자를 선택해주세요.",readOnly:!0,value:(c=t==null?void 0:t.data)!=null&&c.event_end_date?v((j=t==null?void 0:t.data)==null?void 0:j.event_end_date).format("YYYY-MM-DD"):""}),e.jsx("i",{className:"date_icon"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"date",type:"checkbox",checked:(i==null?void 0:i.date)??!1,onChange:A=>r(A,"date")}),e.jsx("label",{htmlFor:"date"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 시간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"num_inp_wrap flex1",children:[e.jsx("input",{type:"text",placeholder:"행사 시작 시간을 입력해주세요.",value:(N=t==null?void 0:t.data)!=null&&N.event_start_date?v((k=t==null?void 0:t.data)==null?void 0:k.event_start_date).format("HH:mm"):"",readOnly:!0}),e.jsx("button",{className:"increase"}),e.jsx("button",{className:"decrease"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"num_inp_wrap flex1",children:[e.jsx("input",{type:"text",placeholder:"행사 종료 시간을 입력해주세요.",value:(u=t==null?void 0:t.data)!=null&&u.event_end_date?v((S=t==null?void 0:t.data)==null?void 0:S.event_end_date).format("HH:mm"):"",readOnly:!0}),e.jsx("button",{className:"increase"}),e.jsx("button",{className:"decrease"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"time",type:"checkbox",checked:(i==null?void 0:i.time)??!1,onChange:A=>r(A,"time")}),e.jsx("label",{htmlFor:"time"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["비용 설정 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex justify_between w_767",children:[e.jsx("select",{className:"w_372",disabled:!0,children:e.jsx("option",{value:((Y=t==null?void 0:t.data)==null?void 0:Y.payable_type)??"",children:((T=qs.find(A=>{var B;return A.type===((B=t==null?void 0:t.data)==null?void 0:B.payable_type)}))==null?void 0:T.name)??""})}),((E=t==null?void 0:t.data)==null?void 0:E.payable_type)===2&&e.jsx("div",{id:"_sel1",children:e.jsx("input",{type:"number",className:"w_372",placeholder:"현장 신청 비용을 입력해주세요.",value:((R=t==null?void 0:t.data)==null?void 0:R.payable_price2)??"",readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"payable",type:"checkbox",checked:(i==null?void 0:i.payable)??!1,onChange:A=>r(A,"payable")}),e.jsx("label",{htmlFor:"payable"})]})]}),(((q=t==null?void 0:t.data)==null?void 0:q.payable_type)===3||((z=t==null?void 0:t.data)==null?void 0:z.payable_type)===4)&&e.jsxs("div",{id:"_sel2",children:[e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsxs("div",{className:"dis_flex justify_between w_767 gap23",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 시작 날짜",value:(F=t==null?void 0:t.data)!=null&&F.payable_start_date?v((L=t==null?void 0:t.data)==null?void 0:L.payable_start_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("input",{type:"date"})]}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 종료 날짜",value:(V=t==null?void 0:t.data)!=null&&V.payable_end_date?v((U=t==null?void 0:t.data)==null?void 0:U.payable_end_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("input",{type:"date"})]}),e.jsx("input",{type:"number",className:"w_372",placeholder:"유료 사전 신청 기간의 비용을 입력해주세요.",value:((C=t==null?void 0:t.data)==null?void 0:C.payable_price1)??"",readOnly:!0})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)",value:((Z=t==null?void 0:t.data)==null?void 0:Z.payable_price_url)??"",readOnly:!0})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 txt_center",children:e.jsx("i",{className:"blue_icon_box",children:"+"})})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"number",className:"w_372",placeholder:"현장 신청 비용을 입력해주세요.",value:((G=t==null?void 0:t.data)==null?void 0:G.payable_price2)??"",readOnly:!0})})]}),((D=t==null?void 0:t.data)==null?void 0:D.payable_type)===5&&e.jsx("div",{id:"_sel4",children:e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)",value:((ee=t==null?void 0:t.data)==null?void 0:ee.payable_price_url)??""})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 진행 방식 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap11",children:[e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-1",type:"checkbox",checked:((te=t==null?void 0:t.data)==null?void 0:te.progress_type)===0,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-1",children:"오프라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-2",type:"checkbox",checked:((se=t==null?void 0:t.data)==null?void 0:se.progress_type)===1,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-2",children:"온라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-3",type:"checkbox",checked:((ae=t==null?void 0:t.data)==null?void 0:ae.progress_type)===2,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-3",children:"하이브리드 행사"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"progress",type:"checkbox",checked:(i==null?void 0:i.progress)??!1,onChange:A=>r(A,"progress")}),e.jsx("label",{htmlFor:"progress"})]})]}),(((ie=t==null?void 0:t.data)==null?void 0:ie.progress_type)===1||((ne=t==null?void 0:t.data)==null?void 0:ne.progress_type)===2)&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"온라인 행사 url를 입력해주세요. (온라인 / 하이브리드 행사 선택 시)",readOnly:!0,value:((le=t==null?void 0:t.data)==null?void 0:le.progress_url)??""})}),(((re=t==null?void 0:t.data)==null?void 0:re.progress_type)===0||((ce=t==null?void 0:t.data)==null?void 0:ce.progress_type)===2)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 위치 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{type:"text",className:"w_767",placeholder:"도로명/지번 주소 검색 (오프라인 / 하이브리드 행사 선택 시)",readOnly:!0,value:((oe=t==null?void 0:t.data)==null?void 0:oe.position1)??""}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"position",type:"checkbox",checked:(i==null?void 0:i.position)??!1,onChange:A=>r(A,"position")}),e.jsx("label",{htmlFor:"position"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"세부 주소",readOnly:!0,value:((de=t==null?void 0:t.data)==null?void 0:de.position2)??""})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(w,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(w,{to:`/event/apply/${s}`,className:"btn gray",children:"뒤로"}),e.jsx(w,{to:`/event/apply/${s}/detail`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Rs=()=>{var a,g,p,b;const{id:s}=he(),i=h.useRef(),[l,t]=h.useState(""),[o,d]=h.useState({}),{data:r,isLoading:_,isError:n}=cs(s?Number(s):void 0),m=h.useMemo(()=>({toolbar:{container:[[{header:"1"},{header:"2"}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{align:[]}],["image"]]},clipboard:{matchVisual:!1}}),[]),x=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","align","image"],f=(c,j)=>{const N=sessionStorage.getItem("EVENT_ACCEPT"),k=JSON.parse(N);let u;N&&k.id===s?u={id:s,reject:{...k.reject,[j]:c.target.checked??!1}}:u={id:s,reject:{[j]:c.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(u)),d(u==null?void 0:u.reject)};return h.useEffect(()=>{const c=sessionStorage.getItem("EVENT_ACCEPT"),j=JSON.parse(c);c&&j.id===s?d(j==null?void 0:j.reject):(d({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),h.useEffect(()=>{r!==void 0&&t(r.data.content)},[r]),_?e.jsx(W,{}):n?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"상세페이지"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위한 내용을 작성해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"tit02",children:["행사 상세내용 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 상세이미지 및 내용을 입력해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"상세 내용 작성 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 이미지의 너비는 1100px 이상으로 등록해야 상세 페이지의 여백이 생기지 않습니다.",e.jsx("br",{}),"· 이미지 용량이 큰 경우 로딩 속도가 느려질 수 있습니다.",e.jsx("br",{}),"· 설명 글도 함께 작성할 수 있으니, 기본 정보 외의 추가할 세부 내용을 작성해주세요."]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"content",type:"checkbox",checked:(o==null?void 0:o.content)??!1,onChange:c=>f(c,"content")}),e.jsx("label",{htmlFor:"content"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_20",children:e.jsx("div",{className:"w_767",children:e.jsx(zt,{ref:i,value:l,onChange:t,modules:m,formats:x,className:"quill_editor",theme:"snow",readOnly:!0})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["태그 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"본 행사를 설명해줄 태그를 입력해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_372",type:"text",placeholder:"태그는 최대 5개까지 입력 가능합니다.",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"tag",type:"checkbox",checked:(o==null?void 0:o.tag)??!1,onChange:c=>f(c,"tag")}),e.jsx("label",{htmlFor:"tag"})]})]}),((g=(a=r==null?void 0:r.data)==null?void 0:a.tags)==null?void 0:g.length)>0&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:e.jsx("ul",{className:"white_tag_list",children:(b=(p=r==null?void 0:r.data)==null?void 0:p.tags)==null?void 0:b.map((c,j)=>e.jsxs("li",{children:[c??"",e.jsx("button",{className:"delete_btn",disabled:!0})]},j))})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(w,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(w,{to:`/event/apply/${s}/general`,className:"btn gray",children:"뒤로"}),e.jsx(w,{to:`/event/apply/${s}/information`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Is=()=>{var _,n,m,x,f,a,g,p,b,c,j,N,k;const{id:s}=he(),[i,l]=h.useState({}),{data:t,isLoading:o,isError:d}=os(s?Number(s):void 0),r=(u,S)=>{const Y=sessionStorage.getItem("EVENT_ACCEPT"),T=JSON.parse(Y);let E;Y&&T.id===s?E={id:s,reject:{...T.reject,[S]:u.target.checked??!1}}:E={id:s,reject:{[S]:u.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(E)),l(E==null?void 0:E.reject)};return h.useEffect(()=>{const u=sessionStorage.getItem("EVENT_ACCEPT"),S=JSON.parse(u);u&&S.id===s?l(S==null?void 0:S.reject):(l({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),o?e.jsx(W,{}):d?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"모집정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 신청을 위해 모집 방법 및 수집할 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"fs_20",children:["모집 기간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"w_767 dis_flex gap10",children:[e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"시작 날짜",value:(_=t==null?void 0:t.data)!=null&&_.application_start_date?v((n=t==null?void 0:t.data)==null?void 0:n.application_start_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("i",{className:"date_icon"})]}),e.jsx("div",{className:"flex1",children:e.jsx("input",{className:"w_full",type:"text",placeholder:"시작 시간",value:(m=t==null?void 0:t.data)!=null&&m.application_start_date?v((x=t==null?void 0:t.data)==null?void 0:x.application_start_date).format("HH:mm"):"",readOnly:!0})}),e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"종료 날짜",value:(f=t==null?void 0:t.data)!=null&&f.application_end_date?v((a=t==null?void 0:t.data)==null?void 0:a.application_end_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("i",{className:"date_icon"})]}),e.jsx("div",{className:"flex1",children:e.jsx("input",{className:"w_full",type:"text",placeholder:"종료 시간",value:(g=t==null?void 0:t.data)!=null&&g.application_end_date?v((p=t==null?void 0:t.data)==null?void 0:p.application_end_date).format("HH:mm"):"",readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_date",type:"checkbox",checked:(i==null?void 0:i.application_date)??!1,onChange:u=>r(u,"application_date")}),e.jsx("label",{htmlFor:"application_date"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["모집 방법 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("h3",{className:"fs_12",children:"단체 신청 진행 시, 선택하신 수집 정보를 기반으로 한 엑셀 양식을 제공합니다."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap11",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-1",type:"checkbox",checked:((b=t==null?void 0:t.data)==null?void 0:b.application_type)===0,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-1",children:"개인 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-2",type:"checkbox",checked:((c=t==null?void 0:t.data)==null?void 0:c.application_type)===1,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-2",children:"단체 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-3",type:"checkbox",checked:((j=t==null?void 0:t.data)==null?void 0:j.application_type)===2,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-3",children:"개인/단체 신청 모두"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_type",type:"checkbox",checked:(i==null?void 0:i.application_type)??!1,onChange:u=>r(u,"application_type")}),e.jsx("label",{htmlFor:"application_type"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["수집 정보 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_1",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_1",children:"이름"})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_information",type:"checkbox",checked:(i==null?void 0:i.application_information)??!1,onChange:u=>r(u,"application_information")}),e.jsx("label",{htmlFor:"application_information"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_2",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_2",children:"이메일"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_3",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_3",children:"휴대전화 번호"})]})}),(k=(N=t==null?void 0:t.data)==null?void 0:N.information)==null?void 0:k.map(u=>e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{id:`chk03_${u.id+3}_p`,type:"checkbox",className:"input",value:u.id,disabled:!0,checked:u.is_set}),e.jsx("label",{htmlFor:`chk03_${u.id+3}_p`,className:"label",children:u.name}),e.jsx("input",{type:"checkbox",className:"hide toggle",id:`chk03_${u.id+3}_c`,checked:u.required,readOnly:!0}),e.jsxs("label",{htmlFor:`chk03_${u.id+3}_c`,className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})},u.id)),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(w,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsx(bt,{})]})]})})]})},Us=()=>e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"사전 설문"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"사전 설문 제작을 통해 행사에 필요한 데이터를 받아보세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsx("h3",{className:"fs_20",children:"사전 설문 사용 여부"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_1",type:"radio",name:"rad01",checked:!0}),e.jsx("label",{htmlFor:"rad01_1",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_2",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_2",children:"사용하지 않음"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01"})]})]}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"설문 리스트"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요.",readOnly:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{value:"1",selected:!0,children:"단일 선택"}),e.jsx("option",{value:"2",children:"다중 선택"}),e.jsx("option",{value:"3",children:"장문"})]})]}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"option_tit",children:"옵션 1"}),e.jsx("div",{className:"option_tit",children:e.jsx("input",{type:"text",placeholder:"옵션을 입력해주세요.",readOnly:!0})}),e.jsx("button",{className:"option_add_btn",children:"옵션 추가"})]}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn active",children:["필수",e.jsx("i",{})]})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"chk02"})]})]}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요.",readOnly:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{value:"1",children:"단일 선택"}),e.jsx("option",{value:"2",selected:!0,children:"다중 선택"}),e.jsx("option",{value:"3",children:"장문"})]})]}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"option_tit",children:"옵션 1"}),e.jsx("div",{className:"option_tit",children:e.jsx("input",{type:"text",placeholder:"옵션을 입력해주세요.",readOnly:!0})}),e.jsx("button",{className:"option_add_btn",children:"옵션 추가"})]}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn active",children:["필수",e.jsx("i",{})]})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"chk03"})]})]}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요.",readOnly:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{value:"1",children:"단일 선택"}),e.jsx("option",{value:"2",children:"다중 선택"}),e.jsx("option",{value:"3",selected:!0,children:"장문"})]})]}),e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"텍스트를 입력하세요.",readOnly:!0})}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk04",type:"checkbox"}),e.jsx("label",{htmlFor:"chk04"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 dis_flex justify_end",children:e.jsx("button",{className:"btn h_36 dark_blue",children:"추가하기"})})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",children:"뒤로"}),e.jsx("button",{className:"btn light_blue",children:"다음"})]})]})]})})]}),Qs=()=>e.jsxs("div",{className:"container",children:[e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"FAQ & 문의"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참가자 문의에 대한 담당자 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsx("h3",{className:"fs_20",children:"FAQ 사용 여부"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_1",type:"radio",name:"rad01",checked:!0}),e.jsx("label",{htmlFor:"rad01_1",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_2",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_2",children:"사용하지 않음"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01"})]})]}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"FAQ 리스트"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsx("div",{className:"head",children:e.jsx("input",{type:"text",placeholder:"Q. 제목을 입력해주세요.",readOnly:!0})}),e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"A. 답변을 입력해주세요.",readOnly:!0})}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"file_btn"}),e.jsx("button",{className:"delete_btn"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"chk02"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 dis_flex justify_end",children:e.jsx("button",{className:"btn h_36 dark_blue",children:"추가하기"})})}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsxs("h3",{className:"fs_20",children:["문의 담당자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_767",type:"text",value:"이름",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"chk03"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"이메일",readOnly:!0})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"휴대전화 번호",readOnly:!0})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",children:"반려"}),e.jsx("button",{className:"btn light_blue",children:"승인"})]})]})]})})]}),be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaCAYAAAA/xl1SAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPZSURBVHgB7doxbxtlGMDx53kt2iSIykFpIqoWXTcXpYmRgHjrZWNMvwHfIGFkarp1o/kG/QbABlOuA1IqMVxLJTwgcZXaKglBuAN1oir38t4RhxBcxw6OH4n+f4vPvrOX/PXc5b1TOaXa7EexOqmLr9wQlbqKr3rRquB/L/ytW+FvnYmXzKt/KHmeNB//kMgp6CAHR1FcnbjwcjlsrhAbjsnUS5K/0tvN5kbW75f6CrAIb/xC+1bYXBHgBCHEe/2GWDnpgGtzC8vnzr/6OvxsLEA/ikuyiixNTV96sbP9PO11aM8AQ3xfhpfV8ItjAgymqqpLM9OXqr9uP//udQd1PQWXp9x32l+FvbEA/13aduOLWZq0ju9w3Y4O13vrxIchqo/vh4HWxb9OwQen3SUBhkkl6nY6/keAtesffxbO23cEOANetXFx5vKLna1nG53PDq8Ba7VGpOf8etiMBDg7rXA9eLVzPXh4Deje8sU6XyTA2aq+vf/Hrc6bcgIeTL9fBBiRMAUniylYTsCD6QeMzET+sryrVgboWXLBiHnR4pkC0dpsI1ZX/vMBjJTP9xeduDwWwIC6St2p13kBbMRO1EcC2Jh3ytof7FQdTzbDUNUJYIgAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYcqp+JYANlrOixIgTIThlznxkgpgIAy/Jy5keF8AA1586nyuTEDYyPNEi9cP5j75PYzDqgCjk/306MHVchkmF7cmwAh5laR4LQMcc7t3BRgl1dvFSxlgmqbFUgxTECMRpt+9ZrqRFduHd0LOu71VFqUxAlln+hUqnY3Nzc3dd2fe3wsRfirAGfFeP28+2kg67ytHd/629XTj4szlybDZEGD41po/Prhz9APtdlTt+sK6qsQCDE8all0+PP5h16dhxip7N8OwZIEaQ+G9JG03vthtn/b64rW5hWJ5ZlmA01sLk2/ldTsrvb65s/Xs26npK0/C6bge3nKnBH37a0VFvwjxrfY6rmeAhZ3tp+nUe1e+CXN0UkXrApxsre0mbv788PvkpANVBlCrN6JwAzmsF+qN8DYS4EAx8Ypburtu7G6WJn2vJw8U4FG12UYsLo/Vy3z4lSj8UMQDDW+GIrbyQWYf/lFVvV88UdV8/Pfa3iD+BDNM+9iPxy8HAAAAAElFTkSuQmCC",Ls=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(w,{className:"item",to:"/banner/main",children:"메인배너"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"등록일"}),e.jsx("option",{value:"2",children:"게시일"})]})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide"}),e.jsx("label",{htmlFor:"rad01",className:"btn border_w",children:"오늘"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad02",className:"hide"}),e.jsx("label",{htmlFor:"rad02",className:"btn border_w",children:"어제"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad03",className:"hide",checked:!0}),e.jsx("label",{htmlFor:"rad03",className:"btn border_w",children:"7일"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad04",className:"hide"}),e.jsx("label",{htmlFor:"rad04",className:"btn border_w",children:"1개월"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad05",className:"hide"}),e.jsx("label",{htmlFor:"rad05",className:"btn border_w",children:"전체"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"노출"}),e.jsx("option",{value:"2",children:"노출 안함"}),e.jsx("option",{value:"3",children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",children:"검색"}),e.jsx("button",{className:"btn small gray",children:"초기화"})]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:"[총 회원수 9,999명]"})]}),e.jsx("button",{className:"sort_btn",children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{children:"추가"}),e.jsx("button",{className:"ml_22",children:"삭제"})]})]}),e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk01"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:be})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk02"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:be})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출 안함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk03"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:be})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]})]})]})}),e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("a",{href:"#none",className:"pagi_prev"}),e.jsx("a",{href:"#none",className:"num active",children:"1"}),e.jsx("a",{href:"#none",className:"num",children:"2"}),e.jsx("a",{href:"#none",className:"num",children:"3"}),e.jsx("a",{href:"#none",className:"num",children:"4"}),e.jsx("a",{href:"#none",className:"num",children:"5"}),e.jsx("a",{href:"#none",className:"num",children:"6"}),e.jsx("a",{href:"#none",className:"num",children:"7"}),e.jsx("a",{href:"#none",className:"num",children:"8"}),e.jsx("a",{href:"#none",className:"num",children:"9"}),e.jsx("a",{href:"#none",className:"num",children:"10"}),e.jsx("a",{href:"#none",className:"pagi_next"})]})]})})]}),lt=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(w,{className:"item",to:"/banner/main",children:"메인배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력"})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜"}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜"}),e.jsx("label",{htmlFor:"start_end"}),e.jsx("input",{type:"date",id:"start_end"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*1080픽셀"]})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide"}),e.jsx("label",{htmlFor:"fileInp01",className:"file_inp",children:"0 / 1"})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력"})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",children:"취소"}),e.jsx("button",{className:"btn blue",children:"추가"})]})]})]})})]}),Vs=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(w,{className:"item",to:"/banner/band",children:"띠배너"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"등록일"}),e.jsx("option",{value:"2",children:"게시일"})]})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide"}),e.jsx("label",{htmlFor:"rad01",className:"btn border_w",children:"오늘"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad02",className:"hide"}),e.jsx("label",{htmlFor:"rad02",className:"btn border_w",children:"어제"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad03",className:"hide",checked:!0}),e.jsx("label",{htmlFor:"rad03",className:"btn border_w",children:"7일"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad04",className:"hide"}),e.jsx("label",{htmlFor:"rad04",className:"btn border_w",children:"1개월"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad05",className:"hide"}),e.jsx("label",{htmlFor:"rad05",className:"btn border_w",children:"전체"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"노출"}),e.jsx("option",{value:"2",children:"노출 안함"}),e.jsx("option",{value:"3",children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",children:"검색"}),e.jsx("button",{className:"btn small gray",children:"초기화"})]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:"[총 회원수 9,999명]"})]}),e.jsx("button",{className:"sort_btn",children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{children:"추가"}),e.jsx("button",{className:"ml_22",children:"삭제"})]})]}),e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk01"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:be})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk02"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:be})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출 안함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk03"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:be})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]})]})]})}),e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("a",{href:"#none",className:"pagi_prev"}),e.jsx("a",{href:"#none",className:"num active",children:"1"}),e.jsx("a",{href:"#none",className:"num",children:"2"}),e.jsx("a",{href:"#none",className:"num",children:"3"}),e.jsx("a",{href:"#none",className:"num",children:"4"}),e.jsx("a",{href:"#none",className:"num",children:"5"}),e.jsx("a",{href:"#none",className:"num",children:"6"}),e.jsx("a",{href:"#none",className:"num",children:"7"}),e.jsx("a",{href:"#none",className:"num",children:"8"}),e.jsx("a",{href:"#none",className:"num",children:"9"}),e.jsx("a",{href:"#none",className:"num",children:"10"}),e.jsx("a",{href:"#none",className:"pagi_next"})]})]})})]}),rt=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(w,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(w,{className:"item",to:"/banner/band",children:"띠배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx(I,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력"})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜"}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜"}),e.jsx("label",{htmlFor:"end_date"}),e.jsx("input",{type:"date",id:"end_date"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*1080픽셀"]})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide"}),e.jsx("label",{htmlFor:"fileInp01",className:"file_inp",children:"0 / 1"})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력"})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",children:"취소"}),e.jsx("button",{className:"btn blue",children:"추가"})]})]})]})})]}),Hs=kt([{path:"/",element:e.jsx(Kt,{}),children:[{path:"/login",element:e.jsx(Wt,{})},{path:"/member/general",element:e.jsx(_s,{})},{path:"/member/general/detail/:id",element:e.jsx(bs,{})},{path:"/member/corporate",element:e.jsx(ys,{})},{path:"/member/corporate/detail/:id",element:e.jsx(ws,{})},{path:"/event",element:e.jsx(Ts,{})},{path:"/event/apply/:id",element:e.jsx($s,{})},{path:"/event/apply/:id/general",element:e.jsx(Bs,{})},{path:"/event/apply/:id/detail",element:e.jsx(Rs,{})},{path:"/event/apply/:id/information",element:e.jsx(Is,{})},{path:"/event/apply/:id/survey",element:e.jsx(Us,{})},{path:"/event/apply/:id/faq",element:e.jsx(Qs,{})},{path:"/banner/main",element:e.jsx(Ls,{})},{path:"/banner/main/detail",element:e.jsx(lt,{})},{path:"/banner/main/detail/:id",element:e.jsx(lt,{})},{path:"/banner/band",element:e.jsx(Vs,{})},{path:"/banner/band/detail",element:e.jsx(rt,{})},{path:"/banner/band/detail/:id",element:e.jsx(rt,{})}]}]),Js=()=>e.jsx(At,{router:Hs}),Ks=Ct`
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
    font-size:16px;
    font-family: 'Pretendard';
  }
  body {
    margin: 0;
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
    font-size: 16px;
  }
  input,select ,textarea,textarea::placeholder, input::placeholder{
    border: none;
    font-family: 'Pretendard';
    outline: none;
    font-size: 16px;
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
    margin-top: 8px !important;
  }
  .maxframe{
    max-width: 1920px;
    margin: 0 auto;
  }
`;function Xs(){return e.jsxs(e.Fragment,{children:[e.jsx(Ks,{}),e.jsx(Js,{})]})}const Ws=new Nt;ut(document.getElementById("root")).render(e.jsx(yt,{children:e.jsxs(wt,{client:Ws,children:[e.jsx(Xs,{}),e.jsx(vt,{})]})}));
