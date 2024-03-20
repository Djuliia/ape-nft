import { Container, Footer, MenuList } from './MobileMenu.styled';

export const MobileMenu = ({ closeMenu }) => {
  return (
    <Container>
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
  );
};
