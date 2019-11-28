import React from 'react';
import stringProps from '../utils/stringProps';

interface Props {
  /**
   * 与形状一起旋转。
   *
   * 指定的填充应与形状一起旋转。 即，与旋转然后填充转换已使用图片填充该形状，包含的形状 （说矩形） 是将使用相同的旋转的转换。
   */
  rotWithShape?: boolean;
}

/**
 * 图片填充。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.blipfill?view=openxml-2.8.1
 */
const BlipFill: React.SFC<Props> = ({ children, ...rest }) => {
  return React.createElement('pic:blipFill', stringProps(rest), children);
};

export default BlipFill;
