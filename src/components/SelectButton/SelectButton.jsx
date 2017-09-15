import React, { Component } from 'react';
import { shape, string, func, bool } from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

class SelectButton extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.isSelected !== nextProps.isSelected;
  }

  buttonClass = () =>
    classNames('button', 'is-checkbox', 'is-info', {
      'is-outlined': !this.props.isSelected
    });

  iconClass = () =>
    classNames({
      'check-square': this.props.isSelected,
      square: !this.props.isSelected
    });

  static propTypes = {
    framework: shape({
      slug: string.isRequired,
      name: string.isRequired
    }),
    onClick: func.isRequired,
    isNew: bool.isRequired,
    isSelected: bool.isRequired
  };

  static defaultProps = {
    isNew: false,
    isSelected: false
  };

  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick(this.props.framework.slug);
        }}
        className={this.buttonClass()}
      >
        <Icon name={this.iconClass()} />
        <span>
          {this.props.framework.name}
        </span>
        {this.props.isNew && <span className="tag is-warning">New</span>}
      </button>
    );
  }
}

export default SelectButton;
