import {
  BtnMenu,
  Container,
  HeaderMenu,
  SocialLink,
  Logo,
  MenuList,
  SocialList,
  NavLink,
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
            <MenuList>
              {isMenuOpen && (
                <>
                  <li>
                    <NavLink $isScrolled={isScrolled} href="#about">
                      ABOUT
                    </NavLink>
                  </li>
                  <li>
                    <NavLink $isScrolled={isScrolled} href="#m-map">
                      M-MAP
                    </NavLink>
                  </li>
                  <li>
                    <NavLink $isScrolled={isScrolled} href="#faq">
                      FAQ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink $isScrolled={isScrolled} href="#arts">
                      ARTS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink $isScrolled={isScrolled} href="#mint">
                      MINT
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <BtnMenu
                  $menuOpen={isMobileOpen}
                  $isScrolled={isScrolled}
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? 'Close' : 'Menu'}
                </BtnMenu>
              </li>
            </MenuList>
            <SocialList>
              <li>
                <SocialLink
                  $menuOpen={isMobileOpen}
                  $isScrolled={isScrolled}
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg width="16" height="16">
                    <use href={`${sprite}#discord`} />
                  </svg>
                </SocialLink>
              </li>
              <li>
                <SocialLink
                  $menuOpen={isMobileOpen}
                  $isScrolled={isScrolled}
                  href="/"
                >
                  <svg width="16" height="16">
                    <use href={`${sprite}#logomark`} />
                  </svg>
                </SocialLink>
              </li>
              <li>
                <SocialLink
                  $menuOpen={isMobileOpen}
                  $isScrolled={isScrolled}
                  href="/"
                >
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
