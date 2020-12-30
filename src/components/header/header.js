import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMail, AiOutlineSearch } from 'react-icons/ai';
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

import styled from './header.module.scss';


class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  render() {
    return (
      <Navbar className={styled.root}>
        <Nav>
          <NavItem>
            <InputGroup>
              <Input placeholder="Search for..." />
              <InputGroupAddon addonType="append" className="px-2">
                <AiOutlineSearch />
              </InputGroupAddon>
            </InputGroup>
          </NavItem>
        </Nav>
        <Nav className="ml-auto">
          right navbar right
        </Nav>
      </Navbar>
    );
  }
}

export default Header;