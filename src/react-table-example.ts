import genDocx from './genDocx';
import content from './react-table-content';

genDocx('basic-style-template.docx', 'react.docx', {
  内容: {
    react: content,
  },
  图片: `<w:p><w:r>
  <w:t>这个位置将来\n会放上图片的</w:t></w:r></w:p>`,
});
