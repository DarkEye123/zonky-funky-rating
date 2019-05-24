import { useEffect } from 'react';

function useModalClose(cb, element) {
  const handleClick = e => {
    if (element.current && element.current === e.target) {
      cb();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);
}

function useEscape(action) {
  const handleKeyPress = e => {
    e.stopPropagation();

    if (e.keyCode === 27) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, []);
}

export { useModalClose, useEscape };
