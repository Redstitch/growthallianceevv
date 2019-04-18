import React from 'react';
// import styled from 'styled-components';
import MenuLink from './MenuLink';

const MenuItem = ({ content, pageColor }) => (
  <li key={content.wordpress_id} className={pageColor}>
    <MenuLink content={content} />
    {content.wordpress_children
    && (
      <ul className="sub-nav">
        {content.wordpress_children.map(child => (
          <li key={child.wordpress_id}>
            <MenuLink content={child} />
          </li>
        ))}
      </ul>
    )
    }
  </li>
);

export default MenuItem;
