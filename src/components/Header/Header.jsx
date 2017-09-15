import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import config from '../../config.json';

class Header extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <section className="hero is-info is-medium">
        <div className="hero-head">
          {this.props.children}
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
  }
}

export default Header;
