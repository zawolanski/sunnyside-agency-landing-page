/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../public/icons/logo.svg';
import MenuIcon from '../../public/icons/icon-hamburger.svg';
import Styled from './header.styles';
import MobileNav from './mobileNav.header';

const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <Styled.Header>
      <Styled.Container>
        <Link href="/" passHref>
          <a aria-label="go to home page">
            <Logo />
          </a>
        </Link>
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
        {isOpen ? <MobileNav /> : null}
        <Styled.MenuButton isOpen={isOpen} type="button" onClick={isOpen ? closeMenu : openMenu}>
          <MenuIcon />
        </Styled.MenuButton>
      </Styled.Container>
    </Styled.Header>
  );
};

export default Header;
