import { useUpdateBannerOrderMutation } from "@/api/banner/banner.query";
import { QUERY_KEYS } from "@/constants/queryKeys";
import { BannerType, type BannerItemType } from "@/types/index";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

interface BannerListItemProps {
  banner: BannerItemType;
  type: BannerType;
  selected: number[];
  setSelected: (selected: number[]) => void;
}

const BannerListItem = ({
  banner,
  type,
  selected,
  setSelected,
}: BannerListItemProps) => {
  const queryClient = useQueryClient();
  const [isEditMode, setIsEditMode] = useState(false);
  const [orderValue, setOrderValue] = useState(banner.order);

  const { mutate: updateBannerOrder } = useUpdateBannerOrderMutation(banner.id);

  const onUpdateBannerOrder = (order: number) => {
    if (confirm("배너 순서를 수정하시겠습니까?")) {
      updateBannerOrder(order, {
        onSuccess: () => {
          alert("배너 순서 수정이 완료되었습니다.");
          queryClient.invalidateQueries({
            queryKey: [QUERY_KEYS.BANNER.LIST],
          });
        },
        onError: () => {
          alert("배너 순서 수정에 실패하였습니다.");
        },
      });
      setIsEditMode(false);
    } else return;
  };

  return (
    <tr>
      <td>
        <div className="checkbox">
          <input
            id={`t_chk${banner.id}`}
            type="checkbox"
            checked={selected.includes(banner.id)}
            onChange={() =>
              setSelected(
                selected.includes(banner.id)
                  ? selected.filter((id) => id !== banner.id)
                  : [...selected, banner.id]
              )
            }
          />
          <label htmlFor={`t_chk${banner.id}`}></label>
        </div>
      </td>
      <td>
        {isEditMode ? (
          <div className="banner_order_input_container">
            <input
              className="banner_order_input"
              type="text"
              defaultValue={orderValue}
              onChange={(e) => {
                const value = e.target.value;
                if (!isNaN(Number(value))) {
                  setOrderValue(Number(value));
                }
              }}
            />
            <div className="banner_order_input_btn_container">
              <span onClick={() => onUpdateBannerOrder(orderValue)}>V</span>
              <span onClick={() => setIsEditMode(false)}>X</span>
            </div>
          </div>
        ) : (
          <span
            className="btn border_w w_60"
            onClick={() => setIsEditMode(true)}
          >
            {banner.order}
          </span>
        )}
      </td>
      <td className="txt_left">
        <Link to={`/banner/detail/${banner.id}?type=${type}`}>
          {banner.title}
        </Link>
      </td>
      <td></td>
      <td>
        <div className="banner_img">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${banner.img}`}
            alt="Banner"
          />
        </div>
      </td>
      <td>{banner.created_at}</td>
      <td>
        {banner.start_date}~{banner.end_date}
      </td>
      <td>{BANNER_STATE_MAP[banner.state]}</td>
    </tr>
  );
};

export default BannerListItem;

const BANNER_STATE_MAP = {
  [0]: "노출 이전",
  [1]: "노출",
  [2]: "노출 안함",
  [3]: "종료",
};
