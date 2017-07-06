import React from 'react';
import logo from '../assets/logo.svg';
import Icon from './Icon';

const Header = ({ onNavToggle, isMenuOpened }) => {
  return (
    <section className="hero is-info is-medium">
      <div className="hero-head">
        <nav className="nav">
          <div className="container">
            <div className="nav-left">
              <div className="nav-item">
                <img src={logo} alt="Comparison of Front-End Frameworks" />{' '}
                Comparison of Front-End Frameworks
              </div>
            </div>
            <span
              onClick={onNavToggle}
              className={`nav-toggle ${isMenuOpened ? 'is-active' : ''}`}
            >
              <span />
              <span />
              <span />
            </span>
            <div
              className={`nav-right nav-menu ${isMenuOpened
                ? 'is-active'
                : ''}`}
            >
              <a
                href="https://github.com/Landish/frameworks"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-item"
              >
                <Icon name="github" />
                Github
              </a>
              <a
                href="https://github.com/Landish/frameworks/issues"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-item"
              >
                <Icon name="bug" /> Issues
              </a>
              <a
                href="https://github.com/Landish/frameworks/blob/master/CHANGELOG.md"
                rel="noopener noreferrer"
                target="_blank"
                className="nav-item"
              >
                <Icon name="list-ul" />
                Changelog
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title">
            <img src={logo} alt="Comparison of Front-End Frameworks" />
            Comparison of Front-End Frameworks
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
