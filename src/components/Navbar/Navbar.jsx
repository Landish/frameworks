import React from 'react';
import { func, bool } from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import config from '../../config.json';
import logo from '../../assets/logo.svg';

const Navbar = ({ onNavToggle, isMenuOpened }) => {
  const toggleClass = classNames('nav-toggle', {
    'is-active': isMenuOpened
  });
  const navClass = classNames('nav-right', 'nav-menu', {
    'is-active': isMenuOpened
  });
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <div className="nav-item">
            <img src={logo} alt={config.title} />
            {config.title}
          </div>
        </div>
        <span onClick={onNavToggle} className={toggleClass}>
          <span />
          <span />
          <span />
        </span>
        <div className={navClass}>
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
            <span className="tag is-white is-small">{config.version}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onNavToggle: func.isRequired,
  isMenuOpened: bool
};

Navbar.defaultProps = {
  isMenuOpened: false
};

export default Navbar;
