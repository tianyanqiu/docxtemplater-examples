import React from 'react';

interface TemplaterContextInterface {
  docxTemplater: any;
  xmlDocuments: any;
}

const TemplaterContext = React.createContext<TemplaterContextInterface | null>(
  null,
);

export default TemplaterContext;
