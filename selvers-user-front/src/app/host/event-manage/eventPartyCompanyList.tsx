import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEditBoothMutation } from "@/api/events/events.query";
import { useParams } from "react-router-dom";
import { useToast } from "@/hook/useToast";
import { CustomError } from "@/type";

// zod 스키마 정의
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const EventPartyCompanyList = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [excelFile, setExcelFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [_dragging, setDragging] = useState(false);
  const editBooth = useEditBoothMutation();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const { openToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm();

  const handleFileChange = (files: FileList | null, type: "img" | "xlsx") => {
    console.log(files);
    if (files && files.length > 0) {
      const file = files[0];
      const validImageTypes = [
        "image/jpeg",
        "image/tiff",
        "application/pdf",
        "image/png",
      ];
      const validExcelTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
        "application/haansoftxlsx",
      ];

      // 이미지 파일 검증
      if (type === "img" && validImageTypes.includes(file.type)) {
        console.log(files);
        if (file.size > MAX_FILE_SIZE) {
          setFileError("이미지 파일의 크기는 10MB 이하이어야 합니다.");
          setUploadedFile(null);
          setValue("img", null);
          return;
        }
        setFileError(null);
        setUploadedFile(file);
        setValue("img", file);
      }
      // Excel 파일 검증
      else if (type === "xlsx" && validExcelTypes.includes(file.type)) {
        if (file.size > MAX_FILE_SIZE) {
          setFileError("엑셀 파일의 크기는 10MB 이하이어야 합니다.");
          setExcelFile(null);
          setValue("xlsx", null);
          return;
        }
        setFileError(null);
        setExcelFile(file);
        setValue("xlsx", file);
      }
      // 유효하지 않은 파일 형식
      else {
        setFileError("JPG, TIF, PDF, PNG 또는 엑셀 파일만 업로드 가능합니다.");
        setUploadedFile(null);
        setExcelFile(null);
        setValue("img", null);
        setValue("xlsx", null);
        return;
      }
    } else {
      setFileError(null);
      setUploadedFile(null);
      setExcelFile(null);
      setValue("img", null);
      setValue("xlsx", null);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    type: "img" | "xlsx"
  ) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    handleFileChange(files, type);
  };

  const bytesToMB = (bytes: number) => {
    return (bytes / 1024 / 1024).toFixed(2); // 소수점 2자리까지 표현
  };

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    const appendIfDefined = (key, value) => {
      if (
        value !== undefined &&
        value !== null &&
        !(value instanceof File && value.size === 0)
      ) {
        formData.append(key, value);
      }
    };
    appendIfDefined("img", data.img ? data.img[0] : undefined);
    appendIfDefined("xlsx", data.xlsx ? data.xlsx[0] : undefined);

    editBooth.mutate(
      { token: token, event_id: id, formData: formData },
      {
        onSuccess: () => {
          openToast("저장 되었습니다.");
        },
        onError: () => {
          const customError = editBooth.error as CustomError;
          if (customError.response.data.data) {
            setError("apiError", {
              type: "manual",
              message: "파일을 모두 등록해주세요",
            });
          }
        },
      }
    );
  });

  return (
    <div className="cont_area">
      <div className="cont_panel">
        <div className="tit_wrap mt_44">
          <h2 className="fs_40">참가기업 관리</h2>
        </div>
        <div className="tit_wrap mt_55">
          <h3 className="fs_18">
            부스배치도 & 기업 리스트 <span className="col_red">*</span>
          </h3>
        </div>
        <div className="tit_wrap mt_10">
          <p className="fs_16 fw_500 col_gray">
            행사 부스 배치도와 기업 리스트를 등록해 주세요.
            <br />
            사전등록을 신청한 참관객에게
            <a href="#none" className="col_white underline">
              마이스 메이트 AI 부스추천 서비스
            </a>
            가 맞춤 부스를 추천해드립니다.
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <div className="dis_flex mt_24 pr_52 gap38">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(event) => handleDrop(event, "img")}
              className="enroll_gray_box flex1"
            >
              <h4 className="fs_24">부스배치도 이미지를 등록해주세요</h4>
              <p className="fs_16 mt_14">
                JPG, TIF, PDF, PNG 파일만 등록 가능하며, 용량은 10MB 이하로
                업로드 가능합니다.
                <br />
                부스배치도 이미지 내, 업체명이 기입된 파일로 등록해주실길
                바랍니다.
              </p>
              <div className="btn_wrap mt_36">
                <a
                  href={"/host/downloadFile/[마이스메이트]예시_부스배치도.pdf"}
                  download="[마이스메이트]예시_부스배치도.pdf"
                  className="btn white"
                >
                  부스배치도 예시 이미지
                </a>
                <input
                  type="file"
                  id="img"
                  {...register("img")}
                  onChange={(e) => handleFileChange(e.target.files, "img")}
                  className="hide"
                />
                <label htmlFor="img" className="btn dark_blue">
                  업로드 파일 선택
                </label>
              </div>
              <p className="fs_16 mt_10 fw_500">또는 여기에 끌어서 놓기</p>
            </div>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(event) => handleDrop(event, "xlsx")}
              className="enroll_gray_box flex1"
            >
              <h4 className="fs_24">기업 리스트를 등록해주세요</h4>
              <p className="fs_16 mt_14">
                xlsx 파일만 등록 가능하며, 용량은 10MB 이하로 업로드 가능합니다.
                <br />
                기업 리스트는 마이스 메이트에서 제공하는 양식에 맞춰
                등록해주시길 바랍니다.
              </p>
              <div className="btn_wrap mt_36">
                <a
                  href={"/host/downloadFile/[마이스메이트]참가기업리스트.xlsx"}
                  download="[마이스메이트]참가기업리스트.xlsx"
                  className="btn white"
                >
                  기업 리스트 엑셀 양식
                </a>
                <input
                  type="file"
                  id="xlsx"
                  {...register("xlsx")}
                  onChange={(e) => handleFileChange(e.target.files, "xlsx")}
                  className="hide"
                />
                <label htmlFor="xlsx" className="btn dark_blue">
                  업로드 파일 선택
                </label>
              </div>
              <p className="fs_16 mt_10 fw_500">또는 여기에 끌어서 놓기</p>
            </div>
          </div>
          <div className="dis_flex pr_52 gap38">
            <div className="flex1">
              {uploadedFile && (
                <div className="file_upload_item">
                  <i className="file_icon"></i>
                  <div className="flex1">
                    <p className="fs_12">{uploadedFile.name}</p>
                    <p className="fs_10">{`${bytesToMB(
                      uploadedFile.size
                    )}mb`}</p>
                  </div>
                  <i className="chk_icon"></i>
                </div>
              )}
            </div>
            <div className="flex1">
              {excelFile && (
                <div className="file_upload_item">
                  <i className="file_icon"></i>
                  <div className="flex1">
                    <p className="fs_12">{excelFile.name}</p>
                    <p className="fs_10">{`${bytesToMB(excelFile.size)}mb`}</p>
                  </div>
                  <i className="chk_icon"></i>
                </div>
              )}
            </div>
          </div>

          {fileError && (
            <p className="err_msg" style={{ paddingTop: "20px" }}>
              {fileError}
            </p>
          )}
          {errors.apiError && (
            <p style={{ paddingTop: "10px" }} className="err_msg">
              {errors.apiError?.message?.toString()}
            </p>
          )}
          <div className="dis_flex justify_between mt_48">
            <div className="btn_wrap"></div>
            <div className="btn_wrap gap23">
              <button type="submit" className="btn blue_bor">
                임시저장
              </button>
              <button type="submit" className="btn dark_blue">
                등록하기
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventPartyCompanyList;
