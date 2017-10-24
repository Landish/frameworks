import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Link from '../Link';

class DemoButton extends PureComponent {
  render() {
    return (
      <Link url={this.props.url} className="button is-fixed is-small is-info is-outlined">
        <Icon name="eye" />
        <span>Demo</span>
      </Link>
    );
  }
}

DemoButton.propTypes = {
  url: PropTypes.string.isRequired,
};

DemoButton.defaultProps = {
  url: '',
};

export default DemoButton;
