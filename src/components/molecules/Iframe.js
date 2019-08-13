import React from 'react';

export function iframeLoaded() {
  const iFrameID = global.document.getElementById('dynamicIframe');
  if (iFrameID) {
    iFrameID.height = '';
    iFrameID.height = `${iFrameID.contentWindow.document.body.scrollHeight}px`;
  }
}

const Iframe = ({ src, title }) => (
  <iframe
    title={title}
    height="160px"
    src={src}
    id="dynamicIframe"
  />
);

export default Iframe;
