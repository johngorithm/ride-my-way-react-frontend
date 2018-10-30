import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import InputField from 'components/Atom/InputField';

const InputGroup = ({ classes, error, label, ...props}) => (
  <Fragment >
    <div className={classes}>
      <p className="smaller">
        {label} {error ? <span className="error-message">{error}</span> : null } 
      </p>
      <InputField {...props} />
    </div>
  </Fragment>
);

InputGroup.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string
};

export default InputGroup;