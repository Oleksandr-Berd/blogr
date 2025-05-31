import styled from "@emotion/styled";

export const Overlay = styled.div`
  &.header {
    position: absolute;

    top: 0;
    left: 0;

    transform: translate(0, 125px);

    width: 100%;

    align-content: center;

    text-align: center;
  }
`;

export const ItemConDesk = styled.div`
  @media (min-width: 1280px) {
    margin-right: 160px;

    & li {
      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        border-bottom: 1px solid #fff;

        cursor: pointer;

        transition: all 0.3s;
      }
    }
  }
`;

export const NavCon = styled.nav`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  &.footer {
    color: #fff;

    font-family: "Ubuntu";
    line-height: 1.83;
    font-size: 18px;

    & h4 {
      margin-bottom: 21px;

      font-weight: 500;
      font-size: 18px;
      line-height: 1.83;
    }

    & li {
      font-weight: 400px;

      color: rgba(255, 255, 255, 0.5);
    }

    & > div:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }

  &.header,
  &.headerDesk {
    display: inline-block;

    min-width: 324px;

    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    padding-right: 24px;

    text-align: center;

    background-color: #fff;

    border-radius: 5px;

    & h4 {
      margin-right: 8px;

      font-weight: 500;
      font-size: 18px;
      line-height: 1.83;
    }

    & ul {
      &.passive {
        display: none;
      }

      &.active {
        padding-top: 17px;
        padding-bottom: 24px;

        margin-bottom: 24px;

        background-color: #dcdcdc;

        border-radius: 5px;
      }
    }

    & li {
      font-weight: 400px;

      color: #1f3e5a;

      font-size: 16px;
      line-height: 1.75;

      &:not(:last-of-type) {
        margin-bottom: 12px;
      }
    }

    & > button {
      padding: 0;

      border: 1px solid rgba(0, 0, 0, 0);

      background-color: transparent;

      & > img {
        width: 100%;
        height: 100%;

        background-color: inherit;
      }
    }
  }
`;

export const SubMenuCon = styled.div`
  &.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-bottom: 21px;

    & button {
      padding: 0;

      border: 1px solid rgba(0, 0, 0, 0);

      background-color: transparent;
    }
  }
`;
