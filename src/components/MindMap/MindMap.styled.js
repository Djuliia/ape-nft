import styled from 'styled-components';
import { theme } from 'theme';

export const Title = styled.h2`
  margin: 0 auto;
  margin-bottom: 24px;
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 160px;
    margin-bottom: 80px;
  }
`;

export const MapList = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 284px);
  grid-template-rows: repeat(2, 242px);

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 504px);
    grid-template-rows: repeat(2, 480px);
  }
`;

export const MapItem = styled.div`
  @media screen and (max-width: 767px) {
    max-width: 283px;
  }
  margin: 0 auto;
  position: relative;
  height: 242px;
  padding: 24px 12px;
  border-radius: 12px;
  background: ${theme.colors.secondary};
  display: grid;
  &.last-slick {
    background: ${theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 24px;
    height: 100%;
  }

  svg {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    width: 48px;
    height: 48px;
    fill: white;
    @media screen and (min-width: 1280px) {
      width: 64px;
      height: 64px;
    }
  }
`;

export const Text = styled.p`
  font-family: Messina Sans Mono;
  font-size: 12px;
  line-height: 1.167;
  width: 192px;
  grid-column: span 2;
  grid-row: 1;
  justify-self: end;

  @media screen and (min-width: 768px) {
    grid-column: 2;
    width: 128px;
  }
  @media screen and (min-width: 1280px) {
    width: 228px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.208;
  }
`;

export const ItemTitle = styled.h3`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  grid-column: span 2;
  grid-row: 2;
  align-self: end;

  @media screen and (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const SliderContainer = styled.div`
  padding: 0px 72px;
  width: 100vw;
`;

export const SliderBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  font-family: Biro Script Plus;
  font-size: 24px;
  line-height: 1;
  button {
    margin-top: 24px;
    color: ${theme.colors.primary};
    background-color: transparent;
    border: none;
    transition: color ${theme.transition};
    &:hover {
      color: ${theme.colors.accent};
    }
  }
`;
