import React, { Component } from "react";

import "../css/stylesMenu.css";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a id="home" href="/">Home</a>
            </li>
            <li>
              <a href="/users/table">Users_Table</a>
            </li>
            <li>
              <a href="/users/list">Users_List</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/rating">Rating</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
