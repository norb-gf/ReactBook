import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import '../css/stylesGeneral.css';

class JumboTron extends Component {

  render() { 
    return (
      <div>                
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>{this.props.children}</p>
            <p><Button className="btn btn-primary">Learn more</Button></p>
        </Jumbotron>                                                                                                                                 
      </div>
    );
  }  
}

export default JumboTron