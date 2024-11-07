import {
  useApplyRegisterDetailQuery,
  useApplyRegisterDetailMutation,
  useApplyImageMutation,
  useApplyImageDelMutation,
} from "@/api/events/events.query";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import { KeyboardEvent } from "react";
import { UserInformationRequest } from "@/type";
import { useToast } from "@/hook/useToast";
import LoadingScreen from "@components/shared/LoadingScreen";

interface UserInfoConText {
  authInfo: UserInformationRequest;
}

const EditApplyDetail = () => {
  const [editor, setEditor] = useState("");
  const [imageData, setImageData] = useState<{ id: number; path: string }[]>(
    []
  );
  const [deletedImages, setDeletedImages] = useState<number[]>([]);
  const [hashText, setHashText] = useState<string>("");
  const [hashList, setHashList] = useState<string[]>([]);
  const { id } = useParams();
  const OutletContext = useOutletContext<UserInfoConText>();
  const authInfo = OutletContext.authInfo;
  const { data: DetailQuery } = useApplyRegisterDetailQuery({
    token: authInfo.token,
    event_id: id,
  });
  const useApplyRegisterDetail = useApplyRegisterDetailMutation();

  const navigate = useNavigate();
  const quillRef = useRef<ReactQuill | null>(null);
  const { openToast } = useToast();
  const applyImage = useApplyImageMutation();
  const ApplyImageDel = useApplyImageDelMutation();

  useEffect(() => {
    // 에디터 초기 데이터
    if (DetailQuery?.data?.content) setEditor(DetailQuery.data.content);
    // 서버에 저장된 이미지 URL
    if (DetailQuery?.data?.images) setImageData(DetailQuery?.data?.images);
    // 해시태그 초기 데이터
    if (DetailQuery?.data?.tags) setHashList(DetailQuery.data.tags);
  }, [DetailQuery]);

  // 이미지 URL 추출 함수
  const extractImageUrls = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const imgElements = doc.querySelectorAll("img");
    return Array.from(imgElements).map((img) => img.src);
  };

  const handleEditorChange = (content: string) => {
    setEditor(content);
    // 현재 에디터의 이미지 URL 추출
    const currentImages = extractImageUrls(content);
    //삭제할 이미지 필터링
    const removedImages = imageData
      .filter(
        (img) =>
          !currentImages.includes(
            `${import.meta.env.VITE_IMAGE_BASE_URL}/${img.path}`
          )
      )
      .map((img) => img.id);
    // 삭제된 이미지 ID 업데이트
    if (removedImages.length > 0) {
      setDeletedImages((prev) => [...new Set([...prev, ...removedImages])]);
    }
  };

  // 이미지 업로드 핸들러 함수
  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/png,image/jpg,image/jpeg");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);
      applyImage.mutate(
        { token: authInfo.token, event_id: id, formData },
        {
          onSuccess: (data) => {
            const imgUrl = `${import.meta.env.VITE_IMAGE_BASE_URL}/${
              data?.data?.path
            }`;
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "image", imgUrl);
            editor.setSelection({ index: range.index + 1, length: 0 });
          },
          onSettled: () => {
            return <LoadingScreen />;
          },
          onError: () => {},
        }
      );
    });
  };

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
        handlers: {
          image: imageHandler,
        },
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
  // 해시태그
  const activeHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.nativeEvent.isComposing) {
        return;
      }
      if (hashList.length < 5 && hashText.length > 0) {
        if (hashList.includes(hashText)) {
          openToast("중복된 단어 입니다.");
        } else {
          setHashList((prev) => [...prev, hashText.trim()]);
        }
      }
      setHashText(""); // 입력 필드 비우기
    }
  };

  const deleteHashTag = (index: number) => {
    setHashList((prev) => prev.filter((_, i) => i !== index));
  };

  const submitHandler = (nextPage: boolean) => {
    const detailData = {
      content: editor,
      tags: hashList,
    };

    //삭제한 이미지 DB에서삭제
    if (deletedImages.length > 0) {
      ApplyImageDel.mutate({
        token: authInfo.token,
        event_id: id,
        data: { ids: deletedImages },
      });
    }
    //상세페이지 저장
    useApplyRegisterDetail.mutate(
      {
        token: authInfo.token,
        event_id: id,
        data: detailData,
      },
      {
        onSuccess: () => {
          if (nextPage === true) {
            navigate(`/host/my/apply-register/edit/${id}/application`);
          }
          openToast("저장 되었습니다.");
        },
      }
    );
  };

  return (
    <div className="cont_area">
      <div className="cont_panel type2">
        <div className="tit_wrap">
          <h2 className="fs_40 fw_700">상세페이지</h2>
        </div>
        <div className="tit_wrap mt_12">
          <h3 className="fs_18">행사 등록을 위한 내용을 작성해주세요.</h3>
        </div>

        <div className="tit_wrap mt_62">
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
              · 이미지는 png, jpg 확장자 파일만 가능하며 용량은 개당 10mb까지
              업로드 가능합니다.
              <br />
              · 이미지 용량이 큰 경우 로딩 속도가 느려질 수 있습니다.
              <br />· 설명 글도 함께 작성할 수 있으니, 기본 정보 외의 추가할
              세부 내용을 작성해주세요.
            </div>
          </div>
        </div>

        <div className="dis_flex align_start justify_between pr_52 mt_20 ReactQuill">
          <div
            className={`w_767 ${
              DetailQuery?.data?.is_reject?.content ? "ounline" : ""
            }`}
          >
            <ReactQuill
              ref={quillRef}
              value={editor}
              onChange={handleEditorChange}
              modules={editorModules}
              formats={editorFormats}
              className="quill_editor"
              theme="snow"
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
            type="text"
            onChange={(e) => {
              setHashText(e.target.value);
            }}
            onKeyDown={(e) => activeHashTag(e)}
            value={hashText}
            className={`w_372 ${
              DetailQuery?.data?.is_reject?.tag ? "outline" : ""
            }`}
            placeholder="태그는 최대 5개까지 입력 가능합니다."
          />
        </div>

        <div className="dis_flex align_start justify_between pr_52 mt_14">
          <ul className="white_tag_list">
            {hashList &&
              hashList.map((data, index) => {
                return (
                  <li key={`${data}_${index}`}>
                    {data}
                    <button
                      onClick={() => deleteHashTag(index)}
                      className="delete_btn"
                    ></button>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="dis_flex justify_between mt_48">
          <div className="btn_wrap"></div>
          <div className="btn_wrap gap23">
            <button
              onClick={() => submitHandler(false)}
              className="btn blue_bor"
            >
              임시 저장
            </button>
            <button
              onClick={() => submitHandler(true)}
              className="btn dark_blue"
            >
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditApplyDetail;
