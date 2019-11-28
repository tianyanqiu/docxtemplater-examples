import React from 'react';

/**
 * 拉伸
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.stretch?view=openxml-2.8.1
 */
const Stretch: React.SFC = ({ children }) => {
  return React.createElement('a:stretch', null, children);
};

export default Stretch;
