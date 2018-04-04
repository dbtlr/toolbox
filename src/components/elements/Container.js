
import styled from 'styled-components';

const Container = styled.div.attrs({ className: 'container' })`
  padding: 0 1rem;
  max-width: 100vw;
  
  &.centered {
    text-align: center;
  }
  
  @media screen and (min-width: 780px) {
    max-width: 720px;
    margin: 0 auto;
    
    &.full {
      width: 100vw;
      max-width: 100%
    }
  }
`;

export default Container;
