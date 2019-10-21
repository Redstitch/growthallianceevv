import React from 'react';
import {
  Shape1, Shape2, Shape3, Shape4,
} from '../atoms/Shapes';
import ItemWImage from '../../styles/molecules/ItemWImage';
import BackgroundImage from '../atoms/BackgroundImage';

const TeamMember = ({ content, index }) => (
  <ItemWImage isVisible color={content.acf.color} team>
    <div className="image">
      <BackgroundImage src={content.acf.main_image} size="x_small_size" />
      {index && ((index + 1) % 2 === 0) ? (
        <>
          {(index + 1) % 4 === 0 ? <Shape4 /> : <Shape1 />}
        </>
      ) : (
        <>
          {(index + 1) % 3 === 0 ? <Shape3 /> : <Shape2 />}
        </>
      )}
    </div>
    <div className="content">
      <h4>{content.title}</h4>
      <p className="title">
        {content.acf.title}
        <br />
        <a href={`mailto:${content.acf.email}`}>{content.acf.email}</a>
      </p>
      <div
        className="copy"
        dangerouslySetInnerHTML={{
          __html: content.acf.description,
        }}
      />
    </div>
  </ItemWImage>
);

export default TeamMember;
