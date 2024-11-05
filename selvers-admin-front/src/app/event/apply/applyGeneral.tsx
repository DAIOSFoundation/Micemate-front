import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useApplyRegisterGeneralQuery } from "@/api/events/events.query";
import { commonImgUrl } from "@/constants/config";

const payableTypes = [
  { type: 1, name: "무료" },
  { type: 2, name: "사전 신청 시 무료 / 현장 구매 시 유료" },
  { type: 3, name: "사전 신청 시 무료 / 기간 한정 유료 / 현장 구매 시 유료" },
  { type: 4, name: "사전 신청 유료 / 현장 결제 유료" },
  { type: 5, name: "유료" },
];

const Page = () => {
  const { id } = useParams();
  const [checkList, setCheckList] = useState<{ [key: string]: boolean }>({});

  const {
    data: GeneralData,
    isLoading,
    isError,
  } = useApplyRegisterGeneralQuery(id ? Number(id) : undefined);

  const onCheckChange = (e, key) => {
    const getData = sessionStorage.getItem("EVENT_ACCEPT");
    const storageData = JSON.parse(getData);
    let newData;

    if (getData && storageData.id === id)
      newData = {
        id: id,
        reject: {
          ...storageData.reject,
          [key]: e.target.checked ?? false,
        },
      };
    else
      newData = {
        id: id,
        reject: {
          [key]: e.target.checked ?? false,
        },
      };

    sessionStorage.setItem("EVENT_ACCEPT", JSON.stringify(newData));
    setCheckList(newData?.reject);
  };

  useEffect(() => {
    const getData = sessionStorage.getItem("EVENT_ACCEPT");
    const storageData = JSON.parse(getData);

    if (getData && storageData.id === id) setCheckList(storageData?.reject);
    else {
      setCheckList({});
      sessionStorage.removeItem("EVENT_ACCEPT");
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <div>데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }

  return (
    <div className="container">
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel type2">
          <div className="tit_wrap">
            <h2 className="fs_40">기본정보</h2>
          </div>
          <div className="tit_wrap mt_12">
            <h3 className="fs_18">
              참관객 모집을 위한 행사의 기본 정보를 입력해주세요.
            </h3>
          </div>

          <div className="dis_flex justify_end mt_30">
            <div className="fs_18 fw_500 pr_20">수정요청 항목</div>
          </div>

          <div className="tit_wrap mt_10">
            <h3 className="fs_20">
              프로젝트 제목 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className="w_767"
              type="text"
              value={GeneralData?.data?.title ?? ""}
              readOnly
            />
            <div className="checkbox big">
              <input
                id="title"
                type="checkbox"
                checked={checkList?.title ?? false}
                onChange={(e) => onCheckChange(e, "title")}
              />
              <label htmlFor="title"></label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 분야 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <select className="w_767" disabled>
              <option value={GeneralData?.data?.category.id}>
                {GeneralData?.data?.category.name}
              </option>
            </select>
            <div className="checkbox big">
              <input
                id="category"
                type="checkbox"
                checked={checkList?.category ?? false}
                onChange={(e) => onCheckChange(e, "category")}
              />
              <label htmlFor="category"></label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="tit02">
              대표 이미지 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="tit_wrap mt_4">
            <p className="fs_12">
              메인페이지 및 상세페이지 내 노출할 대표 이미지를 등록해주세요.
            </p>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="infomation_blue_box w_767">
              <div className="dis_flex gap5 fs_12 fw_600">
                <i className="info_icon"></i>
                <span>대표 이미지 등록 가이드</span>
              </div>
              <div className="mt_8 fs_12 fw_500 pl_15">
                · 10MB 이하의 JPG, JPEG, PNG 파일
                <br />· 해상도 385*480픽셀(세로형), 1280*720픽셀(가로형) / 72dpi
                이상
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="img"
                type="checkbox"
                checked={checkList?.img ?? false}
                onChange={(e) => onCheckChange(e, "img")}
              />
              <label htmlFor="img"></label>
            </div>
          </div>
          <div className="dis_flex mt_10 gap16">
            <div>
              <input type="file" id="img1" className="hide" disabled />
              <label htmlFor="img1" className="file_inp vertical preview_label">
                {GeneralData?.data?.img1 && (
                  <span className="preview_img">
                    {/* <span className="cancel_btn"></span> */}
                    <img src={`${commonImgUrl}/${GeneralData?.data?.img1}`} />
                  </span>
                )}
                0 / 1
              </label>
              <p className="txt_center fs_12 mt_7">세로형</p>
            </div>
            <div>
              <input type="file" id="img2" className="hide" disabled />
              <label
                htmlFor="img2"
                className="file_inp horizontal preview_label"
              >
                {GeneralData?.data?.img2 && (
                  <span className="preview_img">
                    {/* <span className="cancel_btn"></span> */}
                    <img src={`${commonImgUrl}/${GeneralData?.data?.img2}`} />
                  </span>
                )}
                0 / 1
              </label>
              <p className="txt_center fs_12 mt_7">가로형</p>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 운영 일자 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex w_767">
              <div className="date_img_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  id="event_start_date"
                  placeholder="행사 시작 일자를 선택해주세요."
                  readOnly
                  value={
                    GeneralData?.data?.event_start_date
                      ? dayjs(GeneralData?.data?.event_start_date).format(
                          "YYYY-MM-DD"
                        )
                      : ""
                  }
                />
                <i className="date_icon"></i>
              </div>
              <span className="fs_20">&nbsp;~&nbsp;</span>
              <div className="date_img_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  id="event_end_date"
                  placeholder="행사 종료 일자를 선택해주세요."
                  readOnly
                  value={
                    GeneralData?.data?.event_end_date
                      ? dayjs(GeneralData?.data?.event_end_date).format(
                          "YYYY-MM-DD"
                        )
                      : ""
                  }
                />
                <i className="date_icon"></i>
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="date"
                type="checkbox"
                checked={checkList?.date ?? false}
                onChange={(e) => onCheckChange(e, "date")}
              />
              <label htmlFor="date"></label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 운영 시간 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex w_767">
              <div className="num_inp_wrap flex1">
                <input
                  type="text"
                  placeholder="행사 시작 시간을 입력해주세요."
                  value={
                    GeneralData?.data?.event_start_date
                      ? dayjs(GeneralData?.data?.event_start_date).format(
                          "HH:mm"
                        )
                      : ""
                  }
                  readOnly
                />
                <button className="increase"></button>
                <button className="decrease"></button>
              </div>
              <span className="fs_20">&nbsp;~&nbsp;</span>
              <div className="num_inp_wrap flex1">
                <input
                  type="text"
                  placeholder="행사 종료 시간을 입력해주세요."
                  value={
                    GeneralData?.data?.event_end_date
                      ? dayjs(GeneralData?.data?.event_end_date).format("HH:mm")
                      : ""
                  }
                  readOnly
                />
                <button className="increase"></button>
                <button className="decrease"></button>
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="time"
                type="checkbox"
                checked={checkList?.time ?? false}
                onChange={(e) => onCheckChange(e, "time")}
              />
              <label htmlFor="time"></label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              비용 설정 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex justify_between w_767">
              <select className="w_372" disabled>
                <option value={GeneralData?.data?.payable_type ?? ""}>
                  {payableTypes.find(
                    (item) => item.type === GeneralData?.data?.payable_type
                  )?.name ?? ""}
                </option>
              </select>
              {GeneralData?.data?.payable_type === 2 && (
                <div id="_sel1">
                  <input
                    type="number"
                    className="w_372"
                    placeholder="현장 신청 비용을 입력해주세요."
                    value={GeneralData?.data?.payable_price2 ?? ""}
                    readOnly
                  />
                </div>
              )}
            </div>
            <div className="checkbox big">
              <input
                id="payable"
                type="checkbox"
                checked={checkList?.payable ?? false}
                onChange={(e) => onCheckChange(e, "payable")}
              />
              <label htmlFor="payable"></label>
            </div>
          </div>
          {(GeneralData?.data?.payable_type === 3 ||
            GeneralData?.data?.payable_type === 4) && (
            <div id="_sel2">
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <div className="dis_flex justify_between w_767 gap23">
                  <div className="date_inp_wrap flex1">
                    <input
                      className="w_full"
                      type="text"
                      placeholder="유료 시작 날짜"
                      value={
                        GeneralData?.data?.payable_start_date
                          ? dayjs(GeneralData?.data?.payable_start_date).format(
                              "YYYY-MM-DD"
                            )
                          : ""
                      }
                      readOnly
                    />
                    <input type="date" />
                  </div>
                  <div className="date_inp_wrap flex1">
                    <input
                      className="w_full"
                      type="text"
                      placeholder="유료 종료 날짜"
                      value={
                        GeneralData?.data?.payable_end_date
                          ? dayjs(GeneralData?.data?.payable_end_date).format(
                              "YYYY-MM-DD"
                            )
                          : ""
                      }
                      readOnly
                    />
                    <input type="date" />
                  </div>
                  <input
                    type="number"
                    className="w_372"
                    placeholder="유료 사전 신청 기간의 비용을 입력해주세요."
                    value={GeneralData?.data?.payable_price1 ?? ""}
                    readOnly
                  />
                </div>
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_10">
                <input
                  type="text"
                  className="w_767"
                  placeholder="외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"
                  value={GeneralData?.data?.payable_price_url ?? ""}
                  readOnly
                />
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <div className="w_767 txt_center">
                  <i className="blue_icon_box">+</i>
                </div>
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <input
                  type="number"
                  className="w_372"
                  placeholder="현장 신청 비용을 입력해주세요."
                  value={GeneralData?.data?.payable_price2 ?? ""}
                  readOnly
                />
              </div>
            </div>
          )}
          {GeneralData?.data?.payable_type === 5 && (
            <div id="_sel4">
              <div className="dis_flex align_start justify_between pr_52 mt_25">
                <input
                  type="text"
                  className="w_767"
                  placeholder="외부 결제 및 홈페이지 url을 입력해주세요. (마이스메이트 서비스에선 별도에 결제 기능을 제공하고 있지 않습니다.)"
                  value={GeneralData?.data?.payable_price_url ?? ""}
                />
              </div>
            </div>
          )}

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              행사 진행 방식 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex w_767 gap11">
              <div className="checkbox02 flex1 col_gray">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  checked={GeneralData?.data?.progress_type === 0}
                  readOnly
                />
                <label htmlFor="checkbox-1">오프라인 행사</label>
              </div>
              <div className="checkbox02 flex1 col_gray">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  checked={GeneralData?.data?.progress_type === 1}
                  readOnly
                />
                <label htmlFor="checkbox-2">온라인 행사</label>
              </div>
              <div className="checkbox02 flex1 col_gray">
                <input
                  id="checkbox-3"
                  type="checkbox"
                  checked={GeneralData?.data?.progress_type === 2}
                  readOnly
                />
                <label htmlFor="checkbox-3">하이브리드 행사</label>
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="progress"
                type="checkbox"
                checked={checkList?.progress ?? false}
                onChange={(e) => onCheckChange(e, "progress")}
              />
              <label htmlFor="progress"></label>
            </div>
          </div>
          {(GeneralData?.data?.progress_type === 1 ||
            GeneralData?.data?.progress_type === 2) && (
            <div className="dis_flex align_start justify_between pr_52 mt_18">
              <input
                className="w_767"
                type="text"
                placeholder="온라인 행사 url를 입력해주세요. (온라인 / 하이브리드 행사 선택 시)"
                readOnly
                value={GeneralData?.data?.progress_url ?? ""}
              />
            </div>
          )}
          {(GeneralData?.data?.progress_type === 0 ||
            GeneralData?.data?.progress_type === 2) && (
            <>
              <div className="tit_wrap mt_25">
                <h3 className="fs_20">
                  행사 운영 위치 <i className="col_red">*</i>
                </h3>
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_10">
                <input
                  type="text"
                  className="w_767"
                  placeholder="도로명/지번 주소 검색 (오프라인 / 하이브리드 행사 선택 시)"
                  readOnly
                  value={GeneralData?.data?.position1 ?? ""}
                />
                <div className="checkbox big">
                  <input
                    id="position"
                    type="checkbox"
                    checked={checkList?.position ?? false}
                    onChange={(e) => onCheckChange(e, "position")}
                  />
                  <label htmlFor="position"></label>
                </div>
              </div>
              <div className="dis_flex align_start justify_between pr_52 mt_18">
                <input
                  type="text"
                  className="w_767"
                  placeholder="세부 주소"
                  readOnly
                  value={GeneralData?.data?.position2 ?? ""}
                />
              </div>
            </>
          )}

          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap">
              <Link to="/event" className="fs_18 fw_600">
                &lt; 리스트로 돌아가기
              </Link>
            </div>
            <div className="btn_wrap gap23">
              <Link to={`/event/apply/${id}`} className="btn gray">
                뒤로
              </Link>
              <Link to={`/event/apply/${id}/detail`} className="btn light_blue">
                다음
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
