import React from 'react';
import { WidthUnit } from './types';

interface Props {
  width: string | number;
  type: WidthUnit;
}

const TableCellWidth: React.SFC<Props> = ({ children, width, type }) => {
  return React.createElement(
    'w:tcW',
    {
      'w:w': `${width}`,
      'w:type': type,
    },
    children,
  );
};

export default TableCellWidth;
