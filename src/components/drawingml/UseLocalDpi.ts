import React from 'react';
import stringProps from '../utils/stringProps';

interface Props {
  val?: boolean;
}

/**
 * 指示本地图像压缩设置将覆盖文档默认的压缩设置。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.office2010.drawing.uselocaldpi?view=openxml-2.8.1
 */
const UseLocalDpi = ({ val }: Props) => {
  return React.createElement(
    'a14:useLocalDpi',
    stringProps({
      'xmlns:a14': 'http://schemas.microsoft.com/office/drawing/2010/main',
      val,
    }),
  );
};

export default UseLocalDpi;
