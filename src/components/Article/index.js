import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser, faClock, faCalendar, faEye, faCheck, faThumbsUp, faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import './article.scss';
import LikeDislike from '../LikeDislike';

library.add(faUser, faClock, faCalendar, faEye, faCheck, faThumbsUp, faThumbsDown);

const Article = ({ onLike, onDislike, article }) => (
  article.title ? (
    <div className="full-article">
      <div className="article-title">
        <h1>{article.title}</h1>
        <p className="text-white">{article.description}</p>
      </div>
      <div className="container">
        <div className="article-image text-center">
          <img src={article.image_url} alt="poster" />
        </div>
        <div className="article-small-details">
          <span>
            <FontAwesomeIcon icon="user" />
            <div className="author">{article.author.username}</div>
          </span>
          <span>
            <FontAwesomeIcon icon="clock" />
            <div className="readtime">{`${article.read_time} min read`}</div>
          </span>
          <span>
            <FontAwesomeIcon icon="calendar" />
            <div className="created-at">{`Created: ${article.created_at}`}</div>
          </span>
          <span>
            <FontAwesomeIcon icon="calendar" />
            <div className="updated-at">{`Updated: ${article.updated_at}`}</div>
          </span>
        </div>
        <div className="article-taglist">
          {article.tag_list.map(tag => <span key={tag}>{tag}</span>)}
        </div>
        <div className="article-body text-justify">
          <div className="dots text-center large"> ... </div>
          {article.body}
        </div>
        <div className="article-stats">
          <LikeDislike
            onLike={onLike}
            onDislike={onDislike}
            likes={article.likes}
            dislikes={article.dislikes}
          />

          <div className="article-views">
            <FontAwesomeIcon icon="eye" />
            <span className="pl-2"># Views</span>
          </div>
        </div>
      </div>
    </div>
  ) : null
);

Article.propTypes = {
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
};

export default Article;
