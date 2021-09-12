import styled from 'styled-components';

export const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: ${({ type }) => (type === 'describe' ? 'column' : 'initial')};
  color: #575757;
`;
