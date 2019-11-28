import React from 'react';

interface Props {
  /**
   * 指定应使用仅黑白着色呈现图片。
   */
  bwMode?:
    | 'auto'
    | 'black'
    | 'blackGray'
    | 'blackWhite'
    | 'clr'
    | 'gray'
    | 'grayWhite'
    | 'hidden'
    | 'invGray'
    | 'ltGray'
    | 'white';
}

/**
 * 形状属性。
 *
 * 此元素指定可应用于形状的可视形状属性。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.shapeproperties?view=openxml-2.8.1
 */
const ShapeProperties: React.SFC<Props> = ({ children, bwMode = 'auto' }) => {
  return React.createElement('pic:spPr', { bwMode }, children);
};

export default ShapeProperties;
