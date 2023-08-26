import { motion } from 'framer-motion';
import Image from 'next/image';
import EmilyImg from 'public/images/image-emily.jpg';
import JennieImg from 'public/images/image-jennie.jpg';
import ThomasImg from 'public/images/image-thomas.jpg';
import { useInView } from 'react-intersection-observer';
import Styled from './comments.styled';

const variants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const item = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.45, 0.7, 0.34, 0.81],
    },
  },
};

const Comments = (): JSX.Element => {
  const [cards, inView] = useInView({ triggerOnce: true });

  return (
    <Styled.Container>
      <Styled.Heading>client testimonials</Styled.Heading>
      <Styled.Cards as={motion.div} ref={cards} initial="initial" animate={inView ? 'animate' : ''} variants={variants}>
        <Styled.Card as={motion.div} variants={item}>
          <Styled.Avatar>
            <Image src={EmilyImg} alt="" placeholder="blur" />
          </Styled.Avatar>
          <Styled.Comment>
            We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
            hit.
          </Styled.Comment>
          <Styled.Author>Emily R.</Styled.Author>
          <Styled.Position>Marketing Director</Styled.Position>
        </Styled.Card>
        <Styled.Card as={motion.div} variants={item}>
          <Styled.Avatar>
            <Image src={ThomasImg} alt="" placeholder="blur" />
          </Styled.Avatar>
          <Styled.Comment>
            Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
            enjoyable experience.
          </Styled.Comment>
          <Styled.Author>Thomas S.</Styled.Author>
          <Styled.Position>Chief Operating Officer</Styled.Position>
        </Styled.Card>
        <Styled.Card as={motion.div} variants={item}>
          <Styled.Avatar>
            <Image src={JennieImg} alt="" placeholder="blur" />
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
};

export default Comments;
