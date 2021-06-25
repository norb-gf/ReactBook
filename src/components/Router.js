import {Component} from 'react'
import UserForm from "./UserForm";
import UserListTable from "./UserListTable";
import Home from './Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/table" component={UserListTable} />
            <Route path="/user_add/:oper" component={UserForm} />
            <Route path="/user_edit/:oper/:id" component={UserForm} />
            <Route path="/user_del/:oper/:id" component={UserForm} />
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