import React from 'react';
import stringProps from '../utils/stringProps';

interface Props {
  /**
   * 禁止显示调整处理。指定生成的应用程序不应该显示调整控点对应的连接形状。
   */
  noAdjustHandles?: boolean;
  /**
   * 不允许箭头更改。
   *
   * 指定生成的应用程序不应允许箭头相应连接形状的更改。
   */
  noChangeArrowheads?: boolean;
  /**
   * 不允许纵横比更改。
   *
   * 指定生成的应用程序不应允许相应图形框架纵横比更改。
   */
  noChangeAspect?: boolean;
  /**
   * 不允许形状类型更改。
   *
   * 指定生成的应用程序不应允许相应的连接形状的形状类型更改。
   */
  noChangeShapeType?: boolean;
  /**
   * 不允许裁剪更改。
   *
   * 指定生成的应用程序应不允许相应图片裁剪。
   */
  noCrop?: boolean;
  /**
   * 不允许形状点编辑。
   *
   * 指定生成的应用程序不应允许相应的连接形状的形状点更改。
   */
  noEditPoints?: boolean;
  /**
   * 指定生成的应用程序应不允许分组为相应图形框架的形状。
   */
  noGap?: boolean;
  /**
   * 指定相应的图形框架，不能移动。 除非也已被锁定，则仍可以移动驻留图形图文框中的对象。
   */
  noMove?: boolean;
  /**
   * 指定生成的应用程序不应允许大小更改为相应的图片框。
   */
  noResize?: boolean;
  /**
   * 不允许形状旋转。
   *
   * 指定生成的应用程序应允许形状对应的连接形状的旋转更改。
   */
  noRot?: boolean;
  /**
   * 指定生成的应用程序应不允许选择相应的图片。 这意味着可选择无图片、 形状或文本附加到该图片，如果指定了此属性。
   */
  noSelect?: boolean;
  children?: never;
}

/**
 * 图片锁定
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.picturelocks?view=openxml-2.8.1
 */
const PictureLocks: React.SFC<Props> = (props) => {
  return React.createElement('a:picLocks', stringProps(props));
};

export default PictureLocks;
