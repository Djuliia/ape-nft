import { useEffect, useState } from 'react';
import { About } from './About/About';
import { Arts } from './Arts/Atrs';
import { Faq } from './Faq/Faq';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { MainContainer } from './Header/Header.styled';
import { Hero } from './Hero/Hero';
import { MindMap } from './MindMap/MindMap';
import { Mint } from './Mint/Mint';

export const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
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
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <About />
          <MindMap />
          <Faq />
          <Arts />
          <Mint />
        </main>
      </MainContainer>
      <GlobalStyle />
    </>
  );
};
