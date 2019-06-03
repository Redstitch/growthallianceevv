import React, { Component } from 'react';
import styled from 'styled-components';
import MenuItem from '../atoms/MenuItem';
import { above } from '../../styles/utilities/mediaQueries';
import { colors } from '../../styles/utilities/settings';


export const NavContext = React.createContext();

class Menu extends Component {
  state = {
    subNavIndex: undefined,
  }

  setSubNavIndex(num, subNavIndex) {
    let i = num;
    if (num === subNavIndex) {
      i = undefined;
    }
    return i;
  }

  pageColorEval(itemId, pages) {
    if (pages) {
      for (let i = 0; i < pages.length; i += 1) {
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
    const {
      subNavIndex,
    } = this.state;
    return (
      <NavContext.Provider value={{
        subNavIndex,
        updateSubNavIndex: num => this.setState({
          subNavIndex: this.setSubNavIndex(num, subNavIndex),
        }),
      }}
      >
        {content.edges.map(({ node }) => node.slug === menuTitle
        && (
          <SMenu key={node.id} styles={styles}>

            <ul>
              {node.items.map((item, index) => (
                <MenuItem key={index + item.object_id} itemIndex={index} content={item} pageColor={this.pageColorEval(item.object_id, pages)} />
              ))}
            </ul>
          </SMenu>
        ))}
      </NavContext.Provider>
    );
  }
}

export default Menu;

const SMenu = styled.nav`
  ul {
    list-style: none;
    padding: 0;

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
