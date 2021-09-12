import styled from 'styled-components';

export const Text = styled.p`
  font-size: ${({ type }) => {
    switch (type) {
      case 'title':
        return '1.8rem';
      case 'subtitle':
        return '1.4rem';
      default:
        return '1.2rem';
    }
  }};
  border-bottom: ${({ type }) => {
    switch (type) {
      case 'title':
        return '1px solid   #60bca1  ';
      case 'subtitle':
        return '1px solid   #5490c2  ';
      case 'link':
        return '1px solid   #5490c2  ';
      default:
        return 'none';
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case 'title':
        return '#60bca1';
      case 'subtitle':
        return '#5490c2 ';
      case 'link':
        return '#5490c2 ';
      default:
        return '#444444;';
    }
  }};
  width: ${({ type }) => (type === 'input' ? '5rem' : 'initial')};
  @media screen and (min-width: 800px) {
    cursor: ${({ type }) => (type === 'link' ? 'pointer' : 'none')};
  }
`;
