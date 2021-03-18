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
            <Navbar color="success" className="navbar navbar-light bg-light py-auto fixed-top" light expand="md" style={{padding:`10px`}}>
          <NavbarBrand>reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto "navbar>
          
          <NavItem className=" py-1">
            <NavLink className="px-5 chh" to="/listing" activeClassName="active text-white"> Listing</NavLink>
          </NavItem>
          <NavItem className=" py-1">
            <NavLink className="px-5 chh" to="/corousal" activeClassName="active text-white"> Corousal</NavLink>
          </NavItem>
          <NavItem className="py-1">
            <NavLink className="px-5 chh" to="/hero" activeClassName="active text-white">Hero</NavLink>
          </NavItem>
              
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
        </div>
    )
}
