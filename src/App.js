import { Component } from "react";
import Products from "./components/Products";
import { Button } from "react-bootstrap";
import Rating from "./components/Rating";
import JumboTronComponent from "./components/JumboTronComponent";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import GitHubUser from "./components/User";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">React-Bootstrapt</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users List</Nav.Link>
                <Nav.Link href="/userform">User Form</Nav.Link>
                <Nav.Link href="/products">Products</Nav.Link>
                <Nav.Link href="/rating">Rating</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users" component={UserList} />
            <Route path="/user/:login/:id" component={GitHubUser} />
            <Route path="/userform" component={UserForm} />
            <Route path="/products" component={Products} />
            <Route path="/rating" component={RatingMenu} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

class RatingMenu extends Component {
  render() {
    // const IsValid = true;
    const IsValid = false;
    return (
      <div>
        <JumboTronComponent>
          This is a long text that will extends more than a few steps. A people,
          a lot of people that have sleep yesterday
        </JumboTronComponent>
        <Rating rating="1" />
        <Rating rating="5" />
        <Rating rating="3" />
        <Rating rating="2" />
        <Rating rating="4" />
        <Button variant="primary" disabled={!IsValid}>
          Default
        </Button>
      </div>
    );
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
