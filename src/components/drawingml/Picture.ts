import React from 'react';

/**
 * 图片
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.picture?view=openxml-2.8.1
 */
const Picture: React.SFC = ({ children }) => {
  return React.createElement(
    'pic:pic',
    {
      'xmlns:pic': 'http://schemas.openxmlformats.org/drawingml/2006/picture',
    },
    children,
  );
};

export default Picture;
