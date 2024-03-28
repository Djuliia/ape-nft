import styled from 'styled-components';
import { theme } from 'theme';

export const Title = styled.h2`
  margin: 0 auto;
  margin-bottom: 24px;
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: center;

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
  position: relative;
  /* margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center; */
  height: 242px;
  /* max-width: 216px; */
  /* padding: 24px 12px; */
  border-radius: 12px;
  background: ${theme.colors.secondary};
  display: grid;
  &.last-slick {
    background: ${theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
    height: 100%;
  }

  svg {
    grid-column: 2; /* Позиціонуємо SVG у першому стовпчику */
    grid-row: 1; /* Позиціонуємо SVG у першому рядку */
    justify-self: end;
    width: 48px;
    height: 48px;
    fill: white;
    stroke: white;
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
  /* width: 192px; */
  /* margin-bottom: 78px; */

  @media screen and (min-width: 768px) {
    width: 128px;
    justify-self: end;
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
  /* position: absolute; */
  /* bottom: 24px; */
  /* left: 12px; */
  grid-column: 1; /* Позиціонуємо текст у другому стовпчику */
  grid-row: 2; /* Позиціонуємо текст у другому рядку */
  /* align-self: end; */
  @media screen and (min-width: 768px) {
    left: 24px;
  }
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
  }
`;
