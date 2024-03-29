import { Section } from 'components/About/About.styled';
import { ItemTitle, MapItem, MapList, Text, Title } from './MindMap.styled';
import { Container } from 'components/GlobalStyle';
import { MapSlider } from 'components/Slider/MindMapSlider';
import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';

export const MindMap = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Section id="m-map">
      <Container>
        <Title>MIND map</Title>
        {isMobile ? (
          <MapSlider />
        ) : (
          <MapList>
            <MapItem>
              <Text>
                All owners of APE NFTs and all future collections will receive a
                percentage of sales based on the number of NFTs they own
              </Text>
              <ItemTitle>YAPE DROP</ItemTitle>
            </MapItem>
            <MapItem>
              <Text>
                Launch of the 2nd YACHT Collection Releasing the first version
                of the Ape Slam Game
              </Text>
              <ItemTitle>New Collection</ItemTitle>
            </MapItem>
            <MapItem>
              <Text>
                Launch your own token, the proceeds of which will go to a global
                fund to LAUNCH YACHT CLUB AND PROMOTE it
              </Text>
              <ItemTitle>Token</ItemTitle>
            </MapItem>
            <a
              href="https://mind-map.com/learn-how-to-mind-map/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <MapItem className="last-slick">
                <svg>
                  <use href={`${sprite}#up-left-arrow`} />
                </svg>
                <ItemTitle>
                  Learn <br />
                  more <br />
                  in mind map
                </ItemTitle>
              </MapItem>
            </a>
          </MapList>
        )}
      </Container>
    </Section>
  );
};
