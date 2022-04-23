import React from 'react'
import restinnlogo from '../assets/img/RestInnLogo.png'

import { Container, NavItem } from 'react-bootstrap'
import {Nav , Navbar} from  'react-bootstrap'
import {Form} from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import {Link} from "react-router-dom";

import {BsSearch} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";



const Header = () => {
  return (
          <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container id="Header">
            <Navbar.Brand>  {/*<Navbar.Brand href="#home"></Navbar.Brand> */}
            <Link to="/">
              <img alt = "" src={restinnlogo} className = "img-fluid rounded d-inline-block align-top rounded" width = "120" height = "100" length="100"></img>
            </Link>
            </Navbar.Brand>
          
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className ="ms-auto">
              <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success" id="searchIcon"><BsSearch/></Button>
              </Form>
            
              <Nav>
              <Nav.Link> <Link to="/Property"><div id="vacprop">Vacation Properties</div></Link></Nav.Link>
              
              <NavDropdown img={GiHamburgerMenu} id="collasible-nav-dropdown">
               <NavDropdown.Item><div id="dropdown"><Link to="/signup">Sign Up</Link></div></NavDropdown.Item>
                <NavDropdown.Item><div id="dropdown"><Link to="/login">Log In</Link></div></NavDropdown.Item>
                
              </NavDropdown>
              
              </Nav>
          
            </Nav>
            </Navbar.Collapse>
          </Container>
          </Navbar>
          </>
   
  )
}

export default Header
