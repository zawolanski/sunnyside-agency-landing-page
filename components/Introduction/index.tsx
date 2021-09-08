import Image from 'next/image';
import ImageHeader from 'public/images/image-header.jpg';
import {
  Container,
  Heading,
  HeadingContainer,
  ImageContainer,
} from './introduction.styled';
import ArrowDown from '../../public/icons/icon-arrow-down.svg';

const Introduction = (): JSX.Element => (
  <Container>
    <HeadingContainer>
      <Heading>We are creatives</Heading>
      <div>
        <ArrowDown />
      </div>
    </HeadingContainer>
    <ImageContainer>
      <Image alt="" src={ImageHeader} layout="responsive" />
    </ImageContainer>
  </Container>
);

export default Introduction;
