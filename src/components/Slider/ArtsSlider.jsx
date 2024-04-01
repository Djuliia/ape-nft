import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../images/arts/img (1).webp';
import img2 from '../../images/arts/img (2).webp';
import img3 from '../../images/arts/img (3).webp';
import img4 from '../../images/arts/img (4).webp';
import img5 from '../../images/arts/img (5).webp';
import img6 from '../../images/arts/img (6).webp';
import img7 from '../../images/arts/img (7).webp';
import img8 from '../../images/arts/img (8).webp';
import img9 from '../../images/arts/img (9).webp';
import img10 from '../../images/arts/img (10).webp';
import img11 from '../../images/arts/img (11).webp';
import img12 from '../../images/arts/img (12).webp';
import img13 from '../../images/arts/img (13).webp';
import img14 from '../../images/arts/img (14).webp';

import { useRef } from 'react';
import {
  SliderBtnWrap,
 } from 'components/MindMap/MindMap.styled';
import { ImgWrap, SliderContainer } from 'components/Arts/Arts.styled';

export const ArtsSlider = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          <ImgWrap>
            <img src={img1} alt="monkey1" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img2} alt="monkey2" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img3} alt="monkey3" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img4} alt="monkey4" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img5} alt="monkey5" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img6} alt="monkey6" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img7} alt="monkey7" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img8} alt="monkey8" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img9} alt="monkey9" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img10} alt="monkey10" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img11} alt="monkey11" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img12} alt="monkey12" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img13} alt="monkey13" />
          </ImgWrap>
        </div>
        <div>
          <ImgWrap>
            <img src={img14} alt="monkey14" />
          </ImgWrap>
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
