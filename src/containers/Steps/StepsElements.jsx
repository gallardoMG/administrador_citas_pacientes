import styled from 'styled-components';

export const WrapperSteps = styled.section`
  position: absolute;
  width: 90%;
  top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 2rem;
  background-color: whitesmoke;
  @media screen and (min-width: 800px) {
    width: 80%;
  }
  &::before {
    content: '';
    width: 100%;
    height: 4px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: #b6b6b6;
  }
  &::after {
    content: '';
    width: ${({ state }) => {
      switch (state) {
        case 'active1':
          return '0';
        case 'active2':
          return '50%';
        case 'active3':
          return '100%';
        default:
          return 'none';
      }
    }};
    transition: width 1s cubic-bezier(0, 1.04, 0.81, 0.94);
    height: 4px;
    top: calc(1rem - 2px);
    position: absolute;
    background-color: #2b9191;
  }
`;
export const Step = styled.div`
  display: grid;
  align-content: center;
  justify-content: ${({ number }) => {
    switch (number) {
      case '1':
        return 'flex-start';
      case '2':
        return 'center';
      case '3':
        return 'flex-end';
      default:
        return 'center';
    }
  }};
`;

export const Circle = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  transform: ${({ state }) => (state === 'active' ? 'scale(1.4)' : 'none')};
  background-color: ${({ state }) =>
    state === 'active' ? '#2b9191' : '#b6b6b6'};
  border-radius: 50%;
  z-index: 1;
  color: ${({ state }) => (state === 'active' ? 'white' : '#dadada')};
  color: white;
  transition: background 0.3s, transform 0.3s;
  transition-delay: 600ms;
  display: grid;
  place-content: center;
`;
