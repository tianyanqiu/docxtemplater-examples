import genDocx from './genDocx';
import content from './react-table-content';

genDocx('basic-style-template.docx', 'react-table.docx', {
  内容: {
    react: content,
  },
});
