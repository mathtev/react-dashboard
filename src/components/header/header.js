import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMail } from 'react-icons/ai';
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
      <Navbar>
        <Nav>
          left navbar left leftleftleftleftleftleftleftleftleftleftleft
        </Nav>
        <Nav className="ml-auto">
          right navbar right
        </Nav>
      </Navbar>
    );
  }
}

export default Header;