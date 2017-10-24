import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

class SelectButton extends PureComponent {
  buttonClass = () =>
    classNames('button', 'is-checkbox', 'is-info', {
      'is-outlined': !this.props.isSelected,
    });

  iconClass = () =>
    classNames({
      'check-square': this.props.isSelected,
      square: !this.props.isSelected,
    });

  render() {
    return (
      <button
        onClick={() => {
          this.props.onClick(this.props.framework.slug);
        }}
        className={this.buttonClass()}
      >
        <Icon name={this.iconClass()} />
        <span>{this.props.framework.name}</span>
        {this.props.isNew && <span className="tag is-warning">New</span>}
      </button>
    );
  }
}

SelectButton.propTypes = {
  framework: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
  isNew: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

SelectButton.defaultProps = {
  isNew: false,
  isSelected: false,
};

export default SelectButton;
