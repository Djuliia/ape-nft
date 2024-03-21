import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 36px 64px 19px;
  min-width: 344px;
  background: ${theme.colors.accent};
  border-radius: 12px;
  color: ${theme.colors.secondary};
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 736px;
    padding: 23px 64px 0px;
    border-radius: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
    padding-top: 65px;
    border-radius: 24px;
  }

  h1 {
    font-size: 44px;
    font-weight: 900;
    line-height: 1;
    letter-spacing: 0.02em;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 92px;
    }

    @media screen and (min-width: 1280px) {
      font-size: 124px;
      letter-spacing: 0;
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
    }

    @media screen and (min-width: 1280px) {
      font-size: 24px;
      line-height: 1.667;
    }
  }

  h3 {
    margin: 0 auto;
    font-family: Messina Sans Mono;
    font-size: 12px;
    line-height: 1.167;
    text-transform: uppercase;
    /* max-width: 217px; */
    @media screen and (min-width: 1280px) {
      font-size: 16px;
      line-height: 1.188;
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
    padding: 10px;
    font-weight: 900;
    line-height: 1.188;
    margin-bottom: 12px;
    transition: ${theme.transition};
    &:hover {
      color: ${theme.colors.primary};
    }
    @media screen and (min-width: 1280px) {
      font-size: 28px;
      line-height: 1.214;
    }
  }
`;

export const Container = styled.div``;

export const Img = styled.img`
  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;
