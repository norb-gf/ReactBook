import {Component} from 'react'
import Products from "./Products";
import UserForm from "./UserForm";
import UserList from "./UserList";
import RatingMenu from "./RatingMenu";
import User from "./User";
import Home from './Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";


class RouterMenu extends Component {
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
            <Route path="/user/:login/:id" component={User} />
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
export default RouterMenu;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}