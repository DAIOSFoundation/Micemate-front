import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import {
  SelectWrap,
  SelectOption,
  OptionBox,
  Option,
} from "./sortSelectBoxStyle";
import SelectIcon from "@/assets/icon/arrow_sort_box.svg?react";

export type OptionType = {
  text: string;
  value: string;
};

export interface SelectBoxProps {
  setSortType: Dispatch<SetStateAction<number>>;
  width: number;
  selectedValue?: number;
  loading?: boolean;
  onChange?: (value: string) => void;
}

const sortOptions = [
  { text: "베스트순", value: 1 },
  { text: "최신순", value: 2 },
];

const SortSelectBox = ({ setSortType, width }: SelectBoxProps) => {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("베스트순");

  const selectBoxRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  //셀렉트 박스 변경시
  const handleTypeChange = (target: number) => {
    setSortType(target);
  };

  const handleSelect = (text: string, value: number) => {
    setText(text);
    handleTypeChange(value);
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
    <SelectWrap ref={selectBoxRef} $width={width}>
      <SelectOption onClick={toggleDropdown} $isOn={isOn}>
        <span className="txt">{text}</span>
        <span>{isOn ? <SelectIcon /> : <SelectIcon />}</span>
      </SelectOption>
      <OptionBox $isOn={isOn}>
        {sortOptions.map((data) => {
          return (
            <Option
              onClick={() => handleSelect(data.text, data.value)}
              key={data.value}
            >
              {data.text}
            </Option>
          );
        })}
      </OptionBox>
    </SelectWrap>
  );
};

export default SortSelectBox;
