import React from 'react';

/**
 * 表格的单元格属性
 *
 * 文档：https://docs.microsoft.com/zh-cn/dotnet/api/documentformat.openxml.wordprocessing.tablecellproperties?view=openxml-2.8.1
 */
const TableCellProperties: React.SFC = ({ children }) => {
  return React.createElement('w:tcPr', {}, children);
};

export default TableCellProperties;
