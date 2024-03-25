import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const MainContainer = styled.div`
  padding: 54px 8px 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-top: 16px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 16px;
  }
`;

export const HeaderMenu = styled.header`
  position: fixed;
  top: 62px;
  left: 50%;
  transform: translateX(-50%);
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
    &:hover {
      fill: ${({ $menuOpen }) =>
        $menuOpen ? theme.colors.accent : theme.colors.primary};
    }
  }

  @media screen and (min-width: 768px) {
    svg {
      fill: ${theme.colors.secondary};
      &:hover {
        ${theme.colors.primary};
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
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
    background: rgba(30, 30, 30, 0.1);
    color: ${theme.colors.secondary};
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`;

export const BtnMenu = styled.button`
  ${buttonStyles}
  border: none;
  margin-left: auto;
`;

export const SocialLink = styled.a`
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

  @media screen and (min-width: 768px) {
    svg {
      fill: ${theme.colors.secondary};
      &:hover {
        fill: ${theme.colors.primary};
      }
    }
  }
`;

export const MenuList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const SocialList = styled.ul`
  align-self: flex-end;
`;