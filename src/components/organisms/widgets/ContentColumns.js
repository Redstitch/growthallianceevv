import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import Wrapper from '../../../styles/utilities/Wrapper';
import { WideAngle } from '../../atoms/Shapes';
import Globe from '../../atoms/Globe';
import GlobeBar from '../../../styles/organisms/GlobeBar';
import PageLink from '../../atoms/PageLink';

class ContentColumns extends Component {
  state = {
    isVisible: false,
  };

  render() {
    const { widget, color, order } = this.props;
    const { isVisible } = this.state;
    return (
      <VisibilitySensor
        onChange={e => {
          if (e === true) {
            this.setState(() => ({
              isVisible: true,
            }));
          }
        }}
        partialVisibility={order !== 0}
      >
        <GlobeBar
          withButton={widget.footer_button.copy}
          columns
          color={color}
          alignment="right"
          backgroundColor={widget.no_color ? 'blank' : widget.background_color}
          isVisible={isVisible}
          padTop={widget.heading_copy && false}
        >
          {!widget.no_color && (
            <div className="bar">
              <WideAngle />
              <WideAngle />
            </div>
          )}
          <Globe rotation="100deg" />
          <Wrapper
            wide={widget.columns.length >= 3 && true}
            medium={widget.columns.length < 3 && true}
          >
            {widget.heading_copy && <h2>{widget.heading_copy}</h2>}
            <div
              className="inner"
              style={{
                textAlign: widget.column_alignment && widget.column_alignment,
              }}
            >
              {widget.columns.map((column, index) => (
                <div className="column" key={column.heading + index}>
                  {column.heading && <h4>{column.heading}</h4>}
                  {column.large_subhead && <h5>{column.large_subhead}</h5>}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: column.copy,
                    }}
                  />
                  {column.button.copy && <PageLink content={column.button} />}
                </div>
              ))}
            </div>
            <div
              className="button"
              style={{
                textAlign: widget.column_alignment && widget.column_alignment,
              }}
            >
              {widget.footer_button.copy && (
                <PageLink content={widget.footer_button} />
              )}
            </div>
          </Wrapper>
        </GlobeBar>
      </VisibilitySensor>
    );
  }
}

export default ContentColumns;
