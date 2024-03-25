import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  padding: 60px 64px;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  span {
    color: ${theme.colors.accent};
  }
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    font-size: 60px;
    margin-bottom: 68px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 120px;
    margin-bottom: 56px;
  }
`;

export const Text = styled.p`
  font-family: Messina Sans Mono;
  line-height: 1.188;
  margin-bottom: 36px;
  text-align: end;
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    line-height: 1.208;
  }
`;

export const Description = styled.p`
  font-family: Messina Sans Mono;
  font-size: 12px;
  line-height: 1.167;
  text-align: center;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: 1280px) {
    gap: 36px;
    margin-bottom: 40px;
  }
`;

export const Img = styled.img`
  width: 216px;
  height: 292px;
  @media screen and (min-width: 768px) {
    width: 313px;
    height: 422px;
  }
  @media screen and (min-width: 1280px) {
    width: 492px;
    height: 662px;
  }
`;

export const Banner = styled.div`
  overflow: hidden;
  background: ${theme.colors.accent};
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }

  div {
    display: flex;
    gap: 24px;
    animation: moveText linear infinite 10s;
    @media screen and (min-width: 768px) {
      gap: 36px;
    }
  }
  @keyframes moveText {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
