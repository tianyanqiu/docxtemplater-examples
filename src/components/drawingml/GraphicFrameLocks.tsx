import React from 'react';
import stringProps from '../utils/stringProps';

interface Props {
  /**
   * 指定生成的应用程序不应允许相应图形框架纵横比更改。
   */
  noChangeAspect?: boolean;
  /**
   * 指定生成的应用程序应不允许选择的对象中的相应图形框架，但允许选择图形框架本身。
   */
  noDrilldown?: boolean;
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
   * 指定生成的应用程序应不允许选择相应的图片。 这意味着可选择无图片、 形状或文本附加到该图片，如果指定了此属性。
   */
  noSelect?: boolean;

  children?: never;
}

/**
 * 指定图像框架的所有锁定属性。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.graphicframelocks?view=openxml-2.8.1
 */
const GraphicFrameLocks: React.SFC<Props> = (props) => {
  return React.createElement('a:graphicFrameLocks', {
    'xmlns:a': 'http://schemas.openxmlformats.org/drawingml/2006/main',
    ...stringProps(props),
  });
};

export default GraphicFrameLocks;
