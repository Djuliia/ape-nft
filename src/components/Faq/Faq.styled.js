import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const FaqList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const Img = styled.img`
  visibility: hidden;
  position: absolute;
  width: 148px;
  height: 183px;
  transform: rotate(-8deg);
  bottom: -12px;
  left: 1px;
  transition: visibility linear;

  @media screen and (min-width: 1280px) {
    width: 248px;
    height: 282px;
    transform: rotate(-16deg);
    bottom: -16px;
    left: 16px;
  }
`;

export const FaqTitle = styled.h3`
  font-size: 20px;
  font-weight: 900;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const Description = styled.p`
  display: none;
  margin-top: 10px;
  font-family: Messina Sans Mono;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.167;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 36px;
    font-size: 16px;
    line-height: 1.188;
  }
`;

export const FaqItem = styled.li`
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
  padding: 8px 8px 10px;
  transition: border-radius, background-color ${theme.transition};
  z-index: 3;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
    padding: 18px 16px 23px 0px;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 0px;
    padding: 24px 24px 24px 0px;
  }

  &:hover {
    h3 {
      color: ${theme.colors.accent};
    }
    p {
      display: flex;
    }
    svg {
      fill: ${theme.colors.primary};
    }
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-radius: 12px;
      background-color: ${theme.colors.secondary};
      h3 {
        color: ${theme.colors.accent};
      }
      p {
        display: flex;
      }

      img {
        @media screen and (min-width: 768px) {
          visibility: visible;
        }
      }

      svg {
        fill: ${theme.colors.primary};
      }
    `}
`;

export const TextWrap = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 355px;
  }
  @media screen and (min-width: 1280px) {
    width: 636px;
  }
`;

export const Svg = styled.svg`
  margin-right: 8px;
  margin-left: 16px;
  width: 23px;
  height: 20px;
  fill: ${theme.colors.accent};
  transition: fill ${theme.transition};

  @media screen and (min-width: 768px) {
    margin-right: 31px;
    width: 30px;
    height: 27px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 33px;
    width: 49px;
    height: 40px;
  }
`;
