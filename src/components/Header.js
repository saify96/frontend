import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Link from 'react-router-dom/Link'
import Nav from 'react-bootstrap/Nav'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >LOGO</Navbar.Brand>
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/favorite">Favorite</Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
