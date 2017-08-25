import React from 'react';
import { shape, string, func, bool } from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';

const SelectButton = ({ framework, onClick, isNew, isSelected }) => {
  const buttonClass = classNames('button', 'is-checkbox', 'is-info', {
    'is-outlined': !isSelected
  });

  const iconClass = classNames({
    'check-square': isSelected,
    square: !isSelected
  });

  return (
    <button
      onClick={() => {
        onClick(framework.slug);
      }}
      className={buttonClass}
    >
      <Icon name={iconClass} />
      <span>
        {framework.name}
      </span>
      {isNew && <span className="tag is-warning">New</span>}
    </button>
  );
};

SelectButton.propTypes = {
  framework: shape({
    slug: string.isRequired,
    name: string.isRequired
  }),
  onClick: func.isRequired,
  isNew: bool.isRequired,
  isSelected: bool.isRequired
};

SelectButton.defaultProps = {
  isNew: false,
  isSelected: false
};

export default SelectButton;
