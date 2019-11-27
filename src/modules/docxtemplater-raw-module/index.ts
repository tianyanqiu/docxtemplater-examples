/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
import ReactDOMServer from 'react-dom/server';
import DocxTemplater from 'docxtemplater';

const moduleName = 'raw';
const { DocUtils, Errors } = DocxTemplater;
const { traits, isContent } = DocUtils;
const { throwRawTagShouldBeOnlyTextInParagraph } = Errors;

function getInner({ part, left, right, postparsed, index }: any) {
  const paragraphParts = postparsed.slice(left + 1, right);
  paragraphParts.forEach((p: any, i: number) => {
    if (i === index - left - 1) {
      return;
    }
    if (isContent(p)) {
      throwRawTagShouldBeOnlyTextInParagraph({ paragraphParts, part });
    }
  });
  return part;
}

export default class RawModule {
  private name: string;

  private fileTypeConfig: any;

  public constructor(private data: any = {}) {
    this.name = 'RawModule';
    console.log(`创建${this.name}`);
  }

  optionsTransformer(options: any, docxtemplater: any) {
    this.fileTypeConfig = docxtemplater.fileTypeConfig;
    return options;
  }

  parse(placeHolderContent: string) {
    const type = 'placeholder';
    const value = this.data[placeHolderContent];
    if (typeof value === 'object' && (value.raw || value.react)) {
      return {
        type,
        value: placeHolderContent,
        module: moduleName,
      };
    }
    return null;
  }

  postparse(postparsed: any) {
    return traits.expandToOne(postparsed, {
      moduleName,
      getInner,
      expandTo: this.fileTypeConfig.tagRawXml,
    });
  }

  public render(part: any, options: any) {
    if (part.module !== moduleName) {
      return null;
    }

    if (part.type === 'placeholder') {
      const value = options.scopeManager.getValue(part.value, { part });
      if (typeof value === 'object' && (value.raw || value.react)) {
        const formattedValue = value.react
          ? ReactDOMServer.renderToStaticMarkup(value.react)
          : value.raw;
        return {
          value: formattedValue.replace(/\t|\n/g, ''),
        };
      }
    }

    return null;
  }
}
