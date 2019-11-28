import React from 'react';

interface Props {
  /**
   * 指定图像引用。
   */
  embed?: string;
  /**
   * 图片链接。
   *
   *
   */
  link?: string;

  /**
   * 压缩状态。
   *
   * 指定用于存储图片的压缩状态。 这样，要指定应用于图片的压缩量的应用程序。
   */
  cstate?: 'email' | 'hqprint' | 'none' | 'print' | 'screen';
}

/**
 * 此元素指定的图像 （二进制大图像或图片） 存在并包含图像数据的引用。
 *
 * 参考文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.drawing.blip?view=openxml-2.8.1
 */
const Blip: React.SFC<Props> = ({ children, embed, link, ...rest }) => {
  return React.createElement(
    'a:blip',
    {
      'r:embed': embed,
      'r:link': link,
      ...rest,
    },
    children,
  );
};

export default Blip;
