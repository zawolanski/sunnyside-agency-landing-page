import Link from 'next/link';
import Logo from '../../public/icons/logo.svg';
import FacebookIcon from '../../public/icons/icon-facebook.svg';
import InstagramIcon from '../../public/icons/icon-instagram.svg';
import TwitterIcon from '../../public/icons/icon-twitter.svg';
import PinterestIcon from '../../public/icons/icon-pinterest.svg';
import Styled from './footer.styles';

const Footer = (): JSX.Element => (
  <Styled.Footer>
    <Link href="/" passHref>
      <Styled.LogoContainer>
        <Logo />
      </Styled.LogoContainer>
    </Link>
    <nav>
      <Styled.List>
        <li>
          <Link href="/" passHref>
            <Styled.Link>About</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <Styled.Link>Services</Styled.Link>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <Styled.Link>Projects</Styled.Link>
          </Link>
        </li>
      </Styled.List>
    </nav>
    <Styled.List>
      <li>
        <Link href="https://www.facebook.com" passHref>
          <Styled.SocialLink>
            <FacebookIcon />
          </Styled.SocialLink>
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com" passHref>
          <Styled.SocialLink>
            <InstagramIcon />
          </Styled.SocialLink>
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com" passHref>
          <Styled.SocialLink>
            <TwitterIcon />
          </Styled.SocialLink>
        </Link>
      </li>
      <li>
        <Link href="https://www.pinterest.com" passHref>
          <Styled.SocialLink>
            <PinterestIcon />
          </Styled.SocialLink>
        </Link>
      </li>
    </Styled.List>
  </Styled.Footer>
);

export default Footer;
