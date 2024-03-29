import { Section } from 'components/About/About.styled';
import { Container } from 'components/GlobalStyle';
import img1 from '../../images/faq/img1.webp';
import img2 from '../../images/faq/img2.webp';
import img3 from '../../images/faq/img3.webp';
import img4 from '../../images/faq/img4.webp';
import sprite from '../../images/sprite.svg';
import {
  Description,
  FaqItem,
  FaqList,
  FaqTitle,
  Img,
  Svg,
  TextWrap,
} from './Faq.styled';
import { Title } from 'components/MindMap/MindMap.styled';
import { useState } from 'react';

export const Faq = () => {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = index => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <Section id="faq">
      <Container>
        <Title>Faq</Title>
        <FaqList>
          <FaqItem
            $isActive={activeItem === 0}
            onClick={() => handleItemClick(0)}
          >
            <Img src={img1} alt="monkey1"></Img>
            <Svg>
              <use href={`${sprite}#untitled3`} />
            </Svg>
            <TextWrap>
              <FaqTitle>WHAT IS AN NFT COLLECTION?</FaqTitle>
              <Description>
                An NFT collection is a group of unique digital assets, each
                represented by a non-fungible token, typically created around a
                specific theme or style.
              </Description>
            </TextWrap>
          </FaqItem>
          <FaqItem
            $isActive={activeItem === 1}
            onClick={() => handleItemClick(1)}
          >
            <Img src={img2} alt="monkey2"></Img>
            <Svg>
              <use href={`${sprite}#untitled2`} />
            </Svg>
            <TextWrap>
              <FaqTitle>HOW DO I PURCHASE NFTS FROM A COLLECTION?</FaqTitle>
              <Description>
                To purchase nfts from a collection, you typically need to use
                cryptocurrency on a blockchain0based marketplace.
              </Description>
            </TextWrap>
          </FaqItem>
          <FaqItem
            $isActive={activeItem === 2}
            onClick={() => handleItemClick(2)}
          >
            <Img src={img3} alt="monkey3"></Img>
            <Svg>
              <use href={`${sprite}#untitled1`} />
            </Svg>
            <TextWrap>
              <FaqTitle>CAN I SELL OR TRADE NFTS FROM A COLLECTION?</FaqTitle>
              <Description>
                Yes, you can sell or trade NFTs from a collection like you would
                other digital assets.
              </Description>
            </TextWrap>
          </FaqItem>
          <FaqItem
            $isActive={activeItem === 3}
            onClick={() => handleItemClick(3)}
          >
            <Img src={img4} alt="monkey4"></Img>
            <Svg>
              <use href={`${sprite}#untitled`} />
            </Svg>
            <TextWrap>
              <FaqTitle>WHAT RIGHTS DO I HAVE AS AN OWNER OF AN NFT?</FaqTitle>
              <Description>
                As an NFT owner, you can own, transfer, potentially access
                exclusive content, resell, but don't automatically get copyright
                or intellectual property rights.
              </Description>
            </TextWrap>
          </FaqItem>
        </FaqList>
      </Container>
    </Section>
  );
};
