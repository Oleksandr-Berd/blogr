import styled from "@emotion/styled";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: #fff;

  & button {
    opacity: 0.5;

    color: inherit;
    background-color: transparent;

    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
      opacity: 1;

      border-bottom: 1px solid #fff;
      transition: all 0.3s;
    }
  }
`;

export const NavListStyled =styled.ul`
 &:not(:last-child) {
    margin-right: 32px;
  }
`

export const NavUnitStyled = styled.li`
  position: relative;
`;

export const NavItemsListStyled = styled.ul`
  padding: 24px;

  font-size: "Ubuntu";
  line-height: 2.2;
  font-weight: 400;

  color: #2d2e40;
  background-color: #fff;

  & > li {
    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
      font-weight: 700;

      transition: all 0.3s;
    }
  }
`;
