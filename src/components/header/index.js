import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import logoWhite from '../../assets/logo-white.svg';

import { MenuBar } from './style';

const Header = () => (
  <MenuBar>
    <div className="logo">
      <img src={logoWhite} alt="logo-white" />
    </div>
    <nav>
      <ul>
        <li>
          <button type="button">Início</button>
        </li>
        <li>
          <button type="button">Buscar</button>
        </li>
        <li>
          <Link to="/profile">
            <button type="button">Novo meetup</button>
          </Link>
        </li>
      </ul>
    </nav>
    <Link to="/profile">
      <button type="button" className="user-menu-button">
        <FontAwesomeIcon className="icon-user" icon={faUser} />
      </button>
    </Link>
  </MenuBar>
);

export default Header;
