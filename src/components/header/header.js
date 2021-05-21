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
import faceImg from '../../images/face.jpeg';

import styled from './Header.module.scss';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/login';


const Header = (props) => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

  const doLogout = () => {
    props.logoutUser();
  }

  if (!props.isAuthenticated) {
    // cant access login page while logged in
    return <Redirect to={'/login'} />;
  }

  return (
    <Navbar className={styled.root}>
      <Nav>
        <NavItem className={cx(styled.navBars, styled.headerIcon)}>
          <Button onClick={props.toggleSidebar}>
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
            <span className="badge badge-pill badge-primary">12</span>
          </Button>
        </NavItem>
        <NavItem className={styled.headerIcon}>
          <Button>
            <AiFillBell />
            <span className="badge badge-pill badge-primary">1</span>
          </Button>
        </NavItem>
        <Dropdown className={cx(styled.dropdown, "ml-3")} isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle nav>
            <img className={cx('rounded-circle mr-sm', styled.faceImg)} src={faceImg} alt="face img" />
            <span>Administrator</span>
            <RiArrowDropDownLine />
          </DropdownToggle>
          <DropdownMenu style={{width: '100%'}}>
            <DropdownItem>
              <NavLink to="/app/profile">Profile</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/app/posts">Posts</NavLink>
            </DropdownItem>
            <DropdownItem onClick={doLogout}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.login.isAuthenticated,
  };
}

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);