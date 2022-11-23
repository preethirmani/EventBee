import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect bg='dark' 
       expand="lg" variant='dark'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='navbar-brand'>eventbee</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="ms-auto">
            <Nav.Link href="/">Create Event</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header