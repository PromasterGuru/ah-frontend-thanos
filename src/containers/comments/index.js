import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CommentsPage, CommentForm } from '../../components/comments';
import { AllComments, CommentInput, PostComment } from '../../actions/commentActions';
import '../../components/comments/comments.scss';

class Comments extends Component {
  componentWillMount() {
    const { getArticlecomments } = this.props;
    getArticlecomments();
  }

  handleOnChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const { commentInputFun, comments } = this.props;
    commentInputFun({ ...comments.commentInput, [name]: value });
  }

  handleComment = (event) => {
    event.preventDefault();
    const { comments: allComments, postComment } = this.props;
    postComment({ comments: { ...allComments.commentInput } });
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="comment">
        <CommentForm
          onChange={this.handleOnChange}
          onSubmit={this.handleComment}
        />
        <div>
          {
            comments.getCommentData
              ? <CommentsPage comments={comments} />
              : <span />
          }
        </div>
      </div>
    );
  }
}
Comments.propTypes = {
  getArticlecomments: propTypes.func.isRequired,
  comments: propTypes.shape({}).isRequired,
  commentInputFun: propTypes.func.isRequired,
  postComment: propTypes.func.isRequired,

};

const mapStateToProps = ({ comments }) => (
  { comments }
);

const mapDispatchToProps = dispatch => (
  {
    getArticlecomments: () => dispatch(AllComments()),
    commentInputFun: data => dispatch(CommentInput(data)),
    postComment: data => dispatch(PostComment(data)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
