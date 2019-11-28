import React from 'react';

interface Props {
  uri?: string;
}

/**
 * 图片填充扩展属性。
 *
 * 参考文档：
 */
const BlipExtension: React.SFC<Props> = ({
  children,
  uri = '{28A0092B-C50C-407E-A947-70E740481C1C}',
}) => {
  return React.createElement('a:ext', { uri }, children);
};

export default BlipExtension;
