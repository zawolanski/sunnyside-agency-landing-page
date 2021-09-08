import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1110px;
  margin-bottom: 86px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 160px;
  }
`;

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 5px;
  font-size: 16px;
  margin-bottom: 80px;
  color: ${({ theme }) => theme.color.text.grey.light};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  font-family: ${({ theme }) => theme.font.family.fraunces};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 20px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    flex-direction: row;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto 64px;

  :last-of-type {
    margin: 0 auto;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    width: 33.33%;
    margin: 0 30px 0 0;

    :last-of-type {
      margin: 0;
    }
  }
`;

const Avatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin-bottom: 58px;
  overflow: hidden;
`;

const Comment = styled.p`
  margin-bottom: 70px;
  line-height: 32px;
  color: ${({ theme }) => theme.color.text.grey.dark};
`;

const Author = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.color.text.button};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  font-family: ${({ theme }) => theme.font.family.fraunces};
`;

const Position = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.color.text.grey.light};
`;

const Styled = {
  Container,
  Heading,
  Cards,
  Card,
  Avatar,
  Comment,
  Author,
  Position,
};

export default Styled;
