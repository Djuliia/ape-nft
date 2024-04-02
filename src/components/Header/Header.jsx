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

export const Header = ({ isScrolled, isMobileOpen, setIsMobileOpen  }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  const toggleMobile = () => {
    setIsMobileOpen(prevState => !prevState);
    if (!isMobileOpen) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
  };

  return (
    <>
      <HeaderMenu>
        <Container>
          <Logo $isMobileOpen={isMobileOpen} $isScrolled={isScrolled} href="/">
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
                  $isMobileOpen={isMobileOpen}
                  $isScrolled={isScrolled}
                  onClick={() => window.innerWidth < 768 ? toggleMobile() : toggleMenu()}
                >
                  {isMenuOpen || isMobileOpen ? 'Close' : 'Menu'}
                </BtnMenu>
              </li>
            </MenuList>
            <SocialList>
              <li>
                <SocialLink
                  $isMobileOpen={isMobileOpen}
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
                  $isMobileOpen={isMobileOpen}
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
                  $isMobileOpen={isMobileOpen}
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
        <MobileMenu isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
      )}
    </>
  );
};
