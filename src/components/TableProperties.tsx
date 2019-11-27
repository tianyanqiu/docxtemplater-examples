import React from 'react';

const TableProperties: React.SFC = ({ children }) => {
  return React.createElement('w:tblPr', {}, children);
};

export default TableProperties;
