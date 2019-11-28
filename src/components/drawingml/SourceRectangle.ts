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
 * 源矩形
 *
 * 指定用于填充图像的部分
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.sourcerectangle?view=openxml-2.8.1
 */
const SourceRectangle = ({ top, right, bottom, left }: Props) => {
  return React.createElement('a:srcRect', {
    t: top,
    r: right,
    b: bottom,
    l: left,
  });
};

export default SourceRectangle;
