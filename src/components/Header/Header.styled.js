import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 54px 8px 24px;

  @media screen and (min-width: 1280px) {
    padding-top: 16px;
  }
`;

export const HeaderMenu = styled.header`
  position: fixed;
  top: 62px;
  left: 50%;
  transform: translateX(-50%);
  /* max-width: 480px; */
  padding: 0 16px;
  width: 100%;
  z-index: 8000;

  @media screen and (min-width: 768px) {
    padding: 0;
    top: 66px;
    width: 704px;
  }

  @media screen and (min-width: 1280px) {
    top: 39px;
    width: 1200px;
    padding: 0 65px;
  }
`;

export const Logo = styled.a`
  svg {
    fill: ${({ $menuOpen }) =>
      $menuOpen ? theme.colors.primary : theme.colors.secondary};
    transition: ${theme.transition};
    &:hover {
      fill: ${({ $menuOpen }) =>
        $menuOpen ? theme.colors.accent : theme.colors.primary};
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  background: ${({ $menuOpen }) =>
    $menuOpen ? 'rgba(255, 255, 255, 0.1)' : 'rgba(30, 30, 30, 0.1)'};
  color: ${({ $menuOpen }) =>
    $menuOpen ? theme.colors.primary : theme.colors.secondary};
  font-family: Messina Sans Mono;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.167;
  transition: color ${theme.transition};
  &:hover {
    color: ${({ $menuOpen }) =>
      $menuOpen ? theme.colors.accent : theme.colors.primary};
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
  }
`;

export const BtnMenu = styled.button`
  ${buttonStyles}
  border: none;
`;

export const LinkMenu = styled.a`
  ${buttonStyles}

  svg {
    fill: ${({ $menuOpen }) =>
      $menuOpen ? theme.colors.primary : theme.colors.secondary};
    transition: ${theme.transition};

    &:hover {
      fill: ${({ $menuOpen }) =>
        $menuOpen ? theme.colors.accent : theme.colors.primary};
    }
  }
`;
