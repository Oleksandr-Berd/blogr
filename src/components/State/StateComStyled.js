import styled from "@emotion/styled";

import bgCircleMob from "../../assets/images/bgCircle.png";

export const StateConCustom = styled.div`
  position: relative;

  padding-top: 221px;
  padding-bottom: 93px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 79px;

  background-image: url(${bgCircleMob});
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;

  color: #fff;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    padding-top: 111px;
    padding-bottom: 111px;
    padding-left: 0;
    padding-right: 165px;

  }

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -100%);

    @media (min-width: 1280px) {
      top: 0;
      left: 0;

      transform: translate(0, -8%);

      width: 472px;
    }
  }

  & h3 {
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 40px;
    letter-spacing: -1.2px;
  }

  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.5px;
    opacity: 0.7;
  }
`;

export const ContentCon = styled.div`
  @media (min-width: 1280px) {
    width: 50%;

    text-align: left;
  }
`;
