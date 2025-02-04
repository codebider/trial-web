import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Pages } from '../routes/constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Xendit</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavbarText>
                <Link to={Pages.home}>Home</Link>
              </NavbarText>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link to={Pages.login}>Logout</Link>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
