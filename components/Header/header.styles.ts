import styled, { css } from 'styled-components';

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
  width: 100%;
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 34px 48px;
  }
`;

const Navigation = styled.nav`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: block;
  }
`;

const List = styled.ul`
  display: flex;
`;

const ListItemLink = styled.a<{ isContact?: boolean }>`
  display: block;
  padding: 16px 24px;
  transition: background-color 0.15s;
  color: ${({ theme }) => theme.color.text.light};
  position: relative;

  ${({ isContact, theme }) =>
    isContact
      ? css`
          font-family: ${theme.font.family.fraunces}, 'sans-serif';
          background: ${theme.color.common.white};
          color: ${theme.color.text.dark};
          border-radius: 30px;
          margin-left: 25px;

          :hover {
            background-color: ${theme.color.action.button};
            color: ${theme.color.text.light};
          }
        `
      : css`
          ::after {
            content: '';
            position: absolute;
            height: 5px;
            left: 5%;
            bottom: 0;
            width: 90%;
            background-color: white;
            border-radius: 10px;
            transition: transform 0.15s;
            transform-origin: right center;
            transform: scaleX(0);
          }

          :hover::after {
            transform: scaleX(1);
            transform-origin: left center;
          }
        `}
`;

const MenuButton = styled.button<{ isOpen: boolean }>`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 5px;
  transition: opacity 0.15s;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 0.5;
    `}
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    display: none;
  }
`;

const Styled = {
  Header,
  Container,
  Navigation,
  List,
  ListItemLink,
  MenuButton,
};

export default Styled;
