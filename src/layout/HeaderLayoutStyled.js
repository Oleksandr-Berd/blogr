import styled from "@emotion/styled";

import backMobile from "../assets/images/backMobile.png";

export const CustomHeader = styled.div`
  position: relative;

  padding-top: 56px;
  padding-bottom: 156px;
  padding-left: 24px;
  padding-right: 24px;

  background-image: url(${backMobile});
  background-size: cover;

  border-bottom-left-radius: 25%;

  & > img {
    width: 82px;
    height: 32px;
  }

  @media (min-width: 1280px) {
    padding-left: 167px;
    padding-right: 167px;
    padding-top: 60px;
    padding-bottom: 155px;
  }
`;

export const MenuCustom = styled.button`
  padding: 0;

  border: 1px solid rgba(0, 0, 0, 0);

  background-color: transparent;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoAuthNavCon = styled.div`


  @media (min-width: 1280px) {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

    margin-bottom: 120px;
  }
`;

export const NacCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 108px;

  @media (min-width: 1280px) {
    justify-content: flex-start;

    margin: 0;
  }
`;
