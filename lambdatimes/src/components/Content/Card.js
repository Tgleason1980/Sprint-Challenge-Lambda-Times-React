import React from 'react';
import { tabData } from '../../data';


const Card = props => {
  const {
  headline,
  img,
  author,
} = props;
  return (
    <div className="card">
      <div className="headline">{headline /* headline goes here */}</div>
      <div className="author">
        <div className="img-container">
          <img src={img}/>
        </div>
        <span>By {author/* author goes here */}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
