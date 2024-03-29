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
        <div>
          <MapItem>
            <Text>
              All owners of APE NFTs and all future collections will receive a
              percentage of sales based on the number of NFTs they own
            </Text>
            <ItemTitle>YAPE DROP</ItemTitle>
          </MapItem>
        </div>
        <div>
          <MapItem>
            <Text>
              Launch of the 2nd YACHT Collection Releasing the first version of
              the Ape Slam Game
            </Text>
            <ItemTitle>New Collection</ItemTitle>
          </MapItem>
        </div>
        <div>
          <MapItem>
            <Text>
              Launch your own token, the proceeds of which will go to a global
              fund to LAUNCH YACHT CLUB AND PROMOTE it
            </Text>
            <ItemTitle>Token</ItemTitle>
          </MapItem>
        </div>

        <div>
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
        </div>
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
