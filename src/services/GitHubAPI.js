import { Component } from "react";
import axios from "axios";
import ReactLoading from 'react-loading';
import { Media } from "react-bootstrap";

class GitHubAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getGitHubData("norb-");
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
        });
        console.log(res.data.items);
      });
  }

  render() {
    const listUsers = this.state.data.map((user) =>
        <Media key={user.id}>
           <a href={user.html_ur}>
              <img 
                width={64}
                height={64}
                className="mr-3"
                src={user.avatar_url}
                alt="Generic placeholder"
              />
           </a>
           <Media.Body>
              <h5>Login:{user.login}</h5>
              <p>Id: {user.id}</p>
           </Media.Body>
        </Media>
    );
    return(
       <div>
          <h3>GitHub Users Results</h3>
          {this.state.isLoading &&
            <ReactLoading type="spinnigBubbles" color="#444" />
          }
          {listUsers}
        </div>
    );
  }
}
export default GitHubAPI;
