import { useState } from "react";

const useToggle = (initialvalue) => {
  const [value, isvalue] = useState(initialvalue);
  const toggle = () => isvalue((prev) => !prev);
  return [ value, toggle ];
};

export default useToggle;
