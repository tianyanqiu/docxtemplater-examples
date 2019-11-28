import { useContext } from 'react';
import TemplaterContext from './TemplaterContext';

function useDocxTemplater() {
  const context = useContext(TemplaterContext);

  if (!context) {
    throw new Error('没有上下文');
  }

  return context;
}

export default useDocxTemplater;
