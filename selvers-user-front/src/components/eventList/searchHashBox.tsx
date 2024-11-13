import { HashBoxWrap, HashItem } from "../../components/form/hashBoxStyle";
import DeleteIcon from "@/assets/icon/hash_del.svg?react";

type Props = {
  hashList: { key: string; name: string; id: number }[];
  onClick: (target: { key: string; name: string; id: number }) => void;
};

const HashBox = ({ hashList, onClick }: Props) => {
  return (
    <HashBoxWrap>
      {hashList.map((data) => {
        return (
          <HashItem key={data.id + data.name + data.key}>
            <span onClick={() => onClick(data)} className="close_btn">
              <DeleteIcon />
            </span>
            <span className="label">{data.name}</span>
          </HashItem>
        );
      })}
    </HashBoxWrap>
  );
};

export default HashBox;
