import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import useBoundingRect from '../../hooks/useClientBoundingRect';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const getStyleByType = (type) => {
  switch(type) {
    case 'circle':
      return { height: 40, width: 40, borderRadius: 100000 }
    case 'text':
      return { height: 8, width: '100%', borderRadius: 4, marginTop: 6, marginBottom: 6 };
    case 'rect':
    default:
      return { height: 40, width: '100%', borderRadius: 0 };
  }
}

const Skeleton = ({
  element: Element = 'div',
  type = 'rect',
  width,
  height,
  style: propStyle,
  className,
}) => {
  const elementRef = useRef();

  const rect = useBoundingRect(elementRef);
  const windowDimensions = useWindowDimensions();

  const skeletonStyle = useMemo(() => {
    const newStyle = getStyleByType(type);
    newStyle.width = width || newStyle.width;
    newStyle.height = height || newStyle.height;
    newStyle.backgroundSize = `${windowDimensions.width > 0 ? windowDimensions.width : 4000}px 100%`;
    newStyle.backgroundPosition = `${-rect.boundingRect.x}px 0`;
    return newStyle;
  }, [
    type, 
    width, 
    height, 
    windowDimensions.width, 
    rect.boundingRect.x
  ]);

    return (
      <Element
        ref={elementRef}
        style={{ ...propStyle, ...skeletonStyle }} 
        className={`${className ? `${className} ` : '' }Skeleton-root Skeleton-type-${type} Skeleton-anim-wave`} 
      />
    )

}

Skeleton.propTypes = {
  element: PropTypes.oneOf(['div', 'span']),
  type: PropTypes.oneOf(['rect', 'circle', 'text']),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  style: PropTypes.shape({}),
  className: PropTypes.string,
}

export default Skeleton;