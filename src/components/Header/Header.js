import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../Context/UserContext';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>

            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">Hotel Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            {
                                user?.uid ?
                                    <button className='btn btn-warning' onClick={logOut}>Log Out</button>
                                    :
                                    <>
                                        <Nav.Link href="/login">Login</Nav.Link>
                                        <Nav.Link href="/signUp">Registration</Nav.Link>
                                    </>
                            }

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item><span>{user?.email}</span></NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;