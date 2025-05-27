import styled from "@emotion/styled";

export const IntroCustom = styled.div`
  text-align: center;

  color: #fff;

  & > h3 {
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -1.08px;

    color: #fff;
  }

  & > p {
    margin-bottom: 48px;

    font-size: 18px;
    font-weight: 300;
  }
`;

export const ButtonCon = styled.div`
  & > button:first-of-type {
    width: 137px;

    padding-top: 15px;
    padding-bottom: 15px;

    margin-right: 16px;

    font-family: "Ubuntu";
    font-weight: 700;

    color: #ff505c;
    background-color: #fff;

    border-radius: 32px;
  }

  & > button:last-of-type {
    width: 137px;

    padding-top: 15px;
    padding-bottom: 15px;

    font-family: "Ubuntu";
    font-weight: 700;

    color: #fff;
    background-color: transparent;

    border: 1px solid #fff;

    border-radius: 32px;
  }
`;
