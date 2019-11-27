import React from 'react';

const TableCell: React.SFC = ({ children }) => {
  return React.createElement('w:tc', {}, children);
};

export default TableCell;
