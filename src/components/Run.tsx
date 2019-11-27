import React from 'react';

const Run: React.SFC<{}> = ({ children, ...rest }) => {
  return React.createElement('w:r', rest, children);
};

export default Run;
