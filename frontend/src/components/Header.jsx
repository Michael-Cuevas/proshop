import {Navbar, Nav, Container, NavLink} from 'react-bootstrap';
import {FaShoppingCart, FaUser} from 'react-icons/fa';
import logo from '../assets/logo.png'

import React from 'react'

const Header = () => {
  return (
    <header>
        <Navbar bg = "dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt='ProShop' />
                    ProShop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/cart">
                            <FaShoppingCart/> Cart
                        </Nav.Link>
                        <NavLink href="/login">
                            <FaUser/> Sign In                           
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header