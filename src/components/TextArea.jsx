import styled from 'styled-components';

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  margin: 0.2rem 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #b4b2b5;
  flex-grow: 1;
  &:focus {
    border: 1px solid #61cdb3;
  }
`;
