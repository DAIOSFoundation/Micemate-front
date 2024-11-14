import Logo from "@/assets/host/logo/main_logo_w.png";
import InstaIcon from "@/assets/host/banner/Instagram.png";
import YouTubeIcon from "@/assets/host/banner/YouTube.png";
import TwitterIcon from "@/assets/host/banner/Twitter.png";
import FacebookIcon from "@/assets/host/banner/Facebook.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner">
        <div className="l_area">
          <div className="foot_logo">
            <img src={Logo} alt="" />
          </div>
          <div className="btm_area">
            <div className="sns_btns">
              <Link
                to="https://www.instagram.com/mindsground?igsh=MmVnaThtdHF4Z2V2&utm_source=qr"
                target="_blank"
                className="btn"
              >
                <img src={InstaIcon} alt="" />
              </Link>
              <Link
                to="https://www.youtube.com/@mindsground_official"
                target="_blank"
                className="btn"
              >
                <img src={YouTubeIcon} alt="" />
              </Link>
              <Link
                to="https://blog.naver.com/mindsstudio"
                target="_blank"
                className="btn"
              >
                <img src={TwitterIcon} alt="" />
              </Link>
              <Link
                to="mailto:admin@mindsground.com"
                target="_blank"
                className="btn"
              >
                <img src={FacebookIcon} alt="" />
              </Link>
            </div>
            <div className="txt_btns">
              <a href="#none">창업기업확인서 받기</a>
              <a href="#none">사회적기업확인서 받기</a>
            </div>
          </div>
        </div>
        <div className="r_area">
          <div className="fnb">
            <Link to="/event-list?page=1&date=1">이번주 행사</Link>
            <Link to="/event-list?page=1&price=2">무료 행사</Link>
            <Link to="/event-list?page=1&progress=1">온라인 행사</Link>
            <Link to="/event-list">메이트 PICK</Link>
          </div>
          <div className="address_wrap">
            마인즈그라운드 주식회사 ㅣ 대표이사 : 민환기 ㅣ 사업자 등록번호 :
            732-87-01581
            <br />
            서울특별시 금천구 가산디지털1로 171 SKV1 301호
            <br />
            Tel : 02-6747-7513 ㅣ Fax : 02 -6499-7513 ㅣ E-mail :
            admin@mindsground.com
            <br />
            <Link to="/privacy-policy">개인정보처리방침</Link>
          </div>
          <div className="copyright">
            Copyright © 마인즈그라운드 주식회사. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
