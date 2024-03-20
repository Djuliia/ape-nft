import styled, { css } from 'styled-components';
import { theme } from 'theme';

export const Logo = styled.a`
  svg {
    fill: ${theme.colors.primary};
    transition: ${theme.transition};
    &:hover {
      fill: ${theme.colors.accent};
    }
  }
`;

export const HeaderMenu = styled.nav`
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
  background: rgba(255, 255, 255, 0.1);
  color: ${theme.colors.primary};
  font-family: Messina Sans Mono;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.167;
  transition: color ${theme.transition};
  &:hover {
    color: ${theme.colors.accent};
    text-decoration: underline;
  }
`;

export const BtnMenu = styled.button`
  ${buttonStyles}
  border: none;
`;

export const LinkMenu = styled.a`
  ${buttonStyles}

  svg {
    fill: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transition};

    &:hover {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;
