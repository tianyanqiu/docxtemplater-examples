import React from 'react';

interface Props {
  /**
   * 顶部偏移量
   */
  top?: number;
  /**
   * 右偏移量
   */
  right?: number;
  /**
   * 底部偏移量
   */
  bottom?: number;
  /**
   * 左侧偏移量
   */
  left?: number;
}

/**
 * 填充的矩形。
 *
 * 此元素指定一个填充的矩形。 指定图像的拉伸会扭曲时，进行缩放源矩形，srcRect，以适应指定的填充的矩形。
 *
 * 填充矩形的每个边缘定义偏移形状的边界框的相应边缘百分比。 正百分比指定绘，而负值的百分比指定一开始就。 例如，25%的左偏移量指定填充的矩形左边的缘所位于的边界框的左边缘的右侧的边界框的宽度的 25%相等的数量。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.fillrectangle?view=openxml-2.8.1
 */
const FillRectangle = ({ top, right, bottom, left }: Props) => {
  return React.createElement('a:fillRect', {
    t: top,
    r: right,
    b: bottom,
    l: left,
  });
};

export default FillRectangle;
