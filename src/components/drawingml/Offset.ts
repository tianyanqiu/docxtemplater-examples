import React from 'react';

interface Props {
  x: number;
  y: number;
}

/**
 * 偏移
 *
 * 此元素指定对象的边界框的位置。 在此边界框中均不包含对某个对象的效果。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.offset?view=openxml-2.8.1
 */
const Offset = (props: Props) => {
  return React.createElement('a:off', props);
};

export default Offset;
