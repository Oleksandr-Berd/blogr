import styled from "@emotion/styled";

export const FooterCustom = styled.footer`
  padding-top: 75px;
  padding-bottom: 75px;

  text-align: center;

  background-color: #24242c;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 165px;
    padding-right: 165px;
  }
`;
