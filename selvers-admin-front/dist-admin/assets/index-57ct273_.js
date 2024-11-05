import{r as m,j as e}from"./react-GgNxsn6d.js";import{c as jt}from"./react-dom-QkaEqh-z.js";import{R as Ae,a as Ee,b as K,c as bt,d as ft,e as ut}from"./recoil-D-jwd32P.js";import{u as de,a as L,b as Fe,Q as gt,c as yt,R as Nt}from"./@tanstack-BdwTvngC.js";import{L as N,c as wt,R as vt}from"./react-router-dom-C9w1ezDZ.js";import{d as Ce,f as kt}from"./styled-components-PsS2HYcQ.js";import{d as pe,c as _e,O as At,f as xe}from"./react-router-xw_WwrXM.js";import{a as Ct}from"./axios-CCb-kr4I.js";import{u as we}from"./react-hook-form-rx1EpASO.js";import{t as Pe}from"./@hookform-BTSKDkxf.js";import{o as Te,s as ke,b as St,n as Yt}from"./zod-D7J-fcuR.js";import{C as Et}from"./react-spinners--gswIwTH.js";import{d as k,a as Ft,l as Pt}from"./dayjs-CN69eQz1.js";import{R as Tt}from"./react-quill-DpUnCd_1.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Va2Jh8gM.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./lodash-DSq4vvuY.js";import"./quill-DGDbI1on.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const x of r.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&t(x)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const rt=Ce.div`
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
`;function Ot({children:s}){const a=pe();return m.useEffect(()=>{window.scrollTo(0,0)},[a.pathname]),e.jsx("div",{children:s})}const zt=Ce.div`
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
`,Mt=Ae({key:"alretState",default:{isOpen:!1,text:""}}),me=Ae({key:"confirmState",default:{isOpen:!1,text:"",confirm:!1,okBtn:"취소하기"}}),$t=Ae({key:"toastState",default:{isOpen:!1,text:""}}),je=()=>{const[s,a]=Ee(Mt),n=m.useCallback(()=>{a(o=>({...o,isOpen:!1})),s!=null&&s.callBack&&s.callBack()},[a,s]),t=m.useCallback(({text:o,callback:r})=>a({isOpen:!0,text:o,callBack:r}),[a]);return{alretData:s,closeAlret:n,openAlret:t}},qt=()=>{const{alretData:s,closeAlret:a}=je();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsxs(zt,{children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{className:"modal_close",onClick:a}),e.jsx("div",{className:"modal_body",children:e.jsx("div",{className:"modal_tit",children:s.text})}),e.jsx("div",{className:"modal_btn",children:e.jsx("button",{className:"close_btn",onClick:a,children:"확인"})})]})]})})},Bt=Ce.div`
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
`,ue=()=>{const[s,a]=Ee(me),n=K(me),t=m.useCallback(({confirm:r,callback:x})=>{a(j=>({...j,isOpen:!1,confirm:r,callback:x}))},[a]),o=m.useCallback(({text:r,okBtn:x,type:j})=>a({isOpen:!0,text:r,confirm:!1,okBtn:x,type:j??""}),[a]);return{confirmData:s,confirmValue:n,closeConfirm:t,openConfirm:o}},Rt=()=>{const{confirmData:s,closeConfirm:a}=ue();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsxs(Bt,{children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{className:"modal_close",onClick:()=>a({confirm:!1})}),e.jsx("div",{className:"modal_body",children:e.jsx("div",{className:"modal_tit",children:s.text})}),e.jsxs("div",{className:"modal_btn",children:[e.jsx("button",{className:"confirm_btn",onClick:()=>a({confirm:!0}),children:s.okBtn}),e.jsx("button",{className:"close_btn",onClick:()=>a({confirm:!1}),children:"취소"})]})]})]})})},Oe=()=>{const[s,a]=Ee($t),n=m.useCallback(()=>{a({isOpen:!1,text:""})},[]),t=m.useCallback(o=>{a({isOpen:!0,text:o});const r=setTimeout(()=>{n()},3e3);return()=>clearTimeout(r)},[n]);return{toastData:s,openToast:t,closeToast:n}},It=Ce.div`
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
`,Ut=()=>{const{toastData:s}=Oe();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsx(It,{children:s.text})})},Ne=Ae({key:"user",default:{isLogin:!1,isLoginError:!1,data:{user_id:null,name:null,token:null,is_company:null,is_admin:null}},effects:[({setSelf:s,onSet:a})=>{const n=localStorage.getItem("token"),t=localStorage.getItem("user_id"),o=localStorage.getItem("user_type");n&&t&&s({isLogin:!0,isLoginError:!1,data:{user_id:JSON.parse(t),name:null,token:n,is_company:JSON.parse(o)}}),a((r,x,j)=>{j?(localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type")):(localStorage.setItem("user_id",JSON.stringify(r.data.user_id??"")),localStorage.setItem("token",r.data.token??""),localStorage.setItem("user_type",JSON.stringify(r.data.is_company)??""))})}]}),P=Ct.create({baseURL:"https://api-test.micemate.io"}),Qt=()=>{const s=bt(Ne);return de({mutationFn:async a=>(await P({method:"POST",url:"/api/auth",headers:{"Content-Type":"application/json"},data:{email:a.email,password:a.password,remember_me:a.remember}})).data,onSuccess:a=>{const n={isSuccess:a.success,isLogin:!0,isLoginError:!1,data:{user_id:a.data.user_id,name:a.data.name,token:a.data.token,is_company:a.data.is_company,is_admin:a.data.is_admin}};s({...n})}})},Vt=s=>L({queryKey:["token",s],queryFn:async()=>(await P({method:"GET",url:"/api/auth",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data,refetchInterval:108e5,enabled:!!s}),Lt=()=>{localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type"),location.reload()},Ht="/assets/main_logo_w-BBqllR6y.png",Jt=()=>{const s=localStorage.getItem("token"),a=K(Ne),n=ft(Ne),{data:t,isError:o}=Vt(s);return m.useEffect(()=>{o&&t===void 0&&n()},[t,o,n]),e.jsx("div",{className:"header",children:e.jsxs("div",{className:"inner",children:[e.jsx("h1",{className:"main_logo",children:e.jsx(N,{to:"/member/general",children:e.jsx("img",{src:Ht,alt:"마이스 메이트"})})}),a.isLogin&&e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"btn blue round",onClick:Lt,children:"로그아웃"})})]})})},Kt=()=>{const s=_e(),n=K(Ne).isLogin;return m.useEffect(()=>{!n&&location.pathname.indexOf("/login")<0&&s("/login")},[s]),e.jsxs(Ot,{children:[e.jsx(rt,{children:e.jsxs("div",{className:"wrap",children:[e.jsx(Jt,{}),e.jsx(At,{})]})}),e.jsx(Rt,{}),e.jsx(qt,{}),e.jsx(Ut,{})]})},Xt=Te({email:ke().email({message:"올바른 이메일을 입력해주세요."}),password:ke(),remember:St()}),Wt=()=>{var d,w,f,c;const[s,a]=m.useState(!1),n=K(Ne),t=Qt(),o=_e(),{register:r,handleSubmit:x,setError:j,watch:l,formState:{errors:p}}=we({resolver:Pe(Xt)}),_=l("email"),i=l("password");m.useEffect(()=>{_!=null&&_.trim()&&(i==null?void 0:i.trim())!==void 0?a(!0):a(!1)},[_,i]);const h=x(b=>{const y={email:b.email,password:b.password,remember:b.remember};t.mutate(y)});return m.useEffect(()=>{t.isSuccess&&(n.data.is_admin===!0?o("/member/general",{replace:!0}):(j("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}),localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type")))},[t.isSuccess,o,n.data.is_admin]),m.useEffect(()=>{var b,y,v;if(t.isError){const u=t.error;(v=(y=(b=u==null?void 0:u.response)==null?void 0:b.data)==null?void 0:y.data)!=null&&v.error?(u.response.data.data.error==="Unauthorised"&&j("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}),u.response.data.data.error==="Not authenticate your email"&&j("apiError",{type:"manual",message:"이메일 인증이 필요합니다."})):j("apiError",{type:"manual",message:"알 수 없는 오류가 발생했습니다."})}},[t.isError,t.error,j]),e.jsx(rt,{children:e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"login_pagi",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"login_tit",children:[e.jsx("b",{children:"LOGIN"}),e.jsx("span",{children:"로그인이 필요합니다."})]}),e.jsxs("form",{onSubmit:h,children:[e.jsxs("div",{className:"login_inp",children:[e.jsx("p",{className:"fs_16 fw_500",children:"아이디"}),e.jsx("input",{type:"text",id:"email",className:"w_full mt_12",placeholder:"아이디",autoComplete:"off",...r&&r("email")}),e.jsx("p",{className:"fs_16 fw_500 mt_25",children:"비밀번호"}),e.jsx("input",{type:"password",id:"password",className:"w_full mt_12",placeholder:"비밀번호",autoComplete:"off",...r&&r("password")}),p.email&&e.jsx("p",{className:"err_msg",children:(w=(d=p.email)==null?void 0:d.message)==null?void 0:w.toString()}),p.apiError&&e.jsx("p",{className:"err_msg",children:(c=(f=p.apiError)==null?void 0:f.message)==null?void 0:c.toString()})]}),e.jsxs("div",{className:"checkbox mt_26",children:[e.jsx("input",{id:"remember",type:"checkbox",...r&&r("remember")}),e.jsx("label",{htmlFor:"remember",children:"로그인유지"})]}),e.jsx("div",{className:"btn_wrap mt_15",children:e.jsx("button",{type:"submit",className:"btn white login_btn",disabled:!s,children:"로그인"})})]})]})})})})})},Zt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAATCAYAAAAgcwuHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgBvVjtcdswDKV6/V9tUHaCegSO4A2qTBBvIGUCewOpE6SdQN0g7QRSJ7A3QIgznEAwxC/78u5wsknwEXgUSdiVuSMAwPoH2qmqqr+mAJ6j9o+aeGbPM5sCUCw1fUWe06ojvGMyBRN523s7whL4vadAUnict1HhmVJ5UDxvrcIBxN2sJVAkgPd/hDS0EZ42gQOT+hHg2JBYMezvIoCS/GXFO2/PSjC7xOQlj1xNp3BYxW/0diCbRF8vB2cJoEw4wHnvcp+a2nliVuHhOCg86PMSilEkOIGyXUhQjuYWAfrUMbQSbwkGePoARw1LwR3r24rEbIDnwPxezA0CTFdKrvs65nsUSXFsIjyYaEfmWHufIiKb87iYM1cAGbhJgJj0K7W5nHkD3Hx7uAT/kfk3n0w++ErNJg3c7xs97Up/Lng8KUL+Y5/tZ/MxOEX6Z9lAq7n2Sv/2hc3O3CGWEgFiyZTAZrZ/MeVY3DK3CoDnR71aZr5jo4znpbJVxszenth3PDuaFT9Ln3F7/TdhfF/EArffAi7iqx52cH0LxHh2zPfA2gfW3kU4ZP2yKRWAFxVjxJef0r3oG1nfc4RnYr5b1r64ZiFcB7RXuRYKIO/THvRKcA9LWOHjRH+7Mtc+FKMQcgK9EpSle4PtFTlfSHF//jLr+On3+x8ixFOY/7CYvWEf7kHcr7hKXJQnP7ZTAsPX+TGD58HzDIIDz5hR+GEeeOXhgYn9jvUNnuPhMthCOhoxcZc4rjMBZPDsAhypvwbxzKj5wGIB2PhB8cUtMkJCdUY8DpavcjYPi2VSeJBjK8dU5o6A86uI6uJWmhOuR43j8m8QPmdz/nephCcpllccVWYfO4hrGQAAAABJRU5ErkJggg==",Gt=()=>{const s=localStorage.getItem("token"),a=pe();return L({queryKey:["userList",a.search],queryFn:async()=>(await P({method:"GET",url:`/api/users${a.search}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},Dt=()=>{const s=localStorage.getItem("token"),a=pe(),n=a.search?`${a.search}&company=company`:"?company=company";return L({queryKey:["coporateList",a.search],queryFn:async()=>(await P({method:"GET",url:`/api/users${n}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},ct=s=>{const a=localStorage.getItem("token");return L({queryKey:["userDetail",s],queryFn:async()=>(await P({method:"GET",url:`/api/users/${s}/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},ot=()=>de({mutationFn:async s=>{const a=localStorage.getItem("token");return(await P({method:"PUT",url:`/api/users/${s.id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`},data:s.modifyData})).data}}),dt=()=>{const s=localStorage.getItem("token");return de({mutationFn:async a=>(await P({method:"DELETE",url:"/api/users",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:a})).data})},pt=()=>de({mutationFn:async s=>(await P({method:"PUT",url:"/api/users/password/reset",headers:{"Content-Type":"application/json"},data:{email:s}})).data}),es=s=>L({queryKey:["userInformation",s],queryFn:async()=>(await P({method:"GET",url:`/api/users/${s.user_id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s.token}`}})).data}),ts=()=>{const s=localStorage.getItem("token");return de({mutationFn:async({id:a,accept:n})=>(await P({method:"PUT",url:`/api/users/${a}/company/accept`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:{accept:n}})).data})},ss=()=>de({mutationFn:async({token:s,user_id:a,formData:n})=>(await P({method:"POST",url:`/api/users/${a}/company/logo`,headers:{"Content-Type":"multipart/form-data",authorization:`Bearer ${s}`},data:n})).data}),J=()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem 0"},children:e.jsx(Et,{color:"#dddddd",loading:!0,size:50})}),as=()=>{const[s,a]=m.useState(!1),n=pe(),t=()=>{a(r=>!r)},o=r=>n.pathname.indexOf(r)>=0?"active":"";return m.useEffect(()=>{n.pathname.indexOf("/member")>=0&&a(!0)},[n.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["회원관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(N,{to:"/member/general",className:`depth02 ${o("/member/general")}`,children:"회원 리스트"}),e.jsx(N,{to:"/member/corporate",className:`depth02 ${o("/member/corporate")}`,children:"기업회원 리스트"})]})]})},is=()=>{const[s,a]=m.useState(!1),n=pe(),t=()=>{a(r=>!r)},o=r=>n.pathname.indexOf(r)>=0?"active":"";return m.useEffect(()=>{n.pathname.indexOf("/event")>=0&&a(!0)},[n.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["행사관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsx("div",{className:"depth02_list active",children:e.jsx(N,{to:"/event",className:`depth02 ${o("/event")}`,children:"행사 리스트"})})]})},ns=()=>{const s=localStorage.getItem("token"),a=pe(),n=a.search?`${a.search}&order=desc`:"?order=desc";return L({queryKey:["eventManage",a.search],queryFn:async()=>(await P({method:"GET",url:`/api/events/manage${n}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},params:{}})).data})},ls=()=>{const s=localStorage.getItem("token");return de({mutationFn:async({ids:a})=>(await P({method:"DELETE",url:"/api/events/manage",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:{ids:a}})).data})},rs=(s,a)=>{const n=localStorage.getItem("token");return L({queryKey:["usersEventList",s,a],queryFn:async()=>(await P({method:"GET",url:`/api/users/${s}/events?type=${a}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${n}`}})).data,enabled:!!s})},xt=s=>{const a=localStorage.getItem("token");return L({queryKey:["ApplyRegisterState",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},Se=s=>{const a=localStorage.getItem("token");return L({queryKey:["ApplyRegisterGeneral",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit/general`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},cs=s=>{const a=localStorage.getItem("token");return L({queryKey:["ApplyRegisterDetail",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},os=s=>{const a=localStorage.getItem("token");return L({queryKey:["ApplyRegisterInfo",s],queryFn:async()=>(await P({method:"GET",url:`/api/events/${s}/edit/application`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},ds=()=>{const s=localStorage.getItem("token");return de({mutationFn:async({id:a,data:n})=>(await P({method:"POST",url:`/api/events/${a}/edit/accept`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:n})).data})},ps=()=>{var j;const{id:s}=xe(),[a,n]=m.useState(!0),t=pe(),{data:o}=Se(s?Number(s):void 0),r=()=>{n(l=>!l)},x=l=>t.pathname.indexOf(l)>=0?"active":"";return e.jsxs("div",{children:[e.jsx("div",{className:"title_tag",children:(j=o==null?void 0:o.data)==null?void 0:j.title}),e.jsx("ul",{className:"lnb02",children:e.jsxs("li",{children:[e.jsxs("p",{onClick:r,className:`depth01 ${a?"active":""}`,style:{cursor:"pointer"},children:["행사 상세설정",e.jsx("i",{className:"arrow_b_icon"})]}),a&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(N,{to:`/event/apply/${s}/general`,className:`depth02 ${x(`/event/apply/${s}/general`)}`,children:"기본정보"}),e.jsx(N,{to:`/event/apply/${s}/detail`,className:`depth02 ${x(`/event/apply/${s}/detail`)}`,children:"상세페이지"}),e.jsx(N,{to:`/event/apply/${s}/information`,className:`depth02 ${x(`/event/apply/${s}/information`)}`,children:"모집정보"})]})]})})]})},R=()=>{var f,c;const[s,a]=m.useState(),[n,t]=m.useState(null),[o,r]=m.useState(""),x=pe(),j=localStorage.getItem("token"),l=localStorage.getItem("user_id"),p=ss(),_={token:j,user_id:l},{data:i,isLoading:h,isError:d}=es(_);m.useEffect(()=>{x.pathname.indexOf("/event/apply")>=0?r("type02"):r("type01")},[x.pathname]),m.useEffect(()=>{var b,y;t(`https://api-test.micemate.io/storage/${(y=(b=i==null?void 0:i.data)==null?void 0:b.company)==null?void 0:y.logo}`)},[i==null?void 0:i.data]),m.useEffect(()=>{if(s){const b=new FormData;b.append("logo",s),p.mutate({token:_==null?void 0:_.token,user_id:_==null?void 0:_.user_id,formData:b},{onSuccess:()=>{console.log("성공")},onError:y=>{console.log(y)}})}},[s]);const w=b=>{var v;const y=(v=b.target.files)==null?void 0:v[0];if(y){if(y.size>1048576||!["image/jpeg","image/png"].includes(y.type))return;const Y=URL.createObjectURL(y);a(y),t(Y)}};return e.jsxs("div",{className:"lnb_area",children:[o==="type01"&&e.jsxs("ul",{className:"lnb01",children:[e.jsx(as,{}),e.jsx(is,{})]}),o==="type02"&&e.jsxs("div",{className:"lnb02_wrap",children:[h||d?e.jsxs(e.Fragment,{children:[h&&e.jsx(J,{}),d&&e.jsx("div",{children:"정보를 불러오지 못했습니다."})]}):e.jsxs("div",{className:"user_area",children:[e.jsx("input",{id:"profile",type:"file",className:"hide",onChange:b=>{w(b)}}),e.jsx("label",{htmlFor:"profile",children:e.jsx("div",{className:"img",children:e.jsx("img",{src:n||Zt})})}),e.jsxs("div",{className:"user_name",children:[e.jsx("div",{className:"name",children:(c=(f=i==null?void 0:i.data)==null?void 0:f.company)==null?void 0:c.company_name}),e.jsx("div",{className:"admini",children:"마스터"})]})]}),e.jsx(ps,{})]})]})},xs=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],ht=({setFilterData:s,resetFilter:a,resetDate:n=null,userType:t=[]})=>{const[o,r]=m.useState(null),x=k().format("YYYY-MM-DD"),{register:j,handleSubmit:l,setValue:p,reset:_,watch:i}=we(),h=c=>{let b="",y=k().format("YYYY-MM-DD");switch(c){case"today":b=k().format("YYYY-MM-DD");break;case"yesterday":b=k().subtract(1,"day").format("YYYY-MM-DD"),y=b;break;case"7days":b=k().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":b=k().subtract(1,"month").format("YYYY-MM-DD");break;case"all":b="",y="";break}p("start",b),p("end",y),r(c)},d=()=>{r(null)},w=c=>{s(c)},f=()=>{_(),a(),h(n),setTimeout(()=>{w(i())},10)};return m.useEffect(()=>{h(n),w(i())},[n]),e.jsxs("form",{onSubmit:l(w),children:[e.jsx("div",{className:"table_wrap ft_table",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[xs.map(c=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:c.type,onChange:()=>h(c.type),checked:o===c.type,className:"hide"}),e.jsx("label",{htmlFor:c.type,className:"btn border_w",children:c.value})]},c.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...j("start"),id:"start",onClick:d,onChange:c=>p("start",c.target.value),defaultValue:x,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...j("end"),id:"end",onClick:d,onChange:c=>p("end",c.target.value),defaultValue:x,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...j("type"),className:"btn border_w",children:t.map(c=>e.jsx("option",{value:c.type,children:c.value},c.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...j("search"),className:"small search w_548"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{type:"submit",className:"btn small light_blue",children:"검색"}),e.jsx("button",{type:"button",className:"btn small gray",onClick:f,children:"초기화"})]})]})},hs=[{type:0,text:"인증 대기",class:"col_gray"},{type:1,text:"일반 회원",class:""},{type:2,text:"탈퇴 회원",class:"col_gray"}],ms=({userList:s,checkedList:a,setCheckedList:n})=>{const[t,o]=m.useState(!1),r=l=>{n(p=>p.includes(l)?p.filter(_=>_!==l):[...p,l])},x=()=>{if(t)n([]);else{const l=s.map(p=>p.id);n(l)}o(!t)},j=l=>{const p=hs.find(_=>_.type===l);return p||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:x,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"아이디"}),e.jsx("th",{children:"휴대전화"}),e.jsx("th",{children:"생일"}),e.jsx("th",{children:"수신동의"}),e.jsx("th",{}),e.jsx("th",{children:"회원유형"})]})}),e.jsx("tbody",{children:s&&s.map(l=>{const{text:p,class:_}=j(l.state);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:l.id,checked:a.includes(l.id),onChange:()=>r(l.id),type:"checkbox"}),e.jsx("label",{htmlFor:l.id})]})}),e.jsx("td",{children:(l==null?void 0:l.created_at)??"-"}),e.jsx("td",{children:(l==null?void 0:l.name)??"-"}),e.jsx("td",{children:e.jsx(N,{to:`/member/general/detail/${l.id}`,children:(l==null?void 0:l.email)??"-"})}),e.jsx("td",{children:(l==null?void 0:l.contact)??"-"}),e.jsx("td",{children:(l==null?void 0:l.birth)??"-"}),e.jsx("td",{children:(l==null?void 0:l.agree)===!0?"동의":(l==null?void 0:l.agree)===!1?"동의안함":"-"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("span",{className:_,children:p})})]},l.id)})})]})})},ze=({total:s,page:a,setPage:n,size:t=20})=>{const o=Math.ceil(s/t),x=(Math.ceil(a/t)-1)*t+1,j=Math.min(x+t-1,o),l=i=>{n(i)},p=()=>{x>1&&l(x-1)},_=()=>{j<o&&l(j+1)};return e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("button",{onClick:p,disabled:x===1,className:"pagi_prev"}),Array.from({length:j-x+1},(i,h)=>e.jsx("button",{onClick:()=>l(x+h),className:a===x+h?"num active":"num",children:x+h},h)),e.jsx("button",{type:"button",onClick:_,disabled:j===o,className:"pagi_next"})]})},_s=()=>{var v,u,S,Y,O,E,B,z;const s=_e(),a=Fe(),{openConfirm:n}=ue(),{openAlret:t}=je(),o=K(me),[r,x]=m.useState({}),[j,l]=m.useState(),[p,_]=m.useState([]),[i,h]=m.useState(1),{data:d}=Gt(),w=dt(),f=()=>{x({}),h(1),s("?")},c=()=>{x({...r,order:r.order==="asc"?"desc":"asc"})},b=()=>{if(p.length<=0)return t({text:"목록을 선택해주세요."});n({text:`선택 [${p.length}건]을 [탈퇴]
처리 하시겠습니까?`,okBtn:"탈퇴"})},y=()=>{if(p.length<=0)return t({text:"목록을 선택해주세요."});n({text:`선택 [${p.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"삭제"})};return m.useEffect(()=>{o.confirm===!0&&p.length>0&&w.mutate({delete:o.okBtn==="삭제",ids:p},{onSuccess:()=>{t({text:`${o.okBtn}가 완료되었습니다.`}),_([]),a.invalidateQueries({queryKey:["userList"]})}})},[o.confirm]),m.useEffect(()=>{const F={page:i??1,type:r.type&&r.type!=="none"?r.type:void 0,start:r.start??void 0,end:r.end??void 0,search:r.search??void 0,order:r.order??"desc"},U=Object.fromEntries(Object.entries(F).filter(([I,C])=>typeof C=="string"||Array.isArray(C)?C!==""&&C.length>0:C!=null).map(([I,C])=>[I,String(C)])),Q=new URLSearchParams(U).toString();l(Q)},[r,i]),m.useEffect(()=>{j&&(s(`?${j}`),a.invalidateQueries({queryKey:["userList"]}))},[j]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(N,{className:"item",to:"/member/general",children:"회원 리스트"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(ht,{setFilterData:x,resetFilter:f,resetDate:"7days",userType:[{value:"회원유형",type:"none"},{value:"일반회원",type:1},{value:"탈퇴회원",type:2}]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체 "}),e.jsx("span",{className:"col_gray",children:"검색결과 "}),e.jsxs("span",{className:"fs_16",children:["[총 회원수"," ",(v=d==null?void 0:d.data)!=null&&v.total?(S=Number((u=d==null?void 0:d.data)==null?void 0:u.total))==null?void 0:S.toLocaleString():0,"명]"]})]}),e.jsx("button",{type:"button",className:"sort_btn",onClick:c,children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:b,children:"탈퇴"}),e.jsx("button",{type:"button",className:"ml_22",onClick:y,children:"삭제"})]})]}),((O=(Y=d==null?void 0:d.data)==null?void 0:Y.items)==null?void 0:O.length)>0?e.jsx(ms,{userList:(E=d==null?void 0:d.data)==null?void 0:E.items,checkedList:p,setCheckedList:_}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 회원이 없습니다"}),((B=d==null?void 0:d.data)==null?void 0:B.total)>20&&e.jsx(ze,{total:(z=d==null?void 0:d.data)==null?void 0:z.total,page:i,setPage:h})]})})]})},js=()=>L({queryKey:["category"],queryFn:async()=>(await P.get("/api/categories")).data.data}),mt=(s,a,n)=>{let t=s.target.value.replace(/\D/g,"");t.length>7?t=t.slice(0,3)+"-"+t.slice(3,7)+"-"+t.slice(7,11):t.length>3&&(t=t.slice(0,3)+"-"+t.slice(3,7)),a(n,t)};k.extend(Ft);k.extend(Pt);k.locale("ko");const ye=s=>k(s).format("MM월DD일(ddd) HH:mm"),bs=Te({contact:ke().nullable().optional(),interests:Yt().array()}),ve=[{type:"1",text:"신청 행사"},{type:"2",text:"취소 내역"},{type:"3",text:"관심 행사"},{type:"4",text:"지난 행사"}],fs=()=>{var z,F,U,Q,I,C,X,W,Z,G,D,ee,te,se,ae,ie,ne,le,re,ce,oe,A,q;const{id:s}=xe(),{register:a,handleSubmit:n,setValue:t,formState:{errors:o}}=we({resolver:Pe(bs)}),[r,x]=m.useState(!1),[j,l]=m.useState((z=ve==null?void 0:ve[0])==null?void 0:z.type),[p,_]=m.useState([]),[i,h]=m.useState(!1),{openToast:d}=Oe(),{openAlret:w}=je(),{data:f}=js(),{data:c,isLoading:b,isError:y}=ct(s?Number(s):void 0),{data:v}=rs(s?Number(s):void 0,j),u=pt(),S=ot(),Y=()=>{var M,$;const g=($=(M=c==null?void 0:c.data)==null?void 0:M.terms_of_uses)==null?void 0:$.find(be=>be.id===2);return g||null},O=(g,M)=>{const $=M?[...p,g]:p.filter(be=>be!==g);_($),t("interests",$)},E=()=>{var g;(g=c==null?void 0:c.data)!=null&&g.email&&(h(!0),u.mutate(c.data.email,{onSuccess:()=>{h(!1),w({text:"메일로 임시 비밀번호를 발송했습니다."})},onError:M=>{console.log(M)}}))},B=n(g=>{if(!s||!g.contact&&!r)return;const M={id:s?Number(s):void 0,modifyData:{interests:g.interests}};g.contact&&(M.modifyData.contact=g.contact),S.mutate(M,{onSuccess:()=>{d("수정되었습니다.")},onError:$=>{console.log($)}})});return m.useEffect(()=>{var g;c!==void 0&&!b&&(t("contact",((g=c==null?void 0:c.data)==null?void 0:g.contact)??""),t("interests",c.data.interests),_(c.data.interests))},[c,b,t]),b?e.jsx(J,{}):y?(alert("데이터가 없습니다."),window.history.back(),null):e.jsxs(e.Fragment,{children:[i&&e.jsx("div",{className:"loading_wrap",children:e.jsx(J,{})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(N,{className:"item",to:"/member/general",children:"회원 리스트"}),e.jsx("p",{className:"item",children:"회원 상세정보"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"tit",children:"기본정보"})}),e.jsxs("form",{onSubmit:B,children:[e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{children:((F=c==null?void 0:c.data)==null?void 0:F.name)??"-"}),e.jsx("th",{children:"출생년도"}),e.jsx("td",{children:((U=c==null?void 0:c.data)==null?void 0:U.birth)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{children:((Q=c==null?void 0:c.data)==null?void 0:Q.email)??"-"}),e.jsx("th",{children:"성별"}),e.jsx("td",{children:((I=c==null?void 0:c.data)==null?void 0:I.sex)===!0?"여":((C=c==null?void 0:c.data)==null?void 0:C.sex)===!1?"남":"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"비밀번호"}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"btn border_w w_136",onClick:E,children:"임시 비밀번호 생성"})}),e.jsx("th",{children:"비밀번호 변경일"}),e.jsx("td",{children:e.jsx("span",{className:"col_gray",children:(X=c==null?void 0:c.data)!=null&&X.password_updated_at?k((W=c==null?void 0:c.data)==null?void 0:W.password_updated_at).format("YYYY-MM-DD hh:mm:ss"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원구분"}),e.jsx("td",{children:e.jsx("select",{className:"btn border_w w_136",disabled:!0,children:e.jsx("option",{value:"",children:"일반회원"})})}),e.jsx("th",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"휴대폰번호"}),e.jsxs("td",{children:[e.jsx("input",{id:"contact",className:"small w_136",type:"text",...a&&a("contact"),onChange:g=>{mt(g,t,"contact")}}),((Z=o.contact)==null?void 0:Z.message)&&e.jsx("p",{className:"err_msg",children:(D=(G=o.contact)==null?void 0:G.message)==null?void 0:D.toString()})]}),e.jsx("th",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원가입일"}),e.jsx("td",{children:e.jsx("span",{className:"col_gray",children:(ee=c==null?void 0:c.data)!=null&&ee.created_at?k((te=c==null?void 0:c.data)==null?void 0:te.created_at).format("YYYY-MM-DD hh:mm:ss"):"-"})}),e.jsx("th",{}),e.jsx("td",{})]})]})]})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"수신동의 및 개인정보 이용 동의"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["마케팅 정보 수신",e.jsx("br",{}),"동의 (선택)"]}),e.jsx("td",{className:"ver_top",children:((se=Y())==null?void 0:se.agree)===!1?"동의 이력 없음":((ae=Y())==null?void 0:ae.agree)===!0?`동의함 (동의일: ${(ie=Y())!=null&&ie.updated_at?k((ne=Y())==null?void 0:ne.updated_at).format("YYYY-MM-DD"):"-"})`:"-"})]})})]})}),r&&e.jsxs("div",{id:"moreInfo",children:[e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"추가정보"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ver_top",children:"관심분야"}),e.jsxs("td",{children:[f&&e.jsx("div",{className:"dis_flex row_item_7",children:f.map(g=>e.jsxs("div",{className:"checkbox item",children:[e.jsx("input",{type:"checkbox",id:`checkbox-${g.id}`,checked:p.includes(g.id),onChange:M=>{O(g.id,M.target.checked)}}),e.jsx("label",{htmlFor:`checkbox-${g.id}`,children:g.name})]},g.id))}),o.interests&&e.jsx("p",{className:"err_msg",children:(re=(le=o.interests)==null?void 0:le.message)==null?void 0:re.toString()})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ver_top",children:"행사 관리"}),e.jsxs("td",{children:[e.jsx("div",{children:e.jsx("select",{className:"btn border_w w_136",value:j,onChange:g=>l(g.target.value),children:ve.map(g=>e.jsx("option",{value:g.type,children:g.text},g.type))})}),((oe=(ce=v==null?void 0:v.data)==null?void 0:ce.items)==null?void 0:oe.length)>0?e.jsx("div",{className:"table_wrap min_h_300",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"130px"}),e.jsx("col",{width:"240px"}),e.jsx("col",{width:""}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:""})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"행사번호"}),e.jsx("th",{children:"행사명"}),e.jsx("th",{}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 신청일"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:(q=(A=v==null?void 0:v.data)==null?void 0:A.items)==null?void 0:q.map(g=>e.jsxs("tr",{children:[e.jsx("td",{children:g.id??"-"}),e.jsx("td",{children:g.title??"-"}),e.jsx("td",{}),e.jsxs("td",{children:[g.event_start_date&&ye(g.event_start_date)," ~ ",g.event_end_date&&ye(g.event_end_date)]}),e.jsx("td",{children:g.date?ye(g.date):"-"}),e.jsx("td",{})]},g.id))})]})}):e.jsx("div",{className:"table_wrap min_h_300 pt_22",children:"행사 데이터가 없습니다."})]})]})]})]})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap",children:!r&&e.jsx("button",{type:"button",className:"btn gray",onClick:()=>x(!0),children:"더보기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(N,{to:"/member/general",className:"btn blue",children:"취소"}),e.jsx("button",{type:"submit",className:"btn blue",children:"수정"})]})]})]})]})})]})]})},us=[{type:0,text:"승인 대기",class:"btn small light_blue cursor_default"},{type:1,text:"미승인 기업",class:"col_gray"},{type:2,text:"승인 기업",class:""},{type:3,text:"탈퇴 기업",class:"col_gray"}],gs=({userList:s,checkedList:a,setCheckedList:n})=>{const[t,o]=m.useState(!1),r=l=>{n(p=>p.includes(l)?p.filter(_=>_!==l):[...p,l])},x=()=>{if(t)n([]);else{const l=s.map(p=>p.id);n(l)}o(!t)},j=(l,p)=>{const _=us.find(i=>l!==2?i.type===p:i.type===3);return _||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"130px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:x,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"아이디"}),e.jsx("th",{children:"회사명"}),e.jsx("th",{children:"요청 날짜"}),e.jsx("th",{children:"회원 상태"})]})}),e.jsx("tbody",{children:s&&s.map(l=>{const{text:p,class:_}=j(l.state,l.accept);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:l.id,checked:a.includes(l.id),onChange:()=>r(l.id),type:"checkbox"}),e.jsx("label",{htmlFor:l.id})]})}),e.jsx("td",{children:(l==null?void 0:l.created_at)??"-"}),e.jsx("td",{children:(l==null?void 0:l.name)??"-"}),e.jsx("td",{children:e.jsx(N,{to:`/member/corporate/detail/${l.id}`,children:(l==null?void 0:l.email)??"-"})}),e.jsx("td",{children:(l==null?void 0:l.company_name)??"-"}),e.jsx("td",{children:(l==null?void 0:l.requested_at)??"-"}),e.jsx("td",{children:e.jsx("span",{className:_,children:p})})]},l.id)})})]})})},ys=()=>{var v,u,S,Y,O,E,B,z;const s=_e(),a=Fe(),{openConfirm:n}=ue(),{openAlret:t}=je(),o=K(me),[r,x]=m.useState({}),[j,l]=m.useState(),[p,_]=m.useState([]),[i,h]=m.useState(1),{data:d}=Dt(),w=dt(),f=()=>{x({}),h(1),s("?")},c=()=>{x({...r,order:r.order==="asc"?"desc":"asc"})},b=()=>{if(p.length<=0)return t({text:"목록을 선택해주세요."});n({text:`선택 [${p.length}건]을 [탈퇴]
처리 하시겠습니까?`,okBtn:"확인",type:"탈퇴"})},y=()=>{if(p.length<=0)return t({text:"목록을 선택해주세요."});n({text:`선택 [${p.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"확인",type:"삭제"})};return m.useEffect(()=>{o.confirm===!0&&p.length>0&&w.mutate({delete:o.type==="삭제",ids:p},{onSuccess:()=>{t({text:`${o.type}가 완료되었습니다.`}),_([]),a.invalidateQueries({queryKey:["coporateList"]})}})},[o.confirm]),m.useEffect(()=>{const F={page:i??1,type:r.type&&r.type!=="none"?r.type:void 0,start:r.start??void 0,end:r.end??void 0,search:r.search??void 0,order:r.order??"desc"},U=Object.fromEntries(Object.entries(F).filter(([I,C])=>typeof C=="string"||Array.isArray(C)?C!==""&&C.length>0:C!=null).map(([I,C])=>[I,String(C)])),Q=new URLSearchParams(U).toString();l(Q)},[r,i]),m.useEffect(()=>{j&&(s(`?${j}`),a.invalidateQueries({queryKey:["userList"]}))},[j]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(N,{className:"item",to:"/member/general",children:"기업회원 리스트"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(ht,{setFilterData:x,resetFilter:f,resetDate:"7days",userType:[{value:"회원유형",type:"none"},{value:"승인대기",type:1},{value:"승인기업",type:2},{value:"탈퇴기업",type:3}]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsxs("span",{className:"fs_16",children:["[총 회원수",(v=d==null?void 0:d.data)!=null&&v.total?(S=Number((u=d==null?void 0:d.data)==null?void 0:u.total))==null?void 0:S.toLocaleString():0,"명]"]})]}),e.jsx("button",{type:"button",className:"sort_btn",onClick:c,children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:b,children:"탈퇴"}),e.jsx("button",{type:"button",className:"ml_22",onClick:y,children:"삭제"})]})]}),((O=(Y=d==null?void 0:d.data)==null?void 0:Y.items)==null?void 0:O.length)>0?e.jsx(gs,{userList:(E=d==null?void 0:d.data)==null?void 0:E.items,checkedList:p,setCheckedList:_}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 회원이 없습니다"}),((B=d==null?void 0:d.data)==null?void 0:B.total)>20&&e.jsx(ze,{total:(z=d==null?void 0:d.data)==null?void 0:z.total,page:i,setPage:h})]})})]})},Ye="https://api-test.micemate.io/storage",Ns="https://www-test.micemate.io/detail",ws=Te({contact:ke().nullable().optional()}),vs=()=>{var Y,O,E,B,z,F,U,Q,I,C,X,W,Z,G,D,ee,te,se,ae,ie,ne,le,re,ce,oe,A,q,g,M,$,be,Me,$e,qe,Be,Re,Ie,Ue,Qe,Ve,Le,He,Je,Ke,Xe,We,Ze,Ge,De,et;const{id:s}=xe(),{register:a,handleSubmit:n,setValue:t,formState:{errors:o}}=we({resolver:Pe(ws)}),[r,x]=m.useState(!1),{openToast:j}=Oe(),{openAlret:l}=je(),{openConfirm:p}=ue(),_=K(me),{data:i,isLoading:h,isError:d}=ct(s?Number(s):void 0),w=pt(),f=ot(),c=ts(),b=()=>{var V,H;const T=(H=(V=i==null?void 0:i.data)==null?void 0:V.terms_of_uses)==null?void 0:H.find(he=>he.id===2);return T||null},y=()=>{var T;(T=i==null?void 0:i.data)!=null&&T.email&&(x(!0),w.mutate(i.data.email,{onSuccess:()=>{x(!1),l({text:"메일로 임시 비밀번호를 발송했습니다."})},onError:V=>{console.log(V)}}))},v=T=>{var H;const V=T?"승인":"미승인";p({text:`[${((H=i==null?void 0:i.data)==null?void 0:H.name)??"-"}]회원 기업회원으로 전환을 ${V}
처리 하시겠습니까?`,okBtn:"확인",type:V})};m.useEffect(()=>{_.confirm===!0&&c.mutate({id:s?Number(s):void 0,accept:_.type==="승인"},{onSuccess:()=>{l({text:`${_.type} 처리되었습니다.`,callback:()=>{location.reload()}})},onError:T=>{console.log(T)}})},[_.confirm]);const u=n(T=>{if(!s||!T.contact)return;const V={id:s?Number(s):void 0,modifyData:{...T}};f.mutate(V,{onSuccess:()=>{j("수정되었습니다.")},onError:H=>{console.log(H)}})}),S=()=>{var V,H;const T=`${Ye}/${(H=(V=i==null?void 0:i.data)==null?void 0:V.company)==null?void 0:H.company_id_file}`;fetch(T).then(he=>he.blob()).then(he=>{var st,at;const tt=window.URL.createObjectURL(new Blob([he])),ge=document.createElement("a");ge.href=tt,ge.download=((at=(st=i==null?void 0:i.data)==null?void 0:st.company)==null?void 0:at.company_id_file.split("/").pop())||"download",document.body.appendChild(ge),ge.click(),window.URL.revokeObjectURL(tt),document.body.removeChild(ge)}).catch(he=>{console.error("파일 다운로드 오류:",he)})};return m.useEffect(()=>{var T;i!==void 0&&!h&&t("contact",((T=i==null?void 0:i.data)==null?void 0:T.contact)??"")},[i,h,t]),h?e.jsx(J,{}):d?(alert("데이터가 없습니다."),window.history.back(),null):e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{className:"loading_wrap",children:e.jsx(J,{})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(N,{className:"item",to:"/member/corporate",children:"기업회원 리스트"}),e.jsx("p",{className:"item",children:"기업회원 상세정보"}),((O=(Y=i==null?void 0:i.data)==null?void 0:Y.company)==null?void 0:O.accept)===0&&e.jsx("i",{className:"btn light_blue small",children:"승인대기"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"tit",children:"기본정보"})}),e.jsxs("form",{onSubmit:u,children:[e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"182px"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"160px"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{colSpan:3,children:((E=i==null?void 0:i.data)==null?void 0:E.name)??"-"}),e.jsx("th",{children:"출생년도"}),e.jsx("td",{colSpan:3,children:((B=i==null?void 0:i.data)==null?void 0:B.birth)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{colSpan:3,children:((z=i==null?void 0:i.data)==null?void 0:z.email)??"-"}),e.jsx("th",{children:"성별"}),e.jsx("td",{colSpan:3,children:((F=i==null?void 0:i.data)==null?void 0:F.sex)===!0?"여":((U=i==null?void 0:i.data)==null?void 0:U.sex)===!1?"남":"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"비밀번호"}),e.jsx("td",{colSpan:3,children:e.jsx("button",{className:"btn border_w w_136",onClick:y,disabled:((I=(Q=i==null?void 0:i.data)==null?void 0:Q.company)==null?void 0:I.accept)!==2,children:"임시 비밀번호 생성"})}),e.jsx("th",{children:"비밀번호 변경일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:(C=i==null?void 0:i.data)!=null&&C.password_updated_at?k((X=i==null?void 0:i.data)==null?void 0:X.password_updated_at).format("YYYY-MM-DD hh:mm:ss"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원구분"}),e.jsx("td",{colSpan:3,children:e.jsx("select",{className:"btn border_w w_136",disabled:!0,children:e.jsx("option",{value:"",children:"기업회원"})})}),e.jsx("th",{children:"회사명"}),e.jsx("td",{className:"pr_0",children:((Z=(W=i==null?void 0:i.data)==null?void 0:W.company)==null?void 0:Z.company_name)??"-"}),e.jsx("th",{children:"기업 전환일"}),e.jsx("td",{className:"pr_0",children:e.jsx("span",{className:"col_gray",children:(D=(G=i==null?void 0:i.data)==null?void 0:G.company)!=null&&D.accepted_at?k((te=(ee=i==null?void 0:i.data)==null?void 0:ee.company)==null?void 0:te.accepted_at).format("YYYY-MM-DD"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"휴대번호"}),e.jsxs("td",{colSpan:3,children:[e.jsx("input",{id:"contact",className:"small w_136",type:"text",...a&&a("contact"),onChange:T=>{mt(T,t,"contact")},disabled:((ae=(se=i==null?void 0:i.data)==null?void 0:se.company)==null?void 0:ae.accept)!==2}),((ie=o.contact)==null?void 0:ie.message)&&e.jsx("p",{className:"err_msg",children:(le=(ne=o.contact)==null?void 0:ne.message)==null?void 0:le.toString()})]}),e.jsx("th",{children:"담당자"}),e.jsx("td",{className:"pr_0",children:((ce=(re=i==null?void 0:i.data)==null?void 0:re.company)==null?void 0:ce.name)??"-"}),e.jsx("th",{children:"소속 부서/ 직책"}),e.jsxs("td",{className:"pr_0",children:[((A=(oe=i==null?void 0:i.data)==null?void 0:oe.company)==null?void 0:A.department)??"-"," /"," ",((g=(q=i==null?void 0:i.data)==null?void 0:q.company)==null?void 0:g.position)??"-"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원가입일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:(M=i==null?void 0:i.data)!=null&&M.created_at?k(($=i==null?void 0:i.data)==null?void 0:$.created_at).format("YYYY-MM-DD hh:mm:ss"):"-"})}),e.jsx("th",{children:"사업자등록번호"}),e.jsx("td",{className:"pr_0",children:((Me=(be=i==null?void 0:i.data)==null?void 0:be.company)==null?void 0:Me.company_id)??"-"}),e.jsx("th",{children:"연락처"}),e.jsx("td",{className:"pr_0",children:((qe=($e=i==null?void 0:i.data)==null?void 0:$e.company)==null?void 0:qe.contact)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"사업자등록"}),e.jsx("td",{colSpan:((Re=(Be=i==null?void 0:i.data)==null?void 0:Be.company)==null?void 0:Re.accept)===1?3:7,children:e.jsxs("div",{className:"dis_flex gap32",children:[e.jsx("span",{className:"col_gray",children:((Ue=(Ie=i==null?void 0:i.data)==null?void 0:Ie.company)==null?void 0:Ue.company_id_file_name)??"-"}),((Qe=i==null?void 0:i.data)==null?void 0:Qe.company)&&e.jsx("button",{type:"button",className:"btn border_w",onClick:S,children:"저장"})]})}),((Le=(Ve=i==null?void 0:i.data)==null?void 0:Ve.company)==null?void 0:Le.accept)===1&&e.jsxs(e.Fragment,{children:[e.jsx("th",{children:"탈퇴일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:((He=i==null?void 0:i.data)==null?void 0:He.deleted_at)??"-"})})]})]})]})]})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"수신동의 및 개인정보 이용 동의"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["마케팅 정보 수신",e.jsx("br",{}),"동의 (선택)"]}),e.jsx("td",{className:"ver_top",children:((Je=b())==null?void 0:Je.agree)===!1?"동의 이력 없음":((Ke=b())==null?void 0:Ke.agree)===!0?`동의함 (동의일: ${(Xe=b())!=null&&Xe.updated_at?k((We=b())==null?void 0:We.updated_at).format("YYYY-MM-DD"):"-"})`:"-"})]})})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_190",children:[e.jsx("div",{className:"btn_wrap"}),e.jsx("div",{className:"btn_wrap gap23",children:((Ge=(Ze=i==null?void 0:i.data)==null?void 0:Ze.company)==null?void 0:Ge.accept)===0?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn gray",onClick:()=>v(!1),children:"미승인"}),e.jsx("button",{type:"button",className:"btn light_blue",onClick:()=>v(!0),children:"승인"})]}):((et=(De=i==null?void 0:i.data)==null?void 0:De.company)==null?void 0:et.accept)===2?e.jsxs(e.Fragment,{children:[e.jsx(N,{to:"/member/corporate",className:"btn blue",children:"취소"}),e.jsx("button",{type:"submit",className:"btn blue",children:"수정"})]}):e.jsx(N,{to:"/member/corporate",className:"btn blue",children:"확인"})})]})]})]})})]})]})},ks=({boardData:s})=>{const a={ongoing:{title:"진행중인 행사",unit:"개"},pending:{title:"행사 등록 승인대기",unit:"개"},editing:{title:"오늘 신규 등록 행사",unit:"개"},total:{title:"누적 행사 수",unit:"건"}};return e.jsx("div",{className:"dashboard_panel_wrap",children:e.jsx("ul",{children:s&&Object.entries(s).map(([n,{value:t,today:o}])=>e.jsxs("li",{children:[e.jsx("div",{className:"tit",children:a[n].title}),e.jsxs("div",{className:"num_wrap",children:[e.jsx("span",{className:"num",children:n==="editing"?o?Number(o).toLocaleString():0:t?Number(t).toLocaleString():0}),e.jsx("span",{children:a[n].unit})]}),n!=="editing"?o>0&&e.jsx("div",{className:"increase",children:`+${o?Number(o).toLocaleString():0}`}):null]},n))})})},As=[{value:"등록일",type:"1"},{value:"행사 개설일",type:"2"}],Cs=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],Ss=[{value:"전체",type:"none"},{value:"승인대기",type:"1"},{value:"수정중",type:"2"},{value:"모집대기",type:"3"},{value:"모집중",type:"4"},{value:"마감",type:"5"},{value:"행사종료",type:"6"}],Ys=({setFilterData:s,resetFilter:a,resetDate:n=null})=>{const[t,o]=m.useState(null),r=k().format("YYYY-MM-DD"),{register:x,handleSubmit:j,setValue:l,reset:p,watch:_}=we(),i=f=>{let c="",b=k().format("YYYY-MM-DD");switch(f){case"today":c=k().format("YYYY-MM-DD");break;case"yesterday":c=k().subtract(1,"day").format("YYYY-MM-DD"),b=c;break;case"7days":c=k().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":c=k().subtract(1,"month").format("YYYY-MM-DD");break;case"all":c="",b="";break}l("start",c),l("end",b),o(f)},h=()=>{o(null)},d=f=>{s(f)},w=()=>{p(),a(),i(n)};return m.useEffect(()=>{i(n),d(_())},[n]),e.jsx("form",{onSubmit:j(d),children:e.jsx("div",{className:"table_wrap ft_table mt_20",children:e.jsxs("table",{className:"type4",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"60px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{className:"btn border_w w_96",...x("dateType"),children:As.map(f=>e.jsx("option",{value:f.type,children:f.value},f.type))})}),Cs.map(f=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:f.type,onChange:()=>i(f.type),checked:t===f.type,className:"hide"}),e.jsx("label",{htmlFor:f.type,className:"btn border_w",children:f.value})]},f.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...x("start"),id:"start",onClick:h,onChange:f=>l("start",f.target.value),defaultValue:r,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...x("end"),id:"end",onClick:h,onChange:f=>l("end",f.target.value),defaultValue:r,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...x("state"),className:"btn border_w w_96",children:Ss.map(f=>e.jsx("option",{value:f.type,children:f.value},f.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...x("search"),className:"small search w_364"})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("button",{type:"submit",className:"btn small w_83 light_blue",children:"검색"}),e.jsx("button",{type:"button",className:"btn small w_83 light_gray ml_4",onClick:w,children:"초기화"})]})]})]})]})]})})})},Es=({setOpen:s,data:a})=>e.jsxs("div",{className:"modal_wrap prompt01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{type:"button",className:"modal_close",onClick:()=>s(!1)}),e.jsxs("div",{className:"modal_body",children:[e.jsx("div",{className:"modal_tit",children:"반려사유"}),e.jsx("div",{children:e.jsx("textarea",{className:"mt_8",rows:12,readOnly:!0,children:a??""})})]}),e.jsx("div",{className:"modal_btn mt_63",children:e.jsx("button",{type:"button",className:"confirm_btn",onClick:()=>s(!1),children:"확인"})})]})]}),Fs=[{type:0,text:"임시 저장",class:"yellow"},{type:1,text:"승인 대기",class:"brighter_blue"},{type:2,text:"수정 중",class:"yellow"},{type:3,text:"모집 대기",class:"brighter_gray"},{type:4,text:"모집 중",class:"brighter_gray"},{type:5,text:"마감",class:"gray"},{type:6,text:"행사 종료",class:"gray"}],Ps=({eventList:s,checkedList:a,setCheckedList:n})=>{const[t,o]=m.useState(!1),[r,x]=m.useState(""),[j,l]=m.useState(!1),p=h=>{n(d=>d.includes(h)?d.filter(w=>w!==h):[...d,h])},_=()=>{if(t)n([]);else{const h=s.map(d=>d.id);n(h)}o(!t)},i=h=>{const d=Fs.find(w=>w.type===h);return d||{text:"알 수 없음",class:""}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"140px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:_,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"행사번호"}),e.jsx("th",{className:"txt_left",children:"행사명"}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 개설일"}),e.jsx("th",{}),e.jsx("th",{children:"진행 상태"})]})}),e.jsx("tbody",{children:s&&s.map(h=>{const{text:d,class:w}=i(h.state);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:h.id,checked:a.includes(h.id),onChange:()=>p(h.id),type:"checkbox"}),e.jsx("label",{htmlFor:h.id})]})}),e.jsx("td",{children:h.id??"-"}),e.jsx("td",{className:"txt_left",children:h.state===3||h.state===4||h.state===5||h.state===6?e.jsx(N,{to:`${Ns}/${h.id}`,target:"_blank",children:h.title??"-"}):e.jsx(N,{to:`/event/apply/${h.id}`,children:h.title??"-"})}),e.jsx("td",{children:h.start_date?ye(h.start_date):"-"}),e.jsx("td",{children:h.publish_date?ye(h.publish_date):"-"}),e.jsx("td",{children:h.reject_reason?e.jsx("button",{className:"underline col_blue",onClick:()=>{l(!0),x(h.reject_reason)},children:"반려사유"}):""}),e.jsx("td",{children:e.jsx("i",{className:`btn small  w_72 ${w}`,children:d})})]},h.id)})})]})}),j&&e.jsx(Es,{setOpen:l,data:r})]})},Ts=()=>{var b,y,v,u,S,Y;const s=_e(),a=Fe(),{openConfirm:n}=ue(),{openAlret:t}=je(),o=K(me),[r,x]=m.useState({}),[j,l]=m.useState(),[p,_]=m.useState([]),[i,h]=m.useState(1),{data:d}=ns(),w=ls(),f=()=>{x({}),h(1),s("?")},c=()=>{if(p.length<=0)return t({text:"목록을 선택해주세요."});n({text:`선택 [${p.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"확인"})};return m.useEffect(()=>{o.confirm===!0&&p.length>0&&w.mutate({ids:p},{onSuccess:()=>{t({text:"삭제가 완료되었습니다."}),_([]),a.invalidateQueries({queryKey:["eventManage"]})}})},[o.confirm]),m.useEffect(()=>{const O={page:i??1,type:r.type&&r.type!=="none"?r.type:void 0,dateType:r.dateType??1,start:r.start??void 0,end:r.end??void 0,state:r.state!=="none"?r.state:void 0,search:r.search??void 0},E=Object.fromEntries(Object.entries(O).filter(([z,F])=>typeof F=="string"||Array.isArray(F)?F!==""&&F.length>0:F!=null).map(([z,F])=>[z,String(F)])),B=new URLSearchParams(E).toString();l(B)},[r,i]),m.useEffect(()=>{j&&(s(`?${j}`),a.invalidateQueries({queryKey:["userList"]}))},[j]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/event",children:"행사관리"}),e.jsx(N,{className:"item",to:"/event",children:"행사 리스트"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(ks,{boardData:(b=d==null?void 0:d.data)==null?void 0:b.summary}),e.jsx(Ys,{setFilterData:x,resetFilter:f,resetDate:"all"}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsx("h3",{className:"fs_18",children:"전체 검색결과"}),e.jsx("button",{type:"button",className:"pr_30",onClick:c,children:"삭제"})]}),((v=(y=d==null?void 0:d.data)==null?void 0:y.items)==null?void 0:v.length)>0?e.jsx(Ps,{eventList:(u=d==null?void 0:d.data)==null?void 0:u.items,checkedList:p,setCheckedList:_}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 행사가 없습니다"}),((S=d==null?void 0:d.data)==null?void 0:S.total)>20&&e.jsx(ze,{total:(Y=d==null?void 0:d.data)==null?void 0:Y.total,page:i,setPage:h})]})})]})},Os=({setOpen:s,title:a,reason:n,setReason:t,onSubmit:o})=>e.jsxs("div",{className:"modal_wrap prompt01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{type:"button",className:"modal_close",onClick:()=>s(!1)}),e.jsxs("div",{className:"modal_body",children:[e.jsxs("div",{className:"modal_tit",children:["[",a,"] 게시를",e.jsx("br",{}),"반려 처리 하시겠습니까?"]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("p",{className:"fs_16 fw_600",children:"*반려사유 작성"}),e.jsx("textarea",{className:"mt_8",placeholder:"세부 반려사유를 작성해주세요.",rows:12,value:n,onChange:r=>t(r.target.value)})]})})]}),e.jsxs("div",{className:"modal_btn mt_63",children:[e.jsx("button",{type:"button",className:"confirm_btn",onClick:()=>{o==null||o(),s(!1)},children:"확인"}),e.jsx("button",{type:"button",className:"close_btn",onClick:()=>s(!1),children:"취소"})]})]})]}),_t=()=>{var w;const{id:s}=xe(),a=_e(),{openConfirm:n}=ue(),{openAlret:t}=je(),o=K(me),[r,x]=m.useState(""),[j,l]=m.useState(!1),{data:p}=Se(s?Number(s):void 0),{data:_}=xt(s?Number(s):void 0),i=ds(),h=f=>{var b;if(["general","detail","application"].some(y=>(_==null?void 0:_.data[y])===!1))return t({text:"작성완료되지 않은 항목이 존재합니다."});switch(f){case 0:return l(!0);case 1:return n({text:`[${((b=p==null?void 0:p.data)==null?void 0:b.title)??""}] 게시를 
승인 처리 하시겠습니까?`,okBtn:"확인"});default:return}},d=()=>{const f=sessionStorage.getItem("EVENT_ACCEPT"),c=JSON.parse(f);i.mutate({id:s?Number(s):void 0,data:{accept:!1,reject:c?{...c==null?void 0:c.reject,reason:r}:void 0}},{onSuccess:()=>{t({text:"행사가 반려되었습니다.",callback:()=>{location.reload()}})}})};return m.useEffect(()=>{o.confirm===!0&&i.mutate({id:s?Number(s):void 0,data:{accept:!0}},{onSuccess:()=>{t({text:"행사가 승인되었습니다."}),a("/event")}})},[o.confirm]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",onClick:()=>h(0),children:"반려"}),e.jsx("button",{className:"btn light_blue",onClick:()=>h(1),children:"승인"})]}),j&&e.jsx(Os,{setOpen:l,title:((w=p==null?void 0:p.data)==null?void 0:w.title)??"",reason:r,setReason:x,onSubmit:d})]})},it=s=>{switch(s){case 0:return{text:"· 작성중",class:"col_orange"};case 1:return{text:"· 승인 대기중",class:"col_darkblue"};case 2:return{text:"· 수정 필요",class:"col_orange"};case 3:return{text:"· 완료",class:"col_darkblue"};default:return{text:"· 알 수 없음",class:"col_orange"}}},zs=s=>{switch(s){case!0:return{text:"작성완료",class:"col_blue"};case!1:return{text:"작성 전",class:"col_yellow"};default:return{text:"알 수 없음",class:"col_orange"}}},Ms=[{title:"기본정보",key:"general",url:"general"},{title:"상세페이지",key:"detail",url:"detail"},{title:"모집정보",key:"application",url:"information"}],$s=()=>{var x,j;const{id:s}=xe(),a=_e(),{data:n}=Se(s?Number(s):void 0),{data:t,isLoading:o,isError:r}=xt(s?Number(s):void 0);return m.useEffect(()=>{var i,h;if(!n)return sessionStorage.removeItem("EVENT_ACCEPT");const l=sessionStorage.getItem("EVENT_ACCEPT"),p=JSON.parse(l);let _;l&&p.id===s?_={id:s,reject:{...p.reject,...(i=n==null?void 0:n.data)==null?void 0:i.is_reject}}:_={id:s,reject:{...(h=n==null?void 0:n.data)==null?void 0:h.is_reject}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(_))},[n]),o?e.jsx(J,{}):r||!t?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"행사 상세설정"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위해 내용을 작성해주세요."})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"fs_20",children:"행사 등록 준비 상태"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"border_item w_767",children:e.jsx("span",{className:`${it((x=t==null?void 0:t.data)==null?void 0:x.state).class}`,children:it((j=t==null?void 0:t.data)==null?void 0:j.state).text})})}),e.jsx("div",{className:"tit_wrap mt_26",children:e.jsx("h3",{className:"fs_20",children:"작성 항목"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"w_767",children:e.jsx("ul",{className:"border_item_list",children:Ms.map(l=>{var p;return e.jsxs("li",{onClick:()=>a(`/event/apply/${s}/${l.url}`),style:{cursor:"pointer"},children:[e.jsx("span",{className:"tit",children:l.title}),e.jsx("p",{className:"btn gray",children:zs((p=t==null?void 0:t.data)==null?void 0:p[l.key]).text})]},l.key)})})})}),e.jsxs("div",{className:"dis_flex justify_between mt_40",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(N,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsx(_t,{})]})]})})]})},qs=[{type:1,name:"무료"},{type:2,name:"사전 신청 시 무료 / 현장 구매 시 유료"},{type:3,name:"사전 신청 시 무료 / 기간 한정 유료 / 현장 구매 시 유료"},{type:4,name:"사전 신청 유료 / 현장 결제 유료"},{type:5,name:"유료"}],Bs=()=>{var j,l,p,_,i,h,d,w,f,c,b,y,v,u,S,Y,O,E,B,z,F,U,Q,I,C,X,W,Z,G,D,ee,te,se,ae,ie,ne,le,re,ce,oe;const{id:s}=xe(),[a,n]=m.useState({}),{data:t,isLoading:o,isError:r}=Se(s?Number(s):void 0),x=(A,q)=>{const g=sessionStorage.getItem("EVENT_ACCEPT"),M=JSON.parse(g);let $;g&&M.id===s?$={id:s,reject:{...M.reject,[q]:A.target.checked??!1}}:$={id:s,reject:{[q]:A.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify($)),n($==null?void 0:$.reject)};return m.useEffect(()=>{const A=sessionStorage.getItem("EVENT_ACCEPT"),q=JSON.parse(A);A&&q.id===s?n(q==null?void 0:q.reject):(n({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),o?e.jsx(J,{}):r?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"기본정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참관객 모집을 위한 행사의 기본 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"fs_20",children:["프로젝트 제목 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_767",type:"text",value:((j=t==null?void 0:t.data)==null?void 0:j.title)??"",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"title",type:"checkbox",checked:(a==null?void 0:a.title)??!1,onChange:A=>x(A,"title")}),e.jsx("label",{htmlFor:"title"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 분야 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("select",{className:"w_767",disabled:!0,children:e.jsx("option",{value:(l=t==null?void 0:t.data)==null?void 0:l.category.id,children:(p=t==null?void 0:t.data)==null?void 0:p.category.name})}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"category",type:"checkbox",checked:(a==null?void 0:a.category)??!1,onChange:A=>x(A,"category")}),e.jsx("label",{htmlFor:"category"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["대표 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 대표 이미지를 등록해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"대표 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 385*480픽셀(세로형), 1280*720픽셀(가로형) / 72dpi 이상"]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"img",type:"checkbox",checked:(a==null?void 0:a.img)??!1,onChange:A=>x(A,"img")}),e.jsx("label",{htmlFor:"img"})]})]}),e.jsxs("div",{className:"dis_flex mt_10 gap16",children:[e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"img1",className:"hide",disabled:!0}),e.jsxs("label",{htmlFor:"img1",className:"file_inp vertical preview_label",children:[((_=t==null?void 0:t.data)==null?void 0:_.img1)&&e.jsx("span",{className:"preview_img",children:e.jsx("img",{src:`${Ye}/${(i=t==null?void 0:t.data)==null?void 0:i.img1}`})}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"세로형"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"img2",className:"hide",disabled:!0}),e.jsxs("label",{htmlFor:"img2",className:"file_inp horizontal preview_label",children:[((h=t==null?void 0:t.data)==null?void 0:h.img2)&&e.jsx("span",{className:"preview_img",children:e.jsx("img",{src:`${Ye}/${(d=t==null?void 0:t.data)==null?void 0:d.img2}`})}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"가로형"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 일자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",id:"event_start_date",placeholder:"행사 시작 일자를 선택해주세요.",readOnly:!0,value:(w=t==null?void 0:t.data)!=null&&w.event_start_date?k((f=t==null?void 0:t.data)==null?void 0:f.event_start_date).format("YYYY-MM-DD"):""}),e.jsx("i",{className:"date_icon"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",id:"event_end_date",placeholder:"행사 종료 일자를 선택해주세요.",readOnly:!0,value:(c=t==null?void 0:t.data)!=null&&c.event_end_date?k((b=t==null?void 0:t.data)==null?void 0:b.event_end_date).format("YYYY-MM-DD"):""}),e.jsx("i",{className:"date_icon"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"date",type:"checkbox",checked:(a==null?void 0:a.date)??!1,onChange:A=>x(A,"date")}),e.jsx("label",{htmlFor:"date"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 시간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"num_inp_wrap flex1",children:[e.jsx("input",{type:"text",placeholder:"행사 시작 시간을 입력해주세요.",value:(y=t==null?void 0:t.data)!=null&&y.event_start_date?k((v=t==null?void 0:t.data)==null?void 0:v.event_start_date).format("HH:mm"):"",readOnly:!0}),e.jsx("button",{className:"increase"}),e.jsx("button",{className:"decrease"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"num_inp_wrap flex1",children:[e.jsx("input",{type:"text",placeholder:"행사 종료 시간을 입력해주세요.",value:(u=t==null?void 0:t.data)!=null&&u.event_end_date?k((S=t==null?void 0:t.data)==null?void 0:S.event_end_date).format("HH:mm"):"",readOnly:!0}),e.jsx("button",{className:"increase"}),e.jsx("button",{className:"decrease"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"time",type:"checkbox",checked:(a==null?void 0:a.time)??!1,onChange:A=>x(A,"time")}),e.jsx("label",{htmlFor:"time"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["비용 설정 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex justify_between w_767",children:[e.jsx("select",{className:"w_372",disabled:!0,children:e.jsx("option",{value:((Y=t==null?void 0:t.data)==null?void 0:Y.payable_type)??"",children:((O=qs.find(A=>{var q;return A.type===((q=t==null?void 0:t.data)==null?void 0:q.payable_type)}))==null?void 0:O.name)??""})}),((E=t==null?void 0:t.data)==null?void 0:E.payable_type)===2&&e.jsx("div",{id:"_sel1",children:e.jsx("input",{type:"number",className:"w_372",placeholder:"현장 신청 비용을 입력해주세요.",value:((B=t==null?void 0:t.data)==null?void 0:B.payable_price2)??"",readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"payable",type:"checkbox",checked:(a==null?void 0:a.payable)??!1,onChange:A=>x(A,"payable")}),e.jsx("label",{htmlFor:"payable"})]})]}),(((z=t==null?void 0:t.data)==null?void 0:z.payable_type)===3||((F=t==null?void 0:t.data)==null?void 0:F.payable_type)===4)&&e.jsxs("div",{id:"_sel2",children:[e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsxs("div",{className:"dis_flex justify_between w_767 gap23",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 시작 날짜",value:(U=t==null?void 0:t.data)!=null&&U.payable_start_date?k((Q=t==null?void 0:t.data)==null?void 0:Q.payable_start_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("input",{type:"date"})]}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 종료 날짜",value:(I=t==null?void 0:t.data)!=null&&I.payable_end_date?k((C=t==null?void 0:t.data)==null?void 0:C.payable_end_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("input",{type:"date"})]}),e.jsx("input",{type:"number",className:"w_372",placeholder:"유료 사전 신청 기간의 비용을 입력해주세요.",value:((X=t==null?void 0:t.data)==null?void 0:X.payable_price1)??"",readOnly:!0})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)",value:((W=t==null?void 0:t.data)==null?void 0:W.payable_price_url)??"",readOnly:!0})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 txt_center",children:e.jsx("i",{className:"blue_icon_box",children:"+"})})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"number",className:"w_372",placeholder:"현장 신청 비용을 입력해주세요.",value:((Z=t==null?void 0:t.data)==null?void 0:Z.payable_price2)??"",readOnly:!0})})]}),((G=t==null?void 0:t.data)==null?void 0:G.payable_type)===5&&e.jsx("div",{id:"_sel4",children:e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)",value:((D=t==null?void 0:t.data)==null?void 0:D.payable_price_url)??""})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 진행 방식 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap11",children:[e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-1",type:"checkbox",checked:((ee=t==null?void 0:t.data)==null?void 0:ee.progress_type)===0,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-1",children:"오프라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-2",type:"checkbox",checked:((te=t==null?void 0:t.data)==null?void 0:te.progress_type)===1,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-2",children:"온라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-3",type:"checkbox",checked:((se=t==null?void 0:t.data)==null?void 0:se.progress_type)===2,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-3",children:"하이브리드 행사"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"progress",type:"checkbox",checked:(a==null?void 0:a.progress)??!1,onChange:A=>x(A,"progress")}),e.jsx("label",{htmlFor:"progress"})]})]}),(((ae=t==null?void 0:t.data)==null?void 0:ae.progress_type)===1||((ie=t==null?void 0:t.data)==null?void 0:ie.progress_type)===2)&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"온라인 행사 url를 입력해주세요. (온라인 / 하이브리드 행사 선택 시)",readOnly:!0,value:((ne=t==null?void 0:t.data)==null?void 0:ne.progress_url)??""})}),(((le=t==null?void 0:t.data)==null?void 0:le.progress_type)===0||((re=t==null?void 0:t.data)==null?void 0:re.progress_type)===2)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 위치 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{type:"text",className:"w_767",placeholder:"도로명/지번 주소 검색 (오프라인 / 하이브리드 행사 선택 시)",readOnly:!0,value:((ce=t==null?void 0:t.data)==null?void 0:ce.position1)??""}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"position",type:"checkbox",checked:(a==null?void 0:a.position)??!1,onChange:A=>x(A,"position")}),e.jsx("label",{htmlFor:"position"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"세부 주소",readOnly:!0,value:((oe=t==null?void 0:t.data)==null?void 0:oe.position2)??""})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(N,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(N,{to:`/event/apply/${s}`,className:"btn gray",children:"뒤로"}),e.jsx(N,{to:`/event/apply/${s}/detail`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Rs=()=>{var h,d,w,f;const{id:s}=xe(),a=m.useRef(),[n,t]=m.useState(""),[o,r]=m.useState({}),{data:x,isLoading:j,isError:l}=cs(s?Number(s):void 0),p=m.useMemo(()=>({toolbar:{container:[[{header:"1"},{header:"2"}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{align:[]}],["image"]]},clipboard:{matchVisual:!1}}),[]),_=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","align","image"],i=(c,b)=>{const y=sessionStorage.getItem("EVENT_ACCEPT"),v=JSON.parse(y);let u;y&&v.id===s?u={id:s,reject:{...v.reject,[b]:c.target.checked??!1}}:u={id:s,reject:{[b]:c.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(u)),r(u==null?void 0:u.reject)};return m.useEffect(()=>{const c=sessionStorage.getItem("EVENT_ACCEPT"),b=JSON.parse(c);c&&b.id===s?r(b==null?void 0:b.reject):(r({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),m.useEffect(()=>{x!==void 0&&t(x.data.content)},[x]),j?e.jsx(J,{}):l?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"상세페이지"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위한 내용을 작성해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"tit02",children:["행사 상세내용 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 상세이미지 및 내용을 입력해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"상세 내용 작성 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 이미지의 너비는 1100px 이상으로 등록해야 상세 페이지의 여백이 생기지 않습니다.",e.jsx("br",{}),"· 이미지 용량이 큰 경우 로딩 속도가 느려질 수 있습니다.",e.jsx("br",{}),"· 설명 글도 함께 작성할 수 있으니, 기본 정보 외의 추가할 세부 내용을 작성해주세요."]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"content",type:"checkbox",checked:(o==null?void 0:o.content)??!1,onChange:c=>i(c,"content")}),e.jsx("label",{htmlFor:"content"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_20",children:e.jsx("div",{className:"w_767",children:e.jsx(Tt,{ref:a,value:n,onChange:t,modules:p,formats:_,className:"quill_editor",theme:"snow",readOnly:!0})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["태그 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"본 행사를 설명해줄 태그를 입력해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_372",type:"text",placeholder:"태그는 최대 5개까지 입력 가능합니다.",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"tag",type:"checkbox",checked:(o==null?void 0:o.tag)??!1,onChange:c=>i(c,"tag")}),e.jsx("label",{htmlFor:"tag"})]})]}),((d=(h=x==null?void 0:x.data)==null?void 0:h.tags)==null?void 0:d.length)>0&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:e.jsx("ul",{className:"white_tag_list",children:(f=(w=x==null?void 0:x.data)==null?void 0:w.tags)==null?void 0:f.map((c,b)=>e.jsxs("li",{children:[c??"",e.jsx("button",{className:"delete_btn",disabled:!0})]},b))})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(N,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(N,{to:`/event/apply/${s}/general`,className:"btn gray",children:"뒤로"}),e.jsx(N,{to:`/event/apply/${s}/information`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Is=()=>{var j,l,p,_,i,h,d,w,f,c,b,y,v;const{id:s}=xe(),[a,n]=m.useState({}),{data:t,isLoading:o,isError:r}=os(s?Number(s):void 0),x=(u,S)=>{const Y=sessionStorage.getItem("EVENT_ACCEPT"),O=JSON.parse(Y);let E;Y&&O.id===s?E={id:s,reject:{...O.reject,[S]:u.target.checked??!1}}:E={id:s,reject:{[S]:u.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(E)),n(E==null?void 0:E.reject)};return m.useEffect(()=>{const u=sessionStorage.getItem("EVENT_ACCEPT"),S=JSON.parse(u);u&&S.id===s?n(S==null?void 0:S.reject):(n({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),o?e.jsx(J,{}):r?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"모집정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 신청을 위해 모집 방법 및 수집할 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"fs_20",children:["모집 기간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"w_767 dis_flex gap10",children:[e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"시작 날짜",value:(j=t==null?void 0:t.data)!=null&&j.application_start_date?k((l=t==null?void 0:t.data)==null?void 0:l.application_start_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("i",{className:"date_icon"})]}),e.jsx("div",{className:"flex1",children:e.jsx("input",{className:"w_full",type:"text",placeholder:"시작 시간",value:(p=t==null?void 0:t.data)!=null&&p.application_start_date?k((_=t==null?void 0:t.data)==null?void 0:_.application_start_date).format("HH:mm"):"",readOnly:!0})}),e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"종료 날짜",value:(i=t==null?void 0:t.data)!=null&&i.application_end_date?k((h=t==null?void 0:t.data)==null?void 0:h.application_end_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("i",{className:"date_icon"})]}),e.jsx("div",{className:"flex1",children:e.jsx("input",{className:"w_full",type:"text",placeholder:"종료 시간",value:(d=t==null?void 0:t.data)!=null&&d.application_end_date?k((w=t==null?void 0:t.data)==null?void 0:w.application_end_date).format("HH:mm"):"",readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_date",type:"checkbox",checked:(a==null?void 0:a.application_date)??!1,onChange:u=>x(u,"application_date")}),e.jsx("label",{htmlFor:"application_date"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["모집 방법 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("h3",{className:"fs_12",children:"단체 신청 진행 시, 선택하신 수집 정보를 기반으로 한 엑셀 양식을 제공합니다."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap11",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-1",type:"checkbox",checked:((f=t==null?void 0:t.data)==null?void 0:f.application_type)===0,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-1",children:"개인 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-2",type:"checkbox",checked:((c=t==null?void 0:t.data)==null?void 0:c.application_type)===1,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-2",children:"단체 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-3",type:"checkbox",checked:((b=t==null?void 0:t.data)==null?void 0:b.application_type)===2,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-3",children:"개인/단체 신청 모두"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_type",type:"checkbox",checked:(a==null?void 0:a.application_type)??!1,onChange:u=>x(u,"application_type")}),e.jsx("label",{htmlFor:"application_type"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["수집 정보 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_1",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_1",children:"이름"})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_information",type:"checkbox",checked:(a==null?void 0:a.application_information)??!1,onChange:u=>x(u,"application_information")}),e.jsx("label",{htmlFor:"application_information"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_2",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_2",children:"이메일"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_3",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_3",children:"휴대전화 번호"})]})}),(v=(y=t==null?void 0:t.data)==null?void 0:y.information)==null?void 0:v.map(u=>e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{id:`chk03_${u.id+3}_p`,type:"checkbox",className:"input",value:u.id,disabled:!0,checked:u.is_set}),e.jsx("label",{htmlFor:`chk03_${u.id+3}_p`,className:"label",children:u.name}),e.jsx("input",{type:"checkbox",className:"hide toggle",id:`chk03_${u.id+3}_c`,checked:u.required,readOnly:!0}),e.jsxs("label",{htmlFor:`chk03_${u.id+3}_c`,className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})},u.id)),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(N,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsx(_t,{})]})]})})]})},Us=()=>e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"사전 설문"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"사전 설문 제작을 통해 행사에 필요한 데이터를 받아보세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsx("h3",{className:"fs_20",children:"사전 설문 사용 여부"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_1",type:"radio",name:"rad01",checked:!0}),e.jsx("label",{htmlFor:"rad01_1",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_2",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_2",children:"사용하지 않음"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01"})]})]}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"설문 리스트"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요.",readOnly:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{value:"1",selected:!0,children:"단일 선택"}),e.jsx("option",{value:"2",children:"다중 선택"}),e.jsx("option",{value:"3",children:"장문"})]})]}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"option_tit",children:"옵션 1"}),e.jsx("div",{className:"option_tit",children:e.jsx("input",{type:"text",placeholder:"옵션을 입력해주세요.",readOnly:!0})}),e.jsx("button",{className:"option_add_btn",children:"옵션 추가"})]}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn active",children:["필수",e.jsx("i",{})]})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"chk02"})]})]}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요.",readOnly:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{value:"1",children:"단일 선택"}),e.jsx("option",{value:"2",selected:!0,children:"다중 선택"}),e.jsx("option",{value:"3",children:"장문"})]})]}),e.jsxs("div",{className:"body",children:[e.jsx("div",{className:"option_tit",children:"옵션 1"}),e.jsx("div",{className:"option_tit",children:e.jsx("input",{type:"text",placeholder:"옵션을 입력해주세요.",readOnly:!0})}),e.jsx("button",{className:"option_add_btn",children:"옵션 추가"})]}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn active",children:["필수",e.jsx("i",{})]})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"chk03"})]})]}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",placeholder:"설문 제목을 입력해주세요.",readOnly:!0}),e.jsxs("select",{disabled:!0,children:[e.jsx("option",{value:"1",children:"단일 선택"}),e.jsx("option",{value:"2",children:"다중 선택"}),e.jsx("option",{value:"3",selected:!0,children:"장문"})]})]}),e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"텍스트를 입력하세요.",readOnly:!0})}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"delete_btn"}),e.jsx("i",{className:"bor_line"}),e.jsxs("button",{className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk04",type:"checkbox"}),e.jsx("label",{htmlFor:"chk04"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 dis_flex justify_end",children:e.jsx("button",{className:"btn h_36 dark_blue",children:"추가하기"})})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",children:"뒤로"}),e.jsx("button",{className:"btn light_blue",children:"다음"})]})]})]})})]}),Qs=()=>e.jsxs("div",{className:"container",children:[e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"FAQ & 문의"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참가자 문의에 대한 담당자 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsx("h3",{className:"fs_20",children:"FAQ 사용 여부"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_1",type:"radio",name:"rad01",checked:!0}),e.jsx("label",{htmlFor:"rad01_1",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"rad01_2",type:"radio",name:"rad01"}),e.jsx("label",{htmlFor:"rad01_2",children:"사용하지 않음"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01"})]})]}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"FAQ 리스트"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsx("div",{className:"head",children:e.jsx("input",{type:"text",placeholder:"Q. 제목을 입력해주세요.",readOnly:!0})}),e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"A. 답변을 입력해주세요.",readOnly:!0})}),e.jsxs("div",{className:"btm",children:[e.jsx("button",{className:"file_btn"}),e.jsx("button",{className:"delete_btn"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"chk02"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 dis_flex justify_end",children:e.jsx("button",{className:"btn h_36 dark_blue",children:"추가하기"})})}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsxs("h3",{className:"fs_20",children:["문의 담당자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_767",type:"text",value:"이름",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"chk03"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"이메일",readOnly:!0})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:"휴대전화 번호",readOnly:!0})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",children:"반려"}),e.jsx("button",{className:"btn light_blue",children:"승인"})]})]})]})})]}),fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaCAYAAAA/xl1SAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPZSURBVHgB7doxbxtlGMDx53kt2iSIykFpIqoWXTcXpYmRgHjrZWNMvwHfIGFkarp1o/kG/QbABlOuA1IqMVxLJTwgcZXaKglBuAN1oir38t4RhxBcxw6OH4n+f4vPvrOX/PXc5b1TOaXa7EexOqmLr9wQlbqKr3rRquB/L/ytW+FvnYmXzKt/KHmeNB//kMgp6CAHR1FcnbjwcjlsrhAbjsnUS5K/0tvN5kbW75f6CrAIb/xC+1bYXBHgBCHEe/2GWDnpgGtzC8vnzr/6OvxsLEA/ikuyiixNTV96sbP9PO11aM8AQ3xfhpfV8ItjAgymqqpLM9OXqr9uP//udQd1PQWXp9x32l+FvbEA/13aduOLWZq0ju9w3Y4O13vrxIchqo/vh4HWxb9OwQen3SUBhkkl6nY6/keAtesffxbO23cEOANetXFx5vKLna1nG53PDq8Ba7VGpOf8etiMBDg7rXA9eLVzPXh4Deje8sU6XyTA2aq+vf/Hrc6bcgIeTL9fBBiRMAUniylYTsCD6QeMzET+sryrVgboWXLBiHnR4pkC0dpsI1ZX/vMBjJTP9xeduDwWwIC6St2p13kBbMRO1EcC2Jh3ytof7FQdTzbDUNUJYIgAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYcqp+JYANlrOixIgTIThlznxkgpgIAy/Jy5keF8AA1586nyuTEDYyPNEi9cP5j75PYzDqgCjk/306MHVchkmF7cmwAh5laR4LQMcc7t3BRgl1dvFSxlgmqbFUgxTECMRpt+9ZrqRFduHd0LOu71VFqUxAlln+hUqnY3Nzc3dd2fe3wsRfirAGfFeP28+2kg67ytHd/629XTj4szlybDZEGD41po/Prhz9APtdlTt+sK6qsQCDE8all0+PP5h16dhxip7N8OwZIEaQ+G9JG03vthtn/b64rW5hWJ5ZlmA01sLk2/ldTsrvb65s/Xs26npK0/C6bge3nKnBH37a0VFvwjxrfY6rmeAhZ3tp+nUe1e+CXN0UkXrApxsre0mbv788PvkpANVBlCrN6JwAzmsF+qN8DYS4EAx8Ypburtu7G6WJn2vJw8U4FG12UYsLo/Vy3z4lSj8UMQDDW+GIrbyQWYf/lFVvV88UdV8/Pfa3iD+BDNM+9iPxy8HAAAAAElFTkSuQmCC",Vs=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(N,{className:"item",to:"/banner/main",children:"메인배너"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"등록일"}),e.jsx("option",{value:"2",children:"게시일"})]})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide"}),e.jsx("label",{htmlFor:"rad01",className:"btn border_w",children:"오늘"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad02",className:"hide"}),e.jsx("label",{htmlFor:"rad02",className:"btn border_w",children:"어제"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad03",className:"hide",checked:!0}),e.jsx("label",{htmlFor:"rad03",className:"btn border_w",children:"7일"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad04",className:"hide"}),e.jsx("label",{htmlFor:"rad04",className:"btn border_w",children:"1개월"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad05",className:"hide"}),e.jsx("label",{htmlFor:"rad05",className:"btn border_w",children:"전체"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"노출"}),e.jsx("option",{value:"2",children:"노출 안함"}),e.jsx("option",{value:"3",children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",children:"검색"}),e.jsx("button",{className:"btn small gray",children:"초기화"})]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:"[총 회원수 9,999명]"})]}),e.jsx("button",{className:"sort_btn",children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{children:"추가"}),e.jsx("button",{className:"ml_22",children:"삭제"})]})]}),e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk01"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:fe})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk02"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:fe})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출 안함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk03"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:fe})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]})]})]})}),e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("a",{href:"#none",className:"pagi_prev"}),e.jsx("a",{href:"#none",className:"num active",children:"1"}),e.jsx("a",{href:"#none",className:"num",children:"2"}),e.jsx("a",{href:"#none",className:"num",children:"3"}),e.jsx("a",{href:"#none",className:"num",children:"4"}),e.jsx("a",{href:"#none",className:"num",children:"5"}),e.jsx("a",{href:"#none",className:"num",children:"6"}),e.jsx("a",{href:"#none",className:"num",children:"7"}),e.jsx("a",{href:"#none",className:"num",children:"8"}),e.jsx("a",{href:"#none",className:"num",children:"9"}),e.jsx("a",{href:"#none",className:"num",children:"10"}),e.jsx("a",{href:"#none",className:"pagi_next"})]})]})})]}),nt=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(N,{className:"item",to:"/banner/main",children:"메인배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력"})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜"}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜"}),e.jsx("label",{htmlFor:"start_end"}),e.jsx("input",{type:"date",id:"start_end"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*1080픽셀"]})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide"}),e.jsx("label",{htmlFor:"fileInp01",className:"file_inp",children:"0 / 1"})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력"})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",children:"취소"}),e.jsx("button",{className:"btn blue",children:"추가"})]})]})]})})]}),Ls=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(N,{className:"item",to:"/banner/band",children:"띠배너"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"등록일"}),e.jsx("option",{value:"2",children:"게시일"})]})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide"}),e.jsx("label",{htmlFor:"rad01",className:"btn border_w",children:"오늘"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad02",className:"hide"}),e.jsx("label",{htmlFor:"rad02",className:"btn border_w",children:"어제"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad03",className:"hide",checked:!0}),e.jsx("label",{htmlFor:"rad03",className:"btn border_w",children:"7일"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad04",className:"hide"}),e.jsx("label",{htmlFor:"rad04",className:"btn border_w",children:"1개월"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad05",className:"hide"}),e.jsx("label",{htmlFor:"rad05",className:"btn border_w",children:"전체"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"노출"}),e.jsx("option",{value:"2",children:"노출 안함"}),e.jsx("option",{value:"3",children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",children:"검색"}),e.jsx("button",{className:"btn small gray",children:"초기화"})]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:"[총 회원수 9,999명]"})]}),e.jsx("button",{className:"sort_btn",children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{children:"추가"}),e.jsx("button",{className:"ml_22",children:"삭제"})]})]}),e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk01"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:fe})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk02"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:fe})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출 안함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk03"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:fe})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]})]})]})}),e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("a",{href:"#none",className:"pagi_prev"}),e.jsx("a",{href:"#none",className:"num active",children:"1"}),e.jsx("a",{href:"#none",className:"num",children:"2"}),e.jsx("a",{href:"#none",className:"num",children:"3"}),e.jsx("a",{href:"#none",className:"num",children:"4"}),e.jsx("a",{href:"#none",className:"num",children:"5"}),e.jsx("a",{href:"#none",className:"num",children:"6"}),e.jsx("a",{href:"#none",className:"num",children:"7"}),e.jsx("a",{href:"#none",className:"num",children:"8"}),e.jsx("a",{href:"#none",className:"num",children:"9"}),e.jsx("a",{href:"#none",className:"num",children:"10"}),e.jsx("a",{href:"#none",className:"pagi_next"})]})]})})]}),lt=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(N,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(N,{className:"item",to:"/banner/band",children:"띠배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx(R,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력"})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜"}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜"}),e.jsx("label",{htmlFor:"end_date"}),e.jsx("input",{type:"date",id:"end_date"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*1080픽셀"]})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide"}),e.jsx("label",{htmlFor:"fileInp01",className:"file_inp",children:"0 / 1"})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력"})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",children:"취소"}),e.jsx("button",{className:"btn blue",children:"추가"})]})]})]})})]}),Hs=wt([{path:"/",element:e.jsx(Kt,{}),children:[{path:"/login",element:e.jsx(Wt,{})},{path:"/member/general",element:e.jsx(_s,{})},{path:"/member/general/detail/:id",element:e.jsx(fs,{})},{path:"/member/corporate",element:e.jsx(ys,{})},{path:"/member/corporate/detail/:id",element:e.jsx(vs,{})},{path:"/event",element:e.jsx(Ts,{})},{path:"/event/apply/:id",element:e.jsx($s,{})},{path:"/event/apply/:id/general",element:e.jsx(Bs,{})},{path:"/event/apply/:id/detail",element:e.jsx(Rs,{})},{path:"/event/apply/:id/information",element:e.jsx(Is,{})},{path:"/event/apply/:id/survey",element:e.jsx(Us,{})},{path:"/event/apply/:id/faq",element:e.jsx(Qs,{})},{path:"/banner/main",element:e.jsx(Vs,{})},{path:"/banner/main/detail",element:e.jsx(nt,{})},{path:"/banner/main/detail/:id",element:e.jsx(nt,{})},{path:"/banner/band",element:e.jsx(Ls,{})},{path:"/banner/band/detail",element:e.jsx(lt,{})},{path:"/banner/band/detail/:id",element:e.jsx(lt,{})}]}]),Js=()=>e.jsx(vt,{router:Hs}),Ks=kt`
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
`;function Xs(){return e.jsxs(e.Fragment,{children:[e.jsx(Ks,{}),e.jsx(Js,{})]})}const Ws=new gt;jt(document.getElementById("root")).render(e.jsx(ut,{children:e.jsxs(yt,{client:Ws,children:[e.jsx(Xs,{}),e.jsx(Nt,{})]})}));
