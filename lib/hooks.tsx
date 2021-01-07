import {useState, useEffect} from 'react';

export interface WindowSize {
  width?: number;
  height?: number;
}

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({width: undefined, height: undefined});

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = (): void =>
      setWindowSize({width: window.innerWidth, height: window.innerHeight});

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return (): void => window.removeEventListener('resize', handleResize);
  }, [setWindowSize]);
  return windowSize;
};
