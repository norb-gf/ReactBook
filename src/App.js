import { Component } from "react";
import RouterMenu from './components/RouterMenu'
import Header from './components/Header'
import Footer from './components/Footer'
import './css/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RouterMenu />
        {/* <UserList /> */}
        <Footer />
      </div>
    );
  }
}

export default App;