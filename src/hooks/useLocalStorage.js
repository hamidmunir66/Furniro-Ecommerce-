import { useEffect, useState } from "react";

const useLocalStorage = (key, initialvalue) => {
  const [data, setdata] = useState(() => {
    const savedValue = localStorage.getItem(key);
    if (savedValue === null || savedValue === "undefined") {
      return initialvalue;
    }
    try {
      return JSON.parse(savedValue);
    } catch (error) {
      console.log(error);
      return initialvalue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);
  return [data, setdata];
};
export default useLocalStorage;
