import { useState, useEffect } from 'react';
import { debounce } from "lodash";

export const useLogin = () => {
  const [isMobile, setIsMobile] = useState(false);
  const onResizeHandler = (e) => {
    const { innerWidth } = e.target;
    if (innerWidth <= 768) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", debounce(onResizeHandler, 250));
    return () => {
      window.removeEventListener("resize", debounce(onResizeHandler));
    };
  }, []);
  const screenWidth = window.innerWidth;
  return {
    isMobile,
    screenWidth
  };
}