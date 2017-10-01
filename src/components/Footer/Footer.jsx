import React, { PureComponent } from 'react';
import Link from '../Link';
import config from '../../config.json';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>{config.title}</strong> by
              <Link url="http://landish.github.io/" text="Lado Lomidze" />
            </p>
            <p>
              Built with
              <Link url="https://reactjs.org" text="React" />
              &nbsp;&amp;
              <Link url="http://bulma.io/" text="Bulma" />
            </p>
            <p>&copy; 2016-2017</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
