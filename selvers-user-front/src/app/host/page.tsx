import { HostMainWrap } from "./pageStyle";
import HostHeader from "@components/host/shared/header";
import HostFooter from "@components/host/shared/footer";
import Icon01 from "@/assets/host/banner/main_sect02_01.png";
import Icon02 from "@/assets/host/banner/main_sect02_02.png";
import Icon03 from "@/assets/host/banner/main_sect02_03.png";
import Icon04 from "@/assets/host/banner/main_sect02_04.png";
import { useRecoilValue } from "recoil";
import { userState } from "@/store/userState";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const eventRegisterHandler = () => {
    if (user.isLogin === false) {
      navigate("/login");
    } else if (user.data.is_company === false) {
      navigate("/host/corporate");
    } else if (user.data.is_company === true) {
      navigate("/host/my/apply-register/new");
    }
  };

  return (
    <HostMainWrap>
      <div className="wrap">
        <HostHeader />
        <div className="container">
          <div className="main_visual">
            <div className="inner">
              <div className="title">
                <b>AI</b>로 연결되는 <b>완벽한 행사 파트너</b>
                <br />
                <b>마이스 메이트</b>가 함께합니다
              </div>
              <button onClick={eventRegisterHandler} className="enroll_btn">
                행사 등록하기
              </button>
            </div>
          </div>

          <div className="sect01">
            <div className="title">
              <b>메이트님의 성공적인 행사, AI로 더 쉽고 스마트하게!</b>
            </div>
            <ul>
              <li>
                <div className="step">Point 1</div>
                <div className="tit">Promotion</div>
                <div className="desc">
                  단순한 홍보가 아닌 AI 행사 추천으로 맞춤 고객에게
                  <br />
                  메이트님의 행사를 효율적으로 노출합니다
                </div>
              </li>
              <li>
                <div className="step">Point 2</div>
                <div className="tit">Management</div>
                <div className="desc">
                  더 쉽고 간편하게 모집현황을 확인해보세요
                </div>
              </li>
              <li>
                <div className="step">Point 3</div>
                <div className="tit">Marketing</div>
                <div className="desc">
                  AI 이용료는 무료입니다 !<br />
                  효과적으로 행사의 맞춤 참관객을 모집해보세요
                </div>
              </li>
              <li>
                <div className="step">Point 4</div>
                <div className="tit">Community</div>
                <div className="desc">
                  방문 참관객의 생생한 후기를 통해
                  <br />
                  다음 행사를 더 멋지게 준비해보세요
                </div>
              </li>
            </ul>
          </div>

          <div className="sect02">
            <div className="title">
              멋진 행사 개최의 시작
              <br />
              <b>메이트의 행사 등록 프로세스</b>
            </div>
            <ul>
              <li>
                <div className="img">
                  <img src={Icon01} alt="" />
                </div>
                <div className="tit">메이트 등록</div>
                <div className="desc">
                  기존회원은 기업회원전환,
                  <br />
                  신규회원은 회원가입을
                  <br />
                  진행해주세요.
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={Icon02} alt="" />
                </div>
                <div className="tit">행사 업로드</div>
                <div className="desc">
                  모객을 진행하고자하는
                  <br />
                  행사의 정보를 올려주세요.
                  <br />
                  심사기간이 1-2일
                  <br />
                  소요됩니다.
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={Icon03} alt="" />
                </div>
                <div className="tit">참관객 모집</div>
                <div className="desc">
                  마이스 메이트에서
                  <br />
                  더 많은 참관객을
                  <br />
                  모집해 보세요.
                </div>
              </li>
              <li>
                <div className="img">
                  <img src={Icon04} alt="" />
                </div>
                <div className="tit">참관객 관리</div>
                <div className="desc">
                  마이페이지에서
                  <br />
                  쉽고 합리적으로 참관객
                  <br />
                  현황을 확인하고
                  <br />
                  관리 할 수 있어요.
                </div>
              </li>
            </ul>
          </div>

          <div className="sect03">
            <div className="title">이런 점 궁금하셨나요? FAQ</div>
            <ul>
              <li>
                <b style={{ marginBottom: "15px", display: "block" }}>
                  Q. 마이스 메이트 플랫폼은 무엇이 다른가요?
                </b>
                <b>A.</b> 마이스 메이트는 모든 MICE 행사를 모아, 기업과 고객이
                인공지능 기술을 통해 만나고 최적의 이벤트와 고객을 연결할 수
                있도록 도와주는 플랫폼입니다.
              </li>
              <li>
                <b style={{ marginBottom: "15px", display: "block" }}>
                  Q. AI 맞춤형 행사가 어떻게 추천 되나요?
                </b>
                <b>A.</b> 고객의 관심사, 과거 참여 기록, 프로필 데이터를 분석한
                AI 알고리즘이 최적의 행사를 추천합니다.
              </li>
              <li>
                <b style={{ marginBottom: "15px", display: "block" }}>
                  Q. 기업회원은 어떻게 가입하나요?
                </b>
                <b>A.</b> 홈페이지 우측 상단 행사 등록하기를 통해 기본 정보로
                회원가입/ 기업정보를 입력하여
                <br />
                가입하실 수 있습니다.
              </li>
              <li>
                <b style={{ marginBottom: "15px", display: "block" }}>
                  Q. 이용 요금은 어떻게 되나요?
                </b>
                <b>A.</b> 모든 기능은 기본으로 무료제공되며, 추가 광고,홍보가
                필요할 시 유료 이용가능합니다.
                <br />
                상세 내용은 프로모션 페이지를 참고해주세요
              </li>
            </ul>
          </div>

          <div className="sect04">
            <div className="inner">
              <div className="title">
                지금 바로 최고의 행사를 만들어 볼까요?
                <br />
                마이스 메이트에서 시작됩니다
              </div>
              <button onClick={eventRegisterHandler} className="enroll_btn">
                행사 등록하기
              </button>
            </div>
          </div>
        </div>
        <HostFooter />
      </div>
    </HostMainWrap>
  );
};

export default Page;
