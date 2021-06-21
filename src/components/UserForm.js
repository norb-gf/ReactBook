import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserService from "../services/UserService";
import "../css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

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
            <Form>
            <div className='user-form-container'>
              <Field type="text" name="id" hidden="true" readOnly />
              <label className='user-form-label'>
                {" "}
                FirstName:
                <Field className='user-form-input'
                  type="text"
                  name="firstName"
                   />
              
                <span>
                  <ErrorMessage className="user-form-error" name="firstName" component="div" />
                </span>
              </label>
              <label className='user-form-label'>
                {" "}
                LastName:
                <Field className='user-form-input'
                  type="text"
                  name="lastName"
                />
                <span>
                  <ErrorMessage className="user-form-error" name="lastName" component="div" />
                </span>
              </label>
              <label className='user-form-label'>
                {" "}
                Email:
                <Field className='user-form-input'
                  type="email"
                  name="emailId"
                />
                <span>
                  <ErrorMessage className="user-form-error" name="emailId" component="div" />
                </span>
              </label>
              <label className='user-form-label'>
                {" "}
                Login:
                <Field className='user-form-input'
                  type="text"
                  name="login"
                />
                <span>
                  <ErrorMessage className="user-form-error" name="login" component="div" />
                </span>
              </label>
              <label className='user-form-label'>
                {" "}
                Senha:
                <Field className='user-form-input'
                  type="password"
                  name="senha"
                  autoComplete="false"
                />
                <span>
                  <ErrorMessage className="user-form-error" name="senha" component="div" />
                </span>
              </label>
              <label className='user-form-label'>
                {" "}
                Repetir a senha:
                <Field className='user-form-input'
                  type="password"
                  name="repeatSenha"
                  autoComplete="false"
                />
                <span>
                  <ErrorMessage className="user-form-error" name="repeatSenha" component="div" />
                </span>
              </label>
            </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-primary btn-user-form-submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="btn btn-danger btn-user-form-cancel"
                  onClick={this.handleCancel}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default UserForm;
