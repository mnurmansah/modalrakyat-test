import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './NavibarMenu.scss';

const NavibarMenu = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light navibar-menu">
      <a className="navbar-brand navibar-icon" href="/"><img src="/images/logo.svg" alt="logo" className="image" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 w-50 nav-justified pdt-20 fs-12">
          <li className="nav-item active">
            <a className="nav-link" href="#">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sell</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
        </ul>
        <Button className="btn custom-button">+ ADD LISTING</Button>
      </div>
    </nav>
  </>
);

export default NavibarMenu;
