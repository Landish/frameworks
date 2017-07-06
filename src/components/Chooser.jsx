import React from 'react';
import Icon from './Icon';

const Chooser = ({frameworks, visible, onClick}) => {

  return (
    <div className="section has-text-centered" id="chooser">
      <div className="container">
        <h2 className="title is-5">Select <strong>at least 2</strong> and <strong>maximum 4</strong> front-end
          frameworks and compare them to each other.</h2>
        <div className="notification">
          {frameworks.map(framework => {
            return (
              <button
                key={framework.slug}
                onClick={() => { onClick(framework.slug) }}
                className={`${ visible.has(framework.slug) ? '' : 'is-outlined '}button is-checkbox is-info`}>
                <Icon name={visible.has(framework.slug)? 'check-square' : 'square'}/>
                {framework.name}
              </button>
            );
          })}
        </div>
        {/*todo: alert about exceeded*/}
      </div>
    </div>
  );
};

export default Chooser;
