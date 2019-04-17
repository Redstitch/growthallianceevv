import React from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from './atoms/imgix/Image';
import Wrapper from '../styles/utilities/Wrapper';
import Menu from './molecules/Menu';
import { SMenuLink } from './atoms/MenuLink';
import { colors } from '../styles/utilities/settings';
import { fonts } from '../styles/utilities/fonts';
import { above, below } from '../styles/utilities/mediaQueries';

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
            <Menu content={data.allWordpressWpApiMenusMenusItems} pages={data.allWordpressPage.edges} styles={mainNav} menuTitle="main-menu" />
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
  allWordpressPage {
    edges {
      node {
        wordpress_id
        acf {
          page_color
        }
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
          object_id
          title
          url
          classes
          target
          wordpress_children {
            type
            object_id
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
    max-width: none;
  }
  .logo {
    display: block;
    max-width: 160px;
  }
`;

const mainNav = css`
  ul {
    margin: 20px 0 0;
    li {
      position: relative;
      &:hover {
        ul.sub-nav {
          display: block;
        }
      }
    }
    ul.sub-nav {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      margin: 0;
      padding: 15px 0;
      background-color: ${colors.lightOrange};
      li {
        display: block;
        margin: 0;
        a {
          color: ${colors.darkerGray};
          ${fonts.HelveticaNeueRegular};
          padding: 15px 30px;
          ${below.widePageWidth`
            padding: 10px;
          `}
          &:hover {
            color: ${colors.white};
            background-color: ${colors.orange};
          }
        }
      }
    }
  }
  ${SMenuLink} {
    a {
      color: ${colors.darkBlue};
      font-size: 16px;
      ${fonts.HelveticaNeueBold};
      padding: 20px;
      ${below.widePageWidth`
        font-size: 14px;
        padding: 15px;
      `}
      ${below.pageWidth`
        font-size: 12px;
        padding: 10px;
      `}
      &:hover {
        color: ${colors.white};
        background-color: ${colors.orange};
      }
    }
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
