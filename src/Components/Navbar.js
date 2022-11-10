import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'
export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >App</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link > <Link className='Links' to="/"> All-Post </Link>  </Nav.Link>
      {/* <Nav.Link >  <Link  className='Links' to="/user">   Users</Link> </Nav.Link> */}
      <Nav.Link >  <Link  className='Links' to="/addpost">   Add-Post </Link> </Nav.Link>
      <Nav.Link >  <Link className='Links' to="/allalbum">  AllAlbum </Link> </Nav.Link>
      <Nav.Link >  <Link className='Links' to="/addalbum">  AddAlbum </Link></Nav.Link> 
      </Nav>
    </Container>
  </Navbar>
  )
}
