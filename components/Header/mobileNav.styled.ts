import styled, { css } from 'styled-components';

const Navigation = styled.div`
  position: absolute;
  top: 105px;
  right: 24px;
  width: 100%;
  max-width: 300px;
  background: ${({ theme }) => theme.color.background.primary};
  padding: 30px 15px;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.md - 1}px) {
    :after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      right: 0;
      top: -24px;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
      background: ${({ theme }) => theme.color.background.primary};
    }
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItemLink = styled.a<{ isContact?: boolean }>`
  display: block;
  padding: 16px 24px;
  transition: background-color 0.15s;
  color: ${({ theme }) => theme.color.text.grey.link};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    color: ${({ theme }) => theme.color.text.light};
  }

  ${({ isContact, theme }) =>
    isContact
      ? css`
          font-family: ${theme.font.family.fraunces}, 'sans-serif';
          background: ${theme.color.background.yellow};
          color: ${theme.color.text.dark};
          border-radius: 30px;
          padding: 16px 32px;
          margin-top: 16px;

          :hover {
            background-color: ${theme.color.action.buttonYellow};
          }
        `
      : css`
          :hover {
            text-decoration: underline;
          }
        `}
`;

const Styled = {
  Navigation,
  List,
  ListItemLink,
};

export default Styled;
