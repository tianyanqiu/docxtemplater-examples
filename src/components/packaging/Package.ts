import React from 'react';

/**
 * 包。
 *
 * 参考文档：ECMA-376 Part 2 第9章
 */
const Package: React.SFC = ({ children }) => {
  return React.createElement(
    'pkg:package',
    {
      'xmlns:pkg': 'http://schemas.microsoft.com/office/2006/xmlPackage',
    },
    children,
  );
};

export default Package;
