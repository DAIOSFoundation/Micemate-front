const BannerFilter = () => {
  return (
    <>
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
                  <input type="radio" name="rad" id="rad01" className="hide" />
                  <label htmlFor="rad01" className="btn border_w">
                    오늘
                  </label>
                </div>
                <div className="dis_inblock">
                  <input type="radio" name="rad" id="rad02" className="hide" />
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
                  <input type="radio" name="rad" id="rad04" className="hide" />
                  <label htmlFor="rad04" className="btn border_w">
                    1개월
                  </label>
                </div>
                <div className="dis_inblock">
                  <input type="radio" name="rad" id="rad05" className="hide" />
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
    </>
  );
};

export default BannerFilter;
