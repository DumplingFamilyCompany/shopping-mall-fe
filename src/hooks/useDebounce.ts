import { useEffect, useState } from 'react';

type UseDebounceProps = {
  value: string;
  delay?: number;
};

const useDebounce = ({ value, delay = 200 }: UseDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
