import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './FooterMenu.scss';

const FooterMenu = () => (
  <>
    <Navbar className="footer-menu">
      <Navbar.Brand className="footer-icon" to="/"><img src="/images/logo-footer.svg" alt="logo" /></Navbar.Brand>
      <Nav className="mr-auto w-25 nav-justified pdt-20">
        <Nav.Link href="#">Buy</Nav.Link>
        <Nav.Link href="#">Sell</Nav.Link>
        <Nav.Link href="#">News</Nav.Link>
        <Nav.Link href="#">Services</Nav.Link>
      </Nav>
      <ul className="fa fa-3x">
        <FontAwesomeIcon className="pdr-10" icon={faTwitter} />
        <FontAwesomeIcon className="pdr-10" icon={faLinkedin} />
        <FontAwesomeIcon className="pdr-10" icon={faFacebook} />
      </ul>
    </Navbar>
  </>
);

export default FooterMenu;
