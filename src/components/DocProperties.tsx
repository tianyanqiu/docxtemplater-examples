import React from 'react';

interface Props {
  id?: string;
  name?: string;
  descr?: string;
  title?: string;
}

/**
 * 绘图对象的属性
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.wordprocessing.docproperties?view=openxml-2.8.1
 */
const DocProperties: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('wp:docPr', rest, children);
};

export default DocProperties;
