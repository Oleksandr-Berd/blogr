import styled from "@emotion/styled";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: #fff;

  & button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    opacity: 0.5;

    font-family: "Ubuntu";
    font-weight: 700;

    color: inherit;
    background-color: transparent;

    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
      opacity: 1;

      border-bottom: 1px solid #fff;

      cursor: pointer;

      transition: all 0.3s;
    }

    & > img {
      margin-left: 8px;

      filter: brightness(0) invert(1);
    }
  }
`;

export const NavListStyled = styled.ul`
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const NavUnitStyled = styled.li`
  position: relative;
`;

export const NavItemsListStyled = styled.ul`
  position: absolute;

  top: 0;
  left: 0;

  transform: translate(-25%, 36px);

  display: flex;
  flex-direction: column;
  align-items: start;

  width: 200px;
  
  padding: 24px;

  text-align: left;

  font-size: "Ubuntu";
  line-height: 2.2;
  font-weight: 400;

  color: #2d2e40;
  background-color: #fff;

  border-radius: 8px;

  & > li {
    display: inline-block;

    transition: all 0.3s;

    font-size: 15px;
    line-height: 2.2;

    &:hover,
    &:active,
    &:focus {
      font-weight: 700;
      cursor: pointer;

      transition: all 0.3s;
    }
  }
`;
