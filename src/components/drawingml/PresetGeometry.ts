import React from 'react';

interface Props {
  /**
   * 预设的几何图形类型。参见：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.shapetypevalues?view=openxml-2.8.1
   */
  preset: string;
}

/**
 * 预设的几何图形。
 *
 * 此元素指定一个预设的几何形状时应使用而不是自定义的几何形状。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.presetgeometry?view=openxml-2.8.1
 */
const PresetGeometry: React.SFC<Props> = ({ children, preset }) => {
  return React.createElement(
    'a:prstGeom',
    {
      prst: preset,
    },
    children,
  );
};

export default PresetGeometry;
