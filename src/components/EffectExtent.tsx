import React from 'react';

interface Props {
  margin?: [number, number, number, number];
}

/**
 * 图像的外边距
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.wordprocessing.effectextent?view=openxml-2.8.1
 */
const EffectExtent: React.SFC<Props> = ({
  children,
  margin: [t, r, b, l] = [0, 0, 0, 0],
}) => {
  return React.createElement('wp:effectExtent', { t, r, b, l }, children);
};

export default EffectExtent;
