import { type BannerItemType } from "@/types/index";

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
        <a href="./관리자배너관리_메인베너_수정.html">{banner.title}</a>
      </td>
      <td></td>
      <td>
        <div className="banner_img">
          <img src={`${import.meta.env.VITE_IMAGE_BASE_URL}/${banner.img}`} />
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
