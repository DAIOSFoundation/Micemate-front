import { useState } from "react";
import {
  TabNav,
  ContentWrap,
  BasicInfo,
  DetailInfo,
  FaQ,
  ContactUs,
} from "./contentStyle";
import { Link } from "react-scroll";
import QIcon from "@/assets/icon/question.svg?react";
import FIcon from "@/assets/icon/answer.svg?react";
import { EventDetailDataType } from "@/type";
import { dateStringFormat, priceFormat } from "@/util/stringTransition";

const detailNav = [
  { id: 1, name: "기본 정보" },
  { id: 2, name: "상세 정보" },
  { id: 3, name: "FAQ" },
  { id: 4, name: "문의하기" },
];

const payableInfo = (type: number, pay1: number, pay2: number) => {
  if (type === 1) {
    return `무료`;
  } else if (type === 2) {
    return `사전신청 무료 / 현장구매 유료(${priceFormat(String(pay2))})`;
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

const Content = ({ contentdata }: { contentdata: EventDetailDataType }) => {
  const [detailView, setDetailView] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const accordionheadler = (idx: number) => {
    if (activeIndex === idx) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };
  console.log(contentdata);

  return (
    <>
      <TabNav>
        {detailNav.map((data) => {
          return (
            <Link
              to={`section${data.id}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={data.id}
            >
              {data.name}
            </Link>
          );
        })}
      </TabNav>
      <ContentWrap>
        <BasicInfo id="section1">
          <h3>기본 정보</h3>
          <ul className="info_list">
            <li className="item">
              <span className="tit">행사 기간</span>
              <span className="desc">{`${dateStringFormat(
                contentdata.event_start_date
              )} ~
            ${dateStringFormat(contentdata.event_end_date)}`}</span>
            </li>
            <li className="item">
              <span className="tit">개최 장소</span>
              <span className="desc">{contentdata.position1}</span>
            </li>
            <li className="item">
              <span className="tit">세부 장소</span>
              <span className="desc">{contentdata.position2}</span>
            </li>
            <li className="item">
              <span className="tit">전시 분야</span>
              <span className="desc">{contentdata.category.name}</span>
            </li>
            <li className="item">
              <span className="tit">참가 비용</span>
              <span className="desc">
                {payableInfo(
                  contentdata.payable_type,
                  contentdata.payable_price1,
                  contentdata.payable_price2
                )}
              </span>
            </li>
          </ul>
        </BasicInfo>
        <DetailInfo id="section2" $detailView={detailView}>
          <h3>상세 정보</h3>
          <div className="detail_box">
            <div>
              <div className="image">
                <div
                  dangerouslySetInnerHTML={{ __html: contentdata.content }}
                />
              </div>
              <div className="more_box">
                <p className="btn">
                  <button
                    onClick={() => {
                      setDetailView((prev) => !prev);
                    }}
                  >
                    {detailView ? "접기" : "더보기"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </DetailInfo>
        <FaQ id="section3">
          <h3>FAQ</h3>
          <ul className="faq_list">
            {contentdata.faqs.map((data, index) => {
              return (
                <li key={index} className="faq_item">
                  <div
                    onClick={() => accordionheadler(index)}
                    className="question"
                  >
                    <span className="icon">
                      <QIcon />
                    </span>
                    <span className="txt">{data.question}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="answer">
                      <span className="icon">
                        <FIcon />
                      </span>
                      <span className="txt">{data.answer}</span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </FaQ>
        <ContactUs id="section4">
          <h3>문의하기</h3>
          <ul className="info_list">
            <li className="item">
              <span className="tit">담당자</span>
              <span className="desc">{contentdata.contact_name}</span>
            </li>
            <li className="item">
              <span className="tit">전화번호</span>
              <span className="desc">{contentdata.contact_number}</span>
            </li>
            <li className="item">
              <span className="tit">이메일</span>
              <span className="desc">{contentdata.contact_email}</span>
            </li>
          </ul>
        </ContactUs>
      </ContentWrap>
    </>
  );
};

export default Content;
