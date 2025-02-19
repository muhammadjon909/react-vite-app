import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useCallback } from 'react';
import LoginModal from './Modal';
import './navbar.css';

function NavScrollExample({ setSearch }) {
  const handleSearch = useCallback(
    (e) => {
      setSearch(e.target.value.toLowerCase());
    },
    [setSearch]
  );

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#121212' }}>
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#ffffff' }}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home" style={{ color: '#ffffff' }}>HOME</Nav.Link>
            <Nav.Link href="#link" style={{ color: '#ffffff' }}>LINK</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
              onChange={handleSearch}
              style={{
                backgroundColor: '#1f1f1f',
                color: '#ffffff',
                border: '1px solid #333333'
              }}
            />
          </Form>
          <LoginModal />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
