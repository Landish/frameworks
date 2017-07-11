import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ name }) => {
  return (
    <span className="icon is-small">
      <i className={`fa fa-${name}`} />
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
