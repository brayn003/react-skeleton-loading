import React, { createRef, useEffect, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import useBoundingRect from '../../hooks/useClientBoundingRect';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const getStyleByType = (type) => {
  switch(type) {
    case 'circle':
      return { height: 40, width: 40, borderRadius: 100000 }
    case 'text':
      return { height: 16, width: '100%' };
    case 'rect':
    default:
      console.log('recrt')
      return { height: 40, width: '100%' };
  }
}

const Skeleton = ({
  element: Element = 'div',
  type = 'rect',
  loading = false,
  children = null,
  width,
  height,
  style: propStyle,
}) => {
  const elementRef = useRef();
  const childRef = useRef();

  const rect = useBoundingRect(elementRef);
  const windowDimensions = useWindowDimensions();

  const skeletonStyle = useMemo(() => {
    const newStyle = getStyleByType(type);
    if(width) {
      newStyle.width = width;
    }
    if(height) {
      newStyle.height = height;
    }
    newStyle.backgroundSize = `${windowDimensions.width > 0 ? windowDimensions.width : 4000}px 100%`;
    newStyle.backgroundPosition = `${-rect.x}px 0`;

    return newStyle;
  }, [type, width, height, windowDimensions.width, rect.x]);

  const clonedChild =  useMemo(() => {
    const child = React.Children.only(children);
    return React.cloneElement(child, { ref: childRef })
  }, [children]);

  useEffect(() => {
    console.log({childRef})
  }, [clonedChild]);

  return (
    <div style={propStyle} className="Skeleton-root">
      {loading ? (
        <Element
          ref={elementRef}
          style={skeletonStyle} 
          className={`Skeleton-inner Skeleton-type-${type} Skeleton-anim-wave`} 
        />
      ) : (clonedChild)}
    </div>
  )
}

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rect', 'circle', 'text']),
  style: PropTypes.shape({})
}

export default Skeleton;