import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './style.css';

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
  width,
  height,
}) => {

  const style = useMemo(() => {
    const newStyle = getStyleByType(type);
    if(width) {
      newStyle.width = width;
    }
    if(height) {
      newStyle.height = height;
    }
    return newStyle;
  }, [type, width, height]);

  return (
    <Element 
      style={style} 
      className={`Skeleton-root Skeleton-type-${type} Skeleton-anim-wave`} 
    />
  )
}

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rect', 'circle', 'text']),
  style: PropTypes.shape({})
}

export default Skeleton;