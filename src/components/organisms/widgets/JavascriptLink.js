import React, { Component } from 'react';
import { document } from 'browser-monads';

class JavascriptLink extends Component {
  componentDidMount() {
    const { widget: { source } } = this.props;

    const script = document.createElement('script');
    script.src = `${source}`;
    script.async = true;
    this.instance.appendChild(script);
  }

  render() {
    return (
      <div ref={(el) => { this.instance = el; }} className="iframe" />
    );
  }
}

export default JavascriptLink;
