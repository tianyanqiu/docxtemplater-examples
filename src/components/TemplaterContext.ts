import React from 'react';

export interface TemplaterContextInterface {
  docxTemplater: any;
  xmlDocuments: any;
}

const TemplaterContext = React.createContext<TemplaterContextInterface | null>(
  null,
);

export default TemplaterContext;
