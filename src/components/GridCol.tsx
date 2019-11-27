import React from 'react';

interface Props {
  w: number;
}

const GridCol: React.SFC<Props> = ({ children, w }) => {
  return React.createElement(
    'w:gridCol',
    {
      'w:w': `${w}`,
    },
    children,
  );
};

export default GridCol;
