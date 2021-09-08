import { motion } from 'framer-motion';
import Image from 'next/image';
import Cone from 'public/images/image-gallery-cone.jpg';
import Milkbottles from 'public/images/image-gallery-milkbottles.jpg';
import Orange from 'public/images/image-gallery-orange.jpg';
import Sugarcubes from 'public/images/image-gallery-sugarcubes.jpg';
import { useInView } from 'react-intersection-observer';
import Styled from './galery.styled';

const variants = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const item = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.45, 0.7, 0.34, 0.81],
    },
  },
};

const Galery = (): JSX.Element => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <Styled.Grid as={motion.div} ref={ref} initial="initial" animate={inView ? 'animate' : ''} variants={variants}>
      <motion.div variants={item}>
        <Image alt="" src={Cone} />
      </motion.div>
      <motion.div variants={item}>
        <Image alt="" src={Orange} />
      </motion.div>
      <motion.div variants={item}>
        <Image alt="" src={Milkbottles} />
      </motion.div>
      <motion.div variants={item}>
        <Image alt="" src={Sugarcubes} />
      </motion.div>
    </Styled.Grid>
  );
};

export default Galery;
