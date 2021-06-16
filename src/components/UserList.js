import { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { Media, Form, Nav, Button } from "react-bootstrap";
import "../css/styles.css";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchTerm: "",
      isLoading: false,
      errorText: "",
      isError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.searchTerm) {
      this.setState({ errorText: "searchTerm is Required...", isError: true });
    } else if (this.state.searchTerm.length < 4) {
      this.setState({ errorText: "searchTerm too short...", isError: true });
    } else {
      this.setState({ errorText: "", isError: false });
      this.setState({ isLoading: true });
      this.getUsersData(this.state.searchTerm);
    }
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  getUsersData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        // console.log(res.data.items);
      });
  }

  render() {
    const listUsers = this.state.data.map((user) => (
      <Media key={user.id}>
        <Nav.Link href={`/user/${user.login}/${user.id}`}>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={user.avatar_url}
            alt="Generic placeholder"
          />
        </Nav.Link>
        <Media.Body>
          <h5>Login:{user.login}</h5>
          <p>Id: {user.id}</p>
        </Media.Body>
      </Media>
    ));
    return (
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
        {listUsers}
      </div>
    );
  }
}
export default UserList;
