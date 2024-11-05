import { Link } from "react-router-dom";
import imgBanner from "@/assets/images/dummy/banner_img_dummy.png";
import SideMenu from "@components/shared/sideMenu/sideMenu";

const Page = () => {
  return (
    <div className="container">
      <div className="history_tit">
        <Link className="item" to="/banner/main">
          배너관리
        </Link>
        <Link className="item" to="/banner/band">
          띠배너
        </Link>
      </div>
      <SideMenu />

      <div className="cont_area">
        <div className="cont_panel">
          <div className="table_wrap">
            <table className="type3">
              <colgroup>
                <col width="160px" />
                <col width="*" />
              </colgroup>
              <tbody>
                <tr>
                  <th>기간</th>
                  <td>
                    <div className="dis_inblock">
                      <select className="btn border_w w_96">
                        <option value="1">등록일</option>
                        <option value="2">게시일</option>
                      </select>
                    </div>
                    <div className="dis_inblock">
                      <input
                        type="radio"
                        name="rad"
                        id="rad01"
                        className="hide"
                      />
                      <label htmlFor="rad01" className="btn border_w">
                        오늘
                      </label>
                    </div>
                    <div className="dis_inblock">
                      <input
                        type="radio"
                        name="rad"
                        id="rad02"
                        className="hide"
                      />
                      <label htmlFor="rad02" className="btn border_w">
                        어제
                      </label>
                    </div>
                    <div className="dis_inblock">
                      <input
                        type="radio"
                        name="rad"
                        id="rad03"
                        className="hide"
                        checked
                      />
                      <label htmlFor="rad03" className="btn border_w">
                        7일
                      </label>
                    </div>
                    <div className="dis_inblock">
                      <input
                        type="radio"
                        name="rad"
                        id="rad04"
                        className="hide"
                      />
                      <label htmlFor="rad04" className="btn border_w">
                        1개월
                      </label>
                    </div>
                    <div className="dis_inblock">
                      <input
                        type="radio"
                        name="rad"
                        id="rad05"
                        className="hide"
                      />
                      <label htmlFor="rad05" className="btn border_w">
                        전체
                      </label>
                    </div>
                    <div className="dis_inblock">
                      <input
                        id="date01"
                        type="date"
                        className="small w_104"
                        value="2024-08-26"
                      />
                      <label htmlFor="date01" className="date_icon"></label>
                    </div>
                    <div className="dis_inblock">&nbsp;~</div>
                    <div className="dis_inblock">
                      <input
                        id="date02"
                        type="date"
                        className="small w_104"
                        value="2024-08-26"
                      />
                      <label htmlFor="date02" className="date_icon"></label>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>검색</th>
                  <td>
                    <div className="dis_inblock">
                      <select className="btn border_w w_96">
                        <option value="1">노출</option>
                        <option value="2">노출 안함</option>
                        <option value="3">종료</option>
                      </select>
                    </div>
                    <div className="dis_inblock">
                      <input
                        className="small search w_548"
                        type="text"
                        placeholder="전체"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="btn_wrap gap7 mt_18">
            <button className="btn small light_blue">검색</button>
            <button className="btn small gray">초기화</button>
          </div>

          <div className="tit_wrap mt_30">
            <div>
              <h3 className="tit">
                <span>전체</span>
                <span className="col_gray">검색결과</span>
                <span className="fs_16">[총 회원수 9,999명]</span>
              </h3>
              <button className="sort_btn">정렬</button>
            </div>
            <div>
              <button>추가</button>
              <button className="ml_22">삭제</button>
            </div>
          </div>

          <div className="table_wrap mt_22">
            <table className="type1">
              <colgroup>
                <col width="16px" />
                <col width="120px" />
                <col width="200px" />
                <col width="*" />
                <col width="150px" />
                <col width="150px" />
                <col width="250px" />
                <col width="120px" />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    <div className="checkbox">
                      <input id="t_chkAll" type="checkbox" />
                      <label htmlFor="t_chkAll"></label>
                    </div>
                  </th>
                  <th>NO</th>
                  <th className="txt_left">배너명</th>
                  <th></th>
                  <th>이미지</th>
                  <th>등록일</th>
                  <th>게시일</th>
                  <th>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="checkbox">
                      <input id="t_chk01" type="checkbox" />
                      <label htmlFor="t_chk01"></label>
                    </div>
                  </td>
                  <td>
                    <span className="btn border_w w_60">10</span>
                  </td>
                  <td className="txt_left">
                    <a href="./관리자배너관리_띠배너_수정.html">배너명1</a>
                  </td>
                  <td></td>
                  <td>
                    <div className="banner_img">
                      <img src={imgBanner} />
                    </div>
                  </td>
                  <td>2024-08-01</td>
                  <td>2024-08-08~2024-08-30</td>
                  <td>노출</td>
                </tr>
                <tr>
                  <td>
                    <div className="checkbox">
                      <input id="t_chk02" type="checkbox" />
                      <label htmlFor="t_chk02"></label>
                    </div>
                  </td>
                  <td>
                    <span className="btn border_w w_60">10</span>
                  </td>
                  <td className="txt_left">
                    <a href="./관리자배너관리_띠배너_수정.html">배너명1</a>
                  </td>
                  <td></td>
                  <td>
                    <div className="banner_img">
                      <img src={imgBanner} />
                    </div>
                  </td>
                  <td>2024-08-01</td>
                  <td>2024-08-08~2024-08-30</td>
                  <td>노출 안함</td>
                </tr>
                <tr>
                  <td>
                    <div className="checkbox">
                      <input id="t_chk03" type="checkbox" />
                      <label htmlFor="t_chk03"></label>
                    </div>
                  </td>
                  <td>
                    <span className="btn border_w w_60">10</span>
                  </td>
                  <td className="txt_left">
                    <a href="./관리자배너관리_띠배너_수정.html">배너명1</a>
                  </td>
                  <td></td>
                  <td>
                    <div className="banner_img">
                      <img src={imgBanner} />
                    </div>
                  </td>
                  <td>2024-08-01</td>
                  <td>2024-08-08~2024-08-30</td>
                  <td>노출</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pagination mt_80">
            <a href="#none" className="pagi_prev"></a>
            <a href="#none" className="num active">
              1
            </a>
            <a href="#none" className="num">
              2
            </a>
            <a href="#none" className="num">
              3
            </a>
            <a href="#none" className="num">
              4
            </a>
            <a href="#none" className="num">
              5
            </a>
            <a href="#none" className="num">
              6
            </a>
            <a href="#none" className="num">
              7
            </a>
            <a href="#none" className="num">
              8
            </a>
            <a href="#none" className="num">
              9
            </a>
            <a href="#none" className="num">
              10
            </a>
            <a href="#none" className="pagi_next"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
