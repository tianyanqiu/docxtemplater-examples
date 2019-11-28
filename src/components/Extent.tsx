import React from 'react';

interface Props {
  cx: number;
  cy: number;
}

/**
 * 内嵌绘图对象范围
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.wordprocessing.extent?view=openxml-2.8.1
 */
const Extent: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('wp:extent', rest, children);
};

export default Extent;
