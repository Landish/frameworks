import React from 'react';
import logo from '../../assets/logo.svg';
import config from '../../config.json';

const Header = ({ children }) => {
  return (
    <section className="hero is-info is-medium">
      <div className="hero-head">
        {children}
      </div>
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title">
            <img src={logo} alt={config.title} />
            {config.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
