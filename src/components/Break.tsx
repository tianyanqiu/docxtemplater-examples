import React from 'react';
import toOpenXmlProps from './toOpenXmlProps';

interface Props {
  /**
   * 重新启动架构中的位置的文字环绕
   *
   * 可选项：
   *
   * * `all` - 下一整行上重新启动。
   * * `left` - 在下一个文本区域中最左边的位置时重新启动。
   * * `none` - 在下一行上重新启动。
   * * `right` - 重新启动在最右边的位置的下一个文本区域中。
   */
  clear?: string;
  type?: string;
}

/**
 * 中断
 */
const Break = (props: Props) => {
  return React.createElement('w:br', toOpenXmlProps(props));
};

export default Break;
