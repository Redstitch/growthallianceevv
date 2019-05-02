import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import urlFixer from '../../js/urlFixer';
import { button } from '../../styles/utilities/elements';

const WidgetFooter = ({ content }) => (
  <SWidgetFooter>
    {content.footer.copy && <p>{content.footer.copy}</p>}
    {content.footer.button.link
      && (
      <Link to={urlFixer(content.footer.button.link)}>
        {content.footer.button.copy}
      </Link>
      )
    }
  </SWidgetFooter>
);

export default WidgetFooter;

const SWidgetFooter = styled.div`
  a {
    ${button}
  }
`;
