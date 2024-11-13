import { ApplyFormWrap, ExcelArea } from "./applyFormStyle";
import { InputTextD } from "./inputText";
import {SelectBoxB, SelectBoxC, SelectBoxD} from "./selectBox";
// import { SelectBoxB, SelectBoxC } from "./selectBox";
import { InputCheckboxA } from "./inputCheckbox";
// import { InputTextAreaB } from "./inputTextArea";
import ExcelIcon from "@/assets/icon/excel_download.svg?react";
import IIcon from "@/assets/icon/info.svg?react";
import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
// import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { telChangeUtilHandler } from "@/util/inputChange";
import { priceFormat } from "@/util/stringTransition";
import {InputTextAreaB} from "@components/form/inputTextArea";

const ApplyForm = ({
  EventApplyInformation,
  applyType,
  setApplyType,
  applyList,
  register,
  errors,
  setValue,
  isEdit,
  editData,
  setSurveyOption,
  setMultipleOption,
  setApplyLong,
  surveyErr
}: {
  EventApplyInformation;
  applyType: number;
  setApplyType: Dispatch<SetStateAction<number>>;
  applyList: { type: number; value: string }[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  isEdit: boolean;
  setSurveyOption?: Dispatch<SetStateAction<{ [key: number]: number[] }>>;
  editData?;
  setMultipleOption?: Dispatch<SetStateAction<{[key: number]: number[] }>>;
  setApplyLong?: Dispatch<SetStateAction<{[key: number]: string[] }>>;
  surveyErr?: number[];
}) => {
  const [excelAgree, setExcelAgree] = useState(false);
  const [excelFile, setExcelFile] = useState<File>();
  const [multipleSelect, setMultipleSelect] = useState<string[]>([]);
  useEffect(() => {
    setValue("type", applyType);
    if (isEdit) {
      setValue("type", editData?.type);
      setValue("name", editData?.name);
      setValue("email", editData?.email);
      setValue("contact", editData?.contact);
      setValue("contact", editData?.contact);
      if (editData?.information) {
        editData.information.forEach((field) => {
          setValue(`${field.name}`, field.answer);
        });
      }
    }
  }, [editData, isEdit, applyType]);

  // 핸드폰번호 문자금지 하이픈 추가
  const handleTelChange = (e: ChangeEvent<HTMLInputElement>) => {
    telChangeUtilHandler(e, setValue, "contact");
  };

  const handleFileChange = (file: File | null) => {
    setExcelFile(file);
    if (file) {
      setValue("xlsx", file);
    }
  };

  const handleDrop = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleFileChange(files[0]);
    }
  }, []);

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const handleTextChange = (key: number, value: string) => {
    setApplyLong((prev) => ({
      ...prev,
      [key]: [value],
    }));
  };

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

  const multipleOptionHandler = (val:string) => {
    setMultipleSelect((prevOptions) => {
      if (prevOptions.includes(val)) {
        return prevOptions.filter((option) => option !== val);
      } else {
        return [...prevOptions, val];
      }
    });
  }

  return (
    <ApplyFormWrap>
      <div className="field">
        <div className="input_box">
          <SelectBoxB
            label="신청 유형"
            required={false}
            optionList={applyList}
            setTarget={setApplyType}
          />
          <div className="requird mt_16">
            {payableInfo(
              EventApplyInformation?.data?.payable_type,
              EventApplyInformation?.data?.payable_price1,
              EventApplyInformation?.data?.payable_price2
            )}
          </div>
        </div>
      </div>
      <h3>신청자 기본정보</h3>
      <div className="field">
        <div className="input_box">
          <InputTextD
            label="이름"
            type="text"
            id="name"
            register={register}
            required={true}
          />
          {errors.name?.message && (
            <p className="err_msg">{errors.name?.message?.toString()}</p>
          )}
        </div>

        <div className="input_box">
          <InputTextD
            label="이메일"
            type="text"
            id="email"
            register={register}
            required={true}
          />
          {errors.email?.message && (
            <p className="err_msg">{errors.email?.message?.toString()}</p>
          )}
        </div>

        <div className="input_box">
          <InputTextD
            label="휴대전화번호"
            type="text"
            id="contact"
            register={register}
            required={true}
            onChange={handleTelChange}
          />
          {errors.contact?.message && (
            <p className="err_msg">{errors.contact?.message?.toString()}</p>
          )}
        </div>

        {EventApplyInformation?.data?.information.map((data) => {
          return (
            <div className="input_box" key={data.id}>
              <InputTextD
                label={data.name}
                type="text"
                id={data.name}
                required={data.required}
                register={register}
              />
            </div>
          );
        })}
      </div>

      <h3>사전 설문</h3>
      <div className="field">
        {EventApplyInformation?.data?.surveys.map((data) => {
          if (data.type === 0) {
            return (
              <>
              <div key={data.id} className="input_box">
                <SelectBoxD
                  id={data.id}
                  label={data.title}
                  required={data.required}
                  optionList={data.options}
                  setTarget={setSurveyOption}
                />
                {surveyErr.includes(data.id) && (
                  <p className="err_msg">필수값 입니다.</p>
                )}
              </div>
              </>
            );
          } else if (data.type === 1) {
            return (
              <>
              <div key={data.id} className="input_box">
                <SelectBoxC
                  label={data.title}
                  required={data.required}
                  multipleSelect={multipleSelect}
                >
                  {data.options.map((option, index) => (
                    <InputCheckboxA
                      key={option} // 각 옵션의 고유한 값 사용
                      label={option} // 실제 옵션 값 사용
                      id={option} // 실제 옵션 값 사용
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        multipleOptionHandler(e.target.id)
                        setMultipleOption((prev) => {
                          return {
                            ...prev,
                            [data.id]: prev[data.id]
                              ? prev[data.id].includes(index)
                                ? prev[data.id].filter((item) => item !== index)
                                : [...prev[data.id], index]
                              : [index],
                          };
                        });
                      }}
                    />
                  ))}
                </SelectBoxC>
                {surveyErr.includes(data.id) && (
                  <p className="err_msg">필수값 입니다.</p>
                )}
              </div>
              </>
            );
          } else if (data.type === 2) {
            return (
              <div key={data.id} className="input_box">
                <InputTextAreaB
                  label={data.title}
                  required={data.required}
                  keyId={data.id} // 고유 키 전달
                  value={setApplyLong[data.id] || ""} // 현재 값 전달
                  onChange={handleTextChange} // 값 변경 시 호출될 함수 전달
                />
              </div>
            );
          } else {
            // 예기치 않은 data.type에 대한 처리 (선택 사항)
            return null;
          }
        })}

      </div>

      {applyType === 1 && (
        <>
          <h3>단체신청</h3>

          <ExcelArea>
            <div className="input_box">
              <InputTextD
                label="단체명"
                type="text"
                id="group"
                required={true}
                register={register}
              />
              {errors.group?.message && (
                <p className="err_msg">{errors.group?.message?.toString()}</p>
              )}
            </div>
            <div className="title_area">
              <span className="tit">참가자 엑셀 등록하기</span>
              <span className="sub">
                엑셀 양식으로 업로드하여 한번에 참가자를 등록할 수 있습니다.
                (지원 파일 양식 : xlsx)
              </span>
            </div>
            <button type="button" className="download_btn">
              <span className="icon">
                <ExcelIcon />
              </span>
              <span className="txt">
                <a
                  href="/host/downloadFile/[마이스메이트]참가자리스트_엑셀추가하기.xlsx"
                  download="[마이스메이트]참가자리스트_엑셀추가하기.xlsx"
                >
                  엑셀 양식 내려받기
                </a>
              </span>
            </button>
            <p className="alret_chang">
              <span className="icon">
                <IIcon />
              </span>
              <span className="txt">
                정보/그룹을 수정한 경우 새로운 양식으로 등록해주세요.
              </span>
            </p>
            <div className="agree">
              <p className="sub">
                개인정보 보호를 위해 제3자 제공 동의가 완료된 참가자 명단을
                등록할 수 있습니다.
              </p>
              <InputCheckboxA
                label="네, 제3자 제공 동의를 받은 개인 정보입니다."
                id="excel_agree"
                register={register}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setExcelAgree(target.checked);
                }}
              />
            </div>
            <p className="sub">엑셀 양식을 업로드해주세요.</p>
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="upload"
            >
              <label htmlFor="excelUpload" className="label">
                <span className="btn">업로드 파일 선택</span>
                <span className="txt">
                  {excelFile ? excelFile?.name : "또는 여기에 끌어서 놓기"}
                </span>
              </label>
              <input
                type="file"
                id="excelUpload"
                {...register("xlsx")}
                disabled={!excelAgree}
                style={{ display: "none" }} // 숨기기
                onChange={(e) =>
                  handleFileChange(e.target.files ? e.target.files[0] : null)
                }
              />
            </div>
          </ExcelArea>
        </>
      )}
    </ApplyFormWrap>
  );
};

export default ApplyForm;
