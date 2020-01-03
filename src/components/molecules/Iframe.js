import React from 'react';

export function iframeLoaded() {
  const iFrameID = global.document.getElementById('dynamicIframe');
  if (iFrameID) {
    iFrameID.height = '';
    iFrameID.height = `${iFrameID.contentWindow.document.body.scrollHeight}px`;
  }
}

const Iframe = ({ width, height, src, title }) => (
  <iframe
    title={title}
    width={width || '100%'}
    height={height || '350px'}
    src={src}
    id="dynamicIframe"
  />
);

export default Iframe;
