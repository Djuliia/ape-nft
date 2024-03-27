// import { useEffect, useRef, useState } from 'react';
import { Container, Footer, MenuList } from './MobileMenu.styled';
// import { About } from 'components/About/About';
// import { MindMap } from 'components/MindMap/MindMap';
// import { Arts } from 'components/Arts/Atrs';
// import { Mint } from 'components/Mint/Mint';

export const MobileMenu = ({ isOpen, setIsOpen }) => {
  // const aboutRef = useRef(null);
  // const mMapRef = useRef(null);
  // const faqRef = useRef(null);
  // const artsRef = useRef(null);
  // const mintRef = useRef(null);
  // const [scrollToId, setScrollToId] = useState(null);

  // useEffect(() => {
  //   if (scrollToId) {
  //     const targetRef =
  //       scrollToId === 'about'
  //         ? aboutRef
  //         : scrollToId === 'm-map'
  //         ? mMapRef
  //         : scrollToId === 'faq'
  //         ? faqRef
  //         : scrollToId === 'arts'
  //         ? artsRef
  //         : scrollToId === 'mint'
  //         ? mintRef
  //         : null;

  //     if (targetRef && targetRef.current) {
  //       targetRef.current.scrollIntoView({ behavior: 'smooth' });
  //       setScrollToId(null);
  //     }
  //   }
  // }, [scrollToId]);

  // const handleMenuItemClick = targetId => {
  //   setIsOpen(false);
  //   setScrollToId(targetId);
  // };
  const handleMenuItemClick = targetId => {
    setIsOpen(false);
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      {isOpen && (
        <Container>
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
      {/* <div>
        <About aboutRef={aboutRef} />
        <MindMap mMapRef={mMapRef} />
        <Arts artsRef={artsRef} />
        <Mint mintRef={mintRef} />
      </div> */}
    </>
  );
};
