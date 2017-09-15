import React, { Component } from 'react';
import config from '../../config.json';

class Footer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>{config.title}</strong> by
              <a href="http://landish.github.io/" target="_blank" rel="noopener noreferrer">
                Lado Lomidze
              </a>.
            </p>
            <p>
              Built with
              <a href="https://facebook.github.io/react/" rel="noopener noreferrer" target="_blank">
                React
              </a>
              &nbsp;&amp;
              <a href="http://bulma.io/" rel="noopener noreferrer" target="_blank">
                Bulma
              </a>.
            </p>
            <p>&copy; 2016-2017</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
