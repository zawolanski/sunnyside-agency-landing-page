import Image from 'next/image';
import ImageHeader from 'public/images/image-header.jpg';
import { motion } from 'framer-motion';
import { Container, Heading, HeadingContainer, ImageContainer } from './introduction.styled';
import ArrowDown from '../../public/icons/icon-arrow-down.svg';

const container = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  initial: { opacity: 0, y: 25 },
  animate: { opacity: 1, y: 0 },
};

const Introduction = (): JSX.Element => (
  <Container>
    <HeadingContainer>
      <Heading as={motion.h1} initial="initial" animate="animate" variants={container}>
        <span>
          <motion.span variants={item}>W</motion.span>
          <motion.span variants={item}>e</motion.span>
        </span>
        &nbsp;
        <span>
          <motion.span variants={item}>a</motion.span>
          <motion.span variants={item}>r</motion.span>
          <motion.span variants={item}>e</motion.span>
        </span>
        &nbsp;
        <span>
          <motion.span variants={item}>c</motion.span>
          <motion.span variants={item}>r</motion.span>
          <motion.span variants={item}>e</motion.span>
          <motion.span variants={item}>a</motion.span>
          <motion.span variants={item}>t</motion.span>
          <motion.span variants={item}>i</motion.span>
          <motion.span variants={item}>n</motion.span>
          <motion.span variants={item}>g</motion.span>
        </span>
      </Heading>
      <motion.div
        animate={{ y: 30 }}
        transition={{ ease: 'easeInOut', duration: 1, repeat: Infinity, repeatType: 'mirror' }}
      >
        <ArrowDown />
      </motion.div>
    </HeadingContainer>
    <ImageContainer>
      <Image alt="" src={ImageHeader} layout="responsive" />
    </ImageContainer>
  </Container>
);

export default Introduction;
