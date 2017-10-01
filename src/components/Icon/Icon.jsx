import React, { PureComponent } from 'react';
import { string } from 'prop-types';

class Icon extends PureComponent {
  static propTypes = {
    name: string.isRequired
  };

  render() {
    return (
      <span className="icon is-small">
        <i className={`fa fa-${this.props.name}`} />
      </span>
    );
  }
}

export default Icon;
