import genDocx from './genDocx';

genDocx('basic-template.docx', 'basic.docx', {
  内容: '这是一段很长很长的内容',
  图片: '这个位置将来会放上图片的',
});
