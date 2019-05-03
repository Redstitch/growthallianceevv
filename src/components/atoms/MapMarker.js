import React from 'react';
import { colors } from '../../styles/utilities/settings';

const MapMarker = () => (
  <i
    style={{
      color: `${colors.orange}`,
      fontSize: '40px',
      position: 'absolute',
      bottom: '0px',
      left: '50%',
      transform: 'translateX(-50%)',
    }}
    className="fa fa-map-marker"
  />
);

export default MapMarker;
