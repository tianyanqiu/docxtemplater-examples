import genDocx from './genDocx';
import content from './react-table-content';
import SubformList from './SubformList';
import data, { fileList } from './data';
import FileList from './FileList';

genDocx('basic-style-template.docx', 'react-table.docx', {
  内容: {
    react: content,
  },
  子表单: {
    react: SubformList({ data }),
  },
  附件: {
    react: FileList({ data: fileList }),
  },
});
