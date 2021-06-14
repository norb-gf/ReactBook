import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {

  render() { 
    return (
      <div>                
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>{this.props.children}</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
        </Jumbotron>                                                                                                                                 
      </div>
    );
  }  
}

export default JumboTronComponent