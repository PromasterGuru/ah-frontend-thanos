import React from 'react';
import PropTypes from 'prop-types';

const ArticleDisplay = ({ article }) => (
  <div className="article-card">
    <div className="image-wrapper">
      <img src={article.image_url} alt="poster" />
    </div>
    <div className="text-section">
      <div className="title-section">{article.title}</div>
      <div className="body-section">{article.body.slice(0, 150)}</div>
      <div className="date-section">{article.created_at}</div>
      <button className="read-more" type="button">
        Read More
      </button>
    </div>
  </div>
);
ArticleDisplay.propTypes = {
  article: PropTypes.shape({}).isRequired,
};

export default ArticleDisplay;
