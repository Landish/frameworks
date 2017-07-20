import React from 'react';
import { string } from 'prop-types';

const Icon = ({ name }) => {
  return (
    <span className="icon is-small">
      <i className={`fa fa-${name}`} />
    </span>
  );
};

Icon.propTypes = {
  name: string.isRequired
};

export default Icon;
