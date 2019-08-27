import React from 'react';

const RawCode = ({ widget: { code } }) => (
  <div dangerouslySetInnerHTML={{
    __html: code,
  }}
  />
);

export default RawCode;
