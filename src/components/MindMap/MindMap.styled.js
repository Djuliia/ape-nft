import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 24px;

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

export const Text = styled.p`
  font-family: Messina Sans Mono;
  font-size: 12px;
  line-height: 1.167;

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.208;
  }
`;
