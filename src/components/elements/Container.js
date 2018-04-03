
import styled from 'styled-components';

const Container = styled.div.attrs({ className: 'container' })`
  max-width: 780px;
  margin: 0 auto;
  
  &.centered {
    text-align: center;
  }
`;

export default Container;
