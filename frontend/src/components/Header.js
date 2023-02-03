import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import SearchEvent from './SearchEvent';
import {login, logout} from '../actions/userActions';


const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <Navbar collapseOnSelect bg='dark'
       expand="lg" variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='navbar-brand'>eventbee</Navbar.Brand>
        </LinkContainer>
       
           {userInfo? (
            
            <NavDropdown  title={userInfo.name} className='nav-dropdown'
            id='basic-nav-dropdown'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
          ) :   (<LinkContainer to="/login">
                <Nav.Link className='nav-dropdown'><i className='fas fa-user'></i> Sign In</Nav.Link>
              </LinkContainer>)}
      </Container>
    </Navbar>
    </header>
  )
}

export default Header