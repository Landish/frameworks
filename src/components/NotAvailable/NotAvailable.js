import React, { PureComponent } from 'react';
import Icon from '../Icon';

class NotAvailable extends PureComponent {
  render() {
    return (
      <span
        data-tooltip="Not Available"
        disabled={false}
        className="button is-static is-tooltip is-fixed is-small is-danger is-outlined"
      >
        <Icon name="eye-slash" />
        <span>N / A</span>
      </span>
    );
  }
}

export default NotAvailable;
