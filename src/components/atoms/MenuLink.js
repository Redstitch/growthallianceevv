import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import { NavContext } from '../molecules/Menu';


const MenuLink = ({ content, linkChildren, itemIndex }) => (
  <StaticQuery
    query={SITEURL_QUERY}
    render={({ site: { siteMetadata: { siteCms } } }) => (
      <NavContext.Consumer>
        {context => (
          <SMenuLink>
            {content.target === '_blank' ? (
              <a
                href={content.url}
                target="_blank"
                rel="noopener noreferrer"
                className={content.classes ? content.classes : null}
                dangerouslySetInnerHTML={{
                  __html: content.title,
                }}
              />
            ) : (
              <Link
                to={content.type === 'custom' ? content.url : content.url.split(siteCms)[1]}
                className={content.classes ? content.classes : null}
                dangerouslySetInnerHTML={{
                  __html: content.title,
                }}
              />
            )}
            {linkChildren
            && (
              <a href={null} className="toggle-subnav" onClick={() => { context.updateSubNavIndex(itemIndex); }}>
                <span />
                <span />
              </a>
            )}
          </SMenuLink>
        )}
      </NavContext.Consumer>
    )}
  />
);

export default MenuLink;

export const SMenuLink = styled.span`
  display: block;

  a {
    display: block;
    text-decoration: none;
  }
`;

const SITEURL_QUERY = graphql`{
  site {
    siteMetadata {
      siteCms
    }
  }
}`;
