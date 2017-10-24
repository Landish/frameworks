import React from 'react';
import PropTypes from 'prop-types';
import DemoButton from '../DemoButton';
import NotAvailable from '../NotAvailable';
import Collection from '../../core/Collection';

const ComponentsList = ({ frameworks, visible, components }) => {
  function renderHeader() {
    return (
      <thead>
        <tr>
          <th className="is-first">
            <span className="is-dark">Component Name</span>
          </th>
          {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
            return (
              <th key={framework.slug}>
                <span className="is-dark">
                  {framework.name}
                </span>
              </th>
            );
          })}
        </tr>
      </thead>
    );
  }

  function renderFooter() {
    return (
      <tfoot>
        <tr>
          <th className="is-first">
            <span className="is-dark">Component Name</span>
          </th>
          {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
            return (
              <th key={framework.slug}>
                <span className="is-dark">
                  {framework.name}
                </span>
              </th>
            );
          })}
        </tr>
      </tfoot>
    );
  }

  return (
    <div className="section">
      <div className="container is-x is-fullhd">
        <h2 className="title">List of Components</h2>
        <table className="table has-text-centered is-striped is-bordered">
          {renderHeader()}
          <tbody>
            {components.map(component => {
              return (
                <tr key={component.name.toLowerCase()}>
                  <td>
                    <span className="tag is-info is-rounded">
                      {component.name}
                    </span>
                  </td>

                  {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
                    const supportsComponent = component.supports[framework.slug];
                    return (
                      <td key={framework.slug}>
                        {supportsComponent && <DemoButton url={supportsComponent} />}

                        {!supportsComponent && <NotAvailable />}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
          {renderFooter()}
        </table>
      </div>
    </div>
  );
};

ComponentsList.propTypes = {
  frameworks: PropTypes.array.isRequired,
  visible: PropTypes.instanceOf(Collection).isRequired,
  components: PropTypes.array.isRequired
};

export default ComponentsList;
