import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './FooterMenu.scss';

const FooterMenu = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light footer-menu">
      <a className="navbar-brand navibar-icon" href="/"><img src="/images/logo-footer.svg" alt="logo" className="image" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 w-50 nav-justified pdt-20 fs-12">
          <li className="nav-item active">
            <a className="nav-link" href="!#">Buy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">Sell</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">Services</a>
          </li>
        </ul>
        <ul className="fa fa-3x">
          <FontAwesomeIcon className="pdr-10" icon={faTwitter} />
          <FontAwesomeIcon className="pdr-10" icon={faLinkedin} />
          <FontAwesomeIcon className="pdr-10" icon={faFacebook} />
        </ul>
      </div>
    </nav>
  </>
);

export default FooterMenu;
