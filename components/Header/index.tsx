import Link from 'next/link';
import Logo from '../../public/icons/logo.svg';
import MenuIcon from '../../public/icons/icon-hamburger.svg';
import Styled from './header.styles';

const Header = (): JSX.Element => (
  <header>
    <Styled.Container>
      <Logo />
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
      <Styled.MenuButton type="button">
        <MenuIcon />
      </Styled.MenuButton>
    </Styled.Container>
  </header>
);

export default Header;
