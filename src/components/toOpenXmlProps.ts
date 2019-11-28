/* eslint-disable @typescript-eslint/no-explicit-any */
const toOpenXmlProps = <T extends {}>(props: T, namespace = 'w'): T => {
  const result: any = {};
  Object.keys(props).forEach((key) => {
    const value = (props as any)[key];
    if (value == null) {
      return;
    }

    result[
      key.startsWith(`${namespace}:`) ? key : `${namespace}:${key}`
    ] = value.toString();
  });

  return result;
};

export default toOpenXmlProps;
