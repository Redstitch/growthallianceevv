import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { pageColor } from '../../js/autoColor';
import { colors } from '../../styles/utilities/settings';
import { below, above } from '../../styles/utilities/mediaQueries';
import BackgroundImage, { SBackgroundImage } from '../atoms/BackgroundImage';

const  { GATSBY_CMS } = process.env;

const Card = ({ content, color, link, image, newTab, pageLink }) => (
  <>
    {newTab ? (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <SCard color={color}>
          <BackgroundImage
            src={image || content.acf.main_image}
            size="small_size"
          />
          <h5
            dangerouslySetInnerHTML={{
              __html: `${content.title}<span>Read More</span>`,
            }}
          />
        </SCard>
      </a>
    ) : (
      <Link to={pageLink ? pageLink.replace(GATSBY_CMS, '') : link}>
        <SCard color={color}>
          <BackgroundImage
            src={image || content.acf.main_image}
            size="small_size"
          />
          <h5
            dangerouslySetInnerHTML={{
              __html: `${content.title}<span>Read More</span>`,
            }}
          />
        </SCard>
      </Link>
    )}
  </>
);

export default Card;

export const SCard = styled.div`
  position: relative;
  overflow-x: hidden;
  text-align: left;

  ${SBackgroundImage} {
    height: 300px;
  }

  h5 {
    color: ${colors.white};
    padding: 20px 30px;
    position: relative;
    top: -20px;
    background-color: ${({ color }) =>
      color ? pageColor(color) : colors.navy};

    ${above.ipadPort`
      width: 101%;
      left: 50%;
      transform: translateX(-50%);
    `}

    ${below.ipadPort`
      padding: 20px 30px;
    `}

    span {
      display: block;
      font-size: 12px;
    }
  }
`;
