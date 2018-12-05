import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditProfile from '../../components/Profile/editProfile';
import { editProfileAction } from '../../actions/profileActions';
import { editProfile, uploadImage } from '../../actions/actionCreators';

export class EditProfilePage extends Component {
  handleUpdateFields = (event) => {
    const { name, value } = event.target;
    const { getUserInputs } = this.props;
    getUserInputs({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { editProfileDispatch } = this.props;
    editProfileDispatch();
  };

  handleUpload = () => {
    const widget = window.cloudinary.openUploadWidget({
      cloud_name: process.env.REACT_APP_CLOUD_NAME,
      upload_preset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      cropping: true,
      folder: 'widgetdocs',
      sources: ['local', 'url', 'camera', 'facebook', 'dropbox', 'search', 'instagram'],
    }, (error, result) => {
      if (result.event === 'success') {
        const { editProfileDispatch } = this.props;
        this.dispatch(uploadImage({ image: result.info.secure_url }));
        editProfileDispatch();
        widget.close();
      }
    });
    widget.open();
  };

  render() {
    return (
      <EditProfile
        onChange={this.handleUpdateFields}
        onSubmit={this.handleSubmit}
        onClick={this.handleUpload}
      />
    );
  }
}

EditProfile.propTypes = {
  editProfileDispatch: PropTypes.func.isRequired,
  getUserInputs: PropTypes.func.isRequired,
  freshProfile: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ profileReducer }) => (
  { freshProfile: profileReducer.freshProfile }
);
export const mapDispatchToProps = dispatch => (
  {
    editProfileDispatch: profile => dispatch(editProfileAction(profile)),
    getUserInputs: obj => dispatch(editProfile(obj)),
  }
);
export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage);
