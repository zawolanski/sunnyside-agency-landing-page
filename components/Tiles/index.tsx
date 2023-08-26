import Link from 'next/link';
import Image from 'next/image';
import CherryImg from 'public/images/image-graphic-design.jpg';
import OrangeImg from 'public/images/image-photography.jpg';
import GlassImg from 'public/images/image-stand-out.jpg';
import EggImg from 'public/images/image-transform.jpg';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Styled from './tiles.styled';

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

const Tiles = (): JSX.Element => {
  const [section1, inView1] = useInView({ triggerOnce: true });
  const [section2, inView2] = useInView({ triggerOnce: true });
  const [photoText, inViewPhotoText] = useInView({ triggerOnce: true });

  return (
    <Styled.Grid>
      <Styled.Section $order={2}>
        <motion.div ref={section1} initial="initial" animate={inView1 ? 'animate' : ''} variants={variants}>
          <Styled.Heading as={motion.h2} variants={item}>
            Transform your brand
          </Styled.Heading>
          <Styled.Paragraph as={motion.p} variants={item}>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </Styled.Paragraph>
          <motion.div variants={item}>
            <Link href="/" passHref>
              <Styled.Link underlineColor="yellow">learn more</Styled.Link>
            </Link>
          </motion.div>
        </motion.div>
      </Styled.Section>
      <Styled.ImageContainer $order={1}>
        <Image src={EggImg} alt="" placeholder="blur" priority />
      </Styled.ImageContainer>
      <Styled.ImageContainer $order={3}>
        <Image src={GlassImg} alt="" placeholder="blur" />
      </Styled.ImageContainer>
      <Styled.Section $order={4}>
        <motion.div ref={section2} initial="initial" animate={inView2 ? 'animate' : ''} variants={variants}>
          <Styled.Heading as={motion.h2} variants={item}>
            Stand out to the right audience
          </Styled.Heading>
          <Styled.Paragraph as={motion.p} variants={item}>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we’ll build and extend your brand in digital places.
          </Styled.Paragraph>
          <motion.div variants={item}>
            <Link href="/" passHref>
              <Styled.Link underlineColor="red">learn more</Styled.Link>
            </Link>
          </motion.div>
        </motion.div>
      </Styled.Section>
      <Styled.ImageContainer $order={5} topHeight>
        <Image src={CherryImg} alt="" placeholder="blur" />
        <Styled.ImageContent
          as={motion.div}
          ref={photoText}
          initial="initial"
          animate={inViewPhotoText ? 'animate' : ''}
          variants={variants}
          textColor="green"
        >
          <motion.h2 variants={item}>Graphic Design</motion.h2>
          <motion.p variants={item}>
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients’ attention.
          </motion.p>
        </Styled.ImageContent>
      </Styled.ImageContainer>
      <Styled.ImageContainer $order={5} topHeight>
        <Image src={OrangeImg} alt="" placeholder="blur" />
        <Styled.ImageContent
          as={motion.div}
          ref={photoText}
          initial="initial"
          animate={inViewPhotoText ? 'animate' : ''}
          variants={variants}
          textColor="blue"
        >
          <motion.h2 variants={item}>Photography</motion.h2>
          <motion.p variants={item}>
            Increase your credibility by getting the most stunning, high-quality photos that improve your business
            image.
          </motion.p>
        </Styled.ImageContent>
      </Styled.ImageContainer>
    </Styled.Grid>
  );
};

export default Tiles;
