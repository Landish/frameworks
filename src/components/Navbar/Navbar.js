import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Link from '../Link';
import config from '../../config.json';
import logo from '../../assets/logo.svg';

const Navbar = ({ onNavToggle, isMenuOpened }) => {
  const toggleClass = classNames('nav-toggle', {
    'is-active': isMenuOpened,
  });
  const navClass = classNames('nav-right', 'nav-menu', {
    'is-active': isMenuOpened,
  });
  return (
    <nav className="nav">
      <div className="container is-fullhd">
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
          <Link url="https://github.com/Landish/frameworks.now.sh" className="nav-item">
            <Icon name="github" />
            Source Code
          </Link>
          <Link
            url="https://github.com/Landish/frameworks.now.sh/blob/master/CHANGELOG.md"
            className="nav-item"
          >
            <span className="tag is-white is-small">v{config.version}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  onNavToggle: PropTypes.func.isRequired,
  isMenuOpened: PropTypes.bool,
};

Navbar.defaultProps = {
  isMenuOpened: false,
};

export default Navbar;
