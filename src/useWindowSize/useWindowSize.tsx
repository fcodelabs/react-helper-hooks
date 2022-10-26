import { useCallback, useState, useEffect } from 'react';

interface IWindowSize {
  width: number;
  height: number;
}

type IGetSize = () => IWindowSize;

interface IUseWindowSize {
  windowSize: IWindowSize;
  isDesktop: boolean;
}

const useWindowSize = (breakpoint: number): IUseWindowSize => {
  const isClient = typeof window !== 'undefined';

  const getSize = useCallback<IGetSize>(
    (): IWindowSize => ({
      width: isClient ? window.innerWidth : -1,
      height: isClient ? window.innerHeight : -1,
    }),
    [isClient]
  );

  const [windowSize, setWindowSize] = useState<IWindowSize>(getSize);
  const [isDesktop, setIsDesktop] = useState<boolean>(
    getSize()?.width >= breakpoint
  );

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const handleResize = (): void => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  useEffect(() => {
    if (windowSize.width !== -1 && windowSize.width >= breakpoint) {
      setIsDesktop(true);
    } else if (windowSize.width !== -1) {
      setIsDesktop(false);
    }
  }, [windowSize]);

  return {
    windowSize,
    isDesktop,
  };
};

export default useWindowSize;
