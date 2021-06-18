import { Component } from "react";
import { Form, Table, Button, Modal } from "react-bootstrap";
import UserService from "../services/UserService";
import ReactLoading from "react-loading";
import "../css/styles.css";

import formataData from "../utils/FormataData";

class UserListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchTerm: "",
      isLoading: false,
      errorText: "",
      isError: false,
      showDeleteDialog: false,
      selectedUser: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.add = this.add.bind(this);
    this.delete = this.delete.bind(this);
    this.editUser = this.editUser.bind(this);
    this.openDeleteDialog = this.openDeleteDialog.bind(this);
    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
  }

  componentDidMount() {
    UserService.getUsers().then((res) => {
      this.setState({
        users: res.data,
        isLoading: false,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsersData(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  add(e) {
    this.props.history.push("/user_add");
  }

  editUser(e) {
    this.props.history.push("/user_edit");
  }

  delete() {
    this.setState({ showDeleteDialog: false });
        // console.log("user => " + JSON.stringify(user));
    UserService.deleteUser(this.state.user.id).then((res) => {
      this.props.history.push("/users/table");
    })
    // catch ( error => {
    //   alert("Could not delete the user...");
    //   console.log('Erro....delete ',error);
    // });
  }

  openDeleteDialog(user) {
    this.setState({
      showDeleteDialog: true,
      selectedUser: user,
    });
  }

  closeDeleteDialog() {
    this.setState({
      showDeleteDialog: false,
      selectedUser: {},
    });
  }

  getUsersData(_searchTerm) {
    if (!_searchTerm) {
      UserService.getUsers().then((res) => {
        this.setState({
          users: res.data,
          isLoading: false,
        });
      });
    } else {
      UserService.getUsersByFirstName(_searchTerm).then((res) => {
        this.setState({
          users: res.data,
          isLoading: false,
        });
      });
    }
  }

  render() {
    const listUsers = this.state.users.map((user) => (
      <tr key={user.id}>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.emailId}</td>
        <td>{user.login}</td>
        <td>{formataData(user.dataUltAlt)}</td>
        <td>
          <Button
            onClick={this.editUser.bind(user.id)}
            className="btn btn-warning"
            id="btn-table-list-update"
          >
            Edit
          </Button>
        </td>
        <td>
          <Button
            onClick={this.openDeleteDialog.bind(user)}
            className="btn btn-danger"
            id="btn-table-list-delete"
          >
            Del
          </Button>
        </td>
      </tr>
    ));

    return (
      <div>
        <div>
          <Form inline onSubmit={this.handleSubmit}>
            <Form.Group controlId="formInlineName">
              <Form.Control
                type="text"
                value={this.state.searchTerm}
                placeholder="Enter Search Term"
                onChange={this.handleChange}
              />
              <Button type="submit">Search</Button>
            </Form.Group>
          </Form>
          <span>
            {this.state.isError ? <h5>{this.state.errorText}</h5> : <p></p>}
          </span>
          {/* <h3>{this.state.errorText}</h3> */}
          <h3>List Users Results</h3>
          {this.state.isLoading && (
            <ReactLoading type="spinnigBubbles" color="#444" />
          )}
        </div>
        <div>
          <Button variant="primary" onClick={this.add}>
            Add New User
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Login</th>
                <th>Data Ult Alt</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>{listUsers}</tbody>
          </Table>
          <Modal
            show={this.state.showDeleteDialog}
            onHide={this.closeDeleteDialog}
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete{" "}
                {this.state.selectedUser.username}?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.delete}>Delete</Button>
              <Button onClick={this.closeDeleteDialog}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
export default UserListTable;
