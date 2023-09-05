import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import '../../index.css';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' bg='dark'>
      <Container>
        <Navbar.Brand href='#home' style={{ color: 'white' }}>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' style={{ color: 'white' }}>
              Home
            </Nav.Link>
            <Nav.Link href='#link' style={{ color: 'white' }}>
              Link
            </Nav.Link>
          </Nav>
          <Nav className='ml-auto'>
            <Nav.Link href='###' className='justify-content-end'>
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: 'white', fontSize: 20 }}
              />
            </Nav.Link>
            <Nav.Link href='###' className='justify-content-end'>
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: 'white', fontSize: 20 }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
