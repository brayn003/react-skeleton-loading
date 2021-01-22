import { useEffect, useState } from "react";

const INITIAL_DIMENSIONS = {
  width: 0,
  height: 0,
}

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(INITIAL_DIMENSIONS); 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);
  return dimensions;
}

export default useWindowDimensions;