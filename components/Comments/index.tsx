import Image from 'next/image';
import EmilyImg from 'public/images/image-emily.jpg';
import JennieImg from 'public/images/image-jennie.jpg';
import ThomasImg from 'public/images/image-thomas.jpg';
import Styled from './comments.styled';

const Comments = (): JSX.Element => (
  <Styled.Container>
    <Styled.Heading>client testimonials</Styled.Heading>
    <Styled.Cards>
      <Styled.Card>
        <Styled.Avatar>
          <Image src={EmilyImg} alt="" />
        </Styled.Avatar>
        <Styled.Comment>
          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
          hit.
        </Styled.Comment>
        <Styled.Author>Emily R.</Styled.Author>
        <Styled.Position>Marketing Director</Styled.Position>
      </Styled.Card>
      <Styled.Card>
        <Styled.Avatar>
          <Image src={ThomasImg} alt="" />
        </Styled.Avatar>
        <Styled.Comment>
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
          enjoyable experience.
        </Styled.Comment>
        <Styled.Author>Thomas S.</Styled.Author>
        <Styled.Position>Chief Operating Officer</Styled.Position>
      </Styled.Card>
      <Styled.Card>
        <Styled.Avatar>
          <Image src={JennieImg} alt="" />
        </Styled.Avatar>
        <Styled.Comment>
          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        </Styled.Comment>
        <Styled.Author>Jennie F.</Styled.Author>
        <Styled.Position>Business Owner</Styled.Position>
      </Styled.Card>
    </Styled.Cards>
  </Styled.Container>
);

export default Comments;
