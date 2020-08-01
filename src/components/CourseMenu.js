import React from 'react';
import {NavDropdown, Nav, Navbar} from 'react-bootstrap';

const CourseMenu = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Course" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/addCourse">Add Course</NavDropdown.Item>
                    <NavDropdown.Item href="/displayCourse">Display Course</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default CourseMenu;