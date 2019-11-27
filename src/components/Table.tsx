import React from 'react';

const Table: React.SFC = ({ children }) => {
  return React.createElement('w:tbl', {}, children);
};

export default Table;
