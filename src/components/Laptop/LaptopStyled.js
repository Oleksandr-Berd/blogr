import styled from "@emotion/styled";

export const LaptopCustom = styled.div`
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 100px;

  text-align: center;
`;

export const Thumb = styled.div`
  margin-bottom: 46px;
`;

export const Article = styled.div`

&:first-of-type{
    margin-bottom: 40px;
}

  & > h3 {
    margin-bottom: 16px;

    font-size: 28px;
    line-height: 1.14;
    font-weight: 400;

    color: #1f3e5a;
  }

  & > p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75;
    letter-spacing: 0.5px;
    color: #4C5862;
  }
`;
