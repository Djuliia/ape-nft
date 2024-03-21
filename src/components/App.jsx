import { GlobalStyle } from './GlobalStyle';
import { Header } from './Header/Header';
import { MainContainer } from './Header/Header.styled';
import { Hero } from './Hero/Hero';

export const App = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <main>
          <Hero />
        </main>
      </MainContainer>
      <GlobalStyle />
    </>
  );
};
