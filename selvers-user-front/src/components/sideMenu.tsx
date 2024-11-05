import { Link, useLocation, useNavigate } from "react-router-dom";
import { SideMenuWrap, OptionBox, MenuList, MenuItem } from "./sideMenuStyle";
import ToggleIcon from "@/assets/icon/arrow_toggle.svg?react";
import { useEffect, useState } from "react";
import { useResetRecoilState } from "recoil";
import { userState } from "@/store/userState";
import { useConfirm } from "@/hook/useConfirm";
import { confirmState } from "@/store/modalState";

const sideMenuItems = [
  {
    id: "00",
    name: "참여 행사 관리",
    type: "toggleButton",
    subMenu: [
      { id: "00-00", path: "/mypage/apply-list", name: "신청 행사" },
      { id: "00-01", path: "/mypage/cancel-list", name: "취소 내역" },
      { id: "00-02", path: "/mypage/wish-list", name: "관심 행사" },
      { id: "00-03", path: "/mypage/past-list", name: "지난 행사" },
    ],
  },
];

const SideMenu = () => {
  const { openConfirm, confirmValue } = useConfirm();
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();
  const resetUserState = useResetRecoilState(userState);
  const resetConfirm = useResetRecoilState(confirmState);
  const navigate = useNavigate();
  // const [confirmAgree, setConfirmAgree] = useState(false);
  // const confirmValue = useRecoilValue(confirmState);

  const logoutHandler = () => {
    const confirmData = {
      text: "로그아웃 하시겠습니까?",
      okBtn: "확인",
      logout: true,
    };

    openConfirm(confirmData);
  };

  useEffect(() => {
    if (confirmValue.logoutOk === true) {
      resetUserState();
      resetConfirm();
      navigate("/");
    }
  }, [confirmValue.logoutOk]);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    if (location.pathname !== "/mypage/user-modify") {
      setIsOn(true);
    }
  }, [location.pathname]);

  return (
    <SideMenuWrap>
      <h2>마이페이지</h2>
      <MenuList>
        {/* 토글링크 */}
        {sideMenuItems.map((data) => {
          return (
            <div key={data.id}>
              <MenuItem onClick={toggleDropdown} $isOn={isOn}>
                {data.name}
                <span>
                  <ToggleIcon />
                </span>
              </MenuItem>
              <OptionBox $isOn={isOn}>
                {data.subMenu &&
                  data.subMenu.map((data) => {
                    return (
                      <MenuItem
                        $target={
                          location.pathname.indexOf(data.path) >= 0
                            ? true
                            : false
                        }
                        key={data.id}
                      >
                        <Link to={data.path}>{data.name}</Link>
                      </MenuItem>
                    );
                  })}
              </OptionBox>
            </div>
          );
        })}
        <MenuItem
          $target={
            location.pathname.indexOf("/mypage/user-modify") >= 0 ? true : false
          }
        >
          <Link to="/mypage/user-modify">내 정보 수정</Link>
        </MenuItem>
        <MenuItem>
          <button onClick={logoutHandler}>로그아웃</button>
        </MenuItem>
      </MenuList>
    </SideMenuWrap>
  );
};

export default SideMenu;
