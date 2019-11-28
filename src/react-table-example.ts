import genDocx from './genDocx';
import content from './react-table-content';
import SubformList from './SubformList';
import data from './data';

genDocx('basic-style-template.docx', 'react-table.docx', {
  内容: {
    react: content,
  },
  子表单: {
    react: SubformList({ data }),
  },
});
