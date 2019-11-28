import React from 'react';

/**
 * 形状调整值列表。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.adjustvaluelist?view=openxml-2.8.1
 */
const AdjustValueList: React.SFC = ({ children }) => {
  return React.createElement('a:avLst', null, children);
};

export default AdjustValueList;
