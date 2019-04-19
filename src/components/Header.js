import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Image from './atoms/imgix/Image';
import Wrapper from '../styles/utilities/Wrapper';
import Menu from './molecules/Menu';
import { SMenuLink } from './atoms/MenuLink';
import { colors, misc } from '../styles/utilities/settings';
import NavStyles from '../styles/molecules/NavStyles';
import fonts from '../styles/utilities/fonts';
import { above, below } from '../styles/utilities/mediaQueries';

class Header extends Component {
  state = {
    nav: 'closed',
  }

  toggleNavigation() {
    const classes = this.navToggle.getAttribute('class');
    const bodyEl = document.getElementsByTagName('body')[0];
    let navStatus = 'closed';
    if (classes.indexOf('open') === -1) {
      navStatus = 'open';
      bodyEl.classList.add('fixed');
    } else {
      bodyEl.classList.remove('fixed');
    }
    this.setState(() => ({
      nav: navStatus,
    }));
  }

  render() {
    const { nav } = this.state;
    return (
      <StaticQuery
        query={HEADER_QUERY}
        render={data => (
          <SHeader>
            <Wrapper>
              <div className="inner">
                <Link to="/" className="logo">
                  <Image
                    src={data.wordpressAcfOptions.options.logo.url}
                    maxWidth={160}
                    minWidth={160}
                  />
                </Link>
                <a
                  className={nav === 'open' ? `nav-toggle ${nav}` : 'nav-toggle'}
                  onClick={() => { this.toggleNavigation(); }}
                  ref={(ref) => { this.navToggle = ref; }}
                >
                  MENU
                  <span />
                  <span />
                  <span />
                </a>
              </div>
              <div className={nav === 'open' ? `navigation ${nav}` : 'navigation'} ref={(ref) => { this.navigation = ref; }}>
                <Menu content={data.allWordpressWpApiMenusMenusItems} pages={data.allWordpressPage.edges} styles={mainNav} menuTitle="main-menu" />
                <Menu content={data.allWordpressWpApiMenusMenusItems} styles={topNav} menuTitle="top-nav" />
              </div>
            </Wrapper>
          </SHeader>

        )}
      />
    );
  }
}

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
    ${below.ipadLand`
      height: 75px;
      background-color: ${colors.white};
      padding: 0px;
    `}
  }
  ${below.ipadLand`
    .inner {
      background-color: ${colors.white};
      width: 100%;
      position: relative;
      z-index: 99999;
      padding: 0 15px 0;
      clear: both;
    }
  `}
  .logo {
    display: block;
    max-width: 160px;
    margin-top: 25px;
    ${below.widePageWidth`
      margin-top: 11px;
    `}
    ${below.pageWidth`
      max-width: 120px;
      margin-top: 9px;
    `}
    ${below.ipadLand`
      max-width: 90px;
      margin-top: 17px;
      float: left;
    `}
  }
  .navigation {
    position: relative;
    ${below.ipadLand`
      transition-duration: ${misc.animSpeed};
      position: fixed;
      overflow: auto;
      top: -100%;
      left: 0;
      height: calc(100% - 75px);
      background-color: ${colors.white};
      width: 100%;
      z-index: 999;
      border-top: 2px solid ${colors.gray};
      &.open {
        top: 75px;
      }
    `}
  }
  .nav-toggle {
    position: relative;
    width: 25px;
    text-indent: 9999px;
    overflow: hidden;
    margin-top: 25px;
    height: 20px;
    ${below.ipadLand`
      float: right;
    `}
    &.open {
      span {
        transform: rotate(180deg);
        &:first-child, &:last-child {
          top: 8px;
        }
        &:first-child {
          transform: rotate(-45deg);
        }
        &:last-child {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          width: 0;
          left: 50%;
        }
      }
    }
    span {
      position: absolute;
      width: 25px;
      height: 4px;
      display: block;
      left: 0;
      background-color: ${colors.blue};
      transition-duration: ${misc.animSpeed};
      &:first-child {
        top: 0;
      }
      &:nth-child(2) {
        top: 8px;
      }
      &:last-child {
        top: 16px;
      }
    }
    ${above.ipadLand`
      display: none;
    `}
  }
`;

const mainNav = css`
  ${NavStyles};
  ul {
    margin: 65px 0 0;
    ${below.widePageWidth`
      margin: 45px 0 0;
    `}
    ${below.pageWidth`
      margin: 35px 0 0;
    `}
    ${below.ipadLand`
        display: block;
        margin: 0;
    `}
    li {
      ${below.ipadLand`
          width: 100%;
      `}
      &:last-child {
        ul.sub-nav {
          left: auto;
          right: 0;
        }
      }
      &.orange {
        ul.sub-nav { background-color: ${colors.lightOrange}; }
        ${below.ipadLand`& > ${SMenuLink} a { color: ${colors.orange}; }`}
        ${above.ipadLand`${SMenuLink} a:hover { color: ${colors.white}; background-color: ${colors.orange}; }`}
        .toggle-subnav span { background-color: ${colors.orange}; }
      }
      &.green {
        ul.sub-nav { background-color: ${colors.lightGreen}; }
        ${below.ipadLand`& > ${SMenuLink} a { color: ${colors.green}; }`}
        ${above.ipadLand`${SMenuLink} a:hover { color: ${colors.white}; background-color: ${colors.green}; }`}
        .toggle-subnav span { background-color: ${colors.green}; }
      }
      &.blue {
        ul.sub-nav { background-color: ${colors.lightBlue}; }
        ${below.ipadLand`& > ${SMenuLink} a { color: ${colors.blue}; }`}
        ${above.ipadLand`${SMenuLink} a:hover { color: ${colors.white}; background-color: ${colors.blue}; }`}
        .toggle-subnav span { background-color: ${colors.blue}; }
      }
      &.navy {
        ul.sub-nav { background-color: ${colors.lightNavy}; }
        ${below.ipadLand`& > ${SMenuLink} a { color: ${colors.navy}; }`}
        ${above.ipadLand`${SMenuLink} a:hover { color: ${colors.white}; background-color: ${colors.navy}; }`}
        .toggle-subnav span { background-color: ${colors.navy}; }
      }
      position: relative;
      ${above.ipadLand`
        &:hover {
          ul.sub-nav {
            display: block;
          }
        }
      `}
    }
  ${SMenuLink} {
    a {
      padding: 20px;
      ${below.widePageWidth`
        padding: 15px;
      `}
      ${below.pageWidth`
        padding: 10px;
      `}
      ${below.ipadLand`
        padding: 25px;
      `}
    }
  }
`;
const topNav = css`
  ${NavStyles};
  margin-top: 30px;
  position: absolute;
  right: 0;
  top: 0;
  ${below.widePageWidth`
    margin-top: 15px;
  `}
  ${below.ipadLand`
    position: relative;
    right: auto;
    top: auto;
  `}
  ul {
    ${below.ipadLand`
        display: block;
    `}
  }
  ${SMenuLink} {
    text-transform: uppercase;
    ${below.ipadLand`
      background-color: ${colors.gray};
      margin-bottom: 2px;
    `}
    a {
      color: ${colors.darkerGray};
      ${fonts.HelveticaNeueMedium};
      margin-left: 50px;
      ${above.ipadLand`
      font-size: 11px;
      `}
      ${below.ipadLand`
        padding: 25px;
        margin: 0;
      `}
      &:before {
        ${fonts.FontAwesome};
        margin-right: 10px;
        ${below.ipadLand`
            display: none;
            content: '';
        `}
      }
    }
  }
  ul.sub-nav a {
    background-color: ${colors.white};
  }
`;
