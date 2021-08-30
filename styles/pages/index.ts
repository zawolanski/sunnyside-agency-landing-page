import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 20px;
`;

export const Header = styled.h1`
  font-size: 55px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  letter-spacing: 1.5px;
  margin-bottom: 40px;
`;

export const ListHeader = styled.h2`
  font-size: 35px;
  margin: 20px 0;
`;

export const List = styled.ul<{ isCircle?: boolean }>`
  list-style: ${({ isCircle }) => isCircle && 'circle'};
`;

export const ListItem = styled.li`
  padding: 5px 10px;
  font-size: 18px;
`;

export const Code = styled.li`
  padding-left: 40px;
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: ${({ theme }) => theme.radius}px;
  font-family: ${({ theme }) => theme.font.family.sourceCode};
  font-weight: ${({ theme }) => theme.font.weight.light};
  padding: 15px;
  margin-bottom: 15px;
`;
