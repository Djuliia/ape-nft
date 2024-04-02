import { useEffect, useState } from 'react';
import { About } from './About/About';
import { Arts } from './Arts/Arts';
import { Faq } from './Faq/Faq';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { MainContainer } from './Header/Header.styled';
import { Hero } from './Hero/Hero';
import { MindMap } from './MindMap/MindMap';
import { Mint } from './Mint/Mint';
import { Footer } from './Footer/Footer';

export const App = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const screenWidth = window.innerWidth;
      const scrollPosition = window.scrollY;
  
      if (screenWidth < 768 && scrollPosition > 500) {
        setIsScrolled(true);
      } else if (screenWidth >= 768 && screenWidth < 1280 && scrollPosition > 400) {
        setIsScrolled(true);
      } else if (screenWidth >= 1280 && scrollPosition > 600) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <MainContainer>
        <Header isScrolled={isScrolled} isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <main>
          <Hero />
          <About />
          <MindMap />
          <Faq isMobileOpen={isMobileOpen}/>
          <Arts />
          <Mint />
          <Footer/>
        </main>
      </MainContainer>
      <GlobalStyle />
    </>
  );
};
