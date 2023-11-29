import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div className='header-con'>
         <Navbar expand="lg" className="navs" fixed='top' data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#"><h1>Vinith</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-4 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-links active' href="#">Home</Nav.Link>
            <Nav.Link className='nav-links' href="#">About Me</Nav.Link>
            <Nav.Link className='nav-links' href="#">Works</Nav.Link>
            <Nav.Link className='nav-links' href="#">Contact</Nav.Link>
           
          </Nav>
          <div className='resume-btn'>Resume</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header