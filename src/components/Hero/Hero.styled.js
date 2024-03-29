import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 36px 0px 19px;
  width: calc(100vw - 16px);
  background: ${theme.colors.accent};
  border-radius: 12px;
  color: ${theme.colors.secondary};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 736px;
    height: 421px;
    padding: 35px 72px 0px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
    min-height: 677px;
    padding-top: 65px;
    border-radius: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 1408px;
    min-height: 677px;
    padding-top: 65px;
    border-radius: 24px;
  }

  h1 {
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.01em;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 92px;
      margin-bottom: 16px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 164px;
      letter-spacing: 0;
      margin-bottom: 28px;
    }
  }

  p {
    font-family: Biro Script Plus;
    line-height: 1.688;
    &:nth-of-type(2) {
      margin-bottom: 6px;
    }
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.65;
      &:nth-of-type(1) {
        margin-top: 89px;
      }
      &:nth-of-type(2) {
        margin-bottom: 0px;
      }
    }

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.667;
      &:nth-of-type(1) {
        margin-top: 132px;
      }
      &:nth-of-type(2) {
        margin-left: 120px;
      }
    }
  }

  h3 {
    margin: 0 auto;
    font-family: Messina Sans Mono;
    font-size: 12px;
    line-height: 1.167;
    text-transform: uppercase;
    &.tablet {
      display: none;
    }
    &.desktop {
      display: none;
    }

    @media screen and (min-width: 768px) {
      width: 190px;
      &.mobile {
        display: none;
      }

      &.tablet {
        display: block;
      }
    }

    @media screen and (min-width: 1280px) {
      &.desktop {
        display: block;
        text-align: justify;
      }
      &.tablet {
        display: none;
      }
      font-size: 16px;
      line-height: 1.188;
      width: 337px;
      text-align: justify;
    }
  }

  a {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-radius: 8px;
    backdrop-filter: blur(12px);
    background: rgba(30, 30, 30, 0.1);
    padding: 10px 10px 12px;
    font-weight: 900;
    line-height: 1.188;
    margin-bottom: 12px;
    transition: color ${theme.transition};
    order: 1;
    &:hover {
      color: ${theme.colors.primary};
    }

    @media screen and (min-width: 768px) {
      order: 2;
      margin-bottom: 0px;
      width: 190px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 28px;
      line-height: 1.214;
      padding: 16px 16px 20px;
      width: 337px;
    }
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    height: 386px;
    width: 283px;
    position: absolute;
    bottom: 0;
    left: 200px;
  }
  @media screen and (min-width: 1280px) {
    height: 612px;
    width: 463px;
    left: 314px;
  }
`;

export const LeftSide = styled.div`
  max-width: 283px;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 35px;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 16px;
  }
  @media screen and (min-width: 1280px) {
    gap: 28px;
    bottom: 81px;
    right: 130px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    width: 591px;
  }
  @media screen and (min-width: 1280px) {
    width: 1019px;
  }
`;
