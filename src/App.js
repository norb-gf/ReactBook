import { Component } from "react";
import Router from './components/Router'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;