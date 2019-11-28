import genDocx from './genDocx';
import content from './react-table-content';
import image from './react-image-content';

genDocx('image-template.docx', 'image.docx', {
  内容: {
    react: content,
  },
  图片: {
    react: image,
  },
});
