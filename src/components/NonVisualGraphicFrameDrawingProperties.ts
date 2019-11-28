import React from 'react';

/**
 * 指定绘图对象的通用属性
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.wordprocessing.nonvisualgraphicframedrawingproperties?view=openxml-2.8.1
 */
const NonVisualGraphicFrameDrawingProperties: React.SFC = ({ children }) => {
  return React.createElement('wp:cNvGraphicFramePr', null, children);
};

export default NonVisualGraphicFrameDrawingProperties;
