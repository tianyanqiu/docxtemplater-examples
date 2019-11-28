/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import docxtemplater from 'docxtemplater';

const { DocUtils } = docxtemplater;
const relsFilePath = 'word/_rels/document.xml.rels';
const mediaPrefix = 'media';
const extensionRegex = /[^.]+\.([^.]+)/;

const createEmptyRelsDoc = (xmlDocuments: any, relsFileName: string) => {
  const doc = xmlDocuments[relsFilePath];
  if (!doc) {
    throw new Error('Could not copy from empty relsdoc');
  }
  const relsDoc = DocUtils.str2xml(DocUtils.xml2str(doc));
  const relationships = relsDoc.getElementsByTagName('Relationships')[0];
  const relationshipChilds = relationships.getElementsByTagName('Relationship');
  for (let i = 0, l = relationshipChilds.length; i < l; i += 1) {
    relationships.removeChild(relationshipChilds[i]);
  }
  xmlDocuments[relsFileName] = relsDoc;
  return relsDoc;
};

class ImageManager {
  private relsDoc: any;

  constructor(private zip: any, private xmlDocuments: any) {
    this.relsDoc =
      xmlDocuments[relsFilePath] ||
      createEmptyRelsDoc(xmlDocuments, relsFilePath);
  }

  private loadImageRels(): number {
    const iterable = this.relsDoc.getElementsByTagName('Relationship');
    return Array.prototype.reduce.call(
      iterable,
      (max: any, relationship: any) => {
        const id = relationship.getAttribute('Id');
        if (/^rId[0-9]+$/.test(id)) {
          return Math.max(max, parseInt(id.substr(3), 10));
        }
        return max;
      },
      0,
    ) as number;
  }

  private addExtensionRels(contentType: string, extension: string) {
    const contentTypeDoc = this.xmlDocuments['[Content_Types].xml'];
    const defaultTags = contentTypeDoc.getElementsByTagName('Default');
    const extensionRegistered = Array.prototype.some.call(
      defaultTags,
      (tag) => tag.getAttribute('Extension') === extension,
    );
    if (extensionRegistered) {
      return;
    }
    const types = contentTypeDoc.getElementsByTagName('Types')[0];
    const newTag = contentTypeDoc.createElement('Default');
    newTag.namespaceURI = null;
    newTag.setAttribute('ContentType', contentType);
    newTag.setAttribute('Extension', extension);
    types.appendChild(newTag);
  }

  public addImageRels(imageName: string, imageData: any, i = 0): number {
    const realImageName = i === 0 ? imageName : `${imageName}(${i})`;
    const imagePath = `word/media/${realImageName}`;
    if (this.zip.files[imagePath] != null) {
      return this.addImageRels(imageName, imageData, i + 1);
    }
    const image = {
      name: imagePath,
      data: imageData,
      options: {
        binary: true,
      },
    };
    this.zip.file(image.name, image.data, image.options);
    const extension = realImageName.replace(extensionRegex, '$1');
    this.addExtensionRels(`image/${extension}`, extension);
    const relationships = this.relsDoc.getElementsByTagName('Relationships')[0];
    const newTag = this.relsDoc.createElement('Relationship');
    newTag.namespaceURI = null;
    const maxRid = this.loadImageRels() + 1;
    newTag.setAttribute('Id', `rId${maxRid}`);
    newTag.setAttribute(
      'Type',
      'http://schemas.openxmlformats.org/officeDocument/2006/relationships/image',
    );
    newTag.setAttribute('Target', `${mediaPrefix}/${realImageName}`);
    relationships.appendChild(newTag);

    // console.log(this.zip.files);
    return maxRid;
  }
}

export default ImageManager;
