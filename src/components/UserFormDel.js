import React, { Component } from "react";
import UserService from "../services/UserService";

import "../css/stylesGeneral.css";

class UserFormDel extends Component {
  id;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    console.log("this.id....", this.id);
    this.title = "Delete User";
    this.state = {
      id: this.id,
      firstName: "",
      lastName: "",
      emailId: "",
      login: "",
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      UserService.getUserById(this.id)
        .then((res) => {
          this.setState({
            user: res.data,
            id: res.data.id,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            emailId: res.data.emailId,
            login: res.data.login,
          });
        })
        .catch((error) => {
          console.log("ERRO. User not exist.....", error);
          alert("ERRO. getUserById...ComponentDidMount...", error);
        });
    }, 400);
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.history.push("/users/table");
  };

  handleDelete = (e) => {
    e.preventDefault();

    setTimeout(() => {
      UserService.deleteUser(this.id)
        .then((res) => {
          this.props.history.push("/users/table");
        })
        .catch((error) => {
          alert("Could not delete the user...");
        });
    }, 400);
  };

  render() {
    return (
      <div className="container-userform">
        <h2>{this.title}</h2>
        <div className="user-form-container">
          <label className="user-form-label">
            FirstName:
            <input
              className="user-form-input"
              type="text"
              name="firstName"
              value={this.state.firstName}
              readOnly
            />
          </label>
          <label className="user-form-label">
            LastName:
            <input
              className="user-form-input"
              type="text"
              name="lastName"
              value={this.state.lastName}
              readOnly
            />
          </label>
          <label className="user-form-label">
            Email:
            <input
              className="user-form-input"
              type="email"
              name="emailId"
              value={this.state.emailId}
              readOnly
            />
          </label>
          <label className="user-form-label">
            Login:
            <input
              className="user-form-input"
              type="text"
              name="login"
              value={this.state.login}
              readOnly
            />
          </label>
        </div>
        <div>
          <button
            className="btn btn-user-form-submit"
            onClick={this.handleDelete}
          >
            Confirm
          </button>
          <button
            // type="submit"
            className="btn btn-user-form-cancel"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
export default UserFormDel;
