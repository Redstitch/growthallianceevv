import React from 'react';
import { NavContext } from '../molecules/Menu';
import MenuLink from './MenuLink';

const MenuItem = ({ content, pageColor, itemIndex }) => (
  <NavContext.Consumer>
    {context => (
      <li
        className={
          context.subNavIndex === itemIndex
            ? `subnav-open ${pageColor}`
            : pageColor
        }
      >
        <MenuLink
          content={content}
          itemIndex={itemIndex}
          linkChildren={content.wordpress_children}
        />
        {content.wordpress_children && (
          <ul className="sub-nav">
            {content.wordpress_children.map(child => (
              <li key={child.object_id}>
                <MenuLink content={child} />
              </li>
            ))}
          </ul>
        )}
      </li>
    )}
  </NavContext.Consumer>
);

export default MenuItem;
