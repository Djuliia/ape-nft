import { About } from './About/About';
import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { MainContainer } from './Header/Header.styled';
import { Hero } from './Hero/Hero';
import { MindMap } from './MindMap/MindMap';

export const App = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <main>
          <Hero />
          <About />
          <MindMap />
        </main>
      </MainContainer>
      <GlobalStyle />
    </>
  );
};
