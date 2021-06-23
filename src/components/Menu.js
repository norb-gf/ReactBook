import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import "../css/stylesGeneral.css";
import "../css/stylesMenu.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="menu d-flex">
        <Navbar expand="sm">
          <Navbar.Brand className="ml-auto" href="/">
            React-Bootstrapt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="menu-item" href="/">
                Home
              </Nav.Link>
              <Nav.Link className=" menu-item" href="/users/table">
                Users_Table
              </Nav.Link>
              <NavDropdown title="Users" id="usersDropDown">
                <NavDropdown.Item className="menu-item" href="/users/list">
                  Users_List
                </NavDropdown.Item>
                <NavDropdown.Item className="menu-item" href="/users/list">
                  Users_List
                </NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item className="menu-item" href="/users/list">
                  Users_List
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="menu-item" href="/products">
                Products
              </Nav.Link>
              <Nav.Link className="menu-item" href="/rating">
                Rating
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
