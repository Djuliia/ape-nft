import { Section } from 'components/About/About.styled';
import { Text, Title } from './MindMap.styled';
import { Container } from 'components/GlobalStyle';

export const MindMap = () => {
  return (
    <Section id="m-map">
      <Container>
        <Title>MIND map</Title>
        <div>
          <Text>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </Text>
        </div>
      </Container>
    </Section>
  );
};
