import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image';
import PageLink from '../../atoms/PageLink';
import Wrapper from '../../../styles/utilities/Wrapper';
import { pageColor } from '../../../js/autoColor';
import { colors } from '../../../styles/utilities/settings';
import { button } from '../../../styles/utilities/elements';
import { above, below } from '../../../styles/utilities/mediaQueries';


const ImageWText = ({ widget, color }) => (
  <SImageWText color={color}>
    <Wrapper medium>
      <div className="inner">
        <div className="image">
          <Image src={widget.image} size="middle_size" alt={widget.content.heading} />
        </div>
        <div className="copy">
          <h3>{widget.content.heading}</h3>
          <div dangerouslySetInnerHTML={{
            __html: widget.content.copy,
          }}
          />
          {widget.content.button.copy && <PageLink content={widget.content.button} /> }
        </div>
      </div>
    </Wrapper>
  </SImageWText>
);

export default ImageWText;

const SImageWText = styled.div`
  h3 {
    font-size: 45px;
    line-height: 1.1;
    color: ${({ color }) => (color ? pageColor(color) : colors.blue)};
  }
  .inner {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${above.ipadPort`
      flex-direction: row-reverse;
    `}

    > div {
      width: 50%;

      ${below.ipadPort`
        width: 100%;
      `}
    }

    .copy {
      color: ${colors.darkerGray};

      ${above.ipadPort`
        padding-right: 50px;
      `}

      > a {
        ${button};
      }
    }

    .image {

      ${above.ipadPort`
        max-width: 390px;
      `}

      ${below.ipadPort`
        margin-bottom: 50px;
      `}
    }
  }
`;
