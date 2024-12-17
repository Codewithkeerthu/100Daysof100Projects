import React, { useState } from 'react';
import './index.css';

const ReviewsCarousel = ({ reviewsList }) => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(1);

  const onClickRightArrow = () => {
    if (activeReviewIndex < reviewsList.length - 1) {
      setActiveReviewIndex(prevIndex => prevIndex + 1);
    }
  };

  const onClickLeftArrow = () => {
    if (activeReviewIndex > 0) {
      setActiveReviewIndex(prevIndex => prevIndex - 1);
    }
  };

  const renderActiveReview = review => {
    const { imgUrl, username, companyName, description } = review;

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    );
  };

  const currentReviewDetails = reviewsList[activeReviewIndex];

  return (
    <div className="app-container">
      <h1 className="heading">Reviews</h1>
      <div className="carousel-container">
        <button
          type="button"
          onClick={onClickLeftArrow}
          testid="leftArrow"
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {renderActiveReview(currentReviewDetails)}
        <button
          type="button"
          onClick={onClickRightArrow}
          testid="rightArrow"
          className="arrow-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
