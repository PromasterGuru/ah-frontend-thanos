import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from '../../components/Article';
import { likeDislikeArticleThunk } from '../../actions/likedislikeActions';
import { getArticleThunk, getLikeStatusThunk } from '../../actions/articleActions';

class ArticlePage extends Component {
  componentDidMount() {
    // savea a token directly for now, till we rebase with the Login PR
    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzUsInVzZXJuYW1lIjoiamFja3NvbmJsYWNrIiwiZW1haWwiOiJqYWNrc29uYmxhY2tAZ21haWwuY29tIiwiZXhwIjoxNTQ0MjQzMTk2fQ.-hQKk4mcR-R1_kabuci9Y58jtxTz2t4WkGmLrx051Us');
    const token = localStorage.getItem('token');

    // get the id from the URl and pass it to a thunk action
    const { getArticleDispatch, getLikeDislikeStatusDispatch, match } = this.props;
    const { articleId } = match.params;
    getLikeDislikeStatusDispatch({ articleId, token });
    getArticleDispatch(articleId);
  }

  handleLike = () => {
    const { likeDislikeArticleDispatch, article, match } = this.props;
    const { likeDislikeStatus } = article;
    likeDislikeArticleDispatch({
      like_status: 'like',
      articleId: match.params.articleId,
      token: localStorage.getItem('token'),
      likeDislikeStatus,
    });
  }

  handleDislike = () => {
    const { likeDislikeArticleDispatch, article, match } = this.props;
    const { likeDislikeStatus } = article;
    likeDislikeArticleDispatch({
      like_status: 'dislike',
      articleId: match.params.articleId,
      token: localStorage.getItem('token'),
      likeDislikeStatus,
    });
  }

  render() {
    const { article } = this.props;
    return (
      <Article onDislike={this.handleDislike} onLike={this.handleLike} article={article} />
    );
  }
}

ArticlePage.propTypes = {
  match: PropTypes.shape({}).isRequired,
  likeDislikeArticleDispatch: PropTypes.func.isRequired,
  getArticleDispatch: PropTypes.func.isRequired,
  getLikeDislikeStatusDispatch: PropTypes.func.isRequired,
  article: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ articleReducer }) => ({
  article: articleReducer.article,
});
const mapDispatchToProps = dispatch => ({
  getArticleDispatch: articleId => dispatch(getArticleThunk(articleId)),
  getLikeDislikeStatusDispatch: likeObj => dispatch(getLikeStatusThunk(likeObj)),
  likeDislikeArticleDispatch: likeObj => dispatch(likeDislikeArticleThunk(likeObj)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
