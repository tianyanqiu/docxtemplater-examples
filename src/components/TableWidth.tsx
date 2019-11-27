import React from 'react';
import { WidthUnit } from './types';

interface Props {
  width: number | string;
  /**
   * 宽度单位：
   *
   * * auto - 自动确定的宽度。
   * * dxa - 在 Twentieths 的点的宽度。
   * * nil - 没有宽度。
   * * pct - 宽度以 Fiftieths 的百分比。
   */
  type: WidthUnit;
}

/**
 * 表格宽度
 *
 * 参考文档：
 */
const TableWidth: React.SFC<Props> = ({ children, width, type = 'auto' }) => {
  return React.createElement(
    'w:tablW',
    {
      'w:w': `${width}`,
      'w:type': type,
    },
    children,
  );
};

export default TableWidth;
