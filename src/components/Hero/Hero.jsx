import { Img, LeftSide, Section, TitleWrap } from './Hero.styled';
import imgDesktop from '../../images/hero/hero_desktop.png';
import imgTablet from '../../images/hero/hero_tablet.png';
import imgMobile from '../../images/hero/hero_mobile.png';
import { Container } from 'components/GlobalStyle';

export const Hero = () => {
  return (
    <Section>
      <Container>
        <p>diD yOu seE iT ?</p>
        <TitleWrap>
          <h1>YACHT&nbsp;</h1>
          <h1>APES</h1>
        </TitleWrap>
        <p>Apes aRe eveRywhere</p>
        <Img
          srcSet={`${imgMobile} 216w, ${imgTablet} 283w, ${imgDesktop} 463w`}
          sizes="(max-width: 480px) 216px, (max-width: 1279px) 283px, 463px"
          src={imgDesktop}
          alt="monkey in glass"
        />
        <LeftSide>
          <a href="#mint">MEET APES</a>
          <h3 className="mobile">
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </h3>
          <h3 className="tablet">
            <div style={{ textAlign: 'right' }}>Yacht Ape is a </div>
            collection of unique digital apes that you can
            <div style={{ textAlign: 'left' }}>own in NFT format</div>
          </h3>
          <h3 className="desktop">
            <div style={{ textAlign: 'right' }}>Yacht Ape is a collection</div>
            of unique digital apes that you
            <div style={{ textAlign: 'left' }}>can own in NFT format</div>
          </h3>
        </LeftSide>
      </Container>
    </Section>
  );
};
