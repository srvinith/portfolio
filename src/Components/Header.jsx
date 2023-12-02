import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-con'>
         <Navbar expand="lg" className="navs" fixed='top' data-bs-theme="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#"><h1>Vinith</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-4 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className='nav-links' as={Link} exact to="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="#about">About Me</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="#work">Works</Nav.Link>
            <Nav.Link className='nav-links' as={Link} to="#contact">Contact</Nav.Link>
           
          </Nav>
          <div className='resume-btn'>Resume</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header