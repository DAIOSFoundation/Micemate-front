import {
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import {
  SelectWrapA,
  SelectOptionA,
  OptionBoxA,
  SelectWrapB,
  SelectWrapC,
} from "./selectBoxStyle";
import ArrowIcon from "@/assets/icon/select_arrow.svg?react";
import ArrowIconW from "@/assets/icon/arrow_sort_box.svg?react";

type Props = {
  text: string;
  children?: ReactNode;
};

type SelectProps = {
  label: string;
  required: boolean;
  children?: ReactNode;
  setState?: Dispatch<SetStateAction<string>>;
};

interface SelectBProps extends SelectProps {
  optionList: { type: number; value: string }[];
  setTarget: Dispatch<SetStateAction<number>>;
}

interface SelectDProps extends SelectProps {
  id: number;
  optionList: string[];
  setTarget: Dispatch<SetStateAction<{ [key: number]: number[] }>>;
  value: number | string;
}

interface SelectCProps extends SelectProps {
  targetText?: string;
  multipleSelect?: string[];
}

//회원가입 페이지 사용(관심분야)
export const SelectBoxA = ({ text, children }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <SelectWrapA>
      <SelectOptionA onClick={toggleDropdown} $isOn={isOn}>
        {text}
        <span>
          <ArrowIcon />
        </span>
      </SelectOptionA>
      <OptionBoxA $isOn={isOn}>{children}</OptionBoxA>
    </SelectWrapA>
  );
};

//신청하기 페이지 사용(단일 선택)
export const SelectBoxB = ({
  label,
  required,
  optionList,
  setTarget,
}: SelectBProps) => {
  const [isOn, setIsOn] = useState(false);
  const [targetText, setTargetText] = useState("");
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    if (optionList) {
      setTargetText(optionList[0]?.value);
    }
  }, [optionList]);
  const handleSelect = (type: number, value: string) => {
    setTarget(type);
    setTargetText(value);
    setIsOn(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(event.target as Node)
    ) {
      setIsOn(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <SelectWrapB ref={selectBoxRef} $isOn={isOn}>
      <p className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </p>
      <div className="select_box">
        <div onClick={toggleDropdown} className="select">
          <span>{targetText}</span>
          <span className="icon">
            <ArrowIconW />
          </span>
        </div>
        <ul className="option_box">
          {optionList.map((data, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelect(data.type, data.value)}
                className="option"
              >
                {data.value}
              </li>
            );
          })}
        </ul>
      </div>
    </SelectWrapB>
  );
};
//신청하기 페이지 사용(다중선택)
export const SelectBoxC = ({
  label,
  required,
  children,
  targetText,
}: SelectCProps) => {
  const [isOn, setIsOn] = useState(false);
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(event.target as Node)
    ) {
      setIsOn(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectWrapC ref={selectBoxRef} $isOn={isOn}>
      <p className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </p>
      <div className="select_box">
        <div onClick={toggleDropdown} className="select">
          <div>{targetText}</div>
          <span className="icon">
            <ArrowIconW />
          </span>
        </div>
        <div className="option_box">{children}</div>
      </div>
    </SelectWrapC>
  );
};

export const SelectBoxD = ({
  id,
  label,
  required,
  optionList,
  setTarget,
  value,
}: SelectDProps) => {
  const [isOn, setIsOn] = useState(false);

  const selectBoxRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  const handleSelect = (_value: string, index) => {
    // 각 id 마다 선택된 index 저장
    console.log("index", index);
    setTarget((prev) => {
      return { ...prev, [id]: [index.toString()] };
    });
    setIsOn(false);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(event.target as Node)
    ) {
      setIsOn(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <SelectWrapB ref={selectBoxRef} $isOn={isOn}>
      <p className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </p>
      <div className="select_box">
        <div onClick={toggleDropdown} className="select">
          <span>{optionList[Number(value)]}</span>
          <span className="icon">
            <ArrowIconW />
          </span>
        </div>
        <ul className="option_box">
          {optionList.map((data, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelect(data, index)}
                className="option"
              >
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    </SelectWrapB>
  );
};
