/* eslint-disable @typescript-eslint/no-explicit-any */
const toOpenXmlProps = <T extends {}>(props: T): T => {
  const result: any = {};
  Object.keys(props).forEach((key) => {
    const value = (props as any)[key];
    if (value == null) {
      return;
    }

    result[key.startsWith('w:') ? key : `w:${key}`] = value.toString();
  });

  return result;
};

export default toOpenXmlProps;
