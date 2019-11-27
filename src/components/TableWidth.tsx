import React from 'react';

const TableWidth: React.SFC<{ width: number }> = ({ children, width }) => {
  return React.createElement(
    'w:tablW',
    {
      'w:w': `${width}`,
      'w:type': 'dxa',
    },
    children,
  );
};

export default TableWidth;
