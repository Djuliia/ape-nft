import { useEffect, useRef } from 'react';
import { Container, Footer, MenuList } from './MobileMenu.styled';

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuRef.current) {
      if (isOpen && menuRef.current) {
         menuRef.current.classList.add('open');
      } else {
        menuRef.current.classList.remove('open');
      }
    }
  }, [isOpen]);

  const handleMenuItemClick = targetId => {
    setIsOpen(false);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      {isOpen && (
        <Container ref={menuRef}>
          <MenuList>
            <li>
              <a href="#about" onClick={() => handleMenuItemClick('about')}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#m-map" onClick={() => handleMenuItemClick('m-map')}>
                M-MAP
              </a>
            </li>
            <li>
              <a href="#faq" onClick={() => handleMenuItemClick('m-map')}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#arts" onClick={() => handleMenuItemClick('arts')}>
                ARTS
              </a>
            </li>
            <li>
              <a href="#mint" onClick={() => handleMenuItemClick('mint')}>
                MINT
              </a>
            </li>
          </MenuList>
          <Footer>© Yacht ape 2024 all rights reserved</Footer>
        </Container>
      )}
    </>
  );
};
