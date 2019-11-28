import React from 'react';

/**
 * 二进制数据
 *
 * 参考文档：ECMA-376 Part 2 第9.1章
 */
const BinaryData: React.SFC = ({ children }) => {
  return React.createElement('pkg:binaryData', null, children);
};

export default BinaryData;
