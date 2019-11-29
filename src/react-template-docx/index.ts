/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import Reconciler from 'react-reconciler';
import * as ReactTemplateDocxHostConfig from './ReactTemplateDocxHostConfig';
import { Container, TextInstance, Instance, Props } from './types';

const ReactTemplateDocxRender = Reconciler({
  ...ReactTemplateDocxHostConfig,
  setTimeout,
  clearTimeout,
  supportsPersistence: false,
  supportsHydration: false,
} as any);

const valueToString = (value: any) => {
  if (value === true) {
    return '1';
  }
  if (value === false) {
    return '0';
  }
  return value;
};

const stringifyProps = (props: Props) => {
  return Object.keys(props)
    .filter((key) => key !== 'children' && props[key] != null)
    .map((key) => {
      const value = props[key];
      return `${key}="${valueToString(value)}"`;
    })
    .join(' ');
};

const nodeToXmlString = (node: TextInstance | Container | Instance): string => {
  const stringifyInstance = (item: Instance) => {
    const props = stringifyProps(item.props);
    const start = `<${item.type}${props ? ` ${props}` : ''}`;
    const children = item.children.map(nodeToXmlString).join('');

    if (!children) {
      return `${start} />`;
    }

    return `${start}>${children}</${item.type}>`;
  };

  switch (node.tag) {
    case 'TEXT':
      return node.text;
    case 'CONTAINER':
      return node.children.map(nodeToXmlString).join('');
    default:
      return stringifyInstance(node);
  }
};

function render(element: React.ReactNode) {
  const containerInfo: Container = {
    children: [],
    tag: 'CONTAINER',
  };

  const container = ReactTemplateDocxRender.createContainer(
    containerInfo,
    false,
    false,
  );
  ReactTemplateDocxRender.updateContainer(element, container, null, null);

  return nodeToXmlString(containerInfo);
}

export { render };
