import { Link } from "react-router-dom";
import { ApplyAgreeFromWrap } from "./applyAgreeFromStyle";
import { InputCheckboxA } from "./inputCheckbox";
import {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { useEffect } from "react";

const ApplyAgreeFrom = ({
  applyType,
  register,
  setValue,
  watch,
  isEdit = false,
}: {
  applyType: number;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  isEdit?: boolean;
}) => {
  // // 약관동의 전체선택
  const checkList = ["agree1", "agree2", "agree3", "agree4"];

  // 개별 체크박스 상태 가져오기
  const individualAgrees = watch(checkList);

  // 모든 개별 체크박스가 선택되었는지 여부
  const allChecked = individualAgrees.every(Boolean);

  // 전체 동의 체크박스가 변경되면 모든 개별 체크박스를 변경하는 함수
  const handleAllAgreeChange = (checked: boolean) => {
    checkList.forEach((item) => setValue(item, checked));
  };

  // 개별 체크박스 상태가 변경될 때 전체 동의 체크박스 상태를 업데이트
  useEffect(() => {
    setValue("allAgree", allChecked);
  }, [allChecked, setValue]);

  return (
    <ApplyAgreeFromWrap>
      <h3>신청 내용</h3>
      <div className="apply_desc">
        <div className="type">
          <span className="tit">신청 유형</span>
          <span className="info">
            {applyType === 0 ? "개인 신청" : "단체 신청"}
          </span>
        </div>
        <div className="type">
          <span className="tit">신청 비용</span>
          <span className="info">사전등록 무료</span>
        </div>
      </div>
      <div className="all_chk">
        <InputCheckboxA
          label="전체 동의하기"
          id="allChk"
          register={register}
          checked={allChecked}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            handleAllAgreeChange(target.checked);
          }}
        />
      </div>
      <div className="agree_list">
        <div>
          <InputCheckboxA
            label="(필수) 성별 생년 정보 제공 동의"
            id="agree1"
            register={register}
          />
          <p className="link">
            <Link to="/gender-birth-information" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
        <div>
          <InputCheckboxA
            label="(필수) 개인정보 수집 이용 동의"
            id="agree2"
            register={register}
          />
          <p className="link">
            <Link to="/personal-information" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
        <div>
          <InputCheckboxA
            label="(필수) 제 3자 제공 동의"
            id="agree3"
            register={register}
          />
          <p className="link">
            <Link to="/onward-transfer" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
        <div>
          <InputCheckboxA
            label="(선택) 마케팅 정보 수신 동의"
            id="agree4"
            register={register}
          />
          <p className="link">
            <Link to="/markeyting-information" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
      </div>
      <div className="submit_btn">
        <button
          type="submit"
          disabled={!(watch("agree1") && watch("agree2") && watch("agree3"))}
        >
          {isEdit ? "수정하기" : "사전 신청하기"}
        </button>
      </div>
    </ApplyAgreeFromWrap>
  );
};

export default ApplyAgreeFrom;
