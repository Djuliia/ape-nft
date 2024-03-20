import { BtnMenu, HeaderMenu, LinkMenu, Logo } from './Header.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <HeaderMenu>
        <Logo href="/">
          <svg width="48" height="32">
            <use href={`${sprite}#logo`} />
          </svg>
        </Logo>
        <ul>
          <li>
            <BtnMenu onClick={handleMenuClick}>
              {menuOpen ? 'Close' : 'Menu'}
            </BtnMenu>
          </li>
          <li>
            <LinkMenu href="/">
              <svg width="16" height="16">
                <use href={`${sprite}#discord`} />
              </svg>
            </LinkMenu>
          </li>
          <li>
            <LinkMenu href="/">
              <svg width="16" height="16">
                <use href={`${sprite}#logomark`} />
              </svg>
            </LinkMenu>
          </li>
          <li>
            <LinkMenu href="/">
              <svg width="16" height="32">
                <use href={`${sprite}#logoX`} />
              </svg>
            </LinkMenu>
          </li>
        </ul>
      </HeaderMenu>
      {menuOpen && <MobileMenu />}
    </>
  );
};
