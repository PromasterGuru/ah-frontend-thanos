import React from 'react';
import './profile.scss';
import PropTypes from 'prop-types';


const ViewProfile = (props) => {
  const {
    username, image, bio,
  } = props;

  return (
    <div className="container mt-5 mb-5 container">
      <h1 className="viewProfiletitle"> My Profile</h1>
      <hr />
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 mw-100 ">
          <img
            src={image || 'http://www.macmillanenglish.com/img/author-image.png'}
            className="img-fluid"
            alt="user profile pic"
          />
          <div className="text-center text-black-50  h-25">
            {' '}
            {username || 'Username'}
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 desc">
          <div className="p-3 mb-2 bg-secondary text-white outer-div ">
            <div className="p-3 mb-2 bg-light text-dark">
              <p>
                {bio || 'This is my biography'}
              </p>
            </div>
            <a href="/profile/:username" className="btn btn-outline-primary button">Edit Profile</a>
          </div>
        </div>
      </div>
    </div>

  );
};
ViewProfile.propTypes = {
  username: PropTypes.shape({}).isRequired,
  image: PropTypes.shape({}),
  bio: PropTypes.shape({}),
};
ViewProfile.defaultProps = {
  image: '',
  bio: '',
};
export default ViewProfile;
