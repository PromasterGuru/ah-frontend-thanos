import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postRating, postRatingData, fetchRatingThunk } from '../../actions/ratingActions';
import { Rating, RatingDisplay } from '../../components/Rating';


class RatingPage extends Component {
  componentWillMount() {
    const { getRatingArticle } = this.props;
    getRatingArticle();
  }

  handleChange = (event) => {
    const { ratingData } = this.props;
    ratingData({ [event.target.name]: Number(event.target.value) });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { ratingArticle, ratingReducer } = this.props;
    ratingArticle({ ...ratingReducer.ratingPostData });
  }

  render() {
    const { ratingReducer } = this.props;
    return (
      <div>
        <Rating
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <div>
          {
            ratingReducer.rating
              ? <RatingDisplay article={ratingReducer} />
              : <span>Loading...</span>
        }
        </div>
      </div>
    );
  }
}

RatingPage.propTypes = {
  getRatingArticle: PropTypes.func.isRequired,
  ratingArticle: PropTypes.func.isRequired,
  ratingData: PropTypes.func.isRequired,
  ratingReducer: PropTypes.shape({}).isRequired,
};


const mapStateToProps = ({ ratingReducer }) => ({ ratingReducer });

export const mapDispatchToProps = dispatch => ({
  getRatingArticle: () => dispatch(fetchRatingThunk()),
  ratingArticle: rate => dispatch(postRating(rate)),
  ratingData: rate => dispatch(postRatingData(rate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingPage);
