import Link from 'next/link';
import Image from 'next/image';
import CherryImg from 'public/images/image-graphic-design.jpg';
import OrangeImg from 'public/images/image-photography.jpg';
import GlassImg from 'public/images/image-stand-out.jpg';
import EggImg from 'public/images/image-transform.jpg';
import Styled from './tiles.styled';

const Tiles = (): JSX.Element => (
  <Styled.Grid>
    <Styled.Section order={2}>
      <div>
        <Styled.Heading>Transform your brand</Styled.Heading>
        <Styled.Paragraph>
          We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
          compelling visuals that do most of the marketing for you.
        </Styled.Paragraph>
        <Link href="/" passHref>
          <Styled.Link underlineColor="yellow">learn more</Styled.Link>
        </Link>
      </div>
    </Styled.Section>
    <Styled.ImageContainer order={1}>
      <Image src={EggImg} alt="" />
    </Styled.ImageContainer>
    <Styled.ImageContainer order={3}>
      <Image src={GlassImg} alt="" />
    </Styled.ImageContainer>
    <Styled.Section order={4}>
      <div>
        <Styled.Heading>Stand out to the right audience</Styled.Heading>
        <Styled.Paragraph>
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll
          build and extend your brand in digital places.
        </Styled.Paragraph>
        <Link href="/" passHref>
          <Styled.Link underlineColor="red">learn more</Styled.Link>
        </Link>
      </div>
    </Styled.Section>
    <Styled.ImageContainer order={5} topHeight>
      <Image src={CherryImg} alt="" />
      <Styled.ImageContent textColor="green">
        <h2>Graphic Design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores your brand message and captures
          potential clients’ attention.
        </p>
      </Styled.ImageContent>
    </Styled.ImageContainer>
    <Styled.ImageContainer order={5} topHeight>
      <Image src={OrangeImg} alt="" />
      <Styled.ImageContent textColor="blue">
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
        </p>
      </Styled.ImageContent>
    </Styled.ImageContainer>
  </Styled.Grid>
);

export default Tiles;
