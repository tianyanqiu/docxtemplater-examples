import React from 'react';

/**
 * 引用关系列表。
 *
 * 参考文档：ECMA-376 Part 2 9.3章节
 */
const Relationships: React.SFC = ({ children }) => {
  return React.createElement(
    'Relationships',
    {
      xmlns: 'http://schemas.openxmlformats.org/package/2006/relationships',
    },
    children,
  );
};

export default Relationships;
