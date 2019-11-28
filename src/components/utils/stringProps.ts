const stringValue = (value: any) => {
  if (typeof value === 'boolean') {
    return value ? '1' : '0';
  }

  return value != null ? value.toString() : undefined;
};

const stringProps = (props: { [x: string]: any }) => {
  const result: { [x: string]: string } = {};

  Object.keys(props).forEach((key) => {
    const value = props[key];
    if (value != null) {
      result[key] = stringValue(value);
    }
  });

  return result;
};

export default stringProps;
