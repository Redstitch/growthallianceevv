import React from 'react';
import styled from 'styled-components';

const Globe = ({ rotation }) => (
  <SGlobe angle={rotation}>
    <img src="/images/transparent-logo.png" alt="..." />
  </SGlobe>
);

export default Globe;

export const SGlobe = styled.div`
  position: absolute;
  z-index: 0;
  opacity: 0.7;

  img {
    transform: rotate(${({ angle }) => (angle && angle)});
  }
`;
