import React, { Component } from "react";
import UserService from "../services/UserService";
import "../css/styles.css";

class UserCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: '',
      firstName: "",
      lastName: "",
      emailId: "",
      login: "",
      senha: "",
      dataUltAlt: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  createUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      login: this.state.login,
      senha: this.state.senha,
      dataUltAlt: this.state.dataUltAlt,
    };
    // console.log("user => " + JSON.stringify(user));
    UserService.addUser(user).then((res) => {
      this.props.history.push("/users/table");
    });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeLoginHandler = (event) => {
    this.setState({ login: event.target.value });
  };
  changeSenhaHandler = (event) => {
    this.setState({ senha: event.target.value });
  };

  cancel() {
    this.props.history.push("/users/table");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card card-tit col-md-6 offset-md-3 offset-md-3">
              <h2 className="text-center">Adicionar Novo Usuário</h2>
              <div className="card-body">
                <form className="formulario">
                  <div className="form-group">
                    <label> Nome: </label>
                    <input
                      name="firstName"
                      className="form-control validar"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group validar">
                    <label> Sobrenome: </label>
                    <input
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      type="email"
                      placeholder="Email xxxxxxxx@xxxx.xxx.xx"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Login: </label>
                    <input
                      name="login"
                      className="form-control"
                      value={this.state.login}
                      onChange={this.changeLoginHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label> Senha: </label>
                    <input
                      type="password"
                      name="senha"
                      className="form-control"
                      value={this.state.senha}
                      onChange={this.changeSenhaHandler}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <button 
                    // type="submit"
                    className="btn btn-success"
                    id="btn-save-create"
                    onClick={this.createUser}
                  >
                    Salvar
                  </button>
                  <button
                    className="btn btn-danger"
                    id="btn-cancel-create"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCreate;
