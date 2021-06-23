import React, { Component } from 'react';

import '../css/stylesGeneral.css';

class JumboTron extends Component {

  render() { 
    return (
      <div>                
            <h1>Hello, world!</h1>
            <p>{this.props.children}</p>
            <p><button className="btn">Learn more</button></p>
      </div>
    );
  }  
}

export default JumboTron