import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navibar.scss';

const Navibar = () => (
  <>
    <Navbar className="navibar-top">
      <Navbar.Brand href="#home" />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto w-25 nav-justified">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Help</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown title="English">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Hi, Username! " id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default Navibar;
