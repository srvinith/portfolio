import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Resume from '../Assets/resume/Vinith.pdf'
import { HiMenuAlt2 } from "react-icons/hi";

const Header = () => {

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingUp = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    if (isScrollingUp || currentScrollPos < 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [click, setClick] = useState(false)
    // const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  return (
    <div className='header-con'  style={{display: visible ? 'block' : 'none' }}>
         <Navbar expand="lg" className="navs" fixed='top' data-bs-theme="dark" variant='dark'>
      <Container>
        <Navbar.Brand className='logo' href="#"><h1>Vinith</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 mx-4 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="/" activeClassName="active">Home</Nav.Link>
            <Nav.Link className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="#about">About Me</Nav.Link>
            <Nav.Link className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="#work">Works</Nav.Link>
            <Nav.Link className={click ? "nav-links active" : "nav-links"} onClick={closeMenu} href="#contact">Contact</Nav.Link>
           
          </Nav>
          
        </Navbar.Collapse>
        <a className='resume-btn' href={Resume} download>Resume</a>
      </Container>
    </Navbar>

    </div>
  )
}

export default Header