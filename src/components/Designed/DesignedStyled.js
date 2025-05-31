import styled from "@emotion/styled";

export const DesignCon = styled.div`
  padding-top: 100px;
  padding-bottom: 273px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  overflow: hidden;

  @media (min-width: 1280px) {
    padding-top: 150px;
    padding-bottom: 262px;
    padding-left: 165px;
    padding-right: 0;
  }

  & > h3 {
    margin-bottom: 38px;

    font-weight: 600;
    font-size: 28px;
    letter-spacing: -0.84px;

    color: #1f3e5a;

    @media (min-width: 1280px) {
      margin-bottom: 92px;

      font-size: 40px;
    }
  }
`;

export const ContentCon = styled.div`
  @media (min-width: 1280px) {
    position: relative;

    text-align: left;
  }
`;

export const Thumb = styled.div`
  width: 326px;
  height: 326px;

  @media (min-width: 1280px) {
    position: absolute;

    top: 0;
    left: 0;

    transform: translate(72%, -24%);

    width: 885px;
    height: 882px;

    & > img {
      width: inherit;
      height: inherit;
    }
  }
`;

export const ArticleCon = styled.div`
  @media (min-width: 1280px) {
    display: inline-block;

    width: 540px;
  }
`;

export const Article = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 40px;

    @media (min-width: 1280px){
      margin-bottom: 64px;
    }
  }

  & > h4 {
    margin-bottom: 16px;

    line-height: 1.14;
    font-weight: 600;
    font-size: 28px;

    color: #1f3e5a;

    @media (min-width: 1280px){
      line-height: 1;
    }
  }

  & > p {
    font-size: 16px;
    font-weight: 300;
    line-height: 1.75;
    letter-spacing: 0.5px;

    color: #4c5862;
  }
`;
