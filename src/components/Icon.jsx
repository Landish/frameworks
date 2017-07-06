import React from 'react';

const Icon = ({ name }) => {
  return (
    <span className="icon is-small">
      <i className={`fa fa-${name}`}/>
    </span>
  );
};

export default Icon;