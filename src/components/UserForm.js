import React, { Component } from "react";
import UserService from "../services/UserService";
import userFormConsist from "../utils/UserFormConsist";

import "../css/stylesUserForm.css";

class UserForm extends Component {
  title;
  id;
  oper;
  werr;

  constructor(props) {
    super(props);

    this.id = this.props.match.params.id;
    this.oper = this.props.match.params.oper;
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
      isReadOnly: false,
    };

    this.title = "New User";
    if (this.oper === "Upd") {
      this.title = "Edit User";
    } else if (this.oper === "Del") {
      this.title = "Delete User";
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("1......", this.oper);
    if (this.oper !== "Add") {
      console.log("leitura.....");
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

    if (this.oper === "Del") {
      this.setState({ isReadOnly: true });
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

    let submitOk = true;

    const values = {
      firstName: document.forms["form-main"]["firstName"].value,
      lastName: document.forms["form-main"]["lastName"].value,
      emailId: document.forms["form-main"]["emailId"].value,
      login: document.forms["form-main"]["login"].value,
      senha: document.forms["form-main"]["senha"].value,
      repeatSenha: document.forms["form-main"]["repeatSenha"].value,
    };

    if (this.oper !== "Del") {
      const werro = userFormConsist(values);

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
    }

    if (submitOk) {
      this.submitAPI(values);
    }
  };

  submitAPI = (values) => {
    console.log("....submit", this.oper);
    setTimeout(() => {
      if (this.oper === "Upd") {
        UserService.updateUser(values, this.id).then((res) => {
          this.props.history.push("/users/table");
        });
      } else if (this.oper === "Add") {
        UserService.addUser(values).then((res) => {
          this.props.history.push("/users/table");
        });
      } else {
        UserService.deleteUser(this.id).then((res) => {
          this.props.history.push("/users/table");
        });
      }
    }, 400);
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
          <form name="form-main">
            <div>
              <label>{"."}</label>
            </div>
            <div className="main">
              <div className="item">
                <label>FirstName:</label>
                <input
                  className="input-item"
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  readOnly={this.state.isReadOnly}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errFirstName}
                  disabled
                />
              </div>
              <div className="item">
                <label>LastName:</label>
                <input
                  className="input-item"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  readOnly={this.state.isReadOnly}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errLastName}
                  disabled
                />
              </div>
              <div className="item">
                <label>Email:</label>
                <input
                  className="input-item"
                  type="email"
                  name="emailId"
                  value={this.state.emailId}
                  onChange={this.handleChange}
                  readOnly={this.state.isReadOnly}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errEmailId}
                  disabled
                />
              </div>
              <div className="item">
                <label>Login:</label>
                <input
                  className="input-item"
                  type="text"
                  name="login"
                  value={this.state.login}
                  onChange={this.handleChange}
                  readOnly={this.state.isReadOnly}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errLogin}
                  disabled
                />
              </div>
              <div className="item">
                <label>Senha:</label>
                <input
                  className="input-item"
                  type="password"
                  name="senha"
                  autoComplete="false"
                  value={this.state.senha}
                  onChange={this.handleChange}
                  readOnly={this.state.isReadOnly}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errSenha}
                  disabled
                />
              </div>
              <div className="item">
                <label>Repetir a senha:</label>
                <input
                  className="input-item"
                  type="password"
                  name="repeatSenha"
                  autoComplete="false"
                  value={this.state.repeatSenha}
                  onChange={this.handleChange}
                  readOnly={this.state.isReadOnly}
                />
              </div>
              <div>
                <input
                  className="lbl-erro"
                  value={this.state.errRepeatSenha}
                  disabled
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
