import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp, faThumbsDown,
} from '@fortawesome/free-solid-svg-icons';
import './likedislike.scss';

library.add(faThumbsUp, faThumbsDown);

const createButton = (onClick, icon, cssClass, likeDislikeCount) => (
  <React.Fragment key={icon}>
    <button type="button" onClick={onClick} className="thumbs mr-2"><FontAwesomeIcon icon={icon} /></button>
    <span className={cssClass}>{(likeDislikeCount >= 0) ? likeDislikeCount : 0}</span>
  </React.Fragment>
);

const LikeDislike = ({
  onLike, onDislike, likes, dislikes,
}) => {
  const buttons = [
    {
      onClick: onLike,
      icon: 'thumbs-up',
      cssClass: 'mr-4',
      likeDislikeCount: likes,
    },
    {
      onClick: onDislike,
      icon: 'thumbs-down',
      cssClass: '',
      likeDislikeCount: dislikes,
    },
  ];
  return (
    <div className="article-like-dislike">
      <form>
        {buttons.map(bt => createButton(bt.onClick, bt.icon, bt.cssClass, bt.likeDislikeCount))}
      </form>
    </div>
  );
};

LikeDislike.propTypes = {
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default LikeDislike;
