import {
  BtnMenu,
  Container,
  HeaderMenu,
  LinkMenu,
  Logo,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <HeaderMenu>
        <Container>
          <Logo $menuOpen={isOpen} href="/">
            <svg width="48" height="32">
              <use href={`${sprite}#logo`} />
            </svg>
          </Logo>
          <ul>
            <li>
              <BtnMenu $menuOpen={isOpen} onClick={toggleMenu}>
                Menu
              </BtnMenu>
            </li>
            <li>
              <LinkMenu $menuOpen={isOpen} href="/">
                <svg width="16" height="16">
                  <use href={`${sprite}#discord`} />
                </svg>
              </LinkMenu>
            </li>
            <li>
              <LinkMenu $menuOpen={isOpen} href="/">
                <svg width="16" height="16">
                  <use href={`${sprite}#logomark`} />
                </svg>
              </LinkMenu>
            </li>
            <li>
              <LinkMenu $menuOpen={isOpen} href="/">
                <svg width="16" height="16">
                  <use href={`${sprite}#logoX`} />
                </svg>
              </LinkMenu>
            </li>
          </ul>
        </Container>
      </HeaderMenu>
      {isOpen ? <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} /> : null}
    </>
  );
};
