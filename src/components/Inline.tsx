import React from 'react';

interface Props {
  /**
   * 指定边距
   */
  padding?: [number, number, number, number];
}

/**
 * 内嵌的绘图对象。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.wordprocessing.inline?view=openxml-2.8.1
 */
const Inline: React.SFC<Props> = ({ children, padding = [0, 0, 0, 0] }) => {
  return React.createElement(
    'wp:inline',
    {
      distT: padding[0],
      distR: padding[1],
      distB: padding[2],
      distL: padding[3],
    },
    children,
  );
};

export default Inline;
