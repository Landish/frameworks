import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Comparison of Front-End Frameworks</strong> by <a href="http://landish.github.io/" target="_blank"
                                                                      rel="noopener noreferrer">Landish</a>.
          </p>
          <p>
            Built with <a href="https://facebook.github.io/react/" rel="noopener noreferrer" target="_blank">React</a> &amp; <a href="http://bulma.io/" rel="noopener noreferrer" target="_blank">Bulma</a>.
          </p>
          <p>
            &copy; 2016-2017
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;