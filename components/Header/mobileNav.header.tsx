import Link from 'next/link';
import Styled from './mobileNav.styled';

const MobileNav = (): JSX.Element => (
  <Styled.Navigation>
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
