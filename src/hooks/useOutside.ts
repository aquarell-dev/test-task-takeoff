import React from 'react';

export const useOutside = <U extends HTMLElement, T = void>(ref: React.RefObject<U>, handler: () => T) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      handler();
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};
