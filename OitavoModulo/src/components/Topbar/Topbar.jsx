import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';
import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to="/">
        <LogoSvg className="topbar__logo" />
      </Link>
      <div className="topbar__group">
        <button type="button" className="topbar__icon">
          <Link to="/users">
            <i className="fas fa-users" />
            <span>Usuários</span>
          </Link>
        </button>
        <button type="button" className="topbar__icon">
          <Link to="/newuser">
            <i className="fas fa-user-plus" />
            <span>Nova Conta</span>
          </Link>
        </button>
      </div>
    </div>
  </header>
);
export default Topbar;