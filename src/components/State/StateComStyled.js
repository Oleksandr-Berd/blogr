import styled from "@emotion/styled";

import bgCircle from "../../assets/images/bgCirlce.png";

export const StateConCustom = styled.div`
  position: relative;

  padding-top: 221px;
  padding-bottom: 93px;
  padding-left: 24px;
  padding-right: 24px;

  margin-bottom: 79px;

  background-image: url(${bgCircle});
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;

  color: #fff;

  & > img {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -125%);
  }

  & > h3 {
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 40px;
    letter-spacing: -1.2px;
  }

  & > p{
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.5px;
  }
`;
