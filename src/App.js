import { Component } from "react";
import RouterMenu from './components/RouterMenu'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterMenu />
        {/* <UserList /> */}
        <Footer />
      </div>
    );
  }
}

export default App;