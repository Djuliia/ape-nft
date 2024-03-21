import { Container, Footer, MenuList } from './MobileMenu.styled';
import {
  BtnMenu,
  HeaderMenu,
  LinkMenu,
  Logo,
} from 'components/Header/Header.styled';
import sprite from '../../images/sprite.svg';

export const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <HeaderMenu>
            <Logo $menuOpen={isOpen} href="/">
              <svg width="48" height="32">
                <use href={`${sprite}#logo`} />
              </svg>
            </Logo>
            <ul>
              <li>
                <BtnMenu $menuOpen={isOpen} onClick={toggleMenu}>
                  Close
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
                  <svg width="16" height="32">
                    <use href={`${sprite}#logoX`} />
                  </svg>
                </LinkMenu>
              </li>
            </ul>
          </HeaderMenu>
          <MenuList>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#m-map">M-MAP</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#arts">ARTS</a>
            </li>
            <li>
              <a href="#mint">MINT</a>
            </li>
          </MenuList>
          <Footer>© Yacht ape 2024 all rights reserved</Footer>
        </Container>
      )}
    </>
  );
};
