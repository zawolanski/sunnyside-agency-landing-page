import styled from 'styled-components';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.color.background.footer};
  padding: 64px 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.a`
  margin-bottom: 40px;

  > svg * {
    fill: ${({ theme }) => theme.color.text.green.dark};
  }
`;

const List = styled.ul`
  display: flex;
  margin-bottom: 88px;

  li:last-of-type > a {
    margin: 0;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color.text.green.light};
  transition: color 0.15s;
  margin-right: 57px;

  :hover {
    color: ${({ theme }) => theme.color.text.light};
  }
`;

const SocialLink = styled.a`
  margin-right: 28px;
  cursor: pointer;

  svg * {
    transition: fill 0.15s;
  }

  :hover svg * {
    fill: ${({ theme }) => theme.color.text.light};
  }
`;

const Styled = {
  Footer,
  List,
  Link,
  SocialLink,
  LogoContainer,
};

export default Styled;
