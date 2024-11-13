import styled from "styled-components";

export const CategoryListWrap = styled.ul`
  display: flex;
  justify-content: space-around;

  & .none_swiper_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 30px 0px;
  }
`;

export const CategorySwiper = styled.div`
  & .swiper-slide {
    /* width: auto !important; */
  }
`;

export const CateItem = styled.li<{ checked?: boolean }>`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: ${(props) => (props.checked ? "#FFFFFF1A" : "transparent")};

  @media (max-width: 1024px) {
    padding: 16px 0;
  }
`;
