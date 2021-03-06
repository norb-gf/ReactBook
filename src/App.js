import { Component } from "react";
import Router from "./components/Router";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-menu">
          <Menu />
        </div>
        <div className="App-router">
          <Router />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
