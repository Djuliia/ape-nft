import styled from 'styled-components';
import { theme } from 'theme';

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 62px 16px 80px;
  display: flex;
  flex-direction: column;
  font-family: Messina Sans Mono;
  background: ${theme.colors.bg};
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.open {
    opacity: 1;
  transform: translateY(0); 
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.208;
  li {
    transition: color ${theme.transition};
    &:hover {
      color: ${theme.colors.accent};
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 1280px) {
    gap: 16px;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  text-transform: uppercase;
  max-width: 216px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.167;
`;
