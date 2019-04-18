import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from '../atoms/MenuItem';
import { above } from '../../styles/utilities/mediaQueries';

class Menu extends Component {
  pageColorEval(itemId, pages) {
    if (pages) {
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i].node;
        if (itemId === page.wordpress_id) {
          return page.acf.page_color;
        }
      }
    }
    return '';
  }

  render() {
    const {
      content,
      pages,
      menuTitle,
      styles,
    } = this.props;
    return (
      content.edges.map(({ node }) => node.slug === menuTitle
      && (
        <SMenu styles={styles}>
          <ul key={node.id}>
            {node.items.map(item => (
              <MenuItem content={item} pageColor={this.pageColorEval(item.object_id, pages)} />
            ))}
          </ul>
        </SMenu>
      ))
    );
  }
}

export default Menu;

const SMenu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: none;

    ul.sub-nav {
      /* display: none; */
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
