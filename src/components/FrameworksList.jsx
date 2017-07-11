import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import { toInstall } from '../utils';
import Collection from '../core/Collection';

const FrameworksList = ({ frameworks, visible }) => {
  function renderHeader() {
    return (
      <tr>
        <th className="is-first" />
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <th key={framework.slug}>
                <span
                  data-title={framework.description}
                  className="tag is-tooltip is-info"
                >
                  {framework.name}
                </span>
              </th>
            );
          })}
      </tr>
    );
  }

  function renderLinksRow() {
    return (
      <tr>
        <td>
          <strong>Links</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                <div className="field has-addons has-text-centered">
                  <div className="control">
                    <a
                      href={framework.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button is-small is-info is-outlined"
                    >
                      <Icon name="globe" />
                      <span className="button-text">Website</span>
                    </a>
                  </div>
                  <div className="control">
                    <a
                      href={framework.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button is-small is-info is-outlined"
                    >
                      <Icon name="book" />
                      <span className="button-text">Docs</span>
                    </a>
                  </div>
                  <div className="control">
                    <a
                      className="button is-small is-info is-outlined"
                      href={framework.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="github" />
                      <span className="button-text">GitHub</span>
                    </a>
                  </div>
                </div>
              </td>
            );
          })}
      </tr>
    );
  }

  function renderInstallRow() {
    return (
      <tr>
        <td>
          <strong>How To Install?</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td className="no-padding" key={framework.slug}>
                <pre>
                  <code>
                    {toInstall(framework, 'bower')}
                  </code>
                </pre>
                <pre>
                  <code>
                    {toInstall(framework, 'npm')}
                  </code>
                </pre>
                <pre>
                  <code>
                    {toInstall(framework, 'yarn')}
                  </code>
                </pre>
              </td>
            );
          })}
      </tr>
    );
  }

  function renderStatsRow() {
    return (
      <tr>
        <td>
          <strong>Github Stats</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                <div className="tag-group">
                  <span className="tag is-small is-dark">
                    <Icon name="code-fork" />
                    {framework.stats.forks}
                  </span>
                  <span className="tag is-small is-dark">
                    <Icon name="star" />
                    {framework.stats.stars}
                  </span>
                </div>
              </td>
            );
          })}
      </tr>
    );
  }

  function renderVersionRow() {
    return (
      <tr>
        <td>
          <strong>Latest Version</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${framework.github}/releases`}
                  className="tag is-small is-info"
                >
                  <Icon name="history" />
                  <span>
                    v{framework.version}
                  </span>
                </a>
              </td>
            );
          })}
      </tr>
    );
  }

  function renderIconsRow() {
    return (
      <tr>
        <td>
          <strong>Icons</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                {framework.icons &&
                  <a
                    data-title={framework.icons.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag is-tooltip is-small is-success"
                    href={framework.icons.url}
                  >
                    Yes
                  </a>}
                {!framework.icons &&
                  <span className="tag is-small is-danger">No</span>}
              </td>
            );
          })}
      </tr>
    );
  }

  function renderCSSRow() {
    return (
      <tr>
        <td>
          <strong>CSS Preprocessor</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                <span className="tag is-small is-info">
                  {framework.css}
                </span>
              </td>
            );
          })}
      </tr>
    );
  }

  function renderJSRow() {
    return (
      <tr>
        <td>
          <strong>JS Library?</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                {framework.js &&
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag is-small is-success"
                    href={framework.js}
                  >
                    Yes
                  </a>}
                {!framework.js &&
                  <span className="tag is-small is-danger">No</span>}
              </td>
            );
          })}
      </tr>
    );
  }

  function renderLicenceRow() {
    return (
      <tr>
        <td>
          <strong>License</strong>
        </td>
        {frameworks
          .filter(framework => visible.has(framework.slug))
          .map(framework => {
            return (
              <td key={framework.slug}>
                {framework.licence &&
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tag is-small is-info"
                    href={framework.licence.url}
                  >
                    {framework.licence.name}
                  </a>}
                {!framework.licence &&
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://opensource.org/licenses/MIT"
                    className="tag is-small is-info"
                  >
                    MIT
                  </a>}
              </td>
            );
          })}
      </tr>
    );
  }

  return (
    <div className="section is-x">
      <div className="container">
        <h2 className="title">List of Frameworks</h2>
        <table className="table has-text-centered is-striped is-bordered">
          <thead>
            {renderHeader()}
          </thead>
          <tbody>
            {renderLinksRow()}
            {renderInstallRow()}
            {renderStatsRow()}
            {renderVersionRow()}
            {renderIconsRow()}
            {renderCSSRow()}
            {renderJSRow()}
            {renderLicenceRow()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

FrameworksList.propTypes = {
  frameworks: PropTypes.array.isRequired,
  visible: PropTypes.instanceOf(Collection).isRequired
};

export default FrameworksList;
