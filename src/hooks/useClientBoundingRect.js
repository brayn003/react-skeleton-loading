import { useCallback, useEffect, useState } from "react";

const INITIAL_RECT = {
  x: 0,
  y: 0,
  height: 0,
  width: 0
}

const useBoundingRect = (elementRef) => {
  const [boundingRect, setBoundingRect] = useState(INITIAL_RECT);

  const calcBoundingRect = useCallback(() => {
    if(elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      setBoundingRect({
        x: rect.x,
        y: rect.y,
        height: rect.height,
        width: rect.width
      });
    }
  }, [])

  useEffect(() => {
    calcBoundingRect();
  }, [calcBoundingRect]);

  return { boundingRect, calcBoundingRect };
}

export default useBoundingRect;