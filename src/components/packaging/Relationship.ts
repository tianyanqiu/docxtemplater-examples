import React from 'react';

interface Props {
  targetModel?: 'External' | 'Internal';
  Target: string;
  Id: string;
}

/**
 * 定义引用关系。
 *
 * 参考文档：ECMA-376 Part 2 9.3章节
 */
const Relationship = (props: Props) => {
  return React.createElement('Relationship', props);
};

export default Relationship;
