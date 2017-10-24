import React, { PureComponent } from 'react';
import { string, node } from 'prop-types';
import classnames from 'classnames';

class Link extends PureComponent {
  static propTypes = {
    url: string.isRequired,
    text: string,
    className: string,
    children: node,
    tooltip: string
  };

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

export default Link;
