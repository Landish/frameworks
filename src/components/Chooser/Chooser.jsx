import React from 'react';
import { array, func, number, instanceOf } from 'prop-types';
import SelectButton from '../SelectButton';
import Collection from '../../core/Collection';

const Chooser = ({ frameworks, minimum, maximum, visible, onFrameworkSelect }) => {
  return (
    <div className="section has-text-centered">
      <div className="container is-fullhd">
        <h2 className="subtitle is-5">
          Select <strong>at least {minimum}</strong> and <strong>maximum {maximum}</strong>{' '}
          front-end frameworks and compare them to each other.
        </h2>
        <div className="notification">
          {frameworks.map(framework => {
            return (
              <SelectButton
                key={framework.slug}
                isNew={framework.isNew}
                isSelected={visible.has(framework.slug)}
                framework={framework}
                onClick={() => {
                  onFrameworkSelect(framework.slug);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

Chooser.propTypes = {
  frameworks: array.isRequired,
  visible: instanceOf(Collection).isRequired,
  onFrameworkSelect: func.isRequired,
  minimum: number,
  maximum: number
};

Chooser.defaultProps = {
  minimum: 2,
  maximum: 4
};

export default Chooser;
