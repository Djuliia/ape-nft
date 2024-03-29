import { Section } from 'components/About/About.styled';
import { Container } from 'components/GlobalStyle';
import { Title } from 'components/MindMap/MindMap.styled';
import { ArtsSlider } from 'components/Slider/ArtsSlider';

export const Arts = () => {
  return (
    <Section id="arts">
      <Container>
        <Title>Collection</Title>
        <ArtsSlider />
      </Container>
    </Section>
  );
};
