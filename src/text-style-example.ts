import genDocx from './genDocx';

genDocx('basic-style-template.docx', 'basic-style.docx', {
  内容: {
    raw: `<w:p><w:r><w:t>文本\n这是第二段文本</w:t><w:t>文本\n这是第二段文本</w:t></w:r></w:p>`,
  },
  图片: `<w:p><w:r>
  <w:t>这个位置将来\n会放上图片的</w:t></w:r></w:p>`,
});
