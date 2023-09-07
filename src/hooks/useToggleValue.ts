import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [isToggle, setIsToggle] = useState(initialValue);
  const handleToggleValue = () => {
    setIsToggle(!isToggle);
  };
  return {
    isToggle,
    handleToggleValue,
  };
}
