import { Component } from "react";
import Products from "./components/Products";
import { Button } from 'react-bootstrap'
import Rating from './components/Rating'
import JumboTronComponent from './components/JumboTronComponent'
import UserForm from './components/UserForm'
import GitHubAPP from './services/GitHubAPI'

class App extends Component {
  render() {

  // const IsValid = true;
  const IsValid = false;

    return (
      <div className="App">
        <UserForm />
        <GitHubAPP />
        <JumboTronComponent>
          This is a long text that will extends more than a few steps. A people, a lot of people
          that have sleep yesterday
        </JumboTronComponent>
        <Products />
        <Rating rating="1" />
        <Rating rating="5" />
        <Rating rating="3" />
        <Rating rating="2" />
        <Rating rating="4" />
        <Button variant='primary' disabled={!IsValid}>Default</Button>
      </div>
    );
  }
}

export default App;
