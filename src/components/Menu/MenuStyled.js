import styled from "@emotion/styled";

export const NavCon = styled.nav`
  &.footer {
    color: #fff;

    font-family: "Ubuntu";
    line-height: 1.83;
    font-size: 18px;

    & h4 {
      margin-bottom: 21px;

      font-weight: 500;
    }

    & li {
      font-weight: 400px;

      color: rgba(255, 255, 255, 0.5);
    }

    & > div:not(:last-of-type) {
      margin-bottom: 40px;
    }
  }
`;
