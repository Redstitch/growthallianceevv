import React from 'react';
import styled from 'styled-components';
import MenuLink from '../atoms/MenuLink';
import { above } from '../../styles/utilities/mediaQueries';

const Menu = ({ content, menuTitle, styles }) => content.edges.map(({ node }) => node.slug === menuTitle
  && (
  <SMenu styles={styles}>
    <ul key={node.id}>
      {node.items.map(item => (
        <li key={item.wordpress_id}>
          <MenuLink content={item} />
          {item.wordpress_children
            && (
            <ul>
              {item.wordpress_children.map(child => (
                <li key={child.wordpress_id}>
                  <MenuLink content={child} />
                </li>
              ))}
            </ul>
            )
          }
        </li>
      ))}
    </ul>
  </SMenu>
  ));

export default Menu;

const SMenu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: none;

    ul {
      display: none;
    }
  }

  > ul {
    ${above.ipadPort`
      display: flex;
      justify-content: flex-end;
    `}
  }

  ${({ styles }) => (styles && styles)};
`;
