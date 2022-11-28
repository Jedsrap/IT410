import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Main</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/aboutus">About us</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;