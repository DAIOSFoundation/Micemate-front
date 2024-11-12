import { type BannerItemType } from "@/types/index";
import { Link } from "react-router-dom";

interface BannerListItemProps {
  banner: BannerItemType;
}

const BannerListItem = ({ banner }: BannerListItemProps) => {
  return (
    <tr>
      <td>
        <div className="checkbox">
          <input id={`t_chk${banner.id}`} type="checkbox" />
          <label htmlFor={`t_chk${banner.id}`}></label>
        </div>
      </td>
      <td>
        <span className="btn border_w w_60">10</span>
      </td>
      <td className="txt_left">
        <Link to={`/banner/detail/${banner.id}`}>{banner.title}</Link>
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
      <td>{banner.state}</td>
    </tr>
  );
};

export default BannerListItem;
