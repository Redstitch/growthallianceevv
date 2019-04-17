import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Background } from 'react-imgix';
import urlFixer from '../../js/urlFixer';
import autoColor from '../../js/autoColor';
import { colors, breakpoints } from '../../styles/utilities/settings';
import { imageBG } from '../../styles/utilities/elements';
import { above, below } from '../../styles/utilities/mediaQueries';

const Column = ({ content, num }) => (
  <SColumn key={content.heading}>
    <Background
      src={content.image.url}
      imgixParams={{
        q: '100',
        blend: autoColor(num),
        balph: 70,
        bm: 'normal',
        w: breakpoints.pageWidth,
        h: 'auto',
      }}
    >
      <div className="content">
        <h2>{content.heading}</h2>
        <p>{content.copy}</p>
        <Link to={urlFixer(content.link)}>Learn More</Link>
      </div>
    </Background>
  </SColumn>
);

export default Column;

const SColumn = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-left: -1px;
  ${imageBG};

  ${above.ipadLand`
    transform: skew(4deg);
  `}

  ${below.ipadLand`
    transform: skewY(2deg);
  `}


  &:nth-of-type(3) {

    ${above.ipadLand`
      padding-left: 10%;
    `}

    ${below.ipadLand`
      margin-top: -15px;
    `}
  }

  &:nth-of-type(4) {

    a {
      &:hover {

        &:before {
          background-color: ${colors.orange};
        }
      }

      &:before {
        border-left-color: ${colors.orange};
      }
    }
  }

  &:nth-of-type(5) {

    a {
      &:hover {

        &:before {
          background-color: ${colors.darkerBlue};
        }
      }

      &:before {
        border-left-color: ${colors.darkerBlue};
      }
    }
  }

  &:last-of-type {

    ${above.ipadLand`
      padding-right: 10%;
    `}

    ${below.ipadLand`
      margin-bottom: -15px;
    `}
  }

  > div {
    height: 100%;

    ${above.ipadLand`
      margin: 0 -10%;
      transform: skew(-4deg);
    `}

    ${below.ipadLand`
      margin: -20px 0;
      transform: skewY(-2deg);
    `}
  }
`;
