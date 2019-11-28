import React from 'react';

interface Props {
  /**
   * 对齐方式。
   *
   * 可选项：
   *
   * * `ctr` - 居中对齐。
   * * `in` - 嵌入对齐方式。
   */
  align?: 'ctr' | 'in';

  /**
   * 线条的宽度
   */
  width?: number;

  /**
   * 线条连接点的类型。
   *
   * * `flat` - 平面帽。
   * * `round` - 圆线帽。
   * * `squre` - 方形线帽。
   */
  capType?: 'flat' | 'rnd' | 'square';
}

/**
 * 大纲
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.outline?view=openxml-2.8.1
 */
const Outline: React.SFC<Props> = ({ children, align, width }) => {
  return React.createElement(
    'a:ln',
    {
      algn: align,
      w: width,
    },
    children,
  );
};

export default Outline;
