import React from 'react';
import { Link } from 'gatsby';

const PageLink = ({ content }) => (
  <>
    {content.new_tab ? (
      <a href={content.url} rel="noopener noreferrer" target="_blank">
        {content.copy}
      </a>
    ) : (
      <Link to={content.page}>{content.copy}</Link>
    )}
  </>
);

export default PageLink;
