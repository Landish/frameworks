import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Link extends PureComponent {
  render() {
    return (
      <a
        href={this.props.url}
        data-tooltip={this.props.tooltip}
        target="_blank"
        rel="noopener noreferrer"
        className={classnames({ 'is-tooltip': this.props.tooltip }, this.props.className)}
      >
        {this.props.text}
        {this.props.children}
      </a>
    );
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  tooltip: PropTypes.string
};

export default Link;
