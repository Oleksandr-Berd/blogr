import styled from "@emotion/styled";

export const LaptopCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 100px;

  text-align: center;

  @media (min-width: 1280px) {
    position: relative;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    padding-left: 0;
    padding-right: 164px;
    padding-top: 120px;
    padding-bottom: 240px;
  }
`;

export const Thumb = styled.div`
  margin-bottom: 46px;

  @media (min-width: 1280px) {
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(-36%, -56px);

    margin: 0;
  }
`;

export const ArticleCon = styled.div`
  @media (min-width: 1280px) {
    width: 42%;

    text-align: left;
  }
`;

export const Article = styled.div`
  @media (min-width: 120px) {
  }

  &:first-of-type {
    margin-bottom: 40px;
  }

  & > h3 {
    margin-bottom: 16px;

    font-size: 28px;
    line-height: 1.14;
    font-weight: 400;

    color: #1f3e5a;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.5px;
    color: #4c5862;

    opacity: 0.7;
  }
`;
