import React from 'react';
import genDocx from './genDocx';
import content from './react-table-content';
import SubformList from './SubformList';
import data, { fileList, ideas } from './data';
import FileList from './FileList';
import IdeaList from './IdeaList';

genDocx('basic-style-template.docx', 'react-table.docx', {
  内容: {
    react: content,
  },
  子表单: {
    react: <SubformList data={data} />,
  },
  附件: {
    react: <FileList data={fileList} />,
  },
  审批意见: {
    react: <IdeaList ideas={ideas} />,
  },
});
