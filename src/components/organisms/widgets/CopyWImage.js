import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import { above } from '../../../styles/utilities/mediaQueries';
import ImageLoader from '../../atoms/ImageLoader';

const CopyWImage = ({ widget, color }) => (
  <Wrapper narrow>
    <SCopyWImage>
      <h3>{widget.heading_copy}</h3>
      {widget.blocks.map((block, index) => (
        <div className="block" key={`block${index}`} color={color}>
          <div className="image">
            <ImageLoader content={block.image} />
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: block.copy,
            }}
          />
        </div>
      ))}
    </SCopyWImage>
  </Wrapper>
);

export default CopyWImage;

const SCopyWImage = styled.div`
  margin-bottom: 100px;

  .block {

    ${above.ipadLand`
      display: flex;
      align-items: flex-start;
    `}

    + .block {
      margin-top: 50px;
    }
  }

  h3 {
    text-align: center;
    color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
    margin-bottom: 30px;
  }


  .image {
    width: 300px;
  }

  .content {
    ${above.ipadLand`
      width: calc(100% - 300px);
      margin-top: 30px;
    `}

    h1, h2, h3, h4, h5, h6, a, strong {
      color: ${({ color }) => (color ? pageColor(color) : colors.navy)};
    }
  }
`;
