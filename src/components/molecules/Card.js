import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { pageColor } from '../../js/autoColor';
import { colors } from '../../styles/utilities/settings';
import { below } from '../../styles/utilities/mediaQueries';
import ImageLoader from '../atoms/ImageLoader';

const Card = ({
  content, color, link, image,
}) => (
  <Link to={link}>
    <SCard color={color}>
      {console.log(content)}
      <ImageLoader content={image || content.acf.main_image} />
      <h5 dangerouslySetInnerHTML={{
        __html: `${content.title}<span>Read More</span>`,
      }}
      />
    </SCard>
  </Link>
);

export default Card;

export const SCard = styled.div`
  position: relative;
  overflow-x: hidden;
  text-align: left;

  


  h5 {
    color: ${colors.white};
    padding: 20px 30px;
    position: relative;
    top: -20px;
    width: 101%;
    background-color: ${({ color }) => (color ? pageColor(color) : colors.navy)};

    ${below.ipadPort`
      padding: 20px 30px;
    `}

    span {
      display: block;
      font-size: 12px;
    }
  }
`;
