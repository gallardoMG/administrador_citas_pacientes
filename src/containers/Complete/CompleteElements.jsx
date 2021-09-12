import styled from 'styled-components';
export const WrapperContainer = styled.article`
  height: 100vh;
  background-color: whitesmoke;
  padding: 0 1rem;
  width: 95%;
  @media screen and (min-width: 800px) {
    width: 80%;
  }
`;
export const Done = styled.div`
  font-size: 1.8rem;
  color: #43b99c;
  font-weight: 400;
  letter-spacing: 0.1rem;
  word-spacing: 0.1rem;
  text-align: center;
  padding: 2rem 0;
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Table = styled.table`
  width: 100%;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #eee0e0;
  }
  &:nth-child(odd) {
    background-color: #dae2e2;
  }
`;
export const Th = styled.th`
  background-color: #b8d0d8;
  &:last-child {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &:first-child {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    height: 2rem;
  }
`;
export const Td = styled.td`
  &:last-child {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &:first-child {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }
`;
