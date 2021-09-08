import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 538px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    height: 800px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  > div {
    height: 100%;
  }

  img {
    object-fit: cover;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const HeadingContainer = styled.div`
  position: relative;
  z-index: 5;
  top: 150px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    top: 200px;
  }

  div {
    width: fit-content;
    display: block;
    margin: 0 auto;
    margin-top: 50px;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
      margin-top: 100px;
    }
  }
`;

export const Heading = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.color.text.light};
  text-transform: uppercase;
  font-size: 40px;
  font-weight: ${({ theme }) => theme.font.weight[900]};
  font-family: ${({ theme }) => theme.font.family.fraunces};
  padding: 0 25px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 56px;
  }
`;
