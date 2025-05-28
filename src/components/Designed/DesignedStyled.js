import styled from "@emotion/styled";

export const DesignCon = styled.div`
  padding-top: 100px;
  padding-bottom: 273px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  & > h3 {
    margin-bottom: 38px;

    font-weight: 600;
    font-size: 28px;
    letter-spacing: -0.84px;

    color: #1f3e5a;
  }
`;

export const Thumb = styled.div`
  width: 326px;
  height: 326px;

`;

export const Article = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 40px;
  }

  & > h4 {
    margin-bottom: 16px;

    line-height: 1.14;
    font-weight: 600;
    font-size: 28px;

    color: #1f3e5a;
  }

  & > p {
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: 0.5px;

    color: #4c5862;
  }
`;
