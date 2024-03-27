import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  padding-top: 60px;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 120px;
  }
`;
export const TitleWrap = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  width: 269px;

  span {
    color: ${theme.colors.accent};
  }
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin-bottom: 68px;
    width: 269px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 120px;
    margin-bottom: 56px;
    width: 538px;
  }
`;

export const Text = styled.p`
  margin-bottom: 36px;
  width: 275px;
  font-family: Messina Sans Mono;
  line-height: 1.188;
  text-align: end;
  @media screen and (min-width: 1280px) {
    margin-top: 11px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.208;
    width: 409px;
    margin-top: 24px;
    margin-bottom: 0px;
  }
`;

export const Description = styled.p`
  font-family: Messina Sans Mono;
  font-size: 12px;
  line-height: 1.167;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.188;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.208;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;
  max-width: 283px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 36px;
    width: 269px;
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
    margin-bottom: 40px;
    width: 417px;
  }
`;

export const Img = styled.img`
  margin: 0 auto;
  width: 216px;
  height: 292px;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 313px;
    height: 422px;
  }
  @media screen and (min-width: 1280px) {
    width: 492px;
    height: 662px;
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 52px;
  width: 100%;
  background-color: ${theme.colors.accent};
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  overflow: hidden;
  @media screen and (min-width: 1280px) {
    font-size: 64px;
    height: 86px;
  }
`;

export const Scroll = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
  animation: moveText linear infinite 10s;

  @media screen and (min-width: 768px) {
    gap: 36px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 24px;
    white-space: nowrap;

    @media screen and (min-width: 768px) {
      gap: 36px;
    }
  }

  @keyframes moveText {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
