import { motion } from 'framer-motion';
import Link from 'next/link';
import Styled from './mobileNav.styled';

const MobileNav = (): JSX.Element => (
  <Styled.Navigation
    as={motion.nav}
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 40, opacity: 0 }}
    transition={{ easings: 'easeInOut', duration: 0.15 }}
  >
    <Styled.List>
      <li>
        <Link href="/" passHref>
          <Styled.ListItemLink>About</Styled.ListItemLink>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <Styled.ListItemLink>Services</Styled.ListItemLink>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <Styled.ListItemLink>Projects</Styled.ListItemLink>
        </Link>
      </li>
      <li>
        <Link href="/" passHref>
          <Styled.ListItemLink isContact>Contact</Styled.ListItemLink>
        </Link>
      </li>
    </Styled.List>
  </Styled.Navigation>
);

export default MobileNav;
