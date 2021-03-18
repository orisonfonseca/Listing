import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  navbar,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { NavLink as ReactLink } from 'react-router-dom';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="success" className="navbar navbar-info bg-info py-auto" light expand="md" style={{padding:`10px`}}>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto "navbar>
          
          <NavItem className=" py-1">
            <NavLink className="px-2 chh" to="/upload" activeClassName="active text-white"> upload</NavLink>
          </NavItem>
          <NavItem className=" py-1">
            <NavLink className="px-2 chh" to="/view" activeClassName="active text-white"> view</NavLink>
          </NavItem>
            
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
        </div>
    )
}
