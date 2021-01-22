import React from 'react';
import Skeleton from '../../Skeleton';

import './style.css';

const InstaCard = ({ loading }) => {
  return (
    <div className="InstaCard-container">
      <div className="InstaCard-header-container">
        <Skeleton loading={loading}>
          <div className="InstaCard-avatar" style={{backgroundImage:`url(https://i.pravatar.cc/200)`}} />
        </Skeleton>
        <div>
          <p className="InstaCard-username">Rudraprasad Das</p>
          <p className="InstaCard-location">Mumbai</p>
        </div>
      </div>
      <div className="InstaCard-img-container">
        <div>
          <img 
            className="InstaCard-img"
            alt="Breathtaking Mountains" 
            src="https://i.pinimg.com/originals/71/e0/31/71e031b044ef320acefbfbf9123c2786.jpg" 
          />
        </div>
      </div>
      <div className="InstaCard-inner-container">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  )
}

export default InstaCard;