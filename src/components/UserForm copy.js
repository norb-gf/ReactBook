import React, { Component } from "react";
import { Formik, ErrorMessage } from "formik";
import UserService from "../services/UserService";

import "../css/stylesGeneral.css";
import "../css/stylesUserForm.css";

class UserForm extends Component {
  title;
  id;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.title = "New User";
    this.state = {
      user: {},
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
      login: "",
      senha: "",
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
    if(e.target.name === 'firstName'){
      this.setState({firstName: e.target.value});
    }
    if(e.target.name === 'lastName'){
      this.setState({lastName: e.target.value});
    }
    if(e.target.name === 'emailId'){
      this.setState({emailId: e.target.value});
    }
    if(e.target.name === 'login'){
      this.setState({login: e.target.value});
    }
    if(e.target.name === 'senha'){
      this.setState({senha: e.target.value});
    }
    if(e.target.name === 'repeatSenha'){
      this.setState({repeatSenha: e.target.value});
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit ok',e);
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.props.history.push("/users/table");
  };

  render() {
    return (
      <div className="container-userform">
        <h2>{this.title}</h2>
        <Formik
          enableReinitialize={true}
          initialValues={{
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            login: this.state.login,
            senha: this.state.senha,
            repeatSenha: this.state.repeatSenha,
          }}
          validate={(values) => {
            let errors = {};
            if (!values.firstName) {
              errors.firstName = "Required";
            } else if (values.firstName.length < 3) {
              errors.firstName = "firstName too short";
            }
            if (!values.lastName) {
              errors.lastName = "Required";
            } else if (values.lastName.length < 3) {
              errors.lastName = "lastName too short";
            }

            if (!values.login) {
              errors.login = "Required";
            } else if (values.login.length < 6) {
              errors.login = "login too short. Minimun 6 caracters";
            }

            if (!values.emailId) {
              errors.emailId = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)
            ) {
              errors.emailId = "Invalid emailId address";
            } else if (values.emailId.length < 5) {
              errors.emailId = "Email address too short";
            }

            if (!values.senha) {
              errors.senha = "Required";
            } else if (values.senha.length < 8) {
              errors.senha = "senha too short. Minimun 8 caracters";
            }

            if (!values.repeatSenha) {
              errors.repeatSenha = "Required";
            } else if (values.senha !== values.repeatSenha) {
              errors.repeatSenha = "Senhas are not equal...";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            let userData = {
              id: values.id,
              firstName: values.firstName,
              lastName: values.lastName,
              emailId: values.emailId,
              login: values.login,
              senha: values.senha,
              repeatSenha: values.repeatSenha,
            };
            setTimeout(() => {
              if (this.id) {
                UserService.updateUser(userData, this.id).then((res) => {
                  this.props.history.push("/users/table");
                });
              } else {
                UserService.addUser(userData).then((res) => {
                  this.props.history.push("/users/table");
                });
              }

              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <form>
              <div>
                <div className="user-form-container">
                  <input type="text" name="id" hidden="true" readOnly />
                  <label className="user-form-label">
                    {" "}
                    FirstName:
                    <input
                      className="user-form-input"
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                    />
                    <span>
                      <ErrorMessage
                        className="user-form-error"
                        name="firstName"
                        component="div"
                      />
                    </span>
                  </label>
                  <label className="user-form-label">
                    {" "}
                    LastName:
                    <input
                      className="user-form-input"
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                    />
                    <span>
                      <ErrorMessage
                        className="user-form-error"
                        name="lastName"
                        component="div"
                      />
                    </span>
                  </label>
                  <label className="user-form-label">
                    {" "}
                    Email:
                    <input
                      className="user-form-input"
                      type="email"
                      name="emailId"
                      value={this.state.emailId}
                      onChange={this.handleChange}
                    />
                    <span>
                      <ErrorMessage
                        className="user-form-error"
                        name="emailId"
                        component="div"
                      />
                    </span>
                  </label>
                  <label className="user-form-label">
                    {" "}
                    Login:
                    <input
                      className="user-form-input"
                      type="text"
                      name="login"
                      value={this.state.login}
                      onChange={this.handleChange}
                    />
                    <span>
                      <ErrorMessage
                        className="user-form-error"
                        name="login"
                        component="div"
                      />
                    </span>
                  </label>
                  <label className="user-form-label">
                    {" "}
                    Senha:
                    <input
                      className="user-form-input"
                      type="password"
                      name="senha"
                      autoComplete="false"
                      value={this.state.senha}
                      onChange={this.handleChange}
                    />
                    <span>
                      <ErrorMessage
                        className="user-form-error"
                        name="senha"
                        component="div"
                      />
                    </span>
                  </label>
                  <label className="user-form-label">
                    {" "}
                    Repetir a senha:
                    <input
                      className="user-form-input"
                      type="password"
                      name="repeatSenha"
                      autoComplete="false"
                      value={this.state.repeatSenha}
                      onChange={this.handleChange}
                    />
                    <span>
                      <ErrorMessage
                        className="user-form-error"
                        name="repeatSenha"
                        component="div"
                      />
                    </span>
                  </label>
                </div>
                <div className="btns">
                  <button
                    type="submit"
                    className="btn btn-submit"
                    onClick={this.handleSubmit}
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-cancel"
                    onClick={this.handleCancel}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}
export default UserForm;
