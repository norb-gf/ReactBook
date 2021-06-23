import React, { Component } from "react";
import UserService from "../services/UserService";
import { Button } from "react-bootstrap";
import formataData from '../utils/FormataData'

import "../css/stylesGeneral.css";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      isLoading: false,
      dataformatada: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {
    UserService.getUserById(this.props.match.params.id).then((res) => {
      this.setState({
        user: res.data,
        isLoading: false,
      });
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push("/users/list");
  };

  render() {
    return (
      <div>
        <p>User Id:</p>
        <h5>{this.state.user.id}</h5>
        <p>User Login:</p>
        <h5>{this.state.user.login}</h5>
        <p>First Name: {this.state.user.firstName}</p>
        <p>Last Name: {this.state.user.lastName}</p>
        <p>Email: {this.state.user.emailId}</p>
        <p>Data Ult Alt: {formataData(this.state.user.dataUltAlt)}</p>
        <Button variant="primary" onClick={this.handleClick}>
          Go to Users List
        </Button>
      </div>
    );
  }
}
export default User;
