import React from 'react';

const TableProperties: React.SFC = ({ children }) => {
  return React.createElement('w:tblPr', null, children);
};

export default TableProperties;
