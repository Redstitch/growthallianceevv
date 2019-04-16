import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from './atoms/imgix/Image';
import Wrapper from '../styles/utilities/Wrapper';
import Menu from './molecules/Menu';
import { SMenuLink } from './atoms/MenuLink';
import { colors } from '../styles/utilities/settings';
import { fonts } from '../styles/utilities/fonts';

const Header = () => (
  <StaticQuery
    query={HEADER_QUERY}
    render={data => (
      <SHeader>
        <Wrapper>
          <Link to="/" className="logo">
            <Image
              src={data.wordpressAcfOptions.options.logo.url}
              maxWidth={160}
              minWidth={160}
            />
          </Link>
          <div className="navigation">
            <Menu content={data.allWordpressWpApiMenusMenusItems} styles={topNav} menuTitle="top-nav" />
            <Menu content={data.allWordpressWpApiMenusMenusItems} menuTitle="main-menu" />
          </div>
        </Wrapper>
      </SHeader>

    )}
  />
);

export default Header;

const HEADER_QUERY = graphql`{
  wordpressAcfOptions {
    options {
      logo {
        url
      }
    }
  }
  allWordpressWpApiMenusMenusItems {
    edges {
      node {
        id
        slug
        items {
          type
          wordpress_id
          title
          url
          classes
          target
          wordpress_children {
            type
            wordpress_id
            title
            url
            classes
            target
          }
        }
      }
    }
  }
}`;


const SHeader = styled.header`
  ${Wrapper} {
    display: flex;
    justify-content: space-between;
  }
  .logo {
    display: block;
    max-width: 160px;
  }
`;

const topNav = css`
  ${SMenuLink} {
    text-transform: uppercase;
    a {
      color: ${colors.darkerGray};
      font-size: 11px;
      ${fonts.HelveticaNeueMedium};
      margin-left: 50px;
      &:before {
        ${fonts.FontAwesome};
        margin-right: 10px;
      }
    }
  }
`;
