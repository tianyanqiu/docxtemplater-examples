import React from 'react';

/**
 * 浮动的绘图对象。
 *
 * 此元素指定位于此位置在文档中的绘图对象是浮动对象。
 */
const Anchor: React.SFC = ({ children }) => {
  return React.createElement('wp:anchor', null, children);
};

export default Anchor;
