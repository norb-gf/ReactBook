import {Component} from 'react'
import Products from "./Products";
// import UserCreate from "./UserCreate";
import UserForm from "./UserForm";
import UserList from "./UserList";
import UserListTable from "./UserListTable";
import RatingMenu from "./RatingMenu";
import User from "./User";
import Home from './Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "../css/stylesReset.css";
import "../css/stylesGeneral.css";


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/table" component={UserListTable} />
            <Route exact path="/users/list" component={UserList} />
            <Route path="/user/:login/:id" component={User} />
            <Route path="/user_add/" component={UserForm} />
            <Route path="/user_edit/:id" component={UserForm} />
            <Route path="/products" component={Products} />
            <Route path="/rating" component={RatingMenu} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Router;

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}