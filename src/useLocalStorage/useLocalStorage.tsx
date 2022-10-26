import { useEffect, useState } from 'react';

type TValue<S> = S extends null ? any : S;

type TUseLocalStorage<S> = [TValue<S>, (value: TValue<S>) => void];

function useLocalStorage<S = any>(
  key: string,
  initialState: TValue<S>
): TUseLocalStorage<S> {
  const isClient = typeof window !== 'undefined';

  const [localValue, setLocalValue] = useState<TValue<S>>(initialState);

  const getStorageValue = (storageKey: string): string | null => {
    return window.localStorage.getItem(storageKey);
  };

  const setStorageValue = (
    storageKey: string,
    storageValue: TValue<S>
  ): void => {
    if (storageValue !== null) {
      window.localStorage.setItem(storageKey, JSON.stringify(storageValue));
    } else {
      window.localStorage.removeItem(storageKey);
    }
  };

  useEffect(() => {
    if (!isClient) {
      return;
    }

    setStorageValue(key, initialState);

    const handleStorageEventListener = (): void => {
      const currentValue = getStorageValue(key);
      if (typeof currentValue === 'string') {
        setLocalValue(JSON.parse(currentValue));
      } else {
        setLocalValue(currentValue as any);
      }
    };
    window.addEventListener('storage', handleStorageEventListener);
    return () =>
      window.removeEventListener('storage', handleStorageEventListener);
  }, [isClient]);

  const setValue = (value: TValue<S>): void => {
    if (!isClient) {
      return;
    }
    setStorageValue(key, value);
    setLocalValue(value);
  };

  return [localValue, setValue];
}

export default useLocalStorage;
