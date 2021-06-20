import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UserService from "../services/UserService";

class UserForm extends Component {
  title;
  id;

  constructor(props) {
    super(props);
    this.id = this.props.match.params.id;
    this.title = "New User";
    this.state = {
      user: {},
      id:"",
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
            console.log("ERRO. User not exist.....",error);
            alert("ERRO. getUserById...ComponentDidMount...",error);
          });
      }, 400);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
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
            if (!values.emailId) {
              errors.emailId = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)
            ) {
              errors.emailId = "Invalid emailId address";
            } else if (values.emailId.length < 10) {
              errors.emailId = "Email address too short";
            }

            if (!values.firstName) {
              errors.firstName = "Required";
            } else if (values.firstName.length < 3) {
              errors.firstName = "firstName too short";
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
              <Field type="text" name="id" readOnly />
              <Field type="text" name="firstName" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="firstName" component="div" />
              </span>
              <Field type="text" name="lastName" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="lastName" component="div" />
              </span>
              <Field type="email" name="emailId" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="emailId" component="div" />
              </span>
              <Field type="text" name="login" />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="login" component="div" />
              </span>
              <Field type="password" name="senha" autoComplete='false'/>
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="senha" component="div" />
              </span>
              <Field type="password" name="repeatSenha" autoComplete='false' />
              <span style={{ color: "red", fontWeight: "bold" }}>
                <ErrorMessage name="repeatSenha" component="div" />
              </span>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default UserForm;
