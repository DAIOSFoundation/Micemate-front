import { BannerType, type BannerItemType } from "@/types/index";
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
  return (
    <tr>
      <td>
        <div className="checkbox">
          <input
            id={`t_chk${banner.id}`}
            type="checkbox"
            checked={selected.includes(banner.id)}
            onChange={(e) => {
              setSelected(
                selected.includes(banner.id)
                  ? selected.filter((id) => id !== banner.id)
                  : [...selected, banner.id]
              );
            }}
          />
          <label htmlFor={`t_chk${banner.id}`}></label>
        </div>
      </td>
      <td>
        <span className="btn border_w w_60">10</span>
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
  [1]: "노출",
  [2]: "노출 안함",
  [3]: "종료",
};
