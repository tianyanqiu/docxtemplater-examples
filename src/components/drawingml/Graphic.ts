import React from 'react';

/**
 * 图形对象
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.graphic?view=openxml-2.8.1
 */
const Graphic: React.SFC = ({ children }) => {
  return React.createElement(
    'a:graphic',
    {
      'xmlns:a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    },
    children,
  );
};

export default Graphic;
