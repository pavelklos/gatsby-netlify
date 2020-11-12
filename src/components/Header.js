import React from "react"
// import headerStyles from './Header.module.css'
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "gatsby"

export default (props) => (
  // <div>
  //   <h1 className={headerStyles.example}>{props.title}</h1>
  // </div>
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Gatsby-Bootstrap {props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/"><b className="text-dark">Home</b></Nav.Link>
          <Nav.Link as={Link} to="/about/"><b className="text-dark">About</b></Nav.Link>
          <Nav.Link as={Link} to="/contact/"><b className="text-dark">Contact Us</b></Nav.Link>
          <Nav.Link as={Link} to="/test/"><b className="text-dark">Test</b></Nav.Link>

          {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
        {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      </Navbar.Collapse>
    </Navbar >
  </header>
)