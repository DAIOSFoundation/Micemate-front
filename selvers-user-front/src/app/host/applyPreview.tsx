import { useEventDetail } from "@/api/events/events.query";
import { ApplyPrivewWrap } from "./applyPreviewStyle";
import { dateStringFormat, priceFormat } from "@/util/stringTransition";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyPreviewPage = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const { data: eventDetail } = useEventDetail(id, token);
  const [preview, setPreview] = useState(false);

  // const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const payableInfo = (type: number, pay1: number, pay2: number) => {
    if (type === 1) {
      return `무료`;
    } else if (type === 2) {
      return `사전신청 무료 / 현장구매 유료(${priceFormat(String(pay1))})`;
    } else if (type === 3) {
      return `사전 신청 무료 / 기간 한정 유료(${priceFormat(
        String(pay1)
      )}) / 현장 구매 시 유료(${priceFormat(String(pay2))})`;
    } else if (type === 4) {
      return `사전 신청 유료(${priceFormat(
        String(pay1)
      )}) / 현장 결제 유료(${priceFormat(String(pay2))})`;
    } else if (type === 5) {
      return `유료(${priceFormat(String(pay2))})`;
    }
  };

  // const accordionheadler = (idx: number) => {
  //   if (activeIndex === idx) {
  //     setActiveIndex(null);
  //   } else {
  //     setActiveIndex(idx);
  //   }
  // };

  if (!eventDetail) {
    <div>표시할 내용이 없습니다.</div>;
  }

  return (
    <ApplyPrivewWrap $preview={preview}>
      <div className="wrap">
        <div className="preview_page">
          <div className="cont_wrap">
            <div className="top_wrap">
              <div className="m_img">
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${
                    eventDetail?.data?.img
                  }`}
                />
              </div>
              <div className="tit_area">
                <div className="area_l">
                  <div className="title">
                    <strong>{eventDetail?.data?.title}</strong>
                    <div className="d_day_tag">D-1</div>
                  </div>
                  <div className="desc">
                    {`${dateStringFormat(eventDetail?.data?.event_start_date)} ~
            ${dateStringFormat(eventDetail?.data?.event_end_date)}`}
                    &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    {eventDetail?.data?.position1}
                  </div>
                  <div className="score">
                    <i className="star"></i>
                    4.4
                    <span className="col_blue">(4,423)</span>
                  </div>
                </div>
                <div className="area_r">
                  <div className="btns">
                    <button className="heart_btn"></button>
                    <button className="share_btn"></button>
                  </div>
                  <button className="btn blue">사전 신청하기</button>
                </div>
              </div>
            </div>

            <div className="info_wrap">
              <div className="tab_btns">
                <a href="#_info" className="tab_btn">
                  기본정보
                </a>
                <a href="#_detail" className="tab_btn">
                  상세정보
                </a>
                {/* <a href="#_faq" className="tab_btn">
                  FAQ
                </a> */}
                <a href="#_call" className="tab_btn">
                  문의하기
                </a>
              </div>

              <div className="info_box">
                <div id="_info">
                  <div className="tit">기본 정보</div>
                  <ul className="key_val_list">
                    <li>
                      <div className="key">행사 기간</div>
                      <div className="val">
                        {`${dateStringFormat(
                          eventDetail?.data?.event_start_date
                        )} ~
            ${dateStringFormat(eventDetail?.data?.event_end_date)}`}
                      </div>
                    </li>
                    <li>
                      <div className="key">개최 장소</div>
                      <div className="val">{eventDetail?.data?.position1}</div>
                    </li>
                    <li>
                      <div className="key">세부 장소</div>
                      <div className="val">{eventDetail?.data?.position2}</div>
                    </li>
                    <li>
                      <div className="key">전시 분야</div>
                      <div className="val">
                        {eventDetail?.data?.category.name}
                      </div>
                    </li>
                    <li>
                      <div className="key">참가 비용</div>
                      <div className="val">
                        {payableInfo(
                          eventDetail?.data?.payable_type,
                          eventDetail?.data?.payable_price1,
                          eventDetail?.data?.payable_price2
                        )}
                      </div>
                    </li>
                  </ul>
                </div>

                <div id="_detail">
                  <div className="tit">상세 정보</div>
                  <div className={`detail_imgs`}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: eventDetail?.data?.content,
                      }}
                    />
                    <button
                      onClick={() => setPreview((prev) => !prev)}
                      className="btn blue detail_more_btn"
                    >
                      {preview ? "접기" : "더보기"}
                    </button>
                  </div>
                </div>

                {/* <div id="_faq">
                  <div className="tit">FAQ</div>

                  <ul className="faq_list">
                    {eventDetail?.data?.faqs?.map((data, index) => {
                      return (
                        <li>
                          <div
                            onClick={() => accordionheadler(index)}
                            className="q_txt"
                          >
                            {data.question}
                          </div>
                          {activeIndex === index && (
                            <div className="a_txt">{data.answer}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div> */}

                <div id="_call">
                  <div className="tit">문의하기</div>
                  <ul className="key_val_list">
                    <li>
                      <div className="key">담당자</div>
                      <div className="val">
                        {eventDetail?.data?.contact_name}
                      </div>
                    </li>
                    <li>
                      <div className="key">전화번호</div>
                      <div className="val">
                        {eventDetail?.data?.contact_number}
                      </div>
                    </li>
                    <li>
                      <div className="key">이메일</div>
                      <div className="val">
                        {eventDetail?.data?.contact_email}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="review_wrap">
            <div className="tab_btns">
              <button className="tab_btn active">리뷰</button>
              <button className="tab_btn">참여 기업</button>
            </div>
            <div className="blue_comment_box">
              전시회 참여 후 리뷰를 작성해주세요.
              <br />
              고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다!
              <button className="blue_comment_box_delete"></button>
            </div>
            <div className="comment_box">
              <div className="top_wrap">
                <div className="score_wrap">
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="txt">4,423개 평점</div>
                  <div className="score_num">4.4</div>
                </div>
                <select className="select">
                  <option value="1">베스트순</option>
                  <option value="2">최신순</option>
                </select>
              </div>
              <ul className="comment_list">
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn active">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "0%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "0%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "0%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
                <li>
                  <div className="stars">
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "100%" }}></i>
                    </span>
                    <span>
                      <i style={{ width: "40%" }}></i>
                    </span>
                  </div>
                  <div className="username">마이스미츄 · 2024년 08월 23일</div>
                  <div className="comment_txt">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    <br />
                    아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </div>
                  <div className="btn_wrap">
                    <button className="like_btn">30</button>
                  </div>
                </li>
              </ul>
              <div className="pagination">
                <button className="pagi_prev"></button>
                <button className="num active">1</button>
                <button className="num">2</button>
                <button className="num">3</button>
                <button className="num">4</button>
                <button className="pagi_next"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApplyPrivewWrap>
  );
};

export default ApplyPreviewPage;
