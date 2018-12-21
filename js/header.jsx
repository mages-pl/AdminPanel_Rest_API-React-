import React from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header style={{ top: 0 }} className="app-header navbar">
        <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">

        </button>
        <a className="navbar-brand" href="#">
          <img className="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo" />
          <img className="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo" />
        </a>
        <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        </button>
        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item px-3">
            <Link to="/city">Miasta</Link>
          </li>
          <li className="nav-item px-3">
            <Link to="/holidays">Swieta</Link>
          </li>
        </ul>
      </header>
    )
  }
}
export default Header;




