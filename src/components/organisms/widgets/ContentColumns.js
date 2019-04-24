import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { Link } from 'gatsby';
import Wrapper from '../../../styles/utilities/Wrapper';
import { WideAngle } from '../../atoms/Shapes';
import Globe from '../../atoms/Globe';
import GlobeBar from '../../../styles/organisms/GlobeBar';
import urlFixer from '../../../js/urlFixer';

class ContentColumns extends Component {
  state = {
    isVisible: false,
  }

  render() {
    const { widget, color, order } = this.props;
    const { isVisible } = this.state;
    return (
      <VisibilitySensor
        onChange={(e) => {
          if (e === true) {
            this.setState(() => ({
              isVisible: true,
            }));
          }
        }}
        partialVisibility={order !== 0}
      >
        <GlobeBar columns color={color} alignment="right" backgroundColor={widget.background_color} isVisible={isVisible} padTop={widget.heading_copy}>
          <div className="bar">
            <WideAngle />
            <WideAngle />
          </div>
          <Globe rotation="100deg" />
          <Wrapper wide>
            {widget.heading_copy && <h2>{widget.heading_copy}</h2>}
            <div className="inner">
              {widget.columns.map((column, index) => (
                <div className="column" key={column.heading + index}>
                  {column.heading && <h4>{column.heading}</h4>}
                  <p>{column.copy}</p>
                  <Link to={urlFixer(column.button.url)}>
                    {column.button.copy}
                  </Link>
                </div>
              ))}
            </div>
          </Wrapper>
        </GlobeBar>
      </VisibilitySensor>
    );
  }
}

export default ContentColumns;
