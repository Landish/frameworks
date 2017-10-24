import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  render() {
    return (
      <span className="icon is-small">
        <i className={`fa fa-${this.props.name}`} />
      </span>
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
