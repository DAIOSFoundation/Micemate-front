import{r as u,j as e}from"./react-GgNxsn6d.js";import{c as yt}from"./react-dom-QkaEqh-z.js";import{R as Ye,a as $e,b as G,c as Nt,d as ye,e as wt}from"./recoil-D-jwd32P.js";import{u as W,a as U,b as Ae,Q as vt,c as kt,R as At}from"./@tanstack-BdwTvngC.js";import{L as g,u as St,c as Ct,R as Yt}from"./react-router-dom-Bz5I97a_.js";import{d as Ee,f as Et}from"./styled-components-PsS2HYcQ.js";import{d as D,c as H,O as Ft,f as X}from"./react-router-xw_WwrXM.js";import{a as Pt}from"./axios-CCb-kr4I.js";import{u as je}from"./react-hook-form-rx1EpASO.js";import{t as qe}from"./@hookform-BTSKDkxf.js";import{o as Be,s as Ce,b as Tt,n as Ot}from"./zod-D7J-fcuR.js";import{d as v,a as $t,l as qt}from"./dayjs-CN69eQz1.js";import{C as Bt}from"./react-spinners--gswIwTH.js";import{R as zt}from"./react-quill-DpUnCd_1.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Va2Jh8gM.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./lodash-DSq4vvuY.js";import"./quill-DGDbI1on.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(l){if(l.ep)return;l.ep=!0;const d=r(l);fetch(l.href,d)}})();const xt=Ee.div`
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

  .preview_banner_img {
    object-fit: cover;
    margin-top: 20px;
  }
  .preview_banner_img_1080 {
    aspect-ratio: 1920 / 1080;
  }
  .preview_banner_img_360 {
    aspect-ratio: 1920 / 360;
  }

  .cursor_pointer {
    cursor: pointer;
  }

  .no_data {
    margin-top: 22px;
    text-align: center;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .banner_order_input_container {
    position: relative;
  }

  .banner_order_input_btn_container {
    position: absolute;
    bottom: -24px;
    right: calc(50% - 20px);
    display: flex;
    gap: 15px;

    span {
      display: block;
      width: 15px;
      height: 15px;
      cursor: pointer;
    }
  }

  .banner_order_input {
    width: 60px;
    height: 24px !important;
    border-radius: 5px !important;
    border: 0.5px solid #09338c !important;
    padding: 0 10px;
    text-align: center;
  }
`;function Mt({children:s}){const a=D();return u.useEffect(()=>{window.scrollTo(0,0)},[a.pathname]),e.jsx("div",{children:s})}const Rt=Ee.div`
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
`,It=Ye({key:"alretState",default:{isOpen:!1,text:""}}),K=Ye({key:"confirmState",default:{isOpen:!1,text:"",confirm:!1,okBtn:"취소하기"}}),Ut=Ye({key:"toastState",default:{isOpen:!1,text:""}}),fe=()=>{const[s,a]=$e(It),r=u.useCallback(()=>{a(l=>({...l,isOpen:!1})),s!=null&&s.callBack&&s.callBack()},[a,s]),t=u.useCallback(({text:l,callback:d})=>a({isOpen:!0,text:l,callBack:d}),[a]);return{alretData:s,closeAlret:r,openAlret:t}},Vt=()=>{const{alretData:s,closeAlret:a}=fe();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsxs(Rt,{children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{className:"modal_close",onClick:a}),e.jsx("div",{className:"modal_body",children:e.jsx("div",{className:"modal_tit",children:s.text})}),e.jsx("div",{className:"modal_btn",children:e.jsx("button",{className:"close_btn",onClick:a,children:"확인"})})]})]})})},Qt=Ee.div`
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
`,Ne=()=>{const[s,a]=$e(K),r=G(K),t=u.useCallback(({confirm:d,callback:c})=>{a(x=>({...x,isOpen:!1,confirm:d,callback:c}))},[a]),l=u.useCallback(({text:d,okBtn:c,type:x})=>a({isOpen:!0,text:d,confirm:!1,okBtn:c,type:x??""}),[a]);return{confirmData:s,confirmValue:r,closeConfirm:t,openConfirm:l}},Lt=()=>{const{confirmData:s,closeConfirm:a}=Ne();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsxs(Qt,{children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{className:"modal_close",onClick:()=>a({confirm:!1})}),e.jsx("div",{className:"modal_body",children:e.jsx("div",{className:"modal_tit",children:s.text})}),e.jsxs("div",{className:"modal_btn",children:[e.jsx("button",{className:"confirm_btn",onClick:()=>a({confirm:!0}),children:s.okBtn}),e.jsx("button",{className:"close_btn",onClick:()=>a({confirm:!1}),children:"취소"})]})]})]})})},ze=()=>{const[s,a]=$e(Ut),r=u.useCallback(()=>{a({isOpen:!1,text:""})},[]),t=u.useCallback(l=>{a({isOpen:!0,text:l});const d=setTimeout(()=>{r()},3e3);return()=>clearTimeout(d)},[r]);return{toastData:s,openToast:t,closeToast:r}},Jt=Ee.div`
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
`,Kt=()=>{const{toastData:s}=ze();return e.jsx(e.Fragment,{children:s.isOpen&&e.jsx(Jt,{children:s.text})})},ke=Ye({key:"user",default:{isLogin:!1,isLoginError:!1,data:{user_id:null,name:null,token:null,is_company:null,is_admin:null}},effects:[({setSelf:s,onSet:a})=>{const r=localStorage.getItem("token"),t=localStorage.getItem("user_id"),l=localStorage.getItem("user_type");r&&t&&s({isLogin:!0,isLoginError:!1,data:{user_id:JSON.parse(t),name:null,token:r,is_company:JSON.parse(l)}}),a((d,c,x)=>{x?(localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type")):(localStorage.setItem("user_id",JSON.stringify(d.data.user_id??"")),localStorage.setItem("token",d.data.token??""),localStorage.setItem("user_type",JSON.stringify(d.data.is_company)??""))})}]}),Y=Pt.create({baseURL:"https://api-test.micemate.io"}),Ht=()=>{const s=Nt(ke);return W({mutationFn:async a=>(await Y({method:"POST",url:"/api/auth",headers:{"Content-Type":"application/json"},data:{email:a.email,password:a.password,remember_me:a.remember}})).data,onSuccess:a=>{const r={isSuccess:a.success,isLogin:!0,isLoginError:!1,data:{user_id:a.data.user_id,name:a.data.name,token:a.data.token,is_company:a.data.is_company,is_admin:a.data.is_admin}};s({...r})}})},Xt=s=>U({queryKey:["token",s],queryFn:async()=>(await Y({method:"GET",url:"/api/auth",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data,refetchInterval:108e5,enabled:!!s}),Wt=()=>{localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type"),location.reload()},Zt="/assets/main_logo_w-BBqllR6y.png",Gt=()=>{const s=localStorage.getItem("token"),a=G(ke),r=ye(ke),{data:t,isError:l}=Xt(s);return u.useEffect(()=>{l&&t===void 0&&r()},[t,l,r]),e.jsx("div",{className:"header",children:e.jsxs("div",{className:"inner",children:[e.jsxs("h1",{className:"main_logo",children:[a.isLogin,e.jsx(g,{to:a.isLogin?"/member/general":"/login",children:e.jsx("img",{src:Zt,alt:"마이스 메이트"})})]}),a.isLogin&&e.jsx("div",{className:"btn_wrap",children:e.jsx("button",{className:"btn blue round",onClick:Wt,children:"로그아웃"})})]})})},Dt=()=>{const s=H(),r=G(ke).isLogin;return u.useEffect(()=>{!r&&location.pathname.indexOf("/login")<0&&s("/login")},[s]),e.jsxs(Mt,{children:[e.jsx(xt,{children:e.jsxs("div",{className:"wrap",children:[e.jsx(Gt,{}),e.jsx(Ft,{})]})}),e.jsx(Lt,{}),e.jsx(Vt,{}),e.jsx(Kt,{})]})},es=Be({email:Ce().email({message:"올바른 이메일을 입력해주세요."}),password:Ce(),remember:Tt()}),ts=()=>{var j,m,f,o;const[s,a]=u.useState(!1),r=G(ke),t=Ht(),l=H(),{register:d,handleSubmit:c,setError:x,watch:i,formState:{errors:p}}=je({resolver:qe(es)}),h=i("email"),_=i("password");u.useEffect(()=>{h!=null&&h.trim()&&(_==null?void 0:_.trim())!==void 0?a(!0):a(!1)},[h,_]);const n=c(b=>{const w={email:b.email,password:b.password,remember:b.remember};t.mutate(w)});return u.useEffect(()=>{t.isSuccess&&(r.data.is_admin===!0?l("/member/general",{replace:!0}):(x("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}),localStorage.removeItem("token"),localStorage.removeItem("user_id"),localStorage.removeItem("user_type")))},[t.isSuccess,l,r.data.is_admin]),u.useEffect(()=>{var b,w,k;if(t.isError){const y=t.error;(k=(w=(b=y==null?void 0:y.response)==null?void 0:b.data)==null?void 0:w.data)!=null&&k.error?(y.response.data.data.error==="Unauthorised"&&x("apiError",{type:"manual",message:"이메일 또는 비밀번호를 확인해주세요."}),y.response.data.data.error==="Not authenticate your email"&&x("apiError",{type:"manual",message:"이메일 인증이 필요합니다."})):x("apiError",{type:"manual",message:"알 수 없는 오류가 발생했습니다."})}},[t.isError,t.error,x]),e.jsx(xt,{children:e.jsx("div",{className:"wrap",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"login_pagi",children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"login_tit",children:[e.jsx("b",{children:"LOGIN"}),e.jsx("span",{children:"로그인이 필요합니다."})]}),e.jsxs("form",{onSubmit:n,children:[e.jsxs("div",{className:"login_inp",children:[e.jsx("p",{className:"fs_16 fw_500",children:"아이디"}),e.jsx("input",{type:"text",id:"email",className:"w_full mt_12",placeholder:"아이디",autoComplete:"off",...d&&d("email")}),e.jsx("p",{className:"fs_16 fw_500 mt_25",children:"비밀번호"}),e.jsx("input",{type:"password",id:"password",className:"w_full mt_12",placeholder:"비밀번호",autoComplete:"off",...d&&d("password")}),p.email&&e.jsx("p",{className:"err_msg",children:(m=(j=p.email)==null?void 0:j.message)==null?void 0:m.toString()}),p.apiError&&e.jsx("p",{className:"err_msg",children:(o=(f=p.apiError)==null?void 0:f.message)==null?void 0:o.toString()})]}),e.jsxs("div",{className:"checkbox mt_26",children:[e.jsx("input",{id:"remember",type:"checkbox",...d&&d("remember")}),e.jsx("label",{htmlFor:"remember",children:"로그인유지"})]}),e.jsx("div",{className:"btn_wrap mt_15",children:e.jsx("button",{type:"submit",className:"btn white login_btn",disabled:!s,children:"로그인"})})]})]})})})})})},ss="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAATCAYAAAAgcwuHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKBSURBVHgBvVjtcdswDKV6/V9tUHaCegSO4A2qTBBvIGUCewOpE6SdQN0g7QRSJ7A3QIgznEAwxC/78u5wsknwEXgUSdiVuSMAwPoH2qmqqr+mAJ6j9o+aeGbPM5sCUCw1fUWe06ojvGMyBRN523s7whL4vadAUnict1HhmVJ5UDxvrcIBxN2sJVAkgPd/hDS0EZ42gQOT+hHg2JBYMezvIoCS/GXFO2/PSjC7xOQlj1xNp3BYxW/0diCbRF8vB2cJoEw4wHnvcp+a2nliVuHhOCg86PMSilEkOIGyXUhQjuYWAfrUMbQSbwkGePoARw1LwR3r24rEbIDnwPxezA0CTFdKrvs65nsUSXFsIjyYaEfmWHufIiKb87iYM1cAGbhJgJj0K7W5nHkD3Hx7uAT/kfk3n0w++ErNJg3c7xs97Up/Lng8KUL+Y5/tZ/MxOEX6Z9lAq7n2Sv/2hc3O3CGWEgFiyZTAZrZ/MeVY3DK3CoDnR71aZr5jo4znpbJVxszenth3PDuaFT9Ln3F7/TdhfF/EArffAi7iqx52cH0LxHh2zPfA2gfW3kU4ZP2yKRWAFxVjxJef0r3oG1nfc4RnYr5b1r64ZiFcB7RXuRYKIO/THvRKcA9LWOHjRH+7Mtc+FKMQcgK9EpSle4PtFTlfSHF//jLr+On3+x8ixFOY/7CYvWEf7kHcr7hKXJQnP7ZTAsPX+TGD58HzDIIDz5hR+GEeeOXhgYn9jvUNnuPhMthCOhoxcZc4rjMBZPDsAhypvwbxzKj5wGIB2PhB8cUtMkJCdUY8DpavcjYPi2VSeJBjK8dU5o6A86uI6uJWmhOuR43j8m8QPmdz/nephCcpllccVWYfO4hrGQAAAABJRU5ErkJggg==",as=()=>{const s=localStorage.getItem("token"),a=D(),r=a.search?`${a.search}&order=desc`:"?order=desc";return U({queryKey:["eventManage",a.search],queryFn:async()=>(await Y({method:"GET",url:`/api/events/manage${r}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},params:{}})).data})},ns=()=>{const s=localStorage.getItem("token");return W({mutationFn:async({ids:a})=>(await Y({method:"DELETE",url:"/api/events/manage",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:{ids:a}})).data})},is=(s,a)=>{const r=localStorage.getItem("token");return U({queryKey:["usersEventList",s,a],queryFn:async()=>(await Y({method:"GET",url:`/api/users/${s}/events?type=${a}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${r}`}})).data,enabled:!!s})},ht=s=>{const a=localStorage.getItem("token");return U({queryKey:["ApplyRegisterState",s],queryFn:async()=>(await Y({method:"GET",url:`/api/events/${s}/edit`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},Fe=s=>{const a=localStorage.getItem("token");return U({queryKey:["ApplyRegisterGeneral",s],queryFn:async()=>(await Y({method:"GET",url:`/api/events/${s}/edit/general`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},rs=s=>{const a=localStorage.getItem("token");return U({queryKey:["ApplyRegisterDetail",s],queryFn:async()=>(await Y({method:"GET",url:`/api/events/${s}/edit/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},ls=s=>{const a=localStorage.getItem("token");return U({queryKey:["ApplyRegisterInfo",s],queryFn:async()=>(await Y({method:"GET",url:`/api/events/${s}/edit/application`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},cs=()=>{const s=localStorage.getItem("token");return W({mutationFn:async({id:a,data:r})=>(await Y({method:"POST",url:`/api/events/${a}/edit/accept`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},data:r})).data})},os=s=>{const a=localStorage.getItem("token");return U({queryKey:["ApplyRegisterSurvey",s],queryFn:async()=>(await Y({method:"GET",url:`/api/events/${s.event_id}/edit/survey`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data})},ds=s=>{const a=localStorage.getItem("token");return U({queryKey:["ApplyRegisterSurvey",s],queryFn:async()=>(await Y({method:"GET",url:`/api/events/${s.event_id}/edit/faq`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data})},ps=()=>{const[s,a]=u.useState(!1),r=D(),t=()=>{a(d=>!d)},l=d=>r.pathname.indexOf(d)>=0?"active":"";return u.useEffect(()=>{r.pathname.indexOf("/member")>=0&&a(!0)},[r.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["회원관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(g,{to:"/member/general",className:`depth02 ${l("/member/general")}`,children:"회원 리스트"}),e.jsx(g,{to:"/member/corporate",className:`depth02 ${l("/member/corporate")}`,children:"기업회원 리스트"})]})]})},xs=()=>{const[s,a]=u.useState(!1),r=D(),t=()=>{a(d=>!d)},l=d=>r.pathname.indexOf(d)>=0?"active":"";return u.useEffect(()=>{r.pathname.indexOf("/event")>=0&&a(!0)},[r.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""}`,style:{cursor:"pointer"},children:["행사관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsx("div",{className:"depth02_list active",children:e.jsx(g,{to:"/event",className:`depth02 ${l("/event")}`,children:"행사 리스트"})})]})},hs=()=>{const[s,a]=u.useState(!1),r=D(),t=()=>{a(d=>!d)},l=d=>{const c=r.pathname+r.search,x=d.split("=")[1];return c.includes(d)||c.includes("/banner/detail")&&r.search.includes(`type=${x}`)||c.includes("/banner/add")&&r.search.includes(`type=${x}`)?"active":""};return u.useEffect(()=>{r.pathname.indexOf("/banner")>=0&&a(!0)},[r.pathname]),e.jsxs("li",{children:[e.jsxs("p",{onClick:t,className:`depth01 ${s?"active":""} cursor_pointer`,children:["배너관리",e.jsx("i",{className:"arrow_b_icon"})]}),s&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(g,{to:"/banner?type=0",className:`depth02 ${l("/banner?type=0")}`,children:"메인배너"}),e.jsx(g,{to:"/banner?type=1",className:`depth02 ${l("/banner?type=1")}`,children:"띠배너"})]})]})},ms=({GeneralData:s})=>{const[a,r]=u.useState(!0),t=D(),{id:l}=X(),d=()=>{r(x=>!x)},c=x=>t.pathname.indexOf(x)>=0?"active":"";return e.jsxs("div",{children:[e.jsx("div",{className:"title_tag",children:s==null?void 0:s.title}),e.jsx("ul",{className:"lnb02",children:e.jsxs("li",{children:[e.jsxs("p",{onClick:d,className:`depth01 ${a?"active":""}`,style:{cursor:"pointer"},children:["행사 상세설정",e.jsx("i",{className:"arrow_b_icon"})]}),a&&e.jsxs("div",{className:"depth02_list active",children:[e.jsx(g,{to:`/event/apply/${l}/general`,className:`depth02 ${c(`/event/apply/${l}/general`)}`,children:"기본정보"}),e.jsx(g,{to:`/event/apply/${l}/detail`,className:`depth02 ${c(`/event/apply/${l}/detail`)}`,children:"상세페이지"}),e.jsx(g,{to:`/event/apply/${l}/information`,className:`depth02 ${c(`/event/apply/${l}/information`)}`,children:"모집정보"}),e.jsx(g,{to:`/event/apply/${l}/survey`,className:`depth02 ${c(`/event/apply/${l}/survey`)}`,children:"사전설문"}),e.jsx(g,{to:`/event/apply/${l}/faq`,className:`depth02 ${c(`/event/apply/${l}/faq`)}`,children:"FAQ & 문의"})]})]})})]})},$=()=>{var x,i,p,h,_,n;const[s,a]=u.useState(null),[r,t]=u.useState(""),{id:l}=X(),d=D(),{data:c}=Fe(l?Number(l):void 0);return u.useEffect(()=>{d.pathname.indexOf("/event/apply")>=0?t("type02"):t("type01")},[d.pathname]),u.useEffect(()=>{var j,m;a(`https://api-test.micemate.io/storage/${(m=(j=c==null?void 0:c.data)==null?void 0:j.company)==null?void 0:m.company_logo}`)},[c==null?void 0:c.data]),e.jsxs("div",{className:"lnb_area",children:[r==="type01"&&e.jsxs("ul",{className:"lnb01",children:[e.jsx(ps,{}),e.jsx(xs,{}),e.jsx(hs,{})]}),r==="type02"&&e.jsxs("div",{className:"lnb02_wrap",children:[e.jsxs("div",{className:"user_area",children:[e.jsx("label",{htmlFor:"profile",children:e.jsx("div",{className:"img",children:e.jsx("img",{src:(i=(x=c==null?void 0:c.data)==null?void 0:x.company)!=null&&i.company_logo?s:ss})})}),e.jsxs("div",{className:"user_name",children:[e.jsx("div",{className:"name",children:(h=(p=c==null?void 0:c.data)==null?void 0:p.company)==null?void 0:h.company_name}),e.jsx("div",{className:"admini",children:(n=(_=c==null?void 0:c.data)==null?void 0:_.company)==null?void 0:n.company_position})]})]}),e.jsx(ms,{GeneralData:c==null?void 0:c.data})]})]})},_s=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],mt=({setFilterData:s,resetFilter:a,resetDate:r=null,userType:t=[]})=>{const[l,d]=u.useState(null),c=v().format("YYYY-MM-DD"),{register:x,handleSubmit:i,setValue:p,reset:h,watch:_}=je(),n=o=>{let b="",w=v().format("YYYY-MM-DD");switch(o){case"today":b=v().format("YYYY-MM-DD");break;case"yesterday":b=v().subtract(1,"day").format("YYYY-MM-DD"),w=b;break;case"7days":b=v().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":b=v().subtract(1,"month").format("YYYY-MM-DD");break;case"all":b="",w="";break}p("start",b),p("end",w),d(o)},j=()=>{d(null)},m=o=>{s(o)},f=()=>{h(),a(),n(r),setTimeout(()=>{m(_())},10)};return u.useEffect(()=>{n(r),m(_())},[r]),e.jsxs("form",{onSubmit:i(m),children:[e.jsx("div",{className:"table_wrap ft_table",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[_s.map(o=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:o.type,onChange:()=>n(o.type),checked:l===o.type,className:"hide"}),e.jsx("label",{htmlFor:o.type,className:"btn border_w",children:o.value})]},o.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...x("start"),id:"start",onClick:j,onChange:o=>p("start",o.target.value),defaultValue:c,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...x("end"),id:"end",onClick:j,onChange:o=>p("end",o.target.value),defaultValue:c,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...x("type"),className:"btn border_w",children:t.map(o=>e.jsx("option",{value:o.type,children:o.value},o.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...x("search"),className:"small search w_548"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{type:"submit",className:"btn small light_blue",children:"검색"}),e.jsx("button",{type:"button",className:"btn small gray",onClick:f,children:"초기화"})]})]})},us=[{type:0,text:"인증 대기",class:"col_gray"},{type:1,text:"일반 회원",class:""},{type:2,text:"탈퇴 회원",class:"col_gray"}],js=({userList:s,checkedList:a,setCheckedList:r})=>{const[t,l]=u.useState(!1),d=i=>{r(p=>p.includes(i)?p.filter(h=>h!==i):[...p,i])},c=()=>{if(t)r([]);else{const i=s.map(p=>p.id);r(i)}l(!t)},x=i=>{const p=us.find(h=>h.type===i);return p||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:c,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"아이디"}),e.jsx("th",{children:"휴대전화"}),e.jsx("th",{children:"생일"}),e.jsx("th",{children:"수신동의"}),e.jsx("th",{}),e.jsx("th",{children:"회원유형"})]})}),e.jsx("tbody",{children:s&&s.map(i=>{const{text:p,class:h}=x(i.state);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:i.id,checked:a.includes(i.id),onChange:()=>d(i.id),type:"checkbox"}),e.jsx("label",{htmlFor:i.id})]})}),e.jsx("td",{children:(i==null?void 0:i.created_at)??"-"}),e.jsx("td",{children:(i==null?void 0:i.name)??"-"}),e.jsx("td",{children:e.jsx(g,{to:`/member/general/detail/${i.id}`,children:(i==null?void 0:i.email)??"-"})}),e.jsx("td",{children:(i==null?void 0:i.contact)??"-"}),e.jsx("td",{children:(i==null?void 0:i.birth)??"-"}),e.jsx("td",{children:(i==null?void 0:i.agree)===!0?"동의":(i==null?void 0:i.agree)===!1?"동의안함":"-"}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("span",{className:h,children:p})})]},i.id)})})]})})},Pe=({total:s,page:a,setPage:r,size:t=20})=>{const l=Math.ceil(s/t),c=(Math.ceil(a/t)-1)*t+1,x=Math.min(c+t-1,l),i=_=>{r(_)},p=()=>{c>1&&i(c-1)},h=()=>{x<l&&i(x+1)};return e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("button",{onClick:p,disabled:c===1,className:"pagi_prev"}),Array.from({length:x-c+1},(_,n)=>e.jsx("button",{onClick:()=>i(c+n),className:a===c+n?"num active":"num",children:c+n},n)),e.jsx("button",{type:"button",onClick:h,disabled:x===l,className:"pagi_next"})]})},fs=()=>{const s=localStorage.getItem("token"),a=D();return U({queryKey:["userList",a.search],queryFn:async()=>(await Y({method:"GET",url:`/api/users${a.search}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},bs=()=>{const s=localStorage.getItem("token"),a=D(),r=a.search?`${a.search}&company=company`:"?company=company";return U({queryKey:["coporateList",a.search],queryFn:async()=>(await Y({method:"GET",url:`/api/users${r}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`}})).data})},_t=s=>{const a=localStorage.getItem("token");return U({queryKey:["userDetail",s],queryFn:async()=>(await Y({method:"GET",url:`/api/users/${s}/detail`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data,enabled:!!s})},ut=()=>W({mutationFn:async s=>{const a=localStorage.getItem("token");return(await Y({method:"PUT",url:`/api/users/${s.id}`,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`},data:s.modifyData})).data}}),jt=()=>{const s=localStorage.getItem("token");return W({mutationFn:async a=>(await Y({method:"DELETE",url:"/api/users",headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:a})).data})},ft=()=>W({mutationFn:async s=>(await Y({method:"PUT",url:"/api/users/password/reset",headers:{"Content-Type":"application/json"},data:{email:s}})).data}),gs=()=>{const s=localStorage.getItem("token");return W({mutationFn:async({id:a,accept:r})=>(await Y({method:"PUT",url:`/api/users/${a}/company/accept`,headers:{"Content-Type":"application/json",authorization:`Bearer ${s}`},data:{accept:r}})).data})},ys=()=>{var y,S,E,T,F,I,M,q;const s=H(),a=Ae(),{openConfirm:r}=Ne(),{openAlret:t}=fe(),l=G(K),d=ye(K),[c,x]=u.useState({}),[i,p]=u.useState(),[h,_]=u.useState([]),[n,j]=u.useState(1),{data:m}=fs(),f=jt(),o=()=>{x({}),j(1),s("?")},b=()=>{x({...c,order:c.order==="asc"?"desc":"asc"})},w=()=>{if(h.length<=0)return t({text:"목록을 선택해주세요."});r({text:`선택 [${h.length}건]을 [탈퇴]
처리 하시겠습니까?`,okBtn:"탈퇴"})},k=()=>{if(h.length<=0)return t({text:"목록을 선택해주세요."});r({text:`선택 [${h.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"삭제"})};return u.useEffect(()=>{l.confirm===!0&&h.length>0&&f.mutate({delete:l.confirm===!0,ids:h},{onSuccess:()=>{t({text:`${l.okBtn}가 완료되었습니다.`}),d(),_([]),a.invalidateQueries({queryKey:["userList"]})}})},[l.confirm]),u.useEffect(()=>{const P={page:n??1,type:c.type&&c.type!=="none"?c.type:void 0,start:c.start??void 0,end:c.end??void 0,search:c.search??void 0,order:c.order??"desc"},Q=Object.fromEntries(Object.entries(P).filter(([V,C])=>typeof C=="string"||Array.isArray(C)?C!==""&&C.length>0:C!=null).map(([V,C])=>[V,String(C)])),L=new URLSearchParams(Q).toString();p(L)},[c,n]),u.useEffect(()=>{i&&(s(`?${i}`),a.invalidateQueries({queryKey:["userList"]}))},[i]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(g,{className:"item",to:"/member/general",children:"회원 리스트"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(mt,{setFilterData:x,resetFilter:o,resetDate:"7days",userType:[{value:"회원유형",type:"none"},{value:"일반회원",type:1},{value:"탈퇴회원",type:2}]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체 "}),e.jsx("span",{className:"col_gray",children:"검색결과 "}),e.jsxs("span",{className:"fs_16",children:["[총 회원수"," ",(y=m==null?void 0:m.data)!=null&&y.total?(E=Number((S=m==null?void 0:m.data)==null?void 0:S.total))==null?void 0:E.toLocaleString():0,"명]"]})]}),e.jsx("button",{type:"button",className:"sort_btn",onClick:b,children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:w,children:"탈퇴"}),e.jsx("button",{type:"button",className:"ml_22",onClick:k,children:"삭제"})]})]}),((F=(T=m==null?void 0:m.data)==null?void 0:T.items)==null?void 0:F.length)>0?e.jsx(js,{userList:(I=m==null?void 0:m.data)==null?void 0:I.items,checkedList:h,setCheckedList:_}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 회원이 없습니다"}),((M=m==null?void 0:m.data)==null?void 0:M.total)>20&&e.jsx(Pe,{total:(q=m==null?void 0:m.data)==null?void 0:q.total,page:n,setPage:j})]})})]})},_e=()=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"2rem 0"},children:e.jsx(Bt,{color:"#dddddd",loading:!0,size:50})}),Ns=()=>U({queryKey:["category"],queryFn:async()=>(await Y.get("/api/categories")).data.data}),bt=(s,a,r)=>{let t=s.target.value.replace(/\D/g,"");t.length>7?t=t.slice(0,3)+"-"+t.slice(3,7)+"-"+t.slice(7,11):t.length>3&&(t=t.slice(0,3)+"-"+t.slice(3,7)),a(r,t)};v.extend($t);v.extend(qt);v.locale("ko");const ve=s=>v(s).format("MM월DD일(ddd) HH:mm"),ws=Be({contact:Ce().nullable().optional(),interests:Ot().array()}),Se=[{type:"1",text:"신청 행사"},{type:"2",text:"취소 내역"},{type:"3",text:"관심 행사"},{type:"4",text:"지난 행사"}],vs=()=>{var M,q,P,Q,L,V,C,ee,te,se,ae,ne,ie,re,le,ce,oe,de,pe,xe,he,A,R;const{id:s}=X(),{register:a,handleSubmit:r,setValue:t,formState:{errors:l}}=je({resolver:qe(ws)}),[d,c]=u.useState(!1),[x,i]=u.useState((M=Se==null?void 0:Se[0])==null?void 0:M.type),[p,h]=u.useState([]),[_,n]=u.useState(!1),{openToast:j}=ze(),{openAlret:m}=fe(),{data:f}=Ns(),{data:o,isLoading:b,isError:w}=_t(s?Number(s):void 0),{data:k}=is(s?Number(s):void 0,x),y=ft(),S=ut(),E=()=>{var B,z;const N=(z=(B=o==null?void 0:o.data)==null?void 0:B.terms_of_uses)==null?void 0:z.find(be=>be.id===2);return N||null},T=(N,B)=>{const z=B?[...p,N]:p.filter(be=>be!==N);h(z),t("interests",z)},F=()=>{var N;(N=o==null?void 0:o.data)!=null&&N.email&&(n(!0),y.mutate(o.data.email,{onSuccess:()=>{n(!1),m({text:"메일로 임시 비밀번호를 발송했습니다."})},onError:B=>{console.log(B)}}))},I=r(N=>{if(!s||!N.contact&&!d)return;const B={id:s?Number(s):void 0,modifyData:{interests:N.interests}};N.contact&&(B.modifyData.contact=N.contact),S.mutate(B,{onSuccess:()=>{j("수정되었습니다.")},onError:z=>{console.log(z)}})});return u.useEffect(()=>{var N;o!==void 0&&!b&&(t("contact",((N=o==null?void 0:o.data)==null?void 0:N.contact)??""),t("interests",o.data.interests),h(o.data.interests))},[o,b,t]),b?e.jsx(_e,{}):w?(alert("데이터가 없습니다."),window.history.back(),null):e.jsxs(e.Fragment,{children:[_&&e.jsx("div",{className:"loading_wrap",children:e.jsx(_e,{})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(g,{className:"item",to:"/member/general",children:"회원 리스트"}),e.jsx("p",{className:"item",children:"회원 상세정보"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"tit",children:"기본정보"})}),e.jsxs("form",{onSubmit:I,children:[e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{children:((q=o==null?void 0:o.data)==null?void 0:q.name)??"-"}),e.jsx("th",{children:"출생년도"}),e.jsx("td",{children:((P=o==null?void 0:o.data)==null?void 0:P.birth)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{children:((Q=o==null?void 0:o.data)==null?void 0:Q.email)??"-"}),e.jsx("th",{children:"성별"}),e.jsx("td",{children:((L=o==null?void 0:o.data)==null?void 0:L.sex)===!0?"여":((V=o==null?void 0:o.data)==null?void 0:V.sex)===!1?"남":"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"비밀번호"}),e.jsx("td",{children:e.jsx("button",{type:"button",className:"btn border_w w_136",onClick:F,children:"임시 비밀번호 생성"})}),e.jsx("th",{children:"비밀번호 변경일"}),e.jsx("td",{children:e.jsx("span",{className:"col_gray",children:(C=o==null?void 0:o.data)!=null&&C.password_updated_at?v((ee=o==null?void 0:o.data)==null?void 0:ee.password_updated_at).format("YYYY-MM-DD hh:mm:ss"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원구분"}),e.jsx("td",{children:e.jsx("select",{className:"btn border_w w_136",disabled:!0,children:e.jsx("option",{value:"",children:"일반회원"})})}),e.jsx("th",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"휴대폰번호"}),e.jsxs("td",{children:[e.jsx("input",{id:"contact",className:"small w_136",type:"text",...a&&a("contact"),onChange:N=>{bt(N,t,"contact")}}),((te=l.contact)==null?void 0:te.message)&&e.jsx("p",{className:"err_msg",children:(ae=(se=l.contact)==null?void 0:se.message)==null?void 0:ae.toString()})]}),e.jsx("th",{}),e.jsx("td",{})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원가입일"}),e.jsx("td",{children:e.jsx("span",{className:"col_gray",children:(ne=o==null?void 0:o.data)!=null&&ne.created_at?v((ie=o==null?void 0:o.data)==null?void 0:ie.created_at).format("YYYY-MM-DD hh:mm:ss"):"-"})}),e.jsx("th",{}),e.jsx("td",{})]})]})]})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"수신동의 및 개인정보 이용 동의"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["마케팅 정보 수신",e.jsx("br",{}),"동의 (선택)"]}),e.jsx("td",{className:"ver_top",children:((re=E())==null?void 0:re.agree)===!1?"동의 이력 없음":((le=E())==null?void 0:le.agree)===!0?`동의함 (동의일: ${(ce=E())!=null&&ce.updated_at?v((oe=E())==null?void 0:oe.updated_at).format("YYYY-MM-DD"):"-"})`:"-"})]})})]})}),d&&e.jsxs("div",{id:"moreInfo",children:[e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"추가정보"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"ver_top",children:"관심분야"}),e.jsxs("td",{children:[f&&e.jsx("div",{className:"dis_flex row_item_7",children:f.map(N=>e.jsxs("div",{className:"checkbox item",children:[e.jsx("input",{type:"checkbox",id:`checkbox-${N.id}`,checked:p.includes(N.id),onChange:B=>{T(N.id,B.target.checked)}}),e.jsx("label",{htmlFor:`checkbox-${N.id}`,children:N.name})]},N.id))}),l.interests&&e.jsx("p",{className:"err_msg",children:(pe=(de=l.interests)==null?void 0:de.message)==null?void 0:pe.toString()})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"ver_top",children:"행사 관리"}),e.jsxs("td",{children:[e.jsx("div",{children:e.jsx("select",{className:"btn border_w w_136",value:x,onChange:N=>i(N.target.value),children:Se.map(N=>e.jsx("option",{value:N.type,children:N.text},N.type))})}),((he=(xe=k==null?void 0:k.data)==null?void 0:xe.items)==null?void 0:he.length)>0?e.jsx("div",{className:"table_wrap min_h_300",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"130px"}),e.jsx("col",{width:"240px"}),e.jsx("col",{width:""}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:""})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"행사번호"}),e.jsx("th",{children:"행사명"}),e.jsx("th",{}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 신청일"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:(R=(A=k==null?void 0:k.data)==null?void 0:A.items)==null?void 0:R.map(N=>e.jsxs("tr",{children:[e.jsx("td",{children:N.id??"-"}),e.jsx("td",{children:N.title??"-"}),e.jsx("td",{}),e.jsxs("td",{children:[N.event_start_date&&ve(N.event_start_date)," ~ ",N.event_end_date&&ve(N.event_end_date)]}),e.jsx("td",{children:N.date?ve(N.date):"-"}),e.jsx("td",{})]},N.id))})]})}):e.jsx("div",{className:"table_wrap min_h_300 pt_22",children:"행사 데이터가 없습니다."})]})]})]})]})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap",children:!d&&e.jsx("button",{type:"button",className:"btn gray",onClick:()=>c(!0),children:"더보기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(g,{to:"/member/general",className:"btn blue",children:"취소"}),e.jsx("button",{type:"submit",className:"btn blue",children:"수정"})]})]})]})]})})]})]})},ks=[{type:0,text:"승인 대기",class:"btn small light_blue cursor_default"},{type:1,text:"미승인 기업",class:"col_gray"},{type:2,text:"승인 기업",class:""},{type:3,text:"탈퇴 기업",class:"col_gray"}],As=({userList:s,checkedList:a,setCheckedList:r})=>{const[t,l]=u.useState(!1),d=i=>{r(p=>p.includes(i)?p.filter(h=>h!==i):[...p,i])},c=()=>{if(t)r([]);else{const i=s.map(p=>p.id);r(i)}l(!t)},x=(i,p)=>{const h=ks.find(_=>i!==2?_.type===p:_.type===3);return h||{text:"알 수 없음",class:""}};return e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"130px"}),e.jsx("col",{width:"220px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"130px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:c,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"이름"}),e.jsx("th",{children:"아이디"}),e.jsx("th",{children:"회사명"}),e.jsx("th",{children:"요청 날짜"}),e.jsx("th",{children:"회원 상태"})]})}),e.jsx("tbody",{children:s&&s.map(i=>{const{text:p,class:h}=x(i.state,i.accept);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:i.id,checked:a.includes(i.id),onChange:()=>d(i.id),type:"checkbox"}),e.jsx("label",{htmlFor:i.id})]})}),e.jsx("td",{children:(i==null?void 0:i.created_at)??"-"}),e.jsx("td",{children:(i==null?void 0:i.name)??"-"}),e.jsx("td",{children:e.jsx(g,{to:`/member/corporate/detail/${i.id}`,children:(i==null?void 0:i.email)??"-"})}),e.jsx("td",{children:(i==null?void 0:i.company_name)??"-"}),e.jsx("td",{children:(i==null?void 0:i.requested_at)??"-"}),e.jsx("td",{children:e.jsx("span",{className:h,children:p})})]},i.id)})})]})})},Ss=()=>{var y,S,E,T,F,I,M,q;const s=H(),a=Ae(),{openConfirm:r}=Ne(),{openAlret:t}=fe(),l=G(K),d=ye(K),[c,x]=u.useState({}),[i,p]=u.useState(),[h,_]=u.useState([]),[n,j]=u.useState(1),{data:m}=bs(),f=jt(),o=()=>{x({}),j(1),s("?")},b=()=>{x({...c,order:c.order==="asc"?"desc":"asc"})},w=()=>{if(h.length<=0)return t({text:"목록을 선택해주세요."});r({text:`선택 [${h.length}건]을 [탈퇴]
처리 하시겠습니까?`,okBtn:"확인",type:"탈퇴"})},k=()=>{if(h.length<=0)return t({text:"목록을 선택해주세요."});r({text:`선택 [${h.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"확인",type:"삭제"})};return u.useEffect(()=>{l.confirm===!0&&h.length>0&&f.mutate({delete:l.type==="삭제",ids:h},{onSuccess:()=>{t({text:`${l.type}가 완료되었습니다.`}),_([]),d(),a.invalidateQueries({queryKey:["coporateList"]})}})},[l.confirm]),u.useEffect(()=>{const P={page:n??1,type:c.type&&c.type!=="none"?c.type:void 0,start:c.start??void 0,end:c.end??void 0,search:c.search??void 0,order:c.order??"desc"},Q=Object.fromEntries(Object.entries(P).filter(([V,C])=>typeof C=="string"||Array.isArray(C)?C!==""&&C.length>0:C!=null).map(([V,C])=>[V,String(C)])),L=new URLSearchParams(Q).toString();p(L)},[c,n]),u.useEffect(()=>{i&&(s(`?${i}`),a.invalidateQueries({queryKey:["userList"]}))},[i]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(g,{className:"item",to:"/member/general",children:"기업회원 리스트"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(mt,{setFilterData:x,resetFilter:o,resetDate:"7days",userType:[{value:"회원유형",type:"none"},{value:"승인대기",type:1},{value:"승인기업",type:2},{value:"탈퇴기업",type:3}]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsxs("span",{className:"fs_16",children:["[총 회원수",(y=m==null?void 0:m.data)!=null&&y.total?(E=Number((S=m==null?void 0:m.data)==null?void 0:S.total))==null?void 0:E.toLocaleString():0,"명]"]})]}),e.jsx("button",{type:"button",className:"sort_btn",onClick:b,children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:w,children:"탈퇴"}),e.jsx("button",{type:"button",className:"ml_22",onClick:k,children:"삭제"})]})]}),((F=(T=m==null?void 0:m.data)==null?void 0:T.items)==null?void 0:F.length)>0?e.jsx(As,{userList:(I=m==null?void 0:m.data)==null?void 0:I.items,checkedList:h,setCheckedList:_}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 회원이 없습니다"}),((M=m==null?void 0:m.data)==null?void 0:M.total)>20&&e.jsx(Pe,{total:(q=m==null?void 0:m.data)==null?void 0:q.total,page:n,setPage:j})]})})]})},Cs=Be({contact:Ce().nullable().optional()}),Ys=()=>{var T,F,I,M,q,P,Q,L,V,C,ee,te,se,ae,ne,ie,re,le,ce,oe,de,pe,xe,he,A,R,N,B,z,be,Re,Ie,Ue,Ve,Qe,Le,Je,Ke,He,Xe,We,Ze,Ge,De,et,tt,st,at,nt,it;const{id:s}=X(),{register:a,handleSubmit:r,setValue:t,formState:{errors:l}}=je({resolver:qe(Cs)}),[d,c]=u.useState(!1),x=ye(K),{openToast:i}=ze(),{openAlret:p}=fe(),{openConfirm:h}=Ne(),_=G(K),{data:n,isLoading:j,isError:m}=_t(s?Number(s):void 0),f=ft(),o=ut(),b=gs(),w=()=>{var J,Z;const O=(Z=(J=n==null?void 0:n.data)==null?void 0:J.terms_of_uses)==null?void 0:Z.find(ue=>ue.id===2);return O||null},k=()=>{var O;(O=n==null?void 0:n.data)!=null&&O.email&&(c(!0),f.mutate(n.data.email,{onSuccess:()=>{c(!1),p({text:"메일로 임시 비밀번호를 발송했습니다."})},onError:J=>{console.log(J)}}))},y=O=>{var Z;const J=O?"승인":"미승인";h({text:`[${((Z=n==null?void 0:n.data)==null?void 0:Z.name)??"-"}]회원 기업회원으로 전환을 ${J}
처리 하시겠습니까?`,okBtn:"확인",type:J})};u.useEffect(()=>{_.confirm===!0&&b.mutate({id:s?Number(s):void 0,accept:_.type==="승인"},{onSuccess:()=>{p({text:`${_.type} 처리되었습니다.`,callback:()=>{location.reload()}}),x()},onError:O=>{console.log(O)}})},[_.confirm]);const S=r(O=>{if(!s||!O.contact)return;const J={id:s?Number(s):void 0,modifyData:{...O}};o.mutate(J,{onSuccess:()=>{i("수정되었습니다.")},onError:Z=>{console.log(Z)}})}),E=()=>{var J,Z;const O=`https://api-test.micemate.io/storage/${(Z=(J=n==null?void 0:n.data)==null?void 0:J.company)==null?void 0:Z.company_id_file}`;fetch(O).then(ue=>ue.blob()).then(ue=>{var lt,ct;const rt=window.URL.createObjectURL(new Blob([ue])),we=document.createElement("a");we.href=rt,we.download=((ct=(lt=n==null?void 0:n.data)==null?void 0:lt.company)==null?void 0:ct.company_id_file.split("/").pop())||"download",document.body.appendChild(we),we.click(),window.URL.revokeObjectURL(rt),document.body.removeChild(we)}).catch(ue=>{console.error("파일 다운로드 오류:",ue)})};return u.useEffect(()=>{var O;n!==void 0&&!j&&t("contact",((O=n==null?void 0:n.data)==null?void 0:O.contact)??"")},[n,j,t]),j?e.jsx(_e,{}):m?(alert("데이터가 없습니다."),window.history.back(),null):e.jsxs(e.Fragment,{children:[d&&e.jsx("div",{className:"loading_wrap",children:e.jsx(_e,{})}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/member/general",children:"회원관리"}),e.jsx(g,{className:"item",to:"/member/corporate",children:"기업회원 리스트"}),e.jsx("p",{className:"item",children:"기업회원 상세정보"}),((F=(T=n==null?void 0:n.data)==null?void 0:T.company)==null?void 0:F.accept)===0&&e.jsx("i",{className:"btn light_blue small",children:"승인대기"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h3",{className:"tit",children:"기본정보"})}),e.jsxs("form",{onSubmit:S,children:[e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"182px"}),e.jsx("col",{width:"135px"}),e.jsx("col",{width:"160px"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"이름"}),e.jsx("td",{colSpan:3,children:((I=n==null?void 0:n.data)==null?void 0:I.name)??"-"}),e.jsx("th",{children:"출생년도"}),e.jsx("td",{colSpan:3,children:((M=n==null?void 0:n.data)==null?void 0:M.birth)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"아이디"}),e.jsx("td",{colSpan:3,children:((q=n==null?void 0:n.data)==null?void 0:q.email)??"-"}),e.jsx("th",{children:"성별"}),e.jsx("td",{colSpan:3,children:((P=n==null?void 0:n.data)==null?void 0:P.sex)===!0?"여":((Q=n==null?void 0:n.data)==null?void 0:Q.sex)===!1?"남":"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"비밀번호"}),e.jsx("td",{colSpan:3,children:e.jsx("button",{className:"btn border_w w_136",onClick:k,disabled:((V=(L=n==null?void 0:n.data)==null?void 0:L.company)==null?void 0:V.accept)!==2,children:"임시 비밀번호 생성"})}),e.jsx("th",{children:"비밀번호 변경일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:(C=n==null?void 0:n.data)!=null&&C.password_updated_at?v((ee=n==null?void 0:n.data)==null?void 0:ee.password_updated_at).format("YYYY-MM-DD hh:mm:ss"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원구분"}),e.jsx("td",{colSpan:3,children:e.jsx("select",{className:"btn border_w w_136",disabled:!0,children:e.jsx("option",{value:"",children:"기업회원"})})}),e.jsx("th",{children:"회사명"}),e.jsx("td",{className:"pr_0",children:((se=(te=n==null?void 0:n.data)==null?void 0:te.company)==null?void 0:se.company_name)??"-"}),e.jsx("th",{children:"기업 전환일"}),e.jsx("td",{className:"pr_0",children:e.jsx("span",{className:"col_gray",children:(ne=(ae=n==null?void 0:n.data)==null?void 0:ae.company)!=null&&ne.accepted_at?v((re=(ie=n==null?void 0:n.data)==null?void 0:ie.company)==null?void 0:re.accepted_at).format("YYYY-MM-DD"):"-"})})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"휴대번호"}),e.jsxs("td",{colSpan:3,children:[e.jsx("input",{id:"contact",className:"small w_136",type:"text",...a&&a("contact"),onChange:O=>{bt(O,t,"contact")},disabled:((ce=(le=n==null?void 0:n.data)==null?void 0:le.company)==null?void 0:ce.accept)!==2}),((oe=l.contact)==null?void 0:oe.message)&&e.jsx("p",{className:"err_msg",children:(pe=(de=l.contact)==null?void 0:de.message)==null?void 0:pe.toString()})]}),e.jsx("th",{children:"담당자"}),e.jsx("td",{className:"pr_0",children:((he=(xe=n==null?void 0:n.data)==null?void 0:xe.company)==null?void 0:he.name)??"-"}),e.jsx("th",{children:"소속 부서/ 직책"}),e.jsxs("td",{className:"pr_0",children:[((R=(A=n==null?void 0:n.data)==null?void 0:A.company)==null?void 0:R.department)??"-"," /"," ",((B=(N=n==null?void 0:n.data)==null?void 0:N.company)==null?void 0:B.position)??"-"]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"회원가입일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:(z=n==null?void 0:n.data)!=null&&z.created_at?v((be=n==null?void 0:n.data)==null?void 0:be.created_at).format("YYYY-MM-DD hh:mm:ss"):"-"})}),e.jsx("th",{children:"사업자등록번호"}),e.jsx("td",{className:"pr_0",children:((Ie=(Re=n==null?void 0:n.data)==null?void 0:Re.company)==null?void 0:Ie.company_id)??"-"}),e.jsx("th",{children:"연락처"}),e.jsx("td",{className:"pr_0",children:((Ve=(Ue=n==null?void 0:n.data)==null?void 0:Ue.company)==null?void 0:Ve.contact)??"-"})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"사업자등록"}),e.jsx("td",{colSpan:((Le=(Qe=n==null?void 0:n.data)==null?void 0:Qe.company)==null?void 0:Le.accept)===1?3:7,children:e.jsxs("div",{className:"dis_flex gap32",children:[e.jsx("span",{className:"col_gray",children:((Ke=(Je=n==null?void 0:n.data)==null?void 0:Je.company)==null?void 0:Ke.company_id_file_name)??"-"}),((He=n==null?void 0:n.data)==null?void 0:He.company)&&e.jsx("button",{type:"button",className:"btn border_w",onClick:E,children:"저장"})]})}),((We=(Xe=n==null?void 0:n.data)==null?void 0:Xe.company)==null?void 0:We.accept)===1&&e.jsxs(e.Fragment,{children:[e.jsx("th",{children:"탈퇴일"}),e.jsx("td",{colSpan:3,children:e.jsx("span",{className:"col_gray",children:((Ze=n==null?void 0:n.data)==null?void 0:Ze.deleted_at)??"-"})})]})]})]})]})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"tit",children:"수신동의 및 개인정보 이용 동의"})}),e.jsx("div",{className:"table_wrap mt_14",children:e.jsxs("table",{className:"type2",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"135px"}),e.jsx("col",{width:"*"})]}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:["마케팅 정보 수신",e.jsx("br",{}),"동의 (선택)"]}),e.jsx("td",{className:"ver_top",children:((Ge=w())==null?void 0:Ge.agree)===!1?"동의 이력 없음":((De=w())==null?void 0:De.agree)===!0?`동의함 (동의일: ${(et=w())!=null&&et.updated_at?v((tt=w())==null?void 0:tt.updated_at).format("YYYY-MM-DD"):"-"})`:"-"})]})})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_190",children:[e.jsx("div",{className:"btn_wrap"}),e.jsx("div",{className:"btn_wrap gap23",children:((at=(st=n==null?void 0:n.data)==null?void 0:st.company)==null?void 0:at.accept)===0?e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn gray",onClick:()=>y(!1),children:"미승인"}),e.jsx("button",{type:"button",className:"btn light_blue",onClick:()=>y(!0),children:"승인"})]}):((it=(nt=n==null?void 0:n.data)==null?void 0:nt.company)==null?void 0:it.accept)===2?e.jsxs(e.Fragment,{children:[e.jsx(g,{to:"/member/corporate",className:"btn blue",children:"취소"}),e.jsx("button",{type:"submit",className:"btn blue",children:"수정"})]}):e.jsx(g,{to:"/member/corporate",className:"btn blue",children:"확인"})})]})]})]})})]})]})},Es=({boardData:s})=>{const a={ongoing:{title:"진행중인 행사",unit:"개"},pending:{title:"행사 등록 승인대기",unit:"개"},editing:{title:"오늘 신규 등록 행사",unit:"개"},total:{title:"누적 행사 수",unit:"건"}};return e.jsx("div",{className:"dashboard_panel_wrap",children:e.jsx("ul",{children:s&&Object.entries(s).map(([r,{value:t,today:l}])=>e.jsxs("li",{children:[e.jsx("div",{className:"tit",children:a[r].title}),e.jsxs("div",{className:"num_wrap",children:[e.jsx("span",{className:"num",children:r==="editing"?l?Number(l).toLocaleString():0:t?Number(t).toLocaleString():0}),e.jsx("span",{children:a[r].unit})]}),r!=="editing"?l>0&&e.jsx("div",{className:"increase",children:`+${l?Number(l).toLocaleString():0}`}):null]},r))})})},Fs=[{value:"등록일",type:"1"},{value:"행사 개설일",type:"2"}],Ps=[{value:"오늘",type:"today"},{value:"어제",type:"yesterday"},{value:"7일",type:"7days"},{value:"1개월",type:"1month"},{value:"전체",type:"all"}],Ts=[{value:"전체",type:"none"},{value:"승인대기",type:"1"},{value:"수정중",type:"2"},{value:"모집대기",type:"3"},{value:"모집중",type:"4"},{value:"마감",type:"5"},{value:"행사종료",type:"6"}],Os=({setFilterData:s,resetFilter:a,resetDate:r=null})=>{const[t,l]=u.useState(null),d=v().format("YYYY-MM-DD"),{register:c,handleSubmit:x,setValue:i,reset:p,watch:h}=je(),_=f=>{let o="",b=v().format("YYYY-MM-DD");switch(f){case"today":o=v().format("YYYY-MM-DD");break;case"yesterday":o=v().subtract(1,"day").format("YYYY-MM-DD"),b=o;break;case"7days":o=v().subtract(7,"day").format("YYYY-MM-DD");break;case"1month":o=v().subtract(1,"month").format("YYYY-MM-DD");break;case"all":o="",b="";break}i("start",o),i("end",b),l(f)},n=()=>{l(null)},j=f=>{s(f)},m=()=>{p(),a(),_(r)};return u.useEffect(()=>{_(r),j(h())},[r]),e.jsx("form",{onSubmit:x(j),children:e.jsx("div",{className:"table_wrap ft_table mt_20",children:e.jsxs("table",{className:"type4",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"60px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{className:"btn border_w w_96",...c("dateType"),children:Fs.map(f=>e.jsx("option",{value:f.type,children:f.value},f.type))})}),Ps.map(f=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"dateFilter",id:f.type,onChange:()=>_(f.type),checked:t===f.type,className:"hide"}),e.jsx("label",{htmlFor:f.type,className:"btn border_w",children:f.value})]},f.type)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...c("start"),id:"start",onClick:n,onChange:f=>i("start",f.target.value),defaultValue:d,className:"small w_104"}),e.jsx("label",{htmlFor:"start",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~ "}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"date",...c("end"),id:"end",onClick:n,onChange:f=>i("end",f.target.value),defaultValue:d,className:"small w_104"}),e.jsx("label",{htmlFor:"end",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{className:"txt_left",children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsx("select",{...c("state"),className:"btn border_w w_96",children:Ts.map(f=>e.jsx("option",{value:f.type,children:f.value},f.type))})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{type:"text",placeholder:"전체",...c("search"),className:"small search w_364"})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("button",{type:"submit",className:"btn small w_83 light_blue",children:"검색"}),e.jsx("button",{type:"button",className:"btn small w_83 light_gray ml_4",onClick:m,children:"초기화"})]})]})]})]})]})})})},$s="https://www.micemate.io/detail",qs=({setOpen:s,data:a})=>e.jsxs("div",{className:"modal_wrap prompt01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{type:"button",className:"modal_close",onClick:()=>s(!1)}),e.jsxs("div",{className:"modal_body",children:[e.jsx("div",{className:"modal_tit",children:"반려사유"}),e.jsx("div",{children:e.jsx("textarea",{className:"mt_8",rows:12,readOnly:!0,children:a??""})})]}),e.jsx("div",{className:"modal_btn mt_63",children:e.jsx("button",{type:"button",className:"confirm_btn",onClick:()=>s(!1),children:"확인"})})]})]}),Bs=[{type:0,text:"임시 저장",class:"yellow"},{type:1,text:"승인 대기",class:"brighter_blue"},{type:2,text:"수정 중",class:"yellow"},{type:3,text:"모집 대기",class:"brighter_gray"},{type:4,text:"모집 중",class:"brighter_gray"},{type:5,text:"마감",class:"gray"},{type:6,text:"행사 종료",class:"gray"}],zs=({eventList:s,checkedList:a,setCheckedList:r})=>{const[t,l]=u.useState(!1),[d,c]=u.useState(""),[x,i]=u.useState(!1),p=n=>{r(j=>j.includes(n)?j.filter(m=>m!==n):[...j,n])},h=()=>{if(t)r([]);else{const n=s.map(j=>j.id);r(n)}l(!t)},_=n=>{const j=Bs.find(m=>m.type===n);return j||{text:"알 수 없음",class:""}};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1 table_hover",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"140px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"all_chk",onChange:h,type:"checkbox"}),e.jsx("label",{htmlFor:"all_chk"})]})}),e.jsx("th",{children:"행사번호"}),e.jsx("th",{className:"txt_left",children:"행사명"}),e.jsx("th",{children:"행사 일시"}),e.jsx("th",{children:"행사 개설일"}),e.jsx("th",{}),e.jsx("th",{children:"진행 상태"})]})}),e.jsx("tbody",{children:s&&s.map(n=>{const{text:j,class:m}=_(n.state);return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:n.id,checked:a.includes(n.id),onChange:()=>p(n.id),type:"checkbox"}),e.jsx("label",{htmlFor:n.id})]})}),e.jsx("td",{children:n.id??"-"}),e.jsx("td",{className:"txt_left",children:n.state===3||n.state===4||n.state===5||n.state===6?e.jsx(g,{to:`${$s}/${n.id}`,target:"_blank",children:n.title??"-"}):e.jsx(g,{to:`/event/apply/${n.id}`,children:n.title??"-"})}),e.jsx("td",{children:n.start_date?ve(n.start_date):"-"}),e.jsx("td",{children:n.publish_date?ve(n.publish_date):"-"}),e.jsx("td",{children:n.reject_reason?e.jsx("button",{className:"underline col_blue",onClick:()=>{i(!0),c(n.reject_reason)},children:"반려사유"}):""}),e.jsx("td",{children:e.jsx("i",{className:`btn small  w_72 ${m}`,children:j})})]},n.id)})})]})}),x&&e.jsx(qs,{setOpen:i,data:d})]})},Ms=()=>{var w,k,y,S,E,T;const s=H(),a=Ae(),{openConfirm:r}=Ne(),{openAlret:t}=fe(),l=G(K),d=ye(K),[c,x]=u.useState({}),[i,p]=u.useState(),[h,_]=u.useState([]),[n,j]=u.useState(1),{data:m}=as(),f=ns(),o=()=>{x({}),j(1),s("?")},b=()=>{if(h.length<=0)return t({text:"목록을 선택해주세요."});r({text:`선택 [${h.length}건]을 [삭제]
처리 하시겠습니까?`,okBtn:"확인"})};return u.useEffect(()=>{l.confirm===!0&&h.length>0&&f.mutate({ids:h},{onSuccess:()=>{t({text:"삭제가 완료되었습니다."}),d(),_([]),a.invalidateQueries({queryKey:["eventManage"]})}})},[l.confirm]),u.useEffect(()=>{const F={page:n??1,type:c.type&&c.type!=="none"?c.type:void 0,dateType:c.dateType??1,start:c.start??void 0,end:c.end??void 0,state:c.state!=="none"?c.state:void 0,search:c.search??void 0},I=Object.fromEntries(Object.entries(F).filter(([q,P])=>typeof P=="string"||Array.isArray(P)?P!==""&&P.length>0:P!=null).map(([q,P])=>[q,String(P)])),M=new URLSearchParams(I).toString();p(M)},[c,n]),u.useEffect(()=>{i&&(s(`?${i}`),a.invalidateQueries({queryKey:["userList"]}))},[i]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/event",children:"행사관리"}),e.jsx(g,{className:"item",to:"/event",children:"행사 리스트"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(Es,{boardData:(w=m==null?void 0:m.data)==null?void 0:w.summary}),e.jsx(Os,{setFilterData:x,resetFilter:o,resetDate:"all"}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsx("h3",{className:"fs_18",children:"전체 검색결과"}),e.jsx("button",{type:"button",className:"pr_30",onClick:b,children:"삭제"})]}),((y=(k=m==null?void 0:m.data)==null?void 0:k.items)==null?void 0:y.length)>0?e.jsx(zs,{eventList:(S=m==null?void 0:m.data)==null?void 0:S.items,checkedList:h,setCheckedList:_}):e.jsx("div",{className:"table_wrap mt_22",children:"해당하는 행사가 없습니다"}),((E=m==null?void 0:m.data)==null?void 0:E.total)>20&&e.jsx(Pe,{total:(T=m==null?void 0:m.data)==null?void 0:T.total,page:n,setPage:j})]})})]})},Rs=({setOpen:s,title:a,reason:r,setReason:t,onSubmit:l})=>e.jsxs("div",{className:"modal_wrap prompt01",children:[e.jsx("div",{className:"dim_layer"}),e.jsxs("div",{className:"modal_inner",children:[e.jsx("button",{type:"button",className:"modal_close",onClick:()=>s(!1)}),e.jsxs("div",{className:"modal_body",children:[e.jsxs("div",{className:"modal_tit",children:["[",a,"] 게시를",e.jsx("br",{}),"반려 처리 하시겠습니까?"]}),e.jsx("div",{children:e.jsxs("div",{children:[e.jsx("p",{className:"fs_16 fw_600",children:"*반려사유 작성"}),e.jsx("textarea",{className:"mt_8",placeholder:"세부 반려사유를 작성해주세요.",rows:12,value:r,onChange:d=>t(d.target.value)})]})})]}),e.jsxs("div",{className:"modal_btn mt_63",children:[e.jsx("button",{type:"button",className:"confirm_btn",onClick:()=>{l==null||l(),s(!1)},children:"확인"}),e.jsx("button",{type:"button",className:"close_btn",onClick:()=>s(!1),children:"취소"})]})]})]}),Me=()=>{var f;const{id:s}=X(),a=H(),{openConfirm:r}=Ne(),{openAlret:t}=fe(),l=G(K),[d,c]=u.useState(""),[x,i]=u.useState(!1),p=ye(K),{data:h}=Fe(s?Number(s):void 0),{data:_}=ht(s?Number(s):void 0),n=cs(),j=o=>{var w;if(["general","detail","application","survey","faq"].some(k=>(_==null?void 0:_.data[k])===!1))return t({text:"작성완료되지 않은 항목이 존재합니다."});switch(o){case 0:return i(!0);case 1:return r({text:`[${((w=h==null?void 0:h.data)==null?void 0:w.title)??""}] 게시를 
승인 처리 하시겠습니까?`,okBtn:"확인"});default:return}},m=()=>{const o=sessionStorage.getItem("EVENT_ACCEPT"),b=JSON.parse(o),w=JSON.parse(sessionStorage.getItem("EVENT_SURVEY")),k=JSON.parse(sessionStorage.getItem("EVENT_FAQ")),y={...b==null?void 0:b.reject,...w.reject,...k.reject,reason:d},S={id:s?Number(s):void 0,data:{accept:!1,reject:{...y}}};console.log(S),n.mutate(S,{onSuccess:()=>{t({text:"행사가 반려되었습니다.",callback:()=>{location.reload()}}),p()},onError:E=>{console.error("변이 실패:",E)}})};return u.useEffect(()=>{l.confirm===!0&&n.mutate({id:s?Number(s):void 0,data:{accept:!0}},{onSuccess:()=>{t({text:"행사가 승인되었습니다."}),p(),a("/event")}})},[l.confirm]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn gray",onClick:()=>j(0),children:"반려"}),e.jsx("button",{className:"btn light_blue",onClick:()=>j(1),children:"승인"})]}),x&&e.jsx(Rs,{setOpen:i,title:((f=h==null?void 0:h.data)==null?void 0:f.title)??"",reason:d,setReason:c,onSubmit:m})]})},ot=s=>{switch(s){case 0:return{text:"· 작성중",class:"col_orange"};case 1:return{text:"· 승인 대기중",class:"col_darkblue"};case 2:return{text:"· 수정 필요",class:"col_orange"};case 3:return{text:"· 완료",class:"col_darkblue"};default:return{text:"· 알 수 없음",class:"col_orange"}}},Is=s=>{switch(s){case!0:return{text:"작성완료",class:"col_blue"};case!1:return{text:"작성 전",class:"col_yellow"};default:return{text:"알 수 없음",class:"col_orange"}}},Us=[{title:"기본정보",key:"general",url:"general"},{title:"상세페이지",key:"detail",url:"detail"},{title:"모집정보",key:"application",url:"information"},{title:"사전설문",key:"survey",url:"survey"},{title:"FAQ & 문의",key:"faq",url:"faq"}],Vs=()=>{var c,x;const{id:s}=X(),a=H(),{data:r}=Fe(s?Number(s):void 0),{data:t,isLoading:l,isError:d}=ht(s?Number(s):void 0);return u.useEffect(()=>{var _,n;if(!r)return sessionStorage.removeItem("EVENT_ACCEPT");const i=sessionStorage.getItem("EVENT_ACCEPT"),p=JSON.parse(i);let h;i&&p.id===s?h={id:s,reject:{...p.reject,...(_=r==null?void 0:r.data)==null?void 0:_.is_reject}}:h={id:s,reject:{...(n=r==null?void 0:r.data)==null?void 0:n.is_reject}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(h))},[r]),l?e.jsx(_e,{}):d||!t?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"행사 상세설정"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위해 내용을 작성해주세요."})}),e.jsx("div",{className:"tit_wrap mt_44",children:e.jsx("h3",{className:"fs_20",children:"행사 등록 준비 상태"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"border_item w_767",children:e.jsx("span",{className:`${ot((c=t==null?void 0:t.data)==null?void 0:c.state).class}`,children:ot((x=t==null?void 0:t.data)==null?void 0:x.state).text})})}),e.jsx("div",{className:"tit_wrap mt_26",children:e.jsx("h3",{className:"fs_20",children:"작성 항목"})}),e.jsx("div",{className:"dis_flex mt_16",children:e.jsx("div",{className:"w_767",children:e.jsx("ul",{className:"border_item_list",children:Us.map(i=>{var p;return e.jsxs("li",{onClick:()=>a(`/event/apply/${s}/${i.url}`),style:{cursor:"pointer"},children:[e.jsx("span",{className:"tit",children:i.title}),e.jsx("p",{className:"btn gray",children:Is((p=t==null?void 0:t.data)==null?void 0:p[i.key]).text})]},i.key)})})})}),e.jsxs("div",{className:"dis_flex justify_between mt_40",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(g,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsx(Me,{})]})]})})]})},Qs=[{type:1,name:"무료"},{type:2,name:"사전 신청 시 무료 / 현장 구매 시 유료"},{type:3,name:"사전 신청 시 무료 / 기간 한정 유료 / 현장 구매 시 유료"},{type:4,name:"사전 신청 유료 / 현장 결제 유료"},{type:5,name:"유료"}],Ls=()=>{var x,i,p,h,_,n,j,m,f,o,b,w,k,y,S,E,T,F,I,M,q,P,Q,L,V,C,ee,te,se,ae,ne,ie,re,le,ce,oe,de,pe,xe,he;const{id:s}=X(),[a,r]=u.useState({}),{data:t,isLoading:l,isError:d}=Fe(s?Number(s):void 0),c=(A,R)=>{const N=sessionStorage.getItem("EVENT_ACCEPT"),B=JSON.parse(N);let z;N&&B.id===s?z={id:s,reject:{...B.reject,[R]:A.target.checked??!1}}:z={id:s,reject:{[R]:A.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(z)),r(z==null?void 0:z.reject)};return u.useEffect(()=>{const A=sessionStorage.getItem("EVENT_ACCEPT"),R=JSON.parse(A);A&&R.id===s?r(R==null?void 0:R.reject):(r({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),l?e.jsx(_e,{}):d?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"기본정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참관객 모집을 위한 행사의 기본 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"fs_20",children:["프로젝트 제목 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_767",type:"text",value:((x=t==null?void 0:t.data)==null?void 0:x.title)??"",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"title",type:"checkbox",checked:(a==null?void 0:a.title)??!1,onChange:A=>c(A,"title")}),e.jsx("label",{htmlFor:"title"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 분야 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("select",{className:"w_767",disabled:!0,children:e.jsx("option",{value:(i=t==null?void 0:t.data)==null?void 0:i.category.id,children:(p=t==null?void 0:t.data)==null?void 0:p.category.name})}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"category",type:"checkbox",checked:(a==null?void 0:a.category)??!1,onChange:A=>c(A,"category")}),e.jsx("label",{htmlFor:"category"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["대표 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 대표 이미지를 등록해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"대표 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 385*480픽셀(세로형), 1280*720픽셀(가로형) / 72dpi 이상"]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"img",type:"checkbox",checked:(a==null?void 0:a.img)??!1,onChange:A=>c(A,"img")}),e.jsx("label",{htmlFor:"img"})]})]}),e.jsxs("div",{className:"dis_flex mt_10 gap16",children:[e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"img1",className:"hide",disabled:!0}),e.jsxs("label",{htmlFor:"img1",className:"file_inp vertical preview_label",children:[((h=t==null?void 0:t.data)==null?void 0:h.img1)&&e.jsx("span",{className:"preview_img",children:e.jsx("img",{src:`https://api-test.micemate.io/storage/${(_=t==null?void 0:t.data)==null?void 0:_.img1}`})}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"세로형"})]}),e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"img2",className:"hide",disabled:!0}),e.jsxs("label",{htmlFor:"img2",className:"file_inp horizontal preview_label",children:[((n=t==null?void 0:t.data)==null?void 0:n.img2)&&e.jsx("span",{className:"preview_img",children:e.jsx("img",{src:`https://api-test.micemate.io/storage/${(j=t==null?void 0:t.data)==null?void 0:j.img2}`})}),"0 / 1"]}),e.jsx("p",{className:"txt_center fs_12 mt_7",children:"가로형"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 일자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",id:"event_start_date",placeholder:"행사 시작 일자를 선택해주세요.",readOnly:!0,value:(m=t==null?void 0:t.data)!=null&&m.event_start_date?v((f=t==null?void 0:t.data)==null?void 0:f.event_start_date).format("YYYY-MM-DD"):""}),e.jsx("i",{className:"date_icon"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",id:"event_end_date",placeholder:"행사 종료 일자를 선택해주세요.",readOnly:!0,value:(o=t==null?void 0:t.data)!=null&&o.event_end_date?v((b=t==null?void 0:t.data)==null?void 0:b.event_end_date).format("YYYY-MM-DD"):""}),e.jsx("i",{className:"date_icon"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"date",type:"checkbox",checked:(a==null?void 0:a.date)??!1,onChange:A=>c(A,"date")}),e.jsx("label",{htmlFor:"date"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 시간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"num_inp_wrap flex1",children:[e.jsx("input",{type:"text",placeholder:"행사 시작 시간을 입력해주세요.",value:(w=t==null?void 0:t.data)!=null&&w.event_start_date?v((k=t==null?void 0:t.data)==null?void 0:k.event_start_date).format("HH:mm"):"",readOnly:!0}),e.jsx("button",{className:"increase"}),e.jsx("button",{className:"decrease"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"num_inp_wrap flex1",children:[e.jsx("input",{type:"text",placeholder:"행사 종료 시간을 입력해주세요.",value:(y=t==null?void 0:t.data)!=null&&y.event_end_date?v((S=t==null?void 0:t.data)==null?void 0:S.event_end_date).format("HH:mm"):"",readOnly:!0}),e.jsx("button",{className:"increase"}),e.jsx("button",{className:"decrease"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"time",type:"checkbox",checked:(a==null?void 0:a.time)??!1,onChange:A=>c(A,"time")}),e.jsx("label",{htmlFor:"time"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["비용 설정 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex justify_between w_767",children:[e.jsx("select",{className:"w_372",disabled:!0,children:e.jsx("option",{value:((E=t==null?void 0:t.data)==null?void 0:E.payable_type)??"",children:((T=Qs.find(A=>{var R;return A.type===((R=t==null?void 0:t.data)==null?void 0:R.payable_type)}))==null?void 0:T.name)??""})}),((F=t==null?void 0:t.data)==null?void 0:F.payable_type)===2&&e.jsx("div",{id:"_sel1",children:e.jsx("input",{type:"number",className:"w_372",placeholder:"현장 신청 비용을 입력해주세요.",value:((I=t==null?void 0:t.data)==null?void 0:I.payable_price2)??"",readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"payable",type:"checkbox",checked:(a==null?void 0:a.payable)??!1,onChange:A=>c(A,"payable")}),e.jsx("label",{htmlFor:"payable"})]})]}),(((M=t==null?void 0:t.data)==null?void 0:M.payable_type)===3||((q=t==null?void 0:t.data)==null?void 0:q.payable_type)===4)&&e.jsxs("div",{id:"_sel2",children:[e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsxs("div",{className:"dis_flex justify_between w_767 gap23",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 시작 날짜",value:(P=t==null?void 0:t.data)!=null&&P.payable_start_date?v((Q=t==null?void 0:t.data)==null?void 0:Q.payable_start_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("input",{type:"date"})]}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"유료 종료 날짜",value:(L=t==null?void 0:t.data)!=null&&L.payable_end_date?v((V=t==null?void 0:t.data)==null?void 0:V.payable_end_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("input",{type:"date"})]}),e.jsx("input",{type:"number",className:"w_372",placeholder:"유료 사전 신청 기간의 비용을 입력해주세요.",value:((C=t==null?void 0:t.data)==null?void 0:C.payable_price1)??"",readOnly:!0})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)",value:((ee=t==null?void 0:t.data)==null?void 0:ee.payable_price_url)??"",readOnly:!0})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("div",{className:"w_767 txt_center",children:e.jsx("i",{className:"blue_icon_box",children:"+"})})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"number",className:"w_372",placeholder:"현장 신청 비용을 입력해주세요.",value:((te=t==null?void 0:t.data)==null?void 0:te.payable_price2)??"",readOnly:!0})})]}),((se=t==null?void 0:t.data)==null?void 0:se.payable_type)===5&&e.jsx("div",{id:"_sel4",children:e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_25",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)",value:((ae=t==null?void 0:t.data)==null?void 0:ae.payable_price_url)??""})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 진행 방식 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap11",children:[e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-1",type:"checkbox",checked:((ne=t==null?void 0:t.data)==null?void 0:ne.progress_type)===0,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-1",children:"오프라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-2",type:"checkbox",checked:((ie=t==null?void 0:t.data)==null?void 0:ie.progress_type)===1,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-2",children:"온라인 행사"})]}),e.jsxs("div",{className:"checkbox02 flex1 col_gray",children:[e.jsx("input",{id:"checkbox-3",type:"checkbox",checked:((re=t==null?void 0:t.data)==null?void 0:re.progress_type)===2,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-3",children:"하이브리드 행사"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"progress",type:"checkbox",checked:(a==null?void 0:a.progress)??!1,onChange:A=>c(A,"progress")}),e.jsx("label",{htmlFor:"progress"})]})]}),(((le=t==null?void 0:t.data)==null?void 0:le.progress_type)===1||((ce=t==null?void 0:t.data)==null?void 0:ce.progress_type)===2)&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"온라인 행사 url를 입력해주세요. (온라인 / 하이브리드 행사 선택 시)",readOnly:!0,value:((oe=t==null?void 0:t.data)==null?void 0:oe.progress_url)??""})}),(((de=t==null?void 0:t.data)==null?void 0:de.progress_type)===0||((pe=t==null?void 0:t.data)==null?void 0:pe.progress_type)===2)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["행사 운영 위치 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{type:"text",className:"w_767",placeholder:"도로명/지번 주소 검색 (오프라인 / 하이브리드 행사 선택 시)",readOnly:!0,value:((xe=t==null?void 0:t.data)==null?void 0:xe.position1)??""}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"position",type:"checkbox",checked:(a==null?void 0:a.position)??!1,onChange:A=>c(A,"position")}),e.jsx("label",{htmlFor:"position"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_18",children:e.jsx("input",{type:"text",className:"w_767",placeholder:"세부 주소",readOnly:!0,value:((he=t==null?void 0:t.data)==null?void 0:he.position2)??""})})]}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(g,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(g,{to:`/event/apply/${s}`,className:"btn gray",children:"뒤로"}),e.jsx(g,{to:`/event/apply/${s}/detail`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Js=()=>{var n,j,m,f;const{id:s}=X(),a=u.useRef(),[r,t]=u.useState(""),[l,d]=u.useState({}),{data:c,isLoading:x,isError:i}=rs(s?Number(s):void 0),p=u.useMemo(()=>({toolbar:{container:[[{header:"1"},{header:"2"}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{align:[]}],["image"]]},clipboard:{matchVisual:!1}}),[]),h=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","align","image"],_=(o,b)=>{const w=sessionStorage.getItem("EVENT_ACCEPT"),k=JSON.parse(w);let y;w&&k.id===s?y={id:s,reject:{...k.reject,[b]:o.target.checked??!1}}:y={id:s,reject:{[b]:o.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(y)),d(y==null?void 0:y.reject)};return u.useEffect(()=>{const o=sessionStorage.getItem("EVENT_ACCEPT"),b=JSON.parse(o);o&&b.id===s?d(b==null?void 0:b.reject):(d({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),u.useEffect(()=>{c!==void 0&&t(c.data.content)},[c]),x?e.jsx(_e,{}):i?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"상세페이지"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 등록을 위한 내용을 작성해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"tit02",children:["행사 상세내용 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"메인페이지 및 상세페이지 내 노출할 상세이미지 및 내용을 입력해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"상세 내용 작성 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 이미지의 너비는 1100px 이상으로 등록해야 상세 페이지의 여백이 생기지 않습니다.",e.jsx("br",{}),"· 이미지 용량이 큰 경우 로딩 속도가 느려질 수 있습니다.",e.jsx("br",{}),"· 설명 글도 함께 작성할 수 있으니, 기본 정보 외의 추가할 세부 내용을 작성해주세요."]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"content",type:"checkbox",checked:(l==null?void 0:l.content)??!1,onChange:o=>_(o,"content")}),e.jsx("label",{htmlFor:"content"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_20",children:e.jsx("div",{className:"w_767",children:e.jsx(zt,{ref:a,value:r,onChange:t,modules:p,formats:h,className:"quill_editor",theme:"snow",readOnly:!0})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["태그 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("p",{className:"fs_12",children:"본 행사를 설명해줄 태그를 입력해주세요."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_372",type:"text",placeholder:"태그는 최대 5개까지 입력 가능합니다.",readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"tag",type:"checkbox",checked:(l==null?void 0:l.tag)??!1,onChange:o=>_(o,"tag")}),e.jsx("label",{htmlFor:"tag"})]})]}),((j=(n=c==null?void 0:c.data)==null?void 0:n.tags)==null?void 0:j.length)>0&&e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:e.jsx("ul",{className:"white_tag_list",children:(f=(m=c==null?void 0:c.data)==null?void 0:m.tags)==null?void 0:f.map((o,b)=>e.jsxs("li",{children:[o??"",e.jsx("button",{className:"delete_btn",disabled:!0})]},b))})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(g,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(g,{to:`/event/apply/${s}/general`,className:"btn gray",children:"뒤로"}),e.jsx(g,{to:`/event/apply/${s}/information`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Ks=()=>{var x,i,p,h,_,n,j,m,f,o,b,w,k;const{id:s}=X(),[a,r]=u.useState({}),{data:t,isLoading:l,isError:d}=ls(s?Number(s):void 0),c=(y,S)=>{const E=sessionStorage.getItem("EVENT_ACCEPT"),T=JSON.parse(E);let F;E&&T.id===s?F={id:s,reject:{...T.reject,[S]:y.target.checked??!1}}:F={id:s,reject:{[S]:y.target.checked??!1}},sessionStorage.setItem("EVENT_ACCEPT",JSON.stringify(F)),r(F==null?void 0:F.reject)};return u.useEffect(()=>{const y=sessionStorage.getItem("EVENT_ACCEPT"),S=JSON.parse(y);y&&S.id===s?r(S==null?void 0:S.reject):(r({}),sessionStorage.removeItem("EVENT_ACCEPT"))},[]),l?e.jsx(_e,{}):d?e.jsx("div",{children:"데이터를 불러오는 중 에러가 발생했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"모집정보"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"행사 신청을 위해 모집 방법 및 수집할 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsxs("h3",{className:"fs_20",children:["모집 기간 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"w_767 dis_flex gap10",children:[e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"시작 날짜",value:(x=t==null?void 0:t.data)!=null&&x.application_start_date?v((i=t==null?void 0:t.data)==null?void 0:i.application_start_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("i",{className:"date_icon"})]}),e.jsx("div",{className:"flex1",children:e.jsx("input",{className:"w_full",type:"text",placeholder:"시작 시간",value:(p=t==null?void 0:t.data)!=null&&p.application_start_date?v((h=t==null?void 0:t.data)==null?void 0:h.application_start_date).format("HH:mm"):"",readOnly:!0})}),e.jsxs("div",{className:"date_img_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",placeholder:"종료 날짜",value:(_=t==null?void 0:t.data)!=null&&_.application_end_date?v((n=t==null?void 0:t.data)==null?void 0:n.application_end_date).format("YYYY-MM-DD"):"",readOnly:!0}),e.jsx("i",{className:"date_icon"})]}),e.jsx("div",{className:"flex1",children:e.jsx("input",{className:"w_full",type:"text",placeholder:"종료 시간",value:(j=t==null?void 0:t.data)!=null&&j.application_end_date?v((m=t==null?void 0:t.data)==null?void 0:m.application_end_date).format("HH:mm"):"",readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_date",type:"checkbox",checked:(a==null?void 0:a.application_date)??!1,onChange:y=>c(y,"application_date")}),e.jsx("label",{htmlFor:"application_date"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["모집 방법 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"tit_wrap mt_4",children:e.jsx("h3",{className:"fs_12",children:"단체 신청 진행 시, 선택하신 수집 정보를 기반으로 한 엑셀 양식을 제공합니다."})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap11",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-1",type:"checkbox",checked:((f=t==null?void 0:t.data)==null?void 0:f.application_type)===0,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-1",children:"개인 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-2",type:"checkbox",checked:((o=t==null?void 0:t.data)==null?void 0:o.application_type)===1,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-2",children:"단체 신청"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"checkbox-3",type:"checkbox",checked:((b=t==null?void 0:t.data)==null?void 0:b.application_type)===2,readOnly:!0}),e.jsx("label",{htmlFor:"checkbox-3",children:"개인/단체 신청 모두"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_type",type:"checkbox",checked:(a==null?void 0:a.application_type)??!1,onChange:y=>c(y,"application_type")}),e.jsx("label",{htmlFor:"application_type"})]})]}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"fs_20",children:["수집 정보 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_1",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_1",children:"이름"})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"application_information",type:"checkbox",checked:(a==null?void 0:a.application_information)??!1,onChange:y=>c(y,"application_information")}),e.jsx("label",{htmlFor:"application_information"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_2",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_2",children:"이메일"})]})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox02 w_767",children:[e.jsx("input",{id:"chk03_3",type:"checkbox",disabled:!0,checked:!0}),e.jsx("label",{htmlFor:"chk03_3",children:"휴대전화 번호"})]})}),(k=(w=t==null?void 0:t.data)==null?void 0:w.information)==null?void 0:k.map(y=>e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsxs("div",{className:"checkbox_toggle w_767",children:[e.jsx("input",{id:`chk03_${y.id+3}_p`,type:"checkbox",className:"input",value:y.id,disabled:!0,checked:y.is_set}),e.jsx("label",{htmlFor:`chk03_${y.id+3}_p`,className:"label",children:y.name}),e.jsx("input",{type:"checkbox",className:"hide toggle",id:`chk03_${y.id+3}_c`,checked:y.required,readOnly:!0}),e.jsxs("label",{htmlFor:`chk03_${y.id+3}_c`,className:"required_toggle_btn",children:["필수",e.jsx("i",{})]})]})},y.id)),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx("div",{className:"btn_wrap",children:e.jsx(g,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"})}),e.jsx(Me,{}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(g,{to:`/event/apply/${s}/detail`,className:"btn gray",children:"뒤로"}),e.jsx(g,{to:`/event/apply/${s}/survey`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Hs=()=>{const{id:s}=X(),{data:a,isLoading:r,isError:t}=os({event_id:s}),l=a==null?void 0:a.data,[d,c]=u.useState({survey:!1,surveys:[]}),x=(i,p)=>{c(h=>{let _={...h};if(i==="survey")_.survey=!h.survey;else if(i==="surveys"&&typeof p=="number"){const n=[...h.surveys];n[p]=!n[p],_.surveys=n}return sessionStorage.setItem("EVENT_SURVEY",JSON.stringify({id:s,reject:_})),_})};return u.useEffect(()=>{var i;if(sessionStorage.removeItem("EVENT_SURVEY"),l){let p;const h=((i=l.surveys)==null?void 0:i.map(n=>n.is_reject))||[],_={survey:l.is_reject.survey,surveys:h};p={id:s,reject:{survey:_.survey,surveys:[..._.surveys]}},sessionStorage.setItem("EVENT_SURVEY",JSON.stringify(p)),c(_)}},[l,s]),r?e.jsx("div",{className:"container",children:"로딩 중..."}):t||!l?e.jsx("div",{className:"container",children:"데이터를 불러오는 데 실패했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"사전 설문"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"사전 설문 제작을 통해 행사에 필요한 데이터를 받아보세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_30",children:e.jsx("h3",{className:"fs_20",children:"행사 정보 확인"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"useSurvey_yes",type:"radio",name:"useSurvey",value:"yes",checked:l.is_survey,readOnly:!0}),e.jsx("label",{htmlFor:"useSurvey_yes",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"useSurvey_no",type:"radio",name:"useSurvey",value:"no",checked:!l.is_survey,readOnly:!0}),e.jsx("label",{htmlFor:"useSurvey_no",children:"사용하지 않음"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk_event_info",type:"checkbox",checked:!!d.survey,onChange:()=>x("survey")}),e.jsx("label",{htmlFor:"chk_event_info"})]})]}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsx("h3",{className:"fs_20",children:"설문 리스트"})}),l.surveys&&l.surveys.length>0?l.surveys.map((i,p)=>e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsxs("div",{className:"head",children:[e.jsx("input",{type:"text",value:i.title,readOnly:!0}),e.jsxs("select",{value:i.type,disabled:!0,children:[e.jsx("option",{value:0,children:"단일 선택"}),e.jsx("option",{value:1,children:"다중 선택"}),e.jsx("option",{value:2,children:"장문"})]})]}),e.jsx("div",{className:"body",children:(i.type===0||i.type===1)&&e.jsx(e.Fragment,{children:i.options&&i.options.length>0?i.options.map((h,_)=>e.jsxs("div",{className:"option_tit",children:[e.jsxs("span",{children:["옵션 ",_+1,":"]}),e.jsx("input",{type:"text",value:h,readOnly:!0})]},_)):e.jsx("div",{className:"mt-2",children:"옵션이 없습니다."})})}),e.jsx("div",{className:"btm",children:e.jsxs("button",{className:`required_toggle_btn ${i.required?"active":""}`,disabled:!0,children:["필수",e.jsx("i",{})]})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:`chk_survey_${p}`,type:"checkbox",checked:!!d.surveys[p]||!1,onChange:()=>x("surveys",p)}),e.jsx("label",{htmlFor:`chk_survey_${p}`})]})]},p)):e.jsx("div",{className:"mt-4",children:"설문이 없습니다."}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx(g,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx(g,{to:`/event/apply/${s}/information`,className:"btn gray",children:"뒤로"}),e.jsx(g,{to:`/event/apply/${s}/faq`,className:"btn light_blue",children:"다음"})]})]})]})})]})},Xs=()=>{const{id:s}=X(),{data:a,isLoading:r,isError:t}=ds({event_id:s}),l=a==null?void 0:a.data,[d,c]=u.useState({faq:!1,faqs:[],contact:!1}),x=(i,p)=>{c(h=>{let _={...h};if(i==="faq")_.faq=!h.faq;else if(i==="faqs"){const n=[...h.faqs];n[p]=!n[p],_.faqs=n}else i==="contact"&&(_.contact=!h.contact);return sessionStorage.setItem("EVENT_FAQ",JSON.stringify({id:s,reject:_})),_})};return u.useEffect(()=>{var i;if(sessionStorage.removeItem("EVENT_FAQ"),l){let p;const h=((i=l.faqs)==null?void 0:i.map(n=>n.is_reject))||[],_={faq:l.is_reject.faq,faqs:h,contact:l.is_reject.contact};p={id:s,reject:{faq:_.faq,faqs:[..._.faqs],contact:_.contact}},sessionStorage.setItem("EVENT_FAQ",JSON.stringify(p)),c(_)}},[l,s]),r?e.jsx("div",{className:"container",children:"로딩 중..."}):t||!l?e.jsx("div",{className:"container",children:"데이터를 불러오는 데 실패했습니다."}):e.jsxs("div",{className:"container",children:[e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel type2",children:[e.jsx("div",{className:"tit_wrap",children:e.jsx("h2",{className:"fs_40",children:"FAQ & 문의"})}),e.jsx("div",{className:"tit_wrap mt_12",children:e.jsx("h3",{className:"fs_18",children:"참가자 문의에 대한 담당자 정보를 입력해주세요."})}),e.jsx("div",{className:"dis_flex justify_end mt_30",children:e.jsx("div",{className:"fs_18 fw_500 pr_20",children:"수정요청 항목"})}),e.jsx("div",{className:"tit_wrap mt_10",children:e.jsx("h3",{className:"fs_20",children:"FAQ 사용 여부"})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsxs("div",{className:"dis_flex w_767 gap32",children:[e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"useFaq_yes",type:"radio",name:"useFaq",value:"yes",checked:l.is_FAQ,readOnly:!0}),e.jsx("label",{htmlFor:"useFaq_yes",children:"사용함"})]}),e.jsxs("div",{className:"checkbox02 flex1",children:[e.jsx("input",{id:"useFaq_no",type:"radio",name:"useFaq",value:"no",checked:!l.is_FAQ,readOnly:!0}),e.jsx("label",{htmlFor:"useFaq_no",children:"사용하지 않음"})]})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk_event_info",type:"checkbox",checked:!!d.faq,onChange:()=>{x("faq",0)}}),e.jsx("label",{htmlFor:"chk_event_info"})]})]}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsx("h3",{className:"fs_20",children:"FAQ 리스트"})}),l.faqs&&l.faqs.length>0?l.faqs.map((i,p)=>e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_14",children:[e.jsxs("div",{className:"survey_card w_767",children:[e.jsx("div",{className:"head",children:e.jsx("input",{type:"text",placeholder:"Q. 제목을 입력해주세요.",value:i.question,readOnly:!0})}),e.jsx("div",{className:"body",children:e.jsx("input",{type:"text",placeholder:"A. 답변을 입력해주세요.",value:i.answer,readOnly:!0})})]}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:`chk_faq_${p}`,type:"checkbox",checked:!!d.faqs[p],onChange:()=>x("faqs",p)}),e.jsx("label",{htmlFor:`chk_faq_${p}`})]})]},p)):e.jsx("div",{className:"mt-4",children:"FAQ가 없습니다."}),e.jsx("div",{className:"tit_wrap mt_55",children:e.jsxs("h3",{className:"fs_20",children:["문의 담당자 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsxs("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:[e.jsx("input",{className:"w_767",type:"text",value:l.contact_name,readOnly:!0}),e.jsxs("div",{className:"checkbox big",children:[e.jsx("input",{id:"chk_faq_contact",type:"checkbox",checked:!!d.contact,onChange:()=>x("contact",0)}),e.jsx("label",{htmlFor:"chk_faq_contact"})]})]}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:l.contact_email,readOnly:!0})}),e.jsx("div",{className:"dis_flex align_start justify_between pr_52 mt_10",children:e.jsx("input",{className:"w_767",type:"text",value:l.contact_number,readOnly:!0})}),e.jsxs("div",{className:"dis_flex justify_between mt_48",children:[e.jsx(g,{to:"/event",className:"fs_18 fw_600",children:"< 리스트로 돌아가기"}),e.jsx(Me,{})]})]})})]})},ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABaCAYAAAA/xl1SAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPZSURBVHgB7doxbxtlGMDx53kt2iSIykFpIqoWXTcXpYmRgHjrZWNMvwHfIGFkarp1o/kG/QbABlOuA1IqMVxLJTwgcZXaKglBuAN1oir38t4RhxBcxw6OH4n+f4vPvrOX/PXc5b1TOaXa7EexOqmLr9wQlbqKr3rRquB/L/ytW+FvnYmXzKt/KHmeNB//kMgp6CAHR1FcnbjwcjlsrhAbjsnUS5K/0tvN5kbW75f6CrAIb/xC+1bYXBHgBCHEe/2GWDnpgGtzC8vnzr/6OvxsLEA/ikuyiixNTV96sbP9PO11aM8AQ3xfhpfV8ItjAgymqqpLM9OXqr9uP//udQd1PQWXp9x32l+FvbEA/13aduOLWZq0ju9w3Y4O13vrxIchqo/vh4HWxb9OwQen3SUBhkkl6nY6/keAtesffxbO23cEOANetXFx5vKLna1nG53PDq8Ba7VGpOf8etiMBDg7rXA9eLVzPXh4Deje8sU6XyTA2aq+vf/Hrc6bcgIeTL9fBBiRMAUniylYTsCD6QeMzET+sryrVgboWXLBiHnR4pkC0dpsI1ZX/vMBjJTP9xeduDwWwIC6St2p13kBbMRO1EcC2Jh3ytof7FQdTzbDUNUJYIgAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYYoAYcqp+JYANlrOixIgTIThlznxkgpgIAy/Jy5keF8AA1586nyuTEDYyPNEi9cP5j75PYzDqgCjk/306MHVchkmF7cmwAh5laR4LQMcc7t3BRgl1dvFSxlgmqbFUgxTECMRpt+9ZrqRFduHd0LOu71VFqUxAlln+hUqnY3Nzc3dd2fe3wsRfirAGfFeP28+2kg67ytHd/629XTj4szlybDZEGD41po/Prhz9APtdlTt+sK6qsQCDE8all0+PP5h16dhxip7N8OwZIEaQ+G9JG03vthtn/b64rW5hWJ5ZlmA01sLk2/ldTsrvb65s/Xs26npK0/C6bge3nKnBH37a0VFvwjxrfY6rmeAhZ3tp+nUe1e+CXN0UkXrApxsre0mbv788PvkpANVBlCrN6JwAzmsF+qN8DYS4EAx8Ypburtu7G6WJn2vJw8U4FG12UYsLo/Vy3z4lSj8UMQDDW+GIrbyQWYf/lFVvV88UdV8/Pfa3iD+BDNM+9iPxy8HAAAAAElFTkSuQmCC",Ws=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(g,{className:"item",to:"/banner/main",children:"메인배너"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"등록일"}),e.jsx("option",{value:"2",children:"게시일"})]})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide"}),e.jsx("label",{htmlFor:"rad01",className:"btn border_w",children:"오늘"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad02",className:"hide"}),e.jsx("label",{htmlFor:"rad02",className:"btn border_w",children:"어제"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad03",className:"hide",checked:!0}),e.jsx("label",{htmlFor:"rad03",className:"btn border_w",children:"7일"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad04",className:"hide"}),e.jsx("label",{htmlFor:"rad04",className:"btn border_w",children:"1개월"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad05",className:"hide"}),e.jsx("label",{htmlFor:"rad05",className:"btn border_w",children:"전체"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"노출"}),e.jsx("option",{value:"2",children:"노출 안함"}),e.jsx("option",{value:"3",children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",children:"검색"}),e.jsx("button",{className:"btn small gray",children:"초기화"})]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:"[총 회원수 9,999명]"})]}),e.jsx("button",{className:"sort_btn",children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{children:"추가"}),e.jsx("button",{className:"ml_22",children:"삭제"})]})]}),e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk01"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:ge})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk02"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:ge})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출 안함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk03"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_메인베너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:ge})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]})]})]})}),e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("a",{href:"#none",className:"pagi_prev"}),e.jsx("a",{href:"#none",className:"num active",children:"1"}),e.jsx("a",{href:"#none",className:"num",children:"2"}),e.jsx("a",{href:"#none",className:"num",children:"3"}),e.jsx("a",{href:"#none",className:"num",children:"4"}),e.jsx("a",{href:"#none",className:"num",children:"5"}),e.jsx("a",{href:"#none",className:"num",children:"6"}),e.jsx("a",{href:"#none",className:"num",children:"7"}),e.jsx("a",{href:"#none",className:"num",children:"8"}),e.jsx("a",{href:"#none",className:"num",children:"9"}),e.jsx("a",{href:"#none",className:"num",children:"10"}),e.jsx("a",{href:"#none",className:"pagi_next"})]})]})})]}),dt=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(g,{className:"item",to:"/banner/main",children:"메인배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력"})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜"}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜"}),e.jsx("label",{htmlFor:"start_end"}),e.jsx("input",{type:"date",id:"start_end"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*1080픽셀"]})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide"}),e.jsx("label",{htmlFor:"fileInp01",className:"file_inp",children:"0 / 1"})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력"})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",children:"취소"}),e.jsx("button",{className:"btn blue",children:"추가"})]})]})]})})]}),Zs=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(g,{className:"item",to:"/banner/band",children:"띠배너"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"등록일"}),e.jsx("option",{value:"2",children:"게시일"})]})}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide"}),e.jsx("label",{htmlFor:"rad01",className:"btn border_w",children:"오늘"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad02",className:"hide"}),e.jsx("label",{htmlFor:"rad02",className:"btn border_w",children:"어제"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad03",className:"hide",checked:!0}),e.jsx("label",{htmlFor:"rad03",className:"btn border_w",children:"7일"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad04",className:"hide"}),e.jsx("label",{htmlFor:"rad04",className:"btn border_w",children:"1개월"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad05",className:"hide"}),e.jsx("label",{htmlFor:"rad05",className:"btn border_w",children:"전체"})]}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:"2024-08-26"}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",children:[e.jsx("option",{value:"1",children:"노출"}),e.jsx("option",{value:"2",children:"노출 안함"}),e.jsx("option",{value:"3",children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체"})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",children:"검색"}),e.jsx("button",{className:"btn small gray",children:"초기화"})]}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsx("span",{className:"fs_16",children:"[총 회원수 9,999명]"})]}),e.jsx("button",{className:"sort_btn",children:"정렬"})]}),e.jsxs("div",{children:[e.jsx("button",{children:"추가"}),e.jsx("button",{className:"ml_22",children:"삭제"})]})]}),e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk01"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:ge})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk02",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk02"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:ge})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출 안함"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chk03",type:"checkbox"}),e.jsx("label",{htmlFor:"t_chk03"})]})}),e.jsx("td",{children:e.jsx("span",{className:"btn border_w w_60",children:"10"})}),e.jsx("td",{className:"txt_left",children:e.jsx("a",{href:"./관리자배너관리_띠배너_수정.html",children:"배너명1"})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:ge})})}),e.jsx("td",{children:"2024-08-01"}),e.jsx("td",{children:"2024-08-08~2024-08-30"}),e.jsx("td",{children:"노출"})]})]})]})}),e.jsxs("div",{className:"pagination mt_80",children:[e.jsx("a",{href:"#none",className:"pagi_prev"}),e.jsx("a",{href:"#none",className:"num active",children:"1"}),e.jsx("a",{href:"#none",className:"num",children:"2"}),e.jsx("a",{href:"#none",className:"num",children:"3"}),e.jsx("a",{href:"#none",className:"num",children:"4"}),e.jsx("a",{href:"#none",className:"num",children:"5"}),e.jsx("a",{href:"#none",className:"num",children:"6"}),e.jsx("a",{href:"#none",className:"num",children:"7"}),e.jsx("a",{href:"#none",className:"num",children:"8"}),e.jsx("a",{href:"#none",className:"num",children:"9"}),e.jsx("a",{href:"#none",className:"num",children:"10"}),e.jsx("a",{href:"#none",className:"pagi_next"})]})]})})]}),pt=()=>e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(g,{className:"item",to:"/banner/band",children:"띠배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력"})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜"}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date"})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜"}),e.jsx("label",{htmlFor:"end_date"}),e.jsx("input",{type:"date",id:"end_date"})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*1080픽셀"]})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide"}),e.jsx("label",{htmlFor:"fileInp01",className:"file_inp",children:"0 / 1"})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력"})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox"}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",children:"취소"}),e.jsx("button",{className:"btn blue",children:"추가"})]})]})]})})]}),Te=({isDirectPush:s=!1,isReplace:a=!1,preserveScroll:r=!0,isSetPageFirst:t=!1}={})=>{const[l,d]=St(),c=new URLSearchParams(l),x=H(),i=()=>{t&&c.delete("page");const j=`?${c.toString()}`;return s?x(j,{replace:a,preventScrollReset:!r}):d(j,{replace:a,preventScrollReset:!r}),c.toString()};return{get:j=>c.get(j),getAll:()=>Object.fromEntries(c.entries()),set:(j,m)=>m?(c.set(j,m),i()):(c.delete(j),i()),setAll:j=>(Object.entries(j).forEach(([m,f])=>{f?f!==""&&!(Array.isArray(f)&&f.length===0)&&c.set(m,f.toString()):c.delete(m)}),i()),updateQueryAndNavigate:i}},Oe={BANNER:{ROOT:["banner"],LIST:["banner","manage","list"],DETAIL:["banner","detail"]}},Gs=async s=>{const a=localStorage.getItem("token");return(await Y.get("/api/banners/manage",{params:s,headers:{"Content-Type":"application/json",authorization:`Bearer ${a}`}})).data},Ds=async(s,a)=>{const r=localStorage.getItem("token");return(await Y.post("/api/banners",a,{params:{type:s},headers:{authorization:`Bearer ${r}`,"Content-Type":"multipart/form-data"}})).data},ea=async(s,a)=>{const r=localStorage.getItem("token");return(await Y.post(`/api/banners/${s}`,a,{headers:{authorization:`Bearer ${r}`,"Content-Type":"multipart/form-data"}})).data},ta=async s=>{const a=localStorage.getItem("token");return(await Y.get(`/api/banners/${s}`,{headers:{authorization:`Bearer ${a}`}})).data},sa=async s=>{const a=localStorage.getItem("token");return(await Y.delete("/api/banners/manage",{data:s,headers:{authorization:`Bearer ${a}`}})).data},aa=async(s,a)=>{const r=localStorage.getItem("token");return(await Y.put(`/api/banners/${s}/order`,{order:a},{headers:{authorization:`Bearer ${r}`}})).data},na=s=>U({queryKey:[Oe.BANNER.LIST,s],queryFn:()=>Gs(s),staleTime:0}),ia=s=>W({mutationFn:a=>Ds(s,a)}),ra=s=>W({mutationFn:a=>ea(s,a)}),la=s=>U({queryKey:[Oe.BANNER.DETAIL],queryFn:()=>ta(s),enabled:!!s}),ca=()=>W({mutationFn:s=>sa(s)}),oa=s=>W({mutationFn:a=>aa(s,a)}),me=s=>s.toISOString().split("T")[0],da=()=>{const s=new Date,a=Te({isDirectPush:!0,isReplace:!0,isSetPageFirst:!0}),[r,t]=u.useState(a.get("search")||""),[l,d]=u.useState(a.get("dateType")||"1"),[c,x]=u.useState(a.get("start")||""),[i,p]=u.useState(a.get("end")||""),[h,_]=u.useState(a.get("state")||"1"),n=o=>{o.key==="Enter"&&a.set("search",o.currentTarget.value)},j=o=>{t(o.target.value)},m=(o,b)=>{x(o),p(b)},f=[{label:"오늘",start:me(s),end:me(s)},{label:"어제",start:me(new Date(s.setDate(s.getDate()-1))),end:me(new Date(s))},{label:"7일",start:me(new Date(s.setDate(s.getDate()-7))),end:me(new Date)},{label:"1개월",start:me(new Date(s.setMonth(s.getMonth()-1))),end:me(new Date)},{label:"전체",start:"",end:""}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"table_wrap",children:e.jsxs("table",{className:"type3",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"160px"}),e.jsx("col",{width:"*"})]}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("th",{children:"기간"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",onChange:o=>{d(o.target.value)},children:[e.jsx("option",{value:1,children:"등록일"}),e.jsx("option",{value:2,children:"게시일"})]})}),f.map((o,b)=>e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{type:"radio",name:"rad",id:"rad01",className:"hide",checked:o.start===c&&o.end===i,readOnly:!0}),e.jsx("label",{htmlFor:`rad${b}`,className:"btn border_w",onClick:()=>m(o.start,o.end),children:o.label})]},b)),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date01",type:"date",className:"small w_104",value:c,onChange:o=>x(o.target.value)}),e.jsx("label",{htmlFor:"date01",className:"date_icon"})]}),e.jsx("div",{className:"dis_inblock",children:" ~"}),e.jsxs("div",{className:"dis_inblock",children:[e.jsx("input",{id:"date02",type:"date",className:"small w_104",value:i,onChange:o=>p(o.target.value)}),e.jsx("label",{htmlFor:"date02",className:"date_icon"})]})]})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"검색"}),e.jsxs("td",{children:[e.jsx("div",{className:"dis_inblock",children:e.jsxs("select",{className:"btn border_w w_96",onChange:o=>{_(o.target.value)},children:[e.jsx("option",{value:1,children:"노출"}),e.jsx("option",{value:2,children:"노출 안함"}),e.jsx("option",{value:3,children:"종료"})]})}),e.jsx("div",{className:"dis_inblock",children:e.jsx("input",{className:"small search w_548",type:"text",placeholder:"전체",value:r,onChange:j,onKeyUp:n})})]})]})]})]})}),e.jsxs("div",{className:"btn_wrap gap7 mt_18",children:[e.jsx("button",{className:"btn small light_blue",onClick:()=>{a.setAll({search:r,dateType:l,state:h,start:c,end:i})},children:"검색"}),e.jsx("button",{className:"btn small gray",onClick:()=>{t(""),d("1"),_("1"),x(""),p(""),a.setAll({})},children:"초기화"})]})]})},pa=({banner:s,type:a,selected:r,setSelected:t})=>{const l=Ae(),[d,c]=u.useState(!1),[x,i]=u.useState(s.order),{mutate:p}=oa(s.id),h=_=>{if(confirm("배너 순서를 수정하시겠습니까?"))p(_,{onSuccess:()=>{alert("배너 순서 수정이 완료되었습니다."),l.invalidateQueries({queryKey:[Oe.BANNER.LIST]})},onError:()=>{alert("배너 순서 수정에 실패하였습니다.")}}),c(!1);else return};return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:`t_chk${s.id}`,type:"checkbox",checked:r.includes(s.id),onChange:()=>t(r.includes(s.id)?r.filter(_=>_!==s.id):[...r,s.id])}),e.jsx("label",{htmlFor:`t_chk${s.id}`})]})}),e.jsx("td",{children:d?e.jsxs("div",{className:"banner_order_input_container",children:[e.jsx("input",{className:"banner_order_input",type:"text",defaultValue:x,onChange:_=>{const n=_.target.value;isNaN(Number(n))||i(Number(n))}}),e.jsxs("div",{className:"banner_order_input_btn_container",children:[e.jsx("span",{onClick:()=>h(x),children:"V"}),e.jsx("span",{onClick:()=>c(!1),children:"X"})]})]}):e.jsx("span",{className:"btn border_w w_60",onClick:()=>c(!0),children:s.order})}),e.jsx("td",{className:"txt_left",children:e.jsx(g,{to:`/banner/detail/${s.id}?type=${a}`,children:s.title})}),e.jsx("td",{}),e.jsx("td",{children:e.jsx("div",{className:"banner_img",children:e.jsx("img",{src:`https://api-test.micemate.io/storage/${s.img}`,alt:"Banner"})})}),e.jsx("td",{children:s.created_at}),e.jsxs("td",{children:[s.start_date,"~",s.end_date]}),e.jsx("td",{children:xa[s.state]})]})},xa={0:"노출 이전",1:"노출",2:"노출 안함",3:"종료"},ha=({bannerList:s,type:a,selected:r,setSelected:t})=>{const l=()=>{r.length===s.length?t([]):t(s.map(d=>d.id))};return s.length===0?e.jsx("div",{className:"no_data",children:"배너가 없습니다."}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"table_wrap mt_22",children:e.jsxs("table",{className:"type1",children:[e.jsxs("colgroup",{children:[e.jsx("col",{width:"16px"}),e.jsx("col",{width:"120px"}),e.jsx("col",{width:"200px"}),e.jsx("col",{width:"*"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"150px"}),e.jsx("col",{width:"250px"}),e.jsx("col",{width:"120px"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"t_chkAll",type:"checkbox",onClick:l}),e.jsx("label",{htmlFor:"t_chkAll"})]})}),e.jsx("th",{children:"NO"}),e.jsx("th",{className:"txt_left",children:"배너명"}),e.jsx("th",{}),e.jsx("th",{children:"이미지"}),e.jsx("th",{children:"등록일"}),e.jsx("th",{children:"게시일"}),e.jsx("th",{children:"상태"})]})}),e.jsx("tbody",{children:s.map(d=>e.jsx(pa,{type:a,banner:d,selected:r,setSelected:t},d.id))})]})})})},ma=()=>{const s=Ae(),a=H(),r=Te(),t=r.get("type")||"0",{data:l}=na(r.getAll()),[d,c]=u.useState([]),{mutate:x}=ca(),i=()=>{if(d.length===0){alert("삭제할 배너를 선택해주세요.");return}if(confirm("정말 삭제하시겠습니까?"))x({ids:d},{onSuccess:()=>{alert("배너 삭제가 완료되었습니다."),s.invalidateQueries({queryKey:[Oe.BANNER.LIST]})}});else return};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:"/banner/main",children:"배너관리"}),e.jsx(g,{className:"item",to:"/banner/main",children:t==="0"?"메인배너":"띠배너"})]}),e.jsx($,{}),e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx(da,{}),e.jsxs("div",{className:"tit_wrap mt_30",children:[e.jsx("div",{children:e.jsxs("h3",{className:"tit",children:[e.jsx("span",{children:"전체"}),e.jsx("span",{className:"col_gray",children:"검색결과"}),e.jsxs("span",{className:"fs_16",children:["[총 ",l==null?void 0:l.data.total,"개]"]})]})}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>a(`/banner/add?type=${t}`),children:"추가"}),e.jsx("button",{className:"ml_22",onClick:i,children:"삭제"})]})]}),e.jsx(ha,{selected:d,setSelected:c,bannerList:(l==null?void 0:l.data.items)||[],type:Number(t)}),e.jsx(Pe,{total:(l==null?void 0:l.data.total)||10,page:Number(r.get("page"))||1,setPage:p=>r.set("page",p.toString()),size:20})]})})]})},gt=({form:s,onSubmit:a,type:r,bannerType:t})=>{var j,m,f,o;const l=H(),{register:d,handleSubmit:c,watch:x,formState:{errors:i},setValue:p}=s,h=x("start_date"),_=x("end_date"),n=b=>{const w=b.target.files;w!=null&&w[0]&&p("img",w[0],{shouldValidate:!0})};return e.jsx("div",{className:"cont_area",children:e.jsxs("div",{className:"cont_panel",children:[e.jsx("div",{className:"tit_wrap",children:e.jsxs("h3",{className:"tit02",children:["배너명 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"배너명 입력",...d("title",{required:"배너명을 입력해주세요."})})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["노출일 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"dis_flex w_767",children:[e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 시작 날짜",value:h||""}),e.jsx("label",{htmlFor:"start_date"}),e.jsx("input",{type:"date",id:"start_date",...d("start_date",{required:"노출 시작 날짜를 입력해주세요."})})]}),e.jsx("span",{className:"fs_20",children:" ~ "}),e.jsxs("div",{className:"date_inp_wrap flex1",children:[e.jsx("input",{className:"w_full",type:"text",readOnly:!0,placeholder:"노출 종료 날짜",value:_||""}),e.jsx("label",{htmlFor:"start_end"}),e.jsx("input",{type:"date",id:"start_end",...d("end_date",{required:"노출 종료 날짜를 입력해주세요."})})]})]})}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["배너 이미지 ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{className:"infomation_blue_box w_767",children:[e.jsxs("div",{className:"dis_flex gap5 fs_12 fw_600",children:[e.jsx("i",{className:"info_icon"}),e.jsx("span",{children:"배너 이미지 등록 가이드"})]}),e.jsxs("div",{className:"mt_8 fs_12 fw_500 pl_15",children:["· 10MB 이하의 JPG, JPEG, PNG 파일",e.jsx("br",{}),"· 해상도 1920*",t===0?1080:360,"픽셀"]})]})}),((j=x("img"))==null?void 0:j[0])&&e.jsx("img",{src:x("img")instanceof FileList&&((m=x("img"))!=null&&m[0])?URL.createObjectURL((f=x("img"))==null?void 0:f[0]):"https://api-test.micemate.io/storage/"+String(x("img")),alt:"Preview",className:`w_767 preview_banner_img ${t===0?"preview_banner_img_1080":"preview_banner_img_360"}`}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsxs("div",{children:[e.jsx("input",{type:"file",id:"fileInp01",className:"hide",accept:".jpg, .jpeg, .png",onChange:n,...d("img",{required:r==="create"?"이미지를 선택해주세요.":!1})}),e.jsxs("label",{htmlFor:"fileInp01",className:"file_inp",children:[(o=x("img"))!=null&&o[0]?"1":"0"," / 1"]})]})}),i.img&&e.jsx("p",{className:"fs_12 col_red mt_10",children:i.img.message}),e.jsx("div",{className:"tit_wrap mt_25",children:e.jsxs("h3",{className:"tit02",children:["URL ",e.jsx("i",{className:"col_red",children:"*"})]})}),e.jsx("div",{className:"dis_flex mt_10",children:e.jsx("input",{className:"w_767",type:"text",placeholder:"URL 입력",...d("url",{required:"URL을 입력해주세요."})})}),e.jsx("div",{className:"mt_48",children:e.jsxs("div",{className:"checkbox",children:[e.jsx("input",{id:"chk01",type:"checkbox",...d("show"),defaultChecked:!1}),e.jsx("label",{htmlFor:"chk01",children:"노출 안함"})]})}),e.jsxs("div",{className:"dis_flex justify_between mt_64",children:[e.jsx("div",{className:"btn_wrap"}),e.jsxs("div",{className:"btn_wrap gap23",children:[e.jsx("button",{className:"btn blue",onClick:()=>l(-1),children:"취소"}),e.jsx("button",{className:"btn blue",type:"button",onClick:c(a),children:r==="create"?"추가":"수정"})]})]})]})})},_a=()=>{const s=Te(),a=Number(s.get("type"))||0,r=H(),t=je({mode:"all",defaultValues:{type:Number(a)}}),{mutate:l}=ia(a),d=c=>{if(!c.img){alert("배너 이미지를 등록해주세요.");return}const x=new FormData;c.img instanceof File&&x.append("img",c.img[0]),x.append("title",c.title),x.append("start_date",c.start_date),x.append("end_date",c.end_date),x.append("img",c.img[0]),x.append("url",c.url),x.append("show",(!c.show).toString()),l(x,{onSuccess:()=>{alert("배너 등록이 완료되었습니다."),r(`/banner?type=${a}`)},onError:i=>{var p;((p=i.response)==null?void 0:p.data.message)==="Not available image size"?alert("이미지 사이즈가 올바르지 않습니다."):alert("배너 등록에 실패하였습니다.")}})};return e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:`/banner?type=${a}`,children:"배너관리"}),e.jsx(g,{className:"item",to:`/banner?type=${a}`,children:a===0?"메인배너":"띠배너"}),e.jsx("p",{className:"item",children:"추가"})]}),e.jsx($,{}),e.jsx(gt,{form:t,onSubmit:d,type:"create",bannerType:a})]})},ua=()=>{const s=H(),r=Te().get("type"),{id:t}=X(),{data:l}=la(Number(t)),d=je({mode:"all"}),{mutate:c}=ra(Number(t)),x=i=>{const p=new FormData;i.img instanceof FileList&&p.append("img",i.img[0]),p.append("title",i.title),p.append("start_date",i.start_date),p.append("end_date",i.end_date),p.append("url",i.url),p.append("show",(!i.show).toString()),c(p,{onSuccess:()=>{alert("배너 수정이 완료되었습니다."),s(`/banner?type=${r}`)},onError:h=>{var _;((_=h==null?void 0:h.response)==null?void 0:_.data.message)==="Not available image size"?alert("이미지의 크기가 올바르지 않습니다."):alert("배너 수정에 실패하였습니다.")}})};return u.useEffect(()=>{l&&d.reset({title:l.data.title,start_date:l.data.start_date,end_date:l.data.end_date,url:l.data.url,show:!l.data.show,img:l.data.img})},[d,l]),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"history_tit",children:[e.jsx(g,{className:"item",to:`/banner?type=${r}`,children:"배너관리"}),e.jsx(g,{className:"item",to:`/banner?type=${r}`,children:r==="0"?"메인배너":"띠배너"}),e.jsx("p",{className:"item",children:"수정"})]}),e.jsx($,{}),e.jsx(gt,{type:"update",form:d,onSubmit:x,bannerType:Number(r)})]})},ja=Ct([{path:"/",element:e.jsx(Dt,{}),children:[{path:"/login",element:e.jsx(ts,{})},{path:"/member/general",element:e.jsx(ys,{})},{path:"/member/general/detail/:id",element:e.jsx(vs,{})},{path:"/member/corporate",element:e.jsx(Ss,{})},{path:"/member/corporate/detail/:id",element:e.jsx(Ys,{})},{path:"/event",element:e.jsx(Ms,{})},{path:"/event/apply/:id",element:e.jsx(Vs,{})},{path:"/event/apply/:id/general",element:e.jsx(Ls,{})},{path:"/event/apply/:id/detail",element:e.jsx(Js,{})},{path:"/event/apply/:id/information",element:e.jsx(Ks,{})},{path:"/event/apply/:id/survey",element:e.jsx(Hs,{})},{path:"/event/apply/:id/faq",element:e.jsx(Xs,{})},{path:"/banner",element:e.jsx(ma,{})},{path:"/banner/detail/:id",element:e.jsx(ua,{})},{path:"/banner/add",element:e.jsx(_a,{})},{path:"/banner/main",element:e.jsx(Ws,{})},{path:"/banner/main/detail",element:e.jsx(dt,{})},{path:"/banner/main/detail/:id",element:e.jsx(dt,{})},{path:"/banner/band",element:e.jsx(Zs,{})},{path:"/banner/band/detail",element:e.jsx(pt,{})},{path:"/banner/band/detail/:id",element:e.jsx(pt,{})}]}]),fa=()=>e.jsx(Yt,{router:ja}),ba=Et`
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
`;function ga(){return e.jsxs(e.Fragment,{children:[e.jsx(ba,{}),e.jsx(fa,{})]})}const ya=new vt;yt(document.getElementById("root")).render(e.jsx(wt,{children:e.jsxs(kt,{client:ya,children:[e.jsx(ga,{}),e.jsx(At,{})]})}));
