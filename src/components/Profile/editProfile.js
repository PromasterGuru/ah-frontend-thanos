import React from 'react';
import './profile.scss';
import PropTypes from 'prop-types';

const formElements = [
  {
    inputType: 'text',
    elementId: 'first_name',
    placeholder: 'First Name',
  },
  {
    inputType: 'text',
    elementId: 'last_name',
    placeholder: 'Last Name',
  },
];

const FormInput = ({ el, onChange }) => {
  const { inputType, elementId, placeholder } = el;
  return (

    <div className="form-group">
      <input
        type={inputType}
        placeholder={placeholder}
        className="form-control"
        id={elementId}
        name={elementId}
        onChange={onChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  el: PropTypes.shape({
    inputType: PropTypes.string.isRequired,
    elementId: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

const EditProfile = ({ onSubmit, onChange, onClick }) => (

  <div className="container">
    <h1 className="title">Edit Profile</h1>
    <hr />
    <div className="row">
      <div className="col-md-3">
        <div className="text-center">
          <img src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/46369806_2116095768452511_152387389577232384_n.jpg?_nc_cat=106&_nc_ht=scontent-jnb1-1.xx&oh=6a5c22acd1b1a9e9058cf07f10c8426f&oe=5CAA0106" className="img-fluid" alt="avatar" />
          <h6>Upload a different photo...</h6>
          <input type="file" className="form-control" onInput={onClick} />
          <div className="col-lg-8 mt-2">
            <button type="submit" className="btn button">Save Changes</button>
          </div>
        </div>

      </div>

      <div className="col-md-9 personal-info">
        <h3 className="pl-3">Personal info</h3>

        <form className="form-horizontal" onSubmit={onSubmit}>
          {formElements.map(el => <FormInput onChange={onChange} el={el} key={el.elementId} />)}
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="bio"
            onChange={onChange}
            placeholder="Tell us something about yourself."
          />
          <div className="col-lg-8">
            <button type="submit" className="btn  btn-outline-primary mt-4 button" onClick={onSubmit}>Save Changes</button>
            <span className="mr-2" />
            <button type="submit" className="btn btn-outline-danger mt-4">Cancel</button>
          </div>
        </form>
      </div>

    </div>
  </div>

);
EditProfile.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onClick: PropTypes.func,
};
EditProfile.defaultProps = {
  onChange: true,
  onSubmit: true,
  onClick: true,
};

export default EditProfile;
