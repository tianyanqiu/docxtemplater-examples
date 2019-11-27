/* eslint-disable no-useless-constructor */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable class-methods-use-this */
const moduleName = 'raw';

export default class RawModule {
  private name = 'RawModule';

  public constructor(private data: any = {}) {}

  parse(placeHolderContent: string) {
    const type = 'placeholder';
    const value = this.data[placeHolderContent];
    if (typeof value === 'object' && value.raw) {
      return {
        type,
        value: placeHolderContent,
        module: moduleName,
      };
    }
    return null;
  }

  public render(part: any, options: any) {
    if (part.module !== moduleName) {
      return null;
    }

    if (part.type === 'placeholder') {
      const value = options.scopeManager.getValue(part.value, { part });
      if (typeof value === 'object' && value.raw) {
        console.log(`${this.name}识别到xml数据，${value.raw}`);
        return {
          value: value.raw.replace(/\t|\n| +/g, ''),
        };
      }
    }

    return null;
  }
}
