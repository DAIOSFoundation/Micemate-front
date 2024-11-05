import {
  BoothCheckPageWrap,
  BoothMap,
  SelectBoothList,
} from "./boothCheckPageStyle";
import { useBoothList } from "@/api/events/events.query";
import { useParams } from "react-router-dom";
import LoadingScreen from "@components/shared/LoadingScreen";
import DownloadIcon from "@/assets/icon/download.svg?react";

const BoothCheckPage = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const { data: boothList, isLoading: boothLoading } = useBoothList(id, token);
  const likedItems = boothList?.data?.items.filter(
    (item) => item.like === true
  );

  const toDataURL = (url: string) => {
    return fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  };

  const downloadFile = async (url: string, fileName?: string) => {
    const a = document.createElement("a");
    a.href = await toDataURL(url);
    a.download = fileName ?? "download";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  if (boothLoading) {
    return <LoadingScreen />;
  }

  return (
    <BoothCheckPageWrap>
      <div>
        {boothList?.data?.img && (
          <button
            onClick={() => {
              downloadFile(
                `https://api-test.micemate.io/storage/${boothList?.data?.img}`,
                "부스 이미지"
              );
            }}
            className="download_icon"
          >
            <DownloadIcon />
          </button>
        )}
      </div>
      <BoothMap>
        <img
          src={`https://api-test.micemate.io/storage/${boothList?.data?.img}`}
        />
      </BoothMap>
      <SelectBoothList>
        <div>
          <p className="type_title">추천 부스 리스트</p>
          <ul className="booth_list wish">
            {likedItems?.map((data) => {
              return (
                <li key={data.id}>
                  <span>{`${data.position} ${data.name}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </SelectBoothList>
    </BoothCheckPageWrap>
  );
};

export default BoothCheckPage;
