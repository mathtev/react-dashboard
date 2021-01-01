import React, { useState } from 'react';
import cx from 'classnames';
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

import { AiOutlineSearch, AiFillBell } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoMdSettings } from 'react-icons/io';
import faceImg from '../../images/face.jpeg';

import styled from './Header.module.scss';


const Header = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <Navbar className={styled.root}>
      <Nav>
      <NavItem className={cx(styled.navBars, styled.headerIcon)}>
          <Button>
            <FaBars />
          </Button>
        </NavItem>
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
        <NavItem className={styled.headerIcon}>
          <Button>
            <GrMail />
          </Button>
        </NavItem>
        <NavItem className={styled.headerIcon}>
          <Button>
            <AiFillBell />
          </Button>
        </NavItem>
        <NavItem className={styled.headerIcon}>
          <Button>
            <IoMdSettings />
          </Button>
        </NavItem>
        <Dropdown className={styled.dropdown} isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav>
            <img className={cx('rounded-circle mr-sm', styled.faceImg)} src={faceImg} alt="face img" />
            <span>Administrator</span>
            <RiArrowDropDownLine />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              1st item
              </DropdownItem>
            <DropdownItem>
              2st item
              </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}


export default Header;