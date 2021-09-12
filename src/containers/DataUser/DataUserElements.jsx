import styled from 'styled-components';

export const Form = styled.form`
  background-color: whitesmoke;
  height: 100vh;
  display: grid;
  align-content: center;
  padding: 0 1rem;
  width: 95%;
  @media screen and (min-width: 800px) {
    width: 35rem;
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;
