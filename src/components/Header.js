import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

import "../css/styles.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="header">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrapt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users/table">Users_Table</Nav.Link>
                <Nav.Link href="/users/list">Users_List</Nav.Link>
                <Nav.Link href="/user/formik">User_Formik</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/rating">Rating</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Header;
