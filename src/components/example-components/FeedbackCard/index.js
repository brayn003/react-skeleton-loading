import React from 'react';
import Skeleton from '../../Skeleton';

import './style.css';

const FeedbackCard = ({ loading }) => {
  return (
    <div className="FeedbackCard-container">
      <div className="FeedbackCard-user-container">
        {loading ? (
          <Skeleton type="circle" width={80} height={80} />
        ) : (
          <div 
            className="FeedbackCard-avatar" 
            style={{backgroundImage:`url(https://cdn.faceshapeapp.com/q/Jrb2KdW_mdJlFGBR__256x256.jpg?w=640)`}} 
          />
        )}
      </div>
      <div className="FeedbackCard-description-container">
        {loading ? (
          <>
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
            <Skeleton type="text" />
          </>
        ) : (
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        )}
      </div>
    </div>
  )
}

export default FeedbackCard;