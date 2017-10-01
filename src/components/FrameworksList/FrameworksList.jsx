import React from 'react';
import { array, instanceOf } from 'prop-types';
import Icon from '../Icon';
import Link from '../Link';
import { toInstall } from '../../core/utils';
import Collection from '../../core/Collection';

const FrameworksList = ({ frameworks, visible }) => {
  const renderNoBadge = () => <span className="tag is-rounded is-small is-danger">No</span>;

  const renderHeader = () => {
    return (
      <tr>
        <th className="is-first" />
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <th key={framework.slug}>
              <span data-title={framework.description} className="tag is-tooltip is-info">
                {framework.name}
              </span>
            </th>
          );
        })}
      </tr>
    );
  };

  const renderLinksRow = () => {
    return (
      <tr>
        <td>
          <strong>Links</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              <div className="field has-addons has-text-centered">
                <div className="control">
                  <Link url={framework.url} className="button is-small is-info is-outlined">
                    <Icon name="globe" />
                    <span className="button-text">Website</span>
                  </Link>
                </div>
                <div className="control">
                  <Link
                    url={framework.documentation}
                    className="button is-small is-info is-outlined"
                  >
                    <Icon name="book" />
                    <span className="button-text">Docs</span>
                  </Link>
                </div>
                <div className="control">
                  <Link url={framework.github} className="button is-small is-info is-outlined">
                    <Icon name="github" />
                    <span className="button-text">GitHub</span>
                  </Link>
                </div>
              </div>
            </td>
          );
        })}
      </tr>
    );
  };

  const renderInstallRow = () => {
    return (
      <tr>
        <td>
          <strong>How To Install?</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
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
  };

  const renderStatsRow = () => {
    return (
      <tr>
        <td>
          <strong>Github Stats</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              <div className="tag-group">
                <Link
                  url={`${framework.github}/stargazers`}
                  className="tag is-space is-rounded is-small is-dark"
                >
                  <Icon name="star" />
                  {framework.stats.stars}
                </Link>
                <Link
                  url={`${framework.github}/network`}
                  className="tag is-rounded is-small is-dark"
                >
                  <Icon name="code-fork" />
                  {framework.stats.forks}
                </Link>
              </div>
            </td>
          );
        })}
      </tr>
    );
  };

  const renderVersionRow = () => {
    return (
      <tr>
        <td>
          <strong>Latest Version</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              <Link
                url={`${framework.github}/releases`}
                className="tag is-space is-rounded is-small is-info"
              >
                <Icon name="history" />
                <span>
                  v{framework.version}
                </span>
              </Link>
            </td>
          );
        })}
      </tr>
    );
  };

  const renderIconsRow = () => {
    return (
      <tr>
        <td>
          <strong>Icons</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              {framework.icons &&
                <Link
                  url={framework.icons.url}
                  tooltip={framework.icons.name}
                  className="tag is-rounded is-small is-success"
                  text="Yes"
                />}
              {!framework.icons && <span className="tag is-rounded is-small is-danger">No</span>}
            </td>
          );
        })}
      </tr>
    );
  };

  const renderCSSRow = () => {
    return (
      <tr>
        <td>
          <strong>CSS Preprocessor</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              {framework.css &&
                <Link
                  url={framework.css === 'LESS' ? 'http://lesscss.org/' : 'http://sass-lang.com/'}
                  className="tag is-rounded is-small is-info"
                >
                  {framework.css}
                </Link>}
              {!framework.css && renderNoBadge()}
            </td>
          );
        })}
      </tr>
    );
  };

  const renderJSRow = () => {
    return (
      <tr>
        <td>
          <strong>JS Library</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              {framework.js &&
                <Link
                  url={framework.js}
                  className="tag is-rounded is-small is-success"
                  text="Yes"
                />}
              {!framework.js && renderNoBadge()}
            </td>
          );
        })}
      </tr>
    );
  };

  const renderLicenceRow = () => {
    return (
      <tr>
        <td>
          <strong>License</strong>
        </td>
        {frameworks.filter(framework => visible.has(framework.slug)).map(framework => {
          return (
            <td key={framework.slug}>
              {framework.licence &&
                <Link
                  url={framework.licence.url}
                  className="tag is-rounded is-small is-info"
                  text={framework.licence.name}
                />}
              {!framework.licence &&
                <Link
                  url="https://opensource.org/licenses/MIT"
                  className="tag is-rounded is-small is-info"
                  text="MIT"
                />}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div className="section is-x">
      <div className="container is-fullhd">
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
  frameworks: array.isRequired,
  visible: instanceOf(Collection).isRequired
};

export default FrameworksList;
