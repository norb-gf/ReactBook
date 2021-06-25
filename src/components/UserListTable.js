import { Component } from "react";
import UserService from "../services/UserService";
import ReactLoading from "react-loading";
import formataData from "../utils/FormataData";

import "../css/stylesUserListTable.css";

class UserListTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchTerm: "",
      isLoading: false,
      errorText: "",
      isError: false,
      selectedUser: {},
      selectedIdex: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUser = this.addUser.bind(this);
    this.delUser = this.delUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  componentDidMount() {
    UserService.getUsersSortById().then((res) => {
      this.setState({
        users: res.data,
        isLoading: false,
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isLoading:true});
    this.getUsersData(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  addUser(e) {
    this.props.history.push(`/user_add/${'Add'}`);
  }

  editUser(user) {
    this.props.history.push(`/user_edit/${'Upd'}/${user.id}`);
  }

  delUser(user) {
    this.props.history.push(`/user_del/${'Del'}/${user.id}`);
  }



  getUsersData(_searchTerm) {
    this.setState({isLoading:true});
    if (!_searchTerm) {
      UserService.getUsersSortById().then((res) => {
        this.setState({
          users: res.data,
          isLoading: false,
        });
      });
    } else {
      UserService.getUsersByFirstNameSorted(_searchTerm).then((res) => {
        this.setState({
          users: res.data,
          isLoading: false,
        });
      });
    }
  }

  render() {
    const listUsers = this.state.users.map((user, index) => (
      <tr key={user.id}>
        <td className="td-center">{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.emailId}</td>
        <td>{user.login}</td>
        <td className="td-center">{formataData(user.dataUltAlt)}</td>
        <td className="td-center">
          <button
            className="btn btn-small"
            onClick={this.editUser.bind(this, user)}
          >
            Upd
          </button>
        </td>
        <td className="td-center">
          <button
            onClick={this.delUser.bind(this, user, index)}
            className="btn btn-small"
          >
            Del
          </button>
        </td>
      </tr>
    ));

    return (
      <div>
        <form>
          <input
            className="input-search"
            type="search"
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Enter Search Term"
            onChange={this.handleChange}
            autoFocus
          />
          <button
            className="btn btn-search"
            type="button"
            onClick={this.handleSubmit}
          >
            Search
          </button>
        </form>
        {this.state.isLoading && (
          <ReactLoading type="spinnigBubbles" color="#444" />
        )}
        <button className="btn place-right"  onClick={this.addUser}>
          Add New
        </button>
        <table className="tb-main">
          <thead>
            <tr id="table-tr">
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Login</th>
              <th>Dt Alt</th>
              <th>Upd</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </table>
      </div>
    );
  }
}
export default UserListTable;