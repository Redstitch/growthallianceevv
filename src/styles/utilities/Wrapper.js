import styled from 'styled-components';
import { wrap } from './layout';
import { breakpoints } from './settings';

const Wrapper = styled.div`
  ${wrap}
  ${props => (props.wide && `max-width: ${breakpoints.pageWidth + 200}px;`)}
  ${props => (props.narrow && `max-width: ${breakpoints.ipadPort}px;`)}
  ${props => (props.medium && `max-width: ${breakpoints.ipadLand}px;`)}
`;

export default Wrapper;
