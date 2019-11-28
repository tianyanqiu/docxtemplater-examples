import React from 'react';

/**
 * 图形对象的数据
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.graphicdata?view=openxml-2.8.1
 */
const GraphicData: React.SFC = ({ children }) => {
  return React.createElement(
    'a:graphicData',
    {
      uri: 'http://schemas.openxmlformats.org/drawingml/2006/picture',
    },
    children,
  );
};

export default GraphicData;
