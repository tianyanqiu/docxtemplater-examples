import React from 'react';

/**
 * 图片填充扩展属性列表。
 *
 * 参考文档：
 */
const BlipExtensionList: React.SFC = ({ children }) => {
  return React.createElement('a:extLst', null, children);
};

export default BlipExtensionList;
