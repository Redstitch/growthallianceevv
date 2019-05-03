import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../../../styles/utilities/Wrapper';
import { button } from '../../../styles/utilities/elements';
import { colors } from '../../../styles/utilities/settings';
import { above, below } from '../../../styles/utilities/mediaQueries';
import fonts from '../../../styles/utilities/fonts';


class TabbedContent extends Component {
  state = {
    activeIndex: 0,
    mobileSelectBox: 'closed',
  }

  render() {
    const { widget } = this.props;
    const { activeIndex, mobileSelectBox } = this.state;
    return (
      <Wrapper>
        <STabbedContent>
          <a
            className={mobileSelectBox === 'open' ? 'selectbox-toggle open' : 'selectbox-toggle'}
            href={null}
            onClick={() => {
              if (mobileSelectBox === 'closed') {
                this.setState(() => ({
                  mobileSelectBox: 'open',
                }));
              } else {
                this.setState(() => ({
                  mobileSelectBox: 'closed',
                }));
              }
            }}
          >
            {widget.tabs[activeIndex].button_text}
          </a>
          <ul className={mobileSelectBox}>
            {widget.tabs.map((tab, index) => (
              <li key={`tab${index}`}>
                <a
                  href={null}
                  onClick={() => {
                    this.setState(() => ({
                      activeIndex: index,
                      mobileSelectBox: 'closed',
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
  .selectbox-toggle {
    display: block;
    cursor: pointer;
    ${button};
    background-color: ${colors.blue};
    padding: 20px;
    width: 100%;
    &.open {
      &:after {
        transform: rotate(180deg);
      }
    }
    &:after {
      ${fonts.FontAwesome};
      content: '\f078';
      float: right;
    }
    ${above.ipadPort`
      display: none;
    `}
  }
  ul {
    min-width: 25%;
    margin-right: 100px;
    ${below.ipadLand`
      margin-right: 50px;
    `}
    ${below.ipadPort`
      padding-top: 5px;
      margin: -13px 20px 0;
      display: none;
      background-color: ${colors.lightBlue};
      &.open {
        display: block;
      }
    `}
    li {
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
        display: block;
        ${below.ipadPort`
        text-align: left;
          background-color: ${colors.lightBlue};
          color: ${colors.darkerGray};
        `}
      }
      ${above.ipadPort`
        &:nth-child(4n - 3) a {
          clip-path: polygon(4% 0, 100% 5%, 97% 93%, 0% 100%);
        }

        &:nth-child(4n - 2) a {
          clip-path: polygon(2% 3%,98% 6%,100% 94%,0 98%);
        }

        &:nth-child(4n - 1) a {
          clip-path: polygon(0 0, 100% 0, 98% 98%, 3% 100%);
        }
      `}
    }
  }
  ${below.ipadPort`
    .tab-content {
      margin-top: 30px;
    }
  `}
  h3 {
    color: ${colors.blue};
  }
`;
