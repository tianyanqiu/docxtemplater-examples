import React from 'react';

/**
 * 图片的非可视属性。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.nonvisualpictureproperties?view=openxml-2.8.1
 */
const NonVisualPictureProperties: React.SFC = ({ children }) => {
  return React.createElement('pic:nvPicPr', null, children);
};

export default NonVisualPictureProperties;
