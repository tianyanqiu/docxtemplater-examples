import React from 'react';
import toOpenXmlProps from '../toOpenXmlProps';

interface Props {
  /**
   * 包的名称。写成类似 `/一级名称/二级名称/三级名称`。
   */
  name: string;
  /**
   * 内容类型
   */
  contentType: string;
}

/**
 * 包的一部分。
 *
 * 参考文档： ECMA-376 Part 2 第9.1章
 */
const Part: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('pkg:part', toOpenXmlProps(rest, 'pkg'), children);
};

export default Part;
