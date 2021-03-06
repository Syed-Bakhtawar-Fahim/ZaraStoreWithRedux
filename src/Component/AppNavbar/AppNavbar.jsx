import React from 'react'
import { Navbar, Container, Nav, Form, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./AppNavbar.css"

const AppNavbar = () => {
  return(
    <Navbar expand="lg" className = "navbarColor">
      <Container fluid>
      <Link to = "/" className='navbar__logo'>Zara Shopping Store</Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className='NavUl'>Home</Link>
            <Link to="/" className='NavUl'>Men's</Link>
            <Link to="/" className='NavUl'>Women's</Link>
            <Link to="/" className='NavUl'>Kid's</Link>
            
            
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Pants</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                T-Shirts
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Pant Coat
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Find your best matches"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success searchBtn">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar