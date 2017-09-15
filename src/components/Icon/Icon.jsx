import React, { Component } from 'react';
import { string } from 'prop-types';

class Icon extends Component {
  static propTypes = {
    name: string.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return this.props.name !== nextProps.name;
  }

  render() {
    return (
      <span className="icon is-small">
        <i className={`fa fa-${this.props.name}`} />
      </span>
    );
  }
}

export default Icon;
