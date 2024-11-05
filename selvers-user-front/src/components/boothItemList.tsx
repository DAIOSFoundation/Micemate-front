import { Link } from "react-router-dom";
import { BoothList, BoothItem } from "./boothItemListStyle";
import { Dispatch, SetStateAction } from "react";
import { useState } from "react";

const BoothItemList = ({
  boothList,
  selectList,
  setSelectList,
}: {
  boothList;
  selectList: number[];
  setSelectList: Dispatch<SetStateAction<number[]>>;
}) => {
  const [target, setTarget] = useState<number>();

  const addBoothList = (id: number) => {
    if (selectList.includes(id)) {
      setTarget(undefined);
      setSelectList((prev) => prev.filter((item) => item !== id));
    } else {
      setTarget(id);
      setSelectList((prev) => [...prev, id]);
    }
  };

  const getBoothNumber = (id: number) => {
    const index = selectList.indexOf(id);
    return index !== -1 ? index + 1 : "";
  };

  return (
    <BoothList>
      {boothList &&
        boothList.map((data) => {
          let className = "";

          if (target === data.id) {
            className = "target";
          } else if (selectList.includes(data.id)) {
            className = "outline";
          } else {
            className = "";
          }

          return (
            <BoothItem
              onClick={() => addBoothList(data.id)}
              key={data.id}
              className={className}
            >
              <span className="num">{getBoothNumber(data.id)}</span>
              <p className="title">{data.position}</p>
              <figure>
                {data.image ? (
                  <img src={data.image} alt={data.name} />
                ) : (
                  <span className="name">{data.name}</span>
                )}
              </figure>
              <Link to={data.url} target="_blank">
                홈페이지 바로가기
              </Link>
            </BoothItem>
          );
        })}
    </BoothList>
  );
};

export default BoothItemList;
