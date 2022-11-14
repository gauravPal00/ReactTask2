
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css'
export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >App</Navbar.Brand>
        <Nav style={{ width: "100%" }}>
        <NavLink className='Links'  to="/">All-Post</NavLink>
        <NavLink className='Links'  to="/addpost"> Add-Post </NavLink>
          <NavLink className='Links' to="/allalbum">   AllAlbum </NavLink>
          <NavLink className='Links' to="/addalbum">   AddAlbum </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
