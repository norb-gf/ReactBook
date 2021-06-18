import {Component} from 'react'
import Products from "./Products";
import UserFormik from "./UserFormik";
import UserCreate from "./UserCreate";
import UserList from "./UserList";
import UserListTable from "./UserListTable";
import RatingMenu from "./RatingMenu";
import User from "./User";
import Home from './Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";


class RouterMenu extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/table" component={UserListTable} />
            <Route exact path="/users/list" component={UserList} />
            <Route path="/user/:login/:id" component={User} />
            <Route path="/user_add/" component={UserCreate} />
            <Route path="/formik" component={UserFormik} />
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