import React from 'react';
import * as PropTypes from 'prop-types';
import StarRegular from '../icons/StarRegular';
import StarSolid from '../icons/StarSolid';

export const ratingLink = (contral, onChange, rateId, rateValue, rateDisplayed) => (
  <label className="radio-inline mr-2" htmlFor={contral} onChange={onChange}>
    <input type="radio" name="rating" id={rateId} value={rateValue} />
    <span className="ml-2">{rateDisplayed}</span>
  </label>
);

export const Rating = ({ onSubmit, onChange }) => (
  <div>
    <div>
      <form className="form-horizontal" onSubmit={onSubmit}>
        <div className="ml-2">
          <p>Rate the article</p>
        </div>
        <div className="form-group">
          <div className="col-sm-10 ml-1" id="rating-form">
            {ratingLink('rating1', onChange, 'rating1', '1', '1')}
            {ratingLink('rating2', onChange, 'rating2', '2', '2')}
            {ratingLink('rating3', onChange, 'rating3', '3', '3')}
            {ratingLink('rating4', onChange, 'rating4', '4', '4')}
            {ratingLink('rating5', onChange, 'rating5', '5', '5')}
          </div>
        </div>
        <button type="submit">Submit Rate</button>
      </form>
    </div>
  </div>
);

Rating.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const renderStar = (article) => {
  const articleRating = article.rating.rating;
  return Array.from({ length: 5 }, (item, index) => {
    const count = index + 1;
    return count <= articleRating ? <StarSolid key={index} /> : <StarRegular key={index} />;
  });
};

export const RatingDisplay = ({ article }) => (
  <div>
    <hr />
    <div>
      <p className="ml-1">Aricle Rating</p>
      {renderStar(article)}
    </div>
  </div>
);

RatingDisplay.propTypes = {
  article: PropTypes.shape({}).isRequired,
};
