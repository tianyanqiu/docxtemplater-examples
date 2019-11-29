import { Container, HostContext, Instance, Props, TextInstance } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */

const UPDATE_SIGNAL = {};
const NO_CONTEXT = {};

export const scheduleTimeout = setTimeout;
export const cancelTimeout = clearTimeout;
export const noTimeout = -1;
export const isPrimaryRenderer = false;
export const { now } = Date;

export function getRootHostContext(_rootContainerInstance: Container) {
  return NO_CONTEXT;
}

export function getChildHostContext(
  _parentHostContext: HostContext,
  _type: string,
  _rootContainerInstance: Container,
): HostContext {
  return NO_CONTEXT;
}

export function getPublicInstance(instance: Instance) {
  return instance;
}

export function shouldSetTextContent(_type: string, _props: Props) {
  return false;
}

/*
const valueToString = (value: any) => {
  if (value === true) {
    return '1';
  }
  if (value === false) {
    return '0';
  }

  return value.toString();
};

const stringifyProps = (props: Props) => {
  return Object.keys(props)
    .filter((key) => props[key] != null)
    .map((key) => `${key}="${valueToString(props[key])}"`)
    .join(' ');
};
*/

export function createInstance(
  type: string,
  props: Props,
  _rootContainerInstance: Container,
  _hostContext: HostContext,
  _internalInstanceHandle: Record<string, any>,
): Instance {
  return {
    type,
    props,
    children: [],
    tag: 'INSTANCE',
  };
}

export function createTextInstance(
  text: string,
  _rootContainerInstance: Container,
  _hostContext: HostContext,
  _internalInstanceHandle: Record<string, any>,
): TextInstance {
  return {
    text,
    tag: 'TEXT',
  };
}

/**
 * 将刚刚生成的节点挂载到上一层节点
 *
 * @param parentInstance 父节点（上一层节点）
 * @param child
 */
export function appendInitialChild(
  parentInstance: Instance,
  child: Instance | TextInstance,
) {
  const index = parentInstance.children.indexOf(child);
  if (index !== -1) {
    parentInstance.children.splice(index, 1);
  }
  parentInstance.children.push(child);
}

/**
 * 决定当前节点在commit阶段是否无法完成某些功能，需要在确定节点已经挂载上之后，才能去完成这个功能。比如 DOM 中的 autoFocus
 *
 * @param _testElement
 * @param _type
 * @param _props
 * @param _rootContainerInstance
 * @param _hostContext
 */
export function finalizeInitialChildren(
  _testElement: Instance,
  _type: string,
  _props: Props,
  _rootContainerInstance: Container,
  _hostContext: HostContext,
): boolean {
  return false;
}

/**
 * 将生成的节点插入根节点
 *
 * @param parentInstance 父节点
 * @param child 子节点
 */
export function appendChildToContainer(
  container: Container,
  child: Instance | TextInstance,
) {
  const index = container.children.indexOf(child);
  if (index !== -1) {
    container.children.splice(index, 1);
  }
  container.children.push(child);
}

export function prepareUpdate(
  _testElement: Instance,
  _type: string,
  _oldProps: Props,
  _newProps: Props,
  _rootContainerInstance: Container,
  _hostContext: Record<string, any>,
): null | {} {
  return UPDATE_SIGNAL;
}

export function prepareForCommit(_containerInfo: Container) {
  // noop
}

/**
 * 将真实的节点挂载后触发
 *
 * @param container 容器
 */
export function resetAfterCommit(_container: Container) {
  // noop
}

export function shouldDeprioritizeSubtree(_type: string, _props: Props) {
  return false;
}

export function scheduleDeferredCallback(..._args: any[]) {
  // noop
}

export function cancelDeferredCallback(..._args: any[]) {
  // noop
}

// -------------------
//     Mutation
// -------------------

export const supportsMutation = true;
