import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => (
  <Fragment >
    <input {...props} />
  </Fragment>
);

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default InputField;
