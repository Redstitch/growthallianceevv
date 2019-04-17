import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import urlFixer from '../../js/urlFixer';

const MenuLink = ({ content }) => (
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
        to={content.type === 'custom' ? content.url : urlFixer(content.url)}
        className={content.classes ? content.classes : null}
        dangerouslySetInnerHTML={{
          __html: content.title,
        }}
      />
    )}
  </SMenuLink>
);

export default MenuLink;

export const SMenuLink = styled.span`
  display: block;

  a {
    display: block;
    text-decoration: none;
  }
`;
