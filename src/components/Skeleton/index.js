import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import useBoundingRect from '../../hooks/useClientBoundingRect';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const getStyleByType = (type) => {
  switch(type) {
    case 'circle':
      return { height: 40, width: 40, borderRadius: 100000 }
    case 'text':
      return { height: 12, width: '100%', borderRadius: 6, marginTop: 4, marginBottom: 4 };
    case 'rect':
    default:
      return { height: 40, width: '100%', borderRadius: 0 };
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
  className = '',
}) => {
  const elementRef = useRef();
  const childRef = useRef();

  const rect = useBoundingRect(elementRef);
  const childRect = useBoundingRect(childRef);
  const windowDimensions = useWindowDimensions();

  const skeletonStyle = useMemo(() => {
    const newStyle = getStyleByType(type);
    newStyle.width = width || childRect.boundingRect.width || newStyle.width;
    newStyle.height = height || childRect.boundingRect.height || newStyle.height;
    newStyle.backgroundSize = `${windowDimensions.width > 0 ? windowDimensions.width : 4000}px 100%`;
    newStyle.backgroundPosition = `${-rect.boundingRect.x}px 0`;
    return newStyle;
  }, [
    type, 
    width, 
    childRect.boundingRect.width, 
    childRect.boundingRect.height, 
    height, 
    windowDimensions.width, 
    rect.boundingRect.x
  ]);

  const clonedChild =  useMemo(() => {
    if (children) {
      const child = React.Children.only(children);
      return React.cloneElement(child, { ref: childRef })
    }
    return null;
  }, [children]);

  // const [childStyles, setChildStyles] = useState({
  //   marginLeft: undefined,
  //   marginRight: undefined,
  //   marginBottom: undefined,
  //   marginTop: undefined,
  //   borderRadius: undefined
  // });
  // useEffect(() => {
  //   if (typeof window !== 'undefined' && childRef.current) {
  //     const computedStyles = window.getComputedStyle(childRef.current);
  //     setChildStyles({
  //       marginLeft: computedStyles.marginLeft,
  //       marginRight: computedStyles.marginRight,
  //       marginBottom: computedStyles.marginBottom,
  //       marginTop: computedStyles.marginTop,
  //       borderRadius: computedStyles.borderRadius
  //     })
  //   }
  // }, [clonedChild, childRef]);

    return (
      <>
        {!loading ? clonedChild : (
          <Element
            ref={(r) => {
              elementRef.current = r;
            }}
            style={{ ...propStyle, ...skeletonStyle }} 
            className={`${className} Skeleton-root Skeleton-type-${type} Skeleton-anim-wave`} 
          />
        )}
      </>
    )

}

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rect', 'circle', 'text']),
  style: PropTypes.shape({})
}

export default Skeleton;