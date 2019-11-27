import React from 'react';

interface Props {
  width: number;
}

const GridColumn: React.SFC<Props> = ({ children, width }) => {
  return React.createElement(
    'w:gridCol',
    {
      'w:w': `${width}`,
    },
    children,
  );
};

export default GridColumn;
