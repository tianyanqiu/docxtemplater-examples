import React from 'react';

interface Props {
  /**
   * 形状指南公式。
   *
   * 指定用于指南的计算值的公式。 每个公式有一定数量的参数和一组特定的操作，以便为指南生成一个值，对这些参数执行。
   */
  fmla: string;

  /**
   * 形状指南名称
   */
  name: string;
}

/**
 * 形状指南。
 *
 * 此元素指定用于控制指定的形状的几何形状指南 precense。 形状指南包括公式和名称分配给公式的结果。 识别的公式列出了此元素的公式属性文档。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.shapeguide?view=openxml-2.8.1
 */
const ShapeGuide: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('a:gd', rest, children);
};

export default ShapeGuide;
