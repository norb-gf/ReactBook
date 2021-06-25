import React, { Component } from "react";
import UserService from "../services/UserService";
import userFormConsist from "../utils/UserFormConsist";

import "../css/stylesGeneral.css";
import "../css/stylesUserForm.css";

class UserForm extends Component {
  title;
  id;
  werr;

  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.title = "New User";
    this.werr = {};

    this.state = {
      user: {},
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
      login: "",
      senha: "",
      errFirstName: "",
      errLastName: "",
      errEmailIdName: "",
      errLoginName: "",
      errSenhaName: "",
      errRepeatSenhaName: "",
    };

    if (this.id) {
      this.title = "Edit User";
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  }

  componentDidMount() {
    if (this.id) {
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
              senha: res.data.senha,
              repeatSenha: res.data.senha,
            });
          })
          .catch((error) => {
            console.log("ERRO. User not exist.....", error);
            alert("ERRO. getUserById...ComponentDidMount...", error);
          });
      }, 400);
    }
  }

  handleChange = (e) => {
    if (e.target.name === "firstName") {
      this.setState({
        firstName: e.target.value,
        errFirstName: "",
      });
    }
    if (e.target.name === "lastName") {
      this.setState({ lastName: e.target.value, errLastName: "" });
    }
    if (e.target.name === "emailId") {
      this.setState({ emailId: e.target.value, errEmailId: "" });
    }
    if (e.target.name === "login") {
      this.setState({ login: e.target.value, errLogin: "" });
    }
    if (e.target.name === "senha") {
      this.setState({ senha: e.target.value, errSenha: "" });
    }
    if (e.target.name === "repeatSenha") {
      this.setState({ repeatSenha: e.target.value, errRepeatSenha: "" });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      firstName: document.forms["form-main"]["firstName"].value,
      lastName: document.forms["form-main"]["lastName"].value,
      emailId: document.forms["form-main"]["emailId"].value,
      login: document.forms["form-main"]["login"].value,
      senha: document.forms["form-main"]["senha"].value,
      repeatSenha: document.forms["form-main"]["repeatSenha"].value,
    };

    const werro = userFormConsist(values);

    let submitOk = true;

    if (werro.firstName !== "") {
      this.setState({ errFirstName: werro.firstName });
      submitOk = false;
    }
    if (werro.lastName !== "") {
      this.setState({ errLastName: werro.lastName });
      submitOk = false;
    }
    if (werro.emailId !== "") {
      this.setState({ errEmailId: werro.emailId });
      submitOk = false;
    }
    if (werro.login !== "") {
      this.setState({ errLogin: werro.login });
      submitOk = false;
    }
    if (werro.senha !== "") {
      this.setState({ errSenha: werro.senha });
      submitOk = false;
    }
    if (werro.repeatSenha !== "") {
      this.setState({ errRepeatSenha: werro.repeatSenha });
      submitOk = false;
    }

    if (submitOk) {
      setTimeout(() => {
        if (this.id) {
          UserService.updateUser(values, this.id).then((res) => {
            this.props.history.push("/users/table");
          });
        } else {
          UserService.addUser(values).then((res) => {
            this.props.history.push("/users/table");
          });
        }
      }, 400);
    }
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.props.history.push("/users/table");
  };

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <div className="container">
          <form name="form-main" autoComplete="off">
            <div>
              <label>{'.'}</label>
            </div>
            <input type="text" name="id" hidden="true" readOnly />
            <div className="main">
              <div className="item">
                <label>FirstName:</label>
                <input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errFirstName}
                  disabled
                  readOnly
                />
              </div>
              <div className="item">
                <label>LastName:</label>
                <input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errLastName}
                  readOnly
                  disabled
                />
              </div>
              <div className="item">
                <label>Email:</label>
                <input
                  type="email"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errEmailId}
                  readOnly
                  disabled
                />
              </div>
              <div className="item">
                <label>Login:</label>
                <input
                  type="text"
                  name="login"
                  value={this.state.login}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errLogin}
                  readOnly
                  disabled
                />
              </div>
              <div className="item">
                <label>Senha:</label>
                <input
                  type="password"
                  name="senha"
                  autoComplete="false"
                  value={this.state.senha}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errSenha}
                  disabled
                  readOnly
                />
              </div>
              <div className="item">
                <label>Repetir a senha:</label>
                <input
                  type="password"
                  name="repeatSenha"
                  autoComplete="false"
                  value={this.state.repeatSenha}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errRepeatSenha}
                  disabled
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
        <div className="div-btn">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button
            type="submit"
            className="btn btn-cancel"
            onClick={this.handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}
export default UserForm;
