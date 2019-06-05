import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import { above } from '../../../styles/utilities/mediaQueries';
import ImageLoader from '../../atoms/ImageLoader';

const CopyWImage = ({ widget, color }) => (
  <Wrapper medium>
    <SCopyWImage>
      <h2>{widget.heading_copy}</h2>
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
  padding-bottom: 100px;
  padding-top: 25px;
  max-width: 800px;
  margin: auto;

  .block {

    ${above.ipadLand`
      display: flex;
      align-items: flex-start;
    `}

    + .block {
      margin-top: 35px;
    }
  }

  h2 {
    text-align: center;
    color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
    margin-bottom: 35px;
  }

  p {
    font-size: 14px;
    line-height: 1.75;
    color: ${colors.darkerGray};
  }


  .image {
    width: 300px;
    margin-right: 20px;
  }

  .content {
    ${above.ipadLand`
      width: calc(100% - 300px);
      margin-top: 30px;
      margin-left: 20px;
    `}

    h1, h2, h3, h4, h5, h6, a, strong {
      color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
    }
  }
`;
