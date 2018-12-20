import React from 'react';

class Header extends React.Component{

    render(){
        return (
            <header className="app-header navbar">
      <button className="navbar-toggler sidebar-toggler d-lg-none mr-auto" type="button" data-toggle="sidebar-show">
       
      </button>
      <a className="navbar-brand" href="#">
        <img className="navbar-brand-full" src="img/brand/logo.svg" width="89" height="25" alt="CoreUI Logo"/>
        <img className="navbar-brand-minimized" src="img/brand/sygnet.svg" width="30" height="30" alt="CoreUI Logo"/>
      </a>
      <button className="navbar-toggler sidebar-toggler d-md-down-none" type="button" data-toggle="sidebar-lg-show">
        
      </button>
      <ul className="nav navbar-nav d-md-down-none">
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Widgety</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Swieta</a>
        </li>
        <li className="nav-item px-3">
          <a className="nav-link" href="#">Miasta</a>
        </li>
      </ul>
      </header>
        )
    }
}
export default Header; 