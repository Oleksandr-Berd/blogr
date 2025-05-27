import styled from "@emotion/styled";

import backMobile from "../assets/images/backMobile.png"

export const CustomHeader = styled.div`
  padding-top: 56px;
  padding-bottom: 156px;
  padding-left: 24px;
  padding-right: 24px;

  background-image:url(${backMobile});
  background-size: cover;

  border-bottom-left-radius:25%;

  & > div:first-of-type{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 108px;
  }

  & > img{
    width: 82px;
    height: 32px;
  }
`;

export const MenuCustom = styled.button`
  width: 32px;
  height: 18px;

  padding: 0;

  border: 1px solid rgba(0, 0, 0, 0);

  background-color: transparent;

  & > img {
    width: 100%;
    height: 100%;

    background-color: inherit;
  }
`;
