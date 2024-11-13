import styled from "styled-components";

export const EditReviewPageWrap = styled.form`
  max-width: 584px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .star-ratings {
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 10px;
    @media (max-width: 400px) {
      gap: 5px;
    }
    & .star-container {
      padding: 0 !important;
    }
  }
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;

export const ThumbnailArea = styled.figure`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 584/328;
  & img {
    width: 100%;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ReviewForm = styled.form`
  width: 100%;
  & .text_box {
    padding: 48px 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    word-break: keep-all;
    line-height: 1.2;
    @media (max-width: 1024px) {
      padding: 24px 0 32px;
    }
    & :first-child {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }

    & :last-child {
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
  & .input_text_area {
    width: 100%;
    margin: 24px 0 16px;
    @media (max-width: 1024px) {
      margin: 40px 0 24px;
    }
  }
  & .submit_area {
    & button {
      padding: 15px 10px;
      border-radius: 10px;
      width: 100%;
      background-color: #235ef3;
      color: #fff;
      font-size: 16px;
    }
  }
`;
