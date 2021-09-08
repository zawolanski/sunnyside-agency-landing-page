import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  height: 375px;

  img {
    object-fit: cover;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}px) {
    grid-template-columns: repeat(4, 25%);
    height: 447px;
  }
`;

const Styled = {
  Grid,
};

export default Styled;
