import styled from 'styled-components';

export const Button = styled.button`
  background-color: #61cdb3;
  background-color: ${({ type }) => {
    switch (type) {
      case 'delete':
        return ' #ee8474 ';
      case 'edit':
        return ' #97ce97 ';
      default:
        return '#61cdb3';
    }
  }};
  border: 1px solid transparent;
  color: white;
  width: ${({ type }) =>
    type !== 'edit' && type !== 'delete' ? '9rem' : '4rem'};
  height: 2.5rem;
  margin: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  font-size: ${({ type }) =>
    type !== 'edit' && type !== 'delete' ? '1rem' : '0.8rem'};
  @media screen and (min-width: 800px) {
    cursor: pointer;
  }
`;
