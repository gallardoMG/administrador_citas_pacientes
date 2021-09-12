import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  margin: 0.2rem 1rem;
  height: ${({ type }) => (type === 'radio' ? '1.5rem' : '2.2rem')};
  border-radius: 0.5rem;
  border: 1px solid #b4b2b5;
  flex-grow: ${({ type }) => (type !== 'radio' ? '1' : 'initial')};
  width: ${({ type }) => (type === 'radio' ? '1.5rem' : 'initial')};
  &:focus {
    border: 1px solid #61cdb3;
  }
`;
