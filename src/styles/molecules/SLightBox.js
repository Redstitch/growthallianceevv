import styled from 'styled-components';
import { absoluteCenter } from '../utilities/elements';
import { colors } from '../utilities/settings';

const SLightBox = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${colors.blackOverlay};
  top: 0;
  left: 0;
  z-index: 100;

  .inner {
    ${absoluteCenter}
  }

  .gatsby-image-wrapper {
    max-width: 800px;
    max-height: 800px;

    img {
      object-fit: contain !important;
    }
  }
`;

export default SLightBox;
