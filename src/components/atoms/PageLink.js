import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

const PageLink = ({ content }) => (
  <StaticQuery
    query={PAGELINK_QUERY}
    render={({ site: { siteMetadata: { siteUrl, siteCms } } }) => (
      <>
        {content.new_tab ? (
          <a href={content.url} rel="noopener noreferrer" target="_blank">
            {content.copy}
          </a>
        ) : (
          <>
            <Link to={content.page.split(siteUrl || siteCms)[1]}>{content.copy}</Link>
          </>
        )}
      </>
    )}
  />
);

export default PageLink;

const PAGELINK_QUERY = graphql`{
  site {
    siteMetadata {
      siteUrl
      siteCms
    }
  }
}`;
