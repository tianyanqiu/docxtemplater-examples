import React from 'react';
import Anchor from './Anchor';
import Inline from './Inline';

interface Props {
  children: React.ReactComponentElement<typeof Anchor | typeof Inline> | null;
}

/**
 * 绘图。
 *
 * 图形对象有两种状态：
 *
 * * **内嵌（ inline ）** - 绘图对象嵌入到文字中，并影响行高度和布局（如类似大小的字符字形）与其行。
 * * **浮动（ anchor ）** - 浮动的图形图像位于文字上方，相对于页面绝对定位。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.wordprocessing.drawing?view=openxml-2.8.1
 */
const Drawing: React.SFC<Props> = ({ children }) => {
  return React.createElement('w:drawing', null, children);
};

export default Drawing;
