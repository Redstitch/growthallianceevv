import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import RichText from './RichText';
import { button } from '../../../styles/utilities/elements';
import { colors } from '../../../styles/utilities/settings';
import { above, below } from '../../../styles/utilities/mediaQueries';


class TabbedContent extends Component {
  state = {
    activeIndex: 0,
  }

  render() {
    const { widget } = this.props;
    const { activeIndex } = this.state;
    return (
      <Wrapper>
        <STabbedContent>
          <ul>
            {widget.tabs.map((tab, index) => (
              <li key={`tab${index}`}>
                <a
                  href={null}
                  onClick={() => {
                    this.setState(() => ({
                      activeIndex: index,
                    }));
                  }}
                >
                  {tab.button_text}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            <h3>{widget.tabs[activeIndex].title}</h3>
            <div dangerouslySetInnerHTML={{ __html: widget.tabs[activeIndex].copy }} />
          </div>
        </STabbedContent>
      </Wrapper>
    );
  }
}

export default TabbedContent;

const STabbedContent = styled.div`
  ${above.ipadPort`
    display: flex;
  `}
  ul {
    min-width: 25%;
    margin-right: 100px;
    ${below.ipadLand`
      margin-right: 50px;
    `}
    li {
      display: inline-block;
      margin: 10px;
      ${above.ipadPort`
        display: block;
        margin-bottom: 30px;
      `}
      a {
        cursor: pointer;
        ${button};
        background-color: ${colors.blue};
        text-align: center;
        padding: 20px;
        ${above.ipadPort`
          display: block;
        `}
      }

      &:nth-child(4n - 3) a {
        clip-path: polygon(4% 0, 100% 5%, 97% 93%, 0% 100%);
      }

      &:nth-child(4n - 2) a {
        clip-path: polygon(2% 3%,98% 6%,100% 94%,0 98%);
      }

      &:nth-child(4n - 1) a {
        clip-path: polygon(0 0, 100% 0, 98% 98%, 3% 100%);
      }
    }
  }
  h3 {
    color: ${colors.blue};
  }
`;
