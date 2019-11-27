import React from 'react';

const RightBorder: React.SFC<{
  value: string;
  size: number;
  space: number;
  color: string;
}> = ({ children, value, size, space, color }) => {
  return React.createElement(
    'w:right',
    {
      'w:val': value,
      'w:sz': `${size}`,
      'w:space': `${space}`,
      'w:color': color,
    },
    children,
  );
};

export default RightBorder;
