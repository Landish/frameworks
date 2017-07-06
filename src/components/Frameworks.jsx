import React from 'react';
import Icon from './Icon';
import { toInstall } from '../utils';

const Frameworks = ({ frameworks, visible }) => {
  return (
    <div className="section is-x">
      <div className="container">
        <h2 className="title">Frameworks</h2>
        <table className="table has-text-centered is-striped is-bordered">
          <thead>
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
          </thead>
          <tbody>
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
                          bower i -S {toInstall(framework, 'bower')}
                        </code>
                      </pre>
                      <pre>
                        <code>
                          npm i -S {toInstall(framework, 'npm')}
                        </code>
                      </pre>
                      <pre>
                        <code>
                          yarn add {toInstall(framework, 'yarn')}
                        </code>
                      </pre>
                    </td>
                  );
                })}
            </tr>
            <tr>
              <td>
                <strong>Github Stats</strong>
              </td>
              {frameworks
                .filter(framework => visible.has(framework.slug))
                .map(framework => {
                  return (
                    <td key={framework.slug}>
                      <span className="tag is-small is-dark">
                        <Icon name="code-fork" />
                        {framework.stats.forks}
                      </span>
                      <span className="tag is-small is-dark">
                        <Icon name="star" />
                        {framework.stats.stars}
                      </span>
                    </td>
                  );
                })}
            </tr>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Frameworks;
