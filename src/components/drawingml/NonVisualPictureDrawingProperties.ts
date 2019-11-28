import React from 'react';

/**
 * 非可视图片绘图属性。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.nonvisualpicturedrawingproperties?view=openxml-2.8.1
 */
const NonVisualPictureDrawingProperties: React.SFC = ({ children }) => {
  return React.createElement('pic:cNvPicPr', null, children);
};

export default NonVisualPictureDrawingProperties;
