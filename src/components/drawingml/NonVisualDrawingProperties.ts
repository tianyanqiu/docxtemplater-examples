import React from 'react';

interface Props {
  id?: string;
  name?: string;
  descr?: string;
  title?: string;
}

/**
 * 非可视视图属性。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.nonvisualdrawingproperties?view=openxml-2.8.1
 */
const NonVisualDrawingProperties: React.SFC<Props> = ({
  children,
  ...rest
}) => {
  return React.createElement('pic:cNvPr', rest, children);
};

export default NonVisualDrawingProperties;
