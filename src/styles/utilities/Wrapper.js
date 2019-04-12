import styled from 'styled-components';
import { wrap } from './layout';
import { breakpoints } from './settings';

const Wrapper = styled.div`
  ${wrap}
  ${props => (props.narrow && `max-width: ${breakpoints.ipadPort}px;`)}
`;

export default Wrapper;
