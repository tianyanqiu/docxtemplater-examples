import React from 'react';

const TableCellShading: React.SFC<{ value: string; fill: string }> = ({
  children,
  value,
  fill,
}) => {
  return React.createElement(
    'w:shd',
    {
      'w:val': value,
      'w:fill': fill,
    },
    children,
  );
};

export default TableCellShading;
