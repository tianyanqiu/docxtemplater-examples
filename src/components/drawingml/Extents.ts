import React from 'react';

interface Props {
  cx: number;
  cy: number;
}

/**
 * 范围。
 *
 * 此元素指定封闭引用的对象的边界框的大小。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.extents?view=openxml-2.8.1
 */
const Extents: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('a:ext', rest, children);
};

export default Extents;
