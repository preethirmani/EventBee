import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import SearchEvent from './SearchEvent';


const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' 
       expand="lg" variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='navbar-brand'>eventbee</Navbar.Brand>
        </LinkContainer>
        <div>
            <SearchEvent />
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="ms-auto">
            <LinkContainer to="/program/create/">
              <Nav.Link >Create Event</Nav.Link>
            </LinkContainer>
            <Nav.Link href="/">Login</Nav.Link>      
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header