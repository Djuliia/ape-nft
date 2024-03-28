import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ItemTitle,
  MapItem,
  SliderBtnWrap,
  SliderContainer,
  Text,
} from 'components/MindMap/MindMap.styled';
import { useRef } from 'react';
import sprite from '../../images/sprite.svg';

export const MapSlider = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
  };
  return (
    <SliderContainer>
      <Slider
        ref={slider => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <MapItem>
          <Text>
            All owners of APE NFTs and all future collections will receive a
            percentage of sales based on the number of NFTs they own
          </Text>
          <ItemTitle>YAPE DROP</ItemTitle>
        </MapItem>
        <MapItem>
          <Text>
            Launch of the 2nd YACHT Collection Releasing the first version of
            the Ape Slam Game
          </Text>
          <h3>New Collection</h3>
        </MapItem>
        <MapItem>
          <Text>
            Launch your own token, the proceeds of which will go to a global
            fund to LAUNCH YACHT CLUB AND PROMOTE it
          </Text>
          <h3>Token</h3>
        </MapItem>

        <a
          href="https://mind-map.com/learn-how-to-mind-map/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <MapItem className="last-slick">
            <svg>
              <use href={`${sprite}#up-left-arrow"`} />
            </svg>
            <h3>
              Learn <br />
              more <br />
              in mind map
            </h3>
          </MapItem>
        </a>
      </Slider>
      <SliderBtnWrap>
        <button className="button" onClick={previous}>
          Prev
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </SliderBtnWrap>
    </SliderContainer>
  );
};
