import { Container, Footer, MenuList } from './MobileMenu.styled';

export const MobileMenu = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <Container>
          <MenuList>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="/">M-MAP</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">ARTS</a>
            </li>
            <li>
              <a href="/">MINT</a>
            </li>
          </MenuList>
          <Footer>© Yacht ape 2024 all rights reserved</Footer>
        </Container>
      )}
    </>
  );
};
