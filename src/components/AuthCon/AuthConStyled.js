import styled from "@emotion/styled";

export const AuthConCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 24px;
  padding-bottom: 24px;

  border-top: 1px solid #dcdcdc;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0;

    border: none;
  }

  & button:first-of-type {
    margin-bottom: 24px;

    font-size: 18px;
    line-height: 1.56;

    background-color: transparent;
    color: #1f3e5a;

    border: none;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 32px;

      &:hover,
      &:active,
      &:focus {
        cursor: pointer;
      }
    }
  }

  & button:last-of-type {
    width: 137px;

    padding-top: 15px;
    padding-bottom: 15px;

    font-size: 16px;
    font-weight: 700;

    background-color: #ff8f71;
    color: #fff;

    border-radius: 16px;

    @media (min-width: 1280px) {
      background-color: #fff;
      color: #ff505c;

      transition: background-color 0.3s, color 0.3s;

      &:hover,
      &:active,
      &:focus {
        background-color: rgba(255, 123, 134, 1);
        color: #fff;
        cursor: pointer;

        transition: background-color 0.3s, color 0.3s;
      }
    }
  }
`;
