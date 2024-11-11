import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useApplyRegisterInfoQuery } from "@/api/events/events.query";
import { useEffect, useState } from "react";
import AcceptBtns from "@components/page/event/acceptBtns";

const Page = () => {
  const { id } = useParams();
  const [checkList, setCheckList] = useState<{ [key: string]: boolean }>({});

  const {
    data: InfoData,
    isLoading,
    isError,
  } = useApplyRegisterInfoQuery(id ? Number(id) : undefined);

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
            <h2 className="fs_40">모집정보</h2>
          </div>
          <div className="tit_wrap mt_12">
            <h3 className="fs_18">
              행사 신청을 위해 모집 방법 및 수집할 정보를 입력해주세요.
            </h3>
          </div>

          <div className="dis_flex justify_end mt_30">
            <div className="fs_18 fw_500 pr_20">수정요청 항목</div>
          </div>

          <div className="tit_wrap mt_10">
            <h3 className="fs_20">
              모집 기간 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="w_767 dis_flex gap10">
              <div className="date_img_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  placeholder="시작 날짜"
                  value={
                    InfoData?.data?.application_start_date
                      ? dayjs(InfoData?.data?.application_start_date).format(
                          "YYYY-MM-DD"
                        )
                      : ""
                  }
                  readOnly
                />
                <i className="date_icon"></i>
              </div>
              <div className="flex1">
                <input
                  className="w_full"
                  type="text"
                  placeholder="시작 시간"
                  value={
                    InfoData?.data?.application_start_date
                      ? dayjs(InfoData?.data?.application_start_date).format(
                          "HH:mm"
                        )
                      : ""
                  }
                  readOnly
                />
              </div>
              <div className="date_img_wrap flex1">
                <input
                  className="w_full"
                  type="text"
                  placeholder="종료 날짜"
                  value={
                    InfoData?.data?.application_end_date
                      ? dayjs(InfoData?.data?.application_end_date).format(
                          "YYYY-MM-DD"
                        )
                      : ""
                  }
                  readOnly
                />
                <i className="date_icon"></i>
              </div>
              <div className="flex1">
                <input
                  className="w_full"
                  type="text"
                  placeholder="종료 시간"
                  value={
                    InfoData?.data?.application_end_date
                      ? dayjs(InfoData?.data?.application_end_date).format(
                          "HH:mm"
                        )
                      : ""
                  }
                  readOnly
                />
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="application_date"
                type="checkbox"
                checked={checkList?.application_date ?? false}
                onChange={(e) => onCheckChange(e, "application_date")}
              />
              <label htmlFor="application_date"></label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              모집 방법 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="tit_wrap mt_4">
            <h3 className="fs_12">
              단체 신청 진행 시, 선택하신 수집 정보를 기반으로 한 엑셀 양식을
              제공합니다.
            </h3>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="dis_flex w_767 gap11">
              <div className="checkbox02 flex1">
                <input
                  id="checkbox-1"
                  type="checkbox"
                  checked={InfoData?.data?.application_type === 0}
                  readOnly
                />
                <label htmlFor="checkbox-1">개인 신청</label>
              </div>
              <div className="checkbox02 flex1">
                <input
                  id="checkbox-2"
                  type="checkbox"
                  checked={InfoData?.data?.application_type === 1}
                  readOnly
                />
                <label htmlFor="checkbox-2">단체 신청</label>
              </div>
              <div className="checkbox02 flex1">
                <input
                  id="checkbox-3"
                  type="checkbox"
                  checked={InfoData?.data?.application_type === 2}
                  readOnly
                />
                <label htmlFor="checkbox-3">개인/단체 신청 모두</label>
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="application_type"
                type="checkbox"
                checked={checkList?.application_type ?? false}
                onChange={(e) => onCheckChange(e, "application_type")}
              />
              <label htmlFor="application_type"></label>
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              수집 정보 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox02 w_767">
              <input id="chk03_1" type="checkbox" disabled checked />
              <label htmlFor="chk03_1">이름</label>
            </div>
            <div className="checkbox big">
              <input
                id="application_information"
                type="checkbox"
                checked={checkList?.application_information ?? false}
                onChange={(e) => onCheckChange(e, "application_information")}
              />
              <label htmlFor="application_information"></label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox02 w_767">
              <input id="chk03_2" type="checkbox" disabled checked />
              <label htmlFor="chk03_2">이메일</label>
            </div>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="checkbox02 w_767">
              <input id="chk03_3" type="checkbox" disabled checked />
              <label htmlFor="chk03_3">휴대전화 번호</label>
            </div>
          </div>
          {InfoData?.data?.information?.map((item) => {
            return (
              <div
                key={item.id}
                className="dis_flex align_start justify_between pr_52 mt_10"
              >
                <div className="checkbox_toggle w_767">
                  <input
                    id={`chk03_${item.id + 3}_p`}
                    type="checkbox"
                    className="input"
                    value={item.id}
                    disabled
                    checked={item.is_set}
                  />
                  <label htmlFor={`chk03_${item.id + 3}_p`} className="label">
                    {item.name}
                  </label>
                  <input
                    type="checkbox"
                    className="hide toggle"
                    id={`chk03_${item.id + 3}_c`}
                    checked={item.required}
                    readOnly
                  />
                  <label
                    htmlFor={`chk03_${item.id + 3}_c`}
                    className="required_toggle_btn"
                  >
                    필수<i></i>
                  </label>
                </div>
              </div>
            );
          })}

          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap">
              <Link to="/event" className="fs_18 fw_600">
                &lt; 리스트로 돌아가기
              </Link>
            </div>
            <AcceptBtns />
            <div className="btn_wrap gap23">
              <Link to={`/event/apply/${id}/detail`} className="btn gray">
                뒤로
              </Link>
              <Link to={`/event/apply/${id}/survey`} className="btn light_blue">
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
