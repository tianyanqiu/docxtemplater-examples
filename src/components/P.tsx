import React from 'react';

const P: React.SFC<{}> = ({ children, ...rest }) => {
  return React.createElement('w:p', rest, children);
};

export default P;
