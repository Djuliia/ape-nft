import {
  BtnMenu,
  Container,
  HeaderMenu,
  SocialLink,
  Logo,
  MenuList,
  SocialList,
} from './Header.styled';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';

export const Header = ({ isScrolled }) => {
  const [isMobileOpen, setMobileIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileIsOpen(prevState => !prevState);
    setIsMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <>
      <HeaderMenu>
        <Container>
          <Logo $menuOpen={isMobileOpen} $isScrolled={isScrolled} href="/">
            <svg width="48" height="32">
              <use href={`${sprite}#logo`} />
            </svg>
          </Logo>
          <div>
            {isMenuOpen && (
              <MenuList>
                <li>
                  <SocialLink href="#about">ABOUT</SocialLink>
                </li>
                <li>
                  <SocialLink href="#m-map">M-MAP</SocialLink>
                </li>
                <li>
                  <SocialLink href="#faq">FAQ</SocialLink>
                </li>
                <li>
                  <SocialLink href="#arts">ARTS</SocialLink>
                </li>
                <li>
                  <SocialLink href="#mint">MINT</SocialLink>
                </li>
              </MenuList>
            )}

            <BtnMenu $menuOpen={isMobileOpen} onClick={toggleMenu}>
              {isMenuOpen ? 'Close' : 'Menu'}
            </BtnMenu>

            <SocialList>
              <li>
                <SocialLink $menuOpen={isMobileOpen} href="/">
                  <svg width="16" height="16">
                    <use href={`${sprite}#discord`} />
                  </svg>
                </SocialLink>
              </li>
              <li>
                <SocialLink $menuOpen={isMobileOpen} href="/">
                  <svg width="16" height="16">
                    <use href={`${sprite}#logomark`} />
                  </svg>
                </SocialLink>
              </li>
              <li>
                <SocialLink $menuOpen={isMobileOpen} href="/">
                  <svg width="16" height="16">
                    <use href={`${sprite}#logoX`} />
                  </svg>
                </SocialLink>
              </li>
            </SocialList>
          </div>
        </Container>
      </HeaderMenu>
      {isMobileOpen && (
        <MobileMenu isOpen={isMobileOpen} setIsOpen={setMobileIsOpen} />
      )}
    </>
  );
};
