import React, { Component } from "react";
import "../css/stylesGeneral.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer>
        <div className="App-footer">
          <span>Mensagem de rodapé</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
