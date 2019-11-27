/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./dev.d.ts" />
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { ensureDirSync } from 'fs-extra';
import RawModule from './modules/docxtemplater-raw-module';

const genDocx = (
  templateFileName: string,
  outputFileName: string,
  data: { [x: string]: any },
) => {
  const content = readFileSync(
    resolve(__dirname, './templates', templateFileName),
  );

  const zip = new PizZip(content);
  const doc = new Docxtemplater();

  doc.loadZip(zip);
  doc.setData(data);
  doc.setOptions({
    nullGetter() {
      return '';
    },
    linebreaks: true,
  });
  doc.attachModule(new RawModule(data));
  doc.render();

  const buffer = doc.getZip().generate({ type: 'nodebuffer' });

  ensureDirSync(resolve(__dirname, '../output'));
  writeFileSync(resolve(__dirname, '../output', outputFileName), buffer);
};

export default genDocx;
