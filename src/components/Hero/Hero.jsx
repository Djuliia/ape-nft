import { Container, Section } from './Hero.styled';
import img from '../../images/hero/hero_desktop.png';

export const Hero = () => {
  return (
    <Section>
      <Container>
        <p>diD yOu seE iT ?</p>
        <h1>YACHT APES</h1>
        <p>Apes aRe eveRywhere</p>
        <img src={img} alt="monkey in glass" />
        <a href="#mint">MEET APES</a>
        <h3>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </h3>
      </Container>
    </Section>
  );
};
