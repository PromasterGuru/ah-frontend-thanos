import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfileAction } from '../../actions/profileActions';
import ViewProfile from '../../components/Profile/viewProfile';

export class Profile extends Component {
  componentDidMount() {
    const { dispatch, match: { params: { username } } } = this.props;
    dispatch(getProfileAction(username));
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.isLoggedIn === false) {
      const { history } = this.props;
      history.push('/login');
    }
  }

  render() {
    const {
      profile: {
        username, image, bio, firstname, lastname,
      },
    } = this.props;
    return (
      <ViewProfile
        username={username}
        image={image}
        bio={bio}
        first_name={firstname}
        lastname={lastname}
      />
    );
  }
}

Profile.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  match: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  profile: PropTypes.shape({}),
  history: PropTypes.shape({}).isRequired,
};

Profile.defaultProps = {
  profile: {},
};
const mapStateToProps = ({ profileReducer }) => ({
  profile: profileReducer.profile,
});
export default connect(mapStateToProps)(Profile);
