import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import MapMarker from '../atoms/MapMarker';
import { below } from '../../styles/utilities/mediaQueries';

const { GATSBY_GOOGLE_MAP_API } = process.env;

class GoogleMap extends Component {
  render() {
    const { location } = this.props;
    return (
      <SGoogleMap>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GATSBY_GOOGLE_MAP_API }}
          center={[parseFloat(location.lat, 0), parseFloat(location.lng, 0)]}
          zoom={16}
          yesIWantToUseGoogleMapApiInternals
        >
          <MapMarker
            lat={parseFloat(location.lat, 0)}
            lng={parseFloat(location.lng, 0)}
          />
        </GoogleMapReact>
      </SGoogleMap>
    );
  }
}

export default GoogleMap;

const SGoogleMap = styled.div`
  ${below.ipadLand`
    height: 100vh;
  `}
`;
