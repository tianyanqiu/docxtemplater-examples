import React from 'react';

const Text: React.SFC<{}> = ({ children, ...rest }) => {
  return React.createElement('w:t', rest, children);
};

export default Text;
