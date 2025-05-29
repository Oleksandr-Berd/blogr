import styled from "@emotion/styled";

export const AuthConCustom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 24px;
  padding-bottom: 24px;

  border-top: 1px solid #dcdcdc;

  & button:first-of-type {
    margin-bottom: 24px;

    font-size: 18px;
    line-height: 1.56;

    background-color: transparent;
    color: #1f3e5a;

    border: none;
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
  }
`;
