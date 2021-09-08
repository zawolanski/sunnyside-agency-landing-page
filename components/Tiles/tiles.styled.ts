import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1440px;
  margin: 0 auto;
  margin-bottom: 64px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    margin-bottom: 160px;
    grid-template-columns: repeat(2, 50%);
  }
`;

const ImageContainer = styled.div<{ order: number; topHeight?: boolean }>`
  height: ${({ topHeight }) => (topHeight ? '600px' : '330px')};
  order: ${({ order }) => order};
  position: relative;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xs}px) {
    height: ${({ topHeight }) => (topHeight ? '600px' : '450px')};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 600px;
    order: 0;
  }

  > div:first-of-type {
    height: 100%;
  }

  img {
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
  }
`;

const ImageContent = styled.div<{ textColor: 'green' | 'blue' }>`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    font-family: ${({ theme }) => theme.font.family.fraunces};
    color: ${({ theme, textColor }) => theme.color.text.photography[textColor].dark};
    margin-bottom: 30px;
    font-family: ${({ theme }) => theme.font.family.fraunces};
    font-weight: ${({ theme }) => theme.font.weight[900]};
    letter-spacing: -0.2px;
    font-size: 28px;
  }

  p {
    color: ${({ theme, textColor }) => theme.color.text.photography[textColor].normal};

    letter-spacing: -0.15px;
    line-height: 27px;
  }
`;

const Section = styled.section<{ order: number }>`
  height: 440px;
  display: flex;
  align-items: center;
  order: ${({ order }) => order};
  padding: 64px 20px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 150px 75px;
    height: 600px;
    order: 0;

    div {
      display: block;
      text-align: left;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.xl}px) {
    padding: 150px;
  }
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.font.family.fraunces};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  font-size: 40px;
  margin-bottom: 32px;
  letter-spacing: -0.3px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.text.grey.normal};
  letter-spacing: -0.15px;
  margin-bottom: 32px;
`;

const Link = styled.a<{ underlineColor: 'red' | 'yellow' }>`
  font-family: ${({ theme }) => theme.font.family.fraunces};
  font-weight: ${({ theme }) => theme.font.weight[900]};
  color: ${({ theme }) => theme.color.text.dark};
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
  position: relative;
  width: fit-content;

  :hover::after {
    background-color: ${({ theme, underlineColor }) => theme.color.action.underline[underlineColor]};
  }

  ::after {
    transition: background-color 0.1s;
    content: '';
    position: absolute;
    bottom: -3px;
    left: -5%;
    height: 10px;
    width: 110%;
    border-radius: 5px;
    background-color: ${({ theme, underlineColor }) => theme.color.underline[underlineColor]};
    z-index: -1;
  }
`;

const Styled = {
  Grid,
  Section,
  ImageContainer,
  ImageContent,
  Heading,
  Paragraph,
  Link,
};

export default Styled;
