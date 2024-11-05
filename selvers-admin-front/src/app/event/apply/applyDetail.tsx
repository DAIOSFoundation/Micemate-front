import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Link, useParams } from "react-router-dom";
import SideMenu from "@components/shared/sideMenu/sideMenu";
import LoadingScreen from "@components/shared/LoadingScreen";
import { useApplyRegisterDetailQuery } from "@/api/events/events.query";

const Page = () => {
  const { id } = useParams();
  const quillRef = useRef();
  const [editor, setEditor] = useState("");
  const [checkList, setCheckList] = useState<{ [key: string]: boolean }>({});

  const {
    data: DetailData,
    isLoading,
    isError,
  } = useApplyRegisterDetailQuery(id ? Number(id) : undefined);

  const editorModules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image"],
        ],
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  const editorFormats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "align",
    "image",
  ];

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

  useEffect(() => {
    if (DetailData !== undefined) {
      setEditor(DetailData.data.content);
    }
  }, [DetailData]);

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
            <h2 className="fs_40">상세페이지</h2>
          </div>
          <div className="tit_wrap mt_12">
            <h3 className="fs_18">행사 등록을 위한 내용을 작성해주세요.</h3>
          </div>
          <div className="dis_flex justify_end mt_30">
            <div className="fs_18 fw_500 pr_20">수정요청 항목</div>
          </div>
          <div className="tit_wrap mt_10">
            <h3 className="tit02">
              행사 상세내용 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="tit_wrap mt_4">
            <p className="fs_12">
              메인페이지 및 상세페이지 내 노출할 상세이미지 및 내용을
              입력해주세요.
            </p>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <div className="infomation_blue_box w_767">
              <div className="dis_flex gap5 fs_12 fw_600">
                <i className="info_icon"></i>
                <span>상세 내용 작성 가이드</span>
              </div>
              <div className="mt_8 fs_12 fw_500 pl_15">
                · 이미지의 너비는 1100px 이상으로 등록해야 상세 페이지의 여백이
                생기지 않습니다.
                <br />
                · 이미지 용량이 큰 경우 로딩 속도가 느려질 수 있습니다.
                <br />· 설명 글도 함께 작성할 수 있으니, 기본 정보 외의 추가할
                세부 내용을 작성해주세요.
              </div>
            </div>
            <div className="checkbox big">
              <input
                id="content"
                type="checkbox"
                checked={checkList?.content ?? false}
                onChange={(e) => onCheckChange(e, "content")}
              />
              <label htmlFor="content"></label>
            </div>
          </div>

          <div className="dis_flex align_start justify_between pr_52 mt_20">
            <div className="w_767">
              <ReactQuill
                ref={quillRef}
                value={editor}
                onChange={setEditor}
                modules={editorModules}
                formats={editorFormats}
                className="quill_editor"
                theme="snow"
                readOnly
              />
            </div>
          </div>

          <div className="tit_wrap mt_25">
            <h3 className="fs_20">
              태그 <i className="col_red">*</i>
            </h3>
          </div>
          <div className="tit_wrap mt_4">
            <p className="fs_12">본 행사를 설명해줄 태그를 입력해주세요.</p>
          </div>
          <div className="dis_flex align_start justify_between pr_52 mt_10">
            <input
              className="w_372"
              type="text"
              placeholder="태그는 최대 5개까지 입력 가능합니다."
              readOnly
            />
            <div className="checkbox big">
              <input
                id="tag"
                type="checkbox"
                checked={checkList?.tag ?? false}
                onChange={(e) => onCheckChange(e, "tag")}
              />
              <label htmlFor="tag"></label>
            </div>
          </div>

          {DetailData?.data?.tags?.length > 0 && (
            <div className="dis_flex align_start justify_between pr_52 mt_14">
              <ul className="white_tag_list">
                {DetailData?.data?.tags?.map((item, index) => {
                  return (
                    <li key={index}>
                      {item ?? ""}
                      <button className="delete_btn" disabled></button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap">
              <Link to="/event" className="fs_18 fw_600">
                &lt; 리스트로 돌아가기
              </Link>
            </div>
            <div className="btn_wrap gap23">
              <Link to={`/event/apply/${id}/general`} className="btn gray">
                뒤로
              </Link>
              <Link
                to={`/event/apply/${id}/information`}
                className="btn light_blue"
              >
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
