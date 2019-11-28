const data = [
  {
    单行文本: '单行文本一',
    下拉选择: '选项一',
    单选按钮组: '选项一',
    日期时间: '2019-11-27',
  },
  {
    单行文本: '单行文本二',
    下拉选择: '选项二',
    单选按钮组: '选项二',
    日期时间: '2019-11-28',
  },
  {
    单行文本: '单行文本三',
    下拉选择: '选项一',
    单选按钮组: '选项一',
    日期时间: '2019-11-27',
  },
];

const fileList = [
  { id: '001', title: '附件一.docx', fileLength: 1243434 },
  { id: '002', title: '附件二.xls', fileLength: 13435 },
  { id: '003', title: '附件三.pptx', fileLength: 780 },
];

export const ideas = [
  {
    id: '001',
    content: '同意下发',
    createTime: '2019-11-27',
    user: {
      userName: '张三',
    },
  },
  {
    id: '002',
    content: '审批意见',
    createTime: '2019-11-28',
    user: {
      userName: '李四',
    },
  },
];

export { fileList };

export default data;
