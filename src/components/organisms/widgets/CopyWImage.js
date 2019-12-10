import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import { above } from '../../../styles/utilities/mediaQueries';
import Image from '../../atoms/Image';

const CopyWImage = ({ widget, color }) => (
  <Wrapper medium>
    <SCopyWImage>
      <h3>{widget.heading_copy}</h3>
      {widget.blocks.map((block, index) => (
        <div className="block" key={`block${index}`} color={color}>
          <div className="image">
            <Image src={block.image} alt={widget.heading_copy} />
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
  max-width: 850px;
  margin: 125px auto;

  .block {
    ${above.ipadLand`
      display: flex;
      align-items: flex-start;
    `}

    + .block {
      margin-top: 35px;
    }
  }

  h3 {
    text-align: center;
    color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
    margin-bottom: 35px;
    font-size: 45px;
  }

  p {
    font-size: 15px;
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
      margin-left: 20px;
    `}

    h1, h2, h3, h4, h5, h6, a, strong {
      color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
    }
  }
`;
