export interface TextInstance {
  text: string;
  tag: 'TEXT';
}
export interface Instance {
  type: string;
  props: Props;
  children: (Instance | TextInstance)[];
  tag: 'INSTANCE';
}
export type Container = {
  children: (Instance | TextInstance)[];
  tag: 'CONTAINER';
};
export type HostContext = {};
export type Props = Record<string, any>;
