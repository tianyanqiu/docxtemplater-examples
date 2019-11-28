import React from 'react';
import stringProps from '../utils/stringProps';

interface Props {
  /**
   * 水平翻转
   */
  flipH?: boolean;
  /**
   * 垂直翻转
   */
  flipV?: boolean;
  /**
   * 旋转角度
   */
  rot?: number;
}

/**
 * 	
单个对象的 2D 转换。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.transform2d?view=openxml-2.8.1
 */
const Transform2D: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('a:xfrm', stringProps(rest), children);
};

export default Transform2D;
