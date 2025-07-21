import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, initialValue: string | object) => {
  const [value, setValue] = useState(() => {
    const source = localStorage.getItem(key);

    return source ? JSON.parse(source) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
